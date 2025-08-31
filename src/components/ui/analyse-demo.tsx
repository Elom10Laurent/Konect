import { useState } from "react";

import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Textarea } from "./textarea";
import { Button } from "./button";

const MAX_USES = 3;

export default function Analyze() {
    const [usageCount, setUsageCount] = useState(0);
    const [textToAnalyze, setTextToAnalyze] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [analysisResult, setAnalysisResult] = useState("négatif");

    const handleAnalyze = () => {
        // if (usageCount >= MAX_USES) return;
        setIsProcessing(true);

        setTimeout(() => {
            setAnalysisResult(`${analysisResult}`);
            setUsageCount((c) => c + 1);
            setIsProcessing(false);
        }, 1500);
    };

    return (
        <div className=" mx-auto">

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        Analyze
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
                        placeholder="Enter text to analyze"
                        value={textToAnalyze}
                        onChange={(e) => setTextToAnalyze(e.target.value)}
                        // disabled={usageCount >= MAX_USES}
                    />
                    <Button onClick={handleAnalyze}>
                        {isProcessing ? "Analyzing..." : "Analyze"}
                    </Button>
                    {analysisResult && (
                        <div className="p-4 bg-muted rounded">{analysisResult}</div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
