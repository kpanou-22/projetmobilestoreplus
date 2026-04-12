import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-primary text-primary-foreground py-14 px-4 text-center">
      <div className="container mx-auto max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{t.ctaTitle}</h2>
        <p className="text-sm opacity-80 mb-6">
          <i className="fa-solid fa-location-dot mr-1" />
          {t.address}
        </p>
        <div className="bg-primary-foreground rounded-lg py-5 px-6 inline-block">
          <a href="tel:+22901437999" className="text-primary font-bold text-xl flex items-center gap-2">
            <i className="fa-solid fa-phone" />
            01 43 79 99 99
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
