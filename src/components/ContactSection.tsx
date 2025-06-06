
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'Informações Gerais'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implementar envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: "Chat em Tempo Real",
      description: "Suporte instantâneo 24/7",
      contact: "chat.takeseat.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: "Email Direto",
      description: "Resposta em até 2 horas",
      contact: "contato@takeseat.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: "Telefone Especializado",
      description: "Linha direta para acessibilidade",
      contact: "+55 (11) 9999-8888"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-brand-secondary to-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <svg className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/4 opacity-10" 
             width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="150" fill="#5ce1e6" />
          <circle cx="250" cy="150" r="80" fill="#4ade80" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Fale Conosco
          </h2>
          <p className="text-xl text-brand-primary max-w-3xl mx-auto">
            Estamos aqui para ajudar você a transformar sua experiência de viagem. 
            Entre em contato e faça parte da revolução da acessibilidade!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-secondary flex items-center">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-brand-secondary font-medium">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-brand-primary/20 focus:border-brand-primary"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-brand-secondary font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-brand-primary/20 focus:border-brand-primary"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-brand-secondary font-medium">Assunto</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full p-3 border border-brand-primary/20 rounded-md focus:border-brand-primary focus:outline-none"
                  >
                    <option value="Informações Gerais">Informações Gerais</option>
                    <option value="Suporte Técnico">Suporte Técnico</option>
                    <option value="Parceria">Interesse em Parceria</option>
                    <option value="Feedback">Feedback sobre o App</option>
                    <option value="Acessibilidade">Questões de Acessibilidade</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-brand-secondary font-medium">Mensagem</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full p-3 border border-brand-primary/20 rounded-md focus:border-brand-primary focus:outline-none resize-none"
                    placeholder="Conte-nos como podemos ajudar você..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:scale-105 transition-all duration-300 text-white font-bold py-3"
                >
                  Enviar Mensagem
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-primary mb-2">{info.title}</h3>
                      <p className="text-white/80 mb-2">{info.description}</p>
                      <p className="text-brand-primary font-bold">{info.contact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Info */}
            <Card className="bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 border border-brand-primary/30 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-brand-primary mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-white/90">
                  <p><strong>Segunda a Sexta:</strong> 08:00 - 22:00</p>
                  <p><strong>Sábados:</strong> 09:00 - 18:00</p>
                  <p><strong>Domingos:</strong> 10:00 - 16:00</p>
                  <p className="text-brand-primary font-bold mt-4">🔄 Suporte de Emergência 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
