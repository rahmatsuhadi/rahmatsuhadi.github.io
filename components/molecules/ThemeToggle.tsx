"use client";

import React, { useEffect, useState } from "react";

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setMounted(true);
    // Check initial theme from localStorage or document class
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const isLight = document.documentElement.classList.contains("light-mode");
    
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light-mode");
      } else {
        document.documentElement.classList.remove("light-mode");
      }
    } else if (isLight) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "light") {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  if (!mounted) {
    // Return placeholder button with same dimensions to prevent layout shift during SSR/hydration
    return (
      <button
        className="w-10 h-10 border border-[color:var(--border-color)] text-[color:var(--text-secondary)] flex items-center justify-center cursor-pointer transition-all duration-200"
        aria-label="Toggle light and dark mode"
      >
        <i className="fas fa-moon text-sm"></i>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 border border-[color:var(--border-color)] text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--text-primary)] flex items-center justify-center cursor-pointer transition-all duration-200"
      aria-label="Toggle light and dark mode"
    >
      {theme === "dark" ? (
        <i className="fas fa-moon text-sm"></i>
      ) : (
        <i className="fas fa-sun text-sm"></i>
      )}
    </button>
  );
};
