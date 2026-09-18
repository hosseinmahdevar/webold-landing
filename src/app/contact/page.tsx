import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { IntakeForm } from "@/components/sections/intake-form";
import { MapPin, Phone, Smartphone, Mail, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "تماس با استودیو وبولد",
  description: "راه‌های ارتباطی، آدرس دفتر مرکزی و شماره تلفن‌های رسمی استودیو وبولد.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "مدت زمان معمول اجرای یک پروژه چقدر است؟",
      a: "بسته به دامنه، وب‌سایت‌های شرکتی لوکس بین ۳ تا ۵ هفته و پلتفرم‌ها و وب‌اپلیکیشن‌های اختصاصی بین ۶ تا ۱۰ هفته اسپرینت به طول می‌انجامند.",
    },
    {
      q: "آیا سورس‌کد به طور کامل به ما واگذار می‌شود؟",
      a: "بله، ۱۰۰٪ مالکیت سورس‌کد، فایل‌های فیگما و مستندات فنی متعلق به کارفرما است و هیچ وابستگی سالانه‌ای وجود ندارد.",
    },
    {
      q: "مدل قیمت‌گذاری و پرداخت چگونه است؟",
      a: "همکاری در قالب قرارداد رسمی بر اساس فازهای تحویل (Milestones) انجام می‌شود: ۳۰٪ پیش‌پرداخت، ۴۰٪ پس از تایید پروتوتایپ و دمو، و ۳۰٪ نهایی پس از استقرار و تست نهایی.",
    },
  ];

  return (
    <div className="py-20 md:py-28 bg-[#F7FAF7] dark:bg-[#080B09] bg-grid-pattern min-h-screen transition-colors duration-300">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 border border-lime-300 dark:border-lime-500/20 text-lime-800 dark:text-lime-300 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
            <span>راه‌های ارتباطی و مشاوره</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0E1F12] dark:text-white mb-4 leading-tight">
            گفتگو درباره پروژه شما
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            از طریق تماس تلفنی مستقیم با دفتر مرکزی یا فرم آنلاین استعلام، پاسخگوی پرسش‌های فنی و برآورد زمان‌بندی پروژه شما هستیم.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-7 space-y-4 hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-500/20 text-lime-600 dark:text-[#A3E635]">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#0E1F12] dark:text-white">دفتر مرکزی</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {siteConfig.contact.address}
            </p>
          </div>

          <div className="rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-7 space-y-4 hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-500/20 text-lime-600 dark:text-[#A3E635]">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#0E1F12] dark:text-white">تماس مستقیم با مهندسان</h3>
            <div className="space-y-2 text-sm font-mono text-neutral-800 dark:text-neutral-300">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">تلفن دفتر:</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors" dir="ltr">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">همراه پشتیبانی:</span>
                <a href={`tel:${siteConfig.contact.mobile}`} className="hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors" dir="ltr">
                  {siteConfig.contact.mobileDisplay}
                </a>
              </div>
              {siteConfig.contact.mobile2 && (
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">همراه مشاوره:</span>
                  <a href={`tel:${siteConfig.contact.mobile2}`} className="hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors" dir="ltr">
                    {siteConfig.contact.mobile2Display}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-7 space-y-4 hover:border-lime-500/40 dark:hover:border-lime-400/35 transition-all shadow-xs">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-500/20 text-lime-600 dark:text-[#A3E635]">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#0E1F12] dark:text-white">مکاتبه رسمی</h3>
            <p className="text-sm font-mono text-neutral-800 dark:text-neutral-300">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-lime-700 dark:hover:text-[#A3E635] transition-colors" dir="ltr">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              پاسخگویی حداکثر ظرف ۲ ساعت کاری
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 border-y border-lime-600/15 dark:border-lime-400/10 py-16">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-lime-800 dark:text-lime-300 mb-2">
              <HelpCircle className="h-4 w-4" />
              <span>پاسخ به سوالات پرتکرار</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0E1F12] dark:text-white">
              پرسش‌های متداول کارفرمایان
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-lime-600/15 dark:border-lime-400/15 bg-white dark:bg-[#0F1612] p-6 space-y-3 shadow-xs">
                <h3 className="text-sm font-bold text-[#0E1F12] dark:text-white leading-snug">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Form embedded */}
        <IntakeForm />
      </div>
    </div>
  );
}
