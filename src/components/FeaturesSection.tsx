
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const FeaturesSection = () => {
  const [ticketId, setTicketId] = useState('');
  const [showForm, setShowForm] = useState(false);

  const features = [
    {
      icon: "🎯",
      title: "Recomendações Inteligentes",
      description: "IA que aprende com seu histórico para sugerir assentos ideais, horários e rotas personalizadas."
    },
    {
      icon: "📊",
      title: "Dashboard Personalizado",
      description: "Acompanhe suas viagens, preferências e recomendações em um painel intuitivo e completo."
    },
    {
      icon: "🕐",
      title: "Tempo de Conexão Otimizado",
      description: "Cálculo inteligente do tempo necessário para conexões baseado no seu perfil de mobilidade."
    },
    {
      icon: "🚪",
      title: "Embarque Prioritário Automático",
      description: "Facilitamos seu embarque com coordenação automática com as companhias aéreas."
    },
    {
      icon: "📱",
      title: "Perfil Adaptativo",
      description: "Sistema que evolui com você, aprendendo suas preferências e necessidades específicas."
    },
    {
      icon: "🏆",
      title: "Histórico Completo",
      description: "Mantenha registro de todas suas viagens com feedback para melhorar futuras experiências."
    }
  ];

  const handleGeneratePDF = () => {
    if (!ticketId) {
      alert('Por favor, insira o ID da passagem');
      return;
    }
    console.log('Gerando PDF para passagem:', ticketId);
    // Aqui será implementada a lógica de geração do PDF
    alert('PDF gerado com sucesso! (funcionalidade em desenvolvimento)');
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-brand-secondary mb-6">
            Funcionalidades que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia avançada para criar a experiência de viagem mais acessível e personalizada do mundo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-brand-secondary group-hover:text-brand-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 space-y-8">
          {/* Formulário Inteligente com IA */}
          <div className="bg-gradient-to-r from-brand-light to-white rounded-3xl p-12 border border-brand-primary/20">
            <h3 className="text-3xl font-bold text-brand-secondary mb-6 text-center">
              🤖 Formulário Inteligente com IA
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
              Nossa IA analisa suas respostas para criar um perfil único que se adapta constantemente às suas necessidades
            </p>
            
            <div className="text-center">
              <Dialog open={showForm} onOpenChange={setShowForm}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-bold shadow-2xl">
                    📋 Preencher Formulário de Perfil
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-brand-secondary">
                      Formulário de Perfilagem Inteligente
                    </DialogTitle>
                    <DialogDescription>
                      Responda as perguntas abaixo para que nossa IA possa personalizar sua experiência de viagem
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-brand-primary">
                    <h4 className="text-xl font-bold text-brand-secondary mb-4">
                      📋 Sistema de Perfilagem Avançado
                    </h4>
                    <p className="text-gray-600 mb-6">
                      <strong>Local reservado para implementação:</strong> Formulário inteligente que coleta informações sobre mobilidade, 
                      preferências de assento, necessidades especiais e histórico de viagens para personalização máxima.
                    </p>
                    <div className="text-center">
                      <Button 
                        onClick={() => setShowForm(false)}
                        className="bg-brand-primary text-white"
                      >
                        Formulário será implementado aqui
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Gerador de PDF para Companhias */}
          <div className="bg-gradient-to-r from-brand-secondary to-brand-dark rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6 text-center">
              📄 Gerador de PDF para Companhias
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-center">
              Insira o ID da sua passagem e gere um PDF personalizado com suas necessidades para apresentar aos funcionários da companhia aérea
            </p>
            
            <div className="max-w-md mx-auto space-y-6">
              <div>
                <Label htmlFor="ticketId" className="text-white font-medium mb-2 block">
                  ID da Passagem
                </Label>
                <Input
                  id="ticketId"
                  placeholder="Ex: TAM123456789 ou GOL987654321"
                  value={ticketId}
                  onChange={(e) => setTicketId(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder-gray-300 focus:border-brand-primary"
                />
              </div>
              
              <Button 
                onClick={handleGeneratePDF}
                className="w-full bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 font-bold py-3"
              >
                🎫 Gerar PDF Personalizado
              </Button>
              
              <div className="text-center text-sm text-gray-300">
                <p>💡 O PDF incluirá:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Suas necessidades de acessibilidade</li>
                  <li>Preferências de assento</li>
                  <li>Tempo de conexão recomendado</li>
                  <li>Instruções para embarque prioritário</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
