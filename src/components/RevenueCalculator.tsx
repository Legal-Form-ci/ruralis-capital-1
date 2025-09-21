import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RevenueCalculator = () => {
  const { toast } = useToast();
  const [calculatorData, setCalculatorData] = useState({
    hectares: "",
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

  const calculateRevenue = () => {
    if (calculatorData.hectares) {
      const hectares = parseInt(calculatorData.hectares);
      const yearlyProduction = hectares * 18; // 18 tonnes par hectare
      const pricePerKg = 650; // 650 F CFA/kg (prix réaliste du marché)
      const yearlyRevenue = yearlyProduction * 1000 * pricePerKg; // conversion en kg
      const operationalCosts = yearlyRevenue * 0.30; // 30% de coûts opérationnels
      const partnershipFee = yearlyRevenue * 0.15; // 15% de commission Ruralis
      const netRevenue = yearlyRevenue - operationalCosts - partnershipFee;
      const monthlyRevenue = netRevenue / 12;
      
      toast({
        title: `💰 Estimation pour ${hectares} hectare(s)`,
        description: `Production: ${yearlyProduction}t/an • Revenus nets: ${Math.round(netRevenue).toLocaleString()} F CFA/an (${Math.round(monthlyRevenue).toLocaleString()} F CFA/mois)`,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande de simulation envoyée !",
      description: "Notre équipe vous contactera pour affiner votre simulation et vous présenter un plan détaillé.",
    });
    setCalculatorData({ hectares: "", region: "", name: "", phone: "" });
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
              <label className="block text-sm font-medium mb-2">Superficie disponible</label>
              <Input
                placeholder="Nombre d'hectares"
                type="number"
                value={calculatorData.hectares}
                onChange={(e) => setCalculatorData({...calculatorData, hectares: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Région</label>
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
              disabled={!calculatorData.hectares}
              className="w-full md:w-auto"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculer mes revenus
            </Button>
          </div>

          {calculatorData.hectares && (
            <div className="bg-gradient-to-r from-prosperity/5 to-success/5 p-6 rounded-lg border">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Projection financière détaillée
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-prosperity">
                    {(parseInt(calculatorData.hectares) * 18).toLocaleString()}t
                  </div>
                  <div className="text-sm text-muted-foreground">Production annuelle</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">
                    {Math.round((parseInt(calculatorData.hectares) * 18 * 1000 * 650 * 0.55) / 12).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">F CFA/mois (nets)</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round(parseInt(calculatorData.hectares) * 18 * 1000 * 650 * 0.55).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">F CFA/an (nets)</div>
                </div>
              </div>
            </div>
          )}

          <div className="border-t pt-6">
            <h4 className="font-semibold mb-4">Recevoir une simulation personnalisée</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Votre nom complet"
                value={calculatorData.name}
                onChange={(e) => setCalculatorData({...calculatorData, name: e.target.value})}
              />
              <Input
                placeholder="Numéro de téléphone"
                value={calculatorData.phone}
                onChange={(e) => setCalculatorData({...calculatorData, phone: e.target.value})}
              />
            </div>
            
            <Button type="submit" variant="hero" className="w-full mt-4" size="lg">
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