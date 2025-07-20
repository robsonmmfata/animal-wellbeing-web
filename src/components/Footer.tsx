import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full p-2">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">VetCare</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Cuidado, carinho e saúde para quem é parte da família. 
              Nossa missão é proporcionar o melhor atendimento veterinário 
              com amor e dedicação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth hover-scale">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth hover-scale">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Telefone</p>
                  <p className="font-medium">(11) 3456-7890</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Email</p>
                  <p className="font-medium">contato@vetcare.com.br</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Endereço</p>
                  <p className="font-medium">Rua das Flores, 123<br />São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Segunda a Sexta</p>
                  <p className="font-medium">8h às 19h</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-primary-foreground/80">Sábados</p>
                  <p className="font-medium">8h às 14h</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-white/10 rounded-lg border border-white/20">
                <p className="text-sm font-medium text-white">
                  🚨 Emergência 24h
                </p>
                <p className="text-sm text-white/80">
                  Plantão disponível todos os dias
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 VetCare - Todos os direitos reservados. Desenvolvido com ❤️ para o bem-estar animal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;