"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function MailCommandCenterPage() {
  const [isSimulatedSent, setIsSimulatedSent] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const toggleSentSimulation = () => {
    setIsSimulatedSent(!isSimulatedSent);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;
    
    // Initialize particles
    const particles: any[] = [];
    for (let i = 0; i < 130; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 125 + 10;
      particles.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        radius: Math.random() * 2.2 + 0.5,
        alpha: Math.random() * 0.85 + 0.15,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 1.2,
        color: Math.random() > 0.6 ? '#fff5eb' : (Math.random() > 0.3 ? '#ffb834' : '#ff5500')
      });
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      rotationAngle += 0.024; // SPEAKING speed

      // 1. ULTRON MULTI-TIER MOLTEN CORONA
      const radGlowOuter = ctx.createRadialGradient(cx, cy, 12, cx, cy, 138);
      radGlowOuter.addColorStop(0, '#ffffff');
      radGlowOuter.addColorStop(0.12, '#ffe29a');
      radGlowOuter.addColorStop(0.28, '#ffb834');
      radGlowOuter.addColorStop(0.50, '#ff9500');
      radGlowOuter.addColorStop(0.72, '#ff5500');
      radGlowOuter.addColorStop(0.88, 'rgba(255, 59, 0, 0.45)');
      radGlowOuter.addColorStop(1, 'transparent');
      ctx.fillStyle = radGlowOuter;
      ctx.beginPath();
      ctx.arc(cx, cy, 138, 0, Math.PI * 2);
      ctx.fill();

      // Deep Molten Core Orb
      const radGlowInner = ctx.createRadialGradient(cx, cy, 0, cx, cy, 64);
      radGlowInner.addColorStop(0, '#ffffff');
      radGlowInner.addColorStop(0.3, '#ffea9f');
      radGlowInner.addColorStop(0.65, '#ff9a00');
      radGlowInner.addColorStop(1, 'rgba(255, 69, 0, 0.7)');
      ctx.fillStyle = radGlowInner;
      ctx.beginPath();
      ctx.arc(cx, cy, 64, 0, Math.PI * 2);
      ctx.fill();

      // 2. ULTRON CONCENTRIC GYROSCOPIC ORBITAL RINGS
      ctx.save();
      ctx.translate(cx, cy);

      // Ring 1
      ctx.rotate(rotationAngle);
      ctx.strokeStyle = '#ffaa22';
      ctx.lineWidth = 1.3;
      ctx.setLineDash([4, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, 132, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 2
      ctx.rotate(-rotationAngle * 2.2);
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = '#ff7b00';
      ctx.setLineDash([20, 24]);
      ctx.beginPath();
      ctx.arc(0, 0, 116, 0, Math.PI * 2);
      ctx.stroke();

      // Ring 3
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.ellipse(0, 0, 126, 48, rotationAngle * 0.9, 0, Math.PI * 2);
      ctx.strokeStyle = '#ffb834';
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Ring 4
      ctx.beginPath();
      ctx.ellipse(0, 0, 126, 48, -rotationAngle * 1.15 + 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = '#ff5500';
      ctx.globalAlpha = 0.75;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Ring 5
      ctx.beginPath();
      ctx.ellipse(0, 0, 94, 34, rotationAngle * 1.4, 0, Math.PI * 2);
      ctx.strokeStyle = '#ffa726';
      ctx.globalAlpha = 0.65;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      ctx.restore();

      // 3. Floating Orbital Golden Sparks
      ctx.save();
      ctx.translate(cx, cy);
      particles.forEach(p => {
        p.x += p.speedX * 1.3;
        p.y += p.speedY * 1.3;

        if (p.x > 136) p.x = -136;
        if (p.x < -136) p.x = 136;
        if (p.y > 136) p.y = -136;
        if (p.y < -136) p.y = 136;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <ConsoleLayout>
      <div className="pt-16 min-h-screen pb-36 px-4 lg:px-6 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col w-full gap-4">
          
          {/* Dynamic Top HUD Sub-Header & Telemetry Strip */}
          <section className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1 rounded bg-[#171c25] flex items-center gap-2 border border-holo-amber/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-telemetry text-[10px] uppercase tracking-wider text-amber-300">SARA // CORE-NODE 04</span>
              </div>
              <span className="font-telemetry text-[9px] text-slate-400 tracking-widest uppercase">ENCLAVE: SEC-DISPATCH-L4</span>
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#12161f] text-amber-300 border border-amber-500/15">
                <span className="material-symbols-outlined text-[13px]">shield</span>
                <span className="font-telemetry text-[9px] tracking-wide">E2EE HSM VERIFIED</span>
              </div>
            </div>
            
            {/* Multi-stage Execution Stepper */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              <div className="flex items-center gap-1 opacity-60">
                <span className="font-telemetry text-[9px] text-slate-400">01</span>
                <span className="font-sans text-[12px] text-slate-200">INTENT</span>
                <span className="material-symbols-outlined text-[12px] text-slate-400">chevron_right</span>
              </div>
              <div className="flex items-center gap-1 opacity-60">
                <span className="font-telemetry text-[9px] text-slate-400">02</span>
                <span className="font-sans text-[12px] text-slate-200">SYNTHESIS</span>
                <span className="material-symbols-outlined text-[12px] text-slate-400">chevron_right</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#201509] border border-amber-500/40 shadow-[0_0_14px_rgba(255,184,52,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                <span className="font-telemetry text-[9px] font-bold text-amber-400 tracking-wider">03 CONFIRMATION</span>
              </div>
              <div className="flex items-center gap-1 opacity-40">
                <span className="material-symbols-outlined text-[12px] text-slate-400">chevron_right</span>
                <span className="font-telemetry text-[9px] text-slate-400">04</span>
                <span className="font-sans text-[12px] text-slate-400">DISPATCH</span>
              </div>
              <div className="flex items-center gap-1 opacity-40">
                <span className="material-symbols-outlined text-[12px] text-slate-400">chevron_right</span>
                <span className="font-telemetry text-[9px] text-slate-400">05</span>
                <span className="font-sans text-[12px] text-slate-400">AUDIT</span>
              </div>
            </div>
          </section>

          {/* Central Spatial Command Arena */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
            
            {/* LEFT QUADRANT: High-Precision Ultron Living Molten Core Console */}
            <div className="xl:col-span-4 flex flex-col gap-4">
              <div className="relative w-full rounded-xl bg-[#090d15]/95 border border-amber-500/25 p-5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_25px_rgba(255,154,0,0.06)] flex flex-col items-center hud-panel-amber">
                <div className="absolute top-2 left-2 text-[9px] text-amber-500/70 font-telemetry select-none tracking-wider">[RADIAL: 320px // ULTRON-04]</div>
                <div className="absolute top-2 right-2 text-[9px] text-amber-500/70 font-telemetry select-none tracking-wider">AZM 084° // ELV +14°</div>
                
                {/* Core State Header */}
                <div className="w-full flex items-center justify-between mb-2 mt-3 z-10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-80"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_10px_#ff9a00]"></span>
                    </span>
                    <span className="font-sans font-bold text-[14px] tracking-wide text-orange-200">SARA COGNITIVE CORE</span>
                  </div>
                  <span className="font-telemetry text-[9px] px-2 py-0.5 rounded bg-[#181108] border border-amber-500/30 text-amber-400 uppercase tracking-wider font-semibold">VERB // mail.composer.v2</span>
                </div>
                
                {/* Cardinal Coordinates Aerospace Reticle Ring & Concentric Gyroscope Container */}
                <div className="relative w-[320px] h-[320px] flex items-center justify-center my-1 select-none">
                  {/* Cardinal Aerospace Marks */}
                  <div className="absolute top-0.5 left-1/2 -translate-x-1/2 font-telemetry text-[9px] text-amber-400/80 tracking-widest font-semibold z-20 pointer-events-none">N 000°</div>
                  <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 font-telemetry text-[9px] text-amber-400/80 tracking-widest font-semibold z-20 pointer-events-none">S 180°</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 font-telemetry text-[9px] text-amber-400/80 tracking-widest font-semibold z-20 pointer-events-none">E 090°</div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 font-telemetry text-[9px] text-amber-400/80 tracking-widest font-semibold z-20 pointer-events-none">W 270°</div>
                  
                  {/* Multi-tier SVG Concentric Ring Astrolabe overlay with aerospace ticks */}
                  <svg className="absolute inset-0 w-full h-full animate-[spin_80s_linear_infinite] pointer-events-none text-amber-500/40" viewBox="0 0 320 320">
                    <circle cx="160" cy="160" fill="none" r="148" stroke="currentColor" strokeDasharray="3 6" strokeWidth="0.75"></circle>
                    <circle cx="160" cy="160" fill="none" opacity="0.65" r="140" stroke="currentColor" strokeDasharray="24 16 8 16" strokeWidth="1.2"></circle>
                    <circle cx="160" cy="160" fill="none" r="124" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.6"></circle>
                    <circle cx="160" cy="160" fill="none" opacity="0.5" r="102" stroke="currentColor" strokeDasharray="40 20 10 20" strokeWidth="1.4"></circle>
                    <line stroke="#ffaa22" strokeWidth="1.5" x1="160" x2="160" y1="6" y2="24"></line>
                    <line stroke="#ffaa22" strokeWidth="1.5" x1="160" x2="160" y1="296" y2="314"></line>
                    <line stroke="#ffaa22" strokeWidth="1.5" x1="6" x2="24" y1="160" y2="160"></line>
                    <line stroke="#ffaa22" strokeWidth="1.5" x1="296" x2="314" y1="160" y2="160"></line>
                  </svg>
                  
                  {/* Counter-Rotating Concentric Inner Astrolabe */}
                  <svg className="absolute inset-4 w-[288px] h-[288px] animate-[spin_55s_linear_infinite_reverse] pointer-events-none text-amber-400/30" viewBox="0 0 288 288">
                    <circle cx="144" cy="144" fill="none" r="132" stroke="currentColor" strokeDasharray="14 10 4 10" strokeWidth="0.9"></circle>
                    <circle cx="144" cy="144" fill="none" r="88" stroke="currentColor" strokeDasharray="1 3" strokeWidth="0.5"></circle>
                  </svg>
                  
                  {/* Ultron Ambient Core Glow Backdrop */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-holo-orange/25 via-holo-amber/30 to-amber-300/20 pointer-events-none blur-2xl"></div>
                  
                  {/* Living Canvas Orb Visualizer */}
                  <canvas ref={canvasRef} className="relative z-10 rounded-full cursor-pointer shadow-[0_0_40px_rgba(255,120,0,0.35)]" height="280" width="280"></canvas>
                  
                  {/* High-Precision Center Floating Typography HUD Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center justify-center text-center animate-[pulse_3s_infinite] px-4 py-2 rounded-lg bg-[#050302]/70 backdrop-blur-md border border-amber-400/40 shadow-[0_0_20px_rgba(255,140,0,0.45)]">
                    <div className="flex items-center gap-1.5 font-telemetry text-[9px] text-orange-200 tracking-widest uppercase font-bold drop-shadow-[0_0_6px_#ff9a00]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                      <span>CORE STATE // DISPATCH</span>
                    </div>
                    <span className="font-sans font-extrabold text-[12px] tracking-[0.2em] text-amber-400 drop-shadow-[0_0_10px_rgba(255,170,34,0.9)]">SARA // ORB-4</span>
                    <span className="font-telemetry text-[8px] text-amber-400/80 tracking-widest uppercase">SYNC // 842.10 MHz</span>
                  </div>
                </div>

                {/* Molten Amber Vocal Synthesis & Harmonic Resonance Visualizer */}
                <div className="w-full flex flex-col gap-1.5 mt-2 z-10">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-amber-400">graphic_eq</span>
                      <span>SPATIAL RESONANCE // VOICE SYNTHESIS ENGAGED</span>
                    </span>
                    <span className="text-amber-400 font-semibold tracking-wider">CONVERSATION ACTIVE</span>
                  </div>
                  
                  {/* Realtime Molten Waveform SVG Oscillators */}
                  <div className="w-full h-6 relative overflow-hidden flex items-center bg-[#070b13]/60 rounded border border-amber-500/10 px-1">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 36">
                      <path d="M0,18 Q50,6 100,18 T200,18 T300,30 T400,18" fill="none" opacity="0.9" stroke="#ffaa22" strokeWidth="1.4"></path>
                      <path d="M0,18 Q50,30 100,18 T200,18 T300,6 T400,18" fill="none" opacity="0.75" stroke="#ff5500" strokeWidth="1.1"></path>
                    </svg>
                  </div>
                </div>

                {/* Telemetry Stats Strip */}
                <div className="w-full grid grid-cols-3 gap-2 mt-3 pt-3 bg-[#111724]/70 border border-amber-500/15 rounded-lg p-2.5">
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">TTS ENGINE</span>
                    <span className="font-telemetry text-[11px] text-holo-cyan font-medium">CARTESIA-FAST</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">LATENCY</span>
                    <span className="font-telemetry text-[11px] text-amber-400 font-medium">142 ms</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">CONFIDENCE</span>
                    <span className="font-telemetry text-[11px] text-holo-cyan font-medium">99.4%</span>
                  </div>
                </div>
              </div>

              {/* Quick Operator Context Widget */}
              <div className="w-full rounded-xl bg-[#090d15]/95 border border-amber-500/20 p-4 flex flex-col gap-2.5 shadow-xl relative">
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">REASONING TRACE</span>
                  <span className="font-telemetry text-[9px] text-holo-cyan">TRACE-ID #9810</span>
                </div>
                <p className="font-sans text-[12px] text-slate-300 leading-relaxed">
                  Detected oral command: <span className="text-amber-400 font-medium">"Send an email to Sarah about tomorrow's meeting."</span> Cross-referenced calendar event <span className="text-holo-cyan font-telemetry">#SYNC-0930</span>, retrieved vulnerability benchmark CSV, compiled attachments, and generated outbound draft.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-2 py-0.5 rounded bg-[#131926] text-slate-400 font-telemetry text-[9px] border border-slate-700/50">DLP CHECK: 0 LEAKS</span>
                  <span className="px-2 py-0.5 rounded bg-[#1a1306] text-amber-400 font-telemetry text-[9px] border border-amber-500/30">IDENTITY: CONFIRMED</span>
                </div>
              </div>
            </div>
            
            {/* CENTER-RIGHT QUADRANT: Translucent Holographic Email Console */}
            <div className="xl:col-span-5 flex flex-col gap-4">
              <div className="relative w-full rounded-xl bg-[#0b101b]/95 backdrop-blur-2xl border border-amber-500/20 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col">
                
                {/* Top Hologram Accent Ribbon & Tab Bar */}
                <div className="w-full flex items-center justify-between pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#1a1408] border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-sans font-bold text-[15px] text-orange-200 tracking-wide">OUTBOUND DISPATCH CONSOLE</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#10202e] border border-cyan-500/30 text-holo-cyan font-telemetry text-[9px] uppercase">STAGING</span>
                      </div>
                      <span className="font-telemetry text-[9px] text-slate-400">PROTOCOL: SMTP-TLS-v1.3 // RFC-5322 STRICT</span>
                    </div>
                  </div>
                  <button onClick={toggleSentSimulation} className="px-2.5 py-1 rounded bg-[#171c26] hover:bg-[#222a3a] border border-amber-500/30 transition-all flex items-center gap-1.5 text-slate-200 text-[10px] font-telemetry cursor-pointer shadow-sm">
                    <span className="material-symbols-outlined text-[13px] text-amber-400">sync_alt</span>
                    <span>{isSimulatedSent ? 'RETURN TO DRAFT' : 'SIMULATE SENT STATE'}</span>
                  </button>
                </div>
                
                {/* Normal Pre-Dispatch View Container */}
                {!isSimulatedSent && (
                  <div className="flex flex-col gap-4 transition-all duration-300">
                    <div className="w-full bg-[#131926]/80 border border-slate-700/50 rounded-lg p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[15px] text-slate-400">account_circle</span>
                        <div className="flex flex-col">
                          <span className="font-telemetry text-[9px] text-slate-400">TRANSMITTER ACCOUNT</span>
                          <span className="font-telemetry text-[11px] text-slate-200">commodore.vance@defense-matrix.ai</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#090d15] text-holo-cyan border border-cyan-500/20">
                        <span className="material-symbols-outlined text-[13px]">key</span>
                        <span className="font-telemetry text-[9px]">OAUTH2 PKCE ENCLAVE</span>
                      </div>
                    </div>
                    
                    {/* Envelope Header Data Matrix */}
                    <div className="w-full bg-[#101622]/90 border border-amber-500/15 rounded-lg p-3 flex flex-col gap-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-telemetry text-[9px] text-slate-400 w-12 shrink-0">TO:</span>
                          <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#1d1910] border border-amber-500/30 text-orange-200">
                              <span className="font-sans text-[12px] font-medium">Sarah Chen</span>
                              <span className="font-telemetry text-[9px] text-slate-400">&lt;sarah.chen@aurora-defense.io&gt;</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#0b0e14] border border-amber-500/20 text-amber-400 self-start sm:self-auto">
                          <span className="material-symbols-outlined text-[12px]">verified_user</span>
                          <span className="font-telemetry text-[9px]">KEY: 0x8F9A VALIDATED</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="font-telemetry text-[9px] text-slate-400 w-12 shrink-0">SUBJECT:</span>
                        <span className="font-sans text-[14px] text-slate-100 font-semibold truncate">Tomorrow's Strategic Sync &amp; Telemetry Review (09:30 AM EST)</span>
                      </div>
                      <div className="flex items-center gap-3 pt-1 text-slate-400 font-telemetry text-[9px]">
                        <span>CHAR COUNT: 284</span>
                        <span>•</span>
                        <span>ENCODING: UTF-8</span>
                        <span>•</span>
                        <span className="text-amber-400">SENSITIVITY: LEVEL 4 INTERNAL</span>
                      </div>
                    </div>
                    
                    {/* Draft Body Text Window */}
                    <div className="w-full bg-[#070b13]/90 border border-slate-800 rounded-lg p-4 relative overflow-hidden flex flex-col gap-3">
                      <div className="flex items-center justify-between text-slate-400 font-telemetry text-[9px] pb-1">
                        <span>SYNTHESIZED MESSAGE BODY</span>
                        <span className="text-holo-cyan flex items-center gap-1">
                          <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                          AUTONOMOUS GENERATION
                        </span>
                      </div>
                      <div className="font-sans text-[13px] text-slate-200 leading-relaxed whitespace-pre-line select-text font-normal">
                        Hi Sarah,
                        {"\n\n"}
                        Confirming our tactical briefing tomorrow at 09:30 AM EST. I have attached the latest vulnerability index and vector recall benchmarks from today's system benchmark runs.
                        {"\n\n"}
                        SARA will be handling live note-taking and real-time audio telemetry synthesis during our session.
                        {"\n\n"}
                        Best,
                        {"\n"}
                        Vance
                      </div>
                    </div>
                    
                    {/* Attachments Cluster */}
                    <div className="w-full flex flex-col gap-2">
                      <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">SECURED ATTACHMENTS (2 FILES)</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded-lg bg-[#111724] border border-slate-700/50 hover:bg-[#182030] transition-all flex items-center gap-2.5 group">
                          <div className="w-8 h-8 rounded bg-[#241315] border border-rose-500/30 flex items-center justify-center text-rose-400">
                            <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                          </div>
                          <div className="flex flex-col min-w-0 flex-1">
                            <span className="font-telemetry text-[11px] text-slate-200 truncate font-medium">cve_2025_8819_remediation.pdf</span>
                            <span className="font-telemetry text-[9px] text-slate-400">1.4 MB • SHA256 VALIDATED</span>
                          </div>
                          <span className="material-symbols-outlined text-[15px] text-holo-cyan group-hover:scale-110 transition-transform">check_circle</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-[#111724] border border-slate-700/50 hover:bg-[#182030] transition-all flex items-center gap-2.5 group">
                          <div className="w-8 h-8 rounded bg-[#0b1c2b] border border-cyan-500/30 flex items-center justify-center text-holo-cyan">
                            <span className="material-symbols-outlined text-[18px]">table_chart</span>
                          </div>
                          <div className="flex flex-col min-w-0 flex-1">
                            <span className="font-telemetry text-[11px] text-slate-200 truncate font-medium">telemetry_benchmarks_q3.csv</span>
                            <span className="font-telemetry text-[9px] text-slate-400">380 KB • PARQUET EXPORT</span>
                          </div>
                          <span className="material-symbols-outlined text-[15px] text-holo-cyan group-hover:scale-110 transition-transform">check_circle</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Consequential Action Clearance Strip */}
                    <div className="w-full mt-2 pt-3 bg-[#121824]/90 border border-amber-500/20 rounded-lg p-3 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[18px] text-amber-400">verified</span>
                          <span className="font-sans text-[13px] text-orange-200 font-medium">Ready to dispatch to Sarah Chen</span>
                        </div>
                        <span className="font-telemetry text-[9px] text-slate-400">AUTH: VOICE_CONFIRM_PENDING</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <button className="px-3 py-2 rounded bg-[#171c26] border border-slate-700/60 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 font-telemetry text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                          <span className="material-symbols-outlined text-[15px]">close</span>
                          <span>CANCEL DRAFT</span>
                        </button>
                        <button className="px-3 py-2 rounded bg-[#171c26] border border-slate-700/60 hover:bg-[#222a3a] text-slate-200 font-telemetry text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                          <span className="material-symbols-outlined text-[15px]">edit</span>
                          <span>EDIT CONTENT</span>
                        </button>
                        <button className="px-3 py-2 rounded bg-gradient-to-r from-holo-amber to-holo-orange hover:from-amber-400 hover:to-[#ff6600] text-black font-telemetry text-[11px] font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,154,0,0.5)] transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                          <span className="material-symbols-outlined text-[17px]">send</span>
                          <span>CONFIRM &amp; SEND</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Simulated Sent State Overlay */}
                {isSimulatedSent && (
                  <div className="flex flex-col gap-4 py-6 text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#171e2c] border border-cyan-500/40 mx-auto flex items-center justify-center text-holo-cyan shadow-[0_0_24px_rgba(0,240,255,0.35)]">
                      <span className="material-symbols-outlined text-[32px]">mark_email_read</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-sans text-[20px] text-holo-cyan font-medium">DISPATCH TRANSMITTED</span>
                      <span className="font-sans text-[13px] text-slate-300">Message delivered into secure enclave relay</span>
                    </div>
                    <div className="max-w-md mx-auto w-full bg-[#111724] border border-slate-700/60 rounded-lg p-3.5 flex flex-col gap-2 text-left font-telemetry text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-400">RECIPIENT:</span>
                        <span className="text-slate-200">Sarah Chen</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">SUBJECT:</span>
                        <span className="text-slate-200 truncate max-w-[220px]">Tomorrow's Strategic Sync &amp; Telemetry</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">TIME:</span>
                        <span className="text-amber-400">10:42 AM EST (RTC TIMESTAMP)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">LATENCY:</span>
                        <span className="text-holo-cyan">142 ms (E2EE HSM)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">AUDIT HASH:</span>
                        <span className="text-slate-400 font-telemetry text-[9px]">#DISP-9842-89AF-0012</span>
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            </div>
            
            {/* RIGHT QUADRANT: Persistent Live Stream Transcript & Tool Activity Bus */}
            <div className="xl:col-span-4 flex flex-col gap-4">
              <div className="w-full rounded-xl bg-[#090d15]/95 border border-amber-500/20 p-4 shadow-xl flex flex-col gap-3 relative">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-amber-400">forum</span>
                    <span className="font-sans font-bold text-[14px] text-slate-100">LIVE RTC TRANSCRIPT</span>
                  </div>
                  <span className="font-telemetry text-[9px] px-1.5 py-0.5 rounded bg-[#10202e] border border-cyan-500/30 text-holo-cyan">SYNCED</span>
                </div>
                
                <div className="w-full max-h-[320px] overflow-y-auto flex flex-col gap-2.5 pr-1">
                  <div className="p-2.5 rounded bg-[#111724] border border-slate-700/50 flex flex-col gap-1">
                    <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-cyan">
                      <span className="font-bold">OPERATOR // VANCE</span>
                      <span className="text-slate-400">10:41:18 AM</span>
                    </div>
                    <p className="font-sans text-[13px] text-slate-200">
                      "Send an email to Sarah about tomorrow's meeting."
                    </p>
                  </div>
                  <div className="p-2.5 rounded bg-[#181206] border border-amber-500/30 flex flex-col gap-1 shadow-sm">
                    <div className="flex items-center justify-between font-telemetry text-[9px] text-amber-400">
                      <span className="font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                        SARA // ASSISTANT
                      </span>
                      <span className="text-slate-400">10:41:22 AM</span>
                    </div>
                    <p className="font-sans text-[13px] text-orange-200 leading-relaxed">
                      "Composing draft to Sarah Chen with agenda details and attached benchmarks. Ready for confirmation before transmission."
                    </p>
                  </div>
                  <div className="p-2 rounded bg-[#070b13]/80 border border-slate-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-amber-400 animate-pulse">mic</span>
                    <span className="font-telemetry text-[9px] text-slate-400 truncate">LISTENING: "Awaiting confirmation command..."</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full rounded-xl bg-[#090d15]/95 border border-amber-500/20 p-4 shadow-xl flex flex-col gap-3 relative">
                <div className="flex items-center justify-between pb-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-holo-cyan">terminal</span>
                    <span className="font-sans font-bold text-[14px] text-slate-100">TOOL EXECUTION BUS</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-amber-400">1 ENGAGED</span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="p-2.5 rounded-lg bg-[#111724] border border-slate-700/50 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-telemetry text-[11px] text-orange-200 font-bold">mail.composer.v2</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#1a1408] border border-amber-500/30 text-amber-400 font-telemetry text-[9px]">AWAITING HANDSHAKE</span>
                    </div>
                    <div className="flex flex-col gap-1 text-slate-400 font-telemetry text-[9px]">
                      <span>ACTION: dispatch_staged_envelope</span>
                      <span>PARAMS: {"{to: 'sarah.chen', attach_count: 2}"}</span>
                    </div>
                    <div className="w-full bg-[#1b2230] h-1 rounded overflow-hidden">
                      <div className="h-full bg-amber-400 w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="p-2 rounded bg-[#101622]/60 border border-slate-800 flex items-center justify-between text-slate-400 font-telemetry text-[9px]">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-holo-cyan">check</span>
                      CALENDAR RECALL #SYNC-0930
                    </span>
                    <span className="text-holo-cyan">OK</span>
                  </div>
                  <div className="p-2 rounded bg-[#101622]/60 border border-slate-800 flex items-center justify-between text-slate-400 font-telemetry text-[9px]">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[13px] text-holo-cyan">check</span>
                      DLP DLP-FILTER-L4
                    </span>
                    <span className="text-holo-cyan">CLEAR</span>
                  </div>
                </div>
                
                <div className="w-full flex items-center gap-2 pt-2">
                  <input className="w-full bg-[#111724] border border-slate-700/60 px-3 py-1.5 rounded text-slate-100 font-telemetry text-[9px] focus:outline-none focus:border-amber-500/50 placeholder:text-slate-500" placeholder="Execute terminal tool command..." type="text"/>
                  <button className="px-2.5 py-1.5 rounded bg-[#182030] hover:bg-[#202b40] border border-cyan-500/30 text-holo-cyan font-telemetry text-[9px] uppercase cursor-pointer">
                    RUN
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
