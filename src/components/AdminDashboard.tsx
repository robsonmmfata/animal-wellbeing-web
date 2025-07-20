import { useState } from "react";
import { 
  Users, 
  UserPlus, 
  Calendar, 
  DollarSign, 
  FileText, 
  Settings, 
  BarChart3, 
  TrendingUp,
  PlusCircle,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Shield
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

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Dados simulados
  const stats = [
    { icon: Users, title: "Total de Clientes", value: "1,234", change: "+12%", color: "text-blue-600" },
    { icon: Calendar, title: "Agendamentos Hoje", value: "45", change: "+8%", color: "text-green-600" },
    { icon: DollarSign, title: "Receita Mensal", value: "R$ 89,450", change: "+15%", color: "text-purple-600" },
    { icon: FileText, title: "Pets Cadastrados", value: "1,567", change: "+9%", color: "text-orange-600" }
  ];

  const clients = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-0001",
      pets: ["Mel", "Thor"],
      plan: "Ouro",
      status: "Ativo",
      lastVisit: "15/03/2024"
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao@email.com",
      phone: "(11) 99999-0002",
      pets: ["Rex"],
      plan: "Prata",
      status: "Ativo",
      lastVisit: "10/03/2024"
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana@email.com",
      phone: "(11) 99999-0003",
      pets: ["Mimi", "Lola"],
      plan: "Bronze",
      status: "Pendente",
      lastVisit: "05/03/2024"
    }
  ];

  const appointments = [
    {
      id: 1,
      time: "09:00",
      client: "Maria Silva",
      pet: "Mel",
      service: "Consulta de Rotina",
      vet: "Dra. Ana Silva",
      status: "Confirmado"
    },
    {
      id: 2,
      time: "10:30",
      client: "João Santos",
      pet: "Rex",
      service: "Vacinação",
      vet: "Dr. Carlos Santos",
      status: "Aguardando"
    },
    {
      id: 3,
      time: "14:00",
      client: "Ana Costa",
      pet: "Mimi",
      service: "Banho e Tosa",
      vet: "Dra. Marina Costa",
      status: "Em Andamento"
    }
  ];

  const services = [
    { name: "Consulta Básica", price: "R$ 120", type: "Avulso", category: "Consulta" },
    { name: "Pacote Completo", price: "R$ 350", type: "Pacote", category: "Completo" },
    { name: "Banho e Tosa", price: "R$ 80", type: "Avulso", category: "Estética" },
    { name: "Cirurgia Básica", price: "R$ 800", type: "Avulso", category: "Cirurgia" }
  ];

  const handleAddClient = () => {
    toast({
      title: "Cliente adicionado!",
      description: "Novo cliente cadastrado com sucesso.",
    });
  };

  const handleEditClient = (clientId: number) => {
    toast({
      title: "Cliente editado!",
      description: `Cliente #${clientId} foi atualizado.`,
    });
  };

  const handleDeleteClient = (clientId: number) => {
    toast({
      title: "Cliente removido!",
      description: `Cliente #${clientId} foi removido do sistema.`,
      variant: "destructive"
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
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Painel Administrativo</p>
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
        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="clients">Clientes</TabsTrigger>
            <TabsTrigger value="appointments">Agenda</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="financial">Financeiro</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Clientes Tab */}
          <TabsContent value="clients" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Gestão de Clientes</CardTitle>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="gradient-primary text-white hover-lift">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Novo Cliente
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input id="name" placeholder="Nome do cliente" />
                          </div>
                          <div>
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" placeholder="000.000.000-00" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="email@exemplo.com" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Telefone</Label>
                            <Input id="phone" placeholder="(11) 99999-9999" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="address">Endereço</Label>
                          <Textarea id="address" placeholder="Endereço completo" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="petName">Nome do Pet</Label>
                            <Input id="petName" placeholder="Nome do pet" />
                          </div>
                          <div>
                            <Label htmlFor="petBreed">Raça</Label>
                            <Input id="petBreed" placeholder="Raça do pet" />
                          </div>
                        </div>
                        <Button onClick={handleAddClient} className="w-full gradient-primary text-white">
                          Cadastrar Cliente
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <Input
                      placeholder="Buscar clientes..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="active">Ativos</SelectItem>
                      <SelectItem value="pending">Pendentes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Contato</TableHead>
                      <TableHead>Pets</TableHead>
                      <TableHead>Plano</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Última Visita</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Mail className="h-3 w-3 mr-1" />
                              {client.email}
                            </div>
                            <div className="flex items-center text-sm">
                              <Phone className="h-3 w-3 mr-1" />
                              {client.phone}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {client.pets.map((pet) => (
                              <Badge key={pet} variant="secondary">{pet}</Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={client.plan === "Ouro" ? "default" : "secondary"}
                            className={client.plan === "Ouro" ? "gradient-primary text-white" : ""}
                          >
                            {client.plan}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={client.status === "Ativo" ? "default" : "secondary"}
                            className={client.status === "Ativo" ? "bg-green-500 text-white" : ""}
                          >
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{client.lastVisit}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleEditClient(client.id)}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleDeleteClient(client.id)}
                              className="text-red-600 border-red-200 hover:bg-red-50"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agenda Tab */}
          <TabsContent value="appointments" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Agenda do Dia</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Horário</TableHead>
                      <TableHead>Cliente</TableHead>
                      <TableHead>Pet</TableHead>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Veterinário</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell className="font-medium">{appointment.time}</TableCell>
                        <TableCell>{appointment.client}</TableCell>
                        <TableCell>{appointment.pet}</TableCell>
                        <TableCell>{appointment.service}</TableCell>
                        <TableCell>{appointment.vet}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={appointment.status === "Confirmado" ? "default" : "secondary"}
                            className={
                              appointment.status === "Confirmado" ? "bg-green-500 text-white" :
                              appointment.status === "Em Andamento" ? "bg-blue-500 text-white" :
                              ""
                            }
                          >
                            {appointment.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Serviços Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">Gestão de Serviços</CardTitle>
                  <Button className="gradient-primary text-white hover-lift">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Novo Serviço
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Serviço</TableHead>
                      <TableHead>Preço</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{service.name}</TableCell>
                        <TableCell>{service.price}</TableCell>
                        <TableCell>
                          <Badge variant={service.type === "Pacote" ? "default" : "secondary"}>
                            {service.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{service.category}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-red-600 border-red-200 hover:bg-red-50"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Financeiro Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Receita por Serviço</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Consultas</span>
                      <span className="font-bold">R$ 15.240</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Cirurgias</span>
                      <span className="font-bold">R$ 32.800</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Banho e Tosa</span>
                      <span className="font-bold">R$ 8.560</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Planos</span>
                      <span className="font-bold">R$ 32.850</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Notas Fiscais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Gerar NF-e
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Relatório Mensal
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Dashboard Fiscal
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Métricas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Ticket Médio</span>
                      <span className="font-bold text-green-600">R$ 287</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total de Vendas</span>
                      <span className="font-bold">R$ 89.450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Crescimento</span>
                      <span className="font-bold text-green-600">+15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Configurações Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Configurações do Sistema</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Termos e Contratos</h3>
                  <Textarea 
                    placeholder="Digite os termos de serviço do hotel..."
                    rows={6}
                    className="w-full"
                  />
                  <Button className="mt-2 gradient-primary text-white">
                    Salvar Termos
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Configurações Gerais</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="clinicName">Nome da Clínica</Label>
                      <Input id="clinicName" defaultValue="VetCare" />
                    </div>
                    <div>
                      <Label htmlFor="clinicPhone">Telefone</Label>
                      <Input id="clinicPhone" defaultValue="(11) 3456-7890" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;