"use client";

import React from "react";

export type AuthStage = "idle" | "synchronizing" | "verified";

interface InitializeButtonProps {
  authStage: AuthStage;
  onClick: () => void;
  disabled?: boolean;
}

export const InitializeButton: React.FC<InitializeButtonProps> = ({
  authStage,
  onClick,
  disabled = false,
}) => {
  const isIdle = authStage === "idle";
  const isSyncing = authStage === "synchronizing";
  const isVerified = authStage === "verified";

  let label = "INITIALIZE SARA CORE MATRIX";
  if (isSyncing) label = "SYNCHRONIZING SYNAPSE CHANNELS...";
  if (isVerified) label = "HANDSHAKE VERIFIED // DEPLOYING MATRIX";

  return (
    <button
      id="authSubmitBtn"
      type="submit"
      disabled={disabled || !isIdle}
      onClick={onClick}
      className={`w-full group relative overflow-hidden rounded-lg py-3.5 px-6 font-headline-sm text-headline-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-3 select-none active:scale-[0.99] ${
        isVerified
          ? "bg-primary-container text-on-primary shadow-[0_0_36px_rgba(0,240,255,0.7)]"
          : isSyncing
          ? "bg-gradient-to-r from-tertiary-fixed-dim via-tertiary-container to-tertiary-fixed text-on-tertiary opacity-85 animate-pulse shadow-[0_0_24px_rgba(255,184,105,0.45)]"
          : "bg-gradient-to-r from-tertiary-fixed-dim via-tertiary-container to-tertiary-fixed text-on-tertiary shadow-[0_0_24px_rgba(255,184,105,0.35)] hover:shadow-[0_0_36px_rgba(255,184,105,0.65)] hover:brightness-105"
      }`}
    >
      <span
        className={`material-symbols-outlined text-xl transition-transform duration-300 ${
          isVerified
            ? "rotate-90 text-on-primary"
            : isSyncing
            ? "animate-spin text-on-tertiary"
            : "group-hover:rotate-45 text-on-tertiary"
        }`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {isVerified ? "verified" : isSyncing ? "autorenew" : "token"}
      </span>

      <span id="btnLabel" className="tracking-wide">
        {label}
      </span>

      <span className="font-telemetry-sm text-telemetry-sm opacity-80 font-mono">
        {isVerified ? "[DEPLOYED]" : isSyncing ? "[BUSY]" : "[EXEC]"}
      </span>
    </button>
  );
};
