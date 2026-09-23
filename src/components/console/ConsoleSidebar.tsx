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
      { href: "/map", label: "Map", icon: "map" },
    ],
  },
];

export const ConsoleSidebar = () => {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    if (isActive) {
      return "w-10 h-10 rounded flex items-center justify-center text-holo-cyan bg-holo-cyan/15 border border-holo-cyan/50 shadow-[0_0_14px_rgba(0,240,255,0.35)]";
    }
    return "w-10 h-10 rounded flex items-center justify-center text-slate-400 hover:text-holo-cyan hover:bg-[#071329] border border-transparent transition-all";
  };

  const totalPages = ALL_PAGES.reduce((a, g) => a + g.items.length, 0);

  return (
    <>
      {/* Slim icon rail */}
      <aside className="fixed left-0 top-14 bottom-0 w-14 z-40 bg-[#020409]/90 backdrop-blur-xl border-r border-holo-cyan/15 flex flex-col items-center py-4 justify-between shadow-[4px_0_24px_rgba(0,0,0,0.7)]">
        <div className="font-telemetry text-[9px] text-holo-cyan/60 tracking-[0.25em] -rotate-90 origin-center my-3 uppercase font-semibold">
          CORE-HUD
        </div>
        <nav className="flex flex-col gap-2.5 w-full items-center flex-1">
          <Link href="/console" className={getLinkClass("/console")} title="Holographic Console">
            <span className="material-symbols-outlined text-[20px]">neurology</span>
          </Link>
          <Link href="/map" className={getLinkClass("/map")} title="Map">
            <span className="material-symbols-outlined text-[20px]">database</span>
          </Link>
          <Link href="/github" className={getLinkClass("/github")} title="GitHub">
            <span className="material-symbols-outlined text-[20px]">code</span>
          </Link>
          <Link href="/mail" className={getLinkClass("/mail")} title="Mail">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </Link>
          <Link href="/signal" className={getLinkClass("/signal")} title="Signal">
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
          </Link>
          <Link href="/settings" className={getLinkClass("/settings")} title="Settings">
            <span className="material-symbols-outlined text-[20px]">tune</span>
          </Link>

          <div className="h-px w-8 bg-holo-cyan/15 my-1" />

          {/* Page Index Toggle Button */}
          <button
            className={`w-10 h-10 rounded flex items-center justify-center border transition-all relative ${drawerOpen ? "text-holo-cyan bg-holo-cyan/15 border-holo-cyan/50 shadow-[0_0_14px_rgba(0,240,255,0.35)]" : "text-slate-400 hover:text-holo-cyan hover:bg-[#071329] border-transparent"}`}
            title="All Pages Index"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <span className="material-symbols-outlined text-[20px]">apps</span>
            {/* Badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-holo-cyan text-[#020409] font-telemetry text-[7px] font-bold flex items-center justify-center leading-none">
              {totalPages}
            </span>
          </button>
        </nav>

        <div className="flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-holo-cyan/70 text-[16px] animate-pulse">wifi_tethering</span>
          <span className="font-telemetry text-[8px] text-holo-muted tracking-widest">SYNC</span>
        </div>
      </aside>

      {/* Page Index Drawer — slides in next to the sidebar */}
      <div
        className={`fixed left-14 top-14 bottom-0 z-30 transition-all duration-300 ease-in-out ${drawerOpen ? "w-72 opacity-100" : "w-0 opacity-0 pointer-events-none"} overflow-hidden`}
      >
        <div className="h-full w-72 bg-[#030711]/95 backdrop-blur-2xl border-r border-holo-cyan/15 shadow-[4px_0_32px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">

          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-holo-cyan/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-holo-cyan animate-ping"></span>
                <span className="font-telemetry text-[10px] text-holo-cyan uppercase tracking-widest">Page Index</span>
              </div>
              <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{totalPages} pages across {ALL_PAGES.length} groups</div>
            </div>
            <button
              className="w-7 h-7 rounded flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-[#0d1a2a] transition-all"
              onClick={() => setDrawerOpen(false)}
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          {/* Search */}
          <div className="px-3 py-2.5 border-b border-holo-cyan/10">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[14px] text-slate-500">search</span>
              <input
                className="w-full bg-[#0a1220] rounded-lg border border-slate-800 pl-7 pr-3 py-1.5 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-holo-cyan/40"
                placeholder="Search pages..."
                onChange={e => {
                  const val = e.target.value.toLowerCase();
                  document.querySelectorAll("[data-page-item]").forEach(el => {
                    const label = el.getAttribute("data-label") || "";
                    (el as HTMLElement).style.display = label.includes(val) ? "" : "none";
                  });
                  document.querySelectorAll("[data-group-header]").forEach(el => {
                    const group = el.nextElementSibling;
                    const visible = group && Array.from(group.children).some(c => (c as HTMLElement).style.display !== "none");
                    (el as HTMLElement).style.display = visible ? "" : "none";
                  });
                }}
              />
            </div>
          </div>

          {/* Page Groups */}
          <div className="flex-1 overflow-y-auto py-2 space-y-1">
            {ALL_PAGES.map(group => (
              <div key={group.group}>
                <div
                  data-group-header
                  className="px-4 py-1.5 font-telemetry text-[9px] text-slate-500 uppercase tracking-widest"
                >
                  {group.group}
                </div>
                <div>
                  {group.items.map(item => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        data-page-item
                        data-label={item.label.toLowerCase()}
                        className={`flex items-center gap-2.5 px-4 py-2 mx-2 rounded-lg transition-all group ${isActive ? "bg-holo-cyan/10 border border-holo-cyan/25 text-holo-cyan shadow-[0_0_10px_rgba(0,240,255,0.1)]" : "text-slate-400 hover:text-slate-100 hover:bg-[#0d1a2a] border border-transparent"}`}
                        onClick={() => setDrawerOpen(false)}
                      >
                        <span className={`material-symbols-outlined text-[17px] shrink-0 ${isActive ? "text-holo-cyan" : "text-slate-500 group-hover:text-holo-cyan"} transition-colors`}>
                          {item.icon}
                        </span>
                        <span className="font-sans text-[12px] font-medium truncate">{item.label}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-holo-cyan animate-pulse shrink-0"></span>
                        )}
                        {!isActive && (
                          <span className="ml-auto font-telemetry text-[9px] text-slate-700 group-hover:text-slate-500 transition-colors shrink-0">
                            {item.href}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-holo-cyan/10 bg-[#020409]/60">
            <div className="font-telemetry text-[8px] text-slate-600 flex items-center justify-between">
              <span>SARA OS v4.2 — All Systems Nominal</span>
              <span className="text-holo-cyan">{totalPages} PAGES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-20 bg-[#020409]/30 backdrop-blur-[1px]"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};
