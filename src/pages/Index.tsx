import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import PalmOil from "@/components/PalmOil";
import Regions from "@/components/Regions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="accueil">
          <Hero />
          <Stats />
          <HowItWorks />
          <Testimonials />
        </section>
        <AboutUs />
        <Services />
        <PalmOil />
        <Regions />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
