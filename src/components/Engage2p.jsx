import React, { useState, useEffect, useRef } from 'react';

// --- CYBER PONG ENGINE (BALANCED CLASSIC) ---
const CyberPong = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const game = {
      w: canvas.width, h: canvas.height,
      ball: { x: 500, y: 300, dx: 4.5, dy: 4.5, radius: 8, speed: 4.5 },
      p1: { y: 250, score: 0 },
      p2: { y: 250, score: 0 },
      paddleW: 14, paddleH: 110
    };

    const keys = { w: false, s: false, ArrowUp: false, ArrowDown: false };

    const handleKeyDown = (e) => {
      if (keys.hasOwnProperty(e.key)) {
        keys[e.key] = true;
        if(["ArrowUp","ArrowDown"," "].indexOf(e.key) > -1) e.preventDefault(); 
      }
    };
    const handleKeyUp = (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const resetBall = () => {
      game.ball.x = game.w / 2;
      game.ball.y = game.h / 2;
      game.ball.dx = (Math.random() > 0.5 ? 1 : -1) * game.ball.speed;
      game.ball.dy = (Math.random() > 0.5 ? 1 : -1) * game.ball.speed;
    };

    const update = () => {
      if (keys.w && game.p1.y > 0) game.p1.y -= 9;
      if (keys.s && game.p1.y < game.h - game.paddleH) game.p1.y += 9;
      if (keys.ArrowUp && game.p2.y > 0) game.p2.y -= 9;
      if (keys.ArrowDown && game.p2.y < game.h - game.paddleH) game.p2.y += 9;

      game.ball.x += game.ball.dx;
      game.ball.y += game.ball.dy;

      if (game.ball.y + game.ball.radius > game.h || game.ball.y - game.ball.radius < 0) game.ball.dy *= -1;

      const hitP1 = game.ball.x - game.ball.radius < 30 && game.ball.y > game.p1.y && game.ball.y < game.p1.y + game.paddleH;
      const hitP2 = game.ball.x + game.ball.radius > game.w - 30 && game.ball.y > game.p2.y && game.ball.y < game.p2.y + game.paddleH;

      if (hitP1 || hitP2) {
        game.ball.dx *= -1.07; 
        game.ball.dy *= 1.02;  
        game.ball.dx = Math.max(-12, Math.min(12, game.ball.dx)); 
        game.ball.dy = Math.max(-10, Math.min(10, game.ball.dy)); 
      }

      if (game.ball.x < -20) { 
        game.p2.score++; setScore({ p1: game.p1.score, p2: game.p2.score }); resetBall();
      } else if (game.ball.x > game.w + 20) {
        game.p1.score++; setScore({ p1: game.p1.score, p2: game.p2.score }); resetBall();
      }

      ctx.fillStyle = 'rgba(5, 5, 5, 0.4)'; 
      ctx.fillRect(0, 0, game.w, game.h);
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#22c55e';
      ctx.fillRect(20, game.p1.y, game.paddleW, game.paddleH);
      ctx.fillRect(game.w - 20 - game.paddleW, game.p2.y, game.paddleW, game.paddleH);
      for (let i = 0; i < game.h; i += 40) ctx.fillRect(game.w / 2 - 1, i, 2, 20);
      ctx.beginPath();
      ctx.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
      animationFrameId = requestAnimationFrame(update);
    };

    update();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden">
      <div className="absolute top-8 w-full flex justify-between px-32 text-[#22c55e] font-mono text-7xl font-bold opacity-10 pointer-events-none">
        <span>{score.p1}</span><span>{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain pointer-events-none" />
    </div>
  );
};


