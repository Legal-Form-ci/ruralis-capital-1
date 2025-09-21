import { Card, CardContent } from "@/components/ui/card";
import { Quote, MapPin, TrendingUp } from "lucide-react";
import farmersImage from "@/assets/farmers-harvesting.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "KOUAME Kouadio Julien",
      location: "Nawa",
      hectares: "2 hectares",
      monthlyRevenue: "225 000 F CFA",
      quote: "Avant Ruralis Capital, je cultivais une culture traditionnelle bien connue en Côte d'Ivoire, sur 2 hectares, et je gagnais au maximum 800 000 F CFA par an. Avec le temps, ma plantation a vieilli et je n'arrivais plus à joindre les deux bouts. Aujourd'hui, grâce à Ruralis Capital, j'ai pu créer une plantation de palmiers sur la même parcelle. Avec ces 2 hectares, je récolte 36 tonnes par an. Même après les redevances, je gagne 2 700 000 F CFA par an. Mieux encore, mes revenus sont désormais mensuels : environ 225 000 F CFA chaque mois, contrairement à l'ancienne culture. Grâce à cela, tous mes enfants sont scolarisés et j'ai pu construire une nouvelle maison.",
      yearsSince: "en production depuis 2021"
    },
    {
      name: "Konan Yao", 
      location: "Marahoué",
      hectares: "3 hectares",
      monthlyRevenue: "283 000 F CFA",
      quote: "Les techniciens de Ruralis m'ont accompagné dès le premier jour. Mes palmiers produisent 19 tonnes à l'hectare ! L'année dernière, j'ai gagné 3,4 millions F CFA. J'ai même pu acheter un véhicule pour transporter d'autres agriculteurs.",
      yearsSince: "en production depuis 2020"
    },
    {
      name: "Akissi Fatou",
      location: "Gôh", 
      hectares: "2 hectares",
      monthlyRevenue: "225 000 F CFA",
      quote: "Ce qui me plaît, c'est que Ruralis rachète tout. Pas besoin de chercher des acheteurs ou de négocier les prix. Chaque mois, je touche entre 200 000 et 250 000 F selon la production. C'est stable et prévisible.",
      yearsSince: "en production depuis 2022"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Ils ont transformé leur vie avec Ruralis Capital
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de nos agriculteurs partenaires
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-prosperity/10 p-3 rounded-full flex-shrink-0">
                      <Quote className="w-6 h-6 text-prosperity" />
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

          {/* Image */}
          <div className="relative">
            <img 
              src={farmersImage}
              alt="Agriculteurs récoltant les fruits de palmier"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-success/10 to-prosperity/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Success Story Exceptionnelle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-prosperity">Yao Kouassi</div>
                <div className="text-muted-foreground">Haut-Sassandra</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">7 hectares</div>
                <div className="text-muted-foreground">en production</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-prosperity">7,6 millions</div>
                <div className="text-muted-foreground">F CFA en 2023</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">633 000 F</div>
                <div className="text-muted-foreground">revenus mensuels</div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-6 italic">
              "J'ai commencé avec 2 hectares en 2019. Aujourd'hui j'en ai 7 ! Ruralis m'aide à étendre progressivement. Je suis devenu un exemple dans mon village."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;