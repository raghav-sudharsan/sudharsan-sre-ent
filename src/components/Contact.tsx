import React, { useState, useEffect } from 'react';
import { Copy, Check, Send, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { sound } from '../utils/audio';

const projectTypes = [
  'Production Infrastructure Setup',
  'Disaster Recovery & DR Drills',
  'Prometheus & Grafana Observability',
  'CI/CD Pipeline Automation',
  'IIS & Windows Server Optimization',
  'Full-Time SRE / DevOps Role',
];

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedType, setSelectedType] = useState('Full-Time SRE / DevOps Role');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lockoutSeconds, setLockoutSeconds] = useState(0);

  const emailAddress = personalInfo.socialLinks.email;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (lockoutSeconds > 0) {
      timer = setTimeout(() => setLockoutSeconds((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [lockoutSeconds]);

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedType(customEvent.detail);
      }
    };
    window.addEventListener('select-project-type', handleServiceSelect);
    return () => window.removeEventListener('select-project-type', handleServiceSelect);
  }, []);

  const copyEmail = () => {
    sound.playSelect();
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message || lockoutSeconds > 0) return;

    sound.playSelect();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setLockoutSeconds(30);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e6c875', '#fdf3d8', '#ffffff', '#b3943b'],
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                INITIATE PRODUCTION DIALOGUE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Have a critical challenge? <span className="italic font-normal text-[#e6c875]">Let's connect.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#a1a1aa] mt-4 max-w-xl font-light">
              Whether you're looking for a dedicated SRE/DevOps engineer, production reliability consulting, or infrastructure automation, let's talk.
            </p>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 10 / CONTACT ]
          </p>
        </div>

        {/* Contact Layout: Left Info, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Quick Connect */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/[0.08] space-y-6">
              <div>
                <p className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider mb-1">
                  DIRECT EMAIL
                </p>
                <div className="flex items-center justify-between gap-2 mt-2">
                  <span className="text-sm sm:text-base font-mono text-[#f5f5f7] select-all">
                    {emailAddress}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-2.5 rounded-full bg-white/[0.04] hover:bg-[#e6c875]/20 text-[#a1a1aa] hover:text-[#e6c875] transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="Copy email to clipboard"
                  >
                    {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span className="hidden sm:inline">{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider mb-2">
                  LOCATION & TIMEZONE
                </p>
                <p className="text-sm text-[#f5f5f7] font-sans">
                  {personalInfo.socialLinks.location}
                </p>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  IST (UTC+5:30) • Open to on-site, hybrid, and remote opportunities.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider mb-3">
                  PROFESSIONAL NETWORKS
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playTick()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.07] text-[#a1a1aa] hover:text-[#e6c875] hover:border-[#e6c875]/40 transition-colors"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playTick()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.07] text-[#a1a1aa] hover:text-[#e6c875] hover:border-[#e6c875]/40 transition-colors"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playTick()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.03] border border-white/[0.07] text-[#a1a1aa] hover:text-[#e6c875] hover:border-[#e6c875]/40 transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick response badge */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.06] flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <p className="text-xs font-mono text-[#f5f5f7] font-semibold">
                  RESPONSE TIME: WITHIN 24 HOURS
                </p>
                <p className="text-xs text-[#a1a1aa] mt-0.5">
                  Direct reply guaranteed from Sudharsan S.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative">
              {/* Terminal command prompt concept */}
              <div className="mb-8 px-4 py-3 rounded-2xl bg-black/50 border border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#a1a1aa]">ops@sudharsan:~/production$</span>
                  <span className="text-[#e6c875] font-semibold">connect --with Sudharsan</span>
                </div>
                <span className="hidden sm:inline text-[10px] text-[#71717a] uppercase tracking-wider">Direct Transmission</span>
              </div>

              {isSubmitted ? (
                <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#e6c875]/10 border border-[#e6c875]/40 text-[#e6c875] flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={28} />
                  </div>
                  <h3 className="text-3xl font-editorial-serif text-[#f5f5f7]">
                    Transmission Received.
                  </h3>
                  <p className="text-sm text-[#a1a1aa] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#f5f5f7] font-semibold">{name}</span>. I have received your message regarding <span className="text-[#e6c875] font-mono">{selectedType}</span> and will reply directly to <span className="text-[#f5f5f7]">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      sound.playTick();
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono text-[#f5f5f7] hover:border-[#e6c875] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Miller"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e6c875] focus:outline-none text-[#f5f5f7] placeholder-[#52525b] text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. david@fintechcorp.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e6c875] focus:outline-none text-[#f5f5f7] placeholder-[#52525b] text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project / Engagement Type Picker */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-3">
                      Engagement Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => {
                            sound.playTick();
                            setSelectedType(type);
                          }}
                          className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                            selectedType === type
                              ? 'bg-[#e6c875] text-[#070709] font-bold shadow-md'
                              : 'bg-white/[0.03] border border-white/[0.08] text-[#a1a1aa] hover:text-[#f5f5f7]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a1a1aa] mb-2">
                      Message & Requirements *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about your infrastructure, role, challenges, or system requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#e6c875] focus:outline-none text-[#f5f5f7] placeholder-[#52525b] text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || lockoutSeconds > 0}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#e6c875] via-[#fdf3d8] to-[#e6c875] text-[#070709] font-mono text-xs tracking-widest font-bold uppercase hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#e6c875]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : lockoutSeconds > 0 ? (
                      <span>TRANSMISSION LOCKOUT ({lockoutSeconds}S)</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
