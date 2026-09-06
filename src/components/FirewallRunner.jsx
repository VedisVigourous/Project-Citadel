import React, { useState, useEffect, useRef } from 'react';

export default function FirewallRunner({ onExit }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const GROUND_Y = canvas.height - 150;
    
    const game = {
      speed: 8,
      scoreInt: 0,
      frames: 0,
      bgOffset: 0,
      player: { 
        x: 150, y: GROUND_Y - 60, w: 40, h: 60, 
        dy: 0, gravity: 0.8, jumpForce: -14, 
        grounded: true, sliding: false 
      },
      obstacles: [],
      particles: []
    };

    const keys = { w: false, s: false, ArrowUp: false, ArrowDown: false };
    const handleKeyDown = (e) => { 
      if (keys.hasOwnProperty(e.key)) keys[e.key] = true; 
      if (['ArrowUp', 'ArrowDown', 'w', 's', ' '].includes(e.key)) e.preventDefault();
    };
    const handleKeyUp = (e) => { 
      if (keys.hasOwnProperty(e.key)) keys[e.key] = false; 
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const explode = (x, y, color) => {
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 6 + 2;
        game.particles.push({
          x, y,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          life: 1, color
        });
      }
    };

   const spawnObstacle = () => {
      // Chrome Dino Pacing: Starts at a generous 120 frames, drops very slowly
      const spawnRate = Math.max(45, 120 - Math.floor(game.scoreInt / 40));
      
      if (game.frames > 80 && game.frames % spawnRate === 0) {
        const type = Math.random() > 0.5 ? 'SPIKE' : 'BEAM';
        
        if (type === 'SPIKE') {
          game.obstacles.push({ x: canvas.width, y: GROUND_Y - 40, w: 30, h: 40, type });
        } else {
          game.obstacles.push({ x: canvas.width, y: GROUND_Y - 90, w: 40, h: 20, type });
        }
      }
    };

    const update = () => {
      game.frames++;
      // Sliced the acceleration by 90% for that slow, steady, manageable ramp-up
      game.speed += 0.0005; 
      game.scoreInt += (game.speed * 0.1);
      setScore(Math.floor(game.scoreInt));
      game.bgOffset = (game.bgOffset + (game.speed * 0.5)) % 100;

      // Pure Black Clear
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- PARALLAX BACKGROUND ---
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)'; ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width + 100; i += 100) {
        ctx.beginPath(); ctx.moveTo(i - game.bgOffset, 0); ctx.lineTo(i - game.bgOffset, canvas.height); ctx.stroke();
      }
      
      // Hardware Ground Line
      ctx.shadowBlur = 15; ctx.shadowColor = '#06b6d4';
      ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(0, GROUND_Y); ctx.lineTo(canvas.width, GROUND_Y); ctx.stroke();
      ctx.shadowBlur = 0;

      // --- PLAYER PHYSICS ---
      // Sliding Logic
      if ((keys.s || keys.ArrowDown) && game.player.grounded) {
        game.player.sliding = true;
        game.player.h = 30; // Shrink hitbox
      } else {
        game.player.sliding = false;
        game.player.h = 60; // Reset hitbox
      }

      // Jumping Logic
      if ((keys.w || keys.ArrowUp) && game.player.grounded && !game.player.sliding) {
        game.player.dy = game.player.jumpForce;
        game.player.grounded = false;
        explode(game.player.x + 20, GROUND_Y, '#f59e0b'); // Jump dust
      }

      // Gravity
      game.player.dy += game.player.gravity;
      game.player.y += game.player.dy;

      // Floor Collision
      if (game.player.y + game.player.h >= GROUND_Y) {
        game.player.y = GROUND_Y - game.player.h;
        game.player.dy = 0;
        game.player.grounded = true;
      }

      spawnObstacle();

      // --- OBSTACLES ---
      for (let i = game.obstacles.length - 1; i >= 0; i--) {
        let obs = game.obstacles[i];
        obs.x -= game.speed;

        if (obs.x + obs.w < 0) { game.obstacles.splice(i, 1); continue; }

        ctx.shadowBlur = 15; ctx.shadowColor = '#ef4444';
        ctx.fillStyle = '#050505'; ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2;

        if (obs.type === 'SPIKE') {
          // Draw Triangle Spike
          ctx.beginPath();
          ctx.moveTo(obs.x, obs.y + obs.h); // Bottom Left
          ctx.lineTo(obs.x + obs.w, obs.y + obs.h); // Bottom Right
          ctx.lineTo(obs.x + obs.w/2, obs.y); // Top Peak
          ctx.closePath();
          ctx.fill(); ctx.stroke();
        } else {
          // Draw Floating Laser Beam
          ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
          ctx.strokeRect(obs.x, obs.y, obs.w, obs.h);
          // Inner glowing core
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(obs.x + 2, obs.y + 8, obs.w - 4, 4);
        }

        // Collision Check (AABB)
        // Shaved 4px off the hitbox edges to make it fair
        if (
          game.player.x + 4 < obs.x + obs.w - 4 &&
          game.player.x + game.player.w - 4 > obs.x + 4 &&
          game.player.y + 4 < obs.y + obs.h - 4 &&
          game.player.y + game.player.h - 4 > obs.y + 4
        ) {
          explode(game.player.x + 20, game.player.y + 30, '#ef4444');
          setGameOver(true);
        }
      }

      // --- DRAW PLAYER (Amber Data-Runner) ---
      if (!gameOver) {
        ctx.shadowBlur = 15; ctx.shadowColor = '#f59e0b';
        ctx.fillStyle = 'rgba(245, 158, 11, 0.15)'; 
        ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
        
        // Lean forward if running, flat if sliding
        if (game.player.sliding) {
          ctx.strokeRect(game.player.x, game.player.y, game.player.w + 20, game.player.h);
          ctx.fillRect(game.player.x, game.player.y, game.player.w + 20, game.player.h);
        } else {
          ctx.beginPath();
          ctx.moveTo(game.player.x + 10, game.player.y); // Top left (leaned)
          ctx.lineTo(game.player.x + game.player.w + 10, game.player.y); // Top right
          ctx.lineTo(game.player.x + game.player.w, game.player.y + game.player.h); // Bottom right
          ctx.lineTo(game.player.x, game.player.y + game.player.h); // Bottom left
          ctx.closePath();
          ctx.fill(); ctx.stroke();
        }

        // Running Trail Particles
        if (game.player.grounded && game.frames % 3 === 0) {
          game.particles.push({ x: game.player.x, y: GROUND_Y - 5, dx: -game.speed * 0.5, dy: -1, life: 1, color: '#f59e0b' });
        }
      }

      // --- PARTICLES ---
      ctx.shadowBlur = 5;
      for (let i = game.particles.length - 1; i >= 0; i--) {
        let p = game.particles[i];
        p.x += p.dx; p.y += p.dy;
        p.life -= 0.05;
        if (p.life <= 0) { game.particles.splice(i, 1); continue; }
        
        ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color; ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 4);
      }
      ctx.globalAlpha = 1.0; ctx.shadowBlur = 0;

      if (!gameOver) animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationId);
    };
  }, [gameStarted, gameOver]);

  return (
    <div className="w-full h-full bg-black relative flex items-center justify-center font-mono overflow-hidden">
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center border border-amber-500/50 bg-[#050505] p-8 shadow-[0_0_30px_rgba(245,158,11,0.3)] max-w-lg">
            <h2 className="text-amber-500 text-3xl font-black mb-4 tracking-widest">FIREWALL RUNNER</h2>
            <div className="text-amber-500/70 text-xs mb-8 space-y-2">
              <p>[ W ] OR [ UP ] TO JUMP OVER SPIKES.</p>
              <p>[ S ] OR [ DOWN ] TO SLIDE UNDER BEAMS.</p>
              <p>THE HARDWARE BUS WAITS FOR NO ONE.</p>
            </div>
            <button onClick={() => setGameStarted(true)} className="text-amber-500 border border-amber-500 px-6 py-2 hover:bg-amber-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.4)]">INITIATE RUN</button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-900/40 backdrop-blur-md">
          <div className="text-center border border-red-500 bg-[#050505] p-8 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            <h2 className="text-red-500 text-4xl font-black mb-2 animate-pulse tracking-widest">CONNECTION SEVERED</h2>
            <p className="text-white text-lg mb-8">FINAL SCORE: {score}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setScore(0); setGameOver(false); setGameStarted(true); }} className="text-red-400 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">REBOOT</button>
              <button onClick={onExit} className="text-slate-400 border border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-black font-bold transition-all">EXIT TO ARCADE</button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-8 left-8 text-amber-500 text-2xl font-black z-10 drop-shadow-[0_0_10px_#f59e0b]">
        SCORE: {score.toString().padStart(6, '0')}
      </div>
      <button onClick={onExit} className="absolute top-8 right-8 text-amber-500/50 border border-amber-500/30 hover:bg-amber-500/20 px-4 py-1 z-10 text-xs transition-all tracking-widest cursor-pointer">[ ABORT ]</button>
      
      <canvas ref={canvasRef} width={1000} height={700} className="w-full h-full object-contain z-0" />
    </div>
  );
}