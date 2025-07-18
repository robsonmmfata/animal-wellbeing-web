import { Mail, Phone, GraduationCap, Heart, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import vet1Image from "@/assets/vet-1.jpg";
import vet2Image from "@/assets/vet-2.jpg";
import vet3Image from "@/assets/vet-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dra. Ana Silva",
      specialty: "Clínica Geral e Medicina Preventiva",
      experience: "8 anos",
      education: "FMVZ-USP",
      description: "Especializada em clínica geral com foco em medicina preventiva. Apaixonada por educação dos tutores e bem-estar animal.",
      image: vet1Image,
      specialties: ["Clínica Geral", "Medicina Preventiva", "Geriatria", "Cardiologia"],
      phone: "(11) 98765-0001",
      email: "ana.silva@vetcare.com.br"
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Cirurgia e Ortopedia",
      experience: "12 anos",
      education: "FMVZ-UNESP",
      description: "Cirurgião experiente com especialização em ortopedia. Realiza procedimentos complexos com tecnologia de ponta.",
      image: vet2Image,
      specialties: ["Cirurgia Geral", "Ortopedia", "Neurocirurgia", "Cirurgia Oncológica"],
      phone: "(11) 98765-0002",
      email: "carlos.santos@vetcare.com.br"
    },
    {
      name: "Dra. Marina Costa",
      specialty: "Dermatologia e Estética",
      experience: "6 anos",
      education: "FMVZ-UFMG",
      description: "Especialista em dermatologia veterinária e procedimentos estéticos. Cuida da pele e pelos dos pets com carinho especial.",
      image: vet3Image,
      specialties: ["Dermatologia", "Alergias", "Estética Pet", "Tricologia"],
      phone: "(11) 98765-0003",
      email: "marina.costa@vetcare.com.br"
    }
  ];

  const stats = [
    { icon: Users, value: "15+", label: "Veterinários especialistas" },
    { icon: GraduationCap, value: "100+", label: "Anos de experiência combinada" },
    { icon: Award, value: "50+", label: "Certificações e especializações" },
    { icon: Heart, value: "5000+", label: "Pets cuidados com amor" }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profissionais experientes, apaixonados e dedicados ao bem-estar animal. 
            Conheça os especialistas que cuidam do seu melhor amigo com amor e competência.
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

        {/* Team Members */}
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-strong hover-lift">
              <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="mb-6">
                      <h2 className="text-3xl font-bold text-foreground mb-2">{member.name}</h2>
                      <p className="text-xl text-primary font-semibold mb-1">{member.specialty}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>🎓 {member.education}</span>
                        <span>⏱️ {member.experience} de experiência</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{member.description}</p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Especialidades:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <span
                            key={specialtyIndex}
                            className="bg-secondary-light text-secondary-dark px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center space-x-2 hover-lift"
                        asChild
                      >
                        <a href={`tel:${member.phone.replace(/\D/g, '')}`}>
                          <Phone className="h-4 w-4" />
                          <span>{member.phone}</span>
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center space-x-2 hover-lift"
                        asChild
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                          <span>E-mail</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Team Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="shadow-soft hover-lift">
            <CardContent className="p-8">
              <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Equipe Completa</h3>
              <p className="text-muted-foreground mb-4">
                Além dos nossos veterinários principais, contamos com uma equipe de apoio 
                especializada incluindo auxiliares veterinários, recepcionistas e staff administrativo 
                treinados para oferecer o melhor atendimento.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  5 Auxiliares veterinários especializados
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  3 Profissionais de banho e tosa
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  Equipe de atendimento 24h para emergências
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover-lift">
            <CardContent className="p-8">
              <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Educação Continuada</h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe se mantém sempre atualizada com as mais recentes técnicas e 
                conhecimentos em medicina veterinária através de cursos, congressos e 
                especializações constantes.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  Participação em congressos nacionais e internacionais
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  Cursos de especialização regulares
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-secondary mr-2" />
                  Certificações em tecnologias de ponta
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-soft rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Agende uma consulta com nossos especialistas
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nossa equipe experiente está pronta para cuidar do seu pet com todo o 
            carinho e profissionalismo que ele merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover-lift">
              <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover-lift">
              <a href="tel:1134567890">
                Ligar para agendar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;