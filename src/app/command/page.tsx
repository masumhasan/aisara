"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type CoreState = "IDLE" | "LISTENING" | "THINKING" | "SPEAKING" | "TOOL_USE" | "VISION" | "INTERRUPTED";

const STATE_CONFIG: Record<CoreState, { color: string; glow: string; label: string; freq: string }> = {
  IDLE:        { color: "#849495", glow: "rgba(132,148,149,0.3)", label: "CORE STATE: IDLE", freq: "STANDBY // 0.00 MHz" },
  LISTENING:   { color: "#3e90ff", glow: "rgba(62,144,255,0.4)", label: "CORE STATE: LISTENING", freq: "RECV // 420.00 MHz" },
  THINKING:    { color: "#ffb869", glow: "rgba(255,184,105,0.4)", label: "CORE STATE: THINKING", freq: "PROC // 620.80 MHz" },
  SPEAKING:    { color: "#00f0ff", glow: "rgba(0,240,255,0.4)", label: "CORE STATE: SPEAKING", freq: "SYNC // 842.10 MHz" },
  TOOL_USE:    { color: "#ffb869", glow: "rgba(255,154,0,0.45)", label: "CORE STATE: TOOL EXEC", freq: "EXEC // 910.44 MHz" },
  VISION:      { color: "#a855f7", glow: "rgba(168,85,247,0.4)", label: "CORE STATE: VISION", freq: "OPT // 750.22 MHz" },
  INTERRUPTED: { color: "#ff4d4d", glow: "rgba(255,77,77,0.4)", label: "CORE STATE: INTERRUPTED", freq: "HALT // —— MHz" },
};

