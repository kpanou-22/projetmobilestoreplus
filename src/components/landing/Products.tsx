import SectionTitle from "./SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

const products = ["iPhone", "MacBook", "AirPods Max", "Samsung", "Tablette", "Enceinte JBL"];

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>{t.productsTitle}</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="bg-muted h-36 flex items-center justify-center">
                <i className="fa-solid fa-image text-muted-foreground text-3xl" />
              </div>
              <div className="p-3 text-center">
                <span className="font-semibold text-sm text-foreground">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
