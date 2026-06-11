import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "devicon/devicon.min.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahmat Suhadi | Full Stack Developer",
  description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
  keywords: "Rahmat Suhadi, full stack developer, frontend developer, web developer, portfolio, React.js, Next.js, JavaScript, Tailwind CSS, Yogyakarta, Indonesia",
  authors: [{ name: "Rahmat Suhadi" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "http://mattz.my.id/",
    languages: {
      id: "http://mattz.my.id/id",
      en: "http://mattz.my.id/en",
    },
  },
  openGraph: {
    type: "website",
    url: "http://mattz.my.id/",
    title: "Rahmat Suhadi | Full Stack Developer",
    description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
    images: [{ url: "http://mattz.my.id/profile/me_no_exif.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahmat Suhadi | Full Stack Developer",
    description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
    images: ["http://mattz.my.id/profile/me_no_exif.jpg"],
  },
};

// Next.js static params untuk Locale routes
export async function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
