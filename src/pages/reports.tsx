import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, FileText, TrendingUp, Plane } from "lucide-react"

// Mock data for reports
const disabilityData = [
  { type: "Mobilidade reduzida", count: 45, percentage: 35 },
  { type: "Deficiência visual", count: 32, percentage: 25 },
  { type: "Deficiência auditiva", count: 26, percentage: 20 },
  { type: "Deficiência cognitiva", count: 19, percentage: 15 },
  { type: "Múltiplas deficiências", count: 6, percentage: 5 },
]

const seatPreferenceData = [
  { preference: "Corredor", count: 78, percentage: 61 },
  { preference: "Janela", count: 35, percentage: 27 },
  { preference: "Meio", count: 15, percentage: 12 },
]

const monthlyData = [
  { month: "Jan", passengers: 42, pdfs: 38 },
  { month: "Fev", passengers: 55, pdfs: 51 },
  { month: "Mar", passengers: 48, pdfs: 45 },
  { month: "Abr", passengers: 61, pdfs: 58 },
  { month: "Mai", passengers: 73, pdfs: 69 },
  { month: "Jun", passengers: 67, pdfs: 63 },
]

const COLORS = ['#5ce1e6', '#4ade80', '#fb923c', '#f87171', '#a78bfa']

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios Gerenciais</h1>
          <p className="text-muted-foreground">
            Insights e estatísticas para companhias aéreas
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Passageiros</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">
                +12% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PDFs Gerados</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">
                +8% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Embarques Especiais</CardTitle>
              <Plane className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95</div>
              <p className="text-xs text-muted-foreground">
                +15% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Satisfação</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.5%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Disability Types Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Passageiros por Tipo de Deficiência</CardTitle>
              <CardDescription>Distribuição dos tipos de deficiência cadastrados</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={disabilityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="type" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#5ce1e6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Seat Preference */}
          <Card>
            <CardHeader>
              <CardTitle>Preferência de Assentos</CardTitle>
              <CardDescription>Distribuição das preferências de localização</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={seatPreferenceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ preference, percentage }) => `${preference}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {seatPreferenceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Tendências Mensais</CardTitle>
            <CardDescription>Evolução de passageiros cadastrados e PDFs gerados</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="passengers" fill="#5ce1e6" name="Passageiros" />
                <Bar dataKey="pdfs" fill="#4ade80" name="PDFs Gerados" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes por Deficiência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {disabilityData.map((item, index) => (
                <div key={item.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.type}</span>
                    <Badge variant="secondary">{item.count} passageiros</Badge>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estatísticas de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tempo médio de embarque</span>
                <Badge>12 min</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Assistências solicitadas</span>
                <Badge>87%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Recomendações aceitas</span>
                <Badge>92%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Conexões facilitadas</span>
                <Badge>156</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}