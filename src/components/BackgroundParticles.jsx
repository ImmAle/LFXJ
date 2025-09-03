// src/components/BackgroundParticles.jsx
import React, { useEffect, useRef } from "react";

const BackgroundParticles = ({
  baseDensity = 0.14,               // densidad relativa
  minSize = 2.5,                    // radio mínimo (px)
  maxSize = 6,                      // radio máximo (px)
  speed = 0.14,                     // velocidad base
  colors = ["rgba(41,182,246,0.65)", "rgba(255,255,255,0.85)"], // celeste + blanco
  canvasId = "bg-particles-canvas", // id del canvas en el DOM
}) => {
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const ctxRef = useRef(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const createdCanvasRef = useRef(false);

  const rand = (a, b) => Math.random() * (b - a) + a;

  function createParticles() {
    const { w, h } = sizeRef.current;
    const area = (w * h) / 10000;
    const count = Math.max(80, Math.floor(area * baseDensity)); // mínimo 80 partículas
    const arr = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: rand(minSize, maxSize),
      vx: rand(-speed, speed),
      vy: rand(-speed, speed),
      color: colors[(Math.random() * colors.length) | 0],
    }));
    particlesRef.current = arr;
  }

  function draw() {
    const ctx = ctxRef.current;
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    ctx.clearRect(0, 0, w, h);

    for (const p of particlesRef.current) {
      p.x += p.vx;
      p.y += p.vy;

      // rebote suave respetando radio
      if (p.x - p.r < 0) { p.x = p.r; p.vx *= -1; }
      if (p.x + p.r > w) { p.x = w - p.r; p.vx *= -1; }
      if (p.y - p.r < 0) { p.y = p.r; p.vy *= -1; }
      if (p.y + p.r > h) { p.y = h - p.r; p.vy *= -1; }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(draw);
  }

  useEffect(() => {
    // Si ya existe canvas con este id, lo reutilizamos (evita duplicados en StrictMode)
    let canvas = document.getElementById(canvasId);
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = canvasId;
      // estilos inline para máxima compatibilidad (no dependen de stacking contexts React)
      Object.assign(canvas.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "0",            // detrás del contenido
        pointerEvents: "none",
        display: "block",
      });
      document.body.appendChild(canvas);
      createdCanvasRef.current = true;
    } else {
      createdCanvasRef.current = false;
      // si existía, asegúrate del estilo mínimo
      canvas.style.position = canvas.style.position || "fixed";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = canvas.style.zIndex || "0";
    }

    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(window.innerWidth * dpr);
      const h = Math.floor(window.innerHeight * dpr);
      canvas.width = w;
      canvas.height = h;
      // Usamos transform para tener coordenadas en CSS px
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sizeRef.current = { w: canvas.width / dpr, h: canvas.height / dpr };
      createParticles();
    };

    resize();
    window.addEventListener("resize", resize);
    // iniciar bucle
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Solo eliminamos el canvas si lo creamos aquí
      if (createdCanvasRef.current) {
        try { canvas.remove(); } catch (e) { /* ignore */ }
      } else {
        // si lo reutilizamos, limpiamos el contexto y cancela raf
        if (ctxRef.current) ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseDensity, minSize, maxSize, speed, colors.join("|"), canvasId]);

  return null; // no renderiza nada dentro del DOM de React (canvas está en body)
};

export default BackgroundParticles;
