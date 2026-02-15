import ContactSection from "./components/ContactSection";
import ExamplesSection from "./components/ExamplesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ExamplesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
