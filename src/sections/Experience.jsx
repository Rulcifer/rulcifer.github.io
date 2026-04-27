import { useState } from "react";
import { X } from "lucide-react";

const experiences = [
  {
    period: "Oct 2025 – Now",
    role: "Web Developer (Technical SEO Specialist)",
    company: "Top4 Digital Marketing",
    description:
      "Developed professional company profile websites using WordPress. Engineered robust tracking solutions, implemented advanced SEO schemas, and built Shopify pages and EDMs.",
    detailedHighlights: [
      "Conducted comprehensive foundational SEO audits for onboarding clients to identify technical vulnerabilities, structural issues, and areas for strategic growth.",
      "Developed multiple professional company profile websites using WordPress, focusing on site speed optimization and structural tag hierarchy.",
      "Implemented automated page generation through custom PHP shortcodes to improve workflow efficiency.",
      "Engineered robust tracking solutions using GTM, Google Analytics, Google Search Console, Meta Pixel, and Google Ads tags to optimize data collection and campaign performance.",
      "Implemented Schema and FAQ Schema markup for advanced SEO enhancements and better search visibility.",
      "Executed EDM (Electronic Direct Mail) slicing from Figma designs directly into Shopify EDM templates.",
      "Utilized Shopify for building and customizing landing pages, and providing interactive page previews to clients."
    ],
    technologies: [
      "Wordpress",
      "Elementor",
      "Cornerstone",
      "Avada",
      "Shopify",
      "Schema Markup",
      "Google Tag Manager",
      "Google Analytics",
      "Google Search Console",
      "Meta Pixel",
      "Google Ads",
      "React TSX",
      "Nest JS",
      "Tailwind CSS",
      "MySQL",
      "PHP (Custom Shortcodes)",
      "Screaming Frog SEO",
      "CI/CD (Git)",
      "Kentico",
      "Nginx",
      "Docker",
    ],
    current: true,
  },

  {
    period: "Feb 2025 – Aug 2025",
    role: "Software Engineer",
    company: "Pondok Keramik",
    description:
      "Led full-cycle development of e-commerce platforms using React & NestJS. Managed server infrastructure (VPS/Ubuntu), implemented CI/CD pipelines, and optimized SEO & performance metrics.",
    technologies: [
      "Wordpress",
      "Elementor",
      "React.js",
      "NestJS",
      "Prisma",
      "MariaDB",
      "CI/CD (Git)",
      "Nginx",
      "VPS",
    ],
    current: true,
  },

  {
    period: "May 2024 – Dec 2024",
    role: "Fullstack Developer",
    company: "PT. Alamraya Sebar Barokah",
    description:
      "Developed key internal systems including a blog platform (BisnisKita) and class management system (AGCI) using Laravel & Angular. Collaborated on database design and deployed apps via cPanel.",
    technologies: ["Laravel", "Angular", "MySQL", "REST API", "cPanel"],
    current: false,
  },

  {
    period: "Oct 2024 – Dec 2024",
    role: "Fullstack Developer (Project)",
    company: "Laundry Permata",
    description:
      "Built a comprehensive laundry management system handling orders, tenants, and payments. Configured production VPS environment for deployment.",
    technologies: ["Laravel", "MySQL", "VPS", "Payment Gateway"],
    current: false,
  },

  {
    period: "Sep 2023 – Oct 2023",
    role: "Front-End Engineer (Project)",
    company: "1010-Group",
    description:
      "Revamped company website frontend to improve UI/UX and visual appeal using modern layout strategies.",
    technologies: ["HTML", "CSS", "Blade", "JavaScript"],
    current: false,
  },

  {
    period: "Mar 2023 – Jun 2023",
    role: "Web Developer (Project)",
    company: "UD. Pohon Perindang",
    description:
      "Developed company profile website and ordering system using WordPress. Designed brand identity assets including logo.",
    technologies: ["WordPress", "Elementor", "SEO", "Branding"],
    current: false,
  },

  {
    period: "Sep 2022 – Mar 2023",
    role: "Web Developer Intern",
    company: "Diskominfo Gresik",
    description:
      "Transforming manual Excel-based risk management into a web-based system (Laravel). Developed automated risk scoring logic and dashboard reporting features.",
    technologies: ["Laravel", "MySQL", "jQuery", "Node.js"],
    current: false,
  },
];

export const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
      h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, delivering robust software
            solutions from government agencies to enterprise clients.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                >
                  <div
                    onClick={() => setSelectedExp(exp)}
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 group`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <span className="text-xs text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click for details ↗
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="fixed inset-0"
            onClick={() => setSelectedExp(null)}
          ></div>
          <div className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedExp.role}
                </h3>
                <p className="text-lg text-primary mt-1">
                  {selectedExp.company} <span className="text-muted-foreground text-sm ml-2">({selectedExp.period})</span>
                </p>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                    Overview
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedExp.description}
                  </p>
                </div>

                {selectedExp.detailedHighlights && selectedExp.detailedHighlights.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {selectedExp.detailedHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-background border border-white/5 text-xs rounded-lg text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
