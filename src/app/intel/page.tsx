"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type ResearchNode = {
  id: string;
  title: string;
  type: "source" | "finding" | "entity" | "threat" | "action";
  summary: string;
  confidence: number;
  tags: string[];
  x: number;
  y: number;
};

const NODES: ResearchNode[] = [
  { id: "n1", title: "CVE-2025-8819", type: "threat", summary: "Critical heap overflow in Linux kernel 6.2.x eBPF subsystem. CVSS: 9.8", confidence: 98, tags: ["CVE", "CRITICAL", "eBPF"], x: 50, y: 30 },
  { id: "n2", title: "NIST NVD Entry", type: "source", summary: "Official NIST vulnerability database entry with patch vectors and affected versions.", confidence: 100, tags: ["NIST", "DATABASE"], x: 25, y: 55 },
  { id: "n3", title: "arXiv: 2502.0411", type: "source", summary: "Academic paper: 'Boundary Escape in eBPF Ring Buffers'. 14 citations.", confidence: 87, tags: ["ACADEMIC", "arXiv"], x: 75, y: 55 },
  { id: "n4", title: "GitHub PR #402", type: "action", summary: "eBPF Socket Ring Boundary Filter v4.2 — patch verified, ready to merge.", confidence: 95, tags: ["PATCH", "VERIFIED"], x: 35, y: 75 },
  { id: "n5", title: "SecOps Inbox", type: "source", summary: "3 internal email threads discussing Q3 pen-test findings related to CVE.", confidence: 72, tags: ["EMAIL", "INTERNAL"], x: 65, y: 75 },
  { id: "n6", title: "Kernel Maintainer", type: "entity", summary: "Linus Torvalds acknowledged the issue. Patch under review.", confidence: 90, tags: ["ENTITY", "LINUX"], x: 50, y: 58 },
];

const EDGES = [
  ["n1", "n2"], ["n1", "n3"], ["n1", "n6"], ["n2", "n4"], ["n3", "n4"], ["n5", "n1"], ["n6", "n4"]
];

const TYPE_COLORS: Record<string, string> = {
  threat: "#ff4d4d",
  source: "#00f0ff",
  entity: "#a855f7",
  finding: "#ffb869",
  action: "#22c55e",
};

const TYPE_ICONS: Record<string, string> = {
  threat: "warning",
  source: "article",
  entity: "person",
  finding: "lightbulb",
  action: "bolt",
};

