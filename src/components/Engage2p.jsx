import React, { useState, useEffect, useRef } from 'react';

// ============================================================================
// PART A: ORIGINAL DESKTOP ARCADE (100% UNTOUCHED FOR LAPTOP / DESKTOP SCREENS)
// ============================================================================

const DesktopCyberPong = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#22c55e]/10 border border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold font-mono text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] cursor-pointer">Initialize Match</button>
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

const DesktopGridCycle = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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
      ctx.fillStyle = '#000000';
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
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#d946ef]/10 border border-[#d946ef] text-[#d946ef] hover:bg-[#d946ef] hover:text-black font-bold font-mono text-xs uppercase transition-all shadow-[0_0_15px_rgba(217,70,239,0.4)] cursor-pointer">Enter Grid</button>
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

const DesktopGravityBrawl = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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

      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; ctx.fillRect(0, 0, game.w, game.h);
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
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#3b82f6]/10 border border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-black font-bold font-mono text-xs uppercase shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all cursor-pointer">Launch Brawl</button>
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

const DesktopCyberVolley = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [flash, setFlash] = useState({ p1: false, p2: false });

  useEffect(() => { if (score.p1 > 0) { setFlash(f => ({ ...f, p1: true })); setTimeout(() => setFlash(f => ({ ...f, p1: false })), 1000); } }, [score.p1]);
  useEffect(() => { if (score.p2 > 0) { setFlash(f => ({ ...f, p2: true })); setTimeout(() => setFlash(f => ({ ...f, p2: false })), 1000); } }, [score.p2]);

  useEffect(() => {
    if (!gameStarted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
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

      ctx.fillStyle = 'rgba(5, 20, 5, 0.5)'; ctx.fillRect(0, 0, game.w, game.h);
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
            <button onClick={() => setGameStarted(true)} className="px-6 py-2 bg-[#10b981]/10 border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-black font-bold font-mono text-xs uppercase shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all cursor-pointer">Serve Ball</button>
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

const DesktopEngage2P = () => {
  const [activeGame, setActiveGame] = useState('pong'); 

  return (
    <div className="w-full h-full bg-black flex flex-col p-4 relative overflow-hidden">
      <div className="w-full border border-[#22c55e]/50 py-2 mb-4 bg-[#22c55e]/5 text-center shrink-0">
        <span className="text-[#22c55e] font-mono text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
          Life is all about engaging!
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-4 shrink-0">
        <button onClick={() => setActiveGame('pong')} className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border cursor-pointer ${activeGame === 'pong' ? 'bg-[#22c55e] text-black border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)] font-bold' : 'bg-black text-[#22c55e] border-[#22c55e]/40 hover:border-[#22c55e]'}`}>Cyber-Pong</button>
        <button onClick={() => setActiveGame('tron')} className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border cursor-pointer ${activeGame === 'tron' ? 'bg-[#d946ef] text-black border-[#d946ef] shadow-[0_0_15px_rgba(217,70,239,0.4)] font-bold' : 'bg-black text-[#d946ef] border-[#d946ef]/40 hover:border-[#d946ef]'}`}>Grid-Cycle</button>
        <button onClick={() => setActiveGame('brawl')} className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border cursor-pointer ${activeGame === 'brawl' ? 'bg-[#3b82f6] text-black border-[#3b82f6] shadow-[0_0_15px_rgba(59,130,246,0.4)] font-bold' : 'bg-black text-[#3b82f6] border-[#3b82f6]/40 hover:border-[#3b82f6]'}`}>Gravity Brawl</button>
        <button onClick={() => setActiveGame('volley')} className={`px-6 py-1.5 rounded-full font-mono text-[11px] tracking-widest uppercase transition-all duration-300 border cursor-pointer ${activeGame === 'volley' ? 'bg-[#10b981] text-black border-[#10b981] shadow-[0_0_15px_rgba(16,185,129,0.4)] font-bold' : 'bg-black text-[#10b981] border-[#10b981]/40 hover:border-[#10b981]'}`}>Cyber-Volley</button>
      </div>

      <div className="flex-1 w-full border border-[#22c55e]/30 bg-[#020202] relative overflow-hidden flex items-center justify-center p-2 z-10 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)]">
        {activeGame === 'pong' && <DesktopCyberPong />}
        {activeGame === 'tron' && <DesktopGridCycle />}
        {activeGame === 'brawl' && <DesktopGravityBrawl />}
        {activeGame === 'volley' && <DesktopCyberVolley />}
      </div>
      
      <div className="mt-2 text-center font-mono text-[10px] tracking-widest flex justify-center gap-8 shrink-0">
        <span className="text-[#22c55e]/80">PLAYER 1: [ W S A D ]</span>
        <span className="text-white/30">|</span>
        <span className="text-[#d946ef]/80">PLAYER 2: [ ARROWS ]</span>
      </div>
    </div>
  );
};


// ============================================================================
// PART B: BESPOKE MOBILE TABLETOP ARCADE (100% RESPONSIVE DYNAMIC CANVAS)
// ============================================================================

// 1. MOBILE CYBER AIR HOCKEY (Full Rink with Realistic Momentum, Goal Celebration & Cooldown)
const MobileAirHockey = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const scoreRef = useRef({ p1: 0, p2: 0 });
  const [matchStarted, setMatchStarted] = useState(false);
  const [goalBanner, setGoalBanner] = useState(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animId;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const W = canvas.width;
    const H = canvas.height;

    const R_MALLET = Math.max(26, Math.min(W, H) * 0.08);
    const R_PUCK = Math.max(14, Math.min(W, H) * 0.045);
    const TOP_SAFE = 32;
    const BOT_SAFE = 32;

    const game = {
      p1: { x: W / 2, y: H * 0.8, prevX: W / 2, prevY: H * 0.8, vx: 0, vy: 0 },
      p2: { x: W / 2, y: H * 0.2, prevX: W / 2, prevY: H * 0.2, vx: 0, vy: 0 },
      puck: { x: W / 2, y: H / 2, vx: 0, vy: 0 },
    };

    const resetPuck = (towardsP2) => {
      game.puck.x = canvas.width / 2;
      game.puck.y = canvas.height / 2;
      game.puck.vx = (Math.random() - 0.5) * 5;
      game.puck.vy = towardsP2 ? -5 : 5;
    };

    if (matchStarted) resetPuck(true);

    const triggerGoal = (scorer) => {
      if (cooldownRef.current) return;
      cooldownRef.current = true;

      if (scorer === 'P1') {
        scoreRef.current.p1 += 1;
      } else {
        scoreRef.current.p2 += 1;
      }
      setScore({ ...scoreRef.current });
      setGoalBanner({
        scorer: scorer === 'P1' ? 'PLAYER 1' : 'PLAYER 2',
        color: scorer === 'P1' ? '#22c55e' : '#d946ef',
        p1: scoreRef.current.p1,
        p2: scoreRef.current.p2,
      });

      // 1.3s celebratory cooldown before next faceoff
      setTimeout(() => {
        resetPuck(scorer === 'P1');
        setGoalBanner(null);
        cooldownRef.current = false;
      }, 1300);
    };

    const handleTouch = (e) => {
      if (!matchStarted || cooldownRef.current) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const curW = canvas.width;
      const curH = canvas.height;

      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        const tx = (t.clientX - rect.left) * scaleX;
        const ty = (t.clientY - rect.top) * scaleY;

        if (ty > curH / 2) {
          game.p1.prevX = game.p1.x;
          game.p1.prevY = game.p1.y;
          game.p1.x = Math.max(R_MALLET + 8, Math.min(curW - R_MALLET - 8, tx));
          game.p1.y = Math.max(curH / 2 + R_MALLET + 10, Math.min(curH - BOT_SAFE - R_MALLET, ty));
          game.p1.vx = game.p1.x - game.p1.prevX;
          game.p1.vy = game.p1.y - game.p1.prevY;
        } else {
          game.p2.prevX = game.p2.x;
          game.p2.prevY = game.p2.y;
          game.p2.x = Math.max(R_MALLET + 8, Math.min(curW - R_MALLET - 8, tx));
          game.p2.y = Math.max(TOP_SAFE + R_MALLET, Math.min(curH / 2 - R_MALLET - 10, ty));
          game.p2.vx = game.p2.x - game.p2.prevX;
          game.p2.vy = game.p2.y - game.p2.prevY;
        }
      }
    };

    canvas.addEventListener('touchstart', handleTouch, { passive: false });
    canvas.addEventListener('touchmove', handleTouch, { passive: false });

    // Game loop
    const loop = () => {
      const curW = canvas.width;
      const curH = canvas.height;
      const curGoalW = curW * 0.46;
      const curGoalLeft = (curW - curGoalW) / 2;
      const curGoalRight = curGoalLeft + curGoalW;

      if (matchStarted && !cooldownRef.current) {
        game.puck.vx *= 0.992;
        game.puck.vy *= 0.992;

        game.puck.x += game.puck.vx;
        game.puck.y += game.puck.vy;

        // Side wall bounce
        if (game.puck.x - R_PUCK < 8) {
          game.puck.x = R_PUCK + 8;
          game.puck.vx *= -1;
        } else if (game.puck.x + R_PUCK > curW - 8) {
          game.puck.x = curW - 8 - R_PUCK;
          game.puck.vx *= -1;
        }

        // Top wall / Goal
        if (game.puck.y - R_PUCK < TOP_SAFE) {
          if (game.puck.x > curGoalLeft && game.puck.x < curGoalRight) {
            triggerGoal('P1');
          } else {
            game.puck.y = TOP_SAFE + R_PUCK;
            game.puck.vy *= -1;
          }
        }

        // Bottom wall / Goal
        if (game.puck.y + R_PUCK > curH - BOT_SAFE) {
          if (game.puck.x > curGoalLeft && game.puck.x < curGoalRight) {
            triggerGoal('P2');
          } else {
            game.puck.y = curH - BOT_SAFE - R_PUCK;
            game.puck.vy *= -1;
          }
        }

        // Mallet collisions
        [game.p1, game.p2].forEach((m) => {
          const dx = game.puck.x - m.x;
          const dy = game.puck.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < R_PUCK + R_MALLET) {
            const angle = Math.atan2(dy, dx);
            const speed = Math.hypot(game.puck.vx, game.puck.vy) + Math.hypot(m.vx, m.vy) * 0.85 + 4.5;
            const finalSpeed = Math.min(20, Math.max(8, speed));
            game.puck.vx = Math.cos(angle) * finalSpeed;
            game.puck.vy = Math.sin(angle) * finalSpeed;
            game.puck.x = m.x + Math.cos(angle) * (R_PUCK + R_MALLET + 2);
            game.puck.y = m.y + Math.sin(angle) * (R_PUCK + R_MALLET + 2);
          }
        });
      }

      // Render Rink
      ctx.fillStyle = '#030504';
      ctx.fillRect(0, 0, curW, curH);

      // Arena Border
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 3;
      ctx.strokeRect(8, TOP_SAFE, curW - 16, curH - TOP_SAFE - BOT_SAFE);

      // Center Line & Faceoff Circle
      ctx.strokeStyle = 'rgba(217, 70, 239, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.moveTo(8, curH / 2);
      ctx.lineTo(curW - 8, curH / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(curW / 2, curH / 2, curW * 0.18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Top Goal Opening (Magenta)
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#d946ef';
      ctx.fillRect(curGoalLeft, TOP_SAFE - 4, curGoalW, 6);

      // Bottom Goal Opening (Green)
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#22c55e';
      ctx.fillRect(curGoalLeft, curH - BOT_SAFE - 2, curGoalW, 6);

      // P2 Mallet (Top - Magenta)
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#d946ef';
      ctx.beginPath();
      ctx.arc(game.p2.x, game.p2.y, R_MALLET, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(game.p2.x, game.p2.y, R_MALLET * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // P1 Mallet (Bottom - Green)
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#22c55e';
      ctx.beginPath();
      ctx.arc(game.p1.x, game.p1.y, R_MALLET, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(game.p1.x, game.p1.y, R_MALLET * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // Puck (Neon White-Cyan with Speed Blur)
      ctx.fillStyle = '#38bdf8';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#38bdf8';
      ctx.beginPath();
      ctx.arc(game.puck.x, game.puck.y, R_PUCK, 0, Math.PI * 2);
      ctx.fill();

      // Live Inverted Score for P2 (Always reads live scoreRef)
      ctx.save();
      ctx.translate(curW - 25, TOP_SAFE + 35);
      ctx.rotate(Math.PI);
      ctx.font = 'black 28px monospace';
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#d946ef';
      ctx.fillText(`P2: ${scoreRef.current.p2}`, 0, 0);
      ctx.restore();

      // Live Score for P1
      ctx.font = 'black 28px monospace';
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#22c55e';
      ctx.fillText(`P1: ${scoreRef.current.p1}`, 25, curH - BOT_SAFE - 20);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('touchstart', handleTouch);
      canvas.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(animId);
    };
  }, [matchStarted]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden select-none touch-none">
      {/* Goal Celebration Banner Overlay */}
      {goalBanner && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 pointer-events-none animate-[fadeIn_0.15s_ease-out]">
          <div
            className="p-5 rounded-2xl border-2 bg-black/95 text-center shadow-[0_0_50px_currentColor] scale-110 transition-transform flex flex-col items-center"
            style={{ borderColor: goalBanner.color, color: goalBanner.color }}
          >
            <div className="text-2xl font-black font-mono tracking-widest animate-bounce">
              ★ GOAL SCORED! ★
            </div>
            <div className="text-xs font-mono font-bold tracking-wider mt-1 text-white">
              {goalBanner.scorer} GAINED +1 POINT
            </div>
            <div className="text-3xl font-mono font-black mt-2 tracking-widest">
              {goalBanner.p1} : {goalBanner.p2}
            </div>
          </div>
        </div>
      )}

      {!matchStarted && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="bg-[#0a0a0a] border border-[#22c55e]/50 p-6 rounded-2xl max-w-[320px] w-full text-center shadow-[0_0_35px_rgba(34,197,94,0.25)] flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 border border-[#22c55e] flex items-center justify-center mb-3 text-lg">
              ⚡
            </div>
            <h3 className="text-[#22c55e] text-xl font-black font-mono tracking-widest mb-2">
              CYBER HOCKEY
            </h3>
            <p className="text-white/70 text-xs font-mono leading-relaxed mb-6">
              Tabletop 2P Air Hockey. Drag your neon mallet anywhere on your side to deflect and drive the puck into the enemy goal!
            </p>
            <button
              type="button"
              onClick={() => setMatchStarted(true)}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setMatchStarted(true);
              }}
              className="w-full py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-black font-mono font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer transition-transform"
            >
              START FACE-OFF
            </button>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block touch-none" />
    </div>
  );
};


// 2. MOBILE CYBER BLASTER (Head-to-Head Starfighter Plasma Duel with Destructible Shields)
const MobileCyberBlaster = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const scoreRef = useRef({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [hitBanner, setHitBanner] = useState(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !gameStarted) return;

    let animId;
    let lastFireTime = 0;
    const ctx = canvas.getContext('2d');

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const W = canvas.width;
    const H = canvas.height;
    const TOP_PAD = 36;
    const BOT_PAD = 36;
    const SHIP_W = Math.max(34, W * 0.12);

    const game = {
      p1: { x: W / 2, y: H - BOT_PAD - 20 },
      p2: { x: W / 2, y: TOP_PAD + 20 },
      p1Bolts: [],
      p2Bolts: [],
      sparks: [],
      shields: [
        { x: W * 0.22, y: H / 2, r: 16, hp: 6, maxHp: 6 },
        { x: W * 0.50, y: H / 2, r: 20, hp: 8, maxHp: 8 },
        { x: W * 0.78, y: H / 2, r: 16, hp: 6, maxHp: 6 },
      ],
    };

    const triggerHit = (scorer) => {
      if (cooldownRef.current) return;
      cooldownRef.current = true;

      if (scorer === 'P1') {
        scoreRef.current.p1 += 1;
      } else {
        scoreRef.current.p2 += 1;
      }
      setScore({ ...scoreRef.current });
      setHitBanner({
        scorer: scorer === 'P1' ? 'PLAYER 1' : 'PLAYER 2',
        color: scorer === 'P1' ? '#22c55e' : '#d946ef',
        text: scorer === 'P1' ? 'P2 SHIELD DESTROYED! +1' : 'P1 SHIELD DESTROYED! +1',
        p1: scoreRef.current.p1,
        p2: scoreRef.current.p2,
      });

      game.p1Bolts = [];
      game.p2Bolts = [];

      setTimeout(() => {
        setHitBanner(null);
        cooldownRef.current = false;
      }, 1300);
    };

    const handleTouch = (e) => {
      if (cooldownRef.current) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const curW = canvas.width;
      const curH = canvas.height;

      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        const tx = (t.clientX - rect.left) * scaleX;
        const ty = (t.clientY - rect.top) * scaleY;

        if (ty > curH / 2) {
          game.p1.x = Math.max(SHIP_W / 2 + 8, Math.min(curW - SHIP_W / 2 - 8, tx));
        } else {
          game.p2.x = Math.max(SHIP_W / 2 + 8, Math.min(curW - SHIP_W / 2 - 8, tx));
        }
      }
    };

    canvas.addEventListener('touchstart', handleTouch, { passive: false });
    canvas.addEventListener('touchmove', handleTouch, { passive: false });

    const loop = (time) => {
      const curW = canvas.width;
      const curH = canvas.height;

      // Auto Fire Plasma Cannons every 350ms
      if (!cooldownRef.current && time - lastFireTime > 340) {
        lastFireTime = time;
        game.p1Bolts.push({ x: game.p1.x - 10, y: game.p1.y - 15, vy: -9 });
        game.p1Bolts.push({ x: game.p1.x + 10, y: game.p1.y - 15, vy: -9 });
        game.p2Bolts.push({ x: game.p2.x - 10, y: game.p2.y + 15, vy: 9 });
        game.p2Bolts.push({ x: game.p2.x + 10, y: game.p2.y + 15, vy: 9 });
      }

      if (!cooldownRef.current) {
        // Update P1 Bolts
        for (let i = game.p1Bolts.length - 1; i >= 0; i--) {
          const b = game.p1Bolts[i];
          b.y += b.vy;

          let absorbed = false;
          game.shields.forEach((s) => {
            if (s.hp > 0 && Math.hypot(b.x - s.x, b.y - s.y) < s.r) {
              s.hp--;
              absorbed = true;
              for (let k = 0; k < 4; k++) {
                game.sparks.push({
                  x: b.x, y: b.y,
                  vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6,
                  color: '#38bdf8', life: 1,
                });
              }
            }
          });

          if (absorbed) {
            game.p1Bolts.splice(i, 1);
            continue;
          }

          if (Math.hypot(b.x - game.p2.x, b.y - game.p2.y) < SHIP_W * 0.7) {
            game.p1Bolts.splice(i, 1);
            for (let k = 0; k < 15; k++) {
              game.sparks.push({
                x: game.p2.x, y: game.p2.y,
                vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10,
                color: '#22c55e', life: 1.2,
              });
            }
            triggerHit('P1');
            break;
          }

          if (b.y < -10) game.p1Bolts.splice(i, 1);
        }

        // Update P2 Bolts
        for (let i = game.p2Bolts.length - 1; i >= 0; i--) {
          const b = game.p2Bolts[i];
          b.y += b.vy;

          let absorbed = false;
          game.shields.forEach((s) => {
            if (s.hp > 0 && Math.hypot(b.x - s.x, b.y - s.y) < s.r) {
              s.hp--;
              absorbed = true;
              for (let k = 0; k < 4; k++) {
                game.sparks.push({
                  x: b.x, y: b.y,
                  vx: (Math.random() - 0.5) * 6, vy: (Math.random() - 0.5) * 6,
                  color: '#38bdf8', life: 1,
                });
              }
            }
          });

          if (absorbed) {
            game.p2Bolts.splice(i, 1);
            continue;
          }

          if (Math.hypot(b.x - game.p1.x, b.y - game.p1.y) < SHIP_W * 0.7) {
            game.p2Bolts.splice(i, 1);
            for (let k = 0; k < 15; k++) {
              game.sparks.push({
                x: game.p1.x, y: game.p1.y,
                vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10,
                color: '#d946ef', life: 1.2,
              });
            }
            triggerHit('P2');
            break;
          }

          if (b.y > curH + 10) game.p2Bolts.splice(i, 1);
        }

        // Update Sparks
        for (let i = game.sparks.length - 1; i >= 0; i--) {
          const sp = game.sparks[i];
          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.life -= 0.04;
          if (sp.life <= 0) game.sparks.splice(i, 1);
        }
      }

      // Render
      ctx.fillStyle = '#030504';
      ctx.fillRect(0, 0, curW, curH);

      ctx.strokeStyle = 'rgba(34, 197, 94, 0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(6, TOP_PAD, curW - 12, curH - TOP_PAD - BOT_PAD);

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(6, curH / 2);
      ctx.lineTo(curW - 6, curH / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Shields
      game.shields.forEach((s) => {
        if (s.hp > 0) {
          const alpha = s.hp / s.maxHp;
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 + alpha * 0.6})`;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 12;
          ctx.shadowColor = '#38bdf8';
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.stroke();
          ctx.fillStyle = `rgba(56, 189, 248, ${0.1 + alpha * 0.2})`;
          ctx.fill();
        }
      });

      // P1 Bolts
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#22c55e';
      game.p1Bolts.forEach((b) => {
        ctx.fillRect(b.x - 2, b.y - 6, 4, 12);
      });

      // P2 Bolts
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#d946ef';
      game.p2Bolts.forEach((b) => {
        ctx.fillRect(b.x - 2, b.y - 6, 4, 12);
      });

      // Sparks
      game.sparks.forEach((sp) => {
        ctx.fillStyle = sp.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = sp.color;
        ctx.globalAlpha = Math.max(0, sp.life);
        ctx.fillRect(sp.x - 1.5, sp.y - 1.5, 3, 3);
        ctx.globalAlpha = 1.0;
      });

      // P1 Ship
      ctx.save();
      ctx.translate(game.p1.x, game.p1.y);
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#22c55e';
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(SHIP_W / 2, 14);
      ctx.lineTo(0, 8);
      ctx.lineTo(-SHIP_W / 2, 14);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-3, -8, 6, 10);
      ctx.restore();

      // P2 Ship
      ctx.save();
      ctx.translate(game.p2.x, game.p2.y);
      ctx.rotate(Math.PI);
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 16;
      ctx.shadowColor = '#d946ef';
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(SHIP_W / 2, 14);
      ctx.lineTo(0, 8);
      ctx.lineTo(-SHIP_W / 2, 14);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(-3, -8, 6, 10);
      ctx.restore();

      // Live Scores
      ctx.save();
      ctx.translate(curW - 25, TOP_PAD + 25);
      ctx.rotate(Math.PI);
      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#d946ef';
      ctx.fillText(`P2: ${scoreRef.current.p2}`, 0, 0);
      ctx.restore();

      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#22c55e';
      ctx.fillText(`P1: ${scoreRef.current.p1}`, 20, curH - BOT_PAD - 10);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      canvas.removeEventListener('touchstart', handleTouch);
      canvas.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(animId);
    };
  }, [gameStarted]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden select-none touch-none">
      {/* Hit Celebration Banner */}
      {hitBanner && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 pointer-events-none animate-[fadeIn_0.15s_ease-out]">
          <div
            className="p-5 rounded-2xl border-2 bg-black/95 text-center shadow-[0_0_40px_currentColor] scale-110 transition-transform flex flex-col items-center"
            style={{ borderColor: hitBanner.color, color: hitBanner.color }}
          >
            <div className="text-xl font-black font-mono tracking-widest animate-bounce">
              ⚡ DIRECT HIT! ⚡
            </div>
            <div className="text-xs font-mono font-bold tracking-wider mt-1 text-white">
              {hitBanner.text}
            </div>
            <div className="text-2xl font-mono font-black mt-2 tracking-widest">
              {hitBanner.p1} : {hitBanner.p2}
            </div>
          </div>
        </div>
      )}

      {!gameStarted && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="bg-[#0a0a0a] border border-[#d946ef]/50 p-6 rounded-2xl max-w-[320px] w-full text-center shadow-[0_0_35px_rgba(217,70,239,0.25)] flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#d946ef]/10 border border-[#d946ef] flex items-center justify-center mb-3 text-lg">
              🚀
            </div>
            <h3 className="text-[#d946ef] text-xl font-black font-mono tracking-widest mb-2">
              CYBER BLASTER
            </h3>
            <p className="text-white/70 text-xs font-mono leading-relaxed mb-6">
              Head-to-head neon starfighter duel. Drag your fighter along your baseline to dodge incoming bolts and blast through the center shields!
            </p>
            <button
              type="button"
              onClick={() => setGameStarted(true)}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGameStarted(true);
              }}
              className="w-full py-3 rounded-xl bg-[#d946ef] hover:bg-[#c026d3] active:scale-95 text-black font-mono font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(217,70,239,0.6)] cursor-pointer transition-transform"
            >
              LAUNCH INTERCEPTORS
            </button>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block touch-none" />
    </div>
  );
};


