"use client";

import React from "react";

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden">
      {/* Primary cyan/blue ambient orb */}
      <div className="w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-primary-container/10 via-secondary-container/5 to-transparent blur-[140px] transform -translate-y-12 animate-pulse" />
      {/* Warm amber secondary glow */}
      <div className="absolute w-[440px] h-[440px] rounded-full bg-tertiary-fixed-dim/10 blur-[100px] transform translate-y-16" />
      {/* Subtle grid mesh background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
};
