import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Shield, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

type CheckResult = {
  status: "safe" | "warning" | "danger";
  score: number;
  issues: string[];
  recommendations: string[];
};

const DemoChecker = () => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [seller, setSeller] = useState("");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);

  const simulateCheck = (type: string, value: string) => {
    setChecking(true);
    setResult(null);

    // Simulate API call delay
    setTimeout(() => {
      // Generate demo result based on input
      const mockResults: { [key: string]: CheckResult } = {
        safe: {
          status: "safe",
          score: 92,
          issues: [],
          recommendations: [
            "Website has valid SSL certificate",
            "Domain registered for 5+ years",
            "No reports in our database",
          ],
        },
        warning: {
          status: "warning",
          score: 65,
          issues: [
            "Recently registered domain",
            "Limited online presence",
          ],
          recommendations: [
            "Proceed with caution",
            "Verify seller independently",
            "Use secure payment methods",
          ],
        },
        danger: {
          status: "danger",
          score: 23,
          issues: [
            "Multiple scam reports",
            "No SSL certificate",
            "Suspicious domain pattern",
            "Flagged by AI pattern detector",
          ],
          recommendations: [
            "Do NOT proceed with this seller/website",
            "Report to authorities",
            "Inform others in your network",
          ],
        },
      };

      // Randomly select a result for demo purposes
      const resultTypes = ["safe", "warning", "danger"];
      const randomResult = resultTypes[Math.floor(Math.random() * resultTypes.length)];
      
      setResult(mockResults[randomResult]);
      setChecking(false);
      
      toast.success("Verification complete!");
    }, 2000);
  };

  const handleCheck = (type: string) => {
    const value = type === "website" ? url : type === "email" ? email : seller;
    
    if (!value.trim()) {
      toast.error("Please enter a value to check");
      return;
    }

    simulateCheck(type, value);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle2 className="w-8 h-8 text-success" />;
      case "warning":
        return <AlertTriangle className="w-8 h-8 text-warning" />;
      case "danger":
        return <XCircle className="w-8 h-8 text-destructive" />;
      default:
        return <Shield className="w-8 h-8" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "bg-success/10 text-success border-success/30";
      case "warning":
        return "bg-warning/10 text-warning border-warning/30";
      case "danger":
        return "bg-destructive/10 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="checker" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Try Our Free Checker</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant verification results in under 10 seconds
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Demo Verification Tool</CardTitle>
            <CardDescription className="text-base">
              Enter a website URL, email address, or seller name to check for potential scams (Demo mode - generates sample results)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="website" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="website">Website</TabsTrigger>
                <TabsTrigger value="email">Job/Email</TabsTrigger>
                <TabsTrigger value="seller">Seller</TabsTrigger>
              </TabsList>

              <TabsContent value="website" className="space-y-4 mt-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter website URL (e.g., example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="text-base"
                  />
                  <Button 
                    onClick={() => handleCheck("website")} 
                    disabled={checking}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    {checking ? "Checking..." : <><Search className="w-4 h-4 mr-2" /> Check</>}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="email" className="space-y-4 mt-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter email address (e.g., hr@company.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-base"
                  />
                  <Button 
                    onClick={() => handleCheck("email")} 
                    disabled={checking}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    {checking ? "Checking..." : <><Search className="w-4 h-4 mr-2" /> Check</>}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="seller" className="space-y-4 mt-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter seller name or shop"
                    value={seller}
                    onChange={(e) => setSeller(e.target.value)}
                    className="text-base"
                  />
                  <Button 
                    onClick={() => handleCheck("seller")} 
                    disabled={checking}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    {checking ? "Checking..." : <><Search className="w-4 h-4 mr-2" /> Check</>}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            {result && (
              <Card className={`mt-8 border-2 ${getStatusColor(result.status)}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    {getStatusIcon(result.status)}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold capitalize">{result.status}</h3>
                      <p className="text-sm opacity-80">Trust Score: {result.score}/100</p>
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {result.status === "safe" ? "✓ Verified" : result.status === "warning" ? "⚠ Caution" : "✗ Danger"}
                    </Badge>
                  </div>

                  {result.issues.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        Issues Found:
                      </h4>
                      <ul className="space-y-1 ml-6">
                        {result.issues.map((issue, idx) => (
                          <li key={idx} className="text-sm">• {issue}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      {result.status === "safe" ? "Verification Details:" : "Recommendations:"}
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {result.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm">• {rec}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DemoChecker;
