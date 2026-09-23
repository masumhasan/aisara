"use client";

import React, { useState } from "react";
import { useLiveKitConnection } from "./GlobalLiveKitProvider";
import { useTrackToggle, useConnectionState, useChat } from "@livekit/components-react";
import { Track, ConnectionState } from "livekit-client";

export const CallControlBar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const { shouldConnect, setShouldConnect } = useLiveKitConnection();
  
  const connectionState = useConnectionState();
  
  React.useEffect(() => {
    console.log("[LiveKit] Connection State Changed:", connectionState);
  }, [connectionState]);

  const { toggle: toggleMic, enabled: isMicEnabled } = useTrackToggle({ source: Track.Source.Microphone });
  const { toggle: toggleCam, enabled: isCamEnabled } = useTrackToggle({ source: Track.Source.Camera });
  const { send } = useChat();

  const isConnected = connectionState === ConnectionState.Connected;

  // Auto-enable mic once connected to open the WebRTC publisher peer connection
  // (required for the data channel that powers useChat to work)
  React.useEffect(() => {
    if (isConnected && !isMicEnabled) {
      toggleMic();
    }
  }, [isConnected]);

  const handleMicClick = () => {
    toggleMic();
  };

  const handleSendChat = async () => {
    if (!chatInput.trim()) return;
    if (!isConnected) {
      alert(`Cannot send message. Room is currently: ${connectionState}`);
      return;
    }
    try {
      await send(chatInput);
      setChatInput("");
      setIsChatOpen(false);
    } catch (err: any) {
      console.error("Failed to send chat:", err);
      alert("Failed to send: " + (err.message || String(err)));
    }
  };

  // In the future, we can read from a global "isConversationActive" context here
  // and return null if no conversation is active.

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4">
      {/* Chat Input Popup */}
      {isChatOpen && (
        <div className="pointer-events-auto mb-4 w-full max-w-lg bg-[#030915]/95 backdrop-blur-2xl border border-holo-cyan/30 rounded-2xl p-2 flex items-center gap-2 shadow-[0_0_30px_rgba(0,0,0,0.9),inset_0_0_15px_rgba(0,240,255,0.05)] transition-all animate-in fade-in slide-in-from-bottom-4">
          <input 
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder={isConnected ? "Type something..." : "Connecting..."}
            disabled={!isConnected}
            className="flex-1 bg-transparent border-none text-slate-200 placeholder:text-slate-500 focus:outline-none px-3 font-sans text-[14px]"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendChat();
              }
            }}
          />
          <button 
            className="w-9 h-9 rounded-full bg-[#0d1c33] hover:bg-holo-cyan/20 text-slate-400 hover:text-holo-cyan flex items-center justify-center transition-all"
            onClick={handleSendChat}
          >
            <span className="material-symbols-outlined text-[17px]">send</span>
          </button>
        </div>
      )}

      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-[#030915]/85 backdrop-blur-2xl border border-holo-cyan/40 shadow-[0_0_30px_rgba(0,240,255,0.22),inset_0_0_15px_rgba(0,240,255,0.1)]">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
          title="Audio Output Device"
        >
          <span className="material-symbols-outlined text-[19px]">volume_up</span>
        </button>
        <button
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isCamEnabled ? 'text-holo-cyan bg-holo-cyan/20' : 'text-slate-300 hover:text-holo-cyan hover:bg-[#07152b]'}`}
          title="Toggle Optical Vision Feed"
          onClick={() => {
            if (shouldConnect) toggleCam();
          }}
        >
          <span className="material-symbols-outlined text-[19px]">videocam</span>
        </button>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
          title="Share Screen Stream"
        >
          <span className="material-symbols-outlined text-[19px]">screen_share</span>
        </button>

        {/* Main Glowing Voice Mic Button */}
        <button
          onClick={handleMicClick}
          className={`relative w-14 h-14 rounded-full font-bold flex items-center justify-center transition-all ${isConnected && isMicEnabled ? 'bg-gradient-to-tr from-[#00b4d8] to-[#00f0ff] text-[#020409] shadow-[0_0_24px_rgba(0,240,255,0.7)] hover:scale-105' : 'bg-[#0d1c33] text-slate-400 hover:text-holo-cyan shadow-none'}`}
          title={isConnected && isMicEnabled ? "Voice Input Active" : "Click to Connect & Speak"}
        >
          <span className="material-symbols-outlined text-[24px]">
            {isConnected && !isMicEnabled ? "mic_off" : "mic"}
          </span>
        </button>

        <button
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isChatOpen ? 'text-holo-cyan bg-holo-cyan/20 border border-holo-cyan/40' : 'text-slate-300 hover:text-holo-cyan hover:bg-[#07152b]'}`}
          title="Realtime Transcript Feed"
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <span className="material-symbols-outlined text-[19px]">chat_bubble</span>
        </button>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-holo-cyan hover:bg-[#07152b] transition-all"
          title="Sub-agent Tool Registry"
        >
          <span className="material-symbols-outlined text-[19px]">data_object</span>
        </button>
        
        <div className="h-6 w-px bg-holo-cyan/30 mx-1"></div>
        
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-red-400 border border-red-500/40 hover:bg-red-500/20 hover:text-red-200 transition-all shadow-[0_0_10px_rgba(255,77,77,0.2)]"
          title="Terminate Session"
          onClick={() => setShouldConnect(false)}
        >
          <span className="material-symbols-outlined text-[19px]">call_end</span>
        </button>
      </div>
    </div>
  );
};
