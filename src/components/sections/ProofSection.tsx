import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "15+", label: "Anos de experiência" },
  { value: "200+", label: "Projetos entregues" },
  { value: "50+", label: "Clientes ativos" },
  { value: "99.9%", label: "Disponibilidade" },
];

const ProofSection = () => {
  return (
    <section className="py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
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
                "Suporte técnico especializado e responsivo",
                "Parceria com os principais fabricantes",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
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
                className="p-6 bg-background border border-border rounded-xl text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
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
