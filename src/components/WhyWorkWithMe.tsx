import React from 'react';
import { Shield, Activity, Terminal, RefreshCw, Server, Lock } from 'lucide-react';

interface Principle {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
}

const principles: Principle[] = [
  {
    title: 'Production-First Mindset',
    subtitle: 'Zero Tolerance for Preventable Downtime',
    desc: 'Every configuration, deployment step, and architectural decision is engineered with high availability and transactional integrity as the top priority.',
    icon: <Shield size={22} className="text-[#e6c875]" />,
  },
  {
    title: 'Disaster Recovery Discipline',
    subtitle: 'Proven Track Record of 0 Deviations',
    desc: 'Validated through 10+ comprehensive multi-cloud and on-premises DR simulations, ensuring strict recovery point and recovery time objectives.',
    icon: <RefreshCw size={22} className="text-emerald-400" />,
  },
  {
    title: 'Proactive Observability',
    subtitle: 'Telemetry Before Outages',
    desc: 'Prometheus scrapers, windows/node exporters, and bespoke PromQL alerts that catch thread exhaustion and resource bottlenecks before end-users notice.',
    icon: <Activity size={22} className="text-sky-400" />,
  },
  {
    title: 'Operational Automation',
    subtitle: 'Consistency Through Code',
    desc: 'Replacing manual toil with deterministic PowerShell and Bash scripts for application audits, log rotation, and cloud inventory discovery.',
    icon: <Terminal size={22} className="text-amber-400" />,
  },
  {
    title: 'Dual-OS Systems Mastery',
    subtitle: 'Windows Server & Linux Fleets',
    desc: 'Equally adept tuning IIS 10 application pools on Windows Server as orchestrating containerized microservices and systemd on Linux.',
    icon: <Server size={22} className="text-purple-400" />,
  },
  {
    title: 'Security & VAPT Remediation',
    subtitle: 'Defense at the Edge & Web Tier',
    desc: 'Configuring Nginx reverse proxies, ModSecurity WAF rules, TLS 1.3 encryption, and promptly eliminating reported penetration testing vulnerabilities.',
    icon: <Lock size={22} className="text-rose-400" />,
  },
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                THE SRE PRINCIPLES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Why work with <span className="italic font-normal text-[#e6c875]">Sudharsan.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 07 / STANDARD ]
          </p>
        </div>

        {/* 6 SRE Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={item.title}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/[0.07] hover:border-[#e6c875]/40 transition-all duration-400 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-[#a1a1aa]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-editorial-serif font-light text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#e6c875] tracking-wider mb-4">
                  {item.subtitle}
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#a1a1aa] uppercase tracking-widest">
                  PRODUCTION ASSURANCE
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]/40 group-hover:bg-[#e6c875]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
