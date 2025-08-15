import { Users, Calendar, BarChart3, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de serviços, preferências e dados de contato organizados."
    },
    {
      icon: Calendar,
      title: "Agenda & Agendamentos",
      description: "Sistema inteligente de agendamento com whatsapp integrado e gestão de horários."
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      description: "Relatórios em tempo real sobre faturamento e performance do negócio e detalhes das transações diárias."
    },
    {
      icon: Clock,
      title: "Fila Pública",
      description: "Painel público para clientes acompanharem a fila em tempo real, reduzindo espera e melhorando experiência."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Tudo que sua barbearia precisa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Módulos integrados que transformam a gestão da sua barbearia em uma experiência moderna e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-accent/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;