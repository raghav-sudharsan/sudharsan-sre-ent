import React, { useState } from 'react';
import { GitPullRequest, Cloud, Box, Activity, Terminal, Server, Shield, RefreshCw, Sparkles } from 'lucide-react';
import { skillsData, type SkillGroup } from '../data/portfolioData';
import { sound } from '../utils/audio';

const iconMap: Record<string, React.ReactNode> = {
  'DevOps & CI/CD': <GitPullRequest size={18} className="text-[#e6c875]" />,
  'Cloud Infrastructure': <Cloud size={18} className="text-sky-400" />,
  'Containers & Orchestration': <Box size={18} className="text-emerald-400" />,
  'Observability & Metrics': <Activity size={18} className="text-purple-400" />,
  'Linux Administration': <Terminal size={18} className="text-amber-400" />,
  'Windows & Application Hosting': <Server size={18} className="text-pink-400" />,
  'Web Routing & Security': <Shield size={18} className="text-rose-400" />,
  'Operations & Reliability': <RefreshCw size={18} className="text-teal-400" />,
};

export const Skills: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>(skillsData[0].title);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const currentGroup: SkillGroup =
    skillsData.find((s) => s.title === activeGroup) || skillsData[0];

  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                SRE & DEVOPS COMPETENCY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Technical <span className="italic font-normal text-[#e6c875]">fluency.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 05 / SKILLS MATRIX ]
          </p>
        </div>

        {/* Group Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {skillsData.map((group) => {
            const isActive = group.title === activeGroup;
            return (
              <button
                key={group.title}
                onClick={() => {
                  sound.playTick();
                  setActiveGroup(group.title);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#e6c875] text-[#070709] font-bold shadow-lg shadow-[#e6c875]/10'
                    : 'glass-panel text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
                }`}
              >
                <span>{iconMap[group.title] || <Terminal size={16} />}</span>
                <span>{group.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Typography Showcase */}
        <div className="glass-panel p-8 md:p-14 rounded-3xl border border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#e6c875] uppercase">
                  DOMAIN LENS: {currentGroup.domainLens}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#f5f5f7]">
                {currentGroup.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#a1a1aa] mt-1 font-light">
                {currentGroup.description}
              </p>
            </div>
            {hoveredTech && (
              <div className="flex items-center gap-2 font-mono text-xs text-[#e6c875] bg-[#e6c875]/10 px-3.5 py-1.5 rounded-full border border-[#e6c875]/20 animate-in fade-in">
                <Sparkles size={13} />
                <span>INSPECTING: {hoveredTech}</span>
              </div>
            )}
          </div>

          {/* Large Expressive Interactive Typography */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-12 sm:gap-y-10 items-baseline">
            {currentGroup.technologies.map((tech, idx) => (
              <div
                key={tech}
                onMouseEnter={() => {
                  sound.playTick();
                  setHoveredTech(tech);
                }}
                onMouseLeave={() => setHoveredTech(null)}
                className="group relative cursor-default transition-all duration-300 select-none"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#a1a1aa]/50 group-hover:text-[#e6c875] transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-editorial-serif font-light text-[#a1a1aa] group-hover:text-[#f5f5f7] group-hover:translate-x-2 transition-all duration-300">
                    {tech}
                  </span>
                </div>
                <div className="w-0 h-[2px] bg-gradient-to-r from-[#e6c875] to-transparent group-hover:w-full transition-all duration-500 mt-2" />
              </div>
            ))}
          </div>

          {/* SRE Ecosystem Cloud */}
          <div className="mt-16 pt-8 border-t border-white/[0.08]">
            <p className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-widest mb-4">
              CROSS-PLATFORM SRE TOOLKIT
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'IIS 10', 'Windows Server', 'Ubuntu Linux', 'Docker', 'Docker Compose',
                'AWS EC2', 'AWS S3', 'GCP', 'Azure DevOps', 'Prometheus',
                'Grafana', 'PromQL', 'PowerShell', 'Bash', 'Nginx Reverse Proxy',
                'WAF/ModSecurity', 'Disaster Recovery', 'SQL Server'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.02] border border-white/[0.07] text-[#a1a1aa] hover:text-[#e6c875] hover:border-[#e6c875]/40 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
