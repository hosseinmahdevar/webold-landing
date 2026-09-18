import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight, Code2, Gauge, Shield, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 border-b border-white/[0.08] bg-black bg-grid-pattern">
      {/* Ambient background light gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] ambient-glow pointer-events-none opacity-80" />
      <div className="absolute -top-24 right-1/4 w-[450px] h-[350px] ambient-glow-emerald pointer-events-none opacity-60" />

      <div className="relative mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Live Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-neutral-200 text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:border-white/30 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{siteConfig.availabilityStatus}</span>
          <span className="text-neutral-500 font-sans">|</span>
          <span className="text-neutral-400 hidden sm:inline">تحویل طبق قرارداد رسمی SLA</span>
        </div>

        {/* Master Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.14] mb-6">
          طراحی و مهندسی وب‌سایت‌های مدرن برای{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
            کسب‌وکارهای پیشرو
          </span>
        </h1>

        {/* Subtitle / Value Proposition */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-10 font-normal">
          استودیو وبولد؛ ترکیب هنر طراحی مونوکروم و مهندسی فوق‌سریع بر پایه Next.js 15. بدون کد اضافه، بدون قالب‌های سنگین وردپرس؛ اختصاصی، مقیاس‌پذیر و ماندگار.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#intake">
            <Button size="lg" variant="primary" className="shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]">
              <Sparkles className="h-4 w-4" />
              <span>شروع پروژه و استعلام هزینه</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>

          <Link href="/work">
            <Button size="lg" variant="outline" className="border-white/15 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.08]">
              <span>مشاهده بررسی نمونه‌کارها</span>
            </Button>
          </Link>
        </div>

        {/* Highlight Verification Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-16 mt-16 border-t border-white/[0.08]">
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/[0.08] bg-[#0C0C0C]/80 backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-emerald-400">
              <Gauge className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">نمره ۹۵+ لایت‌هاوس</div>
              <div className="text-xs text-neutral-400">تضمین بالاترین سرعت لود وب</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/[0.08] bg-[#0C0C0C]/80 backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Next.js 15 & React 19</div>
              <div className="text-xs text-neutral-400">معماری ماژولار و سئو-محور</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/[0.08] bg-[#0C0C0C]/80 backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-indigo-400">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">مالکیت ۱۰۰٪ سورس‌کد</div>
              <div className="text-xs text-neutral-400">بدون وابستگی و بدون قفل سالانه</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
