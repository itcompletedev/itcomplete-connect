import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import "../../customStyles/customstyles.css"

const ServicesSection = () => {
  return (
    <section id="services" >
      <div className="absolute top-0 inset-x-0 h-px" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-medium tracking-wider uppercase text-sm mb-4 block">Nossas Especialidades</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Soluções completas de TI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Do planejamento à operação, entregamos soluções que garantem segurança, performance e continuidade para seu negócio.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] xl:w-[calc(25%-2rem)] max-w-sm">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={`/servicos/${service.id}`}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
