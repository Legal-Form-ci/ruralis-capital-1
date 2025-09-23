import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, MapPin, Calendar, User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RevenueCalculator = () => {
  const { toast } = useToast();
  const [calculatorData, setCalculatorData] = useState({
    hectares: "",
    prixMarche: "80",
    anneeProduction: "",
    region: "",
    name: "",
    phone: ""
  });

  const regions = [
    "Loh-Djiboua",
    "Gôh", 
    "Nawa",
    "Gboklê",
    "Grands-Ponts",
    "Agnéby-Tiassa",
    "Haut-Sassandra",
    "Marahoué"
  ];

  const getRendementParHa = (annee: number): number => {
    if (annee == 1) return 0;
    if (annee == 2) return 3;
    if (annee == 3) return 6;
    if (annee == 4) return 9;
    if (annee == 5) return 12;
    if (annee == 6) return 15;
    if (annee == 7) return 17;
    if (annee >= 8 && annee <= 20) return 18;
    if (annee == 21) return 16;
    if (annee == 22) return 14;
    if (annee == 23) return 12;
    if (annee == 24) return 10;
    if (annee == 25) return 8;
    return 0;
  };

  const calculateRevenue = () => {
    if (calculatorData.hectares && calculatorData.anneeProduction && calculatorData.prixMarche) {
      const hectares = parseInt(calculatorData.hectares);
      const annee = parseInt(calculatorData.anneeProduction);
      const prixKg = parseInt(calculatorData.prixMarche);
      const rendement = getRendementParHa(annee);
      const yearlyRevenue = Math.round(hectares * rendement * prixKg * 1000);
      const monthlyRevenue = Math.round(yearlyRevenue / 12);
      
      toast({
        title: `💰 Estimation pour ${hectares} hectare(s) - Année ${annee}`,
        description: `Rendement: ${rendement}t/ha • Revenus: ${yearlyRevenue.toLocaleString()} F CFA/an (${monthlyRevenue.toLocaleString()} F CFA/mois)`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de simulation envoyée !",
      description: "Notre équipe vous contactera pour affiner votre simulation et vous présenter un plan détaillé.",
    });
    setCalculatorData({ hectares: "", prixMarche: "80", anneeProduction: "", region: "", name: "", phone: "" });
  };

  return (
    <Card className="shadow-xl max-w-2xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-prosperity/10 to-success/10">
        <CardTitle className="text-2xl text-primary flex items-center space-x-2">
          <Calculator className="w-6 h-6" />
          <span>Calculateur de revenus</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Estimez vos revenus potentiels avec une plantation de palmier à huile
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Superficie disponible *
              </label>
              <Input
                placeholder="Nombre d'hectares"
                type="number"
                value={calculatorData.hectares}
                onChange={(e) => setCalculatorData({...calculatorData, hectares: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Prix du marché (F CFA/kg) *
              </label>
              <Input
                placeholder="80"
                type="number"
                value={calculatorData.prixMarche}
                onChange={(e) => setCalculatorData({...calculatorData, prixMarche: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Année de production *
              </label>
              <Input
                placeholder="1 à 25 ans"
                type="number"
                min="1"
                max="25"
                value={calculatorData.anneeProduction}
                onChange={(e) => setCalculatorData({...calculatorData, anneeProduction: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Région (optionnel)
              </label>
              <Select value={calculatorData.region} onValueChange={(value) => setCalculatorData({...calculatorData, region: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre région" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center">
            <Button 
              type="button" 
              variant="prosperity" 
              size="lg"
              onClick={calculateRevenue}
              disabled={!calculatorData.hectares || !calculatorData.anneeProduction || !calculatorData.prixMarche}
              className="w-full md:w-auto"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculer mes revenus
            </Button>
          </div>

          {calculatorData.hectares && calculatorData.anneeProduction && calculatorData.prixMarche && (
            <div className="bg-gradient-to-r from-prosperity/5 to-success/5 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Projection financière détaillée
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-prosperity">
                    {getRendementParHa(parseInt(calculatorData.anneeProduction))}t/ha
                  </div>
                  <div className="text-sm text-muted-foreground">Rendement année {calculatorData.anneeProduction}</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-success">
                    {(parseInt(calculatorData.hectares) * getRendementParHa(parseInt(calculatorData.anneeProduction))).toLocaleString()}t
                  </div>
                  <div className="text-sm text-muted-foreground">Production annuelle</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round((parseInt(calculatorData.hectares) * getRendementParHa(parseInt(calculatorData.anneeProduction)) * parseInt(calculatorData.prixMarche) * 1000) / 12).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">F CFA/mois</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-prosperity">
                    {Math.round(parseInt(calculatorData.hectares) * getRendementParHa(parseInt(calculatorData.anneeProduction)) * parseInt(calculatorData.prixMarche) * 1000).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">F CFA/an</div>
                </div>
              </div>
            </div>
          )}

          <div className="border-t pt-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-prosperity" />
              <h4 className="font-semibold">Recevoir une simulation personnalisée</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nom complet
                </label>
                <Input
                  placeholder="Votre nom complet"
                  value={calculatorData.name}
                  onChange={(e) => setCalculatorData({...calculatorData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone
                </label>
                <Input
                  placeholder="Numéro de téléphone"
                  value={calculatorData.phone}
                  onChange={(e) => setCalculatorData({...calculatorData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <Button type="submit" variant="hero" className="w-full mt-4" size="lg">
              <Calculator className="w-4 h-4 mr-2" />
              Recevoir ma simulation détaillée
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-success/10 rounded-lg">
          <div className="flex items-center space-x-2 text-sm text-success font-medium">
            <MapPin className="w-4 h-4" />
            <span>Simulation gratuite • Étude de terrain incluse • Accompagnement personnalisé</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueCalculator;