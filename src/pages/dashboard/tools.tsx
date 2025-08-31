import { QrCode, IdCard, Share2, BarChart2, Link2 } from "lucide-react";

const tools = [
  {
    title: "QR Code Generator",
    description: "Créez un QR code pour partager vos infos facilement.",
    icon: QrCode,
  },
  {
    title: "Business Card",
    description: "Générez une carte de visite digitale professionnelle.",
    icon: IdCard,
  },
  {
    title: "Smart Links",
    description: "Centralisez et partagez vos liens en un seul endroit.",
    icon: Link2,
  },
  {
    title: "Analytics",
    description: "Suivez les vues, clics et interactions en temps réel.",
    icon: BarChart2,
  },
  {
    title: "Share Hub",
    description: "Partagez vos informations via email ou réseaux sociaux.",
    icon: Share2,
  },
];

export default function ToolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="border rounded-2xl p-5 shadow-sm bg-card hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            <button className="mt-4 text-sm font-medium text-primary hover:underline">
              Open →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
