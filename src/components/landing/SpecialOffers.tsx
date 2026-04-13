import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { RefreshCcw, Banknote, Zap } from "lucide-react";

const SpecialOffers = () => {
  const { t } = useLanguage();

  const offers = [
    { icon: RefreshCcw, title: t.offer1, desc: t.offer1Desc },
    { icon: Banknote, title: t.offer2, desc: t.offer2Desc },
    { icon: Zap, title: t.offer3, desc: t.offer3Desc },
  ];

  return (
    <section id="offers" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6">
          <span className="inline-block bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full border border-primary/20">
            {t.offerBadge}
          </span>
        </div>
        <SectionTitle>{t.offerTitle}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {offers.map((O, i) => (
            <div 
              key={i} 
              className="group bg-white border border-border/50 rounded-[2.5rem] p-8 text-center transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <O.icon className="w-8 h-8" />
              </div>
              <h3 className="font-black text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                {O.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {O.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
