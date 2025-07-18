import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-gradient-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
          <Heart className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground mb-8">
          Ops! A página que você está procurando não foi encontrada. 
          Que tal voltarmos ao início e encontrarmos o que você precisa?
        </p>
        <div className="space-y-4">
          <Button asChild size="lg" className="gradient-primary text-white hover-lift">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Voltar ao Início
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-lift">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-5 w-5" />
              Página Anterior
            </button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
