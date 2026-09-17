import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                PRODUCTION TRACK RECORD
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Career <span className="italic font-normal text-[#e6c875]">experience.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 02 / EXPERIENCE ]
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experienceData.map((exp, idx) => (
            <div
              key={exp.company}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] hover:border-[#e6c875]/40 transition-all duration-300 relative group"
            >
              {/* Top Row: Role, Company, Duration */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-white/[0.06] gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#e6c875] font-semibold">0{idx + 1} //</span>
                    <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-base font-sans text-[#a1a1aa] mt-1 font-medium">
                    {exp.company}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full glass-panel border border-white/[0.08] text-[#f5f5f7] self-start lg:self-auto">
                  <Calendar size={13} className="text-[#e6c875]" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest mb-4">
                  CORE PRODUCTION RESPONSIBILITIES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                      <ChevronRight size={14} className="text-[#e6c875] shrink-0 mt-1" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Achievements & Business Impact */}
              <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#e6c875] uppercase tracking-wider block mb-1">
                    OPERATIONAL IMPACT
                  </span>
                  <p className="text-xs sm:text-sm text-[#f5f5f7] leading-relaxed">
                    {exp.businessImpact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
