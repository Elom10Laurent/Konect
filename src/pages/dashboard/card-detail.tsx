import {
  Plus,
  QrCode,
  Share2,
  Download,
  IdCard,
  Eye,
  Users,
  UserPlus,
  Crown,
  MoreHorizontal,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { useNavigate } from "react-router-dom"

// --- Données simulées (mock) ---
const interactions = [
  { icon: <UserPlus className="h-4 w-4 text-blue-500" />, text: "Nouvelle connexion reçue", detail: "Sarah M." },
  { icon: <QrCode className="h-4 w-4 text-green-500" />, text: "Carte partagée", detail: "via QR" },
  { icon: <Crown className="h-4 w-4 text-yellow-500" />, text: "Abonnement Premium", detail: "renouvelé" },
]

const cards = [
  { name: "Carte Pro", date: "12/08/2025", views: 430, status: "active" },
  { name: "Carte Standard", date: "05/08/2025", views: 120, status: "paused" },
]

// --- Composants dédiés ---
function MainCard() {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Carte principale</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4 items-center">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl w-full h-40 flex flex-col justify-between">
          <h3 className="text-lg font-bold">John Doe</h3>
          <p className="text-sm">Full-Stack Developer</p>
          <p className="text-xs">Konect.co</p>
        </div>
        <Button variant="outline" className="h-40 w-28 flex flex-col justify-center items-center">
          <Plus /> <span className="text-xs">Nouvelle carte</span>
        </Button>
      </CardContent>
    </Card>
  )
}

function SubscriptionCard() {
  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Votre Abonnement</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-green-600">Premium</h2>
        <p className="text-muted-foreground text-sm">Valide jusqu’au 20/12/2025</p>
        <div className="grid md:grid-cols-2 gap-2 mt-4">
          <Button size="sm"><Share2 className="w-4 h-4 mr-1" /> Partager</Button>
          <Button size="sm"><QrCode className="w-4 h-4 mr-1" /> QR</Button>
          <Button size="sm"><IdCard className="w-4 h-4 mr-1" /> Carte</Button>
          <Button size="sm"><Download className="w-4 h-4 mr-1" /> Télécharger</Button>
        </div>
      </CardContent>
    </Card>
  )
}

function StatsCard() {
  const stats = [
    { icon: <Eye className="h-6 w-6 text-blue-500 mb-2" />, label: "Vues totales", value: "1,250" },
    { icon: <QrCode className="h-6 w-6 text-green-500 mb-2" />, label: "QR scans", value: "320" },
    { icon: <Users className="h-6 w-6 text-purple-500 mb-2" />, label: "Connexions", value: "85" },
  ]

  return (
    <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Statistiques</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-muted/40 hover:bg-muted/60 transition-colors"
            >
              {s.icon}
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <span className="text-xl font-bold">{s.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function InteractionsCard() {
  return (
    <Card className="rounded-2xl shadow-md bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Dernières interactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {interactions.map((item, i) => (
            <li key={i} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-sm font-medium">{item.text}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function CardsTable() {
  const navigate = useNavigate()
  return (
    <Card className="rounded-2xl shadow-md bg-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Mes cartes</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="py-2 px-3">Nom</th>
              <th className="py-2 px-3">Date</th>
              <th className="py-2 px-3">Vues</th>
              <th className="py-2 px-3">Statut</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, i) => (
              <tr key={i} className="hover:bg-muted/40 transition-colors">
                <td className="py-2 px-3 font-medium">{card.name}</td>
                <td className="py-2 px-3">{card.date}</td>
                <td className="py-2 px-3">{card.views}</td>
                <td className="py-2 px-3">
                  {card.status === "active" && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Active</span>
                  )}
                  {card.status === "paused" && (
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">En pause</span>
                  )}
                </td>
                <td className="py-2 px-3">
                  <Button  onClick={() => navigate('/dashboard/card')} size="sm" variant="outline" className="flex items-center space-x-1">
                    <MoreHorizontal className="h-4 w-4" />
                    <span>Gérer</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}

// --- Page Dashboard ---
export default function HomeDash() {
  return (
    <div className="p-6 min-h-screen space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Bienvenue sur Konect Dashboard</h1>
        <p className="text-muted-foreground">Gérez vos cartes de visite, abonnements et connexions.</p>
      </header>

      {/* Top section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MainCard />
        <SubscriptionCard />
        <StatsCard />
      </div>

      {/* Bottom section */}
      <InteractionsCard />
      <CardsTable />
    </div>
  )
}