export default function IntelPage() {
  const [selected, setSelected] = useState<ResearchNode>(NODES[0]);
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState<string>("all");

  const filtered = NODES.filter(n => {
    const matchType = activeType === "all" || n.type === activeType;
    const matchQuery = n.title.toLowerCase().includes(query.toLowerCase()) || n.summary.toLowerCase().includes(query.toLowerCase());
    return matchType && matchQuery;
  });

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></div>
              <span className="font-telemetry text-[9px] text-sky-400 uppercase tracking-widest">SARA // INTEL ENGINE</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Intelligence Map <span className="text-sky-400">&amp;</span> Research
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
              <input
                className="w-52 bg-[#090e17] rounded-lg border border-slate-800 pl-8 pr-3 py-1.5 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/50"
                placeholder="Search intel..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
            <button className="px-4 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 font-telemetry text-[10px] text-sky-300 uppercase transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">add</span>
              New Research
            </button>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {["all", "threat", "source", "entity", "action"].map(t => (
            <button
              key={t}
              className={`px-3 py-1 rounded-full font-telemetry text-[9px] uppercase tracking-wider transition-all border ${activeType === t ? "border-sky-400/50 text-sky-300 bg-sky-500/20" : "border-slate-800 text-slate-500 bg-[#171c25] hover:text-slate-300"}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
          <span className="font-telemetry text-[9px] text-slate-500 ml-auto">{NODES.length} nodes · {EDGES.length} connections</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Graph */}
          <div className="xl:col-span-2">
            <div
              className="relative bg-[#050810] rounded-xl border border-slate-800 overflow-hidden"
              style={{ height: "500px", backgroundImage: "radial-gradient(rgba(0,240,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            >
              <div className="absolute top-3 left-3 z-10 font-telemetry text-[9px] text-slate-500">
                INTEL GRAPH — CVE-2025-8819 RESEARCH TOPOLOGY
              </div>

              {/* SVG edges */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {EDGES.map((e, i) => {
                  const from = NODES.find(n => n.id === e[0]);
                  const to = NODES.find(n => n.id === e[1]);
                  if (!from || !to) return null;
                  return (
                    <line key={i}
                      x1={`${from.x}%`} y1={`${from.y}%`}
                      x2={`${to.x}%`} y2={`${to.y}%`}
                      stroke="rgba(0,240,255,0.2)" strokeWidth="1" strokeDasharray="4,8"
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {filtered.map(node => (
                <button
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  onClick={() => setSelected(node)}
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selected.id === node.id ? "scale-125" : "hover:scale-110"}`}
                    style={{
                      borderColor: TYPE_COLORS[node.type],
                      backgroundColor: `${TYPE_COLORS[node.type]}20`,
                      boxShadow: selected.id === node.id ? `0 0 20px ${TYPE_COLORS[node.type]}60` : "none",
                    }}
                  >
                    <span className="material-symbols-outlined text-[18px]" style={{ color: TYPE_COLORS[node.type] }}>{TYPE_ICONS[node.type]}</span>
                  </div>
                  <div className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-telemetry text-[8px] font-bold uppercase transition-all ${selected.id === node.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} style={{ color: TYPE_COLORS[node.type] }}>
                    {node.title}
                  </div>
                </button>
              ))}

              {/* Legend */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                {Object.entries(TYPE_COLORS).map(([type, color]) => (
                  <div key={type} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></div>
                    <span className="font-telemetry text-[8px] text-slate-400 capitalize">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-4">

            {/* Node Inspector */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                <span className="material-symbols-outlined text-[16px]" style={{ color: TYPE_COLORS[selected.type] }}>{TYPE_ICONS[selected.type]}</span>
                <span className="font-telemetry text-[10px] font-bold text-slate-200 uppercase">Intel Inspector</span>
              </div>
              <div className="mb-3">
                <div className="font-telemetry text-[8px] text-slate-500 mb-0.5">Title</div>
                <div className="font-sans text-[14px] font-semibold" style={{ color: TYPE_COLORS[selected.type] }}>{selected.title}</div>
              </div>
              <div className="mb-3">
                <div className="font-telemetry text-[8px] text-slate-500 mb-0.5">Type</div>
                <span className="font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded border capitalize" style={{ color: TYPE_COLORS[selected.type], borderColor: `${TYPE_COLORS[selected.type]}40`, background: `${TYPE_COLORS[selected.type]}15` }}>{selected.type}</span>
              </div>
              <div className="mb-3">
                <div className="font-telemetry text-[8px] text-slate-500 mb-1">Summary</div>
                <p className="font-sans text-[12px] text-slate-300 leading-relaxed">{selected.summary}</p>
              </div>
              <div className="mb-3">
                <div className="font-telemetry text-[8px] text-slate-500 mb-1">Confidence</div>
                <div className="flex items-center gap-2">
                  <div className="font-telemetry text-[18px] font-bold" style={{ color: TYPE_COLORS[selected.type] }}>{selected.confidence}%</div>
                  <div className="flex-1 bg-[#252a33] h-1.5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${selected.confidence}%`, backgroundColor: TYPE_COLORS[selected.type] }}></div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-telemetry text-[8px] text-slate-500 mb-1.5">Tags</div>
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map(tag => (
                    <span key={tag} className="font-telemetry text-[8px] font-bold uppercase px-1.5 py-0.5 rounded bg-[#252a33] border border-slate-700 text-slate-300">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/40 font-telemetry text-[9px] text-sky-300 uppercase flex items-center justify-center gap-1 transition-all hover:bg-sky-500/30">
                  <span className="material-symbols-outlined text-[13px]">share</span> Link
                </button>
                <button className="py-1.5 rounded-lg bg-[#171c25] border border-slate-800 font-telemetry text-[9px] text-slate-400 uppercase flex items-center justify-center gap-1 transition-all hover:text-slate-200">
                  <span className="material-symbols-outlined text-[13px]">download</span> Export
                </button>
              </div>
            </div>

            {/* Research Queue */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Research Queue</div>
              <div className="space-y-2">
                {[
                  { task: "Crawl NIST for related CVEs", status: "DONE", color: "text-emerald-400" },
                  { task: "Parse arXiv PDF 2502.0411", status: "DONE", color: "text-emerald-400" },
                  { task: "Scan GitHub PR #402", status: "ACTIVE", color: "text-sky-400" },
                  { task: "Draft executive briefing", status: "QUEUED", color: "text-slate-400" },
                ].map(item => (
                  <div key={item.task} className="flex items-center justify-between py-1.5 border-b border-slate-800/50 last:border-0">
                    <span className="font-sans text-[11px] text-slate-300">{item.task}</span>
                    <span className={`font-telemetry text-[9px] font-bold ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
