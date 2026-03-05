import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projects } from "@/data/projects.jsx";
import { ProjectModal } from "@/components/ProjectModal.jsx";

// Show only first 4 projects on the landing page
const featuredProjects = projects.slice(0, 4);

// Get first image from image field (could be string or array)
const getThumb = (img) => (Array.isArray(img) ? img[0] : img);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Featured Work
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-400 to-blue-300">
                Projects that
              </span>

              <span className="font-serif italic font-normal text-white bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
                {" "}
                make an impact.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200">
              A selection of my recent work, highlighting effective solutions and
              technical expertise.
            </p>
          </div>

          {/* Uniform Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="group gallery-card glass rounded-2xl overflow-hidden flex flex-col animate-fade-in cursor-pointer"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={getThumb(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-70 pointer-events-none" />

                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {project.galleryDescription}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-surface/60 text-[11px] font-medium border border-white/8 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-2.5 py-1 rounded-md bg-surface/60 text-[11px] font-medium text-muted-foreground/60">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All CTA */}
          <div className="text-center mt-16 animate-fade-in animation-delay-500">
            <Link to="/projects" className="inline-block">
              <AnimatedBorderButton>
                See All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedBorderButton>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Modal ─── */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};
