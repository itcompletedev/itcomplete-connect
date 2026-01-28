import { motion } from "framer-motion";
import { Target, Layers, Lock, Users } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Projetos de Missão Crítica",
    description: "Expertise em ambientes onde falhas não são uma opção.",
  },
  {
    icon: Layers,
    title: "Arquitetura Resiliente",
    description: "Escalabilidade e alta disponibilidade desde o design.",
  },
  {
    icon: Lock,
    title: "Security by Design",
    description: "Segurança integrada em todas as camadas das soluções.",
  },
  {
    icon: Users,
    title: "Squads Certificados",
    description: "Equipes multidisciplinares com certificações de elite.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que a IT Complete?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nossa metodologia combina rigor técnico com agilidade de negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 group"
            >
              {/* Connector Lines (Decoration) */}
              <div className="absolute top-0 left-6 w-full h-[1px] bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute left-0 top-6 h-full w-[1px] bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300">
                <item.icon className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={28} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
