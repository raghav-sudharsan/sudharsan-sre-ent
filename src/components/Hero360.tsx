import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Activity, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

gsap.registerPlugin(ScrollTrigger);

export const Hero360: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const currentAngleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startAngleRef = useRef(0);

  // Preload Sudharsan's high-res portrait
  useEffect(() => {
    const img = new Image();
    img.src = personalInfo.avatarUrl;
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
    img.onerror = () => {
      // Fallback to frame-0 if needed
      const fallback = new Image();
      fallback.src = '/Sudharsan_SRE.jpeg';
      fallback.onload = () => {
        imgRef.current = fallback;
        setImageLoaded(true);
      };
    };
  }, []);

  // Render Sudharsan's portrait with high-DPI scaling, 3D perspective rotation, and spatial lighting
  const renderFrame = useCallback((angleDeg: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      // Subject occupies ~77-80% of viewport height, perfectly centered
      const targetH = Math.min(displayHeight * 0.78, 860);
      const aspect = img.naturalWidth / img.naturalHeight;
      const targetW = targetH * aspect;
      const posY = (displayHeight - targetH) / 2 - displayHeight * 0.02;

      // Calculate spatial 3D perspective yaw transform
      const rad = (angleDeg * Math.PI) / 180;
      const scaleX = Math.cos(rad);
      const skewY = Math.sin(rad) * 0.08;

      ctx.save();
      // Center transformation pivot
      ctx.translate(displayWidth / 2, posY + targetH / 2);
      ctx.transform(scaleX, skewY, 0, 1, 0, 0);

      // Draw portrait
      ctx.drawImage(img, -targetW / 2, -targetH / 2, targetW, targetH);

      // Subtle dynamic lighting reflection based on rotation
      if (Math.abs(Math.sin(rad)) > 0.05) {
        const gradient = ctx.createLinearGradient(-targetW / 2, 0, targetW / 2, 0);
        const intensity = Math.abs(Math.sin(rad)) * 0.4;
        gradient.addColorStop(0, `rgba(0, 0, 0, ${intensity})`);
        gradient.addColorStop(0.5, 'rgba(230, 200, 117, 0.08)');
        gradient.addColorStop(1, `rgba(0, 0, 0, ${intensity * 1.5})`);
        ctx.fillStyle = gradient;
        ctx.fillRect(-targetW / 2, -targetH / 2, targetW, targetH);
      }

      ctx.restore();
    }

    ctx.restore();
  }, []);

  // Initial render
  useEffect(() => {
    if (imageLoaded) {
      renderFrame(0);
    }
  }, [imageLoaded, renderFrame]);

  // Window resize handler
  useEffect(() => {
    const onResize = () => {
      renderFrame(currentAngleRef.current);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [renderFrame]);

  // Synchronize with GSAP ScrollTrigger
  useEffect(() => {
    if (!containerRef.current || !imageLoaded) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.15,
      onUpdate: (self) => {
        if (isDraggingRef.current) return;
        const progress = self.progress;
        setScrollProgress(progress);
        const deg = Math.round(progress * 360);
        currentAngleRef.current = deg;
        setRotationAngle(deg);
        renderFrame(deg);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [imageLoaded, renderFrame]);

  // Drag interaction support for interactive 3D rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startAngleRef.current = currentAngleRef.current;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const newAngle = Math.round((startAngleRef.current + deltaX * 0.6) % 360 + 360) % 360;
    currentAngleRef.current = newAngle;
    setRotationAngle(newAngle);
    renderFrame(newAngle);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const scrollToSection = (id: string) => {
    sound.playSelect();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#070709]"
      id="hero-scroll-container"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between p-6 md:p-12 z-10 pointer-events-none">
        {/* Top Floating Row */}
        <div className="w-full flex items-start justify-between pt-16 md:pt-14 z-20 pointer-events-auto">
          {/* Top Left: Editorial Tag */}
          <div className="flex flex-col gap-2 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                SUDHARSAN
              </span>
            </div>
            <p className="text-xs font-mono text-[#a1a1aa] leading-relaxed hidden sm:block">
              DEVOPS ENGINEER | SRE | CLOUD ENGINEER
            </p>
          </div>

          {/* Top Right: Real-time Telemetry Status */}
          <div className="flex items-center gap-3">
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2.5">
              <Activity size={14} className="text-[#e6c875] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#f5f5f7]">
                ORIENTATION <strong className="text-[#e6c875] font-semibold">{rotationAngle.toString().padStart(3, '0')}°</strong>
              </span>
            </div>
            <div className="hidden md:flex glass-panel px-4 py-2 rounded-full items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">
                100% DR READY
              </span>
            </div>
          </div>
        </div>

        {/* Center Canvas: Interactive Turntable (occupying ~78% height, perfectly centered) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing"
          data-cursor="rotate"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full object-contain pointer-events-none select-none"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.85))',
            }}
          />
        </div>

        {/* Middle Surrounding Typography (Desktop & Tablet Placement Without Covering Face) */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8 z-20 pointer-events-none mb-14 md:mb-8">
          {/* Main Statement (Bottom Left) */}
          <div className="max-w-lg pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#e6c875] uppercase tracking-widest mb-3">
              <Cpu size={12} />
              <span>DevOps × SRE × Cloud Engineering</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-editorial-serif font-light text-[#f5f5f7] leading-[1.12] mb-4 tracking-tight">
              Building reliable infrastructure, <span className="italic font-normal text-[#e6c875]">automating workflows.</span>
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#a1a1aa] leading-relaxed max-w-md font-light">
              Supporting production systems across cloud, Linux, Windows, and application platforms with an engineering-first reliability mindset.
            </p>
          </div>

          {/* Action CTAs (Bottom Right) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pointer-events-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#e6c875] text-[#070709] transition-all duration-300 font-mono text-xs tracking-wider font-bold flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>Explore SRE Work</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToSection('#architecture')}
              className="px-6 py-3.5 rounded-full glass-panel hover:border-[#e6c875]/50 text-[#f5f5f7] hover:text-[#e6c875] transition-all duration-300 font-mono text-xs tracking-wider font-semibold text-center"
            >
              View Blueprints
            </button>
          </div>
        </div>

        {/* Bottom Central Indicator: Scroll To Rotate */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 12),
          }}
        >
          <div className="glass-panel px-4 py-1.5 rounded-full flex items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#e6c875] uppercase">
              SCROLL TO ROTATE 360°
            </span>
            <div className="w-4 h-4 rounded-full bg-[#e6c875]/10 flex items-center justify-center text-[#e6c875] animate-bounce">
              <ArrowDown size={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
