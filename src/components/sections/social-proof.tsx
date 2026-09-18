import * as React from "react";

export function SocialProof() {
  const metrics = [
    { label: "پروژه موفق توسعه‌یافته", value: "+۳۵", helper: "بدون نقص فنی در پروداکشن" },
    { label: "میانگین زمان لود لندینگ‌ها", value: "۰.۷s", helper: "بسیار سریع‌تر از رقبا" },
    { label: "نمره عملکرد لایت‌هاوس", value: "۱۰۰", helper: "بهینه‌سازی کامل Core Web Vitals" },
    { label: "رضایت کارفرمایان تجاری", value: "۹۹٪", helper: "بر اساس نظرسنجی نهایی" },
  ];

  const clientLogos = [
    { name: "FinPulse Global", industry: "Fintech Platform" },
    { name: "Lumina Health", industry: "Healthtech Cloud" },
    { name: "Ark Architecture", industry: "Design & E-Commerce" },
    { name: "Vanguard Legal", industry: "Corporate Advisory" },
    { name: "Apex Next Systems", industry: "AI Infrastructure" },
    { name: "Kian Studio", industry: "Creative Media" },
  ];

  return (
    <section className="py-20 border-b border-slate-200/80 dark:border-indigo-500/10 bg-slate-50 dark:bg-[#0D1018] relative transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span>مورد اعتماد تیم‌های فنی، بنیان‌گذاران و برندهای نوآور</span>
          </div>
        </div>

        {/* Client Badges Cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 dark:border-indigo-500/10 bg-white dark:bg-[#131622]/60 hover:bg-slate-100/80 dark:hover:bg-[#181C2C] hover:border-indigo-400 dark:hover:border-indigo-500/30 transition-all duration-300 group cursor-default shadow-xs"
            >
              <span className="text-sm font-mono font-semibold tracking-tight text-slate-800 dark:text-neutral-300 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-indigo-400/60 mt-0.5">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Technical Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="relative rounded-xl border border-slate-200 dark:border-indigo-500/15 bg-white dark:bg-[#131622] p-6 transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-500/35 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.1)] group shadow-xs"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-indigo-500/60 transition-all" />

              <div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-mono mb-2">
                {m.value}
              </div>
              <div className="text-sm font-medium text-slate-700 dark:text-neutral-200 mb-1">
                {m.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-neutral-400 font-sans">
                {m.helper}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
