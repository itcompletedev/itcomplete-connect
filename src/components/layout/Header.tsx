import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
              <span className="text-primary font-bold text-lg">IT</span>
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">
              Complete<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="relative group py-2"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute -bottom-px left-0 right-0 h-px bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="border-primary/20 hover:bg-primary/10 hover:text-primary text-foreground/80"
              onClick={() => window.location.href = '/login'} // Placeholder
            >
              Área do Cliente
            </Button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]" 
              onClick={onOpenModal}
            >
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
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Button 
                variant="default" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;