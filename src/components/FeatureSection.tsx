
import React from 'react';

const FeatureSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tecnologia que entende suas necessidades</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma combina inteligência artificial com seu histórico de viagens para 
            criar uma experiência verdadeiramente personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Perfil personalizado</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Configure suas necessidades específicas uma única vez e nosso sistema lembrará 
                    seus requisitos para todas as viagens futuras.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828C4.343 19 6.229 19 10 19"></path><path d="M14 3v4"></path><path d="M10 3v4"></path><path d="M2 9h20"></path><path d="M18 17v2"></path><path d="M18 21a2 2 0 0 0 4 0v-4a2 2 0 0 0-4 0v4Z"></path></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Histórico de viagens</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Aprendemos com suas viagens anteriores para melhorar continuamente as 
                    recomendações e evitar problemas recorrentes.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path><path d="M7 6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"></path><path d="m7 14 10 4"></path><path d="m7 10 10-4"></path></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">IA avançada</h3>
                  <p className="mt-2 text-base text-gray-600">
                    Nossos algoritmos analisam dados complexos para encontrar a melhor configuração 
                    de viagem adaptada às suas necessidades específicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1617526039903-c9a2076e7264?q=80&w=2079&auto=format&fit=crop" 
                alt="Interface do TakeSeat" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 rounded-lg bg-white shadow-lg p-6 w-64">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 h-5 w-5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"></path><line x1="16" x2="2" y1="8" y2="22"></line><line x1="17.5" x2="9" y1="15" y2="15"></line></svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Recomendação</p>
                    <p className="text-base font-semibold text-gray-900">Assento 23C para maior facilidade de acesso</p>
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

export default FeatureSection;
