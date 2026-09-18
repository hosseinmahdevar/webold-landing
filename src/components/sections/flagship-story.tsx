import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Zap, ShieldCheck } from "lucide-react";

export function FlagshipStory() {
  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08] bg-black relative">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="relative rounded-3xl border border-white/[0.12] bg-[#0C0C0C] p-8 md:p-14 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Top highlight light gradient */}
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Tag & Sub-badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/[0.08] pb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>مطالعه موردی شاخص (Flagship Case Study)</span>
            </div>
            <span className="text-xs font-mono text-neutral-400">
              کارفرما: FinPulse Global • لندن / دبی
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
                چگونه زمان لود پلتفرم فین‌پالس را از ۶ ثانیه به ۰.۶ ثانیه رساندیم؟
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-normal">
                فین‌پالس با بیش از ۳۰,۰۰۰ کاربر هم‌زمان، به دلیل اتکا به یک قالب سنگین با افت مداوم نرخ تبدیل و کرش در ساعات حساس نوسان بازار مواجه بود. ما معماری نرم‌افزار را از صفر با Next.js 15 و استریمینگ بلادرنگ بازنویسی کردیم.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/[0.08] font-mono">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">۰.۶s</div>
                  <div className="text-xs text-neutral-400 font-sans">زمان بارگذاری اولیه LCP (کاهش ۹۰٪)</div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">+۱۴۰٪</div>
                  <div className="text-xs text-neutral-400 font-sans">افزایش ثبت‌نام و تبدیل کاربران فعال</div>
                </div>
              </div>

              {/* Key Decisions */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>معماری کامپوننت‌های سمت سرور (RSC) با ۹۵٪ حذف کدهای غیرضروری جاوااسکریپت کلاینت</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>یکپارچگی مستقیم با پروتکل WebSocket برای استریم میلی‌ثانیه‌ای نمودار قیمت‌ها</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>دستیابی پایدار به نمره ۹۸ در تست‌های ارزیابی رسمی گوگل لایت‌هاوس</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link href="/work/finpulse-analytics">
                  <Button variant="outline" size="md" className="border-white/20 hover:border-white/40 hover:bg-white/[0.06]">
                    <span>مطالعه مستندات معماری و کیس‌استادی</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asset Column / Mockup Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 aspect-[4/3] shadow-[0_0_40px_rgba(0,0,0,0.9)] group">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                  alt="FinPulse Analytics Platform Mockup"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating pill over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-emerald-300 font-semibold">
                      استقرار زنده بر روی زیرساخت سرورلس
                    </span>
                  </div>
                  <div className="text-xs font-mono text-neutral-300">
                    داشبورد تحلیلی با زمان پاسخ‌دهی زیر ۱۰۰ میلی‌ثانیه برای ۳۰,۰۰۰ کاربر
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
