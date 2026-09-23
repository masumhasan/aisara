"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeNeuralOrbProps {
  className?: string;
  isAuthenticating?: boolean;
}

export const ThreeNeuralOrb: React.FC<ThreeNeuralOrbProps> = ({
  className = "",
  isAuthenticating = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 180;
    const height = container.clientHeight || 180;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 3.2;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const group = new THREE.Group();
    scene.add(group);

    // 1. Core Sphere Particles (Icosahedron based)
    const particleGeometry = new THREE.IcosahedronGeometry(1.05, 3);
    const pos = particleGeometry.attributes.position;
    const count = pos.count;

    const colors = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00f0ff");
    const gold = new THREE.Color("#ffb869");
    const blue = new THREE.Color("#3e90ff");

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      const chosenColor = rand > 0.65 ? gold : rand > 0.3 ? cyan : blue;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // 2. Wireframe Synaptic Web
    const wireGeometry = new THREE.IcosahedronGeometry(1.02, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    group.add(wireMesh);

    // 3. Inner Glowing Pulsing Sphere
    const innerGeo = new THREE.SphereGeometry(0.42, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00dbe9,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Interactive mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 1.5;
      mouseY = (event.clientY / innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const speedMultiplier = isAuthenticating ? 2.5 : 1.0;

      // Group rotation
      group.rotation.y = elapsedTime * 0.25 * speedMultiplier + targetX * 0.8;
      group.rotation.x = elapsedTime * 0.12 * speedMultiplier + targetY * 0.8;

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 3) * 0.08;
      innerSphere.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, [isAuthenticating]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
};
