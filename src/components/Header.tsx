import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ruralisLogo from "@/assets/ruralis-logo-new.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={ruralisLogo} alt="Ruralis Capital Logo" className="w-10 h-10" />
            <div>
              <h1 className="text-xl font-bold">
                <span className="text-success">RURALIS</span> <span className="text-prosperity">CAPITAL</span>
              </h1>
              <p className="text-[8px] text-prosperity italic leading-none whitespace-nowrap">"Finançons vos plantations, récoltons vos succès"</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a href="#accueil" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('accueil')?.scrollIntoView({behavior: 'smooth'})}>
              Accueil
            </a>
            <a href="#qui-sommes-nous" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('qui-sommes-nous')?.scrollIntoView({behavior: 'smooth'})}>
              À propos
            </a>
            <a href="#services" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Services
            </a>
            <a href="#palmier-huile" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('palmier-huile')?.scrollIntoView({behavior: 'smooth'})}>
              Palmier
            </a>
            <a href="#zones-intervention" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('zones-intervention')?.scrollIntoView({behavior: 'smooth'})}>
              Régions
            </a>
            <Link to="/partenaires" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors">
              Partenaires
            </Link>
            <a href="#contact" className="text-xs lg:text-sm text-foreground hover:text-primary font-medium transition-colors" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-3">
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Phone className="w-3 h-3" />
              <span>+225 0759566087</span>
            </div>
            <Button variant="prosperity" size="sm" className="text-xs px-3">
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#accueil" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('accueil')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Accueil
              </a>
              <a 
                href="#qui-sommes-nous" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('qui-sommes-nous')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Qui sommes-nous
              </a>
              <a 
                href="#services" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Services
              </a>
              <a 
                href="#palmier-huile" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('palmier-huile')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Palmier à huile
              </a>
              <a 
                href="#zones-intervention" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('zones-intervention')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Nos régions
              </a>
              <Link 
                to="/partenaires" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Partenaires
              </Link>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => {setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});}}
              >
                Contact
              </a>
              <div className="pt-4 border-t border-border">
                <Button variant="prosperity" className="w-full">
                  Nous contacter
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;