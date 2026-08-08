import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const SurveillanceLogo = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isDetected, setIsDetected] = useState(false);
  const [showReticle, setShowReticle] = useState(false);
  const [lockedTarget, setLockedTarget] = useState({ x: 0, y: 0 });
  
  const logoRef = useRef(null);
  const currentMouse = useRef({ x: 0, y: 0 });

  // 15-second continuous security sweep loop
  useEffect(() => {
    const securitySweep = setInterval(() => {
      setIsDetected(true);
      setShowReticle(true);
      setLockedTarget({ x: currentMouse.current.x, y: currentMouse.current.y });
      
      // Wait 2 seconds, then revert everything to normal
      setTimeout(() => {
        setShowReticle(false);
        setIsDetected(false); 
      }, 2000); 
      
    }, 15000); 

    return () => clearInterval(securitySweep);
  }, []);

  // Mouse tracking logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      currentMouse.current = { x: e.clientX, y: e.clientY };

      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      
      const maxDistance = 7; 
      const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY));

      setEyePosition({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const eyeColor = isDetected ? '#ef4444' : '#22c55e'; 
  const eyeBgColor = isDetected ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)';
  const eyeBorderColor = isDetected ? 'rgba(239, 68, 68, 0.6)' : 'rgba(34, 197, 94, 0.4)';

  return (
    <>
      <div ref={logoRef} className="flex items-center cursor-crosshair">
        {/* THIS IS THE CONTAINER WE FIXED: No border, no padding, no background */}
        <div 
          className="relative flex space-x-2 items-center transition-colors duration-700"
        >
          {/* Left Eye */}
          <div 
            className="w-10 h-6 rounded-full relative overflow-hidden flex items-center justify-center border transition-colors duration-700"
            style={{ backgroundColor: eyeBgColor, borderColor: eyeBorderColor }}
          >
            <div 
              className="w-4 h-4 rounded-full absolute transition-transform duration-75 ease-out shadow-[0_0_8px_currentColor]"
              style={{ 
                color: eyeColor,
                backgroundColor: eyeColor,
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` 
              }}
            />
          </div>

          {/* Right Eye */}
          <div 
            className="w-10 h-6 rounded-full relative overflow-hidden flex items-center justify-center border transition-colors duration-700"
            style={{ backgroundColor: eyeBgColor, borderColor: eyeBorderColor }}
          >
            <div 
              className="w-4 h-4 rounded-full absolute transition-transform duration-75 ease-out shadow-[0_0_8px_currentColor]"
              style={{ 
                color: eyeColor,
                backgroundColor: eyeColor,
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)` 
              }}
            />
          </div>
        </div>
      </div>

      {/* THE TARGETING RETICLE */}
      {showReticle && createPortal(
        <div 
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: lockedTarget.x,
            top: lockedTarget.y,
            transform: 'translate(-50%, -50%)' 
          }}
        >
          <div className="w-16 h-16 border-2 border-red-500/80 animate-ping relative">
            <div className="absolute -top-2 left-1/2 w-0.5 h-4 bg-red-500 -translate-x-1/2" />
            <div className="absolute -bottom-2 left-1/2 w-0.5 h-4 bg-red-500 -translate-x-1/2" />
            <div className="absolute -left-2 top-1/2 w-4 h-0.5 bg-red-500 -translate-y-1/2" />
            <div className="absolute -right-2 top-1/2 w-4 h-0.5 bg-red-500 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-red-500 font-mono text-[10px] sm:text-xs tracking-[0.3em] whitespace-nowrap font-bold bg-black/80 px-2 py-1 border border-red-500/50">
            &gt; TARGET_ACQUIRED
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SurveillanceLogo;