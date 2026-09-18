import * as React from "react";

export function SocialProof() {
  const metrics = [
    { label: "پروژه موفق توسعه‌یافته", value: "+۳۵", helper: "بدون نقص فنی در پروداکشن" },
    { label: "میانگین زمان لود لندینگ‌ها", value: "۰.۷s", helper: "بسیار سریع‌تر از رقبا" },
    { label: "نمره عملکرد لایت‌هاوس", value: "۱۰۰", helper: "بهینه‌سازی کامل Core Web Vitals" },
    { label: "رضایت کارفرمایان تجاری", value: "۹۹٪", helper: "بر اساس نظرسنجی نهایی" },
  ];

  const clientLogos = [
    { name: "Foriacc", industry: "AI & Global Accounts" },
    { name: "FinPulse Global", industry: "Fintech Platform" },
    { name: "Lumina Health", industry: "Healthtech Cloud" },
    { name: "Ark Architecture", industry: "Design & E-Commerce" },
    { name: "Vanguard Legal", industry: "Corporate Advisory" },
    { name: "Apex Next Systems", industry: "AI Infrastructure" },
    { name: "Kian Studio", industry: "Creative Media" },
  ];

  return (
    <section className="py-20 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F0F5F1] dark:bg-[#0B100D] relative transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            <span>مورد اعتماد تیم‌های فنی، بنیان‌گذاران و برندهای نوآور</span>
          </div>
        </div>

        {/* Client Badges Cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-lime-600/15 dark:border-lime-400/10 bg-white dark:bg-[#0F1612]/60 hover:bg-lime-50/60 dark:hover:bg-[#152019] hover:border-lime-500/40 dark:hover:border-lime-400/30 transition-all duration-300 group cursor-default shadow-xs"
            >
              <span className="text-sm font-mono font-semibold tracking-tight text-neutral-800 dark:text-neutral-300 group-hover:text-lime-700 dark:group-hover:text-[#A3E635] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 dark:text-lime-400/60 mt-0.5">
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
              className="relative rounded-xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-6 transition-all duration-300 hover:border-lime-500/40 dark:hover:border-lime-400/35 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(163,230,53,0.1)] group shadow-xs"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent group-hover:via-lime-500/70 transition-all" />

              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#0E1F12] dark:text-white font-mono mb-2">
                {m.value}
              </div>
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1">
                {m.label}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                {m.helper}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
