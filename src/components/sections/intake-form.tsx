"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/site-config";
import {
  Check,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Loader2,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

export function IntakeForm() {
  const [step, setStep] = React.useState<number>(1);
  const [projectType, setProjectType] = React.useState<string>("وب‌اپلیکیشن اختصاصی");
  const [timeline, setTimeline] = React.useState<string>("۱ تا ۲ ماه");
  const [budget, setBudget] = React.useState<string>("۳۰ تا ۷۰ میلیون تومان");
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [gotcha, setGotcha] = React.useState<string>("");

  const [loading, setLoading] = React.useState<boolean>(false);
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const projectTypes = [
    { title: "وب‌اپلیکیشن اختصاصی", desc: "سامانه تحت وب ابری، پنل مشتری و داشبورد" },
    { title: "وب‌سایت شرکتی لوکس", desc: "طراحی پرچمدار، برندینگ و معرفی خدمات" },
    { title: "فروشگاه آنلاین مدرن", desc: "سیستم فروش با سرعت لود آنی و تسویه‌حساب سریع" },
    { title: "بازطراحی و ارتقای پرفورمنس", desc: "بازنویسی سیستم قدیمی و رفع افت سرعت" },
  ];

  const timelines = [
    { label: "فوری (کمتر از ۱ ماه)", badge: "اسپرینت فشرده" },
    { label: "۱ تا ۲ ماه", badge: "استاندارد" },
    { label: "۲ تا ۳ ماه", badge: "پروژه جامع" },
    { label: "منعطف / در حال بررسی", badge: "مشاوره فنی" },
  ];

  const budgets = [
    { range: "کمتر از ۳۰ میلیون تومان", note: "مناسب لندینگ‌پیج تک‌صفحه‌ای" },
    { range: "۳۰ تا ۷۰ میلیون تومان", note: "مناسب وب‌سایت شرکتی مدرن" },
    { range: "۷۰ تا ۱۵۰ میلیون تومان", note: "مناسب وب‌اپلیکیشن و فروشگاه اختصاصی" },
    { range: "بیش از ۱۵۰ میلیون / سازمانی", note: "پلتفرم‌های بزرگ با معماری توزیع‌شده" },
    { range: "نیاز به برآورد و مشاوره اولیه", note: "تعیین پس از جلسه بررسی فنی" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || name.trim().length < 2) {
      setError("لطفاً نام خود یا نام مجموعه را وارد کنید.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setError("لطفاً شماره تماس معتبر (همراه یا ثابت) وارد کنید.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType,
          timeline,
          budget,
          name,
          phone,
          message,
          _gotcha: gotcha,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || "خطایی در ثبت رخ داد. لطفاً مستقیماً با تلفن دفتر تماس بگیرید.");
      }
    } catch {
      setError("ارتباط با سرور برقرار نشد. لطفاً مستقیماً با دفتر تماس بگیرید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#0B0D13] relative" id="intake">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6">
        <div className="relative rounded-3xl border border-indigo-500/20 bg-[#131622] p-8 md:p-14 shadow-[0_0_50px_rgba(5,7,12,0.9)]">
          {/* Top highlight light line */}
          <div className="absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
              <span>شروع همکاری و برآورد زمان و هزینه</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              پروژه خود را تعریف کنید
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              با تکمیل این فرم در کمتر از ۱ دقیقه، پیشنهاد معماری فنی و پیش‌فاکتور شفاف اسپرینت‌ها را دریافت کنید.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                درخواست شما با موفقیت ثبت شد!
              </h3>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                مهندس ارشد فنی استودیو وبولد اطلاعات پروژه شما را بررسی کرده و ظرف حداکثر ۲ ساعت کاری جهت هماهنگی جلسه دمو با شما تماس خواهد گرفت.
              </p>
              <div className="pt-6 flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-300">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 hover:bg-indigo-950/70 hover:text-white transition-all"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>تلفن دفتر: {siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-950/40 border border-indigo-500/20 hover:bg-indigo-950/70 hover:text-white transition-all"
                >
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Progress Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-indigo-500/10 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-indigo-300 font-semibold">گام {step} از ۳:</span>
                  <span>
                    {step === 1 && "انتخاب نوع پروژه و زمان‌بندی"}
                    {step === 2 && "محدوده سرمایه‌گذاری و بودجه"}
                    {step === 3 && "اطلاعات تماس و تایید نهایی"}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        s === step
                          ? "w-8 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                          : s < step
                          ? "w-4 bg-emerald-400"
                          : "w-4 bg-indigo-950/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Project Type & Timeline */}
              {step === 1 && (
                <div className="space-y-7 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      ۱. نوع پروژه مورد نظر شما چیست؟
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map((item) => {
                        const isSelected = projectType === item.title;
                        return (
                          <button
                            type="button"
                            key={item.title}
                            onClick={() => setProjectType(item.title)}
                            className={`flex items-start justify-between p-4 rounded-xl text-right transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                                : "bg-[#0E111A] text-neutral-300 border-indigo-500/15 hover:border-indigo-500/35 hover:bg-[#161B2E]"
                            }`}
                          >
                            <div className="space-y-1 pr-1">
                              <div className="text-sm font-bold leading-tight">
                                {item.title}
                              </div>
                              <div
                                className={`text-[11px] leading-snug ${
                                  isSelected ? "text-indigo-100" : "text-neutral-400"
                                }`}
                              >
                                {item.desc}
                              </div>
                            </div>
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border mt-0.5 ${
                                isSelected
                                  ? "border-white bg-white text-indigo-900"
                                  : "border-indigo-500/30"
                              }`}
                            >
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      ۲. بازه زمانی تحویل مد نظر شما:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelines.map((item) => {
                        const isSelected = timeline === item.label;
                        return (
                          <button
                            type="button"
                            key={item.label}
                            onClick={() => setTimeline(item.label)}
                            className={`flex items-center justify-between p-3.5 rounded-xl text-right transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                                : "bg-[#0E111A] text-neutral-300 border-indigo-500/15 hover:border-indigo-500/35 hover:bg-[#161B2E]"
                            }`}
                          >
                            <span className="text-xs font-semibold">{item.label}</span>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                isSelected
                                  ? "bg-black/20 text-white font-semibold"
                                  : "bg-indigo-950/40 text-indigo-300"
                              }`}
                            >
                              {item.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => setStep(2)}
                    >
                      <span>مرحله بعد (بودجه پروژه)</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Budget */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      ۳. محدوده سرمایه‌گذاری / بودجه تخمینی پروژه:
                    </label>
                    <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                      تعیین بودجه به تیم فنی ما کمک می‌کند تا مناسب‌ترین فیچرها، معماری و دامنه توسعه را بدون اتلاف وقت پیشنهاد دهند.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgets.map((b) => {
                        const isSelected = budget === b.range;
                        return (
                          <button
                            type="button"
                            key={b.range}
                            onClick={() => setBudget(b.range)}
                            className={`flex items-start justify-between p-4 rounded-xl text-right transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                                : "bg-[#0E111A] text-neutral-300 border-indigo-500/15 hover:border-indigo-500/35 hover:bg-[#161B2E]"
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="text-xs font-bold leading-tight font-mono">
                                {b.range}
                              </div>
                              <div
                                className={`text-[11px] leading-snug ${
                                  isSelected ? "text-indigo-100" : "text-neutral-400"
                                }`}
                              >
                                {b.note}
                              </div>
                            </div>
                            <div
                              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border mt-0.5 ${
                                isSelected
                                  ? "border-white bg-white text-indigo-900"
                                  : "border-indigo-500/30"
                              }`}
                            >
                              {isSelected && <Check className="h-3 w-3" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setStep(1)}
                    >
                      <ArrowRight className="h-4 w-4" />
                      <span>مرحله قبل</span>
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => setStep(3)}
                    >
                      <span>مرحله بعد (اطلاعات تماس)</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info & Submission */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-mono uppercase text-indigo-300 mb-2">
                      نام و نام خانوادگی / نام شرکت یا استارتاپ *
                    </label>
                    <Input
                      type="text"
                      placeholder="مثال: مهندس رادمنش (فین‌پالس)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-indigo-300 mb-2">
                      شماره تماس همراه یا ثابت مستقیم *
                    </label>
                    <Input
                      type="tel"
                      placeholder="مثال: 09123456789 یا 021..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      dir="ltr"
                      required
                      className="font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-indigo-300 mb-2">
                      توضیحات تکمیلی یا لینک به سایت/طرح فعلی (اختیاری)
                    </label>
                    <textarea
                      rows={3}
                      className="flex w-full rounded-xl border border-indigo-500/20 bg-[#0E111A] px-4 py-2.5 text-sm text-[#EEF2F6] placeholder:text-neutral-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/25 transition-all"
                      placeholder="خلاصه‌ای از امکانات کلیدی مورد نیاز یا چالش‌های وب‌سایت فعلی شما..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Anti-Spam Honeypot Field */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={gotcha}
                    onChange={(e) => setGotcha(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden opacity-0 absolute -z-10"
                  />

                  {error && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs animate-in fade-in">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="pt-4 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setStep(2)}
                      disabled={loading}
                    >
                      <ArrowRight className="h-4 w-4" />
                      <span>مرحله قبل</span>
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>در حال ارسال امن...</span>
                        </>
                      ) : (
                        <span>ثبت درخواست و دریافت مشاوره اختصاصی</span>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
