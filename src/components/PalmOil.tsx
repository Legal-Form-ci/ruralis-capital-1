import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Calendar, Globe, MapPin, Target, Award } from "lucide-react";
import palmNurseryImage from "@/assets/palm-nursery-new.jpg";

const PalmOil = () => {
  const advantages = [
    {
      icon: <TrendingUp className="w-6 h-6 text-prosperity" />,
      title: "Rentabilité exceptionnelle",
      value: "800 000 à 1 500 000 F CFA/hectare/an"
    },
    {
      icon: <Calendar className="w-6 h-6 text-success" />,
      title: "Production longue durée",
      value: "25+ années de production"
    },
    {
      icon: <Globe className="w-6 h-6 text-prosperity" />,
      title: "Demande mondiale croissante",
      value: "Marché en expansion constante"
    },
    {
      icon: <MapPin className="w-6 h-6 text-success" />,
      title: "Adaptation parfaite",
      value: "Climat ivoirien idéal"
    }
  ];

  const results = [
    {
      icon: <Target className="w-8 h-8 text-prosperity" />,
      title: "Rendement moyen",
      value: "18 tonnes/hectare/an",
      comparison: "contre 12 tonnes moyenne nationale"
    },
    {
      icon: <Award className="w-8 h-8 text-success" />,
      title: "Production totale 2024",
      value: "37 800 tonnes récoltées",
      comparison: "sur 2 100 hectares productifs"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-prosperity" />,
      title: "Prix d'achat garanti",
      value: "60 F CFA/kg",
      comparison: "prix 2024 maintenu"
    },
    {
      icon: <Calendar className="w-8 h-8 text-success" />,
      title: "Première récolte",
      value: "4e année",
      comparison: "contre 5-6 ans traditionnellement"
    }
  ];

  return (
    <section id="palmier-huile" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Palmier à huile - Notre spécialité
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La culture la plus rentable d'Afrique de l'Ouest
          </p>
        </div>

        {/* Why Palm Oil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-8">Pourquoi le palmier à huile ?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-prosperity/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {advantage.icon}
                    </div>
                    <h4 className="font-bold text-primary mb-2">{advantage.title}</h4>
                    <p className="text-success font-semibold">{advantage.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={palmNurseryImage}
              alt="Pépinière de palmiers à huile"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Our Results */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Nos résultats concrets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-prosperity/10 to-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {result.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{result.title}</h4>
                  <div className="text-2xl font-bold text-prosperity mb-2">{result.value}</div>
                  <p className="text-muted-foreground text-sm">{result.comparison}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-r from-success/10 to-prosperity/10">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-success mb-2">95%</div>
              <div className="text-lg font-semibold text-primary mb-2">Taux de survie des plants</div>
              <div className="text-muted-foreground">contre 70% moyenne</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-prosperity/10 to-success/10">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-prosperity mb-2">285 000 F</div>
              <div className="text-lg font-semibold text-primary mb-2">Revenu mensuel moyen</div>
              <div className="text-muted-foreground">par agriculteur producteur</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-success/10 to-prosperity/10">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-success mb-2">20 ans</div>
              <div className="text-lg font-semibold text-primary mb-2">Contrat garanti</div>
              <div className="text-muted-foreground">de rachat de production</div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Techniques */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Nos techniques avancées
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-r from-prosperity/5 to-success/5 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-primary mb-6">Semences de haute qualité</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-prosperity rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Variétés TENERA :</strong> Hybrides à haut rendement sélectionnées</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-prosperity rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Résistance aux maladies :</strong> Plants immunisés contre la fusariose</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-prosperity rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Précocité :</strong> Production dès la 3e année (plants DxP)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-prosperity rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Longévité :</strong> Production intensive pendant 25+ années</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-success/5 to-prosperity/5 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-primary mb-6">Méthodes culturales optimisées</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Espacement optimal :</strong> 143 plants/hectare (triangulaire 9m)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Fertilisation raisonnée :</strong> NPK adapté selon analyses de sol</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Gestion intégrée :</strong> Cultures intercalaires les 3 premières années</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong className="text-primary">Suivi phytosanitaire :</strong> Traitement préventif et curatif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Economic Model */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Modèle économique transparent
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-prosperity/10 to-success/10">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Phase d'investissement</h4>
                <div className="text-3xl font-bold text-prosperity mb-2">4 ans</div>
                <p className="text-muted-foreground mb-4">Financement Ruralis Capital</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Semences certifiées</li>
                  <li>• Intrants premium</li>
                  <li>• Encadrement technique</li>
                  <li>• Formation continue</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-success/10 to-prosperity/10">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Phase de production</h4>
                <div className="text-3xl font-bold text-success mb-2">20+ ans</div>
                <p className="text-muted-foreground mb-4">Revenus garantis</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Rachat total production</li>
                  <li>• Prix marché international</li>
                  <li>• Paiement immédiat</li>
                  <li>• Support technique continu</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-prosperity/10 to-success/10">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-primary mb-4">Votre contribution</h4>
                <div className="text-3xl font-bold text-prosperity mb-2">10 000 F</div>
                <p className="text-muted-foreground mb-4">Par hectare/an</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Votre terrain</li>
                  <li>• Votre travail</li>
                  <li>• Votre engagement</li>
                  <li>• Notre partenariat</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market Analysis */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Analyse du marché de l'huile de palme
          </h3>
          <div className="bg-gradient-to-r from-secondary/20 to-background rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-primary mb-6">Demande mondiale croissante</h4>
                <div className="space-y-4">
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Production mondiale 2024</span>
                      <span className="font-bold text-prosperity">78 millions de tonnes</span>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Croissance annuelle</span>
                      <span className="font-bold text-success">+4,2%</span>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Prix moyen 2024</span>
                      <span className="font-bold text-prosperity">850 USD/tonne</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-primary mb-6">Avantages Côte d'Ivoire</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-prosperity rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-primary">Climat optimal</h5>
                      <p className="text-muted-foreground text-sm">Pluviométrie et température idéales</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-success rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-primary">Sols fertiles</h5>
                      <p className="text-muted-foreground text-sm">Terres riches et bien drainées</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-prosperity rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-primary">Position géographique</h5>
                      <p className="text-muted-foreground text-sm">Accès facilité aux marchés africains et européens</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-success rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-bold text-primary">Politique agricole</h5>
                      <p className="text-muted-foreground text-sm">Soutien gouvernemental aux cultures d'exportation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center">
            <div className="text-6xl text-prosperity mb-4">"</div>
            <p className="text-lg text-muted-foreground italic mb-6 max-w-4xl mx-auto">
              Avec Ruralis Capital, je gagne aujourd'hui 1 200 000 F par hectare par an. 
              Avant, mes cultures vivrières me rapportaient 150 000 F maximum. 
              C'est une transformation complète de ma vie et celle de ma famille.
            </p>
            <div className="text-xl font-bold text-primary">Kouassi Jean</div>
            <div className="text-prosperity font-semibold">Daloa - 3 hectares depuis 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalmOil;