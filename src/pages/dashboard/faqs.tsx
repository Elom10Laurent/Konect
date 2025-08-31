import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        JobTitle: "",
        phoneNumber: "",
        company: "",
        address: "",
        titre_carte: "",
        formation: "",
        bio: "",
        statut: "",
        visibilite: "",
        categorie: "",
        type_piece: "",
        numero_identite: "",
        date_expiration: "",
        image_carte: null as File | null,
        piece_identite: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, files } = e.target as any;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const fd = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== null) fd.append(key, value as any);
            });

            await axios.post("http://localhost:3001/v1/cards", fd, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Carte enregistrée avec succès !");
        } catch (error: any) {
            console.error(error);
            alert("Erreur lors de l'enregistrement de la carte.");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground from-gray-50 to-gray-100 py-12 px-6">
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                {/* Header */}
                <section className="text-center mb-10">
                    <p className="font-semibold text-sm text-indigo-600 tracking-wide uppercase">
                        <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs mx-1">Konect</span> questions
                    </p>
                    <h2 className="text-4xl text-violet-700 font-bold mt-2">
                        {/* en francais */}
                        <span className="underline decoration-indigo-400">Questions  </span>
                        fréquentes
                    </h2>
                    <p className="text-gray-500 mt-3">
                        {/* en francais */}
                        Repondez au formulaire ci-dessous pour votre carte. <br /> Chaque section contient des informations essentielles pour compléter votre carte.
                    </p>
                </section>

                {/* Form */}
                <form className="  w-full " onSubmit={handleSubmit}>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Informations de l'auteur",
                                content: (
                                    <>
                                        <input type="text" placeholder="Nom complet" name="fullName" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="email" placeholder="Email" name="email" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="tel" placeholder="Téléphone" name="phoneNumber" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="text" placeholder="Poste" name="JobTitle" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="text" placeholder="Organisation" name="company" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="text" placeholder="Adresse" name="address" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                    </>
                                ),
                                description: "Ces informations permettent d’identifier l’auteur de la carte et de faciliter le contact.",
                            },
                            {
                                title: "Détails de la carte",
                                content: (
                                    <>
                                        <input type="text" placeholder="Titre de la carte" name="titre_carte" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="text" placeholder="Formation" name="formation" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <textarea placeholder="Description" name="bio" rows={4} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange}></textarea>
                                        <input type="file" name="image_carte" required className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none" onChange={handleChange} />
                                    </>
                                ),
                                description: "Ajoutez ici le titre, la description et éventuellement une image qui illustrera votre carte.",
                            },
                            {
                                title: "Catégorie et tags",
                                content: (
                                    <>
                                        <input type="text" placeholder="Catégorie" name="categorie" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="text" placeholder="Tags (séparés par des virgules)" name="tags" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <select name="statut" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange}>
                                            <option value="">Statut</option>
                                            <option value="actif">Actif</option>
                                            <option value="inactif">Inactif</option>
                                        </select>
                                        <select name="visibilite" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange}>
                                            <option value="">Visibilité</option>
                                            <option value="public">Public</option>
                                            <option value="prive">Privé</option>
                                        </select>
                                    </>
                                ),
                                description: "Classez votre carte pour mieux la retrouver et optimiser sa visibilité.",
                            },
                            {
                                title: "KYC",
                                content: (
                                    <>
                                        <select name="type_piece" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange}>
                                            <option value="">Type de pièce</option>
                                            <option value="carte_identite">Carte d'identité</option>
                                            <option value="passeport">Passeport</option>
                                        </select>
                                        <input type="text" placeholder="Numéro d'identité" name="numero_identite" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="date" placeholder="Date d'expiration" name="date_expiration" required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400" onChange={handleChange} />
                                        <input type="file" name="piece_identite" required className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none" onChange={handleChange} />
                                    </>
                                ),
                                description: "Vérifiez votre identité pour débloquer toutes les fonctionnalités de la plateforme.",
                            },
                        ].map((faq, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                key={index}
                                className={`p-5 rounded-xl border shadow-sm bg-gray-50 transition cursor-pointer 
                ${activeIndex === index ? "border-indigo-400 bg-white shadow-md" : "border-gray-200 hover:shadow-md"}`}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-gray-800">{faq.title}</h3>
                                    <span className="text-xl font-bold text-gray-500">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                {activeIndex === index && (
                                    <>
                                        <div className="mt-4 space-y-3 transition-all" onClick={(e) => e.stopPropagation()}>{faq.content}</div>
                                        <p className="text-sm text-gray-500 italic mt-4">{faq.description}</p>
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="  mt-4
                        flex w-full col-span-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:opacity-90 transition text-center"
                    >
                        Enregistrer
                    </button>
                </form>
            </div>

            {/* Section d’explication */}
            <section className="mt-10 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Guide de remplissage du formulaire de création de carte
                </h2>
                <div className="mt-6 max-w-3xl mx-auto bg-pink-50 border border-pink-200 rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-pink-800">Besoin d’aide ?</h2>
                    <p className="text-pink-700 mt-2">
                        Chaque catégorie contient des champs spécifiques à remplir. Cliquez sur le titre pour ouvrir ou fermer la section.
                    </p>
                    <p className="text-pink-700 mt-2">
                        Pour plus de détails, consultez notre{" "}
                        <a href="#" className="underline font-medium">
                            guide complet
                        </a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
