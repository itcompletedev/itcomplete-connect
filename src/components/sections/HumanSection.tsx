import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, Shield } from "lucide-react";
import "./../../customStyles/customstyles.css"

const HumanSection = () => {
    return (
        <section className="humanSection">
            <div className="humancontainer">
                <div className="humancontainer-wrapper-one">
                    <div className="humancontainer-wrapper-one-text">
                        <h1>Expertise</h1>
                        <p>Desenvolvemos resultados orientados a pessoas</p>
                    </div>
                </div>

                <div className="humancontainer-wrapper-two">
                </div>
            </div>
        </section>
    );
};

export default HumanSection;