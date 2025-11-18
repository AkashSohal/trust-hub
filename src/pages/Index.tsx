import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SpecialFeatures from "@/components/SpecialFeatures";
import DemoChecker from "@/components/DemoChecker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SpecialFeatures />
      <DemoChecker />
      <Footer />
    </div>
  );
};

export default Index;
