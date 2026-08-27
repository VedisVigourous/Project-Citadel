import React, { useState } from 'react';

// 1. THE ACTIVE NEURAL DATA
// 1. THE ACTIVE NEURAL DATA
const journeyNodes = [
  {
    id: "origin",
    title: "SYS.BOOTLOADER",
    date: "Pre-2025",
    category: "BACKGROUND",
    desc: "Root access established early. Progressed from troubleshooting family hardware and visual block coding in 4th grade to writing raw syntax by 9th grade, laying the permanent foundation for CSE.",
    image: null,
    x: 6, y: 40
  },
  {
    id: "first_commit",
    title: "HELLO_WORLD",
    date: "July 25, 2025",
    category: "MILESTONE",
    desc: "The genesis of version control. Scaled my repository from my very first push to almost 1,000 commits tracking my Java learning journey, officially transitioning from local experimentation to global repository management.",
    image: null,
    project: {
      type: "ACHIEVEMENT",
      name: "GITHUB RECOGNITION",
      stack: "PULL SHARK // YOLO",
      details: "Earned exclusive GitHub developer badges for consistent pull request merges and rapid, direct-to-main repository commits."
    },
    x: 18, y: 75
  },
  {
    id: "genesis",
    title: "B.Tech CSE Enrollment",
    date: "Late 2025",
    category: "ACADEMIC",
    desc: "Enrolled in Computer Science and Engineering at ABES Engineering College. Built a strong foundation in core programming, object-oriented principles, and system logic.",
    image: "/campus.jpg",
    x: 31, y: 30
  },
  {
    id: "algo_grind",
    title: "DSA & Problem Solving",
    date: "Early 2026",
    category: "SKILL BUILDING",
    desc: "Built a solid foundation in core Data Structures and Algorithms during my first year. Transitioned to LeetCode for advanced algorithmic problem-solving and CodeChef for competitive programming in Year 2.",
    image: null,
    x: 44, y: 80
  },
  {
    id: "arcade_loot",
    title: "Google Cloud Arcade",
    date: "Late 2025",
    category: "CERTIFICATION",
    desc: "Selected as one of only 70 participants to complete advanced generative AI and cloud infrastructure challenges on GCP, earning official badges and the exclusive physical swag box.",
    image: "/swags.jpg",
    x: 57, y: 35
  },
  {
    id: "hackdays",
    title: "MLH HackDays Finalist",
    date: "Apr 2026",
    category: "HACKATHON",
    desc: "Cleared the preliminary elimination rounds to advance to the finals at the offline Major League Hacking event. Collaborated in a 4-person team to architect a custom AI solution, securing a Top 33 finish out of 120+ teams.",
    image: "/hackdays.jpg",
    project: {
      type: "MODULE",
      name: "PROJECT RESONANCE",
      stack: "GEMINI API // REACT // NODE",
      details: "An intelligent web-analysis tool utilizing multimodal AI to map and process complex data structures on the fly."
    },
    x: 70, y: 50
  },
  {
    id: "tech_club",
    title: "Technovation Induction",
    date: "Aug 2026",
    category: "LEADERSHIP",
    desc: "Officially recruited into Technovation: The Networking Club. Driving community growth, managing technical operations, and facilitating developer events to scale campus-wide networking.",
    image: "/ticket.jpg",
    x: 83, y: 25
  },
  {
    id: "horizon",
    title: "Target: Open Source",
    date: "2027",
    category: "GOAL",
    desc: "Actively studying large-scale codebases and preparing architecture for upcoming Google Summer of Code (GSoC) and GirlScript Summer of Code (GSSoC) contributions.",
    image: null,
    x: 95, y: 65
  }
];

// 2. GENERATE HIGH-VISIBILITY DUMMY NODES
const generateDummyNodes = () => {
  const dummies = [];
  // Creates a strict, dense hardware grid
  for (let x = 10; x <= 95; x += 10) {
    for (let y = 15; y <= 85; y += 15) {
      // Excludes spots that are too close to your real milestones
      const isTooClose = journeyNodes.some(n => Math.abs(n.x - x) < 7 && Math.abs(n.y - y) < 7);
      if (!isTooClose) {
        dummies.push({ x, y });
      }
    }
  }
  return dummies;
};

