import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ThemeToggle from "../components/ui/theme-Toggle";

import { useNavigate } from "react-router-dom";

 const Footer = () => {
    // const navigate = useNavigate()


    
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
        <footer className="bg-muted/50 border-t border-border mt-0">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900">Konect</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
                            Konect vous aide à créer, partager et gérer vos cartes de visite numériques
                            pour développer vos opportunités professionnelles.
                        </p>
                        <div className="flex mt-6 space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 bg-card rounded-full shadow hover:bg-primary hover:text-white transition"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-muted-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="hover:text-foreground transition"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Konect. Tous droits réservés.
                        </p>
                        <ThemeToggle />
                    </div>
                    <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
                        Créer ma carte
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;