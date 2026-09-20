import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import bootLogo from '../assets/bootLogo1.png'; 

export default function ChronosSplash({ onComplete }) {
  const containerRef = useRef(null);
  const [randomizedLines, setRandomizedLines] = useState([]);
  const [rainColumns, setRainColumns] = useState([]);
  const [decryptedTitle, setDecryptedTitle] = useState("");
  
  const snippets = [
    "vector<int> dp(n, -1);", "TARGET: GSoC_2026", "0x8F3A2B", 
    "ACCESS GRANTED", "public static void main", "O(N log N)", 
    "g++ -O3 main.cpp", "matrix[i][j] = val;", "SYS_TIME: 2026-08-02",
    "SYSTEM_OVERRIDE"
  ];

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

  useEffect(() => {
    // THE CYPHER DECRYPT LOGIC
    let iteration = 0;
    const finalName = "ROOT://VADANTA";
    const cypherInterval = setInterval(() => {
      setDecryptedTitle(finalName.split("").map((letter, index) => {
        if (index < iteration) return finalName[index];
        return chars.charAt(Math.floor(Math.random() * chars.length));
      }).join(""));
      if (iteration >= finalName.length) clearInterval(cypherInterval);
      iteration += 1 / 4; // Adjust this number to make the decrypt faster or slower
    }, 40);

    // 1. Setup Stencil Text
    const lines = Array(15).fill(0).map(() => {
      const shuffled = [...snippets].sort(() => 0.5 - Math.random());
      return Array(10).fill(shuffled.join(" | ")).join(" | ");
    });
    setRandomizedLines(lines);

    // 2. Setup The Funky Matrix Rain Columns
    const techWords = ["VIGOUROUS", "GSOC", "ROOT", "C++", "JAVA", "DEDSEC", "SYS", "0x8F", "EXEC"];
    const rainChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=\"#&_(),.;:?!\\|{}<>[]^~          ";
    
    const columns = Array(35).fill(0).map(() => {
      let col = "";
      const len = Math.floor(Math.random() * 20) + 15;
      for(let i=0; i<len; i++) {
        if (Math.random() > 0.9) {
          const word = techWords[Math.floor(Math.random() * techWords.length)];
          col += word.split("").join("\n") + "\n";
        } else {
          col += rainChars.charAt(Math.floor(Math.random() * rainChars.length)) + "\n";
        }
      }
      return col;
    });
    setRainColumns(columns);

    // BACKGROUND ANIMATIONS
    let stencilTween = gsap.to(".stencil-layer", {
      "--mask-size": "35%",
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // CONSTANT GLITCH FOR "BOOTING UP" TEXT
    let glitchTween = gsap.to(".glitch-text", {
      opacity: 0.4,
      duration: 0.05,
      repeat: -1,
      yoyo: true,
      ease: "rough({ template: none.out, strength: 2, points: 20, taper: none, randomize: true, clamp: false })"
    });

    // THE MASTER TIMELINE
    let tl;
    const masterTimeout = setTimeout(() => {
      tl = gsap.timeline({
        onComplete: () => {
          clearInterval(cypherInterval);
          onComplete();
        }
      });

      // Step 1: The Pre-Rain Glitch.
      tl.to([".bg-matrix", ".stencil-layer"], {
        opacity: 0,
        duration: 0.1, 
        ease: "power4.out"
      })
      // Step 2: The CRT Monitor Collapse.
      .to(".center-logo", {
        scaleY: 0.02,
        duration: 0.2,
        ease: "power2.in"
      })
      .to(".center-logo", {
        scaleX: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out"
      })
      .set(".phase-1-wrapper", { display: "none" })
      // Step 3: Cinematic Suspense.
      .to({}, { duration: 0.4 })
      // Step 4: The Funky Matrix Rain Drops
      .set(".rain-container", { display: "flex" })
      .fromTo(".rain-col",
        { y: "-100vh", opacity: 1 },
        { y: "100vh", duration: 1.5, stagger: 0.04, ease: "power1.in" },
        "rain-start"
      )
      // Step 5: Vigourous Asset Glitches In AFTER the rain finishes
      .set(".wd2-container", { display: "flex" }, "rain-start+=2.8")
      .fromTo(".wd2-container",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "rain-start+=2.8"
      )
      // Step 6: Hold the logo on screen
      .to({}, { duration: 2.5 })
      // Step 7: Final fade out to your Phase 2 Homepage
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }, 3100);

    // THE FIX: React Strict Mode Cleanup Function
    return () => {
      clearInterval(cypherInterval);
      clearTimeout(masterTimeout);
      if (stencilTween) stencilTween.kill();
      if (glitchTween) glitchTween.kill();
      if (tl) tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 overflow-hidden bg-black flex items-center justify-center z-[99999999] cursor-none">
      
      {/* LAYER 1: Diagonal Matrix */}
      <div className="bg-matrix-container absolute inset-0 whitespace-nowrap opacity-20 text-neutral-900 font-mono text-2xl font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150">
        {randomizedLines.map((line, i) => (
          <div key={`bg-${i}`} className="bg-matrix w-[400%]">{line}</div>
        ))}
      </div>

      {/* LAYER 2: Stencil Mask */}
      <div 
        className="stencil-layer absolute inset-0 whitespace-nowrap text-green-500 font-mono text-2xl font-black flex flex-col justify-center gap-4 rotate-[-12deg] scale-150"
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

      {/* We moved the 'center-logo' class to this TOP wrapper so the entire box fades away properly! */}
    <div className="center-logo absolute z-10 flex items-center justify-center pointer-events-none">
  
    {/* Tightened the padding (px-6 py-2) and shrunk the border (border-l-4) for a sleek look */}
    <div className="bg-black/95 border-l-4 border-green-500 px-6 py-2 flex items-center gap-4 shadow-[0_0_30px_rgba(0,0,0,0.9)] rounded-sm">
    
    {/* Shrunk the arrow so it aligns perfectly with your text */}
    <span className="text-green-500 font-mono text-3xl md:text-4xl animate-pulse mt-1">
      {">"}
    </span>
    
    {/* Adjust the text-4xl/5xl here back to whatever custom size you had locked in! */}
        <div className="text-white font-black text-4l md:text-5l tracking-[0.5rem] uppercase drop-shadow-[0_0_10px_#22c55e] flex items-center mt-1">
          {decryptedTitle}
          {/* Tighter cursor */}
          <span className="text-green-500 animate-pulse ml-2 font-normal">_</span>
        </div>
        </div>
      </div>

      {/* LAYER 3: Vertical Matrix Rain */}
      <div className="rain-container hidden absolute inset-0 z-20 justify-between overflow-hidden px-2">
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

      {/* LAYER 4: The Vigourous Sequence */}
      <div className="wd2-container hidden absolute z-30 flex-col items-center justify-center pointer-events-none -mt-10">
        
        {/* Shrunk the width down to w-28 (mobile) and w-32 (desktop) */}
        {/* Completely removed the drop-shadow that was making the square box glow */}
        <div className="w-30 md:w-38 mb-4 relative">
          <img 
            src={bootLogo} 
            alt="Vigourous" 
            // Removed grayscale and brightness filters to bring your neon green back!
            className="w-full h-auto opacity-95 mix-blend-screen"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        
        {/* Slightly shrunk the BOOTING UP text to match the new logo size */}
        <div 
          className="glitch-text text-green-500 font-mono font-black text-lg md:text-xl tracking-[0.3rem]" 
          style={{ textShadow: "2px 0px 0px rgba(255,0,0,0.7), -2px 0px 0px rgba(0,255,255,0.7)" }}
        >
          BOOTING UP...
        </div>
      </div>
    </div>
  );
}