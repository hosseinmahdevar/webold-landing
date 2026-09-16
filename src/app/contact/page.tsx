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
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
            ارتباط با استودیو وبولد
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            بیایید درباره پروژه شما گفتگو کنیم
          </h1>
          <p className="text-base text-neutral-400 leading-relaxed">
            از طریق شماره‌های تماس رسمی یا فرم آنلاین استعلام، در سریع‌ترین زمان ممکن پاسخگوی شما هستیم.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white">دفتر مرکزی</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {siteConfig.contact.address}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white">تماس تلفنی مستقیم</h3>
            <div className="space-y-1 text-sm font-mono text-neutral-300">
              <div>
                ثابت:{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white" dir="ltr">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div>
                همراه:{" "}
                <a href={`tel:${siteConfig.contact.mobile}`} className="hover:text-white" dir="ltr">
                  {siteConfig.contact.mobileDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white">ایمیل رسمی</h3>
            <p className="text-sm font-mono text-neutral-300">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white" dir="ltr">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-16 border-y border-white/5 py-12">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-neutral-400" />
            <span>پرسش‌های متداول کارفرمایان</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-white/10 bg-[#0A0A0A] p-6 space-y-2">
                <h3 className="text-sm font-bold text-white">{faq.q}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{faq.a}</p>
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
