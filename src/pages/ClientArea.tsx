import { useState } from "react";
import { Lock, User, Eye, EyeOff, Heart, Calendar, FileText, Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

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
            <CardTitle className="text-2xl font-bold text-foreground">Área do Cliente</CardTitle>
            <p className="text-muted-foreground">Acesse sua conta para ver os dados do seu pet</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Área do Cliente</h1>
            <p className="text-muted-foreground">Bem-vindo! Aqui você encontra todas as informações do seu pet.</p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setIsLoggedIn(false)}
            className="hover-lift"
          >
            Sair
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pet Info */}
          <Card className="shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Dados do Pet</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{clientData.pet.photo}</div>
                <h3 className="text-xl font-bold text-foreground">{clientData.pet.name}</h3>
                <p className="text-muted-foreground">{clientData.pet.breed}</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Idade:</span>
                  <span className="font-medium">{clientData.pet.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Peso:</span>
                  <span className="font-medium">{clientData.pet.weight}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Plan Info */}
          <Card className="shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span>Plano Contratado</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2">{clientData.plan.name}</h3>
                <p className="text-sm text-muted-foreground">Válido até: {clientData.plan.validity}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground">Cobertura:</h4>
                {clientData.plan.coverage.map((item, index) => (
                  <Badge key={index} variant="secondary" className="mr-2 mb-2">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upload Exams */}
          <Card className="shadow-soft hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span>Exames</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Faça upload dos exames do seu pet</p>
                <Button className="gradient-primary text-white hover-lift">
                  <Upload className="h-4 w-4 mr-2" />
                  Enviar Exame
                </Button>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium text-foreground mb-2">Exames Recentes:</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Hemograma_15-03-24.pdf</span>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Raio-X_10-01-24.pdf</span>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointments History */}
        <Card className="mt-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Histórico de Atendimentos</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Data</th>
                    <th className="text-left py-2">Tipo</th>
                    <th className="text-left py-2">Veterinário</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {clientData.appointments.map((appointment, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="py-3">{appointment.date}</td>
                      <td className="py-3">{appointment.type}</td>
                      <td className="py-3">{appointment.vet}</td>
                      <td className="py-3">
                        <Badge variant="secondary">{appointment.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Vaccines */}
        <Card className="mt-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Controle de Vacinas</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {clientData.vaccines.map((vaccine, index) => (
                <div key={index} className="border rounded-lg p-4 hover-lift">
                  <h4 className="font-semibold text-foreground mb-2">{vaccine.name}</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Aplicada:</span> {vaccine.date}</p>
                    <p><span className="text-muted-foreground">Próxima:</span> {vaccine.next}</p>
                    <Badge 
                      variant={vaccine.status === "Em dia" ? "secondary" : "destructive"}
                      className="mt-2"
                    >
                      {vaccine.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientArea;