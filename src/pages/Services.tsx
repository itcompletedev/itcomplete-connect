import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ContactModal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Soluções completas de{" "}
              <span className="text-gradient">tecnologia</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soluções completas para todo o ciclo de vida da infraestrutura de TI. Do planejamento à operação, garantimos segurança, performance e continuidade para seu negócio.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/servicos/${service.id}`}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

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

export default Services;
