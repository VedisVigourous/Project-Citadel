import React, { useState, useEffect, useRef } from 'react';

// --- CYBER PONG ENGINE ---
const CyberPong = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  // Score Flash Triggers
  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const game = {
      w: canvas.width, h: canvas.height,
      ball: { x: 500, y: 300, dx: 4.5, dy: 4.5, radius: 8, speed: 4.5 },
      p1: { y: 250 }, p2: { y: 250 }, paddleW: 14, paddleH: 110
    };

    const keys = { w: false, s: false, ArrowUp: false, ArrowDown: false };
    const handleKeyDown = (e) => { if (keys.hasOwnProperty(e.key)) { keys[e.key] = true; if(["ArrowUp","ArrowDown"," "].indexOf(e.key) > -1) e.preventDefault(); } };
    const handleKeyUp = (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; };
    window.addEventListener('keydown', handleKeyDown); window.addEventListener('keyup', handleKeyUp);

    const resetBall = () => {
      game.ball.x = game.w / 2; game.ball.y = game.h / 2;
      game.ball.dx = (Math.random() > 0.5 ? 1 : -1) * game.ball.speed;
      game.ball.dy = (Math.random() > 0.5 ? 1 : -1) * game.ball.speed;
    };

    const update = () => {
      if (keys.w && game.p1.y > 0) game.p1.y -= 9;
      if (keys.s && game.p1.y < game.h - game.paddleH) game.p1.y += 9;
      if (keys.ArrowUp && game.p2.y > 0) game.p2.y -= 9;
      if (keys.ArrowDown && game.p2.y < game.h - game.paddleH) game.p2.y += 9;

      game.ball.x += game.ball.dx; game.ball.y += game.ball.dy;
      if (game.ball.y + game.ball.radius > game.h || game.ball.y - game.ball.radius < 0) game.ball.dy *= -1;

      const hitP1 = game.ball.x - game.ball.radius < 30 && game.ball.y > game.p1.y && game.ball.y < game.p1.y + game.paddleH;
      const hitP2 = game.ball.x + game.ball.radius > game.w - 30 && game.ball.y > game.p2.y && game.ball.y < game.p2.y + game.paddleH;

      if (hitP1 || hitP2) {
        game.ball.dx *= -1.07; game.ball.dy *= 1.02;
        game.ball.dx = Math.max(-12, Math.min(12, game.ball.dx)); 
        game.ball.dy = Math.max(-10, Math.min(10, game.ball.dy)); 
      }

      if (game.ball.x < -20) { setScore(s => ({ ...s, p2: s.p2 + 1 })); resetBall(); } 
      else if (game.ball.x > game.w + 20) { setScore(s => ({ ...s, p1: s.p1 + 1 })); resetBall(); }

      // Pure Black Trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; ctx.fillRect(0, 0, game.w, game.h);
      ctx.fillStyle = '#22c55e'; ctx.shadowBlur = 15; ctx.shadowColor = '#22c55e';
      ctx.fillRect(20, game.p1.y, game.paddleW, game.paddleH);
      ctx.fillRect(game.w - 20 - game.paddleW, game.p2.y, game.paddleW, game.paddleH);
      for (let i = 0; i < game.h; i += 40) ctx.fillRect(game.w / 2 - 1, i, 2, 20);
      ctx.beginPath(); ctx.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2); ctx.fill(); ctx.closePath();
      animationFrameId = requestAnimationFrame(update);
    };

    update();
    return () => { window.removeEventListener('keydown', handleKeyDown); window.removeEventListener('keyup', handleKeyUp); cancelAnimationFrame(animationFrameId); };
  }, [gameStarted]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {!gameStarted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-black/90 border border-[#22c55e]/50 p-8 rounded shadow-[0_0_30px_rgba(34,197,94,0.2)] max-w-md text-center">
            <h2 className="text-[#22c55e] text-2xl font-bold font-mono tracking-widest mb-4">CYBER-PONG</h2>
            <p className="text-[#22c55e]/70 text-xs font-mono leading-relaxed mb-8">Classic high-speed neon tennis. Bounce the data-packet past your opponent's paddle. Velocity increases by 7% with every hit.</p>
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#22c55e]/10 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold font-mono text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)]">Initialize Match</button>
          </div>
        </div>
      )}
      <div className="absolute top-8 w-full flex justify-between px-32 font-mono text-7xl font-bold pointer-events-none z-10">
        <span className={`text-[#22c55e] transition-all duration-500 ease-out ${flash.p1 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#22c55e]' : 'opacity-20 scale-100'}`}>{score.p1}</span>
        <span className={`text-[#22c55e] transition-all duration-500 ease-out ${flash.p2 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#22c55e]' : 'opacity-20 scale-100'}`}>{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain pointer-events-none z-0" />
    </div>
  );
};


