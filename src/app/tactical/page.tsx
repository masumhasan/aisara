"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type PathNode = {
  id: string;
  label: string;
  prob: number;
  type: "root" | "branch" | "leaf" | "danger";
  children?: string[];
};

const nodes: Record<string, PathNode> = {
  root: { id: "root", label: "INITIAL THREAT VECTOR", prob: 100, type: "root", children: ["a1", "a2", "a3"] },
  a1: { id: "a1", label: "Network Perimeter Breach", prob: 78, type: "branch", children: ["b1", "b2"] },
  a2: { id: "a2", label: "Social Engineering Attack", prob: 54, type: "branch", children: ["b3", "b4"] },
  a3: { id: "a3", label: "Insider Threat Vector", prob: 31, type: "branch", children: ["b5"] },
  b1: { id: "b1", label: "Lateral Movement Detected", prob: 89, type: "danger", children: ["c1", "c2"] },
  b2: { id: "b2", label: "Firewall Bypass Attempt", prob: 64, type: "branch", children: ["c3"] },
  b3: { id: "b3", label: "Phishing Payload Dropped", prob: 71, type: "danger", children: ["c4"] },
  b4: { id: "b4", label: "Credential Harvesting", prob: 44, type: "branch" },
  b5: { id: "b5", label: "Privilege Escalation", prob: 82, type: "danger", children: ["c5"] },
  c1: { id: "c1", label: "Data Exfil Attempt [HALT]", prob: 95, type: "leaf" },
  c2: { id: "c2", label: "C2 Beacon Established", prob: 73, type: "leaf" },
  c3: { id: "c3", label: "Egress Traffic Anomaly", prob: 58, type: "leaf" },
  c4: { id: "c4", label: "Ransomware Payload Active", prob: 88, type: "leaf" },
  c5: { id: "c5", label: "Root Access Granted [CRITICAL]", prob: 91, type: "danger" },
};

