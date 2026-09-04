import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    
    const onMouseOver = (e) => {
      if (e.target.closest('button, a, .cursor-pointer, input, textarea, .group')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    const render = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.15;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.15;

      // JS strictly handles coordinates. No translate(-50%, -50%) here anymore.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0)`;
      }

      requestAnimationFrame(render);
    };
    
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <>
      {/* 1. Core Pointer (Positional Parent) */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[999999]"
      >
        {/* Visual Child - Now Absolutely Positioned */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_10px_white]" />
      </div>
      
      {/* 2. Physics Trail (Positional Parent) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[999998]"
      >
        {/* Visual Child - Now Absolutely Positioned */}
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
            isHovering 
              ? 'w-14 h-14 border-2 border-red-500 rounded-sm scale-110 bg-red-500/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(239,68,68,0.4)] rotate-0' 
              : 'w-8 h-8 border border-[#4ade80]/60 rounded-none rotate-45 shadow-[0_0_15px_rgba(74,222,128,0.2)]'
          }`}
        >
          {/* Inner Tech Brackets */}
          {!isHovering && (
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
              <div className="w-1.5 h-1.5 border-t border-l border-[#4ade80] absolute -top-1 -left-1"></div>
              <div className="w-1.5 h-1.5 border-b border-r border-[#4ade80] absolute -bottom-1 -right-1"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}