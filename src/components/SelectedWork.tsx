import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, type ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { sound } from '../utils/audio';

export const SelectedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const openProject = (p: ProjectItem) => {
    sound.playSelect();
    setActiveProject(p);
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                PRODUCTION CASE STUDIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              SRE & DevOps <span className="italic font-normal text-[#e6c875]">projects.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 03 / CASE STUDIES ]
          </p>
        </div>

        {/* Large Editorial Project Presentations */}
        <div className="space-y-28 md:space-y-36">
          {projectsData.map((project, idx) => (
            <article
              key={project.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              data-cursor="view"
              onClick={() => openProject(project)}
            >
              {/* Image Showcase */}
              <div
                className={`lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0d0d12] transition-all duration-700 group-hover:border-[#e6c875]/40 group-hover:shadow-[0_20px_50px_rgba(230,200,117,0.08)] cursor-pointer ${
                  idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image || '/projects/project-1.jpg'}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-4 left-4 glass-panel px-3.5 py-1.5 rounded-full font-mono text-[11px] text-[#f5f5f7] flex items-center gap-2">
                    <span className="text-[#e6c875]">0{idx + 1}</span>
                    <span>/ CASE STUDY</span>
                  </div>
                </div>
              </div>

              {/* Text Editorial Content */}
              <div
                className={`lg:col-span-5 flex flex-col justify-center ${
                  idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono tracking-[0.2em] text-[#e6c875] uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-editorial-serif font-light text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors duration-300 mb-2">
                  {project.name}
                </h3>

                <p className="text-sm font-sans text-[#a1a1aa] font-medium mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologiesUsed.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-[#f5f5f7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProject(project);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase font-bold text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors"
                  >
                    <span>Inspect Case Details</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#e6c875]"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};
