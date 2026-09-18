import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight, Code2, Gauge, Shield, Sparkles } from "lucide-react";
import { ThreeHeroBackground } from "@/components/ui/three-hero-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F7FAF7] dark:bg-[#080B09] transition-colors duration-300">
      {/* Interactive 3D Three.js WebGL Canvas */}
      <ThreeHeroBackground />

      {/* Ambient background light gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] ambient-glow pointer-events-none opacity-80" />
      <div className="absolute -top-20 right-1/4 w-[450px] h-[350px] ambient-glow-cyan pointer-events-none opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Live Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-lime-50/90 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-400/25 text-lime-900 dark:text-lime-200 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(163,230,53,0.12)] hover:border-lime-500 dark:hover:border-lime-400/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600 dark:bg-lime-400" />
          </span>
          <span>{siteConfig.availabilityStatus}</span>
          <span className="text-lime-500/50 font-sans">|</span>
          <span className="text-lime-800/80 dark:text-lime-300/80 hidden sm:inline">تحویل طبق قرارداد رسمی SLA</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0E1F12] dark:text-white max-w-4xl leading-[1.14] mb-6">
          طراحی و مهندسی وب‌سایت‌های مدرن برای{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-800 via-lime-600 to-emerald-600 dark:from-white dark:via-lime-200 dark:to-[#A3E635]">
            کسب‌وکارهای پیشرو
          </span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed mb-10 font-normal">
          استودیو وبولد؛ ترکیب هنر طراحی متمایز و مهندسی نرم‌افزار پرسرعت بر پایه Next.js 15. بدون کد اضافه، بدون قالب‌های سنگین وردپرس؛ اختصاصی، مقیاس‌پذیر و ماندگار.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#intake">
            <Button size="lg" variant="primary">
              <Sparkles className="h-4 w-4" />
              <span>شروع پروژه و استعلام هزینه</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>

          <Link href="/work">
            <Button size="lg" variant="outline">
              <span>مشاهده بررسی نمونه‌کارها</span>
            </Button>
          </Link>
        </div>

        {/* Highlight Verification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 mt-16 border-t border-lime-600/15 dark:border-lime-400/10">
          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-lime-600/15 dark:border-lime-400/15 bg-white/90 dark:bg-[#0F1612]/80 backdrop-blur-sm hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Gauge className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E1F12] dark:text-white">نمره ۹۵+ لایت‌هاوس</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">تضمین بالاترین سرعت لود وب</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-lime-600/15 dark:border-lime-400/15 bg-white/90 dark:bg-[#0F1612]/80 backdrop-blur-sm hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-lime-500/10 border border-lime-500/20 text-lime-600 dark:text-lime-400">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E1F12] dark:text-white">Next.js 15 & React 19</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">معماری ماژولار و سئو-محور</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl border border-lime-600/15 dark:border-lime-400/15 bg-white/90 dark:bg-[#0F1612]/80 backdrop-blur-sm hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0E1F12] dark:text-white">مالکیت ۱۰۰٪ سورس‌کد</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">بدون وابستگی و بدون قفل سالانه</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
