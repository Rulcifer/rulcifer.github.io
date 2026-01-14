import { Github, Linkedin, Instagram, Heart } from "lucide-react";
import { FaDiscord, FaSteam } from "react-icons/fa";

// ... (Data socialLinks & footerLinks TETAP SAMA seperti sebelumnya) ...
const socialLinks = [
  { icon: Github, href: "https://github.com/Rulcifer", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sahrul-rafi-zulfitra-7a3bb6172/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sahrulrafii/",
    label: "Instagram",
  },
  {
    icon: FaDiscord,
    href: "https://discord.com/invite/M5AERFR",
    label: "Discord",
  },
  {
    icon: FaSteam,
    href: "https://steamcommunity.com/id/Rulcifer/",
    label: "Steam",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "mailto:sahrulrafizulfitra@gmail.com", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* --- 1. BAGIAN KIRI (DIGABUNG: LOGO + GIF) --- */}
          <div className="flex items-center gap-6 md:gap-8 order-1">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <a href="#" className="text-2xl font-bold tracking-tight group">
                SRZ
                <span className="text-primary group-hover:animate-pulse">
                  .
                </span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} Sahrul Rafi Zulfitra.{" "}
                <br className="md:hidden" />
                All rights reserved.
              </p>
            </div>

            <div className="hidden md:block">
              <img
                src="gif-footer/grim-reaper.gif"
                alt="Decoration"
                className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* --- 2. BAGIAN TENGAH (LINKS) --- */}
          <nav className="flex flex-wrap justify-center gap-6 order-2 md:absolute md:left-1/2 md:-translate-x-1/2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* --- 3. BAGIAN KANAN (SOSMED) --- */}
          <div className="flex items-center gap-3 order-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-full glass hover:bg-primary hover:text-white text-muted-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
