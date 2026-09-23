"use client";

import React, { useEffect, useRef } from "react";
import { useChat, useVoiceAssistant, useTrackTranscription, useLocalParticipant } from "@livekit/components-react";
import { Track } from "livekit-client";

export const ConsoleRightPanel = ({
  toolSteps,
  toolInput,
  setToolInput,
}: {
  toolSteps: any[];
  toolInput: string;
  setToolInput: (val: string) => void;
}) => {
  const { chatMessages } = useChat();
  // agentTranscriptions: what SARA says (via TTS), updated reactively by LiveKit
  const { agentTranscriptions } = useVoiceAssistant();
  // User's voice-to-text via mic track
  const { localParticipant } = useLocalParticipant();
  const userMicTrack = localParticipant?.getTrackPublication(Track.Source.Microphone)?.track
    ? { participant: localParticipant, publication: localParticipant.getTrackPublication(Track.Source.Microphone)!, source: Track.Source.Microphone }
    : undefined;
  const { segments: userVoiceSegments } = useTrackTranscription(userMicTrack);
  const scrollRef = useRef<HTMLDivElement>(null);

  type FeedItem = {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: number;
    type: "chat" | "voice";
  };

  const feed: FeedItem[] = [
    // Text chat messages
    ...chatMessages.map((msg) => ({
      id: "chat-" + msg.id,
      text: msg.message,
      isUser: !!msg.from?.isLocal,
      timestamp: msg.timestamp,
      type: "chat" as const,
    })),
    // SARA's voice transcriptions (what she says)
    ...agentTranscriptions
      .filter((seg) => seg.final && seg.text.trim().length > 0)
      .map((seg) => ({
        id: "agent-" + seg.id,
        text: seg.text,
        isUser: false,
        timestamp: seg.firstReceivedTime,
        type: "voice" as const,
      })),
    // User's voice transcriptions (what user says via mic)
    ...userVoiceSegments
      .filter((seg) => seg.final && seg.text.trim().length > 0)
      .map((seg) => ({
        id: "user-voice-" + seg.id,
        text: seg.text,
        isUser: true,
        timestamp: seg.firstReceivedTime,
        type: "voice" as const,
      })),
  ].sort((a, b) => a.timestamp - b.timestamp);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [feed.length]);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 order-3">
      {/* RTC Transcript */}
      <div className="relative bg-[#040a16]/78 backdrop-blur-xl border border-holo-cyan/18 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,240,255,0.05)]">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-holo-cyan"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-holo-cyan"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-holo-cyan"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-holo-cyan"></span>

        <div className="flex items-center justify-between pb-2 mb-3 border-b border-holo-cyan/20">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-holo-cyan">forum</span>
            <span className="font-telemetry text-[11px] text-holo-cyan font-bold tracking-widest uppercase">RTC STREAM TRANSCRIPT</span>
          </div>
          <span className="font-telemetry text-[9px] text-slate-500">[CH-01]</span>
        </div>

        <div ref={scrollRef} className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
          {feed.length === 0 ? (
            <div className="text-slate-500 font-telemetry text-[10px] text-center mt-4">Waiting for messages...</div>
          ) : (
            feed.map((item) => {
              const time = new Date(item.timestamp).toISOString().substr(11, 8);
              return (
                <div
                  key={item.id}
                  className={`p-2.5 rounded ${item.isUser
                    ? "bg-[#030b1a]/80 border-l-2 border-sky-400"
                    : "bg-[#041224]/85 border-l-2 border-holo-cyan"
                  }`}
                >
                  <div className={`flex items-center justify-between font-telemetry text-[9px] ${item.isUser ? "text-sky-400" : "text-holo-cyan"} font-bold mb-1`}>
                    <span className="flex items-center gap-1.5">
                      {!item.isUser && <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>}
                      {item.isUser ? "USER // OP-01" : "SARA // ASSISTANT"}
                      {item.type === "voice" && (
                        <span className="text-[8px] opacity-60 font-normal">[VOICE]</span>
                      )}
                    </span>
                    <span className="text-slate-500">{time}</span>
                  </div>
                  <p className={`font-sans text-[12px] ${item.isUser ? "text-slate-200" : "text-cyan-200"} leading-relaxed`}>
                    {item.text}
                  </p>
                </div>
              );
            })
          )}
        </div>

        <div className="mt-3 pt-2 border-t border-holo-cyan/15 flex items-center justify-between font-telemetry text-[9px] text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[13px] text-holo-cyan">graphic_eq</span>
            SYNTH: 148 WPM
          </span>
          <span className="text-emerald-400 font-bold">CONF: 99.8%</span>
        </div>
      </div>

      {/* Tool Execution Bus */}
      <div className="relative bg-[#0e0a05]/82 backdrop-blur-xl border border-amber-500/28 rounded-lg p-4 shadow-[0_8px_32px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(245,158,11,0.06)]">
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500"></span>
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500"></span>
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500"></span>

        <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/30">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
            <span className="font-telemetry text-[11px] text-amber-400 font-bold tracking-widest uppercase">TOOL EXECUTION BUS</span>
          </div>
          <span className="px-2 py-0.5 rounded font-telemetry text-[9px] bg-amber-400/20 text-amber-400 border border-amber-400/40 font-bold tracking-wider">KINETIC</span>
        </div>

        <div className="space-y-2.5 font-telemetry text-[10px]">
          {toolSteps.map(step => (
            <div
              key={step.id}
              className={`p-2.5 rounded border ${step.active ? "bg-[#1c1205]/90 border-amber-500/50 shadow-[0_0_12px_rgba(245,158,11,0.2)]" : step.done ? "bg-[#130c04]/90 border-amber-500/30" : "bg-[#0d0903]/80 border-amber-500/20 opacity-75"}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-bold tracking-wider flex items-center gap-1.5 ${step.active ? "text-amber-300" : step.done ? "text-amber-400" : "text-amber-600"}`}>
                  {step.active && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>}
                  [ {step.id} ] {step.name}
                </span>
                <span className={`font-semibold ${step.done ? "text-emerald-400" : step.active ? "text-amber-400 animate-pulse" : "text-slate-500"}`}>{step.status}</span>
              </div>
              <div className={`text-[9px] ${step.active ? "text-amber-200" : step.done ? "text-slate-300" : "text-slate-400"}`}>{step.detail}</div>
            </div>
          ))}
        </div>

        {/* Terminal prompt */}
        <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center gap-2">
          <span className="font-telemetry text-[11px] text-amber-400 font-bold">❯</span>
          <input
            className="bg-transparent text-[11px] font-telemetry text-amber-300 placeholder:text-slate-600 focus:outline-none w-full"
            placeholder="Inject kernel command..."
            value={toolInput}
            onChange={e => setToolInput(e.target.value)}
          />
          <button className="text-amber-400 hover:text-amber-300 transition-all" title="Execute">
            <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

