import React from "react";
import Link from "next/link";

export const GlobalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#050A10] border-t border-amber-500/20 mt-auto z-40 text-slate-400 font-sans shadow-2xl">
      <div className="px-8 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-[10px] text-slate-500">
          
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-slate-300 font-semibold">
                Developed With 🤍 and ☕ By <a href="https://masumhasan.web.app/" target="_blank" rel="noopener noreferrer" className="text-cyan-400/90 hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4 font-bold">Nur Hasan Masum</a> © 2026
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400">PATENT PENDING // REF: US-AURA-2025-0982-SARA</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
            </div>
            <div className="text-amber-400/80 font-bold uppercase tracking-wider">
              UNAUTHORIZED DUPLICATION FORBIDDEN UNDER TITAN-IV DIRECTIVE
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4">Privacy<br/>Charter</a>
            <a href="#" className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4">Terms of<br/>Access</a>
            <a href="#" className="hover:text-amber-300 transition-colors underline decoration-slate-600 underline-offset-4">Cookie<br/>Cryptography</a>
            <span className="text-slate-600 h-8 border-l border-slate-600 mx-2"></span>
            <div className="flex flex-col">
              <span className="text-cyan-400/80 font-mono font-bold">HASH:</span>
              <span className="text-cyan-400/80 font-mono">0x4A19..F89A</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};
