import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, MapPin, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-lime-600/15 dark:border-lime-400/10 bg-[#EBF2EC] dark:bg-[#050806] text-neutral-600 dark:text-neutral-400 pt-20 pb-12 relative transition-colors duration-300">
      {/* Top micro border light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/20 dark:via-lime-400/30 to-transparent" />

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-lime-600/10 dark:border-lime-400/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-600 dark:bg-[#A3E635] text-white dark:text-[#06180A] font-mono font-bold text-base shadow-[0_0_15px_rgba(163,230,53,0.35)] transition-transform group-hover:scale-105">
                W
              </div>
              <span className="font-semibold text-[#0E1F12] dark:text-white text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              طراحی اختصاصی و مهندسی وب‌سایت‌ها و پلتفرم‌های مقیاس‌پذیر با تمرکز بر سرعت ماورایی، معماری تمیز و بدون وابستگی به قالب‌های سنگین.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-100 dark:bg-lime-950/50 border border-lime-300 dark:border-lime-500/25 text-lime-800 dark:text-lime-300 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
              <span>{siteConfig.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0E1F12] dark:text-lime-300 font-semibold">
              بخش‌های اصلی
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors">
                  نمونه‌کارها و کیس‌استادی‌ها
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors">
                  خدمات و پکیج‌های توسعه
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors">
                  فرایند اسپرینت همکاری
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors">
                  اطلاعات تماس دفتر
                </Link>
              </li>
              <li>
                <Link href="/#intake" className="text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors">
                  استعلام هزینه پروژه
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#0E1F12] dark:text-lime-300 font-semibold">
              ارتباط مستقیم با دفتر فنی
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-neutral-600 dark:text-neutral-400">
                <MapPin className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-lime-600 dark:text-lime-400 group-hover:text-lime-500 transition-colors" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.mobile}`}
                  className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-white transition-colors group"
                >
                  <Smartphone className="h-4 w-4 text-lime-600 dark:text-lime-400 group-hover:text-lime-500 transition-colors" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.mobileDisplay}
                  </span>
                </a>
              </li>
              {siteConfig.contact.mobile2 && (
                <li>
                  <a
                    href={`tel:${siteConfig.contact.mobile2}`}
                    className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-white transition-colors group"
                  >
                    <Smartphone className="h-4 w-4 text-lime-600 dark:text-lime-400 group-hover:text-lime-500 transition-colors" />
                    <span className="font-mono text-xs font-medium" dir="ltr">
                      {siteConfig.contact.mobile2Display}
                    </span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-neutral-600 dark:text-neutral-400 hover:text-lime-700 dark:hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-lime-600 dark:text-lime-400 group-hover:text-lime-500 transition-colors" />
                  <span className="font-mono text-xs" dir="ltr">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© ۲۰۲۶ {siteConfig.name} ({siteConfig.domain}). تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-3 text-[11px] text-lime-800 dark:text-lime-300/80 font-medium">
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>Electric Pistachio Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
