
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-sky-600 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <svg className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:translate-y-0 opacity-20" 
             width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#pattern-squares)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Viagem acessível e personalizada para todos
              </h1>
              <p className="text-xl mb-8 text-sky-100">
                O TakeSeat utiliza inteligência artificial para criar uma experiência de viagem 
                adaptada às suas necessidades específicas, garantindo conforto e tranquilidade 
                em toda sua jornada.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/register">
                  <Button className="w-full sm:w-auto text-sky-600 bg-white hover:bg-sky-100">Comece agora</Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white hover:bg-sky-700">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="aspect-w-5 aspect-h-3 shadow-2xl rounded-lg overflow-hidden transform rotate-1">
                <img 
                  src="https://images.unsplash.com/photo-1622381563833-e2f86a21bbd7?q=80&w=2128&auto=format&fit=crop" 
                  alt="Passageiros utilizando o app TakeSeat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 shadow-lg rounded-lg p-5 transform -rotate-3">
                <p className="text-white font-bold">94% de satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
