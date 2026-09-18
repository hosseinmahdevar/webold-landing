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
    <div className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B0D13] bg-grid-pattern min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>پورتفولیو و پرونده‌های فنی</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
            پروژه‌های مهندسی‌شده
          </h1>
          <p className="text-base text-slate-600 dark:text-neutral-400 leading-relaxed">
            گزیده‌ای از وب‌اپلیکیشن‌ها، پلتفرم‌های ابری و وب‌سایت‌های مدرن که با هدف دستیابی به بالاترین سرعت، نرخ تبدیل بالا و استانداردهای سخت‌گیرانه مهندسی نرم‌افزار توسعه یافته‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl border border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-[#131622] p-6 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(99,102,241,0.14)] relative overflow-hidden shadow-sm"
            >
              {/* Top gradient highlight line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-indigo-500/70 transition-all" />

              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-[#0B0D13] mb-6 border border-slate-200 dark:border-indigo-500/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-lg bg-white/90 dark:bg-[#0B0D13]/85 px-3 py-1.5 text-xs font-mono text-slate-800 dark:text-indigo-200 backdrop-blur-md border border-slate-200 dark:border-indigo-500/20 shadow-xs">
                  {project.categoryLabel}
                </div>
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/90 dark:bg-emerald-950/80 px-2.5 py-1 text-xs font-mono text-white dark:text-emerald-300 backdrop-blur-md border border-emerald-400/40 dark:border-emerald-500/30 shadow-xs">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{project.metric}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-indigo-950/40 border border-slate-200 dark:border-indigo-500/20 text-slate-600 dark:text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-indigo-500/10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 dark:bg-indigo-950/30 border border-slate-200 dark:border-indigo-500/15 px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-indigo-200/90 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/30 transition-colors"
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
