"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type Integration = {
  id: string;
  name: string;
  category: string;
  icon: string;
  status: "connected" | "available" | "error";
  description: string;
  lastSync?: string;
  color: string;
};

const INTEGRATIONS: Integration[] = [
  { id: "github", name: "GitHub", category: "DevOps", icon: "code", status: "connected", description: "Repository access, PR management, issue tracking, code review.", lastSync: "2m ago", color: "#e2e8f0" },
  { id: "gmail", name: "Gmail", category: "Communication", icon: "mail", status: "connected", description: "Read, compose, and classify mission-critical emails.", lastSync: "4m ago", color: "#ea4335" },
  { id: "slack", name: "Slack", category: "Communication", icon: "chat", status: "connected", description: "Channel monitoring, message dispatch, and alert routing.", lastSync: "1m ago", color: "#4a154b" },
  { id: "livekit", name: "LiveKit", category: "Audio/Video", icon: "mic", status: "connected", description: "Real-time voice & video channel for SARA voice interface.", lastSync: "Live", color: "#00f0ff" },
  { id: "nist", name: "NIST NVD", category: "Intelligence", icon: "shield", status: "connected", description: "CVE vulnerability database with real-time threat ingestion.", lastSync: "6m ago", color: "#ffb869" },
  { id: "arxiv", name: "arXiv", category: "Intelligence", icon: "science", status: "connected", description: "Academic research crawler for technical threat intelligence.", lastSync: "12m ago", color: "#b33d3d" },
  { id: "google-cal", name: "Google Calendar", category: "Productivity", icon: "calendar_today", status: "available", description: "Schedule meetings, track deadlines, coordinate events.", color: "#4285f4" },
  { id: "notion", name: "Notion", category: "Productivity", icon: "article", status: "available", description: "Document sync, page reading, and database management.", color: "#e2e8f0" },
  { id: "jira", name: "Jira", category: "DevOps", icon: "bug_report", status: "available", description: "Issue tracking, sprint planning, and project management.", color: "#0052cc" },
  { id: "aws", name: "AWS", category: "Cloud", icon: "cloud", status: "error", description: "S3, Lambda, EC2 — cloud infrastructure management.", color: "#ff9900" },
  { id: "telegram", name: "Telegram", category: "Communication", icon: "send", status: "available", description: "Encrypted messaging and channel dispatch.", color: "#0088cc" },
  { id: "openai", name: "OpenAI API", category: "AI", icon: "neurology", status: "connected", description: "GPT-4 fallback for secondary inference routing.", lastSync: "Live", color: "#10a37f" },
];

const CATEGORIES = ["All", "Communication", "DevOps", "Intelligence", "Productivity", "Cloud", "AI", "Audio/Video"];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = INTEGRATIONS.filter(i => {
    const matchCat = activeCategory === "All" || i.category === activeCategory;
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const connected = INTEGRATIONS.filter(i => i.status === "connected").length;
  const errors = INTEGRATIONS.filter(i => i.status === "error").length;

  const StatusBadge = ({ status }: { status: string }) => {
    if (status === "connected") return <span className="font-telemetry text-[9px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded">CONNECTED</span>;
    if (status === "error") return <span className="font-telemetry text-[9px] font-bold text-rose-400 bg-rose-400/10 border border-rose-400/30 px-2 py-0.5 rounded">ERROR</span>;
    return <span className="font-telemetry text-[9px] font-bold text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded">AVAILABLE</span>;
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></div>
              <span className="font-telemetry text-[9px] text-holo-cyan uppercase tracking-widest">SARA // INTEGRATIONS</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Accounts <span className="text-holo-cyan">&amp;</span> Integrations Hub
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-[#090e17] border border-slate-800">
              <div className="text-center">
                <div className="font-telemetry text-[18px] font-bold text-emerald-400">{connected}</div>
                <div className="font-telemetry text-[8px] text-slate-500">CONNECTED</div>
              </div>
              <div className="w-px h-8 bg-slate-800"></div>
              <div className="text-center">
                <div className="font-telemetry text-[18px] font-bold text-rose-400">{errors}</div>
                <div className="font-telemetry text-[8px] text-slate-500">ERRORS</div>
              </div>
              <div className="w-px h-8 bg-slate-800"></div>
              <div className="text-center">
                <div className="font-telemetry text-[18px] font-bold text-slate-400">{INTEGRATIONS.length - connected - errors}</div>
                <div className="font-telemetry text-[8px] text-slate-500">AVAILABLE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search + Category filter */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
            <input
              className="w-56 bg-[#090e17] rounded-lg border border-slate-800 pl-8 pr-3 py-1.5 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-holo-cyan/50"
              placeholder="Search integrations..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`px-2.5 py-1 rounded-full font-telemetry text-[9px] uppercase tracking-wider transition-all border ${activeCategory === cat ? "bg-holo-cyan/20 border-holo-cyan/40 text-holo-cyan" : "bg-[#171c25] border-slate-800 text-slate-500 hover:text-slate-300"}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(integration => (
            <div
              key={integration.id}
              className={`relative bg-[#090e17]/80 rounded-xl border p-4 transition-all hover:scale-[1.02] cursor-pointer ${integration.status === "connected" ? "border-slate-700 hover:border-holo-cyan/30" : integration.status === "error" ? "border-rose-500/30 bg-rose-950/20" : "border-slate-800 hover:border-slate-700"}`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${integration.color}20`, border: `1px solid ${integration.color}40` }}
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ color: integration.color }}>{integration.icon}</span>
                </div>
                <StatusBadge status={integration.status} />
              </div>

              <div className="mb-1">
                <div className="font-sans text-[13px] font-semibold text-slate-100">{integration.name}</div>
                <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{integration.category}</div>
              </div>

              <p className="font-sans text-[11px] text-slate-400 leading-relaxed mb-3 line-clamp-2">{integration.description}</p>

              <div className="flex items-center justify-between">
                {integration.lastSync && (
                  <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${integration.lastSync === "Live" ? "bg-holo-cyan animate-ping" : "bg-emerald-400"}`}></span>
                    <span className="font-telemetry text-[8px] text-slate-500">Synced {integration.lastSync}</span>
                  </div>
                )}
                {integration.status === "available" && (
                  <button className="ml-auto font-telemetry text-[9px] text-holo-cyan uppercase tracking-wider hover:underline transition-all">
                    Connect →
                  </button>
                )}
                {integration.status === "error" && (
                  <button className="ml-auto font-telemetry text-[9px] text-rose-400 uppercase tracking-wider hover:underline transition-all">
                    Reconnect →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Custom Integration CTA */}
        <div className="mt-8 p-5 rounded-xl border border-dashed border-holo-cyan/30 bg-holo-cyan/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-sans text-[14px] text-slate-100 font-semibold mb-1">Add Custom Integration</div>
            <p className="font-sans text-[12px] text-slate-400">Connect any REST API, webhook, or OAuth provider to expand SARA&apos;s intelligence network.</p>
          </div>
          <button className="shrink-0 px-6 py-2.5 rounded-xl bg-holo-cyan/20 hover:bg-holo-cyan/30 border border-holo-cyan/40 font-telemetry text-[10px] text-holo-cyan uppercase tracking-wider transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            Custom Connector
          </button>
        </div>
      </div>
    </ConsoleLayout>
  );
}
