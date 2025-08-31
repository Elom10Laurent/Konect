
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, QrCode, ArrowRight, CheckCircle, MessageSquare, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './badge';

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Créer des Événements',
      description: 'Configurez votre événement en quelques minutes avec notre formulaire simple'
    },
    {
      icon: QrCode,
      title: 'Billets Numériques',
      description: 'Générez des QR codes pour un check-in facile'
    },
    {
      icon: Users,
      title: 'Gérer les Participants',
      description: 'Suivez les inscriptions et communiquez avec les participants'
    },
    {
      icon: MessageSquare,
      title: 'Rappels Automatiques',
      description: 'Envoyez des rappels par WhatsApp, Telegram et autres plateformes'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Navigation */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl">EventHub</span>
              <Badge variant="secondary">MVP</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="ghost">Tableau de Bord</Button>
              </Link>
              <Link to="/create-event">
                <Button>Commencer</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Billetterie d'Événements Simple
            <span className="block text-primary">pour les Communautés Africaines</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Créez, gérez et promouvez vos événements avec notre plateforme facile à utiliser. 
            Commencez à vendre des billets en quelques minutes avec des rappels automatiques.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/create-event">
              <Button size="lg" className="text-lg px-8 py-6">
                Créer Votre Premier Événement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Parcourir les Événements
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Gratuit pour commencer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Pas de frais d'installation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>QR codes instantanés</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Rappels automatiques</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tout ce dont vous avez besoin pour commencer</h2>
            <p className="text-lg text-muted-foreground">Fonctionnalités essentielles qui fonctionnent</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reminder Features Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Rappels Automatiques Multi-Plateformes</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ne laissez jamais vos participants oublier votre événement. Envoyez des rappels automatiques 
              sur leurs plateformes préférées.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Messages directs et personnalisés</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Telegram</h3>
                <p className="text-sm text-muted-foreground">Notifications instantanées</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Programmation</h3>
                <p className="text-sm text-muted-foreground">24h, 1h avant l'événement</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-primary text-primary-foreground p-12">
            <h2 className="text-3xl font-bold mb-4">Prêt à organiser votre premier événement ?</h2>
            <p className="text-lg mb-8 opacity-90">
              Rejoignez les organisateurs d'événements à travers l'Afrique qui font confiance à EventHub
            </p>
            <Link to="/create-event">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Créer un Événement Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">EventHub</span>
            </div>
            <div className="text-sm text-muted-foreground">
             {Date.now()} EventHub. Fait pour l'Afrique.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
