import { NextRequest, NextResponse } from "next/server";

const locales = ["id", "en"];
const defaultLocale = "id";

function getLocale(request: NextRequest): string {
  // 1. Cek dari Cookie bahasa jika sebelumnya user telah menyetelnya manual
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Cek header Accept-Language browser
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Cari apakah preferensi pertama / utama mengandung 'en'
    const match = acceptLanguage.split(",")[0].toLowerCase();
    if (match.startsWith("en")) {
      return "en";
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Lewati file statis (public) dan assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // static files (.png, .webp, .pdf, .svg, .ico)
    pathname === "/favicon.ico"
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  // Deteksi locale dan redirect
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  const response = NextResponse.redirect(request.nextUrl);
  // Set cookie jika belum diset dengan SameSite Lax dan Secure agar mematuhi aturan cookie browser modern
  if (!request.cookies.has("locale")) {
    response.cookies.set("locale", locale, { path: "/", sameSite: "lax", secure: true });
  }
  
  return response;
}

export const config = {
  matcher: [
    // Jalankan middleware pada semua path kecuali statis & internal routes
    "/((?!_next|api|.*\\..*).*)",
  ],
};
