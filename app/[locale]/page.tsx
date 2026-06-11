import React from "react";
import { HomeTemplate } from "../../components/templates/HomeTemplate";
import { notFound } from "next/navigation";

// Memuat translation di server (SSR)
async function getDictionary(locale: string) {
  try {
    const dict = await import(`../../locales/${locale}.json`);
    return dict.default;
  } catch (error) {
    return null;
  }
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (locale !== "id" && locale !== "en") {
    notFound();
  }

  const dict = await getDictionary(locale);
  if (!dict) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rahmat Suhadi",
    "jobTitle": "Full Stack Developer",
    "url": `http://mattz.my.id/${locale}`,
    "image": "http://mattz.my.id/profile/me-ra.webp",
    "sameAs": [
      "https://github.com/rahmatsuhadi",
      "https://www.linkedin.com/in/rahmat-suhadi",
      "https://www.instagram.com/m.matt_/"
    ],
    "description": locale === "en" 
      ? "Portfolio of Rahmat Suhadi, a Full Stack Web Developer specializing in React, Next.js, and modern UI/UX."
      : "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yogyakarta",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "Nuxt.js",
      "Laravel",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Docker",
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeTemplate dict={dict} locale={locale} />
    </>
  );
}
