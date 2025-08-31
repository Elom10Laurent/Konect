import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { Input } from "./input";
import { Button } from "./button";

const MAX_USES = 3;

export default function Converse() {
    const [usageCount, setUsageCount] = useState(0);
    const [inputText, setInputText] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [responseText, setResponseText] = useState("brillant");

    const handleConverse = () => {
        if (usageCount >= MAX_USES) return;
        setIsProcessing(true);
        setTimeout(() => {
            setResponseText(`${inputText}`);
            setUsageCount((c) => c + 1);
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <div className=" mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        Converse
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
                    <Input
                        placeholder="Type your message..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        disabled={usageCount >= MAX_USES}
                    />
                    <Button onClick={handleConverse} disabled={isProcessing || usageCount >= MAX_USES}>
                        {isProcessing ? "Waiting for AI..." : "Send"}
                    </Button>
                    {responseText && (
                        <div className="p-4 bg-muted rounded">{responseText}</div>
                    )}
                </CardContent>
            </Card>
        </div>


    );
}
