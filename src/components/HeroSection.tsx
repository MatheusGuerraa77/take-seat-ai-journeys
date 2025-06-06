import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-secondary via-brand-dark to-brand-secondary flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Viaje com 
            <span className="bg-gradient-to-r from-brand-primary to-green-400 bg-clip-text text-transparent"> Dignidade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Com soluções acessíveis que transformam a experiência de voar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/register">
              <Button className="bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-bold shadow-2xl">
                ✈️ Começar gratuitamente
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-secondary transition-all duration-300 text-lg px-8 py-6 font-bold">
                Já tenho conta
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-brand-primary mb-2">5K+</div>
              <div className="text-gray-300">Viagens personalizadas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-brand-primary mb-2">98%</div>
              <div className="text-gray-300">Satisfação dos usuários</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-brand-primary mb-2">24/7</div>
              <div className="text-gray-300">Suporte personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
