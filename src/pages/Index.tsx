
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
      <header className="w-full py-4 px-6 bg-white/95 backdrop-blur-sm text-brand-secondary fixed top-0 z-50 border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
              </svg>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-brand-secondary to-brand-primary bg-clip-text text-transparent">TakeSeat</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-brand-primary transition-colors duration-300 font-medium">Início</Link>
            <a href="#about" className="hover:text-brand-primary transition-colors duration-300 font-medium">Sobre</a>
            <a href="#features" className="hover:text-brand-primary transition-colors duration-300 font-medium">Funcionalidades</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors duration-300 font-medium">Contato</a>
          </div>
          <div className="flex space-x-3">
            <Link to="/login">
              <Button variant="outline" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 font-medium">
                Entrar
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-white hover:scale-105 transition-all duration-300 font-bold shadow-lg">
                Começar Grátis
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

        <div id="features">
          <FeaturesSection />
        </div>
        
        <TestimonialSection />
        
        <div className="bg-gradient-to-r from-brand-secondary via-brand-dark to-brand-secondary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-20 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-6">Pronto para Viajar com Mais Liberdade?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Junte-se a milhares de viajantes que já descobriram uma nova forma de explorar o mundo.
            </p>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-bold shadow-2xl">
                🚀 Criar Conta Gratuita
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
