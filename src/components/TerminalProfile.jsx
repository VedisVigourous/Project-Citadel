import React from 'react';

const TerminalProfile = ({ themeHue = 0 }) => {
  return (
    <div className="relative group overflow-hidden border-2 border-[#22c55e] w-[245px] h-[300px] cursor-crosshair shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-black flex items-center justify-center p-3">
      {/* Scaled to 245x300 to match exact 750x917 portrait aspect ratio */}
      
      {/* INNER MASK: This completely traps the scale-105 zoom so it NEVER hits the brackets */}
      <div className="relative w-full h-full overflow-hidden rounded-sm">
        
        {/* 1. Base Image - Pure monochrome default (object-top preserves head room) */}
        <img
          src="/profile.webp" 
          alt="Vadanta Profile"
          className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-125 brightness-110 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
        />

        {/* 2. True Color Hover Image - Counteracts OS Theme Hue */}
        <img
          src="/profile.webp" 
          alt="Vadanta Profile True Color"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-105"
          style={{ filter: `hue-rotate(-${themeHue}deg)` }}
        />
      </div>

      {/* 3. The Hover Sparkle Sweep */}
      <div className="absolute -top-[100%] -left-[150%] w-1/2 h-[300%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 transition-all duration-700 ease-in-out group-hover:left-[150%] pointer-events-none blur-[2px] z-10"></div>

      {/* 4. UI Target Brackets - Positioned in the 'safe zone' between the outer border and inner image */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 z-10" />
      <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 z-10" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 z-10" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 z-10" />
      
    </div>
  );
};

export default React.memo(TerminalProfile);