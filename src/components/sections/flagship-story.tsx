"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Box, Image as ImageIcon } from "lucide-react";
import { ThreeInteractiveCard } from "@/components/ui/three-interactive-card";

export function FlagshipStory() {
  const [viewMode, setViewMode] = React.useState<"3d" | "preview">("3d");

  return (
    <section className="py-24 md:py-32 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F7FAF7] dark:bg-[#080B09] relative transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="relative rounded-3xl border border-lime-600/20 dark:border-lime-400/20 bg-white dark:bg-[#0F1612] p-8 md:p-14 overflow-hidden shadow-xl dark:shadow-[0_0_50px_rgba(2,6,3,0.8)]">
          {/* Top highlight light gradient */}
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent" />

          {/* Tag & Sub-badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-lime-100 dark:border-lime-500/15 pb-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-lime-50 dark:bg-lime-950/60 border border-lime-300 dark:border-lime-500/30 text-lime-800 dark:text-lime-300 text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
              <span>مطالعه موردی شاخص (Flagship Case Study)</span>
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              کارفرما: FinPulse Global • لندن / دبی
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E1F12] dark:text-white tracking-tight leading-[1.15]">
                چگونه زمان لود پلتفرم فین‌پالس را از ۶ ثانیه به ۰.۶ ثانیه رساندیم؟
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                فین‌پالس با بیش از ۳۰,۰۰۰ کاربر هم‌زمان، به دلیل اتکا به یک قالب سنگین با افت مداوم نرخ تبدیل و کرش در ساعات حساس نوسان بازار مواجه بود. ما معماری نرم‌افزار را از صفر با Next.js 15 و استریمینگ بلادرنگ بازنویسی کردیم.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-lime-100 dark:border-lime-500/15 font-mono">
                <div className="p-4 rounded-xl bg-lime-50/50 dark:bg-[#080B09] border border-lime-200 dark:border-lime-500/15">
                  <div className="text-3xl sm:text-4xl font-bold text-[#0E1F12] dark:text-white mb-1">۰.۶s</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">زمان بارگذاری اولیه LCP (کاهش ۹۰٪)</div>
                </div>
                <div className="p-4 rounded-xl bg-lime-50/50 dark:bg-[#080B09] border border-lime-200 dark:border-lime-500/15">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-700 dark:text-[#A3E635] mb-1">+۱۴۰٪</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">افزایش ثبت‌نام و تبدیل کاربران فعال</div>
                </div>
              </div>

              {/* Key Decisions */}
              <div className="space-y-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-[#A3E635] shrink-0 mt-0.5" />
                  <span>معماری کامپوننت‌های سمت سرور (RSC) با ۹۵٪ حذف کدهای غیرضروری جاوااسکریپت کلاینت</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-[#A3E635] shrink-0 mt-0.5" />
                  <span>یکپارچگی مستقیم با پروتکل WebSocket برای استریم میلی‌ثانیه‌ای نمودار قیمت‌ها</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-[#A3E635] shrink-0 mt-0.5" />
                  <span>دستیابی پایدار به نمره ۹۸ در تست‌های ارزیابی رسمی گوگل لایت‌هاوس</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link href="/work/finpulse-analytics">
                  <Button variant="outline" size="md">
                    <span>مطالعه مستندات معماری و کیس‌استادی</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asset Column: Interactive 3D Canvas / Mockup Toggle */}
            <div className="lg:col-span-5 space-y-3">
              {/* Toggle Controls */}
              <div className="flex items-center justify-end gap-1.5 p-1 rounded-xl bg-lime-50 dark:bg-[#080B09] border border-lime-200 dark:border-lime-500/15 w-fit ml-auto">
                <button
                  type="button"
                  onClick={() => setViewMode("3d")}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    viewMode === "3d"
                      ? "bg-lime-600 text-white dark:bg-[#A3E635] dark:text-[#06180A] shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  <Box className="h-3.5 w-3.5" />
                  <span>مدل سه‌بعدی Three.js</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("preview")}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    viewMode === "preview"
                      ? "bg-lime-600 text-white dark:bg-[#A3E635] dark:text-[#06180A] shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }`}
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span>پیش‌نمایش UI</span>
                </button>
              </div>

              {/* View Box Container */}
              <div className="relative rounded-2xl overflow-hidden border border-lime-200 dark:border-lime-500/20 bg-neutral-900 aspect-[4/3] shadow-lg dark:shadow-[0_0_40px_rgba(2,6,3,0.9)] group">
                {viewMode === "3d" ? (
                  <ThreeInteractiveCard />
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                      alt="FinPulse Analytics Platform Mockup"
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-lime-400" />
                        <span className="text-[11px] font-mono text-lime-300 font-semibold">
                          استقرار زنده بر روی زیرساخت سرورلس
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-300">
                        داشبورد تحلیلی با زمان پاسخ‌دهی زیر ۱۰۰ میلی‌ثانیه برای ۳۰,۰۰۰ کاربر
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
