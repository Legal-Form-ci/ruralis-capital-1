import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="text-success">RURALIS</span> <span className="text-prosperity">CAPITAL</span>
              </h3>
              <p className="text-sm text-prosperity italic leading-none mt-1">
                "Finançons vos plantations, récoltons vos succès"
              </p>
            </div>
            <p className="text-primary-foreground/80">
              Leader du financement agricole en Côte d'Ivoire depuis 5 ans. 
              Nous finançons vos plantations et garantissons la commercialisation de vos récoltes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#accueil" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Accueil
              </a>
              <a href="#services" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Comment ça marche
              </a>
              <a href="#palmier" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Palmier à huile
              </a>
              <a href="#temoignages" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Témoignages
              </a>
              <a href="#regions" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Régions d'intervention
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-prosperity transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos services</h4>
            <div className="flex flex-col space-y-2 text-primary-foreground/80">
              <div>Financement de plantations</div>
              <div>Accompagnement technique</div>
              <div>Formation agricole</div>
              <div>Commercialisation garantie</div>
              <div>Suivi mensuel</div>
              <div>Délimitation GPS</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-prosperity" />
                <div>
                  <div className="text-primary-foreground/80">+225 0759566087</div>
                  <div className="text-sm text-primary-foreground/60">WhatsApp Business: +225 0759566087</div>
                  <div className="text-sm text-primary-foreground/60">Fixe: +225 2732560978</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-prosperity" />
                <span className="text-primary-foreground/80">contact@ruralis-capital.ci</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-prosperity" />
                <span className="text-primary-foreground/80">Daloa, Côte d'Ivoire</span>
              </div>
            </div>

            <Button 
              variant="prosperity" 
              className="w-full mt-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nous contacter
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Ruralis Capital. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-primary-foreground/80">
                Siège social: Daloa • 8 régions • 1 200+ agriculteurs
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-prosperity hover:text-prosperity/80"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;