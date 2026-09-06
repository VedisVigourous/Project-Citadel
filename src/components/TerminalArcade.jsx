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
    <div className="w-full h-full bg-black flex flex-col items-center justify-center text-[#22c55e] font-mono relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <button
        onClick={onExit}
        className="absolute top-6 right-6 text-red-500 hover:bg-red-500/20 px-4 py-2 border border-red-500/50 text-xs tracking-widest transition-all z-10"
      >
        [ EXIT_SYS ]
      </button>

      <h1 className="text-5xl md:text-7xl font-black mb-2 tracking-[0.2em] drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] z-10">
        SYS_ARCADE
      </h1>
      <p className="text-xs md:text-sm opacity-70 mb-12 tracking-widest z-10">SELECT EXECUTABLE MODULE</p>

      <div className="flex flex-col gap-4 w-full max-w-md z-10">
        <button onClick={() => setActiveGame('outrun')} className="group flex justify-between items-center border border-cyan-500/30 p-4 hover:bg-cyan-500/10 hover:border-cyan-500 transition-all cursor-pointer text-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <span className="font-bold tracking-widest">1. NEON OUTRUN</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">EXECUTE {'>'}</span>
        </button>
        <button onClick={() => setActiveGame('swarm')} className="group flex justify-between items-center border border-red-500/30 p-4 hover:bg-red-500/10 hover:border-red-500 transition-all cursor-pointer text-red-500 shadow-[0_0_10px_rgba(239,68,68,0)] hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
          <span className="font-bold tracking-widest">2. CYBER-SWARM</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">EXECUTE {'>'}</span>
        </button>
        <button onClick={() => setActiveGame('snake')} className="group flex justify-between items-center border border-[#22c55e]/30 p-4 hover:bg-[#22c55e]/10 hover:border-[#22c55e] transition-all cursor-pointer text-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0)] hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <span className="font-bold tracking-widest">3. OVERCLOCKED SNAKE</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">EXECUTE {'>'}</span>
        </button>
        <button onClick={() => setActiveGame('runner')} className="group flex justify-between items-center border border-amber-500/30 p-4 hover:bg-amber-500/10 hover:border-amber-500 transition-all cursor-pointer text-amber-500 shadow-[0_0_10px_rgba(245,158,11,0)] hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          <span className="font-bold tracking-widest">4. FIREWALL RUNNER</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">EXECUTE {'>'}</span>
        </button>
      </div>
    </div>
  );
}