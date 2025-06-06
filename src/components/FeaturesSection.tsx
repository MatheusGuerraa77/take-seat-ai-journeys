import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
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
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-light to-white rounded-3xl p-12 border border-brand-primary/20">
            <h3 className="text-3xl font-bold text-brand-secondary mb-6">
              🤖 Formulário Inteligente com IA
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa IA analisa suas respostas para criar um perfil único que se adapta constantemente às suas necessidades
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-brand-primary">
              <h4 className="text-xl font-bold text-brand-secondary mb-4">
                📋 Sistema de Perfilagem Avançado
              </h4>
              <p className="text-gray-600">
                <strong>Local reservado para implementação:</strong> Formulário inteligente que coleta informações sobre mobilidade, 
                preferências de assento, necessidades especiais e histórico de viagens para personalização máxima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
