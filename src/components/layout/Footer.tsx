import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">IT</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                IT Complete
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desde 2008 apoiando empresas na construção, proteção e evolução de seus ambientes de TI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos/infraestrutura" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Infraestrutura de TI
                </Link>
              </li>
              <li>
                <Link to="/servicos/ciberseguranca" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Cibersegurança
                </Link>
              </li>
              <li>
                <Link to="/servicos/cloud" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Cloud & Data Center
                </Link>
              </li>
              <li>
                <Link to="/servicos/gerenciados" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Serviços Gerenciados
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <span>contato@itcomplete.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary" />
                <span>São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Linkedin size={16} className="text-primary" />
                <span>LinkedIn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} IT Complete. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacidade" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