// --- GRID-CYCLE ENGINE ---
const GridCycle = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId; let lastTime = 0;
    const FPS = 24; const gridSize = 10;
    const cols = canvas.width / gridSize; const rows = canvas.height / gridSize; 

    const state = {
      grid: Array(cols).fill().map(() => Array(rows).fill(0)),
      p1: { x: 10, y: 30, dir: 'RIGHT', nextDir: 'RIGHT', alive: true },
      p2: { x: 89, y: 30, dir: 'LEFT', nextDir: 'LEFT', alive: true },
      resetting: false
    };

    const handleKeyDown = (e) => {
      if (e.key === 'w' && state.p1.dir !== 'DOWN') state.p1.nextDir = 'UP';
      if (e.key === 's' && state.p1.dir !== 'UP') state.p1.nextDir = 'DOWN';
      if (e.key === 'a' && state.p1.dir !== 'RIGHT') state.p1.nextDir = 'LEFT';
      if (e.key === 'd' && state.p1.dir !== 'LEFT') state.p1.nextDir = 'RIGHT';
      if (e.key === 'ArrowUp' && state.p2.dir !== 'DOWN') { state.p2.nextDir = 'UP'; e.preventDefault(); }
      if (e.key === 'ArrowDown' && state.p2.dir !== 'UP') { state.p2.nextDir = 'DOWN'; e.preventDefault(); }
      if (e.key === 'ArrowLeft' && state.p2.dir !== 'RIGHT') { state.p2.nextDir = 'LEFT'; e.preventDefault(); }
      if (e.key === 'ArrowRight' && state.p2.dir !== 'LEFT') { state.p2.nextDir = 'RIGHT'; e.preventDefault(); }
    };
    window.addEventListener('keydown', handleKeyDown);

    const initRound = () => {
      ctx.fillStyle = '#000000'; // Pure Black Background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.08)'; ctx.lineWidth = 1;
      for (let i = 0; i <= canvas.width; i += gridSize) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke(); }
      for (let i = 0; i <= canvas.height; i += gridSize) { ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke(); }
      state.grid = Array(cols).fill().map(() => Array(rows).fill(0));
      state.p1 = { x: 10, y: 30, dir: 'RIGHT', nextDir: 'RIGHT', alive: true };
      state.p2 = { x: 89, y: 30, dir: 'LEFT', nextDir: 'LEFT', alive: true };
      state.resetting = false;
    };

    const movePlayer = (p) => {
      p.dir = p.nextDir;
      if (p.dir === 'UP') p.y--; if (p.dir === 'DOWN') p.y++; if (p.dir === 'LEFT') p.x--; if (p.dir === 'RIGHT') p.x++;
    };

    const checkCollision = (p) => (p.x < 0 || p.x >= cols || p.y < 0 || p.y >= rows || state.grid[p.x][p.y] !== 0);

    const update = (time) => {
      if (!lastTime) lastTime = time;
      if (time - lastTime > 1000 / FPS && !state.resetting) {
        lastTime = time; movePlayer(state.p1); movePlayer(state.p2);

        if (state.p1.x === state.p2.x && state.p1.y === state.p2.y) { state.p1.alive = false; state.p2.alive = false; } 
        else { if (checkCollision(state.p1)) state.p1.alive = false; if (checkCollision(state.p2)) state.p2.alive = false; }

        if (!state.p1.alive || !state.p2.alive) {
          state.resetting = true;
          setScore(prev => {
            let newP1 = prev.p1; let newP2 = prev.p2;
            if (!state.p1.alive && state.p2.alive) newP2++;
            if (!state.p2.alive && state.p1.alive) newP1++;
            return { p1: newP1, p2: newP2 };
          });
          setTimeout(initRound, 1500);
        } else {
          state.grid[state.p1.x][state.p1.y] = 1; state.grid[state.p2.x][state.p2.y] = 2;
          ctx.fillStyle = '#22c55e'; ctx.shadowBlur = 10; ctx.shadowColor = '#22c55e';
          ctx.fillRect(state.p1.x * gridSize, state.p1.y * gridSize, gridSize, gridSize);
          ctx.fillStyle = '#d946ef'; ctx.shadowBlur = 10; ctx.shadowColor = '#d946ef';
          ctx.fillRect(state.p2.x * gridSize, state.p2.y * gridSize, gridSize, gridSize);
        }
      }
      animationFrameId = requestAnimationFrame(update);
    };

    initRound(); animationFrameId = requestAnimationFrame(update);
    return () => { window.removeEventListener('keydown', handleKeyDown); cancelAnimationFrame(animationFrameId); };
  }, [gameStarted]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {!gameStarted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-black/90 border border-[#d946ef]/50 p-8 rounded shadow-[0_0_30px_rgba(217,70,239,0.2)] max-w-md text-center">
            <h2 className="text-[#d946ef] text-2xl font-bold font-mono tracking-widest mb-4">GRID-CYCLE</h2>
            <p className="text-[#d946ef]/70 text-xs font-mono leading-relaxed mb-8">Tactical lightcycle warfare. Trap your opponent in your neon trail. Hitting the perimeter walls or any active trail results in instant system derezz.</p>
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#d946ef]/10 border border-[#d946ef] text-[#d946ef] hover:bg-[#d946ef] hover:text-black font-bold font-mono text-xs uppercase transition-all shadow-[0_0_15px_rgba(217,70,239,0.4)]">Enter Grid</button>
          </div>
        </div>
      )}
      <div className="absolute top-8 w-full flex justify-between px-32 font-mono text-7xl font-bold pointer-events-none z-10">
        <span className={`text-[#22c55e] transition-all duration-500 ease-out ${flash.p1 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#22c55e]' : 'opacity-20 scale-100'}`}>{score.p1}</span>
        <span className={`text-[#d946ef] transition-all duration-500 ease-out ${flash.p2 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#d946ef]' : 'opacity-20 scale-100'}`}>{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain pointer-events-none z-0" />
    </div>
  );
};


