import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import bootLogo from '../assets/bootLogo1.png';

export default function ChronosSplash({ onComplete }) {
  const containerRef = useRef(null);
  const [randomizedLines, setRandomizedLines] = useState([]);
  const [rainColumns, setRainColumns] = useState([]);
  const [decryptedTitle, setDecryptedTitle] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const snippets = [
    "vector<int> dp(n, -1);", "TARGET: GSoC_2026", "0x8F3A2B",
    "ACCESS GRANTED", "public static void main", "O(N log N)",
    "g++ -O3 main.cpp", "matrix[i][j] = val;", "SYS_TIME: 2026-08-02",
    "SYSTEM_OVERRIDE"
  ];
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

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
      iteration += mobileCheck ? 1 : 0.25; 
    }, 40);

    const lines = Array(15).fill(0).map(() => {
      const shuffled = [...snippets].sort(() => 0.5 - Math.random());
      return Array(10).fill(shuffled.join(" | ")).join(" | ");
    });
    setRandomizedLines(lines);

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

    let stencilTween = gsap.to(".stencil-layer", {
      "--mask-size": "35%",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    let glitchTween = gsap.to(".glitch-text", {
      opacity: 0.5,
      duration: 0.06,
      repeat: -1,
      yoyo: true,
      ease: "rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })"
    });

    let tl;
    const masterTimeout = setTimeout(() => {
      tl = gsap.timeline({
        onComplete: () => {
          clearInterval(cypherInterval);
          onComplete();
        }
      });

      tl.to([".bg-matrix", ".stencil-layer"], {
        opacity: 0,
        duration: 0.15,
        ease: "power4.out"
      });

      if (mobileCheck) {
        tl.to(".center-logo", {
          opacity: 0,
          scale: 0.9,
          filter: "blur(6px)",
          duration: 0.25,
          ease: "power3.in"
        });
      } else {
        tl.to(".center-logo", { scaleY: 0.02, duration: 0.2, ease: "power2.in" })
          .to(".center-logo", { scaleX: 0, opacity: 0, duration: 0.2, ease: "power2.out" })
          .set(".phase-1-wrapper", { display: "none" });
      }

      tl.to({}, { duration: 0.3 });

      if (!mobileCheck) {
        tl.set(".rain-container", { display: "flex" })
          .fromTo(".rain-col",
            { y: "-100vh", opacity: 1 },
            { y: "100vh", duration: 1.5, stagger: 0.04, ease: "power1.in" },
            "rain-start"
          );
      }

      const logoEntryTime = mobileCheck ? "+=0.1" : "rain-start+=2.8";

      tl.set(".wd2-container", { display: "flex" }, logoEntryTime)
        .fromTo(".wd2-container",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" },
          logoEntryTime
        )
        .to({}, { duration: 2.4 })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut"
        });
    }, 3000);

    return () => {
      clearInterval(cypherInterval);
      clearTimeout(masterTimeout);
      if (stencilTween) stencilTween.kill();
      if (glitchTween) glitchTween.kill();
      if (tl) tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-screen h-[100dvh] z-[99999999] overflow-hidden bg-black flex items-center justify-center cursor-none select-none"
    >
      <div className="bg-matrix-container absolute inset-0 whitespace-nowrap opacity-15 max-md:opacity-10 text-neutral-900 font-mono text-2xl font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150 pointer-events-none">
        {randomizedLines.map((line, i) => (
          <div key={`bg-${i}`} className="bg-matrix w-[400%]">{line}</div>
        ))}
      </div>

      <div
        className="stencil-layer absolute inset-0 whitespace-nowrap text-green-500 font-mono text-2xl max-md:text-lg font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150 pointer-events-none"
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

      {/* LAYER 3: The True Original Scale Restored */}
      <div className="center-logo absolute z-10 flex items-center justify-center pointer-events-none">
        <div className="bg-black/95 border-l-2 border-green-500 px-5 py-2 max-md:px-3 max-md:py-1 flex items-center gap-4 max-md:gap-2 shadow-[0_0_20px_rgba(0,0,0,0.9)] max-md:shadow-[0_0_15px_rgba(0,0,0,0.9)] rounded-sm whitespace-nowrap">
          
          <span className="text-green-500 font-mono text-2xl max-md:text-base animate-pulse shrink-0 font-bold">
            {">"}
          </span>
          
          <div className="text-white font-black text-2xl max-md:text-base tracking-[0.4rem] max-md:tracking-[0.15rem] uppercase drop-shadow-[0_0_10px_#22c55e] max-md:drop-shadow-none flex items-center whitespace-nowrap">
            {decryptedTitle}
            <span className="text-green-500 animate-pulse ml-2 max-md:ml-1 font-normal shrink-0">_</span>
          </div>
          
        </div>
      </div>

      {!isMobile && (
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

      <div className="wd2-container hidden absolute z-30 flex flex-col items-center justify-center pointer-events-none">
        
        {!isMobile ? (
          /* COMMAND 2: DESKTOP PURE RENDER - NO SQUARES, NO BLUR */
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
          /* COMMAND 3: MOBILE DIMMED TACTICAL BOX */
          <>
            <div className="relative flex items-center justify-center mb-8 p-3 max-md:p-4">
              
              {/* Ultra-faint stealth borders */}
              <div className="absolute inset-0 border border-green-500/5"></div>
              <div className="absolute inset-1.5 border border-green-500/5 border-dashed"></div>

              {/* Muted corner brackets */}
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
    </div>
  );
}