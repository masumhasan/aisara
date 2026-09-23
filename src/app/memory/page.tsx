"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type MemoryEntry = {
  id: string;
  title: string;
  timestamp: string;
  type: "audit" | "mission" | "intel" | "comm";
  summary: string;
  tags: string[];
  confidence: number;
  status: "active" | "archived" | "sealed";
};

const MEMORIES: MemoryEntry[] = [
  { id: "mem-001", title: "CVE-2025-8819 Kernel Audit", timestamp: "2026-09-23 10:41:05", type: "audit", summary: "Full eBPF boundary analysis of heap overflow vector in kernel 6.2.x. Patch PR #402 verified and sealed in vault.", tags: ["CVE", "eBPF", "CRITICAL"], confidence: 98, status: "active" },
  { id: "mem-002", title: "Vance Kane Operator Auth", timestamp: "2026-09-23 09:12:33", type: "comm", summary: "Biometric session established for Cmdr. Vance Kane. TITAN-IV clearance confirmed. Session duration: 3h 22m.", tags: ["AUTH", "BIOMETRIC"], confidence: 100, status: "active" },
  { id: "mem-003", title: "Design Team Email Thread", timestamp: "2026-09-22 14:30:00", type: "mission", summary: "Processed 14 emails. 3 action items extracted: UI review by EOD, asset delivery by Friday, sprint planning Mon 9AM.", tags: ["EMAIL", "ACTION-ITEMS"], confidence: 92, status: "archived" },
  { id: "mem-004", title: "Travel Itinerary — April 24", timestamp: "2026-04-20 08:00:00", type: "mission", summary: "Flight UA2412 SFO→DCA. Car arranged. Hotel: Marriott Pentagon. Check-in 3PM. Full schedule archived.", tags: ["TRAVEL", "LOGISTICS"], confidence: 95, status: "archived" },
  { id: "mem-005", title: "Neural Inference Calibration", timestamp: "2026-09-21 22:10:44", type: "intel", summary: "Model temperature set to 0.15 for security analysis. Context window: 128k tokens. Latency delta: 1.2ms avg.", tags: ["CALIBRATION", "MODEL"], confidence: 87, status: "active" },
  { id: "mem-006", title: "Supply Chain Threat Report", timestamp: "2026-09-20 16:05:12", type: "intel", summary: "OSINT sweep: 3 compromised npm packages flagged. SHA256 hashes sealed. Maintainer alerted via encrypted channel.", tags: ["SUPPLY-CHAIN", "OSINT"], confidence: 76, status: "sealed" },
  { id: "mem-007", title: "Satellite Uplink Configuration", timestamp: "2026-09-18 07:44:00", type: "comm", summary: "SAT-BURST-9 channel configured. AES-256-GCM encryption. Failover to SATCOM-BRAVO on degradation threshold >80ms.", tags: ["SATCOM", "ENCRYPTION"], confidence: 100, status: "sealed" },
];

const typeColors: Record<string, string> = {
  audit: "text-rose-400 bg-rose-900/30 border-rose-500/30",
  mission: "text-orange-400 bg-orange-900/30 border-orange-500/30",
  intel: "text-purple-400 bg-purple-900/30 border-purple-500/30",
  comm: "text-holo-cyan bg-holo-cyan/10 border-holo-cyan/30",
};

const statusColors: Record<string, string> = {
  active: "text-holo-cyan",
  archived: "text-slate-400",
  sealed: "text-orange-400",
};

