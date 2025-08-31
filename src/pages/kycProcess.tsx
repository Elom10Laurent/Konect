"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, User, CreditCard, Mail, Loader2 } from "lucide-react";
import { SiteNav } from "../layout/SiteNav";

const steps = [
    {
        id: 1,
        title: "Confirmation Email",
        description: "Un email de validation a été envoyé pour confirmer votre adresse email. Vérifiez votre boîte.",
        icon: <Mail className="w-8 h-8 text-primary" />,

    },
    {
        id: 2,
        title: "Validation d'identité",
        description: "votre identité est en cours de validation, Suivant les données fournies.",
        icon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
        animation: <Loader2 className="animate-spin mr-2 h-4 w-4" />
    },
    {
        id: 3,
        title: "Lier ta Carte",
        description: "Ajoute ta carte pour profiter de tous les services.",
        icon: <CreditCard className="w-8 h-8 text-success" />,
    },
];

export default function ValidationProcess() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return (

        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-lg border border-border"
                >
                    {/* Header */}
                    <div className="flex flex-col items-center">
                        <CheckCircle2 className="w-14 h-14 text-success mb-3" />
                        <h1 className="text-2xl font-bold text-foreground">
                            carte créé avec succès
                        </h1>
                        <p className="text-muted-foreground text-center mt-2">
                            Finalisons la configuration de votre carte en 3 étapes simples.
                        </p>
                    </div>

                    {/* Progress bar */}
                    <div className="relative w-full h-2 bg-muted rounded-full mt-6 mb-8 overflow-hidden">
                        <motion.div
                            className="absolute h-2 bg-primary rounded-full shadow-glow"
                            initial={{ width: 0 }}
                            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    {/* Step Content */}
                    <motion.div
                        key={steps[currentStep - 1].id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{steps[currentStep - 1].icon}</div>
                        <h2 className="text-xl font-semibold text-foreground">
                            {steps[currentStep - 1].title}
                        </h2>
                        <p className="text-muted-foreground mt-2">
                            {steps[currentStep - 1].description}
                        </p>
                        <div className="mb-4">{steps[currentStep - 1].animation}</div>

                    </motion.div>

                    {/* Button */}
                    <div className="flex justify-center mt-8">
                        {currentStep < steps.length ? (
                            <button
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-lg shadow-glow transition-all"
                            >
                                Continuer
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button className="bg-success text-success-foreground px-6 py-3 rounded-lg shadow-soft hover:opacity-90 transition-all">
                                Terminer
                            </button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>

    );
}