export default function CommandCenterPage() {
  const [coreState, setCoreState] = useState<CoreState>("SPEAKING");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [audioBars, setAudioBars] = useState<number[]>([]);

  useEffect(() => {
    setAudioBars(Array.from({ length: 24 }, () => Math.random()));
  }, []);

  // Animated holographic orb
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let t = 0;

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      const cx = w / 2, cy = h / 2;
      const cfg = STATE_CONFIG[coreState];
      ctx.clearRect(0, 0, w, h);

      // Outer rings
      for (let r = 0; r < 4; r++) {
        const radius = 80 + r * 55 + Math.sin(t * 0.6 + r) * 6;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${cfg.color}${r === 0 ? "60" : r === 1 ? "30" : "18"}`;
        ctx.lineWidth = r === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }

      // Rotating dashed orbit
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.3);
      ctx.beginPath();
      ctx.arc(0, 0, 140, 0, Math.PI * 2);
      ctx.strokeStyle = `${cfg.color}25`;
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 16]);
      ctx.stroke();
      ctx.restore();

      // Pulsing orb core
      const pulseR = 52 + Math.sin(t * 1.8) * 4;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseR);
      grad.addColorStop(0, `${cfg.color}CC`);
      grad.addColorStop(0.5, `${cfg.color}66`);
      grad.addColorStop(1, `${cfg.color}00`);
      ctx.beginPath();
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.shadowColor = cfg.glow;
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Compass ticks
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const x1 = cx + Math.cos(angle) * 150;
        const y1 = cy + Math.sin(angle) * 150;
        const x2 = cx + Math.cos(angle) * (i % 3 === 0 ? 140 : 145);
        const y2 = cy + Math.sin(angle) * (i % 3 === 0 ? 140 : 145);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = `${cfg.color}50`;
        ctx.lineWidth = i % 3 === 0 ? 1.5 : 0.8;
        ctx.stroke();
      }

      // Inner crosshair
      ctx.strokeStyle = `${cfg.color}40`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(cx - 60, cy); ctx.lineTo(cx + 60, cy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 60); ctx.lineTo(cx, cy + 60);
      ctx.stroke();

      t += 0.015;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [coreState]);

  const cfg = STATE_CONFIG[coreState];

  const toolExecutions = [
    { name: "read_inbox_stream", status: "DONE", time: "1.2s", color: "text-holo-cyan" },
    { name: "optical_ocr_feed", status: "ACTIVE", time: "0.8s", color: "text-orange-400" },
    { name: "synthesize_briefing", status: "QUEUED", time: "—", color: "text-slate-400" },
    { name: "dispatch_mail_envelope", status: "GATE", time: "—", color: "text-rose-400" },
  ];

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 w-full bg-[#090e17]" style={{
        backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,240,255,0.06), transparent 75%), radial-gradient(circle at 85% 20%, rgba(255,184,105,0.03), transparent 50%)"
      }}>
        {/* Atmospheric grid */}
        <div className="fixed inset-0 pointer-events-none -z-10" style={{
          backgroundImage: "linear-gradient(rgba(0,240,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.02) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}></div>

        <div className="relative w-full px-4 sm:px-6">
          {/* HUD Meta Banner */}
          <div className="w-full flex items-center justify-between pb-3 mb-4 border-b border-holo-cyan/10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                <span className="font-telemetry text-[10px] text-holo-cyan tracking-widest uppercase">SARA // CORE MATRIX v4.2</span>
              </div>
              <span className="font-telemetry text-[9px] text-slate-500 px-1.5 py-0.5 rounded bg-[#252a33]">NODE: AP-NORTHEAST-1</span>
              <span className="hidden md:inline font-telemetry text-[9px] text-slate-500 tracking-wider">LIVEKIT RTC SESSION: 0x9F42A1</span>
            </div>
            {/* State Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-[#171c25] border border-holo-cyan/20 overflow-x-auto max-w-full">
              {(Object.keys(STATE_CONFIG) as CoreState[]).map(state => (
                <button
                  key={state}
                  className={`px-2.5 py-1 rounded-full font-telemetry text-[9px] uppercase tracking-wider transition-all whitespace-nowrap ${coreState === state ? "bg-holo-cyan/20 text-holo-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)]" : "text-slate-400 hover:text-slate-200"}`}
                  onClick={() => setCoreState(state)}
                >
                  {state.replace("_", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Command Deck */}
          <div className="grid grid-cols-12 gap-4 items-start">
            
            {/* LEFT: Neural Telemetry */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
              
              {/* Telemetry Diagnostics */}
              <div className="relative bg-[#090e17]/80 backdrop-blur-xl p-4 rounded-lg border border-holo-cyan/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <span className="font-telemetry text-[10px] text-holo-cyan tracking-widest font-semibold">NEURAL TELEMETRY</span>
                  <span className="font-telemetry text-[9px] text-slate-500">[SYS-01]</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "INFERENCE EFFICIENCY", value: "94.2%", pct: 94, color: "#00f0ff" },
                    { label: "TOKEN BUFFER FLUX", value: "3,842/8k", pct: 48, color: "#3e90ff" },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="flex justify-between font-telemetry text-[9px] mb-1">
                        <span className="text-slate-400">{item.label}</span>
                        <span className="font-mono" style={{ color: item.color }}>{item.value}</span>
                      </div>
                      <div className="h-1.5 w-full bg-[#252a33] rounded-full overflow-hidden p-0.5">
                        <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: `linear-gradient(to right, ${item.color}99, ${item.color})` }}></div>
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="p-2 rounded bg-[#171c25] border border-slate-800">
                      <div className="font-telemetry text-[8px] text-slate-500">LATENCY (RT)</div>
                      <div className="font-telemetry text-[14px] text-holo-cyan font-mono mt-0.5">14.8 ms</div>
                      <div className="font-telemetry text-[8px] text-sky-400/70 mt-0.5">Jitter: ±0.3ms</div>
                    </div>
                    <div className="p-2 rounded bg-[#171c25] border border-slate-800">
                      <div className="font-telemetry text-[8px] text-slate-500">AUDIO LOSS</div>
                      <div className="font-telemetry text-[14px] text-holo-cyan font-mono mt-0.5">0.00 %</div>
                      <div className="font-telemetry text-[8px] text-holo-cyan mt-0.5">Opus/48kHz</div>
                    </div>
                  </div>
                </div>
                {/* Audio Bars */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex justify-between mb-2">
                    <span className="font-telemetry text-[8px] text-slate-500 uppercase tracking-widest">ACOUSTIC HARMONICS</span>
                    <span className="font-telemetry text-[8px] text-holo-cyan">24 BAND</span>
                  </div>
                  <div className="h-10 flex items-end justify-between gap-0.5 bg-[#171c25] rounded p-1">
                    {audioBars.map((h, i) => {
                      const active = coreState === "SPEAKING" || coreState === "LISTENING";
                      const height = active ? (Math.sin(i * 0.4) * 0.4 + 0.6) : h * 0.3;
                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-300 ${active ? "animate-pulse" : ""}`}
                          style={{ height: `${height * 100}%`, backgroundColor: i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#3e90ff" : "#ffb869", opacity: 0.7 }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Vision Feed */}
              <div className="relative bg-[#090e17]/80 backdrop-blur-xl p-4 rounded-lg border border-holo-cyan/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-holo-cyan">visibility</span>
                    <span className="font-telemetry text-[10px] text-holo-cyan tracking-widest font-semibold">OPTICAL SENSOR FEED</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded font-telemetry text-[8px] bg-holo-cyan/15 text-holo-cyan border border-holo-cyan/30">ACTIVE</span>
                </div>
                <div className="relative h-40 rounded overflow-hidden bg-[#040810] border border-slate-800 flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    {/* Crosshair */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute w-16 h-16 rounded-full border border-dashed border-holo-cyan/40 animate-spin" style={{ animationDuration: "12s" }}></div>
                      <div className="w-2 h-2 rounded-full bg-holo-cyan shadow-[0_0_8px_#00f0ff]"></div>
                      <span className="absolute -top-5 font-telemetry text-[8px] text-holo-cyan tracking-tight">[TARGET_LOCK]</span>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 right-2 flex justify-between font-telemetry text-[8px] text-holo-cyan/80">
                    <span>FOV: 98.4° WIDE</span><span>CONF: 99.4%</span>
                  </div>
                  <div className="absolute top-5 right-4 border border-orange-400/70 bg-orange-400/10 px-1 py-0.5 rounded font-telemetry text-[7px] text-orange-300">
                    OBJ: SECURITY_REPORT.PDF (98.7%)
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between font-telemetry text-[8px] text-slate-400">
                    <span>TRACK: DESKTOP_STREAM</span><span>FRM: 60 FPS</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between font-telemetry text-[8px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    OCR PARSER ENGAGED
                  </span>
                  <span className="text-holo-cyan">1.2MP</span>
                </div>
              </div>
            </div>

            {/* CENTER: Holographic AI Core */}
            <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[480px] order-1 lg:order-2">
              {/* Outermost decorative ring */}
              <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed animate-spin pointer-events-none" style={{ borderColor: `${cfg.color}15`, animationDuration: "90s" }}></div>
              <div className="absolute w-[340px] h-[340px] rounded-full border pointer-events-none" style={{ borderColor: `${cfg.color}20` }}>
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-telemetry text-[8px] text-holo-cyan/60">N 000°</span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 font-telemetry text-[8px] text-holo-cyan/60">S 180°</span>
                <span className="absolute top-1/2 -translate-y-1/2 -left-5 font-telemetry text-[8px] text-holo-cyan/60">W 270°</span>
                <span className="absolute top-1/2 -translate-y-1/2 -right-5 font-telemetry text-[8px] text-holo-cyan/60">E 090°</span>
              </div>

              {/* Canvas orb */}
              <div className="relative max-w-[400px] w-full aspect-square flex items-center justify-center">
                <canvas ref={canvasRef} className="w-full h-full cursor-pointer" width={400} height={400} title="Click to pulse" onClick={() => {
                  const states: CoreState[] = ["IDLE","LISTENING","THINKING","SPEAKING","TOOL_USE","VISION","INTERRUPTED"];
                  const next = states[(states.indexOf(coreState) + 1) % states.length];
                  setCoreState(next);
                }}></canvas>
                <div className="absolute pointer-events-none flex flex-col items-center text-center backdrop-blur-sm px-4 py-2 rounded-full border border-holo-cyan/20 bg-[#090e17]/40">
                  <span className="font-telemetry text-[9px] uppercase tracking-widest" style={{ color: cfg.color }}>{cfg.label}</span>
                  <span className="font-sans text-[16px] text-holo-cyan font-bold tracking-widest mt-0.5">SARA // ORB-4</span>
                  <span className="font-telemetry text-[9px] text-slate-400 font-mono">{cfg.freq}</span>
                </div>
              </div>

              {/* Waveform */}
              <div className="w-full max-w-md mt-3 flex flex-col items-center">
                <div className="w-full flex items-center justify-between font-telemetry text-[8px] text-slate-500 mb-1 px-2">
                  <span>SPATIAL AUDIO RESONANCE</span>
                  <span className="text-holo-cyan">VOICE SYNTHESIS</span>
                  <span>LATERAL FIELD</span>
                </div>
                <div className="w-full h-8 flex items-center justify-center overflow-hidden bg-[#171c25]/30 rounded border border-holo-cyan/15">
                  <svg className="w-full h-full" viewBox="0 0 400 30" preserveAspectRatio="none">
                    <path d={coreState === "SPEAKING" ? "M0,15 Q50,5 100,15 T200,15 T300,25 T400,15" : "M0,15 Q50,14 100,15 T200,15 T300,15 T400,15"} fill="none" stroke="#00F0FF" strokeOpacity="0.8" strokeWidth="1.5" className="transition-all duration-500"/>
                    <path d={coreState === "LISTENING" ? "M0,15 Q50,25 100,15 T200,15 T300,5 T400,15" : "M0,15 Q50,16 100,15 T200,15 T300,15 T400,15"} fill="none" stroke="#3E90FF" strokeOpacity="0.5" strokeWidth="1.2" className="transition-all duration-500"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT: Transcript & Tool Bus */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-3">
              
              {/* RTC Stream Transcript */}
              <div className="relative bg-[#090e17]/80 backdrop-blur-xl p-4 rounded-lg border border-holo-cyan/15 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-holo-cyan">forum</span>
                    <span className="font-telemetry text-[10px] text-holo-cyan tracking-widest font-semibold">RTC STREAM TRANSCRIPT</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-slate-500">CH-01</span>
                </div>
                <div className="space-y-3 max-h-[200px] overflow-y-auto pr-1">
                  <div className="p-2 rounded bg-[#1b2029]/60 border-l-2 border-blue-400">
                    <div className="flex items-center justify-between font-telemetry text-[8px] text-blue-400 mb-1">
                      <span className="font-bold">USER // OP-01</span><span>10:42:19</span>
                    </div>
                    <p className="font-sans text-[12px] text-slate-200">&ldquo;Scan my inbox for the product security audit and draft a summary.&rdquo;</p>
                  </div>
                  <div className="p-2 rounded bg-[#252a33]/40 border-l-2 border-holo-cyan">
                    <div className="flex items-center justify-between font-telemetry text-[8px] text-holo-cyan mb-1">
                      <span className="font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span> SARA // ASSISTANT</span>
                      <span>10:42:20</span>
                    </div>
                    <p className="font-sans text-[12px] text-sky-100 leading-relaxed">&ldquo;Accessing mailbox via Secure Token. Located 3 relevant threads from SecOps regarding the Q3 pen-test.&rdquo;</p>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between font-telemetry text-[8px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-holo-cyan">graphic_eq</span>
                    SYNTH: 148 WPM
                  </span>
                  <span className="text-holo-cyan">CONF: 99.8%</span>
                </div>
              </div>

              {/* Tool Execution Bus */}
              <div className="relative bg-[#090e17]/80 backdrop-blur-xl p-4 rounded-lg border border-orange-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-400"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-400"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-400"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-400"></span>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                    <span className="font-telemetry text-[10px] text-orange-300 tracking-widest font-semibold">TOOL EXECUTION BUS</span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded font-telemetry text-[8px] bg-orange-500/20 text-orange-300 border border-orange-500/40">KINETIC</span>
                </div>
                <div className="space-y-2">
                  {toolExecutions.map(tool => (
                    <div key={tool.name} className="flex items-center justify-between p-2 rounded bg-[#171c25] border border-slate-800">
                      <div className="min-w-0">
                        <div className={`font-telemetry text-[9px] font-bold truncate ${tool.color}`}>{tool.name}</div>
                        <div className="font-telemetry text-[8px] text-slate-500 mt-0.5">{tool.time}</div>
                      </div>
                      <span className={`font-telemetry text-[8px] font-bold uppercase ${tool.color} shrink-0 ml-2`}>{tool.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Dock Preview */}
              <div className="relative bg-[#090e17]/80 backdrop-blur-xl p-4 rounded-lg border border-slate-800">
                <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Quick Navigation</div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: "neurology", label: "Neural", href: "/neural" },
                    { icon: "account_tree", label: "Tactical", href: "/tactical" },
                    { icon: "monitor_heart", label: "Telemetry", href: "/telemetry" },
                    { icon: "database", label: "Memory", href: "/memory" },
                    { icon: "hub", label: "Synaptic", href: "/synaptic" },
                    { icon: "tune", label: "Settings", href: "/settings" },
                  ].map(item => (
                    <a key={item.label} href={item.href} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-[#171c25] hover:bg-[#252a33] border border-slate-800 transition-all group">
                      <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-holo-cyan transition-colors">{item.icon}</span>
                      <span className="font-telemetry text-[8px] text-slate-500 group-hover:text-slate-300 transition-colors">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </ConsoleLayout>
  );
}
