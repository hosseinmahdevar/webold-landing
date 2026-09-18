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
    <div className="py-20 md:py-28 bg-[#F7FAF7] dark:bg-[#080B09] bg-grid-pattern min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            <span>خدمات و مدل‌های همکاری</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E1F12] dark:text-white mb-4 leading-tight">
            پکیج‌های مهندسی نرم‌افزار
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            تمامی خدمات با تضمین کیفیت کد، رعایت اصول دسترسی‌پذیری و پرفورمنس، مالکیت ۱۰۰٪ سورس‌کد و پشتیبانی مستقیم تیم فنی ارائه می‌شود.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative rounded-3xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all duration-300 shadow-md dark:shadow-[0_0_40px_rgba(2,6,3,0.6)]"
            >
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent" />

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-mono text-lime-800 dark:text-lime-300 bg-lime-50 dark:bg-lime-950/50 px-2.5 py-1 rounded border border-lime-200 dark:border-lime-500/20">
                  // سرویس ۰{index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0E1F12] dark:text-white tracking-tight group-hover:text-lime-700 dark:group-hover:text-lime-300">{service.title}</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-lime-50 dark:bg-lime-950/30 px-2.5 py-1 text-xs font-mono text-lime-900 dark:text-lime-200 border border-lime-200 dark:border-lime-400/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-xs font-mono uppercase text-neutral-500 dark:text-lime-300/80 tracking-wider">
                  خروجی‌های اختصاصی و تعهدات اسپرینت:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-start gap-3 p-4 rounded-xl bg-lime-50/40 dark:bg-[#080B09] border border-lime-200 dark:border-lime-500/15 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-[#A3E635] shrink-0 mt-0.5" />
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
            <Button size="lg" variant="primary">
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
