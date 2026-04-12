import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.products, href: "#products" },
    { label: t.offers, href: "#offers" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className="bg-secondary text-secondary-foreground sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          <i className="fa-solid fa-mobile-screen-button mr-2" />
          Mobile Store Plus
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-80 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <div className="flex bg-primary/30 rounded-lg overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary-foreground text-primary" : "text-primary-foreground"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary-foreground text-primary" : "text-primary-foreground"}`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"} text-lg`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-primary/20 pb-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm hover:bg-primary/20 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
