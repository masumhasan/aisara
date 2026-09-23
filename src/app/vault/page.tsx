"use client";

import React, { useState } from "react";
import { ConsoleLayout } from "@/components/layout/ConsoleLayout";

type FileNode = {
  name: string;
  format: string;
  size: string;
  vector: string;
  clearance: string;
  schema: string;
  sim: string;
  type: "pdf" | "code" | "schema" | "markdown" | "image";
  id: string;
  action: string;
  session: string;
};

const VAULT_FILES: FileNode[] = [
  {
    name: "audit_v2_financial_matrix.pdf",
    format: "PDF / Tabular",
    size: "1.4 MB",
    vector: "1536-dim Text Embedding",
    clearance: "Level 5 (Restricted)",
    schema: "24 cols x 148 rows",
    sim: "99.2",
    type: "pdf",
    id: "8f2b..09a1",
    action: "[02] PARSE_ATTACHMENT",
    session: "Design team emails"
  },
  {
    name: "sec_ops_exploit_patch.py",
    format: "Python Script",
    size: "42 KB",
    vector: "Code-AST Vector",
    clearance: "Level 4 (Operational)",
    schema: "4 functions / AST Verified",
    sim: "97.8",
    type: "code",
    id: "3a91..e330",
    action: "[01] EXEC_TOOL",
    session: "Code review help"
  },
  {
    name: "session_8941_knowledge_graph.json",
    format: "JSON Graph",
    size: "240 KB",
    vector: "Entity Relation Matrix",
    clearance: "Level 5 (Restricted)",
    schema: "184 Entities / 612 Edges",
    sim: "99.9",
    type: "schema",
    id: "d41d..0001",
    action: "MISSION ARCHIVE",
    session: "Project Aurora planning"
  },
  {
    name: "cve_2025_8819_report.md",
    format: "Markdown Summary",
    size: "86 KB",
    vector: "Semantic Markdown Tokens",
    clearance: "Level 3 (Monitored)",
    schema: "SecOps advisory synthesis",
    sim: "94.5",
    type: "markdown",
    id: "e87c..b42f",
    action: "SENTINEL INBOX",
    session: "Autonomous Web Monitor"
  },
  {
    name: "optical_target_lock_frame_04.png",
    format: "PNG Image Frame",
    size: "4.8 MB",
    vector: "Spatial CLIP & OCR",
    clearance: "Level 2 (Standard)",
    schema: "2560x1440 OCR Confidence 99.4%",
    sim: "98.7",
    type: "image",
    id: "01fa..77e2",
    action: "OPTICAL FEED",
    session: "Spatial HUD Session"
  }
];

