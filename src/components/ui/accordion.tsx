
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Clock, Users } from 'lucide-react';

interface ReminderSettingsProps {
  onSettingsChange: (settings: ReminderSettings) => void;
}

export interface ReminderSettings {
  whatsappEnabled: boolean;
  telegramEnabled: boolean;
  emailEnabled: boolean;
  reminderTiming: string[];
  customMessage: string;
}

const ReminderSettings = ({ onSettingsChange }: ReminderSettingsProps) => {
  const [settings, setSettings] = useState<ReminderSettings>({
    whatsappEnabled: false,
    telegramEnabled: false,
    emailEnabled: true,
    reminderTiming: ['24h'],
    customMessage: ''
  });

  const updateSettings = (newSettings: Partial<ReminderSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    onSettingsChange(updated);
  };

  const toggleTiming = (timing: string) => {
    const newTiming = settings.reminderTiming.includes(timing)
      ? settings.reminderTiming.filter(t => t !== timing)
      : [...settings.reminderTiming, timing];
    updateSettings({ reminderTiming: newTiming });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MessageSquare className="w-5 h-5" />
          <span>Paramètres de Rappel</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Platform Selection */}
        <div>
          <Label className="text-base font-medium mb-3 block">Plateformes de Rappel</Label>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-green-600" />
                <span>WhatsApp</span>
              </div>
              <Switch
                checked={settings.whatsappEnabled}
                onCheckedChange={(checked) => updateSettings({ whatsappEnabled: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Telegram</span>
              </div>
              <Switch
                checked={settings.telegramEnabled}
                onCheckedChange={(checked) => updateSettings({ telegramEnabled: checked })}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-600" />
                <span>Email</span>
              </div>
              <Switch
                checked={settings.emailEnabled}
                onCheckedChange={(checked) => updateSettings({ emailEnabled: checked })}
              />
            </div>
          </div>
        </div>

        {/* Timing Selection */}
        <div>
          <Label className="text-base font-medium mb-3 block">Horaires de Rappel</Label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: '1week', label: '1 semaine avant' },
              { value: '3days', label: '3 jours avant' },
              { value: '24h', label: '24h avant' },
              { value: '2h', label: '2h avant' },
              { value: '1h', label: '1h avant' },
              { value: '30min', label: '30 min avant' }
            ].map((timing) => (
              <Button
                key={timing.value}
                variant={settings.reminderTiming.includes(timing.value) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleTiming(timing.value)}
                className="justify-start"
              >
                <Clock className="w-3 h-3 mr-2" />
                {timing.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Preview */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <Label className="text-sm font-medium mb-2 block">Aperçu du Message</Label>
          <div className="text-sm text-muted-foreground">
            🎉 <strong>Rappel d'Événement</strong><br />
            N'oubliez pas votre événement qui commence bientôt !<br />
            📅 Date et heure de l'événement<br />
            📍 Lieu de l'événement<br />
            <br />
            À bientôt ! 🙌
          </div>
        </div>

        {/* Summary */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>
            Les rappels seront envoyés aux participants inscrits selon vos paramètres
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReminderSettings;
