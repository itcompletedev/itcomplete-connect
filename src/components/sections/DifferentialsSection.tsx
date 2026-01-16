import { motion } from "framer-motion";
import { Target, Layers, Lock, Users } from "lucide-react";

const differentials = [
  {
    icon: Target,
    title: "Projetos orientados a missão crítica",
    description: "Experiência em ambientes onde a TI não pode falhar.",
  },
  {
    icon: Layers,
    title: "Arquitetura resiliente e escalável",
    description: "Soluções que crescem com o seu negócio.",
  },
  {
    icon: Lock,
    title: "Foco em segurança e compliance",
    description: "Proteção de dados e conformidade regulatória.",
  },
  {
    icon: Users,
    title: "Atendimento especializado",
    description: "Equipe certificada e SLA flexível.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a IT Complete
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem a diferença em projetos de tecnologia.
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
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
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
