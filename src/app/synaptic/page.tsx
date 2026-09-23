"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type MemNode = {
  id: string;
  label: string;
  category: string;
  strength: number;
  x: number;
  y: number;
  color: string;
};

const MEM_NODES: MemNode[] = [
  { id: "n1", label: "CVE-2025-8819", category: "Security", strength: 98, x: 50, y: 40, color: "#ff4d4d" },
  { id: "n2", label: "Vance Kane", category: "Identity", strength: 100, x: 72, y: 65, color: "#00f0ff" },
  { id: "n3", label: "eBPF Kernel Patch", category: "Technical", strength: 85, x: 25, y: 65, color: "#ffb869" },
  { id: "n4", label: "SAT-BURST-9", category: "Comms", strength: 90, x: 80, y: 30, color: "#a855f7" },
  { id: "n5", label: "Design Team Email", category: "Task", strength: 72, x: 15, y: 30, color: "#38bdf8" },
  { id: "n6", label: "Neural Inference", category: "System", strength: 88, x: 50, y: 80, color: "#00f0ff" },
  { id: "n7", label: "Supply Chain Intel", category: "Intel", strength: 76, x: 35, y: 50, color: "#f97316" },
  { id: "n8", label: "Travel Itinerary", category: "Logistics", strength: 65, x: 65, y: 50, color: "#64748b" },
];

const CONNECTIONS = [
  ["n1", "n3"], ["n1", "n7"], ["n2", "n4"], ["n2", "n6"], ["n3", "n7"],
  ["n4", "n6"], ["n5", "n2"], ["n6", "n1"], ["n8", "n2"],
];

