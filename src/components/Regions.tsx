import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Trees, TrendingUp, Award } from "lucide-react";

const Regions = () => {
  const regions = [
    {
      name: "Loh-Djiboua",
      hectares: "450 hectares",
      farmers: "180 agriculteurs",
      highlight: "Région pilote"
    },
    {
      name: "Gôh",
      hectares: "520 hectares", 
      farmers: "205 agriculteurs",
      highlight: "Plus grande superficie"
    },
    {
      name: "Nawa",
      hectares: "380 hectares",
      farmers: "150 agriculteurs", 
      highlight: "Excellents rendements"
    },
    {
      name: "Gboklê",
      hectares: "290 hectares",
      farmers: "115 agriculteurs",
      highlight: "Zone d'expansion"
    },
    {
      name: "Grands-Ponts",
      hectares: "410 hectares",
      farmers: "165 agriculteurs",
      highlight: "Forte croissance"
    },
    {
      name: "Agnéby-Tiassa",
      hectares: "320 hectares",
      farmers: "130 agriculteurs",
      highlight: "Potentiel élevé"
    },
    {
      name: "Haut-Sassandra",
      hectares: "680 hectares",
      farmers: "270 agriculteurs",
      highlight: "Plus grand nombre d'agriculteurs"
    },
    {
      name: "Marahoué",
      hectares: "450 hectares",
      farmers: "180 agriculteurs",
      highlight: "Rendements records"
    }
  ];

  const totalHectares = regions.reduce((sum, region) => sum + parseInt(region.hectares), 0);
  const totalFarmers = regions.reduce((sum, region) => sum + parseInt(region.farmers), 0);

  return (
    <section id="zones-intervention" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nos 8 régions d'excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une présence forte dans les meilleures zones agricoles de Côte d'Ivoire
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center bg-gradient-to-r from-prosperity/10 to-accent/10">
            <CardContent className="p-8">
              <Trees className="w-12 h-12 text-prosperity mx-auto mb-4" />
              <div className="text-4xl font-bold text-prosperity mb-2">3 500</div>
              <div className="text-lg font-semibold text-primary">Hectares total</div>
              <div className="text-muted-foreground">dans 8 régions</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-success/10 to-prosperity/10">
            <CardContent className="p-8">
              <Users className="w-12 h-12 text-success mx-auto mb-4" />
              <div className="text-4xl font-bold text-success mb-2">1 200+</div>
              <div className="text-lg font-semibold text-primary">Agriculteurs</div>
              <div className="text-muted-foreground">accompagnés</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-accent/10 to-success/10">
            <CardContent className="p-8">
              <MapPin className="w-12 h-12 text-prosperity mx-auto mb-4" />
              <div className="text-4xl font-bold text-prosperity mb-2">8</div>
              <div className="text-lg font-semibold text-primary">Régions</div>
              <div className="text-muted-foreground">couvertes</div>
            </CardContent>
          </Card>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {regions.map((region, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-primary flex items-center">
                  <MapPin className="w-5 h-5 text-prosperity mr-2" />
                  {region.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Superficie:</span>
                    <span className="font-semibold text-prosperity">{region.hectares}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">Agriculteurs:</span>
                    <span className="font-semibold text-success">{region.farmers}</span>
                  </div>
                  <div className="bg-prosperity/10 rounded-lg p-2 text-center">
                    <span className="text-prosperity font-medium text-sm">{region.highlight}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Performance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Performances par région
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-prosperity/10 to-success/10">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-6">Top 3 - Rendements 2024</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">1. Marahoué</span>
                    <span className="text-prosperity font-bold">19,5 tonnes/ha</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">2. Haut-Sassandra</span>
                    <span className="text-success font-bold">18,8 tonnes/ha</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">3. Gôh</span>
                    <span className="text-prosperity font-bold">18,2 tonnes/ha</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-success/10 to-prosperity/10">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-6">Expansion 2025</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">Gbêkê</span>
                    <span className="text-success font-bold">+200 hectares</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">Agnéby-Tiassa</span>
                    <span className="text-prosperity font-bold">+150 hectares</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-primary">Lacs</span>
                    <span className="text-success font-bold">Nouvelle région</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories by Region */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-12">
            Histoires de réussite par région
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-prosperity/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-prosperity" />
                </div>
                <h4 className="font-bold text-primary mb-2">Coopérative de Daloa</h4>
                <p className="text-sm text-muted-foreground mb-3">Gôh • 45 membres</p>
                <p className="text-muted-foreground text-sm">
                  "120 hectares collectifs, électrification du village, centre de santé construit grâce à nos revenus."
                </p>
                <div className="mt-3 text-prosperity font-semibold">13,2 millions F CFA/an</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-success/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-bold text-primary mb-2">Famille Brou</h4>
                <p className="text-sm text-muted-foreground mb-3">Grands-Ponts • 12 hectares</p>
                <p className="text-muted-foreground text-sm">
                  "Toute la famille travaille maintenant sur nos plantations. Mes trois fils ont arrêté l'exode rural."
                </p>
                <div className="mt-3 text-success font-semibold">13+ millions F CFA/an</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-prosperity/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-prosperity" />
                </div>
                <h4 className="font-bold text-primary mb-2">Yao Kouassi</h4>
                <p className="text-sm text-muted-foreground mb-3">Haut-Sassandra • 7 hectares</p>
                <p className="text-muted-foreground text-sm">
                  "Commencé avec 2 hectares en 2019, aujourd'hui 7 hectares ! Je suis devenu un exemple dans mon village."
                </p>
                <div className="mt-3 text-prosperity font-semibold">633 000 F CFA/mois</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Infrastructure */}
        <div className="bg-gradient-to-r from-secondary/20 to-background rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Notre infrastructure régionale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-prosperity/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-prosperity" />
              </div>
              <h4 className="font-bold text-primary mb-2">15 Bureaux locaux</h4>
              <p className="text-muted-foreground text-sm">Présence de proximité</p>
            </div>
            <div className="text-center">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h4 className="font-bold text-primary mb-2">45 Techniciens</h4>
              <p className="text-muted-foreground text-sm">Encadrement technique</p>
            </div>
            <div className="text-center">
              <div className="bg-prosperity/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-prosperity" />
              </div>
              <h4 className="font-bold text-primary mb-2">8 Pépinières</h4>
              <p className="text-muted-foreground text-sm">Plants certifiés</p>
            </div>
            <div className="text-center">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
              <h4 className="font-bold text-primary mb-2">12 Points collecte</h4>
              <p className="text-muted-foreground text-sm">Achat production</p>
            </div>
          </div>
        </div>

        {/* Contact Regional Teams */}
        <div className="bg-gradient-to-r from-success/10 to-prosperity/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-6">
            Contactez nos équipes régionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-primary mb-2">Bureau de Daloa</h4>
                <p className="text-muted-foreground text-sm mb-2">Siège social</p>
                <p className="text-muted-foreground text-sm">Avenue principale, face à la préfecture</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-primary mb-2">Bureau de Yamoussoukro</h4>
                <p className="text-muted-foreground text-sm mb-2">Région Centre</p>
                <p className="text-muted-foreground text-sm">Quartier résidentiel, Route de Bouaké</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-primary mb-2">Bureau de San-Pédro</h4>
                <p className="text-muted-foreground text-sm mb-2">Région Sud-Ouest</p>
                <p className="text-muted-foreground text-sm">Zone portuaire, près du terminal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;