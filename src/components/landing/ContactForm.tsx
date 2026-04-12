import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const ContactForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", request: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message as fallback
    const msg = `Nom: ${form.name}\nTéléphone: ${form.phone}\nDemande: ${form.request}\nMessage: ${form.message}`;
    window.open(`https://wa.me/22901437999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-lg">
        <SectionTitle>{t.contactTitle}</SectionTitle>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <i className="fa-solid fa-user absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
            <input
              type="text"
              placeholder={t.nameLabel}
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="relative">
            <i className="fa-solid fa-phone absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
            <input
              type="tel"
              placeholder={t.phoneLabel}
              required
              maxLength={20}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="relative">
            <i className="fa-solid fa-list absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
            <select
              required
              value={form.request}
              onChange={(e) => setForm({ ...form, request: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
            >
              <option value="">{t.requestLabel}</option>
              {t.requestOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <i className="fa-solid fa-message absolute left-3 top-3 text-muted-foreground" style={{ fontSize: "1rem" }} />
            <textarea
              placeholder={t.messageLabel}
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 border border-input rounded-lg text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-paper-plane" style={{ fontSize: "1rem" }} />
            {t.sendBtn}
          </button>
        </form>

        {/* WhatsApp block */}
        <div className="mt-8 bg-whatsapp rounded-lg p-6 text-center text-whatsapp-foreground">
          <a
            href="https://wa.me/22901437999?text=Bonjour%2C%20je%20voudrais%20avoir%20des%20informations%20sur..."
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
