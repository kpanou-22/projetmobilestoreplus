import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsBanner from "@/components/landing/StatsBanner";
import Services from "@/components/landing/Services";
import Products from "@/components/landing/Products";
import SpecialOffers from "@/components/landing/SpecialOffers";
import WhyUs from "@/components/landing/WhyUs";
import Testimonials from "@/components/landing/Testimonials";
import Location from "@/components/landing/Location";
import ContactForm from "@/components/landing/ContactForm";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <LanguageProvider>
    <Navbar />
    <Hero />
    <StatsBanner />
    <Services />
    <Products />
    <SpecialOffers />
    <WhyUs />
    <Testimonials />
    <Location />
    <ContactForm />
    <FinalCTA />
    <Footer />
  </LanguageProvider>
);

export default Index;
