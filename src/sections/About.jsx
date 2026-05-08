import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  const header = useScrollReveal();
  const heading = useScrollReveal();
  const text = useScrollReveal();
  const quote = useScrollReveal();
  const cards = useStaggerReveal(highlights.length, { staggerMs: 120 });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div
              ref={header.ref}
              className={`reveal reveal-up ${header.isVisible ? "revealed" : ""}`}
            >
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Professional Summary
              </span>
            </div>

            <h2
              ref={heading.ref}
              className={`text-4xl md:text-5xl font-bold leading-tight reveal reveal-up ${heading.isVisible ? "revealed" : ""}`}
              style={{ transitionDelay: "100ms" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-600 via-blue-400 to-blue-300">
                Building the future,
              </span>
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div
              ref={text.ref}
              className={`space-y-4 text-muted-foreground reveal reveal-up ${text.isVisible ? "revealed" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              <p>
                My journey into software engineering began with a deep curiosity
                for web architecture, which has evolved into a career focused on
                delivering high-quality digital products. My approach combines
                technical excellence with a keen eye for design and user
                experience.
              </p>
              <p>
                When I'm not coding, I am actively exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <div
              ref={quote.ref}
              className={`glass rounded-2xl p-6 glow-border reveal reveal-scale ${quote.isVisible ? "revealed" : ""}`}
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div ref={cards.ref} className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`highlight-card glass p-6 rounded-2xl reveal reveal-scale ${
                  cards.visibleItems[idx] ? "revealed" : ""
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="highlight-icon w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
