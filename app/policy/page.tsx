'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronDown,
  Shield,
  Lock,
  FileText,
  Eye,
  Database,
  Share2,
  Trash2,
  Users,
  Globe,
  Cookie,
  Building2,
  Gavel,
  GraduationCap,
  Mail,
  Calendar,
  UserCheck,
  Scale,
  Bell,
  Key,
  Bug,
  FileSignature,
  Handshake,
  ArrowUp,
} from 'lucide-react';

/* ─────────────────────────── types ─────────────────────────── */
interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
  subsections?: { title: string; content: string }[];
  tables?: { headers: string[]; rows: string[][] }[];
  principles?: string[];
}

/* ─────────────────────── CSS injection ─────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:      #050D18;
    --surface: #081525;
    --card:    #0C1E35;
    --border:  rgba(20,184,166,0.15);
    --teal:    #14B8A6;
    --teal2:   #0D9488;
    --gold:    #F59E0B;
    --text:    #E2E8F0;
    --muted:   #7DA4BE;
    --dim:     #1E3A52;
    --font-head: 'Syne', sans-serif;
    --font-body: 'DM Sans', sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-body); }

  /* ── progress bar ── */
  .progress-bar {
    position: fixed; top: 0; left: 0; height: 3px; z-index: 999;
    background: linear-gradient(90deg, var(--teal), var(--gold));
    transition: width 0.1s linear;
    box-shadow: 0 0 12px var(--teal);
  }

  /* ── grid bg ── */
  .grid-bg {
    background-image:
      linear-gradient(rgba(20,184,166,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(20,184,166,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* ── hero ── */
  .hero-wrap {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #050D18 0%, #081C30 50%, #061522 100%);
    padding: 100px 1.5rem 80px;
    border-bottom: 1px solid var(--border);
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(20,184,166,0.12); border: 1px solid rgba(20,184,166,0.3);
    backdrop-filter: blur(8px); border-radius: 100px;
    padding: 6px 18px; margin-bottom: 28px;
    font-family: var(--font-head); font-size: 0.75rem;
    color: var(--teal); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .hero-title {
    font-family: var(--font-head);
    font-size: clamp(2.4rem, 6vw, 4.5rem);
    font-weight: 800; line-height: 1.05;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #fff 30%, var(--teal) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero-sub {
    font-size: 1.05rem; color: var(--muted); max-width: 560px; margin: 0 auto;
    line-height: 1.7; font-weight: 300;
  }
  .hero-stats {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 12px;
    margin-top: 36px;
  }
  .hero-stat {
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
    border-radius: 100px; padding: 7px 16px;
    font-size: 0.8rem; color: var(--muted);
  }
  .hero-stat svg { color: var(--teal); }

  /* ── floating shield SVG ── */
  .shield-glow { filter: drop-shadow(0 0 32px rgba(20,184,166,0.4)); }
  .ring-spin { animation: spin 18s linear infinite; transform-origin: 50% 50%; }
  .ring-spin-rev { animation: spin-rev 12s linear infinite; transform-origin: 50% 50%; }
  .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
  .float-anim { animation: float 6s ease-in-out infinite; }
  .orbit { animation: orbit 10s linear infinite; transform-origin: 50% 50%; }

  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes spin-rev { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
  @keyframes pulse-dot {
    0%,100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.6); }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50% { transform: translateY(-14px); }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    from { background-position: -200% 0; }
    to   { background-position: 200% 0; }
  }
  @keyframes glow-pulse {
    0%,100% { box-shadow: 0 0 0px var(--teal); }
    50% { box-shadow: 0 0 24px rgba(20,184,166,0.5); }
  }
  @keyframes trail-in {
    from { stroke-dashoffset: 500; opacity: 0; }
    to   { stroke-dashoffset: 0; opacity: 0.6; }
  }
  @keyframes draw {
    from { stroke-dashoffset: 1000; }
    to   { stroke-dashoffset: 0; }
  }

  /* ── particles ── */
  .particle {
    position: absolute; border-radius: 50%; pointer-events: none;
    background: var(--teal); opacity: 0;
    animation: particle-float 8s ease-in-out infinite;
  }
  @keyframes particle-float {
    0% { opacity: 0; transform: translateY(0) scale(1); }
    20% { opacity: 0.5; }
    80% { opacity: 0.3; }
    100% { opacity: 0; transform: translateY(-80px) scale(0.5); }
  }

  /* ── sections ── */
  .content-wrap { max-width: 900px; margin: 0 auto; padding: 56px 1.5rem 80px; }
  .intro-text {
    text-align: center; margin-bottom: 48px; padding: 32px;
    background: linear-gradient(135deg, rgba(20,184,166,0.06), rgba(5,13,24,0));
    border: 1px solid var(--border); border-radius: 20px;
    font-size: 1rem; color: var(--muted); line-height: 1.8;
  }
  .intro-text strong { color: var(--teal); font-weight: 500; }

  /* ── accordion card ── */
  .section-card {
    border: 1px solid var(--border); border-radius: 16px;
    background: var(--card); overflow: hidden;
    transition: border-color 0.25s, box-shadow 0.25s;
    animation: fadeUp 0.5s ease both;
  }
  .section-card:hover { border-color: rgba(20,184,166,0.35); }
  .section-card.open {
    border-color: rgba(20,184,166,0.4);
    box-shadow: 0 0 40px rgba(20,184,166,0.07), 0 8px 32px rgba(0,0,0,0.4);
  }

  .section-btn {
    width: 100%; padding: 20px 24px;
    display: flex; align-items: center; justify-content: space-between;
    background: none; border: none; cursor: pointer;
    text-align: left; gap: 16px;
  }
  .section-btn:hover .btn-inner { background: rgba(20,184,166,0.05); }
  .btn-inner { display: flex; align-items: center; gap: 16px; flex: 1; border-radius: 10px; padding: 4px; transition: background 0.2s; }

  .num-badge {
    font-family: var(--font-head); font-size: 0.65rem; font-weight: 700;
    color: var(--teal); background: rgba(20,184,166,0.1);
    border: 1px solid rgba(20,184,166,0.25);
    border-radius: 8px; padding: 4px 9px; white-space: nowrap;
    letter-spacing: 0.05em; min-width: 36px; text-align: center;
  }

  .icon-wrap {
    width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
    background: linear-gradient(135deg, rgba(20,184,166,0.15), rgba(20,184,166,0.05));
    border: 1px solid rgba(20,184,166,0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--teal); transition: all 0.25s;
  }
  .section-card.open .icon-wrap {
    background: linear-gradient(135deg, rgba(20,184,166,0.25), rgba(20,184,166,0.1));
    box-shadow: 0 0 16px rgba(20,184,166,0.2);
  }

  .section-title {
    font-family: var(--font-head); font-size: 0.98rem; font-weight: 600;
    color: var(--text); letter-spacing: -0.01em;
  }

  .chevron {
    width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);
    display: flex; align-items: center; justify-content: center;
    color: var(--muted); transition: all 0.3s;
  }
  .section-card.open .chevron {
    background: rgba(20,184,166,0.12); border-color: rgba(20,184,166,0.25);
    color: var(--teal); transform: rotate(180deg);
  }

  /* ── content panel ── */
  .content-panel {
    border-top: 1px solid rgba(20,184,166,0.12);
    padding: 28px 28px 28px;
    animation: fadeUp 0.3s ease both;
  }

  .para {
    color: var(--muted); line-height: 1.8; font-size: 0.94rem;
    margin-bottom: 14px; font-weight: 300;
  }
  .para:last-child { margin-bottom: 0; }

  /* ── principle items ── */
  .principles-grid { display: flex; flex-direction: column; gap: 10px; margin-top: 16px; }
  .principle-item {
    display: flex; align-items: flex-start; gap: 14px;
    padding: 14px 18px; border-radius: 12px;
    background: rgba(20,184,166,0.04); border: 1px solid rgba(20,184,166,0.1);
    transition: all 0.2s;
  }
  .principle-item:hover { background: rgba(20,184,166,0.08); border-color: rgba(20,184,166,0.2); }
  .principle-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: var(--teal); flex-shrink: 0; margin-top: 6px;
    box-shadow: 0 0 8px var(--teal);
  }
  .principle-text { font-size: 0.88rem; color: var(--muted); line-height: 1.65; }
  .principle-text strong { color: var(--teal); font-weight: 500; }

  /* ── tables ── */
  .table-wrap { overflow-x: auto; margin-top: 20px; border-radius: 14px; border: 1px solid var(--border); }
  table { width: 100%; border-collapse: collapse; font-size: 0.87rem; }
  thead { background: rgba(20,184,166,0.08); }
  th {
    padding: 13px 16px; text-align: left;
    font-family: var(--font-head); font-size: 0.72rem; font-weight: 600;
    color: var(--teal); letter-spacing: 0.08em; text-transform: uppercase;
    border-bottom: 1px solid var(--border);
  }
  td {
    padding: 13px 16px; color: var(--muted); vertical-align: top;
    line-height: 1.6; border-bottom: 1px solid rgba(20,184,166,0.06);
  }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: rgba(20,184,166,0.03); }
  td:first-child { color: var(--text); font-weight: 500; white-space: nowrap; }

  /* ── subsections ── */
  .subsection { margin-top: 20px; padding-left: 18px; border-left: 2px solid var(--teal); }
  .subsection-title { font-family: var(--font-head); font-size: 0.88rem; font-weight: 600; color: var(--text); margin-bottom: 8px; }
  .subsection-body { font-size: 0.88rem; color: var(--muted); line-height: 1.75; white-space: pre-line; }

  /* ── back to top ── */
  .back-top {
    position: fixed; bottom: 28px; right: 28px; z-index: 99;
    width: 44px; height: 44px; border-radius: 12px;
    background: linear-gradient(135deg, var(--teal2), var(--teal));
    border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #fff; box-shadow: 0 4px 20px rgba(20,184,166,0.4);
    transition: all 0.25s;
    animation: glow-pulse 3s ease-in-out infinite;
  }
  .back-top:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(20,184,166,0.5); }

  /* ── quick nav ── */
  .quick-nav {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;
    margin-bottom: 40px;
  }
  .nav-pill {
    padding: 6px 14px; border-radius: 100px; font-size: 0.75rem;
    font-family: var(--font-head); font-weight: 500; letter-spacing: 0.03em;
    background: var(--card); border: 1px solid var(--border);
    color: var(--muted); cursor: pointer;
    transition: all 0.2s; text-transform: uppercase;
  }
  .nav-pill:hover { color: var(--teal); border-color: rgba(20,184,166,0.4); background: rgba(20,184,166,0.06); }

  /* ── footer ── */
  .policy-footer {
    text-align: center; padding: 32px 24px;
    border-top: 1px solid var(--border);
    font-size: 0.78rem; color: rgba(125,164,190,0.5);
    font-family: var(--font-head); letter-spacing: 0.03em;
  }

  /* ── decorative SVG lines in hero ── */
  .hero-lines { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }

  /* ── expand all button ── */
  .expand-all-row { display: flex; justify-content: flex-end; margin-bottom: 20px; gap: 10px; }
  .expand-btn {
    padding: 8px 20px; border-radius: 100px; font-size: 0.8rem;
    font-family: var(--font-head); font-weight: 600; letter-spacing: 0.04em;
    background: rgba(20,184,166,0.1); border: 1px solid rgba(20,184,166,0.25);
    color: var(--teal); cursor: pointer; transition: all 0.2s; text-transform: uppercase;
  }
  .expand-btn:hover { background: rgba(20,184,166,0.18); }

  @media (max-width: 640px) {
    .hero-wrap { padding: 80px 1rem 60px; }
    .content-wrap { padding: 40px 1rem 60px; }
    .section-btn { padding: 16px; }
    .content-panel { padding: 20px 16px; }
    td:first-child { white-space: normal; }
  }
