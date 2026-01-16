import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ContactModal";
import CTASection from "@/components/sections/CTASection";
import { Button } from "@/components/ui/button";
import { getServiceById } from "@/data/services";
import { CheckCircle, ArrowRight, Award, Clock, Users, Target } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const service = id ? getServiceById(id) : undefined;

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const whyUs = [
    { icon: Award, text: "Experiência desde 2008" },
    { icon: Users, text: "Especialistas certificados" },
    { icon: Target, text: "Projetos sob medida" },
    { icon: Clock, text: "Atendimento consultivo" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="pt-32">
        {/* Hero */}
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 mb-6">
                <service.icon size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">{service.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.heroTitle}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl" onClick={() => setIsModalOpen(true)}>
                  Solicitar orçamento
                  <ArrowRight size={20} />
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => setIsModalOpen(true)}>
                  Falar com especialista
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  O que entregamos
                </h2>
                <ul className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Benefícios para o negócio
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Por que a IT Complete
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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

export default ServiceDetail;
