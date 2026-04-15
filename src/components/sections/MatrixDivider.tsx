"use client";

import { useEffect, useRef } from "react";

export function MatrixDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "0123456789ABCDEF";
    const fontSize = 10;
    const cols = Math.floor(canvas.offsetWidth / fontSize);
    const drops: number[] = new Array(cols).fill(0);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 26, 0.08)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.fillStyle = "rgba(37, 99, 235, 0.15)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.offsetHeight / 2 && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 80);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative h-[120px] bg-dark overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-30" viewBox="0 0 512 512" fill="none">
          <g transform="translate(92.5,45.1) scale(0.8)">
            <path d="M256,192L320,224L320,288L256,320L192,288L192,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
            <path d="M352,192L416,224L416,288L352,320L320,288L320,224Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.8" />
            <path d="M160,192L192,224L192,288L160,320L96,288L96,224Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
            <path d="M320,288L352,320L352,384L320,416L256,384L256,320Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
            <path d="M192,96L256,128L256,192L192,224L160,192L160,128Z" fill="none" stroke="#2563eb" strokeWidth="16" strokeLinejoin="round" />
            <path d="M320,96L352,128L352,192L320,224L256,192L256,128Z" fill="#2563eb" stroke="none" strokeLinejoin="round" opacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
}
