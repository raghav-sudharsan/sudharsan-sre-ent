import React from 'react';
import { Sparkles } from 'lucide-react';

const items = [
  'SITE RELIABILITY ENGINEERING',
  'PRODUCTION OPERATIONS',
  'OBSERVABILITY & PROMQL',
  'DISASTER RECOVERY & DR DRILLS',
  'MULTI-CLOUD INFRASTRUCTURE',
  'DOCKER & CONTAINERIZATION',
  'IIS 10 & WINDOWS SERVER',
  'LINUX & SYSTEMD AUTOMATION',
  'AZURE DEVOPS & CI/CD',
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.08] bg-[#09090d] py-6 z-20">
      <div className="flex animate-marquee-infinite select-none">
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-6 shrink-0">
            <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-[#d4af37]/90 font-medium uppercase">
              {item}
            </span>
            <Sparkles size={12} className="text-[#a1a1aa]/40 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
