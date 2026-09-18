import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "نمونه‌کارها و کیس‌استادی‌ها",
  description: "مجموعه پروژه‌های اختصاصی توسعه‌یافته توسط استودیو وبولد برای استارتاپ‌ها و شرکت‌های تجاری.",
};

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28 bg-black bg-grid-pattern min-h-screen">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>پورتفولیو و پرونده‌های فنی</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            پروژه‌های مهندسی‌شده
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            گزیده‌ای از وب‌اپلیکیشن‌ها، پلتفرم‌های ابری و وب‌سایت‌های مدرن که با هدف دستیابی به بالاترین سرعت، نرخ تبدیل بالا و استانداردهای سخت‌گیرانه مهندسی نرم‌افزار توسعه یافته‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-6 hover:border-white/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] relative overflow-hidden"
            >
              {/* Top gradient highlight line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/40 transition-all" />

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900 mb-6 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-lg bg-black/80 px-3 py-1.5 text-xs font-mono text-neutral-200 backdrop-blur-md border border-white/10">
                  {project.categoryLabel}
                </div>
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/80 px-2.5 py-1 text-xs font-mono text-emerald-300 backdrop-blur-md border border-emerald-500/30">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{project.metric}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 text-xs font-mono text-neutral-300 group-hover:border-white/15 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
