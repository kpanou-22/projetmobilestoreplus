import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: "fa-mobile-screen", label: t.svc1 },
    { icon: "fa-right-left", label: t.svc2 },
    { icon: "fa-screwdriver-wrench", label: t.svc3 },
    { icon: "fa-headphones", label: t.svc4 },
    { icon: "fa-laptop", label: t.svc5 },
    { icon: "fa-battery-full", label: t.svc6 },
  ];

  return (
    <section id="services" className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle>{t.servicesTitle}</SectionTitle>
        <div className="grid grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 border-l-4 border-l-primary shadow-sm">
              <i className={`fa-solid ${s.icon} text-primary`} style={{ fontSize: "1.2rem" }} />
              <span className="font-medium text-sm text-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
