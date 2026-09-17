import React, { useState } from 'react';
import { Activity, ShieldCheck, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const About: React.FC = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: 'Production Reliability',
      desc: 'Approaching systems engineering with a production-first mindset, focusing on uptime, high-availability IIS/.NET runtime configurations, and zero data loss.',
      icon: <ShieldCheck size={18} className="text-[#e6c875]" />,
    },
    {
      title: 'Observability & Telemetry',
      desc: 'Prometheus & Grafana infrastructure monitoring using node_exporter and windows_exporter, with tailored PromQL alerting to stop bottlenecks before downtime.',
      icon: <Activity size={18} className="text-sky-400" />,
    },
    {
      title: 'Disaster Recovery Integrity',
      desc: 'Executed 10+ multi-cloud Disaster Recovery drills across enterprise fintech apps with 0 critical deviations during recovery validation.',
      icon: <Cpu size={18} className="text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                PHILOSOPHY & SRE STANDARD
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Reliability is not an accident; <span className="italic font-normal text-[#e6c875]">it's an architecture.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 01 / PROFILE OVERVIEW ]
          </p>
        </div>

        {/* Editorial Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#a1a1aa] leading-relaxed font-light">
            <p className="text-xl sm:text-2xl text-[#f5f5f7] font-editorial-serif italic leading-relaxed">
              "{personalInfo.summary}"
            </p>
            <p>
              {personalInfo.bio}
            </p>
            <p>
              {personalInfo.aboutMe}
            </p>

            {/* Philosophy Switcher */}
            <div className="pt-6">
              <p className="text-xs font-mono text-[#a1a1aa] tracking-widest uppercase mb-4">
                SRE OPERATIONAL CORNERSTONES
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {philosophies.map((p, idx) => (
                  <button
                    key={p.title}
                    onClick={() => {
                      sound.playTick();
                      setActivePhilosophy(idx);
                    }}
                    className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                      activePhilosophy === idx
                        ? 'bg-white/[0.06] border-[#e6c875]/60 shadow-lg'
                        : 'bg-white/[0.01] border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    <div className="mb-2">{p.icon}</div>
                    <div className="text-sm font-semibold text-[#f5f5f7]">{p.title}</div>
                  </button>
                ))}
              </div>
              <div className="mt-4 p-5 rounded-xl glass-panel text-sm text-[#a1a1aa] leading-relaxed border-l-2 border-l-[#e6c875]">
                {philosophies[activePhilosophy].desc}
              </div>
            </div>
          </div>

          {/* Right Column: Code SRE Manifesto Showcase */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-[#a1a1aa]">sudharsan.sre.ts</span>
              </div>
              <pre className="font-mono-code text-xs sm:text-[13px] text-[#a1a1aa] leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-[#e6c875]">export const</span> <span className="text-[#f5f5f7]">sudharsan</span>: <span className="text-sky-300">SREProfile</span> = &#123;{'\n'}
                  {'  '}engineer: <span className="text-emerald-300">'Sudharsan S'</span>,{'\n'}
                  {'  '}role: <span className="text-emerald-300">'DevOps / Site Reliability Engineer'</span>,{'\n'}
                  {'  '}experience: <span className="text-amber-300">'3+ Years'</span>,{'\n'}
                  {'  '}dr_drills_executed: <span className="text-amber-300">10</span>,{'\n'}
                  {'  '}critical_deviations: <span className="text-emerald-300">0</span>,{'\n'}
                  {'  '}core_domains: &#123;{'\n'}
                  {'    '}cloud: [<span className="text-amber-300">'AWS'</span>, <span className="text-amber-300">'GCP'</span>],{'\n'}
                  {'    '}web_tier: [<span className="text-amber-300">'IIS 10'</span>, <span className="text-amber-300">'Nginx'</span>],{'\n'}
                  {'    '}observability: [<span className="text-amber-300">'Prometheus'</span>, <span className="text-amber-300">'Grafana'</span>],{'\n'}
                  {'    '}automation: [<span className="text-amber-300">'PowerShell'</span>, <span className="text-amber-300">'Bash'</span>],{'\n'}
                  {'  '}&#125;,{'\n'}
                  {'  '}sla_target: <span className="text-purple-300">'99.99% Availability'</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Real Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.metrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-[#e6c875]/40 transition-all duration-300 group"
              data-cursor="explore"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                  <ShieldCheck size={18} className="text-[#e6c875]" />
                </span>
                <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                  VERIFIED METRIC
                </span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-editorial-serif font-light text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#f5f5f7] mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[#a1a1aa] font-sans">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
