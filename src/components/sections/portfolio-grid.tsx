import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function PortfolioGrid() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F7FAF7] dark:bg-[#080B09] relative transition-colors duration-300" id="work">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
              <span>پورتفولیو و پروژه‌های شاخص</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0E1F12] dark:text-white leading-tight">
              پروژه‌های مهندسی‌شده با نتایج تجاری ملموس
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-lime-700 dark:hover:text-white inline-flex items-center gap-2 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded-lg p-1"
          >
            <span>مشاهده آرشیو کامل پروژه‌ها</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-50 dark:bg-lime-950/60 border border-lime-300 dark:border-lime-500/25 text-lime-800 dark:text-lime-300 group-hover:bg-lime-600 dark:group-hover:bg-[#A3E635] group-hover:text-white dark:group-hover:text-[#06180A] transition-all">
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-6 hover:border-lime-500/50 dark:hover:border-lime-400/40 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(163,230,53,0.14)] relative overflow-hidden shadow-xs"
            >
              {/* Top gradient highlight line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent group-hover:via-lime-400/70 transition-all" />

              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-[#080B09] mb-6 border border-lime-600/10 dark:border-lime-400/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badges on Image */}
                <div className="absolute top-3 right-3 rounded-lg bg-white/90 dark:bg-[#080B09]/85 px-3 py-1.5 text-xs font-mono text-neutral-800 dark:text-lime-200 backdrop-blur-md border border-lime-600/20 dark:border-lime-400/20 shadow-xs">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 rounded-lg bg-lime-600/90 dark:bg-lime-950/80 px-2.5 py-1 text-xs font-mono text-white dark:text-lime-300 backdrop-blur-md border border-lime-400/40 dark:border-lime-400/30 shadow-xs">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{project.metric}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-[#0E1F12] dark:text-white group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 group-hover:bg-lime-600 dark:group-hover:bg-[#A3E635] group-hover:text-white dark:group-hover:text-[#06180A] transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-lime-600/10 dark:border-lime-400/10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-lime-50 dark:bg-lime-950/30 border border-lime-200 dark:border-lime-400/15 px-2.5 py-1 text-xs font-mono text-lime-900 dark:text-lime-300/90 group-hover:border-lime-400 dark:group-hover:border-lime-400/30 transition-colors"
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
    </section>
  );
}
