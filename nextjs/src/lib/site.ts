export const PHONE_DISPLAY = "+212 670 959 747";
export const PHONE_HREF = "tel:+212670959747";
export const WHATSAPP_HREF = "https://wa.me/212670959747";
export const MAPS_HREF =
  "https://www.google.com/maps/place/34.94077411965649,-2.733531736509832";
export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.123!2d-2.7335317!3d34.9407741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU2JzI2LjgiTiAywrA0NCcwMS43Ilc!5e0!3m2!1sen!2sma!4v1700000000000";

export const CHECK_IN = "13:00";
export const CHECK_OUT = "12:00";
export const STARTING_PRICE_MAD = 499;

export function whatsappLink(message?: string) {
  return message
    ? `${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`
    : WHATSAPP_HREF;
}

export const navLinks = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/rooms", en: "Apartments", ar: "الشقق" },
  { href: "/contact", en: "Contact", ar: "اتصل بنا" },
];

// Facts carried over from the previous site. Do not add items that are not true for the property.
export const amenities = [
  { icon: "home", en: "8 apartments", ar: "8 شقق" },
  { icon: "pin", en: "Central location in Zaio", ar: "موقع مركزي في زايو" },
  { icon: "wallet", en: "Affordable prices", ar: "أسعار مناسبة" },
  { icon: "wifi", en: "Free WiFi", ar: "واي فاي مجاني" },
  { icon: "snow", en: "Air conditioning", ar: "مكيف هواء" },
  { icon: "family", en: "Family friendly", ar: "مناسب للعائلات" },
  { icon: "clock", en: "Reachable 24/7", ar: "متاحون 24/7" },
  { icon: "washer", en: "Washing machine", ar: "غسالة ملابس" },
] as const;

export const roomTypes = [
  {
    en: "Large",
    ar: "كبيرة",
    detailEn: "Two bedrooms",
    detailAr: "غرفتا نوم",
    image: "/assets/apartment2/Screenshot 2025-07-30 162534.png",
  },
  {
    en: "Small and medium",
    ar: "صغيرة ومتوسطة",
    detailEn: "One bedroom with extra beds",
    detailAr: "غرفة نوم واحدة مع أسرّة إضافية",
    image: "/assets/apartment5/Screenshot 2025-08-08 201626.png",
  },
] as const;
