"use client";

import React, { useEffect } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function BriefingPage() {
  
  useEffect(() => {
    // Micro-interaction for synthetic audio waveform simulation in quote box
    const barsContainer = document.getElementById('aura-synth-bars');
    if (!barsContainer) return;
    const bars = barsContainer.children;
    const interval = setInterval(() => {
      for (let i = 0; i < bars.length; i++) {
        const randH = Math.floor(Math.random() * 16 + 4);
        (bars[i] as HTMLElement).style.height = randH + 'px';
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <ConsoleLayout>
      <div className="pt-16 min-h-screen pb-36 px-4 lg:px-6 w-full max-w-[1920px] mx-auto text-slate-200">
        
        {/* Top Ambient Flare Coordinate Anchor */}
        <div className="relative w-full mb-4 flex flex-col gap-4">
          
          {/* Top Greeting & Synthetic Speech Telemetry Ribbon */}
          <div className="relative bg-[#090e17]/80 backdrop-blur-md rounded-xl p-4 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-holo-cyan/10 via-holo-amber/15 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-holo-cyan via-holo-amber to-transparent opacity-60"></div>
            
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
              {/* Identity / Mission Target Header */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-telemetry text-[9px] uppercase tracking-widest text-holo-cyan px-2 py-0.5 rounded bg-[#252a33]/90">
                    SYS // CH-01 AURA MATRIX
                  </span>
                  <span className="inline-flex items-center gap-1 font-telemetry text-[9px] text-holo-amber">
                    <span className="h-1.5 w-1.5 rounded-full bg-holo-amber animate-ping"></span>
                    RECON ENGAGED
                  </span>
                  <span className="font-telemetry text-[9px] text-slate-400">
                    LAT: 37.7749° N // LON: 122.4194° W
                  </span>
                </div>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <h1 className="font-sans text-[28px] uppercase text-orange-200 tracking-wider drop-shadow-[0_0_16px_rgba(255,184,105,0.4)] font-bold">
                    Good Morning // Operator Vance
                  </h1>
                  <span className="font-telemetry text-[12px] text-sky-200 tracking-widest uppercase">
                    Today — Sept 23, 2025 // Tactical Recon Matrix
                  </span>
                </div>
              </div>
              
              {/* Voice Telemetry Specs Box */}
              <div className="flex items-center gap-4 bg-[#252a33]/60 backdrop-blur px-4 py-2 rounded-lg self-start xl:self-auto">
                <div className="flex flex-col text-right">
                  <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">AURA Voice Synth</span>
                  <span className="font-telemetry text-[10px] text-sky-200 font-semibold">CARTESIA // 89ms</span>
                </div>
                <div className="w-px h-6 bg-[#343943]"></div>
                <div className="flex flex-col text-right">
                  <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">Velocity</span>
                  <span className="font-telemetry text-[10px] text-holo-amber font-semibold">148 WPM</span>
                </div>
                <div className="w-px h-6 bg-[#343943]"></div>
                <div className="flex flex-col text-right">
                  <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">Confidence</span>
                  <span className="font-telemetry text-[10px] text-holo-cyan font-semibold">99.8%</span>
                </div>
              </div>
            </div>
            
            {/* Synthesized Quote Box with Realtime Waveform Bar */}
            <div className="mt-4 p-2 bg-[#171c25]/90 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-8 h-8 rounded-full bg-orange-400/30 text-holo-amber flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">neurology</span>
                </div>
                <p className="font-sans text-[13px] text-orange-200 italic truncate">
                  “Good morning. You have three high-priority tasks today. Your afternoon has one hour of uninterrupted focus time [14:00 - 15:00].”
                </p>
              </div>
              
              {/* Inline Audio Waveform Canvas Visualizer */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-telemetry text-[9px] text-holo-amber uppercase tracking-wider">SYNTH FEED</span>
                <div className="flex items-center gap-0.5 h-5 px-2 bg-[#090e17]/80 rounded" id="aura-synth-bars">
                  <div className="w-0.5 h-2 bg-holo-amber rounded-full transition-all"></div>
                  <div className="w-0.5 h-4 bg-holo-amber rounded-full transition-all"></div>
                  <div className="w-0.5 h-5 bg-holo-cyan rounded-full transition-all"></div>
                  <div className="w-0.5 h-3 bg-holo-amber rounded-full transition-all"></div>
                  <div className="w-0.5 h-4 bg-holo-cyan rounded-full transition-all"></div>
                  <div className="w-0.5 h-2 bg-holo-amber rounded-full transition-all"></div>
                  <div className="w-0.5 h-5 bg-holo-amber rounded-full transition-all"></div>
                  <div className="w-0.5 h-3 bg-holo-cyan rounded-full transition-all"></div>
                  <div className="w-0.5 h-1 bg-holo-amber rounded-full transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary 3-Column Cockpit Workspace */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 w-full items-start">
          
          {/* ==================== LEFT COCKPIT COLUMN: Mission Schedule (Cols 1-3) ==================== */}
          <div className="xl:col-span-3 flex flex-col gap-4 w-full">
            <div className="bg-[#090e17]/80 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col gap-2 border border-slate-800">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-holo-amber">schedule</span>
                  <span className="font-sans text-[16px] uppercase tracking-wider text-slate-200 font-bold">Mission Timeline</span>
                </div>
                <span className="font-telemetry text-[9px] px-2 py-0.5 rounded bg-[#252a33] text-holo-cyan">
                  6 WIDGETS
                </span>
              </div>
              <p className="font-sans text-[12px] text-slate-400">
                Linear chronologic dispatch synchronized with neural scheduling protocol.
              </p>
              
              <div className="flex flex-col gap-2 mt-1">
                {/* Event 1 */}
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">[08:30]</span>
                    <span className="font-telemetry text-[9px] text-holo-cyan bg-[#30353e] px-1.5 py-0.5 rounded">COMPLETED</span>
                  </div>
                  <div className="font-sans text-[13px] text-slate-200 font-semibold">Team Standup</div>
                  <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-holo-cyan">mic</span>
                    25m • Audio recap stored in Memory
                  </div>
                </div>
                
                {/* Event 2 */}
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">[10:00]</span>
                    <span className="font-telemetry text-[9px] text-holo-cyan bg-[#30353e] px-1.5 py-0.5 rounded">RESOLVED</span>
                  </div>
                  <div className="font-sans text-[13px] text-slate-200 font-semibold">Client Strategic Call</div>
                  <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-holo-cyan">send</span>
                    45m • 4 Action items dispatched
                  </div>
                </div>
                
                {/* Event 3 */}
                <div className="p-2 rounded-lg bg-[#252a33]/80 flex flex-col gap-1 border border-holo-amber/20">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-holo-amber font-bold">[13:00]</span>
                    <span className="font-telemetry text-[9px] text-holo-amber bg-orange-400/30 px-1.5 py-0.5 rounded">ACTIVE</span>
                  </div>
                  <div className="font-sans text-[13px] text-orange-200 font-semibold">Tactical Lunch & Resync</div>
                  <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-holo-amber">vital_signs</span>
                    Nutritional intake & cognitive buffer reset
                  </div>
                </div>
                
                {/* Event 4 */}
                <div className="relative p-4 rounded-xl bg-gradient-to-br from-orange-400/40 via-[#252a33] to-[#090e17] shadow-2xl flex flex-col gap-1 overflow-hidden border border-orange-500/30">
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-holo-amber/20 rounded-full blur-xl pointer-events-none"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-holo-amber font-telemetry text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[15px] animate-pulse">shield</span>
                      <span>[14:00 - 15:00]</span>
                    </div>
                    <span className="font-telemetry text-[9px] uppercase bg-orange-200 text-[#482900] px-2 py-0.5 rounded font-bold">
                      SHIELD ACTIVE
                    </span>
                  </div>
                  <div className="font-sans text-[16px] text-orange-200 mt-1 font-bold">Uninterrupted Focus Block</div>
                  <p className="font-sans text-[12px] text-slate-300">
                    Full sensory isolation. Autonomous AI triage intercepts all calls, pings, and comms.
                  </p>
                  <div className="mt-1 pt-1 flex items-center justify-between font-telemetry text-[9px] text-holo-amber border-t border-holo-amber/20">
                    <span>DND ENFORCED</span>
                    <span>BUFFER // 60 MIN</span>
                  </div>
                </div>
                
                {/* Event 5 */}
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">[15:30]</span>
                    <span className="font-telemetry text-[9px] text-slate-400 bg-[#30353e] px-1.5 py-0.5 rounded">QUEUED</span>
                  </div>
                  <div className="font-sans text-[13px] text-slate-200 font-semibold">Design Review (UI / SecOps)</div>
                  <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">person</span>
                    Sarah Chen • Holographic canvas link ready
                  </div>
                </div>
                
                {/* Event 6 */}
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">[18:00]</span>
                    <span className="font-telemetry text-[9px] text-slate-400 bg-[#30353e] px-1.5 py-0.5 rounded">BIO-SYNC</span>
                  </div>
                  <div className="font-sans text-[13px] text-slate-200 font-semibold">Kinetic Conditioning</div>
                  <div className="font-sans text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-holo-cyan">favorite</span>
                    Cardio threshold monitoring • Wearable tethered
                  </div>
                </div>
              </div>
              
              <div className="pt-2 flex flex-col gap-1">
                <button className="w-full py-2 px-2 bg-[#252a33] hover:bg-[#343943] text-sky-200 font-telemetry text-[10px] rounded flex items-center justify-center gap-2 transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[15px]">add_circle</span>
                  <span>[+] INJECT CALENDAR SYNC</span>
                </button>
                <button className="w-full py-2 px-2 bg-orange-400/30 hover:bg-orange-400/50 text-holo-amber font-telemetry text-[10px] rounded flex items-center justify-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-[15px]">auto_mode</span>
                  <span>AUTONOMOUS RE-ALLOCATION</span>
                </button>
              </div>
            </div>
          </div>

          {/* ==================== CENTER COCKPIT STAGE: Ultron Core & Telemetry Sphere (Cols 4-8) ==================== */}
          <div className="xl:col-span-6 flex flex-col items-center gap-4 w-full">
            <div className="relative w-full rounded-2xl bg-[#090e17]/90 backdrop-blur-xl p-4 shadow-2xl overflow-hidden flex flex-col items-center min-h-[580px] justify-between border border-slate-800">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-full bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]"></div>
              </div>
              
              <div className="w-full flex items-center justify-between z-10">
                <div className="flex items-center gap-1 font-telemetry text-[9px] text-holo-cyan">
                  <span className="material-symbols-outlined text-[14px]">sensors</span>
                  <span>CORE AZIMUTH: 184.22° // FREQ: 9.4 GHz</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[9px] text-holo-amber px-2 py-0.5 rounded bg-orange-400/20">
                    ORBITAL TRACK ENGAGED
                  </span>
                </div>
              </div>
              
              <div className="relative w-full max-w-[440px] aspect-square flex items-center justify-center my-2">
                <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none opacity-40">
                  <span className="absolute top-1 font-telemetry text-[10px] text-holo-amber">N 000°</span>
                  <span className="absolute right-1 font-telemetry text-[10px] text-holo-cyan">E 090°</span>
                  <span className="absolute bottom-1 font-telemetry text-[10px] text-holo-amber">S 180°</span>
                  <span className="absolute left-1 font-telemetry text-[10px] text-holo-cyan">W 270°</span>
                </div>
                
                <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] animate-[spin_40s_linear_infinite] pointer-events-none opacity-60" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" fill="none" r="185" stroke="#00f0ff" strokeDasharray="8 12" strokeWidth="0.75"></circle>
                  <circle cx="200" cy="200" fill="none" r="155" stroke="#ffb869" strokeDasharray="24 16 4 16" strokeWidth="1.2"></circle>
                  <circle cx="200" cy="200" fill="none" r="130" stroke="#00f0ff" strokeDasharray="4 4" strokeWidth="0.5"></circle>
                </svg>
                
                <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,149,0,0.45)] flex items-center justify-center group cursor-pointer border border-holo-amber/40 bg-gradient-to-tr from-orange-950 via-amber-900 to-amber-700">
                  {/* Placeholder for Core visual */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/40 via-orange-600/20 to-transparent"></div>
                  
                  <div className="absolute z-10 flex flex-col items-center text-center pointer-events-none">
                    <span className="font-telemetry text-[9px] text-orange-200 uppercase tracking-widest drop-shadow">ORBIT MATRIX</span>
                    <span className="font-sans text-[28px] text-orange-200 font-bold tracking-widest drop-shadow-[0_0_12px_#ff9a00]">SARA</span>
                    <span className="font-telemetry text-[9px] text-holo-cyan">SYNAPSE 4.2</span>
                  </div>
                </div>
                
                <div className="absolute top-6 left-6 bg-[#252a33]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 transform hover:-translate-y-0.5 transition-all border border-slate-700/50">
                  <span className="w-2 h-2 rounded-full bg-holo-cyan"></span>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">EPOCH</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-bold">TODAY</span>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-[#252a33]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 transform hover:-translate-y-0.5 transition-all border border-slate-700/50">
                  <span className="material-symbols-outlined text-[14px] text-holo-amber">task_alt</span>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">LOAD</span>
                    <span className="font-telemetry text-[10px] text-holo-amber font-bold">7 TASKS</span>
                  </div>
                </div>
                
                <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#252a33]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 transform hover:translate-x-0.5 transition-all border border-slate-700/50">
                  <span className="material-symbols-outlined text-[14px] text-sky-300">groups</span>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">COMM</span>
                    <span className="font-telemetry text-[10px] text-sky-300 font-bold">3 SESSIONS</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-[#252a33]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 transform hover:translate-y-0.5 transition-all border border-slate-700/50">
                  <span className="material-symbols-outlined text-[14px] text-red-400">priority_high</span>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">CRITICAL</span>
                    <span className="font-telemetry text-[10px] text-red-400 font-bold">2 PRIORITIES</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-[#252a33]/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 transform hover:translate-y-0.5 transition-all border border-slate-700/50">
                  <span className="material-symbols-outlined text-[14px] text-holo-cyan">timelapse</span>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[9px] text-slate-400">RESERVE</span>
                    <span className="font-telemetry text-[10px] text-holo-cyan font-bold">4.0 HRS FREE</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-[#1b2029]/70 backdrop-blur rounded-xl p-2 flex flex-col sm:flex-row items-center justify-between gap-2 z-10 border border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-[#343943]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                      <path className="text-holo-amber" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="38, 100" strokeLinecap="round" strokeWidth="3"></path>
                    </svg>
                    <span className="absolute font-telemetry text-[10px] text-holo-amber font-bold">38%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-telemetry text-[10px] text-slate-200 font-semibold">
                      DAY PROGRESSION MATRIX
                    </span>
                    <span className="font-telemetry text-[9px] text-slate-400">
                      T-MINUS 8.5 HRS REMAINING IN OPERATIONAL SHIFT
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="px-2 py-1.5 bg-[#252a33] hover:bg-[#343943] rounded text-orange-200 font-telemetry text-[9px] flex items-center gap-1 transition-all">
                    <span className="material-symbols-outlined text-[13px]">bolt</span>
                    QUICK AUDIT
                  </button>
                  <button className="px-2 py-1.5 bg-holo-cyan text-[#00363a] hover:opacity-90 rounded font-telemetry text-[9px] font-bold flex items-center gap-1 transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                    <span className="material-symbols-outlined text-[13px]">mic</span>
                    BRIEF ME VERBALLY
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Sensor 1 */}
              <div className="relative bg-[#090e17]/80 rounded-xl p-2 overflow-hidden flex flex-col shadow-lg border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-telemetry text-[9px] text-holo-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
                    OPTICAL // CAM-01
                  </span>
                  <span className="font-telemetry text-[9px] text-slate-400">1080P // 60FPS</span>
                </div>
                <div className="relative w-full h-28 rounded-lg overflow-hidden bg-[#252a33] flex items-center justify-center border border-slate-700/50">
                  <span className="material-symbols-outlined text-slate-600 text-4xl">videocam_off</span>
                  <div className="absolute bottom-1.5 left-2 font-telemetry text-[9px] text-orange-200 bg-[#090e17]/90 px-1.5 py-0.5 rounded">
                    USER TRACK: ENGAGED
                  </div>
                </div>
              </div>
              
              {/* Sensor 2 */}
              <div className="relative bg-[#090e17]/80 rounded-xl p-2 overflow-hidden flex flex-col shadow-lg border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-telemetry text-[9px] text-holo-amber flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-amber animate-pulse"></span>
                    DISPLAY // MIRROR-02
                  </span>
                  <span className="font-telemetry text-[9px] text-slate-400">OCR PASSIVE</span>
                </div>
                <div className="relative w-full h-28 rounded-lg overflow-hidden bg-[#252a33] flex items-center justify-center border border-slate-700/50">
                  <span className="material-symbols-outlined text-slate-600 text-4xl">desktop_windows</span>
                  <div className="absolute bottom-1.5 left-2 font-telemetry text-[9px] text-holo-cyan bg-[#090e17]/90 px-1.5 py-0.5 rounded">
                    SURFACE SCAN: 4 APPS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COCKPIT COLUMN: Task Matrix & Cognitive Load (Cols 9-12) ==================== */}
          <div className="xl:col-span-3 flex flex-col gap-4 w-full">
            <div className="bg-[#090e17]/80 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col gap-2 border border-slate-800">
              <div className="flex items-center justify-between pb-1">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-holo-cyan">checklist</span>
                  <span className="font-sans text-[16px] uppercase tracking-wider text-slate-200 font-bold">Task Matrix</span>
                </div>
                <span className="font-telemetry text-[9px] px-2 py-0.5 rounded bg-[#252a33] text-holo-amber">
                  3 ACTIVE
                </span>
              </div>
              <p className="font-sans text-[12px] text-slate-400">
                Realtime execution queue tracked across agents and autonomous subprocesses.
              </p>
              
              <div className="flex flex-col gap-2 mt-1">
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-holo-cyan/20 text-holo-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-sans text-[13px] text-slate-200 truncate">Email proposal dispatched</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Mail Composer • 08:42 AM</div>
                  </div>
                </div>
                
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-holo-cyan/20 text-holo-cyan flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-sans text-[13px] text-slate-200 truncate">Team meeting debrief</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Synaptic Memory • 09:15 AM</div>
                  </div>
                </div>
                
                <div className="p-2 rounded-lg bg-[#252a33]/90 shadow-md flex flex-col gap-1.5 border border-holo-amber/20">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded bg-holo-amber/20 text-holo-amber flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="font-sans text-[13px] text-orange-200 font-bold truncate">Finish Dashboard Code</div>
                        <span className="font-telemetry text-[8px] bg-orange-400/30 text-[#895200] px-1 rounded font-bold uppercase">HIGH</span>
                      </div>
                      <div className="font-telemetry text-[9px] text-holo-amber mt-0.5">Focus Mode Linked • 65% compiled</div>
                    </div>
                  </div>
                  <div className="w-full bg-[#090e17] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-400 to-holo-amber h-full rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div className="p-2 rounded-lg bg-[#1b2029]/60 hover:bg-[#1b2029] transition-all flex items-start gap-2">
                  <div className="w-5 h-5 rounded bg-[#30353e] text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">radio_button_unchecked</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-sans text-[13px] text-slate-200 truncate">Review vendor invoices</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Autonomous OCR parsing • 4 files</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-2 p-2 bg-[#252a33]/60 rounded-lg flex flex-col gap-1 border border-slate-700/50">
              <div className="flex items-center justify-between">
                <span className="font-telemetry text-[9px] text-slate-400 uppercase tracking-wider">Cognitive Load Forecast</span>
                <span className="font-telemetry text-[10px] text-holo-amber font-bold">68% // MODERATE</span>
              </div>
              <div className="w-full h-8 flex items-end">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 24">
                  <path d="M0,18 Q15,6 30,14 T60,8 T80,16 T100,6" fill="none" stroke="#ffb869" strokeWidth="1.5"></path>
                  <path d="M0,18 Q15,6 30,14 T60,8 T80,16 T100,6 L100,24 L0,24 Z" fill="rgba(255,184,105,0.08)"></path>
                </svg>
              </div>
              <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-400 pt-1">
                <span>BURNOUT RISK: LOW</span>
                <span>EST. FINISH: 17:45 UTC</span>
              </div>
            </div>
            
            <div className="pt-2 flex flex-col gap-1">
              <button className="w-full py-2 px-2 bg-gradient-to-r from-orange-400/30 to-holo-amber/20 hover:from-orange-400/50 hover:to-holo-amber/40 text-holo-amber font-telemetry text-[10px] rounded flex items-center justify-center gap-2 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[15px]">electric_bolt</span>
                <span>[⚡ EXECUTE AUTONOMOUS PRE-BRIEFING]</span>
              </button>
              <button className="w-full py-2 px-2 bg-[#252a33] hover:bg-[#343943] text-slate-400 hover:text-slate-200 font-telemetry text-[10px] rounded flex items-center justify-center gap-2 transition-all">
                <span className="material-symbols-outlined text-[15px]">notifications_off</span>
                <span>[HOLD ALL NOTIFICATIONS]</span>
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </ConsoleLayout>
  );
}
