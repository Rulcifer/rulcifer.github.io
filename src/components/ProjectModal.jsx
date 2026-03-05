import { useEffect } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { ImageSlider } from "@/components/ImageSlider";

export const ProjectModal = ({ project, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-10 pb-10 px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Content */}
            <div
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-strong rounded-2xl animate-fade-in scrollbar-thin"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative overflow-hidden aspect-video rounded-t-2xl">
                    <ImageSlider images={project.image} alt={project.title}>
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 pointer-events-none" />

                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110"
                                    title="Visit Website"
                                    aria-label={`Visit ${project.title} website`}
                                >
                                    <ArrowUpRight className="w-6 h-6" />
                                </a>
                            )}
                            {project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110"
                                    title="View Code"
                                    aria-label={`View ${project.title} source code on GitHub`}
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </ImageSlider>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                        {project.link !== "#" && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                aria-label={`Visit ${project.title} website`}
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                    {/* Full Description */}
                    <div className="mb-8">{project.description}</div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                        {project.tags.map((tag, tagIdx) => (
                            <span
                                key={tagIdx}
                                className="px-3 py-1 rounded-md bg-surface/50 text-xs font-medium border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
