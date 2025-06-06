
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-green-400 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/>
                </svg>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-brand-primary to-white bg-clip-text text-transparent">TakeSeat</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformando a experiência de viagem para pessoas com deficiência através da tecnologia e inclusão.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Plataforma</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/register" className="hover:text-brand-primary transition-colors">Criar Conta</Link></li>
              <li><Link to="/login" className="hover:text-brand-primary transition-colors">Entrar</Link></li>
              <li><Link to="/dashboard" className="hover:text-brand-primary transition-colors">Dashboard</Link></li>
              <li><a href="#features" className="hover:text-brand-primary transition-colors">Funcionalidades</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Suporte</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Documentação</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Acessibilidade</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-primary">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <span className="text-lg">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <span className="text-lg">💬</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors">
                <span className="text-lg">📱</span>
              </a>
            </div>
            <p className="text-gray-300 mt-4">
              contato@takeseat.com.br<br/>
              Atendimento 24/7
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TakeSeat - Criado por Matheus Guerra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
