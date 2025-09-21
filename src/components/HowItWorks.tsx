import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, TrendingUp, ArrowRight } from "lucide-react";
import FormModal from "./FormModal";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <MapPin className="w-8 h-8 text-prosperity" />,
      title: "Vous apportez votre terrain",
      description: "Nous finançons les intrants et l'expertise",
      details: [
        "Terrain de minimum 1 hectare",
        "Dans l'une de nos 8 régions",
        "Titre foncier ou attestation villageoise",
        "Évaluation gratuite par nos techniciens"
      ]
    },
    {
      step: "02", 
      icon: <Users className="w-8 h-8 text-prosperity" />,
      title: "Nous vous assistons dans la création",
      description: "Encadrement technique, semences, formation",
      details: [
        "Délimitation GPS professionnelle",
        "Semences certifiées premium",
        "Formation aux techniques modernes",
        "Suivi mensuel par nos agronomes"
      ]
    },
    {
      step: "03",
      icon: <TrendingUp className="w-8 h-8 text-prosperity" />,
      title: "Vous récoltez les bénéfices", 
      description: "Rachat garanti pendant 20 ans",
      details: [
        "Première récolte dès la 4e année",
        "Rachat de 100% de votre production",
        "Prix transparents indexés sur le marché",
        "Paiement immédiat à chaque récolte"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Comment ça marche
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus simple en 3 étapes pour transformer votre terrain en plantation rentable
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-prosperity/20">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl font-bold text-prosperity/20">
                      {step.step}
                    </div>
                    <div className="bg-prosperity/10 p-4 rounded-full">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-success font-medium mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-prosperity rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-prosperity" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-success rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à transformer votre terrain en plantation rentable ?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Rejoignez nos 1 200+ agriculteurs qui gagnent en moyenne 285 000 F CFA par mois
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FormModal type="revenue">
              <Button variant="prosperity" size="lg" className="text-lg">
                Calculer mes revenus futurs
              </Button>
            </FormModal>
            <FormModal type="visit">
              <Button variant="outline" size="lg" className="text-success font-bold border-white hover:bg-white hover:text-success">
                Demander une visite terrain
              </Button>
            </FormModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;