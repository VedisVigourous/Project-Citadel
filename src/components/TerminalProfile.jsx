import React, { useState, useEffect, useRef } from 'react';

const TerminalProfile = () => {
  const containerRef = useRef(null);
  const trailRef = useRef([]); 
  // FIX: Default mask is a transparent gradient so it starts completely invisible
  const [maskStyle, setMaskStyle] = useState('linear-gradient(transparent, transparent)');
  const [isHovered, setIsHovered] = useState(false);
  const requestRef = useRef(null);

  const updateTrail = () => {
    trailRef.current = trailRef.current.filter(p => p.age < 40);
    trailRef.current.forEach(p => { p.age += 1; });

    if (trailRef.current.length > 0) {
      const gradients = trailRef.current.map(p => {
        const progress = p.age / 40; 
        const opacity = Math.max(0, 1 - progress); 
        const size = 60 + (progress * 40); 
        
        return `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, rgba(0,0,0,${opacity}) 0%, transparent 100%)`;
      }).join(', ');
      
      setMaskStyle(gradients);
    } else {
      // FIX: Revert to fully transparent when trail evaporates
      setMaskStyle('linear-gradient(transparent, transparent)');
    }

    requestRef.current = requestAnimationFrame(updateTrail);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    trailRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      age: 0
    });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-72 h-80 border-2 border-[#22c55e] cursor-crosshair overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-black glitch-hover"
    >
      
      {/* BASE LAYER: Your Normal Face (Always visible) */}
      <img 
        src="/vadanta-normal.png" 
        alt="Vadanta Base" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* REVEAL LAYER: The Hacker Mask + UI */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
        style={{
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
          WebkitMaskComposite: 'add',
          maskComposite: 'add',
          // FIX: Acts as a fail-safe to ensure it is 100% invisible when not hovered
          opacity: isHovered || trailRef.current.length > 0 ? 1 : 0 
        }}
      >
        <img 
          src="/vadanta-hover.png" 
          alt="Vadanta Tactical" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '35px 35px' 
          }}
        />

        {/* REFINED UI Target Brackets */}
        {/* Changed from border-2 to border (thinner lines), added opacity-50 */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#22c55e] opacity-50" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#22c55e] opacity-50" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#22c55e] opacity-50" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#22c55e] opacity-50" />
        
      </div>
    </div>
  );
};

export default TerminalProfile;