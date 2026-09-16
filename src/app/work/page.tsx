import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "نمونه‌کارها و کیس‌استادی‌ها",
  description: "مجموعه پروژه‌های اختصاصی توسعه‌یافته توسط استودیو وبولد برای استارتاپ‌ها و شرکت‌های تجاری.",
};

export default function WorkPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            پورتفولیو استودیو وبولد
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            پروژه‌های مهندسی‌شده
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            گزیده‌ای از وب‌اپلیکیشن‌ها و وب‌سایت‌های مدرن که با هدف دستیابی به بالاترین سرعت و تعامل کاربری توسعه یافته‌اند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-white/30 transition-all duration-200"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-neutral-900 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-mono text-neutral-300 backdrop-blur-md border border-white/10">
                  {project.categoryLabel}
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {project.metric}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-mono text-neutral-400"
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
