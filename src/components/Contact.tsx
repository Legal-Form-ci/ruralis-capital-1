import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "", 
    region: "",
    hectares: "",
    message: ""
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les 24h pour organiser une visite terrain gratuite.",
    });
    setFormData({ name: "", phone: "", region: "", hectares: "", message: "" });
  };

  const calculateRevenue = () => {
    if (formData.hectares) {
      const hectares = parseInt(formData.hectares);
      const monthlyRevenue = hectares * 18 * 60 * 12 / 12; // 18t/ha * 60F/kg * 12 mois / 12
      const yearlyRevenue = hectares * 18 * 60 * 12; // 18t/ha * 60F/kg * 12 mois
      const redevances = yearlyRevenue * 0.2; // 20% de redevances
      const netRevenue = yearlyRevenue - redevances;
      
      toast({
        title: `Estimation pour ${hectares} hectare(s)`,
        description: `Revenus nets estimés: ${netRevenue.toLocaleString()} F CFA/an (${Math.round(netRevenue/12).toLocaleString()} F CFA/mois)`,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-prosperity/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Démarrez votre nouvelle plantation dès aujourd'hui
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contactez-nous pour une évaluation gratuite de votre terrain et commencez votre transformation agricole
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Demander une visite terrain gratuite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
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

                <div className="flex space-x-4">
                  <Input
                    placeholder="Superficie (hectares)"
                    type="number"
                    value={formData.hectares}
                    onChange={(e) => setFormData({...formData, hectares: e.target.value})}
                    required
                  />
                  <Button 
                    type="button" 
                    variant="prosperity" 
                    onClick={calculateRevenue}
                    disabled={!formData.hectares}
                  >
                    <Calculator className="w-4 h-4" />
                  </Button>
                </div>

                <div>
                  <Textarea
                    placeholder="Message (optionnel) - Décrivez votre projet ou posez vos questions"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Envoyer ma demande
                </Button>
              </form>

              <div className="mt-6 p-4 bg-prosperity/10 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-prosperity font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Réponse garantie sous 24h • Visite terrain gratuite</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Main Contact */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Nos coordonnées
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-prosperity/10 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-prosperity" />
                    </div>
                    <div>
                      <div className="font-semibold">Téléphone</div>
                      <div className="text-muted-foreground">+225 0759566087</div>
                      <div className="text-sm text-muted-foreground">WhatsApp Business: +225 0759566087</div>
                      <div className="text-sm text-muted-foreground">Fixe: +225 2732560978</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-prosperity/10 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-prosperity" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">contact@ruralis-capital.ci</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-prosperity/10 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-prosperity" />
                    </div>
                    <div>
                      <div className="font-semibold">Siège social</div>
                      <div className="text-muted-foreground">Daloa, Côte d'Ivoire</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Offices */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Nos bureaux régionaux
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Daloa (Siège)</span>
                    <span className="text-muted-foreground text-sm">Avenue principale</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Yamoussoukro</span>
                    <span className="text-muted-foreground text-sm">Route de Bouaké</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">San-Pédro</span>
                    <span className="text-muted-foreground text-sm">Zone portuaire</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-lg bg-gradient-to-r from-success/10 to-prosperity/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Pourquoi nous rejoindre ?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-prosperity">95%</div>
                    <div className="text-sm text-muted-foreground">Taux de réussite</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">18 t/ha</div>
                    <div className="text-sm text-muted-foreground">Rendement moyen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-prosperity">20 ans</div>
                    <div className="text-sm text-muted-foreground">Contrat garanti</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">0 F CFA</div>
                    <div className="text-sm text-muted-foreground">Investissement initial</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;