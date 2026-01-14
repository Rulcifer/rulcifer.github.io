import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  // 1. TOKO KERAMIK (Project Paling Kompleks & Fullstack Modern)
  {
    title: "TokoKeramik.com",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>Developed a full-stack e-commerce platform from scratch.</li>
        <li>
          <span className="text-primary font-medium">Key Feature:</span> Built
          an interactive tile calculator with canvas visualizer to help
          customers estimate needs.
        </li>
        <li>
          Implemented SEO strategies (GSC & Analytics) boosting organic traffic.
        </li>
        <li>Optimized backend API with NestJS for fast product filtering.</li>
      </ul>
    ),
    image: "/projects/pondok-keramik/toko-keramik-kalkulator.webp", // Ganti sesuai file di public
    tags: ["React", "NestJS", "Tailwind", "MariaDB", "VPS"],
    link: "https://tokokeramik.com/",
    github: "",
  },

  // 2. MAMONEY (Project SaaS/Admin Panel Modern)
  {
    title: "Mamoney Expense Tracker",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>
          Designed a personal finance tracker to monitor income & expenses.
        </li>
        <li>
          <span className="text-primary font-medium">Tech Highlight:</span>{" "}
          Utilized Filament for rapid admin panel development.
        </li>
        <li>
          Features interactive charts for financial reports and category
          breakdown.
        </li>
        <li>Streamlined data entry process for better user experience.</li>
      </ul>
    ),
    image: "/projects/mamoney/mamoney-transaksi.png",
    tags: ["Laravel", "Filament", "MySQL"],
    link: "#",
    github: "#",
  },

  // 3. AGCI MANAGEMENT CLASS (Project Sistem Informasi Kompleks)
  {
    title: "AGCI Management Class",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>
          Built a comprehensive LMS for managing classes, users, and companies.
        </li>
        <li>
          <span className="text-primary font-medium">Impact:</span> Automating
          student intake and project submission workflow.
        </li>
        <li>
          Integrated automated deployment pipeline via GitHub Actions to cPanel.
        </li>
        <li>
          Designed relational database schema for complex class scheduling.
        </li>
      </ul>
    ),
    image: "/projects/agci/agci-dashboard.png",
    tags: ["Laravel", "Bootstrap", "MySQL", "CI/CD"],
    link: "https://drive.google.com/thumbnail?id=1C46zT-Ag9nt8uTfAbe55oT0hpHxi-xMq&sz=w1000-h1000",
    github: "#",
  },

  // 4. LONDRIKAN (Project Bisnis Riil)
  {
    title: "Londrikan Management",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>
          Web-based laundry management system with real-time status tracking.
        </li>
        <li>
          <span className="text-primary font-medium">Feature:</span> Tenant
          management system allowing multi-outlet support.
        </li>
        <li>
          Integrated payment gateway API for seamless online transactions.
        </li>
        <li>
          Deployed on secure Linux VPS with optimized Nginx configuration.
        </li>
      </ul>
    ),
    image: "/projects/londrikan/londrikan-dashboard.png",
    tags: ["Laravel", "Stisla", "VPS (Ubuntu)", "Payment Gateway"],
    link: "https://drive.google.com/thumbnail?id=1zWMKSi_1EcY_Yfu_3id76-Fu3CeRDt_0&sz=w1000-h1000",
    github: "#",
  },

  // 5. BISNIS KITA BLOG (Project Content Platform)
  {
    title: "Bisnis Kita Blog",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>Developed a multi-author blogging platform for business news.</li>
        <li>
          <span className="text-primary font-medium">Role System:</span>{" "}
          Distinct dashboards for Admin, Author, and Readers.
        </li>
        <li>Implemented content moderation workflow for quality assurance.</li>
        <li>Responsive frontend design ensuring high engagement on mobile.</li>
      </ul>
    ),
    image: "/projects/agci-bisniskita/agci-bisniskita-artikel.png",
    tags: ["Angular", "Laravel", "Bootstrap"],
    link: "https://drive.google.com/thumbnail?id=1EqzHqgdb3ez1un9CLOzfMNege5Tc36sJ&sz=w1000-h1000",
    github: "#",
  },

  // 6. MANAJEMEN RISIKO SPBE (Project Pemerintahan/Enterprise)
  {
    title: "SPBE Risk Management",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>
          Digitized manual risk management process (Excel) into a web app.
        </li>
        <li>
          <span className="text-primary font-medium">Automation:</span>{" "}
          Auto-calculate risk priority based on input metrics.
        </li>
        <li>
          Replaced manual WhatsApp reporting with a centralized dashboard.
        </li>
        <li>
          Added automated email notifications for handling plan schedules.
        </li>
      </ul>
    ),
    image: "/projects/manrisk-spbe/manrisk-spbe-pakta-integritas.png",
    tags: ["Laravel", "NodeJS", "jQuery", "MySQL"],
    link: "https://drive.google.com/thumbnail?id=1JxPi-vTTIRJL8pc8IpSSEDSYAaDx4rzE&sz=w1000-h1000",
    github: "#",
  },

  // 7. POHON PERINDANG (Company Profile & SEO)
  {
    title: "Pohon Perindang Profile",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>Revamped company website to improve online brand presence.</li>
        <li>
          <span className="text-primary font-medium">Result:</span> Increased
          product visibility through SEO-friendly structure.
        </li>
        <li>Developed a streamlined ordering inquiry system for customers.</li>
        <li>
          Designed brand assets and logo to strengthen corporate identity.
        </li>
      </ul>
    ),
    image: "/projects/pohon-perindang/pohon-perindang-service.png",
    tags: ["Wordpress", "SEO", "Adobe XD"],
    link: "https://www.pohonperindang.com",
    github: "#",
  },

  // 8. DUNIA TANDON (Catalog Website)
  {
    title: "Dunia Tandon Catalog",
    description: (
      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
        <li>
          Product catalog website with comparison features for water tanks.
        </li>
        <li>Managed VPS deployment with SSL configuration for security.</li>
        <li>
          Integrated GSC & Analytics to monitor user behavior and traffic.
        </li>
      </ul>
    ),
    image: "/projects/dunia-tandon/dunia-tandon-compare.png",
    tags: ["Wordpress", "Elementor", "VPS"],
    link: "https://duniatandon.com/",
    github: "#",
  },
];

export const Projects = () => {
  return (
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col h-full"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all transform hover:scale-110"
                      title="Visit Website"
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
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowUpRight
                        className="w-5 h-5 
                      text-muted-foreground group-hover:text-primary
                       group-hover:translate-x-1 
                       group-hover:-translate-y-1 transition-all"
                      />
                    </a>
                  )}
                </div>

                {/* Description - rendered as bullet points */}
                <div className="mb-6 flex-grow">{project.description}</div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 rounded-md bg-surface/50 text-xs font-medium border border-white/10 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          {/* Bungkus tombol dengan tag <a> */}
          <a
            href="https://github.com/Rulcifer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <AnimatedBorderButton>
              View More Projects on GitHub
              {/* Hapus href dari sini, biarkan jadi icon saja */}
              <Github className="w-5 h-5 ml-2" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
