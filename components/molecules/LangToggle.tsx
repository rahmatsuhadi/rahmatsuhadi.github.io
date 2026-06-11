"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface LangToggleProps {
  currentLocale: string;
}

export const LangToggle: React.FC<LangToggleProps> = ({ currentLocale }) => {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "id" ? "en" : "id";
    
    // Simpan posisi scroll saat ini
    const currentScrollY = window.scrollY;
    
    // Ganti segment bahasa pada pathname saat ini
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const newPath = segments.join("/");

    // Simpan di Cookie & arahkan ke halaman baru dengan atribut SameSite=Lax untuk keamanan cookie
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax; Secure`;
    
    // Simpan scroll position di sessionStorage sebelum navigasi
    sessionStorage.setItem('scrollPosition', currentScrollY.toString());
    
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-10 h-10 border border-[color:var(--border-color)] text-[color:var(--text-secondary)] hover:text-[color:var(--bg-color)] hover:bg-[color:var(--accent-primary)] hover:border-[color:var(--accent-primary)] font-heading font-semibold text-sm flex items-center justify-center cursor-pointer transition-all duration-200"
      aria-label="Toggle language"
    >
      {currentLocale.toUpperCase()}
    </button>
  );
};
