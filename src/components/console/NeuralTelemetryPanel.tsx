"use client";

import React, { useEffect, useState } from "react";

export const NeuralTelemetryPanel = () => {
  const [inferenceMetric, setInferenceMetric] = useState(94.2);
  const [latency, setLatency] = useState(14.8);
  const [audioBars, setAudioBars] = useState<number[]>([]);

  useEffect(() => {
    // Simulate telemetry changes
    const interval = setInterval(() => {
      setInferenceMetric((prev) => {
        const next = prev + (Math.random() - 0.5) * 2;
        return Math.max(85, Math.min(99.9, next));
      });
      setLatency((prev) => {
        const next = prev + (Math.random() - 0.5);
        return Math.max(10, Math.min(35, next));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate initial bars
    setAudioBars(Array.from({ length: 24 }).map(() => Math.floor(Math.random() * 75 + 15)));

    const audioInterval = setInterval(() => {
      setAudioBars((prev) =>
        prev.map(() => Math.floor(Math.random() * 75 + 15))
      );
    }, 150);

    return () => clearInterval(audioInterval);
  }, []);

  return (
    <div className="hud-panel rounded-lg p-3.5">
      <div className="reticle-corner-tl"></div>
      <div className="reticle-corner-tr"></div>
      <div className="reticle-corner-bl"></div>
      <div className="reticle-corner-br"></div>
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
        <div className="flex items-center gap-2">
          <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">
            NEURAL TELEMETRY
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse"></span>
        </div>
        <span className="font-telemetry text-[9px] text-holo-muted">
          [SYS-01]
        </span>
      </div>

      {/* Inference & Token Gauge */}
      <div className="space-y-3 font-telemetry text-[11px]">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-300">INFERENCE EFFICIENCY</span>
            <span className="text-holo-cyan font-bold">
              {inferenceMetric.toFixed(1)}%
            </span>
          </div>
          <div className="h-1.5 w-full bg-[#030914] rounded-full overflow-hidden border border-holo-cyan/20 p-px">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff] transition-all duration-500"
              style={{ width: `${inferenceMetric}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-slate-300">TOKEN BUFFER FLUX</span>
            <span className="text-sky-300 font-bold">3,842 / 8k</span>
          </div>
          <div className="h-1.5 w-full bg-[#030914] rounded-full overflow-hidden border border-holo-cyan/20 p-px">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-holo-cyan rounded-full transition-all duration-300"
              style={{ width: "48%" }}
            ></div>
          </div>
        </div>

        {/* Latency / Packet Loss Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
            <div className="text-[8px] text-holo-muted uppercase tracking-wider">
              LATENCY (RTC)
            </div>
            <div className="text-[13px] text-holo-cyan font-bold mt-0.5">
              {latency.toFixed(1)} ms
            </div>
            <div className="text-[8px] text-sky-400/80 mt-0.5">
              Jitter: ±0.3ms
            </div>
          </div>
          <div className="p-2 rounded bg-[#020713]/80 border border-holo-cyan/20">
            <div className="text-[8px] text-holo-muted uppercase tracking-wider">
              PACKET LOSS
            </div>
            <div className="text-[13px] text-emerald-400 font-bold mt-0.5">
              0.00 %
            </div>
            <div className="text-[8px] text-slate-400 mt-0.5">Opus / 48kHz</div>
          </div>
        </div>
      </div>

      {/* Live Acoustic Harmonic Visualizer */}
      <div className="mt-4 pt-3 border-t border-holo-cyan/15">
        <div className="flex justify-between items-center mb-2">
          <span className="font-telemetry text-[9px] tracking-widest text-holo-muted uppercase">
            ACOUSTIC HARMONICS SPECTRUM
          </span>
          <span className="font-telemetry text-[9px] text-holo-cyan">
            24 BAND // STEREO
          </span>
        </div>
        <div className="h-12 flex items-end justify-between gap-1 px-1.5 bg-[#020612]/90 rounded border border-holo-cyan/20 p-1">
          {audioBars.map((height, i) => (
            <div
              key={i}
              className="w-1 bg-[#00f0ff] rounded-t transition-all duration-75 shadow-[0_0_6px_#00f0ff]"
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
