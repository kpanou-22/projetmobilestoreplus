import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { useState, useEffect } from "react";
import { User, Phone, List, MessageSquare, Send, CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";

const WHATSAPP_NUMBER = "2290143799999";

const nameRegex = /^[a-zA-ZÀ-ÿ\s\-]{3,100}$/;
const phoneDigitsOnly = (v: string) => v.replace(/[^\d]/g, "");

const ContactForm = () => {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", request: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

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
    const whatsappMsg = `Bonjour Mobile Store Plus, je suis ${form.name} ( ${form.phone} ) et je souhaite : ${form.message}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;
    window.open(whatsappLink, "_blank");
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setShowWhatsApp(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowWhatsApp(false);
    }
  }, [submitted]);

  if (submitted) {
    const whatsappMsg = `Bonjour Mobile Store Plus, je suis ${form.name} ( ${form.phone} ) et je souhaite : ${form.message}`;
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

    return (
      <section id="contact" className="bg-white py-24 px-4">
        <div className="container mx-auto max-w-lg">
          <SectionTitle>{t.contactTitle}</SectionTitle>
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] text-center space-y-6">
            <div className="space-y-4">
              <p className="text-[#25d366] text-sm font-medium">
                ✅ Message envoyé ! Nous vous répondrons dans les plus brefs délais.
              </p>
              <p className="text-muted-foreground text-[12px]">
                Cliquez ci-dessous pour continuer avec notre équipe.
              </p>
            </div>

            <div className={`space-y-4 transition-all duration-1000 ${showWhatsApp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25d366] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Démarrer une autre discussion WhatsApp
                </a>
                
                <a
                  href="mailto:mobilestoreplus20@gmail.com"
                  className="w-full bg-secondary text-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-secondary/80 transition-all"
                >
                  <Send className="w-4 h-4" />
                  Continuer par Email
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full bg-transparent text-[#0355b4] font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-[#0355b4]/5 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                Envoyer un autre message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const fieldIcon = (field: string, hasError: boolean) => {
    if (!touched[field]) return null;
    if (hasError) return null;
    return <CheckCircle2 className="w-4 h-4 text-whatsapp absolute right-4 top-1/2 -translate-y-1/2" />;
  };

  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-xl">
        <SectionTitle>{t.contactTitle}</SectionTitle>
        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{lang === "fr" ? "Nom complet" : "Full Name"}</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                <input
                  type="text"
                  placeholder={lang === "fr" ? "Ex : Jean Dupont" : "E.g.: Jean Dupont"}
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onBlur={() => handleBlur("name")}
                  className={`w-full pl-12 pr-12 py-4 bg-secondary/30 border-2 rounded-2xl text-base transition-all focus:outline-none focus:bg-white ${touched.name && errors.name ? "border-destructive/50 focus:border-destructive" : "border-transparent focus:border-primary/50"}`}
                />
                {fieldIcon("name", !!errors.name)}
              </div>
              {touched.name && errors.name && <p className="text-[11px] font-bold text-destructive ml-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{lang === "fr" ? "Téléphone" : "Phone"}</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                <span className="absolute left-11 top-1/2 -translate-y-1/2 text-lg">🇧🇯</span>
                <input
                  type="tel"
                  placeholder="Ex : +229 97 XX XX XX"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  onBlur={() => handleBlur("phone")}
                  className={`w-full pl-[4.5rem] pr-12 py-4 bg-secondary/30 border-2 rounded-2xl text-base transition-all focus:outline-none focus:bg-white ${touched.phone && errors.phone ? "border-destructive/50 focus:border-destructive" : "border-transparent focus:border-primary/50"}`}
                />
                {fieldIcon("phone", !!errors.phone)}
              </div>
              {touched.phone && errors.phone && <p className="text-[11px] font-bold text-destructive ml-1">{errors.phone}</p>}
            </div>

            {/* Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">{lang === "fr" ? "Type de demande" : "Request Type"}</label>
              <div className="relative">
                <List className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50 pointer-events-none" />
                <select
                  value={form.request}
                  onChange={(e) => { setForm({ ...form, request: e.target.value }); setTouched((p) => ({ ...p, request: true })); }}
                  onBlur={() => handleBlur("request")}
                  className={`w-full pl-12 pr-12 py-4 bg-secondary/30 border-2 rounded-2xl text-base transition-all focus:outline-none focus:bg-white appearance-none cursor-pointer ${touched.request && errors.request ? "border-destructive/50 focus:border-destructive" : "border-transparent focus:border-primary/50"}`}
                >
                  <option value="" disabled>{lang === "fr" ? "-- Sélectionnez --" : "-- Select --"}</option>
                  {t.requestOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50">
                  <List className="w-full h-full" />
                </div>
              </div>
              {touched.request && errors.request && <p className="text-[11px] font-bold text-destructive ml-1">{errors.request}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-muted-foreground/50" />
                <textarea
                  placeholder={lang === "fr" ? "Décrivez votre besoin..." : "Describe your need..."}
                  maxLength={500}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onBlur={() => handleBlur("message")}
                  className={`w-full pl-12 pr-12 py-4 bg-secondary/30 border-2 rounded-2xl text-base transition-all focus:outline-none focus:bg-white resize-none ${touched.message && errors.message ? "border-destructive/50 focus:border-destructive" : "border-transparent focus:border-primary/50"}`}
                />
                {fieldIcon("message", !!errors.message)}
              </div>
              <div className="flex justify-between items-center mt-1 px-1">
                {touched.message && errors.message ? <p className="text-[11px] font-bold text-destructive">{errors.message}</p> : <span></span>}
                <span className="text-[10px] font-bold text-muted-foreground">{form.message.length} / 500</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="group w-full bg-primary text-white font-black py-5 rounded-2xl text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              {t.sendBtn}
            </button>
          </form>

          {/* WhatsApp CTA */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{lang === "fr" ? "Ou discutez directement" : "Or chat directly"}</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-whatsapp font-black text-lg hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-6 h-6 fill-whatsapp" />
              WhatsApp Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
