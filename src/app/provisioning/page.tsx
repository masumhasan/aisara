"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

const PLANS = [
  {
    id: "solo",
    name: "SOLO OPERATIVE",
    badge: "STARTER",
    price: "$49",
    period: "/month",
    color: "border-holo-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.08)]",
    badgeColor: "bg-holo-cyan/20 text-holo-cyan border-holo-cyan/40",
    highlight: false,
    features: [
      { label: "1 Agent Instance", ok: true },
      { label: "10GB Neural Memory", ok: true },
      { label: "Standard Tool Pack (12 tools)", ok: true },
      { label: "Email & Signal Integration", ok: true },
      { label: "Basic Telemetry", ok: true },
      { label: "Multi-Agent Network", ok: false },
      { label: "Custom Verb Pipelines", ok: false },
      { label: "Priority SAT-BURST Channel", ok: false },
    ],
  },
  {
    id: "command",
    name: "COMMAND TIER",
    badge: "MOST POPULAR",
    price: "$199",
    period: "/month",
    color: "border-orange-500/60 shadow-[0_0_30px_rgba(255,154,0,0.15)]",
    badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    highlight: true,
    features: [
      { label: "5 Agent Instances", ok: true },
      { label: "100GB Neural Memory", ok: true },
      { label: "Full Tool Pack (40+ tools)", ok: true },
      { label: "All Integrations", ok: true },
      { label: "Advanced HUD Telemetry", ok: true },
      { label: "Multi-Agent Network", ok: true },
      { label: "Custom Verb Pipelines", ok: true },
      { label: "Priority SAT-BURST Channel", ok: false },
    ],
  },
  {
    id: "titan",
    name: "TITAN CLEARANCE",
    badge: "ENTERPRISE",
    price: "Custom",
    period: " / enterprise",
    color: "border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.08)]",
    badgeColor: "bg-purple-900/30 text-purple-300 border-purple-500/30",
    highlight: false,
    features: [
      { label: "Unlimited Agent Instances", ok: true },
      { label: "Unlimited Neural Memory", ok: true },
      { label: "Custom Tool Development", ok: true },
      { label: "All Integrations + Custom", ok: true },
      { label: "Real-time Mission HUD", ok: true },
      { label: "Federated Agent Network", ok: true },
      { label: "Neural Graph Pipelines", ok: true },
      { label: "Priority SAT-BURST Channel", ok: true },
    ],
  },
];

export default function ProvisioningPage() {
  const [selected, setSelected] = useState("command");
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-16 min-h-screen text-slate-200 px-4 sm:px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
            <span className="font-telemetry text-[9px] text-orange-400 uppercase tracking-widest">SARA // PROVISIONING</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl text-slate-100 font-light tracking-wide uppercase mb-3">
            Get Your <span className="text-orange-400">Own</span> SARA Agent
          </h1>
          <p className="font-sans text-[14px] text-slate-400 max-w-xl mx-auto leading-relaxed">
            Deploy a personal AI command system. Full autonomy, encrypted mission control, real-time intelligence synthesis.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`font-telemetry text-[11px] uppercase ${billing === "monthly" ? "text-slate-200" : "text-slate-500"}`}>Monthly</span>
          <button 
            className="relative w-12 h-6 rounded-full bg-[#252a33] border border-slate-700 transition-all"
            onClick={() => setBilling(b => b === "monthly" ? "annual" : "monthly")}
          >
            <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-orange-400 transition-all duration-300 ${billing === "annual" ? "translate-x-6" : "translate-x-0.5"}`}></div>
          </button>
          <span className={`font-telemetry text-[11px] uppercase ${billing === "annual" ? "text-slate-200" : "text-slate-500"}`}>
            Annual
            <span className="ml-1.5 font-telemetry text-[9px] text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded border border-orange-500/30">SAVE 20%</span>
          </span>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {PLANS.map(plan => (
            <div
              key={plan.id}
              className={`relative bg-[#090e17]/80 rounded-2xl border p-6 cursor-pointer transition-all duration-200 ${plan.color} ${selected === plan.id ? "scale-105" : "hover:scale-[1.02]"} ${plan.highlight ? "bg-gradient-to-b from-orange-900/10 to-transparent" : ""}`}
              onClick={() => setSelected(plan.id)}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-telemetry text-[9px] font-bold uppercase px-3 py-1 rounded-full bg-orange-500 text-[#090e17]">⚡ Most Popular</span>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${plan.badgeColor} mb-2 inline-block`}>{plan.badge}</span>
                  <h2 className="font-sans text-[16px] text-slate-100 font-semibold tracking-wider">{plan.name}</h2>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === plan.id ? "border-orange-400 bg-orange-400" : "border-slate-600"}`}>
                  {selected === plan.id && <span className="material-symbols-outlined text-[12px] text-[#090e17] font-bold">check</span>}
                </div>
              </div>
              
              <div className="mb-6">
                <span className="font-sans text-[32px] font-bold text-slate-100">{plan.price}</span>
                <span className="font-telemetry text-[10px] text-slate-400">{plan.period}</span>
                {billing === "annual" && plan.price !== "Custom" && (
                  <div className="font-telemetry text-[9px] text-orange-400 mt-0.5">
                    ~${Math.floor(parseInt(plan.price.replace("$", "")) * 12 * 0.8)} billed annually
                  </div>
                )}
              </div>
              
              <div className="space-y-2.5">
                {plan.features.map(f => (
                  <div key={f.label} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined text-[16px] shrink-0 ${f.ok ? "text-holo-cyan" : "text-slate-700"}`}>{f.ok ? "check_circle" : "cancel"}</span>
                    <span className={`font-sans text-[12px] ${f.ok ? "text-slate-300" : "text-slate-600"}`}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/register"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500/80 to-orange-400/90 text-[#090e17] font-sans text-[15px] font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,154,0,0.3)] hover:shadow-[0_0_35px_rgba(255,154,0,0.5)] hover:brightness-110 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
            Deploy {PLANS.find(p => p.id === selected)?.name} — Start Free Trial
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
          <p className="font-telemetry text-[10px] text-slate-500 mt-3 uppercase tracking-wider">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Feature comparison footer */}
        <div className="max-w-5xl mx-auto mt-14">
          <div className="font-telemetry text-[10px] text-slate-500 uppercase tracking-widest text-center mb-4">Core Capabilities Included in All Plans</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "shield", label: "E2EE Encryption", desc: "Zero-knowledge protocol" },
              { icon: "neurology", label: "Neural Memory", desc: "Persistent context graphs" },
              { icon: "cell_tower", label: "Signal Hub", desc: "Encrypted comms channel" },
              { icon: "bolt", label: "Autonomy Engine", desc: "Multi-step verb pipelines" },
            ].map(item => (
              <div key={item.label} className="bg-[#090e17]/60 rounded-xl border border-slate-800 p-4 text-center">
                <span className="material-symbols-outlined text-[24px] text-holo-cyan mb-2 block">{item.icon}</span>
                <div className="font-sans text-[12px] text-slate-200 font-medium">{item.label}</div>
                <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-8 text-[10px] text-slate-500 font-telemetry tracking-wider border-t border-slate-800 pt-4">
          Built by <a href="https://masumhasan.web.app/" target="_blank" rel="noopener noreferrer" className="ml-1 text-orange-400 hover:underline font-bold transition-colors">Nur Hasan Masum</a>
        </div>
      </div>
    </ConsoleLayout>
  );
}
