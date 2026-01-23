import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, Shield } from "lucide-react";
import "./../../customStyles/customstyles.css"

interface HeroSectionProps {
  onOpenModal: () => void;
}

const HeroSection = ({
  onOpenModal
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="herosection">
      <div className="overlaybackground"></div>
      <video src="/images/background-loop-compressed.mp4" autoPlay loop muted className="videoloop" />
      {/* 3D Dotted Surface Background */}


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
          {/* Hero Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="mt-16 flex justify-center relative"
            id="hero-box"
          >
            {/* Soft glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="maintitle"
          >
            Conecte-se com o futuro, <br />
            <span className="text-[#3d5a20] dark:text-primary text-gradient hover:glow-text transition-all duration-300">
              conecte-se com a IT Complete.
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
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
              className="h-14 px-8 text-lg border-border bg-secondary/20 hover:bg-secondary/30 text-foreground transition-all hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer soluções
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;