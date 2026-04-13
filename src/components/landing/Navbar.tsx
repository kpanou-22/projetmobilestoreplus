import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.products, href: "#products" },
    { label: t.offers, href: "#offers" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl tracking-tight flex items-center gap-2 group">
          <div className="relative">
            <img src={logo} alt="Mobile Store Plus" className="h-10 w-10 rounded-xl object-cover transition-transform group-hover:scale-105" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white"></div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Mobile Store Plus
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Lang switcher */}
          <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full border border-border">
            <Globe className="w-4 h-4 text-muted-foreground ml-2" />
            <div className="flex rounded-full overflow-hidden text-[10px] font-bold">
              <button
                onClick={() => setLang("fr")}
                className={`px-3 py-1 flex items-center justify-center transition-all ${
                  lang === "fr" ? "bg-white shadow-sm text-primary rounded-full" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1 flex items-center justify-center transition-all ${
                  lang === "en" ? "bg-white shadow-sm text-primary rounded-full" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden p-2 rounded-xl bg-secondary/50 text-foreground hover:bg-secondary transition-colors" 
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-border transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100 py-4 shadow-xl" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium rounded-xl hover:bg-secondary text-foreground/80 hover:text-primary transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
