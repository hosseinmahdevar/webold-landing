import * as React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Code2, Layout, Gauge, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicesBento() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="h-6 w-6 text-white" />,
    Layout: <Layout className="h-6 w-6 text-white" />,
    Gauge: <Gauge className="h-6 w-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
  };

  const stepNumbers = ["۰۱", "۰۲", "۰۳", "۰۴"];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08] bg-[#050505] relative" id="services">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>خدمات و تخصص‌های مهندسی</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            معماری نرم‌افزار برای استانداردهای مدرن
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            از ایده‌پردازی و سیستم دیزاین در فیگما تا کدنویسی سخت‌گیرانه، استقرار ابری و مانیتورینگ بلادرنگ؛ تمام نیازهای پلتفرم وب شما بدون اتکا به شرکت ثالث پوشش داده می‌شود.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isWide = index === 0 || index === 3;

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 md:p-8 hover:border-white/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col justify-between ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Top micro light line */}
                <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/35 transition-all" />

                <div>
                  {/* Top Bar: Icon + Step Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.1] transition-colors">
                      {iconMap[service.iconName] || <Code2 className="h-6 w-6 text-white" />}
                    </div>
                    <span className="text-xs font-mono text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
                      // {stepNumbers[index]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      خروجی‌ها و تعهدات:
                    </div>
                    <div className={`grid ${isWide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-2 text-xs text-neutral-300`}>
                      {service.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-neutral-400 shrink-0 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Tags Bottom Bar */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-xs font-mono text-neutral-400 group-hover:text-neutral-200 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Subpage CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all"
          >
            <span>مشاهده شرح تفصیلی فرایندها، زمان‌بندی و پکیج‌های توسعه</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
