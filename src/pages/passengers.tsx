import { useState } from "react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Eye } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for passengers
const mockPassengers = [
  {
    id: "1",
    name: "Maria Silva",
    email: "maria@email.com",
    disability: "Mobilidade reduzida",
    seatPreference: "Corredor",
    assistance: "Cadeira de rodas",
    status: "Ativo"
  },
  {
    id: "2", 
    name: "João Santos",
    email: "joao@email.com",
    disability: "Deficiência visual",
    seatPreference: "Janela",
    assistance: "Cão-guia",
    status: "Ativo"
  }
]

export default function Passengers() {
  const [passengers, setPassengers] = useState(mockPassengers)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const { toast } = useToast()

  const handleAddPassenger = () => {
    setShowForm(true)
  }

  const handleSavePassenger = () => {
    toast({
      title: "Passageiro cadastrado",
      description: "Passageiro cadastrado com sucesso no sistema.",
    })
    setShowForm(false)
  }

  const filteredPassengers = passengers.filter(passenger =>
    passenger.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    passenger.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Cadastro de Passageiros</h1>
            <p className="text-muted-foreground">
              Gerencie passageiros com necessidades especiais
            </p>
          </div>
          <Button onClick={handleAddPassenger} className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Passageiro
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Buscar Passageiros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Buscar por nome ou email</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Digite o nome ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passengers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Passageiros</CardTitle>
            <CardDescription>
              {filteredPassengers.length} passageiro(s) encontrado(s)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Deficiência</TableHead>
                  <TableHead>Preferência de Assento</TableHead>
                  <TableHead>Assistência</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPassengers.map((passenger) => (
                  <TableRow key={passenger.id}>
                    <TableCell className="font-medium">{passenger.name}</TableCell>
                    <TableCell>{passenger.email}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{passenger.disability}</Badge>
                    </TableCell>
                    <TableCell>{passenger.seatPreference}</TableCell>
                    <TableCell>{passenger.assistance}</TableCell>
                    <TableCell>
                      <Badge variant="default">{passenger.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Passenger Form */}
        {showForm && (
          <Card>
            <CardHeader>
              <CardTitle>Cadastrar Novo Passageiro</CardTitle>
              <CardDescription>
                Preencha os dados do passageiro com necessidades especiais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Digite o nome completo" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="disability">Tipo de Deficiência</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mobility">Mobilidade reduzida</SelectItem>
                      <SelectItem value="visual">Deficiência visual</SelectItem>
                      <SelectItem value="hearing">Deficiência auditiva</SelectItem>
                      <SelectItem value="cognitive">Deficiência cognitiva</SelectItem>
                      <SelectItem value="multiple">Deficiências múltiplas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="seatPreference">Preferência de Assento</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a preferência" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="window">Janela</SelectItem>
                      <SelectItem value="aisle">Corredor</SelectItem>
                      <SelectItem value="middle">Meio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="assistance">Assistência Necessária</Label>
                <Textarea 
                  id="assistance" 
                  placeholder="Descreva a assistência necessária..."
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleSavePassenger}>Salvar Passageiro</Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}