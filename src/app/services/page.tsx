import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات و پکیج‌های توسعه",
  description: "خدمات تخصصی توسعه وب، طراحی UI/UX و بهینه‌سازی سرعت در استودیو وبولد.",
};

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            خدمات استودیو وبولد
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            پکیج‌های مهندسی نرم‌افزار
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            تمامی خدمات با تضمین کیفیت کد، مالکیت ۱۰۰٪ سورس‌کد و پشتیبانی مستقیم تیم فنی ارائه می‌شود.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              <div className="lg:col-span-1 space-y-4">
                <span className="text-xs font-mono text-neutral-500">
                  سرویس ۰{index + 1}
                </span>
                <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2.5 py-1 text-xs font-mono text-neutral-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  خروجی‌های اختصاصی و تحویل‌دادنی‌ها:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <div
                      key={d}
                      className="flex items-center gap-3 p-3.5 rounded-lg bg-neutral-950 border border-white/5 text-sm text-neutral-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/#intake">
            <Button size="lg" variant="primary">
              <span>درخواست برآورد هزینه برای پروژه شما</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
