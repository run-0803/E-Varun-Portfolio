import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

// Next.js dynamic route component
export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  
  // Find the specific project based on the URL parameter
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Navigation */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-foreground/60 hover:text-primary transition-custom mb-12"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Header */}
        <div className="border-b border-border/50 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {project.description}
          </p>
          
          {/* Placeholder for future detailed content (images, architecture diagrams, etc.) */}
          <div className="mt-12 p-8 border border-border border-dashed rounded-xl flex items-center justify-center bg-surface/50">
            <p className="text-foreground/50 text-sm">
              Detailed technical breakdown and GitHub links can be added here.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}