import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';

export const FinalCTA: React.FC = () => {
  const handleStartProject = () => {
    sound.playSelect();
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#e6c875]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#e6c875]/30 text-xs font-mono text-[#e6c875] tracking-widest uppercase">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span>MISSION-CRITICAL SRE COLLABORATION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial-serif font-light text-[#f5f5f7] tracking-tight leading-[1.08]">
          Your next production deployment could <span className="italic font-normal text-[#e6c875]">be flawless.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#a1a1aa] max-w-xl mx-auto font-light leading-relaxed">
          Let's make it happen. Elevate system availability, streamline release promotion, and achieve bulletproof Disaster Recovery with Sudharsan S.
        </p>

        <div className="pt-4">
          <button
            onClick={handleStartProject}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#e6c875] hover:bg-[#fdf3d8] text-[#070709] font-mono text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl shadow-[#e6c875]/20 hover:scale-105"
          >
            <span>Initiate Contact</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
