import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "custom-web-development",
    title: "توسعه اختصاصی وب‌سایت و وب‌اپلیکیشن",
    shortDesc: "کدنویسی تمیز از صفر با Next.js 15 و React بدون اتکا به قالب‌های سنگین آماده.",
    fullDesc: "ما وب‌سایت‌ها و پلتفرم‌های ابری مقیاس‌پذیر را با دقیق‌ترین استانداردهای مهندسی نرم‌افزار، تایپ‌استریپت سخت‌گیرانه و بالاترین سرعت ممکن خلق می‌کنیم.",
    iconName: "Code2",
    deliverables: [
      "معماری مدرن Next.js 15 App Router",
      "سورس‌کد تمیز و ۱۰۰٪ متعلق به کارفرما",
      "پوشش تست‌های خودکار و تایپینگ کامل",
      "کانفیگوریشن CI/CD و استقرار خودکار",
    ],
    techTags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Node.js"],
    featured: true,
  },
  {
    id: "ui-ux-design-systems",
    title: "طراحی سیستم دیزاین و UI/UX",
    shortDesc: "خلق تجربه‌های کاربری روان، مینیمال و هدفمند در فیگما با تمرکز بر تبدیل بازدیدکننده.",
    fullDesc: "طراحی رابط کاربری با رویکرد مینیمالیسم تکنیکال؛ ایجاد پالت‌های دقیق مونوکروم، کامپوننت‌های ماژولار و پروتوتایپ‌های تعاملی قبل از ورود به خط کد.",
    iconName: "Layout",
    deliverables: [
      "فایل کامل Figma با متغیرهای دیزاین توکن",
      "کامپوننت‌های ریسپانسیو برای دسکتاپ و موبایل",
      "پروتوتایپ تعاملی جهت تست با کاربران",
      "راهنمای جامع هویت بصری و استایل‌گاید",
    ],
    techTags: ["Figma", "Design Tokens", "Wireframing", "Prototyping", "Design System"],
    featured: true,
  },
  {
    id: "performance-seo",
    title: "بهینه‌سازی سرعت، Core Web Vitals و سئو فنی",
    shortDesc: "دستیابی تضمینی به نمره ۹۵+ لایت‌هاوس و ساختار بی‌نقص سئوی فنی در موتورهای جستجو.",
    fullDesc: "سرعت لود وب‌سایت مستقیم‌ترین عامل افزایش فروش و رضایت کاربر است. ما کوچک‌ترین بایت‌های کد و مدیا را برای لود زیر ۱ ثانیه‌ای مهندسی می‌کنیم.",
    iconName: "Gauge",
    deliverables: [
      "رسیدن به شاخص‌های LCP < 1.0s و CLS = 0",
      "ساختار داده‌های ساختاریافته JSON-LD Schema.org",
      "مدیریت کش‌های لایه Edge و CDN",
      "فشرده‌سازی خودکار فرمت‌های AVIF و WebP",
    ],
    techTags: ["Lighthouse 100", "Core Web Vitals", "Schema.org", "Edge CDN", "Clean Code"],
    featured: true,
  },
  {
    id: "support-scaling",
    title: "پشتیبانی فنی، نگهداری و توسعه مستمر",
    shortDesc: "تضمین پایداری ۹۹.۹٪، مانیتورینگ منظم خطاها و افزودن امکانات جدید در قالب اسپرینت‌ها.",
    fullDesc: "پس از رونمایی اولیه تنها نیستید. تیم ما به عنوان بازوی فنی مورد اعتماد در کنارتان است تا پلتفرم همگام با رشد کسب‌وکار شما ارتقا یابد.",
    iconName: "ShieldCheck",
    deliverables: [
      "کانال ارتباطی اختصاصی با مهندسان وبولد",
      "مانیتورینگ ۲۴/۷ خطاها و آپ‌تایم سرور",
      "به‌روزرسانی امنیتی پکیج‌ها و فریم‌ورک",
      "جلسات دوره‌ای بهبود تجربه کاربر و نرخ تبدیل",
    ],
    techTags: ["SLA Guarantee", "Direct Slack/Telegram", "Security Audits", "Continuous Deploy"],
  },
];
