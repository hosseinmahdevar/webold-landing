import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Phone, Mail, MapPin, Smartphone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-neutral-400 pt-16 pb-12">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black font-mono font-bold text-sm">
                W
              </div>
              <span className="font-semibold text-white text-lg">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              طراحی اختصاصی و مهندسی وب‌سایت‌ها و وب‌اپلیکیشن‌های مینیمال با بالاترین پرفورمنس، بدون کد اضافه و بدون قالب‌های آماده.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {siteConfig.availabilityStatus}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  نمونه‌کارها و کیس‌استادی‌ها
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  خدمات و پکیج‌های توسعه
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  فرایند اسپرینت همکاری
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  تماس با دفتر مرکزی
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Verified Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-200">
              ارتباط رسمی و مستقیم
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-neutral-300">
                <MapPin className="h-4 w-4 text-neutral-500 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{siteConfig.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Phone className="h-4 w-4 text-neutral-500 group-hover:text-white" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.mobile}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Smartphone className="h-4 w-4 text-neutral-500 group-hover:text-white" />
                  <span className="font-mono text-xs font-medium" dir="ltr">
                    {siteConfig.contact.mobileDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-4 w-4 text-neutral-500 group-hover:text-white" />
                  <span className="font-mono text-xs" dir="ltr">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-mono">
          <p>© ۲۰۲۶ {siteConfig.name} ({siteConfig.domain}). تمامی حقوق محفوظ است.</p>
          <p>Next.js 15 App Router • Pure Technical Minimalism</p>
        </div>
      </div>
    </footer>
  );
}
