import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
interface HeroSectionProps {
  onOpenModal: () => void;
}
const HeroSection = ({
  onOpenModal
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 surface-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-glow-pulse" style={{
      animationDelay: "1.5s"
    }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            <Shield size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Desde 2008 protegendo ambientes críticos
            </span>
          </motion.div>

          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Tecnologia crítica exige{" "}
            <span className="text-gradient">especialistas confiáveis</span>
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Infraestrutura, cibersegurança, cloud e serviços gerenciados para ambientes corporativos que não podem parar.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" onClick={onOpenModal}>
              Solicitar orçamento
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={onOpenModal}>
              Falar com especialista
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          
        </div>
      </div>
    </section>;
};
export default HeroSection;