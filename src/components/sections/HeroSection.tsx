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
      {/* Background Base */}
      <div className="absolute inset-0 surface-gradient" />
      
      {/* Grid Pattern - Visible */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)"
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-glow-pulse" style={{ animationDelay: "1s" }} />

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