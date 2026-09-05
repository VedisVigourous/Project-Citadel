import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  const [cursorMode, setCursorMode] = useState('default');

  useEffect(() => {
    const checkCursorState = (e) => {
      if (!e.target) return;
      
      // Bulletproof detection: react-rnd applies inline cursor styles directly
      const inlineCursor = e.target.style?.cursor || '';
      const computedCursor = window.getComputedStyle(e.target).cursor || '';
      
      const isResize = 
        inlineCursor.includes('resize') || 
        computedCursor.includes('resize') || 
        e.target.closest('.react-resizable-handle');

      if (isResize) {
        setCursorMode('resize');
      } else if (e.target.closest('button, a, .cursor-pointer, input, textarea, .group')) {
        setCursorMode('hover');
      } else {
        setCursorMode('default');
      }
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      checkCursorState(e);
    };

    const onMouseOver = (e) => checkCursorState(e);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    const render = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.15;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.15;

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
      <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-[999999]">
        <div 
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
            cursorMode === 'resize' 
              ? 'w-[6px] h-[6px] bg-[#59D3C8] shadow-[0_0_15px_#59D3C8]' 
              : 'w-[4px] h-[4px] bg-white shadow-[0_0_10px_white]'
          }`} 
        />
      </div>

      <div ref={trailRef} className="fixed top-0 left-0 pointer-events-none z-[999998]">
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
            cursorMode === 'resize'
              ? 'w-12 h-12 border-2 border-[#59D3C8] rounded-none scale-110 bg-[#59D3C8]/20 backdrop-blur-[2px] shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-pulse'
              : cursorMode === 'hover'
              ? 'w-14 h-14 border-2 border-red-500 rounded-sm scale-110 bg-red-500/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(239,68,68,0.4)] rotate-0'
              : 'w-8 h-8 border border-[#4ade80]/60 rounded-none rotate-45 shadow-[0_0_15px_rgba(74,222,128,0.2)]'
          }`}
        >
          {cursorMode === 'default' && (
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite_reverse]">
              <div className="w-1.5 h-1.5 border-t border-l border-[#4ade80] absolute -top-1 -left-1"></div>
              <div className="w-1.5 h-1.5 border-b border-r border-[#4ade80] absolute -bottom-1 -right-1"></div>
            </div>
          )}
          
          {cursorMode === 'resize' && (
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_3s_linear_infinite]">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-[#59D3C8]"></div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#59D3C8]"></div>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[6px] border-r-[#59D3C8]"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#59D3C8]"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}