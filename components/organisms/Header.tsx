"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "../atoms/Logo";
import { ThemeToggle } from "../molecules/ThemeToggle";
import { LangToggle } from "../molecules/LangToggle";

interface HeaderProps {
  dict: any;
  locale: string;
}

export const Header: React.FC<HeaderProps> = ({ dict, locale }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Floating Navbar logic untuk layar mobile (<= 768px)
      if (window.innerWidth <= 768) {
        if (window.scrollY > 150) {
          setShowFloatingNav(true);
        } else {
          setShowFloatingNav(false);
        }
      } else {
        setShowFloatingNav(false);
      }

      // Active Section Highlight logic
      const sections = document.querySelectorAll("section[id]");
      const headerElement = document.querySelector("header");
      const headerHeight = headerElement ? headerElement.offsetHeight : 80;
      let currentSection = "hero";

      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop;
        if (window.scrollY >= top - headerHeight - 100) {
          currentSection = section.getAttribute("id") || "hero";
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    const headerElement = document.querySelector("header");
    const headerHeight = headerElement ? headerElement.offsetHeight : 80;

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: dict["nav.about"], icon: "fas fa-user" },
    { id: "projects", label: dict["nav.projects"], icon: "fas fa-layer-group" },
    { id: "experience", label: dict["nav.experience"], icon: "fas fa-briefcase" },
    { id: "contact", label: dict["nav.contact"], icon: "fas fa-envelope" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 w-full h-[80px] z-[1000] bg-[color:var(--bg-color)]/80 backdrop-blur-md border-b border-[color:var(--border-color)] flex items-center">
        <div className="max-w-[1024px] mx-auto px-6 w-full flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[color:var(--text-primary)]"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Nav Controls */}
          <div className="flex items-center gap-4">
            <LangToggle currentLocale={locale} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Navigation */}
      <nav
        className={`md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] h-[65px] bg-[color:var(--bg-color)]/80 backdrop-blur-md border border-[color:var(--border-color)] rounded-[40px] flex justify-around items-center px-4 z-[1000] shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 ${
          showFloatingNav
            ? "translate-y-0 scale-100 opacity-100 pointer-events-auto"
            : "translate-y-[100px] scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`flex flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors duration-200 ${
              activeSection === item.id
                ? "text-[color:var(--accent-primary)]"
                : "text-[color:var(--text-secondary)]"
            }`}
          >
            <i className={`${item.icon} text-lg`}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};
