import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ContactModal";
import CTASection from "@/components/sections/CTASection";
import { CheckCircle, Building, Users, Award, Shield } from "lucide-react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    { icon: Shield, title: "Confiança", description: "Relações construídas com transparência e responsabilidade." },
    { icon: Award, title: "Especialização", description: "Equipe certificada e em constante atualização." },
    { icon: Building, title: "Compromisso", description: "Resultados mensuráveis e entregas no prazo." },
    { icon: Users, title: "Relacionamento", description: "Parcerias de longo prazo com nossos clientes." },
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tecnologia com{" "}
                <span className="text-gradient">responsabilidade</span>, estratégia e continuidade
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nossa história
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A IT Complete foi criada em 2008 como uma empresa integradora especializada no fornecimento, gestão e serviços de tecnologia da informação.
                  </p>
                  <p>
                    Atuamos no desenho, implementação e operação de ambientes críticos, garantindo segurança, desempenho e estabilidade para negócios que dependem da TI para crescer.
                  </p>
                  <p>
                    Ao longo de mais de 15 anos, construímos uma trajetória sólida baseada em resultados concretos e relacionamentos de longo prazo com nossos clientes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="p-6 bg-background border border-border rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2008</div>
                  <div className="text-muted-foreground text-sm">Fundação</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-muted-foreground text-sm">Projetos</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Clientes</div>
                </div>
                <div className="p-6 bg-background border border-border rounded-xl text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground text-sm">Suporte</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Nossos valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Princípios que guiam cada projeto e relacionamento.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Nossa expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Infraestrutura de missão crítica",
                  "Cibersegurança e compliance",
                  "Cloud pública e híbrida",
                  "Redes corporativas e SD-WAN",
                  "Backup e disaster recovery",
                  "Monitoramento e observabilidade",
                  "Virtualização e containers",
                  "Serviços gerenciados (MSP)",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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

export default About;
