"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/data/site-config";
import { Check, CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, Loader2, Phone, Mail } from "lucide-react";

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
    "وب‌اپلیکیشن اختصاصی",
    "وب‌سایت شرکتی لوکس",
    "فروشگاه اینترنتی مدرن",
    "بازطراحی و ارتقای پرفورمنس",
  ];

  const timelines = [
    "فوری (کمتر از ۱ ماه)",
    "۱ تا ۲ ماه",
    "۲ تا ۳ ماه",
    "منعطف / در حال بررسی",
  ];

  const budgets = [
    "کمتر از ۳۰ میلیون تومان",
    "۳۰ تا ۷۰ میلیون تومان",
    "۷۰ تا ۱۵۰ میلیون تومان",
    "بیش از ۱۵۰ میلیون / سازمانی",
    "نیاز به مشاوره اولیه",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || name.trim().length < 2) {
      setError("لطفاً نام خود را وارد کنید.");
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setError("لطفاً شماره تماس معتبر وارد کنید.");
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
        setError(data.message || "خطایی رخ داد. لطفاً با تلفن مستقیم تماس بگیرید.");
      }
    } catch {
      setError("ارتباط با سرور برقرار نشد. لطفاً مستقیماً تماس بگیرید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-black" id="intake">
      <div className="mx-auto max-w-[840px] px-5">
        <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              شروع همکاری و استعلام هزینه
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              پروژه خود را تعریف کنید
            </h2>
            <p className="text-sm text-neutral-400">
              با تکمیل این فرم کوتاه، استعلام دقیق دامنه و برآورد زمان‌بندی پروژه خود را دریافت کنید.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95 duration-200">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                درخواست شما با موفقیت ثبت شد!
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                کارشناس ارشد فنی استودیو وبولد درخواست شما را بررسی کرده و ظرف حداکثر ۲ ساعت کاری با شما تماس خواهد گرفت.
              </p>
              <div className="pt-6 flex flex-wrap justify-center gap-4 text-xs font-mono text-neutral-400">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  <span>تلفن دفتر: {siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step Progress Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5 text-xs font-mono text-neutral-400">
                <span>گام {step} از ۳</span>
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 w-8 rounded-full transition-colors ${
                        s <= step ? "bg-white" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step 1: Project Type & Timeline */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      ۱. نوع پروژه مورد نظر شما چیست؟
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setProjectType(type)}
                          className={`flex items-center justify-between p-3.5 rounded-lg text-xs font-medium border text-right transition-all cursor-pointer ${
                            projectType === type
                              ? "bg-white text-black border-white"
                              : "bg-neutral-900/60 text-neutral-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          <span>{type}</span>
                          {projectType === type && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      ۲. بازه زمانی تحویل مد نظر شما:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelines.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setTimeline(time)}
                          className={`flex items-center justify-between p-3.5 rounded-lg text-xs font-medium border text-right transition-all cursor-pointer ${
                            timeline === time
                              ? "bg-white text-black border-white"
                              : "bg-neutral-900/60 text-neutral-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          <span>{time}</span>
                          {timeline === time && <Check className="h-4 w-4" />}
                        </button>
                      ))}
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
                <div className="space-y-6 animate-in fade-in duration-150">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      ۳. محدوده سرمایه‌گذاری / بودجه تخمینی:
                    </label>
                    <p className="text-xs text-neutral-400 mb-4">
                      تعیین بودجه به ما کمک می‌کند بهترین استک و دامنه توسعه را بدون اتلاف وقت پیشنهاد دهیم.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`flex items-center justify-between p-3.5 rounded-lg text-xs font-medium border text-right transition-all cursor-pointer ${
                            budget === b
                              ? "bg-white text-black border-white"
                              : "bg-neutral-900/60 text-neutral-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          <span>{b}</span>
                          {budget === b && <Check className="h-4 w-4" />}
                        </button>
                      ))}
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
                <div className="space-y-5 animate-in fade-in duration-150">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2">
                      نام و نام خانوادگی / نام شرکت *
                    </label>
                    <Input
                      type="text"
                      placeholder="مثال: علی رضایی (استارتاپ آلفا)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2">
                      شماره تماس همراه یا ثابت *
                    </label>
                    <Input
                      type="tel"
                      placeholder="مثال: 09123456789 یا 021..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      dir="ltr"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-300 mb-2">
                      توضیحات تکمیلی یا لینک (اختیاری)
                    </label>
                    <textarea
                      rows={3}
                      className="flex w-full rounded-lg border border-white/10 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:border-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
                      placeholder="خلاصه‌ای از قابلیت‌های مد نظر شما یا آدرس سایت فعلی..."
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
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
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
                          <span>در حال ارسال...</span>
                        </>
                      ) : (
                        <span>ثبت و دریافت مشاوره اختصاصی</span>
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
