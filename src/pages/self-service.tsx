import { useState } from "react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Download, QrCode, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface GeneratedPDF {
  id: string
  ticketId: string
  passengerName: string
  generatedAt: string
  status: 'generating' | 'ready' | 'error'
  downloadUrl?: string
  qrCode?: string
}

export default function SelfService() {
  const [ticketId, setTicketId] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPDFs, setGeneratedPDFs] = useState<GeneratedPDF[]>([
    {
      id: "1",
      ticketId: "AA123456",
      passengerName: "Maria Silva",
      generatedAt: "2024-01-15 14:30",
      status: "ready",
      downloadUrl: "#",
      qrCode: "QR_CODE_DATA_HERE"
    },
    {
      id: "2", 
      ticketId: "BB789012",
      passengerName: "João Santos",
      generatedAt: "2024-01-15 13:15",
      status: "ready",
      downloadUrl: "#",
      qrCode: "QR_CODE_DATA_HERE"
    }
  ])
  const { toast } = useToast()

  const handleGeneratePDF = async () => {
    if (!ticketId.trim()) {
      toast({
        title: "ID da passagem obrigatório",
        description: "Por favor, insira o ID da passagem para gerar o PDF.",
        variant: "destructive"
      })
      return
    }

    setIsGenerating(true)

    // Simular chamada à API
    setTimeout(() => {
      const newPDF: GeneratedPDF = {
        id: Date.now().toString(),
        ticketId: ticketId,
        passengerName: "Passageiro Exemplo", // Em produção, viria da API
        generatedAt: new Date().toLocaleString('pt-BR'),
        status: "ready",
        downloadUrl: "#",
        qrCode: "QR_CODE_DATA_HERE"
      }

      setGeneratedPDFs(prev => [newPDF, ...prev])
      setTicketId("")
      setIsGenerating(false)

      toast({
        title: "PDF gerado com sucesso!",
        description: "Seu PDF personalizado está pronto para download.",
      })
    }, 2000)
  }

  const handleDownloadPDF = (pdf: GeneratedPDF) => {
    toast({
      title: "Download iniciado",
      description: `Baixando PDF para ${pdf.passengerName}...`,
    })
  }

  const getStatusIcon = (status: GeneratedPDF['status']) => {
    switch (status) {
      case 'generating':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'ready':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: GeneratedPDF['status']) => {
    switch (status) {
      case 'generating':
        return <Badge variant="secondary">Gerando...</Badge>
      case 'ready':
        return <Badge variant="default">Pronto</Badge>
      case 'error':
        return <Badge variant="destructive">Erro</Badge>
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Autoatendimento para Passageiros</h1>
          <p className="text-muted-foreground">
            Gere PDFs personalizados com instruções e QR Code para embarque
          </p>
        </div>

        {/* PDF Generator */}
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Gerador de PDF Personalizado
            </CardTitle>
            <CardDescription>
              Insira o ID da passagem para gerar instruções personalizadas de embarque
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="ticketId">ID da Passagem</Label>
              <Input
                id="ticketId"
                placeholder="Ex: AA123456, BB789012..."
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value.toUpperCase())}
                disabled={isGenerating}
              />
            </div>

            <Button 
              onClick={handleGeneratePDF} 
              disabled={isGenerating || !ticketId.trim()}
              className="w-full"
            >
              {isGenerating ? (
                <>
                  <Clock className="w-4 h-4 mr-2 animate-spin" />
                  Gerando PDF...
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4 mr-2" />
                  Gerar PDF Personalizado
                </>
              )}
            </Button>

            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
              <strong>O PDF incluirá:</strong>
              <ul className="mt-2 space-y-1">
                <li>• Instruções específicas baseadas na sua deficiência</li>
                <li>• Recomendações de assento personalizadas</li>
                <li>• QR Code para check-in rápido</li>
                <li>• Informações de assistência disponível</li>
                <li>• Contatos de emergência do aeroporto</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Generated PDFs History */}
        <Card>
          <CardHeader>
            <CardTitle>Histórico de PDFs Gerados</CardTitle>
            <CardDescription>
              Seus PDFs gerados recentemente estão disponíveis para download
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedPDFs.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum PDF gerado ainda</p>
                <p className="text-sm">Use o gerador acima para criar seu primeiro PDF</p>
              </div>
            ) : (
              <div className="space-y-4">
                {generatedPDFs.map((pdf, index) => (
                  <div key={pdf.id}>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(pdf.status)}
                        <div>
                          <h4 className="font-medium">{pdf.passengerName}</h4>
                          <p className="text-sm text-muted-foreground">
                            ID: {pdf.ticketId} • Gerado em {pdf.generatedAt}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        {getStatusBadge(pdf.status)}
                        
                        {pdf.status === 'ready' && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownloadPDF(pdf)}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                            >
                              <QrCode className="w-4 h-4 mr-2" />
                              QR Code
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                    {index < generatedPDFs.length - 1 && <Separator className="my-2" />}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Como funciona?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-primary font-bold">1</span>
                </div>
                <h3 className="font-medium mb-2">Insira o ID</h3>
                <p className="text-sm text-muted-foreground">
                  Digite o ID da sua passagem no campo acima
                </p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-primary font-bold">2</span>
                </div>
                <h3 className="font-medium mb-2">IA Personaliza</h3>
                <p className="text-sm text-muted-foreground">
                  Nossa IA gera recomendações baseadas no seu perfil
                </p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-primary font-bold">3</span>
                </div>
                <h3 className="font-medium mb-2">Baixe o PDF</h3>
                <p className="text-sm text-muted-foreground">
                  Receba instruções personalizadas e QR Code
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}