import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.products, href: "#products" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 px-4">
      <div className="container mx-auto max-w-3xl text-center space-y-4">
        <div className="flex justify-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <a
            href="https://wa.me/22901437999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-whatsapp rounded-full text-whatsapp-foreground hover:opacity-90 transition-opacity"
          >
            <i className="fa-brands fa-whatsapp text-lg" />
          </a>
        </div>
        <p className="text-xs opacity-70">{t.copyright}</p>
        <p className="text-xs opacity-50">{t.legal}</p>
      </div>
    </footer>
  );
};

export default Footer;
