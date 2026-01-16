import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection = ({ onOpenModal }: CTASectionProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 surface-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para elevar o nível da sua{" "}
            <span className="text-gradient">operação de TI?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Fale com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com segurança e eficiência.
          </p>
          <Button variant="hero" size="xl" onClick={onOpenModal}>
            Solicitar orçamento
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
