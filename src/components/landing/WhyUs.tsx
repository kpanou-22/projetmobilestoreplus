import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { CheckCircle2, ShieldCheck, Zap, Heart } from "lucide-react";

const WhyUs = () => {
  const { t } = useLanguage();

  const items = [
    { title: t.why1Title, desc: t.why1Desc, icon: ShieldCheck },
    { title: t.why2Title, desc: t.why2Desc, icon: CheckCircle2 },
    { title: t.why3Title, desc: t.why3Desc, icon: Zap },
    { title: t.why4Title, desc: t.why4Desc, icon: Heart },
  ];

  return (
    <section id="why-us" className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>{t.whyTitle}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="group flex items-start gap-6 p-8 rounded-[2rem] bg-secondary/30 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 rounded-2xl bg-white text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-xl text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
