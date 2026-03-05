import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Github, ChevronLeft, ChevronRight, X } from "lucide-react";
import { projects } from "@/data/projects.jsx";
import { ImageSlider } from "@/components/ImageSlider";
import { SEO } from "@/components/SEO";

const CATEGORIES = ["All", "Web", "Mobile", "Systems"];
const ITEMS_PER_PAGE = 15;

import { ProjectModal } from "@/components/ProjectModal.jsx";

/* ──────────────────────────────────────────────
   Projects Gallery Page
   ────────────────────────────────────────────── */
export const ProjectsPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProject, setSelectedProject] = useState(null);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter projects
    const filtered = useMemo(() => {
        if (activeFilter === "All") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const paged = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleFilter = (cat) => {
        setActiveFilter(cat);
        setCurrentPage(1);
    };

    const closeModal = useCallback(() => setSelectedProject(null), []);

    // Get first image from image field (could be string or array)
    const getThumb = (img) => (Array.isArray(img) ? img[0] : img);

    return (
        <>
            <SEO
                title="Project Archive | Sahrul Rafi"
                description="A comprehensive gallery of my professional works, web applications, and technical experiments across Web, Mobile, and Systems domains."
            />
            <section className="min-h-screen pt-28 pb-20 relative overflow-hidden">
                {/* Background glows */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Back link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    {/* ─── Hero Section ─── */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-400 to-blue-300">
                                Project
                            </span>{" "}
                            <span className="font-serif italic font-normal bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
                                Archive
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground animate-fade-in animation-delay-100">
                            A collection of my professional works and technical experiments.
                        </p>
                    </div>

                    {/* ─── Filter Bar ─── */}
                    <div className="flex justify-center gap-2 mb-14 animate-fade-in animation-delay-200 flex-wrap">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleFilter(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                  ${activeFilter === cat
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                        : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ─── Uniform Grid ─── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {paged.map((project, idx) => (
                            <div
                                key={project.title}
                                onClick={() => setSelectedProject(project)}
                                className="group gallery-card glass rounded-2xl overflow-hidden flex flex-col cursor-pointer animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 60}ms` }}
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
                                        {project.tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md bg-surface/60 text-[11px] font-medium border border-white/8 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 4 && (
                                            <span className="px-2.5 py-1 rounded-md bg-surface/60 text-[11px] font-medium text-muted-foreground/60">
                                                +{project.tags.length - 4}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ─── Empty State ─── */}
                    {paged.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">
                                No projects found in this category yet.
                            </p>
                        </div>
                    )}

                    {/* ─── Pagination ─── */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-14 animate-fade-in">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="p-2.5 rounded-full glass text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer
                    ${currentPage === page
                                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                                            : "glass text-muted-foreground hover:text-foreground hover:border-primary/40"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="p-2.5 rounded-full glass text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ─── Modal ─── */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
};
