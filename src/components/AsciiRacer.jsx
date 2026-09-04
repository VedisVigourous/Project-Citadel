import React, { useState, useEffect, useRef } from 'react';

export default function AsciiRacer({ onExit }) {
  const [grid, setGrid] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('START'); 
  
  const gameContainerRef = useRef(null);
  const playerLane = useRef(1); // 0: Left, 1: Center, 2: Right
  const playerRow = useRef(14);
  const obstacles = useRef([]); // { y, lane }
  const scoreRef = useRef(0);
  const loopRef = useRef(null);
  
  // Forces the game container to capture keystrokes immediately
  useEffect(() => {
    if (gameContainerRef.current) gameContainerRef.current.focus();
  }, []);

  const initGame = () => {
    playerLane.current = 1;
    playerRow.current = 14;
    obstacles.current = [];
    scoreRef.current = 0;
    setScore(0);
    setGameState('PLAYING');
    startGameLoop();
  };

  const startGameLoop = () => {
    if (loopRef.current) clearInterval(loopRef.current);
    
    loopRef.current = setInterval(() => {
      // 1. Move obstacles down
      obstacles.current = obstacles.current.map(obs => ({...obs, y: obs.y + 1}));
      obstacles.current = obstacles.current.filter(obs => obs.y < 20);

      // 2. Spawn logic (prevents impossible walls)
      const canSpawn = !obstacles.current.some(obs => obs.y < 4);
      if (canSpawn && Math.random() < 0.25) {
         const lane = Math.floor(Math.random() * 3);
         obstacles.current.push({ y: 0, lane });
      }

      // 3. Collision hitbox (Car occupies rows 15, 16, 17)
      const hit = obstacles.current.some(
        (obs) => 
          obs.y >= playerRow.current && 
          obs.y <= playerRow.current + 2 && 
          obs.lane === playerLane.current
      );
      if (hit) {
         clearInterval(loopRef.current);
         setGameState('GAME_OVER');
         return;
      }

      // 4. Score & Render Frame
      scoreRef.current += 1;
      setScore(scoreRef.current);
      renderFrame();

    }, 70); 
  };

  const renderFrame = () => {
    const rows = [];
    const isTick = scoreRef.current % 2 === 0;
    const border = isTick ? '|' : ':'; // Alternating borders simulate speed

    for (let y = 0; y < 20; y++) {
      let rowStr = `${border} `;
      
      for (let lane = 0; lane < 3; lane++) {
        let cell = '       '; 

        const hasObs = obstacles.current.some(obs => obs.y === y && obs.lane === lane);
        if (hasObs) cell = ' [XXX] ';

        // 3-Row Dynamic ASCII Car
        if (lane === playerLane.current) {
          if (y === playerRow.current) cell = '  .M.  ';
          if (y === playerRow.current + 1) cell = ' |BMW| ';
          if (y === playerRow.current + 2) cell = '  `W`  ';
        }

        rowStr += cell + ` ${border} `;
      }
      rows.push(rowStr);
    }
    setGrid(rows);
  };

  useEffect(() => {
    if (gameState === 'START') {
      const startGrid = Array(20).fill('|        |        |        |');
      startGrid[7]  = '|  ======================  |';
      startGrid[8]  = '|   PRESS ENTER TO BOOT    |';
      startGrid[9]  = '|     [W]/[S] TO ACCEL     |';
      startGrid[10] = '|     [A]/[D] TO STEER     |';
      startGrid[11] = '|  ======================  |';
      setGrid(startGrid);
    }
  }, [gameState]);

  const handleKeyDown = (e) => {
    e.preventDefault(); 
    if (gameState === 'START' || gameState === 'GAME_OVER') {
      if (e.key === 'Enter') initGame();
      if (e.key === 'Escape') onExit();
      return;
    }

    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
      playerLane.current = Math.max(0, playerLane.current - 1);
      renderFrame();
    }
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
      playerLane.current = Math.min(2, playerLane.current + 1);
      renderFrame();
    }
    
    // NEW: Forward Throttle
    if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
      playerRow.current = Math.max(2, playerRow.current - 1); // Limit top boundary
      renderFrame();
    }
    // NEW: Hit the Brakes
    if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') {
      playerRow.current = Math.min(17, playerRow.current + 1); // Limit bottom boundary
      renderFrame();
    }
  };

  return (
    <div 
      ref={gameContainerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="w-full h-full flex flex-col items-center justify-center bg-[#050505] outline-none animate-[fadeIn_0.3s_ease-out] relative"
    >
      {/* UNIVERSAL ABORT BUTTON */}
      <button 
        onClick={onExit}
        className="absolute top-8 right-8 text-red-500/70 border border-red-500/30 px-4 py-2 hover:bg-red-500/20 hover:border-red-500 hover:text-red-400 text-[10px] font-bold tracking-widest transition-all z-50 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
      >
        [ ABORT_RACING ]
      </button>

      <div className="text-[#22c55e] font-mono text-2xl mb-6 tracking-[0.3em] font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
        ASCII_RACER // TERMINAL_OVERRIDE
      </div>
      
      <div className="border border-[#22c55e]/50 p-8 shadow-[0_0_40px_rgba(34,197,94,0.15)] relative">
        <div className="flex justify-between text-[#22c55e] mb-4 font-bold tracking-widest text-sm">
          <span>SCORE__{score.toString().padStart(5, '0')}</span>
          <span className="animate-pulse">ENG_ACTIVE</span>
        </div>
        
        <pre className="text-[#22c55e] leading-[1.15] text-lg font-bold tracking-widest selection:bg-transparent">
          {grid.join('\n')}
        </pre>
        
        {gameState === 'GAME_OVER' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600/95 backdrop-blur-md text-black px-8 py-6 border-2 border-red-500 text-center shadow-[0_0_50px_rgba(239,68,68,0.6)] z-40">
            <div className="text-3xl font-black mb-2 animate-pulse tracking-widest">CRASHED</div>
            <div className="text-md font-bold mb-6">FINAL_SCORE: {score}</div>
            <div className="text-xs tracking-widest font-bold hover:text-white transition-colors cursor-pointer" onClick={initGame}>PRESS [ENTER] TO REBOOT</div>
          </div>
        )}
      </div>
    </div>
  );
}