import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, MapPin, Sprout } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const JoinFarmersForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    availableLand: "",
    farmingExperience: "",
    motivation: ""
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

  const experienceLevels = [
    "Débutant (jamais cultivé)",
    "Initié (1-3 ans d'expérience)",
    "Expérimenté (4-10 ans)",
    "Expert (plus de 10 ans)"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Candidature reçue avec succès !",
      description: "Notre équipe d'experts vous contactera sous 48h pour étudier votre dossier et organiser une visite de terrain.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      region: "",
      availableLand: "",
      farmingExperience: "",
      motivation: ""
    });
  };

  return (
    <Card className="shadow-xl max-w-3xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-prosperity/10 to-success/10">
        <CardTitle className="text-2xl text-primary flex items-center space-x-2">
          <Users className="w-6 h-6" />
          <span>Rejoindre nos agriculteurs</span>
        </CardTitle>
        <p className="text-muted-foreground">
          Devenez partenaire Ruralis Capital et lancez votre plantation de palmier à huile avec 0 F CFA d'investissement
        </p>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Informations personnelles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet *</label>
                <Input
                  placeholder="Votre nom et prénom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <Input
                  placeholder="+225 XX XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Informations terrain */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Informations terrain
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Région *</label>
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
              
              <div>
                <label className="block text-sm font-medium mb-2">Superficie disponible *</label>
                <Input
                  placeholder="Nombre d'hectares"
                  type="number"
                  value={formData.availableLand}
                  onChange={(e) => setFormData({...formData, availableLand: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Expérience agricole */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center">
              <Sprout className="w-5 h-5 mr-2" />
              Expérience agricole
            </h3>
            
            <div>
              <label className="block text-sm font-medium mb-2">Niveau d'expérience *</label>
              <Select value={formData.farmingExperience} onValueChange={(value) => setFormData({...formData, farmingExperience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre niveau" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Motivation et objectifs</label>
              <Textarea
                placeholder="Parlez-nous de votre projet, vos motivations et vos objectifs avec la plantation de palmier à huile..."
                value={formData.motivation}
                onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                rows={4}
              />
            </div>
          </div>

          <div className="pt-6 border-t">
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full" 
              size="lg"
              disabled={!formData.name || !formData.phone || !formData.region || !formData.availableLand || !formData.farmingExperience}
            >
              Envoyer ma candidature
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-success/10 rounded-lg">
          <div className="text-sm text-success space-y-2">
            <div className="font-medium flex items-center">
              <Sprout className="w-4 h-4 mr-2" />
              Processus de sélection :
            </div>
            <ul className="space-y-1 ml-6 text-xs">
              <li>• Analyse de votre candidature (48h)</li>
              <li>• Visite de terrain gratuite</li>
              <li>• Étude de faisabilité personnalisée</li>
              <li>• Signature du partenariat si éligible</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JoinFarmersForm;