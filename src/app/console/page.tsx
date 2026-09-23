"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type CoreState = "IDLE" | "LISTENING" | "THINKING" | "SPEAKING" | "TOOL_USE" | "VISION" | "INTERRUPTED";

const STATE_CONFIGS: Record<CoreState, {
  color: string; secondaryColor: string; glow: string;
  speed: number; waveAmp: number; particleSpeed: number;
  label: string; status: string;
}> = {
  IDLE:        { color: "#00f0ff", secondaryColor: "#38bdf8", glow: "rgba(0, 240, 255, 0.25)",    speed: 0.005, waveAmp: 5,  particleSpeed: 0.4, label: "CORE STATE: IDLE MONITORING",          status: "STANDBY LISTENER" },
  LISTENING:   { color: "#00f0ff", secondaryColor: "#7dd3fc", glow: "rgba(0, 240, 255, 0.55)",    speed: 0.014, waveAmp: 14, particleSpeed: 0.8, label: "CORE STATE: AUDIO INGESTION ACTIVE",   status: "USER VOICE DETECTED" },
  THINKING:    { color: "#93c5fd", secondaryColor: "#60a5fa", glow: "rgba(147, 197, 253, 0.6)",  speed: 0.03, waveAmp: 9, particleSpeed: 1.3, label: "CORE STATE: INFERENCE REASONING",      status: "CROSS-ATTENTION COMPUTATION" },
  SPEAKING:    { color: "#00f0ff", secondaryColor: "#38bdf8", glow: "rgba(0, 240, 255, 0.75)",    speed: 0.02,  waveAmp: 24, particleSpeed: 1.1, label: "CORE STATE: SPEAKING REALTIME",        status: "VOICE SYNTHESIS ENGAGED" },
  TOOL_USE:    { color: "#f59e0b", secondaryColor: "#fbbf24", glow: "rgba(245, 158, 11, 0.75)",   speed: 0.026, waveAmp: 18, particleSpeed: 1.6, label: "CORE STATE: SUB-AGENT TOOL EXECUTION", status: "DISPATCHING KINETIC TOOLS" },
  VISION:      { color: "#34d399", secondaryColor: "#00f0ff", glow: "rgba(52, 211, 153, 0.65)",   speed: 0.016, waveAmp: 11, particleSpeed: 0.9, label: "CORE STATE: SPATIAL OPTICAL SCANNING", status: "OPTICAL RECOGNITION LOCK" },
  INTERRUPTED: { color: "#ff4d4d", secondaryColor: "#fb7185", glow: "rgba(255, 77, 77, 0.85)",    speed: 0.04, waveAmp: 28, particleSpeed: 2.2, label: "CORE STATE: SESSION INTERRUPT TRIGGER",status: "ARBITRATION OVERRIDE" },
};

// Particle type for the holographic orb
type Particle = { x: number; y: number; radius: number; alpha: number; speedX: number; speedY: number };

