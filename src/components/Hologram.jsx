import React, { useState, useRef } from 'react';

export default function Hologram({ onClose }) {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the container
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Dampen the movement for a smooth maximum tilt of 15 degrees
    const rotateX = -(y / rect.height) * 30;
    const rotateY = (x / rect.width) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    // Smoothly snap back to center when the mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-lg overflow-hidden animate-[fadeIn_0.5s_ease-out]">
      {/* Universal Abort */}
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-[#22c55e]/70 border border-[#22c55e]/30 px-4 py-2 hover:bg-red-500/20 hover:border-red-500 hover:text-red-400 text-[10px] font-bold tracking-widest transition-all z-50 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
      >
        [ ABORT_PROJECTION ]
      </button>

      {/* 3D Perspective Container */}
      <div 
        className="relative w-[600px] h-[600px] flex items-center justify-center"
        style={{ perspective: '1200px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {/* The Rotatable Hologram Core */}
        <div 
          className="relative w-full h-full transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* LAYER 1: The Base Grid (translateZ: -50px) */}
          <div 
            className="absolute inset-8 rounded-full border-2 border-[#22c55e]/20 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.05)_0%,transparent_70%)]"
            style={{ transform: 'translateZ(-50px)' }}
          >
            <div className="w-full h-full border border-[#22c55e]/10 rounded-full animate-[spin_10s_linear_infinite_reverse] border-dashed"></div>
          </div>

          {/* LAYER 2: The Tactical Radar Rings (translateZ: 0px) */}
          <div 
            className="absolute inset-16 rounded-full border border-[#22c55e]/40 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
            style={{ transform: 'translateZ(0px)' }}
          >
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#22c55e]/30"></div>
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#22c55e]/30"></div>
            {/* Spinning Target Bracket */}
            <div className="absolute inset-0 border-[3px] border-transparent border-t-[#22c55e] border-b-[#22c55e] rounded-full animate-[spin_4s_linear_infinite] opacity-50"></div>
          </div>

          {/* LAYER 3: The ABES Wireframe Building (translateZ: 60px) */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ transform: 'translateZ(60px)' }}
          >
            <svg viewBox="0 0 200 150" className="w-[300px] h-[225px] text-[#22c55e] drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] opacity-90">
              <path 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="animate-[dash_3s_ease-in-out_infinite_alternate]"
                strokeDasharray="500"
                strokeDashoffset="0"
                d="M20 130 L20 70 L60 50 L140 50 L180 70 L180 130 Z M60 50 L60 20 L140 20 L140 50 M90 20 L90 10 L110 10 L110 20 M40 130 L40 90 L60 90 M160 130 L160 90 L140 90 M80 130 L80 80 L120 80 L120 130" 
              />
            </svg>
          </div>

          {/* LAYER 4: The Floating Telemetry Text (translateZ: 120px) */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ transform: 'translateZ(120px)' }}
          >
            <div className="mt-[280px] bg-black/60 border border-[#22c55e]/50 px-4 py-2 backdrop-blur-sm">
              <div className="text-[#22c55e] font-mono text-sm font-bold tracking-widest animate-pulse">
                [ TARGET_LOCK: ABES_EC ]
              </div>
              <div className="text-[#22c55e]/70 font-mono text-[9px] tracking-[0.2em] mt-1 text-center">
                COORD: 28.6280° N, 77.4497° E<br/>
                STATUS: UPLINK_ESTABLISHED
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}