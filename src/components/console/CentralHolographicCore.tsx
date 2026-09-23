"use client";

import React, { useEffect, useRef } from "react";

type CoreState =
  | "IDLE"
  | "LISTENING"
  | "THINKING"
  | "SPEAKING"
  | "TOOL_USE"
  | "VISION"
  | "INTERRUPTED";

const STATE_CONFIGS: Record<
  CoreState,
  {
    color: string;
    secondaryColor: string;
    glow: string;
    speed: number;
    waveAmp: number;
    particleSpeed: number;
    label: string;
    status: string;
  }
> = {
  IDLE: {
    color: "#00f0ff",
    secondaryColor: "#38bdf8",
    glow: "rgba(0, 240, 255, 0.25)",
    speed: 0.005,
    waveAmp: 5,
    particleSpeed: 0.4,
    label: "CORE STATE: IDLE MONITORING",
    status: "STANDBY LISTENER",
  },
  LISTENING: {
    color: "#00f0ff",
    secondaryColor: "#7dd3fc",
    glow: "rgba(0, 240, 255, 0.55)",
    speed: 0.014,
    waveAmp: 14,
    particleSpeed: 0.8,
    label: "CORE STATE: AUDIO INGESTION ACTIVE",
    status: "USER VOICE DETECTED",
  },
  THINKING: {
    color: "#93c5fd",
    secondaryColor: "#60a5fa",
    glow: "rgba(147, 197, 253, 0.6)",
    speed: 0.03,
    waveAmp: 9,
    particleSpeed: 1.3,
    label: "CORE STATE: INFERENCE REASONING",
    status: "CROSS-ATTENTION COMPUTATION",
  },
  SPEAKING: {
    color: "#00f0ff",
    secondaryColor: "#38bdf8",
    glow: "rgba(0, 240, 255, 0.75)",
    speed: 0.02,
    waveAmp: 24,
    particleSpeed: 1.1,
    label: "CORE STATE: SPEAKING REALTIME",
    status: "VOICE SYNTHESIS ENGAGED",
  },
  TOOL_USE: {
    color: "#f59e0b",
    secondaryColor: "#fbbf24",
    glow: "rgba(245, 158, 11, 0.75)",
    speed: 0.026,
    waveAmp: 18,
    particleSpeed: 1.6,
    label: "CORE STATE: SUB-AGENT TOOL EXECUTION",
    status: "DISPATCHING KINETIC TOOLS",
  },
  VISION: {
    color: "#34d399",
    secondaryColor: "#00f0ff",
    glow: "rgba(52, 211, 153, 0.65)",
    speed: 0.016,
    waveAmp: 11,
    particleSpeed: 0.9,
    label: "CORE STATE: SPATIAL OPTICAL SCANNING",
    status: "OPTICAL RECOGNITION LOCK",
  },
  INTERRUPTED: {
    color: "#ff4d4d",
    secondaryColor: "#fb7185",
    glow: "rgba(255, 77, 77, 0.85)",
    speed: 0.04,
    waveAmp: 28,
    particleSpeed: 2.2,
    label: "CORE STATE: SESSION INTERRUPT TRIGGER",
    status: "ARBITRATION OVERRIDE",
  },
};

interface CentralHolographicCoreProps {
  currentState: CoreState;
  onStateChange: (state: CoreState) => void;
}

