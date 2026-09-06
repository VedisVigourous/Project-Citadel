import React, { useState, useEffect, useRef } from 'react';

export default function CyberSwarm({ onExit }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const game = {
      scoreInt: 0,
      frames: 0,
      player: { x: canvas.width / 2, y: canvas.height / 2, dx: 0, dy: 0, size: 12, speed: 0.8, friction: 0.9 },
      bullets: [],
      enemies: [],
      particles: [],
      lastShot: 0
    };

    const keys = { w: false, a: false, s: false, d: false, ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false };
    const handleKeyDown = (e) => { if (keys.hasOwnProperty(e.key)) { keys[e.key] = true; if(e.key.startsWith('Arrow')) e.preventDefault(); } };
    const handleKeyUp = (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; };
    window.addEventListener('keydown', handleKeyDown); window.addEventListener('keyup', handleKeyUp);

    const spawnEnemy = () => {
      // 1.5 second grace period before the first virus spawns
      if (game.frames < 90) return;

      // Starts at 1 enemy every ~2.5 seconds (160 frames)
      // Gradually caps out at a manageable 25 frames only after a high score
      const spawnRate = Math.max(25, 160 - Math.floor(game.scoreInt / 2.5));
      
      if (game.frames % spawnRate === 0) {
        let ex, ey;
        if (Math.random() < 0.5) {
          ex = Math.random() < 0.5 ? -30 : canvas.width + 30;
          ey = Math.random() * canvas.height;
        } else {
          ex = Math.random() * canvas.width;
          ey = Math.random() < 0.5 ? -30 : canvas.height + 30;
        }
        
        // Enemies start significantly slower (0.9) and only get faster very gradually
        const speed = 0.9 + (game.scoreInt / 3000);
        game.enemies.push({ x: ex, y: ey, size: 14, speed });
      }
    };

    const explode = (x, y, color, count) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        game.particles.push({
          x, y,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          life: 1,
          color
        });
      }
    };

    const update = () => {
      game.frames++;
      
      // Pure Black Clear
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- PLAYER PHYSICS ---
      if (keys.w) game.player.dy -= game.player.speed;
      if (keys.s) game.player.dy += game.player.speed;
      if (keys.a) game.player.dx -= game.player.speed;
      if (keys.d) game.player.dx += game.player.speed;
      
      game.player.dx *= game.player.friction;
      game.player.dy *= game.player.friction;
      game.player.x += game.player.dx;
      game.player.y += game.player.dy;

      // Arena Boundaries
      game.player.x = Math.max(game.player.size, Math.min(canvas.width - game.player.size, game.player.x));
      game.player.y = Math.max(game.player.size, Math.min(canvas.height - game.player.size, game.player.y));

      // --- SHOOTING ---
      if (game.frames - game.lastShot > 8) { // Fire rate cooldown
        let bdx = 0, bdy = 0;
        if (keys.ArrowUp) bdy = -12;
        else if (keys.ArrowDown) bdy = 12;
        else if (keys.ArrowLeft) bdx = -12;
        else if (keys.ArrowRight) bdx = 12;

        if (bdx !== 0 || bdy !== 0) {
          game.bullets.push({ x: game.player.x, y: game.player.y, dx: bdx, dy: bdy, size: 4 });
          game.lastShot = game.frames;
        }
      }

      // --- BULLETS ---
      ctx.shadowBlur = 10; ctx.shadowColor = '#fde047'; ctx.fillStyle = '#fde047';
      for (let i = game.bullets.length - 1; i >= 0; i--) {
        let b = game.bullets[i];
        b.x += b.dx; b.y += b.dy;
        ctx.beginPath(); ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2); ctx.fill();

        if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
          game.bullets.splice(i, 1);
        }
      }

      spawnEnemy();

      // --- ENEMIES ---
      ctx.shadowColor = '#f43f5e';
      for (let i = game.enemies.length - 1; i >= 0; i--) {
        let e = game.enemies[i];
        
        // Hunt the player
        const angle = Math.atan2(game.player.y - e.y, game.player.x - e.x);
        e.x += Math.cos(angle) * e.speed;
        e.y += Math.sin(angle) * e.speed;

        // Draw Hollow Red Square
        ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2;
        ctx.strokeRect(e.x - e.size, e.y - e.size, e.size * 2, e.size * 2);

        // Player Collision (Game Over)
        const distToPlayer = Math.hypot(game.player.x - e.x, game.player.y - e.y);
        if (distToPlayer < game.player.size + e.size) {
          setGameOver(true);
        }

        // Bullet Collision
        for (let j = game.bullets.length - 1; j >= 0; j--) {
          let b = game.bullets[j];
          const distToBullet = Math.hypot(b.x - e.x, b.y - e.y);
          if (distToBullet < e.size + b.size) {
            explode(e.x, e.y, '#f43f5e', 12); // Red explosion
            game.enemies.splice(i, 1);
            game.bullets.splice(j, 1);
            game.scoreInt += 10;
            setScore(game.scoreInt);
            break;
          }
        }
      }

      // --- PARTICLES ---
      ctx.shadowBlur = 5;
      for (let i = game.particles.length - 1; i >= 0; i--) {
        let p = game.particles[i];
        p.x += p.dx; p.y += p.dy;
        p.life -= 0.03;
        if (p.life <= 0) { game.particles.splice(i, 1); continue; }
        
        ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color; ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 3, 3);
      }
      ctx.globalAlpha = 1.0;

      // --- DRAW PLAYER (Cyan Diamond) ---
      ctx.shadowBlur = 15; ctx.shadowColor = '#06b6d4';
      ctx.fillStyle = '#050505'; ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(game.player.x, game.player.y - game.player.size);
      ctx.lineTo(game.player.x + game.player.size, game.player.y);
      ctx.lineTo(game.player.x, game.player.y + game.player.size);
      ctx.lineTo(game.player.x - game.player.size, game.player.y);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      
      // Player Core Glow
      ctx.fillStyle = '#ffffff'; ctx.shadowBlur = 20; ctx.shadowColor = '#ffffff';
      ctx.beginPath(); ctx.arc(game.player.x, game.player.y, 3, 0, Math.PI * 2); ctx.fill();

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
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center border border-red-500/50 bg-[#050505] p-8 shadow-[0_0_30px_rgba(239,68,68,0.3)] max-w-lg">
            <h2 className="text-red-500 text-3xl font-black mb-4 tracking-widest">CYBER-SWARM</h2>
            <div className="text-red-400/70 text-xs mb-8 space-y-2">
              <p>[ W S A D ] TO MOVE YOUR SHIP.</p>
              <p>[ ARROWS ] TO FIRE LASERS IN 4 DIRECTIONS.</p>
              <p>DESTROY THE VIRUS. SURVIVE THE SWARM.</p>
            </div>
            <button onClick={() => setGameStarted(true)} className="text-red-500 border border-red-500 px-6 py-2 hover:bg-red-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">INITIALIZE PROTOCOL</button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-900/40 backdrop-blur-md">
          <div className="text-center border border-red-500 bg-[#050505] p-8 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            <h2 className="text-red-500 text-4xl font-black mb-2 animate-pulse tracking-widest">SYSTEM BREACHED</h2>
            <p className="text-white text-lg mb-8">VIRUSES DESTROYED: {score / 10}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setScore(0); setGameOver(false); setGameStarted(true); }} className="text-red-400 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">REBOOT</button>
              <button onClick={onExit} className="text-slate-400 border border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-black font-bold transition-all">EXIT TO ARCADE</button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-8 left-8 text-red-500 text-2xl font-black z-10 drop-shadow-[0_0_10px_#ef4444]">
        SCORE: {score.toString().padStart(6, '0')}
      </div>
      <button onClick={onExit} className="absolute top-8 right-8 text-red-500/50 border border-red-500/30 hover:bg-red-500/20 px-4 py-1 z-10 text-xs transition-all tracking-widest cursor-pointer">[ ABORT ]</button>
      
      <canvas ref={canvasRef} width={1000} height={700} className="w-full h-full object-cover z-0" />
    </div>
  );
}