import React, { MouseEvent as ReactMouseEvent } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLAnchorElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsl(var(--primary) / 0.15), transparent 80%)`;

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
        onMouseMove={handleMouseMove}
        className="group relative block p-8 bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-500 h-full overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary z-10 transition-colors duration-300">
            <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={28} />
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors">
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
