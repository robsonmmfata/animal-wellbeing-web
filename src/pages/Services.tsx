import { Stethoscope, Scissors, Syringe, FlaskConical, Clock, Zap, Heart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Clínicas",
      description: "Exames de rotina completos, diagnósticos precisos e acompanhamento contínuo da saúde do seu pet. Nossa equipe especializada realiza avaliações detalhadas para garantir o bem-estar animal.",
      features: ["Exame físico completo", "Diagnósticos precisos", "Acompanhamento contínuo", "Orientações preventivas"],
      duration: "30-45 min",
      emergency: false
    },
    {
      icon: Syringe,
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos com tecnologia de ponta e cuidados especializados. Centro cirúrgico moderno com monitoramento completo e equipe experiente.",
      features: ["Centro cirúrgico moderno", "Monitoramento completo", "Anestesia segura", "Pós-operatório especializado"],
      duration: "1-4 horas",
      emergency: true
    },
    {
      icon: Syringe,
      title: "Vacinação",
      description: "Protocolo completo de vacinas seguindo calendário internacional. Proteção eficaz contra as principais doenças que afetam cães e gatos.",
      features: ["Protocolo completo", "Vacinas importadas", "Calendário personalizado", "Certificado internacional"],
      duration: "15-20 min",
      emergency: false
    },
    {
      icon: FlaskConical,
      title: "Exames Laboratoriais",
      description: "Laboratório próprio com equipamentos modernos para resultados rápidos e precisos. Análises completas para diagnóstico e prevenção.",
      features: ["Resultados em 24h", "Equipamentos modernos", "Análises completas", "Laudos detalhados"],
      duration: "Coleta: 10 min",
      emergency: true
    },
    {
      icon: Scissors,
      title: "Banho e Tosa",
      description: "Serviços de higiene e estética com produtos especializados. Ambiente tranquilo e profissionais experientes para manter seu pet sempre bonito.",
      features: ["Produtos especializados", "Ambiente tranquilo", "Tosa personalizada", "Cuidados especiais"],
      duration: "1-2 horas",
      emergency: false
    },
    {
      icon: Zap,
      title: "Emergência 24h",
      description: "Atendimento de urgência disponível 24 horas por dia, todos os dias do ano. Equipe de plantão preparada para situações críticas.",
      features: ["Plantão 24/7", "Equipe especializada", "UTI veterinária", "Equipamentos de emergência"],
      duration: "Imediato",
      emergency: true
    }
  ];

  const stats = [
    { icon: Heart, value: "5000+", label: "Pets atendidos" },
    { icon: Users, value: "15", label: "Veterinários especialistas" },
    { icon: Clock, value: "24/7", label: "Atendimento emergencial" },
    { icon: Stethoscope, value: "98%", label: "Taxa de sucesso" }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários com qualidade, 
            tecnologia de ponta e muito carinho para seu melhor amigo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover-lift">
              <CardContent className="p-6">
                <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover-lift shadow-soft border-0 bg-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  {service.emergency && (
                    <div className="bg-destructive/10 text-destructive px-2 py-1 rounded-full text-xs font-medium">
                      Emergência
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Heart className="h-3 w-3 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duração:</span>
                      <span className="font-medium text-foreground">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-soft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Pronto para cuidar do seu pet?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para agendar uma consulta ou esclarecer suas dúvidas. 
            Nossa equipe está sempre pronta para ajudar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511987654321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-smooth hover-lift"
            >
              WhatsApp: (11) 98765-4321
            </a>
            <a 
              href="tel:1134567890"
              className="inline-flex items-center justify-center px-6 py-3 gradient-primary text-white font-medium rounded-lg transition-smooth hover-lift"
            >
              Telefone: (11) 3456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;