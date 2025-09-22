import { useState, useEffect } from 'react';
import { Connector } from '../types';
import { useSupabase } from '../contexts/SupabaseContext';
import { useAuth } from '../contexts/AuthContext';

const generateMockConnectors = (): Connector[] => {
  return [
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'message-circle',
      enabled: true,
      lastSync: new Date(Date.now() - 3600000), // 1 hour ago
      config: {
        botToken: 'configured',
        chatIds: ['saved_messages']
      }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'message-circle',
      enabled: false,
      config: {}
    },
    {
      id: 'screenshots',
      name: 'Screenshots',
      icon: 'camera',
      enabled: true,
      lastSync: new Date(Date.now() - 1800000), // 30 minutes ago
      config: {
        autoCapture: true,
        folder: '/Screenshots'
      }
    },
    {
      id: 'pdfs',
      name: 'PDFs',
      icon: 'file-text',
      enabled: true,
      lastSync: new Date(Date.now() - 7200000), // 2 hours ago
      config: {
        watchFolders: ['/Documents', '/Downloads']
      }
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'twitter',
      enabled: false,
      config: {}
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: 'youtube',
      enabled: true,
      lastSync: new Date(Date.now() - 14400000), // 4 hours ago
      config: {
        apiKey: 'configured',
        trackWatchHistory: true
      }
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'instagram',
      enabled: false,
      config: {}
    },
    {
      id: 'browser',
      name: 'Browser History',
      icon: 'chrome',
      enabled: true,
      lastSync: new Date(Date.now() - 900000), // 15 minutes ago
      config: {
        browsers: ['chrome', 'firefox'],
        includeBookmarks: true
      }
    },
    {
      id: 'voice',
      name: 'Voice Notes',
      icon: 'mic',
      enabled: false,
      config: {}
    },
    {
      id: 'notes',
      name: 'Notes Apps',
      icon: 'file-text',
      enabled: true,
      lastSync: new Date(Date.now() - 5400000), // 1.5 hours ago
      config: {
        apps: ['notion', 'obsidian', 'apple-notes']
      }
    }
  ];
};

export function useConnectors() {
  const { supabase, connected } = useSupabase();
  const { user } = useAuth();
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConnectors = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockConnectors = generateMockConnectors();
      setConnectors(mockConnectors);
      setLoading(false);
    };

    loadConnectors();
  }, []);

  const toggleConnector = async (id: string, enabled: boolean) => {
    setConnectors(prev => prev.map(connector => 
      connector.id === id 
        ? { ...connector, enabled }
        : connector
    ));

    // In production, this would sync with backend
    console.log(`Toggled connector ${id}: ${enabled}`);
  };

  const configureConnector = async (id: string, config: Record<string, any>) => {
    setConnectors(prev => prev.map(connector => 
      connector.id === id 
        ? { ...connector, config, lastSync: new Date() }
        : connector
    ));

    // In production, this would save config to backend
    console.log(`Configured connector ${id}:`, config);
  };

  const syncConnector = async (id: string) => {
    setConnectors(prev => prev.map(connector => 
      connector.id === id 
        ? { ...connector, lastSync: new Date() }
        : connector
    ));

    // In production, this would trigger sync with the external service
    console.log(`Syncing connector ${id}`);
  };

  const getConnector = (id: string): Connector | undefined => {
    return connectors.find(connector => connector.id === id);
  };

  const getEnabledConnectors = (): Connector[] => {
    return connectors.filter(connector => connector.enabled);
  };

  const getConnectorStats = () => {
    const total = connectors.length;
    const enabled = connectors.filter(c => c.enabled).length;
    const configured = connectors.filter(c => Object.keys(c.config).length > 0).length;
    const needingSetup = connectors.filter(c => c.enabled && Object.keys(c.config).length === 0).length;

    return {
      total,
      enabled,
      configured,
      needingSetup
    };
  };

  return {
    connectors,
    loading,
    toggleConnector,
    configureConnector,
    syncConnector,
    getConnector,
    getEnabledConnectors,
    getConnectorStats
  };
}