export default function VaultPage() {
  const [selectedFile, setSelectedFile] = useState<FileNode>(VAULT_FILES[0]);

  const getIcon = (type: string) => {
    switch (type) {
      case "pdf": return { icon: "picture_as_pdf", color: "text-orange-400", bg: "bg-orange-500/15" };
      case "code": return { icon: "code", color: "text-holo-cyan", bg: "bg-holo-cyan/15" };
      case "schema": return { icon: "schema", color: "text-orange-400", bg: "bg-orange-500/15" };
      case "markdown": return { icon: "markdown", color: "text-slate-400", bg: "bg-[#252a33]" };
      case "image": return { icon: "photo_camera", color: "text-sky-400", bg: "bg-sky-400/15" };
      default: return { icon: "insert_drive_file", color: "text-slate-400", bg: "bg-[#252a33]" };
    }
  };

  return (
    <ConsoleLayout>
      <div className="pt-16 pb-28 min-h-[calc(100vh)] px-4 lg:px-6 w-full max-w-[1920px] mx-auto flex flex-col text-slate-200">
        
        <div className="flex flex-col 2xl:flex-row gap-6 w-full items-start">
          
          <div className="flex-1 min-w-0 flex flex-col gap-6 w-full">
            <div className="relative bg-[#090e17]/85 backdrop-blur p-6 rounded-xl shadow-xl overflow-hidden border border-slate-800">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#ffb869]"></span>
                    <span className="font-telemetry text-[10px] text-orange-400 uppercase tracking-[0.2em]">FILE SUBSYSTEM // SECURE REPOSITORY</span>
                    <span className="text-slate-600 text-[10px]">•</span>
                    <span className="font-telemetry text-[10px] text-slate-400">NODE CLUSTER 0x4F92</span>
                  </div>
                  <h1 className="font-sans text-[24px] text-slate-200 tracking-wide flex items-center gap-3 font-bold">
                    CRYPTOGRAPHIC DATA VAULT
                    <span className="font-telemetry text-[11px] px-2 py-0.5 rounded bg-[#171c25] text-orange-400 border border-slate-800">CH-04</span>
                  </h1>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="bg-[#171c25]/80 px-3 py-2 rounded flex flex-col border border-slate-800/50">
                    <span className="font-telemetry text-[9px] text-slate-500 uppercase">TOTAL STORAGE</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-telemetry text-[14px] text-orange-400 font-semibold">1.4 TB</span>
                      <span className="font-telemetry text-[10px] text-slate-500">/ 10 TB</span>
                    </div>
                  </div>
                  <div className="bg-[#171c25]/80 px-3 py-2 rounded flex flex-col border border-slate-800/50">
                    <span className="font-telemetry text-[9px] text-slate-500 uppercase">SYNCED NODES</span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_6px_#00dbe9]"></span>
                      <span className="font-telemetry text-[14px] text-slate-200 font-semibold">8 ACTIVE</span>
                    </div>
                  </div>
                  <div className="bg-[#171c25]/80 px-3 py-2 rounded flex flex-col border border-slate-800/50">
                    <span className="font-telemetry text-[9px] text-slate-500 uppercase">CIPHER SHIELD</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-[14px] text-orange-400">lock</span>
                      <span className="font-telemetry text-[14px] text-slate-200 font-semibold">GCM-256</span>
                    </div>
                  </div>
                  <div className="bg-[#171c25]/80 px-3 py-2 rounded flex flex-col border border-slate-800/50">
                    <span className="font-telemetry text-[9px] text-slate-500 uppercase">LAST EMBED</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="font-telemetry text-[14px] text-holo-cyan font-medium">2m ago</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:w-80 relative">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[16px] text-slate-500">search</span>
                  <input className="w-full bg-[#171c25] border border-slate-700/50 rounded-lg py-1.5 pl-8 pr-3 font-telemetry text-[11px] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-holo-cyan shadow-sm transition-colors" placeholder="Filter tokens, vectors, hashes..." type="text"/>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none font-telemetry text-[10px]">
                  <button className="px-3 py-1.5 rounded bg-orange-500/20 text-orange-300 tracking-wider uppercase font-semibold shadow-[0_0_12px_rgba(255,184,105,0.3)] border border-orange-500/30 whitespace-nowrap">
                    ALL FILES [213]
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#171c25] text-slate-400 hover:text-slate-200 tracking-wider uppercase whitespace-nowrap border border-slate-800">
                    TRANSCRIPTS
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#171c25] text-slate-400 hover:text-slate-200 tracking-wider uppercase whitespace-nowrap border border-slate-800">
                    AUDIO STEMS
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#171c25] text-slate-400 hover:text-slate-200 tracking-wider uppercase whitespace-nowrap border border-slate-800">
                    PARSED PDFS
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#171c25] text-slate-400 hover:text-slate-200 tracking-wider uppercase whitespace-nowrap border border-slate-800">
                    CODE EXECS
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-[#171c25]/40 p-4 rounded-xl relative group hover:bg-[#1b2029] transition-colors shadow-md border border-slate-800/50">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded bg-[#252a33] text-orange-400 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded border border-orange-400/20">42 ITEMS</span>
                </div>
                <div className="mt-3">
                  <div className="font-sans text-[14px] font-semibold text-slate-200">Doc Analyzers</div>
                  <div className="font-telemetry text-[9px] text-slate-500 mt-1">1.2 GB • 84% Vectorized</div>
                </div>
                <div className="mt-3 p-1.5 rounded bg-[#090e17] flex items-center gap-2 border border-slate-800">
                  <span className="material-symbols-outlined text-[14px] text-orange-400">description</span>
                  <span className="font-telemetry text-[9px] text-slate-400 truncate">audit_v2_financial_matrix.pdf</span>
                </div>
              </div>
              <div className="bg-[#171c25]/40 p-4 rounded-xl relative group hover:bg-[#1b2029] transition-colors shadow-md border border-slate-800/50">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded bg-[#252a33] text-sky-400 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[18px]">videocam</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-sky-400 bg-sky-400/10 px-1.5 py-0.5 rounded border border-sky-400/20">118 FRAMES</span>
                </div>
                <div className="mt-3">
                  <div className="font-sans text-[14px] font-semibold text-slate-200">Optical Feeds</div>
                  <div className="font-telemetry text-[9px] text-slate-500 mt-1">8.4 GB • OCR Pipeline Active</div>
                </div>
                <div className="mt-3 p-1.5 rounded bg-[#090e17] flex items-center gap-2 border border-slate-800">
                  <span className="material-symbols-outlined text-[14px] text-sky-400">image</span>
                  <span className="font-telemetry text-[9px] text-slate-400 truncate">optical_target_lock_frame_04.png</span>
                </div>
              </div>
              <div className="bg-[#171c25]/40 p-4 rounded-xl relative group hover:bg-[#1b2029] transition-colors shadow-md border border-slate-800/50">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded bg-[#252a33] text-orange-400 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-orange-400 bg-orange-400/10 px-1.5 py-0.5 rounded border border-orange-400/20">34 SESSIONS</span>
                </div>
                <div className="mt-3">
                  <div className="font-sans text-[14px] font-semibold text-slate-200">Neural Audio Stems</div>
                  <div className="font-telemetry text-[9px] text-slate-500 mt-1">3.1 GB • Lossless OPUS 48kHz</div>
                </div>
                <div className="mt-3 p-1.5 rounded bg-[#090e17] flex items-center gap-2 border border-slate-800">
                  <span className="material-symbols-outlined text-[14px] text-orange-400">audio_file</span>
                  <span className="font-telemetry text-[9px] text-slate-400 truncate">session_8941_opus.wav</span>
                </div>
              </div>
              <div className="bg-[#171c25]/40 p-4 rounded-xl relative group hover:bg-[#1b2029] transition-colors shadow-md border border-slate-800/50">
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 rounded bg-[#252a33] text-holo-cyan flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-holo-cyan bg-holo-cyan/10 px-1.5 py-0.5 rounded border border-holo-cyan/20">19 SCRIPTS</span>
                </div>
                <div className="mt-3">
                  <div className="font-sans text-[14px] font-semibold text-slate-200">Code Artifacts</div>
                  <div className="font-telemetry text-[9px] text-slate-500 mt-1">450 MB • Sandboxed AST</div>
                </div>
                <div className="mt-3 p-1.5 rounded bg-[#090e17] flex items-center gap-2 border border-slate-800">
                  <span className="material-symbols-outlined text-[14px] text-holo-cyan">data_object</span>
                  <span className="font-telemetry text-[9px] text-slate-400 truncate">sec_ops_exploit_patch.py</span>
                </div>
              </div>
            </div>

            <div className="bg-[#090e17]/85 backdrop-blur rounded-xl p-4 shadow-xl flex flex-col border border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-2 border-b border-slate-800/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-orange-400">inventory_2</span>
                  <span className="font-sans text-[14px] font-bold text-slate-200">SECURE DATA MATRIX // MASTER INDEX</span>
                </div>
                <div className="flex items-center gap-2 font-telemetry text-[9px] text-slate-500">
                  <span>SHOWING 5 OF 213 NODES</span>
                  <span className="text-slate-700">/</span>
                  <button className="text-orange-400 hover:underline uppercase">Refresh Registry</button>
                </div>
              </div>
              
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#171c25]/80 text-slate-500 font-telemetry text-[9px] uppercase tracking-wider">
                      <th className="py-3 px-3 rounded-l-lg border-y border-l border-slate-800">File Artifact &amp; Checksum</th>
                      <th className="py-3 px-3 border-y border-slate-800">Modality / Session Trigger</th>
                      <th className="py-3 px-3 border-y border-slate-800">Size</th>
                      <th className="py-3 px-3 border-y border-slate-800">Vector Status</th>
                      <th className="py-3 px-3 border-y border-slate-800">Clearance</th>
                      <th className="py-3 px-3 rounded-r-lg text-right border-y border-r border-slate-800">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1 font-sans text-[12px] before:content-[''] before:block before:h-2">
                    {VAULT_FILES.map((file, i) => {
                      const iconConf = getIcon(file.type);
                      const isSelected = selectedFile.name === file.name;
                      
                      return (
                        <tr 
                          key={i} 
                          className={`${isSelected ? 'bg-[#1b2029] border-slate-700' : 'bg-[#0e141f] hover:bg-[#171c25] border-transparent'} border-y transition-colors cursor-pointer group`}
                          onClick={() => setSelectedFile(file)}
                        >
                          <td className={`py-3 px-3 border-l ${isSelected ? 'border-l-orange-400 rounded-l' : 'border-l-transparent rounded-l'} `}>
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded ${iconConf.bg} ${iconConf.color} flex items-center justify-center shrink-0`}>
                                <span className="material-symbols-outlined text-[16px]">{iconConf.icon}</span>
                              </div>
                              <div className="min-w-0">
                                <div className={`font-sans text-[13px] font-semibold truncate transition-colors ${isSelected ? iconConf.color : 'text-slate-200 group-hover:' + iconConf.color}`}>{file.name}</div>
                                <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">SHA256: {file.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-3 border-y border-transparent">
                            <div className={`font-telemetry text-[9px] font-medium ${iconConf.color}`}>{file.action}</div>
                            <div className="font-telemetry text-[9px] text-slate-500 mt-0.5">{file.session}</div>
                          </td>
                          <td className="py-3 px-3 font-telemetry text-[11px] text-slate-300 border-y border-transparent">{file.size}</td>
                          <td className="py-3 px-3 border-y border-transparent">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded ${iconConf.bg} ${iconConf.color} font-telemetry text-[9px]`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${file.type === 'pdf' ? 'bg-sky-400 animate-pulse' : (file.type === 'code' ? 'bg-holo-cyan' : (file.type === 'schema' ? 'bg-sky-400' : (file.type==='image'? 'bg-sky-400' : 'bg-slate-500')))}`}></span>
                              {file.type === 'pdf' ? 'Indexed 1536d' : (file.type === 'code' ? 'Indexed AST' : (file.type === 'schema' ? 'Graph Synced' : (file.type === 'image' ? 'Analyzed (OCR 99.4%)' : 'Indexed Doc')))}
                            </span>
                          </td>
                          <td className="py-3 px-3 font-telemetry text-[10px] text-orange-400 font-bold border-y border-transparent">{file.type === 'pdf' || file.type === 'schema' ? 'L5 // STRICT' : (file.type === 'code' ? 'L4 // OPER' : (file.type === 'markdown' ? 'L3 // SEC' : 'L2 // GEN'))}</td>
                          <td className={`py-3 px-3 rounded-r text-right border-y border-r ${isSelected ? 'border-slate-700' : 'border-transparent'}`}>
                            <div className="flex items-center justify-end gap-1 text-slate-500">
                              <button className={`p-1.5 hover:${iconConf.color} rounded transition-colors`} title="Inspect Telemetry"><span className="material-symbols-outlined text-[16px]">visibility</span></button>
                              <button className="p-1.5 hover:text-sky-400 rounded transition-colors" title="Vector Search"><span className="material-symbols-outlined text-[16px]">neurology</span></button>
                              <button className="p-1.5 hover:text-slate-200 rounded transition-colors" title="Download"><span className="material-symbols-outlined text-[16px]">download</span></button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="w-full 2xl:w-[400px] shrink-0 flex flex-col gap-6">
            <div className="bg-[#090e17]/85 backdrop-blur rounded-xl p-5 shadow-xl relative overflow-hidden border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/50 mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-orange-400">troubleshoot</span>
                  <span className="font-sans text-[14px] font-bold text-slate-200 uppercase">FILE TELEMETRY &amp; VECTOR</span>
                </div>
                <span className="font-telemetry text-[9px] text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded font-semibold border border-orange-400/20">SELECTED</span>
              </div>
              
              <div className="p-4 bg-[#05080d]/80 rounded-lg flex flex-col gap-2 border border-slate-800/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase">FILE IDENTIFIER</span>
                  <span className="font-telemetry text-[9px] text-orange-400 font-bold">{selectedFile.clearance}</span>
                </div>
                <div className="font-sans text-[15px] font-semibold text-orange-300 truncate">
                  {selectedFile.name}
                </div>
                <div className="flex items-center gap-2 text-slate-400 font-telemetry text-[10px] mt-1">
                  <span>{selectedFile.format}</span>
                  <span className="text-slate-600">•</span>
                  <span>{selectedFile.size}</span>
                </div>
              </div>
              
              <div className="mt-5 flex flex-col gap-2">
                <div className="flex items-center justify-between font-telemetry text-[9px] text-slate-500">
                  <span>NEURAL VECTOR SIMILARITY</span>
                  <span className="text-orange-400 font-bold">{selectedFile.sim}% PARITY</span>
                </div>
                <div className="w-full bg-[#05080d] h-1.5 rounded-full overflow-hidden p-px border border-slate-800/50">
                  <div className="bg-orange-400 h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#ffb869]" style={{ width: `${selectedFile.sim}%` }}></div>
                </div>
              </div>
              
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="bg-[#171c25]/80 p-3 rounded-lg flex flex-col border border-slate-800/50">
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase">SCHEMA EXTRACT</span>
                  <span className="font-telemetry text-[11px] text-slate-200 font-semibold mt-1.5">{selectedFile.schema}</span>
                </div>
                <div className="bg-[#171c25]/80 p-3 rounded-lg flex flex-col border border-slate-800/50">
                  <span className="font-telemetry text-[9px] text-slate-500 uppercase">EMBEDDING SPACE</span>
                  <span className="font-telemetry text-[11px] text-sky-400 font-semibold mt-1.5 truncate">{selectedFile.vector}</span>
                </div>
              </div>
              
              <div className="mt-5 flex flex-col gap-2">
                <span className="font-telemetry text-[9px] text-slate-500 uppercase mb-1">LINKED OPERATIONAL SESSIONS</span>
                <div className="p-2.5 rounded-lg bg-[#171c25]/60 flex items-center justify-between hover:bg-[#1b2029] cursor-pointer transition-colors border border-slate-800/30">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-[16px] text-orange-400">forum</span>
                    <span className="font-telemetry text-[11px] text-slate-300 truncate">{selectedFile.session} (Active)</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-orange-400">PRIMARY REF</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#171c25]/60 flex items-center justify-between hover:bg-[#1b2029] cursor-pointer transition-colors border border-slate-800/30">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="material-symbols-outlined text-[16px] text-slate-600">history</span>
                    <span className="font-telemetry text-[11px] text-slate-400 truncate">Q1 Budget Audit Archive</span>
                  </div>
                  <span className="font-telemetry text-[9px] text-slate-600">CROSS-REF</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-3">
                <button className="w-full py-2.5 px-4 rounded-lg bg-orange-500/20 text-orange-300 font-sans text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,184,105,0.2)] hover:bg-orange-500/30 transition-all border border-orange-500/30">
                  <span className="material-symbols-outlined text-[18px]">neurology</span>
                  Query with SARA
                </button>
                <button className="w-full py-2.5 px-4 rounded-lg bg-[#171c25] text-slate-300 font-sans text-[13px] hover:bg-[#252a33] hover:text-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-700">
                  <span className="material-symbols-outlined text-[18px] text-sky-400">input</span>
                  Inject to Active Session
                </button>
                <button className="w-full py-2 px-4 rounded-lg bg-transparent text-slate-500 hover:text-slate-300 hover:bg-[#171c25]/50 font-telemetry text-[11px] transition-colors flex items-center justify-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-[16px]">file_download</span>
                  Export Decrypted Mirror
                </button>
              </div>
            </div>
            
            <div className="bg-[#090e17]/85 backdrop-blur rounded-xl p-5 shadow-xl flex items-center justify-between border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center shadow-inner border border-orange-500/20">
                  <span className="material-symbols-outlined text-[20px] animate-pulse">sync</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-[13px] text-slate-200 font-semibold">Active Session Standby</span>
                  <span className="font-telemetry text-[9px] text-slate-500 mt-0.5">Session #0012 // Design team emails</span>
                </div>
              </div>
              <button className="px-3 py-2 rounded-lg bg-[#1b2029] text-orange-400 hover:bg-orange-500/20 font-telemetry text-[9px] uppercase font-bold tracking-wider transition-all flex items-center gap-1.5 shadow-sm border border-slate-700 hover:border-orange-500/30">
                <span>RETURN TO HUD</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </aside>
          
        </div>
      </div>
    </ConsoleLayout>
  );
}
