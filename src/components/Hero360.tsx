import React, { useState, useRef, useCallback } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Activity, 
  Terminal, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Radio 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const Hero360: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hudActive, setHudActive] = useState(true);

  // Smooth interactive 3D perspective mouse parallax (luxurious tilt without face distortion)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7.5; // Max 7.5 deg tilt
    const rotY = ((x - centerX) / centerX) * 7.5;

    setRotateX(rotX);
    setRotateY(rotY);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
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
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 px-6 md:px-12 bg-[#070709] overflow-hidden"
    >
      {/* Ambient Lighting Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#e6c875]/[0.035] blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.03] blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Editorial Positioning & SRE Statement */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Eyebrow & Status Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#e6c875]/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6c875] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e6c875]" />
              </span>
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#e6c875] uppercase font-semibold">
                SUDHARSAN // SRE CONTROL PLANE
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-[#a1a1aa]">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>99.99% PROD SLA</span>
            </div>
          </div>

          {/* Grand Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-editorial-serif font-light text-[#f5f5f7] leading-[1.08] tracking-tight">
              Building reliable infrastructure, <span className="italic font-normal text-[#e6c875]">automating workflows.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono text-[#a1a1aa]">
              <span>DevOps Engineer</span>
              <span className="text-[#e6c875]/60">•</span>
              <span>Site Reliability Engineer</span>
              <span className="text-[#e6c875]/60">•</span>
              <span>Cloud Engineer</span>
            </div>
          </div>

          {/* Supporting Pitch */}
          <p className="text-sm sm:text-base text-[#a1a1aa] max-w-2xl leading-relaxed font-sans font-light">
            Supporting production systems across cloud, Linux, Windows, and application platforms with an engineering-first reliability mindset. Proven track record across enterprise fintech and SaaS platforms.
          </p>

          {/* Career Progression Vector */}
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm max-w-xl">
            <div className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Layers size={13} className="text-[#e6c875]" />
              <span>CAREER PROGRESSION PATHWAY</span>
            </div>
            <div className="font-mono text-xs sm:text-[13px] text-[#f5f5f7] flex flex-wrap items-center gap-2">
              <span className="text-[#a1a1aa]">IT Administrator</span>
              <span className="text-[#e6c875]">➔</span>
              <span className="text-slate-200">System Administrator (E2)</span>
              <span className="text-[#e6c875]">➔</span>
              <span className="text-[#e6c875] font-semibold">DevOps / SRE / Cloud</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3.5 rounded-full bg-[#f5f5f7] hover:bg-[#e6c875] text-[#070709] transition-all duration-300 font-mono text-xs tracking-wider font-bold flex items-center justify-center gap-2 group shadow-xl"
            >
              <span>EXPLORE SRE WORK</span>
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('#architecture')}
              className="px-6 py-3.5 rounded-full glass-panel hover:border-[#e6c875]/50 text-[#f5f5f7] hover:text-[#e6c875] transition-all duration-300 font-mono text-xs tracking-wider font-semibold text-center"
            >
              VIEW BLUEPRINTS
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-5 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-[#a1a1aa] hover:text-white transition-all duration-300 font-mono text-xs tracking-wider flex items-center gap-2"
            >
              <Terminal size={14} className="text-[#e6c875]" />
              <span>CONNECT</span>
            </button>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.08] max-w-xl">
            {personalInfo.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-mono font-bold text-[#f5f5f7] tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[11px] font-mono text-[#a1a1aa] leading-tight mt-0.5">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Unique, Settled SRE Editorial Portrait Console */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Subtle Ambient Halo Behind Portrait */}
          <div className="absolute -inset-4 bg-gradient-to-b from-[#e6c875]/15 via-cyan-500/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />

          {/* Interactive 3D Perspective Glass Portrait Console */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[420px] rounded-3xl bg-[#0d0d11]/85 border border-[#e6c875]/25 p-4 sm:p-5 backdrop-blur-xl shadow-2xl transition-transform duration-200 ease-out cursor-pointer group select-none"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top HUD Frame Bar */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08] font-mono text-[11px]">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#f5f5f7]">
                  OPERATOR // SUDHARSAN
                </span>
              </div>

              {/* HUD Toggle Lens Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playTick();
                  setHudActive(!hudActive);
                }}
                className={`px-2.5 py-1 rounded-md border text-[10px] tracking-wider transition-colors flex items-center gap-1.5 ${
                  hudActive 
                    ? 'bg-[#e6c875]/15 border-[#e6c875]/50 text-[#e6c875]' 
                    : 'bg-white/[0.04] border-white/10 text-slate-400 hover:text-white'
                }`}
                title="Toggle Telemetry Lens"
              >
                <Radio size={10} className={hudActive ? 'animate-pulse' : ''} />
                <span>{hudActive ? 'TELEMETRY ON' : 'EDITORIAL'}</span>
              </button>
            </div>

            {/* Portrait Image Container with HUD Corner Brackets and Soft Feathering */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#070709] border border-white/[0.06] shadow-inner">
              
              {/* Corner HUD Crosshairs */}
              <div className="absolute top-2.5 left-2.5 z-20 font-mono text-[10px] text-[#e6c875]/70 pointer-events-none select-none">
                + [12.9716° N]
              </div>
              <div className="absolute top-2.5 right-2.5 z-20 font-mono text-[10px] text-[#e6c875]/70 pointer-events-none select-none">
                [77.5946° E] +
              </div>
              <div className="absolute bottom-2.5 left-2.5 z-20 font-mono text-[10px] text-slate-400/80 pointer-events-none select-none">
                BLR_HQ // E2
              </div>
              <div className="absolute bottom-2.5 right-2.5 z-20 font-mono text-[10px] text-slate-400/80 pointer-events-none select-none">
                PROD_FLEET
              </div>

              {/* High-Resolution Portrait with Soft Vignette Blend */}
              <img
                src={personalInfo.avatarUrl}
                alt="Sudharsan — DevOps Engineer | Site Reliability Engineer"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                }}
              />

              {/* Dynamic Glass Specular Sheen (Moves with Parallax Tilt) */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none transition-opacity duration-300"
                style={{
                  opacity: isHovered ? 0.8 : 0.2,
                  transform: `translate(${rotateY * 3}px, ${rotateX * 3}px)`,
                }}
              />

              {/* Live HUD Telemetry Overlays (When Activated) */}
              {hudActive && (
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none z-10 animate-fadeIn">
                  {/* Top Floating Badge */}
                  <div className="self-end mt-7">
                    <div className="glass-panel px-3 py-1.5 rounded-full border border-emerald-500/30 text-emerald-400 text-[10px] font-mono tracking-wider flex items-center gap-1.5 shadow-lg">
                      <CheckCircle2 size={12} />
                      <span>10+ DR DRILLS VALIDATED</span>
                    </div>
                  </div>

                  {/* Bottom Floating Telemetry Strip */}
                  <div className="mb-6 space-y-1.5">
                    <div className="glass-panel px-3 py-2 rounded-xl border border-white/10 backdrop-blur-md flex items-center justify-between font-mono text-[11px] text-slate-200 shadow-xl">
                      <div className="flex items-center gap-2">
                        <Activity size={13} className="text-[#e6c875] animate-pulse" />
                        <span>TELEMETRY: ACTIVE</span>
                      </div>
                      <span className="text-emerald-400 font-bold">99.99%</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Console Metadata Strip */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px]">
              <div className="flex flex-col">
                <span className="text-[9px] text-[#a1a1aa] uppercase tracking-widest">
                  DESIGNATION
                </span>
                <span className="text-[#f5f5f7] font-semibold text-xs mt-0.5">
                  SYSTEM ADMINISTRATOR – E2
                </span>
              </div>

              <div className="flex flex-col text-right">
                <span className="text-[9px] text-[#a1a1aa] uppercase tracking-widest">
                  ORGANIZATION
                </span>
                <span className="text-[#e6c875] font-semibold text-xs mt-0.5">
                  CRAFT SILICON
                </span>
              </div>
            </div>

            {/* Subtitle Footer */}
            <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin size={11} className="text-[#e6c875]" />
                <span>Bangalore, India</span>
              </span>
              <span>INTERACTIVE CARD • TILT ACTIVE</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
