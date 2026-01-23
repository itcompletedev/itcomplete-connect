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
                    <h2>Human</h2>
                    <p>Experience the power of AI with our cutting-edge technology.</p>
                </div>
            </div>

            <div className="humancontainer-wrapper-two">
                <img id="human" src="/images/SECTIONHUMAN-noBG-glow.png" alt="" />
            </div>
        </div>
    );
};

export default HumanSection;