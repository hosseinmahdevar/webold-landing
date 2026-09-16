const test = require("node:test");
const assert = require("node:assert/strict");
const { z } = require("zod");

const leadFormSchema = z.object({
  projectType: z.string().min(1, "لطفاً نوع پروژه را انتخاب کنید"),
  timeline: z.string().min(1, "لطفاً بازه زمانی تحویل را انتخاب کنید"),
  budget: z.string().min(1, "لطفاً محدوده بودجه را انتخاب کنید"),
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد").max(100),
  phone: z.string().regex(/^(\+98|0)?9\d{9}$|^0\d{2,3}\d{7,8}$/, "شماره تماس معتبر نیست"),
  message: z.string().max(1000).optional(),
  _gotcha: z.string().max(0, "درخواست نامعتبر است").optional(),
});

test("Lead Form Valid Submission (Happy Path)", () => {
  const validData = {
    projectType: "وب‌اپلیکیشن اختصاصی",
    timeline: "۱ تا ۲ ماه",
    budget: "۳۰ تا ۷۰ میلیون تومان",
    name: "علی رضایی",
    phone: "09123456789",
    message: "توسعه سامانه ابری",
    _gotcha: "",
  };

  const res = leadFormSchema.safeParse(validData);
  assert.equal(res.success, true);
});

test("Lead Form Invalid Phone Number (Error Case)", () => {
  const invalidPhone = {
    projectType: "وب‌اپلیکیشن اختصاصی",
    timeline: "۱ تا ۲ ماه",
    budget: "۳۰ تا ۷۰ میلیون تومان",
    name: "علی رضایی",
    phone: "12345",
    _gotcha: "",
  };

  const res = leadFormSchema.safeParse(invalidPhone);
  assert.equal(res.success, false);
});

test("Lead Form Short Name (Error Case)", () => {
  const shortName = {
    projectType: "وب‌اپلیکیشن اختصاصی",
    timeline: "۱ تا ۲ ماه",
    budget: "۳۰ تا ۷۰ میلیون تومان",
    name: "ع",
    phone: "09123456789",
    _gotcha: "",
  };

  const res = leadFormSchema.safeParse(shortName);
  assert.equal(res.success, false);
});

test("Bot Spam Detection via Honeypot (Error Case)", () => {
  const botSubmission = {
    projectType: "وب‌اپلیکیشن اختصاصی",
    timeline: "۱ تا ۲ ماه",
    budget: "۳۰ تا ۷۰ میلیون تومان",
    name: "SpamBot",
    phone: "09123456789",
    _gotcha: "http://spam-link.com",
  };

  const res = leadFormSchema.safeParse(botSubmission);
  assert.equal(res.success, false);
});
