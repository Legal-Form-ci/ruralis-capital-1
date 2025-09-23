import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin, Users, Target, Coins, BarChart3 } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  description?: string;
}

const StatCard = ({ icon, value, label, suffix, description }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const numericValue = parseInt(value.replace(/[^\d]/g, ""));
    let startValue = 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(startValue).toLocaleString());
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-l-prosperity">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-prosperity/10 p-3 rounded-full">
            {icon}
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold text-primary">
              {displayValue}{suffix}
            </div>
            <div className="text-lg font-semibold text-foreground mt-1">
              {label}
            </div>
            {description && (
              <div className="text-sm text-muted-foreground mt-2">
                {description}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-prosperity" />,
      value: "3 500",
      label: "hectares de plantations financées",
      description: "dont 2 100 hectares en production"
    },
    {
      icon: <MapPin className="w-6 h-6 text-prosperity" />,
      value: "8",
      label: "régions couvertes",
      description: "en Côte d'Ivoire"
    },
    {
      icon: <Users className="w-6 h-6 text-prosperity" />,
      value: "1 200",
      suffix: "+",
      label: "agriculteurs accompagnés",
      description: "dans toutes nos régions"
    },
    {
      icon: <Target className="w-6 h-6 text-prosperity" />,
      value: "95",
      suffix: "%",
      label: "de taux de réussite",
      description: "des plantations créées"
    },
    {
      icon: <Coins className="w-6 h-6 text-prosperity" />,
      value: "2,27",
      suffix: " Mds F CFA",
      label: "de revenus générés",
      description: "pour nos agriculteurs en 2024"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-prosperity" />,
      value: "18",
      suffix: " t/ha",
      label: "de rendement moyen",
      description: "contre 12 tonnes nationale"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-prosperity" />
            <h2 className="text-4xl font-bold text-primary">
              Nos résultats en chiffres
            </h2>
            <TrendingUp className="w-8 h-8 text-prosperity" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depuis 5 ans, nous transformons l'agriculture ivoirienne avec des résultats concrets et mesurables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-prosperity/10 to-success/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-4xl font-bold text-prosperity mb-2">285 000 F CFA</div>
            <div className="text-xl font-semibold text-primary mb-2">
              Revenu mensuel moyen par agriculteur producteur
            </div>
            <div className="text-muted-foreground">
              Nos agriculteurs gagnent en moyenne 8 fois plus qu'avec les cultures traditionnelles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;