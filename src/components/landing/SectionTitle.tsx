const SectionTitle = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className="flex flex-col items-center mb-16 space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-1 bg-primary/20 rounded-full" />
      <div className="w-16 h-1 bg-primary rounded-full" />
      <div className="w-8 h-1 bg-primary/20 rounded-full" />
    </div>
    <h2 className={`text-3xl md:text-5xl font-black tracking-tight text-center ${light ? "text-white" : "text-foreground"}`}>
      {children}
    </h2>
  </div>
);

export default SectionTitle;
