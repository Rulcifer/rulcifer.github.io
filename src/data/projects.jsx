import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ─── Gallery-only short descriptions (plain text) ───
const galleryDescriptions = {
    "Boom Real Estate":
        "Custom WordPress real estate platform with automated REAXML data sync pipeline via FeedSync & WP All Import. Built for maximum PageSpeed with utility-first CSS.",
    "Realty One":
        "Advanced data normalization & storage management for real estate. Dynamic unit conversion with Regex, automated floor plan triggers, and server cleanup scripts.",
    "TokoKeramik.com":
        "Full-stack e-commerce platform with interactive tile calculator & canvas visualizer. SEO-optimized with NestJS backend for fast product filtering.",
    "Mamoney Expense Tracker":
        "Personal finance tracker with Filament admin panel. Features interactive charts for financial reports and streamlined data entry.",
    "AGCI Management Class":
        "Comprehensive LMS for managing classes, users, and companies. Automated student intake with CI/CD deployment via GitHub Actions.",
    "Londrikan Management":
        "Web-based laundry management system with real-time tracking, multi-outlet tenant support, and integrated payment gateway.",
    "Bisnis Kita Blog":
        "Multi-author blogging platform with role-based dashboards (Admin, Author, Reader) and content moderation workflow.",
    "SPBE Risk Management":
        "Digitized government risk management from Excel to web app. Auto-calculates risk priority with email notifications.",
    "Pohon Perindang Profile":
        "Company website revamp with SEO-friendly structure, ordering inquiry system, and corporate brand identity design.",
    "Dunia Tandon Catalog":
        "Product catalog with comparison features. Managed VPS deployment with SSL, GSC & Analytics integration.",
};

