"use client";

import React, { useState, useEffect } from "react";

interface ActiveMatrixConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
}

export const ActiveMatrixConsole: React.FC<ActiveMatrixConsoleProps> = ({
  isOpen,
  onClose,
  mode,
}) => {
  const [latency, setLatency] = useState(18);
  const [synapseCount, setSynapseCount] = useState(14820);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    setLogs([
      "[00:00.012] SYNC: Handshake verified with Tokyo Hyper-Grid.",
      "[00:00.045] RTC: Initializing LiveKit low-latency WebRTC datachannel...",
      "[00:00.089] VOICE: Cartesia / OpenAI bidirectional pipeline armed.",
      "[00:00.120] SARA_CORE: Neural matrix online. Autonomous reasoning active.",
    ]);

    const interval = setInterval(() => {
      setLatency(16 + Math.floor(Math.random() * 5));
      setSynapseCount((c) => c + Math.floor(Math.random() * 12));
    }, 1500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl animate-fade-in">
      <div className="w-full max-w-3xl bg-surface-container-low/95 border border-primary-container/40 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.25)] p-6 md:p-8 space-y-6 relative overflow-hidden">
        {/* Holographic Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-primary-container animate-ping" />
            <div>
              <div className="font-telemetry-micro text-primary-fixed-dim uppercase tracking-widest">
                SESSION ACTIVE // PROTOCOL 5.2.0
              </div>
              <h2 className="font-headline-md text-primary font-light">
                SARA NEURAL MATRIX ONLINE
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-lg bg-surface-container-high/60 border border-outline-variant/40 text-sm font-telemetry-sm uppercase"
          >
            [DISCONNECT // ESC]
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-surface-container-lowest/80 p-3 rounded-lg border border-outline-variant/30">
            <div className="text-[10px] text-on-surface-variant uppercase font-mono">
              WebRTC RTT
            </div>
            <div className="text-xl font-mono text-primary font-semibold mt-1">
              {latency}ms
            </div>
          </div>
          <div className="bg-surface-container-lowest/80 p-3 rounded-lg border border-outline-variant/30">
            <div className="text-[10px] text-on-surface-variant uppercase font-mono">
              Synapse Nodes
            </div>
            <div className="text-xl font-mono text-tertiary-fixed-dim font-semibold mt-1">
              {synapseCount.toLocaleString()}
            </div>
          </div>
          <div className="bg-surface-container-lowest/80 p-3 rounded-lg border border-outline-variant/30">
            <div className="text-[10px] text-on-surface-variant uppercase font-mono">
              Operating Mode
            </div>
            <div className="text-sm font-mono text-secondary-fixed font-semibold mt-1 uppercase truncate">
              {mode}
            </div>
          </div>
          <div className="bg-surface-container-lowest/80 p-3 rounded-lg border border-outline-variant/30">
            <div className="text-[10px] text-on-surface-variant uppercase font-mono">
              Voice Engine
            </div>
            <div className="text-xs font-mono text-primary-fixed-dim font-semibold mt-1 uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              LIVEKIT / READY
            </div>
          </div>
        </div>

        {/* Terminal Telemetry Feed */}
        <div className="bg-surface-container-lowest/90 rounded-lg p-4 font-mono text-xs text-primary-fixed-dim space-y-1.5 border border-primary-container/20 max-h-48 overflow-y-auto">
          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log}
            </div>
          ))}
          <div className="text-on-surface-variant animate-pulse">
            ❯_ Awaiting audio input or neural dispatch command...
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] font-mono text-on-surface-variant">
            CHANNEL: SECURE_E2EE // LIVEKIT RTC AGENT
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-semibold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:brightness-110 transition-all"
          >
            MINIMIZE CONSOLE
          </button>
        </div>
      </div>
    </div>
  );
};
