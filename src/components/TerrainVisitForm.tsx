import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Clock, CheckCircle, User, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TerrainVisitForm = () => {
  const { toast } = useToast();
  const [visitData, setVisitData] = useState({
    name: "",
    phone: "",
    region: "",
    location: "",
    hectares: "",
    preferredDate: "",
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
      title: "Demande de visite terrain envoyée !",
      description: "Notre équipe technique vous contactera sous 24h pour planifier votre visite gratuite.",
    });
    setVisitData({ 
      name: "", 
      phone: "", 
      region: "", 
      location: "",
      hectares: "", 
      preferredDate: "",
      message: "" 
    });
  };

  return (
    <Card className="shadow-xl max-w-2xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-prosperity/10">
        <CardTitle className="text-2xl text-primary flex items-center space-x-2">
          <MapPin className="w-6 h-6" />
          <span>Demander une visite terrain</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Nos experts agronomes se déplacent gratuitement pour évaluer votre terrain
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom complet *
              </label>
              <Input
                placeholder="Votre nom complet"
                value={visitData.name}
                onChange={(e) => setVisitData({...visitData, name: e.target.value})}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Téléphone *
              </label>
              <Input
                placeholder="Numéro de téléphone"
                value={visitData.phone}
                onChange={(e) => setVisitData({...visitData, phone: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Région *
              </label>
              <Select value={visitData.region} onValueChange={(value) => setVisitData({...visitData, region: value})}>
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
            
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Superficie estimée
              </label>
              <Input
                placeholder="Nombre d'hectares"
                type="number"
                value={visitData.hectares}
                onChange={(e) => setVisitData({...visitData, hectares: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Localisation précise du terrain *
            </label>
            <Input
              placeholder="Village, sous-préfecture ou point de repère"
              value={visitData.location}
              onChange={(e) => setVisitData({...visitData, location: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date souhaitée pour la visite
            </label>
            <Input
              type="date"
              value={visitData.preferredDate}
              onChange={(e) => setVisitData({...visitData, preferredDate: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message (optionnel)
            </label>
            <Textarea
              placeholder="Décrivez votre terrain, vos objectifs ou posez vos questions..."
              value={visitData.message}
              onChange={(e) => setVisitData({...visitData, message: e.target.value})}
              rows={4}
            />
          </div>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            <Calendar className="w-4 h-4 mr-2" />
            Programmer ma visite gratuite
          </Button>
        </form>

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-prosperity/10 p-4 rounded-lg text-center">
              <CheckCircle className="w-8 h-8 text-prosperity mx-auto mb-2" />
              <div className="font-semibold text-sm">100% Gratuit</div>
              <div className="text-xs text-muted-foreground">Aucun frais caché</div>
            </div>
            
            <div className="bg-success/10 p-4 rounded-lg text-center">
              <Clock className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="font-semibold text-sm">Réponse sous 24h</div>
              <div className="text-xs text-muted-foreground">Contact immédiat</div>
            </div>
            
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold text-sm">Experts locaux</div>
              <div className="text-xs text-muted-foreground">Connaissent le terrain</div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-primary/5 to-prosperity/5 rounded-lg">
            <h4 className="font-semibold mb-2">Que comprend la visite terrain ?</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Analyse complète de la qualité du sol</li>
              <li>• Évaluation du potentiel de rendement</li>
              <li>• Plan de plantation personnalisé</li>
              <li>• Estimation précise des revenus</li>
              <li>• Conseils sur l'optimisation du terrain</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TerrainVisitForm;