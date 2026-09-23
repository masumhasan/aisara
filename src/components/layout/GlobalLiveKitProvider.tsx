"use client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { LiveKitRoom } from "@livekit/components-react";
import "@livekit/components-styles";

export const LiveKitConnectionContext = createContext<{
  shouldConnect: boolean;
  setShouldConnect: (val: boolean) => void;
}>({ shouldConnect: false, setShouldConnect: () => {} });

export const useLiveKitConnection = () => useContext(LiveKitConnectionContext);

export const GlobalLiveKitProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");
  const [tokenError, setTokenError] = useState<string>("");
  const [shouldConnect, setShouldConnect] = useState(false);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/token?room=sara-room&username=Masum`);
        const data = await res.json();
        // Validate it's a real JWT string (not an empty object)
        if (typeof data.token === "string" && data.token.startsWith("ey")) {
          console.log("[SARA] Token fetched successfully");
          setToken(data.token);
        } else {
          console.error("[SARA] Invalid token received:", data);
          setTokenError("Token server returned an invalid token. Check backend.");
        }
      } catch (err) {
        console.error("[SARA] Failed to fetch token:", err);
        setTokenError("Cannot reach token server at " + process.env.NEXT_PUBLIC_API_URL);
      }
    };
    fetchToken();
  }, []);

  if (!token) {
    // We cannot render children that rely on LiveKit hooks until the Room exists.
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-black/90 text-[#a3b8cc] text-sm gap-3">
        {tokenError ? (
          <>
            <span className="text-red-400 font-bold">⚠ {tokenError}</span>
            <span className="text-slate-500 text-xs">Make sure <code className="text-cyan-400">npm run start</code> is running on port 3001</span>
          </>
        ) : (
          <span>Initializing SARA Core...</span>
        )}
      </div>
    );
  }

  return (
    <LiveKitConnectionContext.Provider value={{ shouldConnect, setShouldConnect }}>
      <LiveKitRoom
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        token={token}
        connect={shouldConnect}
        audio={false}
        video={false}
      >
        {children}
      </LiveKitRoom>
    </LiveKitConnectionContext.Provider>
  );
};
