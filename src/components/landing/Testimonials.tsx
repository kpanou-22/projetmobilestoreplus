import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getCardWidth = () => {
    if (!scrollRef.current) return 320;
    const firstCard = scrollRef.current.firstElementChild as HTMLElement;
    return firstCard ? firstCard.offsetWidth : 320;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = getCardWidth();
    const newActive = Math.round(scrollLeft / (cardWidth + 24));
    if (newActive !== active) setActive(newActive);
  };

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = getCardWidth();
    // Wrap around logic
    const safeIdx = Math.max(0, Math.min(idx, t.testimonials.length - 1));
    scrollRef.current.scrollTo({ 
      left: safeIdx * (cardWidth + 24), 
      behavior: "smooth" 
    });
  };

  const next = () => {
    const nextIdx = (active + 1) % t.testimonials.length;
    scrollTo(nextIdx);
  };

  const prev = () => {
    const prevIdx = (active - 1 + t.testimonials.length) % t.testimonials.length;
    scrollTo(prevIdx);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [active, isHovered]);

  return (
    <section id="testimonials" className="py-24 px-4 bg-white relative overflow-hidden group/section">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>{t.testimonialsTitle}</SectionTitle>
        
        <div className="relative mt-12 px-2 md:px-12">
          {/* Navigation Arrows - Desktop only or prominent */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-border/50 text-primary rounded-2xl shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all opacity-0 group-hover/section:opacity-100 hidden md:flex"
            aria-label="pécédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-border/50 text-primary rounded-2xl shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all opacity-0 group-hover/section:opacity-100 hidden md:flex"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4 mask-fade-edges active:cursor-grabbing cursor-grab select-none"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {t.testimonials.map((tm, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[290px] xs:w-[320px] bg-white border border-border/50 rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 relative group"
              >
                <div className="absolute top-6 right-8 text-primary/5 group-hover:text-primary/10 transition-colors">
                  <Quote className="w-12 h-12 fill-current" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-star text-star" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 text-base leading-relaxed italic relative z-10 min-h-[100px]">
                  "{tm.quote}"
                </p>
                
                <div className="flex items-center justify-between border-t border-border/50 pt-6">
                  <div className="flex flex-col">
                    <span className="font-black text-foreground">{tm.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                      {tm.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary font-black text-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {tm.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {t.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === active ? "w-10 bg-primary shadow-lg shadow-primary/20" : "w-3 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
