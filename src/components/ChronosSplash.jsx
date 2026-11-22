import { useEffect, useRef, useState } from 'react';
import bootLogo from '../assets/bootLogo1.png';

export default function ChronosSplash({ onComplete }) {
  const containerRef = useRef(null);
  const [phase, setPhase] = useState('decrypt'); // 'decrypt' | 'bootloader' | 'booting'
  const [selectedKernel, setSelectedKernel] = useState('recruiter'); // 'recruiter' | 'os'
  const [countdown, setCountdown] = useState(8);
  const [isPaused, setIsPaused] = useState(false);
  const [bootingTarget, setBootingTarget] = useState(null);
  const [randomizedLines, setRandomizedLines] = useState([]);
  const [decryptedTitle, setDecryptedTitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const snippets = [
    "vector<int> dp(n, -1);", "TARGET: GSoC_2026", "0x8F3A2B",
    "ACCESS GRANTED", "public static void main", "O(N log N)",
    "g++ -O3 main.cpp", "matrix[i][j] = val;", "SYS_TIME: 2026-08-02",
    "SYSTEM_OVERRIDE", "DUAL_BOOT_LOADER_v2.6", "KERNEL_SELECT_INIT"
  ];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

  // Play micro beep for tactical interface feedback
  const playTacticalBeep = (freq = 440, type = 'sine') => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch {
      // Audio fallback silent
    }
  };

  // Play final boot confirmation chord
  const playBootChord = (isRecruiter) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const baseFreq = isRecruiter ? 523.25 : 329.63; // C5 or E4
      [baseFreq, baseFreq * 1.25, baseFreq * 1.5].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = isRecruiter ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.04);
        osc.stop(ctx.currentTime + 0.28);
      });
    } catch {
      // Audio fallback silent
    }
  };

  // PHASE 1: Decryption & POST
  useEffect(() => {
    const mobileCheck = window.innerWidth < 768;
    setIsMobile(mobileCheck);

    let iteration = 0;
    const finalName = "ROOT://VADANTA";
    
    const cypherInterval = setInterval(() => {
      setDecryptedTitle(finalName.split("").map((letter, index) => {
        if (index < iteration) return finalName[index];
        return chars.charAt(Math.floor(Math.random() * chars.length));
      }).join(""));
      
      if (iteration >= finalName.length) clearInterval(cypherInterval);
      iteration += mobileCheck ? 1 : 0.45; 
    }, 35);

    const lines = Array(12).fill(0).map(() => {
      const shuffled = [...snippets].sort(() => 0.5 - Math.random());
      return Array(8).fill(shuffled.join(" | ")).join(" | ");
    });
    setRandomizedLines(lines);

    // After 1.7s of initial hardware decrypt, advance to Phase 2: Dual Boot Menu
    const transitionTimer = setTimeout(() => {
      clearInterval(cypherInterval);
      setPhase('bootloader');
      playTacticalBeep(620, 'triangle');
    }, 1700);

    return () => {
      clearInterval(cypherInterval);
      clearTimeout(transitionTimer);
    };
  }, []);

  // PHASE 2: Dual Boot Countdown Timer
  useEffect(() => {
    if (phase !== 'bootloader' || isPaused) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          triggerBoot('os');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isPaused]);

  // Execute Boot Transition
  const triggerBoot = (target) => {
    if (phase === 'booting') return;
    setBootingTarget(target);
    setPhase('booting');
    playBootChord(target === 'recruiter');

    // Quick smooth exit transition
    setTimeout(() => {
      onComplete(target);
    }, 450);
  };

  // Keyboard Navigation: [1], [2], [Arrows], [Enter], [Esc]
  useEffect(() => {
    if (phase !== 'bootloader') return;

    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

      if (e.key === '1') {
        e.preventDefault();
        triggerBoot('recruiter');
      } else if (e.key === '2') {
        e.preventDefault();
        triggerBoot('os');
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setIsPaused(true);
        setSelectedKernel('recruiter');
        playTacticalBeep(480, 'sine');
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsPaused(true);
        setSelectedKernel('os');
        playTacticalBeep(480, 'sine');
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerBoot(selectedKernel);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        triggerBoot('os');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, selectedKernel]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-screen h-[100dvh] z-[999999] overflow-hidden bg-[#030604] flex items-center justify-center font-mono select-none"
    >
      {/* BACKGROUND MATRIX SCROLL */}
      <div className="absolute inset-0 whitespace-nowrap opacity-10 text-[#22c55e] font-mono text-xl max-md:text-sm font-black flex flex-col justify-center gap-4 rotate-[-10deg] scale-125 pointer-events-none">
        {randomizedLines.map((line, i) => (
          <div key={`bg-${i}`} className="w-[300%]">{line}</div>
        ))}
      </div>

      {/* SCANLINE OVERLAY */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.85)_100%)] z-10" />

      {/* ========================================================================= */}
      {/* STAGE 1: HARDWARE POST & DECRYPTION (0.0s - 1.7s)                         */}
      {/* ========================================================================= */}
      {phase === 'decrypt' && (
        <div className="relative z-20 flex flex-col items-center justify-center animate-[fadeIn_0.2s_ease-out]">
          <div className="w-20 md:w-28 mb-5 relative drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            <img
              src={bootLogo}
              alt="Vigourous"
              className="w-full h-auto opacity-90 mix-blend-screen"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="bg-black/95 border border-[#22c55e]/60 px-5 py-2.5 flex items-center gap-3 shadow-[0_0_25px_rgba(34,197,94,0.25)] rounded-lg">
            <span className="text-[#22c55e] text-xl font-bold animate-pulse">&gt;</span>
            <div className="text-white font-black text-xl md:text-2xl tracking-[0.3em] uppercase drop-shadow-[0_0_10px_#22c55e] flex items-center">
              {decryptedTitle}
              <span className="text-[#22c55e] animate-pulse ml-2 font-normal">_</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[9px] md:text-[10px] text-[#22c55e]/60 tracking-widest uppercase">
            <span>MEM: 64TB</span>
            <span>//</span>
            <span>ARCH: x86_64</span>
            <span>//</span>
            <span className="text-[#22c55e] font-bold">KERNEL: 2.6_DUAL_BOOT</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 2: DUAL-BOOT BOOTLOADER KERNEL SELECTOR                             */}
      {/* ========================================================================= */}
      {phase === 'bootloader' && (
        <div className="relative z-30 w-full max-w-4xl mx-auto px-4 py-2 flex flex-col items-center justify-center animate-[fadeIn_0.25s_ease-out]">
          
          {/* TOP BIOS/GRUB TITLE BAR */}
          <div className="w-full border-b border-[#22c55e]/30 pb-2 mb-3 md:mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10px] md:text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
              <span className="text-[#22c55e] font-black tracking-widest uppercase drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                VADANTA_OS // DUAL-BOOT BOOTLOADER v2.6
              </span>
            </div>
            <div className="text-white/50 text-[9px] md:text-[10px] tracking-wider">
              HOST: vadanta.is-a.dev • OPERATOR ROLE SELECTION
            </div>
          </div>

          {/* PROMPT HEADER */}
          <div className="text-center mb-3 md:mb-5">
            <p className="text-white/90 text-xs md:text-sm font-bold tracking-wider mb-1">
              [?] IDENTIFY OPERATOR ROLE / SELECT SYSTEM TARGET
            </p>
            <p className="text-[#22c55e]/70 text-[10px] md:text-xs">
              Direct access for recruiters & hiring leads, or launch full interactive cyberpunk desktop.
            </p>
          </div>

          {/* DUAL-BOOT DUAL OPTIONS GRID */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-5">
            
            {/* OPTION 1: RECRUITER / EXECUTIVE BRIEFING */}
            <div
              onClick={() => triggerBoot('recruiter')}
              onMouseEnter={() => {
                setIsPaused(true);
                setSelectedKernel('recruiter');
                playTacticalBeep(520, 'sine');
              }}
              className={`relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between group overflow-hidden ${
                selectedKernel === 'recruiter'
                  ? 'bg-[#06150b]/90 border-[#22c55e] shadow-[0_0_35px_rgba(34,197,94,0.35)] scale-[1.01]'
                  : 'bg-black/80 border-[#22c55e]/30 hover:border-[#22c55e]/70 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Tactical Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#22c55e]" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#22c55e]" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#22c55e]" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#22c55e]" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#22c55e]/20 border border-[#22c55e]/60 text-[#22c55e] text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                    KEY: [ 1 ] • RECOMMENDED
                  </span>
                  <span className="text-[10px] text-[#22c55e] font-mono font-bold animate-pulse">
                    ⚡ FAST-TRACK
                  </span>
                </div>

                <h3 className="text-white text-base md:text-lg font-black tracking-wider uppercase mb-1 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                  Recruiter / Executive Mode
                </h3>
                <p className="text-[#22c55e]/80 text-[10px] md:text-[11px] font-bold mb-3">
                  Executive Briefing & Candidate Dossier
                </p>

                <ul className="space-y-1.5 text-[10px] md:text-xs text-white/80 font-mono mb-4">
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#22c55e] font-bold">✓</span>
                    <span>1-Click Verified PDF Resume Download</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#22c55e] font-bold">✓</span>
                    <span>Production Projects & Official Live Repos</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#22c55e] font-bold">✓</span>
                    <span>Core Stack: Java (DSA), React 19, Google Cloud</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-[#22c55e] font-bold">✓</span>
                    <span>B.Tech CSE &apos;28 • 9.13 GPA • GSoC &apos;26 Prep</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerBoot('recruiter');
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-xs md:text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(34,197,94,0.5)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>⚡ BOOT RECRUITER MODE</span>
                  <span className="text-[10px] bg-black/20 px-1.5 py-0.2 rounded font-mono font-bold">[1]</span>
                </button>
                <p className="text-[8px] md:text-[9px] text-white/40 text-center mt-1.5">
                  (Includes one-click option to switch to Full OS anytime)
                </p>
              </div>
            </div>

            {/* OPTION 2: VADANTA_OS // FULL CYBER DESKTOP */}
            <div
              onClick={() => triggerBoot('os')}
              onMouseEnter={() => {
                setIsPaused(true);
                setSelectedKernel('os');
                playTacticalBeep(420, 'sawtooth');
              }}
              className={`relative p-4 md:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between group overflow-hidden ${
                selectedKernel === 'os'
                  ? 'bg-[#050f15]/90 border-cyan-400 shadow-[0_0_35px_rgba(56,189,248,0.35)] scale-[1.01]'
                  : 'bg-black/80 border-cyan-500/30 hover:border-cyan-400/70 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Tactical Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/60 text-cyan-400 text-[9px] md:text-[10px] font-black tracking-widest uppercase">
                    KEY: [ 2 ] • GAMIFIED
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono font-bold">
                    🕹️ FULL DESKTOP
                  </span>
                </div>

                <h3 className="text-white text-base md:text-lg font-black tracking-wider uppercase mb-1 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                  Vadanta_OS Desktop
                </h3>
                <p className="text-cyan-400/80 text-[10px] md:text-[11px] font-bold mb-3">
                  Full Interactive Cyber Citadel Web OS
                </p>

                <ul className="space-y-1.5 text-[10px] md:text-xs text-white/80 font-mono mb-4">
                  <li className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Interactive Linux Terminal Shell with AI Proxy</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>4 Canvas Arcades (Cyber Chess 2P, Pong, Tron)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Draggable Glass Windows & Live Git Telemetry</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>Synthesizers & Cyberpunk Ambient Soundtrack</span>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerBoot('os');
                  }}
                  className="w-full py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-black text-xs md:text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.5)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>🚀 LAUNCH VADANTA OS</span>
                  <span className="text-[10px] bg-black/20 px-1.5 py-0.2 rounded font-mono font-bold">[2]</span>
                </button>
                <p className="text-[8px] md:text-[9px] text-white/40 text-center mt-1.5">
                  (Default boot target • Full exploratory experience)
                </p>
              </div>
            </div>

          </div>

          {/* FOOTER BAR: AUTO-BOOT STATUS & KEYBOARD HINTS */}
          <div className="w-full bg-[#050805] border border-white/10 rounded-xl px-3 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] md:text-[10px]">
            <div className="flex items-center gap-2 text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
              {isPaused ? (
                <span className="text-amber-400 font-bold">
                  [ PAUSED ] Press [ 1 ] or [ 2 ] or click card to boot
                </span>
              ) : (
                <span>
                  Automatic boot to <strong className="text-cyan-400">Vadanta OS</strong> in{' '}
                  <span className="text-[#22c55e] font-black text-xs">{countdown}s</span>...
                </span>
              )}
            </div>

            <div className="flex items-center gap-3 text-white/50">
              <span className="hidden sm:inline">
                NAV: <strong className="text-white/80">[1 / 2]</strong> SELECT •{' '}
                <strong className="text-white/80">[ENTER]</strong> BOOT
              </span>
              <button
                type="button"
                onClick={() => triggerBoot('os')}
                className="text-[#22c55e] hover:underline cursor-pointer font-bold tracking-wider"
              >
                Skip to OS →
              </button>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* STAGE 3: BOOTING TRANSITION ANIMATION                                     */}
      {/* ========================================================================= */}
      {phase === 'booting' && (
        <div className="relative z-30 flex flex-col items-center justify-center p-6 text-center animate-[fadeIn_0.15s_ease-out]">
          <div className="w-10 h-10 border-2 border-t-transparent rounded-full animate-spin mb-4"
            style={{ borderColor: bootingTarget === 'recruiter' ? '#22c55e' : '#38bdf8', borderTopColor: 'transparent' }}
          />

          <h3 className="text-xl md:text-2xl font-black tracking-widest uppercase mb-1"
            style={{ color: bootingTarget === 'recruiter' ? '#22c55e' : '#38bdf8' }}
          >
            {bootingTarget === 'recruiter' ? 'DEPLOYING RECRUITER MODE' : 'INITIALIZING VADANTA_OS'}
          </h3>

          <p className="text-white/70 text-xs tracking-wider">
            {bootingTarget === 'recruiter'
              ? '> Loading Candidate Briefing & Executive Dossier...'
              : '> Mounting kernel, terminal runtime, and canvas engines...'}
          </p>
        </div>
      )}

    </div>
  );
}
