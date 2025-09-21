import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-plantation.jpg";
import FormModal from "./FormModal";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-prosperity">1 200+</span> agriculteurs 
                <br />nous font déjà confiance
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                Créez votre plantation avec <span className="text-prosperity font-bold">0 F CFA</span> d'investissement initial
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                Ruralis Capital finance la création de vos plantations de palmier à huile et garantit le rachat de vos récoltes pendant 20 ans.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <FormModal type="visit">
                <Button variant="hero" size="lg" className="text-lg">
                  Démarrer ma plantation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </FormModal>
              <FormModal type="revenue">
                <Button variant="outline" size="lg" className="text-success font-bold border-white hover:bg-white hover:text-success">
                  Calculer mes revenus
                </Button>
              </FormModal>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-prosperity/20 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-prosperity" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-prosperity">2,27 Mds</div>
                  <div className="text-sm text-white/80">F CFA générés en 2024</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-prosperity/20 p-3 rounded-full">
                  <Users className="w-6 h-6 text-prosperity" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-prosperity">95%</div>
                  <div className="text-sm text-white/80">Taux de réussite</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-prosperity/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-prosperity" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-prosperity">8 régions</div>
                  <div className="text-sm text-white/80">En Côte d'Ivoire</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Trust Indicators */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Nos résultats parlent</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-3 border-b border-primary/10">
                <span className="text-muted-foreground">Hectares financés</span>
                <span className="text-2xl font-bold text-primary">3 500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary/10">
                <span className="text-muted-foreground">Agriculteurs accompagnés</span>
                <span className="text-2xl font-bold text-primary">1 200+</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-primary/10">
                <span className="text-muted-foreground">Rendement moyen</span>
                <span className="text-2xl font-bold text-success">18 t/ha</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">Revenu mensuel moyen</span>
                <span className="text-2xl font-bold text-prosperity">285 000 F</span>
              </div>
            </div>
            
            <Button variant="prosperity" className="w-full mt-6" size="lg">
              Rejoindre nos agriculteurs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;