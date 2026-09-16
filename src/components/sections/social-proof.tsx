import * as React from "react";

export function SocialProof() {
  const metrics = [
    { label: "پروژه موفق توسعه‌یافته", value: "+۳۵" },
    { label: "میانگین زمان لود لندینگ‌ها", value: "۰.۷s" },
    { label: "نمره عملکرد لایت‌هاوس", value: "۱۰۰" },
    { label: "رضایت کارفرمایان تجاری", value: "۹۹٪" },
  ];

  const clientLogos = [
    "FinPulse Global",
    "Lumina Health",
    "Ark Architecture",
    "Vanguard Legal",
    "Apex Next Systems",
    "Kian Studio",
  ];

  return (
    <section className="py-16 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="text-center mb-8">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            مورد اعتماد تیم‌های فنی و برندهای نوآور
          </p>
        </div>

        {/* Monochrome Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60 grayscale hover:opacity-100 transition-opacity duration-200">
          {clientLogos.map((client) => (
            <span
              key={client}
              className="text-sm md:text-base font-mono font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
            >
              {client}
            </span>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t border-white/5 text-center">
          {metrics.map((m) => (
            <div key={m.label} className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-white font-mono">
                {m.value}
              </div>
              <div className="text-xs text-neutral-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
