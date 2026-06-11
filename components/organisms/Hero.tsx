import React, { useEffect, useState } from "react";
import { CustomImage } from "../atoms/CustomImage";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import Link from "next/link";

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
          <Text as="p" className="font-semibold text-[color:var(--accent-primary)] mb-4 text-sm tracking-widest uppercase">
            {dict["hero.intro"]}
          </Text>
          <Text as="h1" variant="heading-1" className="mb-4">
            Rahmat Suhadi
          </Text>
          <Text as="h2" className="text-2xl font-light text-[color:var(--text-secondary)] mb-8">
            <span>{dict["hero.typingPrefix"]}</span>
            <span className="font-semibold text-[color:var(--text-primary)] border-b-2 border-[color:var(--accent-primary)] pb-0.5 min-h-[1.5em] inline-block">
              {typingText}
            </span>
          </Text>
          <Text as="p" variant="body" className="mb-10 max-w-[480px] mx-auto md:mx-0">
            {dict["hero.summary"]}
          </Text>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button href="#projects" variant="primary">
              <span>{dict["hero.cta.work"]}</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Button>
            <Button
              as={Link}
              href="/profile/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <i className="fa-solid fa-download"></i>
              <span>{dict["hero.cta.cv"]}</span>
            </Button>
            <Button
              as={Link}
              href="https://github.com/rahmatsuhadi"
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              ariaLabel="GitHub"
            >
              <i className="fa-brands fa-github text-lg"></i>
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/rahmat-suhadi"
              target="_blank"
              rel="noopener noreferrer"
              variant="icon"
              ariaLabel="LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-lg"></i>
            </Button>
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
              sizes="(max-width: 768px) 300px, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
