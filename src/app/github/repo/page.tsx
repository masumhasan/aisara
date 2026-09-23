"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function GitHubRepoPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "repair" | "prs" | "issues">("overview");
  const [repairRunning, setRepairRunning] = useState(false);
  const [repairProgress, setRepairProgress] = useState(0);

  const startRepair = () => {
    setRepairRunning(true);
    setRepairProgress(0);
    const interval = setInterval(() => {
      setRepairProgress(prev => {
        if (prev >= 100) { clearInterval(interval); setRepairRunning(false); return 100; }
        return prev + 8;
      });
    }, 300);
  };

  const commits = [
    { hash: "8f4b2d1", message: "fix: eBPF ring buffer boundary check overflow", author: "k-torvalds", time: "2h ago", status: "verified" },
    { hash: "c3a19f7", message: "refactor: socket filter ring allocation strategy", author: "ebpf-dev", time: "5h ago", status: "verified" },
    { hash: "a01e2b8", message: "test: add CVE-2025-8819 regression coverage", author: "sara-bot", time: "6h ago", status: "auto-merged" },
    { hash: "7d3e9c4", message: "docs: update eBPF security advisory", author: "sec-team", time: "1d ago", status: "verified" },
  ];

  const prs = [
    { num: 402, title: "eBPF Socket Ring Boundary Filter v4.2", author: "ebpf-dev", status: "READY", checks: 12, color: "text-emerald-400", border: "border-emerald-500/30" },
    { num: 398, title: "Kernel memory sanitization pass", author: "k-torvalds", status: "REVIEW", checks: 9, color: "text-orange-400", border: "border-orange-500/30" },
    { num: 401, title: "CVE-2025-8819 test suite", author: "sara-bot", status: "MERGED", checks: 14, color: "text-holo-cyan", border: "border-holo-cyan/30" },
  ];

  const repairSteps = [
    { label: "Analyze vulnerable code paths", done: repairProgress >= 20 },
    { label: "Generate patch candidates", done: repairProgress >= 40 },
    { label: "Run sandbox regression tests", done: repairProgress >= 60 },
    { label: "Validate against CVE vector", done: repairProgress >= 80 },
    { label: "Submit PR for human review", done: repairProgress >= 100 },
  ];

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
              <span className="font-telemetry text-[9px] text-emerald-400 uppercase tracking-widest">SARA // GITHUB AGENTIC WORKSPACE</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Repository Detail <span className="text-emerald-400">&amp;</span> Autonomous Repair
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-telemetry text-[9px] text-slate-400 px-3 py-1.5 rounded-lg bg-[#090e17] border border-slate-800">torvalds / linux-kernel</span>
            <span className="px-2 py-1 rounded bg-emerald-400/10 border border-emerald-400/30 font-telemetry text-[9px] text-emerald-400">main</span>
          </div>
        </div>

        {/* Repo Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { label: "Stars", value: "184.2k", icon: "star", color: "text-yellow-400" },
            { label: "Open PRs", value: "312", icon: "merge_type", color: "text-emerald-400" },
            { label: "Open Issues", value: "1,204", icon: "bug_report", color: "text-orange-400" },
            { label: "CVE Exposure", value: "CRITICAL", icon: "warning", color: "text-rose-400" },
          ].map(stat => (
            <div key={stat.label} className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4 flex items-center gap-3">
              <span className={`material-symbols-outlined text-[22px] ${stat.color}`}>{stat.icon}</span>
              <div>
                <div className={`font-telemetry text-[16px] font-bold ${stat.color}`}>{stat.value}</div>
                <div className="font-telemetry text-[9px] text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[#090e17] border border-slate-800 mb-6 w-fit">
          {(["overview", "repair", "prs", "issues"] as const).map(tab => (
            <button
              key={tab}
              className={`px-4 py-1.5 rounded-lg font-telemetry text-[10px] uppercase tracking-wider transition-all ${activeTab === tab ? "bg-[#182332] text-holo-cyan border border-holo-cyan/30" : "text-slate-400 hover:text-slate-200"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace("prs", "Pull Requests").replace("issues", "Issues")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">

            {activeTab === "overview" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5 space-y-4">
                <div className="font-telemetry text-[10px] text-slate-400 uppercase">Recent Commits</div>
                <div className="space-y-3">
                  {commits.map(c => (
                    <div key={c.hash} className="flex items-center justify-between p-3 rounded-lg bg-[#171c25] border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-telemetry text-[10px] text-holo-cyan font-bold w-14 shrink-0">{c.hash}</span>
                        <div className="min-w-0">
                          <div className="font-sans text-[12px] text-slate-200 truncate">{c.message}</div>
                          <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{c.author} · {c.time}</div>
                        </div>
                      </div>
                      <span className={`font-telemetry text-[8px] font-bold uppercase px-2 py-0.5 rounded shrink-0 ml-2 ${c.status === "verified" ? "text-emerald-400 bg-emerald-400/10" : "text-holo-cyan bg-holo-cyan/10"}`}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "repair" && (
              <div className="space-y-4">
                <div className="bg-[#090e17]/80 rounded-xl border border-rose-500/30 p-5 bg-gradient-to-br from-rose-950/20 to-transparent">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-[18px] text-rose-400">warning</span>
                    <span className="font-sans text-[14px] font-semibold text-rose-300">CVE-2025-8819 Detected</span>
                    <span className="font-telemetry text-[9px] text-rose-400 bg-rose-400/10 border border-rose-400/30 px-2 py-0.5 rounded">CVSS 9.8</span>
                  </div>
                  <p className="font-sans text-[13px] text-slate-300 leading-relaxed mb-4">Critical heap overflow in eBPF ring buffer boundary validation. SARA has analyzed 8 vulnerable code paths and generated patch candidates.</p>
                  <button
                    className={`w-full py-3 rounded-xl font-sans font-bold text-[13px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${repairRunning ? "bg-orange-500/30 border border-orange-500/50 text-orange-300" : repairProgress === 100 ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300" : "bg-gradient-to-r from-rose-500/80 to-orange-500/80 text-white shadow-[0_0_20px_rgba(255,100,0,0.3)] hover:brightness-110"}`}
                    onClick={startRepair}
                    disabled={repairRunning}
                  >
                    <span className="material-symbols-outlined text-[18px]">{repairProgress === 100 ? "check_circle" : repairRunning ? "autorenew" : "construction"}</span>
                    {repairProgress === 100 ? "Repair Complete — PR Submitted" : repairRunning ? "Autonomous Repair Running..." : "Launch Autonomous Repair Flow"}
                  </button>
                </div>

                <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5">
                  <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-4">Repair Pipeline</div>
                  <div className="space-y-3">
                    {repairSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${step.done ? "bg-emerald-400/20 border-emerald-400/50" : repairRunning && repairProgress >= (i * 20) && repairProgress < ((i + 1) * 20) ? "border-orange-400/50 bg-orange-400/10" : "border-slate-700 bg-[#171c25]"}`}>
                          {step.done
                            ? <span className="material-symbols-outlined text-[14px] text-emerald-400">check</span>
                            : repairRunning && repairProgress >= (i * 20) && repairProgress < ((i + 1) * 20)
                            ? <span className="material-symbols-outlined text-[14px] text-orange-400 animate-spin">autorenew</span>
                            : <span className="font-telemetry text-[9px] text-slate-600">{i + 1}</span>
                          }
                        </div>
                        <span className={`font-sans text-[12px] ${step.done ? "text-slate-200" : "text-slate-500"}`}>{step.label}</span>
                      </div>
                    ))}
                  </div>
                  {repairRunning && (
                    <div className="mt-4">
                      <div className="w-full bg-[#252a33] h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-emerald-500 rounded-full transition-all duration-300" style={{ width: `${repairProgress}%` }}></div>
                      </div>
                      <div className="font-telemetry text-[9px] text-slate-400 mt-1 text-right">{repairProgress}%</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "prs" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5 space-y-3">
                <div className="font-telemetry text-[10px] text-slate-400 uppercase">Pull Requests</div>
                {prs.map(pr => (
                  <div key={pr.num} className={`p-4 rounded-xl bg-[#171c25] border ${pr.border} hover:bg-[#1b2029] transition-all cursor-pointer`}>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="font-telemetry text-[10px] text-slate-500">#{pr.num}</span>
                        <div className="font-sans text-[13px] font-semibold text-slate-100 mt-0.5">{pr.title}</div>
                        <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{pr.author} · {pr.checks} checks</div>
                      </div>
                      <span className={`font-telemetry text-[9px] font-bold ${pr.color} bg-current/10 px-2 py-0.5 rounded border border-current/30`} style={{ color: pr.color.includes("emerald") ? "#34d399" : pr.color.includes("orange") ? "#f97316" : "#00f0ff" }}>{pr.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "issues" && (
              <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5">
                <div className="font-telemetry text-[10px] text-slate-400 uppercase mb-4">Open Security Issues</div>
                <div className="space-y-3">
                  {[
                    { num: 1204, title: "CVE-2025-8819: eBPF ring buffer heap overflow", priority: "CRITICAL", label: "security" },
                    { num: 1198, title: "Kernel BPF map memory leak on map_delete_elem", priority: "HIGH", label: "bug" },
                    { num: 1190, title: "Socket filter bypass via truncated packet", priority: "MEDIUM", label: "security" },
                  ].map(issue => (
                    <div key={issue.num} className="p-3 rounded-lg bg-[#171c25] border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="material-symbols-outlined text-[16px] text-emerald-400 shrink-0">circle</span>
                          <div className="min-w-0">
                            <div className="font-sans text-[12px] text-slate-200 truncate">#{issue.num} {issue.title}</div>
                            <div className="flex items-center gap-1.5 mt-1">
                              <span className="font-telemetry text-[8px] px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30 text-orange-400">{issue.label}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`font-telemetry text-[8px] font-bold shrink-0 ${issue.priority === "CRITICAL" ? "text-rose-400" : issue.priority === "HIGH" ? "text-orange-400" : "text-yellow-400"}`}>{issue.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: SARA Actions */}
          <div className="flex flex-col gap-4">
            <div className="bg-[#090e17]/80 rounded-xl border border-orange-500/30 p-4 bg-gradient-to-br from-orange-950/10 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                <span className="font-telemetry text-[10px] text-orange-300 font-bold uppercase">SARA Autonomous Actions</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Draft Patch for CVE-2025-8819", icon: "construction" },
                  { label: "Run Full Test Suite", icon: "play_arrow" },
                  { label: "Submit PR for Review", icon: "merge_type" },
                  { label: "Generate Security Report", icon: "summarize" },
                  { label: "Notify SecOps Team", icon: "notification_important" },
                ].map(action => (
                  <button key={action.label} className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[#171c25] hover:bg-[#252a33] border border-slate-800 hover:border-orange-500/30 font-sans text-[12px] text-slate-300 hover:text-orange-300 transition-all">
                    <span className="material-symbols-outlined text-[16px] text-orange-400">{action.icon}</span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Repository Health</div>
              <div className="space-y-2">
                {[
                  { label: "CI/CD Status", value: "PASSING", color: "text-emerald-400" },
                  { label: "Code Coverage", value: "84.2%", color: "text-holo-cyan" },
                  { label: "Security Score", value: "B+", color: "text-orange-400" },
                  { label: "Tech Debt", value: "MODERATE", color: "text-yellow-400" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-telemetry text-[10px] text-slate-400">{item.label}</span>
                    <span className={`font-telemetry text-[10px] font-bold ${item.color}`}>{item.value}</span>
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