// 3. MOBILE LASER CLASH (High-Voltage Neon Tap Tug-of-War + Celebration)
const MobileLaserClash = () => {
  const [beamPos, setBeamPos] = useState(0.5); // 0.0 (P1 win) to 1.0 (P2 win)
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const [activeRound, setActiveRound] = useState(false);
  const [roundWinner, setRoundWinner] = useState(null);

  const triggerP1Tap = () => {
    if (!activeRound) return;
    setBeamPos((prev) => {
      const next = prev - 0.045;
      if (next <= 0.05) {
        setActiveRound(false);
        setRoundWinner('PLAYER 1');
        setScore((s) => ({ ...s, p1: s.p1 + 1 }));
        return 0;
      }
      return next;
    });
  };

  const triggerP2Tap = () => {
    if (!activeRound) return;
    setBeamPos((prev) => {
      const next = prev + 0.045;
      if (next >= 0.95) {
        setActiveRound(false);
        setRoundWinner('PLAYER 2');
        setScore((s) => ({ ...s, p2: s.p2 + 1 }));
        return 1;
      }
      return next;
    });
  };

  const startRound = () => {
    setBeamPos(0.5);
    setRoundWinner(null);
    setActiveRound(true);
  };

  return (
    <div className="w-full h-full relative flex flex-col bg-black overflow-hidden select-none touch-none">
      {/* P2 Top Half (Inverted for Player 2) */}
      <div
        onTouchStart={(e) => {
          e.preventDefault();
          triggerP2Tap();
        }}
        onClick={triggerP2Tap}
        className="flex-1 w-full bg-[#150518] border-b-2 border-[#d946ef]/40 flex flex-col items-center justify-center relative active:bg-[#d946ef]/20 transition-colors rotate-180 cursor-pointer"
      >
        <span className="text-[#d946ef] font-mono font-black text-3xl tracking-widest drop-shadow-[0_0_15px_rgba(217,70,239,0.9)]">
          P2 // {score.p2}
        </span>
        <span className="text-[10px] font-mono text-white/50 tracking-widest mt-1 uppercase">
          TAP RAPIDLY TO PUSH BEAM
        </span>
      </div>

      {/* Center Laser Clash Core */}
      <div
        className="absolute left-0 w-full h-6 pointer-events-none z-20 flex items-center justify-center transition-all duration-75"
        style={{ top: `calc(${beamPos * 100}% - 12px)` }}
      >
        <div className="w-full h-2 bg-white shadow-[0_0_20px_#ffffff,0_0_40px_#38bdf8] relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full bg-white shadow-[0_0_25px_#38bdf8] animate-ping opacity-60"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-white shadow-[0_0_15px_#ffffff] border-2 border-cyan-400"></div>
        </div>
      </div>

      {/* P1 Bottom Half */}
      <div
        onTouchStart={(e) => {
          e.preventDefault();
          triggerP1Tap();
        }}
        onClick={triggerP1Tap}
        className="flex-1 w-full bg-[#041508] border-t-2 border-[#22c55e]/40 flex flex-col items-center justify-center relative active:bg-[#22c55e]/20 transition-colors cursor-pointer"
      >
        <span className="text-[#22c55e] font-mono font-black text-3xl tracking-widest drop-shadow-[0_0_15px_rgba(34,197,94,0.9)]">
          P1 // {score.p1}
        </span>
        <span className="text-[10px] font-mono text-white/50 tracking-widest mt-1 uppercase">
          TAP RAPIDLY TO PUSH BEAM
        </span>
      </div>

      {/* Round Overlay / Start Button */}
      {!activeRound && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="bg-[#0a0a0a] border border-cyan-400/50 p-6 rounded-2xl max-w-[320px] w-full text-center shadow-[0_0_35px_rgba(56,189,248,0.25)] flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400 flex items-center justify-center mb-3 text-lg">
              💥
            </div>
            <h3 className="text-cyan-400 text-xl font-black font-mono tracking-widest mb-2">
              {roundWinner ? `${roundWinner} SCORED!` : 'LASER CLASH'}
            </h3>
            <p className="text-white/70 text-xs font-mono leading-relaxed mb-6">
              High-frequency beam tug-of-war. Both players tap furiously on their zone to overwhelm the core and push the beam into enemy territory!
            </p>
            <button
              type="button"
              onClick={startRound}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                startRound();
              }}
              className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 active:scale-95 text-black font-mono font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.7)] cursor-pointer transition-transform"
            >
              {roundWinner ? 'PLAY NEXT ROUND' : 'START CLASH'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


// 4. MOBILE TABLETOP PONG (High-Speed Challenging Ball Rate + Working Score + Goal Celebration)
const MobilePong = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [score, setScore] = useState({ p1: 0, p2: 0 });
  const scoreRef = useRef({ p1: 0, p2: 0 });
  const [gameStarted, setGameStarted] = useState(false);
  const [aceBanner, setAceBanner] = useState(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !gameStarted) return;

    let animId;
    const ctx = canvas.getContext('2d');

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const W = canvas.width;
    const H = canvas.height;
    const paddleW = W * 0.28;
    const paddleH = 14;
    const TOP_PAD = 32;
    const BOT_PAD = 32;

    // Upgraded Ball with Fast, Challenging Dynamics
    const game = {
      p1: { x: (W - paddleW) / 2, y: H - BOT_PAD - paddleH },
      p2: { x: (W - paddleW) / 2, y: TOP_PAD },
      ball: { x: W / 2, y: H / 2, dx: 6.5, dy: 9, radius: 8 },
      rallies: 0,
    };

    const resetBall = (towardsP2) => {
      game.ball.x = canvas.width / 2;
      game.ball.y = canvas.height / 2;
      game.ball.dx = (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 2);
      game.ball.dy = towardsP2 ? -9 : 9;
      game.rallies = 0;
    };

    const triggerGoal = (scorer) => {
      if (cooldownRef.current) return;
      cooldownRef.current = true;

      // Park ball in neutral void during cooldown
      game.ball.x = -999;
      game.ball.y = -999;
      game.ball.dx = 0;
      game.ball.dy = 0;

      if (scorer === 'P1') {
        scoreRef.current.p1 += 1;
      } else {
        scoreRef.current.p2 += 1;
      }
      setScore({ ...scoreRef.current });
      setAceBanner({
        scorer: scorer === 'P1' ? 'PLAYER 1' : 'PLAYER 2',
        color: scorer === 'P1' ? '#22c55e' : '#d946ef',
        p1: scoreRef.current.p1,
        p2: scoreRef.current.p2,
      });

      // 1.3s celebration freeze
      setTimeout(() => {
        resetBall(scorer === 'P1');
        setAceBanner(null);
        cooldownRef.current = false;
      }, 1300);
    };
    const triggerAce = triggerGoal;

    const handleTouch = (e) => {
      if (cooldownRef.current) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const curW = canvas.width;
      const curH = canvas.height;

      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        const tx = (t.clientX - rect.left) * scaleX;
        const ty = (t.clientY - rect.top) * scaleY;

        if (ty > curH / 2) {
          game.p1.x = Math.max(8, Math.min(curW - paddleW - 8, tx - paddleW / 2));
        } else {
          game.p2.x = Math.max(8, Math.min(curW - paddleW - 8, tx - paddleW / 2));
        }
      }
    };

    canvas.addEventListener('touchstart', handleTouch, { passive: false });
    canvas.addEventListener('touchmove', handleTouch, { passive: false });

    const loop = () => {
      const curW = canvas.width;
      const curH = canvas.height;

      if (!cooldownRef.current) {
        // High Speed Ball Movement
        game.ball.x += game.ball.dx;
        game.ball.y += game.ball.dy;

        // Bounce side walls
        if (game.ball.x - game.ball.radius < 8) {
          game.ball.x = game.ball.radius + 8;
          game.ball.dx *= -1;
        } else if (game.ball.x + game.ball.radius > curW - 8) {
          game.ball.x = curW - 8 - game.ball.radius;
          game.ball.dx *= -1;
        }

        // Hit P1 (Bottom) - Accelerate with deflection angle!
        if (
          game.ball.y + game.ball.radius >= game.p1.y &&
          game.ball.y - game.ball.radius <= game.p1.y + paddleH &&
          game.ball.x >= game.p1.x &&
          game.ball.x <= game.p1.x + paddleW &&
          game.ball.dy > 0
        ) {
          game.rallies += 1;
          const speed = Math.min(22, Math.abs(game.ball.dy) * 1.07);
          game.ball.dy = -speed;
          const offset = (game.ball.x - (game.p1.x + paddleW / 2)) / (paddleW / 2);
          game.ball.dx = offset * 8;
        }

        // Hit P2 (Top) - Accelerate with deflection angle!
        if (
          game.ball.y - game.ball.radius <= game.p2.y + paddleH &&
          game.ball.y + game.ball.radius >= game.p2.y &&
          game.ball.x >= game.p2.x &&
          game.ball.x <= game.p2.x + paddleW &&
          game.ball.dy < 0
        ) {
          game.rallies += 1;
          const speed = Math.min(22, Math.abs(game.ball.dy) * 1.07);
          game.ball.dy = speed;
          const offset = (game.ball.x - (game.p2.x + paddleW / 2)) / (paddleW / 2);
          game.ball.dx = offset * 8;
        }

        // Scoring (Point triggers celebration and increments live scoreRef)
        if (game.ball.y < 0) {
          triggerGoal('P1');
        } else if (game.ball.y > curH) {
          triggerGoal('P2');
        }
      }

      // Render
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, curW, curH);

      // Center Line
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      for (let i = 0; i < curW; i += 24) {
        ctx.fillRect(i, curH / 2 - 1, 12, 2);
      }

      // Paddles
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#22c55e';
      ctx.fillRect(game.p1.x, game.p1.y, paddleW, paddleH);

      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 12;
      ctx.shadowColor = '#d946ef';
      ctx.fillRect(game.p2.x, game.p2.y, paddleW, paddleH);

      // Ball with Speed Glow
      ctx.fillStyle = '#ffffff';
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#38bdf8';
      ctx.beginPath();
      ctx.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
      ctx.fill();

      // P2 Inverted Score (Reads live scoreRef)
      ctx.save();
      ctx.translate(curW - 25, TOP_PAD + 30);
      ctx.rotate(Math.PI);
      ctx.font = 'bold 26px monospace';
      ctx.fillStyle = '#d946ef';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#d946ef';
      ctx.fillText(`P2: ${scoreRef.current.p2}`, 0, 0);
      ctx.restore();

      // P1 Score (Reads live scoreRef)
      ctx.font = 'bold 26px monospace';
      ctx.fillStyle = '#22c55e';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#22c55e';
      ctx.fillText(`P1: ${scoreRef.current.p1}`, 25, curH - BOT_PAD - 15);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => {
      canvas.removeEventListener('touchstart', handleTouch);
      canvas.removeEventListener('touchmove', handleTouch);
      cancelAnimationFrame(animId);
    };
  }, [gameStarted]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden select-none touch-none">
      {/* Ace Celebration Banner */}
      {aceBanner && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 pointer-events-none animate-[fadeIn_0.15s_ease-out]">
          <div
            className="p-5 rounded-2xl border-2 bg-black/95 text-center shadow-[0_0_40px_currentColor] scale-110 transition-transform flex flex-col items-center"
            style={{ borderColor: aceBanner.color, color: aceBanner.color }}
          >
            <div className="text-2xl font-black font-mono tracking-widest animate-bounce">
              ★ POINT SCORED! ★
            </div>
            <div className="text-xs font-mono font-bold tracking-wider mt-1 text-white">
              {aceBanner.scorer} SCORED +1
            </div>
            <div className="text-3xl font-mono font-black mt-2 tracking-widest">
              {aceBanner.p1} : {aceBanner.p2}
            </div>
          </div>
        </div>
      )}

      {!gameStarted && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
          <div className="bg-[#0a0a0a] border border-[#22c55e]/50 p-6 rounded-2xl max-w-[320px] w-full text-center shadow-[0_0_35px_rgba(34,197,94,0.25)] flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 border border-[#22c55e] flex items-center justify-center mb-3 text-lg">
              🏓
            </div>
            <h3 className="text-[#22c55e] text-xl font-black font-mono tracking-widest mb-2">
              TABLETOP PONG
            </h3>
            <p className="text-white/70 text-xs font-mono leading-relaxed mb-6">
              High-velocity reflex tennis. Slide along your baseline to deflect the hyper-ball. Each volley accelerates the speed!
            </p>
            <button
              type="button"
              onClick={() => setGameStarted(true)}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGameStarted(true);
              }}
              className="w-full py-3 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-black font-mono font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(34,197,94,0.6)] cursor-pointer transition-transform"
            >
              SERVE BALL
            </button>
          </div>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full block touch-none" />
    </div>
  );
};


