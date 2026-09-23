"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function IntelligenceMapPage() {
  const [isMicActive, setIsMicActive] = useState(true);
  const [isCamActive, setIsCamActive] = useState(true);

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto px-4 lg:px-6 gap-5">
        
        {/* ==================== LEFT COLLAPSIBLE NAVIGATION RAIL ==================== */}
        <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#08111a]/85 backdrop-blur-xl border border-holo-amber/20 rounded-xl p-3.5 flex flex-col gap-3 z-30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          <button className="w-full py-2 px-3.5 rounded-lg border border-holo-amber/50 bg-holo-amber/15 hover:bg-holo-amber/25 text-holo-amber font-sans text-[12px] font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,154,0,0.25)] transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>New Session</span>
          </button>
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-holo-muted">search</span>
            <input 
              type="text" 
              className="w-full bg-[#0d1622] rounded-md border border-holo-amber/20 pl-8 pr-3 py-1.5 font-sans text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-holo-amber/50" 
              placeholder="Search..." 
            />
          </div>
          <nav className="flex flex-col gap-1 font-sans text-[12px]">
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#182332] text-holo-amber border border-holo-amber/35 font-medium shadow-[0_0_10px_rgba(255,154,0,0.15)]">
              <span className="material-symbols-outlined text-[18px]">hub</span>
              <span>Intelligence Map</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-holo-amber hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>History</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-holo-amber hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">neurology</span>
              <span>Memory</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-holo-amber hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">extension</span>
              <span>Tools</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-holo-amber hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">folder</span>
              <span>Files</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-holo-amber hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <span>Settings</span>
            </button>
          </nav>
          
          <div className="mt-2 pt-2 border-t border-holo-amber/15 flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between text-slate-400 px-1 mb-2 cursor-pointer hover:text-holo-amber transition-all">
              <span className="font-telemetry text-[10px] tracking-wider uppercase font-semibold">Active Inquiries</span>
              <span className="material-symbols-outlined text-[16px]">expand_less</span>
            </div>
            <div className="space-y-1.5 overflow-y-auto pr-0.5 flex-1 max-h-[300px]">
              
              <div className="p-2.5 rounded-lg bg-[#141d28] border border-holo-amber/50 shadow-[0_0_12px_rgba(255,154,0,0.18)]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-holo-amber mt-0.5">security</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-slate-100 truncate">CVE-2025-8819 Research</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Active Audit • Topology Live</div>
                    <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5 font-telemetry text-[9px] text-holo-amber">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-holo-amber animate-ping"></span> Live Sync
                      </span>
                      <span className="text-holo-cyan">4 Nodes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0e1722]/80 hover:bg-[#131f2d] border border-holo-amber/15 transition-all">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-slate-400 mt-0.5">forum</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-medium text-slate-200 truncate">Design team emails</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Today, 10:12 AM</div>
                    <div className="flex items-center justify-between mt-1 font-telemetry text-[9px] text-slate-400">
                      <span>12m 34s</span>
                      <span className="text-slate-500">Resolved</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </aside>

        {/* ==================== CENTER DOMINANT VIEWPORT: CLEAN DECLUTTERED HUD ==================== */}
        <main className="flex-1 relative flex flex-col gap-4 overflow-y-auto min-w-0">
          
          {/* 1. TOP HEADER & WORKSPACE CONTEXT BAR */}
          <div className="w-full bg-[#08111a]/85 backdrop-blur-xl border border-holo-amber/25 rounded-xl p-3 sm:p-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-holo-amber animate-pulse"></span>
                <span className="font-telemetry text-[11px] text-amber-300 font-semibold tracking-wider uppercase">COGNITIVE ENGINE // AURA-9 CORE</span>
              </div>
              <span className="hidden sm:inline text-holo-muted text-xs">|</span>
              <div className="flex items-center gap-1.5 font-telemetry text-[11px] text-slate-300">
                <span className="text-holo-muted">QUERY:</span>
                <span className="text-holo-cyan font-bold tracking-wide bg-holo-cyan/10 px-2 py-0.5 rounded border border-holo-cyan/20">CVE-2025-8819</span>
              </div>
              <span className="hidden sm:inline text-holo-muted text-xs">|</span>
              <span className="font-sans text-[11px] text-slate-300 tracking-wider">AUTONOMOUS RESEARCH TOPOLOGY</span>
            </div>
            
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#101b27] border border-holo-cyan/30 text-holo-cyan font-telemetry text-[10px]">
                <span className="material-symbols-outlined text-[13px] animate-spin">cyclone</span>
                <span>SYNAPSE ACTIVE</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#101b27] border border-holo-amber/30 text-amber-300 font-telemetry text-[10px]">
                <span className="text-holo-muted">STABILITY:</span>
                <span className="font-bold text-holo-amber">99.4%</span>
              </div>
            </div>
          </div>

          {/* 2. CENTER STAGE: SYNAPTIC RESEARCH MAP & GRAPH */}
          <div className="hud-panel rounded-xl p-4 sm:p-5 flex flex-col gap-4 relative overflow-hidden border border-holo-amber/15 bg-[#08111a]/82">
            <div className="reticle-corner-tl !border-holo-amber"></div>
            <div className="reticle-corner-tr !border-holo-amber"></div>
            <div className="reticle-corner-bl !border-holo-amber"></div>
            <div className="reticle-corner-br !border-holo-amber"></div>
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-holo-amber/15 z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-holo-amber/10 border border-holo-amber/30 flex items-center justify-center text-holo-amber">
                  <span className="material-symbols-outlined text-[18px]">account_tree</span>
                </div>
                <div>
                  <h2 className="font-sans font-bold text-sm text-slate-100 tracking-wide">Dynamic Synaptic Graph</h2>
                  <p className="font-telemetry text-[10px] text-holo-muted">Cross-correlating 4 primary threat telemetry sources</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2.5 py-1.5 rounded-md bg-[#121c27] hover:bg-[#1a293b] border border-holo-amber/25 hover:border-holo-amber/50 text-slate-200 hover:text-holo-amber font-telemetry text-[10px] tracking-wider flex items-center gap-1.5 transition-all">
                  <span className="material-symbols-outlined text-[14px]">filter_center_focus</span>
                  <span>RECENTER GRAPH</span>
                </button>
                <button className="px-2.5 py-1.5 rounded-md bg-[#121c27] hover:bg-[#1a293b] border border-holo-amber/25 hover:border-holo-amber/50 text-slate-200 hover:text-holo-amber font-telemetry text-[10px] tracking-wider flex items-center gap-1.5 transition-all">
                  <span className="material-symbols-outlined text-[14px]">pest_control</span>
                  <span>FILTER EXPLOIT</span>
                </button>
                <button className="px-2.5 py-1.5 rounded-md bg-[#121c27] hover:bg-[#1a293b] border border-holo-cyan/25 hover:border-holo-cyan/50 text-slate-200 hover:text-holo-cyan font-telemetry text-[10px] tracking-wider flex items-center gap-1.5 transition-all">
                  <span className="material-symbols-outlined text-[14px]">unfold_more</span>
                  <span>EXPAND NEIGHBORS</span>
                </button>
              </div>
            </div>

            {/* Structured 2x2 Network Grid with Central SARA Hub */}
            <div className="relative w-full rounded-xl bg-[#060b12]/95 border border-holo-amber/15 p-4 sm:p-6 overflow-hidden min-h-[380px] flex items-center justify-center">
              
              {/* Background SVG Orbit lines and Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 800 450">
                <circle cx="400" cy="225" fill="none" r="160" stroke="rgba(245, 158, 11, 0.08)" strokeDasharray="4 6" strokeWidth="1"></circle>
                <circle cx="400" cy="225" fill="none" r="90" stroke="rgba(0, 240, 255, 0.12)" strokeDasharray="2 4" strokeWidth="1"></circle>
                <circle cx="400" cy="225" fill="rgba(245, 158, 11, 0.04)" r="45"></circle>
                
                <line opacity="0.6" stroke="#ff4d4d" strokeDasharray="4 4" strokeWidth="1.2" x1="400" x2="210" y1="225" y2="100"></line>
                <line opacity="0.6" stroke="#00f0ff" strokeDasharray="4 4" strokeWidth="1.2" x1="400" x2="590" y1="225" y2="100"></line>
                <line opacity="0.6" stroke="#ff9a00" strokeDasharray="4 4" strokeWidth="1.2" x1="400" x2="210" y1="225" y2="350"></line>
                <line opacity="0.6" stroke="#ffb834" strokeDasharray="4 4" strokeWidth="1.2" x1="400" x2="590" y1="225" y2="350"></line>
              </svg>

              {/* Center Glow Node: SARA RESEARCH CORE */}
              <div className="relative z-20 flex flex-col items-center justify-center cursor-pointer group">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0e1724] border-2 border-holo-amber shadow-[0_0_30px_rgba(245,158,11,0.35)] flex flex-col items-center justify-center p-2 text-center group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[26px] text-holo-amber mb-0.5 animate-pulse">psychology</span>
                  <span className="font-sans font-bold text-[9px] sm:text-[10px] text-amber-200 tracking-wider uppercase">SARA CORE</span>
                  <span className="font-telemetry text-[7px] sm:text-[8px] text-holo-cyan tracking-tight">TOPOLOGY DYNAMICS</span>
                </div>
              </div>

              {/* TOP-LEFT: Node 1 (NIST NVD) */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-[240px] sm:max-w-[270px] z-20 bg-[#0d1622]/90 backdrop-blur-md border border-rose-500/40 rounded-lg p-3 shadow-lg hover:border-rose-400 transition-all">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="flex items-center gap-1.5 font-telemetry text-[9px] text-rose-400 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                    NODE 01 // VULN REPO
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-telemetry text-[9px] font-bold">CVSS 9.8</span>
                </div>
                <div className="font-sans font-semibold text-xs text-slate-100">NIST NVD // CVE-2025-8819</div>
                <p className="font-sans text-[10px] text-slate-300 mt-1 leading-snug">Unbounded heap chunk overflow during headless PDF agent ingest loop.</p>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5 font-telemetry text-[9px]">
                  <span className="text-rose-400 font-medium">Critical Exploit</span>
                  <button className="px-2 py-0.5 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/30 transition-colors">View Advisory</button>
                </div>
              </div>

              {/* TOP-RIGHT: Node 2 (MIT TECH REVIEW) */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 max-w-[240px] sm:max-w-[270px] z-20 bg-[#0d1622]/90 backdrop-blur-md border border-holo-cyan/40 rounded-lg p-3 shadow-lg hover:border-holo-cyan transition-all">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="flex items-center gap-1.5 font-telemetry text-[9px] text-holo-cyan font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                    NODE 02 // DEFENSE
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-holo-cyan/20 text-holo-cyan font-telemetry text-[9px] font-bold">98% MATCH</span>
                </div>
                <div className="font-sans font-semibold text-xs text-slate-100">MIT TECH REVIEW</div>
                <p className="font-sans text-[10px] text-slate-300 mt-1 leading-snug">Autonomous Defense Architecture: sandboxed process isolation boundaries.</p>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5 font-telemetry text-[9px]">
                  <span className="text-holo-muted">Journal Review</span>
                  <button className="px-2 py-0.5 rounded bg-holo-cyan/15 hover:bg-holo-cyan/25 text-holo-cyan border border-holo-cyan/30 transition-colors">View Citation</button>
                </div>
              </div>

              {/* BOTTOM-LEFT: Node 3 (DEFENSESEC REPO) */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[240px] sm:max-w-[270px] z-20 bg-[#0d1622]/90 backdrop-blur-md border border-holo-amber/40 rounded-lg p-3 shadow-lg hover:border-holo-amber transition-all">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="flex items-center gap-1.5 font-telemetry text-[9px] text-holo-amber font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-amber"></span>
                    NODE 03 // GIT PATCH
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-holo-amber/20 text-amber-300 font-telemetry text-[9px] font-bold">READY</span>
                </div>
                <div className="font-sans font-semibold text-xs text-slate-100">DEFENSESEC // REPO</div>
                <p className="font-sans text-[10px] text-slate-300 mt-1 leading-snug">eBPF Socket Ring Patch v4.2 drops corrupt payload headers at ingress.</p>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5 font-telemetry text-[9px]">
                  <span className="text-amber-400 font-mono text-[8px]">PR #402 MERGED</span>
                  <button className="px-2 py-0.5 rounded bg-holo-amber/20 hover:bg-holo-amber/30 text-amber-200 border border-holo-amber/30 transition-colors">Open Diff</button>
                </div>
              </div>

              {/* BOTTOM-RIGHT: Node 4 (ARXIV PREPRINT) */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[240px] sm:max-w-[270px] z-20 bg-[#0d1622]/90 backdrop-blur-md border border-amber-400/40 rounded-lg p-3 shadow-lg hover:border-amber-300 transition-all">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="flex items-center gap-1.5 font-telemetry text-[9px] text-amber-300 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    NODE 04 // PREPRINT
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-200 font-telemetry text-[9px] font-bold">PDF READY</span>
                </div>
                <div className="font-sans font-semibold text-xs text-slate-100">ARXIV: 2502.0411</div>
                <p className="font-sans text-[10px] text-slate-300 mt-1 leading-snug">Collimated Neural Sharding achieves sub-15ms verification handshakes.</p>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-white/5 font-telemetry text-[9px]">
                  <span className="text-holo-muted">Security Whitepaper</span>
                  <button className="px-2 py-0.5 rounded bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 border border-amber-400/30 transition-colors">Read Paper</button>
                </div>
              </div>

            </div>
          </div>

          {/* 3. LOWER HALF: TIMELINE & EXECUTION METRICS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Horizontal 4-Step Research Timeline */}
            <div className="lg:col-span-8 hud-panel rounded-xl p-4 flex flex-col justify-between border border-holo-amber/15 bg-[#08111a]/82">
              <div className="reticle-corner-tl !border-holo-amber"></div>
              <div className="reticle-corner-tr !border-holo-amber"></div>
              <div className="reticle-corner-bl !border-holo-amber"></div>
              <div className="reticle-corner-br !border-holo-amber"></div>
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-holo-amber/15">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[17px] text-holo-amber">timeline</span>
                  <h3 className="font-sans font-bold text-xs text-slate-100 uppercase tracking-wider">Autonomous Research Sequence</h3>
                </div>
                <span className="font-telemetry text-[10px] text-holo-cyan tracking-wider">AUDIT LOG // VERIFIED</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
                {/* Step 1 */}
                <div className="p-2.5 rounded-lg bg-[#0e1724]/90 border border-holo-amber/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-muted mb-1">
                    <span>10:41:02</span>
                    <span className="text-emerald-400 font-bold">STEP 01</span>
                  </div>
                  <div className="font-sans font-bold text-[11px] text-slate-100">Voice Ingest</div>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 line-clamp-2">"Research zero-day exploit CVE-2025-8819 and agent countermeasures."</p>
                  <div className="mt-2 pt-1 border-t border-white/5 font-telemetry text-[9px] text-holo-amber font-medium">● Resolved</div>
                </div>

                {/* Step 2 */}
                <div className="p-2.5 rounded-lg bg-[#0e1724]/90 border border-holo-cyan/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-muted mb-1">
                    <span>10:41:04</span>
                    <span className="text-holo-cyan font-bold">STEP 02</span>
                  </div>
                  <div className="font-sans font-bold text-[11px] text-slate-100">Fan-Out Query</div>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 line-clamp-2">Broadcasted telemetry query parameters across 3 vulnerability buses.</p>
                  <div className="mt-2 pt-1 border-t border-white/5 font-telemetry text-[9px] text-holo-cyan font-medium">3 Sources Queried</div>
                </div>

                {/* Step 3 */}
                <div className="p-2.5 rounded-lg bg-[#0e1724]/90 border border-holo-amber/20 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-muted mb-1">
                    <span>10:41:07</span>
                    <span className="text-amber-400 font-bold">STEP 03</span>
                  </div>
                  <div className="font-sans font-bold text-[11px] text-slate-100">Headless Crawl</div>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 line-clamp-2">Automated sandboxed daemons scraped technical advisories and git trees.</p>
                  <div className="mt-2 pt-1 border-t border-white/5 font-telemetry text-[9px] text-amber-300 font-medium">12 Docs Parsed</div>
                </div>

                {/* Step 4 */}
                <div className="p-2.5 rounded-lg bg-[#0e1724]/90 border border-emerald-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-muted mb-1">
                    <span>10:41:11</span>
                    <span className="text-emerald-400 font-bold">STEP 04</span>
                  </div>
                  <div className="font-sans font-bold text-[11px] text-slate-100">Synaptic Map Live</div>
                  <p className="font-sans text-[10px] text-slate-400 mt-1 line-clamp-2">Correlated threat findings and kernel patch vectors into active topology.</p>
                  <div className="mt-2 pt-1 border-t border-white/5 font-telemetry text-[9px] text-emerald-400 font-medium">Parity Confirmed</div>
                </div>
              </div>
            </div>

            {/* High-Signal Prioritized Intelligence Findings Card */}
            <div className="lg:col-span-4 hud-panel rounded-xl p-4 flex flex-col justify-between gap-3 border border-holo-amber/15 bg-[#08111a]/82">
              <div className="reticle-corner-tl !border-holo-amber"></div>
              <div className="reticle-corner-tr !border-holo-amber"></div>
              <div className="reticle-corner-bl !border-holo-amber"></div>
              <div className="reticle-corner-br !border-holo-amber"></div>
              
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-holo-amber/15">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[17px] text-holo-amber">verified</span>
                    <h3 className="font-sans font-bold text-xs text-slate-100 uppercase tracking-wider">Prioritized Findings</h3>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-telemetry text-[9px] font-bold">2 CRITICAL</span>
                </div>
                
                <div className="space-y-2 mt-2 font-sans text-xs">
                  <div className="p-2 rounded-lg bg-[#0a121c]/90 border border-rose-500/25">
                    <div className="font-telemetry text-[9px] text-rose-400 font-bold uppercase mb-0.5">PRIMARY EXPLOIT VECTOR</div>
                    <div className="font-semibold text-slate-200 text-[11px]">Unbounded Heap Ingest in PDF Daemons</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Affects autonomous OCR ingestion worker nodes (CVE-2025-8819).</div>
                  </div>
                  <div className="p-2 rounded-lg bg-[#0a121c]/90 border border-emerald-500/25">
                    <div className="font-telemetry text-[9px] text-emerald-400 font-bold uppercase mb-0.5">VERIFIED PATCH STATUS</div>
                    <div className="font-semibold text-slate-200 text-[11px]">eBPF Socket Ring Boundary Filter v4.2</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Prevents payload handoff at kernel ingress; ready for deployment.</div>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-2.5 px-3 rounded-lg bg-gradient-to-r from-holo-amber to-holo-orange text-black font-sans font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:brightness-110 active:scale-[0.99] transition-all">
                <span className="material-symbols-outlined text-[17px] font-bold">description</span>
                <span>[ COMPOSE SECURITY BRIEFING ]</span>
              </button>
            </div>

          </div>
        </main>

        {/* ==================== RIGHT PANEL: Live Transcript & Tool Activity ==================== */}
        <aside className="w-full lg:w-80 xl:w-96 shrink-0 bg-[#08111a]/85 backdrop-blur-xl border border-holo-amber/20 rounded-xl p-3.5 flex flex-col gap-3.5 z-30 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
          
          {/* 1. Live Transcript Card */}
          <div className="hud-panel rounded-lg p-3 flex flex-col flex-1 min-h-[340px] border border-holo-amber/15 bg-[#08111a]/82">
            <div className="reticle-corner-tl !border-holo-amber"></div>
            <div className="reticle-corner-tr !border-holo-amber"></div>
            <div className="reticle-corner-bl !border-holo-amber"></div>
            <div className="reticle-corner-br !border-holo-amber"></div>
            
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-holo-amber/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-holo-amber">forum</span>
                <span className="font-sans font-bold text-[12px] text-slate-100 tracking-wide">Live Transcript</span>
              </div>
              <button className="text-slate-400 hover:text-holo-amber">
                <span className="material-symbols-outlined text-[16px]">more_horiz</span>
              </button>
            </div>
            
            <div className="space-y-3 overflow-y-auto pr-1 flex-1 max-h-[300px]">
              
              {/* Message 1: User */}
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 ring-1 ring-white/20 mt-0.5">
                  <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlzSSib2auZx4GiKtKLxO9WEr0zZsMYP9L-Zh9BqJp2Q8e333vuGakjQqVJfcjPMbN9RlXiHGLHDSKamzucSWRAOZgbbj3TIW3huLjRExeFgk1AhZ50FqVurbHuI3m86YlsUHotLgWo4sgk7Ere63Sw9igCcd0RStGMhSUaQxjKXVNpGtIB5vtuUUsx6Iw7hrR3o0zw-0TptFOkia1Kzh62yUIzSVUSc_8EojirTCUiEGfqXa_kuXS" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px] mb-0.5">
                    <span className="text-holo-muted">10:41:02</span>
                    <span className="text-sky-400 font-bold">You</span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-200 bg-[#0e1925]/90 p-2 rounded-lg border border-sky-400/20 leading-relaxed">
                    Research zero-day exploit CVE-2025-8819 and agent countermeasures.
                  </p>
                </div>
              </div>
              
              {/* Message 2: SARA */}
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-holo-amber/20 border border-holo-amber/60 flex items-center justify-center shrink-0 text-holo-amber mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">all_inclusive</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between font-telemetry text-[9px] mb-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-holo-muted">10:41:05</span>
                      <span className="text-holo-amber font-bold">SARA</span>
                    </div>
                    <span className="px-1.5 py-0.2 rounded bg-amber-500/20 border border-amber-500/40 text-[8px] font-telemetry text-amber-300 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px] animate-spin">rotate_right</span> Topology Active
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-amber-100 bg-[#161208]/90 p-2 rounded-lg border border-holo-amber/30 leading-relaxed shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                    Auditing CVE-2025-8819. Dispatched web crawlers to NIST, arXiv, and GitHub kernel patch repos.
                  </p>
                </div>
              </div>
              
              {/* Message 3: Tool Card */}
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-holo-amber/20 border border-holo-amber/60 flex items-center justify-center shrink-0 text-holo-amber mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">extension</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between font-telemetry text-[9px] mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-holo-muted">10:41:09</span>
                      <span className="text-holo-amber font-bold">SARA</span>
                    </div>
                    <span className="px-1.5 py-0.2 rounded bg-holo-cyan/20 border border-holo-cyan/40 text-[8px] font-telemetry text-holo-cyan font-bold">
                      Completed
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#140e06]/95 border border-holo-amber/45 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-[15px] text-holo-amber">shield</span>
                      <span className="font-sans text-[11px] text-amber-200 font-bold">Patch Ingested</span>
                    </div>
                    <p className="font-sans text-[10px] text-slate-300 mb-1.5">eBPF Socket Ring Boundary Filter v4.2 verified against sandbox.</p>
                    <div className="w-full bg-[#0a0602] h-1.5 rounded-full overflow-hidden border border-holo-amber/30 p-px">
                      <div className="bg-gradient-to-r from-orange-500 to-holo-amber h-full rounded-full" style={{ width: "100%" }}></div>
                    </div>
                    <div className="text-right font-telemetry text-[8px] text-holo-cyan mt-1">100% Verified</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* 2. Tool Activity Card */}
          <div className="hud-panel rounded-lg p-3 border border-holo-amber/15 bg-[#08111a]/82">
            <div className="reticle-corner-tl !border-holo-amber"></div>
            <div className="reticle-corner-tr !border-holo-amber"></div>
            <div className="reticle-corner-bl !border-holo-amber"></div>
            <div className="reticle-corner-br !border-holo-amber"></div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-holo-amber/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-holo-amber">tune</span>
                <span className="font-sans font-bold text-[12px] text-slate-100">Tool Activity</span>
              </div>
              <button className="font-telemetry text-[10px] text-holo-amber hover:underline">View All</button>
            </div>
            
            <div className="space-y-2">
              <div className="p-2 rounded-md bg-[#101925]/80 border border-holo-amber/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#182637] text-holo-amber flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-semibold text-slate-200">NIST CVE Crawler</div>
                    <div className="font-telemetry text-[9px] text-holo-muted">CVSS 9.8 Heap Overflow • 1.8s</div>
                  </div>
                </div>
                <span className="font-telemetry text-[9px] text-emerald-400 font-medium">Completed</span>
              </div>
              
              <div className="p-2 rounded-md bg-[#101925]/80 border border-holo-amber/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#182637] text-holo-cyan flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">terminal</span>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-semibold text-slate-200">GitHub Defense Patch</div>
                    <div className="font-telemetry text-[9px] text-holo-muted">PR #402 eBPF filter • 2.1s</div>
                  </div>
                </div>
                <span className="font-telemetry text-[9px] text-holo-cyan font-medium">Ready</span>
              </div>
              
              <div className="p-2 rounded-md bg-[#101925]/80 border border-holo-amber/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-[#182637] text-slate-300 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">article</span>
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-semibold text-slate-200">arXiv: 2502.0411</div>
                    <div className="font-telemetry text-[9px] text-holo-muted">PDF parsed • 0.9s</div>
                  </div>
                </div>
                <span className="font-telemetry text-[9px] text-emerald-400 font-medium">Cached</span>
              </div>
            </div>
          </div>
          
        </aside>

      </div>
    </ConsoleLayout>
  );
}
