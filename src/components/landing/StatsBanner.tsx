import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Users, Wrench, ThumbsUp } from "lucide-react";

const StatsBanner = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Award, text: t.stat1 },
    { icon: Users, text: t.stat2 },
    { icon: Wrench, text: t.stat3 },
    { icon: ThumbsUp, text: t.stat4 },
  ];

  return (
    <section className="bg-white py-12 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((S, i) => (
          <div 
            key={i} 
            className="group flex flex-col items-center gap-4 p-6 rounded-3xl hover:bg-primary/5 transition-all duration-300"
          >
            <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
              <S.icon className="w-8 h-8" />
            </div>
            <span className="text-base font-bold text-foreground text-center line-clamp-2">
              {/* Highlight numbers in blue if they exist in the text */}
              {S.text.split(/(\d+)/).map((part, idx) => 
                /\d+/.test(part) ? (
                  <span key={idx} className="text-primary text-xl font-black">{part}</span>
                ) : (
                  part
                )
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
