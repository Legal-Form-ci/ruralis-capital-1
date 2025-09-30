import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, MapPin, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import farmer1 from "@/assets/farmer-1.jpg";
import farmer2 from "@/assets/farmer-2.jpg";
import farmer3 from "@/assets/farmer-3.jpg";

const TestimonialsPage = () => {
  const allTestimonials = [
    {
      name: "KOUAME Kouadio Julien",
      location: "Nawa",
      hectares: "2 hectares",
      monthlyRevenue: "225 000 F CFA",
      quote: "Avant Ruralis Capital, je cultivais une culture traditionnelle bien connue en Côte d'Ivoire, sur 2 hectares, et je gagnais au maximum 800 000 F CFA par an. Avec le temps, ma plantation a vieilli et je n'arrivais plus à joindre les deux bouts. Aujourd'hui, grâce à Ruralis Capital, j'ai pu créer une plantation de palmiers sur la même parcelle. Avec ces 2 hectares, je récolte 36 tonnes par an. Même après les redevances, je gagne 2 700 000 F CFA par an. Mieux encore, mes revenus sont désormais mensuels : environ 225 000 F CFA chaque mois, contrairement à l'ancienne culture. Grâce à cela, tous mes enfants sont scolarisés et j'ai pu construire une nouvelle maison.",
      yearsSince: "en production depuis 2021",
      photo: farmer1
    },
    {
      name: "Konan Yao",
      location: "Marahoué",
      hectares: "3 hectares",
      monthlyRevenue: "283 000 F CFA",
      quote: "Les techniciens de Ruralis m'ont accompagné dès le premier jour. Mes palmiers produisent 19 tonnes à l'hectare ! L'année dernière, j'ai gagné 3,4 millions F CFA. J'ai même pu acheter un véhicule pour transporter d'autres agriculteurs.",
      yearsSince: "en production depuis 2020",
      photo: farmer3
    },
    {
      name: "Akissi Fatou",
      location: "Gôh",
      hectares: "2 hectares",
      monthlyRevenue: "225 000 F CFA",
      quote: "Ce qui me plaît, c'est que Ruralis rachète tout. Pas besoin de chercher des acheteurs ou de négocier les prix. Chaque mois, je touche entre 200 000 et 250 000 F selon la production. C'est stable et prévisible.",
      yearsSince: "en production depuis 2022",
      photo: farmer2
    },
    {
      name: "Bamba Seydou",
      location: "Haut-Sassandra",
      hectares: "5 hectares",
      monthlyRevenue: "450 000 F CFA",
      quote: "Avec 5 hectares, je suis devenu l'un des plus gros producteurs de ma région. Mes revenus me permettent d'envoyer mes enfants à l'université et d'aider d'autres familles du village.",
      yearsSince: "en production depuis 2019",
      photo: farmer1
    },
    {
      name: "Adjoua Marie",
      location: "Marahoué",
      hectares: "1.5 hectares",
      monthlyRevenue: "168 000 F CFA",
      quote: "Même avec une petite surface, je vis correctement maintenant. Ruralis m'a formée et accompagnée. Je recommande à toutes les femmes de notre région.",
      yearsSince: "en production depuis 2023",
      photo: farmer2
    },
    {
      name: "Kouassi Antoine",
      location: "Gbêkê",
      hectares: "4 hectares",
      monthlyRevenue: "380 000 F CFA",
      quote: "J'ai abandonné le cacao pour le palmier à huile avec Ruralis. Meilleure décision de ma vie ! Mes revenus ont été multipliés par 6.",
      yearsSince: "en production depuis 2020",
      photo: farmer3
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-8 h-8 text-prosperity" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Tous nos témoignages
            </h1>
            <Quote className="w-8 h-8 text-prosperity rotate-180" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez tous les témoignages de nos agriculteurs partenaires qui ont transformé leur vie avec Ruralis Capital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-primary text-lg">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{testimonial.location} • {testimonial.hectares}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.yearsSince}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-success" />
                            <span className="font-bold text-success">
                              {testimonial.monthlyRevenue}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            revenus mensuels
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default TestimonialsPage;