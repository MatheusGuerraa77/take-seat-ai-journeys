
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
          <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"/>
        </svg>
      ),
      title: "Alocação Inteligente de Assentos",
      description: "IA que analisa seu perfil e necessidades para sugerir os melhores assentos em cada voo",
      details: [
        "Análise de mobilidade pessoal",
        "Preferências de localização",
        "Histórico de viagens",
        "Necessidades específicas"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: "Tempo de Conexão Personalizado",
      description: "Cálculo preciso do tempo necessário para conexões baseado em suas necessidades de mobilidade",
      details: [
        "Análise de velocidade de deslocamento",
        "Tempo para assistência especial",
        "Distância entre portões",
        "Margem de segurança personalizada"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="m22 21-3-3 3-3"/>
        </svg>
      ),
      title: "Embarque Prioritário Automático",
      description: "Coordenação automática com companhias aéreas para garantir embarque prioritário",
      details: [
        "Solicitação automática de assistência",
        "Check-in preferencial",
        "Comunicação com ground staff",
        "Notificações em tempo real"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="m2 17 10 5 10-5"/>
          <path d="m2 12 10 5 10-5"/>
        </svg>
      ),
      title: "Perfil Adaptativo",
      description: "Sistema que aprende com cada viagem para melhorar continuamente as recomendações",
      details: [
        "Machine Learning personalizado",
        "Feedback contínuo",
        "Adaptação automática",
        "Evolução das preferências"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: "Suporte 24/7",
      description: "Assistência especializada disponível a qualquer momento da sua jornada",
      details: [
        "Chat em tempo real",
        "Suporte multilíngue",
        "Equipe especializada",
        "Resolução rápida de problemas"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      title: "Integração Total",
      description: "Conecta-se com todas as principais companhias aéreas e aeroportos do mundo",
      details: [
        "APIs de companhias aéreas",
        "Sistemas de aeroportos",
        "Plataformas de reserva",
        "Serviços de assistência"
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-brand-secondary mb-6">
            Funcionalidades Revolucionárias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta que transforma completamente a experiência de viagem para pessoas com deficiência
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-brand-secondary group-hover:text-brand-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* IA Forms Section Placeholder */}
        <div className="mt-20 p-8 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl border-2 border-dashed border-brand-primary/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-secondary mb-4">
              🤖 Área Reservada para Integração com IA
            </h3>
            <p className="text-gray-600 mb-6">
              Este espaço está preparado para receber o formulário inteligente que coletará 
              informações dos usuários e utilizará IA para personalizar a experiência de viagem.
            </p>
            <div className="bg-white/50 p-6 rounded-xl border border-brand-primary/20">
              <p className="text-sm text-gray-500 font-mono">
                // TODO: Implementar formulário com IA<br/>
                // - Coleta de dados do perfil do usuário<br/>
                // - Análise de necessidades específicas<br/>
                // - Processamento com Machine Learning<br/>
                // - Geração de recomendações personalizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
