import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>{t.locationTitle}</SectionTitle>
        
        {/* Map placeholder with premium design */}
        <div className="relative group rounded-[3rem] overflow-hidden bg-secondary/30 h-72 flex items-center justify-center border-4 border-white shadow-2xl transition-all duration-500 hover:shadow-primary/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          <div className="p-8 rounded-full bg-white shadow-xl text-primary transform group-hover:scale-110 transition-transform duration-500">
            <MapPin className="w-12 h-12" />
          </div>
          
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Carrefour+Parana+Abomey-Calavi"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto"
          >
             <p className="font-black text-foreground flex items-center gap-2">
               <MapPin className="w-4 h-4 text-primary" />
               {t.address}
             </p>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-3xl bg-secondary/20 border border-border/50 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Address</p>
              <p className="font-bold text-foreground">{t.address}</p>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-secondary/20 border border-border/50 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Phone</p>
              <p className="font-bold text-foreground">+229 01 43 79 99 99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