export default function MemoryPage() {
  const [selected, setSelected] = useState<MemoryEntry | null>(MEMORIES[0]);
  const [filter, setFilter] = useState<"all" | "active" | "archived" | "sealed">("all");
  const [search, setSearch] = useState("");

  const filtered = MEMORIES.filter(m => {
    const matchFilter = filter === "all" || m.status === filter;
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase()) || 
                        m.summary.toLowerCase().includes(search.toLowerCase()) ||
                        m.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchFilter && matchSearch;
  });

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
              <span className="font-telemetry text-[9px] text-orange-400 uppercase tracking-widest">SARA // MEMORY ARCHIVE</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Mission Log <span className="text-orange-400">&amp;</span> Neural Memory Archive
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-telemetry text-[9px] text-slate-500">{MEMORIES.length} memories indexed</span>
            <button className="px-4 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 font-telemetry text-[10px] text-orange-300 uppercase transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">add</span>
              Log Entry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Memory List */}
          <div className="xl:col-span-1 flex flex-col gap-3">
            
            {/* Search + Filter */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
              <input 
                className="w-full bg-[#090e17] rounded-lg border border-slate-800 pl-8 pr-3 py-2 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-holo-cyan/50"
                placeholder="Search memories..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-1.5">
              {(["all", "active", "archived", "sealed"] as const).map(f => (
                <button 
                  key={f}
                  className={`px-2.5 py-1 rounded-full font-telemetry text-[9px] uppercase tracking-wider transition-all border ${filter === f ? 'bg-orange-500/20 border-orange-500/40 text-orange-300' : 'bg-[#171c25] border-slate-800 text-slate-500 hover:text-slate-300'}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[600px] pr-1">
              {filtered.map(mem => (
                <button
                  key={mem.id}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${selected?.id === mem.id ? 'bg-[#182332] border-holo-cyan/50 shadow-[0_0_12px_rgba(0,240,255,0.12)]' : 'bg-[#090e17]/80 border-slate-800 hover:border-slate-700'}`}
                  onClick={() => setSelected(mem)}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-sans text-[12px] text-slate-200 font-medium leading-tight">{mem.title}</span>
                    <span className={`font-telemetry text-[8px] font-bold uppercase shrink-0 ${statusColors[mem.status]}`}>{mem.status}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`font-telemetry text-[8px] font-bold uppercase px-1.5 py-0.5 rounded border ${typeColors[mem.type]}`}>{mem.type}</span>
                    <span className="font-telemetry text-[8px] text-slate-500">{mem.timestamp.split(' ')[0]}</span>
                  </div>
                  <p className="font-sans text-[11px] text-slate-400 leading-tight line-clamp-2">{mem.summary}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Memory Detail */}
          <div className="xl:col-span-2">
            {selected ? (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6 h-full">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${typeColors[selected.type]}`}>{selected.type}</span>
                      <span className={`font-telemetry text-[9px] font-bold uppercase ${statusColors[selected.status]}`}>{selected.status}</span>
                    </div>
                    <h2 className="font-sans text-xl text-slate-100 font-medium">{selected.title}</h2>
                    <p className="font-telemetry text-[10px] text-slate-500 mt-1">{selected.timestamp}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-[#171c25] border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                    <button className="p-2 rounded-lg bg-[#171c25] border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">share</span>
                    </button>
                    <button className="p-2 rounded-lg bg-rose-900/30 border border-rose-500/30 text-rose-400 hover:bg-rose-900/50 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                </div>
                
                <div className="mb-5">
                  <div className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mb-2">Summary</div>
                  <p className="font-sans text-[14px] text-slate-200 leading-relaxed">{selected.summary}</p>
                </div>

                <div className="mb-5">
                  <div className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mb-2">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map(tag => (
                      <span key={tag} className="font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-[#252a33] border border-slate-700 text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mb-2">Confidence Score</div>
                  <div className="flex items-center gap-3">
                    <div className="font-telemetry text-[24px] font-bold text-holo-cyan">{selected.confidence}%</div>
                    <div className="flex-1">
                      <div className="w-full bg-[#252a33] h-2 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-holo-cyan transition-all duration-500" style={{ width: `${selected.confidence}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
                  {[
                    { label: "Memory ID", value: selected.id.toUpperCase() },
                    { label: "Vector Index", value: "0x" + selected.id.replace("mem-", "").padStart(8, "0") },
                    { label: "Checksum", value: "SHA256:8f4b" },
                    { label: "Compression", value: "LZ4:68%" },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="font-telemetry text-[9px] text-slate-500 mb-0.5">{item.label}</div>
                      <div className="font-telemetry text-[10px] text-slate-300 font-bold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6 flex items-center justify-center h-64">
                <span className="font-telemetry text-[10px] text-slate-500 uppercase">Select a memory to view details</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
