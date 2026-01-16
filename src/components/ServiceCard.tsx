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
    >
      <Link
        to={href}
        className="group block p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 card-glow h-full"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="text-primary" size={24} />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
          Saiba mais
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
