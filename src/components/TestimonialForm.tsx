import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, User, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TestimonialForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    hectares: "",
    yearsSince: "",
    monthlyRevenue: "",
    testimonial: "",
    rating: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.testimonial) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir au moins votre nom et témoignage",
        variant: "destructive"
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Témoignage envoyé !",
      description: "Merci pour votre témoignage. Il sera examiné avant publication.",
    });

    // Reset du formulaire
    setFormData({
      name: "",
      location: "",
      hectares: "",
      yearsSince: "",
      monthlyRevenue: "",
      testimonial: "",
      rating: ""
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="bg-prosperity/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-prosperity" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5 text-prosperity" />
          <CardTitle className="text-2xl text-primary text-center">
            Partagez votre expérience avec Ruralis Capital
          </CardTitle>
          <MessageSquare className="w-5 h-5 text-prosperity" />
        </div>
        <p className="text-muted-foreground">
          Votre témoignage inspire d'autres agriculteurs à rejoindre notre communauté
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom complet *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Votre nom et prénom"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Région/Ville
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Ex: Daloa, Marahoué..."
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="hectares">Superficie (hectares)</Label>
              <Input
                id="hectares"
                value={formData.hectares}
                onChange={(e) => handleInputChange("hectares", e.target.value)}
                placeholder="Ex: 2 hectares"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="yearsSince">Depuis quand ?</Label>
              <Input
                id="yearsSince"
                value={formData.yearsSince}
                onChange={(e) => handleInputChange("yearsSince", e.target.value)}
                placeholder="Ex: en production depuis 2020"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="monthlyRevenue">Revenus mensuels (optionnel)</Label>
              <Input
                id="monthlyRevenue"
                value={formData.monthlyRevenue}
                onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                placeholder="Ex: 250 000 F CFA"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rating" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Note de satisfaction
              </Label>
              <Select onValueChange={(value) => handleInputChange("rating", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une note" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                  <SelectItem value="4">⭐⭐⭐⭐ Très bien</SelectItem>
                  <SelectItem value="3">⭐⭐⭐ Bien</SelectItem>
                  <SelectItem value="2">⭐⭐ Correct</SelectItem>
                  <SelectItem value="1">⭐ À améliorer</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testimonial">
              Votre témoignage *
            </Label>
            <Textarea
              id="testimonial"
              value={formData.testimonial}
              onChange={(e) => handleInputChange("testimonial", e.target.value)}
              placeholder="Partagez votre expérience avec Ruralis Capital : qu'est-ce qui a changé dans votre vie ? Quels résultats avez-vous obtenus ? Que recommanderiez-vous à d'autres agriculteurs ?"
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            <MessageSquare className="w-4 h-4 mr-2" />
            Envoyer mon témoignage
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestimonialForm;