"use client";

import React from "react";

export const OpticalSensorFeed = () => {
  return (
    <div className="hud-panel rounded-lg p-3.5 mt-4">
      <div className="reticle-corner-tl"></div>
      <div className="reticle-corner-tr"></div>
      <div className="reticle-corner-bl"></div>
      <div className="reticle-corner-br"></div>
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-holo-cyan/20">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[15px] text-holo-cyan">
            videocam
          </span>
          <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">
            OPTICAL SENSOR FEED
          </span>
        </div>
        <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-holo-cyan/15 text-holo-cyan border border-holo-cyan/40 animate-pulse font-semibold">
          FEED ACTIVE
        </span>
      </div>

      {/* Optical Sensor Viewport */}
      <div className="relative h-44 rounded overflow-hidden bg-[#010308] border border-holo-cyan/30 flex items-center justify-center">
        {/* We can use a standard placeholder or the image URL from the prototype */}
        <img
          alt="Futuristic Heads-Up Display target scanning code"
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-screen contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDba4PJUhLZb5_sJRYVRVdYVdAEC-tC44o4o7hHGwXpezaLaW_8I1ungtiefHskTXO9wprzSm8POnPBrcYGRZ56xCVcuB72r1Rm6siBL3vfQh0ShIG-Zg5Wom0EijRYa_1imVy6aTraiyc5Aqs5s-0zk9UOkZ990UXfl8w-gpx9PYhgxA6TKt3UCNF6ClZgH8Z75bi0c6vxK1AXPa6Izuppwo_Rx_7VpfS9WL1rOV904ngNGQ-3JB-j"
        />

        {/* High-Tech Crosshair Target Lock Overlay */}
        <div className="absolute inset-0 p-3 pointer-events-none flex flex-col justify-between">
          <div className="flex justify-between font-telemetry text-[9px] text-holo-cyan/90 font-bold">
            <span>FOV: 98.4° WIDE</span>
            <span className="text-emerald-400">CONF: 99.4%</span>
          </div>
          <div className="self-center flex flex-col items-center justify-center relative">
            <div
              className="w-16 h-16 rounded-full border border-dashed border-holo-cyan/60 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div className="w-10 h-10 rounded-full border border-holo-cyan/40 absolute"></div>
            <div className="absolute w-2 h-2 rounded-full bg-holo-cyan shadow-[0_0_10px_#00f0ff]"></div>
            <div className="absolute -top-4 font-telemetry text-[8px] text-holo-cyan tracking-widest bg-[#02050e]/80 px-1 border border-holo-cyan/40">
              [TARGET_LOCK]
            </div>
          </div>
          <div className="flex justify-between font-telemetry text-[9px] text-slate-300">
            <span>TRACK: DESKTOP_STREAM</span>
            <span className="text-holo-cyan font-bold">60 FPS</span>
          </div>
        </div>

        {/* Floating Recognized Bounding Box */}
        <div className="absolute top-5 right-4 border border-holo-amber bg-holo-amber/15 px-1.5 py-0.5 rounded text-[8px] font-telemetry text-holo-amber font-semibold tracking-tight shadow-[0_0_10px_rgba(245,158,11,0.3)]">
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
  );
};
