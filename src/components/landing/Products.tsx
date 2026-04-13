import SectionTitle from "./SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingCart, ArrowRight } from "lucide-react";
import iphoneImg from "@/assets/iphone.jpg";
import macbookImg from "@/assets/macbook.jpg";
import airpodsImg from "@/assets/airpods.jpg";
import samsungImg from "@/assets/samsung.jpg";
import tabletteImg from "@/assets/tablette.jpg";
import jblImg from "@/assets/jbl.jpg";

const products = [
  { name: "iPhone", img: iphoneImg, category: "Mobile" },
  { name: "MacBook", img: macbookImg, category: "Laptop" },
  { name: "AirPods Max", img: airpodsImg, category: "Audio" },
  { name: "Samsung", img: samsungImg, category: "Mobile" },
  { name: "Tablette", img: tabletteImg, category: "Tablet" },
  { name: "Enceinte JBL", img: jblImg, category: "Audio" },
];

const Products = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle>{t.productsTitle}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((p, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-[2.5rem] border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl text-primary">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-xl text-foreground group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <div className="w-6 h-1 bg-primary/20 rounded-full mt-2 group-hover:w-full transition-all duration-500"></div>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