`;

/* ─────────────────── Hero SVG Shield ─────────────────── */
const HeroShield = () => (
  <div className="float-anim" style={{ position: 'relative', width: 240, height: 240, margin: '0 auto 40px' }}>
    <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" width="240" height="240">
      {/* Outer ring */}
      <circle cx="120" cy="120" r="108" stroke="rgba(20,184,166,0.12)" strokeWidth="1" />
      <circle cx="120" cy="120" r="108" stroke="url(#ringGrad)" strokeWidth="1.5"
              strokeDasharray="6 6" className="ring-spin" />
      {/* Inner ring */}
      <circle cx="120" cy="120" r="80" stroke="rgba(20,184,166,0.08)" strokeWidth="1" />
      <circle cx="120" cy="120" r="80" stroke="url(#ringGrad2)" strokeWidth="1"
              strokeDasharray="4 8" className="ring-spin-rev" />

      {/* Shield body */}
      <path d="M120 22 L176 46 L176 108 C176 148 152 180 120 194 C88 180 64 148 64 108 L64 46 Z"
            fill="url(#shieldBody)" stroke="url(#shieldBorder)" strokeWidth="1.5" className="shield-glow" />

      {/* Shield inner detail */}
      <path d="M120 40 L163 60 L163 108 C163 140 146 166 120 178 C94 166 77 140 77 108 L77 60 Z"
            fill="rgba(20,184,166,0.05)" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />

      {/* Lock icon inside shield */}
      <rect x="107" y="110" width="26" height="22" rx="4" fill="rgba(20,184,166,0.9)" />
      <path d="M113 110 L113 103 C113 97.5 127 97.5 127 103 L127 110" stroke="rgba(20,184,166,0.9)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="120" cy="121" r="3.5" fill="#050D18" />
      <rect x="118.5" y="121" width="3" height="5" rx="1" fill="#050D18" />

      {/* Orbit dot */}
      <g className="orbit">
        <circle cx="120" cy="120" r="5" fill="var(--gold)" opacity="0.9" style={{filter:'drop-shadow(0 0 6px #F59E0B)'}} />
      </g>

      {/* Pulse dots at cardinal points */}
      {[[120,12],[120,228],[12,120],[228,120]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="var(--teal)"
                style={{ animation: `pulse-dot 2s ease-in-out ${i*0.5}s infinite` }} />
      ))}

      {/* Corner circuit lines */}
      <path d="M40 40 L60 40 L60 60" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M200 40 L180 40 L180 60" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M40 200 L60 200 L60 180" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M200 200 L180 200 L180 180" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="ringGrad2" x1="240" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="shieldBody" x1="64" y1="22" x2="176" y2="194" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0C2A42" />
          <stop offset="100%" stopColor="#061520" />
        </linearGradient>
        <linearGradient id="shieldBorder" x1="64" y1="22" x2="176" y2="194" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

/* ─────────────────── Hero BG Lines ─────────────────── */
const HeroLines = () => (
  <div className="hero-lines">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
      <defs>
        <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
          <stop offset="40%" stopColor="#14B8A6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.15,0.35,0.55,0.75,0.9].map((y, i) => (
        <line key={i} x1="0" y1={`${y*100}%`} x2="100%" y2={`${y*100}%`}
              stroke="url(#lineG)" strokeWidth="0.5" opacity={0.3 + i*0.05} />
      ))}
      {/* Vertical accent */}
      <line x1="15%" y1="0" x2="15%" y2="100%" stroke="rgba(20,184,166,0.06)" strokeWidth="1" />
      <line x1="85%" y1="0" x2="85%" y2="100%" stroke="rgba(20,184,166,0.06)" strokeWidth="1" />

      {/* Corner decorative brackets */}
      <path d="M 0 0 L 80 0 M 0 0 L 0 60" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" fill="none" />
      <path d="M 100% 0 L calc(100% - 80px) 0 M 100% 0 L 100% 60" stroke="rgba(20,184,166,0.25)" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

/* ─────────────────── Particles ─────────────────── */
const Particles = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 6}s`,
  }));
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <div key={p.id} className="particle" style={{
          left: p.left, top: p.top,
          width: p.size, height: p.size,
          animationDelay: p.delay,
          animationDuration: p.duration,
        }} />
      ))}
    </div>
  );
};

