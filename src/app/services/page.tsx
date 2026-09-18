import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات و پکیج‌های توسعه",
  description: "خدمات تخصصی توسعه وب، طراحی UI/UX و بهینه‌سازی سرعت در استودیو وبولد.",
};

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-28 bg-black bg-grid-pattern min-h-screen">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>خدمات و مدل‌های همکاری</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            پکیج‌های مهندسی نرم‌افزار
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            تمامی خدمات با تضمین کیفیت کد، رعایت اصول دسترسی‌پذیری و پرفورمنس، مالکیت ۱۰۰٪ سورس‌کد و پشتیبانی مستقیم تیم فنی ارائه می‌شود.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative rounded-3xl border border-white/[0.08] bg-[#0C0C0C] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-white/20 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-neutral-500 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
                  // سرویس ۰{index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{service.title}</h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  خروجی‌های اختصاصی و تعهدات اسپرینت:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-3 p-4 rounded-xl bg-[#070707] border border-white/[0.06] text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/#intake">
            <Button size="lg" variant="primary" className="shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Sparkles className="h-4 w-4" />
              <span>درخواست برآورد هزینه برای پروژه شما</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
