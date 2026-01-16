import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenModal: () => void;
}

const CTASection = ({ onOpenModal }: CTASectionProps) => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 tracking-tight">
            Pronto para elevar o nível da sua <br />
            <span className="text-gradient">operação de TI?</span>
          </h2>
          <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como podemos ajudar sua empresa a crescer com segurança e eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="xl"
              className="h-16 px-10 text-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/20 hover:scale-105 transition-all"
              onClick={onOpenModal}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
