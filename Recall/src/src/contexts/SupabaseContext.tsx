import React, { createContext, useContext, useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

interface SupabaseContextType {
  supabase: SupabaseClient;
  connected: boolean;
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

const supabaseUrl = `https://${projectId}.supabase.co`;

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient(supabaseUrl, publicAnonKey));
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    // Test connection
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('kv_store_df3ca070').select('count').limit(1);
        if (!error) {
          setConnected(true);
          console.log('✅ Supabase connected successfully');
        } else {
          console.error('❌ Supabase connection error:', error);
        }
      } catch (err) {
        console.error('❌ Supabase connection failed:', err);
      }
    };

    testConnection();
  }, [supabase]);

  const value = {
    supabase,
    connected
  };

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  );
}

export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}