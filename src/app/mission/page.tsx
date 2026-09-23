"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type Task = {
  id: string;
  title: string;
  status: "pending" | "running" | "done" | "failed" | "waiting";
  priority: "critical" | "high" | "normal";
  subtasks: string[];
  progress: number;
  agent: string;
  eta: string;
};

const TASKS: Task[] = [
  {
    id: "T-001",
    title: "CVE-2025-8819 Security Audit & Patch",
    status: "running",
    priority: "critical",
    subtasks: ["NIST Crawl", "arXiv Analysis", "GitHub PR #402", "SecOps Brief"],
    progress: 75,
    agent: "SARA-CORE",
    eta: "~4 min",
  },
  {
    id: "T-002",
    title: "Design team inbox triage & action items",
    status: "done",
    priority: "normal",
    subtasks: ["Read 14 emails", "Extract 3 action items", "Draft replies"],
    progress: 100,
    agent: "SARA-MAIL",
    eta: "Complete",
  },
  {
    id: "T-003",
    title: "Travel coordination — April mission",
    status: "waiting",
    priority: "high",
    subtasks: ["Flight UA2412", "Hotel Marriott", "Car pickup", "Full schedule"],
    progress: 0,
    agent: "SARA-LOGISTICS",
    eta: "Queued",
  },
  {
    id: "T-004",
    title: "Weekly engineering standup summary",
    status: "pending",
    priority: "normal",
    subtasks: ["Pull Slack threads", "Summarize blockers", "Draft digest"],
    progress: 0,
    agent: "SARA-SIGNAL",
    eta: "~8 min",
  },
];

const STATUS_STYLES: Record<string, string> = {
  running: "text-orange-400 bg-orange-400/10 border-orange-400/30",
  done: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  pending: "text-sky-400 bg-sky-400/10 border-sky-400/30",
  waiting: "text-slate-400 bg-slate-800 border-slate-700",
  failed: "text-rose-400 bg-rose-400/10 border-rose-400/30",
};

const PRIORITY_DOT: Record<string, string> = {
  critical: "bg-rose-400",
  high: "bg-orange-400",
  normal: "bg-holo-cyan",
};

