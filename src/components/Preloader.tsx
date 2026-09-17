import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('PROBING RUNTIME TELEMETRY');

  useEffect(() => {
    const imagesToPreload = [
      '/hero-sudharsan.jpg',
      '/projects/project-1.jpg',
      '/projects/project-2.jpg',
      '/projects/project-3.jpg',
      '/projects/project-4.jpg',
    ];

    let loadedCount = 0;
    const total = imagesToPreload.length;

    const messages = [
      'PROBING RUNTIME TELEMETRY',
      'CHECKING INFRASTRUCTURE HEALTH',
      'CONNECTING PROMETHEUS SCRAPERS',
      'VALIDATING DISASTER RECOVERY DRILLS',
      'PRODUCTION SYSTEMS OPERATIONAL',
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + 4, 92);
        const msgIndex = Math.min(Math.floor((next / 100) * messages.length), messages.length - 1);
        setStatusMsg(messages[msgIndex]);
        return next;
      });
    }, 45);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        const percent = Math.floor((loadedCount / total) * 100);
        setProgress((prev) => Math.max(prev, percent));

        if (loadedCount === total) {
          clearInterval(timer);
          setProgress(100);
          setStatusMsg('SYSTEM STATUS: 100% OPERATIONAL');
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 700);
          }, 400);
        }
      };
      img.src = src;
    });

    const safety = setTimeout(() => {
      clearInterval(timer);
      setProgress(100);
      setStatusMsg('SYSTEM STATUS: 100% OPERATIONAL');
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 700);
      }, 300);
    }, 2800);

    return () => {
      clearInterval(timer);
      clearTimeout(safety);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col justify-between p-8 md:p-14 bg-[#070709] transition-all duration-700 ease-out ${
        isExiting ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Status Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono tracking-widest text-[#a1a1aa] uppercase">
            PROD ENVIRONMENT // SRE LIVE
          </span>
        </div>
        <span className="text-xs font-mono tracking-widest text-[#e6c875]">
          SLA: 99.99% UPTIME
        </span>
      </div>

      {/* Centerpiece Monogram */}
      <div className="flex flex-col items-center justify-center my-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzel font-light tracking-[0.2em] text-[#f5f5f7] mb-4 select-none text-center">
          {personalInfo.brandMonogram}
        </h1>
        <div className="flex items-center gap-3">
          <p className="text-xs md:text-sm font-mono tracking-[0.25em] text-[#e6c875] uppercase">
            {personalInfo.designation}
          </p>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e6c875] animate-pulse" />
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-full max-w-xl mx-auto flex flex-col gap-3">
        <div className="flex justify-between items-end font-mono text-xs text-[#a1a1aa]">
          <span className="tracking-widest">{statusMsg}</span>
          <span className="text-[#e6c875] text-sm font-bold tracking-wider">
            {progress.toString().padStart(3, '0')}%
          </span>
        </div>
        <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#e6c875]/60 via-[#e6c875] to-[#fdf3d8] transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
