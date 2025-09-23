import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Banknote, Users, ShieldCheck, Smartphone, MapPin, GraduationCap, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Banknote className="w-8 h-8 text-prosperity" />,
      title: "Financement de création de plantations",
      features: [
        "Nous finançons: Semences certifiées, intrants premium, encadrement technique, formation",
        "Vous apportez: Votre terrain, votre travail, 10 000 F CFA/hectare/an",
        "Notre accompagnement: Assistance complète dans la création",
        "Durée financement: 4 ans (jusqu'à la première récolte)"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Accompagnement technique complet",
      features: [
        "Délimitation GPS professionnelle de votre parcelle",
        "Formation pratique aux techniques modernes",
        "Suivi mensuel par nos techniciens",
        "Assistance téléphonique 24h/24"
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-prosperity" />,
      title: "Commercialisation garantie",
      features: [
        "Rachat de 100% de votre production",
        "Prix transparents alignés sur le marché international",
        "Paiement immédiat à chaque récolte",
        "Contrat sur 20 ans pour votre sécurité"
      ]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Contact",
      description: "Appelez notre équipe commerciale",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      step: "2", 
      title: "Visite",
      description: "Nos techniciens évaluent votre terrain",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Contrat",
      description: "Signature et versement 10 000 F CFA/hectare",
      icon: <Banknote className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Délimitation",
      description: "Piquetage GPS de votre plantation",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      step: "5",
      title: "Plantation",
      description: "Semis avec notre équipe technique",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "6",
      title: "Suivi",
      description: "Accompagnement mensuel (+10 000 F CFA/hectare/an)",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      step: "7",
      title: "Récolte",
      description: "Commercialisation et revenus garantis",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Banknote className="w-8 h-8 text-prosperity" />
            <h2 className="text-4xl font-bold text-primary">
              Nos Services
            </h2>
            <Banknote className="w-8 h-8 text-prosperity" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un accompagnement complet de la plantation à la commercialisation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-prosperity/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="bg-success w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Votre parcours */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Votre parcours en 7 étapes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-prosperity to-success text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="bg-prosperity/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Simulation de revenus */}
        <div className="bg-gradient-to-r from-success/10 to-prosperity/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Simulation de revenus - Exemple : Plantation de 3 hectares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-prosperity mb-2">120 000 F</div>
                <div className="text-sm text-muted-foreground">Votre investissement total sur 4 ans</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-success mb-2">3 240 000 F</div>
                <div className="text-sm text-muted-foreground">Vos revenus annuels dès la 4e année</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">648 000 F</div>
                <div className="text-sm text-muted-foreground">Redevances annuelles (20%)</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-prosperity mb-2">2 592 000 F</div>
                <div className="text-sm text-muted-foreground">Votre profit net annuel pendant 16 ans</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;