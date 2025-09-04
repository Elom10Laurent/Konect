import { Search, HelpCircle, CreditCard, User, Settings, Users, Globe, BookOpen, MessageCircle } from "lucide-react";
import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

const SupportPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-primary-50 to-accent-100 text-gray-800">
            {/* Header */}
            <header className="">
                <div className=" mx-auto  py-6 ">
                    <Navigation />
                </div>
            </header>



            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Title */}
                <section className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800">Comment pouvons-nous vous aider ?</h2>
                    <p className="text-gray-500 mt-2">Trouvez des réponses ou contactez notre équipe d’assistance.</p>
                </section>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Rechercher un article d’aide..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: <CreditCard className="w-10 h-10 text-indigo-500" />,
                            title: "Cartes numériques",
                            items: ["Créer une carte", "Modifier une carte", "Partager une carte"],
                        },
                        {
                            icon: <User className="w-10 h-10 text-pink-500" />,
                            title: "Profil & KYC",
                            items: ["Vérifier mon identité", "Modifier mes informations", "Changer mon mot de passe"],
                        },
                        {
                            icon: <Settings className="w-10 h-10 text-violet-500" />,
                            title: "Paramètres",
                            items: ["Notifications", "Sécurité", "Langue et région"],
                        },
                        {
                            icon: <Users className="w-10 h-10 text-blue-500" />,
                            title: "Collaboration",
                            items: ["Créer un groupe", "Gérer les membres", "Partager un projet"],
                        },
                        {
                            icon: <Globe className="w-10 h-10 text-green-500" />,
                            title: "Paiements",
                            items: ["Activer les paiements", "Méthodes acceptées", "Problèmes de facturation"],
                        },
                        {
                            icon: <HelpCircle className="w-10 h-10 text-orange-500" />,
                            title: "Autres",
                            items: ["FAQ générales", "Support technique", "Contacter l’équipe"],
                        },
                    ].map((cat, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition">
                            <div className="flex flex-col items-start space-y-3">
                                {cat.icon}
                                <h3 className="text-lg font-semibold">{cat.title}</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    {cat.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <a href="#" className="text-indigo-600 font-medium text-sm mt-2 hover:underline">
                                    Voir tout
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Help Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
                        <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <p className="font-medium text-green-700">Demander à la communauté</p>
                        <p className="text-sm text-green-600 mt-1">Obtenez de l’aide d’autres utilisateurs Konect</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-sm">
                        <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                        <p className="font-medium text-orange-700">Lire le guide</p>
                        <p className="text-sm text-orange-600 mt-1">Consultez les dernières ressources et astuces</p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl shadow-sm">
                        <HelpCircle className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                        <p className="font-medium text-indigo-700">Contacter le support</p>
                        <p className="text-sm text-indigo-600 mt-1">Écrivez-nous directement depuis l’app   <a href="mailto:contact@konect.com" className="font-medium">contact@konect.com</a> </p>
                    </div>
                </div>
            </main>



            {/* Footer */}
            <Footer />
        </div>
    );
}

export default SupportPage;
