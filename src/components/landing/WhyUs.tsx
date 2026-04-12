import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

const WhyUs = () => {
  const { t } = useLanguage();

  const items = [
    { title: t.why1Title, desc: t.why1Desc },
    { title: t.why2Title, desc: t.why2Desc },
    { title: t.why3Title, desc: t.why3Desc },
    { title: t.why4Title, desc: t.why4Desc },
  ];

  return (
    <section className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-2xl">
        <SectionTitle>{t.whyTitle}</SectionTitle>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <i className="fa-solid fa-circle-check text-primary mt-1" style={{ fontSize: "1.2rem" }} />
              <div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
