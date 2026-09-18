export interface Project {
  slug: string;
  title: string;
  category: "webapp" | "corporate" | "ecommerce" | "design-system";
  categoryLabel: string;
  client: string;
  headline: string;
  metric: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  featured: boolean;
  image: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  timeline?: string;
  liveUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  techTags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  rating: number;
}

export interface SiteConfig {
  name: string;
  brandName: string;
  legalName: string;
  domain: string;
  url: string;
  tagline: string;
  description: string;
  availabilityStatus: string;
  contact: {
    address: string;
    city: string;
    phone: string;
    phoneDisplay: string;
    mobile: string;
    mobileDisplay: string;
    mobile2?: string;
    mobile2Display?: string;
    email: string;
  };
  navLinks: {
    label: string;
    href: string;
  }[];
}

export interface LeadFormData {
  projectType: string;
  timeline: string;
  budget: string;
  name: string;
  phone: string;
  message?: string;
  _gotcha?: string;
}
