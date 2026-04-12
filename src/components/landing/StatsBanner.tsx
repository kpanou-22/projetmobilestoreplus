import { useLanguage } from "@/contexts/LanguageContext";

const StatsBanner = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: "fa-award", text: t.stat1 },
    { icon: "fa-users", text: t.stat2 },
    { icon: "fa-screwdriver-wrench", text: t.stat3 },
    { icon: "fa-thumbs-up", text: t.stat4 },
  ];

  return (
    <section className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <i className={`fa-solid ${s.icon}`} style={{ fontSize: "1.5rem" }} />
            <span className="text-sm font-semibold">{s.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;
