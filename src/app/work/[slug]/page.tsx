import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Clock, Layers, TrendingUp, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "پروژه یافت نشد" };

  return {
    title: `${project.title} | کیس‌استادی استودیو وبولد`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 md:py-28 bg-[#F8FAFC] dark:bg-[#0B0D13] bg-grid-pattern min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[960px] px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/work"
            className="text-xs font-mono text-slate-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white inline-flex items-center gap-2 transition-colors px-3 py-1.5 rounded-lg bg-white dark:bg-indigo-950/40 border border-slate-200 dark:border-indigo-500/20 hover:border-indigo-300 dark:hover:border-indigo-500/40 shadow-xs"
          >
            <ArrowLeft className="h-3.5 w-3.5 rotate-180 text-indigo-600 dark:text-indigo-400" />
            <span>بازگشت به فهرست پروژه‌ها</span>
          </Link>
        </div>

        {/* Title and Tag */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-indigo-950/50 px-3.5 py-1.5 text-xs font-mono text-indigo-700 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-500/25">
            <span>{project.categoryLabel}</span>
            <span>•</span>
            <span className="text-slate-900 dark:text-white font-semibold">{project.client}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
            {project.headline}
          </p>
        </div>

        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-[#131622] mb-14 font-mono shadow-sm">
          <div className="space-y-1">
            <div className="text-xs text-slate-500 dark:text-neutral-400 flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>دستاورد اصلی</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">{project.metric}</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-500 dark:text-neutral-400 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>مدت زمان اسپرینت</span>
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{project.timeline || "۸ هفته"}</div>
          </div>
          <div className="col-span-2 sm:col-span-1 space-y-1">
            <div className="text-xs text-slate-500 dark:text-neutral-400 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>استک محوری</span>
            </div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">{project.techStack.slice(0, 3).join(" • ")}</div>
          </div>
        </div>

        {/* Featured Image Frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-indigo-500/20 mb-16 bg-slate-900 shadow-xl dark:shadow-[0_0_40px_rgba(5,7,12,0.8)]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center grayscale contrast-110"
          />
        </div>

        {/* Narrative Chapters */}
        <div className="space-y-14 border-b border-slate-200 dark:border-indigo-500/10 pb-16">
          {/* Challenge */}
          <section className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">// چالش و مسئله اصلی</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">مسئله کارفرما قبل از شروع پروژه</h2>
            <p className="text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
              {project.challenge || project.description}
            </p>
          </section>

          {/* Solution */}
          <section className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">// رویکرد مهندسی و راه‌حل</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">معماری نرم‌افزار و بازنویسی استک</h2>
            <p className="text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
              {project.solution || "طراحی و توسعه اختصاصی بر پایه Next.js 15 با تمرکز بر رندرینگ بهینه سمت سرور، حداقل حجم باندل و سرعت لود فوق‌سریع."}
            </p>
          </section>

          {/* Deliverables */}
          <section className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">// خروجی‌های تحویل‌داده‌شده</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">لیست تحویل‌دادنی‌های اسپرینت</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-800 dark:text-neutral-200 bg-white dark:bg-[#131622] p-4 rounded-xl border border-slate-200 dark:border-indigo-500/15 shadow-xs">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400">// تأثیر و نتیجه نهایی</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">تأثیر ملموس بر کسب‌وکار</h2>
            <p className="text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
              {project.impact || "ارتقای مستقیم رضایت کاربران، بهبود رتبه سئو و کاهش چشمگیر زمان لود صفحه."}
            </p>
          </section>
        </div>

        {/* Next Step Call to Action */}
        <div className="pt-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono uppercase">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>پروژه بعدی شما</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">آیا ایده‌ای مشابه در ذهن دارید؟</h3>
          <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
            بیایید در مورد ساختار فنی، زمان‌بندی و بودجه پروژه شما به صورت کاملاً شفاف گفتگو کنیم.
          </p>
          <div className="pt-3">
            <Link href="/#intake">
              <Button size="lg" variant="primary">
                <span>شروع استعلام و برآورد زمان و هزینه</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
