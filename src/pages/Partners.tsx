import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Landmark, 
  University, 
  Globe, 
  Users, 
  Handshake,
  TrendingUp,
  Shield,
  Sprout,
  Factory,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Institutions publiques et de recherche",
      icon: <University className="w-8 h-8 text-prosperity" />,
      partners: [
        {
          name: "CNRA",
          fullName: "Centre National de Recherche Agronomique",
          services: ["Recherche et innovation agricole", "Développement de nouvelles variétés", "Formation technique"],
          projects: ["Programme de sélection variétale", "Recherche sur les rendements", "Innovation technologique"],
          status: "Partenaire actif",
          logo: "/logos/cnra-logo.png"
        },
        {
          name: "ANADER",
          fullName: "Agence Nationale d'Appui au Développement Rural",
          services: ["Encadrement des producteurs", "Formation technique", "Vulgarisation agricole"],
          projects: ["Formation de 1200+ agriculteurs", "Suivi technique terrain", "Accompagnement post-plantation"],
          status: "Partenaire stratégique",
          logo: "/logos/anader-logo.png"
        },
        {
          name: "FIRCA",
          fullName: "Fonds Interprofessionnel pour la Recherche et le Conseil Agricoles",
          services: ["Cofinancement recherche", "Appui au conseil agricole", "Innovation"],
          projects: ["Financement programmes R&D", "Projets pilotes", "Transfert de technologies"],
          status: "Partenaire financeur",
          logo: "/logos/firca-logo.svg"
        }
      ]
    },
    {
      title: "Régulateurs et autorités",
      icon: <Shield className="w-8 h-8 text-success" />,
      partners: [
        {
          name: "MINADER",
          fullName: "Ministère de l'Agriculture et du Développement Rural",
          services: ["Politique agricole", "Réglementation", "Supervision sectorielle"],
          projects: ["Programme National Palmier à Huile", "Politique d'investissement agricole"],
          status: "Autorité de tutelle"
        },
        {
          name: "Ministère Environnement",
          fullName: "Ministère de l'Environnement et du Développement Durable",
          services: ["Transition écologique", "Durabilité environnementale", "Certification"],
          projects: ["Certification agriculture durable", "Protection des écosystèmes"],
          status: "Partenaire régulateur"
        },
        {
          name: "AFOR",
          fullName: "Agence Foncière Rurale",
          services: ["Sécurisation foncière rurale", "Délivrance certificats fonciers", "Titres fonciers"],
          projects: ["Régularisation 2000+ hectares", "Formation gestion foncière", "Prévention conflits fonciers"],
          status: "Partenaire stratégique",
          logo: "/logos/afor-logo.png"
        }
      ]
    },
    {
      title: "Institutions financières",
      icon: <Landmark className="w-8 h-8 text-prosperity" />,
      partners: [
        {
          name: "BNI",
          fullName: "Banque Nationale d'Investissement",
          services: ["Financement projets structurants", "Crédit agricole", "Garanties"],
          projects: ["Financement plantation 500 ha", "Ligne de crédit 2Mds FCFA"],
          status: "Partenaire financier principal"
        },
        {
          name: "Ecobank",
          fullName: "Ecobank Côte d'Ivoire",
          services: ["Financement agricole inclusif", "Services bancaires", "Mobile money"],
          projects: ["Digitalisation paiements agriculteurs", "Crédit saisonnier"],
          status: "Banque partenaire"
        },
        {
          name: "BOAD",
          fullName: "Banque Ouest Africaine de Développement",
          services: ["Financements de grande envergure", "Projets régionaux", "Développement"],
          projects: ["Programme expansion régionale", "Financement 5Mds FCFA"],
          status: "Bailleur stratégique",
          logo: "/logos/boad-logo.png"
        },
        {
          name: "Baobab+",
          fullName: "Baobab Microfinance",
          services: ["Inclusion financière", "Microfinance", "Accompagnement petits producteurs"],
          projects: ["Financement 800 petits producteurs", "Formation financière"],
          status: "Partenaire microfinance"
        }
      ]
    },
    {
      title: "Entreprises de transformation et industriels",
      icon: <Factory className="w-8 h-8 text-success" />,
      partners: [
        {
          name: "PALMCI",
          fullName: "Palme de Côte d'Ivoire",
          services: ["Transformation huile de palme", "Achat production", "Expertise industrielle"],
          projects: ["Contrat rachat 15,000 tonnes/an", "Transfert expertise technique"],
          status: "Acheteur principal",
          logo: "/logos/palmci-logo.png"
        },
        {
          name: "Olam International",
          fullName: "Olam Côte d'Ivoire",
          services: ["Agro-industrie", "Chaîne d'approvisionnement", "Export"],
          projects: ["Partenariat logistique", "Accès marchés internationaux"],
          status: "Partenaire commercial"
        },
        {
          name: "Nestlé Côte d'Ivoire",
          fullName: "Nestlé Manufacturing",
          services: ["Transformation agroalimentaire", "Innovation produits", "Distribution"],
          projects: ["Développement produits locaux", "Intégration chaîne de valeur"],
          status: "Partenaire industriel"
        }
      ]
    },
    {
      title: "Organisations paysannes et coopératives",
      icon: <Users className="w-8 h-8 text-prosperity" />,
      partners: [
        {
          name: "APROSAP",
          fullName: "Association des Producteurs de Palmier à Huile",
          services: ["Représentation producteurs", "Formation", "Commercialisation groupée"],
          projects: ["Formation 500 producteurs", "Négociation prix collectifs"],
          status: "Partenaire coopératif"
        },
        {
          name: "OIA",
          fullName: "Organisation Interprofessionnelle Agricole",
          services: ["Fédération coopératives", "Cultures vivrières", "Appui technique"],
          projects: ["Diversification agricole", "Sécurité alimentaire"],
          status: "Partenaire diversification"
        }
      ]
    },
    {
      title: "Partenaires institutionnels internationaux",
      icon: <Globe className="w-8 h-8 text-success" />,
      partners: [
        {
          name: "FAO",
          fullName: "Organisation des Nations Unies pour l'Alimentation",
          services: ["Appui technique", "Projets pilotes", "Expertise internationale"],
          projects: ["Programme agriculture durable", "Transfert technologies"],
          status: "Partenaire technique ONU",
          logo: "/logos/fao-logo.png"
        },
        {
          name: "FIDA",
          fullName: "Fonds International de Développement Agricole",
          services: ["Financement développement agricole", "Réduction pauvreté rurale"],
          projects: ["Programme PRPAOC", "Financement 3Mds FCFA"],
          status: "Bailleur international",
          logo: "/logos/fida-logo.png"
        },
        {
          name: "BAD",
          fullName: "Banque Africaine de Développement",
          services: ["Financements continentaux", "Projets structurants", "Expertise"],
          projects: ["Initiative transformation agricole", "Financement infrastructure"],
          status: "Institution continentale",
          logo: "/logos/bad-logo.png"
        }
      ]
    },
    {
      title: "États et gouvernements partenaires",
      icon: <Building2 className="w-8 h-8 text-prosperity" />,
      partners: [
        {
          name: "Côte d'Ivoire",
          fullName: "République de Côte d'Ivoire",
          services: ["Base opérationnelle", "Cadre réglementaire", "Soutien politique"],
          projects: ["Siège social Daloa", "3500 ha financés", "1200+ agriculteurs"],
          status: "Pays d'origine"
        },
        {
          name: "Ghana",
          fullName: "République du Ghana",
          services: ["Expansion régionale", "Marché complémentaire", "Expertise palmier"],
          projects: ["Étude de faisabilité", "Partenariats locaux"],
          status: "Expansion en cours"
        },
        {
          name: "Burkina Faso",
          fullName: "République du Burkina Faso",
          services: ["Diversification géographique", "Cultures alternatives", "Coopération Sud-Sud"],
          projects: ["Mission prospective 2024", "Accord cadre en préparation"],
          status: "Expansion future"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-prosperity" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Nos Partenaires
            </h1>
            <Handshake className="w-8 h-8 text-prosperity" />
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Un écosystème de partenaires stratégiques pour transformer l'agriculture ivoirienne et africaine
          </p>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-gradient-to-r from-prosperity/10 to-success/10">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-prosperity mx-auto mb-2" />
              <div className="text-3xl font-bold text-prosperity">25+</div>
              <div className="text-sm text-muted-foreground">Partenaires actifs</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-success/10 to-prosperity/10">
            <CardContent className="p-6">
              <Globe className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">7</div>
              <div className="text-sm text-muted-foreground">Catégories de partenaires</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-prosperity/10 to-success/10">
            <CardContent className="p-6">
              <Building2 className="w-8 h-8 text-prosperity mx-auto mb-2" />
              <div className="text-3xl font-bold text-prosperity">3</div>
              <div className="text-sm text-muted-foreground">Pays d'intervention</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-r from-success/10 to-prosperity/10">
            <CardContent className="p-6">
              <Sprout className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">12+</div>
              <div className="text-sm text-muted-foreground">Projets en cours</div>
            </CardContent>
          </Card>
        </div>

        {/* Partners by Category */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-prosperity/10 p-3 rounded-full">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl text-primary">{partner.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{partner.fullName}</p>
                        </div>
                        <Badge 
                          variant={partner.status.includes("principal") || partner.status.includes("stratégique") ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {partner.status}
                        </Badge>
                      </div>
                      {partner.logo && (
                        <div className="flex justify-center items-center h-20 bg-gray-50 rounded-lg p-4">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-2">Services & Expertise</h4>
                        <ul className="space-y-1">
                          {partner.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-prosperity rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary text-sm mb-2">Projets en commun</h4>
                        <ul className="space-y-1">
                          {partner.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-start text-xs text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-prosperity/10 to-success/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Vous souhaitez devenir partenaire ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Rejoignez notre écosystème de partenaires et participez à la transformation de l'agriculture africaine.
          </p>
          <div className="flex items-center justify-center gap-2 text-prosperity font-semibold">
            <Handshake className="w-5 h-5" />
            <span>Contactez-nous : +225 07 07 07 07 07</span>
          </div>
        </div>
      </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Partners;