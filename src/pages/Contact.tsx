import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    setFormData({ name: "", email: "", phone: "", petName: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      items: [
        { label: "Recepção", value: "(11) 3456-7890" },
        { label: "WhatsApp", value: "(11) 98765-4321" },
        { label: "Emergência 24h", value: "(11) 99999-0000" }
      ]
    },
    {
      icon: Mail,
      title: "E-mails",
      items: [
        { label: "Geral", value: "contato@vetcare.com.br" },
        { label: "Agendamento", value: "agendamento@vetcare.com.br" },
        { label: "Emergência", value: "emergencia@vetcare.com.br" }
      ]
    },
    {
      icon: MapPin,
      title: "Endereço",
      items: [
        { label: "", value: "Rua das Flores, 123" },
        { label: "", value: "Vila Madalena, São Paulo - SP" },
        { label: "", value: "CEP: 05415-000" }
      ]
    },
    {
      icon: Clock,
      title: "Horários",
      items: [
        { label: "Segunda a Sexta", value: "8h às 19h" },
        { label: "Sábados", value: "8h às 14h" },
        { label: "Emergência", value: "24h todos os dias" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos sempre prontos para atender você e seu pet. 
            Entre em contato conosco e tire todas as suas dúvidas.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-soft hover-lift">
              <CardHeader className="text-center">
                <div className="bg-gradient-soft rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {info.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-center">
                      {item.label && (
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                      )}
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Send className="h-6 w-6 text-primary mr-2" />
                Envie uma Mensagem
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="petName">Nome do pet</Label>
                    <Input
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleInputChange}
                      placeholder="Nome do seu pet"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos como podemos ajudar você e seu pet..."
                    rows={4}
                    required
                    className="mt-1"
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary text-white hover-lift">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Quick Actions */}
          <div className="space-y-6">
            {/* Map */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  Nossa Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <p>Mapa interativo do Google Maps</p>
                    <p className="text-sm">Rua das Flores, 123 - Vila Madalena, SP</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="font-medium text-foreground">Como chegar:</p>
                  <p className="text-muted-foreground">• Metrô: Estação Vila Madalena (5 min a pé)</p>
                  <p className="text-muted-foreground">• Ônibus: Linhas 175M, 8012-10</p>
                  <p className="text-muted-foreground">• Carro: Estacionamento gratuito no local</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Atendimento Rápido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  asChild 
                  className="w-full bg-green-500 hover:bg-green-600 text-white hover-lift"
                >
                  <a 
                    href="https://wa.me/5511987654321?text=Olá! Gostaria de agendar uma consulta para meu pet." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp - Agendamento
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full hover-lift"
                >
                  <a href="tel:1134567890" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Ligar para Recepção
                  </a>
                </Button>

                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full border-destructive text-destructive hover:bg-destructive hover:text-white hover-lift"
                >
                  <a href="tel:11999990000" className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergência 24h
                  </a>
                </Button>

                <div className="bg-accent-light rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-foreground mb-2">💡 Dica importante:</h4>
                  <p className="text-sm text-muted-foreground">
                    Para emergências, ligue diretamente para nosso número de plantão. 
                    Para agendamentos de rotina, o WhatsApp é mais rápido!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Banner */}
        <Card className="mt-12 bg-destructive/10 border-destructive/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-destructive mb-4">
              🚨 Emergência Veterinária?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se seu pet está passando por uma situação de emergência, 
              não hesite em nos procurar. Estamos disponíveis 24 horas por dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-destructive hover:bg-destructive/90 text-white hover-lift"
              >
                <a href="tel:11999990000">
                  Ligar Emergência: (11) 99999-0000
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive hover:text-white hover-lift"
              >
                <a 
                  href="https://wa.me/5511999990000?text=EMERGÊNCIA: Meu pet precisa de atendimento urgente!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  WhatsApp Emergência
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;