/* ─────────────────── Section data ─────────────────── */
const policySections: PolicySection[] = [
  {
    id: 'purpose', title: '1. Purpose and Scope', icon: <FileText size={18} />,
    content: [
      'This Privacy Policy establishes the rules and commitments governing how Waltergates Ghana Limited collects, uses, stores, shares, secures, retains, and disposes of personal data. It is intended to support lawful and responsible processing of information relating to clients, prospective clients, website users, employees, applicants, contractors, suppliers, and other business contacts.',
      'This policy applies across all business units, information systems, software platforms, development environments, communication channels, paper files, cloud services, and third-party arrangements used by or on behalf of Waltergates Ghana Limited.'
    ]
  },
  {
    id: 'objectives', title: '2. Policy Objectives', icon: <Shield size={18} />,
    content: [
      'Protect the privacy, dignity, and rights of individuals whose personal data is processed by the company.',
      'Ensure alignment with the Ghana Data Protection Act, 2012 (Act 843), cybersecurity requirements, and internal governance expectations.',
      'Define clear rules for transparency, lawful collection, use limitation, security, retention, and accountability.',
      'Support secure software development, operational continuity, employee governance, and client trust.',
      'Provide a practical framework for responding to rights requests, complaints, incidents, and regulatory enquiries.'
    ]
  },
  {
    id: 'principles', title: '3. Privacy Principles', icon: <Handshake size={18} />,
    content: ['Waltergates Ghana Limited shall process personal data in accordance with the following principles:'],
    principles: [
      'Accountability: each processing activity must have a responsible owner, evidence of compliance, and appropriate oversight.',
      'Lawfulness, fairness, and transparency: personal data shall be processed only on legitimate grounds and in a manner that individuals can understand.',
      'Purpose specification: personal data shall be collected for defined, explicit, and lawful purposes.',
      'Compatibility of further processing: data shall not be used later in a way that is incompatible with the original purpose unless a lawful basis exists.',
      'Information quality: personal data must be relevant, adequate, accurate, complete where necessary, and kept up to date.',
      'Openness: data subjects must be informed about who is collecting their data, why it is needed, and how to exercise their rights.',
      'Security safeguards: personal data must be protected through appropriate technical and organisational controls.',
      'Data subject participation: individuals must be able to access, correct, object to, or otherwise exercise rights over their personal data in accordance with law.'
    ]
  },
  {
    id: 'definitions', title: '4. Definitions', icon: <Database size={18} />,
    content: [
      'Personal Data: information relating to an identified or identifiable natural person.',
      'Sensitive Personal Data: special categories of information requiring enhanced protection, such as health, religious belief, ethnicity, biometric data, or criminal-related information, where applicable.',
      'Data Subject: the individual to whom personal data relates.',
      'Data Controller: the person or organisation that determines the purpose and means of processing personal data.',
      'Data Processor: a person or service provider that processes personal data on behalf of a controller.',
      'Processing: any activity involving personal data, including collection, recording, storage, retrieval, analysis, disclosure, transfer, deletion, or destruction.',
      'Personal Data Breach: an actual or reasonably suspected event involving unauthorised access, disclosure, alteration, loss, destruction, or unavailability of personal data.'
    ]
  },
  {
    id: 'governance', title: '5. Governance, Registration & Accountability', icon: <Building2 size={18} />,
    content: [
      'Waltergates Ghana Limited shall maintain active data protection registration where required, publish an organisational privacy policy on relevant platforms, and designate a qualified Data Protection Supervisor or equivalent compliance lead. Privacy compliance shall be embedded into governance, procurement, HR administration, cybersecurity, and software delivery processes.'
    ],
    tables: [{
      headers: ['Role', 'Responsibility'],
      rows: [
        ['Board / CEO', 'Approve the policy, set tone from the top, allocate resources, and oversee compliance and risk management.'],
        ['Head of Technology / DPS', 'Lead policy implementation, maintain data inventory, coordinate privacy-by-design, conduct impact assessments, monitor security controls, and manage breach escalation.'],
        ['Department Heads / Asset Owners', 'Identify data processing activities, ensure lawful collection and use, approve access, maintain data quality, and support rights requests.'],
        ['HR / Administration', 'Apply privacy controls in recruitment, onboarding, employment administration, and exit procedures.'],
        ['IT / Security Team', 'Implement technical and organisational safeguards, access control, logging, encryption, backup, recovery, and incident response.'],
        ['All Employees & Contractors', 'Process personal data only for authorised purposes, protect confidentiality, report incidents promptly, and complete required training.']
      ]
    }]
  },
  {
    id: 'lawfulBases', title: '6. Lawful Bases for Processing', icon: <Scale size={18} />,
    content: [
      'The company shall process personal data only where at least one lawful condition applies. Depending on the context, Waltergates Ghana Limited may rely on one or more of the following grounds:',
      '• the data subject has provided clear and informed consent;\n• processing is necessary to enter into, perform, or manage a contract;\n• processing is required to comply with a legal or regulatory obligation;\n• processing is necessary for legitimate business interests that are not overridden by the rights and freedoms of the data subject;\n• processing is necessary to protect a vital interest or to perform a public or lawful function where applicable.',
      'Sensitive personal data shall be processed only where strictly necessary, lawful, proportionate, and subject to enhanced safeguards, documented approvals, and restricted access.'
    ]
  },
  {
    id: 'transparency', title: '7. Transparency & Collection Notice', icon: <Bell size={18} />,
    content: [
      'At or before the time of collection, Waltergates Ghana Limited shall take reasonable steps to ensure that the individual is informed of the nature of the data being collected, the identity and contact details of the collector, the purpose of collection, whether provision of the data is mandatory or optional, the consequences of not providing it, the legal or authorised basis for collection, the intended recipients or categories of recipients, and the existence of rights of access and rectification.',
      'Where personal data is obtained from a third party, the company shall provide this information to the data subject as soon as reasonably practicable unless a lawful exception applies.'
    ]
  },
  {
    id: 'categories', title: '8. Categories, Sources & Uses of Personal Data', icon: <Database size={18} />,
    content: [],
    tables: [{
      headers: ['Category', 'Examples', 'Typical Purpose'],
      rows: [
        ['Identity & contact data', 'Name, phone number, email address, job title, company name, address, digital identifiers', 'Client engagement, supplier management, recruitment, communication, support and account administration'],
        ['Employment & HR data', 'CVs, contracts, attendance, payroll references, training records, performance and disciplinary records, device assignment', 'Employment administration, onboarding, governance, security and compliance management'],
        ['Client & project data', 'Project contacts, service records, support tickets, contracts, technical requirements, communications', 'Service delivery, quality assurance, billing, client relationship management and business continuity'],
        ['Technical & security data', 'IP address, login history, access logs, device IDs, audit trails, repository activity, network and endpoint telemetry', 'Security monitoring, access control, incident response and platform reliability'],
        ['Financial & transactional data', 'Invoices, payment references, banking or tax-related records where applicable', 'Accounting, tax compliance, collections and audit support'],
        ['Special or sensitive data', 'Health information, biometric identifiers, religious belief, ethnicity, criminal allegation/record', 'Only where strictly necessary, lawful, proportionate, and subject to enhanced safeguards']
      ]
    }],
    subsections: [
      {
        title: 'Sources of Personal Data',
        content: '• directly from data subjects through forms, emails, meetings, contracts, support interactions, recruitment applications, onboarding materials, and website submissions;\n• from company systems and devices through account administration, project tools, source code repositories, access controls, and security logs;\n• from third parties such as referral partners, background verification providers, payment partners, corporate clients, regulators, or publicly available lawful sources;\n• from cookies or similar online technologies where company websites or digital services use them for analytics, security, or service functionality.'
      },
      {
        title: 'Permitted Business Uses',
        content: '• delivering software development, support, consulting, and related services;\n• managing contracts, billing, procurement, vendor relationships, and audits;\n• recruitment, onboarding, employment administration, training, performance, and exit management;\n• protecting systems, source code, client data, intellectual property, and operational resilience;\n• meeting legal, tax, labour, regulatory, investigation, and reporting obligations;\n• communicating service updates, responding to enquiries, and maintaining business relationships.'
      }
    ]
  },
  {
    id: 'minimisation', title: '9. Data Minimisation & Quality', icon: <Trash2 size={18} />,
    content: [
      'The company shall collect only the personal data reasonably required for a legitimate and defined purpose. Personal data that is excessive, irrelevant, duplicative, inaccurate, or outdated shall be corrected, restricted, or deleted as appropriate. Department heads and system owners shall periodically review records under their control to support completeness, relevance, and accuracy.'
    ]
  },
  {
    id: 'accessControl', title: '10. Access Control, Confidentiality & Employee Responsibilities', icon: <Key size={18} />,
    content: [
      'Access to personal data shall be granted strictly on a need-to-know basis and in line with role-based access control, least privilege, segregation of duties, and documented approval processes. Access to confidential or highly confidential information shall be restricted, logged, and periodically reviewed.',
      'Employees and contractors must process personal data only for authorised business purposes. Passwords, access tokens, encryption keys, and repository credentials must be protected in accordance with company cybersecurity rules. Personal data must not be copied to unauthorised devices, public repositories, personal email, or consumer cloud storage. Confidentiality obligations continue after employment or contract termination.',
      'Where the company provides equipment, platforms, email, internet access, or development resources, these systems may be monitored for legitimate security, operational, compliance, and asset protection purposes, subject to applicable law and internal governance.'
    ]
  },
  {
    id: 'security', title: '11. Information Security Safeguards', icon: <Lock size={18} />,
    content: [
      'Waltergates Ghana Limited shall implement appropriate, reasonable, technical and organisational measures to protect the confidentiality, integrity, and availability of personal data. These measures shall be risk-based and consistent with the company cybersecurity policy, secure software development practices, and asset classification standards.',
      '• classification of information assets as Public, Internal, Confidential, or Highly Confidential;\n• encryption of sensitive personal data at rest and in transit, including secure transport protocols and strong cryptographic controls where applicable;\n• multi-factor authentication for email, repositories, cloud services, VPN, privileged access, and other high-risk systems;\n• endpoint, network, and repository security controls, including patch management, anti-malware/EDR, logging, branch protection, and secret management;\n• regular backups using a tested recovery strategy and secure offsite or cloud retention where approved;\n• vendor due diligence, contractual confidentiality, and access restrictions for third-party processors;\n• periodic audits, access reviews, vulnerability management, and security awareness training.'
    ]
  },
  {
    id: 'sharing', title: '12. Sharing & Disclosure of Personal Data', icon: <Share2 size={18} />,
    content: [
      'Waltergates Ghana Limited may share personal data only on a lawful, necessary, and proportionate basis. Personal data may be disclosed to the following categories of recipients where relevant:',
      '• employees, managers, and project teams who require access for authorised duties;\n• service providers and processors such as cloud hosting providers, payroll providers, collaboration platforms, legal advisers, auditors, and payment partners;\n• clients, business partners, or subcontractors where required to perform contractual services;\n• regulators, courts, law enforcement agencies, or competent authorities where disclosure is required by law or legal process;\n• successors, investors, or advisers in relation to a lawful corporate transaction, subject to confidentiality safeguards.',
      'All processors and third parties handling personal data on behalf of the company shall be subject to appropriate contractual obligations covering confidentiality, security, lawful use, incident reporting, return or deletion of data, and audit or assurance rights where appropriate.'
    ]
  },
  {
    id: 'crossBorder', title: '13. Cross-Border Transfers', icon: <Globe size={18} />,
    content: [
      'Where personal data is stored, accessed, backed up, or processed outside Ghana, Waltergates Ghana Limited shall take reasonable steps to ensure that the transfer is lawful and that the receiving environment provides adequate protection for the data. The company shall document the countries involved, assess transfer risk, apply contractual or technical safeguards where needed, and take into account any legal requirements applicable to foreign data subjects or receiving jurisdictions.'
    ]
  },
  {
    id: 'marketing', title: '14. Direct Marketing, Websites & Cookies', icon: <Cookie size={18} />,
    content: [
      'Personal data shall not be used for direct marketing without the prior written consent of the data subject where required by law. Individuals must be given a clear opportunity to opt out of marketing communications, and opt-out instructions shall be honoured promptly.',
      '• Website forms shall present transparent notices describing what information is collected and why.\n• Where cookies, analytics tags, or similar technologies are used, the company shall provide appropriate disclosure and any consent mechanism required by law or best practice.\n• Essential security and functionality technologies may be used to operate websites, portals, and support platforms.'
    ]
  },
  {
    id: 'retention', title: '15. Retention, Archiving & Secure Disposal', icon: <Calendar size={18} />,
    content: [
      'Personal data shall not be retained for longer than necessary to fulfil the original purpose of collection unless continued retention is required or justified by contract, law, legitimate business need, dispute handling, audit, or security obligations. Archived data shall remain subject to access control and confidentiality obligations.'
    ],
    tables: [{
      headers: ['Record Type', 'Baseline Retention Approach', 'Disposal Method'],
      rows: [
        ['Client & contract records', 'Retain for the duration of the engagement and thereafter only as required for legal, audit, dispute, tax, or contractual obligations.', 'Secure deletion from active systems and backups in line with approved disposal procedures.'],
        ['Employee & recruitment records', 'Retain during employment or recruitment and afterwards only for lawful labour, pension, tax, or dispute management purposes.', 'Restricted archive followed by secure destruction when no longer required.'],
        ['Security & access logs', 'Retain only for the period necessary to support cybersecurity monitoring, investigations, and audit requirements.', 'Log rotation, secure overwrite, and irrecoverable deletion.'],
        ['Marketing & consent records', 'Retain until consent is withdrawn, the purpose expires, or contact details become inactive or inaccurate.', 'Suppression list handling where legally necessary and deletion of inactive records.'],
        ['Backups & recovery copies', 'Retain according to the approved backup schedule and 3-2-1 recovery strategy, subject to periodic testing and minimisation.', 'Expiry-based deletion, media sanitisation, or physical destruction where appropriate.']
      ]
    }],
    subsections: [{ title: 'Disposal Methods', content: 'Media and records containing personal data must be disposed of in a manner that prevents reconstruction or unauthorised recovery. Depending on the medium and sensitivity, this may include secure deletion, overwrite, cryptographic erasure, shredding, degaussing, or certified destruction.' }]
  },
  {
    id: 'rights', title: '16. Data Subject Rights & Request Handling', icon: <UserCheck size={18} />,
    content: [
      'Waltergates Ghana Limited recognises the rights of data subjects, subject to applicable legal conditions and exemptions. Individuals may request:',
      '• confirmation of whether the company holds personal data about them;\n• access to the personal data and related information about the processing;\n• correction, completion, update, restriction, or deletion of inaccurate, excessive, irrelevant, or unlawfully held data;\n• objection to certain forms of processing, including direct marketing;\n• withdrawal of consent where processing relies on consent, without affecting prior lawful processing;\n• information about recipients or categories of recipients and, where applicable, transfer arrangements.',
      'Requests shall be submitted through the company\'s designated privacy contact channel or other approved communication channel. The company shall verify identity where necessary, log the request, assess any applicable legal limitations, and respond within the timeframe required by law or within a reasonable documented period if the law does not specify a fixed deadline for the scenario concerned.'
    ]
  },
  {
    id: 'privacyByDesign', title: '17. Privacy by Design, Change Management & DPIAs', icon: <Eye size={18} />,
    content: [
      'Privacy and security shall be considered from the earliest stages of projects, procurement, software development, onboarding, and operational change. Where a new or materially changed processing activity may create heightened privacy risk, the responsible owner shall conduct a documented Data Protection Impact Assessment (DPIA) before implementation and consult the Data Protection Commission where appropriate.',
      '• new technologies, platforms, or data integrations;\n• significant changes to existing processing activities;\n• large-scale processing of sensitive or high-risk data;\n• monitoring, profiling, or automated decision processes that may materially affect individuals.'
    ]
  },
  {
    id: 'breaches', title: '18. Personal Data Breaches & Incident Management', icon: <Bug size={18} />,
    content: [
      'All employees, contractors, and service providers must report suspected or confirmed privacy or security incidents immediately through the company\'s incident reporting channels. The incident response process shall include detection, validation, containment, eradication, recovery, impact assessment, root-cause review, and remediation.',
      'The company shall assess whether personal data has been accessed, acquired, lost, altered, or disclosed without authorisation. Where there are reasonable grounds to believe that unauthorised access or acquisition has occurred, the company shall notify the Data Protection Commission and the affected data subject as soon as reasonably practicable.',
      'Where client contracts, sector obligations, or cybersecurity procedures require faster notification, the stricter requirement shall be applied operationally.'
    ]
  },
  {
    id: 'training', title: '19. Training, Awareness, Monitoring & Audit', icon: <GraduationCap size={18} />,
    content: [
      'Privacy compliance depends on continuous staff awareness, role-specific instruction, and management oversight. Waltergates Ghana Limited shall deliver induction and refresher training, targeted guidance for developers, managers, HR, and administrators, and periodic assessments of understanding and compliance behaviour.',
      '• new hires shall receive privacy and acceptable use orientation as part of onboarding;\n• employees with access to client, HR, financial, or security-sensitive data shall receive additional role-specific instruction;\n• the company may conduct audits, access reviews, documentation checks, and control testing to verify compliance;\n• failures or repeated non-compliance may lead to retraining, corrective action, disciplinary measures, or legal escalation depending on severity.'
    ]
  },
  {
    id: 'complaints', title: '20. Complaints, Regulator Engagement & Contact', icon: <Mail size={18} />,
    content: [
      'Questions, complaints, rights requests, or concerns regarding personal data processing should be directed to the designated Data Protection Supervisor or the official privacy contact published by Waltergates Ghana Limited. Individuals also have the right to lodge a complaint with the Ghana Data Protection Commission where they believe their rights have been infringed.',
      'Internal privacy contact: [Insert privacy contact email / office address / phone number]',
      'Security incident channel: security@waltergatesgh.com',
      'Regulator: Data Protection Commission, Ghana'
    ]
  },
  {
    id: 'enforcement', title: '21. Enforcement & Policy Review', icon: <Gavel size={18} />,
    content: [
      'Non-compliance with this policy may result in corrective action, suspension of access, disciplinary sanctions, termination of engagement, contractual remedies, or legal action depending on the seriousness of the breach and the applicable legal framework. The policy shall be reviewed at least annually and whenever there is a significant change in law, business model, information systems, data flows, vendors, or threat landscape.'
    ]
  },
  {
    id: 'approval', title: '22. Approval & Acknowledgment', icon: <FileSignature size={18} />,
    content: [
      'This policy becomes effective upon approval by the authorised leadership of Waltergates Ghana Limited and shall be communicated to relevant personnel and, where appropriate, published on company platforms for data subject awareness.',
      'Chief Executive Officer — Signature / Date: 01-02-2026',
      'Head of Technology / Data Protection Supervisor — Signature / Date: 01-02-2026'
    ]
  }
];

