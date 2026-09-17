import React from 'react';
import { X, Layers, AlertTriangle, Wrench } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d12] border border-white/[0.12] rounded-3xl overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-widest text-[#e6c875] uppercase">
              {project.category}
            </span>
          </div>
          <button
            onClick={() => {
              sound.playTick();
              onClose();
            }}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#f5f5f7] hover:text-[#e6c875] transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Main Visual */}
          {project.image && (
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/[0.08] relative group">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-editorial-serif font-light text-[#f5f5f7] mb-2">
              {project.name}
            </h3>
            <p className="text-base text-[#e6c875] font-sans font-medium mb-4">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Business Problem & Engineering Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
                <AlertTriangle size={14} />
                <span>Operational Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <Wrench size={14} />
                <span>Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {project.engineeringSolution}
              </p>
            </div>
          </div>

          {/* Implementation & Outcome */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono text-[#e6c875] uppercase tracking-wider mb-2">
                IMPLEMENTATION DETAILS
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
                {project.implementation}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono text-[#e6c875] uppercase tracking-wider mb-2">
                MEASURED OPERATIONAL OUTCOME
              </h4>
              <p className="text-xs sm:text-sm text-[#f5f5f7] leading-relaxed">
                {project.operationalOutcome}
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Layers size={14} className="text-[#e6c875]" /> TECHNOLOGIES & TOOLING
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#f5f5f7]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Action CTAs */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playTick()}
              className="px-6 py-3 rounded-full bg-[#e6c875] hover:bg-[#fdf3d8] text-[#070709] font-mono text-xs font-bold tracking-wider flex items-center gap-2 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Inspect Repository Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
