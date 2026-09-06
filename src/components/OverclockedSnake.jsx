import React, { useState, useEffect, useRef } from 'react';

export default function OverclockedSnake({ onExit }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const GRID_SIZE = 25;
    const COLS = canvas.width / GRID_SIZE;
    const ROWS = canvas.height / GRID_SIZE;

    const game = {
      snake: [
        { x: 10, y: 14 },
        { x: 9, y: 14 },
        { x: 8, y: 14 }
      ],
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      food: { x: 20, y: 14 },
      particles: [],
      moveInterval: 100, // Starts fast (100ms per grid step)
      lastMove: Date.now()
    };

    const handleKeyDown = (e) => {
      if ((e.key === 'w' || e.key === 'ArrowUp') && game.dir.y === 0) game.nextDir = { x: 0, y: -1 };
      if ((e.key === 's' || e.key === 'ArrowDown') && game.dir.y === 0) game.nextDir = { x: 0, y: 1 };
      if ((e.key === 'a' || e.key === 'ArrowLeft') && game.dir.x === 0) game.nextDir = { x: -1, y: 0 };
      if ((e.key === 'd' || e.key === 'ArrowRight') && game.dir.x === 0) game.nextDir = { x: 1, y: 0 };
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
    };
    window.addEventListener('keydown', handleKeyDown);

    const spawnFood = () => {
      let newFood;
      let isSafe = false;
      while (!isSafe) {
        newFood = {
          // Adds a 1-tile margin so food never touches the absolute edge
          x: Math.floor(Math.random() * (COLS - 2)) + 1,
          y: Math.floor(Math.random() * (ROWS - 2)) + 1
        };
        isSafe = !game.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y);
      }
      game.food = newFood;
    };

    const explode = (x, y) => {
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5 + 2;
        game.particles.push({
          x: x * GRID_SIZE + GRID_SIZE / 2,
          y: y * GRID_SIZE + GRID_SIZE / 2,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          life: 1
        });
      }
    };

    const update = () => {
      const now = Date.now();
      
      // Pure Black Clear
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle Background Grid
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= canvas.width; i += GRID_SIZE) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i <= canvas.height; i += GRID_SIZE) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      // Physics / Grid Tick
      if (now - game.lastMove > game.moveInterval) {
        game.dir = game.nextDir;
        const head = { x: game.snake[0].x + game.dir.x, y: game.snake[0].y + game.dir.y };

        // Wall Collision
        if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS) {
          setGameOver(true);
          return;
        }

        // Self Collision
        if (game.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return;
        }

        game.snake.unshift(head);

        // Eat Food
        if (head.x === game.food.x && head.y === game.food.y) {
          setScore(s => s + 10);
          game.moveInterval = Math.max(35, game.moveInterval - 2.5); // Speed ramps up!
          explode(game.food.x, game.food.y);
          spawnFood();
        } else {
          game.snake.pop();
        }

        game.lastMove = now;
      }

      // Draw Food (Magenta Pulse)
      ctx.shadowBlur = 15; ctx.shadowColor = '#d946ef'; ctx.fillStyle = '#d946ef';
      const pulse = Math.abs(Math.sin(now / 150)) * 4;
      ctx.fillRect(
        game.food.x * GRID_SIZE + pulse/2, 
        game.food.y * GRID_SIZE + pulse/2, 
        GRID_SIZE - pulse, 
        GRID_SIZE - pulse
      );

      // Draw Snake (Neon Green with Fading Tail)
      ctx.shadowColor = '#22c55e';
      game.snake.forEach((segment, index) => {
        // Head is brightest, tail fades out
        const opacity = 1 - (index / game.snake.length) * 0.7;
        ctx.fillStyle = `rgba(34, 197, 94, ${opacity})`;
        ctx.shadowBlur = index === 0 ? 15 : 0; // Only head glows heavily
        
        // Slightly shrink the segments for a disconnected, cyber look
        ctx.fillRect(segment.x * GRID_SIZE + 2, segment.y * GRID_SIZE + 2, GRID_SIZE - 4, GRID_SIZE - 4);
      });
      ctx.shadowBlur = 0;

      // Draw Particles
      ctx.fillStyle = '#d946ef';
      for (let i = game.particles.length - 1; i >= 0; i--) {
        let p = game.particles[i];
        p.x += p.dx; p.y += p.dy;
        p.life -= 0.04;
        if (p.life <= 0) { game.particles.splice(i, 1); continue; }
        
        ctx.globalAlpha = p.life;
        ctx.fillRect(p.x, p.y, 4, 4);
      }
      ctx.globalAlpha = 1.0;

      if (!gameOver) animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animationId);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="w-full h-full bg-black relative flex items-center justify-center font-mono overflow-hidden">
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center border border-[#22c55e]/50 bg-[#050505] p-8 shadow-[0_0_30px_rgba(34,197,94,0.3)] max-w-lg">
            <h2 className="text-[#22c55e] text-3xl font-black mb-4 tracking-widest">OVERCLOCKED SNAKE</h2>
            <div className="text-[#22c55e]/70 text-xs mb-8 space-y-2">
              <p>[ W S A D ] OR [ ARROWS ] TO ROUTE.</p>
              <p>CONSUME DATA PACKETS. AVOID WALLS.</p>
              <p>EACH PACKET INCREASES CLOCK SPEED.</p>
            </div>
            <button onClick={() => setGameStarted(true)} className="text-[#22c55e] border border-[#22c55e] px-6 py-2 hover:bg-[#22c55e] hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]">INITIALIZE ROUTINE</button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-900/40 backdrop-blur-md">
          <div className="text-center border border-red-500 bg-[#050505] p-8 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            <h2 className="text-red-500 text-4xl font-black mb-2 animate-pulse tracking-widest">FATAL COLLISION</h2>
            <p className="text-white text-lg mb-8">FINAL SCORE: {score}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setScore(0); setGameOver(false); setGameStarted(true); }} className="text-red-400 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">REBOOT</button>
              <button onClick={onExit} className="text-slate-400 border border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-black font-bold transition-all">EXIT TO ARCADE</button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-8 left-8 text-[#22c55e] text-2xl font-black z-10 drop-shadow-[0_0_10px_#22c55e]">
        SCORE: {score.toString().padStart(5, '0')}
      </div>
      <button onClick={onExit} className="absolute top-8 right-8 text-[#22c55e]/50 border border-[#22c55e]/30 hover:bg-[#22c55e]/20 px-4 py-1 z-10 text-xs transition-all tracking-widest cursor-pointer">[ ABORT ]</button>
      
      <canvas ref={canvasRef} width={1000} height={700} className="w-full h-full object-contain z-0" />
    </div>
  );
}