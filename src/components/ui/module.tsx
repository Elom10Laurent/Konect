import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import Analyze from './analyse-demo';
import Converse from './converse-demo';
import Speak from './speack-demo';
import Transcribe from './transcribe-demo';
import { Button } from './button';
import { Copy, Eye, EyeOff, Key, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

// Liste des modules avec leur clé, nom et composant
const MODULES = [
    { key: 'transcribe', name: 'Transcribe', component: Transcribe },
    { key: 'converse', name: 'Converse', component: Converse },
    { key: 'analyze', name: 'Analyze', component: Analyze },
    { key: 'speak', name: 'Speak', component: Speak },
];

export function ModulesTab() {
    const { toast } = useToast();
    const isMobile = useIsMobile();
    const [showApiKey, setShowApiKey] = useState(false);
    const [activeModuleKey, setActiveModuleKey] = useState(null);

    const apiKey = 'yodi_sk_1234567890abcdef';
    const activeModule = MODULES.find((mod) => mod.key === activeModuleKey);
    const copyApiKey = () => {
        navigator.clipboard.writeText(apiKey);
        toast({
            title: "API Key Copied",
            description: "Your API key has been copied to clipboard",
        });
    };

    return (
        <div className='space-y-6'>
            {apiKey && (<div className="p-4 border rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start md:items-center gap-3 flex-1 min-w-0">
                    <div className="min-w-0">
                        <p className="font-medium text-2xl">Your Key</p>
                        <p className="text-md text-muted-foreground break-words whitespace-normal md:whitespace-nowrap font-mono truncate">
                            {showApiKey ? apiKey : '••••••••••••••••••••••••••••••••'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="ghost" size="sm" onClick={() => setShowApiKey(!showApiKey)}>
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={copyApiKey}>
                        <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            )}



            {isMobile ? (<div className="space-y-6">
                {MODULES.map(({ key, name, component: Component }) => (
                    <Card key={key} className="shadow-md">
                        <CardHeader>
                            <CardTitle>{name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button onClick={() => setActiveModuleKey(activeModuleKey === key ? null : key)}>
                                {activeModuleKey === key ? 'Close Test' : 'Test'}
                            </Button>

                            {activeModuleKey === key && (
                                <div className="mt-4 border-t pt-4">
                                    <Component />
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>) : (
                <>

                    <div className="w-full grid md:grid-cols-4 gap-6">
                        {MODULES.map(({ key, name }) => (
                            <Card key={key}>
                                <CardHeader>
                                    <CardTitle>{name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button onClick={() => setActiveModuleKey(activeModuleKey === key ? null : key)}>
                                        {activeModuleKey === key ? 'Close Test' : 'Test'}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-cols gap-6">
                        <div className=" w-full ">
                            {activeModule && (() => {
                                const Component = activeModule.component;
                                return <Component />;
                            })()}
                        </div>
                    </div>
                </>
            )}




        </div>
    );
}
