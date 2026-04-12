import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

const SpecialOffers = () => {
  const { t } = useLanguage();

  const offers = [
    { icon: "fa-arrows-rotate", title: t.offer1, desc: t.offer1Desc },
    { icon: "fa-money-bill-wave", title: t.offer2, desc: t.offer2Desc },
    { icon: "fa-bolt", title: t.offer3, desc: t.offer3Desc },
  ];

  return (
    <section id="offers" className="bg-primary text-primary-foreground py-14 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-3">
          <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
            {t.offerBadge}
          </span>
        </div>
        <SectionTitle light>{t.offerTitle}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-4">
          {offers.map((o, i) => (
            <div key={i} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-5 text-center">
              <i className={`fa-solid ${o.icon} text-2xl mb-3 block`} />
              <h3 className="font-bold mb-1">{o.title}</h3>
              <p className="text-sm opacity-80">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
