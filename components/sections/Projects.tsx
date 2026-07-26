"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-[#D4AF37]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-4xl font-serif text-[#FDFBF7] mb-12 tracking-tight">Selected Works.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              // Now accurately reads your "project.tech" array
              const techArray = project.tech;
              const isLarge = index === 0 || index === 3; 

              return (
                <motion.a 
                  key={index} 
                  href={project.link || "#"} 
                  target={project.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl bg-[#1A1614] border border-[#2D2723] p-8 md:p-10 flex flex-col justify-between cursor-pointer hover:border-[#D4AF37]/40 hover:-translate-y-1 transition-all duration-300 group shadow-xl block ${isLarge ? "md:col-span-2" : "col-span-1"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-serif text-[#FDFBF7] group-hover:text-[#D4AF37] transition-colors mb-4 flex justify-between items-center">
                      {project.title}
                      {project.link && (
                        <span className="text-[#D4AF37] font-sans text-xl font-light opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">↗</span>
                      )}
                    </h3>
                    <p className="text-[#B5B0A1] font-sans leading-relaxed mb-8 text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {techArray.map((techItem: string) => (
                      <span key={techItem} className="px-3 py-1.5 bg-[#0F0C0A] border border-[#2D2723] text-[#D4AF37] text-[10px] font-sans uppercase tracking-[0.1em] rounded-full font-bold shadow-sm">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}