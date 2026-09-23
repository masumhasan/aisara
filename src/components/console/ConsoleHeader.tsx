"use client";

import React, { useState, useEffect } from "react";

export const ConsoleHeader = () => {
  const [sessionTime, setSessionTime] = useState("00:00:00");

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - startTime) / 1000);
      const h = String(Math.floor(diff / 3600)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600) / 60)).padStart(2, "0");
      const s = String(diff % 60).padStart(2, "0");
      setSessionTime(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 h-14 z-50 bg-[#020409]/85 backdrop-blur-xl border-b border-holo-cyan/20 px-6 flex items-center justify-between shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
      {/* Brand / System Identity */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-holo-cyan opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-holo-cyan shadow-[0_0_10px_#00f0ff]"></span>
          </span>
          <span className="font-sans font-extrabold text-[17px] tracking-[0.22em] text-holo-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
            SARA
          </span>
        </div>
        <div className="h-4 w-px bg-holo-cyan/30"></div>
        <span className="hidden md:inline font-telemetry text-[10px] text-holo-muted tracking-widest uppercase">
          AUTONOMOUS REALTIME MATRIX // JARVIS-CORE v4.8
        </span>
      </div>

      {/* Live Status Telemetry Pill */}
      <div className="hidden lg:flex items-center gap-3 px-3.5 py-1 rounded-full bg-[#050e1c]/90 border border-holo-cyan/30 shadow-[0_0_14px_rgba(0,240,255,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
        <span className="font-telemetry text-[11px] text-holo-cyan font-medium tracking-wider">
          LIVEKIT RTC ACTIVE
        </span>
        <span className="text-holo-muted font-telemetry text-[10px]">•</span>
        <span className="font-telemetry text-[11px] text-slate-300">
          48kHz OPUS
        </span>
        <span className="text-holo-muted font-telemetry text-[10px]">•</span>
        <span className="font-telemetry text-[11px] text-emerald-400 font-semibold">
          12ms LATENCY
        </span>
      </div>

      {/* Right HUD Status Cluster */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 font-telemetry text-[12px] text-holo-cyan bg-[#040e1f]/80 px-2.5 py-1 rounded border border-holo-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
          <span className="material-symbols-outlined text-[15px] text-holo-cyan">
            timer
          </span>
          <span>{sessionTime}</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-[#061124]/90 border border-slate-700/60">
          <span className="material-symbols-outlined text-[13px] text-holo-cyan">
            lock
          </span>
          <span className="font-telemetry text-[10px] text-slate-300 tracking-wider">
            E2EE-256
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#031326] border border-holo-cyan/50 flex items-center justify-center text-holo-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)]">
          <span className="material-symbols-outlined text-[17px]">person</span>
        </div>
      </div>
    </header>
  );
};
