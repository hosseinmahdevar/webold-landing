import * as React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { Code2, Layout, Gauge, ShieldCheck, ArrowUpRight } from "lucide-react";

export function ServicesBento() {
  const iconMap: Record<string, React.ReactNode> = {
    Code2: <Code2 className="h-6 w-6 text-white" />,
    Layout: <Layout className="h-6 w-6 text-white" />,
    Gauge: <Gauge className="h-6 w-6 text-white" />,
    ShieldCheck: <ShieldCheck className="h-6 w-6 text-white" />,
  };

  return (
    <section className="py-24 border-b border-white/5 bg-black" id="services">
      <div className="mx-auto max-w-[1180px] px-5">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            خدمات و تخصص‌های فنی
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            معماری و توسعه برای استانداردهای مدرن
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            ما از ایده اولیه در فیگما تا استقرار و مقیاس‌پذیری پلتفرم، تمام نیازهای نرم‌افزاری وب‌سایت شما را پوشش می‌دهیم.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.id}
                className={`group rounded-xl border border-white/10 bg-[#0A0A0A] p-7 hover:border-white/30 transition-all duration-200 flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                      {iconMap[service.iconName] || <Code2 className="h-6 w-6 text-white" />}
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Deliverables List */}
                  <ul className="space-y-2 mb-6 text-xs text-neutral-300">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-neutral-400"
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
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <span>مشاهده جزئیات کامل پکیج‌ها و پلن‌های همکاری</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