// --- GRAVITY BRAWL ---
const GravityBrawl = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const game = {
      w: canvas.width, h: canvas.height,
      gravity: 0.6, friction: 0.85, jumpPower: -12, moveSpeed: 1.5, maxSpeed: 8,
      p1: { x: 200, y: 400, dx: 0, dy: 0, size: 30, color: '#3b82f6', grounded: false },
      p2: { x: 800, y: 400, dx: 0, dy: 0, size: 30, color: '#ef4444', grounded: false }
    };

    const keys = { w: false, a: false, d: false, ArrowUp: false, ArrowLeft: false, ArrowRight: false };
    const handleKeyDown = (e) => { if (keys.hasOwnProperty(e.key)) { keys[e.key] = true; if(['ArrowUp','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault(); } };
    const handleKeyUp = (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; };
    window.addEventListener('keydown', handleKeyDown); window.addEventListener('keyup', handleKeyUp);

    const resetRound = () => {
      game.p1.x = 200; game.p1.y = 400; game.p1.dx = 0; game.p1.dy = 0;
      game.p2.x = 800; game.p2.y = 400; game.p2.dx = 0; game.p2.dy = 0;
    };

    const applyPhysics = (p, leftKey, rightKey, jumpKey) => {
      if (keys[leftKey]) p.dx -= game.moveSpeed; if (keys[rightKey]) p.dx += game.moveSpeed;
      p.dx *= game.friction; p.dx = Math.max(-game.maxSpeed, Math.min(game.maxSpeed, p.dx));
      p.dy += game.gravity;
      if (keys[jumpKey] && p.grounded) { p.dy = game.jumpPower; p.grounded = false; }
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) { p.x = 0; p.dx *= -0.5; }
      if (p.x > game.w - p.size) { p.x = game.w - p.size; p.dx *= -0.5; }
      if (p.y > game.h - p.size) { p.y = game.h - p.size; p.dy = 0; p.grounded = true; } else { p.grounded = false; }
      if (p.y < 0) { p.y = 0; p.dy = 0; }
    };

    const update = () => {
      applyPhysics(game.p1, 'a', 'd', 'w'); applyPhysics(game.p2, 'ArrowLeft', 'ArrowRight', 'ArrowUp');

      const p1Bottom = game.p1.y + game.p1.size; const p2Bottom = game.p2.y + game.p2.size;
      const overlapX = game.p1.x < game.p2.x + game.p2.size && game.p1.x + game.p1.size > game.p2.x;
      const overlapY = game.p1.y < game.p2.y + game.p2.size && p1Bottom > game.p2.y;

      if (overlapX && overlapY) {
        if (p1Bottom < game.p2.y + (game.p2.size / 2) && game.p1.dy > 0) { setScore(s => ({ ...s, p1: s.p1 + 1 })); resetRound(); } 
        else if (p2Bottom < game.p1.y + (game.p1.size / 2) && game.p2.dy > 0) { setScore(s => ({ ...s, p2: s.p2 + 1 })); resetRound(); }
        else { const tempDx = game.p1.dx; game.p1.dx = game.p2.dx * 1.5; game.p2.dx = tempDx * 1.5; }
      }

      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; ctx.fillRect(0, 0, game.w, game.h); // Pure Black Trails
      ctx.shadowBlur = 15; ctx.shadowColor = game.p1.color; ctx.fillStyle = game.p1.color; ctx.fillRect(game.p1.x, game.p1.y, game.p1.size, game.p1.size);
      ctx.shadowBlur = 15; ctx.shadowColor = game.p2.color; ctx.fillStyle = game.p2.color; ctx.fillRect(game.p2.x, game.p2.y, game.p2.size, game.p2.size);
      animationFrameId = requestAnimationFrame(update);
    };

    update();
    return () => { window.removeEventListener('keydown', handleKeyDown); window.removeEventListener('keyup', handleKeyUp); cancelAnimationFrame(animationFrameId); };
  }, [gameStarted]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {!gameStarted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-black/90 border border-[#3b82f6]/50 p-8 rounded shadow-[0_0_30px_rgba(59,130,246,0.2)] max-w-md text-center">
            <h2 className="text-[#3b82f6] text-2xl font-bold font-mono tracking-widest mb-4">GRAVITY BRAWL</h2>
            <p className="text-[#3b82f6]/70 text-xs font-mono leading-relaxed mb-6">Jetpack physics. Heavy gravity. The only way to score is to crash your feet into the top of your opponent's head.</p>
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#3b82f6]/10 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black font-bold font-mono text-xs uppercase shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">Launch Brawl</button>
          </div>
        </div>
      )}
      <div className="absolute top-8 w-full flex justify-between px-32 font-mono text-7xl font-bold pointer-events-none z-10">
        <span className={`text-[#3b82f6] transition-all duration-500 ease-out ${flash.p1 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#3b82f6]' : 'opacity-20 scale-100'}`}>{score.p1}</span>
        <span className={`text-[#ef4444] transition-all duration-500 ease-out ${flash.p2 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#ef4444]' : 'opacity-20 scale-100'}`}>{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain z-0" />
    </div>
  );
};


// --- CYBER-VOLLEY ---
const CyberVolley = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const game = {
      w: canvas.width, h: canvas.height,
      gravity: 0.5, ballGravity: 0.35, netH: 120, netW: 10,
      ball: { x: 250, y: 200, dx: 0, dy: 0, r: 12, color: '#ffffff', speed: 12 },
      p1: { x: 200, y: 600, dx: 0, dy: 0, r: 40, color: '#10b981', grounded: true },
      p2: { x: 800, y: 600, dx: 0, dy: 0, r: 40, color: '#f43f5e', grounded: true }
    };

    const keys = { w: false, a: false, d: false, ArrowUp: false, ArrowLeft: false, ArrowRight: false };
    const handleKeyDown = (e) => { if (keys.hasOwnProperty(e.key)) { keys[e.key] = true; if(['ArrowUp','ArrowLeft','ArrowRight'].includes(e.key)) e.preventDefault(); } };
    const handleKeyUp = (e) => { if (keys.hasOwnProperty(e.key)) keys[e.key] = false; };
    window.addEventListener('keydown', handleKeyDown); window.addEventListener('keyup', handleKeyUp);

    const resetRound = (scorer) => {
      game.ball.x = scorer === 'p1' ? 250 : 750; game.ball.y = 200; game.ball.dx = 0; game.ball.dy = 0;
      game.p1.x = 200; game.p1.y = game.h; game.p1.dx = 0; game.p1.dy = 0;
      game.p2.x = 800; game.p2.y = game.h; game.p2.dx = 0; game.p2.dy = 0;
    };

    const update = () => {
      if (keys.a) game.p1.dx = -7; else if (keys.d) game.p1.dx = 7; else game.p1.dx = 0;
      if (keys.w && game.p1.grounded) { game.p1.dy = -11; game.p1.grounded = false; }
      if (keys.ArrowLeft) game.p2.dx = -7; else if (keys.ArrowRight) game.p2.dx = 7; else game.p2.dx = 0;
      if (keys.ArrowUp && game.p2.grounded) { game.p2.dy = -11; game.p2.grounded = false; }

      [game.p1, game.p2].forEach(p => { p.dy += game.gravity; p.x += p.dx; p.y += p.dy; if (p.y > game.h) { p.y = game.h; p.dy = 0; p.grounded = true; } });

      if (game.p1.x - game.p1.r < 0) game.p1.x = game.p1.r;
      if (game.p1.x + game.p1.r > game.w/2 - game.netW/2) game.p1.x = game.w/2 - game.netW/2 - game.p1.r;
      if (game.p2.x + game.p2.r > game.w) game.p2.x = game.w - game.p2.r;
      if (game.p2.x - game.p2.r < game.w/2 + game.netW/2) game.p2.x = game.w/2 + game.netW/2 + game.p2.r;

      game.ball.dy += game.ballGravity; game.ball.x += game.ball.dx; game.ball.y += game.ball.dy;

      if (game.ball.x - game.ball.r < 0) { game.ball.x = game.ball.r; game.ball.dx *= -1; }
      if (game.ball.x + game.ball.r > game.w) { game.ball.x = game.w - game.ball.r; game.ball.dx *= -1; }
      if (game.ball.y - game.ball.r < 0) { game.ball.y = game.ball.r; game.ball.dy *= -0.5; }

      if (game.ball.y + game.ball.r > game.h - game.netH) {
        if (game.ball.x > game.w/2 - game.netW/2 - game.ball.r && game.ball.x < game.w/2 + game.netW/2 + game.ball.r) {
          game.ball.dx *= -1;
          game.ball.x = game.ball.x < game.w/2 ? game.w/2 - game.netW/2 - game.ball.r : game.w/2 + game.netW/2 + game.ball.r;
        }
      }

      [game.p1, game.p2].forEach(p => {
        let dx = game.ball.x - p.x; let dy = game.ball.y - p.y;
        let dist = Math.hypot(dx, dy);
        if (dist < game.ball.r + p.r && game.ball.y < p.y) {
          let angle = Math.atan2(dy, dx);
          game.ball.dx = Math.cos(angle) * game.ball.speed; game.ball.dy = Math.sin(angle) * game.ball.speed - 2; 
          game.ball.x = p.x + Math.cos(angle) * (game.ball.r + p.r); game.ball.y = p.y + Math.sin(angle) * (game.ball.r + p.r);
        }
      });

      if (game.ball.y + game.ball.r > game.h) {
        if (game.ball.x < game.w/2) { setScore(s => ({ ...s, p2: s.p2 + 1 })); resetRound('p2'); }
        else { setScore(s => ({ ...s, p1: s.p1 + 1 })); resetRound('p1'); }
      }

      ctx.fillStyle = 'rgba(5, 20, 5, 0.5)'; ctx.fillRect(0, 0, game.w, game.h); // Pure Black Trails
      ctx.fillStyle = '#22c55e'; ctx.shadowBlur = 10; ctx.shadowColor = '#22c55e'; ctx.fillRect(game.w/2 - game.netW/2, game.h - game.netH, game.netW, game.netH);
      
      ctx.fillStyle = game.p1.color; ctx.shadowColor = game.p1.color; ctx.beginPath(); ctx.arc(game.p1.x, game.p1.y, game.p1.r, Math.PI, 0); ctx.fill();
      ctx.fillStyle = game.p2.color; ctx.shadowColor = game.p2.color; ctx.beginPath(); ctx.arc(game.p2.x, game.p2.y, game.p2.r, Math.PI, 0); ctx.fill();
      ctx.fillStyle = '#ffffff'; ctx.shadowColor = '#ffffff'; ctx.beginPath(); ctx.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI*2); ctx.fill();
      animationFrameId = requestAnimationFrame(update);
    };

    update();
    return () => { window.removeEventListener('keydown', handleKeyDown); window.removeEventListener('keyup', handleKeyUp); cancelAnimationFrame(animationFrameId); };
  }, [gameStarted]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {!gameStarted && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-black/90 border border-[#10b981]/50 p-8 rounded shadow-[0_0_30px_rgba(16,185,129,0.2)] max-w-md text-center">
            <h2 className="text-[#10b981] text-2xl font-bold font-mono tracking-widest mb-4">CYBER-VOLLEY</h2>
            <p className="text-[#10b981]/70 text-xs font-mono leading-relaxed mb-6">High-gravity slime volleyball. Jump and headbutt the ball over the neon net.</p>
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#10b981]/10 border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-black font-bold font-mono text-xs uppercase shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">Serve Ball</button>
          </div>
        </div>
      )}
      <div className="absolute top-8 w-full flex justify-between px-32 font-mono text-7xl font-bold pointer-events-none z-10">
        <span className={`text-[#10b981] transition-all duration-500 ease-out ${flash.p1 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#10b981]' : 'opacity-20 scale-100'}`}>{score.p1}</span>
        <span className={`text-[#f43f5e] transition-all duration-500 ease-out ${flash.p2 ? 'opacity-100 scale-125 drop-shadow-[0_0_20px_#f43f5e]' : 'opacity-20 scale-100'}`}>{score.p2}</span>
      </div>
      <canvas ref={canvasRef} width={1000} height={600} className="w-full h-full object-contain z-0" />
    </div>
  );
};

