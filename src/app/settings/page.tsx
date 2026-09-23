"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function SettingsPage() {
  const [neuralTemp, setNeuralTemp] = useState(0.15);
  const [contextWindow, setContextWindow] = useState(128);
  const [autonomyLevel, setAutonomyLevel] = useState(4);
  const [encryptionEnabled, setEncryptionEnabled] = useState(true);
  const [biometricAuth, setBiometricAuth] = useState(true);
  const [satBurstEnabled, setSatBurstEnabled] = useState(true);
  const [telemetryVerbose, setTelemetryVerbose] = useState(false);
  const [activeTab, setActiveTab] = useState<"neural" | "security" | "network" | "interface">("neural");

  const tabs = [
    { id: "neural", label: "Neural Config", icon: "neurology" },
    { id: "security", label: "Security", icon: "shield_lock" },
    { id: "network", label: "Network", icon: "cell_tower" },
    { id: "interface", label: "Interface", icon: "tune" },
  ] as const;

  const Toggle = ({ value, onChange, label }: { value: boolean; onChange: () => void; label: string }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-800/50 last:border-0">
      <span className="font-sans text-[13px] text-slate-300">{label}</span>
      <button 
        className={`relative w-10 h-5 rounded-full transition-all duration-300 ${value ? "bg-holo-cyan/80" : "bg-[#252a33]"} border ${value ? "border-holo-cyan/60" : "border-slate-700"}`}
        onClick={onChange}
      >
        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${value ? "translate-x-5" : "translate-x-0.5"}`}></div>
      </button>
    </div>
  );

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></span>
              <span className="font-telemetry text-[9px] text-holo-cyan uppercase tracking-widest">SARA // CONFIGURATION</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              System Settings <span className="text-holo-cyan">&amp;</span> Neural Configuration
            </h1>
          </div>
          <button className="px-5 py-2 rounded-lg bg-holo-cyan/20 hover:bg-holo-cyan/30 border border-holo-cyan/40 font-telemetry text-[10px] text-holo-cyan uppercase tracking-wider transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">save</span>
            Save Configuration
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          
          {/* Sidebar Tabs */}
          <div className="xl:col-span-1">
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-2 space-y-1 sticky top-20">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-sans text-[13px] transition-all ${activeTab === tab.id ? "bg-[#182332] text-holo-cyan border border-holo-cyan/30 shadow-[0_0_10px_rgba(0,240,255,0.1)]" : "text-slate-400 hover:text-slate-200 hover:bg-[#171c25]"}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className={`material-symbols-outlined text-[18px] ${activeTab === tab.id ? "text-holo-cyan" : ""}`}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
              
              {/* System Status */}
              <div className="pt-4 pb-2 px-3">
                <div className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mb-3">System Status</div>
                {[
                  { label: "Core Engine", status: "ONLINE", ok: true },
                  { label: "Encryption Layer", status: "ACTIVE", ok: true },
                  { label: "SAT Channel", status: satBurstEnabled ? "ACTIVE" : "OFFLINE", ok: satBurstEnabled },
                  { label: "Biometrics", status: biometricAuth ? "SYNCED" : "DISABLED", ok: biometricAuth },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between mb-1.5">
                    <span className="font-telemetry text-[9px] text-slate-500">{s.label}</span>
                    <span className={`font-telemetry text-[8px] font-bold ${s.ok ? "text-holo-cyan" : "text-rose-400"}`}>{s.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Panel */}
          <div className="xl:col-span-3 space-y-4">
            
            {activeTab === "neural" && (
              <>
                <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6">
                  <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-800">
                    <span className="material-symbols-outlined text-[18px] text-holo-cyan">neurology</span>
                    <span className="font-sans text-[15px] text-slate-200 font-semibold">Neural Engine Parameters</span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-sans text-[13px] text-slate-200">Temperature / Inference Strictness</div>
                          <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">Lower = more deterministic. Higher = more creative.</div>
                        </div>
                        <div className="font-telemetry text-[20px] text-holo-cyan font-bold w-12 text-right">{neuralTemp.toFixed(2)}</div>
                      </div>
                      <input 
                        className="w-full h-2 bg-[#252a33] rounded-full appearance-none cursor-pointer accent-holo-cyan"
                        min="0" max="1" step="0.05" type="range" 
                        value={neuralTemp}
                        onChange={e => setNeuralTemp(parseFloat(e.target.value))}
                      />
                      <div className="flex justify-between font-telemetry text-[8px] text-slate-600 mt-1">
                        <span>0.0 — DETERMINISTIC</span><span>1.0 — CREATIVE</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-sans text-[13px] text-slate-200">Context Window Size</div>
                          <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">Maximum token context retained across session.</div>
                        </div>
                        <div className="font-telemetry text-[20px] text-orange-400 font-bold">{contextWindow}k</div>
                      </div>
                      <input 
                        className="w-full h-2 bg-[#252a33] rounded-full appearance-none cursor-pointer accent-orange-400"
                        min="8" max="256" step="8" type="range" 
                        value={contextWindow}
                        onChange={e => setContextWindow(parseInt(e.target.value))}
                      />
                      <div className="flex justify-between font-telemetry text-[8px] text-slate-600 mt-1">
                        <span>8k</span><span>256k TOKENS</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-sans text-[13px] text-slate-200">Autonomy Level</div>
                          <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">Higher levels enable more autonomous actions without human gate.</div>
                        </div>
                        <div className="font-telemetry text-[20px] text-purple-400 font-bold">L{autonomyLevel}</div>
                      </div>
                      <input 
                        className="w-full h-2 bg-[#252a33] rounded-full appearance-none cursor-pointer accent-purple-400"
                        min="1" max="5" step="1" type="range" 
                        value={autonomyLevel}
                        onChange={e => setAutonomyLevel(parseInt(e.target.value))}
                      />
                      <div className="flex justify-between font-telemetry text-[8px] text-slate-600 mt-1">
                        <span>L1 — SUPERVISED</span><span>L5 — FULL AUTONOMY</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6">
                  <div className="font-sans text-[15px] text-slate-200 font-semibold mb-4">Model Identity</div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Base Model", value: "SARA-Core v4.9.1" },
                      { label: "Vision Module", value: "SARA-Vision v2.3" },
                      { label: "Audio Engine", value: "SARA-Audio v1.8" },
                      { label: "Inference Node", value: "NEURAL-VAL-09" },
                    ].map(item => (
                      <div key={item.label} className="bg-[#171c25] rounded-lg p-3 border border-slate-800">
                        <div className="font-telemetry text-[9px] text-slate-500 mb-1">{item.label}</div>
                        <div className="font-telemetry text-[11px] text-holo-cyan font-bold">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "security" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-800">
                  <span className="material-symbols-outlined text-[18px] text-orange-400">shield_lock</span>
                  <span className="font-sans text-[15px] text-slate-200 font-semibold">Security Configuration</span>
                </div>
                <div className="space-y-0">
                  <Toggle value={encryptionEnabled} onChange={() => setEncryptionEnabled(!encryptionEnabled)} label="Zero-Knowledge E2EE Encryption" />
                  <Toggle value={biometricAuth} onChange={() => setBiometricAuth(!biometricAuth)} label="Biometric Authentication (Neural Sync)" />
                  <Toggle value={true} onChange={() => {}} label="Quantum-Resistant Key Exchange" />
                  <Toggle value={true} onChange={() => {}} label="HSM Hardware Token Signing" />
                  <Toggle value={false} onChange={() => {}} label="Emergency Terminal Bypass" />
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-orange-900/20 border border-orange-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[16px] text-orange-400">info</span>
                    <span className="font-telemetry text-[10px] text-orange-400 font-bold uppercase">Clearance Level: TITAN-IV</span>
                  </div>
                  <p className="font-sans text-[12px] text-slate-400">This session is authenticated at maximum clearance level. All actions are logged and auditable.</p>
                </div>

                <div className="mt-4">
                  <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Active Sessions</div>
                  <div className="space-y-2">
                    {[
                      { device: "Desktop — Chrome 124", location: "SFO, CA, US", active: true },
                      { device: "Mobile — iOS Safari", location: "SFO, CA, US", active: false },
                    ].map(s => (
                      <div key={s.device} className="flex items-center justify-between p-3 rounded-lg bg-[#171c25] border border-slate-800">
                        <div>
                          <div className="font-sans text-[12px] text-slate-200">{s.device}</div>
                          <div className="font-telemetry text-[9px] text-slate-500">{s.location}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-telemetry text-[8px] font-bold ${s.active ? "text-holo-cyan" : "text-slate-500"}`}>{s.active ? "CURRENT" : "LAST 2H"}</span>
                          {!s.active && (
                            <button className="font-telemetry text-[9px] text-rose-400 hover:text-rose-300 transition-colors">REVOKE</button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "network" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-800">
                  <span className="material-symbols-outlined text-[18px] text-sky-400">cell_tower</span>
                  <span className="font-sans text-[15px] text-slate-200 font-semibold">Network Configuration</span>
                </div>
                <Toggle value={satBurstEnabled} onChange={() => setSatBurstEnabled(!satBurstEnabled)} label="SAT-BURST-9 Priority Channel" />
                <Toggle value={true} onChange={() => {}} label="Mesh Network Fallback" />
                <Toggle value={false} onChange={() => {}} label="Tor Circuit Routing" />
                
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Primary Endpoint", value: "sara.nexus:443", editable: true },
                    { label: "Failover Endpoint", value: "satcom-bravo.mil:8443", editable: true },
                    { label: "DNS Resolver", value: "1.1.1.1 (Cloudflare)", editable: false },
                    { label: "VPN Gateway", value: "ENCRYPTED", editable: false },
                  ].map(item => (
                    <div key={item.label}>
                      <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">{item.label}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-[#171c25] rounded-lg border border-slate-800 px-3 py-2 font-telemetry text-[11px] text-slate-300">{item.value}</div>
                        {item.editable && (
                          <button className="p-2 rounded-lg bg-[#171c25] border border-slate-800 text-slate-400 hover:text-slate-200">
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "interface" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-800">
                  <span className="material-symbols-outlined text-[18px] text-holo-cyan">tune</span>
                  <span className="font-sans text-[15px] text-slate-200 font-semibold">Interface & Display</span>
                </div>
                <Toggle value={true} onChange={() => {}} label="Holographic Scanline Overlay" />
                <Toggle value={true} onChange={() => {}} label="HUD Corner Reticles" />
                <Toggle value={telemetryVerbose} onChange={() => setTelemetryVerbose(!telemetryVerbose)} label="Verbose Telemetry Mode" />
                <Toggle value={true} onChange={() => {}} label="Ambient Sound Effects" />
                
                <div className="mt-6">
                  <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Accent Color</div>
                  <div className="flex flex-wrap gap-3">
                    {["#00f0ff", "#ff9a00", "#a855f7", "#38bdf8", "#22c55e"].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 transition-all hover:scale-110"
                        style={{ backgroundColor: color, borderColor: color === "#00f0ff" ? "white" : color }}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Danger Zone */}
            <div className="bg-rose-950/30 rounded-xl border border-rose-500/30 p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-[18px] text-rose-400">warning</span>
                <span className="font-sans text-[14px] text-rose-300 font-semibold">Danger Zone</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="py-2 px-4 rounded-lg border border-rose-500/40 font-telemetry text-[10px] text-rose-400 uppercase hover:bg-rose-900/30 transition-all text-left">
                  <div className="font-bold">Purge Neural Memory</div>
                  <div className="text-rose-500/60 mt-0.5">Irreversible — wipes all memories</div>
                </button>
                <button className="py-2 px-4 rounded-lg border border-rose-500/40 font-telemetry text-[10px] text-rose-400 uppercase hover:bg-rose-900/30 transition-all text-left">
                  <div className="font-bold">Terminate Agent Session</div>
                  <div className="text-rose-500/60 mt-0.5">Destroys active session keys</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
