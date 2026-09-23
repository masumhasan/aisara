"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      window.location.href = "/briefing";
    }, 1800);
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen relative flex items-center justify-center p-4 sm:p-6 w-full text-slate-200">
        <div className="flex flex-col w-full items-center justify-center">
          
          <div className="relative w-full max-w-xl mx-auto">
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-holo-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-orange-400/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative bg-[#090e17]/85 backdrop-blur-2xl p-6 sm:p-10 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              
              <div className="absolute top-0 left-0 w-3 h-3 bg-holo-cyan/80"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-holo-cyan/80"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-orange-400/80"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-400/80"></div>
              
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-y-2 pb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></div>
                  <span className="font-telemetry text-[9px] text-holo-cyan tracking-widest uppercase">SYS.AUTH // SARA-OS 4.9.1</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
                  <span className="material-symbols-outlined text-[14px] text-orange-400">verified_user</span>
                  <span className="font-telemetry text-[9px] text-orange-400 uppercase tracking-wider font-bold">LEVEL-4 SECURE ENTRY</span>
                </div>
              </div>
              
              <div className="relative z-10 space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <span className="font-telemetry text-[10px] text-slate-500 tracking-widest uppercase">TERMINAL DIRECTORY</span>
                  <span className="font-telemetry text-[10px] text-slate-600">::</span>
                  <span className="font-telemetry text-[10px] text-sky-400 tracking-wider">NODE_GATEWAY_V9</span>
                </div>
                <h1 className="font-sans text-2xl sm:text-3xl text-holo-cyan uppercase font-light tracking-wide flex items-center justify-between mt-1">
                  <span>SARA // HUMAN ACCESS</span>
                  <span className="font-telemetry text-[10px] text-slate-400 font-normal">OP.REV_24</span>
                </h1>
                <p className="font-sans text-[13px] text-slate-400 mt-2 leading-relaxed">
                  Provide authenticated neuro-synaptic or cryptographic credentials to interface with core cognitive directives.
                </p>
              </div>
              
              <div className="relative z-10 mt-6 p-1 bg-[#171c25]/80 rounded-lg flex items-center gap-1 border border-slate-800">
                <button className="flex-1 py-2 px-4 rounded text-center font-telemetry text-[11px] uppercase tracking-wider transition-all duration-300 bg-[#252a33] text-holo-cyan shadow-sm flex items-center justify-center gap-2 border border-slate-700/50" type="button">
                  <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                  Operator Login
                </button>
                <Link href="/register" className="flex-1 py-2 px-4 rounded text-center font-telemetry text-[11px] uppercase tracking-wider transition-all duration-300 text-slate-400 hover:text-slate-200 hover:bg-[#1b2029] flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  Register New Operator
                </Link>
              </div>
              
              <form className="relative z-10 mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-500 uppercase tracking-wider">
                    <label className="flex items-center gap-1" htmlFor="operator-handle">
                      <span className="text-holo-cyan">01 //</span> OPERATOR HANDLE OR ENCRYPTED EMAIL
                    </label>
                    <span className="text-slate-600">SYNTAX: ID@SARA.ORB</span>
                  </div>
                  <div className="relative group bg-[#171c25] rounded-lg transition-colors focus-within:bg-[#1b2029] border border-slate-800/50 focus-within:border-holo-cyan/50 shadow-inner">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-holo-cyan">
                      <span className="material-symbols-outlined text-[18px]">person_pin</span>
                    </div>
                    <input className="w-full bg-transparent py-2.5 pl-11 pr-4 text-slate-200 font-telemetry text-[12px] tracking-wider placeholder:text-slate-600 focus:outline-none" id="operator-handle" placeholder="e.g., cmdr.vance.kane@sara.nexus" required type="text" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden group-focus-within:block pointer-events-none">
                      <span className="font-telemetry text-[9px] text-holo-cyan tracking-tighter">[ACTIVE]</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-500 uppercase tracking-wider">
                    <label className="flex items-center gap-1" htmlFor="operator-passkey">
                      <span className="text-orange-400">02 //</span> QUANTUM CIPHER / PASSKEY
                    </label>
                    <span className="text-slate-600">AES-GCM VALIDATED</span>
                  </div>
                  <div className="relative group bg-[#171c25] rounded-lg transition-colors focus-within:bg-[#1b2029] border border-slate-800/50 focus-within:border-holo-cyan/50 shadow-inner">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-orange-400">
                      <span className="material-symbols-outlined text-[18px]">vpn_key</span>
                    </div>
                    <input className="w-full bg-transparent py-2.5 pl-11 pr-11 text-slate-200 font-telemetry text-[14px] tracking-widest placeholder:text-slate-600 focus:outline-none" id="operator-passkey" placeholder="••••••••••••••••" required type={showPassword ? "text" : "password"} />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 transition-colors" onClick={() => setShowPassword(!showPassword)} title="Toggle cipher visibility" type="button">
                      <span className="material-symbols-outlined text-[18px]">{showPassword ? "visibility_off" : "visibility"}</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer select-none group">
                    <div className="relative flex items-center">
                      <input defaultChecked className="peer sr-only" id="biometric-remember" type="checkbox" />
                      <div className="w-4 h-4 bg-[#252a33] border border-slate-700/50 rounded transition-all peer-checked:bg-holo-cyan peer-checked:border-holo-cyan flex items-center justify-center">
                        <span className="material-symbols-outlined text-[12px] text-[#090e17] opacity-0 peer-checked:opacity-100 font-bold">check</span>
                      </div>
                    </div>
                    <span className="font-sans text-[12px] text-slate-400 group-hover:text-slate-200 transition-colors">
                      Remember biometric session
                    </span>
                  </label>
                  <a className="font-telemetry text-[10px] text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1" href="#">
                    <span>Forgot Passkey?</span>
                    <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
                  </a>
                </div>
                
                <div className="pt-2">
                  <button 
                    disabled={isAuthenticating}
                    className="relative w-full py-3 px-6 rounded-lg bg-gradient-to-r from-orange-500/80 via-orange-400/90 to-orange-500/80 text-[#090e17] font-sans text-[15px] uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,184,105,0.3)] hover:shadow-[0_0_25px_rgba(255,184,105,0.5)] hover:brightness-110 flex items-center justify-center gap-3 group overflow-hidden" 
                    type="submit"
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    {isAuthenticating ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">sync</span>
                        <span>TRANSMITTING NEURAL KEY...</span>
                      </>
                    ) : (
                      <>
                        <span className="font-telemetry text-[10px] font-bold opacity-80">[EXEC // 01]</span>
                        <span>Sign In via Operator Auth</span>
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">bolt</span>
                      </>
                    )}
                  </button>
                </div>
                
                <div className="relative flex items-center justify-center pt-2">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                  <span className="absolute px-3 bg-[#090e17] font-telemetry text-[9px] uppercase tracking-widest text-slate-500">
                    OR AUTHENTICATE WITH
                  </span>
                </div>
                
                <div className="space-y-2 pt-2">
                  <Link href="/verify" className="w-full py-2.5 px-4 rounded-lg bg-[#252a33]/90 hover:bg-[#343943] text-holo-cyan font-telemetry text-[11px] uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-sm border border-slate-700/50" type="button">
                    <span className="material-symbols-outlined text-[16px] text-holo-cyan">pin</span>
                    <span>OTP / Passcode Instant Login</span>
                    <span className="font-telemetry text-[9px] text-slate-400 px-1.5 py-0.5 rounded bg-[#171c25]">TIMED 60S</span>
                  </Link>
                  
                  <div className="text-center pt-2">
                    <button className="inline-flex items-center gap-2 font-telemetry text-[10px] text-slate-400 hover:text-holo-cyan transition-colors py-1 px-2 rounded hover:bg-[#171c25]" type="button">
                      <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                      <span>Return to Neural Biometric Auth</span>
                      <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                    </button>
                  </div>
                </div>
              </form>
              
              <div className="relative z-10 mt-8 pt-6 bg-[#171c25]/60 rounded-lg p-4 border border-slate-800/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider">TELEMETRY CARRIER SIGNAL</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                    <span className="font-telemetry text-[9px] text-sky-400">OPTIMAL (14ms)</span>
                  </div>
                </div>
                
                <div className="flex items-end justify-between h-5 gap-1 px-1">
                  {[40, 60, 100, 60, 80, 40, 100, 80, 60, 40, 80, 100, 60, 40, 80, 40, 100, 60].map((h, i) => (
                    <div 
                      key={i} 
                      className={`w-1 rounded-full ${i % 3 === 0 ? 'bg-holo-cyan/70' : (i % 2 === 0 ? 'bg-sky-400/80' : 'bg-orange-400/70')} ${h === 100 ? 'animate-pulse' : ''}`}
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10 mt-6 pt-2 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#171c25]/80 text-slate-500 border border-slate-800/50">
                  <span className="material-symbols-outlined text-[12px] text-holo-cyan">lock</span>
                  <span className="font-telemetry text-[9px] tracking-widest text-slate-400 font-medium">
                    256-BIT QUANTUM ENCRYPTION // ZERO-KNOWLEDGE PROTOCOL
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
