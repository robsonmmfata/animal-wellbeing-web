import { ArrowRight, Heart, Users, Shield, MapPin, Star, Stethoscope, Scissors, Syringe, FlaskConical, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-vet.jpg";
import vet1Image from "@/assets/vet-1.jpg";
import vet2Image from "@/assets/vet-2.jpg";
import vet3Image from "@/assets/vet-3.jpg";

const Home = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Clínicas",
      description: "Exames de rotina e diagnósticos completos para manter a saúde do seu pet em dia."
    },
    {
      icon: Syringe,
      title: "Cirurgias",
      description: "Procedimentos cirúrgicos com tecnologia moderna e cuidados especializados."
    },
    {
      icon: Shield,
      title: "Vacinação",
      description: "Protocolo completo de vacinas para proteção contra doenças."
    },
    {
      icon: FlaskConical,
      title: "Exames Laboratoriais",
      description: "Laboratório próprio com resultados rápidos e precisos."
    },
    {
      icon: Scissors,
      title: "Banho e Tosa",
      description: "Serviços de higiene e estética para manter seu pet sempre bonito."
    },
    {
      icon: Zap,
      title: "Emergência 24h",
      description: "Atendimento de urgência disponível 24 horas por dia."
    }
  ];

  const team = [
    {
      name: "Dra. Ana Silva",
      specialty: "Clínica Geral",
      experience: "8 anos",
      image: vet1Image
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Cirurgia",
      experience: "12 anos",
      image: vet2Image
    },
    {
      name: "Dra. Marina Costa",
      specialty: "Dermatologia",
      experience: "6 anos",
      image: vet3Image
    }
  ];

  const testimonials = [
    {
      name: "Maria João",
      pet: "Mel (Golden Retriever)",
      text: "Excelente atendimento! A Dra. Ana cuidou da Mel com tanto carinho. Recomendo a todos!"
    },
    {
      name: "Pedro Silva",
      pet: "Thor (Pastor Alemão)",
      text: "Profissionais competentes e instalações modernas. O Thor se sente em casa aqui."
    },
    {
      name: "Ana Costa",
      pet: "Mimi (Persa)",
      text: "A Mimi ficou linda após o banho e tosa. Equipe muito cuidadosa e atenciosa."
    },
    {
      name: "João Santos",
      pet: "Rex (Labrador)",
      text: "Emergência 24h salvou a vida do Rex. Gratidão eterna a toda equipe!"
    }
  ];

  const plans = [
    {
      name: "Plano Bronze",
      price: "R$ 89",
      features: ["Consultas ilimitadas", "Vacinas básicas", "Desconto em exames"]
    },
    {
      name: "Plano Prata",
      price: "R$ 149",
      features: ["Tudo do Bronze", "Cirurgias básicas", "Exames laboratoriais", "Banho e tosa"]
    },
    {
      name: "Plano Ouro",
      price: "R$ 229",
      features: ["Tudo do Prata", "Cirurgias complexas", "Atendimento preferencial", "Emergência 24h"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Veterinária cuidando de um cachorro"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cuidado, carinho e saúde para quem é
            <span className="block text-secondary"> parte da família</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Na VetCare, seu pet recebe o amor e cuidado que merece, 
            com profissionais especializados e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 transition-bounce hover-lift">
              <Link to="/servicos">
                Conheça nossos serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary transition-bounce">
              <Link to="/area-cliente">Acesse sua conta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços veterinários com qualidade e carinho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift shadow-soft border-0 bg-card">
                <CardContent className="p-6">
                  <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="gradient-primary text-white hover-lift">
              <Link to="/servicos">
                Ver todos os serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes e apaixonados pelo bem-estar animal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover-lift shadow-soft border-0 bg-card overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.specialty}</p>
                  <p className="text-muted-foreground text-sm">{member.experience} de experiência</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="gradient-primary text-white hover-lift">
              <Link to="/equipe">
                Conheça toda a equipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Planos de Saúde Pet</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cuidado completo e econômico para o seu melhor amigo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`group hover-lift shadow-soft border-2 ${index === 1 ? 'border-primary scale-105' : 'border-border'} bg-card relative overflow-hidden`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-2 text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <CardContent className={`p-6 ${index === 1 ? 'pt-12' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center text-sm">
                          <Heart className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${index === 1 ? 'gradient-primary text-white' : ''} hover-lift`}>
                      Escolher Plano
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="gradient-primary text-white hover-lift">
              <Link to="/planos">
                Ver detalhes dos planos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Depoimentos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nossos clientes dizem sobre nosso cuidado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift shadow-soft border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">Tutor(a) do {testimonial.pet}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Localização e Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Rua das Flores, 123<br />Vila Madalena, São Paulo - SP<br />CEP: 05415-000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 19h<br />Sábados: 8h às 14h<br />Emergência 24h todos os dias</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild className="gradient-primary text-white hover-lift">
                  <Link to="/contato">
                    Entre em contato
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted rounded-lg p-6 h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p>Mapa interativo<br />Google Maps aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;