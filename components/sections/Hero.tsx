"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
// Removed Next.js Link import since we are using native anchor tags for these specific actions

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-background">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting & Title */}
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
              Hi, I'm Esarapu Varun
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight">
              Crafting Intelligent <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Systems & Scalable APIs
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed">
            Electronics and Communication Engineering graduate specializing in Python, machine learning, and robust backend development. I build end-to-end applications that bridge the gap between raw data and actionable AI insights.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Native anchor tag for smooth scrolling */}
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-custom shadow-lg hover:shadow-primary/25"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            
            {/* Native anchor tag for file download matching the public folder file */}
            <a
              href="/Varun_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface text-foreground border border-border px-8 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-custom"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}