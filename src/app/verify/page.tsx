"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

export default function VerifyPage() {
  const [secondsRemaining, setSecondsRemaining] = useState(298);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (val.length >= 1) {
      e.target.value = val.slice(-1);
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !(e.target as HTMLInputElement).value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (/^\d+$/.test(pastedData)) {
      pastedData.split('').slice(0, 6).forEach((char, i) => {
        if (inputsRef.current[i]) {
          inputsRef.current[i]!.value = char;
        }
      });
      const targetIndex = Math.min(pastedData.length, 5);
      inputsRef.current[targetIndex]?.focus();
    }
  };

  const handleResend = () => {
    setSecondsRemaining(300);
    inputsRef.current.forEach(input => {
      if (input) input.value = '';
    });
    inputsRef.current[0]?.focus();
  };

  const formatTime = (totalSeconds: number) => {
    if (totalSeconds <= 0) return 'EXPIRED';
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-screen relative flex items-center justify-center p-4 sm:p-6 w-full text-slate-200">
        <div className="flex flex-col w-full max-w-2xl mx-auto my-auto relative">
          
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-holo-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative bg-[#171c25]/95 backdrop-blur-xl rounded-xl shadow-2xl p-6 sm:p-10 overflow-hidden border border-slate-800">
            <div className="absolute top-0 left-0 w-3 h-3 bg-orange-400/80"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400/80"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-orange-400/80"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-orange-400/80"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></div>
                <span className="font-telemetry text-[9px] text-orange-400 uppercase tracking-widest font-bold">
                  SARA // 2FA CHALLENGE &amp; OTP VERIFICATION
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-500/15 rounded text-orange-400 border border-orange-500/20">
                <span className="material-symbols-outlined text-[14px]">shield_lock</span>
                <span className="font-telemetry text-[9px] uppercase tracking-wider font-bold">AWAITING DISPATCH SIGNATURE</span>
              </div>
            </div>
            
            <div className="mt-2 bg-[#090e17]/80 rounded-lg p-4 relative overflow-hidden border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-1.5 bg-[#171c25] rounded text-orange-400 mt-0.5 border border-slate-700/50">
                  <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-telemetry text-[10px] text-slate-500 uppercase tracking-wider">SECURE PAYLOAD ROUTED</span>
                  <p className="font-sans text-[13px] text-slate-200 mt-0.5 break-words">
                    A 6-digit cryptographic verification code was dispatched to operator terminal:
                    <span className="font-telemetry text-[12px] text-orange-400 font-medium ml-1">vance.j@command.mil</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-2 px-1">
                <span className="font-telemetry text-[9px] text-slate-500 uppercase tracking-widest">CIPHER-INPUT-VECTOR</span>
                <span className="font-telemetry text-[9px] text-holo-cyan uppercase">BIT-DEPTH: 256-SHA3</span>
              </div>
              
              <div className="grid grid-cols-6 gap-2 sm:gap-4 w-full">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="relative flex items-center justify-center h-14 sm:h-16 bg-[#252a33] rounded-lg shadow-inner focus-within:bg-[#343943] transition-all duration-200 border border-slate-700/50">
                    <input 
                      ref={(el) => { inputsRef.current[index] = el; }}
                      className="w-full h-full text-center bg-transparent text-orange-300 font-telemetry text-[20px] focus:outline-none caret-transparent select-none" 
                      inputMode="numeric" 
                      maxLength={1} 
                      type="text" 
                      autoFocus={index === 0}
                      onChange={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      onPaste={index === 0 ? handlePaste : undefined}
                    />
                    <div className="absolute bottom-1 w-5 h-0.5 bg-slate-500/30 transition-all duration-150"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#090e17]/60 px-4 py-2 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="material-symbols-outlined text-[16px] text-orange-400 animate-spin">timelapse</span>
                <span className="font-telemetry text-[10px] uppercase tracking-wider">
                  TOKEN EXPIRES IN <span className="font-telemetry text-[12px] text-orange-400 font-semibold">{formatTime(secondsRemaining)}</span>
                </span>
              </div>
              <button 
                className="group flex items-center gap-1.5 text-orange-500/80 hover:text-orange-400 transition-colors" 
                onClick={handleResend}
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] group-hover:rotate-180 transition-transform duration-500">replay</span>
                <span className="font-telemetry text-[10px] tracking-wider uppercase font-semibold underline decoration-orange-500/40 underline-offset-4 group-hover:decoration-orange-400">Resend Code</span>
              </button>
            </div>
            
            <div className="mt-8">
              <span className="font-telemetry text-[9px] text-slate-500 uppercase tracking-widest block mb-2">
                AUXILIARY CHANNEL OVERRIDE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-2 bg-[#171c25] hover:bg-[#252a33] rounded-lg text-left transition-colors group border border-slate-800/80" type="button">
                  <div className="p-2 bg-[#090e17] rounded text-holo-cyan group-hover:text-sky-400 transition-colors border border-slate-800">
                    <span className="material-symbols-outlined text-[20px]">smart_display</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-[14px] text-slate-200 font-medium truncate">Authenticator App (TOTP)</span>
                    <span className="font-telemetry text-[9px] text-slate-500 truncate uppercase">RSA-Sync Token Key</span>
                  </div>
                </button>
                <button className="flex items-center gap-4 p-2 bg-[#171c25] hover:bg-[#252a33] rounded-lg text-left transition-colors group border border-slate-800/80" type="button">
                  <div className="p-2 bg-[#090e17] rounded text-blue-400 group-hover:text-blue-300 transition-colors border border-slate-800">
                    <span className="material-symbols-outlined text-[20px]">key</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-sans text-[14px] text-slate-200 font-medium truncate">SMS Hardware Token</span>
                    <span className="font-telemetry text-[9px] text-slate-500 truncate uppercase">Encrypted Sat-Burst</span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/briefing" className="w-full relative py-4 px-6 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-400 font-sans text-[16px] uppercase tracking-wider flex items-center justify-center gap-4 shadow-xl transition-all duration-200 active:scale-[0.99] group overflow-hidden border border-orange-500/40 font-bold" type="button">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 material-symbols-outlined text-[20px]">verified_user</span>
                <span className="relative z-10">Verify &amp; Initialize Session [AUTHORIZE]</span>
              </Link>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Link href="/login" className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors py-1">
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                  <span className="font-telemetry text-[10px] uppercase tracking-wider">Back to Operator Login</span>
                </Link>
                <button className="flex items-center gap-1.5 text-rose-500 hover:text-rose-400 transition-colors py-1" type="button">
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  <span className="font-telemetry text-[10px] uppercase tracking-wider font-semibold">Emergency Terminal Bypass</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 pt-4 flex items-center justify-between text-slate-500 border-t border-slate-800">
              <span className="font-telemetry text-[9px] uppercase">NODE // NEURAL-VAL-09</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                <span className="font-telemetry text-[9px] uppercase ml-1">STATUS: SYNCED</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </ConsoleLayout>
  );
}
