import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { Smartphone, ArrowLeftRight, Wrench, Headphones, Laptop, BatteryFull } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Smartphone, label: t.svc1 },
    { icon: ArrowLeftRight, label: t.svc2 },
    { icon: Wrench, label: t.svc3 },
    { icon: Headphones, label: t.svc4 },
    { icon: Laptop, label: t.svc5 },
    { icon: BatteryFull, label: t.svc6 },
  ];

  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>{t.servicesTitle}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((S, i) => (
            <div 
              key={i} 
              className="group bg-white border border-border/50 rounded-[2rem] p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 border-b-4 border-b-transparent hover:border-b-primary"
            >
              <div className="p-5 rounded-3xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <S.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                {S.label}
              </h3>
              <div className="w-8 h-1 bg-primary/20 rounded-full group-hover:w-16 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
