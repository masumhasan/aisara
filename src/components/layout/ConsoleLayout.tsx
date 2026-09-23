"use client";

import React from "react";
import { ConsoleHeader } from "@/components/console/ConsoleHeader";
import { ConsoleSidebar } from "@/components/console/ConsoleSidebar";

interface ConsoleLayoutProps {
  children: React.ReactNode;
}

export const ConsoleLayout: React.FC<ConsoleLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#020409] font-sans text-holo-text antialiased select-none">
      {/* Deep Obsidian Space Radial Atmospheric Backlight */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-[#020409]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(0,240,255,0.11)_0%,rgba(2,5,14,0.98)_72%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(56,189,248,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.03)_0%,transparent_40%)]"></div>
      </div>

      {/* HUD Collimator Scanlines & Precision Reference Ticks */}
      <div className="fixed inset-0 pointer-events-none -z-10 cyber-scanlines opacity-40"></div>
      <div className="pointer-events-none fixed inset-0 z-40">
        <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-holo-cyan/50"></div>
        <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-holo-cyan/50"></div>
        <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-holo-cyan/50"></div>
        <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-holo-cyan/50"></div>
      </div>

      <ConsoleHeader />
      <ConsoleSidebar />

      {/* Main Dashboard Viewport */}
      <div className="pl-14 w-full">
        {children}
      </div>
      
      {/* Floating Call Control Dock (Capsule at Bottom Center) */}
      <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#030915]/85 backdrop-blur-2xl border border-holo-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.22),inset_0_0_15px_rgba(0,240,255,0.1)]">
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
            title="Audio Output Device"
          >
            <span className="material-symbols-outlined text-[19px]">volume_up</span>
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
            title="Toggle Optical Vision Feed"
          >
            <span className="material-symbols-outlined text-[19px]">videocam</span>
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
            title="Share Screen Stream"
          >
            <span className="material-symbols-outlined text-[19px]">screen_share</span>
          </button>

          {/* Main Glowing Voice Mic Button */}
          <button
            className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#00b4d8] to-[#00f0ff] text-[#020409] font-bold flex items-center justify-center shadow-[0_0_24px_rgba(0,240,255,0.7)] hover:scale-105 transition-all"
            title="Voice Input Active"
          >
            <span className="material-symbols-outlined text-[24px]">mic</span>
          </button>

          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
            title="Realtime Transcript Feed"
          >
            <span className="material-symbols-outlined text-[19px]">chat_bubble</span>
          </button>
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
            title="Sub-agent Tool Registry"
          >
            <span className="material-symbols-outlined text-[19px]">data_object</span>
          </button>
          
          <div className="h-6 w-px bg-holo-cyan/30 mx-1"></div>
          
          <button
            className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 border border-red-500/40 hover:bg-red-500/20 hover:text-red-200 transition-all shadow-[0_0_10px_rgba(255,77,77,0.2)]"
            title="Terminate Session"
          >
            <span className="material-symbols-outlined text-[19px]">call_end</span>
          </button>
        </div>
      </div>
    </div>
  );
};
