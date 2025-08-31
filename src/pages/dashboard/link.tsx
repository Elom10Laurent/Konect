import { Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import conectPic from "../../assets/conect.png";

import { Link } from "react-router-dom";

export default function Contact() {
  const cards = [
    {
      id: 1,
      title: "Professional Card #1",
      owner: "Haydn Price",
      image:
        "https://images.unsplash.com/photo-1707676602290-acfdedc6b41d?w=600&auto=format&fit=crop&q=60",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 2,
      title: "Leads Form #1",
      owner: "Yaroslav Basev",
      image:
        "https://images.unsplash.com/photo-1679480911476-3ee732578062?w=600&auto=format&fit=crop&q=60",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 3,
      title: "Link-in-Bio #1",
      owner: "Yaroslav Basev",
      image:
        "https://images.unsplash.com/photo-1645958684360-a04e1595737a?w=600&auto=format&fit=crop&q=60",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 4,
      title: "Professional Card #2",
      owner: "Francis Falodun",
      image:
        "https://plus.unsplash.com/premium_photo-1683140757395-ba8af5aa185f?w=600&auto=format&fit=crop&q=60",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      id: 5,
      title: "Link-in-Bio #2",
      owner: "Haydn Price",
      image:
        "https://images.unsplash.com/photo-1696992443065-64eadfc2ded1?w=600&auto=format&fit=crop&q=60",
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Main */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground">My Links</h2>
            <p className="text-muted-foreground text-sm">
              link.konect.co/username
            </p>
          </div>
          <Button className="hero-button flex items-center gap-2">
            <Share2 size={16} /> Share Your Card
          </Button>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              className=" h-auto flex flex-col rounded-2xl bg-card shadow-soft hover:shadow-warm transition-shadow duration-300 overflow-hidden"
            >
              <CardContent className="flex flex-col p-4 flex-1">
                {/* Image */}
                <div className="relative  w-full h-80 rounded-lg overflow-hidden mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />

                  <Link
                    to={`/dashboard/contact/${card.id}`}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors duration-200 rounded-2xl"
                  >
                    <img
                      src={conectPic}
                      alt="icon"
                      className="w-12 h-12 object-contain"
                    />
                  </Link>
                </div>

                {/* Infos */}
                <div className=" flex justify-between">
                  <div>
                    <h3 className="font-semibold text-card-foreground truncate">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {card.owner}
                    </p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex gap-4 mt-4 text-muted-foreground">
                  <a
                    href={card.linkedin}
                    className="hover:text-accent transition"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={card.twitter}
                    className="hover:text-accent transition"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={card.facebook}
                    className="hover:text-accent transition"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </CardContent>

              {/* Overlay cliquable */}

            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
