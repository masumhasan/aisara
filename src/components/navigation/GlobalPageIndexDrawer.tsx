"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ALL_PAGES = [
  {
    group: "Core HUD",
    items: [
      { href: "/", label: "Dashboard", icon: "home" },
      { href: "/command", label: "Command Center", icon: "satellite_alt" },
      { href: "/hud", label: "Holo-HUD Cockpit", icon: "screen_rotation_alt" },
      { href: "/console", label: "Neural Console", icon: "terminal" },
    ],
  },
  {
    group: "Intelligence",
    items: [
      { href: "/briefing", label: "Mission Briefing", icon: "assignment" },
      { href: "/intel", label: "Intelligence Map", icon: "travel_explore" },
      { href: "/mission", label: "Mission Controller", icon: "flag" },
      { href: "/tactical", label: "Tactical Decision Tree", icon: "account_tree" },
    ],
  },
  {
    group: "Neural & Data",
    items: [
      { href: "/neural", label: "Neural Canvas", icon: "neurology" },
      { href: "/synaptic", label: "Synaptic Graph", icon: "hub" },
      { href: "/memory", label: "Memory Archive", icon: "database" },
      { href: "/telemetry", label: "Biometric Telemetry", icon: "monitor_heart" },
    ],
  },
  {
    group: "Communications",
    items: [
      { href: "/signal", label: "Signal Hub", icon: "chat_bubble" },
      { href: "/mail", label: "Mail Center", icon: "mail" },
      { href: "/github", label: "GitHub Overview", icon: "code" },
      { href: "/github/repo", label: "GitHub Repo Detail", icon: "merge_type" },
    ],
  },
  {
    group: "Storage & Tools",
    items: [
      { href: "/vault", label: "Files & Vault", icon: "folder" },
      { href: "/tools", label: "Tool Operations", icon: "construction" },
      { href: "/integrations", label: "Integrations Hub", icon: "extension" },
    ],
  },
  {
    group: "Identity & Access",
    items: [
      { href: "/login", label: "Login", icon: "lock_open" },
      { href: "/register", label: "Register", icon: "person_add" },
      { href: "/verify", label: "OTP Verify", icon: "verified" },
      { href: "/provisioning", label: "Get Your Agent", icon: "rocket_launch" },
    ],
  },
  {
    group: "System",
    items: [
      { href: "/settings", label: "System Settings", icon: "tune" },
      { href: "/map", label: "Map View", icon: "map" },
    ],
  },
];

const totalPages = ALL_PAGES.reduce((a, g) => a + g.items.length, 0);

export function GlobalPageIndexDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = ALL_PAGES.map(group => ({
    ...group,
    items: group.items.filter(
      item =>
        item.label.toLowerCase().includes(search.toLowerCase()) ||
        item.href.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(g => g.items.length > 0);

  return (
    <>
      {/* Toggle Button — fixed to the right edge, vertically centered */}
      <button
        onClick={() => setOpen(true)}
        title="Open page index"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center justify-center gap-1 py-4 px-1.5 rounded-l-xl transition-all duration-200 group
          ${open ? "opacity-0 pointer-events-none" : "opacity-100"}
          bg-[#030b18]/90 backdrop-blur-xl border border-r-0 border-holo-cyan/30
          hover:border-holo-cyan/60 hover:bg-[#07152b]/90
          shadow-[-4px_0_24px_rgba(0,240,255,0.15)]`}
      >
        {/* Grid dots icon */}
        <span className="material-symbols-outlined text-[20px] text-holo-cyan group-hover:scale-110 transition-transform">
          apps
        </span>
        {/* Vertical label */}
        <span className="font-telemetry text-[7px] text-holo-cyan/60 tracking-[0.2em] uppercase -rotate-90 whitespace-nowrap mt-1"
          style={{ writingMode: "vertical-rl" }}>
          Pages
        </span>
        {/* Badge */}
        <span className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-holo-cyan text-[#020409] font-telemetry text-[8px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.6)]">
          {totalPages}
        </span>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9997] bg-[#020409]/50 backdrop-blur-[2px] transition-all duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[9998] w-72 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col bg-[#030711]/97 backdrop-blur-2xl border-l border-holo-cyan/20 shadow-[-8px_0_40px_rgba(0,0,0,0.9)]">

          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-5 pb-3 border-b border-holo-cyan/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-holo-cyan animate-ping"></span>
                <span className="font-telemetry text-[11px] text-holo-cyan font-semibold uppercase tracking-widest">
                  All Pages
                </span>
              </div>
              <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">
                {totalPages} pages · {ALL_PAGES.length} groups
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-100 hover:bg-[#0d1a2a] border border-transparent hover:border-slate-700 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Search */}
          <div className="px-3 py-2.5 border-b border-holo-cyan/10">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[15px] text-slate-500">
                search
              </span>
              <input
                className="w-full bg-[#0a1220] rounded-lg border border-slate-800 pl-8 pr-3 py-1.5 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-holo-cyan/40 transition-colors"
                placeholder="Search pages..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                autoFocus={open}
              />
              {search && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  onClick={() => setSearch("")}
                >
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Page list */}
          <div className="flex-1 overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center font-telemetry text-[10px] text-slate-600">
                No pages match &ldquo;{search}&rdquo;
              </div>
            ) : (
              filtered.map(group => (
                <div key={group.group} className="mb-1">
                  <div className="px-4 py-1.5 font-telemetry text-[9px] text-slate-600 uppercase tracking-[0.15em]">
                    {group.group}
                  </div>
                  {group.items.map(item => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setOpen(false); setSearch(""); }}
                        className={`flex items-center gap-3 px-3 py-2 mx-2 mb-0.5 rounded-lg transition-all group
                          ${isActive
                            ? "bg-holo-cyan/10 border border-holo-cyan/25 text-holo-cyan shadow-[0_0_10px_rgba(0,240,255,0.08)]"
                            : "text-slate-400 hover:text-slate-100 hover:bg-[#0d1a2a] border border-transparent hover:border-slate-800"
                          }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[17px] shrink-0 transition-colors
                            ${isActive ? "text-holo-cyan" : "text-slate-600 group-hover:text-holo-cyan/70"}`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-sans text-[12px] font-medium flex-1 truncate">
                          {item.label}
                        </span>
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse shrink-0" />
                        ) : (
                          <span className="font-telemetry text-[9px] text-slate-700 group-hover:text-slate-500 transition-colors shrink-0 hidden group-hover:inline">
                            {item.href}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-holo-cyan/10 bg-[#020409]/60 flex items-center justify-between">
            <span className="font-telemetry text-[8px] text-slate-600">SARA OS v4.2</span>
            <span className="font-telemetry text-[8px] text-holo-cyan/60">{totalPages} INDEXED</span>
          </div>
        </div>
      </div>
    </>
  );
}
