import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">ScamGuard AI</h3>
              <p className="text-xs text-muted-foreground">Protecting users worldwide</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2024 ScamGuard AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Demo version for educational purposes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
