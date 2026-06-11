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

  return <HomeTemplate dict={dict} locale={locale} />;
}
