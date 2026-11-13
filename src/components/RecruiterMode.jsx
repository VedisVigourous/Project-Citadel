import React from 'react';

export default function RecruiterMode({ onClose, onOpenApp }) {
  const skills = [
    { category: "Languages", items: ["Java", "JavaScript (ES6+)", "C++", "HTML5/CSS3"] },
    { category: "Frameworks & Libs", items: ["React 19", "Vite 8", "Tailwind CSS v4", "GSAP", "Node.js"] },
    { category: "Cloud & AI", items: ["Google Gemini API", "Vertex AI", "GCP", "Groq LLM", "Prompt Engineering"] },
    { category: "Tools & Workflow", items: ["Git", "GitHub Actions", "VS Code", "Chrome Extensions API"] },
  ];

  const featuredProjects = [
    {
      title: "Project Citadel (VADANTA_OS)",
      badge: "Flagship OS",
      description: "Next-gen cyberpunk web operating system featuring real-time terminal shell, 4 canvas arcade engines, reactive widgets, and audio synthesizers.",
      tech: ["React 19", "Vite", "Tailwind", "Canvas API", "GSAP"],
      liveUrl: "https://github.com/VedisVigourous",
      githubUrl: "https://github.com/VedisVigourous",
      appId: "projects"
    },
    {
      title: "vAI Conversational Core",
      badge: "LLM Agent",
      description: "Integrated AI persona assistant built on top of high-throughput Groq LLM inference, providing contextual portfolio analytics and live dossier queries.",
      tech: ["Groq API", "Llama / GPT-OSS", "React", "REST"],
      liveUrl: "https://github.com/VedisVigourous",
      githubUrl: "https://github.com/VedisVigourous",
      appId: "ai"
    },
    {
      title: "Telemetry Data & Security Modules",
      badge: "Backend & Systems",
      description: "ETL backend data processing, real-time visitor telemetry tracking, and browser sandboxed security protocol simulations.",
      tech: ["Python", "JavaScript", "REST APIs", "LocalDB"],
      liveUrl: "https://github.com/VedisVigourous",
      githubUrl: "https://github.com/VedisVigourous",
      appId: "journey"
    }
  ];

  return (
    <div className="fixed inset-0 z-[99999] bg-[#050505]/95 backdrop-blur-xl overflow-y-auto no-scrollbar flex flex-col text-white font-mono animate-fade-in">
      {/* Background Matrix/Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* TOP HEADER BAR */}
      <header className="sticky top-0 z-50 w-full bg-[#050505]/90 border-b border-[#22c55e]/30 px-3 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 backdrop-blur-md">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#22c55e]"></span>
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] sm:text-sm font-bold text-[#22c55e] tracking-wider uppercase truncate">
              <span className="sm:hidden">EXECUTIVE BRIEF</span>
              <span className="hidden sm:inline">EXECUTIVE BRIEFING // CANDIDATE DOSSIER</span>
            </span>
            <span className="text-[9px] text-white/50 hidden md:inline truncate">
              Optimized for Technical Recruiters & Engineering Leads
            </span>
          </div>
        </div>

        <div className="flex items-center shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/40 hover:bg-[#22c55e] hover:text-black transition-all cursor-pointer text-[10px] sm:text-xs font-bold tracking-wider text-[#22c55e] active:scale-95 shadow-[0_0_12px_rgba(34,197,94,0.15)] whitespace-nowrap"
          >
            <span className="sm:hidden">✕ RETURN</span>
            <span className="hidden sm:inline">[ × RETURN TO OS ]</span>
          </button>
        </div>
      </header>

      {/* MAIN BENTO CONTAINER */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col gap-6 relative z-10">
        
        {/* ROW 1: HERO CANDIDATE CARD */}
        <section className="w-full rounded-2xl bg-gradient-to-b from-[#0a120c] to-[#050505] border border-[#22c55e]/30 p-5 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-[#22c55e]/60 overflow-hidden bg-black shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <img src="/profile.png" alt="Vadanta Kumar Chauhaan" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#22c55e] text-black text-[9px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                ONLINE
              </span>
            </div>

            {/* Candidate Bio */}
            <div className="flex-1 text-center md:text-left flex flex-col">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5">
                <h1 className="text-xl sm:text-3xl font-black text-white tracking-wide">
                  Vadanta Kumar Chauhaan
                </h1>
                <span className="px-2 py-0.5 rounded border border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e] text-[10px] font-bold">
                  B.Tech CSE &apos;28
                </span>
              </div>
              
              <p className="text-xs sm:text-sm text-[#22c55e] font-medium tracking-wide mb-3">
                Software Engineer • Frontend Architect • AI/Cloud Enthusiast
              </p>

              <p className="text-xs text-white/70 leading-relaxed max-w-2xl mb-5">
                Second-year Computer Science student at ABES Engineering College with a <strong className="text-white">9.13/10.00 GPA</strong>. Proficient in Java (DSA), React ecosystem, and modern cloud technologies (GCP, Vertex AI, Google Gemini). Actively preparing for <strong className="text-[#22c55e]">GSoC 2026</strong> and seeking impactful software engineering internships.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <a
                  href="/resume.pdf"
                  download
                  className="px-4 py-2 rounded-xl bg-[#22c55e] text-black hover:bg-[#86efac] font-bold text-xs tracking-wider transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download Resume PDF</span>
                </a>

                <a
                  href="mailto:vadanta592007@hotmail.com"
                  className="px-4 py-2 rounded-xl bg-black border border-[#22c55e]/40 text-[#22c55e] hover:border-[#22c55e] hover:bg-[#22c55e]/10 font-bold text-xs tracking-wider transition-all flex items-center gap-2 active:scale-95"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Directly</span>
                </a>

                <a
                  href="https://linkedin.com/in/vadanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black border border-white/20 text-white/80 hover:text-white hover:border-[#22c55e]/50 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/VedisVigourous"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-black border border-white/20 text-white/80 hover:text-white hover:border-[#22c55e]/50 font-bold text-xs tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
                >
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 2: SKILLS & CERTIFICATIONS MATRIX */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Technical Skills Card */}
          <div className="rounded-2xl bg-[#070b08] border border-[#22c55e]/25 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#22c55e]/20">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                  Technical Proficiencies
                </h2>
              </div>

              <div className="flex flex-col gap-3.5">
                {skills.map((group) => (
                  <div key={group.category} className="flex flex-col gap-1.5">
                    <span className="text-[10px] text-[#22c55e]/70 uppercase tracking-widest font-semibold">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-black border border-[#22c55e]/20 text-white/90 text-xs font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Accolades & Certifications */}
          <div className="rounded-2xl bg-[#070b08] border border-[#22c55e]/25 p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#22c55e]/20">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                  Accolades & Credentials
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                <div className="p-3 rounded-xl bg-black/60 border border-[#22c55e]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Oracle AI Certified Foundations Associate</span>
                    <span className="text-[9px] text-[#22c55e] border border-[#22c55e]/30 px-1.5 py-0.5 rounded">VERIFIED</span>
                  </div>
                  <p className="text-[11px] text-white/60">Validated expertise in AI/ML fundamentals, neural architectures, and enterprise deployments.</p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-[#22c55e]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Google Cloud GenAI Level 3 Credential</span>
                    <span className="text-[9px] text-[#22c55e] border border-[#22c55e]/30 px-1.5 py-0.5 rounded">GCP</span>
                  </div>
                  <p className="text-[11px] text-white/60">10+ Skill Badges completed across Vertex AI, Gemini LLM prompt design, and multimodality.</p>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-[#22c55e]/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">Deloitte Technology Simulation</span>
                    <span className="text-[9px] text-[#22c55e] border border-[#22c55e]/30 px-1.5 py-0.5 rounded">SIMULATION</span>
                  </div>
                  <p className="text-[11px] text-white/60">Engineered Python ETL logic for telemetry datasets and secure enterprise dashboard architectures.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 3: FEATURED FLAGSHIP PROJECTS */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#22c55e]/20">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                Flagship Projects
              </h2>
            </div>
            <span className="text-[10px] text-[#22c55e]/70">Tap card to inspect in OS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredProjects.map((p) => (
              <div
                key={p.title}
                onClick={() => {
                  if (onOpenApp) onOpenApp(p.appId);
                  onClose();
                }}
                className="group p-5 rounded-2xl bg-[#080d09] border border-[#22c55e]/25 hover:border-[#22c55e] hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#22c55e] border border-[#22c55e]/30 bg-[#22c55e]/10 px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                    <svg className="w-4 h-4 text-white/40 group-hover:text-[#22c55e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <h3 className="text-sm font-bold text-white group-hover:text-[#22c55e] transition-colors mb-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[9px] text-[#22c55e]/80 font-mono">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA: RETURN TO THE CITADEL EXPERIENCE */}
        <section className="w-full py-8 text-center flex flex-col items-center justify-center gap-3">
          <p className="text-xs text-white/50">
            Want to see the interactive terminal, 4 custom games, live telemetry, and draggable windows?
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-black font-black text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Launch Full Interactive Citadel OS</span>
          </button>
        </section>

      </main>
    </div>
  );
}
