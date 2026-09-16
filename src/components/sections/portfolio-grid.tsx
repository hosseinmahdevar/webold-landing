import * as React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function PortfolioGrid() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="py-24 border-b border-white/5 bg-black" id="work">
      <div className="mx-auto max-w-[1180px] px-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              پورتفولیو و نمونه‌کارهای منتخب
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              پروژه‌های مهندسی‌شده با نتایج ملموس
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium text-neutral-400 hover:text-white inline-flex items-center gap-1 group"
          >
            <span>مشاهده همه پروژه‌ها</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-xl border border-white/10 bg-[#0A0A0A] p-6 hover:border-white/30 transition-all duration-200"
            >
              {/* Image Box */}
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

              {/* Text */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {project.metric}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.headline}
                </p>

                {/* Tech Tags */}
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
    </section>
  );
}
