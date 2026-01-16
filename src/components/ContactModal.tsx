import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Solicitação enviada!",
      description: "Nosso time entrará em contato em breve.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      onClose();
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 md:w-full md:max-w-lg flex items-center justify-center"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden card-glow w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Solicite um orçamento personalizado
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Preencha o formulário e fale com nossos especialistas
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="text-primary" size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Obrigado!
                    </h3>
                    <p className="text-muted-foreground">
                      Nosso time entrará em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        Mensagem
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos sobre seu desafio de TI..."
                        className="bg-secondary border-border min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar solicitação
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
