import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. THE ACTIVE NEURAL DATA
const journeyNodes = [
  {
    id: "origin",
    title: "SYS.BOOTLOADER",
    date: "Pre-2025",
    category: "BACKGROUND",
    desc: "Root access established early. Progressed from troubleshooting family hardware and visual block coding in 4th grade to writing raw syntax by 9th grade, laying the permanent foundation for CSE.",
    image: null,
    x: 6,
    y: 40,
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
      details:
        "Earned exclusive GitHub developer badges for consistent pull request merges and rapid, direct-to-main repository commits.",
    },
    x: 18,
    y: 75,
  },
  {
    id: "genesis",
    title: "B.Tech CSE Enrollment",
    date: "Late 2025",
    category: "ACADEMIC",
    desc: "Enrolled in Computer Science and Engineering at ABES Engineering College. Built a strong foundation in core programming, object-oriented principles, and system logic.",
    image: "/campus.jpg",
    x: 31,
    y: 30,
  },
  {
    id: "algo_grind",
    title: "DSA & Problem Solving",
    date: "Early 2026",
    category: "SKILL BUILDING",
    desc: "Built a solid foundation in core Data Structures and Algorithms during my first year. Transitioned to LeetCode for advanced algorithmic problem-solving and CodeChef for competitive programming in Year 2.",
    image: null,
    x: 44,
    y: 80,
  },
  {
    id: "arcade_loot",
    title: "Google Cloud Arcade",
    date: "Late 2025",
    category: "CERTIFICATION",
    desc: "Selected as one of only 70 participants to complete advanced generative AI and cloud infrastructure challenges on GCP, earning official badges and the exclusive physical swag box.",
    image: "/swags.jpg",
    x: 57,
    y: 35,
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
      details:
        "An intelligent web-analysis tool utilizing multimodal AI to map and process complex data structures on the fly.",
    },
    x: 70,
    y: 50,
  },
  {
    id: "tech_club",
    title: "Technovation Induction",
    date: "Aug 2026",
    category: "LEADERSHIP",
    desc: "Officially recruited into Technovation: The Networking Club. Driving community growth, managing technical operations, and facilitating developer events to scale campus-wide networking.",
    image: "/ticket.jpg",
    x: 83,
    y: 25,
  },
  {
    id: "horizon",
    title: "Target: Open Source",
    date: "2027",
    category: "GOAL",
    desc: "Actively studying large-scale codebases and preparing architecture for upcoming Google Summer of Code (GSoC) and GirlScript Summer of Code (GSSoC) contributions.",
    image: null,
    x: 95,
    y: 65,
  },
];

