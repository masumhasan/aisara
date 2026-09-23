"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function GitHubCommandCenterPage() {
  const [voiceInput, setVoiceInput] = useState("");
  const [repoFilter, setRepoFilter] = useState<"all" | "monitored" | "failing" | "prs">("all");
  const [yearFilter, setYearFilter] = useState("2025");
  const [dispatchAlert, setDispatchAlert] = useState<string | null>(null);

  const setPrompt = (text: string) => {
    setVoiceInput(text);
  };

  const triggerModalPr42 = () => {
    const element = document.getElementById("githubContributionMatrix");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-2", "ring-amber-400");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-amber-400");
      }, 2000);
    }
  };

  const handleConfirmMerge = () => {
    setDispatchAlert("AURA [CLEARANCE VERIFIED]: PR #43 merged into main via GitOps Runner #AURA-09. Deployment triggered.");
    setTimeout(() => setDispatchAlert(null), 5000);
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen w-full max-w-[1920px] mx-auto px-4 lg:px-6 flex flex-col gap-6">
        
        {/* DISPATCH ALERT NOTIFICATION BANNER */}
        {dispatchAlert && (
          <div className="w-full p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-telemetry text-sm flex items-center justify-between shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[20px] text-emerald-400">check_circle</span>
              <span>{dispatchAlert}</span>
            </div>
            <button onClick={() => setDispatchAlert(null)} className="text-emerald-400 hover:text-white">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        )}

        {/* TOP BANNER // VOICE PROMPT MATRIX & ACOUSTIC TELEMETRY HUB */}
        <section className="relative w-full rounded-2xl bg-[#0e141c]/90 backdrop-blur-2xl p-4 lg:p-6 shadow-[0_0_40px_rgba(255,184,105,0.08)] border border-amber-500/20 overflow-hidden">
          {/* Photonic Backlight & Ambient Radial Glow */}
          <div className="absolute -top-24 left-1/4 w-96 h-48 bg-gradient-to-b from-amber-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 right-1/4 w-96 h-48 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>

          {/* HUD Spatial Collar / System Frequency Micro-bar */}
          <div className="flex items-center justify-between gap-2 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-telemetry text-[10px] text-amber-400 tracking-widest uppercase">
                DUPLEX STREAM ACTIVE // LIVEKIT VOX-BRIDGE 99.88% PHONEME RECALL
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <span className="font-telemetry text-[10px] text-slate-400 uppercase">[ ENCLAVE: SEC-ZONE-ALPHA ]</span>
              <span className="font-telemetry text-[10px] text-cyan-400 uppercase">SAMPLE RATE 48.0 kHz</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-sm"></div>
            </div>
          </div>

          {/* Main Voice Transceiver Interactive Frame */}
          <div className="relative w-full rounded-xl bg-[#171c25]/90 p-4 flex flex-col xl:flex-row items-center justify-between gap-4 border border-amber-500/10 shadow-[0_0_24px_rgba(255,184,105,0.12),inset_0_0_16px_rgba(255,184,105,0.05)]">
            {/* Left: Acoustic Mic Module & Visualizer */}
            <div className="flex items-center gap-4 w-full xl:w-auto">
              <div className="relative group cursor-pointer flex-shrink-0" onClick={() => setPrompt("Aura, run system check")}>
                <div className="w-14 h-14 rounded-xl bg-amber-500/15 flex items-center justify-center border border-amber-500/30 shadow-[0_0_20px_rgba(255,184,105,0.3)] transition-transform group-hover:scale-105">
                  <span className="material-symbols-outlined text-amber-400 text-[28px] animate-pulse">mic</span>
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-300"></span>
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[10px] text-amber-400 tracking-widest uppercase">AURA // NEURAL RECEPTOR</span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-telemetry text-[8px] uppercase font-bold tracking-widest border border-amber-500/30">LIVE</span>
                </div>
                <div className="font-sans text-[20px] text-amber-100 tracking-tight truncate flex items-center gap-2 font-medium">
                  <span>“What do you want to do?”</span>
                  <span className="w-2 h-5 bg-amber-400 animate-pulse inline-block"></span>
                </div>
              </div>
              {/* Real-time Multi-band Acoustic Waveform Visualizer */}
              <div className="hidden md:flex items-center gap-1 h-8 px-4 py-1 rounded-lg bg-[#252a33]/50 ml-auto xl:ml-2">
                <span className="w-1 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="w-1 h-4 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                <span className="w-1 h-7 rounded-full bg-amber-400 animate-pulse delay-150"></span>
                <span className="w-1 h-5 rounded-full bg-amber-400 animate-pulse delay-100"></span>
                <span className="w-1 h-3 rounded-full bg-cyan-400 animate-pulse delay-200"></span>
                <span className="w-1 h-6 rounded-full bg-amber-400 animate-pulse delay-75"></span>
                <span className="w-1 h-8 rounded-full bg-amber-300 animate-pulse delay-300"></span>
                <span className="w-1 h-4 rounded-full bg-blue-500 animate-pulse delay-150"></span>
                <span className="w-1 h-6 rounded-full bg-amber-400 animate-pulse delay-100"></span>
                <span className="w-1 h-2 rounded-full bg-cyan-400 animate-pulse delay-200"></span>
              </div>
            </div>

            {/* Right: Realtime Speech Input Transceiver Box */}
            <div className="w-full xl:w-1/2 flex items-center gap-3 bg-[#090e17]/80 border border-slate-700/60 rounded-lg px-4 py-2.5">
              <span className="font-telemetry text-sm text-amber-400 font-bold">❯_</span>
              <input
                type="text"
                value={voiceInput}
                onChange={(e) => setVoiceInput(e.target.value)}
                placeholder="Speak command or type prompt (e.g. 'Aura, fix auth tests in UI')..."
                className="bg-transparent border-none outline-none font-telemetry text-xs text-slate-200 placeholder:text-slate-500 w-full"
              />
              <button
                onClick={() => voiceInput && setPrompt("")}
                className="px-3 py-1 rounded bg-[#252a33] hover:bg-[#30353e] text-amber-300 font-telemetry text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-all border border-amber-500/30"
              >
                <span className="material-symbols-outlined text-[14px]">send</span>
                <span className="hidden sm:inline">EXEC</span>
              </button>
            </div>
          </div>

          {/* Interactive Quick Voice Prompt Chips Matrix */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-1">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="material-symbols-outlined text-amber-400 text-[16px]">record_voice_over</span>
              <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider">PRESET SPEECH DISPATCHES:</span>
            </div>
            <button
              onClick={() => setPrompt("Fix failing tests in AURA")}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171c25] border border-slate-700/50 hover:bg-rose-950/40 hover:border-rose-500/50 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span className="font-telemetry text-xs text-slate-200 group-hover:text-rose-300 tracking-wide">“Fix failing tests in AURA”</span>
            </button>
            <button
              onClick={() => setPrompt("Create a new private repo called Aura Backend")}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171c25] border border-slate-700/50 hover:bg-cyan-950/40 hover:border-cyan-500/50 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="font-telemetry text-xs text-slate-200 group-hover:text-cyan-300 tracking-wide">“Create a new private repo called Aura Backend”</span>
            </button>
            <button
              onClick={triggerModalPr42}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 hover:bg-amber-500/30 transition-all shadow-[0_0_12px_rgba(255,184,105,0.2)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-telemetry text-xs text-amber-300 font-semibold tracking-wide">“Merge PR #42 into main”</span>
            </button>
            <button
              onClick={() => setPrompt("Check why latest GitHub Action failed")}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171c25] border border-slate-700/50 hover:bg-[#252a33] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              <span className="font-telemetry text-xs text-slate-400 group-hover:text-slate-200 tracking-wide">“Check why latest GitHub Action failed”</span>
            </button>
            <button
              onClick={() => setPrompt("Create feature branch voice-agent")}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171c25] border border-slate-700/50 hover:bg-[#252a33] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span className="font-telemetry text-xs text-slate-400 group-hover:text-slate-200 tracking-wide">“Create feature branch voice-agent”</span>
            </button>
            <button
              onClick={() => setPrompt("Find repos untouched in 6 months")}
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#171c25] border border-slate-700/50 hover:bg-[#252a33] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
              <span className="font-telemetry text-xs text-slate-400 group-hover:text-slate-200 tracking-wide">“Find repos untouched in 6 months”</span>
            </button>
          </div>
        </section>

        {/* TWO-COLUMN ORTHOGONAL HUD LAYOUT */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          
          {/* LEFT & CENTER: MANAGED REPOSITORIES & GITOPS EXECUTION MATRIX (7 COLUMNS) */}
          <div className="xl:col-span-7 flex flex-col gap-5">
            
            {/* Section Header & Filter Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#171c25]/70 p-4 rounded-xl backdrop-blur-md border border-slate-700/50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  <h2 className="font-sans text-base text-slate-100 uppercase tracking-wider font-bold">MANAGED REPOSITORIES</h2>
                </div>
                <p className="font-telemetry text-[10px] text-slate-400 uppercase mt-0.5">24 TOTAL REPOSITORIES · 4 AGENT MONITORED · REALTIME AST PARSED</p>
              </div>
              
              {/* Filter HUD Tabs */}
              <div className="flex items-center gap-1 bg-[#090e17] p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setRepoFilter("all")}
                  className={`px-3 py-1 rounded font-telemetry text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    repoFilter === "all" ? "bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)]" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  All (24)
                </button>
                <button
                  onClick={() => setRepoFilter("monitored")}
                  className={`px-3 py-1 rounded font-telemetry text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    repoFilter === "monitored" ? "bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(0,240,255,0.4)]" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Monitored (4)
                </button>
                <button
                  onClick={() => setRepoFilter("failing")}
                  className={`px-3 py-1 rounded font-telemetry text-[10px] font-semibold uppercase tracking-wider flex items-center gap-1 transition-all ${
                    repoFilter === "failing" ? "bg-rose-500 text-white shadow-[0_0_10px_rgba(244,63,94,0.4)]" : "text-rose-400 hover:bg-rose-950/40"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  <span>Failing (1)</span>
                </button>
                <button
                  onClick={() => setRepoFilter("prs")}
                  className={`px-3 py-1 rounded font-telemetry text-[10px] font-semibold uppercase tracking-wider transition-all ${
                    repoFilter === "prs" ? "bg-amber-400 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.4)]" : "text-amber-400 hover:bg-amber-950/40"
                  }`}
                >
                  PRs (3)
                </button>
              </div>
            </div>

            {/* REPOSITORY CARDS */}
            {(repoFilter === "all" || repoFilter === "monitored") && (
              <>
                {/* REPOSITORY CARD 1: HERO - AURA / personal-ai-core */}
                <div className="relative rounded-2xl bg-[#171c25]/90 backdrop-blur-xl p-5 lg:p-6 border border-cyan-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-cyan-400/80 rounded-tl-sm"></div>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/80 rounded-tr-sm"></div>
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-base text-cyan-300 font-bold">◈ AURA / personal-ai-core</span>
                          <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-telemetry text-[9px] uppercase tracking-wider">Public</span>
                          <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-telemetry text-[9px] uppercase tracking-wider font-semibold">Priority 1 // Core</span>
                        </div>
                        <p className="font-sans text-xs text-slate-400 mt-0.5">Personal realtime AI operating system & LiveKit duplex audio bridge</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#252a33] text-cyan-300 border border-cyan-500/20 font-telemetry text-[10px]">
                        <span className="material-symbols-outlined text-[14px]">shield</span>
                        <span>eBPF SANDBOXED</span>
                      </div>
                    </div>
                  </div>

                  {/* Metric Badges Row */}
                  <div className="flex flex-wrap items-center gap-2 py-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#252a33] border border-slate-700/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span className="font-telemetry text-xs text-slate-200">main</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      <span className="material-symbols-outlined text-[14px]">call_merge</span>
                      <span className="font-telemetry text-xs font-semibold">2 Active PRs</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#252a33] text-slate-400 border border-slate-700/50">
                      <span className="material-symbols-outlined text-[14px]">bug_report</span>
                      <span className="font-telemetry text-xs">4 open issues</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span className="font-telemetry text-xs font-semibold">✓ CI passing (14.2s)</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#30353e] text-slate-400 font-telemetry text-[9px]">
                      <span>AST PARITY: 100%</span>
                    </div>
                  </div>

                  {/* Last Commit Telemetry Block */}
                  <div className="p-3 rounded-lg bg-[#090e17]/80 border border-slate-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="material-symbols-outlined text-cyan-400 text-[16px] flex-shrink-0">commit</span>
                      <div className="flex items-center gap-2 truncate">
                        <span className="font-telemetry text-xs text-cyan-300 font-bold">7c91a2f</span>
                        <span className="font-telemetry text-xs text-slate-200 truncate">“Improve voice command routing”</span>
                        <span className="font-telemetry text-[10px] text-slate-400">by @masum</span>
                      </div>
                    </div>
                    <span className="font-telemetry text-[10px] text-slate-400 flex-shrink-0">12 min ago</span>
                  </div>

                  {/* Action Control Buttons Matrix */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-1">
                    <button
                      onClick={() => setPrompt("Inspect AURA core repo")}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-sans text-xs font-bold tracking-wider hover:bg-cyan-300 transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                    >
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      <span>INSPECT WITH AURA</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-slate-200 font-telemetry text-xs transition-all border border-slate-700/50">
                      <span className="material-symbols-outlined text-[16px]">account_tree</span>
                      <span>Branches (6)</span>
                    </button>
                    <button
                      onClick={triggerModalPr42}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-telemetry text-xs font-semibold transition-all border border-amber-500/40"
                    >
                      <span className="material-symbols-outlined text-[16px]">merge_type</span>
                      <span>Pull Requests (2)</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#252a33] hover:bg-[#30353e] text-cyan-300 font-telemetry text-xs transition-all border border-slate-700/50">
                      <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                      <span>Trigger CI Run</span>
                    </button>
                  </div>
                </div>

                {/* REPOSITORY CARD 2: aura-backend-py */}
                <div className="rounded-xl bg-[#171c25]/75 backdrop-blur-md p-4 border border-slate-700/50 shadow-md">
                  <div className="flex items-start justify-between gap-3 pb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm text-slate-100 font-semibold">◈ aura-backend-py</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#30353e] text-slate-400 font-telemetry text-[9px] uppercase">Private</span>
                      </div>
                      <p className="font-sans text-xs text-slate-400 mt-0.5">FastAPI, vLLM inference engine, Cartesia TTS connector</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-telemetry text-[10px]">
                      <span className="material-symbols-outlined text-[12px]">check_circle</span>
                      <span>CI PASSING</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 py-1">
                    <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-200">branch: main ●</span>
                    <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-400">0 PRs</span>
                    <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-400">1 open issue</span>
                    <span className="font-telemetry text-[10px] text-slate-400 ml-auto">Last commit: <span class="text-cyan-400 font-mono">31d04b</span> “Update streaming chunk buffer” · 42m ago</span>
                  </div>
                </div>
              </>
            )}

            {/* REPOSITORY CARD 3: FAILING CI (ALWAYS DISPLAYED IN FAILING FILTER TOO) */}
            {(repoFilter === "all" || repoFilter === "failing" || repoFilter === "monitored") && (
              <div className="relative rounded-xl bg-[#171c25]/85 backdrop-blur-md p-5 border border-rose-500/30 shadow-lg overflow-hidden">
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-start justify-between gap-3 pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-base text-rose-400 font-semibold">◈ ultron-hologram-ui</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/50 text-rose-300 font-telemetry text-[9px] font-bold uppercase tracking-wider">⚠ CI FAILING</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#30353e] text-slate-400 font-telemetry text-[9px] uppercase">Public</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">Three.js shader matrix and WebGL gyroscopic orbital HUD</p>
                  </div>
                  <button
                    onClick={() => setPrompt("fix auth module tests in ultron-hologram-ui")}
                    className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-telemetry text-[10px] uppercase font-bold transition-all shadow-[0_0_12px_rgba(244,63,94,0.4)]"
                  >
                    DISPATCH REPAIR
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 py-1">
                  <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-200">branch: stage/v2 ●</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-telemetry text-[10px]">1 PR open</span>
                  <span className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 font-telemetry text-[10px] font-medium">2 issues (3 test timeouts in auth module)</span>
                  <span className="font-telemetry text-[10px] text-slate-400 ml-auto">Last commit: <span className="text-slate-200 font-mono">e84c90</span> “Sync gyroscopic degree ticks” · 2h ago</span>
                </div>

                {/* Real-time Agent Diagnostic Voice Recommendation Banner */}
                <div className="mt-3 p-3 rounded-lg bg-[#252a33]/90 border border-amber-500/30 flex items-start gap-3 shadow-[0_0_12px_rgba(255,180,171,0.06)]">
                  <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/30">
                    <span className="material-symbols-outlined text-[15px]">record_voice_over</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-telemetry text-[10px] text-amber-300 uppercase tracking-wider font-bold">AURA PROACTIVE INCIDENT DIAGNOSTIC</span>
                    <p className="font-sans text-xs text-slate-200 mt-0.5">
                      “I detected 3 failing tests in <code className="font-mono text-amber-300 bg-[#090e17] px-1 rounded">test_auth_handshake.ts</code> due to token expiration race condition. Say <span className="text-amber-300 underline decoration-dotted cursor-pointer" onClick={() => setPrompt("fix auth tests")}>'fix auth tests'</span> to dispatch autonomous patch runner.”
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* REPOSITORY CARD 4: defense-matrix-gateway */}
            {(repoFilter === "all" || repoFilter === "monitored") && (
              <div className="rounded-xl bg-[#171c25]/75 backdrop-blur-md p-4 border border-slate-700/50 shadow-md">
                <div className="flex items-start justify-between gap-3 pb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sans text-sm text-slate-100 font-semibold">◈ defense-matrix-gateway</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#30353e] text-slate-400 font-telemetry text-[9px] uppercase">Private</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-telemetry text-[9px] uppercase">FIPS 140-3</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">HSM key enclave & E2EE TLS proxy orchestrator</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-telemetry text-[10px]">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    <span>SECURE · CI PASSING</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 py-1">
                  <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-200">branch: main ●</span>
                  <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-400">0 PRs</span>
                  <span className="px-2 py-0.5 rounded bg-[#252a33] font-telemetry text-[10px] text-slate-400">0 issues</span>
                  <span className="font-telemetry text-[10px] text-slate-400 ml-auto">Last commit: <span className="text-cyan-400 font-mono">8f21aa</span> “Rotate TLS cert rotation cron” · 1d ago</span>
                </div>
              </div>
            )}

            {/* EMBEDDED CONTRIBUTION MATRIX & HEATMAP RADAR */}
            <div className="relative rounded-2xl bg-[#090e17]/90 backdrop-blur-2xl p-5 lg:p-6 border border-slate-700/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex flex-col gap-4" id="githubContributionMatrix">
              
              {/* Header: Contribution Counter & Year Filter Matrix */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-telemetry text-[10px] text-cyan-400 uppercase tracking-wider font-bold">CONTRIBUTION ACTIVITY // TELEMETRY RADAR</span>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-telemetry text-[8px] uppercase font-bold tracking-widest border border-cyan-500/30">E2EE SYNCED</span>
                    </div>
                    <h3 className="font-sans text-lg text-slate-100 font-bold tracking-wide">
                      2,902 CONTRIBUTIONS <span className="text-slate-400 font-normal text-xs">IN THE LAST YEAR</span>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  {["2025", "2024", "2023"].map((year) => (
                    <button
                      key={year}
                      onClick={() => setYearFilter(year)}
                      className={`px-3 py-1 rounded font-telemetry text-[10px] font-semibold uppercase tracking-wider transition-all ${
                        yearFilter === year ? "bg-cyan-400 text-slate-950 font-bold" : "bg-[#171c25] hover:bg-[#252a33] text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                  <button className="px-3 py-1 rounded text-cyan-300 hover:bg-cyan-500/10 font-telemetry text-[10px] uppercase tracking-wider flex items-center gap-1 transition-all">
                    <span className="material-symbols-outlined text-[13px]">tune</span>
                    <span>Contribution Settings</span>
                  </button>
                </div>
              </div>

              {/* 52-Week Contribution Heatmap Canvas */}
              <div className="w-full overflow-x-auto pb-1">
                <div className="min-w-[700px] flex flex-col gap-1">
                  {/* Month Labels Row */}
                  <div className="flex items-center text-[10px] font-mono text-slate-400/80 pl-8 gap-4 justify-between pr-2">
                    <span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
                  </div>
                  {/* Grid Matrix: Day of week + SVGs/Columns */}
                  <div className="flex items-start gap-2.5">
                    {/* Day of Week Legend */}
                    <div className="flex flex-col justify-between h-[104px] text-[9px] font-mono text-slate-400/80 pt-0.5 select-none">
                      <span className="h-3 leading-3">Mon</span>
                      <span className="h-3 leading-3">Wed</span>
                      <span className="h-3 leading-3">Fri</span>
                    </div>
                    {/* 52-Column SVG Heatmap Grid */}
                    <div className="flex-1">
                      <svg className="w-full h-[112px]" viewBox="0 0 780 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur"></feGaussianBlur>
                            <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                          </filter>
                        </defs>
                        <g className="contribution-cells">
                          {/* Render procedural matrix columns */}
                          {Array.from({ length: 52 }).map((_, weekIndex) => {
                            const x = weekIndex * 15;
                            return (
                              <g key={weekIndex}>
                                {[0, 15, 30, 45, 60, 75, 90].map((y, dayIndex) => {
                                  // Determine cell color pattern based on week & day
                                  const seed = (weekIndex * 7 + dayIndex * 13) % 100;
                                  let fill = "#101720";
                                  let filter = undefined;
                                  if (seed > 80) {
                                    fill = "#5de7ff";
                                    filter = "url(#glow)";
                                  } else if (seed > 60) {
                                    fill = "#00c2cb";
                                  } else if (seed > 35) {
                                    fill = "#008b9e";
                                  } else if (seed > 15) {
                                    fill = "#004d5a";
                                  }
                                  return (
                                    <rect
                                      key={dayIndex}
                                      x={x}
                                      y={y}
                                      width="11"
                                      height="11"
                                      rx="2.5"
                                      fill={fill}
                                      filter={filter}
                                      className="transition-opacity hover:opacity-80 cursor-pointer"
                                    />
                                  );
                                })}
                              </g>
                            );
                          })}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heatmap Legend & Organization Badges Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
                {/* Legend Scale */}
                <div className="flex items-center gap-3">
                  <a href="#" className="font-telemetry text-[10px] text-slate-400 hover:text-cyan-300 transition-all underline decoration-dotted">
                    Learn how we count contributions
                  </a>
                  <div className="flex items-center gap-1.5 pl-2 border-l border-slate-700">
                    <span className="font-telemetry text-[10px] text-slate-400">Less</span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#101720]"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#004d5a]"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#008b9e]"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#00c2cb]"></span>
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#5de7ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]"></span>
                    <span className="font-telemetry text-[10px] text-slate-400">More</span>
                  </div>
                </div>
                {/* Affiliated Organizations */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-telemetry text-[10px] text-slate-400 uppercase">ORGS:</span>
                  <span className="px-2 py-0.5 rounded bg-[#171c25] text-cyan-300 font-telemetry text-[10px] font-medium border border-slate-700/50">@GameGhor</span>
                  <span className="px-2 py-0.5 rounded bg-[#171c25] text-cyan-300 font-telemetry text-[10px] font-medium border border-slate-700/50">@sparktechagency</span>
                  <span className="px-2 py-0.5 rounded bg-[#171c25] text-cyan-300 font-telemetry text-[10px] font-medium border border-slate-700/50">@basarapplive</span>
                  <span className="px-1.5 py-0.5 rounded bg-[#252a33] text-slate-400 font-telemetry text-[9px] uppercase font-bold">+3 More</span>
                </div>
              </div>

              {/* Activity Overview Attribution Header */}
              <div className="p-3 rounded-lg bg-[#171c25] border border-slate-800 flex items-center justify-between gap-3 mt-1">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="material-symbols-outlined text-cyan-400 text-[18px] flex-shrink-0">insights</span>
                  <div className="font-sans text-xs text-slate-300 truncate">
                    <span className="font-semibold text-cyan-300">Activity overview:</span> Contributed to <span className="text-cyan-400 font-mono">sparktechagency/ramasai_app</span>, <span className="text-cyan-400 font-mono">masumhasan/fiki_admin</span>, <span className="text-cyan-400 font-mono">masumhasan/fiki_backend</span> and 79 other repositories.
                  </div>
                </div>
                <span className="font-telemetry text-[10px] text-cyan-400 flex-shrink-0 uppercase font-semibold hidden md:inline">100% REPO PARITY</span>
              </div>

              {/* 4-Facet High-Performance Contribution Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-1">
                {/* Metric Card 1: Code Review */}
                <div className="p-3 rounded-xl bg-[#171c25]/90 border border-slate-700/50 flex flex-col gap-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Code review</span>
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">rate_review</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-sans text-xl text-cyan-300 font-bold">418</span>
                    <span className="font-telemetry text-[10px] text-slate-400">reviews</span>
                  </div>
                  <p className="font-telemetry text-[10px] text-slate-400 mt-0.5">
                    Across 14 team repos · <span className="text-cyan-400 font-semibold">99.2% SLA</span> (18m avg)
                  </p>
                </div>
                {/* Metric Card 2: Issues */}
                <div className="p-3 rounded-xl bg-[#171c25]/90 border border-slate-700/50 flex flex-col gap-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Issues</span>
                    <span className="material-symbols-outlined text-amber-400 text-[16px]">bug_report</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-sans text-xl text-slate-100 font-bold">94</span>
                    <span className="font-telemetry text-[10px] text-amber-400">opened</span>
                  </div>
                  <p className="font-telemetry text-[10px] text-slate-400 mt-0.5">
                    <span className="text-amber-300 font-semibold">86 resolved</span> autonomously via SARA triage
                  </p>
                </div>
                {/* Metric Card 3: Pull Requests */}
                <div className="p-3 rounded-xl bg-[#171c25]/90 border border-slate-700/50 flex flex-col gap-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Pull requests</span>
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">merge_type</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-sans text-xl text-cyan-300 font-bold">248</span>
                    <span className="font-telemetry text-[10px] text-cyan-400">merged</span>
                  </div>
                  <p className="font-telemetry text-[10px] text-slate-400 mt-0.5">
                    <span className="text-cyan-400 font-semibold">100% CI pass rate</span> · 0 regression escapes
                  </p>
                </div>
                {/* Metric Card 4: Commits */}
                <div className="p-3 rounded-xl bg-[#171c25]/90 border border-slate-700/50 flex flex-col gap-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Commits</span>
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">commit</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="font-sans text-xl text-cyan-300 font-bold">2,142</span>
                    <span className="font-telemetry text-[10px] text-slate-400">pushed</span>
                  </div>
                  <p className="font-telemetry text-[10px] text-slate-400 mt-0.5">
                    Pushed with <span className="text-cyan-300 font-semibold">signed GPG keys</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: LIVE AGENT ACTIVITY & REASONING STREAM (5 COLUMNS) */}
          <div className="xl:col-span-5 flex flex-col gap-5">
            
            {/* Live Agent HUD Header Console */}
            <div className="rounded-2xl bg-[#090e17]/90 backdrop-blur-2xl p-5 lg:p-6 border border-slate-700/60 shadow-[0_0_30px_rgba(0,0,0,0.6)] flex flex-col gap-5">
              
              {/* Stream Status & Telemetry Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
                  </span>
                  <div>
                    <h3 className="font-sans text-sm text-slate-100 font-semibold tracking-wide uppercase">LIVE AGENT ACTIVITY</h3>
                    <p className="font-telemetry text-[10px] text-cyan-400 uppercase">RUNNER #AURA-09 // DEDICATED HEURISTIC POOL</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-telemetry text-[10px] font-bold uppercase border border-cyan-500/30">SYNC 100%</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                </div>
              </div>

              {/* Agent Reasoning Dialogue Bubble */}
              <div className="relative p-4 rounded-xl bg-[#171c25] border border-slate-700/50 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[12px]">neurology</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-cyan-300 uppercase tracking-wider font-bold">AURA NEURAL COGNITION RUNTIME</span>
                  <span className="font-telemetry text-[10px] text-slate-400 ml-auto">T-00:04</span>
                </div>
                <p className="font-sans text-xs text-slate-200 leading-relaxed italic">
                  “I have audited the PR diff, validated all 184 test assertions in a dedicated firecracker sandbox, and prepared the merge handshake. Ready for user voice confirmation.”
                </p>
              </div>

              {/* Real-time Step-by-Step Causality Log */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between px-1">
                  <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider">CAUSALITY CHAIN // EXECUTION PIPELINE</span>
                  <span className="font-telemetry text-[10px] text-amber-400">PID 89211</span>
                </div>
                
                {/* Step 1 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">cloud_download</span>
                    <span className="font-telemetry text-xs text-slate-200 truncate">1. Fetching repository: aura/frontend</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-cyan-400 flex-shrink-0">Resolved 142ms</span>
                </div>
                {/* Step 2 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">fork_right</span>
                    <span className="font-telemetry text-xs text-slate-200 truncate">2. Checking branch: feature/voice-ui</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-cyan-400 flex-shrink-0">Resolved 84ms</span>
                </div>
                {/* Step 3 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-cyan-400 text-[16px]">verified</span>
                    <span className="font-telemetry text-xs text-slate-200 truncate">3. Running tests: 184 / 184 passed</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-slate-400 flex-shrink-0">Verified in container</span>
                </div>
                {/* Step 4 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-amber-400 text-[16px]">edit_note</span>
                    <span className="font-telemetry text-xs text-slate-200 truncate">4. Creating commit: 7c91a2f 'Improve voice routing'</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-amber-400 flex-shrink-0">Signed GPG</span>
                </div>
                {/* Step 5 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-cyan-400 text-[16px] animate-spin">sync</span>
                    <span className="font-telemetry text-xs text-slate-200 truncate">5. Pushing to origin: [████████████ 100%]</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-cyan-400 flex-shrink-0">Synced</span>
                </div>
                {/* Step 6 */}
                <div className="flex items-center justify-between p-2.5 px-3 rounded-lg bg-[#171c25]/80 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-amber-400 text-[16px]">task_alt</span>
                    <span className="font-telemetry text-xs text-amber-200 font-semibold truncate">6. Push completed. Generated PR #43.</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-amber-400 flex-shrink-0">SUCCESS</span>
                </div>
              </div>

              {/* Live Terminal Stream Output Snippet */}
              <div className="rounded-xl bg-[#04080e] p-3 border border-slate-800 flex flex-col gap-2 font-telemetry text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-telemetry text-[10px] text-slate-500 ml-2 uppercase">pty/sandbox/aura-09:4412</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-cyan-400">BASH EMULATOR</span>
                </div>
                <div className="flex flex-col gap-1 text-slate-400 font-mono text-[11px] pt-1">
                  <p><span className="text-cyan-400">$</span> git checkout -b feature/voice-ui</p>
                  <p className="text-slate-500 pl-3">Switched to a new branch 'feature/voice-ui'</p>
                  <p><span className="text-cyan-400">$</span> pytest tests/test_voice_routing.py --verbose</p>
                  <p className="text-emerald-400 pl-3">collected 184 items · 184 passed in 3.12s</p>
                  <p><span className="text-cyan-400">$</span> git commit -m "Improve voice command routing"</p>
                  <p className="text-amber-300 pl-3">[feature/voice-ui 7c91a2f] Improve voice command routing</p>
                  <p><span className="text-cyan-400">$</span> git push origin feature/voice-ui</p>
                  <p className="text-cyan-300 pl-3">To github.com:masumhasan/aura.git * [new branch]</p>
                  <p className="flex items-center gap-1 text-amber-400 font-bold mt-1">
                    <span>❯</span>
                    <span className="w-2 h-4 bg-amber-400 animate-pulse inline-block"></span>
                  </p>
                </div>
              </div>

              {/* Agent Resource Gauge Footer */}
              <div className="flex flex-wrap items-center justify-between p-3 rounded-lg bg-[#171c25] border border-slate-800 text-slate-400 gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-amber-400">memory</span>
                  <span className="font-telemetry text-[10px] uppercase">VLLM KERNEL: 4.2GB VRAM</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-cyan-400">speed</span>
                  <span className="font-telemetry text-[10px] uppercase">TOKEN/S: 124.8</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-blue-400">alt_route</span>
                  <span className="font-telemetry text-[10px] uppercase">DEPTH: L4</span>
                </div>
              </div>
            </div>

            {/* SECONDARY HUD WIDGET: AUTONOMOUS REPO AUDIT RADIAL TELEMETRY */}
            <div className="rounded-xl bg-[#171c25]/80 backdrop-blur-md p-4 border border-slate-700/50 shadow-md flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider">REPOSITORIES AUDIT MATRIX</span>
                <span className="font-telemetry text-[10px] text-cyan-400">24/24 SYNCED</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-cyan-400"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="92, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <span className="absolute font-telemetry text-xs text-cyan-300 font-bold">92%</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-slate-100 font-semibold">Autonomous GitOps Health Score</span>
                  <p className="font-sans text-[11px] text-slate-400">21 passing CI tests, 1 flagged test failure, 2 PRs ready for clearance.</p>
                </div>
              </div>
            </div>

            {/* HIGH IMPACT MERGE & DISPATCH ACTION CARD */}
            <div className="w-full rounded-2xl bg-[#090e17]/90 border border-amber-500/30 p-5 shadow-[0_8px_32px_rgba(245,158,11,0.15)] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400">
                  <span className="material-symbols-outlined text-[20px] animate-bounce">warning</span>
                  <span className="font-sans text-xs uppercase tracking-wider font-bold">HIGH-IMPACT DISPATCH</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-telemetry text-[9px] font-bold uppercase">STAGING DEPLOY</span>
              </div>
              
              <div className="p-3 rounded-xl bg-[#04080e]/90 border border-amber-500/20 flex flex-col gap-2">
                <span className="font-telemetry text-[9px] font-bold text-slate-500 uppercase">PROPOSED ACTION</span>
                <p className="font-sans text-xs text-cyan-300 font-medium leading-snug">
                  Merge PR #43 (<span className="text-amber-400 font-telemetry text-[11px]">fix/auth-token-timeout</span>) into <span className="text-slate-100 font-telemetry text-[11px]">main</span> & deploy to Staging Cluster
                </p>
                <div className="pt-2 border-t border-slate-800 flex flex-col gap-1 font-telemetry text-[10px] text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Code Delta</span>
                    <span className="text-slate-200 font-medium"><span className="text-emerald-400">+18</span> <span className="text-rose-400">-4 lines</span> in 2 files</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Unit Verification</span>
                    <span className="text-cyan-300 font-bold">18/18 Passing</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={() => setPrompt("Revert PR #43")}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#171c25] border border-slate-700/50 hover:bg-[#252a33] text-slate-400 hover:text-slate-200 transition-all font-sans text-xs font-bold"
                >
                  <span className="material-symbols-outlined text-[16px]">close</span>
                  <span>Cancel / Revert</span>
                </button>
                <button
                  onClick={handleConfirmMerge}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:brightness-110 transition-all font-sans text-xs font-extrabold uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-[18px] font-bold">done_all</span>
                  <span>CONFIRM & MERGE</span>
                </button>
              </div>
            </div>

          </div>
        </div>
        <div className="w-full flex justify-center mt-2 text-[10px] text-slate-500 font-telemetry tracking-wider border-t border-amber-500/20 pt-2">
          Built by <a href="https://masumhasan.web.app/" target="_blank" rel="noopener noreferrer" className="ml-1 text-amber-400 hover:underline font-bold transition-colors">Nur Hasan Masum</a>
        </div>
      </div>
    </ConsoleLayout>
  );
}
