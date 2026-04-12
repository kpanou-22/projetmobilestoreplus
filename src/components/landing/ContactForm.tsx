import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/22901437999?text=Bonjour%20Mobile%20Store%20Plus%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20produits%20et%20services.";

const nameRegex = /^[a-zA-ZÀ-ÿ\s\-]{3,100}$/;
const phoneRegex = /^\+[\d\s]{8,20}$/;
const phoneDigitsOnly = (v: string) => v.replace(/[^\d]/g, "");

const ContactForm = () => {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", request: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = {
    name: !nameRegex.test(form.name) ? (lang === "fr" ? "⚠️ Veuillez entrer un nom valide (Ex : Jean Dupont)" : "⚠️ Please enter a valid name (e.g. Jean Dupont)") : "",
    phone: (() => {
      const digits = phoneDigitsOnly(form.phone);
      if (!form.phone.startsWith("+") || digits.length < 8 || digits.length > 15)
        return lang === "fr" ? "⚠️ Numéro invalide. Ex : +229 97 XX XX XX" : "⚠️ Invalid number. E.g.: +229 97 XX XX XX";
      return "";
    })(),
    request: !form.request ? (lang === "fr" ? "⚠️ Veuillez sélectionner une option" : "⚠️ Please select an option") : "",
    message: form.message.length < 20 ? (lang === "fr" ? "⚠️ Veuillez écrire au moins 20 caractères" : "⚠️ Please write at least 20 characters") : "",
  };

  const isValid = !errors.name && !errors.phone && !errors.request && !errors.message;

  const handleBlur = (field: string) => setTouched((p) => ({ ...p, [field]: true }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    const msg = `Nom: ${form.name}\nTéléphone: ${form.phone}\nDemande: ${form.request}\nMessage: ${form.message}`;
    window.open(`https://wa.me/22901437999?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-background py-14 px-4">
        <div className="container mx-auto max-w-lg text-center py-12">
          <div className="text-whatsapp text-5xl mb-4">
            <i className="fa-solid fa-circle-check" />
          </div>
          <p className="text-lg font-semibold text-whatsapp">
            {lang === "fr" ? "✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais." : "✅ Message sent! We will respond as soon as possible."}
          </p>
        </div>
      </section>
    );
  }

  const fieldIcon = (field: string, hasError: boolean) => {
    if (!touched[field]) return null;
    if (hasError) return null;
    return <i className="fa-solid fa-circle-check absolute right-3 top-3 text-whatsapp" style={{ fontSize: "1rem" }} />;
  };

  return (
    <section id="contact" className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-lg">
        <SectionTitle>{t.contactTitle}</SectionTitle>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name */}
          <div>
            <div className="relative">
              <i className="fa-solid fa-user absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
              <input
                type="text"
                placeholder={lang === "fr" ? "Ex : Jean Dupont" : "E.g.: Jean Dupont"}
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                onBlur={() => handleBlur("name")}
                className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${touched.name && errors.name ? "border-[#e53e3e]" : "border-input"}`}
              />
              {fieldIcon("name", !!errors.name)}
            </div>
            {touched.name && errors.name && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <i className="fa-solid fa-phone absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
              <span className="absolute left-10 top-2.5 text-sm">🇧🇯</span>
              <input
                type="tel"
                placeholder="Ex : +229 97 XX XX XX"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                onBlur={() => handleBlur("phone")}
                className={`w-full pl-[4.5rem] pr-10 py-2.5 border rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${touched.phone && errors.phone ? "border-[#e53e3e]" : "border-input"}`}
              />
              {fieldIcon("phone", !!errors.phone)}
            </div>
            {touched.phone && errors.phone && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.phone}</p>}
          </div>

          {/* Dropdown */}
          <div>
            <div className="relative">
              <i className="fa-solid fa-list absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
              <select
                value={form.request}
                onChange={(e) => { setForm({ ...form, request: e.target.value }); setTouched((p) => ({ ...p, request: true })); }}
                onBlur={() => handleBlur("request")}
                className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none ${touched.request && errors.request ? "border-[#e53e3e]" : "border-input"}`}
              >
                <option value="" disabled>{lang === "fr" ? "-- Sélectionnez une option --" : "-- Select an option --"}</option>
                {t.requestOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {fieldIcon("request", !!errors.request)}
            </div>
            {touched.request && errors.request && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.request}</p>}
          </div>

          {/* Message */}
          <div>
            <div className="relative">
              <i className="fa-solid fa-message absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
              <textarea
                placeholder={lang === "fr" ? "Décrivez votre besoin en détail... (minimum 20 caractères)" : "Describe your need in detail... (minimum 20 characters)"}
                maxLength={500}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onBlur={() => handleBlur("message")}
                className={`w-full pl-10 pr-10 py-2.5 border rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none ${touched.message && errors.message ? "border-[#e53e3e]" : "border-input"}`}
              />
              {fieldIcon("message", !!errors.message)}
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 text-right">
              {form.message.length} / 500 {lang === "fr" ? "caractères" : "characters"}
            </p>
            {touched.message && errors.message && <p className="text-[11px] mt-1" style={{ color: "#e53e3e" }}>{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-paper-plane" style={{ fontSize: "1rem" }} />
            {t.sendBtn}
          </button>
        </form>

        {/* WhatsApp block */}
        <div className="mt-8 bg-whatsapp rounded-lg p-6 text-center text-whatsapp-foreground">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-whatsapp-foreground text-whatsapp font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "1.2rem" }} />
            {t.whatsappChatBtn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
