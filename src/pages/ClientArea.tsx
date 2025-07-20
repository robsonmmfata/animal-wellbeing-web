import { useState } from "react";
import { Lock, User, Eye, EyeOff, Heart, Calendar, FileText, Upload, Download, Shield, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdminDashboard from "@/components/AdminDashboard";
import VetDashboard from "@/components/VetDashboard";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"client" | "vet" | "admin">("client");
  const [loginData, setLoginData] = useState({ email: "", password: "", type: "client" });

  // Dados simulados do cliente
  const clientData = {
    pet: {
      name: "Mel",
      breed: "Golden Retriever",
      age: "3 anos",
      weight: "28 kg",
      photo: "🐕"
    },
    plan: {
      name: "Plano Ouro",
      validity: "12/12/2024",
      coverage: ["Consultas ilimitadas", "Cirurgias complexas", "Exames laboratoriais", "Emergência 24h"]
    },
    appointments: [
      { date: "15/03/2024", type: "Consulta de rotina", vet: "Dra. Ana Silva", status: "Concluído" },
      { date: "20/02/2024", type: "Vacinação", vet: "Dr. Carlos Santos", status: "Concluído" },
      { date: "10/01/2024", type: "Exame de sangue", vet: "Dra. Marina Costa", status: "Concluído" }
    ],
    vaccines: [
      { name: "V10", date: "20/02/2024", next: "20/02/2025", status: "Em dia" },
      { name: "Antirrábica", date: "15/01/2024", next: "15/01/2025", status: "Em dia" },
      { name: "Giárdia", date: "10/12/2023", next: "10/12/2024", status: "Próximo do vencimento" }
    ]
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - qualquer email/senha funciona
    if (loginData.email && loginData.password) {
      setUserType(loginData.type as "client" | "vet" | "admin");
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-soft flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md shadow-strong">
          <CardHeader className="text-center">
            <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">Acesso ao Sistema</CardTitle>
            <p className="text-muted-foreground">Escolha seu tipo de acesso</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="userType">Tipo de Usuário</Label>
                <Select value={loginData.type} onValueChange={(value) => setLoginData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Selecione o tipo de acesso" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Cliente/Tutor</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="vet">
                      <div className="flex items-center space-x-2">
                        <Stethoscope className="h-4 w-4 text-secondary" />
                        <span>Veterinário</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-accent" />
                        <span>Administrador</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={loginData.email}
                  onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full gradient-primary text-white hover-lift">
                Entrar
              </Button>
              <div className="text-center text-sm">
                <a href="#" className="text-primary hover:underline">Esqueceu sua senha?</a>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Demo: use qualquer email e senha para acessar
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Renderizar dashboard baseado no tipo de usuário
  if (userType === "admin") {
    return <AdminDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  if (userType === "vet") {
    return <VetDashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  // Dashboard do Cliente - Melhorado
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary rounded-full p-2">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Portal do Cliente</h1>
                <p className="text-sm text-muted-foreground">Bem-vindo de volta!</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsLoggedIn(false)} className="hover-lift">
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <Card className="mb-8 gradient-primary text-white shadow-strong">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Olá! Como está o {clientData.pet.name} hoje?</h2>
                <p className="text-white/80">Aqui você encontra todas as informações sobre o cuidado do seu pet.</p>
              </div>
              <div className="text-6xl">{clientData.pet.photo}</div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center shadow-soft hover-lift">
            <CardContent className="p-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Saúde Geral</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft hover-lift">
            <CardContent className="p-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">5</div>
              <div className="text-sm text-muted-foreground">Consultas</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft hover-lift">
            <CardContent className="p-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{clientData.plan.name}</div>
              <div className="text-sm text-muted-foreground">Plano Ativo</div>
            </CardContent>
          </Card>
          
          <Card className="text-center shadow-soft hover-lift">
            <CardContent className="p-6">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">12</div>
              <div className="text-sm text-muted-foreground">Documentos</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pet Info - Enhanced */}
          <Card className="shadow-soft hover-lift border-0">
            <CardHeader className="bg-gradient-soft text-center rounded-t-lg">
              <CardTitle className="text-xl font-bold text-foreground">{clientData.pet.name}</CardTitle>
              <p className="text-muted-foreground">{clientData.pet.breed}</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-muted-foreground">Idade</span>
                  <span className="font-semibold">{clientData.pet.age}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="text-muted-foreground">Peso</span>
                  <span className="font-semibold">{clientData.pet.weight}</span>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Heart className="h-4 w-4 mr-2" />
                    <span className="font-medium">Status: Saudável</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Info - Enhanced */}
          <Card className="shadow-soft hover-lift border-0">
            <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-xl font-bold flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                {clientData.plan.name}
              </CardTitle>
              <p className="text-white/80">Válido até: {clientData.plan.validity}</p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">Benefícios Inclusos:</h4>
                <div className="space-y-2">
                  {clientData.plan.coverage.map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 gradient-primary text-white hover-lift">
                  Ver Detalhes do Plano
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-soft hover-lift border-0">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground">Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <Button className="w-full gradient-primary text-white hover-lift">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Consulta
              </Button>
              <Button variant="outline" className="w-full hover-lift">
                <Upload className="h-4 w-4 mr-2" />
                Enviar Exame
              </Button>
              <Button variant="outline" className="w-full hover-lift">
                <FileText className="h-4 w-4 mr-2" />
                Solicitar Receita
              </Button>
              <Button variant="outline" className="w-full hover-lift">
                <Heart className="h-4 w-4 mr-2" />
                Emergência
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Appointments History - Enhanced */}
        <Card className="mt-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center">
              <Calendar className="h-5 w-5 text-primary mr-2" />
              Histórico de Atendimentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientData.appointments.map((appointment, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-muted/30 transition-smooth">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <Badge variant="secondary">{appointment.date}</Badge>
                        <span className="font-semibold">{appointment.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Dr(a): {appointment.vet}
                      </p>
                    </div>
                    <Badge className="bg-green-500 text-white">{appointment.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Vaccines - Enhanced */}
        <Card className="mt-8 shadow-soft border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold flex items-center">
              <Shield className="h-5 w-5 text-primary mr-2" />
              Carteira de Vacinação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {clientData.vaccines.map((vaccine, index) => (
                <Card key={index} className="border-2 hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-foreground">{vaccine.name}</h4>
                      <Badge 
                        variant={vaccine.status === "Em dia" ? "default" : "destructive"}
                        className={vaccine.status === "Em dia" ? "bg-green-500 text-white" : ""}
                      >
                        {vaccine.status}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Aplicada:</span>
                        <span className="font-medium">{vaccine.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Próxima:</span>
                        <span className="font-medium">{vaccine.next}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientArea;