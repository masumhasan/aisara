"use client";

import React, { useEffect } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function SignalPage() {
  
  useEffect(() => {
    let t = 0;
    let animationFrameId: number;

    const animateWaves = () => {
      t += 0.03;
      const waveCyan = document.getElementById('stream-cyan-path');
      const waveAmber = document.getElementById('stream-amber-path');

      if (waveCyan) {
        const y1 = Math.sin(t) * 35 + 60;
        const y2 = Math.cos(t * 1.2) * 35 + 60;
        const y3 = Math.sin(t * 0.8) * 35 + 60;
        waveCyan.setAttribute('d', `M 0 60 Q 125 ${y1}, 250 60 T 500 ${y2} T 750 ${y3} T 1000 60`);
      }

      if (waveAmber) {
        const y4 = Math.cos(t * 1.4) * 28 + 60;
        const y5 = Math.sin(t * 1.1) * 28 + 60;
        waveAmber.setAttribute('d', `M 0 60 Q 125 ${y4}, 250 60 T 500 ${y5} T 750 ${y4} T 1000 60`);
      }

      animationFrameId = requestAnimationFrame(animateWaves);
    };

    animateWaves();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <ConsoleLayout>
      <div className="pt-16 min-h-[calc(100vh)] pb-28 px-4 lg:px-6 w-full max-w-[1920px] mx-auto text-slate-200">
        
        {/* Top Command Matrix Sub-Bar & Breadcrumbs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-telemetry text-[9px] text-slate-400 tracking-widest uppercase">
              <span className="text-holo-cyan">SYS_CORE // 01</span>
              <span>/</span>
              <span className="text-holo-amber">COMMUNICATION MATRIX</span>
              <span>/</span>
              <span className="text-sky-300">SIGNAL_DISPATCH_v5.2</span>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="font-sans text-[24px] text-sky-200 font-bold tracking-wide uppercase">
                SARA // Encrypted Signal Hub
              </h1>
              <div className="px-2 py-1 rounded-lg bg-[#1b2029] text-holo-cyan font-telemetry text-[10px] flex items-center gap-1.5 shadow-sm border border-slate-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
                <span>MESH CARRIER LOCK</span>
              </div>
            </div>
          </div>
          
          {/* Telemetry Badges Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="px-3 py-1 rounded bg-[#090e17] text-slate-200 font-telemetry text-[9px] flex items-center gap-2 shadow-sm border border-slate-800">
              <span className="text-slate-400">CIPHER</span>
              <span className="text-orange-200 font-telemetry text-[11px]">SHA3-512 / X25519</span>
            </div>
            <div className="px-3 py-1 rounded bg-[#090e17] text-slate-200 font-telemetry text-[9px] flex items-center gap-2 shadow-sm border border-slate-800">
              <span className="text-slate-400">SNR</span>
              <span className="text-holo-cyan font-telemetry text-[11px]">46.2 dB</span>
            </div>
            <div className="px-3 py-1 rounded bg-[#090e17] text-slate-200 font-telemetry text-[9px] flex items-center gap-2 shadow-sm border border-slate-800">
              <span className="text-slate-400">CARRIER</span>
              <span className="text-amber-100 font-telemetry text-[11px]">842.10 MHz</span>
            </div>
            <div className="px-3 py-1 rounded bg-[#090e17] text-slate-200 font-telemetry text-[9px] flex items-center gap-2 shadow-sm border border-slate-800">
              <span className="text-slate-400">MESH LATENCY</span>
              <span className="text-sky-300 font-telemetry text-[11px]">12 ms</span>
            </div>
          </div>
        </div>

        {/* SECTION 1: Panoramic Realtime Signal Wave Visualizer & Spectrum Deck */}
        <div className="w-full bg-[#1b2029]/40 backdrop-blur rounded-xl p-4 relative overflow-hidden mb-6 shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 mb-2 border-b border-slate-800/50">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-holo-amber text-[18px]">graphic_eq</span>
              <span className="font-telemetry text-[12px] text-sky-200 tracking-widest uppercase font-semibold">
                PANORAMIC RF // QUANTUM-MESH SPECTRUM HARMONICS
              </span>
              <span className="text-slate-400 font-telemetry text-[10px] hidden md:inline">
                [48.0 kHz ULTRA-WIDE]
              </span>
            </div>
            {/* Channel Filters */}
            <div className="flex items-center gap-2 flex-wrap font-telemetry text-[10px]">
              <button className="px-2 py-1 rounded bg-holo-cyan text-[#00363a] font-semibold transition-all">
                CH-01 VOICE
              </button>
              <button className="px-2 py-1 rounded bg-[#252a33] text-slate-400 hover:text-sky-300 transition-colors">
                CH-02 TELEMETRY
              </button>
              <button className="px-2 py-1 rounded bg-[#252a33] text-slate-400 hover:text-sky-300 transition-colors">
                CH-03 Q-KEY
              </button>
              <button className="px-2 py-1 rounded bg-[#252a33] text-slate-400 hover:text-sky-300 transition-colors">
                CH-04 SUBNET
              </button>
            </div>
          </div>
          
          {/* Interactive SVG Harmonic Visualizer Deck */}
          <div className="relative w-full h-32 bg-[#090e17] rounded-lg overflow-hidden flex items-center justify-center p-2 shadow-inner border border-slate-800">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-40 pointer-events-none font-telemetry text-[9px] text-holo-cyan">
              <span>-96 dB</span>
              <span>-64 dB</span>
              <span>-32 dB</span>
              <span>0 dB (PEAK)</span>
              <span>+12 dB</span>
            </div>
            
            {/* Realtime Multi-Wave Harmonic SVG */}
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 120">
              <defs>
                <linearGradient id="cyanWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1"></stop>
                  <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.95"></stop>
                  <stop offset="100%" stopColor="#3e90ff" stopOpacity="0.2"></stop>
                </linearGradient>
                <linearGradient id="amberWaveGrad" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stopColor="#ffb869" stopOpacity="0.15"></stop>
                  <stop offset="50%" stopColor="#ff9a00" stopOpacity="0.85"></stop>
                  <stop offset="100%" stopColor="#ff5500" stopOpacity="0.2"></stop>
                </linearGradient>
              </defs>
              {/* Dynamic Spectrum Baseline Bars */}
              <g className="opacity-25" fill="#00dbe9">
                <rect height="40" rx="1" width="3" x="50" y="70"></rect>
                <rect height="55" rx="1" width="3" x="90" y="55"></rect>
                <rect height="70" rx="1" width="3" x="130" y="40"></rect>
                <rect height="80" rx="1" width="3" x="170" y="30"></rect>
                <rect height="65" rx="1" width="3" x="210" y="45"></rect>
                <rect height="50" rx="1" width="3" x="250" y="60"></rect>
                <rect height="75" rx="1" width="3" x="290" y="35"></rect>
                <rect height="85" rx="1" width="3" x="330" y="25"></rect>
                <rect height="95" rx="1" width="3" x="370" y="15"></rect>
                <rect height="90" rx="1" width="3" x="410" y="20"></rect>
                <rect height="72" rx="1" width="3" x="450" y="38"></rect>
                <rect height="62" rx="1" width="3" x="490" y="48"></rect>
                <rect height="88" rx="1" width="3" x="530" y="22"></rect>
                <rect height="78" rx="1" width="3" x="570" y="32"></rect>
                <rect height="92" rx="1" width="3" x="610" y="18"></rect>
                <rect height="70" rx="1" width="3" x="650" y="40"></rect>
                <rect height="60" rx="1" width="3" x="690" y="50"></rect>
                <rect height="82" rx="1" width="3" x="730" y="28"></rect>
                <rect height="72" rx="1" width="3" x="770" y="38"></rect>
                <rect height="58" rx="1" width="3" x="810" y="52"></rect>
                <rect height="48" rx="1" width="3" x="850" y="62"></rect>
                <rect height="68" rx="1" width="3" x="890" y="42"></rect>
                <rect height="52" rx="1" width="3" x="930" y="58"></rect>
              </g>
              {/* Sine Harmonics Oscillators */}
              <path d="M 0 60 Q 125 15, 250 60 T 500 60 T 750 60 T 1000 60" fill="none" id="stream-cyan-path" stroke="url(#cyanWaveGrad)" strokeWidth="2.5"></path>
              <path d="M 0 60 Q 125 105, 250 60 T 500 60 T 750 60 T 1000 60" fill="none" id="stream-amber-path" stroke="url(#amberWaveGrad)" strokeWidth="1.8"></path>
            </svg>
          </div>
          
          {/* Visualizer Bottom Sub-Bar */}
          <div className="flex items-center justify-between pt-2 font-telemetry text-[9px] text-slate-400">
            <div className="flex items-center gap-4">
              <span>SAMPLING: 192k SPS</span>
              <span>MODULATION: QAM-256</span>
              <span>BITSTREAM: SYNCHRONOUS</span>
            </div>
            <div className="flex items-center gap-1.5 text-holo-amber">
              <span className="w-1.5 h-1.5 rounded-full bg-holo-amber"></span>
              <span>CARRIER ENCRYPTED VIA SARA NEURAL COPROCESSOR</span>
            </div>
          </div>
        </div>

        {/* SECTION 2 & 3: Dual Column Tactical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT MAIN COLUMN: Filter Deck & Translucent Signal Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            {/* Filter Chips Bar */}
            <div className="flex items-center justify-between flex-wrap gap-2 bg-[#171c25]/80 p-2 rounded-xl shadow-md border border-slate-800">
              <div className="flex items-center gap-2 flex-wrap font-telemetry text-[10px]">
                <button className="px-3 py-1.5 rounded-lg bg-orange-400/20 text-orange-300 font-semibold shadow-sm flex items-center gap-1.5 border border-orange-400/30">
                  <span>ALL SIGNALS</span>
                  <span className="px-1 rounded bg-orange-950/50">24</span>
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#090e17] text-slate-300 hover:text-holo-cyan transition-colors flex items-center gap-1.5 border border-slate-800">
                  <span>DECRYPTED</span>
                  <span className="px-1 rounded bg-[#252a33] text-holo-cyan">18</span>
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#090e17] text-slate-300 hover:text-holo-amber transition-colors flex items-center gap-1.5 border border-slate-800">
                  <span>AWAITING</span>
                  <span className="px-1 rounded bg-[#252a33] text-holo-amber">4</span>
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#090e17] text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 border border-slate-800">
                  <span>CORRUPTED</span>
                  <span className="px-1 rounded bg-[#252a33] text-red-400">2</span>
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-[#090e17] text-slate-300 hover:text-sky-300 transition-colors flex items-center gap-1.5 border border-slate-800">
                  <span>SENTINEL [VIP]</span>
                </button>
              </div>
              <button className="p-1.5 rounded-lg bg-[#090e17] text-slate-400 hover:text-sky-300 transition-colors border border-slate-800" title="Filter Settings">
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
            </div>

            {/* Signal Card 1: ACTIVE / HIGHLIGHTED CARD (Admiral Vance) */}
            <div className="bg-[#090e17]/90 backdrop-blur rounded-xl p-4 relative overflow-hidden shadow-2xl transition-all duration-300 transform border border-orange-500/30">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-holo-amber/10 blur-2xl pointer-events-none"></div>
              
              {/* Corner Marks */}
              <div className="absolute top-2 left-2 font-telemetry text-[10px] text-holo-amber select-none opacity-60">⌐</div>
              <div className="absolute top-2 right-2 font-telemetry text-[10px] text-holo-amber select-none opacity-60">¬</div>
              <div className="absolute bottom-2 left-2 font-telemetry text-[10px] text-holo-amber select-none opacity-60">⌙</div>
              <div className="absolute bottom-2 right-2 font-telemetry text-[10px] text-holo-amber select-none opacity-60">⌟</div>
              
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-400/20 text-orange-400 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">shield_person</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 font-telemetry text-[11px] font-semibold text-orange-300">
                      <span>ADMIRAL_VANCE</span>
                      <span className="text-slate-500 font-telemetry text-[10px]">[0x8F94AC]</span>
                    </div>
                    <span className="font-telemetry text-[9px] text-slate-400">ORBITAL DEFENSE SECTOR 07</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[9px] text-slate-400">10:41:02 UTC</span>
                  <div className="px-2 py-0.5 rounded bg-holo-cyan/20 text-holo-cyan font-telemetry text-[9px] uppercase font-semibold">
                    KEY TRUSTED [ED25519]
                  </div>
                </div>
              </div>
              
              <div className="bg-[#05080d]/80 rounded-lg p-3 mb-3 flex flex-col gap-2 border border-slate-800">
                <div className="font-telemetry text-[9px] text-slate-500 select-all opacity-70">
                  [CIPHER_RAW]: 4b 65 72 6e 65 6c 20 72 69 6e 67 20 7a 65 72 6f 20 76 61 6c 69 64 61 74 65 64
                </div>
                <p className="font-sans text-[13px] text-sky-200 leading-relaxed font-medium">
                  "Inbound automated reconnaissance payload validated against kernel ring 0. Zero leaks detected across boundary. Requesting synchronization of autonomous tactical defense vectors prior to sub-orbital descent."
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-slate-400 font-telemetry text-[10px]">
                <div className="flex items-center gap-4 flex-wrap">
                  <span>BAND: UHF 433.92 MHz</span>
                  <span>PKT: 1,428 B</span>
                  <span>HASH: 8f2b..09a1</span>
                  <span className="text-holo-cyan font-semibold">LAT: 8 ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded bg-[#252a33] text-sky-300 hover:bg-holo-cyan/20 hover:text-holo-cyan font-telemetry text-[10px] transition-colors border border-slate-700">
                    BUFFER LOG
                  </button>
                  <button className="px-3 py-1 rounded bg-orange-500/20 text-orange-300 font-semibold font-telemetry text-[10px] hover:bg-orange-500/30 transition-colors shadow-sm border border-orange-500/30">
                    DISPATCH VERB
                  </button>
                </div>
              </div>
              
              <div className="mt-3 pt-3 bg-[#171c25]/60 rounded-lg p-2 flex flex-col gap-2 border border-slate-800/50">
                <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-500">
                  <span className="text-holo-amber uppercase">ROUTING HOP TRACE // 4 NODES VERIFIED</span>
                  <span>SIG STATUS: PARITY 100%</span>
                </div>
                <div className="flex items-center gap-2 font-telemetry text-[9px] text-slate-300 overflow-x-auto py-1">
                  <span className="px-2 py-0.5 rounded bg-[#30353e] text-sky-300">SENDER [0x8F94AC]</span>
                  <span className="text-slate-600">→</span>
                  <span className="px-2 py-0.5 rounded bg-[#1b2029]">RELAY-GAMMA</span>
                  <span className="text-slate-600">→</span>
                  <span className="px-2 py-0.5 rounded bg-[#1b2029]">TOKYO_HYPERGRID</span>
                  <span className="text-slate-600">→</span>
                  <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold border border-orange-500/20">LOCAL NODE [SARA]</span>
                </div>
              </div>
            </div>
            
            {/* Signal Card 2 */}
            <div className="bg-[#171c25]/60 hover:bg-[#1b2029]/80 rounded-xl p-4 relative overflow-hidden shadow-md transition-all border border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#252a33] text-holo-cyan flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">hub</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 font-telemetry text-[11px] font-semibold text-sky-300">
                      <span>STATION // TOKYO_HYPERGRID_09</span>
                    </div>
                    <span className="font-telemetry text-[9px] text-slate-500">HIGH DENSITY OPTICAL LINK</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[9px] text-slate-500">10:39:18 UTC</span>
                  <div className="px-2 py-0.5 rounded bg-[#30353e] text-holo-cyan font-telemetry text-[9px] uppercase font-semibold">
                    CIPHER DECRYPTED
                  </div>
                </div>
              </div>
              
              <div className="bg-[#05080d]/50 rounded-lg p-3 mb-3 flex flex-col gap-2 border border-slate-800/50">
                <p className="font-sans text-[13px] text-slate-300 leading-relaxed">
                  "Optical repeater cluster reports 0.002% photon attenuation. All sub-carrier frequencies nominal. High-throughput quantum key renewal sequence executed without retransmission."
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-slate-500 font-telemetry text-[10px]">
                <div className="flex items-center gap-4">
                  <span>BAND: QKD OPTICAL</span>
                  <span>PKT: 8,920 B</span>
                  <span className="text-holo-cyan">LAT: 3 ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded bg-[#090e17] text-slate-300 hover:text-sky-300 font-telemetry text-[10px] transition-colors border border-slate-700">
                    ACKNOWLEDGE
                  </button>
                </div>
              </div>
            </div>
            
            {/* Signal Card 3 */}
            <div className="bg-[#171c25]/60 hover:bg-[#1b2029]/80 rounded-xl p-4 relative overflow-hidden shadow-md transition-all border border-slate-800">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#252a33] text-orange-300 flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 font-telemetry text-[11px] font-semibold text-orange-300">
                      <span>SENTINEL // CVE-BOT-V4</span>
                    </div>
                    <span className="font-telemetry text-[9px] text-slate-500">AUTONOMOUS AUDIT DAEMON</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[9px] text-slate-500">10:35:45 UTC</span>
                  <div className="px-2 py-0.5 rounded bg-orange-400/10 text-orange-300 font-telemetry text-[9px] uppercase font-semibold border border-orange-500/20">
                    GATE HELD
                  </div>
                </div>
              </div>
              
              <div className="bg-[#05080d]/50 rounded-lg p-3 mb-3 flex flex-col gap-2 border border-slate-800/50">
                <p className="font-sans text-[13px] text-slate-400 leading-relaxed">
                  "Automated vulnerability probe detected anomalous handshake signature at peripheral gateway 0x14. Session held in isolated sandbox awaiting operator decryption override."
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-slate-500 font-telemetry text-[10px]">
                <div className="flex items-center gap-4">
                  <span>BAND: LOCAL BUS</span>
                  <span>PKT: 512 B</span>
                  <span className="text-holo-amber font-semibold">STATUS: ISOLATED</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 rounded bg-[#090e17] text-orange-300 hover:bg-orange-500/20 font-telemetry text-[10px] transition-colors border border-orange-500/20">
                    RELEASE GATE
                  </button>
                  <button className="px-3 py-1 rounded bg-[#090e17] text-red-400 hover:bg-red-500/20 font-telemetry text-[10px] transition-colors border border-red-500/20">
                    PURGE BUFFER
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT INSPECTOR COLUMN (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Sender Dossier */}
            <div className="bg-[#090e17]/80 rounded-xl p-4 relative overflow-hidden shadow-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/50">
                <div className="flex items-center gap-2 font-telemetry text-[11px] text-sky-300 tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[16px] text-holo-amber">fingerprint</span>
                  <span>CRYPTOGRAPHIC DOSSIER</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-orange-400/20 text-orange-200 font-telemetry text-[9px] font-bold border border-orange-500/20">
                  LEVEL-5 CLEARANCE
                </span>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#252a33] shrink-0 shadow-inner border border-slate-700">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcUQAwUM6Svi-fihnNBGMQgorRT0MkLoIBB5zWMgU7epsc9UfZ6jmGICPxaQoIamijZkW8Km4DU0v3SVKRqYDa32jjzjw3wwXsLvZS1NPWsnuyEg7MKWuuMFvGg5UJje1DvlzXVcmdnScq18A3zx7OQqA3YffgT3iaqkYvHauhEgMxadzs8PlJZcBG7VPOCiJ-HzH6Y6DJHiuSbnUQW4xThQbwClhjgOa-Ps20UoZQPycrisNrQFn" alt="User" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[16px] text-orange-200 font-semibold uppercase">ADMIRAL T. VANCE</span>
                  <span className="font-telemetry text-[9px] text-slate-500">PRIMARY ARCHITECT // FLEET DEFENSE</span>
                  <div className="flex items-center gap-1 mt-1 font-telemetry text-[9px] text-holo-cyan">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    <span>NEURAL WEIGHT: 0.942 [AUTHENTICATED]</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 font-telemetry text-[9px]">
                <div className="bg-[#171c25]/80 p-2 rounded flex flex-col border border-slate-800">
                  <span className="text-slate-500">PUBLIC KEY HASH</span>
                  <span className="text-slate-300 truncate">ed25519:9f8a...c32d</span>
                </div>
                <div className="bg-[#171c25]/80 p-2 rounded flex flex-col border border-slate-800">
                  <span className="text-slate-500">ENCLAVE ATTEST</span>
                  <span className="text-holo-cyan">VALID (SGX-V3)</span>
                </div>
                <div className="bg-[#171c25]/80 p-2 rounded flex flex-col border border-slate-800">
                  <span className="text-slate-500">SESSION NONCE</span>
                  <span className="text-slate-300 truncate">0x994821FF90B</span>
                </div>
                <div className="bg-[#171c25]/80 p-2 rounded flex flex-col border border-slate-800">
                  <span className="text-slate-500">REPUTATION SCORE</span>
                  <span className="text-orange-300">99.8% TRUSTED</span>
                </div>
              </div>
            </div>
            
            {/* Realtime Decryption Buffer */}
            <div className="bg-[#090e17]/80 rounded-xl p-4 relative overflow-hidden shadow-xl border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800/50">
                <div className="flex items-center gap-2 font-telemetry text-[11px] text-sky-300 tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[16px] text-holo-cyan">terminal</span>
                  <span>REALTIME DECRYPTION BUFFER</span>
                </div>
                <div className="flex items-center gap-1 text-holo-cyan font-telemetry text-[9px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                  <span>STREAM DECODING</span>
                </div>
              </div>
              
              <div className="bg-[#05080d]/80 rounded-lg p-3 font-telemetry text-[10px] text-slate-500 flex flex-col gap-1 overflow-hidden shadow-inner border border-slate-800/50">
                <div className="flex justify-between text-holo-cyan">
                  <span>[0x0000]</span>
                  <span className="text-sky-300">48 65 78 20 44 65 63 6f 64 65 72 20 4f 4e</span>
                  <span className="text-orange-300">[MATCH]</span>
                </div>
                <div className="flex justify-between">
                  <span>[0x0010]</span>
                  <span>73 79 6e 63 68 72 6f 6e 69 7a 65 5f 76 65</span>
                  <span className="text-slate-300">SYNCH_VE</span>
                </div>
                <div className="flex justify-between">
                  <span>[0x0020]</span>
                  <span>63 74 6f 72 73 5f 70 72 69 6f 72 5f 74 6f</span>
                  <span className="text-slate-300">CTORS_PRI</span>
                </div>
                <div className="flex justify-between">
                  <span>[0x0030]</span>
                  <span>73 75 62 2d 6f 72 62 69 74 61 6c 20 64 65</span>
                  <span className="text-slate-300">SUB-ORBIT</span>
                </div>
                <div className="flex justify-between text-holo-amber">
                  <span>[0x0040]</span>
                  <span>73 63 65 6e 74 2e 00 00 ff fe ee 12 ab cd</span>
                  <span>SCENT...</span>
                </div>
              </div>
              
              <div className="mt-3 flex flex-col gap-1">
                <div className="flex items-center justify-between font-telemetry text-[9px]">
                  <span className="text-slate-500 uppercase">SHANNON ENTROPY COEFFICIENT</span>
                  <span className="text-sky-300 font-bold">7.994 / 8.000 [MAX SECURE]</span>
                </div>
                <div className="w-full h-1.5 bg-[#05080d] rounded-full overflow-hidden flex border border-slate-800/50">
                  <div className="h-full bg-gradient-to-r from-holo-cyan via-orange-300 to-holo-amber w-[98%]"></div>
                </div>
              </div>
            </div>
            
            {/* Quick Dispatch */}
            <div className="bg-[#090e17]/80 rounded-xl p-4 relative overflow-hidden shadow-xl flex flex-col gap-3 border border-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/50">
                <div className="flex items-center gap-2 font-telemetry text-[11px] text-sky-300 tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[16px] text-orange-300">send_time_extension</span>
                  <span>QUICK DISPATCH TERMINAL</span>
                </div>
                <span className="text-slate-500 font-telemetry text-[9px]">VERB EXEC</span>
              </div>
              
              <div className="relative w-full flex items-center bg-[#05080d]/80 rounded-lg px-3 py-2 shadow-inner border border-slate-800/50">
                <span className="text-orange-300 font-telemetry text-[11px] mr-2 font-bold select-none">&gt;</span>
                <input 
                  className="w-full bg-transparent border-0 p-0 text-slate-300 font-telemetry text-[11px] focus:ring-0 focus:outline-none placeholder:text-slate-600" 
                  type="text" 
                  defaultValue="/reply --target admiral.vance --encrypt gcm --payload confirm_sync"
                />
                <button className="px-3 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 font-telemetry text-[10px] font-bold uppercase transition-transform hover:scale-105 ml-2">
                  EXEC
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-2 font-telemetry text-[9px]">
                <button className="py-2 px-2 rounded bg-[#171c25]/80 hover:bg-[#252a33] text-sky-300 border border-slate-800 flex flex-col items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">done_all</span>
                  <span>/ACKNOWLEDGE</span>
                </button>
                <button className="py-2 px-2 rounded bg-[#171c25]/80 hover:bg-[#252a33] text-orange-300 border border-slate-800 flex flex-col items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">alt_route</span>
                  <span>/REROUTE</span>
                </button>
                <button className="py-2 px-2 rounded bg-[#171c25]/80 hover:bg-[#252a33] text-red-400 border border-slate-800 flex flex-col items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                  <span>/PURGE</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
