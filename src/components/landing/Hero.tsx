import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="bg-primary text-primary-foreground py-16 px-4 text-center">
      <div className="container mx-auto max-w-2xl">
        <div className="w-20 h-20 mx-auto mb-4 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
          <i className="fa-solid fa-mobile-screen-button text-4xl" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Mobile Store Plus</h1>
        <p className="text-primary-foreground/80 mb-8 text-sm md:text-base leading-relaxed">{t.tagline}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="tel:+22901437999"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            <i className="fa-solid fa-phone" style={{ fontSize: "1rem" }} />
            {t.callBtn}
          </a>
          <a
            href="https://wa.me/22901437999?text=Bonjour%2C%20je%20voudrais%20avoir%20des%20informations%20sur..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "1rem" }} />
            {t.whatsappBtn}
          </a>
        </div>

        {/* Video placeholder */}
        <div className="bg-primary-foreground/10 rounded-xl p-8 flex flex-col items-center gap-3 border border-primary-foreground/20">
          <i className="fa-solid fa-circle-play text-5xl opacity-70" />
          <span className="text-sm opacity-80">{t.videoLabel}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
