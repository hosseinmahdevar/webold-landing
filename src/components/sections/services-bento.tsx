import * as React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Code2, Layout, Gauge, ShieldCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ServicesBento() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
    Layout: <Layout className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />,
    Gauge: <Gauge className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
  };

  const stepNumbers = ["۰۱", "۰۲", "۰۳", "۰۴"];

  return (
    <section className="py-24 md:py-32 border-b border-slate-200/80 dark:border-indigo-500/10 bg-slate-50 dark:bg-[#0D1018] relative transition-colors duration-300" id="services">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>خدمات و تخصص‌های مهندسی</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
            معماری نرم‌افزار برای استانداردهای مدرن
          </h2>
          <p className="text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
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
                className={`group relative rounded-2xl border border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-[#131622] p-7 md:p-8 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.12)] flex flex-col justify-between shadow-sm ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Top micro light line */}
                <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-indigo-500/60 transition-all" />

                <div>
                  {/* Top Bar: Icon + Step Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-500/20 group-hover:border-indigo-400 dark:group-hover:border-indigo-500/40 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-950/60 transition-colors">
                      {iconMap[service.iconName] || <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />}
                    </div>
                    <span className="text-xs font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded border border-indigo-200 dark:border-indigo-500/20">
                      // {stepNumbers[index]}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-indigo-300/80">
                      خروجی‌ها و تعهدات:
                    </div>
                    <div className={`grid ${isWide ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-2 text-xs text-slate-700 dark:text-neutral-300`}>
                      {service.deliverables.map((d) => (
                        <div key={d} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5 group-hover:text-emerald-500 transition-colors" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Tags Bottom Bar */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-indigo-500/10">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 dark:bg-indigo-950/30 border border-slate-200 dark:border-indigo-500/15 px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-indigo-200/90 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/30 transition-colors"
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
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-indigo-200 hover:text-indigo-600 dark:hover:text-white px-5 py-2.5 rounded-full border border-slate-300 dark:border-indigo-500/20 bg-white dark:bg-indigo-950/40 hover:bg-slate-50 dark:hover:bg-indigo-600 transition-all shadow-xs"
          >
            <span>مشاهده شرح تفصیلی فرایندها، زمان‌بندی و پکیج‌های توسعه</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
