import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      business: "Barbearia Moderna - São Paulo",
      text: "A coiffeurS revolucionou minha barbearia. Aumentei 40% o faturamento só pela organização dos agendamentos. Os clientes adoram acompanhar a fila pelo painel digital.",
      rating: 5,
      avatar: "C"
    },
    {
      name: "Rafael Santos",
      business: "Corte & Estilo - São Paulo", 
      text: "Antes perdia muito tempo com agendamentos manuais. Agora tudo é automático e consigo focar no que faço de melhor: cortar cabelo. O suporte é excepcional!",
      rating: 5,
      avatar: "R"
    },
    {
      name: "André Costa",
      business: "Barbershop Premium - São Paulo",
      text: "Os relatórios me ajudaram a entender melhor meu negócio. Descobri quais serviços são mais procurados e ajustei minha estratégia. Resultado: 60% mais lucro.",
      rating: 5,
      avatar: "A"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O que dizem nossos parceiros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
           Diversas barbearias já transformaram seus negócios com o coiffeurS.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-accent/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="space-y-6">
                {/* Rating stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;