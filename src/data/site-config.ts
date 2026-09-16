import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "استودیو وبولد",
  domain: "webold.ir",
  url: "https://webold.ir",
  tagline: "مهندسی و طراحی وب‌سایت‌های مدرن و مقیاس‌پذیر",
  description: "استودیو وبولد؛ طراحی اختصاصی و توسعه وب‌سایت‌ها و پلتفرم‌های پرسرعت بر پایه Next.js، React و TypeScript برای کسب‌وکارهای پیشرو.",
  availabilityStatus: "ظرفیت فعال برای ۲ پروژه در اسپرینت جاری",
  contact: {
    address: "تهران، خیابان قائم مقام، کوچه آزادگان، پلاک ۲۲، واحد ۳",
    city: "تهران",
    phone: "02166480076",
    phoneDisplay: "۰۲۱-۶۶۴۸۰۰۷۶",
    mobile: "09361059451",
    mobileDisplay: "۰۹۳۶۱۰۵۹۴۵۱",
    email: "hello@webold.ir",
  },
  navLinks: [
    { label: "پروژه‌ها", href: "/work" },
    { label: "خدمات", href: "/services" },
    { label: "فرایند همکاری", href: "/#process" },
    { label: "تماس", href: "/contact" },
  ],
};
