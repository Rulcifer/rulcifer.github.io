import { Button } from "@/components/Button";
import { User, FolderKanban, Briefcase, Mail, Home } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

// Mobile bottom-bar items with icons
const mobileNavItems = [
  { href: "#hero", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view for auto-highlighting
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = mobileNavItems.map((item) => item.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveTab(index);
          }
        },
        { threshold: 0.35, rootMargin: "-10% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  // Update floating indicator position
  const updateIndicator = useCallback(() => {
    const tab = tabRefs.current[activeTab];
    if (tab) {
      const parent = tab.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      setIndicatorStyle({
        width: `${tabRect.width}px`,
        transform: `translateX(${tabRect.left - parentRect.left}px)`,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  // Resolve nav href: on homepage use anchor, on other pages link back to home
  const resolveHref = (hash) => {
    if (isHome) return hash;
    return `/${hash}`;
  };

  const handleMobileTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* ── Top Navbar (Desktop + mobile top bar) ── */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }  z-50`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight hover:text-primary"
          >
            Sahrul Rafi Zulfitra
            <span className="text-primary animate-blink">_</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  href={resolveHref(link.href)}
                  key={index}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a href={resolveHref("#contact")}>
              <Button size="sm">Contact Me</Button>
            </a>
          </div>
        </nav>
      </header>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav className="mobile-bottom-bar md:hidden" id="mobile-bottom-nav">
        {/* Floating active indicator pill */}
        <div
          className="mobile-tab-indicator"
          style={indicatorStyle}
        />

        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === index;

          return (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => handleMobileTabClick(index)}
              className={`mobile-tab-item ${isActive ? "mobile-tab-active" : ""}`}
            >
              <div className={`mobile-tab-icon-wrap ${isActive ? "mobile-tab-icon-active" : ""}`}>
                <Icon size={22} strokeWidth={isActive ? 2.2 : 1.6} />
              </div>
              <span className={`mobile-tab-label ${isActive ? "mobile-tab-label-show" : ""}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};
