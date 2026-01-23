import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Link
        to={href}
        className="group relative block p-8 bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-500 h-full overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary z-10 transition-colors duration-300">
            <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-base leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
            {description}
          </p>

          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide uppercase">
            Explorar
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
