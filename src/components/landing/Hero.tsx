import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpeg";

const WHATSAPP_URL = "https://wa.me/22901437999?text=Bonjour%20Mobile%20Store%20Plus%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20produits%20et%20services.";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="bg-primary text-primary-foreground py-16 px-4 text-center">
      <div className="container mx-auto max-w-2xl">
        <img src={logo} alt="Mobile Store Plus" className="h-16 w-auto mx-auto mb-4 rounded-2xl object-contain" />
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-whatsapp text-whatsapp-foreground font-semibold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "1rem" }} />
            {t.whatsappBtn}
          </a>
        </div>

        {/* Video player */}
        <div className="rounded-xl overflow-hidden border border-primary-foreground/20">
          <video
            controls
            className="w-full rounded-xl"
            style={{ borderRadius: "12px" }}
            poster=""
          >
            <source src="/video_de_presentation.mp4" type="video/mp4" />
            {t.videoLabel}
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
