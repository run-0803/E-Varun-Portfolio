import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto w-full">
      <Hero />
      <Experience />
      <Education />
      <Projects />
      {/* Newly added component */}
      <Certifications /> 
      <Contact />
    </main>
  );
}