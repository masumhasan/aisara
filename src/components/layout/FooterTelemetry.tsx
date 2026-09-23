"use client";

import React from "react";

interface FooterTelemetryProps {
  nodeName?: string;
  rtcEngine?: string;
  cipher?: string;
  clearanceLevel?: string;
}

export const FooterTelemetry: React.FC<FooterTelemetryProps> = ({
  nodeName = "AP-NORTHEAST-1 (TOKYO HYPER-GRID)",
  rtcEngine = "LIVEKIT LOW-LATENCY WEBRTC",
  cipher = "TLS 1.3 // X25519-AES-GCM",
  clearanceLevel = "LVL_5",
}) => {
  return (
    <footer className="w-full max-w-4xl mt-8 pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-y-3 font-telemetry-micro text-telemetry-micro text-on-surface-variant select-none">
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
        <span className="text-on-surface font-semibold">NODE:</span>
        <span className="text-primary-fixed-dim">{nodeName}</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
        <span className="text-on-surface font-semibold">RTC ENGINE:</span>
        <span className="text-secondary-fixed">{rtcEngine}</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim" />
        <span className="text-on-surface font-semibold">CIPHER:</span>
        <span className="text-tertiary-fixed">{cipher}</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary tracking-widest font-mono border border-outline-variant/40">
          AUTH_CLEARANCE: {clearanceLevel}
        </span>
      </div>
      <div className="flex items-center space-x-2 w-full mt-2 justify-center border-t border-outline-variant/20 pt-2 text-on-surface-variant/70">
        <span>Built by <a href="https://masumhasan.web.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-semibold">Nur Hasan Masum</a></span>
      </div>
    </footer>
  );
};
