import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight, Code2, Gauge, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 border-b border-white/5">
      <div className="mx-auto max-w-[1180px] px-5">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-mono mb-8 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{siteConfig.availabilityStatus}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
          طراحی و مهندسی وب‌سایت‌های مدرن برای{" "}
          <span className="text-neutral-400 font-medium">کسب‌وکارهای پیشرو</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10">
          استودیو وبولد؛ ترکیب طراحی برنده جوایز و معماری نرم‌افزار پرسرعت بر پایه Next.js 15. بدون قالب‌های سنگین، بدون کد اضافه؛ اختصاصی و ماندگار.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#intake">
            <Button size="lg" variant="primary">
              <span>شروع پروژه و استعلام</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/work">
            <Button size="lg" variant="outline">
              <span>مشاهده نمونه‌کارها</span>
            </Button>
          </Link>
        </div>

        {/* Minimal Highlight Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-white/5 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-white">
              <Gauge className="h-4 w-4" />
            </div>
            <span>نمره ۹۵+ گوگل لایت‌هاوس</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-white">
              <Code2 className="h-4 w-4" />
            </div>
            <span>توسعه اختصاصی با Next.js 15</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10 text-white">
              <Shield className="h-4 w-4" />
            </div>
            <span>مالکیت ۱۰۰٪ سورس‌کد و داده‌ها</span>
          </div>
        </div>
      </div>
    </section>
  );
}
