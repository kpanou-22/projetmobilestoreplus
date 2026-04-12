import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import { useRef, useState } from "react";

const Testimonials = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 280;
    setActive(Math.round(scrollLeft / (cardWidth + 16)));
  };

  const scrollTo = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 280;
    scrollRef.current.scrollTo({ left: idx * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section className="py-14 px-4" style={{ backgroundColor: "hsl(var(--light-bg))" }}>
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>{t.testimonialsTitle}</SectionTitle>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {t.testimonials.map((tm, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-72 bg-card border border-border rounded-lg p-5 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <i key={j} className="fa-solid fa-star text-star" style={{ fontSize: "0.9rem" }} />
                ))}
              </div>
              <p className="italic text-sm text-muted-foreground mb-4">"{tm.quote}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground">{tm.name}</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {tm.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {t.testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