// ─── Full project data ───
export const projects = [
    {
        title: "Boom Real Estate",
        category: "Web",
        image: [
            "/projects/re-boom/re-boom.jpg",
            "/projects/re-boom/re-boom-mapping-reaxml.png",
            "/projects/re-boom/re-boom-mapping-reaxml-2.png",
            "/projects/re-boom/re-boom-cron-job.png",
            "/projects/re-boom/re-boom-theme-custom.png",
            "/projects/re-boom/re-boom-theme-custom-2.png",
        ],
        tags: ["WordPress", "PHP", "Tailwind CSS", "Alpine.js", "REAXML", "FeedSync", "WP All Import", "Cron Jobs"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["Boom Real Estate"],
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
                            <span className="text-foreground font-medium">Third-Party Data Integration:</span> Engineered an automated pipeline to pull property data (XML) from LockedOn, process it through FeedSync, and seamlessly synchronize thousands of property records to WordPress using WP All Import and Cron Jobs.
                        </li>
                        <li>
                            <span className="text-foreground font-medium">Lightweight Stack:</span> Implemented Alpine.js for UI interactions and Lucide Icons for crisp yet lightweight visual assets.
                        </li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Realty One",
        category: "Web",
        image: [
            "/projects/re-realtyone/realtyone-list.png",
            "/projects/re-realtyone/realtyone-detail.png",
            "/projects/re-realtyone/realtyone-properties.png",
            "/projects/re-realtyone/realtyone-fieldfloor-visible.png",
            "/projects/re-realtyone/realtyone-fieldfloor-image.png",
        ],
        tags: ["WordPress", "Advanced PHP", "Hook-based Sync", "Regex", "Server-side File Mgmt"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["Realty One"],
        description: (
            <div className="space-y-4">
                <p className="text-sm text-foreground font-medium">
                    Advanced Data Normalization & Storage Management for Real Estate
                </p>
                <p className="text-sm text-muted-foreground/90">
                    Developed advanced features for the Realty One platform focusing on Data Integrity and server efficiency. Handled inconsistent raw data from external feeds through a custom logic layer on the backend.
                </p>
                <div className="pt-2">
                    <p className="text-sm text-primary font-medium mb-2">Technical Highlights:</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground/90">
                        <li>
                            <span className="text-foreground font-medium">Dynamic Data Transformation:</span> Utilized PHP Output Buffering and Regex to dynamically convert raw land area units into standardized formats.
                        </li>
                        <li>
                            <span className="text-foreground font-medium">Automated Feature Triggers:</span> Built conditional rendering logic for Floor Plan based on XML feed data.
                        </li>
                        <li>
                            <span className="text-foreground font-medium">Automated Storage Cleanup:</span> Auto-cleanup scripts to delete property asset folders on data deletion.
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
    {
        title: "TokoKeramik.com",
        category: "Web",
        image: "/projects/pondok-keramik/toko-keramik-kalkulator.webp",
        tags: ["React", "NestJS", "Tailwind", "MariaDB", "VPS", "CI/CD"],
        link: "https://tokokeramik.com/",
        github: "",
        galleryDescription: galleryDescriptions["TokoKeramik.com"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Developed a full-stack e-commerce platform from scratch.</li>
                <li>
                    <span className="text-primary font-medium">Key Feature:</span> Built an interactive tile calculator with canvas visualizer.
                </li>
                <li>Implemented SEO strategies (GSC & Analytics) boosting organic traffic.</li>
                <li>Optimized backend API with NestJS for fast product filtering.</li>
            </ul>
        ),
    },
    {
        title: "Mamoney Expense Tracker",
        category: "Systems",
        image: "/projects/mamoney/mamoney-transaksi.png",
        tags: ["Laravel", "Filament", "MySQL"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["Mamoney Expense Tracker"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Designed a personal finance tracker to monitor income & expenses.</li>
                <li>
                    <span className="text-primary font-medium">Tech Highlight:</span>{" "}
                    Utilized Filament for rapid admin panel development.
                </li>
                <li>Features interactive charts for financial reports and category breakdown.</li>
                <li>Streamlined data entry process for better user experience.</li>
            </ul>
        ),
    },
    {
        title: "AGCI Management Class",
        category: "Systems",
        image: "/projects/agci/agci-dashboard.png",
        tags: ["Laravel", "Bootstrap", "MySQL", "CI/CD", "cPanel"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["AGCI Management Class"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Built a comprehensive LMS for managing classes, users, and companies.</li>
                <li>
                    <span className="text-primary font-medium">Impact:</span> Automating student intake and project submission workflow.
                </li>
                <li>Integrated automated deployment pipeline via GitHub Actions to cPanel.</li>
                <li>Designed relational database schema for complex class scheduling.</li>
            </ul>
        ),
    },
    {
        title: "Londrikan Management",
        category: "Systems",
        image: "/projects/londrikan/londrikan-dashboard.png",
        tags: ["Laravel", "Stisla", "VPS (Ubuntu)", "Payment Gateway"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["Londrikan Management"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Web-based laundry management system with real-time status tracking.</li>
                <li>
                    <span className="text-primary font-medium">Feature:</span> Tenant management system allowing multi-outlet support.
                </li>
                <li>Integrated payment gateway API for seamless online transactions.</li>
                <li>Deployed on secure Linux VPS with optimized Nginx configuration.</li>
            </ul>
        ),
    },
    {
        title: "Bisnis Kita Blog",
        category: "Web",
        image: "/projects/agci-bisniskita/agci-bisniskita-artikel.png",
        tags: ["Angular", "Laravel", "Bootstrap", "MySQL", "cPanel"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["Bisnis Kita Blog"],
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
    },
    {
        title: "SPBE Risk Management",
        category: "Systems",
        image: "/projects/manrisk-spbe/manrisk-spbe-pakta-integritas.png",
        tags: ["Laravel", "NodeJS", "jQuery", "MySQL"],
        link: "#",
        github: "#",
        galleryDescription: galleryDescriptions["SPBE Risk Management"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Digitized manual risk management process (Excel) into a web app.</li>
                <li>
                    <span className="text-primary font-medium">Automation:</span>{" "}
                    Auto-calculate risk priority based on input metrics.
                </li>
                <li>Replaced manual WhatsApp reporting with a centralized dashboard.</li>
                <li>Added automated email notifications for handling plan schedules.</li>
            </ul>
        ),
    },
    {
        title: "Pohon Perindang Profile",
        category: "Web",
        image: "/projects/pohon-perindang/pohon-perindang-service.png",
        tags: ["Wordpress", "SEO", "Adobe XD"],
        link: "https://www.pohonperindang.com",
        github: "#",
        galleryDescription: galleryDescriptions["Pohon Perindang Profile"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Revamped company website to improve online brand presence.</li>
                <li>
                    <span className="text-primary font-medium">Result:</span> Increased product visibility through SEO-friendly structure.
                </li>
                <li>Developed a streamlined ordering inquiry system for customers.</li>
                <li>Designed brand assets and logo to strengthen corporate identity.</li>
            </ul>
        ),
    },
    {
        title: "Dunia Tandon Catalog",
        category: "Web",
        image: "/projects/dunia-tandon/dunia-tandon-compare.png",
        tags: ["Wordpress", "Elementor", "VPS", "SEO", "Google Analytics", "GSC", "CI/CD"],
        link: "https://duniatandon.com/",
        github: "#",
        galleryDescription: galleryDescriptions["Dunia Tandon Catalog"],
        description: (
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground/90">
                <li>Product catalog website with comparison features for water tanks.</li>
                <li>Managed VPS deployment with SSL configuration for security.</li>
                <li>Integrated GSC & Analytics to monitor user behavior and traffic.</li>
            </ul>
        ),
    },
];
