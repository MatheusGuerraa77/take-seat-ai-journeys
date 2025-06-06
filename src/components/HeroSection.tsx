
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-secondary via-brand-dark to-brand-secondary text-white overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:translate-y-0 opacity-20" 
             width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="#5ce1e6" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-brand-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-brand-primary/20 backdrop-blur-sm rounded-full text-brand-primary font-medium mb-6 border border-brand-primary/30">
                <span className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse"></span>
                Revolução em Acessibilidade
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-brand-primary bg-clip-text text-transparent">
                TakeSeat
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-primary">
                Viagem acessível e personalizada para todos
              </h2>
              
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                O TakeSeat utiliza <span className="text-brand-primary font-bold">inteligência artificial avançada</span> para 
                criar uma experiência de viagem completamente adaptada às suas necessidades específicas, 
                garantindo conforto, dignidade e tranquilidade em toda sua jornada.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-green-400 hover:scale-105 text-brand-secondary font-bold py-4 px-8 text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    🚀 Comece agora
                  </Button>
                </Link>
                <Link to="#about">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary font-bold py-4 px-8 text-lg transition-all duration-300">
                    ✨ Saiba mais
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-primary">94%</div>
                  <div className="text-sm text-gray-400">Satisfação</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-primary">50k+</div>
                  <div className="text-sm text-gray-400">Usuários</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-brand-primary">24/7</div>
                  <div className="text-sm text-gray-400">Suporte</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden md:block animate-slide-in-right">
              <div className="relative">
                <div className="aspect-w-5 aspect-h-3 shadow-2xl rounded-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1622381563833-e2f86a21bbd7?q=80&w=2128&auto=format&fit=crop" 
                    alt="Passageiros utilizando o app TakeSeat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/50 to-transparent"></div>
                </div>
                
                {/* Floating success badge */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-brand-primary to-green-400 shadow-2xl rounded-2xl p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <span className="text-2xl">✈️</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">94% de satisfação</p>
                      <p className="text-white/80 text-sm">Em viagens acessíveis</p>
                    </div>
                  </div>
                </div>
                
                {/* AI Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-brand-secondary to-brand-dark shadow-xl rounded-xl p-4 border-2 border-brand-primary">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                      <span className="text-brand-secondary font-bold text-sm">AI</span>
                    </div>
                    <span className="text-brand-primary font-bold text-sm">Powered</span>
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

export default HeroSection;
