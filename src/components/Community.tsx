import React from 'react';
import { ArrowUpRight, Radio } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { sound } from '../utils/audio';

export const Community: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                OPEN COLLABORATION & KNOWLEDGE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Open-source & <span className="italic font-normal text-[#e6c875]">engineering.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 09 / COLLABORATION ]
          </p>
        </div>

        {/* Feature Card */}
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-white/[0.08] relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e6c875]/10 border border-[#e6c875]/30">
                <Radio size={14} className="text-[#e6c875] animate-pulse" />
                <span className="text-xs font-mono text-[#fdf3d8] font-semibold tracking-wider">
                  SRE KNOWLEDGE BASE & RUNBOOKS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-editorial-serif text-[#f5f5f7] leading-tight">
                Sharing battle-tested infrastructure patterns and automation playbooks.
              </h3>

              <p className="text-base text-[#a1a1aa] leading-relaxed font-light">
                Documenting production operations, high-availability IIS configurations, multi-cloud Disaster Recovery drills, 
                and Prometheus/Grafana alerting rules to build resilient infrastructure.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-editorial-serif text-[#e6c875]">3+</div>
                  <div className="text-xs font-mono text-[#a1a1aa] mt-1">Years Production Ops</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-editorial-serif text-[#e6c875]">10+</div>
                  <div className="text-xs font-mono text-[#a1a1aa] mt-1">DR Drills Validated</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-editorial-serif text-[#e6c875]">99.99%</div>
                  <div className="text-xs font-mono text-[#a1a1aa] mt-1">SLA Uptime Target</div>
                </div>
              </div>
            </div>

            {/* Right Side: Focus Areas */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { title: 'IIS & Windows Server Operations', desc: 'Application pools, thread limits, worker processes, and HTTP forensics.' },
                { title: 'Observability & PromQL', desc: 'Telemetry architecture, node/windows exporters, and real-time dashboard design.' },
                { title: 'Multi-Cloud DR Resilience', desc: 'AWS and GCP disaster recovery scenarios and automated failover validation.' },
                { title: 'PowerShell & Bash Tooling', desc: 'Administrative automation scripts for audits, log cleanup, and cloud inventory.' },
              ].map((topic, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#e6c875]/30 transition-colors"
                >
                  <div className="text-sm font-semibold text-[#f5f5f7] mb-1">{topic.title}</div>
                  <div className="text-xs text-[#a1a1aa] font-sans">{topic.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Platforms Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playTick()}
            className="glass-panel p-5 rounded-2xl border border-white/[0.07] hover:border-[#e6c875]/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#e6c875] group-hover:scale-110 transition-transform">
                <LinkedinIcon size={18} />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#f5f5f7]">LinkedIn Profile</div>
                <div className="text-[11px] font-mono text-[#a1a1aa]">in/sudharsan-sre</div>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-[#a1a1aa] group-hover:text-[#e6c875] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playTick()}
            className="glass-panel p-5 rounded-2xl border border-white/[0.07] hover:border-[#e6c875]/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] text-[#e6c875] group-hover:scale-110 transition-transform">
                <GithubIcon size={18} />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-[#f5f5f7]">GitHub Repositories</div>
                <div className="text-[11px] font-mono text-[#a1a1aa]">@raghav-sudharsan</div>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-[#a1a1aa] group-hover:text-[#e6c875] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
