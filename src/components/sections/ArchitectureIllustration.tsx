"use client";

import { useEffect, useRef } from "react";

export function ArchitectureIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 500;
    const h = 200;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    let frame = 0;
    let animId: number;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // Stats bar flowing data
      const barData = [
        { label: "100B+ tokens", x: 60, color: "#2563eb" },
        { label: "Every query <300ms", x: 250, color: "#2563eb" },
        { label: "99.9% uptime", x: 420, color: "#16a34a" },
      ];

      barData.forEach((item, i) => {
        const pulse = Math.sin((frame + i * 30) * 0.03) * 0.15 + 0.85;

        // Dot
        ctx.beginPath();
        ctx.arc(item.x - 40, 100, 4, 0, Math.PI * 2);
        ctx.fillStyle = item.color;
        ctx.globalAlpha = pulse;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label
        ctx.font = "600 13px 'DM Sans', system-ui, sans-serif";
        ctx.fillStyle = "#0f0f0f";
        ctx.textAlign = "center";
        ctx.fillText(item.label, item.x, 100);

        // Connecting line to next
        if (i < barData.length - 1) {
          const nextX = barData[i + 1].x - 40;
          ctx.beginPath();
          ctx.moveTo(item.x + 50, 100);
          ctx.lineTo(nextX - 8, 100);
          ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.stroke();
          ctx.setLineDash([]);

          // Traveling dot
          const t = ((frame + i * 60) % 150) / 150;
          const dotX = item.x + 50 + (nextX - 8 - item.x - 50) * t;
          ctx.beginPath();
          ctx.arc(dotX, 100, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37, 99, 235, 0.4)";
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto mx-auto"
      style={{ maxWidth: "500px", aspectRatio: "500/200" }}
    />
  );
}
