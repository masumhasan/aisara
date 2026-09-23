"use client";

import React, { useState } from "react";

interface PasskeyInputProps {
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
}

export const PasskeyInput: React.FC<PasskeyInputProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const [showKey, setShowKey] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationStatus, setValidationStatus] = useState<string | null>(null);

  const handleValidateMatrix = () => {
    setIsValidating(true);
    setValidationStatus("VERIFYING SHA3-512 HASH...");
    setTimeout(() => {
      setIsValidating(false);
      setValidationStatus("HASH VERIFIED // MATCH 100%");
      setTimeout(() => setValidationStatus(null), 2500);
    }, 800);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-on-surface-variant font-telemetry-sm text-telemetry-sm uppercase">
        <label
          htmlFor="neuralPasskey"
          className="tracking-wider flex items-center gap-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary-container text-sm">
            terminal
          </span>
          <span>Cryptographic Neural Token / Passkey</span>
        </label>
        <div className="flex items-center gap-2">
          {validationStatus ? (
            <span className="text-tertiary-fixed-dim text-[10px] animate-pulse">
              {validationStatus}
            </span>
          ) : (
            <span className="text-primary-fixed-dim/70">SHA3-512 SECURED</span>
          )}
        </div>
      </div>

      <div className="relative flex items-center bg-surface-container-lowest/80 rounded-lg p-2.5 shadow-inner border border-outline-variant/30 focus-within:border-primary-container/60 transition-colors">
        <span className="font-telemetry-md text-telemetry-md text-primary-container pl-2 select-none font-mono">
          ❯_
        </span>
        <input
          id="neuralPasskey"
          type={showKey ? "text" : "password"}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder="•••• •••• •••• ••••"
          className="w-full bg-transparent border-0 outline-none px-3 font-telemetry-lg text-telemetry-lg text-primary tracking-[0.25em] placeholder:text-outline-variant/40 focus:ring-0 font-mono disabled:opacity-60"
        />

        <div className="flex items-center space-x-1 pr-1">
          <button
            type="button"
            onClick={() => setShowKey(!showKey)}
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            title={showKey ? "Hide Passkey" : "Reveal Passkey"}
          >
            <span className="material-symbols-outlined text-lg">
              {showKey ? "visibility_off" : "visibility"}
            </span>
          </button>
          <button
            type="button"
            onClick={handleValidateMatrix}
            disabled={isValidating}
            className={`text-on-surface-variant hover:text-primary transition-colors p-1 ${
              isValidating ? "animate-spin text-primary-container" : ""
            }`}
            title="Validate Key Matrix"
          >
            <span className="material-symbols-outlined text-lg">vpn_key</span>
          </button>
        </div>
      </div>
    </div>
  );
};
