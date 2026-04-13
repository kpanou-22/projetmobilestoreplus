import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpeg";
import { Phone, MessageCircle, Play } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/2290143799999?text=Bonjour%20Mobile%20Store%20Plus%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20vos%20produits%20et%20services.";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative bg-white pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.home}
        </div>

        <img 
          src={logo} 
          alt="Mobile Store Plus" 
          className="h-24 w-auto mx-auto mb-6 rounded-3xl object-contain shadow-2xl shadow-primary/20 border-4 border-white transform hover:rotate-2 transition-transform duration-500" 
        />
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
          Mobile Store <span className="text-primary">Plus</span>
        </h1>
        
        <p className="text-muted-foreground mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          {t.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="tel:+2290143799999"
            className="group inline-flex items-center justify-center gap-3 bg-primary text-white font-bold px-8 py-4 rounded-2xl text-base shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            {t.callBtn}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-whatsapp text-white font-bold px-8 py-4 rounded-2xl text-base shadow-lg shadow-whatsapp/30 hover:shadow-whatsapp/40 hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            {t.whatsappBtn}
          </a>
        </div>

        {/* Video player with premium styling */}
        <div className="relative max-w-3xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-[1.8rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
            <video
              controls
              className="w-full"
              poster=""
            >
              <source src="/video_de_presentation.mp4" type="video/mp4" />
              {t.videoLabel}
            </video>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 text-white shadow-2xl">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
