"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function HudPage() {
  const [currentTime, setCurrentTime] = useState("");
  const [sessionTime, setSessionTime] = useState(0);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [coreState, setCoreState] = useState("LISTENING");
  const [connPct] = useState(98);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours(), m = now.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      setCurrentTime(`${(h % 12 || 12)}:${String(m).padStart(2, "0")} ${ampm}`);
      setSessionTime(prev => prev + 1);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const formatSession = (s: number) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const navItems = [
    { icon: "home", label: "Home", href: "/" },
    { icon: "forum", label: "Chat", href: "/briefing" },
    { icon: "database", label: "Memory", href: "/memory" },
    { icon: "hub", label: "Neural", href: "/neural" },
    { icon: "folder", label: "Vault", href: "/vault" },
    { icon: "extension", label: "Tools", href: "/tools" },
    { icon: "tune", label: "Settings", href: "/settings" },
  ];

  const recentSessions = [
    { title: "CVE-2025-8819 Research", sub: "Active Audit • Topology Live", active: true, nodes: "4 Nodes" },
    { title: "Design team emails", sub: "Today, 10:12 AM", active: false, time: "12m 34s" },
    { title: "Travel itinerary", sub: "Apr 24, 2025", active: false, time: "16m 08s" },
  ];

  const toolItems = [
    { icon: "travel_explore", name: "NIST CVE Crawler", sub: "CVSS 9.8 Heap Overflow • 1.8s", status: "Completed", statusColor: "text-emerald-400" },
    { icon: "terminal", name: "GitHub Defense Patch", sub: "PR #402 eBPF filter • 2.1s", status: "Ready", statusColor: "text-holo-cyan" },
    { icon: "article", name: "arXiv: 2502.0411", sub: "PDF parsed • 0.9s", status: "Cached", statusColor: "text-emerald-400" },
    { icon: "mail", name: "SecOps Inbox Sweep", sub: "3 threads • 0.6s", status: "Completed", statusColor: "text-emerald-400" },
  ];

  const transcriptMessages = [
    { sender: "YOU", time: "10:41:02", text: "Research zero-day exploit CVE-2025-8819 and agent countermeasures.", isUser: true },
    { sender: "SARA", time: "10:41:05", text: "Auditing CVE-2025-8819. Dispatched web crawlers to NIST, arXiv, and GitHub kernel patch repos.", isUser: false, badge: "Topology Active" },
    { sender: "SARA", time: "10:41:09", text: "eBPF Socket Ring Boundary Filter v4.2 verified against sandbox. Ready to dispatch remediation brief.", isUser: false, isTool: true },
  ];

  return (
    <ConsoleLayout>
      <div className="pt-14 pb-28 min-h-screen flex flex-col lg:flex-row w-full bg-[#05080d] text-slate-200 relative overflow-x-hidden">
        
        {/* Ambient FX */}
        <div className="fixed inset-0 pointer-events-none -z-20 bg-[#05080d]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_45%,rgba(255,110,0,0.13)_0%,rgba(5,8,13,0.98)_74%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,170,34,0.11)_0%,transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,240,255,0.03)_0%,transparent_50%)]"></div>
        </div>
        {/* Scanlines */}
        <div className="fixed inset-0 pointer-events-none -z-10 opacity-40" style={{
          background: "linear-gradient(rgba(18,16,16,0) 50%, rgba(255,154,0,0.02) 50%), linear-gradient(90deg, rgba(255,120,0,0.015), rgba(0,255,255,0.01), rgba(255,150,0,0.015))",
          backgroundSize: "100% 3px, 4px 100%"
        }}></div>
        {/* HUD Corner Ticks */}
        <div className="pointer-events-none fixed inset-0 z-40">
          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-orange-500/60"></div>
          <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t border-r border-orange-500/60"></div>
          <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b border-l border-orange-500/60"></div>
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-orange-500/60"></div>
        </div>

        {/* LEFT NAVIGATION RAIL */}
        <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-[#08111a]/85 backdrop-blur-xl border-r border-orange-500/20 p-3.5 flex flex-col gap-3 z-30">
          {/* New Session */}
          <button className="w-full py-2 px-3.5 rounded-lg border border-orange-500/50 bg-orange-500/15 hover:bg-orange-500/25 text-orange-400 font-sans text-[12px] font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,154,0,0.25)] transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Session
          </button>
          {/* Search */}
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
            <input className="w-full bg-[#0d1622] rounded-md border border-orange-500/20 pl-8 pr-3 py-1.5 font-sans text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50" placeholder="Search..." type="text" />
          </div>
          {/* Nav */}
          <nav className="flex flex-col gap-1 font-sans text-[12px]">
            {navItems.map((item, i) => (
              <Link key={item.label} href={item.href} className={`flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-all ${i === 0 ? "bg-[#182332] text-orange-400 border border-orange-500/35 shadow-[0_0_10px_rgba(255,154,0,0.15)]" : "text-slate-400 hover:text-orange-400 hover:bg-[#121c27]"}`}>
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Recent Sessions */}
          <div className="mt-2 pt-2 border-t border-orange-500/15 flex flex-col flex-1 min-h-0">
            <div className="flex items-center justify-between text-slate-400 px-1 mb-2 cursor-pointer hover:text-orange-400 transition-all">
              <span className="font-telemetry text-[10px] tracking-wider uppercase font-semibold">Recent Sessions</span>
              <span className="material-symbols-outlined text-[16px]">expand_less</span>
            </div>
            <div className="space-y-1.5 overflow-y-auto pr-0.5 flex-1 max-h-[280px]">
              {recentSessions.map(s => (
                <div key={s.title} className={`p-2.5 rounded-lg border transition-all cursor-pointer ${s.active ? "bg-[#141d28] border-orange-500/50 shadow-[0_0_12px_rgba(255,154,0,0.18)]" : "bg-[#0e1722]/80 hover:bg-[#131f2d] border-orange-500/15"}`}>
                  <div className="flex items-start gap-2">
                    <span className={`material-symbols-outlined text-[16px] mt-0.5 ${s.active ? "text-orange-400" : "text-slate-400"}`}>{s.active ? "security" : s.title.includes("email") ? "forum" : "flight_takeoff"}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-semibold text-slate-100 truncate">{s.title}</div>
                      <div className="font-telemetry text-[9px] text-slate-400 mt-0.5">{s.sub}</div>
                      {s.active && s.nodes && (
                        <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5 font-telemetry text-[9px] text-orange-400">
                          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping"></span> Live Sync</span>
                          <span className="text-holo-cyan">{s.nodes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* CENTER MAIN */}
        <main className="flex-1 relative p-3 sm:p-5 flex flex-col gap-4 overflow-y-auto min-w-0 z-10">
          {/* Chat messages */}
          <div className="flex flex-col gap-4 flex-1">
            {transcriptMessages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-2.5 ${msg.isUser ? "flex-row-reverse" : ""}`}>
                <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${msg.isUser ? "bg-sky-900/60 border border-sky-400/40" : "bg-orange-500/20 border border-orange-500/60"}`}>
                  <span className="material-symbols-outlined text-[15px]">{msg.isUser ? "person" : msg.isTool ? "extension" : "all_inclusive"}</span>
                </div>
                <div className="flex-1 max-w-[75%]">
                  <div className="flex items-center gap-1.5 font-telemetry text-[9px] mb-1">
                    <span className="text-slate-500">{msg.time}</span>
                    <span className={msg.isUser ? "text-sky-400 font-bold" : "text-orange-400 font-bold"}>{msg.sender}</span>
                    {msg.badge && (
                      <span className="px-1.5 py-0.5 rounded bg-orange-500/20 border border-orange-500/40 text-[8px] font-telemetry text-amber-300 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[10px] animate-spin">rotate_right</span> {msg.badge}
                      </span>
                    )}
                  </div>
                  {msg.isTool ? (
                    <div className="p-3 rounded-lg bg-[#140e06]/95 border border-orange-500/45 shadow-[0_0_12px_rgba(255,154,0,0.15)]">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="material-symbols-outlined text-[15px] text-orange-400">shield</span>
                        <span className="font-sans text-[12px] text-amber-200 font-bold">Patch Ingested</span>
                      </div>
                      <p className="font-sans text-[11px] text-slate-300 mb-2">eBPF Socket Ring Boundary Filter v4.2 verified against sandbox.</p>
                      <div className="w-full bg-[#0a0602] h-1.5 rounded-full overflow-hidden border border-orange-500/30 p-px">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-full rounded-full w-full"></div>
                      </div>
                      <div className="text-right font-telemetry text-[8px] text-holo-cyan mt-1">100% Verified</div>
                    </div>
                  ) : (
                    <p className={`font-sans text-[13px] p-3 rounded-lg border leading-relaxed ${msg.isUser ? "bg-[#0e1925]/90 border-sky-400/20 text-slate-200" : "bg-[#161208]/90 border-orange-500/30 text-amber-100"}`}>{msg.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <div className="sticky bottom-0 mt-4">
            <div className="bg-[#08111a]/90 backdrop-blur-xl rounded-2xl border border-orange-500/25 p-3 shadow-[0_0_24px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 bg-[#101a28] rounded-xl border border-orange-500/20 px-3 py-2.5">
                  <span className="font-telemetry text-[12px] text-orange-400">❯_</span>
                  <input className="flex-1 bg-transparent font-sans text-[13px] text-slate-200 placeholder:text-slate-500 focus:outline-none" placeholder="Dispatch command to SARA..." type="text" />
                  <span className="w-0.5 h-4 bg-orange-400 animate-pulse"></span>
                </div>
                <button className="w-10 h-10 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_16px_rgba(255,154,0,0.5)] hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-[18px] text-[#05080d] font-bold">send</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* RIGHT PANEL */}
        <aside className="w-full lg:w-80 xl:w-96 shrink-0 bg-[#08111a]/85 backdrop-blur-xl border-l border-orange-500/20 p-3.5 flex flex-col gap-3.5 z-30">
          
          {/* Live Transcript Card */}
          <div className="bg-[#08111a]/85 rounded-lg p-3 flex flex-col flex-1 min-h-[280px] border border-orange-500/22 shadow-[0_10px_32px_rgba(0,0,0,0.85),inset_0_0_16px_rgba(255,154,0,0.04)] relative">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-orange-400 rounded-none"></div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-orange-400"></div>
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-orange-400"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-orange-400"></div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-orange-500/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-orange-400">forum</span>
                <span className="font-sans font-bold text-[12px] text-slate-100">Live Transcript</span>
              </div>
              <span className={`font-telemetry text-[9px] font-bold px-2 py-0.5 rounded ${coreState === "LISTENING" ? "bg-holo-cyan/20 text-holo-cyan border border-holo-cyan/40" : "bg-orange-500/20 text-orange-300 border border-orange-500/40"}`}>{coreState}</span>
            </div>
            <div className="space-y-2 overflow-y-auto flex-1 pr-1">
              {[
                { from: "You", text: "Research zero-day CVE-2025-8819", time: "10:41:02", user: true },
                { from: "SARA", text: "Auditing CVE-2025-8819. Web crawlers dispatched.", time: "10:41:05", user: false },
                { from: "SARA", text: "Patch verified. Ready to brief.", time: "10:41:09", user: false },
              ].map((m, i) => (
                <div key={i} className={`flex items-start gap-2 ${m.user ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full shrink-0 overflow-hidden ring-1 mt-0.5 ${m.user ? "ring-sky-400/30" : "ring-orange-500/60"} flex items-center justify-center ${m.user ? "bg-sky-900/50" : "bg-orange-500/20"}`}>
                    <span className="material-symbols-outlined text-[13px]">{m.user ? "person" : "all_inclusive"}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 font-telemetry text-[9px] mb-0.5">
                      <span className="text-slate-500">{m.time}</span>
                      <span className={m.user ? "text-sky-400 font-bold" : "text-orange-400 font-bold"}>{m.from}</span>
                    </div>
                    <p className={`font-sans text-[11px] p-2 rounded-lg border leading-relaxed ${m.user ? "bg-[#0e1925]/90 border-sky-400/20 text-slate-200" : "bg-[#161208]/90 border-orange-500/30 text-amber-100"}`}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool Activity Card */}
          <div className="bg-[#08111a]/85 rounded-lg p-3 border border-orange-500/22 relative shadow-[0_10px_32px_rgba(0,0,0,0.85)]">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-orange-400"></div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-orange-400"></div>
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-orange-400"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-orange-400"></div>
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-orange-500/20">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[17px] text-orange-400">tune</span>
                <span className="font-sans font-bold text-[12px] text-slate-100">Tool Activity</span>
              </div>
              <button className="font-telemetry text-[10px] text-orange-400 hover:underline">View All</button>
            </div>
            <div className="space-y-2">
              {toolItems.map(t => (
                <div key={t.name} className="p-2 rounded-md bg-[#101925]/80 border border-orange-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-[#182637] text-orange-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">{t.icon}</span>
                    </div>
                    <div>
                      <div className="font-sans text-[11px] font-semibold text-slate-200">{t.name}</div>
                      <div className="font-telemetry text-[9px] text-slate-500">{t.sub}</div>
                    </div>
                  </div>
                  <span className={`font-telemetry text-[9px] font-medium ${t.statusColor}`}>{t.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* HUD Status footer */}
          <div className="bg-[#08111a]/85 rounded-lg p-3 border border-orange-500/22">
            <div className="grid grid-cols-2 gap-2 font-telemetry text-[9px]">
              <div>
                <div className="text-slate-500 uppercase">Session</div>
                <div className="text-orange-300 font-bold mt-0.5">{formatSession(sessionTime)}</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase">Local Time</div>
                <div className="text-slate-200 font-bold mt-0.5">{currentTime}</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase">Connection</div>
                <div className="text-orange-400 font-bold mt-0.5">{connPct}% SAT-BURST</div>
              </div>
              <div>
                <div className="text-slate-500 uppercase">Encryption</div>
                <div className="text-holo-cyan font-bold mt-0.5">E2EE-256 ✓</div>
              </div>
            </div>
          </div>

        </aside>

        {/* FLOATING BOTTOM DOCK */}
        <div className="fixed bottom-4 inset-x-0 z-50 flex items-center justify-center pointer-events-none px-4">
          <div className="pointer-events-auto w-full max-w-[760px] rounded-full bg-[#0a121c]/92 backdrop-blur-2xl border border-orange-500/30 p-2 sm:p-2.5 flex items-center justify-between gap-2 shadow-[0_12px_45px_rgba(0,0,0,0.85),0_0_28px_rgba(255,154,0,0.22)]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isMicOn ? "bg-[#14202d] border-orange-500/40 text-orange-400 shadow-[0_0_10px_rgba(255,154,0,0.2)]" : "bg-[#2a1416] border-rose-500/40 text-rose-400"}`}
                onClick={() => setIsMicOn(!isMicOn)}
              >
                <span className="material-symbols-outlined text-[18px]">{isMicOn ? "mic" : "mic_off"}</span>
              </button>
              <button
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${isCamOn ? "bg-[#14202d] border-white/10 text-slate-300 hover:text-white" : "bg-[#2a1416] border-rose-500/40 text-rose-400"}`}
                onClick={() => setIsCamOn(!isCamOn)}
              >
                <span className="material-symbols-outlined text-[18px]">{isCamOn ? "videocam" : "videocam_off"}</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">screen_share</span>
              </button>
              <button className="w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </button>
            </div>

            {/* Center Orb */}
            <div className="flex flex-col items-center">
              <button
                className="w-12 h-12 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 text-[#05080d] flex items-center justify-center shadow-[0_0_24px_rgba(255,154,0,0.6)] hover:scale-105 active:scale-95 transition-all"
                onClick={() => setCoreState(s => s === "LISTENING" ? "SPEAKING" : "LISTENING")}
                style={{ animation: "pulseGlow 2.5s ease-in-out infinite" }}
              >
                <span className="material-symbols-outlined text-[24px] font-bold">mic</span>
              </button>
              <span className="font-telemetry text-[8px] text-amber-200 font-semibold tracking-wider mt-0.5">Tap to talk</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <button className="w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">volume_up</span>
              </button>
              <button className="hidden sm:flex w-9 h-9 rounded-full bg-[#14202d] border border-white/10 text-slate-300 hover:text-white items-center justify-center transition-all">
                <span className="material-symbols-outlined text-[18px]">settings</span>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2a1215] border border-rose-500/40 text-rose-400 hover:bg-rose-500/25 transition-all text-[11px] font-sans font-bold tracking-wider uppercase">
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
