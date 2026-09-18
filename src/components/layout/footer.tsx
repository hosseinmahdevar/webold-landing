import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, MapPin, Smartphone, ArrowUpRight, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#030303] text-neutral-400 pt-20 pb-12 relative">
      {/* Top micro border light */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-mono font-bold text-base shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-105">
                W
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              طراحی اختصاصی و مهندسی وب‌سایت‌ها و پلتفرم‌های مقیاس‌پذیر با تمرکز بر سرعت ماورایی، معماری تمیز و بدون وابستگی به قالب‌های سنگین.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.availabilityStatus}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
              بخش‌های اصلی
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/work" className="text-neutral-400 hover:text-white transition-colors">
                  نمونه‌کارها و کیس‌استادی‌ها
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  خدمات و پکیج‌های توسعه
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-neutral-400 hover:text-white transition-colors">
                  فرایند اسپرینت همکاری
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  اطلاعات تماس دفتر
                </Link>
              </li>
              <li>
                <Link href="/#intake" className="text-neutral-400 hover:text-white transition-colors">
                  استعلام هزینه پروژه
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
              ارتباط مستقیم با دفتر فنی
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="h-4 w-4 text-neutral-500 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.mobile}`}
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Smartphone className="h-4 w-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.mobileDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-neutral-500 group-hover:text-white transition-colors" />
                  <span className="font-mono text-xs" dir="ltr">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <p>© ۲۰۲۶ {siteConfig.name} ({siteConfig.domain}). تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>Dark Luxury Minimalist</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
