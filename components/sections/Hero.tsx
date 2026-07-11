"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-12 rounded-3xl border-white/10"
        >
          <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter mb-6">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Future of AI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-10">
            Engineering scalable backend systems and intelligent machine learning models.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-blue-100 transition-all">
              View Work
            </a>
            <a href="/Varun_CV.pdf" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}