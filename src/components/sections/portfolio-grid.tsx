import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function PortfolioGrid() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08] bg-black relative" id="work">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>پورتفولیو و پروژه‌های شاخص</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              پروژه‌های مهندسی‌شده با نتایج تجاری ملموس
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium text-neutral-300 hover:text-white inline-flex items-center gap-2 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
          >
            <span>مشاهده آرشیو کامل پروژه‌ها</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
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
              className="group block rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-6 hover:border-white/25 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] relative overflow-hidden"
            >
              {/* Top gradient highlight line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/40 transition-all" />

              {/* Image Container with Luxury Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900 mb-6 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                  loading="lazy"
                />

                {/* Badges on Image */}
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

              {/* Card Body */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                  </h3>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                {/* Tech Tags */}
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
    </section>
  );
}
