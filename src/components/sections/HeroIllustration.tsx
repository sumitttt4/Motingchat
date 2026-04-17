"use client";

import { useEffect, useRef } from "react";

export function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 480;
    const h = 480;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // Node positions for the knowledge graph
    const nodes = [
      { x: 240, y: 140, r: 28, label: "Meeting", primary: true },
      { x: 120, y: 240, r: 22, label: "Transcript", primary: false },
      { x: 360, y: 220, r: 22, label: "Summary", primary: false },
      { x: 160, y: 360, r: 18, label: "Actions", primary: false },
      { x: 320, y: 360, r: 18, label: "Slack", primary: true },
      { x: 80, y: 140, r: 14, label: "", primary: false },
      { x: 400, y: 120, r: 14, label: "", primary: false },
      { x: 60, y: 340, r: 12, label: "", primary: false },
      { x: 420, y: 340, r: 12, label: "", primary: false },
      { x: 240, y: 280, r: 10, label: "", primary: false },
    ];

    const edges = [
      [0, 1], [0, 2], [1, 3], [2, 4], [1, 2],
      [0, 5], [0, 6], [3, 7], [4, 8], [1, 9], [2, 9], [9, 3], [9, 4],
    ];

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Draw edges with animated pulse
      edges.forEach(([a, b], i) => {
        const na = nodes[a];
        const nb = nodes[b];
        const pulse = Math.sin((frame + i * 20) * 0.03) * 0.3 + 0.5;

        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = `rgba(37, 99, 235, ${0.12 + pulse * 0.08})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Animated dot traveling along edge
        const t = ((frame + i * 30) % 200) / 200;
        const dotX = na.x + (nb.x - na.x) * t;
        const dotY = na.y + (nb.y - na.y) * t;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.3 + pulse * 0.4})`;
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const breathe = Math.sin((frame + i * 15) * 0.02) * 2;

        // Outer glow
        if (node.primary) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r + 8 + breathe, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37, 99, 235, 0.06)";
          ctx.fill();
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r + breathe * 0.5, 0, Math.PI * 2);

        if (node.primary) {
          ctx.fillStyle = "#2563eb";
          ctx.fill();
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fill();
          ctx.strokeStyle = "rgba(37, 99, 235, 0.25)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Label
        if (node.label) {
          ctx.font = `${node.primary ? "600" : "500"} ${node.r > 20 ? 11 : 9}px "DM Sans", system-ui, sans-serif`;
          ctx.fillStyle = node.primary ? "#ffffff" : "#555555";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(node.label, node.x, node.y);
        }
      });

      // Hexagonal decorative elements
      const hexes = [
        { x: 40, y: 80, size: 16, opacity: 0.08 },
        { x: 440, y: 60, size: 12, opacity: 0.06 },
        { x: 460, y: 420, size: 20, opacity: 0.05 },
        { x: 20, y: 420, size: 14, opacity: 0.07 },
      ];

      hexes.forEach((hex) => {
        const rot = (frame * 0.005);
        ctx.save();
        ctx.translate(hex.x, hex.y);
        ctx.rotate(rot);
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const angle = (Math.PI / 3) * j - Math.PI / 6;
          const px = Math.cos(angle) * hex.size;
          const py = Math.sin(angle) * hex.size;
          j === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(37, 99, 235, ${hex.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full max-w-[480px] h-auto"
        style={{ aspectRatio: "1/1" }}
      />
    </div>
  );
}
