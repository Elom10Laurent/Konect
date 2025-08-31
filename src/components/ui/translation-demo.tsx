import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Languages, Volume2, ArrowRight, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const AFRICAN_LANGUAGES = [
    { code: 'ewe', name: 'Ewé' },
    { code: 'kab', name: 'Kabyè' },
    { code: 'min', name: 'Mina' },
    { code: 'tem', name: 'Tem' },
    { code: 'naw', name: 'Nawdem' },
    { code: 'lam', name: 'Lama' },
    { code: 'aja', name: 'Ajagbè' },
    // { code: 'fon', name: 'Fon' },
    // { code: 'mos', name: 'Mooré' },
    // { code: 'bam', name: 'Bambara' },
    // { code: 'twi', name: 'Twi' },
    // { code: 'yor', name: 'Yoruba' },
    // { code: 'hau', name: 'Hausa' },
];

const OTHER_LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },



    // { code: 'ar', name: 'Arabic' },
];

const ALL_LANGUAGES = [...AFRICAN_LANGUAGES, ...OTHER_LANGUAGES];

// Mock translation responses for demo
const MOCK_TRANSLATIONS: Record<string, Record<string, string>> = {
    'en': {
        'ewe': 'Woawo, aleke nuwoe le?',
        // 'fon': 'Migbo, aleke nuwoe le?',
        // 'mos': 'Yabondr, fo yaa la?',
        // 'bam': 'I ni ce, i ka kene wa?',
        'fr': 'Bonjour, comment allez-vous?',
    },
    'hello world': {
        'ewe': 'Woezɔ xexea me',
        // 'fon': 'Migbo xexea me',
        // 'mos': 'Yabondr tẽnga',
        // 'bam': 'I ni ce diunya',
        'fr': 'Bonjour le monde',
    }
};

const TranslationDemo = () => {
    const [sourceText, setSourceText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('ewe');
    const [isTranslating, setIsTranslating] = useState(false);
    const [usageCount, setUsageCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const { toast } = useToast();

    const handleTranslate = async () => {
        if (!sourceText.trim()) {
            toast({
                title: "Enter text to translate",
                description: "Please enter some text before translating.",
                variant: "destructive"
            });
            return;
        }

        if (usageCount >= 3) {
            toast({
                title: "Demo limit reached",
                description: "You've reached the 3 translation limit. Contact us for full access!",
                variant: "destructive"
            });
            return;
        }

        setIsTranslating(true);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Mock translation logic
        const textKey = sourceText.toLowerCase();
        const mockResult = MOCK_TRANSLATIONS[textKey]?.[targetLang] ||
            // `[${ALL_LANGUAGES.find(l => l.code === targetLang)?.name} translation of: "${sourceText}"]`;
            `${sourceText}`;
        setTranslatedText(mockResult);
        setUsageCount(prev => prev + 1);
        setIsTranslating(false);

        toast({
            title: "Translation completed!",
            description: `${3 - usageCount - 1} demo translations remaining.`,
        });
    };

    const handlePlayAudio = async () => {
        if (!translatedText) return;

        setIsPlaying(true);

        // Mock audio playback
        toast({
            title: "Audio feature",
            description: "Audio playback requires API integration. Contact us for full implementation!",
        });

        setTimeout(() => setIsPlaying(false), 2000);
    };

    const swapLanguages = () => {
        const tempLang = sourceLang;
        setSourceLang(targetLang);
        setTargetLang(tempLang);
        setSourceText(translatedText);
        setTranslatedText('');
    };

    return (
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium mb-6">
                        <Languages className="h-4 w-4 mr-2" />
                        Try Yodi Translation
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Experience African Language AI
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Test our translation capabilities with a free demo. 3 translations available.
                    </p>
                </div>

                <Card className="shadow-warm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Languages className="h-5 w-5 text-primary" />
                            Translation Demo
                            <span className="ml-auto text-sm font-normal text-muted-foreground">
                                {usageCount}/3 uses
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">

                        {/* Demo Notice */}
                        {usageCount >= 3 && (
                            <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
                                <p className=" font-semibold">
                                    Demo completed! Ready to integrate Yodi into your application?
                                </p>
                                <Button variant="outline" className="mt-2">
                                    <Link to={"/auth"}>
                                        Get API Access
                                    </Link>

                                </Button>
                            </div>
                        )}

                        {/* Language Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">From</label>
                                <Select value={sourceLang} onValueChange={setSourceLang}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ALL_LANGUAGES.map((lang) => (
                                            <SelectItem key={lang.code} value={lang.code}>
                                                {lang.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={swapLanguages}
                                    className="rounded-full"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">To</label>
                                <Select value={targetLang} onValueChange={setTargetLang}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ALL_LANGUAGES.map((lang) => (
                                            <SelectItem key={lang.code} value={lang.code}>
                                                {lang.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Translation Input/Output */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  items-stretch">
                            <div className="space-y-2 h-full flex flex-col">
                                <label className="text-sm font-medium">
                                    {ALL_LANGUAGES.find(l => l.code === sourceLang)?.name} Text
                                </label>
                                <Textarea
                                    placeholder={`Enter text in ${ALL_LANGUAGES.find(l => l.code === sourceLang)?.name}...`}
                                    value={sourceText}
                                    onChange={(e) => setSourceText(e.target.value)}
                                    className="min-h-[120px] resize-none flex-grow"
                                    disabled={usageCount >= 3}
                                />
                            </div>

                            <div className="space-y-2 h-full flex flex-col">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium">
                                        {ALL_LANGUAGES.find(l => l.code === targetLang)?.name} Translation
                                    </label>
                                    {translatedText && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={handlePlayAudio}
                                            disabled={isPlaying}
                                            className="text-accent hover:text-accent"
                                        >
                                            <Volume2 className="h-4 w-4 mr-1" />
                                            {isPlaying ? 'Playing...' : 'Listen'}
                                        </Button>
                                    )}
                                </div>
                                <Textarea
                                    placeholder="Translation will appear here..."
                                    value={translatedText}
                                    readOnly
                                    className="min-h-[120px] resize-none bg-muted/50 flex-grow"
                                />
                            </div>
                        </div>


                        {/* Translate Button */}
                        <div className="flex justify-center">
                            <Button
                                onClick={handleTranslate}
                                disabled={isTranslating || usageCount >= 3}
                                className="hero-button"
                            >
                                {isTranslating ? (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                        Translating...
                                    </>
                                ) : usageCount >= 3 ? (
                                    'Demo Limit Reached'
                                ) : (
                                    <>
                                        Translate
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </div>


                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default TranslationDemo;