import { useState } from "react";

import { Volume2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Button } from "./button";

const MAX_USES = 3;

export default function Transcribe() {
    const [usageCount, setUsageCount] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false);
    const [transcribedText, setTranscribedText] = useState("");

    const handleTranscribe = async () => {
        if (usageCount >= MAX_USES) return;
        setIsProcessing(true);

        // Simule un appel API de transcription ici
        setTimeout(() => {
            setTranscribedText("Texte transcrit de l'audio (exemple).");
            setUsageCount((count) => count + 1);
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <div className=" mx-auto">
            <Card >
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Volume2 className="h-5 w-5 text-primary" />
                        Transcribe
                        <span className="ml-auto text-sm font-normal text-muted-foreground">
                            {usageCount}/{MAX_USES} uses
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {usageCount >= MAX_USES && (
                        <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                            <p className="font-semibold">Demo completed! Contact us to get full access.</p>
                            <Button variant="outline" className="mt-2">Get API Access</Button>
                        </div>
                    )}
                    <Button onClick={handleTranscribe} disabled={isProcessing || usageCount >= MAX_USES}>
                        {isProcessing ? "Processing..." : "Start Transcription"}
                    </Button>
                    {transcribedText && (
                        <div className="p-4 bg-muted rounded">{transcribedText}</div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
