import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, Shield } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({
  onOpenModal
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a12]">
      {/* 3D Dotted Surface Background */}
      <DottedSurface className="opacity-40" />

      {/* Primary Glow - Top Center */}
      <div
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary)), transparent 70%)`,
          filter: "blur(80px)"
        }}
      />

      {/* Secondary Accent - Bottom Right */}
      <div
        className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, hsl(var(--primary)), transparent 60%)`,
          filter: "blur(100px)"
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <Shield size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">
              Parceiro Certificado MSP
            </span>
            <div className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Desde 2008</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight"
          >
            Sua operação de TI, <br />
            <span className="text-gradient hover:glow-text transition-all duration-300">
              blindada e eficiente.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Infraestrutura crítica, segurança ofensiva e cloud services para empresas que não aceitam downtime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all hover:scale-105"
              onClick={onOpenModal}
            >
              Falar com um especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="h-14 px-8 text-lg border-white/10 bg-white/5 hover:bg-white/10 text-foreground transition-all hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer soluções
            </Button>
          </motion.div>

          {/* Trust Indicators - Mini Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { label: "SLA Garantido", value: "99.9%" },
              { label: "Clientes Ativos", value: "+50" },
              { label: "Projetos", value: "+200" },
              { label: "Suporte", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;