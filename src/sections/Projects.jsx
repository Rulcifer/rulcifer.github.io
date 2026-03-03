import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projects = [
  // NEW PROJECT 1: Boom Real Estate
  {
    title: "Boom Real Estate",
    className: "",
    image: "/projects/pohon-perindang/pohon-perindang-service.png", // using an existing image as placeholder
    tags: ["WordPress", "PHP", "Tailwind CSS", "Alpine.js", "Lucide Icons", "REAXML", "WP All Import", "Cron Jobs"],
    link: "#",
    github: "#",
    description: (
      <div className="space-y-4">
        <p className="text-sm text-foreground font-medium">
          Custom WordPress Real Estate Architecture with Automated REAXML Sync
        </p>
        <p className="text-sm text-muted-foreground/90">
          Built a high-performance real estate platform from scratch using a utility-first styling approach. The primary focus was performance optimization by eliminating dependencies on heavy page builders to achieve maximum PageSpeed scores.
        </p>
        <div className="pt-2">
          <p className="text-sm text-primary font-medium mb-2">Key Contributions:</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground/90">
            <li>
              <span className="text-foreground font-medium">Custom Theme Slicing:</span> Transformed the design from Tailwind CSS into a modular and reusable PHP WordPress structure.
            </li>
            <li>
              <span className="text-foreground font-medium">Automated Data Pipeline:</span> Integrated LockedOn (REAXML) data feed using WP All Import and Cron Jobs to automatically sync thousands of property records.
            </li>
            <li>
              <span className="text-foreground font-medium">Lightweight Stack:</span> Implemented Alpine.js for UI interactions and Lucide Icons for crisp yet lightweight visual assets.
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  // NEW PROJECT 2: Realty One (With Code Block)
  {
    title: "Realty One",
    image: "/projects/londrikan/londrikan-dashboard.png", // using existing image as placeholder
    tags: ["WordPress", "Advanced PHP Logic", "Hook-based Sync", "Regex Data Mapping", "Server-side File Management"],
    link: "#",
    github: "#",
    description: (
      <div className="space-y-4">
        <p className="text-sm text-foreground font-medium">
          Advanced Data Normalization & Storage Management for Real Estate
        </p>
        <p className="text-sm text-muted-foreground/90">
          Developed advanced features for the Realty One platform focusing on Data Integrity and server efficiency. Handled inconsistent raw data from external feeds through a custom logic layer on the backend.
        </p>

        <div className="pt-2">
          <p className="text-sm text-primary font-medium mb-2">Technical Highlights (The "Works Great" Part):</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground/90">
            <li>
              <span className="text-foreground font-medium">Dynamic Data Transformation:</span> Utilized PHP Output Buffering and Regex to dynamically convert raw land area units (like "Square Metres") into standardized formats (m², Ha) on the frontend without altering the original database.
            </li>
            <li>
              <span className="text-foreground font-medium">Automated Feature Triggers:</span> Built conditional rendering logic for the Floor Plan feature based on data availability in the XML feed.
            </li>
            <li>
              <span className="text-foreground font-medium">Automated Storage Cleanup:</span> Implemented auto-cleanup scripts to delete property asset folders when data is deleted or set to private, ensuring optimal server storage efficiency.
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <p className="text-sm text-primary font-medium mb-3">The Logic (Backend Engineering):</p>
          <div className="rounded-lg overflow-hidden border border-white/10 text-xs">
            <SyntaxHighlighter
              language="php"
              style={vscDarkPlus}
              customStyle={{ margin: 0, padding: '1.5rem', background: 'rgba(0,0,0,0.5)', borderRadius: '0.5rem' }}
            >
              {`/**
 * 1. GLOBAL MAPPING FUNCTION (Data Normalization)
 */
function apply_custom_ere_property_size_formatting( $size ) {
    if ( empty( $size ) ) return '';
    $unit_mapping = [
        'square meter[s]?' => 'm²',
        'm2'               => 'm²',
        'hectare[s]?'      => 'Ha',
        'acre[s]?'         => 'Ac',
    ];
    foreach ( $unit_mapping as $pattern => $replacement ) {
        $size = preg_replace("/\\\\b$pattern\\\\b/i", $replacement, $size);
    }
    return trim( $size );
}

/**
 * 2. AUTOMATIC TRIGGER FOR FLOOR PLAN FEATURES
 */
add_action('pmxi_saved_post', 'realty_one_sync_floor_plan_full', 10, 3);
function realty_one_sync_floor_plan_full($post_id, $xml_node, $is_update) {
    if (isset($xml_node->objects->floorplan) && !empty((string)$xml_node->objects->floorplan['url'])) {
        update_post_meta($post_id, 'real_estate_floors_enable', '1');
    }
}

/**
 * 3. AUTOMATED STORAGE CLEANUP ON DELETE
 */
add_action('before_delete_post', 'delete_property_upload_folder');
function delete_property_upload_folder($post_id) {
    if (get_post_type($post_id) !== 'property') return;
    $post = get_post($post_id);
    $upload_dir = wp_upload_dir();
    $dir = trailingslashit($upload_dir['basedir']) . 'properties/' . $post->post_name;
    if (file_exists($dir)) {
        // Recursive directory deletion logic...
    }
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-white/5">
          <p className="text-sm text-primary/80 font-serif italic">
            "Not only 'looks good', but also 'works great'."
          </p>
        </div>
      </div>
    ),
  },

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
    tags: ["React", "NestJS", "Tailwind", "MariaDB", "VPS", "CI/CD"],
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
    tags: ["Laravel", "Bootstrap", "MySQL", "CI/CD", "cPanel"],
    link: "#",
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
    link: "#",
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
    tags: ["Angular", "Laravel", "Bootstrap", "MySQL", "cPanel"],
    link: "#",
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
    link: "#",
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
    tags: [
      "Wordpress",
      "Elementor",
      "VPS",
      "SEO",
      "Google Analytics",
      "GSC",
      "CI/CD",
    ],
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

        {/* Projects Grid Container (Masonry) */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group glass rounded-2xl overflow-hidden animate-fade-in break-inside-avoid h-max inline-block w-full ${project.className || ''}`}
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
