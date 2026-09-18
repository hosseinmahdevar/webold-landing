import * as React from "react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F0F5F1] dark:bg-[#0B100D] relative transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            <span>نظرات و اعتبارسنجی کارفرمایان</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0E1F12] dark:text-white mb-4 leading-tight">
            تجربه همکاری با استودیو وبولد
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            تعهد به زمان‌بندی دقیق، شفافیت فنی در تمام اسپرینت‌ها و نرخ بالای بازگشت سرمایه برای کسب‌وکارها.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-7 md:p-8 flex flex-col justify-between hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(163,230,53,0.1)] shadow-xs"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent group-hover:via-lime-500/60 transition-all" />

              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-500 dark:text-[#A3E635]" aria-label={`امتیاز ${t.rating} از ۵`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-neutral-300 dark:text-lime-900/60 group-hover:text-lime-500/40 transition-colors" />
                </div>

                {/* Quote Body */}
                <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verified Metric */}
              <div className="pt-5 border-t border-lime-100 dark:border-lime-500/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-50 dark:bg-lime-950/60 border border-lime-300 dark:border-lime-500/20 text-xs font-mono font-bold text-lime-800 dark:text-lime-200">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0E1F12] dark:text-white leading-tight">
                      {t.author}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {t.role} • {t.company}
                    </div>
                  </div>
                </div>

                <span className="font-mono text-xs text-lime-800 dark:text-lime-400 bg-lime-100 dark:bg-lime-950/40 px-2.5 py-1 rounded-md border border-lime-300 dark:border-lime-500/20 shrink-0">
                  {t.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
