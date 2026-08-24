export const SITE = {
  name: "Hephzibah Kings and Queens Montessori School",
  shortName: "Hephzibah",
  motto: "The chosen generation. Where leaders are made.",
  phoneDisplay: "0813 024 7140",
  phoneTel: "tel:+2348130247140",
  email: "hello@hephzibahmontessori.ng",
  address: {
    line1: "3 Memunat Omotayo Oluwa Crescent",
    line2: "Via Goriola, Erunwen",
    line3: "Ikorodu, Lagos, Nigeria",
  },
  hours: "Monday to Friday, 7:00am – 4:30pm",
  visitHours: "Visits welcome 9:00am to noon",
  ratio: "1 guide to 8 children",
  staffing: "AMI-trained directresses",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Montessori Life", href: "/montessori-life" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SCHOOL_LINKS = [
  { label: "About", href: "/about" },
  { label: "Montessori Life", href: "/montessori-life" },
  { label: "News", href: "/news" },
  { label: "Term dates", href: "/term-dates" },
] as const;

export const FOOTER_PROGRAMME_LINKS = [
  { label: "Lower and Upper Elementary", href: "/about" },
  { label: "Secondary", href: "/about" },
] as const;

export const FOOTER_ADMISSIONS_LINKS = [
  { label: "Register your child now", href: "/admissions" },
  { label: "Prospectus", href: "/prospectus" },
  { label: "Safeguarding policy", href: "/safeguarding-policy" },
] as const;
