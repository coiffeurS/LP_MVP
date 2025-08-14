import { MessageCircle, Calendar, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Entre em Contato",
      description: "Clique no botão do WhatsApp e fale conosco. Nossa equipe te atenderá em minutos."
    },
    {
      icon: Calendar,
      step: "02", 
      title: "Configuração Personalizada",
      description: "Configuramos o sistema especialmente para sua barbearia, incluindo agenda, serviços e preços."
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Comece a Crescer",
      description: "Com tudo configurado, você já pode gerenciar clientes, agendamentos e acompanhar o crescimento."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples, sua barbearia estará equipada com a tecnologia mais moderna do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/30 via-accent/50 to-accent/30 transform translate-x-8 z-0"></div>
                )}
                
                <div className="relative z-10 space-y-6">
                  {/* Step number and icon */}
                  <div className="relative mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-4 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;