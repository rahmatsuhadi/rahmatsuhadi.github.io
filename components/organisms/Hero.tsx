"use client";

import React, { useEffect, useState } from "react";
import { CustomImage } from "../atoms/CustomImage";

interface HeroProps {
  dict: any;
  locale: string;
}

export const Hero: React.FC<HeroProps> = ({ dict, locale }) => {
  const [typingText, setTypingText] = useState("");
  
  useEffect(() => {
    const typingData: Record<string, string[]> = {
      id: ["Pengalaman Digital", "Aplikasi Web Modern", "Solusi Skalabel"],
      en: ["Digital Experiences", "Modern Web Apps", "Scalable Solutions"],
    };

    const texts = typingData[locale] || typingData["id"];
    let textIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 100;
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentFullText = texts[textIdx];

      if (isDeleting) {
        setTypingText(currentFullText.substring(0, charIdx - 1));
        charIdx--;
        speed = 50;
      } else {
        setTypingText(currentFullText.substring(0, charIdx + 1));
        charIdx++;
        speed = 100;
      }

      if (!isDeleting && charIdx === currentFullText.length) {
        isDeleting = true;
        speed = 2000;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        textIdx = (textIdx + 1) % texts.length;
        speed = 500;
      }

      timer = setTimeout(handleTyping, speed);
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [locale]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-[120px] pb-[60px] relative">
      <div className="max-w-[1024px] mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-center text-center md:text-left">
        {/* Kolom Teks */}
        <div className="animate-on-scroll">
          <p className="font-semibold text-[color:var(--accent-primary)] mb-4 text-sm tracking-widest uppercase">
            {dict["hero.intro"]}
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[color:var(--text-primary)] leading-tight">
            Rahmat Suhadi
          </h1>
          <h2 className="text-2xl font-light text-[color:var(--text-secondary)] mb-8">
            <span>{dict["hero.typingPrefix"]}</span>
            <span className="font-semibold text-[color:var(--text-primary)] border-b-2 border-[color:var(--accent-primary)] pb-0.5 min-h-[1.5em] inline-block">
              {typingText}
            </span>
          </h2>
          <p className="text-lg text-[color:var(--text-secondary)] mb-10 max-w-[480px] leading-relaxed mx-auto md:mx-0">
            {dict["hero.summary"]}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 border border-[color:var(--text-primary)] bg-[color:var(--text-primary)] text-[color:var(--bg-color)] font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_14px_0_var(--accent-glow)] hover:bg-[color:var(--accent-primary)] hover:border-[color:var(--accent-primary)] hover:text-black hover:shadow-[0_6px_20px_0_var(--accent-glow)] hover:-translate-y-0.5"
            >
              <span>{dict["hero.cta.work"]}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href="/profile/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[color:var(--border-color)] bg-transparent text-[color:var(--text-primary)] font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-download"></i>
              <span>{dict["hero.cta.cv"]}</span>
            </a>
            <a
              href="https://github.com/rahmatsuhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-[color:var(--border-color)] bg-transparent text-[color:var(--text-primary)] flex items-center justify-center transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rahmat-suhadi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-[color:var(--border-color)] bg-transparent text-[color:var(--text-primary)] flex items-center justify-center transition-all duration-300 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:bg-[color:var(--accent-primary)]/5 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-lg"></i>
            </a>
          </div>
        </div>

        {/* Kolom Gambar */}
        <div className="flex justify-center md:order-none -order-1 mb-8 md:mb-0 animate-on-scroll">
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] overflow-hidden grayscale hover:grayscale-0 transition-[filter] duration-500 rounded-none border border-[color:var(--border-color)]">
            <CustomImage
              src="/profile/me-ra.webp"
              alt="Rahmat Suhadi"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
