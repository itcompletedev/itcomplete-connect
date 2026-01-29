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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="herosection">
      <div className="overlaybackground"></div>
      <video src="/images/background-loop-compressed.mp4" autoPlay loop muted className="videoloop" />
      <div className="container mx-auto lg:px-8 relative z-10">
        <div className="alltitles">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="maintitle"
          >
            <span className="inner-conecte">
              <span className="conecte one">
                Conecte-se com o futuro, <br />
              </span>
              <span className="conecte two">
                conecte-se com a
              </span>
            </span>
            <span className="conecte three">
              IT Complete
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subtitle"
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
              className="h-10 px-8 text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] transition-all hover:scale-105"
              onClick={onOpenModal}
            >
              Falar com um especialista
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="h-10 px-6 text-sm border-border bg-secondary/20 hover:bg-secondary/30 text-white transition-all hover:scale-105"
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