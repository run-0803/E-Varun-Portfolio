"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Pure JavaScript scroll - prevents Next.js from "jumping"
  const handleScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#D4AF37] origin-left z-[100]" 
        style={{ scaleX }} 
      />

      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#0F0C0A]/90 backdrop-blur-md py-5 border-b border-[#D4AF37]/10 flex justify-center items-center"
      >
        <div className="flex font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#B5B0A1] gap-6 md:gap-12">
          {/* Changed from <a> to <button> to stop the instant jump */}
          <button onClick={() => handleScroll('intro')} className="hover:text-[#D4AF37] transition-colors">Intro</button>
          <button onClick={() => handleScroll('experience')} className="hover:text-[#D4AF37] transition-colors">About</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-[#D4AF37] transition-colors">Works</button>
          <button onClick={() => handleScroll('certifications')} className="hover:text-[#D4AF37] transition-colors">Certs</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-[#D4AF37] transition-colors">Say Hello</button>
        </div>
      </motion.nav>
    </>
  );
}