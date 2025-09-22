import React from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { 
  MessageCircle, 
  Camera, 
  FileText, 
  Twitter, 
  Youtube, 
  Instagram,
  Chrome,
  Mic,
  Settings,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Connector } from '../types';

interface ConnectorCardProps {
  connector: Connector;
  onToggle: (id: string, enabled: boolean) => void;
  onConfigure: (id: string) => void;
  className?: string;
}

const getConnectorIcon = (name: string) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    telegram: MessageCircle,
    whatsapp: MessageCircle,
    screenshots: Camera,
    pdfs: FileText,
    twitter: Twitter,
    youtube: Youtube,
    instagram: Instagram,
    browser: Chrome,
    voice: Mic,
    notes: FileText,
  };
  
  const IconComponent = iconMap[name.toLowerCase()] || FileText;
  return <IconComponent className="w-6 h-6" />;
};

const getConnectorDescription = (name: string) => {
  const descriptions: Record<string, string> = {
    telegram: "Import saved messages and chat history",
    whatsapp: "Sync important conversations and media",
    screenshots: "Auto-capture and organize screenshots",
    pdfs: "Index and search through PDF documents",
    twitter: "Save tweets and threads",
    youtube: "Track watched videos and playlists",
    instagram: "Import saved posts and stories",
    browser: "Sync browsing history and bookmarks",
    voice: "Transcribe and search voice notes",
    notes: "Import notes from various apps",
  };
  
  return descriptions[name.toLowerCase()] || "Connect and sync your data";
};

const formatLastSync = (date?: Date) => {
  if (!date) return 'Never synced';
  
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 1) return 'Just synced';
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  
  return date.toLocaleDateString();
};

export function ConnectorCard({ 
  connector, 
  onToggle, 
  onConfigure, 
  className = '' 
}: ConnectorCardProps) {
  const isConfigured = Object.keys(connector.config).length > 0;
  const needsSetup = !isConfigured && connector.enabled;

  return (
    <Card className={`p-6 transition-all duration-200 hover:shadow-md ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {getConnectorIcon(connector.name)}
          </div>
          <div>
            <h3 className="capitalize">{connector.name}</h3>
            <p className="text-sm text-muted-foreground">
              {getConnectorDescription(connector.name)}
            </p>
          </div>
        </div>
        
        <Switch
          checked={connector.enabled}
          onCheckedChange={(checked) => onToggle(connector.id, checked)}
        />
      </div>

      <div className="space-y-3">
        {/* Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {needsSetup ? (
              <>
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-amber-600">Setup required</span>
              </>
            ) : isConfigured ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600">Connected</span>
              </>
            ) : (
              <>
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Not configured</span>
              </>
            )}
          </div>
          
          {connector.enabled && (
            <Badge variant="outline" className="text-xs">
              {formatLastSync(connector.lastSync)}
            </Badge>
          )}
        </div>

        {/* Configuration Status */}
        {connector.enabled && (
          <div className="flex gap-2">
            <Button
              variant={needsSetup ? "default" : "outline"}
              size="sm"
              onClick={() => onConfigure(connector.id)}
              className="flex-1"
            >
              <Settings className="w-4 h-4 mr-2" />
              {needsSetup ? "Setup" : "Configure"}
            </Button>
            
            {isConfigured && (
              <Button variant="ghost" size="sm">
                Sync Now
              </Button>
            )}
          </div>
        )}

        {/* Stats (if configured) */}
        {isConfigured && connector.enabled && (
          <div className="grid grid-cols-2 gap-4 pt-2 border-t">
            <div className="text-center">
              <div className="text-lg">{Math.floor(Math.random() * 1000)}</div>
              <div className="text-xs text-muted-foreground">Items</div>
            </div>
            <div className="text-center">
              <div className="text-lg">{Math.floor(Math.random() * 100)}%</div>
              <div className="text-xs text-muted-foreground">Indexed</div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}