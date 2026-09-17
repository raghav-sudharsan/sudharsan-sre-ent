import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../utils/audio';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playSelect();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050507] text-[#f5f5f7] py-14 px-6 md:px-12 border-t border-white/[0.08] z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Left: Monogram & Clock */}
          <div className="flex items-center gap-4">
            <span className="text-2xl sm:text-3xl font-cinzel font-light tracking-[0.2em] text-[#f5f5f7]">
              {personalInfo.brandMonogram}
            </span>
            <div className="h-6 w-[1px] bg-white/20" />
            <div className="text-left">
              <p className="text-xs font-mono text-[#a1a1aa] uppercase">LOCAL TIME (BANGALORE)</p>
              <p className="text-xs font-mono text-[#e6c875] font-semibold">{currentTime || '11:00 PM IST'}</p>
            </div>
          </div>

          {/* Center: Built with reliability + code */}
          <div className="text-center">
            <p className="font-editorial-serif text-lg sm:text-xl text-[#a1a1aa] italic font-light">
              Built with reliability + code.
            </p>
            <p className="text-[11px] font-mono text-[#52525b] mt-1 tracking-widest uppercase">
              DevOps • SRE • Production Engineering • Disaster Recovery
            </p>
          </div>

          {/* Right: Back to Top Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/10 hover:border-[#e6c875]/60 text-[#a1a1aa] hover:text-[#e6c875] transition-all group flex items-center gap-2 text-xs font-mono"
              aria-label="Scroll to top"
            >
              <span className="hidden sm:inline">BACK TO TOP</span>
              <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717a]">
          <div>
            © 2026 {personalInfo.name}. Site Reliability Engineer | DevOps Architect.
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playTick()}
              className="hover:text-[#e6c875] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playTick()}
              className="hover:text-[#e6c875] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playTick()}
              className="hover:text-[#e6c875] transition-colors flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              onClick={() => sound.playTick()}
              className="hover:text-[#e6c875] transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
