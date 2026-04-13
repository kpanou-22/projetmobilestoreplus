import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Github, Twitter, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2290143799999?text=Bonjour%20Mobile%20Store%20Plus%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20produits%20et%20services.";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.products, href: "#products" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-white border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-12">
          <div className="space-y-4">
            <h4 className="font-black text-2xl tracking-tight">
              Mobile Store <span className="text-primary">Plus</span>
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              {t.tagline}
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-primary">Links</h5>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h5 className="font-bold text-sm uppercase tracking-widest text-primary">Connect</h5>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-whatsapp text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-whatsapp/20"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              {/* Added some placeholder social for premium look */}
              {["instagram", "twitter"].map((social) => (
                <div key={social} className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all cursor-pointer">
                  {social === "instagram" ? <Instagram className="w-5 h-5" /> : <Twitter className="w-5 h-5" />}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t.copyright}</p>
          <div className="flex gap-6">
            <p className="hover:text-primary transition-colors cursor-pointer">{t.legal}</p>
            <p className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
