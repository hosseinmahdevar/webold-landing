import { siteConfig } from "@/data/site-config";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "alternateName": [siteConfig.brandName, "Webold", "وبولد", "استودیو وبولد", "گروه نرم‌افزاری نوین پردازش اوراسیا"],
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/og-image.png`,
    "description": siteConfig.description,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": siteConfig.contact.city,
      "addressCountry": "IR"
    },
    "sameAs": [
      "https://github.com/webold-ir"
    ],
    "priceRange": "$$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  };
}
