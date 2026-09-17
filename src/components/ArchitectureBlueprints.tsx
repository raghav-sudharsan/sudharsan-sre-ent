import React, { useState } from 'react';
import { Network, Server } from 'lucide-react';
import { architecturesData } from '../data/portfolioData';
import type { ArchitectureBlueprint, ArchitectureNode } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const ArchitectureBlueprints: React.FC = () => {
  const [activeArchId, setActiveArchId] = useState<string>(architecturesData[0].id);
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode | null>(null);

  const activeArch: ArchitectureBlueprint =
    architecturesData.find((a) => a.id === activeArchId) || architecturesData[0];

  return (
    <section id="architecture" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                SYSTEM SCHEMAS & TOPOLOGIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Architecture <span className="italic font-normal text-[#e6c875]">blueprints.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 04 / BLUEPRINTS ]
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {architecturesData.map((arch) => (
            <button
              key={arch.id}
              onClick={() => {
                sound.playTick();
                setActiveArchId(arch.id);
                setSelectedNode(null);
              }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeArchId === arch.id
                  ? 'bg-[#e6c875] text-[#070709] font-bold shadow-lg shadow-[#e6c875]/10'
                  : 'glass-panel text-[#a1a1aa] hover:text-[#f5f5f7] hover:border-white/20'
              }`}
            >
              <Network size={14} />
              <span>{arch.title}</span>
            </button>
          ))}
        </div>

        {/* Blueprint Interactive Display Card */}
        <div className="glass-panel p-8 sm:p-12 md:p-14 rounded-3xl border border-white/[0.08] relative">
          {/* Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/[0.08] gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-[#e6c875] text-xs font-mono uppercase mb-3">
                <span>{activeArch.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial-serif text-[#f5f5f7]">
                {activeArch.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#a1a1aa] mt-1 max-w-2xl font-light leading-relaxed">
                {activeArch.purpose}
              </p>
            </div>
            <div className="text-left lg:text-right">
              <span className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider block mb-1">
                TOPOLOGY FLOW
              </span>
              <p className="text-xs font-mono text-[#e6c875]">
                {activeArch.flowSummary}
              </p>
            </div>
          </div>

          {/* Interactive Node Flow Visualizer */}
          <div className="mb-12">
            <h4 className="text-xs font-mono text-[#a1a1aa] uppercase tracking-widest mb-6">
              INTERACTIVE COMPONENT TOPOLOGY (CLICK A NODE TO INSPECT)
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {activeArch.nodes.map((node, nIdx) => {
                const isSelected = selectedNode?.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      sound.playSelect();
                      setSelectedNode(node);
                    }}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 relative ${
                      isSelected
                        ? 'border-[#e6c875] bg-[#e6c875]/10 shadow-lg scale-105'
                        : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] text-[#e6c875]">0{nIdx + 1}</span>
                        <Server size={14} className={isSelected ? 'text-[#e6c875]' : 'text-[#a1a1aa]'} />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-[#f5f5f7] mb-1">
                        {node.label}
                      </div>
                      <div className="text-[11px] text-[#a1a1aa] font-mono leading-tight">
                        {node.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Deep-Dive Drawer */}
            {selectedNode && (
              <div className="mt-6 p-6 rounded-2xl glass-panel border border-[#e6c875]/30 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-[#e6c875] uppercase tracking-wider font-semibold">
                    ACTIVE NODE: {selectedNode.label} ({selectedNode.role})
                  </span>
                </div>
                <p className="text-sm text-[#f5f5f7] font-sans leading-relaxed">
                  {selectedNode.details}
                </p>
              </div>
            )}
          </div>

          {/* Operational Notes & Technologies Footer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/[0.08]">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono text-[#e6c875] uppercase tracking-wider block">
                SRE OPERATIONAL RUNBOOK NOTES
              </span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
                {activeArch.operationalNotes}
              </p>
            </div>
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider block">
                STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeArch.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] border border-white/[0.07] text-[#f5f5f7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
