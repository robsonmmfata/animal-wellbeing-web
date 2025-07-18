import { Check, Heart, Star, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Plans = () => {
  const plans = [
    {
      name: "Plano Bronze",
      price: "89",
      popular: false,
      description: "Ideal para cuidados básicos do seu pet",
      features: [
        "Consultas clínicas ilimitadas",
        "Protocolo básico de vacinas",
        "20% de desconto em exames",
        "Atendimento de segunda a sexta",
        "Prontuário digital",
        "Suporte via WhatsApp"
      ],
      notIncluded: [
        "Cirurgias",
        "Atendimento emergencial 24h",
        "Banho e tosa",
        "Exames laboratoriais inclusos"
      ]
    },
    {
      name: "Plano Prata",
      price: "149",
      popular: true,
      description: "A escolha mais equilibrada para seu pet",
      features: [
        "Tudo do Plano Bronze",
        "Cirurgias básicas inclusas",
        "3 sessões de banho e tosa",
        "Exames laboratoriais básicos",
        "Atendimento aos sábados",
        "Desconto de 30% em medicamentos",
        "Teleconsulta inclusa"
      ],
      notIncluded: [
        "Cirurgias complexas",
        "Atendimento emergencial 24h",
        "Fisioterapia veterinária"
      ]
    },
    {
      name: "Plano Ouro",
      price: "229",
      popular: false,
      description: "Cuidado premium e completo",
      features: [
        "Tudo do Plano Prata",
        "Cirurgias complexas inclusas",
        "Atendimento emergencial 24h",
        "Banho e tosa ilimitados",
        "Todos os exames laboratoriais",
        "Fisioterapia veterinária",
        "Atendimento domiciliar",
        "Internação inclusa",
        "Desconto de 50% em medicamentos"
      ],
      notIncluded: []
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Acompanhamento completo da saúde do seu pet"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Veterinários experientes e dedicados"
    },
    {
      icon: Shield,
      title: "Sem Carência",
      description: "Comece a usar os benefícios imediatamente"
    },
    {
      icon: Zap,
      title: "Atendimento Rápido",
      description: "Agendamentos prioritários para clientes do plano"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Planos de Saúde Pet
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuidado completo e econômico para o seu melhor amigo. 
            Escolha o plano ideal e garanta a saúde do seu pet com a qualidade VetCare.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-soft hover-lift">
              <CardContent className="p-6">
                <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative shadow-strong hover-lift border-2 ${
                plan.popular 
                  ? 'border-primary scale-105 shadow-strong' 
                  : 'border-border'
              } bg-card overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                  <Star className="inline h-4 w-4 mr-1" />
                  Mais Popular
                </div>
              )}
              
              <CardHeader className={plan.popular ? 'pt-12' : ''}>
                <CardTitle className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">R$ {plan.price}</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-normal">{plan.description}</p>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Included Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">✅ Incluído no plano:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included Features */}
                {plan.notIncluded.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">❌ Não incluído:</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <span className="text-muted-foreground text-xs mr-2 mt-1">•</span>
                          <span className="text-muted-foreground/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'gradient-primary text-white' 
                      : 'border-primary text-primary hover:bg-primary hover:text-white'
                  } hover-lift transition-smooth`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Escolher {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-foreground">
              Comparativo Detalhado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Serviços</th>
                    <th className="text-center py-4 px-2">Bronze</th>
                    <th className="text-center py-4 px-2">Prata</th>
                    <th className="text-center py-4 px-2">Ouro</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Consultas clínicas</td>
                    <td className="text-center py-3 px-2">Ilimitadas</td>
                    <td className="text-center py-3 px-2">Ilimitadas</td>
                    <td className="text-center py-3 px-2">Ilimitadas</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Vacinas</td>
                    <td className="text-center py-3 px-2">Básicas</td>
                    <td className="text-center py-3 px-2">Básicas</td>
                    <td className="text-center py-3 px-2">Completas</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Cirurgias</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">Básicas</td>
                    <td className="text-center py-3 px-2">Todas</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Exames laboratoriais</td>
                    <td className="text-center py-3 px-2">20% desconto</td>
                    <td className="text-center py-3 px-2">Básicos</td>
                    <td className="text-center py-3 px-2">Todos</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Banho e tosa</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">3 sessões</td>
                    <td className="text-center py-3 px-2">Ilimitado</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Emergência 24h</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">✅</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2 font-medium">Atendimento domiciliar</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">❌</td>
                    <td className="text-center py-3 px-2">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-soft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tem dúvidas sobre qual plano escolher?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar a escolher o melhor plano para seu pet. 
            Entre em contato e tire todas as suas dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover-lift">
              <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                Falar com consultor
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-lift">
              <a href="tel:1134567890">
                Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;