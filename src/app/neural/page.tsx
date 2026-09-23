"use client";

import React, { useState, useEffect } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function NeuralPage() {
  const [zoom, setZoom] = useState(1.0);
  const [isSnapOn, setIsSnapOn] = useState(true);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isMicActive, setIsMicActive] = useState(true);
  const [isCamActive, setIsCamActive] = useState(true);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState([
    { time: "10:41:02", type: "info", text: "Ingest stream bound: optical_ocr_feed" },
    { time: "10:41:05", type: "success", text: "Kernel audit boundary 0x7ffd98 validated." },
    { time: "10:41:08", type: "warning", text: "Briefing synthesis compiled: 412 MB RAM." },
    { time: "10:41:09", type: "neutral", text: "Awaiting clearance for Vance dispatch." }
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = now.getHours();
      const mins = String(now.getMinutes()).padStart(2, '0');
      const ampm = hrs >= 12 ? 'PM' : 'AM';
      const hr12 = hrs % 12 || 12;
      setCurrentTime(`${hr12}:${mins} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const adjustZoom = (delta: number) => {
    setZoom((prev) => Math.min(Math.max(0.6, prev + delta), 1.6));
  };

  const addLog = (type: string, text: string) => {
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    setLogs(prev => [{ time, type, text }, ...prev].slice(0, 50));
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    addLog("success", "Conduit pulse triggered: 1.42 GB/s simulated.");
    setTimeout(() => setIsSimulating(false), 1500);
  };

  const handleExecute = () => {
    alert('SARA Pipeline Triggered: Autonomous Verbs Ingesting -> Synthesis -> Action Gate Verified.');
  };

  const handleAuthorize = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('SARA Security Gate: Clearance granted. Signed HSM envelope dispatched to vance.j@command.mil.');
    addLog("warning", "HUMAN GATE: Dispatch Authorized for Vance.");
  };

  const nodeData = {
    'node-1': { id: 'optical_ocr_feed', type: 'INGESTION', status: '60 FPS Streaming' },
    'node-2': { id: 'kernel_audit_eval', type: 'COGNITIVE', status: 'Verified 100%' },
    'node-3': { id: 'SARA_SYNAPTIC_SYNTHESIS', type: 'SYNTHESIS CORE', status: '1.2ms Latency' },
    'node-4': { id: 'read_inbox_stream', type: 'INGESTION', status: 'Polling 2s' },
    'node-5': { id: 'decision_tree_eval', type: 'COGNITIVE', status: '89.2% Vector' },
    'node-6': { id: 'dispatch_mail_envelope', type: 'ACTION GATE', status: 'Awaiting Authorization' },
    'node-7': { id: 'memory_archive_index', type: 'VAULT', status: '12 Nodes Parsed' },
  };

  const activeNodeInfo = activeNode ? nodeData[activeNode as keyof typeof nodeData] : null;

  return (
    <ConsoleLayout>
      <div className="pt-14 pb-28 min-h-screen flex flex-col lg:flex-row w-full max-w-[1920px] mx-auto bg-[#05080d] text-slate-200">
        
        {/* Ambient Holographic Scanline Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{
          background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(255, 154, 0, 0.02) 50%), linear-gradient(90deg, rgba(255, 120, 0, 0.015), rgba(0, 255, 255, 0.01), rgba(255, 150, 0, 0.015))',
          backgroundSize: '100% 3px, 4px 100%',
          opacity: 0.4
        }}></div>

        {/* LEFT COLLAPSIBLE NAVIGATION RAIL */}
        <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#08111a]/85 backdrop-blur-xl border-r border-orange-500/20 p-3.5 flex flex-col gap-3 z-30">
          <button className="w-full py-2 px-3.5 rounded-lg border border-orange-500/50 bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 font-sans text-[12px] font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,154,0,0.25)] transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            <span>New Session</span>
          </button>
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
            <input className="w-full bg-[#0d1622] rounded-md border border-orange-500/20 pl-8 pr-3 py-1.5 font-sans text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50" placeholder="Search..." type="text" />
          </div>
          <nav className="flex flex-col gap-1 font-sans text-[12px]">
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#182332] text-orange-400 border border-orange-500/35 font-medium shadow-[0_0_10px_rgba(255,154,0,0.15)]">
              <span className="material-symbols-outlined text-[18px]">hub</span>
              <span>Intelligence Map</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-orange-400 hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">history</span>
              <span>History</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-orange-400 hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">neurology</span>
              <span>Memory</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-orange-400 hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">extension</span>
              <span>Tools</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-orange-400 hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">folder</span>
              <span>Files</span>
            </button>
            <button className="flex items-center gap-2.5 px-3 py-1.5 rounded-md text-slate-400 hover:text-orange-400 hover:bg-[#121c27] transition-all">
              <span className="material-symbols-outlined text-[18px]">tune</span>
              <span>Settings</span>
            </button>
          </nav>
          
          <div className="mt-2 pt-2 border-t border-orange-500/15 flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between text-slate-400 px-1 mb-2 cursor-pointer hover:text-orange-400 transition-all">
              <span className="font-telemetry text-[10px] tracking-wider uppercase font-semibold">Active Inquiries</span>
              <span className="material-symbols-outlined text-[16px]">expand_less</span>
            </div>
            <div className="space-y-1.5 overflow-y-auto pr-0.5 flex-1 max-h-[300px]">
              
              <div className="p-2.5 rounded-lg bg-[#141d28] border border-orange-500/50 shadow-[0_0_12px_rgba(255,154,0,0.18)]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[16px] text-orange-400 mt-0.5">security</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-slate-100 truncate">CVE-2025-8819 Research</div>
                    <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">Active Audit • Topology Live</div>
                    <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5 font-telemetry text-[9px] text-orange-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping"></span> Live Sync
                      </span>
                      <span className="text-holo-cyan">4 Nodes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-2.5 rounded-lg bg-[#0e1722]/80 hover:bg-[#131f2d] border border-orange-500/15 transition-all">
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

        {/* CENTER DOMINANT VIEWPORT */}
        <main className="flex-1 relative p-3 sm:p-5 flex flex-col gap-4 overflow-y-auto min-w-0 z-10">
          <div className="flex flex-col w-full select-none h-full">
            
            {/* TOP CANVAS ACTION & TELEMETRY TOOLBAR */}
            <header className="w-full bg-[#090e17]/90 backdrop-blur-md px-6 py-2 mb-2 rounded shadow-xl flex flex-wrap items-center justify-between gap-6 border border-slate-800">
              <div className="flex flex-wrap items-center gap-6 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-holo-cyan text-[18px]">account_tree</span>
                  <span className="font-telemetry text-[12px] text-sky-200 font-bold uppercase tracking-wider">SARA // SYNAPTIC WORKBENCH</span>
                  <span className="font-telemetry text-[9px] text-slate-400 uppercase px-1.5 py-0.5 rounded bg-[#252a33]">v5.2-RELEASE</span>
                </div>
                <div className="hidden xl:flex items-center gap-6">
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
                    <span className="text-slate-400">NODES:</span>
                    <span className="text-slate-200 font-semibold">7 ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px]">
                    <span className="text-slate-400">FLOW CONDUITS:</span>
                    <span className="text-orange-400 font-semibold">9 ENGAGED</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px]">
                    <span className="text-slate-400">CYCLE LATENCY:</span>
                    <span className="text-holo-cyan font-semibold">8.4ms</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <div className="hidden sm:flex items-center bg-[#171c25] px-2 py-1 rounded gap-1">
                  <button className="text-slate-400 hover:text-sky-200 transition-colors p-0.5" onClick={() => adjustZoom(-0.1)} title="Zoom Out">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="font-telemetry text-[9px] text-holo-cyan min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
                  <button className="text-slate-400 hover:text-sky-200 transition-colors p-0.5" onClick={() => adjustZoom(0.1)} title="Zoom In">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
                <button 
                  className={`px-3 py-1 rounded font-telemetry text-[9px] flex items-center gap-1 transition-colors ${isSnapOn ? 'bg-[#252a33] text-slate-200' : 'bg-[#171c25] text-slate-400'}`} 
                  onClick={() => setIsSnapOn(!isSnapOn)}
                >
                  <span className={`material-symbols-outlined text-[14px] ${isSnapOn ? 'text-holo-cyan' : ''}`}>grid_on</span>
                  <span>SNAP: {isSnapOn ? 'ON' : 'OFF'}</span>
                </button>
                <button className="px-3 py-1 rounded bg-[#252a33] text-orange-400 hover:bg-[#343943] font-telemetry text-[9px] flex items-center gap-1 transition-colors" onClick={handleSimulate}>
                  <span className="material-symbols-outlined text-[14px]">play_circle</span>
                  <span>SIMULATE</span>
                </button>
                <button className="px-4 py-1 rounded bg-holo-cyan text-[#002022] hover:bg-sky-400 font-telemetry text-[9px] font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95" onClick={handleExecute}>
                  <span className="material-symbols-outlined text-[15px]">bolt</span>
                  <span>EXECUTE PIPELINE</span>
                </button>
              </div>
            </header>

            {/* WORKSPACE WRAPPER */}
            <div className="relative w-full flex-1 flex flex-col xl:flex-row gap-4 min-h-[780px]">
              
              {/* VERB PALETTE */}
              <aside className="w-full xl:w-72 bg-[#090e17]/80 backdrop-blur-md p-2 rounded shadow-lg flex flex-col gap-2 shrink-0 border border-slate-800">
                <div className="relative w-full">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
                  <input className="w-full bg-[#252a33] rounded pl-8 pr-2 py-1.5 font-telemetry text-[9px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:bg-[#343943] transition-colors" placeholder="Filter verbs, modules..." type="text" />
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-2 max-h-[580px] xl:max-h-none pr-1">
                  
                  {/* INGESTION VERBS */}
                  <div>
                    <div className="flex items-center justify-between px-2 py-1 text-holo-cyan font-telemetry text-[9px] font-bold">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">sensors</span> INGESTION VERBS
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-[#0e141c] text-sky-200 text-[8px]">4</span>
                    </div>
                    <div className="space-y-1 mt-1">
                      <div className="p-2 rounded bg-[#171c25] hover:bg-[#1b2029] cursor-grab active:cursor-grabbing transition-all flex flex-col gap-0.5 border border-slate-800">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[9px] text-sky-200 font-bold">read_inbox_stream</span>
                          <span className="font-telemetry text-[8px] text-holo-cyan uppercase">POLL</span>
                        </div>
                        <p className="font-sans text-[11px] text-slate-400 leading-tight">Continuous zero-day mail telemetry parser.</p>
                      </div>
                      <div className="p-2 rounded bg-[#171c25] hover:bg-[#1b2029] cursor-grab active:cursor-grabbing transition-all flex flex-col gap-0.5 border border-slate-800">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[9px] text-sky-200 font-bold">scrape_headless_dom</span>
                          <span className="font-telemetry text-[8px] text-holo-cyan uppercase">DOM</span>
                        </div>
                        <p className="font-sans text-[11px] text-slate-400 leading-tight">Chromium DOM selector &amp; patch scraper.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* COGNITIVE VERBS */}
                  <div>
                    <div className="flex items-center justify-between px-2 py-1 text-orange-400 font-telemetry text-[9px] font-bold">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">psychology</span> COGNITIVE &amp; AUDIT
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-[#0e141c] text-orange-400 text-[8px]">4</span>
                    </div>
                    <div className="space-y-1 mt-1">
                      <div className="p-2 rounded bg-[#171c25] hover:bg-[#1b2029] cursor-grab active:cursor-grabbing transition-all flex flex-col gap-0.5 border border-slate-800">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[9px] text-orange-400 font-bold">synthesize_briefing</span>
                          <span className="font-telemetry text-[8px] text-orange-400 uppercase">CORE</span>
                        </div>
                        <p className="font-sans text-[11px] text-slate-400 leading-tight">Synthesize multi-modal research vectors.</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </aside>

              {/* CENTER CANVAS */}
              <div 
                className="relative flex-1 bg-[#090e17] rounded shadow-inner overflow-hidden min-h-[600px] border border-slate-800" 
                style={{ backgroundImage: 'radial-gradient(rgba(0, 240, 255, 0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              >
                <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-2 font-telemetry text-[9px] text-slate-500 bg-[#090e17]/80 px-2 py-1 rounded backdrop-blur-sm">
                  <span className="text-holo-cyan">COORDS:</span>
                  <span>X: +142.08 Y: -89.44</span>
                  <span className="text-slate-600">|</span>
                  <span>GRID: 24px</span>
                  <span className="text-slate-600">|</span>
                  <span className="text-orange-400">FPS: 60</span>
                </div>
                
                {/* Connections SVG */}
                <svg className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-150 ${isSimulating ? 'opacity-100' : 'opacity-80'}`} style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
                  <defs>
                    <linearGradient id="cyan-to-amber" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="#00f0ff"></stop>
                      <stop offset="100%" stopColor="#ffb869"></stop>
                    </linearGradient>
                  </defs>
                  {/* Paths simplified for space, scaled to fit window */}
                  <path d="M 200 120 C 280 120, 280 120, 360 120" fill="none" opacity="0.8" stroke="#00f0ff" strokeWidth="2"></path>
                  <path className="animate-[dash_1s_linear_infinite]" d="M 200 120 C 280 120, 280 120, 360 120" fill="none" stroke="#dbfcff" strokeDasharray="6,8" strokeWidth="2"></path>
                  
                  <path d="M 480 120 C 560 120, 560 220, 640 220" fill="none" opacity="0.8" stroke="url(#cyan-to-amber)" strokeWidth="2.5"></path>
                  
                  <path d="M 200 320 C 380 320, 420 240, 640 240" fill="none" opacity="0.7" stroke="#00f0ff" strokeWidth="2"></path>
                  
                  <path d="M 820 250 C 860 250, 600 420, 640 440" fill="none" opacity="0.75" stroke="#ffb869" strokeWidth="2"></path>
                </svg>

                {/* Nodes Container */}
                <div className="relative w-full h-full z-10" style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
                  
                  {/* Node 1 */}
                  <div 
                    className={`absolute left-8 top-20 w-48 bg-[#171c25] rounded p-2 shadow-md cursor-pointer hover:bg-[#1b2029] transition-all border ${activeNode === 'node-1' ? 'border-holo-cyan' : 'border-slate-800'}`}
                    onClick={() => setActiveNode('node-1')}
                  >
                    <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#30353e]">
                      <div className="flex items-center gap-1 font-telemetry text-[9px] text-holo-cyan font-bold">
                        <span className="material-symbols-outlined text-[14px]">visibility</span> optical_ocr_feed
                      </div>
                      <span className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></span>
                    </div>
                    <div className="font-telemetry text-[9px] text-slate-500 mb-2">TARGET: <span className="text-slate-200">cve_2025_8819.pdf</span></div>
                    <div className="flex items-center justify-between font-telemetry text-[8px] bg-[#090e17] px-1.5 py-0.5 rounded">
                      <span className="text-holo-cyan">60 FPS</span>
                      <span className="text-slate-200">TENSOR OK</span>
                    </div>
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-holo-cyan shadow-[0_0_8px_#00f0ff]"></div>
                  </div>

                  {/* Node 2 */}
                  <div 
                    className={`absolute left-[360px] top-20 w-52 bg-[#171c25] rounded p-2 shadow-md cursor-pointer hover:bg-[#1b2029] transition-all border ${activeNode === 'node-2' ? 'border-orange-400' : 'border-slate-800'}`}
                    onClick={() => setActiveNode('node-2')}
                  >
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-holo-cyan shadow-[0_0_8px_#00f0ff]"></div>
                    <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#30353e]">
                      <div className="flex items-center gap-1 font-telemetry text-[9px] text-orange-400 font-bold">
                        <span className="material-symbols-outlined text-[14px]">security</span> kernel_audit_eval
                      </div>
                      <span className="font-telemetry text-[8px] px-1 rounded bg-[#0e141c] text-orange-400">100%</span>
                    </div>
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1.5">CHECKS: <span className="text-slate-200">eBPF Ring Boundary</span></div>
                    <div className="w-full bg-[#090e17] h-1 rounded overflow-hidden">
                      <div className="bg-orange-400 h-full w-full"></div>
                    </div>
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></div>
                  </div>

                  {/* Node 3 */}
                  <div 
                    className={`absolute left-[640px] top-32 w-64 bg-[#1b2029] rounded p-4 shadow-2xl cursor-pointer hover:bg-[#252a33] transition-all border ${activeNode === 'node-3' ? 'border-orange-400' : 'border-slate-700'}`}
                    onClick={() => setActiveNode('node-3')}
                  >
                    <div className="absolute -left-1.5 top-1/4 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></div>
                    <div className="absolute -left-1.5 top-3/4 -translate-y-1/2 w-3 h-3 rounded-full bg-holo-cyan shadow-[0_0_8px_#00f0ff]"></div>
                    <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#30353e]">
                      <div className="flex items-center gap-1.5 font-telemetry text-[9px] text-orange-400 font-bold">
                        <span className="material-symbols-outlined text-[16px] animate-spin">all_inclusive</span> SARA_SYNAPTIC_CORE
                      </div>
                      <span className="font-telemetry text-[8px] px-1.5 py-0.5 rounded bg-[#090e17] text-holo-cyan font-semibold">ACTIVE HUB</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-800 via-orange-400 to-holo-cyan flex items-center justify-center shadow-lg relative">
                        <span className="material-symbols-outlined text-[20px] text-[#090e17]">hub</span>
                        <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-orange-400"></span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-telemetry text-[9px] text-slate-500">BUFFER: <span className="text-slate-200 font-semibold">412 MB RAM</span></div>
                        <div className="font-telemetry text-[9px] text-slate-500">LATENCY: <span className="text-holo-cyan font-semibold">1.2ms</span></div>
                      </div>
                    </div>
                    <div className="bg-[#090e17] p-1.5 rounded font-telemetry text-[9px] text-slate-400 flex items-center justify-between">
                      <span>ARBITRATION MODE:</span>
                      <span className="text-orange-400 font-bold">PARALLEL</span>
                    </div>
                    <div className="absolute -right-1.5 top-1/3 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></div>
                    <div className="absolute -right-1.5 top-2/3 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_#3e90ff]"></div>
                  </div>
                  
                  {/* Node 6: Dispatch */}
                  <div 
                    className={`absolute left-[920px] top-36 w-60 bg-[#171c25] rounded p-2 shadow-lg cursor-pointer hover:bg-[#1b2029] transition-all border ${activeNode === 'node-6' ? 'border-orange-400' : 'border-slate-800'}`}
                    onClick={() => setActiveNode('node-6')}
                  >
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></div>
                    <div className="flex items-center justify-between pb-1 mb-1.5 border-b border-[#30353e]">
                      <div className="flex items-center gap-1 font-telemetry text-[9px] text-orange-400 font-bold">
                        <span className="material-symbols-outlined text-[14px]">mark_email_read</span> dispatch_envelope
                      </div>
                      <span className="font-telemetry text-[8px] px-1 rounded bg-amber-900 text-amber-200 font-semibold animate-pulse">GATE ARMED</span>
                    </div>
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1">RECIPIENT: <span className="text-slate-200 truncate">vance.j@command.mil</span></div>
                    <div className="font-telemetry text-[8px] text-slate-400 mb-2">Subject: CVE-2025-8819 Remediation</div>
                    <button className="w-full py-1 rounded bg-orange-500/80 text-[#090e17] hover:bg-orange-400 font-telemetry text-[9px] font-bold flex items-center justify-center gap-1 transition-colors" onClick={handleAuthorize}>
                      <span className="material-symbols-outlined text-[12px]">key</span>
                      <span>AUTHORIZE DISPATCH</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* RIGHT INSPECTOR */}
              <aside className="w-full xl:w-80 bg-[#090e17]/80 backdrop-blur-md p-3 rounded shadow-lg flex flex-col gap-3 shrink-0 border border-slate-800">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#252a33]">
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px] text-slate-200 font-bold">
                    <span className="material-symbols-outlined text-[16px] text-holo-cyan">troubleshoot</span>
                    <span>NODE INSPECTOR</span>
                  </div>
                  <span className="font-telemetry text-[8px] px-1.5 py-0.5 rounded bg-[#171c25] text-holo-cyan">
                    {activeNodeInfo ? activeNodeInfo.type : 'NO SELECTION'}
                  </span>
                </div>
                
                {activeNode ? (
                  <>
                    <div className="bg-[#171c25] p-2 rounded flex flex-col gap-1 border border-slate-800">
                      <div className="font-telemetry text-[9px] text-slate-500">IDENTIFIER</div>
                      <div className="font-telemetry text-[12px] text-sky-200 font-bold break-all">{activeNodeInfo?.id}</div>
                      <div className="flex items-center justify-between mt-1 text-[10px] font-telemetry">
                        <span className="text-slate-500">EXEC STATUS:</span>
                        <span className="text-holo-cyan font-semibold">{activeNodeInfo?.status}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="font-telemetry text-[9px] text-slate-500 font-semibold">RUNTIME PARAMETERS</div>
                      <div className="bg-[#171c25] p-2 rounded flex flex-col gap-1 border border-slate-800">
                        <div className="flex items-center justify-between font-telemetry text-[10px]">
                          <span className="text-slate-200">Temperature / Strictness</span>
                          <span className="text-holo-cyan font-bold">0.15</span>
                        </div>
                        <input className="w-full h-1 bg-[#30353e] rounded appearance-none cursor-pointer accent-holo-cyan" max="1" min="0" step="0.05" type="range" defaultValue="0.15" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-slate-500 font-telemetry text-[9px]">
                    Select a node to inspect
                  </div>
                )}
                
                <div className="flex flex-col gap-1 flex-1 mt-auto">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-500 font-semibold">
                    <span>SOCKET IO MONITOR</span>
                    <span className="text-holo-cyan">LIVE STREAM</span>
                  </div>
                  <div className="w-full bg-[#171c25] p-2 rounded font-telemetry text-[9px] space-y-1 overflow-y-auto h-[160px] border border-slate-800">
                    {logs.map((log, i) => (
                      <div key={i} className={`
                        ${log.type === 'info' ? 'text-slate-500' : ''}
                        ${log.type === 'success' ? 'text-holo-cyan' : ''}
                        ${log.type === 'warning' ? 'text-orange-400' : ''}
                        ${log.type === 'neutral' ? 'text-slate-200' : ''}
                      `}>
                        [{log.time}] {log.text}
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </main>

        
        {/* BOTTOM DOCK (Static position for page layout) */}
        <div className="fixed bottom-4 inset-x-0 z-50 flex items-center justify-center pointer-events-none px-4">
          <div className="pointer-events-auto w-full max-w-[760px] rounded-full bg-[#0a121c]/92 backdrop-blur-2xl border border-orange-500/30 p-2 sm:p-2.5 flex items-center justify-between gap-2 shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_28px_rgba(255,154,0,0.22)]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button 
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isMicActive ? 'bg-[#14202d] border-orange-500/40 text-orange-400 shadow-[0_0_10px_rgba(255,154,0,0.2)]' : 'bg-[#2a1416] border-rose-500/40 text-rose-400 hover:bg-rose-500/25'}`}
                onClick={() => setIsMicActive(!isMicActive)}
              >
                <span className="material-symbols-outlined text-[18px]">{isMicActive ? 'mic' : 'mic_off'}</span>
              </button>
              <button 
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isCamActive ? 'bg-[#14202d] border-white/10 text-slate-300 hover:text-white' : 'bg-[#2a1416] border-rose-500/40 text-rose-400 hover:bg-rose-500/25'}`}
                onClick={() => setIsCamActive(!isCamActive)}
              >
                <span className="material-symbols-outlined text-[18px]">{isCamActive ? 'videocam' : 'videocam_off'}</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white hover:bg-[#1d2d3e] flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">screen_share</span>
              </button>
            </div>
            
            <div className="flex flex-col items-center">
              <button className="w-12 h-12 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-[#090e17] flex items-center justify-center shadow-[0_0_24px_rgba(255,154,0,0.6)] hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-[24px] font-bold">mic</span>
              </button>
              <span className="font-telemetry text-[8px] text-amber-200 font-semibold tracking-wider mt-0.5">Tap to talk</span>
            </div>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button className="w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white hover:bg-[#1d2d3e] flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
              </button>
              <button className="hidden sm:flex w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white hover:bg-[#1d2d3e] items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">settings</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2a1215] border border-rose-500/40 text-rose-400 hover:bg-rose-500/25 transition-all text-[11px] font-sans font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(244,63,94,0.25)]">
                <span className="material-symbols-outlined text-[16px]">call_end</span>
                <span className="hidden sm:inline">END SESSION</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </ConsoleLayout>
  );
}
