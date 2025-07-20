import { useState } from "react";
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  PlusCircle,
  Search,
  Filter,
  Heart,
  Thermometer,
  Weight,
  Activity,
  Syringe,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface VetDashboardProps {
  onLogout: () => void;
}

const VetDashboard = ({ onLogout }: VetDashboardProps) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Dados simulados
  const stats = [
    { icon: Calendar, title: "Consultas Hoje", value: "12", change: "+3", color: "text-blue-600" },
    { icon: Users, title: "Pacientes Ativos", value: "234", change: "+15", color: "text-green-600" },
    { icon: AlertCircle, title: "Urgências", value: "3", change: "+1", color: "text-red-600" },
    { icon: CheckCircle, title: "Atendimentos Concluídos", value: "8", change: "+2", color: "text-purple-600" }
  ];

  const todayAppointments = [
    {
      id: 1,
      time: "09:00",
      client: "Maria Silva",
      pet: "Mel",
      breed: "Golden Retriever",
      service: "Consulta de Rotina",
      status: "Aguardando",
      priority: "Normal"
    },
    {
      id: 2,
      time: "10:30",
      client: "João Santos",
      pet: "Rex",
      breed: "Labrador",
      service: "Vacinação",
      status: "Em Andamento",
      priority: "Normal"
    },
    {
      id: 3,
      time: "11:00",
      client: "Ana Costa",
      pet: "Mimi",
      breed: "Persa",
      service: "Emergência",
      status: "Urgente",
      priority: "Alta"
    },
    {
      id: 4,
      time: "14:00",
      client: "Pedro Lima",
      pet: "Thor",
      breed: "Pastor Alemão",
      service: "Cirurgia",
      status: "Agendado",
      priority: "Alta"
    }
  ];

  const patients = [
    {
      id: 1,
      name: "Mel",
      owner: "Maria Silva",
      breed: "Golden Retriever",
      age: "3 anos",
      weight: "28kg",
      lastVisit: "15/03/2024",
      condition: "Saudável",
      alerts: []
    },
    {
      id: 2,
      name: "Rex",
      owner: "João Santos",
      breed: "Labrador",
      age: "5 anos",
      weight: "32kg",
      lastVisit: "10/03/2024",
      condition: "Em Tratamento",
      alerts: ["Alergia alimentar"]
    },
    {
      id: 3,
      name: "Mimi",
      owner: "Ana Costa",
      breed: "Persa",
      age: "2 anos",
      weight: "4kg",
      lastVisit: "05/03/2024",
      condition: "Observação",
      alerts: ["Problema respiratório"]
    }
  ];

  const handleStartConsultation = (appointmentId: number) => {
    toast({
      title: "Consulta iniciada!",
      description: `Consulta #${appointmentId} foi marcada como em andamento.`,
    });
  };

  const handleCompleteConsultation = (appointmentId: number) => {
    toast({
      title: "Consulta finalizada!",
      description: `Consulta #${appointmentId} foi concluída com sucesso.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-primary rounded-full p-2">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Painel Veterinário</h1>
                <p className="text-sm text-muted-foreground">Dr. Carlos Santos - CRM 12345</p>
              </div>
            </div>
            <Button variant="outline" onClick={onLogout} className="hover-lift">
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-soft hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                  </div>
                  <div className="bg-gradient-soft rounded-full p-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="agenda" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agenda">Agenda Hoje</TabsTrigger>
            <TabsTrigger value="patients">Pacientes</TabsTrigger>
            <TabsTrigger value="medical">Prontuários</TabsTrigger>
            <TabsTrigger value="reports">Relatórios</TabsTrigger>
          </TabsList>

          {/* Agenda Today Tab */}
          <TabsContent value="agenda" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Agenda de Hoje</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString('pt-BR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <Card key={appointment.id} className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <Badge 
                                variant={appointment.priority === "Alta" ? "destructive" : "secondary"}
                                className="text-xs"
                              >
                                {appointment.priority}
                              </Badge>
                              <span className="text-lg font-semibold">{appointment.time}</span>
                              <Badge 
                                variant={
                                  appointment.status === "Em Andamento" ? "default" :
                                  appointment.status === "Urgente" ? "destructive" :
                                  "secondary"
                                }
                              >
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="font-medium text-foreground">{appointment.client}</p>
                                <p className="text-sm text-muted-foreground">Cliente</p>
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{appointment.pet}</p>
                                <p className="text-sm text-muted-foreground">{appointment.breed}</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{appointment.service}</p>
                          </div>
                          <div className="flex space-x-2">
                            {appointment.status === "Aguardando" && (
                              <Button 
                                size="sm" 
                                onClick={() => handleStartConsultation(appointment.id)}
                                className="gradient-primary text-white"
                              >
                                Iniciar
                              </Button>
                            )}
                            {appointment.status === "Em Andamento" && (
                              <Button 
                                size="sm" 
                                onClick={() => handleCompleteConsultation(appointment.id)}
                                className="bg-green-600 hover:bg-green-700 text-white"
                              >
                                Finalizar
                              </Button>
                            )}
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="outline">
                                  <FileText className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Consulta - {appointment.pet}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-3 gap-4">
                                    <div>
                                      <Label htmlFor="weight">Peso (kg)</Label>
                                      <Input id="weight" placeholder="0.0" />
                                    </div>
                                    <div>
                                      <Label htmlFor="temperature">Temperatura (°C)</Label>
                                      <Input id="temperature" placeholder="38.0" />
                                    </div>
                                    <div>
                                      <Label htmlFor="heartRate">Freq. Cardíaca</Label>
                                      <Input id="heartRate" placeholder="120" />
                                    </div>
                                  </div>
                                  <div>
                                    <Label htmlFor="symptoms">Sintomas</Label>
                                    <Textarea id="symptoms" placeholder="Descreva os sintomas observados..." />
                                  </div>
                                  <div>
                                    <Label htmlFor="diagnosis">Diagnóstico</Label>
                                    <Textarea id="diagnosis" placeholder="Diagnóstico médico..." />
                                  </div>
                                  <div>
                                    <Label htmlFor="treatment">Tratamento</Label>
                                    <Textarea id="treatment" placeholder="Prescrições e orientações..." />
                                  </div>
                                  <Button className="w-full gradient-primary text-white">
                                    Salvar Prontuário
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Meus Pacientes</CardTitle>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Buscar pacientes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                    <Button variant="outline">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {patients.map((patient) => (
                    <Card key={patient.id} className="hover-lift">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground">{patient.name}</h3>
                            <p className="text-sm text-muted-foreground">{patient.breed}</p>
                            <p className="text-sm text-muted-foreground">Tutor: {patient.owner}</p>
                          </div>
                          <Badge 
                            variant={
                              patient.condition === "Saudável" ? "default" :
                              patient.condition === "Em Tratamento" ? "secondary" :
                              "destructive"
                            }
                            className={
                              patient.condition === "Saudável" ? "bg-green-500 text-white" : ""
                            }
                          >
                            {patient.condition}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Idade:</span>
                            <span className="font-medium">{patient.age}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Peso:</span>
                            <span className="font-medium">{patient.weight}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Última visita:</span>
                            <span className="font-medium">{patient.lastVisit}</span>
                          </div>
                        </div>

                        {patient.alerts.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium text-orange-600 mb-2">⚠️ Alertas:</p>
                            {patient.alerts.map((alert, index) => (
                              <Badge key={index} variant="destructive" className="mr-1 mb-1 text-xs">
                                {alert}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1 gradient-primary text-white">
                            <FileText className="h-3 w-3 mr-1" />
                            Prontuário
                          </Button>
                          <Button size="sm" variant="outline">
                            <Calendar className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Medical Records Tab */}
          <TabsContent value="medical" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Prontuários Médicos</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Tutor</TableHead>
                      <TableHead>Data</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Mel</TableCell>
                      <TableCell>Maria Silva</TableCell>
                      <TableCell>15/03/2024</TableCell>
                      <TableCell>Consulta de Rotina</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white">Concluído</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Rex</TableCell>
                      <TableCell>João Santos</TableCell>
                      <TableCell>10/03/2024</TableCell>
                      <TableCell>Vacinação</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white">Concluído</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <FileText className="h-3 w-3 mr-1" />
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Estatísticas Mensais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Consultas Realizadas</span>
                      <span className="font-bold">87</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cirurgias</span>
                      <span className="font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Emergências</span>
                      <span className="font-bold">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Taxa de Sucesso</span>
                      <span className="font-bold text-green-600">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Relatórios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Relatório de Atendimentos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Activity className="h-4 w-4 mr-2" />
                      Estatísticas de Saúde
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Syringe className="h-4 w-4 mr-2" />
                      Controle de Vacinas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VetDashboard;