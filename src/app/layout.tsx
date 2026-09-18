import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getOrganizationJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "طراحی سایت",
    "توسعه وب‌اپلیکیشن",
    "توسعه Next.js",
    "آژانس طراحی وب",
    "استودیو وبولد",
    "طراحی UI/UX",
    "سئو فنی",
    "پرفورمنس لایت‌هاوس",
  ],
  authors: [{ name: "Webold Studio", url: siteConfig.url }],
  creator: "Webold Studio",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationJsonLd();

  return (
    <html lang="fa" dir="rtl" className="dark bg-[#0B0D13] text-[#EEF2F6]">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0D13] text-[#EEF2F6] flex flex-col font-sans antialiased selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
