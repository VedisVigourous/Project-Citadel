import React, { useState, useRef } from 'react';

export default function Hologram() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth 15-degree tilt limits
    const rotateX = -(y / rect.height) * 30;
    const rotateY = (x / rect.width) * 30;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes autoPan {
          0% { transform: rotateX(8deg) rotateY(-15deg); }
          50% { transform: rotateX(-5deg) rotateY(15deg); }
          100% { transform: rotateX(8deg) rotateY(-15deg); }
        }
      `}</style>

      {/* Volumetric Hologram Container */}
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-300 ease-out"
        style={{
          transform: isHovered 
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
            : undefined,
          animation: isHovered ? 'none' : 'autoPan 12s ease-in-out infinite'
        }}
      >
        {/* Layer 1: Glowing Base Floor (Shifted down in Z-space) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.15)_1px,transparent_1px)] bg-[size:30px_30px] border border-[#22c55e]/10 shadow-[0_0_40px_rgba(34,197,94,0.1)] rounded-full"
          style={{ transform: 'translateZ(-60px) rotateX(75deg) scale(1.2)', transformOrigin: 'bottom' }}
        ></div>

        {/* Layer 2: The Main Floating Hologram (Pure Light, No Shadow, No Scanline) */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: 'translateZ(20px)' }}
        >
          <img
            src="/college_image.png"
            alt="Campus Hologram"
            className="w-[110%] h-[110%] object-contain mix-blend-screen filter contrast-125 saturate-150 pointer-events-none"
          />
        </div>
      </div>
      
      {/* Target Lock HUD */}
      <div className="absolute bottom-4 left-4 text-[9px] font-mono text-[#22c55e] tracking-widest bg-black/80 px-2 py-1 border-l-2 border-[#22c55e] z-50 pointer-events-none">
        <span className="animate-ping mr-2 inline-block h-1 w-1 bg-[#22c55e] rounded-full"></span>
        PROJECTION: AUTONOMOUS
      </div>
    </div>
  );
}