
import { Globe, Linkedin, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import cvPik from "../../assets/profile.png"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-10 px-4">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Profil</h1>
      <p className="text-muted-foreground mb-10">
        Retrouvez ici tous les détails de votre profil.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Left: Profile Card */}
        <Card className="rounded-2xl shadow-md backdrop-blur bg-card/80 flex flex-col items-center text-center">
          <CardHeader>
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 border-muted mx-auto mb-2">
              <img
                src={cvPik}
                alt="Maria Fernanda"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle className="text-2xl font-semibold">Martimé DOUGLAS</CardTitle>
            <CardDescription>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                freemium user
              </Badge>
            </CardDescription>
          </CardHeader>
        </Card>

          <Card className="rounded-2xl shadow-md backdrop-blur bg-card/80">
      <CardHeader>
        <CardTitle>Bio & autres détails</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Infos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Profession / Rôle</p>
            <p className="font-medium">Développeur Web</p>
          </div>
          <div>
            <p className="text-muted-foreground">Niveau d'expérience</p>
            <p className="font-medium">Senior</p>
          </div>
          <div>
            <p className="text-muted-foreground">Compétences clés</p>
            <p className="font-medium">React, Node.js, TailwindCSS</p>
          </div>
          <div>
            <p className="text-muted-foreground">Secteur d'activité</p>
            <p className="font-medium">Tech / SaaS</p>
          </div>
          <div>
            <p className="text-muted-foreground">Outils / Logiciels</p>
            <p className="font-medium">VS Code, GitHub, Figma</p>
          </div>
          <div>
            <p className="text-muted-foreground">Style de travail</p>
            <p className="font-medium">Agile, Remote-friendly</p>
          </div>
          <div>
            <p className="text-muted-foreground">Localisation</p>
            <p className="font-medium">Paris, France</p>
          </div>
          <div>
            <p className="text-muted-foreground">Disponibilité</p>
            <Badge className="bg-green-600 h-6 text-white">
              Ouvert aux opportunités
            </Badge>
          </div>
        </div>

        {/* Badges & Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Badges</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge className="bg-cyan-600 text-white">Top Performer</Badge>
              <Badge className="bg-purple-600 text-white">Mentor</Badge>
            </div>
          </div>
          <div>
            <p className="text-muted-foreground">Tags</p>
            <p className="font-medium">#ReactJS, #UIUX, #OpenSource</p>
          </div>
        </div>
      </CardContent>
    </Card>
      </div>

      {/* Social Media */}
      <div className="mt-10 w-full max-w-5xl">
        <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <Youtube className="w-6 h-6 text-red-500" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <FaTiktok className="w-6 h-6 text-foreground text-gray-800  " />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Linkedin className="w-6 h-6 text-blue-500" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Globe className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
