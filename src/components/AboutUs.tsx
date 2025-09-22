import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Target, Heart } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-prosperity" />,
      title: "Transparence totale",
      description: "Clarté absolue sur les coûts et revenus pour nos agriculteurs partenaires."
    },
    {
      icon: <Users className="w-8 h-8 text-success" />,
      title: "Accompagnement permanent",
      description: "Suivi continu de nos équipes techniques sur le terrain."
    },
    {
      icon: <Award className="w-8 h-8 text-prosperity" />,
      title: "Innovation agricole et financière",
      description: "Développement de modèles financiers adaptés aux réalités locales et techniques modernes pour maximiser les rendements."
    },
    {
      icon: <Heart className="w-8 h-8 text-success" />,
      title: "Développement rural durable",
      description: "Impact positif à long terme sur les communautés rurales."
    }
  ];

  return (
    <section id="qui-sommes-nous" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Qui sommes-nous ?
          </h2>
        </div>

        {/* Notre histoire */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8">Notre histoire</h3>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Ruralis Capital est née en Côte d'Ivoire d'un constat simple mais alarmant : malgré leur rôle central dans l'économie, les agriculteurs ivoiriens – et plus largement africains, véritables nourriciers des nations – peinent à vivre dignement de leur travail. Le manque de financements et d'accompagnement adaptés, l'absence de garanties et de débouchés commerciaux fiables, des sols épuisés, la vulnérabilité climatique et la précarité économique freinent leur potentiel et menacent l'avenir de nombreux pays du continent.
            </p>
            <p>
              Entre 2012 et 2024, Inocent KOFFI, fondateur et PDG de Ruralis Capital, a parcouru plus de 360 localités à travers 8 régions de Côte d'Ivoire. Cette immersion de 12 ans lui a permis de comprendre les besoins réels des producteurs, de renforcer la confiance avec les communautés rurales et de concevoir un modèle agricole pleinement adapté à leurs réalités.
            </p>
            <p>
              De cette expérience unique est née Ruralis Capital SARL en 2019, avec une mission claire : créer un modèle intégré de financement agricole qui conjugue rentabilité économique et impact social transformationnel.
            </p>
            <p className="font-semibold text-primary">
              Ruralis Capital se positionne comme première entreprise et leader du financement agricole et services intégrés en Côte d'Ivoire et en Afrique.
            </p>
          </div>
        </div>

        {/* Notre mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Notre mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Démocratiser l'accès aux plantations agricoles rentables pour que chaque agriculteur, qu'il soit petit producteur ou exploitant à plus grande échelle, puisse investir, produire et prospérer, en bénéficiant d'un accompagnement structuré et d'un financement adapté à ses besoins.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">Notre vision</h3>
            <p className="text-muted-foreground mb-4">
              Nous croyons que l'agriculture est la clé du développement durable. Notre ambition est de :
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Stimuler l'économie en zone rurale</li>
              <li>• Améliorer les conditions de vie des communautés agricoles</li>
              <li>• Atteindre l'autosuffisance alimentaire</li>
              <li>• Renforcer l'économie nationale et continentale</li>
              <li>• Impacter positivement le monde et les générations futures, en valorisant ce par quoi tout commence : la terre et l'agriculture</li>
            </ul>
          </div>
        </div>

        {/* Notre entreprise - infos de base */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Notre entreprise</h3>
            <div className="space-y-4">
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Ruralis Capital SARL</h4>
                <p className="text-muted-foreground">Société créée en 2019, spécialisée dans le financement de plantations agricoles</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-lg text-primary mb-2">Siège social</h4>
                <p className="text-muted-foreground">Daloa, Côte d'Ivoire</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Notre expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-prosperity mb-2">12 ans</div>
                  <div className="text-sm text-muted-foreground">d'études terrain dans 360 localités</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-success mb-2">15</div>
                  <div className="text-sm text-muted-foreground">ingénieurs agronomes</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-prosperity mb-2">8 régions</div>
                  <div className="text-sm text-muted-foreground">de présence commerciale</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-success mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">partenaires certifiés</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8">Nos valeurs</h3>
            <p className="text-muted-foreground mb-8">
              Nous plaçons la transparence, l'innovation, la durabilité et la solidarité au cœur de notre action. Concrètement :
            </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-prosperity/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-lg text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Notre équipe */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8">Notre équipe</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">Les associés fondateurs</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ruralis Capital est le fruit de la vision d'Inocent KOFFI, soutenue par 7 associés, tous convaincus que l'agriculture est un levier clé du développement, tant pour la Côte d'Ivoire que pour l'ensemble du continent africain. Ensemble, ils ont mis en commun leurs expertises, leur engagement et leur passion pour créer un modèle agricole durable, rentable et orienté vers l'impact social. Le groupe veille à ce que la mission sociale et économique demeure au cœur de chacune de leurs actions.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-primary mb-4">L'équipe de direction opérationnelle</h4>
              <p className="text-muted-foreground mb-4">
                Pour concrétiser cette vision sur le terrain, Ruralis Capital s'appuie sur une équipe opérationnelle experte et dédiée :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Directeurs techniques :</strong> encadrent les activités agronomiques, pilotent l'innovation et supervisent le suivi des plantations</li>
                <li>• <strong>Directeurs financiers et administratifs :</strong> garantissent une gestion transparente des investissements et financements</li>
                <li>• <strong>Chefs de projets et coordonnateurs régionaux :</strong> assurent le lien direct avec les agriculteurs et partenaires locaux, offrant un accompagnement structuré et efficace</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Cette organisation, complétée par d'autres équipes spécialisées, forme un collectif solide où vision stratégique, expertise technique et engagement social convergent pour transformer l'agriculture ivoirienne et africaine.
              </p>
            </div>
          </div>

          {/* Un mot du fondateur */}
          <div className="bg-gradient-to-r from-prosperity/5 to-success/5 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-primary mb-6">Un mot du fondateur</h4>
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img 
                  src={founderPhoto} 
                  alt="Inocent KOFFI, Fondateur & PDG" 
                  className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-4">
                  « J'ai choisi de consacrer 12 années de ma vie à comprendre les réalités des agriculteurs dans les villages de Côte d'Ivoire. Ruralis Capital est le fruit de cette écoute, de ce travail et de cette vision : bâtir un modèle où l'agriculture n'est plus une lutte pour survivre, mais un moteur de prospérité pour les familles, les communautés et toute l'Afrique. »
                </blockquote>
                <cite className="block text-primary font-semibold">— Inocent KOFFI, Fondateur & PDG</cite>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-gradient-to-r from-prosperity/10 to-success/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Rejoignez notre communauté d'agriculteurs prospères
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Découvrez comment nous pouvons transformer votre agriculture
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-prosperity to-success text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;