
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full py-4 px-6 bg-sky-600 text-white">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path></svg>
            <span className="font-bold text-lg">TakeSeat</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-sky-200 transition-colors">Início</Link>
            <Link to="/about" className="hover:text-sky-200 transition-colors">Sobre</Link>
            <Link to="/features" className="hover:text-sky-200 transition-colors">Funcionalidades</Link>
            <Link to="/contact" className="hover:text-sky-200 transition-colors">Contato</Link>
          </div>
          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-sky-700">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button className="bg-white text-sky-600 hover:bg-sky-100">Cadastrar</Button>
            </Link>
          </div>
        </nav>
      </header>
      
      <HeroSection />

      <div className="bg-sky-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Como o TakeSeat pode ajudar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-sky-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path></svg>
                  Alocação de Assento Inteligente
                </CardTitle>
                <CardDescription>Recomendações personalizadas baseadas nas suas necessidades</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Nossa IA analisa seu perfil e histórico para sugerir os melhores assentos para sua condição específica, garantindo conforto durante toda a viagem.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-sky-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"></path><line x1="16" x2="2" y1="8" y2="22"></line><line x1="17.5" x2="9" y1="15" y2="15"></line></svg>
                  Tempo de Conexão Otimizado
                </CardTitle>
                <CardDescription>Planeje suas conexões com o tempo adequado</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Calculamos o tempo ideal para suas conexões considerando deslocamentos, assistência necessária e suas experiências anteriores.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-sky-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  Embarque Prioritário
                </CardTitle>
                <CardDescription>Garanta seu embarque tranquilo</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Nosso sistema facilita seu acesso ao embarque prioritário e coordena a assistência necessária com as companhias aéreas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <FeatureSection />
      
      <TestimonialSection />
      
      <div className="bg-sky-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Comece sua viagem acessível hoje</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Junte-se a milhares de viajantes que estão transformando suas experiências de viagem com o TakeSeat.</p>
          <Link to="/register">
            <Button className="bg-white text-sky-600 hover:bg-sky-100 text-lg px-8 py-6">Crie sua conta gratuita</Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
