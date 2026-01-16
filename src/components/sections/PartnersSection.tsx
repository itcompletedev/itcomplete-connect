import { motion } from "framer-motion";

const partners = [
  "Microsoft",
  "Cisco",
  "VMware",
  "Dell",
  "Fortinet",
  "Veeam",
  "AWS",
  "Azure",
];

const PartnersSection = () => {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-lg font-medium text-muted-foreground">
            Parceiros e tecnologias
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-card border border-border rounded-lg"
            >
              <span className="text-muted-foreground font-medium text-sm">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
