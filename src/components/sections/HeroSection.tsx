import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
interface HeroSectionProps {
  onOpenModal: () => void;
}
const HeroSection = ({
  onOpenModal
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a12]">
      {/* Background Base - Dark with slight blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d18] via-[#0a0a12] to-[#080810]" />
      
      {/* Aurora Glow - Top Purple/Pink */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px]"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 30% 10%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 10%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Secondary Glow - Mid section */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)
          `
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)"
          }}
        />
      </div>

      {/* Horizon Glow - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[400px]"
        style={{
          background: `
            linear-gradient(to top, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)
          `
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-purple-500/10 rounded-full blur-[60px] animate-pulse" />
      <div className="absolute top-[30%] right-[25%] w-24 h-24 bg-pink-500/10 rounded-full blur-[50px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-[30%] left-[30%] w-20 h-20 bg-cyan-500/5 rounded-full blur-[40px] animate-pulse" style={{ animationDelay: "2s" }} />


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