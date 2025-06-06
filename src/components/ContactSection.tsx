
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui será implementada a lógica de envio
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-brand-secondary mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tem dúvidas ou sugestões? Nossa equipe está aqui para ajudar você a ter a melhor experiência de viagem
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-secondary flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-green-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  Fale Conosco
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-brand-secondary font-medium">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-brand-primary"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-brand-secondary font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 border-gray-300 focus:border-brand-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-brand-secondary font-medium">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Como podemos ajudar?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-brand-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-brand-secondary font-medium">Mensagem</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Conte-nos mais detalhes..."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-brand-primary to-green-400 text-brand-secondary hover:scale-105 transition-all duration-300 font-bold py-3"
                  >
                    ✉️ Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-brand-primary to-green-400 text-brand-secondary shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <span className="mr-3">🌟</span>
                    Criador do TakeSeat
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-brand-secondary">MG</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">Matheus Guerra</h4>
                        <p className="opacity-90">Founder & CEO</p>
                      </div>
                    </div>
                    <p className="italic leading-relaxed">
                      "Minha missão é democratizar o acesso ao turismo através da tecnologia, 
                      garantindo que cada pessoa tenha uma experiência de viagem digna e adaptada às suas necessidades."
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-l-4 border-l-brand-primary">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-brand-secondary mb-4 flex items-center">
                    <span className="mr-3">📞</span>
                    Outras Formas de Contato
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-3">📧</span>
                      <span>contato@takeseat.com.br</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">💬</span>
                      <span>WhatsApp: (11) 9 9999-9999</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-3">⏰</span>
                      <span>Atendimento: 24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