/* ─────────────────────── main component ─────────────────────── */
export default function PolicyPage() {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  /* scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
      setShowTop(el.scrollTop > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* stagger animation delays */
  const cardDelay = (i: number) => ({ animationDelay: `${i * 0.04}s` });

  const toggle = useCallback((id: string) => {
    setExpanded(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, []);

  const toggleAll = () => {
    setExpanded(prev => prev.length === policySections.length ? [] : policySections.map(s => s.id));
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    if (!expanded.includes(id)) setExpanded(prev => [...prev, id]);
  };

  return (
    <>
      {/* inject fonts + CSS */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* Reading progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Back to top */}
      {showTop && (
        <button className="back-top" onClick={scrollTop} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      )}

      <div className="grid-bg" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {/* ── HERO ── */}
        <section className="hero-wrap">
          <HeroLines />
          <Particles />

          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            <HeroShield />

            <div className="hero-badge">
              <Shield size={12} />
              Ghana Data Protection Act 843 · 2012 Compliant
            </div>

            <h1 className="hero-title" style={{ marginBottom: 16 }}>
              Privacy &amp; Data<br />Protection Policy
            </h1>

            <p className="hero-sub" style={{ marginBottom: 32 }}>
              Waltergates Ghana Limited — our commitment to transparency,<br />
              security, and the privacy rights of every individual we serve.
            </p>

            <div className="hero-stats">
              {[
                { icon: <Calendar size={13} />, label: 'Effective February 2026' },
                { icon: <FileText size={13} />, label: 'WGL-PRIV-2026-001 · v1.0' },
                { icon: <Users size={13} />, label: 'Owner: Head of Technology / DPS' },
                { icon: <Shield size={13} />, label: '22 Policy Sections' },
              ].map((s, i) => (
                <div key={i} className="hero-stat">
                  {s.icon}
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <main className="content-wrap">

          {/* Intro card */}
          <div className="intro-text">
            At <strong>Waltergates Ghana Limited</strong>, we are committed to protecting your privacy and ensuring the lawful,
            fair, and transparent processing of personal data. This comprehensive policy outlines our practices in full
            accordance with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and our internal security standards.
          </div>

          {/* Quick nav pills */}
          <nav className="quick-nav" aria-label="Quick navigation">
            {['Purpose','Principles','Definitions','Lawful Bases','Rights','Security','Retention','Contact'].map(label => {
              const map: Record<string, string> = {
                'Purpose': 'purpose', 'Principles': 'principles', 'Definitions': 'definitions',
                'Lawful Bases': 'lawfulBases', 'Rights': 'rights', 'Security': 'security',
                'Retention': 'retention', 'Contact': 'complaints'
              };
              return (
                <button key={label} className="nav-pill" onClick={() => scrollToSection(map[label])}>
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="expand-all-row">
            <button className="expand-btn" onClick={toggleAll}>
              {expanded.length === policySections.length ? '− Collapse All' : '+ Expand All'}
            </button>
          </div>

          {/* Accordion sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {policySections.map((section, i) => {
              const isOpen = expanded.includes(section.id);
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className={`section-card${isOpen ? ' open' : ''}`}
                  style={cardDelay(i)}
                >
                  {/* Header button */}
                  <button className="section-btn" onClick={() => toggle(section.id)} aria-expanded={isOpen}>
                    <div className="btn-inner">
                      <span className="num-badge">{String(i + 1).padStart(2, '0')}</span>
                      <span className="icon-wrap">{section.icon}</span>
                      <span className="section-title">{section.title.replace(/^\d+\.\s/, '')}</span>
                    </div>
                    <span className="chevron"><ChevronDown size={14} /></span>
                  </button>

                  {/* Content panel */}
                  {isOpen && (
                    <div className="content-panel">
                      {/* Text paragraphs */}
                      {section.content.map((para, idx) => (
                        <p key={idx} className="para">{para}</p>
                      ))}

                      {/* Principles */}
                      {section.principles && (
                        <div className="principles-grid">
                          {section.principles.map((p, idx) => {
                            const [bold, ...rest] = p.split(':');
                            return (
                              <div key={idx} className="principle-item">
                                <span className="principle-dot" style={{ animationDelay: `${idx * 0.2}s` }} />
                                <p className="principle-text">
                                  <strong>{bold}:</strong>{rest.join(':')}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Tables */}
                      {section.tables?.map((tbl, ti) => (
                        <div key={ti} className="table-wrap">
                          <table>
                            <thead>
                              <tr>{tbl.headers.map((h, hi) => <th key={hi}>{h}</th>)}</tr>
                            </thead>
                            <tbody>
                              {tbl.rows.map((row, ri) => (
                                <tr key={ri}>
                                  {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}

                      {/* Subsections */}
                      {section.subsections?.map((sub, si) => (
                        <div key={si} className="subsection">
                          <h3 className="subsection-title">{sub.title}</h3>
                          <p className="subsection-body">{sub.content}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Decorative divider */}
          <div style={{ margin: '56px 0 0', textAlign: 'center' }}>
            <svg width="320" height="2" viewBox="0 0 320 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="1" x2="320" y2="1" stroke="url(#divGrad)" strokeWidth="1" />
              <defs>
                <linearGradient id="divGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </main>

        {/* Footer */}
        <footer className="policy-footer">
          © {new Date().getFullYear()} Waltergates Ghana Limited · All rights reserved · Effective February 2026
        </footer>
      </div>
    </>
  );
}