export default function ConsolePage() {
  const [coreState, setCoreState] = useState<CoreState>("INTERRUPTED");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const tRef = useRef(0);
  const particlesRef = useRef<Particle[]>([]);
  const [toolInput, setToolInput] = useState("");
  const [sysClock, setSysClock] = useState("1729482104.28");

  // Init particles
  useEffect(() => {
    particlesRef.current = Array.from({ length: 90 }, () => {
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
      particlesRef.current.forEach(p => {
        p.x += p.speedX * cfg.particleSpeed;
        p.y += p.speedY * cfg.particleSpeed;

        if (p.x > 260) p.x = -260;
        if (p.x < -260) p.x = 260;
        if (p.y > 260) p.y = -260;
        if (p.y < -260) p.y = 260;

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

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen text-slate-200 w-full px-4 lg:px-6">

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
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">

            {/* Neural Telemetry */}
            <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

              <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">NEURAL TELEMETRY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
                </div>
                <span className="font-telemetry text-[9px] text-slate-500">[SYS-01]</span>
              </div>

              <div className="space-y-3 font-telemetry text-[11px]">
                {[
                  { label: "INFERENCE EFFICIENCY", value: "94.2%", pct: 94, color: "#00f0ff", vcolor: "text-holo-cyan" },
                  { label: "TOKEN BUFFER FLUX",    value: "3,842 / 8k", pct: 48, color: "#38bdf8", vcolor: "text-sky-300" },
                ].map(g => (
                  <div key={g.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300">{g.label}</span>
                      <span className={`font-bold ${g.vcolor}`}>{g.value}</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#030914] rounded-full overflow-hidden border border-holo-cyan/20 p-px">
                      <div className="h-full rounded-full shadow-[0_0_8px_#00f0ff] transition-all duration-500"
                        style={{ width: `${g.pct}%`, background: `linear-gradient(to right, ${g.color}99, ${g.color})` }}></div>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
                    <div className="font-telemetry text-[8px] text-slate-500 uppercase tracking-wider">LATENCY (RTC)</div>
                    <div className="font-telemetry text-[13px] text-holo-cyan font-bold mt-0.5">14.8 ms</div>
                    <div className="font-telemetry text-[8px] text-sky-400/80 mt-0.5">Jitter: ±0.3ms</div>
                  </div>
                  <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
                    <div className="font-telemetry text-[8px] text-slate-500 uppercase tracking-wider">PACKET LOSS</div>
                    <div className="font-telemetry text-[13px] text-emerald-400 font-bold mt-0.5">0.00 %</div>
                    <div className="font-telemetry text-[8px] text-slate-400 mt-0.5">Opus / 48kHz</div>
                  </div>
                </div>
              </div>

              {/* Acoustic Harmonics */}
              <div className="mt-4 pt-3 border-t border-holo-cyan/15">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-telemetry text-[9px] tracking-widest text-slate-400 uppercase">ACOUSTIC HARMONICS SPECTRUM</span>
                  <span className="font-telemetry text-[9px] text-holo-cyan">24 BAND // STEREO</span>
                </div>
                <div className="h-12 flex items-end justify-between gap-1 bg-[#020612]/90 rounded border border-holo-cyan/20 p-1.5">
                  {audioBarsHeights.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm transition-all duration-75"
                      style={{
                        height: `${h}%`,
                        backgroundColor: cfg.color,
                        boxShadow: `0 0 6px ${cfg.color}`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Optical Sensor Feed */}
            <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

              <div className="flex items-center justify-between pb-2 mb-2 border-b border-holo-cyan/20">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px] text-holo-cyan">videocam</span>
                  <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">OPTICAL SENSOR FEED</span>
                </div>
                <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-holo-cyan/15 text-holo-cyan border border-holo-cyan/40 animate-pulse font-semibold">FEED ACTIVE</span>
              </div>

              <div className="relative h-44 rounded overflow-hidden bg-[#010308] border border-holo-cyan/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,240,255,0.08),transparent)]"></div>
                <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between font-telemetry text-[9px] text-holo-cyan/90 font-bold">
                    <span>FOV: 98.4° WIDE</span>
                    <span className="text-emerald-400">CONF: 99.4%</span>
                  </div>
                  <div className="self-center relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-dashed border-holo-cyan/70 animate-spin" style={{ animationDuration: "8s" }}></div>
                    <div className="absolute w-10 h-10 rounded-full border border-holo-cyan/50"></div>
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-holo-cyan shadow-[0_0_12px_#00f0ff]"></div>
                    <div className="absolute -top-5 font-telemetry text-[8px] text-holo-cyan tracking-widest bg-[#02050e]/90 px-1.5 py-0.5 rounded border border-holo-cyan/40 font-bold">[TARGET_LOCK]</div>
                  </div>
                  <div className="flex justify-between font-telemetry text-[9px] text-slate-300">
                    <span>TRACK: DESKTOP_STREAM</span>
                    <span className="text-holo-cyan font-bold">60 FPS</span>
                  </div>
                </div>
                <div className="absolute top-5 right-4 border border-amber-400 bg-amber-400/20 px-2 py-0.5 rounded font-telemetry text-[8px] text-amber-300 font-bold tracking-tight shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                  OBJ: SECURITY_REPORT.PDF (98.7%)
                </div>
              </div>
              <div className="mt-2.5 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  OCR KERNEL PARSER ENGAGED
                </span>
                <span className="text-holo-cyan font-bold">1.2MP RES</span>
              </div>
            </div>
          </div>

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

            {/* Audio waveform */}
            <div className="w-full max-w-lg mt-3 flex flex-col items-center">
              <div className="w-full flex items-center justify-between font-telemetry text-[10px] text-slate-400 mb-1.5 px-2">
                <span className="uppercase tracking-widest">SPATIAL RESONANCE</span>
                <span className="font-bold tracking-wider" style={{ color: cfg.color }}>{cfg.status}</span>
                <span className="uppercase tracking-widest">LATERAL FIELD</span>
              </div>
              <div className="w-full h-9 flex items-center overflow-hidden bg-[#030914]/90 rounded border border-holo-cyan/25 shadow-[inset_0_0_12px_rgba(0,240,255,0.08)]">
                <svg className="w-full h-full" viewBox="0 0 400 36" preserveAspectRatio="none">
                  {/* Sine Wave 1 */}
                  <path
                    d={wavePath1}
                    fill="none" stroke={cfg.color} strokeOpacity="0.9" strokeWidth="1.8"
                  />
                  {/* Sine Wave 2 */}
                  <path
                    d={wavePath2}
                    fill="none" stroke="#38BDF8" strokeOpacity="0.6" strokeWidth="1.3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ======= RIGHT: RTC Transcript + Tool Execution ======= */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-3">

            {/* RTC Transcript */}
            <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

              <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-holo-cyan">forum</span>
                  <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">RTC STREAM TRANSCRIPT</span>
                </div>
                <span className="font-telemetry text-[9px] text-slate-500">[CH-01]</span>
              </div>

              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                <div className="p-2.5 rounded bg-[#030b1a]/80 border-l-2 border-sky-400">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-sky-400 font-bold mb-1">
                    <span>USER // OP-01</span><span className="text-slate-500">10:42:19.04</span>
                  </div>
                  <p className="font-sans text-[12px] text-slate-200 leading-snug">&ldquo;Scan my inbox for the product security audit and draft a summary.&rdquo;</p>
                </div>
                <div className="p-2.5 rounded bg-[#041224]/85 border-l-2 border-holo-cyan">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-cyan font-bold mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                      SARA // ASSISTANT
                    </span>
                    <span className="text-slate-500">10:42:20.12</span>
                  </div>
                  <p className="font-sans text-[12px] text-cyan-200 leading-relaxed">&ldquo;Accessing mailbox via Secure Token. Located 3 relevant threads from SecOps regarding the Q3 pen-test.&rdquo;</p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-holo-cyan/15 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[13px] text-holo-cyan">graphic_eq</span>
                  SYNTH: 148 WPM
                </span>
                <span className="text-emerald-400 font-bold">CONF: 99.8%</span>
              </div>
            </div>

            {/* Tool Execution Bus */}
            <div className="relative bg-[#0e0a05]/82 backdrop-blur-xl border border-amber-500/28 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(245,158,11,0.06)]">
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500"></span>
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500"></span>

              <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/30">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
                  <span className="font-telemetry text-[11px] text-amber-400 font-bold tracking-widest uppercase">TOOL EXECUTION BUS</span>
                </div>
                <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold tracking-wider">KINETIC</span>
              </div>

              <div className="space-y-2.5 font-telemetry text-[10px]">
                {toolSteps.map(step => (
                  <div
                    key={step.id}
                    className={`p-2.5 rounded border ${step.active ? "bg-[#1c1205]/90 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)]" : step.done ? "bg-[#130c04]/90 border-amber-500/30" : "bg-[#0d0903]/80 border-amber-500/20 opacity-75"}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`font-bold tracking-wider flex items-center gap-1.5 ${step.active ? "text-amber-300" : step.done ? "text-amber-400" : "text-amber-600"}`}>
                        {step.active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>}
                        [ {step.id} ] {step.name}
                      </span>
                      <span className={`font-semibold ${step.done ? "text-emerald-400" : step.active ? "text-amber-400 animate-pulse" : "text-slate-500"}`}>{step.status}</span>
                    </div>
                    <div className={`text-[9px] ${step.active ? "text-amber-200" : step.done ? "text-slate-300" : "text-slate-400"}`}>{step.detail}</div>
                  </div>
                ))}
              </div>

              {/* Terminal prompt */}
              <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center gap-2">
                <span className="font-telemetry text-[11px] text-amber-400 font-bold">❯</span>
                <input
                  className="bg-transparent text-[11px] font-telemetry text-amber-300 placeholder:text-slate-600 focus:outline-none w-full"
                  placeholder="Inject kernel command..."
                  value={toolInput}
                  onChange={e => setToolInput(e.target.value)}
                />
                <button className="text-amber-400 hover:text-amber-300 transition-all" title="Execute">
                  <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calibration Footer */}
        <div className="w-full flex items-center justify-between pt-4 mt-4 border-t border-holo-cyan/15 font-telemetry text-[9px] text-slate-500 uppercase tracking-wider">
          <div className="flex items-center gap-4">
            <span>GRID: 0.5PX ORTHO</span>
            <span className="hidden md:inline">PROJECTION: COLLIMATED HUD MATRIX</span>
            <span>ENCRYPTION: AES-GCM-256</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-holo-cyan font-bold">SYS_CLOCK: {sysClock}</span>
            <span className="text-amber-400 font-bold">AGENT STATUS: AUTONOMOUS</span>
          </div>
        </div>
        <div className="w-full flex justify-center mt-2 text-[10px] text-slate-500 font-telemetry tracking-wider border-t border-holo-cyan/10 pt-2">
          Built by <a href="https://masumhasan.web.app/" target="_blank" rel="noopener noreferrer" className="ml-1 text-holo-cyan hover:underline font-bold transition-colors">Nur Hasan Masum</a>
        </div>
      </div>
    </ConsoleLayout>
  );
}
