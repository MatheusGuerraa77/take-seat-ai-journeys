
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-brand-light to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 opacity-10" 
             width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="100" fill="#5ce1e6" />
          <circle cx="180" cy="120" r="60" fill="#050a30" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-brand-secondary mb-6">
            Sobre o TakeSeat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma visão revolucionária criada por <span className="font-bold text-brand-primary">Matheus Guerra</span> 
            para transformar a experiência de viagem de pessoas com deficiência
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <Card className="border-l-4 border-l-brand-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="m2 17 10 5 10-5"/>
                      <path d="m2 12 10 5 10-5"/>
                    </svg>
                  </div>
                  A Visão
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Matheus Guerra identificou uma lacuna crítica no mercado de viagens: a falta de 
                  personalização para pessoas com deficiência. Sua visão é criar uma plataforma que 
                  não apenas facilite, mas revolucione a forma como essas pessoas planejam e vivenciam 
                  suas viagens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-brand-secondary shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-secondary mb-4 flex items-center">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  A Missão
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Democratizar o acesso ao turismo através da tecnologia, garantindo que cada viajante 
                  tenha uma experiência digna, confortável e adaptada às suas necessidades específicas. 
                  O TakeSeat não é apenas um app, é um movimento por inclusão real.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-brand-secondary">MG</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Matheus Guerra</h3>
                  <p className="text-brand-light opacity-90">Founder & CEO</p>
                </div>
                
                <blockquote className="text-lg italic text-center leading-relaxed">
                  "Acredito que a tecnologia deve servir a todos, sem exceção. 
                  O TakeSeat é minha contribuição para um mundo mais inclusivo e acessível."
                </blockquote>
                
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm opacity-90">Anos de pesquisa</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1000+</div>
                    <div className="text-sm opacity-90">Entrevistas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Dedicação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
