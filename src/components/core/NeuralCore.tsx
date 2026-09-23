"use client";

import React, { useEffect, useState } from "react";
import { ThreeNeuralOrb } from "./ThreeNeuralOrb";

interface NeuralCoreProps {
  isAuthenticating?: boolean;
  statusText?: string;
}

export const NeuralCore: React.FC<NeuralCoreProps> = ({
  isAuthenticating = false,
  statusText = "STANDBY CORE",
}) => {
  const [radAngle, setRadAngle] = useState(182.44);

  // Dynamic subtle radar angle increment
  useEffect(() => {
    const timer = setInterval(() => {
      setRadAngle((prev) => parseFloat(((prev + 0.18) % 360).toFixed(2)));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-72 h-72 md:w-88 md:h-88 flex items-center justify-center mb-6 select-none">
      {/* Outer SVG Reticle Ring - Clockwise 32s rotation */}
      <svg
        className="absolute inset-0 w-full h-full animate-[spin_32s_linear_infinite] opacity-40 text-primary-container pointer-events-none"
        fill="none"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          opacity="0.6"
          r="188"
          stroke="currentColor"
          strokeDasharray="6 14"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          opacity="0.4"
          r="164"
          stroke="currentColor"
          strokeDasharray="2 8"
          strokeWidth="0.75"
        />
        <circle
          cx="200"
          cy="200"
          opacity="0.8"
          r="130"
          stroke="currentColor"
          strokeDasharray="32 18 8 18"
          strokeWidth="1.5"
        />
        <path
          d="M 200 4 A 196 196 0 0 1 396 200"
          opacity="0.7"
          stroke="#00f0ff"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M 200 396 A 196 196 0 0 1 4 200"
          opacity="0.5"
          stroke="#ffb869"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </svg>

      {/* Middle SVG Reticle Ring - Counter-clockwise 20s rotation */}
      <svg
        className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] animate-[spin_20s_linear_infinite_reverse] opacity-60 text-secondary-container pointer-events-none"
        fill="none"
        viewBox="0 0 360 360"
      >
        <circle
          cx="180"
          cy="180"
          opacity="0.5"
          r="160"
          stroke="currentColor"
          strokeDasharray="14 10"
          strokeWidth="0.8"
        />
        <circle
          cx="180"
          cy="180"
          opacity="0.7"
          r="115"
          stroke="#00dbe9"
          strokeDasharray="4 6"
          strokeWidth="1.2"
        />
        <circle
          cx="180"
          cy="180"
          opacity="0.4"
          r="85"
          stroke="#ffd1a3"
          strokeDasharray="24 4"
          strokeWidth="1"
        />
        <line
          opacity="0.3"
          stroke="currentColor"
          strokeDasharray="4 8"
          strokeWidth="0.5"
          x1="180"
          x2="180"
          y1="10"
          y2="350"
        />
        <line
          opacity="0.3"
          stroke="currentColor"
          strokeDasharray="4 8"
          strokeWidth="0.5"
          x1="10"
          x2="350"
          y1="180"
          y2="180"
        />
      </svg>

      {/* Center Holographic Core Orb Container */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center p-3">
        {/* Hologram ambient backdrop pulse */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container via-surface-tint to-tertiary-fixed-dim ${
            isAuthenticating ? "opacity-60 scale-105" : "opacity-30"
          } blur-xl animate-pulse transition-all duration-500`}
        />

        {/* Central HUD Chamber */}
        <div className="w-full h-full rounded-full bg-surface-container-lowest/90 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center shadow-[inset_0_0_24px_rgba(0,240,255,0.45)] border border-primary-container/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,240,255,0.35)_0%,rgba(6,9,14,0.9)_75%)]" />

          {/* Embedded 3D Three.js Synapse Orb Layer */}
          <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
            <ThreeNeuralOrb isAuthenticating={isAuthenticating} />
          </div>

          {/* Central Telemetry Readout */}
          <div className="relative z-10 flex flex-col items-center pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-surface-container/60 border border-primary-container/40 flex items-center justify-center shadow-[0_0_18px_rgba(0,240,255,0.5)] backdrop-blur-sm">
              <span
                className="material-symbols-outlined text-primary-container text-3xl animate-pulse"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                bubble_chart
              </span>
            </div>
            <span className="font-telemetry-micro text-telemetry-micro text-primary-fixed tracking-widest mt-2 uppercase">
              {isAuthenticating ? "PROCESSING" : statusText}
            </span>
            <span className="font-telemetry-sm text-telemetry-sm text-on-surface-variant font-mono">
              0.038ms STROKE
            </span>
          </div>

          {/* Status micro LED pings */}
          <div className="absolute bottom-2 flex space-x-1 opacity-70 z-10">
            <span className="w-1 h-1 rounded-full bg-primary-container animate-ping" />
            <span className="w-1 h-1 rounded-full bg-secondary" />
            <span className="w-1 h-1 rounded-full bg-tertiary-fixed-dim" />
          </div>
        </div>
      </div>

      {/* Orbit Telemetry Markers */}
      <div className="absolute top-1 left-2 font-telemetry-micro text-telemetry-micro text-on-surface-variant/80 tracking-widest font-mono">
        RAD_ANG: {radAngle}°
      </div>
      <div className="absolute bottom-2 right-2 font-telemetry-micro text-telemetry-micro text-primary-fixed-dim/90 tracking-widest font-mono">
        NEURAL_FLUX // OK
      </div>
    </div>
  );
};
