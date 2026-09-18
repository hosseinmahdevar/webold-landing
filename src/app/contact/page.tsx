import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { IntakeForm } from "@/components/sections/intake-form";
import { MapPin, Phone, Smartphone, Mail, HelpCircle, MessageSquare } from "lucide-react";

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
    <div className="py-20 md:py-28 bg-black bg-grid-pattern min-h-screen">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>راه‌های ارتباطی و مشاوره</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            گفتگو درباره پروژه شما
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            از طریق تماس تلفنی مستقیم با دفتر مرکزی یا فرم آنلاین استعلام، پاسخگوی پرسش‌های فنی و برآورد زمان‌بندی پروژه شما هستیم.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 space-y-4 hover:border-white/20 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">دفتر مرکزی</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {siteConfig.contact.address}
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 space-y-4 hover:border-white/20 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">تماس مستقیم با مهندسان</h3>
            <div className="space-y-2 text-sm font-mono text-neutral-300">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-sans">تلفن دفتر:</span>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-emerald-400 transition-colors" dir="ltr">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-sans">موبایل / پشتیبانی:</span>
                <a href={`tel:${siteConfig.contact.mobile}`} className="hover:text-emerald-400 transition-colors" dir="ltr">
                  {siteConfig.contact.mobileDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-7 space-y-4 hover:border-white/20 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">مکاتبه رسمی</h3>
            <p className="text-sm font-mono text-neutral-300">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors" dir="ltr">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-xs text-neutral-500">
              پاسخگویی حداکثر ظرف ۲ ساعت کاری
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 border-y border-white/[0.08] py-16">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
              <HelpCircle className="h-4 w-4" />
              <span>پاسخ به سوالات پرتکرار</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              پرسش‌های متداول کارفرمایان
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/[0.08] bg-[#0C0C0C] p-6 space-y-3">
                <h3 className="text-sm font-bold text-white leading-snug">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{faq.a}</p>
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
