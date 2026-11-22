import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import bootLogo from '../assets/bootLogo1.png';

export default function ChronosSplash({ onComplete }) {
  const containerRef = useRef(null);
  const [mode, setMode] = useState('choose'); // 'choose' | 'os-boot'
  const [randomizedLines, setRandomizedLines] = useState([]);
  const [rainColumns, setRainColumns] = useState([]);
  const [decryptedTitle, setDecryptedTitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedOption, setSelectedOption] = useState('recruiter'); // 'recruiter' | 'os'
  const [countdown, setCountdown] = useState(6);
  const [isPaused, setIsPaused] = useState(false);
  const hasTriggeredRef = useRef(false);

  const snippets = [
    "vector<int> dp(n, -1);", "TARGET: GSoC_2026", "0x8F3A2B",
    "ACCESS GRANTED", "public static void main", "O(N log N)",
    "g++ -O3 main.cpp", "matrix[i][j] = val;", "SYS_TIME: 2026-08-02",
    "SYSTEM_OVERRIDE"
  ];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

  // Tactical Audio micro-tone for hover/arrow selection
  const playTacticalBeep = (freq = 520) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Audio fallback silent
    }
  };

  // Rich harmonic boot confirmation chord
  const playBootChord = (target) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const isRecruiter = target === 'recruiter';
      const baseFreq = isRecruiter ? 523.25 : 329.63; // C5 or E4
      [baseFreq, baseFreq * 1.25, baseFreq * 1.5].forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = isRecruiter ? 'triangle' : 'sawtooth';
        osc.frequency.setValueAtTime(f, ctx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.04);
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

  // 1. Initial State: ROOT://VADANTA decrypts over darker coding background
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
      
      if (iteration >= finalName.length) {
        clearInterval(cypherInterval);
        // Show square cards once ROOT://VADANTA has decrypted
        setTimeout(() => setShowSelector(true), 150);
      }
      iteration += mobileCheck ? 1 : 0.4; 
    }, 35);

    // Prepare matrix rain columns for when OS mode is selected
    if (!mobileCheck) {
      const techWords = ["VIGOUROUS", "GSOC", "ROOT", "C++", "JAVA", "DEDSEC", "SYS", "0x8F", "EXEC"];
      const rainChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=\"#&_(),.;:?!\\|{}<>[]^~";
      
      const columns = Array(35).fill(0).map(() => {
        let col = "";
        const len = Math.floor(Math.random() * 20) + 15;
        for (let i = 0; i < len; i++) {
          if (Math.random() > 0.9) {
            col += techWords[Math.floor(Math.random() * techWords.length)].split("").join("\n") + "\n";
          } else {
            col += rainChars.charAt(Math.floor(Math.random() * rainChars.length)) + "\n";
          }
        }
        return col;
      });
      setRainColumns(columns);
    }

    const lines = Array(15).fill(0).map(() => {
      const shuffled = [...snippets].sort(() => 0.5 - Math.random());
      return Array(10).fill(shuffled.join(" | ")).join(" | ");
    });
    setRandomizedLines(lines);

    const stencilTween = gsap.to(".stencil-layer", {
      "--mask-size": "35%",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    return () => {
      clearInterval(cypherInterval);
      if (stencilTween) stencilTween.kill();
    };
  }, []);

  // Countdown timer in choose mode
  useEffect(() => {
    if (mode !== 'choose' || !showSelector || isPaused) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          triggerOsBoot();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, showSelector, isPaused]);

  // Recruiter Selection: direct launch into Recruiter Mode
  const triggerRecruiterBoot = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    playBootChord('recruiter');

    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => onComplete('recruiter')
    });
  };

  // Vadanta OS Selection: matrix rain & Vigourous boot on pure black background
  const triggerOsBoot = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;
    playBootChord('os');
    setMode('os-boot');
  };

  // OS Boot sequence: Matrix rain & Vigourous logo exclusively on black background
  useEffect(() => {
    if (mode !== 'os-boot') return;

    const glitchTween = gsap.to(".glitch-text", {
      opacity: 0.5,
      duration: 0.06,
      repeat: -1,
      yoyo: true,
      ease: "rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })"
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete('os');
      }
    });

    // 1. Matrix Rain Columns streaming down on pure black
    if (!isMobile) {
      tl.set(".rain-container", { display: "flex" })
        .fromTo(".rain-col",
          { y: "-100vh", opacity: 1 },
          { y: "100vh", duration: 1.5, stagger: 0.04, ease: "power1.in" },
          "rain-start"
        );
    }

    const logoEntryTime = isMobile ? "+=0.1" : "rain-start+=2.6";

    // 2. Vigourous Boot Logo and BOOTING UP... on pure black
    tl.set(".wd2-container", { display: "flex" }, logoEntryTime)
      .fromTo(".wd2-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
        logoEntryTime
      )
      .to({}, { duration: 2.2 })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.7,
        ease: "power2.inOut"
      });

    return () => {
      glitchTween.kill();
      tl.kill();
    };
  }, [mode]);

  // Keyboard navigation: [1], [2], [Arrows], [Enter], [Esc]
  useEffect(() => {
    if (mode !== 'choose' || !showSelector) return;

    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

      if (e.key === '1') {
        e.preventDefault();
        triggerRecruiterBoot();
      } else if (e.key === '2') {
        e.preventDefault();
        triggerOsBoot();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setIsPaused(true);
        setSelectedOption('recruiter');
        playTacticalBeep(520);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsPaused(true);
        setSelectedOption('os');
        playTacticalBeep(520);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (selectedOption === 'recruiter') triggerRecruiterBoot();
        else triggerOsBoot();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        triggerOsBoot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, showSelector, selectedOption]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-screen h-[100dvh] z-[999999] overflow-hidden bg-black flex flex-col items-center justify-center font-mono select-none"
    >
      {/* ========================================================================= */}
      {/* 1. CODING BACKGROUND (DARKER OPACITY - ONLY ACTIVE IN 'choose' MODE)       */}
      {/* ========================================================================= */}
      {mode === 'choose' && (
        <>
          <div className="bg-matrix-container absolute inset-0 whitespace-nowrap opacity-[0.07] text-neutral-800 font-mono text-2xl font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150 pointer-events-none">
            {randomizedLines.map((line, i) => (
              <div key={`bg-${i}`} className="bg-matrix w-[400%]">{line}</div>
            ))}
          </div>

          <div
            className="stencil-layer absolute inset-0 whitespace-nowrap text-green-500/80 font-mono text-2xl max-md:text-lg font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150 pointer-events-none opacity-25"
            style={{
              "--mask-size": "30%",
              WebkitMaskImage: 'radial-gradient(circle at center, black var(--mask-size), transparent 50%)',
              maskImage: 'radial-gradient(circle at center, black var(--mask-size), transparent 50%)'
            }}
          >
            {randomizedLines.map((line, i) => (
              <div key={`fg-${i}`} className="bg-matrix w-[400%] shadow-[0_0_15px_#22c55e]">{line}</div>
            ))}
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* 2. ROOT://VADANTA (DECRYPTS ON DARK CODING BACKGROUND)                     */}
      {/* ========================================================================= */}
      {mode === 'choose' && (
        <div className="center-logo relative z-20 flex flex-col items-center justify-center pointer-events-none mb-6 sm:mb-8 animate-[fadeIn_0.15s_ease-out]">
          <div className="bg-black/95 border-l-2 border-[#22c55e] px-5 py-2 max-md:px-3 max-md:py-1 flex items-center gap-4 max-md:gap-2 shadow-[0_0_20px_rgba(0,0,0,0.9)] rounded-none whitespace-nowrap">
            <span className="text-[#22c55e] font-mono text-2xl max-md:text-base animate-pulse shrink-0 font-bold">
              {">"}
            </span>
            <div className="text-white font-black text-2xl max-md:text-base tracking-[0.4rem] max-md:tracking-[0.15rem] uppercase drop-shadow-[0_0_10px_#22c55e] flex items-center whitespace-nowrap">
              {decryptedTitle}
              <span className="text-[#22c55e] animate-pulse ml-2 max-md:ml-1 font-normal shrink-0">_</span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MINIMAL DUAL-BOOT SQUARE CARDS (EXACT SQUARES, NO ROUNDED CORNERS)     */}
      {/* ========================================================================= */}
      {mode === 'choose' && showSelector && (
        <div className="dual-boot-selector relative z-30 flex flex-col items-center animate-[fadeIn_0.2s_ease-out]">
          
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-6">
            
            {/* SQUARE CARD 1: RECRUITER MODE */}
            <button
              type="button"
              onClick={triggerRecruiterBoot}
              onMouseEnter={() => {
                setIsPaused(true);
                setSelectedOption('recruiter');
                playTacticalBeep(520);
              }}
              className={`w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 aspect-square rounded-none border p-3 sm:p-4 flex flex-col justify-between cursor-pointer transition-all duration-150 text-left group ${
                selectedOption === 'recruiter'
                  ? 'bg-[#051409] border-[#22c55e] shadow-[0_0_25px_rgba(34,197,94,0.4)] scale-105'
                  : 'bg-black/90 border-[#22c55e]/40 hover:border-[#22c55e] opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] sm:text-xs text-[#22c55e] font-mono font-bold tracking-wider">[ 1 ]</span>
                <span className="w-1.5 h-1.5 rounded-none bg-[#22c55e]" />
              </div>

              <div className="flex flex-col items-center justify-center my-auto text-center w-full">
                <span className="text-xs sm:text-sm md:text-base font-black tracking-widest text-white uppercase group-hover:text-[#22c55e] transition-colors leading-tight">
                  RECRUITER
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] text-[#22c55e]/70 uppercase font-bold mt-1">
                  DOSSIER
                </span>
              </div>

              <div className="w-full flex items-center justify-between text-[8px] sm:text-[9px] text-[#22c55e]/60 font-mono tracking-wider">
                <span>&gt; EXEC_BRIEF</span>
                <span className="text-[#22c55e] opacity-0 group-hover:opacity-100 transition-opacity">↵</span>
              </div>
            </button>

            {/* SQUARE CARD 2: VADANTA_OS */}
            <button
              type="button"
              onClick={triggerOsBoot}
              onMouseEnter={() => {
                setIsPaused(true);
                setSelectedOption('os');
                playTacticalBeep(520);
              }}
              className={`w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 aspect-square rounded-none border p-3 sm:p-4 flex flex-col justify-between cursor-pointer transition-all duration-150 text-left group ${
                selectedOption === 'os'
                  ? 'bg-[#040e16] border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] scale-105'
                  : 'bg-black/90 border-cyan-500/40 hover:border-cyan-400 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] sm:text-xs text-cyan-400 font-mono font-bold tracking-wider">[ 2 ]</span>
                <span className="w-1.5 h-1.5 rounded-none bg-cyan-400" />
              </div>

              <div className="flex flex-col items-center justify-center my-auto text-center w-full">
                <span className="text-xs sm:text-sm md:text-base font-black tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors leading-tight">
                  VADANTA_OS
                </span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] text-cyan-400/70 uppercase font-bold mt-1">
                  DESKTOP
                </span>
              </div>

              <div className="w-full flex items-center justify-between text-[8px] sm:text-[9px] text-cyan-400/60 font-mono tracking-wider">
                <span>&gt; FULL_SYSTEM</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">↵</span>
              </div>
            </button>

          </div>

          {/* MINIMAL FOOTER / COUNTDOWN */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center gap-1 font-mono text-[9px] sm:text-[10px] tracking-widest text-white/50">
            <div className="flex items-center gap-2 sm:gap-3">
              <span>[ 1 ] RECRUITER</span>
              <span className="text-white/20">|</span>
              <span>[ 2 ] VADANTA OS</span>
              <span className="text-white/20">|</span>
              <span className="text-[#22c55e] font-bold">
                {isPaused ? 'PAUSED' : `AUTO: ${countdown}s`}
              </span>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. MATRIX RAIN ON PURE BLACK (ONLY ACTIVE IN 'os-boot' MODE)              */}
      {/* ========================================================================= */}
      {mode === 'os-boot' && !isMobile && (
        <div className="rain-container hidden absolute inset-0 z-20 justify-between overflow-hidden px-2 pointer-events-none">
          {rainColumns.map((col, i) => (
            <div
              key={`rain-${i}`}
              className="rain-col text-green-500 font-mono text-xl whitespace-pre-wrap leading-[0.85] font-bold text-center mt-[-20vh]"
              style={{ textShadow: "0px 0px 10px #22c55e" }}
            >
              {col}
            </div>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. VIGOUROUS LOGO & BOOTING UP ON PURE BLACK (ONLY IN 'os-boot' MODE)      */}
      {/* ========================================================================= */}
      {mode === 'os-boot' && (
        <div className="wd2-container hidden absolute z-30 flex flex-col items-center justify-center pointer-events-none">
          {!isMobile ? (
            <>
              <div className="w-30 md:w-38 mb-4 relative">
                <img
                  src={bootLogo}
                  alt="Vigourous"
                  className="w-full h-auto opacity-95 mix-blend-screen"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div
                className="glitch-text text-green-500 font-mono font-black text-lg md:text-xl tracking-[0.3rem]"
                style={{ textShadow: "2px 0px 0px rgba(255,0,0,0.7), 2px 0px 0px rgba(0,255,255,0.7)" }}
              >
                BOOTING UP...
              </div>
            </>
          ) : (
            <>
              <div className="relative flex items-center justify-center mb-8 p-3 max-md:p-4">
                <div className="absolute inset-0 border border-green-500/5"></div>
                <div className="absolute inset-1.5 border border-green-500/5 border-dashed"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-green-500/20"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-green-500/20"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-green-500/20"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-green-500/20"></div>
                <div className="w-24 relative z-10">
                  <img
                    src={bootLogo}
                    alt="Vigourous"
                    className="w-full h-auto opacity-90 mix-blend-screen"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              <div
                className="glitch-text text-green-500 font-mono font-black text-sm tracking-[0.25rem] mb-3"
                style={{ textShadow: "1px 0px 0px rgba(255,0,0,0.7), -1px 0px 0px rgba(0,255,255,0.7)" }}
              >
                BOOTING UP...
              </div>

              <div className="flex flex-col items-center gap-1.5 font-mono text-[9px] text-green-500/40 tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <span>CORE: ONLINE</span><span className="text-green-500/20">//</span><span>MEM: ALLOCATED</span>
                </div>
                <div className="flex gap-1 mt-1">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-1 bg-green-500/20 rounded-xs animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}></div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
