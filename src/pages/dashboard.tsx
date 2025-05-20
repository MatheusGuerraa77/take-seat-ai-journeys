
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  // Mock data
  const upcomingFlights = [
    {
      id: 1,
      airline: 'Azul',
      flightNumber: 'AZ2134',
      origin: 'São Paulo',
      destination: 'Rio de Janeiro',
      departureDate: '2025-07-15T08:30:00',
      arrivalDate: '2025-07-15T09:45:00',
      recommendations: [
        'Assento: 14D (corredor, próximo ao banheiro)',
        'Embarque prioritário confirmado',
        'Assistência para cadeira de rodas solicitada'
      ]
    },
    {
      id: 2,
      airline: 'LATAM',
      flightNumber: 'LA3492',
      origin: 'Rio de Janeiro',
      destination: 'Brasília',
      departureDate: '2025-08-03T14:15:00',
      arrivalDate: '2025-08-03T16:00:00',
      recommendations: [
        'Assento: 12C (corredor, área silenciosa)',
        'Tempo extra para conexão: 45 minutos',
        'Assistência já agendada'
      ]
    }
  ];

  const pastFlights = [
    {
      id: 3,
      airline: 'Gol',
      flightNumber: 'G31042',
      origin: 'Brasília',
      destination: 'São Paulo',
      departureDate: '2025-05-20T10:00:00',
      arrivalDate: '2025-05-20T11:30:00',
      feedback: 4.5
    },
    {
      id: 4,
      airline: 'Azul',
      flightNumber: 'AZ1230',
      origin: 'São Paulo',
      destination: 'Salvador',
      departureDate: '2025-04-12T07:15:00',
      arrivalDate: '2025-04-12T09:45:00',
      feedback: 3.0
    }
  ];

  // Helper functions
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-sky-600"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.07 0L2 10"></path></svg>
              <span className="font-bold text-lg text-sky-600">TakeSeat</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Notificações</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
              </button>
              <button className="bg-gray-200 rounded-full p-1">
                <span className="sr-only">Perfil</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Olá, Carlos</h1>
          <Button className="bg-sky-600 hover:bg-sky-700">Nova Viagem</Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Viagens Planejadas</CardTitle>
              <CardDescription>Total de viagens futuras</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Viagens Completadas</CardTitle>
              <CardDescription>Total de viagens realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Nível de Perfil</CardTitle>
              <CardDescription>Personalização baseada nos seus dados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-sky-600">Avançado</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Viagens Futuras</TabsTrigger>
              <TabsTrigger value="past">Histórico de Viagens</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="mt-6">
              <div className="space-y-6">
                {upcomingFlights.map(flight => (
                  <Card key={flight.id}>
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-xl">{flight.origin} → {flight.destination}</CardTitle>
                          <CardDescription>
                            {formatDate(flight.departureDate)} • {flight.airline} {flight.flightNumber}
                          </CardDescription>
                        </div>
                        <Button variant="outline">Ver Detalhes</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Partida</p>
                          <p className="text-xl font-bold">{formatTime(flight.departureDate)}</p>
                          <p className="text-sm">{flight.origin}</p>
                        </div>
                        <div className="flex-grow px-4 flex flex-col justify-center items-center">
                          <div className="w-full border-t border-dashed border-gray-300"></div>
                          <div className="text-sm text-gray-500">Voo direto</div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Chegada</p>
                          <p className="text-xl font-bold">{formatTime(flight.arrivalDate)}</p>
                          <p className="text-sm">{flight.destination}</p>
                        </div>
                      </div>
                      
                      <div className="bg-sky-50 p-4 rounded-lg">
                        <h4 className="font-medium text-sky-700 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
                          Recomendações Personalizadas
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {flight.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 text-sky-600 mt-0.5"><path d="M20 6 9 17l-5-5"></path></svg>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="past" className="mt-6">
              <div className="space-y-6">
                {pastFlights.map(flight => (
                  <Card key={flight.id}>
                    <CardHeader>
                      <div className="flex justify-between">
                        <div>
                          <CardTitle className="text-xl">{flight.origin} → {flight.destination}</CardTitle>
                          <CardDescription>
                            {formatDate(flight.departureDate)} • {flight.airline} {flight.flightNumber}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className={`h-2.5 w-2.5 rounded-full ${
                            flight.feedback >= 4 ? 'bg-green-500' : 
                            flight.feedback >= 3 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className={`text-sm ${
                            flight.feedback >= 4 ? 'text-green-700' : 
                            flight.feedback >= 3 ? 'text-yellow-700' : 'text-red-700'
                          }`}>
                            {flight.feedback.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Partida</p>
                          <p className="text-xl font-bold">{formatTime(flight.departureDate)}</p>
                          <p className="text-sm">{flight.origin}</p>
                        </div>
                        <div className="flex-grow px-4 flex flex-col justify-center items-center">
                          <div className="w-full border-t border-dashed border-gray-300"></div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-500">Chegada</p>
                          <p className="text-xl font-bold">{formatTime(flight.arrivalDate)}</p>
                          <p className="text-sm">{flight.destination}</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline">Ver Detalhes</Button>
                        <Button variant="outline">Compartilhar Feedback</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