// 3. PERFECT ORTHOGONAL ROUTING
const generatePCBPath = (nodes) => {
  return nodes.reduce((acc, node, i, arr) => {
    if (i === 0) return `M ${node.x} ${node.y}`;
    const prev = arr[i - 1];
    const midX = prev.x + (node.x - prev.x) / 2;
    return `${acc} H ${midX} V ${node.y} H ${node.x}`;
  }, "");
};

// Inactive background routing to make the board look complex
const decorativeTraces = [
  "M 10 25 H 20 V 15", "M 30 15 V 35 H 40",
  "M 80 85 V 75 H 90", "M 15 85 H 30 V 70 H 40",
  "M 55 15 H 65 V 25 H 75"
];

const dummyNodes = generateDummyNodes();

export default function JourneyLog({ onClose, themeHue = 0 }) {
  const [activeNode, setActiveNode] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mainTrace = generatePCBPath(journeyNodes);

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-[#020502]/95 backdrop-blur-3xl flex flex-col font-mono text-[#22c55e] overflow-hidden animate-[fadeIn_0.3s_ease-out]"
      onMouseMove={(e) => {
        // Calculate tilt constraints (max 8 degrees)
        const x = (e.clientX / window.innerWidth - 0.5) * 16;
        const y = (e.clientY / window.innerHeight - 0.5) * -16;
        setMousePos({ x, y });
      }}
    >
      {/* THE ENGINEERING GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
          backgroundSize: '2.5% 2.5%'
        }}
      ></div>

      {/* Top Bar */}
      <div className="h-12 border-b border-[#22c55e]/30 flex items-center justify-between px-6 shrink-0 z-50 relative bg-black/60 shadow-lg">
        <span className="font-bold text-sm tracking-[0.2em] text-[#22c55e]">Journey.log // HARDWARE_ROUTING_ACTIVE</span>
        <button onClick={onClose} className="text-[#22c55e] hover:text-white hover:bg-red-600 border border-[#22c55e]/50 hover:border-red-600 px-4 py-1 transition-all text-xs font-bold tracking-widest cursor-pointer">
          [ DISCONNECT ]
        </button>
      </div>

      {/* The Circuit Board Area (NOW WITH 3D PARALLAX) */}
      <div 
        className="flex-1 relative w-full h-full z-10" 
        onClick={() => setActiveNode(null)}
        style={{
          transform: `perspective(1200px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        
        {/* VISIBLE BACKGROUND DUMMY NODES */}
        {dummyNodes.map((d, i) => (
          <div key={`dummy-${i}`} className="absolute w-2.5 h-2.5 rounded-full border border-[#22c55e]/40 bg-black -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-10 shadow-[0_0_5px_rgba(34,197,94,0.1)]" style={{ left: `${d.x}%`, top: `${d.y}%` }}>
            <div className="w-[2px] h-[2px] bg-[#22c55e]/40 rounded-full"></div>
          </div>
        ))}

        {/* SVG Circuit Traces */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          
          {/* Inactive Decorative Traces */}
          {decorativeTraces.map((d, i) => (
            <path key={`deco-${i}`} d={d} fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
          ))}

          {/* 1. Base Copper Trace (Draws sequentially first) */}
          <path 
            d={mainTrace} 
            fill="none" 
            stroke="rgba(34,197,94,0.4)" 
            strokeWidth="0.8" 
            vectorEffect="non-scaling-stroke"
            pathLength="100"
            className="animate-[drawMainTrace_2.5s_ease-in-out_forwards]" 
            style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: '1.5s' }}
          />

          {/* 2. INFINITE FLOWING CURRENT (Ignites & loops perfectly) */}
          <path 
            d={mainTrace} 
            fill="none" 
            stroke="#4ade80" 
            strokeWidth="1.5" 
            vectorEffect="non-scaling-stroke" 
            strokeDasharray="6 14" // 20px total cycle
            className="opacity-0 animate-[flowData_1s_linear_infinite,igniteCurrent_0.2s_forwards]" 
            style={{ animationDelay: '0s, 4s' }} 
          />
        </svg>

        {/* ACTIVE NODES (Pixel Perfect Alignment with Custom Bootloader Shape) */}
        {journeyNodes.map((node, i) => (
          <div
            key={node.id}
            /* FIXED: Force the parent to be exactly w-5 h-5 so it centers perfectly on the trace */
            className="absolute z-30 w-5 h-5 group cursor-pointer opacity-0 animate-[bootNode_0.4s_ease-out_forwards]"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`, 
              animationDelay: `${i * 0.25}s` 
            }}
            onClick={(e) => {
              e.stopPropagation();
              setActiveNode(node);
            }}
          >
            {/* THE SHAPE: Rotates, scales, and handles future-state styling for 'horizon' */}
            <div className={`absolute inset-0 flex items-center justify-center border-2 transition-all duration-300 ${
              node.id === 'origin' ? 'rotate-45' : 'rounded-full'
            } ${
              node.id === 'horizon' ? 'border-dashed opacity-60' : '' /* Future Node Styling */
            } ${
              activeNode?.id === node.id 
                ? 'border-[#4ade80] scale-125 shadow-[0_0_20px_#4ade80] bg-black' 
                : 'border-[#22c55e] bg-[#050505] group-hover:border-[#4ade80] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]'
            }`}>
              <div className={`w-1.5 h-1.5 ${node.id === 'origin' ? 'rounded-sm' : 'rounded-full'} ${
                activeNode?.id === node.id 
                  ? 'bg-[#4ade80] animate-pulse' 
                  : node.id === 'horizon' 
                    ? 'bg-[#22c55e]/30 animate-[pulse_3s_ease-in-out_infinite]' /* Erratic slow pulse */
                    : 'bg-[#22c55e] group-hover:bg-[#4ade80]'
              }`}></div>
            </div>
            
            {/* THE LABEL: Anchors to the bottom of the 5x5 wrapper, unaffected by the diamond's rotation */}
            <div className={`absolute top-[160%] left-1/2 -translate-x-1/2 whitespace-nowrap tracking-[0.2em] text-[8px] font-bold transition-all duration-300 uppercase px-2 py-0.5 bg-black/90 border ${activeNode?.id === node.id ? 'text-[#4ade80] border-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]' : 'text-[#22c55e]/70 border-[#22c55e]/30 group-hover:border-[#22c55e] group-hover:text-white'}`}>
              {node.id === 'origin' ? 'SYS.BOOT' : `C${i}::${node.title}`}
            </div>
          </div>
        ))}

        {/* IN-PLACE GLASSMORPHIC HARDWARE POPUP */}
        {activeNode && (
          <div 
            className="absolute z-50 pointer-events-auto"
            style={{ 
              left: activeNode.x > 50 ? 'auto' : `calc(${activeNode.x}% + 35px)`,
              right: activeNode.x > 50 ? `calc(${100 - activeNode.x}% + 35px)` : 'auto',
              top: activeNode.y < 35 ? `calc(${activeNode.y}% - 15px)` : (activeNode.y > 65 ? 'auto' : `${activeNode.y}%`),
              bottom: activeNode.y > 65 ? `calc(${100 - activeNode.y}% - 15px)` : 'auto',
              transform: activeNode.y >= 35 && activeNode.y <= 65 ? 'translateY(-50%)' : 'none'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[320px] bg-[#020502]/95 backdrop-blur-2xl border border-[#22c55e]/60 rounded-sm p-5 shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(34,197,94,0.3)] text-center relative overflow-hidden flex flex-col animate-[glassFadeIn_0.2s_ease-out_forwards]">
              
              <div className="text-xl font-bold text-white tracking-[0.25em] mb-4 drop-shadow-md uppercase">
                {activeNode.title}
              </div>

              {activeNode.image && (
                <div className="relative w-full h-40 bg-black border border-[#22c55e]/30 mb-4 p-1 group">
                  {/* HUD Corner Crosshairs */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#4ade80] z-10 pointer-events-none"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#4ade80] z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#4ade80] z-10 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#4ade80] z-10 pointer-events-none"></div>
                  
                  {/* PURE IMAGE WITH PARENT-THEME COUNTER-ROTATION (SMOOTH EASE) */}
                  <style>{`
                    .alien-fix-${activeNode.id} {
                      filter: grayscale(100%) sepia(50%) hue-rotate(75deg) contrast(125%) brightness(75%);
                      /* Bumped to 0.8 seconds with an ease-in-out curve for a cinematic fade */
                      transition: filter 0.8s ease-in-out, transform 0.8s ease-in-out !important;
                    }
                    .group:hover .alien-fix-${activeNode.id} {
                      filter: hue-rotate(-${themeHue}deg) !important;
                      transform: scale(1.02); /* Adds a barely noticeable, premium zoom effect */
                    }
                  `}</style>
                  
                  <div className="w-full h-full overflow-hidden relative bg-black">
                    <img 
                      src={activeNode.image} 
                      alt={activeNode.title} 
                      className={`w-full h-full p-1 alien-fix-${activeNode.id} ${
                        activeNode.id === 'arcade_loot' ? 'object-contain' : 'object-cover object-top'
                      }`} 
                    />
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#22c55e]/80 to-transparent mb-4"></div>
              
              <div className="text-left text-xs text-[#22c55e]/90 leading-relaxed font-mono">
                <span className="text-[#4ade80] animate-pulse">&gt; </span>
                {activeNode.desc}
              </div>

              {activeNode.project && (
                <div className="mt-4 p-3 bg-[#22c55e]/5 border border-[#22c55e]/30 rounded-sm relative group overflow-hidden text-left">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#4ade80]/50 shadow-[0_0_5px_#4ade80] animate-[scanline_2s_linear_infinite]"></div>
                  <div className="text-[10px] text-[#4ade80] font-bold tracking-widest uppercase mb-1 drop-shadow-md">
                    {activeNode.project.type || "MODULE"} :: {activeNode.project.name}
                  </div>
                  <div className="text-[10px] text-[#22c55e]/80 leading-relaxed mb-2 font-mono">
                    {activeNode.project.details}
                  </div>
                  <div className="text-[8px] text-[#22c55e]/60 tracking-[0.2em] uppercase border-t border-[#22c55e]/20 pt-1">
                    STACK: <span className="text-[#22c55e]/90">{activeNode.project.stack}</span>
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#22c55e]/80 to-transparent mt-4"></div>

              <div className="mt-3 flex justify-between items-center px-2">
                <span className="text-[9px] text-[#22c55e]/60 tracking-widest uppercase">{activeNode.category}</span>
                <span className="text-[9px] text-[#4ade80] tracking-widest uppercase">{activeNode.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PERIPHERAL METRICS HUD (Top-Left Anchor) */}
        <div className="absolute top-15 left-3 border border-[#22c55e]/30 bg-[#020502]/80 backdrop-blur-md p-3 rounded-sm pointer-events-none z-50 shadow-[0_0_15px_rgba(34,197,94,0.1)] flex flex-col gap-1.5">
          <div className="text-[#4ade80] text-[10px] font-bold tracking-widest uppercase mb-1 border-b border-[#22c55e]/30 pb-1">
            SYS.DIAGNOSTICS
          </div>
          <div className="text-[#22c55e]/70 text-[9px] tracking-wider font-mono">
            NODES_LINKED: <span className="text-white ml-1">7/8 ONLINE</span>
          </div>
          <div className="text-[#22c55e]/70 text-[9px] tracking-wider font-mono">
            ACTIVE_PHASE: <span className="text-white ml-1">SIH_OPS</span>
          </div>
          <div className="text-[#22c55e]/70 text-[9px] tracking-wider font-mono">
            NET_STATUS: <span className="text-[#4ade80] animate-pulse ml-1">OPTIMAL</span>
          </div>
        </div>

      {/* Embedded CSS Animations */}
      <style>{`
        /* 1. Center the node precisely via transform */
        @keyframes bootNode {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        
        /* 2. Base trace draws itself */
        @keyframes drawMainTrace {
          to { stroke-dashoffset: 0; }
        }

        /* 3. Current ignites */
        @keyframes igniteCurrent {
          to { opacity: 1; }
        }

        /* 4. Current flows infinitely (Offset must match a multiple of the 20px dasharray to loop seamlessly) */
        @keyframes flowData {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes glassFadeIn {
          0% { opacity: 0; transform: translateY(5px); backdrop-filter: blur(0px); }
          100% { opacity: 1; transform: translateY(0px); backdrop-filter: blur(24px); }
        }
      `}</style>
    </div>
  );
}