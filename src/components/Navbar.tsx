import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sound } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);

  useEffect(() => {
    setAudioActive(sound.isEnabled());

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sound.toggle();
    setAudioActive(newState);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    sound.playSelect();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-6 md:px-12 py-4 ${
          isScrolled
            ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={() => sound.playTick()}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold tracking-[0.2em] text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors duration-300">
              {personalInfo.brandMonogram}
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase pl-2 border-l border-white/20">
              SRE & DevOps Engineer
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs font-mono tracking-[0.18em] text-[#a1a1aa] hover:text-[#f5f5f7] transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e6c875] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Stack */}
          <div className="flex items-center gap-4">
            {/* Live Uptime Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-mono text-[#a1a1aa] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SLA 99.99%</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-full border border-white/10 hover:border-[#e6c875]/40 text-[#a1a1aa] hover:text-[#e6c875] transition-all duration-300 focus:outline-none"
              title={audioActive ? 'Mute micro-audio' : 'Unmute micro-audio'}
              aria-label="Toggle Audio"
            >
              {audioActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Desktop CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#e6c875]/40 bg-[#e6c875]/10 hover:bg-[#e6c875] text-[#fdf3d8] hover:text-[#070709] transition-all duration-300 text-xs font-mono tracking-wider font-semibold group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                sound.playTick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 text-[#f5f5f7] hover:text-[#e6c875] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#070709]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-14 lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-20">
          <p className="text-xs font-mono tracking-[0.3em] text-[#e6c875] uppercase mb-8">
            Navigation Menu
          </p>
          <ul className="space-y-6">
            {navLinks.map((link, idx) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-baseline justify-between group"
                >
                  <span className="text-3xl sm:text-4xl font-cinzel font-light text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors">
                    {link.label}
                  </span>
                  <span className="font-mono text-xs text-[#a1a1aa] group-hover:text-[#e6c875]">
                    0{idx + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#a1a1aa]">DIRECT INQUIRIES</p>
            <p className="text-sm text-[#f5f5f7] font-sans mt-1">{personalInfo.socialLinks.email}</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-[#e6c875] text-[#070709] font-mono text-xs tracking-widest font-bold"
          >
            CONNECT WITH SUDHARSAN
          </a>
        </div>
      </div>
    </>
  );
};
