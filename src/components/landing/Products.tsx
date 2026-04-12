import SectionTitle from "./SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import iphoneImg from "@/assets/iphone.jpg";
import macbookImg from "@/assets/macbook.jpg";
import airpodsImg from "@/assets/airpods.jpg";
import samsungImg from "@/assets/samsung.jpg";
import tabletteImg from "@/assets/tablette.jpg";
import jblImg from "@/assets/jbl.jpg";

const products = [
  { name: "iPhone", img: iphoneImg },
  { name: "MacBook", img: macbookImg },
  { name: "AirPods Max", img: airpodsImg },
  { name: "Samsung", img: samsungImg },
  { name: "Tablette", img: tabletteImg },
  { name: "Enceinte JBL", img: jblImg },
];

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="bg-background py-14 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>{t.productsTitle}</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
              <div className="h-36 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-center">
                <span className="font-semibold text-sm text-foreground">{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