export default function SynapticPage() {
  const [selectedNode, setSelectedNode] = useState<MemNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const isConnected = (nodeId: string) => {
    if (!hoveredNode) return false;
    return CONNECTIONS.some(c => (c[0] === hoveredNode && c[1] === nodeId) || (c[1] === hoveredNode && c[0] === nodeId));
  };

  const getNodeById = (id: string) => MEM_NODES.find(n => n.id === id);

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></div>
              <span className="font-telemetry text-[9px] text-purple-400 uppercase tracking-widest">SARA // SYNAPTIC ENGINE</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Memory <span className="text-purple-400">&amp;</span> Synaptic Graph
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-telemetry text-[9px] text-slate-500">{MEM_NODES.length} nodes • {CONNECTIONS.length} synaptic edges</span>
            <button className="px-4 py-1.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 font-telemetry text-[10px] text-purple-300 uppercase transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[14px]">hub</span>
              Rebuild Graph
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Graph Viewport */}
          <div className="xl:col-span-2">
            <div 
              className="relative bg-[#050810] rounded-xl border border-slate-800 overflow-hidden"
              style={{ 
                height: "520px",
                backgroundImage: "radial-gradient(rgba(168,85,247,0.05) 1px, transparent 1px)",
                backgroundSize: "28px 28px"
              }}
            >
              {/* Telemetry overlay */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 font-telemetry text-[9px] text-slate-500 bg-[#050810]/80 px-2 py-1 rounded">
                <span className="text-purple-400">NODES:</span><span>{MEM_NODES.length}</span>
                <span className="text-slate-700">|</span>
                <span className="text-purple-400">EDGES:</span><span>{CONNECTIONS.length}</span>
                <span className="text-slate-700">|</span>
                <span className="text-purple-400">PARITY:</span><span className="text-holo-cyan">99.8%</span>
              </div>

              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="synaptic-edge" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                {CONNECTIONS.map((c, i) => {
                  const from = getNodeById(c[0]);
                  const to = getNodeById(c[1]);
                  if (!from || !to) return null;
                  const isHighlighted = hoveredNode === c[0] || hoveredNode === c[1];
                  return (
                    <line
                      key={i}
                      x1={`${from.x}%`} y1={`${from.y}%`}
                      x2={`${to.x}%`} y2={`${to.y}%`}
                      stroke={isHighlighted ? "#a855f7" : "url(#synaptic-edge)"}
                      strokeWidth={isHighlighted ? 2 : 1}
                      opacity={isHighlighted ? 0.9 : 0.4}
                      strokeDasharray={isHighlighted ? "none" : "4,6"}
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {MEM_NODES.map(node => {
                const highlighted = hoveredNode === node.id || isConnected(node.id);
                const dimmed = hoveredNode && !highlighted;
                return (
                  <button
                    key={node.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-200 ${dimmed ? "opacity-30" : "opacity-100"}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div
                      className={`rounded-full border-2 flex items-center justify-center transition-all duration-200 ${hoveredNode === node.id || selectedNode?.id === node.id ? "scale-125" : ""}`}
                      style={{
                        width: `${Math.max(36, node.strength * 0.44)}px`,
                        height: `${Math.max(36, node.strength * 0.44)}px`,
                        borderColor: node.color,
                        backgroundColor: `${node.color}22`,
                        boxShadow: (hoveredNode === node.id || selectedNode?.id === node.id) ? `0 0 20px ${node.color}60` : "none",
                      }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }}></div>
                    </div>
                    <div className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap font-telemetry text-[8px] font-bold uppercase pointer-events-none transition-all ${hoveredNode === node.id || selectedNode?.id === node.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} style={{ color: node.color }}>
                      {node.label}
                    </div>
                  </button>
                );
              })}

              {/* Legend */}
              <div className="absolute bottom-3 right-3 flex flex-col gap-1">
                {["Security","Identity","Technical","Comms","Intel"].map((cat, i) => {
                  const colors = ["#ff4d4d","#00f0ff","#ffb869","#a855f7","#f97316"];
                  return (
                    <div key={cat} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors[i] }}></div>
                      <span className="font-telemetry text-[8px] text-slate-400">{cat}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-4">
            
            {/* Node Inspector */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-purple-400">hub</span>
                <span className="font-telemetry text-[10px] text-slate-200 font-bold uppercase">Synaptic Inspector</span>
              </div>
              {selectedNode ? (
                <>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1">Node Label</div>
                    <div className="font-sans text-[14px] font-semibold" style={{ color: selectedNode.color }}>{selectedNode.label}</div>
                  </div>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1">Category</div>
                    <span className="font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded border" style={{ color: selectedNode.color, borderColor: `${selectedNode.color}50`, background: `${selectedNode.color}15` }}>{selectedNode.category}</span>
                  </div>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1">Synaptic Strength</div>
                    <div className="font-telemetry text-[24px] font-bold" style={{ color: selectedNode.color }}>{selectedNode.strength}%</div>
                    <div className="w-full bg-[#252a33] h-1.5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${selectedNode.strength}%`, backgroundColor: selectedNode.color }}></div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 mb-1">Connected Nodes</div>
                    <div className="space-y-1">
                      {CONNECTIONS.filter(c => c[0] === selectedNode.id || c[1] === selectedNode.id).map(c => {
                        const otherId = c[0] === selectedNode.id ? c[1] : c[0];
                        const other = getNodeById(otherId);
                        return other ? (
                          <button key={otherId} className="flex items-center gap-2 text-left w-full hover:opacity-80 transition-opacity" onClick={() => setSelectedNode(other)}>
                            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: other.color }}></div>
                            <span className="font-sans text-[11px] text-slate-300">{other.label}</span>
                          </button>
                        ) : null;
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 text-slate-500 font-telemetry text-[10px]">
                  Click a node to inspect
                </div>
              )}
            </div>

            {/* Graph Stats */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Graph Analytics</div>
              <div className="space-y-2">
                {[
                  { label: "Total Nodes", value: MEM_NODES.length.toString() },
                  { label: "Synaptic Edges", value: CONNECTIONS.length.toString() },
                  { label: "Avg Strength", value: `${Math.round(MEM_NODES.reduce((a, n) => a + n.strength, 0) / MEM_NODES.length)}%` },
                  { label: "Max Degree", value: "4" },
                  { label: "Graph Density", value: "0.32" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">{item.label}</span>
                    <span className="font-telemetry text-[12px] font-bold text-purple-300">{item.value}</span>
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
