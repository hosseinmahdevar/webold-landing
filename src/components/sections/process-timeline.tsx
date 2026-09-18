import * as React from "react";
import { Search, PenTool, Terminal, Rocket } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "۰۱",
      title: "کشف، تحلیل و تدوین PRD",
      desc: "بررسی عمیق نیازهای تجاری، تحلیل پرسونای مخاطب و تدوین سند شفاف نیازمندی‌ها (PRD) بدون فرضیات مبهم.",
      icon: <Search className="h-5 w-5 text-white" />,
    },
    {
      step: "۰۲",
      title: "پروتوتایپ و سیستم دیزاین",
      desc: "طراحی مینیمال و تست وایرفریم‌ها در Figma؛ تعریف متغیرهای توکن و تایید کامل هویت بصری قبل از ورود به خط کد.",
      icon: <PenTool className="h-5 w-5 text-white" />,
    },
    {
      step: "۰۳",
      title: "پیاده‌سازی در اسپرینت‌های چابک",
      desc: "توسعه دوهفته‌ای با Next.js 15 و TypeScript سخت‌گیرانه، اجرای تست‌های خودکار و ارائه دموهای زنده در پایان هر اسپرینت.",
      icon: <Terminal className="h-5 w-5 text-emerald-400" />,
    },
    {
      step: "۰۴",
      title: "تحویل سورس‌کد و پشتیبانی",
      desc: "انتقال مالکیت ۱۰۰٪ کدها و گیت‌هاب، کانفیگ لایو سرور و مانیتورینگ اختصاصی بدون وابستگی به شرکت یا فرد ثالث.",
      icon: <Rocket className="h-5 w-5 text-indigo-400" />,
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/[0.08] bg-black relative" id="process">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>فرایند اسپرینت و چرخه همکاری</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            از ایده تا استقرار کامل در ۴ گام مهندسی‌شده
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed">
            رویکرد ما بر پایه شفافیت، دموهای هفتگی و جلوگیری از غافلگیری‌های انتهای پروژه استوار است؛ شما همواره از وضعیت کد و پیشرفت کار مطلع هستید.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:via-white/35 transition-all" />

              <div>
                {/* Step Marker & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:bg-white/[0.1] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-400 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-white/[0.06] text-[11px] font-mono text-neutral-400">
                مرحله {idx + 1} از ۴
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
