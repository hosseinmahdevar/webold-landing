import { z } from "zod";

export const leadFormSchema = z.object({
  projectType: z.string().min(1, "لطفاً نوع پروژه را انتخاب کنید"),
  timeline: z.string().min(1, "لطفاً بازه زمانی تحویل را انتخاب کنید"),
  budget: z.string().min(1, "لطفاً محدوده بودجه را انتخاب کنید"),
  name: z.string().min(2, "نام باید حداقل ۲ کاراکتر باشد").max(100),
  phone: z.string().regex(/^(\+98|0)?9\d{9}$|^0\d{2,3}\d{7,8}$/, "شماره تماس معتبر نیست"),
  message: z.string().max(1000).optional(),
  _gotcha: z.string().max(0, "درخواست نامعتبر است").optional(),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;