// --- GRID-CYCLE ENGINE (TRON) ---
const GridCycle = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;
    const FPS = 24; // 24 frames per second (Grid speed)
    const gridSize = 10;
    const cols = canvas.width / gridSize; // 100
    const rows = canvas.height / gridSize; // 60

    const state = {
      grid: Array(cols).fill().map(() => Array(rows).fill(0)),
      p1: { x: 10, y: 30, dir: 'RIGHT', nextDir: 'RIGHT', alive: true },
      p2: { x: 89, y: 30, dir: 'LEFT', nextDir: 'LEFT', alive: true },
      resetting: false
    };

    const handleKeyDown = (e) => {
      // P1 Controls (WASD)
      if (e.key === 'w' && state.p1.dir !== 'DOWN') state.p1.nextDir = 'UP';
      if (e.key === 's' && state.p1.dir !== 'UP') state.p1.nextDir = 'DOWN';
      if (e.key === 'a' && state.p1.dir !== 'RIGHT') state.p1.nextDir = 'LEFT';
      if (e.key === 'd' && state.p1.dir !== 'LEFT') state.p1.nextDir = 'RIGHT';

      // P2 Controls (Arrows)
      if (e.key === 'ArrowUp' && state.p2.dir !== 'DOWN') { state.p2.nextDir = 'UP'; e.preventDefault(); }
      if (e.key === 'ArrowDown' && state.p2.dir !== 'UP') { state.p2.nextDir = 'DOWN'; e.preventDefault(); }
      if (e.key === 'ArrowLeft' && state.p2.dir !== 'RIGHT') { state.p2.nextDir = 'LEFT'; e.preventDefault(); }
      if (e.key === 'ArrowRight' && state.p2.dir !== 'LEFT') { state.p2.nextDir = 'RIGHT'; e.preventDefault(); }
    };

    window.addEventListener('keydown', handleKeyDown);

    const initRound = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= canvas.width; i += gridSize) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke(); }
      for (let i = 0; i <= canvas.height; i += gridSize) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke(); }

      state.grid = Array(cols).fill().map(() => Array(rows).fill(0));
      state.p1 = { x: 10, y: 30, dir: 'RIGHT', nextDir: 'RIGHT', alive: true };
      state.p2 = { x: 89, y: 30, dir: 'LEFT', nextDir: 'LEFT', alive: true };
      state.resetting = false;
    };

    const movePlayer = (p) => {
      p.dir = p.nextDir;
      if (p.dir === 'UP') p.y--;
      if (p.dir === 'DOWN') p.y++;
      if (p.dir === 'LEFT') p.x--;
      if (p.dir === 'RIGHT') p.x++;
    };

    const checkCollision = (p) => {
      // Wall collision
      if (p.x < 0 || p.x >= cols || p.y < 0 || p.y >= rows) return true;
      // Trail collision
      if (state.grid[p.x][p.y] !== 0) return true;
      return false;
    };

    const update = (time) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      if (deltaTime > 1000 / FPS && !state.resetting) {
        lastTime = time;

        movePlayer(state.p1);
        movePlayer(state.p2);

        // Head-on collision edge case
        if (state.p1.x === state.p2.x && state.p1.y === state.p2.y) {
          state.p1.alive = false;
          state.p2.alive = false;
        } else {
          if (checkCollision(state.p1)) state.p1.alive = false;
          if (checkCollision(state.p2)) state.p2.alive = false;
        }

        if (!state.p1.alive || !state.p2.alive) {
          state.resetting = true;
          setScore(prev => {
            let newP1 = prev.p1; let newP2 = prev.p2;
            if (!state.p1.alive && state.p2.alive) newP2++;
            if (!state.p2.alive && state.p1.alive) newP1++;
            return { p1: newP1, p2: newP2 };
          });
          setTimeout(initRound, 1500); // 1.5s dramatic pause before reset
        } else {
          // Record trail
          state.grid[state.p1.x][state.p1.y] = 1;
          state.grid[state.p2.x][state.p2.y] = 2;

          // Draw P1 (Neon Green)
          ctx.fillStyle = '#22c55e';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#22c55e';
          ctx.fillRect(state.p1.x * gridSize, state.p1.y * gridSize, gridSize, gridSize);

          // Draw P2 (Neon Fuchsia)
          ctx.fillStyle = '#d946ef';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#d946ef';
          ctx.fillRect(state.p2.x * gridSize, state.p2.y * gridSize, gridSize, gridSize);
        }
      }
      animationFrameId = requestAnimationFrame(update);
    };

    initRound();
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden">
      <div className="absolute top-8 w-full flex justify-between px-32 font-mono text-7xl font-bold opacity-20 pointer-events-none z-10">
        <span className="text-[#22c55e]">{score.p1}</span>
        <span className="text-[#d946ef]">{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain pointer-events-none z-0" />
    </div>
  );
};


// --- MAIN HUB ARCHITECTURE ---
export default function Engage2P() {
  const [activeGame, setActiveGame] = useState('pong'); 

  return (
    <div className="w-full h-full bg-[#050505]/95 flex flex-col p-4">
      {/* Header Banner */}
      <div className="w-full border border-[#22c55e]/50 py-2 mb-4 bg-[#22c55e]/5 text-center">
        <span className="text-[#22c55e] font-mono text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
          Life is all about engaging!
        </span>
      </div>

      {/* Capsule Navigation */}
      <div className="flex justify-center gap-6 mb-6">
        <button 
          onClick={() => setActiveGame('pong')}
          className={`px-8 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'pong' 
              ? 'bg-[#22c55e] text-black border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)] font-bold' 
              : 'bg-black text-[#22c55e] border-[#22c55e]/40 hover:border-[#22c55e]'
          }`}
        >
          Cyber-Pong
        </button>
        <button 
          onClick={() => setActiveGame('tron')}
          className={`px-8 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'tron' 
              ? 'bg-[#d946ef] text-black border-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,0.4)] font-bold' 
              : 'bg-black text-[#d946ef] border-[#d946ef]/40 hover:border-[#d946ef]'
          }`}
        >
          Grid-Cycle
        </button>
        <button 
          onClick={() => setActiveGame('firewall')}
          className={`px-8 py-2 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'firewall' 
              ? 'bg-[#3b82f6] text-black border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.4)] font-bold' 
              : 'bg-black text-[#3b82f6] border-[#3b82f6]/40 hover:border-[#3b82f6]'
          }`}
        >
          Breach
        </button>
      </div>

      {/* Game Renderer Area */}
      <div className="flex-1 w-full border border-[#22c55e]/30 bg-black/60 relative overflow-hidden flex items-center justify-center p-2">
        {activeGame === 'pong' && <CyberPong />}
        {activeGame === 'tron' && <GridCycle />}
        {activeGame === 'firewall' && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <div className="text-[#3b82f6] font-mono animate-pulse">COMPILING BREACH PHYSICS... (PENDING)</div>
          </>
        )}
      </div>
      
      {/* Footer Controls */}
      <div className="mt-2 text-center font-mono text-[9px] tracking-widest flex justify-center gap-8">
        <span className="text-[#22c55e]/80">PLAYER 1: [ W S A D ]</span>
        <span className="text-white/30">|</span>
        <span className="text-[#d946ef]/80">PLAYER 2: [ ARROWS ]</span>
      </div>
    </div>
  );
}