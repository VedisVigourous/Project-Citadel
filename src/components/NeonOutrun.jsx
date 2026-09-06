import React, { useState, useEffect, useRef } from 'react';

export default function NeonOutrun({ onExit }) {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const HWY_WIDTH = 480;
    const LANE_WIDTH = HWY_WIDTH / 4;
    const CAR_W = 46;
    const CAR_H = 80;

    const game = {
      speed: 6, // Smooth starting speed
      score: 0,
      frames: 0,
      targetLane: 1, // 0, 1, 2, 3
      playerX: 0,
      scrollOffset: 0,
      obstacles: [],
      particles: []
    };

    // Center the highway
    const hwyX = (canvas.width - HWY_WIDTH) / 2;
    game.playerX = hwyX + (game.targetLane * LANE_WIDTH) + (LANE_WIDTH / 2);

    const handleKeyDown = (e) => {
      if ((e.key === 'a' || e.key === 'ArrowLeft') && game.targetLane > 0) game.targetLane--;
      if ((e.key === 'd' || e.key === 'ArrowRight') && game.targetLane < 3) game.targetLane++;
    };
    window.addEventListener('keydown', handleKeyDown);

    const update = () => {
      game.frames++;
      game.speed += 0.002; // Gradual speed increase
      game.scrollOffset = (game.scrollOffset + game.speed) % 60;
      
      // Update Score
      game.score += (game.speed * 0.05);
      setScore(Math.floor(game.score));

      // Clear Screen (Pure Black)
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Highway Background
      ctx.fillStyle = '#050505';
      ctx.fillRect(hwyX, 0, HWY_WIDTH, canvas.height);

      // Draw Outer Neon Rails
      ctx.shadowBlur = 15; ctx.shadowColor = '#d946ef';
      ctx.strokeStyle = '#d946ef'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(hwyX, 0); ctx.lineTo(hwyX, canvas.height); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(hwyX + HWY_WIDTH, 0); ctx.lineTo(hwyX + HWY_WIDTH, canvas.height); ctx.stroke();

      // Draw Dashed Lane Dividers
      ctx.shadowBlur = 5; ctx.shadowColor = '#06b6d4';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)'; ctx.lineWidth = 2;
      ctx.setLineDash([30, 30]);
      ctx.lineDashOffset = -game.scrollOffset;
      for (let i = 1; i < 4; i++) {
        ctx.beginPath(); ctx.moveTo(hwyX + i * LANE_WIDTH, 0); ctx.lineTo(hwyX + i * LANE_WIDTH, canvas.height); ctx.stroke();
      }
      ctx.setLineDash([]); // Reset dash

      // Smooth Player Lane Snapping
      const targetX = hwyX + (game.targetLane * LANE_WIDTH) + (LANE_WIDTH / 2);
      game.playerX += (targetX - game.playerX) * 0.3; // Interpolation for smooth sliding

      // Obstacle Spawning (Dynamic rate based on speed)
      const spawnRate = Math.max(30, 90 - Math.floor(game.speed * 3));
      if (game.frames > 60 && game.frames % spawnRate === 0) {
        // Spawn 1 or 2 cars, never blocking all 4 lanes
        const numCars = Math.random() > 0.7 ? 2 : 1;
        const availableLanes = [0, 1, 2, 3].sort(() => 0.5 - Math.random()).slice(0, numCars);
        availableLanes.forEach(lane => {
          game.obstacles.push({ lane, y: -100, passed: false });
        });
      }

      // Process Obstacles
      for (let i = game.obstacles.length - 1; i >= 0; i--) {
        let obs = game.obstacles[i];
        obs.y += game.speed;

        if (obs.y > canvas.height + 100) {
          game.obstacles.splice(i, 1);
          continue;
        }

        const obsX = hwyX + (obs.lane * LANE_WIDTH) + (LANE_WIDTH / 2);

        // Draw Enemy Car (Red Wedge)
        ctx.shadowBlur = 15; ctx.shadowColor = '#f43f5e';
        ctx.fillStyle = '#050505'; ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(obsX - CAR_W/2, obs.y - CAR_H/2);
        ctx.lineTo(obsX + CAR_W/2, obs.y - CAR_H/2);
        ctx.lineTo(obsX + CAR_W/2 - 5, obs.y + CAR_H/2);
        ctx.lineTo(obsX - CAR_W/2 + 5, obs.y + CAR_H/2);
        ctx.closePath();
        ctx.fill(); ctx.stroke();

        // Collision Detection
        const pY = canvas.height - 120;
        const hitX = Math.abs(game.playerX - obsX) < CAR_W - 5;
        const hitY = Math.abs(pY - obs.y) < CAR_H - 10;
        
        if (hitX && hitY) {
          setGameOver(true);
        }
      }

      // Draw Player Car (Cyan Sleek Design)
      const pY = canvas.height - 120;
      ctx.shadowBlur = 15; ctx.shadowColor = '#06b6d4';
      ctx.fillStyle = 'rgba(6, 182, 212, 0.15)'; ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(game.playerX - CAR_W/2 + 5, pY - CAR_H/2); // Top left
      ctx.lineTo(game.playerX + CAR_W/2 - 5, pY - CAR_H/2); // Top right
      ctx.lineTo(game.playerX + CAR_W/2, pY + CAR_H/2); // Bottom right
      ctx.lineTo(game.playerX - CAR_W/2, pY + CAR_H/2); // Bottom left
      ctx.closePath();
      ctx.fill(); ctx.stroke();

      // Taillights
      ctx.shadowBlur = 10; ctx.shadowColor = '#f43f5e'; ctx.fillStyle = '#f43f5e';
      ctx.fillRect(game.playerX - CAR_W/2 + 2, pY + CAR_H/2 - 6, 12, 4);
      ctx.fillRect(game.playerX + CAR_W/2 - 14, pY + CAR_H/2 - 6, 12, 4);

      // Exhaust Particles
      if (game.frames % 2 === 0) {
        game.particles.push({ x: game.playerX - CAR_W/2 + 8, y: pY + CAR_H/2, life: 1 });
        game.particles.push({ x: game.playerX + CAR_W/2 - 8, y: pY + CAR_H/2, life: 1 });
      }
      ctx.shadowBlur = 5; ctx.shadowColor = '#f59e0b'; ctx.fillStyle = '#f59e0b';
      for (let i = game.particles.length - 1; i >= 0; i--) {
        let p = game.particles[i];
        p.y += 8; p.life -= 0.05;
        if (p.life <= 0) { game.particles.splice(i, 1); continue; }
        ctx.globalAlpha = p.life;
        ctx.fillRect(p.x - 2, p.y, 4, 4);
      }
      ctx.globalAlpha = 1.0; ctx.shadowBlur = 0;

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
          <div className="text-center border border-cyan-500/50 bg-[#050505] p-8 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <h2 className="text-cyan-400 text-3xl font-black mb-4 tracking-widest">NEON OUTRUN</h2>
            <p className="text-cyan-500/70 text-xs mb-8">4 LANES. [A]/[D] TO SWITCH. SURVIVE THE TRAFFIC.</p>
            <button onClick={() => setGameStarted(true)} className="text-cyan-400 border border-cyan-500 px-6 py-2 hover:bg-cyan-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">ENGAGE ENGINE</button>
          </div>
        </div>
      )}
      
      {gameOver && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-red-900/40 backdrop-blur-md">
          <div className="text-center border border-red-500 bg-[#050505] p-8 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            <h2 className="text-red-500 text-4xl font-black mb-2 animate-pulse tracking-widest">CRASHED</h2>
            <p className="text-white text-lg mb-8">FINAL SCORE: {score}</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setScore(0); setGameOver(false); setGameStarted(true); }} className="text-red-400 border border-red-500 px-4 py-2 hover:bg-red-500 hover:text-black font-bold transition-all shadow-[0_0_15px_rgba(239,68,68,0.4)]">REBOOT</button>
              <button onClick={onExit} className="text-slate-400 border border-slate-500 px-4 py-2 hover:bg-slate-500 hover:text-black font-bold transition-all">EXIT TO ARCADE</button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-8 left-8 text-cyan-400 text-2xl font-black z-10 drop-shadow-[0_0_10px_#06b6d4]">
        SCORE: {score.toString().padStart(6, '0')}
      </div>
      <button onClick={onExit} className="absolute top-8 right-8 text-cyan-500/50 border border-cyan-500/30 hover:bg-cyan-500/20 px-4 py-1 z-10 text-xs transition-all tracking-widest cursor-pointer">[ ABORT ]</button>
      
      <canvas ref={canvasRef} width={1000} height={700} className="w-full h-full object-cover" />
    </div>
  );
}