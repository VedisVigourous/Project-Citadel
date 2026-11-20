import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const SurveillanceLogo = React.memo(() => {
  const [isDetected, setIsDetected] = useState(false);
  const [showReticle, setShowReticle] = useState(false);
  const [lockedTarget, setLockedTarget] = useState({ x: 0, y: 0 });

  const logoRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const currentMouse = useRef({ x: 0, y: 0 });

  // 15-second continuous security sweep loop
  useEffect(() => {
    const securitySweep = setInterval(() => {
      if (window.innerWidth >= 768) {
        setIsDetected(true);
        setShowReticle(true);
        setLockedTarget({ x: currentMouse.current.x, y: currentMouse.current.y });

        setTimeout(() => {
          setShowReticle(false);
          setIsDetected(false);
        }, 2000);
      }
    }, 15000);

    return () => clearInterval(securitySweep);
  }, []);

  // 60FPS Direct DOM Mouse tracking logic (Zero React re-renders on mousemove!)
  useEffect(() => {
    let rafId = null;

    const handleMouseMove = (e) => {
      currentMouse.current = { x: e.clientX, y: e.clientY };

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (logoRef.current) {
            const rect = logoRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = currentMouse.current.x - centerX;
            const deltaY = currentMouse.current.y - centerY;
            const angle = Math.atan2(deltaY, deltaX);

            const maxDistance = 7;
            const distance = Math.min(maxDistance, Math.hypot(deltaX, deltaY));
            const ex = Math.cos(angle) * distance;
            const ey = Math.sin(angle) * distance;

            const transformStr = `translate3d(${ex}px, ${ey}px, 0)`;
            if (leftPupilRef.current) leftPupilRef.current.style.transform = transformStr;
            if (rightPupilRef.current) rightPupilRef.current.style.transform = transformStr;
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const eyeColor = isDetected ? "#ef4444" : "#22c55e";
  const eyeBgColor = isDetected
    ? "rgba(239, 68, 68, 0.15)"
    : "rgba(34, 197, 94, 0.15)";
  const eyeBorderColor = isDetected
    ? "rgba(239, 68, 68, 0.6)"
    : "rgba(34, 197, 94, 0.4)";

  return (
    <>
      <div ref={logoRef} className="flex items-center cursor-crosshair">
        {/* THIS IS THE CONTAINER WE FIXED: No border, no padding, no background */}
        <div className="relative flex space-x-2 items-center transition-colors duration-700">
          {/* Left Eye */}
          <div
            className="w-10 h-6 rounded-full relative overflow-hidden flex items-center justify-center border transition-colors duration-700"
            style={{ backgroundColor: eyeBgColor, borderColor: eyeBorderColor }}
          >
            <div
              ref={leftPupilRef}
              className="w-4 h-4 rounded-full absolute transition-transform duration-75 ease-out shadow-[0_0_8px_currentColor] will-change-transform"
              style={{
                color: eyeColor,
                backgroundColor: eyeColor,
                transform: `translate3d(0, 0, 0)`,
              }}
            />
          </div>

          {/* Right Eye */}
          <div
            className="w-10 h-6 rounded-full relative overflow-hidden flex items-center justify-center border transition-colors duration-700"
            style={{ backgroundColor: eyeBgColor, borderColor: eyeBorderColor }}
          >
            <div
              ref={rightPupilRef}
              className="w-4 h-4 rounded-full absolute transition-transform duration-75 ease-out shadow-[0_0_8px_currentColor] will-change-transform"
              style={{
                color: eyeColor,
                backgroundColor: eyeColor,
                transform: `translate3d(0, 0, 0)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* THE TARGETING RETICLE */}
      {showReticle &&
        createPortal(
          <div
            className="fixed pointer-events-none z-[9999]"
            style={{
              left: lockedTarget.x,
              top: lockedTarget.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Custom Sharp Blink Keyframe */}
            <style>{`
          @keyframes tacticalBlink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
        `}</style>

            {/* 1. The Micro Center Dot (Now with a sharp snap-blink) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full shadow-[0_0_8px_red]"
              style={{ animation: "tacticalBlink 0.8s infinite" }}
            ></div>

            {/* 2. The Subtle Crosshair Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1px] bg-red-500/60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-6 bg-red-500/60"></div>

            {/* 3. The Tiny Corner Accents */}
            <div className="absolute top-[-12px] left-[-12px] w-2 h-2 border-t border-l border-red-500/80"></div>
            <div className="absolute top-[-12px] right-[-12px] w-2 h-2 border-t border-r border-red-500/80"></div>
            <div className="absolute bottom-[-12px] left-[-12px] w-2 h-2 border-b border-l border-red-500/80"></div>
            <div className="absolute bottom-[-12px] right-[-12px] w-2 h-2 border-b border-r border-red-500/80"></div>

            {/* 4. The Micro Text (Blinking in sync with the dot) */}
            <div
              className="absolute top-4 left-4 text-[8px] tracking-[0.2em] text-red-500/90 bg-black/60 px-1.5 py-0.5 border border-red-500/30 backdrop-blur-sm whitespace-nowrap"
              style={{ animation: "tacticalBlink 0.8s infinite" }}
            >
              &gt; TARGET_LOCKED
            </div>
          </div>,
          document.body,
        )}
    </>
  );
});

export default SurveillanceLogo;
