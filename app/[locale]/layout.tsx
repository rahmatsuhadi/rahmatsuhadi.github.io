import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "../globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Rahmat Suhadi | Full Stack Developer",
  description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
  keywords: "Rahmat Suhadi, full stack developer, frontend developer, web developer, portfolio, React.js, Next.js, JavaScript, Tailwind CSS, Yogyakarta, Indonesia",
  authors: [{ name: "Rahmat Suhadi" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://rahmatsuhadi.github.io/",
  },
  openGraph: {
    type: "website",
    url: "https://rahmatsuhadi.github.io/",
    title: "Rahmat Suhadi | Full Stack Developer",
    description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
    images: [{ url: "https://rahmatsuhadi.github.io/profile/me_no_exif.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahmat Suhadi | Full Stack Developer",
    description: "Portofolio Rahmat Suhadi, Full Stack Web Developer spesialis React, Next.js, dan modern UI/UX.",
    images: ["https://rahmatsuhadi.github.io/profile/me_no_exif.jpg"],
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
      <head>
        {/* CDN Link untuk FontAwesome dan Devicons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          precedence="default"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          precedence="default"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
