import * as React from "react";
import { Search, PenTool, Terminal, Rocket } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "۰۱",
      title: "کشف، تحلیل و تدوین PRD",
      desc: "بررسی عمیق نیازهای تجاری، تحلیل پرسونای مخاطب و تدوین سند شفاف نیازمندی‌ها (PRD) بدون فرضیات مبهم.",
      icon: <Search className="h-5 w-5 text-lime-600 dark:text-[#A3E635]" />,
    },
    {
      step: "۰۲",
      title: "پروتوتایپ و سیستم دیزاین",
      desc: "طراحی لوکس و تست وایرفریم‌ها در Figma؛ تعریف متغیرهای توکن و تایید کامل هویت بصری قبل از ورود به خط کد.",
      icon: <PenTool className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      step: "۰۳",
      title: "پیاده‌سازی در اسپرینت‌های چابک",
      desc: "توسعه دوهفته‌ای با Next.js 15 و TypeScript سخت‌گیرانه، اجرای تست‌های خودکار و ارائه دموهای زنده در پایان هر اسپرینت.",
      icon: <Terminal className="h-5 w-5 text-lime-500 dark:text-[#BEF264]" />,
    },
    {
      step: "۰۴",
      title: "تحویل سورس‌کد و پشتیبانی",
      desc: "انتقال مالکیت ۱۰۰٪ کدها و گیت‌هاب، کانفیگ لایو سرور و مانیتورینگ اختصاصی بدون وابستگی به شرکت یا فرد ثالث.",
      icon: <Rocket className="h-5 w-5 text-teal-600 dark:text-teal-300" />,
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-lime-600/15 dark:border-lime-400/10 bg-[#F7FAF7] dark:bg-[#080B09] relative transition-colors duration-300" id="process">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            <span>فرایند اسپرینت و چرخه همکاری</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0E1F12] dark:text-white mb-4 leading-tight">
            از ایده تا استقرار کامل در ۴ گام مهندسی‌شده
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            رویکرد ما بر پایه شفافیت، دموهای هفتگی و جلوگیری از غافلگیری‌های انتهای پروژه استوار است؛ شما همواره از وضعیت کد و پیشرفت کار مطلع هستید.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-7 flex flex-col justify-between hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all duration-300 group hover:shadow-lg dark:hover:shadow-[0_0_35px_rgba(163,230,53,0.12)] shadow-xs"
            >
              {/* Top micro light line */}
              <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent group-hover:via-lime-500/60 transition-all" />

              <div>
                {/* Step Marker & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-500/20 group-hover:border-lime-400 dark:group-hover:border-lime-500/40 group-hover:bg-lime-100/50 dark:group-hover:bg-lime-950/60 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-neutral-400 dark:text-lime-400/50 group-hover:text-lime-600 dark:group-hover:text-[#A3E635] transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold text-[#0E1F12] dark:text-white mb-3 leading-snug group-hover:text-lime-700 dark:group-hover:text-lime-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-6 mt-6 border-t border-lime-100 dark:border-lime-500/10 text-[11px] font-mono text-neutral-500 dark:text-lime-300/60">
                مرحله {idx + 1} از ۴
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
