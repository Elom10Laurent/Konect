import { SiteNav } from "../../layout/SiteNav";
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { BarChart3, Settings, CreditCard } from 'lucide-react';
import { UsageChart } from '../../components/ui/demo-chart';
import ThemeToggle from '../../components/ui/theme-Toggle';
import { useToast } from "../../hooks/use-toast";

export default function Analytics() {
    const { toast } = useToast();

    return (
        <div className="min-h-screen  text-gray-900">
            {/* Main Content */}
            <div className="flex-1 p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-6">Analytics</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline">Premium</Badge>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Cartes créées</CardTitle>
                            <CardDescription>Total des cartes numériques</CardDescription>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">12</CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Vues</CardTitle>
                            <CardDescription>Interactions ce mois</CardDescription>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">328</CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Partages</CardTitle>
                            <CardDescription>Via QR Code & lien</CardDescription>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">87</CardContent>
                    </Card>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">
                            <BarChart3 className="mr-2 h-4 w-4" /> Aperçu
                        </TabsTrigger>
                        <TabsTrigger value="modules">
                            <CreditCard className="mr-2 h-4 w-4" /> Modules
                        </TabsTrigger>
                        <TabsTrigger value="settings">
                            <Settings className="mr-2 h-4 w-4" /> Paramètres
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                        <Card>
                            <CardHeader>
                                <CardTitle>Activité</CardTitle>
                                <CardDescription>Vos performances récentes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <UsageChart />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="modules">
                        <Card>
                            <CardHeader>
                                <CardTitle>Modules disponibles</CardTitle>
                                <CardDescription>Ajoutez ou configurez vos cartes</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">À venir...</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="settings">
                        <Card>
                            <CardHeader>
                                <CardTitle>Paramètres</CardTitle>
                                <CardDescription>Gérez vos préférences</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    onClick={() =>
                                        toast({
                                            title: 'Paramètres sauvegardés',
                                            description: 'Vos préférences ont été mises à jour.',
                                        })
                                    }
                                >
                                    Sauvegarder
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
