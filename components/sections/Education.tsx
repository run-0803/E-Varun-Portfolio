"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

export default function Education() {
  const skills = [
    "Python", "C", "SQL", "MySQL", "MongoDB", 
    "Django", "Django REST Framework", 
    "TensorFlow", "Keras", "PyTorch", 
    "Pandas", "NumPy", "scikit-learn", 
    "Git", "AWS (EC2, S3)"
  ];

  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Education</h2>
            </div>
            
            <div className="bg-background rounded-xl border border-border p-6 shadow-sm">
              <div className="text-sm font-medium text-primary mb-2">
                Dec 2022 - Jul 2026
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                B.E. in Electronics and Communication Engineering
              </h3>
              <h4 className="text-lg text-foreground/80 mb-4">
                HKBK College Of Engineering | Bangalore, KA
              </h4>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                GPA: 8.71/10
              </div>
            </div>
          </motion.div>

          {/* Skills Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Code2 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-custom cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}