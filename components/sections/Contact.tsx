"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-[#1A1614] border border-[#2D2723] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-[#FDFBF7] mb-6 tracking-tight">Let's connect.</h2>
            <p className="text-[#B5B0A1] font-sans mb-10 leading-relaxed text-sm">
              Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you.
            </p>
            <div className="space-y-6 font-sans text-sm tracking-wide">
              <p className="flex flex-col gap-1">
                <span className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest">Email</span> 
                <span className="text-[#FDFBF7]">varunesarapu@gmail.com</span>
              </p>
              <p className="flex flex-col gap-1">
                <span className="text-[#D4AF37] uppercase text-xs font-bold tracking-widest">Location</span> 
                <span className="text-[#FDFBF7]">Bangalore, Karnataka</span>
              </p>
            </div>
          </div>

          <form className="relative z-10 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" className="w-full bg-[#0F0C0A] border border-[#2D2723] text-[#FDFBF7] placeholder-[#B5B0A1] rounded-lg px-5 py-4 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-[#0F0C0A] border border-[#2D2723] text-[#FDFBF7] placeholder-[#B5B0A1] rounded-lg px-5 py-4 font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors" />
            <textarea rows={4} placeholder="Message" className="w-full bg-[#0F0C0A] border border-[#2D2723] text-[#FDFBF7] placeholder-[#B5B0A1] rounded-lg px-5 py-4 resize-none font-sans text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"></textarea>
            <button type="submit" className="bg-[#D4AF37] text-[#0F0C0A] font-bold tracking-[0.1em] uppercase text-xs px-8 py-4 rounded-lg hover:bg-[#C9A66B] transition-all mt-2 w-full">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}