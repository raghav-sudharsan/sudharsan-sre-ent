import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero360 } from './components/Hero360';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/SelectedWork';
import { ArchitectureBlueprints } from './components/ArchitectureBlueprints';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Achievements } from './components/Achievements';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070709] text-[#f5f5f7] selection:bg-[#e6c875]/20 selection:text-[#fdf3d8]">
      {/* Custom Contextual Cursor */}
      <CustomCursor />

      {/* Editorial Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Luxury Sticky Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Cinematic 360° Hero */}
        <Hero360 />

        {/* Endless SRE Operations Marquee */}
        <Marquee />

        {/* About Section */}
        <About />

        {/* Production Experience Timeline */}
        <Experience />

        {/* Selected Work Case Studies */}
        <SelectedWork />

        {/* Interactive Architecture Blueprints */}
        <ArchitectureBlueprints />

        {/* SRE Skills Matrix */}
        <Skills />

        {/* SRE & DevOps Offerings */}
        <Services />

        {/* Why Work With Me */}
        <WhyWorkWithMe />

        {/* Achievements Timeline */}
        <Achievements />

        {/* Community & Knowledge Sharing */}
        <Community />

        {/* References & Testimonials */}
        <Testimonials />

        {/* Contact & Inquiry */}
        <Contact />

        {/* Final Dramatic CTA */}
        <FinalCTA />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}

export default App;
