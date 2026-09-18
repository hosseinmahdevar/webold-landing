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
    <section className="py-20 border-b border-white/[0.08] bg-[#050505] relative">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Label */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span>مورد اعتماد تیم‌های فنی، بنیان‌گذاران و برندهای نوآور</span>
          </div>
        </div>

        {/* Client Badges Cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/[0.06] bg-[#0A0A0A]/60 hover:bg-[#0E0E0E] hover:border-white/20 transition-all duration-300 group cursor-default"
            >
              <span className="text-sm font-mono font-semibold tracking-tight text-neutral-300 group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-500 mt-0.5">
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
              className="relative rounded-xl border border-white/[0.08] bg-[#0C0C0C] p-6 transition-all duration-300 hover:border-white/20 hover:-translate-y-0.5 group"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all" />

              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono mb-2">
                {m.value}
              </div>
              <div className="text-sm font-medium text-neutral-200 mb-1">
                {m.label}
              </div>
              <div className="text-xs text-neutral-500 font-sans">
                {m.helper}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
