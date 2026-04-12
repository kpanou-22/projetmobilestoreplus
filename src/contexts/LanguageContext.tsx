import React, { createContext, useContext, useState } from "react";

type Lang = "fr" | "en";

const translations = {
  fr: {
    // Navbar
    home: "Accueil",
    services: "Services",
    products: "Produits",
    offers: "Offres",
    contact: "Contact",
    // Hero
    tagline: "Vente · Achat · Troc · Réparation — Smartphones, MacBooks, Tablettes & Accessoires",
    callBtn: "01 43 79 99 99",
    whatsappBtn: "Commander sur WhatsApp",
    videoLabel: "Présentation de la boutique",
    // Stats
    stat1: "+5 ans d'expérience",
    stat2: "+500 Clients satisfaits",
    stat3: "+1000 Appareils réparés",
    stat4: "100% Satisfaction garantie",
    // Services
    servicesTitle: "Ce que nous faisons",
    svc1: "Vente & Achat",
    svc2: "Troc",
    svc3: "Réparation",
    svc4: "Accessoires",
    svc5: "Ordinateurs",
    svc6: "Batteries & Chargeurs",
    // Products
    productsTitle: "Nos produits vedettes",
    // Offers
    offerBadge: "Offres du moment",
    offerTitle: "Reprise & échange avantageux",
    offer1: "Troc",
    offer1Desc: "Échangez votre ancien appareil contre un nouveau",
    offer2: "Rachat Cash",
    offer2Desc: "Vendez votre appareil au meilleur prix",
    offer3: "Réparation Express",
    offer3Desc: "Réparé souvent le jour même",
    // Why us
    whyTitle: "Pourquoi nous choisir",
    why1Title: "+5 ans d'expertise",
    why1Desc: "Techniciens qualifiés à votre service",
    why2Title: "Produits garantis",
    why2Desc: "Chaque appareil vérifié avant vente",
    why3Title: "Meilleurs prix du marché",
    why3Desc: "Reprise & vente au juste prix",
    why4Title: "Réparation express",
    why4Desc: "Souvent réparé le jour même",
    // Testimonials
    testimonialsTitle: "Ce que disent nos clients",
    // Location
    locationTitle: "Nous trouver",
    address: "Abomey-Calavi, Carrefour Parrana, Von à gauche, 4ème boutique",
    // Contact
    contactTitle: "Contactez-nous",
    nameLabel: "Nom",
    phoneLabel: "Téléphone",
    requestLabel: "Demande",
    messageLabel: "Message",
    sendBtn: "Envoyer le message",
    whatsappChatBtn: "Discuter sur WhatsApp maintenant",
    requestOptions: ["Réparation", "Achat", "Vente / Troc", "Accessoires", "Ordinateurs", "Autre demande"],
    // CTA
    ctaTitle: "Venez nous rendre visite !",
    // Footer
    copyright: "© 2025 Mobile Store Plus · Abomey-Calavi, Bénin",
    legal: "IFU : 0202590708733 | RCCM : 0000000000",
    // Testimonial data
    testimonials: [
      { quote: "Excellent service ! Mon iPhone a été réparé en moins de 2h. Je recommande vivement.", name: "Koffi A.", tag: "Réparation" },
      { quote: "Les meilleurs prix du marché à Calavi. J'ai eu mon Samsung neuf à un prix imbattable.", name: "Amina D.", tag: "Achat" },
      { quote: "Le troc est super avantageux. J'ai échangé mon ancien téléphone contre un modèle récent.", name: "Patrick M.", tag: "Troc" },
      { quote: "Très professionnel, accueil chaleureux. Mon MacBook fonctionne comme neuf !", name: "Carine B.", tag: "Réparation" },
      { quote: "Livraison rapide via WhatsApp. Service client au top !", name: "Yves K.", tag: "Commande" },
      { quote: "Des accessoires de qualité et un SAV réactif. Merci Mobile Store Plus !", name: "Diane F.", tag: "Accessoires" },
    ],
  },
  en: {
    home: "Home",
    services: "Services",
    products: "Products",
    offers: "Offers",
    contact: "Contact",
    tagline: "Sales · Purchase · Trade · Repair — Smartphones, MacBooks, Tablets & Accessories",
    callBtn: "01 43 79 99 99",
    whatsappBtn: "Order on WhatsApp",
    videoLabel: "Store presentation",
    stat1: "+5 years of experience",
    stat2: "+500 Satisfied clients",
    stat3: "+1000 Devices repaired",
    stat4: "100% Satisfaction guaranteed",
    servicesTitle: "What we do",
    svc1: "Sales & Purchase",
    svc2: "Trade",
    svc3: "Repair",
    svc4: "Accessories",
    svc5: "Computers",
    svc6: "Batteries & Chargers",
    productsTitle: "Our featured products",
    offerBadge: "Current offers",
    offerTitle: "Advantageous trade-in & exchange",
    offer1: "Trade",
    offer1Desc: "Exchange your old device for a new one",
    offer2: "Cash buyback",
    offer2Desc: "Sell your device at the best price",
    offer3: "Express Repair",
    offer3Desc: "Often repaired the same day",
    whyTitle: "Why choose us",
    why1Title: "+5 years of expertise",
    why1Desc: "Qualified technicians at your service",
    why2Title: "Guaranteed products",
    why2Desc: "Each device checked before sale",
    why3Title: "Best market prices",
    why3Desc: "Fair trade-in & sale prices",
    why4Title: "Express repair",
    why4Desc: "Often repaired the same day",
    testimonialsTitle: "What our clients say",
    locationTitle: "Find us",
    address: "Abomey-Calavi, Carrefour Parrana, left at Von, 4th shop",
    contactTitle: "Contact us",
    nameLabel: "Name",
    phoneLabel: "Phone",
    requestLabel: "Request",
    messageLabel: "Message",
    sendBtn: "Send message",
    whatsappChatBtn: "Chat on WhatsApp now",
    requestOptions: ["Repair", "Purchase", "Sale / Trade", "Accessories", "Computers", "Other request"],
    ctaTitle: "Come visit us!",
    copyright: "© 2025 Mobile Store Plus · Abomey-Calavi, Benin",
    legal: "IFU: 0202590708733 | RCCM: 0000000000",
    testimonials: [
      { quote: "Excellent service! My iPhone was repaired in less than 2 hours. Highly recommend.", name: "Koffi A.", tag: "Repair" },
      { quote: "Best prices in Calavi. Got my new Samsung at an unbeatable price.", name: "Amina D.", tag: "Purchase" },
      { quote: "Trade-in is very advantageous. I exchanged my old phone for a recent model.", name: "Patrick M.", tag: "Trade" },
      { quote: "Very professional, warm welcome. My MacBook works like new!", name: "Carine B.", tag: "Repair" },
      { quote: "Fast delivery via WhatsApp. Top-notch customer service!", name: "Yves K.", tag: "Order" },
      { quote: "Quality accessories and responsive support. Thank you Mobile Store Plus!", name: "Diane F.", tag: "Accessories" },
    ],
  },
};

type Translations = typeof translations.fr;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
