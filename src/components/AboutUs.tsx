import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-prosperity" />,
      title: "Transparence totale",
      description: "Clarté absolue sur les coûts et revenus pour nos agriculteurs partenaires."
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Accompagnement permanent",
      description: "Suivi continu de nos équipes techniques sur le terrain."
    },
    {
      icon: <Award className="w-8 h-8 text-prosperity" />,
      title: "Innovation agricole",
      description: "Techniques modernes pour maximiser les rendements."
    },
    {
      icon: <Heart className="w-8 h-8 text-success" />,
      title: "Développement rural durable",
      description: "Impact positif à long terme sur les communautés rurales."
    }
  ];

  return (
    <section id="qui-sommes-nous" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leader du financement agricole en Côte d'Ivoire depuis 5 ans
          </p>
        </div>

        {/* Notre entreprise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Notre entreprise</h3>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Ruralis Capital SARL</h4>
                <p className="text-muted-foreground">Société créée en 2019, spécialisée dans le financement de plantations agricoles</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Siège social</h4>
                <p className="text-muted-foreground">Daloa, Côte d'Ivoire</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Direction</h4>
                <p className="text-muted-foreground">PDG Inocent KOFFI et 7 associés fondateurs</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Mission</h4>
                <p className="text-muted-foreground">Démocratiser l'accès aux plantations rentables pour tous les agriculteurs</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Notre expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-prosperity mb-2">12 ans</div>
                  <div className="text-sm text-muted-foreground">d'études terrain dans 360 localités</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-success mb-2">15</div>
                  <div className="text-sm text-muted-foreground">ingénieurs agronomes</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-prosperity mb-2">8 régions</div>
                  <div className="text-sm text-muted-foreground">de présence commerciale</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-success mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">partenaires certifiés</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Nos valeurs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-prosperity/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-prosperity/10 to-success/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Rejoignez notre communauté d'agriculteurs prospères
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez comment nous pouvons transformer votre agriculture
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-prosperity to-success text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;