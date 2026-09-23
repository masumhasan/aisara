"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { ThreeAudioVisualizer } from "@/components/ambient/ThreeAudioVisualizer";
import { ConsoleLeftPanel } from "@/components/console/ConsoleLeftPanel";
import { ConsoleRightPanel } from "@/components/console/ConsoleRightPanel";
import { useVoiceAssistant, useConnectionState } from "@livekit/components-react";
import { ConnectionState } from "livekit-client";
import { useLiveKitConnection } from "@/components/layout/GlobalLiveKitProvider";

type CoreState = "IDLE" | "LISTENING" | "THINKING" | "SPEAKING" | "TOOL_USE" | "VISION" | "INTERRUPTED";

const STATE_CONFIGS: Record<CoreState, {
  color: string; secondaryColor: string; glow: string;
  speed: number; waveAmp: number; particleSpeed: number;
  label: string; status: string;
}> = {
  IDLE:        { color: "#849495", secondaryColor: "#a3b8b9", glow: "rgba(132,148,149,0.3)",    speed: 0.005, waveAmp: 5,  particleSpeed: 0.4, label: "CORE STATE: IDLE MONITORING",          status: "STANDBY LISTENER" },
  LISTENING:   { color: "#3e90ff", secondaryColor: "#7dd3fc", glow: "rgba(62,144,255,0.4)",     speed: 0.014, waveAmp: 14, particleSpeed: 0.8, label: "CORE STATE: AUDIO INGESTION ACTIVE",   status: "USER VOICE DETECTED" },
  THINKING:    { color: "#ffb869", secondaryColor: "#ffc98a", glow: "rgba(255,184,105,0.44)",   speed: 0.03, waveAmp: 9, particleSpeed: 1.3, label: "CORE STATE: INFERENCE REASONING",      status: "CROSS-ATTENTION COMPUTATION" },
  SPEAKING:    { color: "#00f0ff", secondaryColor: "#38bdf8", glow: "rgba(0,240,255,0.4)",      speed: 0.02,  waveAmp: 24, particleSpeed: 1.1, label: "CORE STATE: SPEAKING REALTIME",        status: "VOICE SYNTHESIS ENGAGED" },
  TOOL_USE:    { color: "#ffb869", secondaryColor: "#fbbf24", glow: "rgba(255,154,0,0.5)",      speed: 0.026, waveAmp: 18, particleSpeed: 1.6, label: "CORE STATE: SUB-AGENT TOOL EXECUTION", status: "DISPATCHING KINETIC TOOLS" },
  VISION:      { color: "#a855f7", secondaryColor: "#c084fc", glow: "rgba(168,85,247,0.4)",     speed: 0.016, waveAmp: 11, particleSpeed: 0.9, label: "CORE STATE: SPATIAL OPTICAL SCANNING", status: "OPTICAL RECOGNITION LOCK" },
  INTERRUPTED: { color: "#ff4d4d", secondaryColor: "#fb7185", glow: "rgba(255,77,77,0.4)",      speed: 0.04, waveAmp: 28, particleSpeed: 2.2, label: "CORE STATE: SESSION INTERRUPT TRIGGER",status: "ARBITRATION OVERRIDE" },
};

// Particle type for the holographic orb
type Particle = { x: number; y: number; radius: number; alpha: number; speedX: number; speedY: number };

