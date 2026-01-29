import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, Shield } from "lucide-react";
import "./../../customStyles/customstyles.css"

const HumanSection = () => {
    return (
        <section className="humanSection">
            <div className="humancontainer">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="humancontainer-wrapper-one"
                >
                    <div className="humancontainer-wrapper-one-text">
                        <h1>Mais de 15 anos de experiência</h1>
                        <p>Desenvolvendo resultados orientados a necessidades reais.</p>
                    </div>
                </motion.div>
                <div className="humancontainer-wrapper-two">
                </div>
            </div>
        </section>
    );
};

export default HumanSection;