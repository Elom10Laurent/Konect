import { useParams, useNavigate } from "react-router-dom"

import { ArrowLeft, Eye, Pause, Play, Trash2, Share2, BarChart } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

const cards = [
  { name: "Carte Pro", date: "12/08/2025", views: 430, status: "active" },
  { name: "Carte Standard", date: "05/08/2025", views: 120, status: "paused" },
]

// mock/cards.ts
export const mockCards = [
  {
    id: 1,
    name: "Carte Pro",
    date: "12/08/2025",
    views: 430,
    status: "active",
    description: "Carte professionnelle optimisée pour les échanges B2B.",
    qrScans: 320,
    connections: 85,
    plan: "Premium",
  },
  {
    id: 2,
    name: "Carte Standard",
    date: "05/08/2025",
    views: 120,
    status: "paused",
    description: "Carte basique pour un usage personnel.",
    qrScans: 45,
    connections: 12,
    plan: "Standard",
  },
  {
    id: 3,
    name: "Carte Événement",
    date: "20/07/2025",
    views: 78,
    status: "active",
    description: "Carte temporaire pour networking lors d’un salon.",
    qrScans: 22,
    connections: 5,
    plan: "Free",
  },
];


export default function CardInfos() {
//   const { name } = useParams()
  const navigate = useNavigate()

  const name = "Carte Pro"
 
  const card = cards.find((c) => c.name === name)

  if (!card) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Carte introuvable.</p>
        <Button onClick={() => navigate(-1)} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour
        </Button>
      </div>
    )
  }

  return (
     <div className="p-4 sm:p-6 space-y-6 h-full bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Bouton retour */}
      <Button 
        onClick={() => navigate(-1)} 
        variant="ghost" 
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Retour
      </Button>

      {/* Détails de la carte */}
      <Card className="rounded-2xl shadow-md bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl font-semibold">{card.name}</CardTitle>
          <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span>Créée le {card.date}</span>
            {card.status === "active" ? (
              <Badge className="bg-green-100 text-green-700 w-fit">Active</Badge>
            ) : (
              <Badge className="bg-yellow-100 text-yellow-700 w-fit">En pause</Badge>
            )}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Infos principales */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="h-4 w-4 shrink-0" />
            <span>
              Nombre de vues :{" "}
              <span className="font-semibold text-foreground">{card.views}</span>
            </span>
          </div>

          {/* Actions rapides */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Actions rapides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {card.status === "active" ? (
                <Button variant="outline" className="flex items-center gap-2 w-full">
                  <Pause className="h-4 w-4" /> Mettre en pause
                </Button>
              ) : (
                <Button variant="outline" className="flex items-center gap-2 w-full">
                  <Play className="h-4 w-4" /> Réactiver
                </Button>
              )}
              <Button variant="outline" className="flex items-center gap-2 w-full">
                <Share2 className="h-4 w-4" /> Partager
              </Button>
              <Button variant="outline" className="flex items-center gap-2 w-full">
                <BarChart className="h-4 w-4" /> Statistiques
              </Button>
              <Button 
                variant="destructive" 
                className="flex items-center gap-2 w-full sm:col-span-2 lg:col-span-1"
              >
                <Trash2 className="h-4 w-4" /> Supprimer
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