// --- MAIN HUB ARCHITECTURE ---
export default function Engage2P() {
  const [activeGame, setActiveGame] = useState('pong'); 

  return (
    <div className="w-full h-full bg-black flex flex-col p-4">
      <div className="w-full border border-[#22c55e]/50 py-2 mb-4 bg-[#22c55e]/5 text-center">
        <span className="text-[#22c55e] font-mono text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
          Life is all about engaging!
        </span>
      </div>

      {/* Capsule Navigation (4 Games) */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <button 
          onClick={() => setActiveGame('pong')}
          className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'pong' ? 'bg-[#22c55e] text-black border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)] font-bold' : 'bg-black text-[#22c55e] border-[#22c55e]/40 hover:border-[#22c55e]'
          }`}
        >Cyber-Pong</button>
        <button 
          onClick={() => setActiveGame('tron')}
          className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'tron' ? 'bg-[#d946ef] text-black border-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,0.4)] font-bold' : 'bg-black text-[#d946ef] border-[#d946ef]/40 hover:border-[#d946ef]'
          }`}
        >Grid-Cycle</button>
        <button 
          onClick={() => setActiveGame('brawl')}
          className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'brawl' ? 'bg-[#3b82f6] text-black border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.4)] font-bold' : 'bg-black text-[#3b82f6] border-[#3b82f6]/40 hover:border-[#3b82f6]'
          }`}
        >Gravity Brawl</button>
        <button 
          onClick={() => setActiveGame('volley')}
          className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border ${
            activeGame === 'volley' ? 'bg-[#10b981] text-black border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.4)] font-bold' : 'bg-black text-[#10b981] border-[#10b981]/40 hover:border-[#10b981]'
          }`}
        >Cyber-Volley</button>
      </div>

      <div className="flex-1 w-full border border-[#22c55e]/30 bg-black/60 relative overflow-hidden flex items-center justify-center p-2">
        {activeGame === 'pong' && <CyberPong />}
        {activeGame === 'tron' && <GridCycle />}
        {activeGame === 'brawl' && <GravityBrawl />}
        {activeGame === 'volley' && <CyberVolley />}
      </div>
      
      <div className="mt-2 text-center font-mono text-[10px] tracking-widest flex justify-center gap-8">
        <span className="text-[#22c55e]/80">PLAYER 1: [ W S A D ]</span>
        <span className="text-white/30">|</span>
        <span className="text-[#d946ef]/80">PLAYER 2: [ ARROWS ]</span>
      </div>
    </div>
  );
}