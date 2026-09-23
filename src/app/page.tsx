"use client";

import React, { useState } from "react";
import { BackgroundGlow } from "@/components/ambient/BackgroundGlow";
import { HeaderTelemetry } from "@/components/layout/HeaderTelemetry";

import { NeuralCore } from "@/components/core/NeuralCore";
import { PasskeyInput } from "@/components/auth/PasskeyInput";
import { AcousticHandshake } from "@/components/audio/AcousticHandshake";
import { ModeSelector, OperationMode } from "@/components/auth/ModeSelector";
import { InitializeButton, AuthStage } from "@/components/auth/InitializeButton";
import { ActiveMatrixConsole } from "@/components/matrix/ActiveMatrixConsole";
import { useRouter } from "next/navigation";

export default function SaraMatrixPage() {
  const router = useRouter();
  const [passkey, setPasskey] = useState("NRL-7749-XQ91-SYN-SARA");
  const [currentMode, setCurrentMode] = useState<OperationMode>("autonomous");
  const [authStage, setAuthStage] = useState<AuthStage>("idle");
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  const handleTriggerAuth = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (authStage !== "idle") return;

    // Stage 1: Synchronizing
    setAuthStage("synchronizing");

    // Stage 2: Verified Handshake
    setTimeout(() => {
      setAuthStage("verified");

      // Stage 3: Redirect to console
      setTimeout(() => {
        router.push("/console");
      }, 2200);
    }, 1800);
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center relative bg-[#06090e] font-body-md text-on-surface">
      {/* Dynamic Ambient Glow Behind Core */}
      <BackgroundGlow />

      <div className="flex flex-col w-full relative min-w-0 overflow-hidden items-center justify-center py-6 px-4 md:px-8">
        {/* Top Telemetry Bar */}
        <HeaderTelemetry
          version="CORE-V5.2"
          uptime="99.9994%"
          clearance="CLEARANCE_L5"
          airGapped={true}
        />

        {/* Central 3D Cybernetic Neural Core Hologram */}
        <NeuralCore
          isAuthenticating={authStage === "synchronizing"}
          statusText={authStage === "verified" ? "MATRIX LINKED" : "STANDBY CORE"}
        />

        {/* Main Matrix Initialization Form Card */}
        <div className="w-full max-w-2xl bg-surface-container-low/85 backdrop-blur-2xl rounded-xl shadow-2xl p-6 md:p-8 relative border border-outline-variant/30">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-outline-variant/40">
            <div>
              <div className="font-telemetry-micro text-telemetry-micro text-primary-fixed-dim uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                SYS-OP // IDENT: 0x8F94AC
              </div>
              <h1 className="font-headline-md text-headline-md text-primary font-light tracking-wide">
                SARA MATRIX INITIALIZATION
              </h1>
            </div>
            <div className="text-right">
              <span className="px-2.5 py-1 rounded bg-surface-container-high font-telemetry-sm text-telemetry-sm text-tertiary-fixed-dim border border-outline-variant/20">
                PROTOCOL 5.2.0
              </span>
            </div>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleTriggerAuth();
            }}
          >
            {/* Cryptographic Neural Token / Passkey */}
            <PasskeyInput
              value={passkey}
              onChange={setPasskey}
              disabled={authStage !== "idle"}
            />

            {/* Acoustic & Biometric Handshake with Waveform Visualizer */}
            <AcousticHandshake
              statusText={
                authStage === "synchronizing"
                  ? "ANALYZING SYNAPSE FREQUENCIES..."
                  : authStage === "verified"
                  ? "ACOUSTIC HANDSHAKE CONFIRMED"
                  : "READY FOR SARA ACOUSTIC HANDSHAKE"
              }
              isListening={true}
            />

            {/* Operation Mode Selector */}
            <ModeSelector
              currentMode={currentMode}
              onModeChange={setCurrentMode}
              disabled={authStage !== "idle"}
            />

            {/* Matrix Initialization Action Button */}
            <InitializeButton
              authStage={authStage}
              onClick={handleTriggerAuth}
              disabled={!passkey}
            />
          </form>
        </div>


      </div>

      {/* Active Session Overlay Console */}
      <ActiveMatrixConsole
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
        mode={
          currentMode === "autonomous"
            ? "E2EE Autonomous Mode"
            : "Sandbox Read-Only"
        }
      />
    </main>
  );
}
