import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MapPin, MessageSquare } from "lucide-react";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-2xl relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-foreground">
          {t.ctaTitle.split(' ').map((word, i) => 
            i === t.ctaTitle.split(' ').length - 1 ? <span key={i} className="text-primary">{word}</span> : word + ' '
          )}
        </h2>
        
        <p className="text-muted-foreground font-medium mb-10 flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          {t.address}
        </p>

        <a 
          href="tel:+2290143799999" 
          className="group inline-flex items-center gap-6 bg-primary p-1 pr-8 rounded-full text-white shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-0.5">Appelez-nous</p>
            <span className="font-black text-xl md:text-2xl tracking-tighter">+229 01 43 79 99 99</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
