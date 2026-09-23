"use client";

import React, { useEffect, useState } from "react";

interface HeaderTelemetryProps {
  version?: string;
  uptime?: string;
  clearance?: string;
  airGapped?: boolean;
}

export const HeaderTelemetry: React.FC<HeaderTelemetryProps> = ({
  version = "CORE-V5.2",
  uptime = "99.9994%",
  clearance = "CLEARANCE_L5",
  airGapped = true,
}) => {
  const [currentUptime, setCurrentUptime] = useState(uptime);

  // Subtle realistic micro-fluctuation to give that living military/cyber HUD feel
  useEffect(() => {
    const interval = setInterval(() => {
      const base = 99.9994;
      const jitter = (Math.random() * 0.0004 - 0.0002).toFixed(4);
      setCurrentUptime(`${(base + parseFloat(jitter)).toFixed(4)}%`);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full max-w-5xl flex items-center justify-between py-3 mb-6 border-b border-outline-variant/30 text-on-surface-variant font-telemetry-micro text-telemetry-micro tracking-widest uppercase transition-all duration-300">
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-primary-container relative" />
        </div>
        <span className="text-primary tracking-widest font-semibold">
          SARA // {version}
        </span>
        <span className="text-outline">::</span>
        <span className="hidden sm:inline">SECURE NEURAL TRANSCEIVER</span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <span className="hidden sm:inline text-outline-variant font-mono">
          SYS_UPTIME: {currentUptime}
        </span>
        <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary-fixed-dim border border-primary-fixed-dim/20">
          {clearance}
        </span>
        {airGapped && (
          <span className="px-2 py-0.5 rounded bg-error-container/40 text-error border border-error/30 animate-pulse">
            AIR-GAPPED ROUTE
          </span>
        )}
      </div>
    </header>
  );
};
