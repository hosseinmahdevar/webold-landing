import * as React from "react";

export function ProcessTimeline() {
  const steps = [
    {
      step: "۰۱",
      title: "کشف، تحلیل و تدوین PRD",
      desc: "بررسی دقیق اهداف کسب‌وکار، مخاطب و استخراج نیازمندی‌های شفاف بدون فرضیات مبهم.",
    },
    {
      step: "۰۲",
      title: "طراحی پروتوتایپ و سیستم دیزاین",
      desc: "طراحی مینیمال و تست وایرفریم‌ها در Figma؛ تایید کامل هویت بصری قبل از اولین خط کد.",
    },
    {
      step: "۰۳",
      title: "پیاده‌سازی در اسپرینت‌های چابک",
      desc: "توسعه دوهفته‌ای با Next.js 15، تست‌های خودکار و ارائه دموهای زنده در پایان هر اسپرینت.",
    },
    {
      step: "۰۴",
      title: "تحویل سورس‌کد و پشتیبانی",
      desc: "مالکیت ۱۰۰٪ کدها، تنظیم زیرساخت استقرار و پشتیبانی فنی مداوم بدون هیچ‌گونه قفل سالانه.",
    },
  ];

  return (
    <section className="py-24 border-b border-white/5 bg-black" id="process">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            فرایند همکاری شفاف
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            از ایده تا اجرای بی‌نقص در ۴ گام
          </h2>
          <p className="text-sm text-neutral-400">
            رویکرد مهندسی ما بر پایه شفافیت، دموهای هفتگی و جلوگیری از غافلگیری‌های انتهای پروژه استوار است.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-2xl font-bold text-white/30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
