// import gptPic from "../assets/imgs/top.png";

import { Github, Linkedin, Mail, Twitter, CheckCircle, ArrowUpRight, } from "lucide-react";

import exo from "../assets/images/exemple.png";
import ProfileCard from "../assets/profile.png";
import Card from "../assets/images/1.png";
import Cardverso from "../assets/images/2.png";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navigation from "../layout/Navigation";
import { Button } from "../components/ui/button";
import Footer from "../layout/Footer";



export default function Index() {
  const navigate = useNavigate()
  const [flipped, setFlipped] = useState(false);



  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneure",
      content:
        "Konect m’a permis de transformer mes rencontres en vraies opportunités. Simple, efficace et élégant.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "David K.",
      role: "Consultant",
      content:
        "Je partage ma carte digitale en un clic avec un QR code. Mes clients adorent la rapidité et le côté innovant.",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      name: "Aïcha B.",
      role: "Designer",
      content:
        "L’expérience utilisateur est incroyable. Je garde le contact facilement grâce à la messagerie intégrée.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Jean P.",
      role: "Commercial",
      content:
        "Grâce à la carte NFC, mes échanges sont instantanés. Plus besoin de papier, tout est directement sur le smartphone de mon interlocuteur.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];


  const tools = [
    {
      title: "Carte digitale",
      desc: "Créez une carte de visite numérique professionnelle, partagez-la via QR code, carte NFC et personnalisez-la avec vos liens.",
      icon: "💳",
    },
    {
      title: "Réseau & Messagerie",
      desc: "Ajoutez vos contacts, échangez directement avec eux et développez votre réseau en toute simplicité.",
      icon: "🤝",
    },
    {
      title: "Smart Links",
      desc: "Centralisez tous vos liens (portfolio, réseaux sociaux, CV) en un seul endroit accessible.",
      icon: "🔗",
    },
    {
      title: "Analytics",
      desc: "Suivez les vues, clics et interactions.",
      icon: "📊",
    },
    {
      title: "Partage intelligent",
      desc: "Diffusez vos informations via QR code, email ou réseaux sociaux en un clic.",
      icon: "📤",
    },
  ];

  const footerSections = [
    {
      title: "Produit",
      links: [
        { label: "Tarifs", href: "#pricing" },
        { label: "Fonctionnalités", href: "#features" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
        { label: "Carrières", href: "#careers" },

      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Centre d’aide", href: "#help" },
        { label: "Guides", href: "#guides" },
        { label: "Communauté", href: "#community" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Politique de confidentialité", href: "#privacy" },
        { label: "Conditions d’utilisation", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:contact@konect.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <Navigation />


      {/* Hero */}
      {/* <section className="mt-10" >
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 py-12 gap-12 h-full">
          <div className="flex-1">
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Simplifiez vos
              <span className="block">rencontres professionnelles</span>
              <span className="block mt-1">
                et  <span className="text-primary">développez votre réseau</span>
              </span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Créez votre carte de visite digitale, partagez vos informations et découvrez de nouveaux contacts.
              Transformez chaque rencontre en opportunité professionnelle, simplement et efficacement.
            </p>
            <div className=" flex  gap-4   mt-6 ">
              <button className="bg-black hover:bg-primary  text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-gray-900 transition">
                Créer ma carte
              </button>
              <button className="flex bg-white text-primary  hover:text-white hover:bg-primary  px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-gray-900 transition">
                Créer ma carte
                <ArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-auto h-full object-cover rounded-lg shadow-lg"
              src={gptPic}
              alt="Aperçu plateforme"
            />
          </div>
        </div>

        <p className="my-6 text-muted-foreground text-sm text-center">
          Rejoins +10 000 professionnels et développe ton réseau dès aujourd'hui !
        </p>

      </section> */}



      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary to-muted py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte gauche */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light/20 border border-primary text-primary-dark font-medium">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span>Nous Recrutons !</span>
            </div>
            <h1 className="text-3xl md:text-4xl   lg:text-5xl font-extrabold leading-tight tracking-tight">
              Simplifiez vos
              <span className="block">rencontres professionnelles</span>
              <span className="block mt-1">
                et  <span className="text-primary">développez votre réseau</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Créez votre carte de visite digitale, partagez vos informations et découvrez de nouveaux contacts.
              Transformez chaque rencontre en opportunité professionnelle, simplement et efficacement.
            </p>


            <div className="md:flex space-y-4 md:space-y-0 gap-4">
              <Button onClick={() => [navigate('login')]} size="lg" className="hero-button">Créez votre carte</Button>
              <Button size="lg" variant="ghost" className="hero-button-outline">Voir une démo</Button>
            </div>

            {/* Preuve sociale */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/36.jpg"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-background"
                />
              </div>
              <p className="text-sm text-muted-foreground">

                <span className="text-primary font-semibold">10,000+</span> pros
                utilisent déjà notre solution
              </p>
            </div>
          </div>

          {/* Illustration droite */}
          {/* <div className="relative">
            <img
              src="https://source.unsplash.com"
              alt="hero illustration"
              width={600}
              height={600}
              className="rounded-xl shadow-lg"
            />
          </div> */}

          <div className="relative">
            <div className="relative aspect-square w-full h-auto rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100    ">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent"
                style={{
                  backgroundImage: `
      url(https://media.istockphoto.com/id/2193896103/fr/photo/r%C3%A9seautage-lors-de-la-conf%C3%A9rence.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZBIE_cC1JMzPX3b3oOoCd7Ng_W5QZPK3PmL_Hpama5A=)
    `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-primary/10 backdrop-blur-sm border border-secondary-light/20 shadow-lg"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl bg-primary-dark/10 backdrop-blur-sm border border-primary-light/20 shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Logos des entreprises */}
      <section className="bg-muted/50 flex flex-wrap justify-center gap-10 mx-auto py-8">
        {["EcoBank", "Asky", "Deloitte", "RMO", "Konect", "Google"].map((logo) => (
          <span key={logo} className="text-muted-foreground text-3xl font-semibold">{logo}</span>
        ))}
      </section>

      {/* Hero img (use any img you like) */}
      <section className=" mx-auto px-6 mt-10">
        <div className="rounded-2xl overflow-hidden shadow ">
          <img
            className="w-full object-cover aspect-[16/9]"
            src={exo}
            alt="Aperçu plateforme"
          />
        </div>
      </section>


      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">2.5k</div>
            <div className="text-sm text-muted-foreground">Cartes créées</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Entreprises clientes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">1.5k</div>
            <div className="text-sm text-muted-foreground">Clients satisfaits</div>
          </div>
        </div>
      </section>

      {/* Features tailored to the link */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Tout ce dont vous avez besoin pour <span className="text-primary">connecter</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="border rounded-2xl p-5 shadow-sm bg-card hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {icon}
                </div>
                <h2 className="text-lg font-semibold">{title}</h2>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
              <button className="mt-4 text-sm font-medium text-primary hover:underline">
                Open →
              </button>
            </div>
          ))}
        </div>
      </section>



      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* img côté gauche */}
        <div className="relative flex justify-center">
          <div className="absolute -top-8 left-0 bg-green-50 rounded-full w-72 h-72 -z-10" />
          <img
            src={ProfileCard}
            alt="Carte de visite digitale"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
          <div
            className="absolute  bottom-[-30px] right-0 w-52  cursor-pointer select-none "
            style={{ perspective: "1200px" }}
            onClick={() => setFlipped(v => !v)}
            onDoubleClick={() => setFlipped(v => !v)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setFlipped(v => !v)}
            aria-pressed={flipped}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transformOrigin: "center",
              }}
            >
              {/* Recto (dos avec logo) */}

              <img
                src={Card}
                alt="Profil digital"
                className="absolute bottom-[-30px] right-0 w-52 rounded-xl shadow-md   [backface-visibility:hidden]"
              />


              {/* Verso (QR code) */}
              <img src={Cardverso}
                alt="QR Code"
                className="absolute bottom-[-30px] right-0 w-52 rounded-xl shadow-md   [transform:rotateY(180deg)] [backface-visibility:hidden]"
              />

            </div>
          </div>
          {/* <img
          src={Card}
          alt="Profil digital"
          className="absolute bottom-[-30px] right-0 w-52 rounded-xl shadow-md"
        /> */}
        </div>

        {/* Texte côté droit */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Partagez vos informations professionnelles <br /> en un instant.
          </h2>
          <p className="text-gray-600 mb-8">
            Créez une carte de visite digitale et échangez vos coordonnées en
            toute simplicité grâce au QR code et au NFC. Connectez-vous, découvrez
            de nouveaux profils et développez votre réseau professionnel.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Partage instantané via QR code ou carte NFC.",
              "Un tableau de bord pour suivre vos connexions.",
              "Messagerie intégrée et CV numérique toujours à jour.",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>

          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-500 transition-colors">
            Créer ma carte maintenant
          </button>
        </div>
      </section>

      <section className="bg-muted/50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Titre */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Découvrez comment Konect aide les professionnels à développer
              leurs réseaux et à booster leur visibilité.
            </p>
          </div>

          {/* Grille Témoignages */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl shadow-lg border  hover:shadow-xl transition  h-full flex flex-col justify-between  border rounded-2xl p-5 shadow-sm bg-card hover:shadow-md transition">
                  <CardContent className="flex flex-col items-center text-center p-8">
                    {/* Avatar */}
                    <Avatar className="w-16 h-16 mb-5 ring-2 ring-primary/20">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    {/* Texte */}
                    <p className="xl text-primary leading-relaxed italic mb-6">
                      “{t.content}”
                    </p>

                    {/* Identité */}
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.name}</h4>
                      <div className="w-8 h-1 bg-primary/70 rounded-full mx-auto my-2"></div>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
