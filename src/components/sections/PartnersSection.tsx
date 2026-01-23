import { motion } from "framer-motion";

const partners = [
  { name: "Cisco", logo: "/images/Partners/Cisco-logo.png" },
  { name: "Dell", logo: "/images/Partners/Dell_Logo.png" },
  { name: "Microsoft", logo: "/images/Partners/microsoft.png" },
  { name: "Cisco", logo: "/images/Partners/Cisco-logo.png" },
  { name: "Dell", logo: "/images/Partners/Dell_Logo.png" },
  { name: "Google", logo: "/images/Partners/googlepartner.png" }
];

const partners2 = [
  { name: "Huawei", logo: "/images/Partners/huaweilogo.png" },
  { name: "Fortinet", logo: "/images/Partners/fortinet.png" }
];

const PartnersSection = () => {
  return (
    <section className="py-24 border-b border-white/5 bg-background relative overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-primary/20 rounded-full bg-primary/5 mb-4">
            Soluções para resultados
          </span>
          <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground">
            Parcerias estratégicas
          </h3>
        </motion.div>

        {/* Marquee Wrapper with Fade Effects */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex space-x-12 md:space-x-24 w-max items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the array to ensure seamless looping */}
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center min-w-[120px] md:max-w-[200px] group transition-all duration-500"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-9 md:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>

          {/*Marquee 2*/}
          <motion.div
            className="flex space-x-12 md:space-x-24 w-max items-center"
            animate={{
              x: [0, +1000],
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the array to ensure seamless looping */}
            {[...partners2, ...partners2].map((partner2, index) => (
              <div
                key={`${partner2.name}-${index}`}
                className="flex items-center justify-center min-w-[120px] md:max-w-[200px] group transition-all duration-500"
              >
                <img
                  src={partner2.logo}
                  alt={`${partner2.name} logo`}
                  className="h-9 md:h-12 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-pointer"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
