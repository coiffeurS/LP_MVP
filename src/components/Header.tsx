import { Button } from "@/components/ui/button";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              coiffeur<span className="text-accent">S</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </a>
          </nav>

          <Button 
            variant="whatsapp" 
            size="sm"
            onClick={handleWhatsAppClick}
            className="font-semibold"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;