export default function TacticalPage() {
  const [selected, setSelected] = useState<string>("root");
  const [activeScenario, setActiveScenario] = useState("CVE-2025-8819");

  const selectedNode = nodes[selected];

  const probColor = (prob: number) => {
    if (prob >= 80) return "text-rose-400";
    if (prob >= 60) return "text-orange-400";
    return "text-holo-cyan";
  };

  const nodeBg = (type: PathNode["type"], isSelected: boolean) => {
    if (isSelected) return "bg-[#182332] border-holo-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)]";
    if (type === "danger") return "bg-rose-900/30 border-rose-500/40";
    if (type === "leaf") return "bg-[#252a33]/80 border-slate-700/50";
    if (type === "root") return "bg-orange-900/30 border-orange-500/40";
    return "bg-[#171c25] border-slate-800";
  };

  const scenarios = ["CVE-2025-8819", "SUPPLY CHAIN BREACH", "ZERO-DAY KERNEL EXPLOIT", "SOCIAL ENG VECTOR"];

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></div>
              <span className="font-telemetry text-[9px] text-holo-cyan uppercase tracking-widest">SARA // TACTICAL ENGINE</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Decision Tree <span className="text-holo-cyan">&amp;</span> Path Probability Matrix
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-900/30 border border-rose-500/40">
              <span className="material-symbols-outlined text-[16px] text-rose-400 animate-pulse">warning</span>
              <span className="font-telemetry text-[10px] text-rose-400 uppercase font-bold">THREAT ACTIVE</span>
            </div>
            <button className="px-4 py-1.5 rounded-lg bg-holo-cyan/20 hover:bg-holo-cyan/30 border border-holo-cyan/40 font-telemetry text-[10px] text-holo-cyan uppercase transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              Execute Countermeasure
            </button>
          </div>
        </div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {scenarios.map(s => (
            <button 
              key={s}
              className={`px-3 py-1 rounded-full font-telemetry text-[10px] uppercase tracking-wider transition-all border ${activeScenario === s ? 'bg-orange-500/20 border-orange-500/50 text-orange-300' : 'bg-[#171c25] border-slate-800 text-slate-400 hover:text-slate-200'}`}
              onClick={() => setActiveScenario(s)}
            >
              {s}
            </button>
          ))}
          <span className="font-telemetry text-[9px] text-slate-500 ml-2">Monte Carlo N=10,000 runs | Confidence: 94.2%</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Tree Visualization */}
          <div className="xl:col-span-2 bg-[#090e17]/80 rounded-xl border border-slate-800 p-6 overflow-auto" style={{ backgroundImage: 'radial-gradient(rgba(0,240,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider">PROBABILITY DECISION TREE — {activeScenario}</span>
              <span className="font-telemetry text-[9px] text-holo-cyan">REAL-TIME SYNC</span>
            </div>
            
            {/* Tree Level 0: Root */}
            <div className="flex flex-col items-center gap-6">
              <button
                className={`relative w-56 p-3 rounded-lg border cursor-pointer transition-all ${nodeBg("root", selected === "root")}`}
                onClick={() => setSelected("root")}
              >
                <div className="font-telemetry text-[10px] text-orange-400 uppercase font-bold mb-1">ROOT NODE</div>
                <div className="font-sans text-[13px] text-slate-200">{nodes.root.label}</div>
                <div className={`font-telemetry text-[14px] font-bold mt-1 ${probColor(nodes.root.prob)}`}>{nodes.root.prob}%</div>
              </button>
              
              {/* Level 1 */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {(nodes.root.children || []).map(cid => (
                  <div key={cid} className="flex flex-col items-center gap-4">
                    <button
                      className={`relative w-48 p-3 rounded-lg border cursor-pointer transition-all ${nodeBg(nodes[cid].type, selected === cid)}`}
                      onClick={() => setSelected(cid)}
                    >
                      <div className={`font-telemetry text-[8px] uppercase font-bold mb-1 ${nodes[cid].type === "danger" ? "text-rose-400" : "text-holo-cyan"}`}>{nodes[cid].type.toUpperCase()}</div>
                      <div className="font-sans text-[12px] text-slate-200">{nodes[cid].label}</div>
                      <div className={`font-telemetry text-[13px] font-bold mt-1 ${probColor(nodes[cid].prob)}`}>{nodes[cid].prob}%</div>
                    </button>
                    
                    {/* Level 2 */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {(nodes[cid].children || []).map(gid => (
                        <button
                          key={gid}
                          className={`w-40 p-2.5 rounded-lg border cursor-pointer transition-all ${nodeBg(nodes[gid].type, selected === gid)}`}
                          onClick={() => setSelected(gid)}
                        >
                          <div className={`font-telemetry text-[8px] uppercase font-bold mb-0.5 ${nodes[gid].type === "danger" ? "text-rose-400" : "text-slate-500"}`}>{nodes[gid].type.toUpperCase()}</div>
                          <div className="font-sans text-[11px] text-slate-300 leading-tight">{nodes[gid].label}</div>
                          <div className={`font-telemetry text-[12px] font-bold mt-0.5 ${probColor(nodes[gid].prob)}`}>{nodes[gid].prob}%</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Node Inspector + Stats */}
          <div className="flex flex-col gap-4">
            
            {/* Node Inspector */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                <span className="material-symbols-outlined text-[16px] text-holo-cyan">troubleshoot</span>
                <span className="font-telemetry text-[10px] text-slate-200 font-bold uppercase">Node Inspector</span>
              </div>
              {selectedNode && (
                <>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">Identifier</div>
                    <div className="font-telemetry text-[12px] text-holo-cyan font-bold">{selectedNode.id.toUpperCase()}</div>
                  </div>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">Label</div>
                    <div className="font-sans text-[13px] text-slate-200">{selectedNode.label}</div>
                  </div>
                  <div className="mb-3">
                    <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">Path Probability</div>
                    <div className={`font-telemetry text-[24px] font-bold ${probColor(selectedNode.prob)}`}>{selectedNode.prob}%</div>
                    <div className="w-full bg-[#252a33] h-1.5 rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${selectedNode.prob >= 80 ? 'bg-rose-500' : selectedNode.prob >= 60 ? 'bg-orange-400' : 'bg-holo-cyan'}`}
                        style={{ width: `${selectedNode.prob}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">Node Type</div>
                    <div className={`font-telemetry text-[10px] uppercase font-bold px-2 py-1 rounded inline-block ${selectedNode.type === "danger" ? "bg-rose-900/40 text-rose-400 border border-rose-500/30" : "bg-[#1b2029] text-slate-300 border border-slate-700"}`}>
                      {selectedNode.type}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full py-2 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 font-telemetry text-[10px] text-orange-300 uppercase tracking-wider flex items-center justify-center gap-2 transition-all">
                      <span className="material-symbols-outlined text-[14px]">block</span>
                      Deploy Countermeasure
                    </button>
                    <button className="w-full py-2 rounded-lg bg-[#171c25] hover:bg-[#252a33] border border-slate-800 font-telemetry text-[10px] text-slate-400 uppercase tracking-wider flex items-center justify-center gap-2 transition-all">
                      <span className="material-symbols-outlined text-[14px]">share</span>
                      Trace Path
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Risk Summary */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mb-3">Risk Summary</div>
              <div className="space-y-2">
                {[
                  { label: "Critical Paths", value: "3", color: "text-rose-400" },
                  { label: "High Risk Nodes", value: "4", color: "text-orange-400" },
                  { label: "Max Probability", value: "95%", color: "text-rose-400" },
                  { label: "Avg Threat Score", value: "71%", color: "text-orange-400" },
                  { label: "Simulation Runs", value: "10,000", color: "text-holo-cyan" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">{item.label}</span>
                    <span className={`font-telemetry text-[12px] font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry bar */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-telemetry text-[9px] text-slate-500 uppercase">Threat Signal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
              </div>
              <div className="flex items-end justify-between h-8 gap-0.5">
                {[60,80,45,90,70,95,55,80,65,88,72,40,85,60,92].map((h, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-sm ${h > 80 ? 'bg-rose-500' : h > 65 ? 'bg-orange-400' : 'bg-holo-cyan'}`}
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
