import { Card } from "@/components/ui/card";
import { Sparkles, Database, CheckCircle, Zap } from "lucide-react";

const specialFeatures = [
  {
    icon: Sparkles,
    title: "AI Pattern Prediction",
    description: "Proactively anticipates and flags scams using AI-powered recognition that gains knowledge from cases that have been reported.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Database,
    title: "Crowd-Sourced Intelligence",
    description: "With each community report, the Crowd-Verified Database becomes more robust and intelligent.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: CheckCircle,
    title: "All-in-One Verification",
    description: "The One Platform for All Scam Types, combining seller, job, and website checks.",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    icon: Zap,
    title: "Instant Simplicity",
    description: "Providing a clear verification result in less than 10 seconds, this tool is made for quick, non-technical use.",
    color: "text-warning",
    bg: "bg-warning/10",
  },
];

const SpecialFeatures = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            What Makes Us Special
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose Our Platform</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology and community-driven intelligence set us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {specialFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-card/50 backdrop-blur"
            >
              <div className="flex gap-6">
                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
