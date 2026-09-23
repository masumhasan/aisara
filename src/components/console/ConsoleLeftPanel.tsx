"use client";

import React from "react";

type CoreState = "IDLE" | "LISTENING" | "THINKING" | "SPEAKING" | "TOOL_USE" | "VISION" | "INTERRUPTED";

export const ConsoleLeftPanel = ({
  coreState,
  cfg,
  audioBarsHeights,
}: {
  coreState: CoreState;
  cfg: any;
  audioBarsHeights: number[];
}) => {
  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-2 lg:order-1">
      {/* Neural Telemetry */}
      <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

        <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
          <div className="flex items-center gap-2">
            <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">NEURAL TELEMETRY</span>
            <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
          </div>
          <span className="font-telemetry text-[9px] text-slate-500">[SYS-01]</span>
        </div>

        <div className="space-y-3 font-telemetry text-[11px]">
          {[
            { label: "INFERENCE EFFICIENCY", value: "94.2%", pct: 94, color: "#00f0ff", vcolor: "text-holo-cyan" },
            { label: "TOKEN BUFFER FLUX",    value: "3,842 / 8k", pct: 48, color: "#38bdf8", vcolor: "text-sky-300" },
          ].map(g => (
            <div key={g.label}>
              <div className="flex justify-between mb-1">
                <span className="text-slate-300">{g.label}</span>
                <span className={`font-bold ${g.vcolor}`}>{g.value}</span>
              </div>
              <div className="h-1.5 w-full bg-[#030914] rounded-full overflow-hidden border border-holo-cyan/20 p-px">
                <div className="h-full rounded-full shadow-[0_0_8px_#00f0ff] transition-all duration-500"
                  style={{ width: `${g.pct}%`, background: `linear-gradient(to right, ${g.color}99, ${g.color})` }}></div>
              </div>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
              <div className="font-telemetry text-[8px] text-slate-500 uppercase tracking-wider">LATENCY (RTC)</div>
              <div className="font-telemetry text-[13px] text-holo-cyan font-bold mt-0.5">14.8 ms</div>
              <div className="font-telemetry text-[8px] text-sky-400/80 mt-0.5">Jitter: ±0.3ms</div>
            </div>
            <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
              <div className="font-telemetry text-[8px] text-slate-500 uppercase tracking-wider">PACKET LOSS</div>
              <div className="font-telemetry text-[13px] text-emerald-400 font-bold mt-0.5">0.00 %</div>
              <div className="font-telemetry text-[8px] text-slate-400 mt-0.5">Opus / 48kHz</div>
            </div>
          </div>
        </div>

        {/* Acoustic Harmonics */}
        <div className="mt-4 pt-3 border-t border-holo-cyan/15">
          <div className="flex justify-between items-center mb-2">
            <span className="font-telemetry text-[9px] tracking-widest text-slate-400 uppercase">ACOUSTIC HARMONICS SPECTRUM</span>
            <span className="font-telemetry text-[9px] text-holo-cyan">24 BAND // STEREO</span>
          </div>
          <div className="h-12 flex items-end justify-between gap-1 bg-[#020612]/90 rounded border border-holo-cyan/20 p-1.5">
            {audioBarsHeights.map((h, i) => (
              <div key={i} className="flex-1 rounded-sm transition-all duration-75"
                style={{
                  height: `${h}%`,
                  backgroundColor: cfg.color,
                  boxShadow: `0 0 6px ${cfg.color}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Optical Sensor Feed */}
      <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

        <div className="flex items-center justify-between pb-2 mb-2 border-b border-holo-cyan/20">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[15px] text-holo-cyan">videocam</span>
            <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">OPTICAL SENSOR FEED</span>
          </div>
          <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-holo-cyan/15 text-holo-cyan border border-holo-cyan/40 animate-pulse font-semibold">FEED ACTIVE</span>
        </div>

        <div className="relative h-44 rounded overflow-hidden bg-[#010308] border border-holo-cyan/30 flex items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,240,255,0.08),transparent)]"></div>
          <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between font-telemetry text-[9px] text-holo-cyan/90 font-bold">
              <span>FOV: 98.4° WIDE</span>
              <span className="text-emerald-400">CONF: 99.4%</span>
            </div>
            <div className="self-center relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-holo-cyan/70 animate-spin" style={{ animationDuration: "8s" }}></div>
              <div className="absolute w-10 h-10 rounded-full border border-holo-cyan/50"></div>
              <div className="absolute w-2.5 h-2.5 rounded-full bg-holo-cyan shadow-[0_0_12px_#00f0ff]"></div>
              <div className="absolute -top-5 font-telemetry text-[8px] text-holo-cyan tracking-widest bg-[#02050e]/90 px-1.5 py-0.5 rounded border border-holo-cyan/40 font-bold">[TARGET_LOCK]</div>
            </div>
            <div className="flex justify-between font-telemetry text-[9px] text-slate-300">
              <span>TRACK: DESKTOP_STREAM</span>
              <span className="text-holo-cyan font-bold">60 FPS</span>
            </div>
          </div>
          <div className="absolute top-5 right-4 border border-amber-400 bg-amber-400/20 px-2 py-0.5 rounded font-telemetry text-[8px] text-amber-300 font-bold tracking-tight shadow-[0_0_12px_rgba(245,158,11,0.4)]">
            OBJ: SECURITY_REPORT.PDF (98.7%)
          </div>
        </div>
        <div className="mt-2.5 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            OCR KERNEL PARSER ENGAGED
          </span>
          <span className="text-holo-cyan font-bold">1.2MP RES</span>
        </div>
      </div>
    </div>
  );
};
