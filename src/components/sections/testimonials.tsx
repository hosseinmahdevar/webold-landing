import * as React from "react";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            دیدگاه کارفرمایان
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            تجربه همکاری از زبان مدیران محصول
          </h2>
          <p className="text-sm text-neutral-400">
            تعهد به زمان‌بندی، سرعت اجرا و کیفیت مهندسی کدهایی که تحویل می‌دهیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl border border-white/10 bg-[#0A0A0A] p-7 flex flex-col justify-between"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 text-white">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-white" />
                  ))}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-neutral-500">
                    {t.role}، {t.company}
                  </div>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
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
