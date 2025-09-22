import React, { createContext, useContext, useEffect, useState } from 'react';
import { User as SupabaseUser, Session } from '@supabase/supabase-js';
import { useSupabase } from './SupabaseContext';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session?.user) {
        await loadUserProfile(session.user);
      }
      
      setLoading(false);
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        
        if (session?.user) {
          await loadUserProfile(session.user);
        } else {
          setUser(null);
        }
        
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase]);

  const loadUserProfile = async (supabaseUser: SupabaseUser) => {
    try {
      // Try to load user profile from our backend
      const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID || projectId}.supabase.co/functions/v1/make-server-df3ca070/user/profile`, {
        headers: {
          'Authorization': `Bearer ${supabaseUser.access_token}`,
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const profile = await response.json();
        setUser(profile);
      } else {
        // Fallback to basic user info from Supabase
        const basicUser: User = {
          id: supabaseUser.id,
          email: supabaseUser.email || '',
          name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
          avatar: supabaseUser.user_metadata?.avatar_url,
          isPremium: false,
          preferences: {
            theme: 'system',
            defaultView: 'timeline',
            autoSync: true,
            notifications: true
          }
        };
        setUser(basicUser);
      }
    } catch (error) {
      console.error('Error loading user profile:', error);
      // Fallback user
      const basicUser: User = {
        id: supabaseUser.id,
        email: supabaseUser.email || '',
        name: supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0] || 'User',
        avatar: supabaseUser.user_metadata?.avatar_url,
        isPremium: false,
        preferences: {
          theme: 'system',
          defaultView: 'timeline',
          autoSync: true,
          notifications: true
        }
      };
      setUser(basicUser);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, name: string) => {
    // First create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        }
      }
    });
    
    if (error) throw error;

    // Then create user profile in our backend
    if (data.user) {
      try {
        await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID || projectId}.supabase.co/functions/v1/make-server-df3ca070/user/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            name
          })
        });
      } catch (backendError) {
        console.error('Backend user creation error:', backendError);
        // Continue with auth flow even if backend fails
      }
    }
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });
    
    if (error) throw error;
  };

  const value = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}