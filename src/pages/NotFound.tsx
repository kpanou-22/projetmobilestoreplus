import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-black text-primary/10">404</h1>
        <div className="space-y-2">
          <p className="text-3xl font-black text-foreground uppercase tracking-tight">Page non trouvée</p>
          <p className="text-muted-foreground font-medium">L'adresse demandée est introuvable ou a été déplacée.</p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-1"
        >
          <Home className="w-5 h-5" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
