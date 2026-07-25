"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="intro" className="flex flex-col justify-center px-4 sm:px-8 pt-40 pb-20 border-b border-[#D4AF37]/10 min-h-[85vh]">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-[2px] bg-[#D4AF37] mr-4"></div>
            <span className="text-[#D4AF37] text-xs tracking-[0.25em] uppercase font-sans font-bold">
              Esarapu Varun
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-serif text-[#FDFBF7] tracking-tight mb-8">
            Building the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#C9A66B]">
              future of AI.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#B5B0A1] font-sans max-w-2xl mb-12 leading-relaxed">
            Engineering scalable backend systems, intelligent machine learning models, and robust digital architecture.
          </p>

          <div className="flex flex-wrap font-sans text-xs tracking-[0.1em] uppercase font-bold gap-4">
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} 
              className="bg-[#D4AF37] text-[#0F0C0A] px-8 py-4 rounded-md hover:bg-[#C9A66B] transition-all shadow-lg shadow-[#D4AF37]/10">
              View Work
            </a>
            <a href="/Varun_CV.pdf" target="_blank" rel="noopener noreferrer" 
              className="bg-transparent text-[#D4AF37] border border-[#D4AF37]/30 px-8 py-4 rounded-md hover:bg-[#D4AF37]/10 transition-all">
              Download CV
            </a>
          </div>

          <div className="mt-16 flex font-sans text-xs tracking-[0.2em] uppercase text-[#B5B0A1] font-bold gap-8">
            <a href="https://www.linkedin.com/in/varunesarapu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">LinkedIn</a>
            <a href="https://github.com/run-0803" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">GitHub</a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}