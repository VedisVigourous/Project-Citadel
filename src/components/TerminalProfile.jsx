import React from 'react';

const TerminalProfile = () => {
  return (
    <div className="relative group overflow-hidden border-2 border-[#22c55e] w-72 h-80 cursor-crosshair shadow-[0_0_15px_rgba(34,197,94,0.3)] bg-black flex items-center justify-center">
      
      {/* 1. Base Image - Scaled out, pure monochrome default, full color on hover */}
      <img
        src="/Zv9IB.jpg" 
        alt="Vadanta Profile"
        className="w-full h-full object-contain p-4 filter grayscale contrast-125 brightness-110 transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
      />

      {/* 2. The Hover Sparkle Sweep (Fixed True Diagonal Path) */}
      <div className="absolute -top-[100%] -left-[150%] w-1/2 h-[300%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 transition-all duration-700 ease-in-out group-hover:left-[150%] pointer-events-none blur-[2px]"></div>

      {/* 3. UI Target Brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#22c55e] opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />
      
    </div>
  );
};

export default TerminalProfile;