import React from 'react';
import { Quote, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/audio';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                ENDORSEMENTS & REFERENCES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Client & peer <span className="italic font-normal text-[#e6c875]">confidence.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 08 / TESTIMONIALS ]
          </p>
        </div>

        {/* Elegant Editorial Card for Real References */}
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <Quote size={40} className="text-[#e6c875]/40" />
            <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#f5f5f7] leading-relaxed">
              "Direct client references, case evaluations, and team peer recommendations are furnished upon mutual project alignment."
            </h3>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-light">
              To uphold nondisclosure covenants for ongoing enterprise builds and private high-net-worth client commissions, 
              verified stakeholder contacts, code reviews, and project evaluations are shared privately during the discovery phase.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={() => sound.playSelect()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e6c875] text-[#070709] font-mono text-xs font-bold tracking-wider hover:bg-[#fdf3d8] transition-colors"
              >
                <ShieldCheck size={16} />
                <span>Request Client Case References</span>
              </a>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#a1a1aa] px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>100% On-Time Delivery Track Record</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
