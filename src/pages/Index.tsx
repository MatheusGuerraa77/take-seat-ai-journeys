
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full py-4 px-6 bg-gradient-to-r from-brand-secondary to-brand-dark text-white fixed top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"/>
              </svg>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-brand-primary to-white bg-clip-text text-transparent">TakeSeat</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300 font-medium">Início</Link>
            <a href="#about" className="hover:text-brand-primary transition-colors duration-300 font-medium">Sobre</a>
            <a href="#features" className="hover:text-brand-primary transition-colors duration-300 font-medium">Funcionalidades</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors duration-300 font-medium">Contato</a>
          </div>
          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline" className="bg-transparent border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300">
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 font-bold">
                Cadastrar
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      
      <div className="pt-20">
        <HeroSection />

        <div id="about">
          <AboutSection />
        </div>

        <div className="bg-gradient-to-b from-brand-light to-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-brand-secondary">Como o TakeSeat pode ajudar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-secondary flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"/>
                      </svg>
                    </div>
                    Alocação de Assento Inteligente
                  </CardTitle>
                  <CardDescription>Recomendações personalizadas baseadas nas suas necessidades</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Nossa IA analisa seu perfil e histórico para sugerir os melhores assentos para sua condição específica, garantindo conforto durante toda a viagem.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-secondary flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                    </div>
                    Tempo de Conexão Otimizado
                  </CardTitle>
                  <CardDescription>Planeje suas conexões com o tempo adequado</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Calculamos o tempo ideal para suas conexões considerando deslocamentos, assistência necessária e suas experiências anteriores.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-secondary flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="m22 21-3-3 3-3"/>
                      </svg>
                    </div>
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

        <div id="features">
          <FeaturesSection />
        </div>
        
        <TestimonialSection />
        
        <div className="bg-gradient-to-r from-brand-secondary to-brand-dark text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Comece sua viagem acessível hoje</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Junte-se a milhares de viajantes que estão transformando suas experiências de viagem com o TakeSeat.
            </p>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-bold shadow-xl">
                🚀 Crie sua conta gratuita
              </Button>
            </Link>
          </div>
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
