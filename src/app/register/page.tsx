"use client";

import React from "react";
import Link from "next/link";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function RegisterPage() {
  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen relative flex items-center justify-center p-4 sm:p-6 w-full text-slate-200">
        <div className="flex flex-col w-full max-w-5xl mx-auto my-auto relative">
          
          <div className="absolute -top-12 -left-10 w-48 h-48 bg-holo-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-12 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative bg-[#090e17]/85 backdrop-blur-xl p-6 sm:p-10 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
            <div className="absolute top-0 left-0 w-4 h-4 bg-holo-cyan/40"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-holo-cyan/40"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-orange-400/40"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-400/40"></div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></span>
                  <span className="font-telemetry text-[9px] text-holo-cyan tracking-widest uppercase">NODE // PRV-0982-SARA</span>
                  <span className="font-telemetry text-[9px] text-slate-600">|</span>
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider">LATENCY: 0.12 MS</span>
                </div>
                <h1 className="font-sans text-2xl sm:text-3xl text-slate-200 tracking-wider uppercase font-light mt-2">
                  SARA <span className="text-holo-cyan font-bold">//</span> OPERATOR IDENTITY PROVISIONING
                </h1>
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#252a33] rounded-full shadow-inner border border-slate-800">
                <span className="material-symbols-outlined text-orange-400 text-[16px]">verified_user</span>
                <span className="font-telemetry text-[9px] text-orange-400 tracking-widest uppercase font-bold">ENCLAVE REGISTRATION</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-1 p-1 bg-[#171c25] rounded-lg mb-10 max-w-md border border-slate-800">
              <Link href="/login" className="py-2 px-4 rounded text-center font-telemetry text-[11px] text-slate-400 hover:text-holo-cyan transition-colors uppercase tracking-wider flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[14px]">lock_open</span>
                Operator Login
              </Link>
              <button className="py-2 px-4 rounded bg-[#30353e] text-center font-telemetry text-[11px] text-holo-cyan shadow-md uppercase tracking-wider flex items-center justify-center gap-2" type="button">
                <span className="material-symbols-outlined text-[14px]">person_add</span>
                Register New Operator
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <form className="lg:col-span-8 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider" htmlFor="callsign">
                        [01] Full Name / Call-Sign
                      </label>
                      <span className="font-telemetry text-[9px] text-sky-400">HEX:0x419</span>
                    </div>
                    <div className="relative flex items-center bg-[#171c25] focus-within:bg-[#1b2029] rounded-lg px-4 py-2 shadow-inner transition-all border border-slate-800/50 focus-within:border-holo-cyan/50">
                      <span className="font-telemetry text-[12px] text-holo-cyan select-none mr-2">❯_</span>
                      <input className="w-full bg-transparent font-sans text-[13px] text-slate-200 placeholder:text-slate-600 focus:outline-none" id="callsign" placeholder="e.g. CDR. K. VANCE // 'CYPHER'" required type="text" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider" htmlFor="email">
                        [02] Official Email Address
                      </label>
                      <span className="font-telemetry text-[9px] text-slate-500">SEC-NET ONLY</span>
                    </div>
                    <div className="relative flex items-center bg-[#171c25] focus-within:bg-[#1b2029] rounded-lg px-4 py-2 shadow-inner transition-all border border-slate-800/50 focus-within:border-holo-cyan/50">
                      <span className="material-symbols-outlined text-slate-600 text-[16px] mr-2">alternate_email</span>
                      <input className="w-full bg-transparent font-sans text-[13px] text-slate-200 placeholder:text-slate-600 focus:outline-none" id="email" placeholder="callsign@command.sara.defense" required type="email" />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider">
                      [03] Security Clearance Role
                    </label>
                    <span className="font-telemetry text-[9px] text-orange-400">TIER 4 ACCREDITATION</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="cursor-pointer">
                      <input defaultChecked className="peer sr-only" name="clearance" type="radio" />
                      <div className="flex flex-col p-2 bg-[#171c25] peer-checked:bg-[#252a33] rounded-lg peer-checked:shadow-sm transition-all border border-slate-800/50 peer-checked:border-holo-cyan/50">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[12px] text-holo-cyan font-medium">Flight Commander</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                        </div>
                        <span className="font-telemetry text-[9px] text-slate-500 mt-1">OP_CLASS: ALPHA-1</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="clearance" type="radio" />
                      <div className="flex flex-col p-2 bg-[#171c25] peer-checked:bg-[#252a33] rounded-lg peer-checked:shadow-sm transition-all border border-slate-800/50 peer-checked:border-holo-cyan/50">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[12px] text-slate-300 font-medium">Systems Architect</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        </div>
                        <span className="font-telemetry text-[9px] text-slate-500 mt-1">OP_CLASS: CORE-SYS</span>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input className="peer sr-only" name="clearance" type="radio" />
                      <div className="flex flex-col p-2 bg-[#171c25] peer-checked:bg-[#252a33] rounded-lg peer-checked:shadow-sm transition-all border border-slate-800/50 peer-checked:border-holo-cyan/50">
                        <div className="flex items-center justify-between">
                          <span className="font-telemetry text-[12px] text-slate-300 font-medium">SecOps Lead</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        </div>
                        <span className="font-telemetry text-[9px] text-slate-500 mt-1">OP_CLASS: CIPHER-9</span>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider" htmlFor="master-pass">
                        [04] Master Password
                      </label>
                      <span className="font-telemetry text-[9px] text-sky-400">SHA-512 SALTED</span>
                    </div>
                    <div className="relative flex items-center bg-[#171c25] focus-within:bg-[#1b2029] rounded-lg px-4 py-2 shadow-inner transition-all border border-slate-800/50 focus-within:border-holo-cyan/50">
                      <input className="w-full bg-transparent font-sans text-[13px] text-slate-200 placeholder:text-slate-600 focus:outline-none" id="master-pass" required type="password" defaultValue="V@Nc3*OrB1T#2094" />
                      <button className="text-slate-600 hover:text-slate-300 transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                    </div>
                    <div className="bg-[#090e17] p-1.5 rounded flex flex-col gap-1 mt-1 border border-slate-800">
                      <div className="flex justify-between items-center text-telemetry font-telemetry text-[9px]">
                        <span className="text-slate-500">STRENGTH EVALUATION</span>
                        <span className="text-holo-cyan tracking-wider">Entropy Score: 98.4%</span>
                      </div>
                      <div className="w-full h-1 bg-[#171c25] rounded-full overflow-hidden flex">
                        <div className="w-[98.4%] h-full bg-gradient-to-r from-sky-400 via-holo-cyan to-blue-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-telemetry text-[10px] text-slate-400 uppercase tracking-wider" htmlFor="confirm-pass">
                        [05] Confirm Password
                      </label>
                      <span className="font-telemetry text-[9px] text-slate-500">PARITY CHECK</span>
                    </div>
                    <div className="relative flex items-center bg-[#171c25] focus-within:bg-[#1b2029] rounded-lg px-4 py-2 shadow-inner transition-all border border-slate-800/50 focus-within:border-holo-cyan/50">
                      <input className="w-full bg-transparent font-sans text-[13px] text-slate-200 placeholder:text-slate-600 focus:outline-none" id="confirm-pass" required type="password" defaultValue="V@Nc3*OrB1T#2094" />
                      <span className="material-symbols-outlined text-holo-cyan text-[18px]">check_circle</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 px-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan"></span>
                      <span className="font-telemetry text-[9px] text-slate-500">CRYPTOGRAPHIC DIGEST MATCHED</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-[#171c25] rounded-lg mt-1 border border-slate-800">
                  <label className="flex items-start gap-4 cursor-pointer select-none">
                    <input defaultChecked className="mt-0.5 accent-holo-cyan rounded cursor-pointer" type="checkbox" />
                    <span className="font-sans text-[12px] text-slate-400 leading-relaxed">
                      I agree to the <span className="text-sky-400 underline cursor-pointer hover:text-holo-cyan transition-colors">SARA Autonomous Directive</span> &amp; <span className="text-sky-400 underline cursor-pointer hover:text-holo-cyan transition-colors">Ephemeral Privacy Charter</span>. All cognitive telemetry is cryptographically sealed and zero-knowledge logged.
                    </span>
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
                  <button className="w-full sm:w-auto relative group overflow-hidden px-8 py-3 bg-orange-500/20 text-orange-400 rounded-lg font-sans text-[16px] font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,184,105,0.2)] hover:shadow-[0_0_25px_rgba(255,184,105,0.4)] hover:bg-orange-500/30 active:scale-[0.99] flex items-center justify-center gap-2 border border-orange-500/40" type="submit">
                    <span className="relative z-10 material-symbols-outlined text-[18px]">fingerprint</span>
                    <span className="relative z-10">Provision Operator Identity [REGISTER]</span>
                  </button>
                  <Link href="/login" className="font-telemetry text-[11px] text-slate-500 hover:text-holo-cyan transition-colors tracking-wide flex items-center gap-2">
                    Already have credentials? Return to Login
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </form>
              
              <div className="lg:col-span-4 flex flex-col gap-6 justify-between bg-[#171c25]/80 p-6 rounded-xl shadow-inner relative overflow-hidden border border-slate-800">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-telemetry text-[9px] text-holo-cyan tracking-widest uppercase">SYS.STATUS // ACTIVE</span>
                    <span className="font-telemetry text-[9px] text-slate-500">PORT 8820</span>
                  </div>
                  
                  <div className="relative w-full h-36 bg-[#090e17] rounded-lg overflow-hidden flex items-center justify-center p-2 border border-slate-800">
                    <svg className="w-full h-full text-holo-cyan/20" fill="none" viewBox="0 0 200 100">
                      <path d="M0,50 L30,50 L40,20 L50,80 L60,40 L70,60 L80,50 L120,50 L130,10 L140,90 L150,50 L200,50" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1.5"></path>
                      <path d="M0,50 L30,50 L40,30 L50,70 L60,45 L70,55 L80,50 L120,50 L130,25 L140,75 L150,50 L200,50" fill="none" opacity="0.8" stroke="#00f0ff" strokeWidth="1.5"></path>
                      <circle cx="130" cy="25" fill="#ffb869" r="3"></circle>
                      <circle cx="50" cy="70" fill="#00f0ff" r="3"></circle>
                    </svg>
                    <div className="absolute bottom-2 left-3 font-telemetry text-[9px] text-slate-500">
                      CARRIER FREQ: 1420.405 MHz
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="font-telemetry text-[11px] text-slate-200 uppercase tracking-wider font-semibold">Enclave Key Handshake</span>
                    <p className="font-sans text-[12px] text-slate-400 leading-relaxed">
                      Hardware enclave generates dual-custody sovereign keys on successful credential synthesis. Physical token binding is deferred to initial login epoch.
                    </p>
                  </div>
                </div>
                
                <div className="p-3 bg-[#090e17] rounded-lg flex flex-col gap-1.5 border border-slate-800">
                  <div className="flex items-center justify-between text-telemetry font-telemetry text-[9px]">
                    <span className="text-orange-400 uppercase tracking-wider">NEURAL COHERENCE</span>
                    <span className="text-slate-200">99.98% OPTIMAL</span>
                  </div>
                  <div className="w-full h-1 bg-[#171c25] rounded-full overflow-hidden">
                    <div className="w-[99.98%] h-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></div>
                  </div>
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase tracking-wider mt-0.5">SARA AUTONOMY SUITE // BUILD v4.11</span>
                </div>
              </div>
              
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 mt-6 text-telemetry font-telemetry text-[9px] text-slate-500 border-t border-slate-800/50">
              <div className="flex items-center gap-4">
                <span>SECURITY ATTESTATION: HSM-2048-FIPS</span>
                <span className="hidden sm:inline">|</span>
                <span>LATERAL ENCRYPTION: ACTIVE</span>
              </div>
              <div>
                <span>AUTHENTICATION DOMAIN: US-ORBIT-WEST</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