// Main Mobile Arcade Container with Dedicated Top Control Bar (Zero overlap with Modals or Game Field)
const MobileTabletopArcade = () => {
  const [mobileGame, setMobileGame] = useState('hockey');

  const mobileGames = [
    { id: 'hockey', label: 'HOCKEY', icon: '⚡', color: 'text-cyan-400', activeBg: 'bg-cyan-400' },
    { id: 'blaster', label: 'BLASTER', icon: '🚀', color: 'text-[#d946ef]', activeBg: 'bg-[#d946ef]' },
    { id: 'clash', label: 'CLASH', icon: '💥', color: 'text-amber-400', activeBg: 'bg-amber-400' },
    { id: 'pong', label: 'PONG', icon: '🏓', color: 'text-[#22c55e]', activeBg: 'bg-[#22c55e]' },
  ];

  return (
    <div className="w-full h-full flex flex-col bg-black relative overflow-hidden select-none touch-none">
      {/* Top Dedicated Game Selector Bar - neatly padded, distinct, zero modal overlap */}
      <div className="w-full h-11 shrink-0 bg-[#080808] border-b border-white/10 px-2 flex items-center justify-between gap-1.5 z-40 select-none">
        {mobileGames.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setMobileGame(g.id)}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileGame(g.id);
            }}
            className={`flex-1 py-1.5 px-1 rounded-lg font-mono text-[10px] font-black tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 active:scale-95 ${
              mobileGame === g.id
                ? `${g.activeBg} text-black shadow-[0_0_12px_rgba(255,255,255,0.4)] font-extrabold`
                : `bg-white/5 ${g.color} border border-white/10 hover:bg-white/10`
            }`}
          >
            <span className="text-[11px]">{g.icon}</span>
            <span>{g.label}</span>
          </button>
        ))}
      </div>

      {/* 100% Dynamic Scaling Canvas Area */}
      <div className="flex-1 w-full h-full relative overflow-hidden">
        {mobileGame === 'hockey' && <MobileAirHockey />}
        {mobileGame === 'blaster' && <MobileCyberBlaster />}
        {mobileGame === 'clash' && <MobileLaserClash />}
        {mobileGame === 'pong' && <MobilePong />}
      </div>
    </div>
  );
};


// ============================================================================
// MAIN DUAL-ENGINE EXPORT (Automatically switches Mobile vs Desktop)
// ============================================================================
export default function Engage2P() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return <MobileTabletopArcade />;
  }

  return <DesktopEngage2P />;
}
