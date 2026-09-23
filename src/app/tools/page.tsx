"use client";

import React, { useState, useEffect } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function ToolsPage() {
  const [btnState, setBtnState] = useState<'idle' | 'queued' | 'executed'>('idle');
  const [dispatchState, setDispatchState] = useState<'idle' | 'transmitting' | 'success'>('idle');
  const [inputValue, setInputValue] = useState('/send --target ciso-operations@matrix-corp.internal --sig authed');

  const handleInject = () => {
    if (!inputValue.trim()) return;
    setBtnState('queued');
    setTimeout(() => {
      setBtnState('executed');
      setTimeout(() => {
        setBtnState('idle');
      }, 1500);
    }, 800);
  };

  const handleDispatch = () => {
    setDispatchState('transmitting');
    setTimeout(() => {
      setDispatchState('success');
      setTimeout(() => {
        setDispatchState('idle');
      }, 2500);
    }, 1200);
  };

  const handleChipClick = (cmd: string) => {
    setInputValue(cmd);
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 min-h-screen pb-36 px-4 lg:px-6 w-full max-w-[1920px] mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-6 w-full">
            
            {/* TOP TELEMETRY STRIP & TOOL BUS OVERVIEW */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
              {/* Metric 1: Active Tool Workers */}
              <div className="relative bg-[#171c25]/75 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col justify-between overflow-hidden border border-holo-cyan/10">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-holo-cyan/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
                    <span className="font-telemetry text-[10px] uppercase text-slate-400">BUS // STATE_ACTIVE</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-holo-cyan bg-[#252a33] px-1.5 py-0.5 rounded">POLL 200Hz</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-sans text-[48px] text-sky-200 font-light tracking-tight leading-none">03</div>
                    <div className="font-sans text-[12px] text-slate-400 mt-1">Parallel Verb Coroutines</div>
                  </div>
                  <div className="flex gap-1 items-end h-8">
                    <div className="w-1.5 bg-holo-cyan/30 h-3 rounded-sm"></div>
                    <div className="w-1.5 bg-holo-cyan/50 h-5 rounded-sm"></div>
                    <div className="w-1.5 bg-holo-cyan h-8 rounded-sm shadow-[0_0_8px_#00f0ff]"></div>
                    <div className="w-1.5 bg-holo-cyan/80 h-6 rounded-sm"></div>
                  </div>
                </div>
                <div className="mt-2 pt-1 flex justify-between font-telemetry text-[10px] text-slate-400">
                  <span>THROUGHPUT: 1.48 kTPS</span>
                  <span className="text-holo-cyan">NOMINAL</span>
                </div>
              </div>

              {/* Metric 2: Queue Depth */}
              <div className="relative bg-[#171c25]/75 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col justify-between overflow-hidden border border-holo-amber/10">
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-holo-amber/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-amber"></span>
                    <span className="font-telemetry text-[10px] uppercase text-slate-400">QUEUE // PRIORITY_BUFFER</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-holo-amber bg-[#252a33] px-1.5 py-0.5 rounded">5 PENDING</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-sans text-[48px] text-holo-amber font-light tracking-tight leading-none">05</div>
                    <div className="font-sans text-[12px] text-slate-400 mt-1">Pending Execution Frames</div>
                  </div>
                  <div className="w-16 h-8 flex items-center justify-center">
                    <svg className="w-full h-full text-holo-amber" fill="none" viewBox="0 0 64 24">
                      <path d="M0 18 Q16 4 32 16 T64 8" fill="transparent" stroke="currentColor" strokeWidth="2"></path>
                      <circle cx="56" cy="10" fill="currentColor" r="2.5"></circle>
                    </svg>
                  </div>
                </div>
                <div className="mt-2 pt-1 flex justify-between font-telemetry text-[10px] text-slate-400">
                  <span>MAX WAIT: 142ms</span>
                  <span className="text-holo-amber">STABLE</span>
                </div>
              </div>

              {/* Metric 3: Today's Resolved Dispatches */}
              <div className="relative bg-[#171c25]/75 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col justify-between overflow-hidden border border-emerald-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="font-telemetry text-[10px] uppercase text-slate-400">RESOLVED // CYCLE_24H</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-emerald-400 bg-[#252a33] px-1.5 py-0.5 rounded">99.8% SUCCESS</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-sans text-[48px] text-slate-200 font-light tracking-tight leading-none">48</div>
                    <div className="font-sans text-[12px] text-slate-400 mt-1">Completed Tool Invocations</div>
                  </div>
                  <div className="flex items-center text-emerald-400">
                    <span className="material-symbols-outlined text-[28px]">done_all</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 flex justify-between font-telemetry text-[10px] text-slate-400">
                  <span>ANOMALIES: 00</span>
                  <span className="text-emerald-400">+12 vs PREV CYCLE</span>
                </div>
              </div>

              {/* Metric 4: Mean Bus Latency */}
              <div className="relative bg-[#171c25]/75 backdrop-blur-md rounded-xl p-4 shadow-xl flex flex-col justify-between overflow-hidden border border-holo-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                    <span className="font-telemetry text-[10px] uppercase text-slate-400">LATENCY // ULTRON_BUS</span>
                  </div>
                  <span className="font-telemetry text-[10px] text-holo-cyan bg-[#252a33] px-1.5 py-0.5 rounded">JITTER &lt;1.2ms</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-sans text-[48px] text-sky-200 font-light tracking-tight leading-none">
                      28<span className="text-[20px] font-telemetry ml-1 text-holo-cyan">ms</span>
                    </div>
                    <div className="font-sans text-[12px] text-slate-400 mt-1">Sub-Agent Roundtrip</div>
                  </div>
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                      <path className="text-holo-cyan" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="82, 100" strokeWidth="3"></path>
                    </svg>
                    <span className="absolute font-telemetry text-[9px] text-sky-200">82%</span>
                  </div>
                </div>
                <div className="mt-2 pt-1 flex justify-between font-telemetry text-[10px] text-slate-400">
                  <span>BURST: 38ms MAX</span>
                  <span className="text-holo-cyan">E2EE-SYNCHRONIZED</span>
                </div>
              </div>
            </div>

            {/* WORKFLOW MATRIX / KANBAN TELEMETRY GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 w-full">
              
              {/* CARD 1: VERB // READ */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-holo-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-holo-cyan tracking-wider uppercase">VERB // READ</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">INBOX_STREAM_SENTINEL</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></span>
                    <span className="font-telemetry text-[9px] text-slate-400">SCANNING</span>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#1b2029]/60 rounded-lg p-2 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-slate-400 font-telemetry text-[9px]">
                    <span>TARGET: secops-gateway@node.ul</span>
                    <span className="text-holo-amber">POLL: 2s INTERVAL</span>
                  </div>
                  <div className="h-1 bg-[#30353e] rounded-full overflow-hidden w-full">
                    <div className="bg-holo-cyan h-full w-3/4 rounded-full transition-all duration-300"></div>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col gap-1.5">
                  <div className="bg-[#252a33]/50 p-2 rounded flex items-start justify-between gap-2 border border-red-500/10">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-red-400 text-[18px] mt-0.5">warning</span>
                      <div>
                        <div className="font-telemetry text-[10px] text-slate-200">CVE-2025-4418 - Zero-Day Buffer Trigger</div>
                        <div className="font-telemetry text-[9px] text-slate-400">Source: ThreatNet Node #41 • Score: 9.8 Critical</div>
                      </div>
                    </div>
                    <span className="font-telemetry text-[9px] text-red-400 bg-red-500/20 px-1 py-0.5 rounded">ALERT</span>
                  </div>
                  
                  <div className="bg-[#252a33]/50 p-2 rounded flex items-start justify-between gap-2 border border-holo-amber/10">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-holo-amber text-[18px] mt-0.5">verified_user</span>
                      <div>
                        <div className="font-telemetry text-[10px] text-slate-200">SOC2 Parity Discrepancy #108</div>
                        <div className="font-telemetry text-[9px] text-slate-400">Source: Compliance-Bot • Sentiment: Neutral (-0.12)</div>
                      </div>
                    </div>
                    <span className="font-telemetry text-[9px] text-holo-amber bg-holo-amber/20 px-1 py-0.5 rounded">FLAGGED</span>
                  </div>
                  
                  <div className="bg-[#252a33]/50 p-2 rounded flex items-start justify-between gap-2 border border-holo-cyan/10">
                    <div className="flex items-start gap-1.5">
                      <span className="material-symbols-outlined text-holo-cyan text-[18px] mt-0.5">key</span>
                      <div>
                        <div className="font-telemetry text-[10px] text-slate-200">SSH Key Rotation Ack — Prod Fleet A</div>
                        <div className="font-telemetry text-[9px] text-slate-400">Source: VaultOps • Auto-Verifying Fingerprint</div>
                      </div>
                    </div>
                    <span className="font-telemetry text-[9px] text-sky-200 bg-holo-cyan/20 px-1 py-0.5 rounded">PARSED</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>PARSED: 18 EMAILS // 3 INTERCEPTED</span>
                  <button className="text-sky-200 hover:text-holo-cyan transition-colors uppercase flex items-center gap-1">
                    DRAIN QUEUE <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* CARD 2: VERB // PARSE */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-holo-amber/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-holo-amber tracking-wider uppercase">VERB // PARSE</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">DOCUMENT_OCR_STREAM</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-holo-amber bg-[#252a33] px-1.5 py-0.5 rounded">99.4% CONFIDENCE</span>
                </div>
                
                <div className="mt-4 bg-[#090e17]/80 rounded-lg p-2 flex items-center gap-4">
                  <div className="w-12 h-14 bg-[#252a33] rounded flex flex-col items-center justify-center text-holo-cyan relative overflow-hidden">
                    <span className="material-symbols-outlined text-[24px]">description</span>
                    <span className="font-telemetry text-[9px] uppercase mt-0.5">PDF</span>
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-holo-amber animate-pulse"></div>
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-telemetry text-[10px] text-slate-200 truncate">audit_v2_financial_matrix.pdf</span>
                      <span className="font-telemetry text-[9px] text-holo-amber">PAGE 14/18</span>
                    </div>
                    <span className="font-telemetry text-[9px] text-slate-400 mt-0.5">Target: Extracted Financial Ledger Table (24 cols x 148 rows)</span>
                    <div className="mt-2 flex items-center justify-between text-slate-400 font-telemetry text-[9px]">
                      <span>RATE: 840 TOK/S</span>
                      <span className="text-holo-cyan">MATRIX RESOLUTION OK</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#1b2029]/50 rounded-lg p-2 font-telemetry text-[9px] overflow-x-auto">
                  <div className="grid grid-cols-4 gap-1 pb-1 text-slate-400 font-medium border-b border-slate-700/50 mb-1">
                    <span>INDEX</span>
                    <span>VECTOR_COL</span>
                    <span>ALLOC_HEX</span>
                    <span className="text-right">WEIGHT</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 py-1 text-slate-200 bg-[#252a33]/40 px-1 rounded">
                    <span className="text-holo-amber">0x0F41</span>
                    <span>ASSET_REV</span>
                    <span className="text-slate-400">0x7FA910</span>
                    <span className="text-right text-holo-cyan">+0.8421</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 py-1 text-slate-200 px-1">
                    <span className="text-holo-amber">0x0F42</span>
                    <span>OPEX_DELT</span>
                    <span className="text-slate-400">0x7FA924</span>
                    <span className="text-right text-red-400">-0.1944</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 py-1 text-slate-200 bg-[#252a33]/40 px-1 rounded">
                    <span className="text-holo-amber">0x0F43</span>
                    <span>LIQ_MARGIN</span>
                    <span className="text-slate-400">0x7FA938</span>
                    <span className="text-right text-holo-cyan">+0.9912</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>PARSING PIPELINE: TESSERACT-V5 / NEURAL</span>
                  <span className="text-holo-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span> INGESTING
                  </span>
                </div>
              </div>

              {/* CARD 3: VERB // SEND */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-holo-amber/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-holo-amber tracking-wider uppercase">VERB // SEND</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">DISPATCH_INTERCONNECT</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-holo-amber bg-holo-amber/20 px-1.5 py-0.5 rounded border border-holo-amber/30">APPROVAL_REQUIRED</span>
                </div>
                
                <div className="mt-4 bg-[#1b2029]/70 rounded-lg p-2 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between font-telemetry text-[9px]">
                    <span className="text-slate-400">RECIPIENT:</span>
                    <span className="text-sky-200">ciso-operations@matrix-corp.internal</span>
                  </div>
                  <div className="flex items-center justify-between font-telemetry text-[9px]">
                    <span className="text-slate-400">SUBJECT:</span>
                    <span className="text-slate-200 font-medium truncate ml-2">URGENT: Automated Mitigation Triggered for CVE-2025-4418</span>
                  </div>
                  <div className="bg-[#090e17]/80 rounded p-1.5 mt-1 text-slate-400 font-sans text-[12px] leading-relaxed max-h-20 overflow-y-auto">
                    "SARA Agent #04 has isolated the subnet ingress for target cluster 09. Verification token signed via Ultron-Core HSM key. Requesting secondary human bypass or execution clearance."
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between bg-[#252a33]/60 px-2 py-1.5 rounded">
                    <div className="flex items-center gap-1.5 font-telemetry text-[9px]">
                      <span className="material-symbols-outlined text-holo-amber text-[16px]">lock</span>
                      <span className="text-slate-200">SECURITY SIGNATURE CHECK</span>
                    </div>
                    <input defaultChecked className="accent-holo-amber cursor-pointer w-4 h-4 rounded" type="checkbox" />
                  </div>
                  
                  <button onClick={handleDispatch} className={`w-full mt-1 py-1.5 px-2 font-sans text-[16px] font-bold rounded flex items-center justify-center gap-1.5 transition-all shadow-[0_0_16px_rgba(255,184,105,0.25)] ${
                    dispatchState === 'idle' ? 'bg-holo-amber text-black hover:bg-orange-400' :
                    dispatchState === 'transmitting' ? 'bg-holo-cyan text-black' :
                    'bg-emerald-500 text-black'
                  }`}>
                    {dispatchState === 'idle' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]">bolt</span>
                        <span>EXECUTE DISPATCH (OPCODE #89)</span>
                      </>
                    )}
                    {dispatchState === 'transmitting' && (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">autorenew</span>
                        <span>TRANSMITTING...</span>
                      </>
                    )}
                    {dispatchState === 'success' && (
                      <>
                        <span className="material-symbols-outlined text-[18px]">verified</span>
                        <span>DISPATCH SUCCESSFUL</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>SIGNATURE: RSA-4096 VALID</span>
                  <span className="text-holo-amber">STAGE: STAGED_ARMED</span>
                </div>
              </div>

              {/* CARD 4: VERB // SEARCH */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-holo-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-holo-cyan tracking-wider uppercase">VERB // SEARCH</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">VECTOR_EMBEDDING_RECALL</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-holo-cyan bg-[#252a33] px-1.5 py-0.5 rounded">CHROMA_DB // PINECONE</span>
                </div>
                
                <div className="mt-4 flex flex-col gap-1.5">
                  <div className="font-telemetry text-[9px] text-slate-400 flex justify-between">
                    <span>QUERY: "zero-day buffer remediation protocol"</span>
                    <span className="text-sky-200">K=5 NEIGHBORS</span>
                  </div>
                  
                  {/* Dynamic Vector Cosine Graph Visualizer */}
                  <div className="relative bg-[#090e17]/90 rounded-lg h-36 flex items-center justify-center p-1.5 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#00f0ff08_1px,transparent_1px)] [background-size:12px_12px]"></div>
                    <svg className="w-full h-full text-holo-cyan" viewBox="0 0 280 120">
                      <circle cx="140" cy="60" fill="none" r="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3,3" strokeWidth="1"></circle>
                      <circle cx="140" cy="60" fill="none" r="28" stroke="rgba(255,255,255,0.08)" strokeWidth="1"></circle>
                      <circle cx="140" cy="60" fill="currentColor" r="4"></circle>
                      
                      <line stroke="rgba(0,240,255,0.5)" strokeWidth="1.5" x1="140" x2="190" y1="60" y2="35"></line>
                      <line stroke="rgba(0,240,255,0.4)" strokeWidth="1.2" x1="140" x2="80" y1="60" y2="40"></line>
                      <line stroke="rgba(0,240,255,0.3)" strokeWidth="1" x1="140" x2="160" y1="60" y2="100"></line>
                      <line stroke="rgba(0,240,255,0.3)" strokeWidth="1" x1="140" x2="95" y1="60" y2="85"></line>
                      
                      <circle cx="190" cy="35" fill="#00f0ff" r="5"></circle>
                      <text fill="#dbfcff" fontFamily="JetBrains Mono" fontSize="8" x="198" y="38">cos: 0.941</text>
                      
                      <circle cx="80" cy="40" fill="#3e90ff" r="4.5"></circle>
                      <text fill="#aac7ff" fontFamily="JetBrains Mono" fontSize="8" x="35" y="42">cos: 0.887</text>
                      
                      <circle cx="160" cy="100" fill="#ffb869" r="3.5"></circle>
                      <text fill="#ffb869" fontFamily="JetBrains Mono" fontSize="8" x="168" y="103">cos: 0.812</text>
                      
                      <circle cx="95" cy="85" fill="#7df4ff" r="3.5"></circle>
                    </svg>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col gap-1 font-telemetry text-[9px]">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>TOP MATCH: [REC-0941] Incident Runbook #88-B</span>
                    <span className="text-sky-200 font-medium">94.1% SIM</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>INDEX SIZE: 1,420,890 VECTORS</span>
                    <span className="text-slate-200">P99: 14ms</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>DIMENSIONS: 1536 (OPENAI TEXT-003)</span>
                  <span className="text-sky-200">CACHE HIT</span>
                </div>
              </div>

              {/* CARD 5: VERB // NAVIGATE */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-blue-400/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-blue-300 tracking-wider uppercase">VERB // NAVIGATE</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">CHROMIUM_HEADLESS_RUNNER</span>
                  </div>
                  <div className="flex items-center gap-1 font-telemetry text-[9px] text-blue-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>PORTAL_ACTIVE</span>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#090e17]/90 rounded-lg overflow-hidden flex flex-col border border-slate-800">
                  <div className="bg-[#252a33] px-2 py-1 flex items-center gap-1.5 font-telemetry text-[9px]">
                    <span className="w-2 h-2 rounded-full bg-red-900"></span>
                    <span className="w-2 h-2 rounded-full bg-holo-amber/40"></span>
                    <span className="w-2 h-2 rounded-full bg-holo-cyan/40"></span>
                    <div className="ml-2 flex-1 bg-[#1b2029] px-2 py-0.5 rounded text-slate-400 truncate">
                      https://cve-matrix.nist.gov/portal/advisory/2025-4418
                    </div>
                  </div>
                  <div className="relative p-2 h-28 flex flex-col justify-between bg-[#171c25]/30">
                    <div className="space-y-1">
                      <div className="h-2 bg-[#30353e] rounded w-3/4"></div>
                      <div className="h-2 bg-[#30353e] rounded w-1/2"></div>
                    </div>
                    <div className="relative border border-holo-cyan/60 bg-holo-cyan/10 p-1.5 rounded">
                      <div className="absolute -top-2 left-1 bg-holo-cyan text-[#00363a] font-telemetry text-[9px] px-1 rounded-sm">
                        #DOM_PATCH_TABLE
                      </div>
                      <div className="flex items-center justify-between font-telemetry text-[9px] text-sky-200 mt-2">
                        <span>SELECT: div[data-patch="live"]</span>
                        <span className="text-holo-amber">STATUS: CAPTURED</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 grid grid-cols-3 gap-1 text-center font-telemetry text-[9px]">
                  <div className="bg-[#252a33]/50 p-1.5 rounded">
                    <div className="text-slate-400">NODES</div>
                    <div className="font-telemetry text-[10px] text-slate-200 font-semibold">1,842</div>
                  </div>
                  <div className="bg-[#252a33]/50 p-1.5 rounded">
                    <div className="text-slate-400">COOKIES</div>
                    <div className="font-telemetry text-[10px] text-sky-200">ISOLATED</div>
                  </div>
                  <div className="bg-[#252a33]/50 p-1.5 rounded">
                    <div className="text-slate-400">RENDER</div>
                    <div className="font-telemetry text-[10px] text-blue-400">24 FPS</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>WORKER: CHROMIUM-HEADLESS-V122</span>
                  <span className="text-blue-400">PUPPETEER_CONNECTED</span>
                </div>
              </div>

              {/* CARD 6: VERB // SYNTHESIZE */}
              <div className="group relative bg-[#171c25]/70 backdrop-blur-xl rounded-xl p-4 shadow-xl flex flex-col justify-between transition-all hover:bg-[#171c25]/90 border border-holo-cyan/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-[#30353e] font-telemetry text-[9px] text-holo-cyan tracking-wider uppercase">VERB // SYNTHESIZE</span>
                    <span className="font-telemetry text-[10px] text-slate-200 font-medium">NEURAL_SPEECH_ENCODER</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-holo-cyan bg-[#252a33] px-1.5 py-0.5 rounded">148 WPM • 48kHz</span>
                </div>
                
                <div className="mt-4 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                    <span>PACKET: SARA_VOICE_CHUNK_#419</span>
                    <span className="text-holo-amber">PITCH: +1.4st • EMOTIVE: HIGH</span>
                  </div>
                  
                  {/* Dynamic Audio Spectrogram Visualization */}
                  <div className="relative bg-[#090e17]/90 rounded-lg p-2 h-32 flex items-end justify-between gap-1 overflow-hidden">
                    <div className="absolute top-2 left-2 font-telemetry text-[9px] text-slate-400">SPECTRUM 20Hz - 22kHz</div>
                    <div className="w-1 bg-blue-400/40 h-8 rounded-t"></div>
                    <div className="w-1 bg-blue-400/60 h-14 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan h-24 rounded-t shadow-[0_0_6px_#00f0ff]"></div>
                    <div className="w-1 bg-holo-cyan h-28 rounded-t shadow-[0_0_6px_#00f0ff]"></div>
                    <div className="w-1 bg-holo-cyan h-20 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan/80 h-16 rounded-t"></div>
                    <div className="w-1 bg-holo-amber h-26 rounded-t shadow-[0_0_6px_#ffb869]"></div>
                    <div className="w-1 bg-holo-amber h-24 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan h-18 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan/90 h-22 rounded-t"></div>
                    <div className="w-1 bg-blue-400 h-12 rounded-t"></div>
                    <div className="w-1 bg-blue-400/60 h-7 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan h-19 rounded-t"></div>
                    <div className="w-1 bg-holo-cyan h-27 rounded-t shadow-[0_0_6px_#00f0ff]"></div>
                    <div className="w-1 bg-holo-amber h-22 rounded-t"></div>
                    <div className="w-1 bg-blue-400/70 h-10 rounded-t"></div>
                    <div className="w-1 bg-blue-400/40 h-5 rounded-t"></div>
                  </div>
                </div>
                
                <div className="mt-4 bg-[#1b2029]/60 p-1.5 rounded flex items-center justify-between font-telemetry text-[9px]">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-holo-cyan">record_voice_over</span>
                    <span className="truncate">"Zero-day vector mitigated. Core channels secure."</span>
                  </div>
                  <span className="text-holo-cyan">STREAMING</span>
                </div>
                
                <div className="mt-4 pt-1 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
                  <span>LATENCY: 42ms FIRST-TOKEN</span>
                  <span className="text-holo-cyan">OPUS STEREO</span>
                </div>
              </div>
            </div>

            {/* COMMAND CONSOLE / VERB INJECTOR & SAFETY CONTROLS */}
            <div className="relative bg-[#171c25]/90 backdrop-blur-2xl rounded-xl p-4 shadow-2xl flex flex-col gap-2 mt-2 border border-slate-700/50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></div>
                  <span className="font-telemetry text-[10px] text-slate-200 uppercase tracking-wider font-semibold">VERB INJECTOR // AUTONOMOUS REPL CONSOLE</span>
                </div>
                
                {/* Safety Threshold Indicator */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 bg-[#252a33] px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-holo-amber text-[16px]">shield</span>
                    <span className="font-telemetry text-[9px] text-slate-400">SAFETY LEVEL:</span>
                    <span className="font-telemetry text-[9px] text-holo-amber font-bold">L4 STRICT PROTOCOL</span>
                  </div>
                  <div className="hidden md:flex items-center gap-1 font-telemetry text-[9px] text-slate-400">
                    <span>PARITY ENFORCED: SHA-256</span>
                  </div>
                </div>
              </div>
              
              {/* Live Input Bar */}
              <div className="relative flex items-center bg-[#090e17] rounded-lg p-2 shadow-inner border border-slate-800">
                <span className="font-telemetry text-[14px] text-sky-200 mr-2 select-none">❯_</span>
                <input 
                  className="w-full bg-transparent text-holo-cyan font-telemetry text-[12px] focus:outline-none placeholder:text-slate-600" 
                  placeholder="Inject verb (/send, /scrape, /audit, /index, /synthesize)..." 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex items-center gap-1 ml-2">
                  <button onClick={handleInject} className={`px-4 py-1.5 font-telemetry text-[10px] font-semibold rounded uppercase tracking-wider transition-all flex items-center gap-1 ${
                    btnState === 'idle' ? 'bg-holo-cyan text-[#00363a] hover:bg-sky-200 shadow-[0_0_12px_rgba(0,240,255,0.3)]' : 
                    btnState === 'queued' ? 'bg-slate-700 text-slate-300' : 'bg-emerald-500 text-[#00363a]'
                  }`}>
                    {btnState === 'idle' && (
                      <>
                        <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                        <span>INJECT</span>
                      </>
                    )}
                    {btnState === 'queued' && (
                      <>
                        <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                        <span>QUEUED</span>
                      </>
                    )}
                    {btnState === 'executed' && (
                      <>
                        <span className="material-symbols-outlined text-[16px]">done</span>
                        <span>EXECUTED</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Autocomplete Shortcuts & Tool Quick Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2 font-telemetry text-[9px] pt-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-400 uppercase">QUICK VERBS:</span>
                  <button onClick={() => handleChipClick('/send --dry-run')} className="px-1.5 py-0.5 bg-[#252a33] hover:bg-[#30353e] text-holo-cyan rounded transition-colors">
                    /send
                  </button>
                  <button onClick={() => handleChipClick('/scrape --target https://cve-matrix.nist.gov')} className="px-1.5 py-0.5 bg-[#252a33] hover:bg-[#30353e] text-holo-cyan rounded transition-colors">
                    /scrape
                  </button>
                  <button onClick={() => handleChipClick('/audit --depth full')} className="px-1.5 py-0.5 bg-[#252a33] hover:bg-[#30353e] text-holo-cyan rounded transition-colors">
                    /audit
                  </button>
                  <button onClick={() => handleChipClick('/index --collection secops_v2')} className="px-1.5 py-0.5 bg-[#252a33] hover:bg-[#30353e] text-holo-cyan rounded transition-colors">
                    /index
                  </button>
                  <button onClick={() => handleChipClick('/kill --all-workers')} className="px-1.5 py-0.5 bg-[#252a33] hover:bg-[#30353e] text-holo-amber rounded transition-colors">
                    /kill
                  </button>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <span>TAB to autocomplete</span>
                  <span className="text-holo-cyan">HOTKEY: CTRL + ENTER</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
