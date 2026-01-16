import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ContactModal";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import ProofSection from "@/components/sections/ProofSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main>
        <HeroSection onOpenModal={() => setIsModalOpen(true)} />
        <ServicesSection />
        <PartnersSection />
        <DifferentialsSection />
        <ProofSection />
        <CTASection onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />
      
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Index;
