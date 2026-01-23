import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, Shield } from "lucide-react";
import "./../../customStyles/customstyles.css"

const HumanSection = () => {
    return (
        <div className="humancontainer">
            <div className="humancontainer-wrapper-one">
                <div>
                    <h1>Human</h1>
                    <p>Desenvolvemos resultados orientados a pessoas</p>
                </div>
            </div>

            <div className="humancontainer-wrapper-two">
            </div>
        </div>
    );
};

export default HumanSection;