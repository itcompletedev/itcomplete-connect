import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
interface HeaderProps {
  onOpenModal: () => void;
}
const Header = ({
  onOpenModal
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: "Início",
    path: "/"
  }, {
    name: "Serviços",
    path: "/servicos"
  }, {
    name: "Sobre",
    path: "/sobre"
  }, {
    name: "Contato",
    path: "/contato"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
            </span>
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                {link.name}
              </Link>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={onOpenModal}>
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background border-b border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)} className={`text-base font-medium py-2 transition-colors ${isActive(link.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.name}
                </Link>)}
              <Button variant="hero" size="lg" className="mt-4" onClick={() => {
            setMobileMenuOpen(false);
            onOpenModal();
          }}>
                Solicitar Orçamento
              </Button>
            </nav>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;