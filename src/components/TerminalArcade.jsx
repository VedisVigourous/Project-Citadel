import React, { useState } from 'react';
import NeonOutrun from './NeonOutrun';
import CyberSwarm from './CyberSwarm';
import OverclockedSnake from './OverclockedSnake';
import FirewallRunner from './FirewallRunner';

export default function TerminalArcade({ onExit }) {
  const [activeGame, setActiveGame] = useState('menu');

  // Placeholders for the upcoming Canvas Engines
  if (activeGame === 'outrun') return <NeonOutrun onExit={() => setActiveGame('menu')} />;
  if (activeGame === 'swarm') return <CyberSwarm onExit={() => setActiveGame('menu')} />;
  if (activeGame === 'snake') return <OverclockedSnake onExit={() => setActiveGame('menu')} />;
  if (activeGame === 'runner') return <FirewallRunner onExit={() => setActiveGame('menu')} />;

  return (
    <div className="w-full h-full bg-black flex flex-col text-[#22c55e] font-mono relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* Top Control Bar (Mobile-friendly layout) */}
      <div className="w-full flex justify-end p-4 md:absolute md:top-6 md:right-6 md:p-0 z-20">
        <button
          onClick={onExit}
          className="text-red-500 hover:bg-red-500/20 px-4 py-2 border border-red-500/50 text-[10px] md:text-xs tracking-widest transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)] bg-black/50 backdrop-blur-md"
        >
          [EXIT_SYS]
        </button>
      </div>

      {/* Main Menu Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md mx-auto z-10 px-4 pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-2 tracking-[0.2em] drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] text-center">
          SYS_ARCADE
        </h1>
        <p className="text-[10px] sm:text-xs md:text-sm opacity-70 mb-8 md:mb-12 tracking-widest text-center">
          SELECT EXECUTABLE MODULE
        </p>

        <div className="flex flex-col gap-3 md:gap-4 w-full">
          {/* 1. Neon Outrun */}
          <button onClick={() => setActiveGame('outrun')} className="group flex justify-between items-center border border-cyan-500/30 p-4 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all cursor-pointer text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] bg-black/40 backdrop-blur-sm">
            <span className="font-bold tracking-widest text-xs sm:text-sm">1. NEON OUTRUN</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs">EXECUTE {'>'}</span>
          </button>

          {/* 2. Cyber-Swarm */}
          <button onClick={() => setActiveGame('swarm')} className="group flex justify-between items-center border border-red-500/30 p-4 hover:bg-red-500/10 hover:border-red-500 transition-all cursor-pointer text-red-500 shadow-[0_0_10px_rgba(239,68,68,0)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] bg-black/40 backdrop-blur-sm">
            <span className="font-bold tracking-widest text-xs sm:text-sm">2. CYBER-SWARM</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs">EXECUTE {'>'}</span>
          </button>

          {/* 3. Overclocked Snake */}
          <button onClick={() => setActiveGame('snake')} className="group flex justify-between items-center border border-[#22c55e]/30 p-4 hover:bg-[#22c55e]/10 hover:border-[#22c55e] transition-all cursor-pointer text-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] bg-black/40 backdrop-blur-sm">
            <span className="font-bold tracking-widest text-xs sm:text-sm">3. OVERCLOCKED SNAKE</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs">EXECUTE {'>'}</span>
          </button>

          {/* 4. Firewall Runner */}
          <button onClick={() => setActiveGame('runner')} className="group flex justify-between items-center border border-amber-500/30 p-4 hover:bg-amber-500/10 hover:border-amber-500 transition-all cursor-pointer text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] bg-black/40 backdrop-blur-sm">
            <span className="font-bold tracking-widest text-xs sm:text-sm">4. FIREWALL RUNNER</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] md:text-xs">EXECUTE {'>'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}