import React, { useState } from "react";
import {
    Card, CardHeader, CardTitle, CardContent
} from "./card";
import { Textarea } from "./textarea";
import { Button } from "./button";

import { Volume2, RefreshCw } from "lucide-react";

const MAX_USES = 3;

export default function Speak() {
    const [usageCount, setUsageCount] = useState(0);
    const [inputText, setInputText] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);

    const handleSpeak = () => {
        if (usageCount >= MAX_USES) return;
        setIsProcessing(true);

        // Simule la génération audio
        setTimeout(() => {
            setAudioUrl("https://sample-videos.com/audio/mp3/wave.mp3");
            setUsageCount((c) => c + 1);
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <div className=" mx-auto ">

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Volume2 className="h-5 w-5 text-primary" />
                        Speak
                        <span className="ml-auto text-sm font-normal text-muted-foreground">
                            {usageCount}/{MAX_USES} uses
                        </span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {usageCount >= MAX_USES && (
                        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20 text-center font-semibold">
                            Demo completed! Contact us for full access.
                        </div>
                    )}
                    <Textarea
                        placeholder="Enter text to speak"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        disabled={usageCount >= MAX_USES}
                    />
                    <Button onClick={handleSpeak} disabled={isProcessing || usageCount >= MAX_USES}>
                        {isProcessing ? "Generating speech..." : "Speak"}
                    </Button>
                    {audioUrl && (
                        <audio controls src={audioUrl} className="mt-2 w-full" />
                    )}
                </CardContent>
            </Card>
        </div>

    );
}