// 2. GENERATE HIGH-VISIBILITY DUMMY NODES
const generateDummyNodes = () => {
  const dummies = [];
  // Creates a strict, dense hardware grid
  for (let x = 10; x <= 95; x += 10) {
    for (let y = 15; y <= 85; y += 15) {
      // Excludes spots that are too close to your real milestones
      const isTooClose = journeyNodes.some(
        (n) => Math.abs(n.x - x) < 7 && Math.abs(n.y - y) < 7,
      );
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
  "M 10 25 H 20 V 15",
  "M 30 15 V 35 H 40",
  "M 80 85 V 75 H 90",
  "M 15 85 H 30 V 70 H 40",
  "M 55 15 H 65 V 25 H 75",
];

const dummyNodes = generateDummyNodes();

export default function JourneyLog({ onClose, themeHue = 0 }) {
  const [activeNode, setActiveNode] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mobile Tinder Swipe State
  const [cards, setCards] = useState([...journeyNodes].reverse());
  const [swipeDirection, setSwipeDirection] = useState("right");

  const handleSwipe = (info, id) => {
    const swipeThreshold = 100;
    if (info.offset.x > swipeThreshold) {
      setSwipeDirection("right");
      setCards((prev) => prev.filter((c) => c.id !== id));
    } else if (info.offset.x < -swipeThreshold) {
      setSwipeDirection("left");
      setCards((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleResetLogs = () => {
    setCards([...journeyNodes].reverse());
  };

  const mainTrace = generatePCBPath(journeyNodes);

  /* NEW: Calculates the exact circuit path up to the clicked node */
  const activeTrace = activeNode
    ? generatePCBPath(
        journeyNodes.slice(
          0,
          journeyNodes.findIndex((n) => n.id === activeNode.id) + 1,
        ),
      )
    : null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#020502]/95 backdrop-blur-3xl flex flex-col font-mono text-[#22c55e] overflow-hidden animate-[fadeIn_0.3s_ease-out]">
      {/* THE ENGINEERING GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
          backgroundSize: "2.5% 2.5%",
        }}
      ></div>

      {/* Top Bar */}
      <div className="max-md:hidden h-12 border-b border-[#22c55e]/30 flex items-center justify-between px-6 shrink-0 z-50 relative bg-black/60 shadow-lg">
        <span className="font-bold text-sm tracking-[0.2em] text-[#22c55e]">
          Journey.log // HARDWARE_ROUTING_ACTIVE
        </span>
        <button
          onClick={onClose}
          className="text-[#22c55e] hover:text-white hover:bg-red-600 border border-[#22c55e]/50 hover:border-red-600 px-4 py-1 transition-all text-xs font-bold tracking-widest cursor-pointer"
        >
          [ DISCONNECT ]
        </button>
      </div>

      {/* The Circuit Board Area (LOCKED FLAT) */}
      <div
        className="flex-1 relative w-full h-full z-10 max-md:hidden"
        onClick={() => setActiveNode(null)}
      >
        {/* VISIBLE BACKGROUND DUMMY NODES */}
        {dummyNodes.map((d, i) => (
          <div
            key={`dummy-${i}`}
            className="absolute w-2.5 h-2.5 rounded-full border border-[#22c55e]/40 bg-black -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-10 shadow-[0_0_5px_rgba(34,197,94,0.1)]"
            style={{ left: `${d.x}%`, top: `${d.y}%` }}
          >
            <div className="w-[2px] h-[2px] bg-[#22c55e]/40 rounded-full"></div>
          </div>
        ))}

        {/* SVG Circuit Traces */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Inactive Decorative Traces */}
          {decorativeTraces.map((d, i) => (
            <path
              key={`deco-${i}`}
              d={d}
              fill="none"
              stroke="rgba(34,197,94,0.2)"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
            />
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
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animationDelay: "1.5s",
            }}
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
            style={{ animationDelay: "0s, 4s" }}
          />
        </svg>

        {/* TARGETED OVERCLOCK ROUTING (Dynamic Active Trace) */}
        {activeTrace && (
          <path
            d={activeTrace}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            className="drop-shadow-[0_0_12px_rgba(74,222,128,1)]"
            style={{
              strokeDasharray: 200,
              strokeDashoffset: 200,
              animation: "drawMainTrace 0.6s ease-out forwards",
            }}
          />
        )}

        {/* ACTIVE NODES (Separated Anchor & Hitbox for 100% Stability + EMP Ping) */}
        {journeyNodes.map((node, i) => (
          <div
            key={node.id}
            className="absolute z-30 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {/* 2. The Animated Group (Handles scaling, clicks, and hitboxes without fighting Tailwind) */}
            <div
              className="relative group cursor-pointer pointer-events-auto flex items-center justify-center opacity-0 animate-[bootNode_0.4s_ease-out_forwards]"
              style={{ animationDelay: `${i * 0.25}s` }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveNode(node);
              }}
            >
              {/* THE CRAZE: Massive EMP Sonar Ping when node is active */}
              {activeNode?.id === node.id && (
                <div className="absolute w-[300px] h-[300px] border-[2px] border-[#4ade80]/30 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"></div>
              )}

              {/* INVISIBLE HITBOX (Now perfectly anchored) */}
              <div className="absolute w-24 h-24 bg-transparent z-0"></div>

              {/* THE SHAPE */}
              <div
                className={`relative z-10 w-5 h-5 flex items-center justify-center border-2 transition-all duration-300 ${
                  node.id === "origin" ? "rotate-45" : "rounded-full"
                } ${node.id === "horizon" ? "border-dashed opacity-60" : ""} ${
                  activeNode?.id === node.id
                    ? "border-[#4ade80] scale-125 shadow-[0_0_20px_#4ade80] bg-black"
                    : "border-[#22c55e] bg-[#050505] group-hover:border-[#4ade80] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 ${node.id === "origin" ? "rounded-sm" : "rounded-full"} ${
                    activeNode?.id === node.id
                      ? "bg-[#4ade80] animate-pulse"
                      : node.id === "horizon"
                        ? "bg-[#22c55e]/30 animate-[pulse_3s_ease-in-out_infinite]"
                        : "bg-[#22c55e] group-hover:bg-[#4ade80]"
                  }`}
                ></div>
              </div>

              {/* THE LABEL */}
              <div
                className={`absolute top-[160%] whitespace-nowrap tracking-[0.2em] text-[8px] font-bold transition-all duration-300 uppercase px-2 py-0.5 bg-black/90 border pointer-events-none ${activeNode?.id === node.id ? "text-[#4ade80] border-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.3)]" : "text-[#22c55e]/70 border-[#22c55e]/30 group-hover:border-[#22c55e] group-hover:text-white"}`}
              >
                {node.id === "origin" ? "SYS.BOOT" : `C${i}::${node.title}`}
              </div>
            </div>
          </div>
        ))}

        {/* IN-PLACE GLASSMORPHIC HARDWARE POPUP */}
        {activeNode && (
          <div
            className="absolute z-50 pointer-events-auto"
            style={{
              left:
                activeNode.x > 50 ? "auto" : `calc(${activeNode.x}% + 35px)`,
              right:
                activeNode.x > 50
                  ? `calc(${100 - activeNode.x}% + 35px)`
                  : "auto",
              top:
                activeNode.y < 35
                  ? `calc(${activeNode.y}% - 15px)`
                  : activeNode.y > 65
                    ? "auto"
                    : `${activeNode.y}%`,
              bottom:
                activeNode.y > 65
                  ? `calc(${100 - activeNode.y}% - 15px)`
                  : "auto",
              transform:
                activeNode.y >= 35 && activeNode.y <= 65
                  ? "translateY(-50%)"
                  : "none",
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
                        activeNode.id === "arcade_loot"
                          ? "object-contain"
                          : "object-cover object-top"
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
                    {activeNode.project.type || "MODULE"} ::{" "}
                    {activeNode.project.name}
                  </div>
                  <div className="text-[10px] text-[#22c55e]/80 leading-relaxed mb-2 font-mono">
                    {activeNode.project.details}
                  </div>
                  <div className="text-[8px] text-[#22c55e]/60 tracking-[0.2em] uppercase border-t border-[#22c55e]/20 pt-1">
                    STACK:{" "}
                    <span className="text-[#22c55e]/90">
                      {activeNode.project.stack}
                    </span>
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#22c55e]/80 to-transparent mt-4"></div>

              <div className="mt-3 flex justify-between items-center px-2">
                <span className="text-[9px] text-[#22c55e]/60 tracking-widest uppercase">
                  {activeNode.category}
                </span>
                <span className="text-[9px] text-[#4ade80] tracking-widest uppercase">
                  {activeNode.date}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PERIPHERAL METRICS HUD (Top-Left Anchor) */}
      <div className="max-md:hidden absolute top-15 left-3 border border-[#22c55e]/30 bg-[#020502]/80 backdrop-blur-md p-3 rounded-sm pointer-events-none z-50 shadow-[0_0_15px_rgba(34,197,94,0.1)] flex flex-col gap-1.5">
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
          NET_STATUS:{" "}
          <span className="text-[#4ade80] animate-pulse ml-1">OPTIMAL</span>
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style>{`          

        /* Center the node precisely on the SVG trace and trigger the fade-in */
        /* 1. Trigger the fade-in and scale (Centering handled by Tailwind now) */
          @keyframes bootNode {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }

          /* 1. Base trace draws itself */
          @keyframes drawMainTrace {
            to { stroke-dashoffset: 0; }
          }
          
          /* 2. Current ignites */
          @keyframes igniteCurrent {
            to { opacity: 1; }
          }
          
          /* 3. Current flows infinitely */
          @keyframes flowData {
            from { stroke-dashoffset: 200; }
            to { stroke-dashoffset: 0; }
          }
          
          @keyframes glassFadeIn {
            0% { opacity: 0; transform: translateY(5px); backdrop-filter: blur(0px); }
            100% { opacity: 1; transform: translateY(0px); backdrop-filter: blur(24px); }
          }

          /* 4. Ambient 3D Parallax Drift */
          @keyframes ambientTilt {
            0% { transform: perspective(1200px) rotateX(3deg) rotateY(-3deg); }
            50% { transform: perspective(1200px) rotateX(-3deg) rotateY(3deg); }
            100% { transform: perspective(1200px) rotateX(3deg) rotateY(-3deg); }
          }
        `}</style>

      {/* ========================================================================= */}
      {/* MOBILE OVERRIDE: 3D Swipeable Dossier Deck */}
      {/* ========================================================================= */}
      <div className="hidden max-md:flex flex-1 relative flex-col overflow-hidden bg-[#050505]">
        {/* MOBILE HEADER (The Escape Hatch!) */}
        <div className="w-full h-14 shrink-0 border-b border-[#22c55e]/30 bg-[#0a0a0a] flex items-center justify-between px-4 shadow-[0_4px_15px_rgba(34,197,94,0.1)] z-50 relative">
          <div className="flex items-center gap-3">
            <span className="w-2 h-4 bg-[#22c55e] animate-pulse"></span>
            <span className="font-bold tracking-widest text-sm uppercase">
              ~/journey.log
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#22c55e] hover:bg-red-500/20 hover:text-red-500 px-3 py-2 rounded text-xs font-bold transition-colors active:bg-[#22c55e]/20"
          >
            [X]
          </button>
        </div>
        {/* Tactical Swipe Area */}
        <div className="flex-1 relative flex flex-col items-center justify-center p-5 overflow-hidden">
          {/* Ambient Scanning Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>

          {/* EXPLICIT INSTRUCTION */}
          <div className="text-[10px] text-[#22c55e]/70 uppercase tracking-[0.3em] mb-4 animate-pulse z-10 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
            [ &lt;&lt; Swipe Cards to Navigate &gt;&gt; ]
          </div>

          {/* 3D Card Stack Container (Taller for images) */}
          <div className="relative w-full max-w-[340px] h-[520px]">
            <AnimatePresence>
              {cards.map((item, index) => {
                const isTop = index === cards.length - 1;

                return (
                  <motion.div
                    key={item.id}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => handleSwipe(info, item.id)}
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{
                      scale: isTop ? 1 : 1 - (cards.length - 1 - index) * 0.05,
                      y: isTop ? 0 : (cards.length - 1 - index) * 15,
                      opacity: isTop ? 1 : 1 - (cards.length - 1 - index) * 0.2,
                      zIndex: index,
                    }}
                    exit={{
                      x: swipeDirection === "left" ? -300 : 300,
                      opacity: 0,
                      rotate: swipeDirection === "left" ? -15 : 15,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                    className={`absolute inset-0 bg-[#0a0a0a] border-2 flex flex-col overflow-hidden ${isTop ? "border-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.15)] cursor-grab" : "border-[#22c55e]/30"}`}
                  >
                    {/* Card Header */}
                    <div className="border-b border-[#22c55e]/30 p-3 shrink-0 flex items-center justify-between bg-[#22c55e]/5">
                      <span className="text-[10px] tracking-widest uppercase opacity-70">
                        Log // {item.date}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping"></span>
                    </div>

                    {/* IMAGE BLOCK (Inherits Desktop Hacker Filter) */}
                    {item.image && (
                      <div className="w-full h-36 shrink-0 bg-black border-b border-[#22c55e]/30 p-1 relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full opacity-80 ${item.id === "arcade_loot" ? "object-contain" : "object-cover object-top"}`}
                          style={{
                            filter: `grayscale(100%) sepia(50%) hue-rotate(75deg) contrast(125%) brightness(75%)`,
                          }}
                        />
                      </div>
                    )}

                    {/* Text Content */}
                    <div className="p-5 flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar">
                      <h3 className="text-lg font-black uppercase tracking-wider mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] leading-tight">
                        {item.title}
                      </h3>
                      <div className="text-[10px] font-bold text-white mb-3 uppercase tracking-widest border-l-2 border-[#22c55e] pl-2">
                        {item.category}
                      </div>
                      <p className="text-[11px] text-[#22c55e]/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Swipe Indicators */}
                    <div className="p-4 shrink-0 border-t border-[#22c55e]/20 flex justify-between items-center text-[10px] uppercase font-black tracking-widest bg-black/40">
                      <span className="text-red-500/60">&lt;&lt; ARCHIVE</span>
                      <span className="text-[#22c55e] animate-pulse">
                        SWIPE
                      </span>
                      <span className="text-[#4ade80]/60">VERIFY &gt;&gt;</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Empty State */}
            {cards.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 border border-[#22c55e]/50 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <svg
                    className="w-6 h-6 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="text-sm font-bold tracking-widest uppercase mb-2 text-white">
                  ALL LOGS VERIFIED
                </div>
                <div className="text-[9px] opacity-60 tracking-widest mb-8">
                  NO PENDING JOURNEY DATA
                </div>
                <button
                  onClick={handleResetLogs}
                  className="border border-[#22c55e] px-4 py-2 text-[10px] font-bold tracking-widest active:bg-[#22c55e] active:text-black transition-colors"
                >
                  [ RELOAD_ARCHIVE ]
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
