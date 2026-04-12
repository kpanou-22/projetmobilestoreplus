import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";

const Location = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-3xl">
        <SectionTitle>{t.locationTitle}</SectionTitle>
        {/* Map placeholder */}
        <div className="bg-muted rounded-lg h-56 flex items-center justify-center mb-6 border border-border">
          <i className="fa-solid fa-location-dot text-primary text-4xl" />
        </div>
        <div className="text-center space-y-2">
          <p className="text-sm text-foreground">
            <i className="fa-solid fa-location-dot text-primary mr-2" />
            {t.address}
          </p>
          <p className="text-sm text-foreground">
            <i className="fa-solid fa-phone text-primary mr-2" />
            01 43 79 99 99
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
