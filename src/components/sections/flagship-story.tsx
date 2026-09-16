import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export function FlagshipStory() {
  return (
    <section className="py-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12">
          {/* Tag */}
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              روایت یک پروژه شاخص (Flagship Case Study)
            </div>
            <span className="text-xs font-mono text-neutral-500">
              فین‌پالس گلوبال
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                چگونه زمان لود پلتفرم فین‌پالس را از ۶ ثانیه به ۰.۶ ثانیه رساندیم؟
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                فین‌پالس با کرش‌های مداوم و از دست رفتن کاربران در ساعات حساس بازار روبه‌رو بود. ما زیرساخت قدیمی را با معماری Serverless و Next.js 15 بازطراحی کردیم.
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5 font-mono">
                <div>
                  <div className="text-2xl font-bold text-white">۰.۶s</div>
                  <div className="text-xs text-neutral-500">زمان بارگذاری نهایی</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">+۱۴۰٪</div>
                  <div className="text-xs text-neutral-500">افزایش نرخ ثبت‌نام</div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>معماری کامپوننت‌های سرور با حداقل جاوااسکریپت کلاینت</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>یکپارچگی لحظه‌ای با پروتکل WebSocket برای دیتاهای بازار</span>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/work/finpulse-analytics">
                  <Button variant="outline" size="md">
                    <span>مطالعه کیس‌استادی تفصیلی</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Asset Mockup */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="FinPulse Analytics Dashboard"
                className="w-full h-full object-cover grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs font-mono text-neutral-300">
                  داشبورد تحلیلی با زمان پاسخ‌دهی زیر ۱۰۰ms
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