export default function ConsolePage() {
  const [coreState, setCoreState] = useState<CoreState>("IDLE");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const [toolInput, setToolInput] = useState("");
  const [sysClock, setSysClock] = useState("1729482104.28");

  // LiveKit hooks
  const { state: agentState } = useVoiceAssistant();
  const connectionState = useConnectionState();
  const { shouldConnect, setShouldConnect } = useLiveKitConnection();

  useEffect(() => {
    // Sync UI coreState with LiveKit agentState
    if (connectionState !== ConnectionState.Connected) {
      setCoreState("IDLE");
      return;
    }

    switch (agentState) {
      case "listening":
        setCoreState("LISTENING");
        break;
      case "thinking":
        setCoreState("THINKING");
        break;
      case "speaking":
        setCoreState("SPEAKING");
        break;
      default:
        setCoreState("IDLE");
        break;
    }
  }, [agentState, connectionState]);

  // Init particles
  useEffect(() => {
    particlesRef.current = Array.from({ length: 117 }, () => {
      return {
        x: (Math.random() - 0.5) * 500,
        y: (Math.random() - 0.5) * 500,
        radius: Math.random() * 2 + 0.6,
        alpha: Math.random() * 0.85 + 0.15,
        speedX: (Math.random() - 0.5) * 0.9,
        speedY: (Math.random() - 0.5) * 0.9
      };
    });

    const clockInterval = setInterval(() => {
      setSysClock((Date.now() / 1000).toFixed(2));
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // Canvas animation loop for intense glowing holographic orb
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cfg = STATE_CONFIGS[coreState];

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const t = tRef.current;
      ctx.clearRect(0, 0, W, H);

      // 1. Central Glowing Spherical Halo
      const radGlow = ctx.createRadialGradient(cx, cy, 15, cx, cy, 160);
      radGlow.addColorStop(0, cfg.color);
      radGlow.addColorStop(0.35, cfg.glow);
      radGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = radGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.fill();

      // 2. High-Tech Concentric Gyroscopic Rings
      ctx.save();
      ctx.translate(cx, cy);

      // Outer Rotating Ticked Ring
      ctx.rotate(t);
      ctx.strokeStyle = cfg.color;
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 14]);
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.stroke();

      // Middle Counter-Rotating Ring with Brackets
      ctx.rotate(-t * 2.1);
      ctx.lineWidth = 1.6;
      ctx.setLineDash([25, 45]);
      ctx.beginPath();
      ctx.arc(0, 0, 175, 0, Math.PI * 2);
      ctx.stroke();

      // Core Gyroscopic Ellipse Layer A
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.ellipse(0, 0, 195, 80, t * 0.8, 0, Math.PI * 2);
      ctx.strokeStyle = cfg.color;
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Core Gyroscopic Ellipse Layer B
      ctx.beginPath();
      ctx.ellipse(0, 0, 195, 80, -t * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = cfg.secondaryColor;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.restore();

      // 3. Floating Orbital Particles
      ctx.save();
      ctx.translate(cx, cy);
      particlesRef.current.forEach((p, idx) => {
        p.x += p.speedX * cfg.particleSpeed;
        p.y += p.speedY * cfg.particleSpeed;

        if (p.x > 260) p.x = -260;
        if (p.x < -260) p.x = 260;
        if (p.y > 260) p.y = -260;
        if (p.y < -260) p.y = 260;

        // Hide the extra 30% particles unless in THINKING or TOOL_USE state
        if (idx >= 90 && coreState !== "THINKING" && coreState !== "TOOL_USE") return;

        ctx.fillStyle = cfg.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
      ctx.globalAlpha = 1.0;
      
      // 4. Live Audio Frequency Bars update & 5. Sine Waveform Oscillation handled separately in state/refs.

      tRef.current += cfg.speed;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [coreState]);

  const cfg = STATE_CONFIGS[coreState];

  const toolSteps = [
    { id: "01", name: "READ_EMAILS",       status: "RESOLVED (32ms)", detail: "3 threads indexed from SecOps", active: false, done: true },
    { id: "02", name: "PARSE_ATTACHMENT",  status: "IN PROGRESS",     detail: "Extracting CVE vulnerability index from audit_v2.pdf",   active: true,  done: false },
    { id: "03", name: "DRAFT_SUMMARY",     status: "QUEUED",          detail: "target: #dispatch-buffer (markdown)",                    active: false, done: false },
  ];

  const [audioBarsHeights, setAudioBarsHeights] = useState<number[]>(Array(24).fill(25));
  const [wavePath1, setWavePath1] = useState("");
  const [wavePath2, setWavePath2] = useState("M0,18 Q50,36 100,18 T200,18 T300,18 T400,18");

  useEffect(() => {
    let animFrame: number;
    const updateAudioAndWave = () => {
      const time = Date.now() * 0.005;
      const currentCfg = STATE_CONFIGS[coreState];
      const amp = currentCfg.waveAmp;
      
      const p1 = Math.sin(time) * amp + 18;
      const p2 = Math.cos(time * 1.4) * amp + 18;
      setWavePath1(`M0,18 Q50,${p1} 100,18 T200,18 T300,${p2} T400,18`);
      
      if (Math.random() > 0.35) {
        setAudioBarsHeights(prev => prev.map(() => {
          const mult = coreState === 'SPEAKING' ? 95 : (coreState === 'LISTENING' ? 65 : (coreState === 'TOOL_USE' ? 80 : 30));
          return Math.floor(Math.random() * mult + 12);
        }));
      }
      animFrame = requestAnimationFrame(updateAudioAndWave);
    };
    animFrame = requestAnimationFrame(updateAudioAndWave);
    return () => cancelAnimationFrame(animFrame);
  }, [coreState]);

  if (!shouldConnect) {
    return (
      <div className="min-h-screen w-full bg-[#02050e] flex flex-col items-center justify-center relative overflow-hidden text-center z-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-holo-cyan/10 via-[#02050e] to-[#02050e] pointer-events-none"></div>
        <div className="w-[400px] h-[400px] absolute rounded-full border border-holo-cyan/20 animate-[spin_60s_linear_infinite] border-dashed"></div>
        <div className="w-[300px] h-[300px] absolute rounded-full border border-holo-cyan/10 animate-[spin_40s_linear_infinite_reverse]"></div>
        
        <h1 className="font-sans font-extrabold text-[32px] text-white tracking-[0.25em] drop-shadow-[0_0_16px_rgba(0,240,255,0.6)] mb-2 relative z-10">
          SARA // CORE
        </h1>
        <p className="font-telemetry text-[11px] text-holo-cyan tracking-[0.2em] mb-12 relative z-10">
          SECURE RTC CHANNEL ESTABLISHMENT
        </p>

        <button
          onClick={() => setShouldConnect(true)}
          className="relative z-10 px-12 py-4 bg-[#0a1f3d]/80 backdrop-blur-md text-cyan-300 font-telemetry font-bold text-[14px] tracking-[0.3em] rounded-full border border-holo-cyan/50 hover:bg-holo-cyan/20 hover:text-white transition-all shadow-[0_0_30px_rgba(0,240,255,0.2),inset_0_0_15px_rgba(0,240,255,0.1)] hover:scale-105 active:scale-95"
        >
          ENTER MATRIX
        </button>
      </div>
    );
  }

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen text-slate-200 w-full px-4 lg:px-6 relative z-10">

        {/* HUD Context Bar */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 pb-3 mb-4 border-b border-holo-cyan/15">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-holo-cyan shadow-[0_0_10px_#00f0ff] animate-ping"></span>
              <span className="font-telemetry text-[13px] text-holo-cyan font-bold tracking-[0.2em] uppercase">SARA // CORE MATRIX v4.8</span>
            </div>
            <span className="font-telemetry text-[10px] text-slate-400 px-2.5 py-0.5 rounded bg-[#071329] border border-holo-cyan/30">NODE: AP-NORTHEAST-1</span>
            <span className="hidden xl:inline font-telemetry text-[10px] text-slate-400 tracking-wider">RTC CHANNEL: 0x9F42A1</span>
          </div>

          {/* State Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#040c1a]/95 border border-holo-cyan/30 backdrop-blur-xl shadow-[0_0_24px_rgba(0,0,0,0.8)] overflow-x-auto max-w-full">
            {(Object.keys(STATE_CONFIGS) as CoreState[]).map(state => {
              const isActive = coreState === state;
              const isAmber = state === "TOOL_USE";
              const isRed = state === "INTERRUPTED";
              return (
                <button
                  key={state}
                  className={`px-3.5 py-1 rounded-full font-telemetry text-[10px] uppercase tracking-wider transition-all whitespace-nowrap font-semibold
                    ${isActive
                      ? isAmber ? "bg-amber-500/25 text-amber-300 border border-amber-500/50 shadow-[0_0_14px_rgba(245,158,11,0.5)]"
                        : isRed ? "bg-rose-600/30 text-rose-300 border border-rose-500/60 shadow-[0_0_16px_rgba(244,63,94,0.6)]"
                        : "bg-holo-cyan/25 text-holo-cyan border border-holo-cyan/50 shadow-[0_0_14px_rgba(0,240,255,0.5)]"
                      : isAmber ? "text-amber-500 hover:text-amber-300"
                      : isRed ? "text-rose-400 hover:text-rose-300"
                      : "text-slate-400 hover:text-holo-cyan"
                    }`}
                  onClick={() => setCoreState(state)}
                >
                  {state === "TOOL_USE" ? "Tool Exec" : state === "VISION" ? "Vision Feed" : state === "INTERRUPTED" ? "Interrupt" : state.charAt(0) + state.slice(1).toLowerCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Command Deck */}
        <div className="grid grid-cols-12 gap-5 items-start w-full">

          {/* ======= LEFT: Neural Telemetry + Optical Vision ======= */}
          <ConsoleLeftPanel 
            coreState={coreState} 
            cfg={cfg} 
            audioBarsHeights={audioBarsHeights} 
          />

          {/* ======= CENTER: Holographic AI Core (60%) ======= */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[580px] lg:min-h-[660px] order-1 lg:order-2 px-2">

            {/* Compass frame rings */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[530px] h-[530px] max-w-full max-h-full rounded-full border border-holo-cyan/20 border-dashed animate-spin" style={{ animationDuration: "120s" }}></div>
              <div className="absolute w-[450px] h-[450px] max-w-full max-h-full rounded-full border border-holo-cyan/25 flex items-center justify-center">
                <span className="absolute -top-3.5 font-telemetry text-[10px] text-holo-cyan tracking-widest font-bold">N 000°</span>
                <span className="absolute -bottom-3.5 font-telemetry text-[10px] text-holo-cyan tracking-widest font-bold">S 180°</span>
                <span className="absolute -left-5 font-telemetry text-[10px] text-holo-cyan tracking-widest font-bold">W 270°</span>
                <span className="absolute -right-5 font-telemetry text-[10px] text-holo-cyan tracking-widest font-bold">E 090°</span>
              </div>
            </div>

            {/* Canvas */}
            <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                width={700} height={700}
                title="Click to cycle AI state"
                onClick={() => {
                  const states = Object.keys(STATE_CONFIGS) as CoreState[];
                  setCoreState(states[(states.indexOf(coreState) + 1) % states.length]);
                }}
              />

              {/* Floating Pill Capsule at Core Center */}
              <div
                className="absolute pointer-events-none flex flex-col items-center text-center backdrop-blur-md px-6 py-3 rounded-full border transition-all duration-500 bg-[#02050e]/85"
                style={{
                  borderColor: cfg.color,
                  boxShadow: `0 0 35px ${cfg.glow}, inset 0 0 15px ${cfg.glow}`,
                }}
              >
                <span className="font-telemetry text-[9px] uppercase tracking-[0.25em] font-bold" style={{ color: cfg.color }}>
                  {cfg.label}
                </span>
                <span className="font-sans font-extrabold text-[22px] text-white tracking-[0.18em] drop-shadow-[0_0_16px_rgba(255,255,255,0.9)]">
                  SARA // ORB-4
                </span>
                <span className="font-telemetry text-[10px] text-sky-300 font-medium tracking-wider">
                  SYNC // 842.10 MHz
                </span>
              </div>
            </div>

          </div>

          {/* ======= RIGHT: RTC Transcript + Tool Execution ======= */}
          <ConsoleRightPanel 
            toolSteps={toolSteps} 
            toolInput={toolInput} 
            setToolInput={setToolInput} 
          />
        </div>


        {/* Full-width 3D Audio Visualizer Canvas */}
        <ThreeAudioVisualizer color={cfg.color} secondaryColor={cfg.secondaryColor} coreState={coreState} />
      </div>
    </ConsoleLayout>
  );
}
