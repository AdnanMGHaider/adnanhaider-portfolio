// src/lib/backgroundAnimation.js

import { createNoise3D } from "simplex-noise";

/**
 * Starts the swirl-like canvas animation and returns a cleanup function.
 * @param {Object} opts
 * @param {string} opts.selector – CSS selector of the mounting div
 * @param {number} opts.baseHue  – starting hue (0-360)
 * @param {number} opts.rangeHue – hue spread
 * @param {number} opts.particleCountDesktop
 * @param {number} opts.particleCountMobile
 */
export function initBackgroundAnimation({
  selector = ".hero-canvas",
  baseHue = 84, // bright green (from #84ff00)
  rangeHue = 100,
  particleCountDesktop = 700,
  particleCountMobile = 300,
} = {}) {
  // Core settings
  const particlePropCount = 9;
  const rangeY = 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = 0.1;
  const rangeSpeed = 2;
  const baseRadius = 1;
  const rangeRadius = 4;
  const noiseSteps = 8;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = "hsla(260,40%,5%,1)"; // dark backdrop

  // Decide how many particles based on screen width
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? particleCountMobile : particleCountDesktop;
  const particlePropsLength = particleCount * particlePropCount;

  let canvasA, canvasB, ctxA, ctxB, center;
  let tick = 0;
  const noise3D = createNoise3D();
  const particleProps = new Float32Array(particlePropsLength);

  // Helpers
  const rand = (n) => Math.random() * n;
  const randRange = (n) => n * (Math.random() - 0.5);
  const fadeInOut = (t, m) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (a, b, t) => a + (b - a) * t;

  // Mount container
  const container = document.querySelector(selector);
  if (!container) return () => {};

  // Create two canvases: buffer (A) and screen (B)
  canvasA = document.createElement("canvas");
  canvasB = document.createElement("canvas");
  canvasB.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  `;
  container.appendChild(canvasB);
  ctxA = canvasA.getContext("2d");
  ctxB = canvasB.getContext("2d");
  center = [0, 0];

  // Resize handler
  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvasA.width = canvasB.width = w;
    canvasA.height = canvasB.height = h;
    center = [0.5 * w, 0.5 * h];
  };
  resize();
  window.addEventListener("resize", resize);

  // Initialize a single particle at props index i
  const initParticle = (i) => {
    const x = rand(canvasA.width);
    const y = center[1] + randRange(rangeY);
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);
    // [x, y, vx, vy, life, ttl, speed, radius, hue]
    particleProps.set([x, y, 0, 0, life, ttl, speed, radius, hue], i);
  };
  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }

  // Draw one particle line
  const drawParticle = (x, y, x2, y2, life, ttl, radius, hue) => {
    ctxA.save();
    ctxA.lineCap = "round";
    ctxA.lineWidth = radius;
    ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctxA.beginPath();
    ctxA.moveTo(x, y);
    ctxA.lineTo(x2, y2);
    ctxA.stroke();
    ctxA.restore();
  };

  // Update particle at props index i
  const updateParticle = (i) => {
    let [x, y, vx, vy, life, ttl, speed, radius, hue] = particleProps.subarray(
      i,
      i + particlePropCount
    );

    // Compute flow noise
    const n =
      noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * (Math.PI * 2);
    vx = lerp(vx, Math.cos(n), 0.5);
    vy = lerp(vy, Math.sin(n), 0.5);
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue);

    life++;
    // Write back updated props
    particleProps.set([x2, y2, vx, vy, life], i);

    // Re-initialize if out of bounds or life expired
    if (
      x2 < 0 ||
      x2 > canvasA.width ||
      y2 < 0 ||
      y2 > canvasA.height ||
      life > ttl
    ) {
      initParticle(i);
    }
  };

  // Render glow (blur + brightness)
  const renderGlow = () => {
    ctxB.save();
    ctxB.filter = "blur(8px) brightness(200%)";
    ctxB.globalCompositeOperation = "lighter";
    ctxB.drawImage(canvasA, 0, 0);
    ctxB.restore();
  };

  // Main render loop
  let loop;
  const render = () => {
    tick++;
    ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
    ctxB.fillStyle = backgroundColor;
    ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i);
    }
    renderGlow();
    ctxB.save();
    ctxB.globalCompositeOperation = "lighter";
    ctxB.drawImage(canvasA, 0, 0);
    ctxB.restore();

    loop = requestAnimationFrame(render);
  };
  loop = requestAnimationFrame(render);

  // Cleanup function
  return () => {
    cancelAnimationFrame(loop);
    window.removeEventListener("resize", resize);
    if (container.contains(canvasB)) {
      container.removeChild(canvasB);
    }
  };
}
