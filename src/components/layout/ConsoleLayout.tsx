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
      
    </div>
  );
};
