"use client";

import { useEffect, useRef } from "react";

interface Props {
  activeIndex: number;
}

export function FeatureIllustration({ activeIndex }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const activeRef = useRef(activeIndex);

  useEffect(() => {
    activeRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = 440;
    const h = 400;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    let animId: number;

    const drawPipeline = (frame: number) => {
      ctx.clearRect(0, 0, w, h);
      const idx = activeRef.current;

      // Pipeline stages
      const stages = [
        { x: 60, y: 200, icon: "mic", label: "Record" },
        { x: 170, y: 200, icon: "brain", label: "Process" },
        { x: 280, y: 200, icon: "doc", label: "Structure" },
        { x: 390, y: 200, icon: "send", label: "Deliver" },
      ];

      // Draw connecting lines
      for (let i = 0; i < stages.length - 1; i++) {
        const a = stages[i];
        const b = stages[i + 1];

        // Base line
        ctx.beginPath();
        ctx.moveTo(a.x + 24, a.y);
        ctx.lineTo(b.x - 24, b.y);
        ctx.strokeStyle = "rgba(37, 99, 235, 0.12)";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated dot on active pipeline
        if (i <= idx) {
          const t = ((frame + i * 40) % 120) / 120;
          const dx = a.x + 24 + (b.x - 24 - a.x - 24) * t;
          ctx.beginPath();
          ctx.arc(dx, a.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37, 99, 235, 0.6)";
          ctx.fill();
        }
      }

      // Draw stage circles
      stages.forEach((stage, i) => {
        const isActive = i <= idx;
        const isCurrent = i === idx;
        const breathe = isCurrent ? Math.sin(frame * 0.04) * 3 : 0;

        // Outer glow for current stage
        if (isCurrent) {
          ctx.beginPath();
          ctx.arc(stage.x, stage.y, 32 + breathe, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(37, 99, 235, 0.08)";
          ctx.fill();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(stage.x, stage.y, 22 + breathe * 0.3, 0, Math.PI * 2);

        if (isActive) {
          ctx.fillStyle = isCurrent ? "#2563eb" : "rgba(37, 99, 235, 0.15)";
          ctx.fill();
        } else {
          ctx.fillStyle = "#f8fafc";
          ctx.fill();
          ctx.strokeStyle = "#e2e8f0";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Icon in circle
        ctx.font = "500 18px system-ui";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const icons = ["🎙", "🧠", "📄", "💬"];
        ctx.fillStyle = isActive && isCurrent ? "#ffffff" : isActive ? "#2563eb" : "#94a3b8";
        ctx.fillText(icons[i], stage.x, stage.y);

        // Label
        ctx.font = "500 11px 'DM Sans', system-ui, sans-serif";
        ctx.fillStyle = isActive ? "#0f0f0f" : "#94a3b8";
        ctx.fillText(stage.label, stage.x, stage.y + 42);
      });

      // Draw feature-specific detail panel below
      const panelY = 280;

      // Detail card background
      const cardX = 40;
      const cardW = w - 80;
      const cardH = 90;
      ctx.beginPath();
      ctx.roundRect(cardX, panelY, cardW, cardH, 12);
      ctx.fillStyle = "#f8fafc";
      ctx.fill();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.08)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Animated shimmer bars inside card
      const barCount = 4;
      for (let i = 0; i < barCount; i++) {
        const barY = panelY + 18 + i * 18;
        const maxBarW = cardW - 40;
        const barW = maxBarW * (0.5 + Math.sin((frame * 0.02) + i) * 0.15 + (i === 0 ? 0.4 : i === 1 ? 0.2 : i === 2 ? 0.1 : -0.1));
        
        ctx.beginPath();
        ctx.roundRect(cardX + 20, barY, barW, 8, 4);
        
        if (i === 0) {
          ctx.fillStyle = "rgba(37, 99, 235, 0.15)";
        } else {
          ctx.fillStyle = `rgba(0, 0, 0, ${0.04 + i * 0.01})`;
        }
        ctx.fill();
      }

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const px = 40 + ((frame * 0.3 + i * 55) % (w - 80));
        const py = 120 + Math.sin((frame * 0.01) + i * 2) * 40;
        const size = 2 + Math.sin((frame * 0.03) + i) * 1;
        
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.06 + Math.sin((frame * 0.02) + i) * 0.04})`;
        ctx.fill();
      }
    };

    const animate = () => {
      frameRef.current++;
      drawPipeline(frameRef.current);
      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-auto"
      style={{ aspectRatio: "440/400" }}
    />
  );
}