export default function MissionPage() {
  const [selected, setSelected] = useState<Task>(TASKS[0]);

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-10 min-h-screen text-slate-200 px-4 sm:px-6 w-full">

        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
              <span className="font-telemetry text-[9px] text-orange-400 uppercase tracking-widest">SARA // MISSION CONTROLLER</span>
            </div>
            <h1 className="font-sans text-2xl sm:text-3xl text-slate-100 font-light tracking-wide uppercase">
              Autonomous <span className="text-orange-400">Mission</span> Controller
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-[#090e17] border border-slate-800">
              <div>
                <div className="font-telemetry text-[16px] font-bold text-orange-400">{TASKS.filter(t => t.status === "running").length}</div>
                <div className="font-telemetry text-[8px] text-slate-500">ACTIVE</div>
              </div>
              <div className="w-px h-6 bg-slate-800"></div>
              <div>
                <div className="font-telemetry text-[16px] font-bold text-emerald-400">{TASKS.filter(t => t.status === "done").length}</div>
                <div className="font-telemetry text-[8px] text-slate-500">DONE</div>
              </div>
              <div className="w-px h-6 bg-slate-800"></div>
              <div>
                <div className="font-telemetry text-[16px] font-bold text-slate-400">{TASKS.filter(t => t.status === "pending" || t.status === "waiting").length}</div>
                <div className="font-telemetry text-[8px] text-slate-500">QUEUED</div>
              </div>
            </div>
            <button className="px-4 py-2 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 font-telemetry text-[10px] text-orange-300 uppercase transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">add</span>
              New Mission
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Task List */}
          <div className="xl:col-span-1 space-y-3">
            {TASKS.map(task => (
              <button
                key={task.id}
                className={`w-full text-left p-4 rounded-xl border transition-all ${selected.id === task.id ? "bg-[#182332] border-orange-500/40 shadow-[0_0_15px_rgba(255,154,0,0.1)]" : "bg-[#090e17]/80 border-slate-800 hover:border-slate-700"}`}
                onClick={() => setSelected(task)}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${PRIORITY_DOT[task.priority]} ${task.status === "running" ? "animate-ping" : ""}`}></div>
                    <span className="font-telemetry text-[9px] text-slate-500">{task.id}</span>
                  </div>
                  <span className={`font-telemetry text-[8px] font-bold uppercase px-2 py-0.5 rounded border ${STATUS_STYLES[task.status]}`}>{task.status}</span>
                </div>
                <div className="font-sans text-[13px] text-slate-200 font-medium mb-2 leading-tight">{task.title}</div>
                <div className="flex items-center justify-between">
                  <span className="font-telemetry text-[9px] text-slate-500">{task.agent}</span>
                  <span className="font-telemetry text-[9px] text-slate-400">{task.eta}</span>
                </div>
                {task.progress > 0 && task.progress < 100 && (
                  <div className="mt-2 w-full bg-[#252a33] h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full transition-all" style={{ width: `${task.progress}%` }}></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Mission Detail */}
          <div className="xl:col-span-2 flex flex-col gap-4">

            {/* Mission Header Card */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-telemetry text-[9px] text-slate-500">{selected.id}</span>
                    <span className={`font-telemetry text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${STATUS_STYLES[selected.status]}`}>{selected.status}</span>
                    <span className={`font-telemetry text-[8px] font-bold uppercase ${selected.priority === "critical" ? "text-rose-400" : selected.priority === "high" ? "text-orange-400" : "text-holo-cyan"}`}>{selected.priority}</span>
                  </div>
                  <h2 className="font-sans text-[18px] text-slate-100 font-semibold">{selected.title}</h2>
                  <p className="font-telemetry text-[9px] text-slate-500 mt-1">Agent: {selected.agent} · ETA: {selected.eta}</p>
                </div>
                <div className="flex items-center gap-2">
                  {selected.status !== "done" && (
                    <button className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/40 font-telemetry text-[10px] text-orange-300 uppercase hover:bg-orange-500/30 transition-all flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">play_arrow</span>
                      Run
                    </button>
                  )}
                  <button className="px-3 py-1.5 rounded-lg bg-[#171c25] border border-slate-800 font-telemetry text-[10px] text-slate-400 uppercase hover:text-slate-200 transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">edit</span>
                    Edit
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase">Overall Progress</span>
                  <span className={`font-telemetry text-[14px] font-bold ${selected.progress === 100 ? "text-emerald-400" : "text-orange-400"}`}>{selected.progress}%</span>
                </div>
                <div className="w-full bg-[#252a33] h-2.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${selected.progress === 100 ? "bg-emerald-400" : "bg-gradient-to-r from-orange-500 to-orange-400"}`}
                    style={{ width: `${selected.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Subtasks */}
              <div>
                <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Subtask Pipeline</div>
                <div className="space-y-2">
                  {selected.subtasks.map((sub, i) => {
                    const isDone = selected.status === "done" || (i / selected.subtasks.length) * 100 < selected.progress;
                    const isActive = selected.status === "running" && Math.floor((selected.progress / 100) * selected.subtasks.length) === i;
                    return (
                      <div key={sub} className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all ${isActive ? "bg-orange-900/20 border-orange-500/30" : isDone ? "bg-emerald-900/10 border-emerald-500/20" : "bg-[#171c25] border-slate-800"}`}>
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isActive ? "bg-orange-400/20 border border-orange-400/50" : isDone ? "bg-emerald-400/20 border border-emerald-400/50" : "bg-[#252a33] border border-slate-700"}`}>
                          {isDone
                            ? <span className="material-symbols-outlined text-[14px] text-emerald-400">check</span>
                            : isActive
                            ? <span className="material-symbols-outlined text-[14px] text-orange-400 animate-spin">autorenew</span>
                            : <span className="font-telemetry text-[9px] text-slate-600">{i + 1}</span>
                          }
                        </div>
                        <span className={`font-sans text-[12px] ${isDone ? "text-slate-300" : isActive ? "text-orange-200" : "text-slate-500"}`}>{sub}</span>
                        {isActive && <span className="ml-auto font-telemetry text-[9px] text-orange-400 animate-pulse">IN PROGRESS</span>}
                        {isDone && <span className="ml-auto font-telemetry text-[9px] text-emerald-400">COMPLETE</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Agent Log */}
            <div className="bg-[#090e17]/80 rounded-xl border border-slate-800 p-4">
              <div className="font-telemetry text-[9px] text-slate-500 uppercase mb-3">Agent Execution Log</div>
              <div className="font-telemetry text-[10px] space-y-1.5 max-h-40 overflow-y-auto">
                {selected.status === "running" && <>
                  <div><span className="text-slate-500">10:41:05</span> <span className="text-holo-cyan">INFO</span> <span className="text-slate-300">Dispatching web crawlers to NIST, arXiv, GitHub</span></div>
                  <div><span className="text-slate-500">10:41:09</span> <span className="text-emerald-400">DONE</span> <span className="text-slate-300">NIST CVE entry retrieved: 9.8 CVSS</span></div>
                  <div><span className="text-slate-500">10:41:14</span> <span className="text-emerald-400">DONE</span> <span className="text-slate-300">arXiv PDF parsed: 14 pages, 3 exploit vectors</span></div>
                  <div><span className="text-slate-500">10:41:18</span> <span className="text-orange-400">EXEC</span> <span className="text-slate-300">Scanning GitHub PR #402 for patch validity</span></div>
                  <div><span className="text-slate-500">10:41:22</span> <span className="text-orange-400">WAIT</span> <span className="text-slate-300">Awaiting patch verification result...</span></div>
                </>}
                {selected.status === "done" && <>
                  <div><span className="text-slate-500">09:12:00</span> <span className="text-holo-cyan">INFO</span> <span className="text-slate-300">Reading 14 emails from design team inbox</span></div>
                  <div><span className="text-slate-500">09:12:08</span> <span className="text-emerald-400">DONE</span> <span className="text-slate-300">Extracted 3 action items</span></div>
                  <div><span className="text-slate-500">09:12:14</span> <span className="text-emerald-400">DONE</span> <span className="text-slate-300">Replies drafted and staged for review</span></div>
                  <div><span className="text-slate-500">09:12:17</span> <span className="text-emerald-400">DONE</span> <span className="text-slate-300">Mission complete — all tasks resolved</span></div>
                </>}
                {(selected.status === "pending" || selected.status === "waiting") &&
                  <div><span className="text-slate-500">--:--:--</span> <span className="text-slate-500">WAIT</span> <span className="text-slate-500">Mission queued — awaiting dispatch</span></div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
