const SectionTitle = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex flex-col items-center mb-8">
    <div className="w-10 h-[3px] bg-primary rounded mb-3" />
    <h2 className={`text-2xl md:text-3xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {children}
    </h2>
  </div>
);

export default SectionTitle;
