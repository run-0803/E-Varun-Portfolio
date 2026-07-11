"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-primary/10 rounded-lg text-primary">
            <Briefcase size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                {/* Timeline dot and line for mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-48px] w-px bg-border">
                  <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                </div>

                {/* Date / Period Column */}
                <div className="md:col-span-1 mb-2 md:mb-0 text-sm font-medium text-primary md:text-right">
                  {job.period}
                </div>

                {/* Details Column */}
                <div className="md:col-span-3 relative">
                  {/* Timeline dot and line for desktop */}
                  <div className="hidden md:block absolute left-[-33px] top-2 bottom-[-48px] w-px bg-border">
                    <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">
                    {job.role}
                  </h3>
                  <h4 className="text-lg text-foreground/80 mb-4 font-medium">
                    {job.company}
                  </h4>
                  
                  <ul className="space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-foreground/70 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 text-primary text-[10px]">●</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}