import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Briefcase, Brain, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Unified Checker",
    description: "Combines tools for examining seller/shop reviews and the authenticity of websites (SSL, trust score).",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Briefcase,
    title: "Fake Job Detection",
    description: "To identify employment scams, a specialized module confirms the authenticity of HR emails and the legitimacy of domains.",
    gradient: "from-accent to-accent/70",
  },
  {
    icon: Brain,
    title: "AI Pattern Detector",
    description: "This real-time tool analyzes inputs and detects known and new scam patterns using AI/ML.",
    gradient: "from-secondary to-secondary/70",
  },
  {
    icon: Users,
    title: "Community Reporting",
    description: "Provides a mechanism for users to promptly report questionable activity, adding new information to the system.",
    gradient: "from-warning to-warning/70",
  },
  {
    icon: BookOpen,
    title: "Awareness Zone",
    description: "Offers users easy access to best practices, warnings, and guides for protecting themselves from scams.",
    gradient: "from-success to-success/70",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Comprehensive Protection Suite</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five powerful modules working together to keep you safe from all types of online scams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
