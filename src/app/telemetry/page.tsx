"use client";

import React, { useState, useEffect, useRef } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function TelemetryPage() {
  const [heartRate, setHeartRate] = useState(72);
  const [cpuLoad, setCpuLoad] = useState(67);
  const [memUsage, setMemUsage] = useState(84);
  const [networkLatency, setNetworkLatency] = useState(14);
  const [neuralSync, setNeuralSync] = useState(98.7);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => Math.max(60, Math.min(110, prev + (Math.random() - 0.5) * 6)));
      setCpuLoad(prev => Math.max(20, Math.min(95, prev + (Math.random() - 0.5) * 8)));
      setMemUsage(prev => Math.max(60, Math.min(99, prev + (Math.random() - 0.5) * 4)));
      setNetworkLatency(prev => Math.max(8, Math.min(60, prev + (Math.random() - 0.5) * 10)));
      setNeuralSync(prev => Math.max(90, Math.min(99.9, prev + (Math.random() - 0.5) * 1)));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Animate ECG canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#00f0ff";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#00f0ff";
      ctx.shadowBlur = 8;
      ctx.beginPath();

      for (let x = 0; x < canvas.width; x++) {
        const t = (x + frame) * 0.05;
        const ecg = Math.sin(t) * 0.3 + Math.sin(t * 3) * 0.1;
        const spike = (x % 80 < 8) ? Math.exp(-((x % 80 - 4) ** 2) / 4) * 0.8 : 0;
        const y = canvas.height / 2 - (ecg + spike) * canvas.height * 0.4;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      frame += 1;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  const metrics = [
    { label: "HEART RATE", value: Math.round(heartRate), unit: "BPM", icon: "favorite", color: "text-rose-400", glow: "shadow-[0_0_12px_rgba(244,63,94,0.3)]", bg: "bg-rose-500/10 border-rose-500/30", warn: heartRate > 95 },
    { label: "CPU LOAD", value: Math.round(cpuLoad), unit: "%", icon: "memory", color: "text-orange-400", glow: "", bg: "bg-orange-500/10 border-orange-500/30", warn: cpuLoad > 85 },
    { label: "MEMORY", value: Math.round(memUsage), unit: "%", icon: "storage", color: "text-sky-400", glow: "", bg: "bg-sky-500/10 border-sky-500/30", warn: memUsage > 90 },
    { label: "NETWORK", value: Math.round(networkLatency), unit: "MS", icon: "cell_tower", color: "text-holo-cyan", glow: "shadow-[0_0_12px_rgba(0,240,255,0.2)]", bg: "bg-holo-cyan/10 border-holo-cyan/30", warn: networkLatency > 40 },
    { label: "NEURAL SYNC", value: neuralSync.toFixed(1), unit: "%", icon: "neurology", color: "text-purple-400", glow: "", bg: "bg-purple-500/10 border-purple-500/30", warn: false },
  ];

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></div>
              <span className="font-telemetry text-[9px] text-holo-cyan uppercase tracking-widest">SARA // BIOMETRICS</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Neural Sync <span className="text-holo-cyan">&amp;</span> Biometric Telemetry
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-holo-cyan/10 border border-holo-cyan/30">
              <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
              <span className="font-telemetry text-[10px] text-holo-cyan uppercase font-bold">BIOMETRIC SYNC ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {metrics.map(m => (
            <div key={m.label} className={`relative bg-[#090e17]/80 rounded-xl border p-4 transition-all ${m.bg} ${m.glow}`}>
              {m.warn && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-400 animate-ping"></div>}
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined text-[18px] ${m.color}`}>{m.icon}</span>
                <span className="font-telemetry text-[8px] text-slate-500 uppercase tracking-wider">{m.label}</span>
              </div>
              <div className={`font-telemetry text-[28px] font-bold ${m.color}`}>{m.value}</div>
              <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{m.unit}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* ECG / Waveform Monitor */}
          <div className="xl:col-span-2 space-y-4">
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-holo-cyan">monitor_heart</span>
                  <span className="font-telemetry text-[10px] text-slate-200 uppercase font-bold">Neural ECG — Live Feed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                  <span className="font-telemetry text-[9px] text-holo-cyan">REAL-TIME</span>
                </div>
              </div>
              <canvas ref={canvasRef} className="w-full h-24 rounded-lg bg-[#040810]" width={800} height={96}></canvas>
            </div>
            
            {/* System Vitals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "CPU Core Load", value: Math.round(cpuLoad), color: "#ff9a00", bg: "from-orange-900/20" },
                { title: "Memory Pressure", value: Math.round(memUsage), color: "#38bdf8", bg: "from-sky-900/20" },
              ].map(item => (
                <div key={item.title} className={`bg-[#090e17]/80 rounded-xl border border-slate-800 p-4 bg-gradient-to-br ${item.bg} to-transparent`}>
                  <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-3">{item.title}</div>
                  <div className="flex items-end gap-3">
                    <div className="font-telemetry text-[36px] font-bold" style={{ color: item.color }}>{item.value}<span className="text-[16px] text-slate-500">%</span></div>
                    <div className="flex-1 pb-1">
                      <div className="w-full bg-[#252a33] h-2 rounded-full overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.value}%`, background: item.color }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Table */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-3">Active Processes</div>
              <div className="space-y-2">
                {[
                  { name: "sara-core-agent", cpu: 32, mem: 412, status: "RUNNING" },
                  { name: "neural-inference-v4", cpu: 18, mem: 2048, status: "RUNNING" },
                  { name: "telemetry-daemon", cpu: 4, mem: 64, status: "IDLE" },
                  { name: "vault-indexer", cpu: 9, mem: 156, status: "SCANNING" },
                  { name: "signal-encryptor", cpu: 2, mem: 32, status: "STANDBY" },
                ].map(p => (
                  <div key={p.name} className="flex items-center justify-between py-1.5 border-b border-slate-800/50 last:border-0">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.status === "RUNNING" ? "bg-holo-cyan animate-pulse" : p.status === "SCANNING" ? "bg-orange-400 animate-ping" : "bg-slate-600"}`}></span>
                      <span className="font-telemetry text-[10px] text-slate-300 truncate">{p.name}</span>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-telemetry text-[9px] text-orange-400">{p.cpu}% CPU</span>
                      <span className="font-telemetry text-[9px] text-sky-400">{p.mem}MB</span>
                      <span className={`font-telemetry text-[8px] font-bold ${p.status === "RUNNING" ? "text-holo-cyan" : p.status === "SCANNING" ? "text-orange-400" : "text-slate-500"}`}>{p.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-4">
            
            {/* Neural Sync Gauge */}
            <div className="bg-[#090e17]/80 rounded-xl border border-purple-500/30 p-5 bg-gradient-to-br from-purple-900/10 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[18px] text-purple-400">neurology</span>
                <span className="font-telemetry text-[10px] text-slate-200 uppercase font-bold">Neural Sync Status</span>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#1b2029" strokeWidth="8"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#a855f7" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 50}`} strokeDashoffset={`${2 * Math.PI * 50 * (1 - neuralSync / 100)}`} strokeLinecap="round" className="transition-all duration-700 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"/>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-telemetry text-[20px] text-purple-300 font-bold">{neuralSync.toFixed(1)}</span>
                    <span className="font-telemetry text-[9px] text-slate-500">% SYNCED</span>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <span className="font-telemetry text-[9px] text-purple-400 bg-purple-900/30 px-2 py-0.5 rounded border border-purple-500/30">OPTIMAL RESONANCE</span>
              </div>
            </div>
            
            {/* Operator Vitals */}
            <div className="bg-[#090e17]/80 rounded-xl border border-rose-500/30 p-4 bg-gradient-to-br from-rose-900/10 to-transparent">
              <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-3">Operator Biometrics</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-holo-cyan/20 border border-holo-cyan/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] text-holo-cyan">person</span>
                </div>
                <div>
                  <div className="font-sans text-[13px] text-slate-200">Cmdr. Vance Kane</div>
                  <div className="font-telemetry text-[9px] text-slate-500">CLEARANCE: TITAN-IV</div>
                </div>
              </div>
              {[
                { label: "Heart Rate", value: `${Math.round(heartRate)} BPM`, warn: heartRate > 95 },
                { label: "Stress Level", value: heartRate > 90 ? "ELEVATED" : "NOMINAL", warn: heartRate > 90 },
                { label: "Cognitive Load", value: "MODERATE", warn: false },
                { label: "Fatigue Index", value: "LOW", warn: false },
              ].map(v => (
                <div key={v.label} className="flex items-center justify-between py-1.5 border-b border-slate-800/50 last:border-0">
                  <span className="font-telemetry text-[10px] text-slate-400">{v.label}</span>
                  <span className={`font-telemetry text-[10px] font-bold ${v.warn ? "text-rose-400" : "text-holo-cyan"}`}>{v.value}</span>
                </div>
              ))}
            </div>

            {/* Network Status */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-3">Network Status</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[10px] text-slate-400">Latency</span>
                  <span className={`font-telemetry text-[10px] font-bold ${networkLatency > 40 ? 'text-rose-400' : networkLatency > 25 ? 'text-orange-400' : 'text-holo-cyan'}`}>{Math.round(networkLatency)}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[10px] text-slate-400">Encryption</span>
                  <span className="font-telemetry text-[10px] font-bold text-holo-cyan">AES-256-GCM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[10px] text-slate-400">Channel</span>
                  <span className="font-telemetry text-[10px] font-bold text-orange-400">SAT-BURST-9</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[10px] text-slate-400">Uptime</span>
                  <span className="font-telemetry text-[10px] font-bold text-holo-cyan">99.94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
