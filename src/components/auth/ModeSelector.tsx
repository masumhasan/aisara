"use client";

import React from "react";

export type OperationMode = "autonomous" | "sandbox";

interface ModeSelectorProps {
  currentMode: OperationMode;
  onModeChange: (mode: OperationMode) => void;
  disabled?: boolean;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({
  currentMode,
  onModeChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-1 rounded-lg bg-surface-container-lowest/60 border border-outline-variant/20">
      {/* E2EE Autonomous Mode Button */}
      <button
        id="btnModeAuton"
        type="button"
        disabled={disabled}
        onClick={() => onModeChange("autonomous")}
        className={`w-full sm:w-1/2 py-2.5 px-3 rounded-md flex items-center justify-center space-x-2 font-telemetry-sm text-telemetry-sm transition-all duration-200 ${
          currentMode === "autonomous"
            ? "bg-secondary-container/20 text-primary-fixed shadow-sm border border-secondary-container/40"
            : "text-on-surface-variant hover:text-on-surface border border-transparent"
        } disabled:opacity-50`}
      >
        <span className="material-symbols-outlined text-sm">smart_toy</span>
        <span className="tracking-wider uppercase">E2EE Autonomous Mode</span>
      </button>

      {/* Sandbox Read-Only Button */}
      <button
        id="btnModeSandbox"
        type="button"
        disabled={disabled}
        onClick={() => onModeChange("sandbox")}
        className={`w-full sm:w-1/2 py-2.5 px-3 rounded-md flex items-center justify-center space-x-2 font-telemetry-sm text-telemetry-sm transition-all duration-200 ${
          currentMode === "sandbox"
            ? "bg-tertiary-fixed-dim/20 text-tertiary-fixed shadow-sm border border-tertiary-fixed-dim/40"
            : "text-on-surface-variant hover:text-on-surface border border-transparent"
        } disabled:opacity-50`}
      >
        <span className="material-symbols-outlined text-sm">
          lock_open_right
        </span>
        <span className="tracking-wider uppercase">Sandbox Read-Only</span>
      </button>
    </div>
  );
};
