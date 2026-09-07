import React, { useEffect, useRef } from "react";

export default function MatrixRain({ terminating }) {
  const canvasRef = useRef(null);

  // Ref allows the interval to read the latest state without restarting the interval
  const terminatingRef = useRef(terminating);

  useEffect(() => {
    terminatingRef.current = terminating;
  }, [terminating]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial size setup
    handleResize();

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    // Randomize initial drop positions so they don't fall in a flat horizontal line
    const drops = Array.from({ length: columns })
      .fill(0)
      .map(() => Math.floor(Math.random() * -50));

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン";
    const charArray = characters.split("");

    const draw = () => {
      // Semi-transparent black to create the fading trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22c55e";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only render the character if it has entered the visible screen
        if (drops[i] >= 0) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        // THE DRAIN LOGIC:
        // If the drop hits the bottom and we are NOT terminating, reset it to the top.
        // If terminatingRef is true, this is skipped, allowing the drops to fall infinitely off-screen.
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          if (!terminatingRef.current) {
            drops[i] = 0;
          }
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none opacity-80 mix-blend-screen"
    />
  );
}
