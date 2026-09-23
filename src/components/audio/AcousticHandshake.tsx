"use client";

import React, { useEffect, useState } from "react";

interface AcousticHandshakeProps {
  statusText?: string;
  isListening?: boolean;
}

const BAR_DEFINITIONS = [
  { color: "bg-secondary-container", baseH: 2, duration: "0.8s" },
  { color: "bg-primary-container", baseH: 5, duration: "1.1s" },
  { color: "bg-surface-tint", baseH: 3, duration: "0.7s" },
  { color: "bg-primary-container", baseH: 6, duration: "1.4s" },
  { color: "bg-tertiary-fixed-dim", baseH: 4, duration: "0.9s" },
  { color: "bg-primary-container", baseH: 7, duration: "1.3s" },
  { color: "bg-secondary-container", baseH: 3, duration: "0.6s" },
  { color: "bg-primary", baseH: 5, duration: "1.2s" },
  { color: "bg-primary-container", baseH: 2, duration: "0.8s" },
  { color: "bg-secondary", baseH: 6, duration: "1.5s" },
  { color: "bg-tertiary-fixed-dim", baseH: 4, duration: "1.0s" },
  { color: "bg-primary-container", baseH: 7, duration: "0.7s" },
  { color: "bg-surface-tint", baseH: 3, duration: "1.3s" },
  { color: "bg-primary-container", baseH: 5, duration: "0.8s" },
  { color: "bg-secondary-container", baseH: 2, duration: "1.1s" },
];

export const AcousticHandshake: React.FC<AcousticHandshakeProps> = ({
  statusText = "READY FOR SARA ACOUSTIC HANDSHAKE",
  isListening = true,
}) => {
  const [pulseMultiplier, setPulseMultiplier] = useState(1);

  // Subtle real-time audio wave dynamic intensity
  useEffect(() => {
    if (!isListening) return;
    const interval = setInterval(() => {
      setPulseMultiplier(0.85 + Math.random() * 0.35);
    }, 200);
    return () => clearInterval(interval);
  }, [isListening]);

  return (
    <div className="rounded-lg bg-surface-container/60 p-4 space-y-3 border border-outline-variant/20 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <span
            className="material-symbols-outlined text-tertiary-fixed-dim text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            graphic_eq
          </span>
          <div>
            <div className="font-telemetry-sm text-telemetry-sm text-on-surface uppercase tracking-wider font-semibold">
              Acoustic &amp; Biometric Handshake
            </div>
            <div className="font-telemetry-micro text-telemetry-micro text-on-surface-variant font-mono">
              {statusText}
            </div>
          </div>
        </div>

        {isListening ? (
          <span className="flex items-center gap-1.5 font-telemetry-micro text-telemetry-micro text-primary-fixed px-2.5 py-0.5 rounded bg-primary-container/10 border border-primary-container/30">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            LISTENING
          </span>
        ) : (
          <span className="flex items-center gap-1.5 font-telemetry-micro text-telemetry-micro text-on-surface-variant px-2.5 py-0.5 rounded bg-surface-container-high">
            MUTED
          </span>
        )}
      </div>

      {/* Waveform Equalizer Canvas Display */}
      <div className="h-10 bg-surface-container-lowest/90 rounded flex items-center justify-between px-3 overflow-hidden border border-outline-variant/30">
        <div
          className="flex items-center space-x-1 w-full justify-between h-7"
          id="waveCanvas"
        >
          {BAR_DEFINITIONS.map((bar, idx) => {
            const calculatedHeight = Math.min(
              28,
              Math.max(4, Math.round(bar.baseH * 4 * pulseMultiplier))
            );
            return (
              <div
                key={idx}
                className={`w-1 rounded-full ${bar.color} transition-all duration-150`}
                style={{
                  height: `${calculatedHeight}px`,
                  animation: `pulse ${bar.duration} ease-in-out infinite`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