export const CentralHolographicCore: React.FC<CentralHolographicCoreProps> = ({
  currentState,
  onStateChange,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wave1Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;
    const particles = Array.from({ length: 90 }).map(() => ({
      x: (Math.random() - 0.5) * 500,
      y: (Math.random() - 0.5) * 500,
      radius: Math.random() * 2 + 0.6,
      alpha: Math.random() * 0.85 + 0.15,
      speedX: (Math.random() - 0.5) * 0.9,
      speedY: (Math.random() - 0.5) * 0.9,
    }));

    const render = () => {
      const conf = STATE_CONFIGS[currentState];
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      rotationAngle += conf.speed;

      // 1. Central Glowing Spherical Halo
      const radGlow = ctx.createRadialGradient(cx, cy, 15, cx, cy, 160);
      radGlow.addColorStop(0, conf.color);
      radGlow.addColorStop(0.35, conf.glow);
      radGlow.addColorStop(1, "transparent");
      ctx.fillStyle = radGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.fill();

      // 2. High-Tech Concentric Gyroscopic Rings
      ctx.save();
      ctx.translate(cx, cy);

      // Outer Rotating Ticked Ring
      ctx.rotate(rotationAngle);
      ctx.strokeStyle = conf.color;
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 14]);
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.stroke();

      // Middle Counter-Rotating Ring with Brackets
      ctx.rotate(-rotationAngle * 2.1);
      ctx.lineWidth = 1.6;
      ctx.setLineDash([25, 45]);
      ctx.beginPath();
      ctx.arc(0, 0, 175, 0, Math.PI * 2);
      ctx.stroke();

      // Core Gyroscopic Ellipse Layer A
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.ellipse(0, 0, 195, 80, rotationAngle * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = conf.color;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Core Gyroscopic Ellipse Layer B
      ctx.beginPath();
      ctx.ellipse(0, 0, 195, 80, -rotationAngle * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = conf.secondaryColor;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore();

      // 3. Floating Orbital Particles
      ctx.save();
      ctx.translate(cx, cy);
      particles.forEach((p) => {
        p.x += p.speedX * conf.particleSpeed;
        p.y += p.speedY * conf.particleSpeed;

        if (p.x > 260) p.x = -260;
        if (p.x < -260) p.x = 260;
        if (p.y > 260) p.y = -260;
        if (p.y < -260) p.y = 260;

        ctx.fillStyle = conf.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // Sine Waveform
      const wave1 = wave1Ref.current;
      if (wave1) {
        const amp = conf.waveAmp;
        const time = Date.now() * 0.005;
        const p1 = Math.sin(time) * amp + 18;
        const p2 = Math.cos(time * 1.4) * amp + 18;
        wave1.setAttribute(
          "d",
          `M0,18 Q50,${p1} 100,18 T200,18 T300,${p2} T400,18`
        );
        wave1.setAttribute("stroke", conf.color);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentState]);

  const conf = STATE_CONFIGS[currentState];

  return (
    <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[580px] lg:min-h-[660px] order-1 lg:order-2 px-2">
      {/* Outer Compass Reticle Ring Frame */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Outermost Decorative Ticked Orbit */}
        <div
          className="w-[520px] h-[520px] max-w-full max-h-full rounded-full border border-holo-cyan/15 border-dashed animate-spin"
          style={{ animationDuration: "120s" }}
        ></div>
        {/* Secondary Gyroscopic Ring */}
        <div className="w-[440px] h-[440px] max-w-full max-h-full rounded-full border border-holo-cyan/20 absolute flex items-center justify-center">
          {/* Precision Tick Marks */}
          <span className="absolute -top-3.5 font-telemetry text-[10px] text-holo-cyan/70 tracking-widest font-bold">
            N 000°
          </span>
          <span className="absolute -bottom-3.5 font-telemetry text-[10px] text-holo-cyan/70 tracking-widest font-bold">
            S 180°
          </span>
          <span className="absolute -left-5 font-telemetry text-[10px] text-holo-cyan/70 tracking-widest font-bold">
            W 270°
          </span>
          <span className="absolute -right-5 font-telemetry text-[10px] text-holo-cyan/70 tracking-widest font-bold">
            E 090°
          </span>
        </div>
      </div>

      {/* Central Interactive Holographic Orb Canvas */}
      <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          height={700}
          width={700}
          title="Click to pulse AI core"
          onClick={() =>
            onStateChange(currentState === "SPEAKING" ? "TOOL_USE" : "SPEAKING")
          }
        ></canvas>

        {/* Floating Holographic Badge at Core Center */}
        <div className="absolute pointer-events-none flex flex-col items-center text-center backdrop-blur-md px-5 py-2.5 rounded-full border border-holo-cyan/40 bg-[#02050e]/75 shadow-[0_0_24px_rgba(0,240,255,0.25)]">
          <span
            className="font-telemetry text-[9px] uppercase tracking-[0.25em] font-bold"
            style={{ color: conf.color }}
          >
            {conf.label}
          </span>
          <span className="font-sans font-extrabold text-[20px] text-white tracking-[0.18em] drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            SARA // ORB-4
          </span>
          <span className="font-telemetry text-[10px] text-sky-300 font-medium tracking-wider">
            SYNC // 842.10 MHz
          </span>
        </div>
      </div>

      {/* Bottom Audio Reactive Sine Wave Filaments */}
      <div className="w-full max-w-lg mt-3 flex flex-col items-center">
        <div className="w-full flex items-center justify-between font-telemetry text-[10px] text-holo-muted mb-1.5 px-2">
          <span className="uppercase tracking-widest">SPATIAL RESONANCE</span>
          <span
            className="font-bold tracking-wider"
            style={{ color: conf.color }}
          >
            {conf.status}
          </span>
          <span className="uppercase tracking-widest">LATERAL FIELD</span>
        </div>
        <div className="w-full h-9 flex items-center justify-center relative overflow-hidden bg-[#030914]/90 rounded border border-holo-cyan/25 shadow-[inset_0_0_12px_rgba(0,240,255,0.08)]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 36">
            <path
              ref={wave1Ref}
              fill="none"
              stroke={conf.color}
              strokeOpacity="0.9"
              strokeWidth="1.8"
            ></path>
            <path
              d="M0,18 Q50,36 100,18 T200,18 T300,18 T400,18"
              fill="none"
              stroke="#38BDF8"
              strokeOpacity="0.6"
              strokeWidth="1.3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
