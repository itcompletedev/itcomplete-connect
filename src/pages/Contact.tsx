import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";


const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_requests')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Nosso time entrará em contato em breve.",
      });

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Infraestrutura de TI",
    "Cibersegurança",
    "Cloud & Data Center",
    "Redes Corporativas",
    "Backup & Recuperação",
    "Monitoramento & Observabilidade",
    "Serviços Gerenciados",
  ];

  const contactInfo = [
    { icon: Mail, label: "E-mail", value: "contato@itcomplete.com.br" },
    { icon: Phone, label: "Telefone", value: "(11) 3000-0000" },
    { icon: MapPin, label: "Endereço", value: "São Paulo, SP - Brasil" },
    { icon: Clock, label: "Horário", value: "Seg - Sex: 8h às 18h" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vamos entender seu{" "}
              <span className="text-gradient">desafio de TI</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário e fale com nossos especialistas. Retornamos rapidamente com uma abordagem consultiva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envie sua mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Nome da empresa"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail corporativo *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@empresa.com"
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Serviço de interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Conte-nos sobre seu desafio de TI..."
                      className="bg-secondary border-border min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Informações de contato
                </h2>
                <ul className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Precisa de ajuda urgente?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Para clientes com contrato de suporte, temos atendimento 24/7.
                </p>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsModalOpen(true)}
                >
                  Falar com suporte
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Contact;
