"use client";

import React from "react";

export const ExecutionPipeline = () => {
  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-3">
      {/* Realtime Speech Dialogue Stream */}
      <div className="hud-panel rounded-lg p-3.5">
        <div className="reticle-corner-tl"></div>
        <div className="reticle-corner-tr"></div>
        <div className="reticle-corner-bl"></div>
        <div className="reticle-corner-br"></div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-holo-cyan">
              forum
            </span>
            <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">
              RTC STREAM TRANSCRIPT
            </span>
          </div>
          <span className="font-telemetry text-[9px] text-holo-muted">
            [CH-01]
          </span>
        </div>

        {/* Utterance Feed */}
        <div className="space-y-2.5 max-h-[200px] overflow-y-auto pr-1">
          {/* User Utterance */}
          <div className="p-2.5 rounded bg-[#030b1a]/80 border-l-2 border-sky-400">
            <div className="flex items-center justify-between font-telemetry text-[9px] text-sky-400 font-bold mb-1">
              <span>USER // OP-01</span>
              <span className="text-holo-muted">10:42:19.04</span>
            </div>
            <p className="font-sans text-[12px] text-slate-200 leading-snug">
              "Scan my inbox for the product security audit and draft a summary."
            </p>
          </div>

          {/* SARA Realtime Response */}
          <div className="p-2.5 rounded bg-[#041224]/85 border-l-2 border-holo-cyan">
            <div className="flex items-center justify-between font-telemetry text-[9px] text-holo-cyan font-bold mb-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                SARA // ASSISTANT
              </span>
              <span className="text-holo-muted">10:42:20.12</span>
            </div>
            <p className="font-sans text-[12px] text-cyan-200 leading-relaxed">
              "Accessing mailbox via Secure Token. Located 3 relevant threads from SecOps regarding the Q3 pen-test."
            </p>
          </div>
        </div>

        {/* Speech Synthesis Status Line */}
        <div className="mt-3 pt-2 border-t border-holo-cyan/15 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[13px] text-holo-cyan">
              graphic_eq
            </span>
            SYNTH: 148 WPM
          </span>
          <span className="text-emerald-400 font-bold">CONF: 99.8%</span>
        </div>
      </div>

      {/* Autonomous Verbs Tool Execution Pipeline (Solar Amber) */}
      <div className="hud-panel-amber rounded-lg p-3.5">
        <div className="reticle-amber-tl"></div>
        <div className="reticle-amber-tr"></div>
        <div className="reticle-amber-bl"></div>
        <div className="reticle-amber-br"></div>
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-amber/30">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-holo-amber animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
            <span className="font-telemetry text-[11px] text-holo-amber font-bold tracking-widest uppercase">
              TOOL EXECUTION BUS
            </span>
          </div>
          <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-holo-amber/20 text-holo-amber border border-holo-amber/40 font-bold tracking-wider">
            KINETIC
          </span>
        </div>

        {/* Verbs Workflow Cards */}
        <div className="space-y-2 font-telemetry text-[10px]">
          {/* Step 1: Read Emails */}
          <div className="p-2 rounded bg-[#130c04]/90 border border-holo-amber/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-holo-amber font-bold tracking-wider">
                [ 01 ] READ_EMAILS
              </span>
              <span className="text-emerald-400 font-semibold">
                RESOLVED (32ms)
              </span>
            </div>
            <div className="text-slate-300 text-[9px]">
              3 threads indexed from SecOps
            </div>
          </div>

          {/* Step 2: Parse Attachment */}
          <div className="p-2 rounded bg-[#1c1205]/90 border border-holo-amber/50 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-holo-amber-glow font-bold tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-holo-amber animate-ping"></span>
                [ 02 ] PARSE_ATTACHMENT
              </span>
              <span className="text-holo-amber font-bold animate-pulse">
                IN PROGRESS
              </span>
            </div>
            <div className="text-amber-200 text-[9px]">
              Extracting CVE vulnerability index from audit_v2.pdf
            </div>
          </div>

          {/* Step 3: Draft Summary */}
          <div className="p-2 rounded bg-[#0d0903]/80 border border-holo-amber/20 opacity-75">
            <div className="flex items-center justify-between mb-1">
              <span className="text-amber-500 font-semibold tracking-wider">
                [ 03 ] DRAFT_SUMMARY
              </span>
              <span className="text-holo-muted">QUEUED</span>
            </div>
            <div className="text-slate-400 text-[9px]">
              target: #dispatch-buffer (markdown)
            </div>
          </div>
        </div>

        {/* Terminal Command Prompt */}
        <div className="mt-3 pt-2.5 border-t border-holo-amber/20 flex items-center gap-2">
          <span className="font-telemetry text-[11px] text-holo-amber font-bold">
            ❯_
          </span>
          <input
            type="text"
            className="bg-transparent text-[11px] font-telemetry text-holo-amber-glow placeholder:text-slate-600 focus:outline-none w-full"
            placeholder="Inject kernel command..."
          />
          <button
            type="button"
            className="text-holo-amber hover:text-holo-amber-glow transition-all"
            title="Execute"
          >
            <span className="material-symbols-outlined text-[17px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
