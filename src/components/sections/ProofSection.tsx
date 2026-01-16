import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "200+", label: "Projetos entregues" },
  { value: "50+", label: "Clientes ativos" },
  { value: "99.9%", label: "Disponibilidade" },
];

const ProofSection = () => {
  return (
    <section className="py-24 bg-card/20 border-y border-white/5 relative">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Experiência comprovada em{" "}
              <span className="text-gradient">missão crítica</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Desde 2008 apoiando empresas na construção, proteção e evolução de seus ambientes de TI. Nossa experiência se traduz em projetos entregues com excelência e relacionamentos de longo prazo.
            </p>

            <ul className="space-y-4">
              {[
                "Equipe certificada nas principais tecnologias",
                "Metodologia comprovada de entrega de projetos",
                "Suporte técnico especializado e responsivo 24/7",
                "Parceria Gold com os principais fabricantes",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={22} className="text-primary flex-shrink-0" />
                  <span className="text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl text-center hover:bg-card/60 transition-colors group"
              >
                <div className="text-5xl font-bold text-foreground mb-2 font-display group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
