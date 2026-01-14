import { Button } from "@/components/Button";
import { useState, useMemo } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Github,
  Linkedin,
  Download,
  Instagram,
  X, // <-- Tambah icon X untuk tombol close
  Layers, // <-- Icon untuk tombol skills
} from "lucide-react";
import { FaDiscord, FaSteam } from "react-icons/fa";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// --- 1. DATA SKILL YANG DIKATEGORIKAN ---
const skillCategories = {
  "Main Stack (Expert)": [
    "React",
    "Nest.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "PostgreSQL",
  ],
  "Other Frameworks": [
    "Laravel",
    "Filament",
    "Angular",
    "Express.js",
    "Flutter",
    "Java",
    "jQuery",
  ],
  "Database & Tools": [
    "MySQL",
    "MongoDB",
    "MariaDB",
    "Sequelize",
    "Docker",
    "Git",
    "Postman",
    "cPanel",
    "Ubuntu",
  ],
  Design: ["Figma", "Adobe XD", "Canva"],
};

const allSkills = [
  "React",
  "Nest.js",
  "TypeScript",
  "Laravel",
  "Node.js",
  "Tailwind",
  "Docker",
  "PostgreSQL",
  "Flutter",
  "Figma",
];

export const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false); // <-- State untuk Modal Skill
  const email = "sahrulrafizulfitra@gmail.com";

  // UseMemo untuk background dots (Optimized)
  const randomDots = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  const handleContact = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
      setIsCopied(false);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* --- BACKGROUND --- */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {randomDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#0096FF",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
                  Crafting
                </span>{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60">
                  experiences with
                </span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hai, i am Sahrul Rafi Zulfitra — a software engineer
                specializing in React, Nest.js, and TypeScript. I build
                scalable, performant web applications that users love.
              </p>
            </div>
            {/* 👆 BATAS PERUBAHAN JUDUL 👆 */}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={handleContact}
                className="min-w-[170px]"
              >
                {isCopied ? (
                  <>
                    Email Copied! <Check className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Contact Me <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
              <a
                href="/cv/cv-sahrul-rafi-zulfitra-english.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Rulcifer" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sahrul-rafi-zulfitra-7a3bb6172/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sahrulrafii/",
                },
                { icon: FaDiscord, href: "https://discord.com/invite/M5AERFR" },
                {
                  icon: FaSteam,
                  href: "https://steamcommunity.com/id/Rulcifer/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.jpg"
                  alt="Sahrul Rafi Zulfitra"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SKILLS SECTION (Preview) --- */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <div className="flex justify-center mb-6">
            {/* Tombol Trigger untuk Membuka Modal */}
            <button
              onClick={() => setIsSkillsOpen(true)}
              className="group flex items-center gap-2 px-6 py-2 rounded-full glass hover:bg-primary/10 transition-all duration-300 border border-white/10 hover:border-primary/50"
            >
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Technologies I work with
              </span>
              <Layers className="w-4 h-4 text-primary animate-bounce" />
            </button>
          </div>

          {/* Marquee Effect */}
          <div
            className="relative overflow-hidden cursor-pointer"
            onClick={() => setIsSkillsOpen(true)}
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee hover:pause">
              {[...allSkills, ...allSkills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* --- SKILLS MODAL / POPUP --- */}
      {isSkillsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setIsSkillsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl glass border border-white/10 rounded-3xl p-8 md:p-12 animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsSkillsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-2 text-center">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              My coding arsenal and tools
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Mapping Skill Categories */}
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary border-b border-white/10 pb-2 inline-block">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-muted-foreground hover:text-white hover:border-primary/30 transition-all hover:scale-105 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button size="sm" onClick={() => setIsSkillsOpen(false)}>
                Close List
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
