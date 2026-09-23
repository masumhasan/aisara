"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import SimplexNoise from "simplex-noise";

interface ThreeAudioVisualizerProps {
  color: string;
  secondaryColor: string;
  coreState: string;
}

export const ThreeAudioVisualizer: React.FC<ThreeAudioVisualizerProps> = ({ color, secondaryColor, coreState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const lightsRef = useRef<{ l1: THREE.PointLight; l2: THREE.PointLight; l3: THREE.PointLight; l4: THREE.PointLight } | null>(null);

  // Keep colors updated
  useEffect(() => {
    if (lightsRef.current) {
      const c1 = new THREE.Color(color);
      const c2 = new THREE.Color(secondaryColor);
      lightsRef.current.l1.color = c1;
      lightsRef.current.l2.color = c1;
      lightsRef.current.l3.color = c2;
      lightsRef.current.l4.color = c2;
      if (lightsRef.current.ambient) {
        lightsRef.current.ambient.color = c1;
      }
    }
  }, [color, secondaryColor]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Settings
    const xyCoef = 89; // Noise Coef 12
    let baseZCoef = 3.25; // Height Coef 13

    const conf = {
      fov: 75,
      cameraZ: 60, // Adjusted to bring plane closer
      xyCoef: xyCoef,
      zCoef: baseZCoef,
      lightIntensity: 1.5, // Increased for brighter colors
    };

    let renderer: THREE.WebGLRenderer,
        scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        plane: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>,
        light1: THREE.PointLight,
        light2: THREE.PointLight,
        light3: THREE.PointLight,
        light4: THREE.PointLight;

    let width: number, height: number, wWidth: number, wHeight: number;
    const simplex = new SimplexNoise();
    let animFrame: number;
    let audioCtx: AudioContext | null = null;
    let analyser: AnalyserNode | null = null;
    let dataArray: Uint8Array | null = null;
    let micStream: MediaStream | null = null;

    const initMic = async () => {
      try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const source = audioCtx.createMediaStreamSource(micStream);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        dataArray = new Uint8Array(analyser.fftSize);
        source.connect(analyser);
      } catch (err) {
        console.warn("Microphone access denied or not available.", err);
      }
    };

    const init = () => {
      width = containerRef.current!.clientWidth;
      height = containerRef.current!.clientHeight;

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      containerRef.current!.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(conf.fov, width / height, 0.1, 1000);
      camera.position.z = conf.cameraZ;

      scene = new THREE.Scene();
      const initialColor = new THREE.Color(color);
      const initialSecColor = new THREE.Color(secondaryColor);
      
      // Ambient light colored to ensure the base plane matches the state color
      const ambientLight = new THREE.AmbientLight(initialColor, 0.4);
      scene.add(ambientLight);

      const getRendererSize = () => {
        const cam = new THREE.PerspectiveCamera(camera.fov, camera.aspect);
        const vFOV = (cam.fov * Math.PI) / 180;
        const h = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
        const w = h * cam.aspect;
        return [w, h];
      };

      const size = getRendererSize();
      wWidth = size[0];
      wHeight = size[1];

      const r = 30, y = 10, lightDistance = 500;
      
      light1 = new THREE.PointLight(initialColor, conf.lightIntensity, lightDistance);
      light1.position.set(0, y, r);
      light1.decay = 0.5; // Lower decay so it travels further
      scene.add(light1);

      light2 = new THREE.PointLight(initialColor, conf.lightIntensity, lightDistance);
      light2.position.set(0, -y, -r);
      light2.decay = 0.5;
      scene.add(light2);

      light3 = new THREE.PointLight(initialSecColor, conf.lightIntensity, lightDistance);
      light3.position.set(r, y, 0);
      light3.decay = 0.5;
      scene.add(light3);

      light4 = new THREE.PointLight(initialSecColor, conf.lightIntensity, lightDistance);
      light4.position.set(-r, y, 0);
      light4.decay = 0.5;
      scene.add(light4);

      lightsRef.current = { l1: light1, l2: light2, l3: light3, l4: light4, ambient: ambientLight } as any;

      const mat = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
      });
      const segX = Math.round(wWidth / 2);
      const segY = Math.round(wHeight / 2);
      const geo = new THREE.PlaneGeometry(
        wWidth * 1.5, // Ensure it covers the edges
        wHeight * 1.5,
        Math.max(segX, 10),
        Math.max(segY, 10)
      );
      plane = new THREE.Mesh(geo, mat);
      plane.rotation.x = -Math.PI / 2 - 0.2;
      plane.position.y = -15; // Raised slightly to fit in the bottom container
      scene.add(plane);
    };

    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.0002;

      // Audio reactivity
      let audioBoost = 0;
      if (analyser && dataArray) {
        analyser.getByteTimeDomainData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) {
          const v = (dataArray[i] - 128) / 128;
          sum += v * v;
        }
        const rms = Math.sqrt(sum / dataArray.length);
        const percent = Math.min(1, rms * 5);
        audioBoost = percent * 40;
      }

      conf.zCoef = baseZCoef + audioBoost; 

      if (plane && plane.geometry) {
        const pos = plane.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < pos.length; i += 3) {
          pos[i + 2] = simplex.noise3D(
            pos[i] / conf.xyCoef,
            pos[i + 1] / conf.xyCoef,
            time
          ) * conf.zCoef;
        }
        plane.geometry.attributes.position.needsUpdate = true;
      }

      const lightTime = Date.now() * 0.001;
      const d = 50;
      light1.position.x = Math.sin(lightTime * 0.1) * d;
      light1.position.z = Math.cos(lightTime * 0.2) * d;
      light2.position.x = Math.cos(lightTime * 0.3) * d;
      light2.position.z = Math.sin(lightTime * 0.4) * d;
      light3.position.x = Math.sin(lightTime * 0.5) * d;
      light3.position.z = Math.sin(lightTime * 0.6) * d;
      light4.position.x = Math.sin(lightTime * 0.7) * d;
      light4.position.z = Math.cos(lightTime * 0.8) * d;

      renderer.render(scene, camera);
    };

    const onResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    initMic();
    init();
    animate();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animFrame);
      if (renderer) renderer.dispose();
      if (containerRef.current && renderer?.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      lightsRef.current = null;
      if (micStream) micStream.getTracks().forEach(t => t.stop());
      if (audioCtx && audioCtx.state !== 'closed') audioCtx.close();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute bottom-0 left-0 w-full h-[400px] pointer-events-none z-0"
      style={{
        maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
      }}
    />
  );
};
