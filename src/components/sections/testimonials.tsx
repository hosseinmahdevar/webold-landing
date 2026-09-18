import * as React from "react";
import { testimonials } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08] bg-[#050505] relative">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>نظرات و اعتبارسنجی کارفرمایان</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            تجربه همکاری با استودیو وبولد
          </h2>
          <p className="text-base text-neutral-400">
            تعهد به زمان‌بندی دقیق، شفافیت فنی در تمام اسپرینت‌ها و نرخ بالای بازگشت سرمایه برای کسب‌وکارها.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 md:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/35 transition-all" />

              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-white" aria-label={`امتیاز ${t.rating} از ۵`}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-white text-white" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-neutral-700 group-hover:text-neutral-500 transition-colors" />
                </div>

                {/* Quote Body */}
                <blockquote className="text-sm text-neutral-300 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Verified Metric */}
              <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white leading-tight">
                      {t.author}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {t.role} • {t.company}
                    </div>
                  </div>
                </div>

                <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-500/20 shrink-0">
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
