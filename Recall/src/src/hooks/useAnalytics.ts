import { useState, useEffect } from 'react';
import { Analytics, Memory } from '../types';
import { useSupabase } from '../contexts/SupabaseContext';
import { useAuth } from '../contexts/AuthContext';

export function useAnalytics() {
  const { supabase, connected } = useSupabase();
  const { user } = useAuth();
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);

  // Generate mock analytics data
  const generateMockAnalytics = (): Analytics => {
    return {
      insights: [
        {
          id: 'insight-1',
          type: 'pattern',
          title: 'Peak Productivity Hours',
          description: 'You create most memories between 2-4 PM on weekdays, suggesting this is your most productive time.',
          relatedMemories: ['mem-1', 'mem-2', 'mem-3'],
          confidence: 0.87,
          timestamp: new Date()
        },
        {
          id: 'insight-2',
          type: 'suggestion',
          title: 'Underutilized Connections',
          description: 'You have many screenshots but few organized notes. Consider converting screenshots to structured notes.',
          relatedMemories: ['mem-4', 'mem-5'],
          confidence: 0.73,
          timestamp: new Date()
        },
        {
          id: 'insight-3',
          type: 'connection',
          title: 'Related Content Clusters',
          description: 'Found strong connections between your AI research and startup idea memories.',
          relatedMemories: ['mem-6', 'mem-7', 'mem-8', 'mem-9'],
          confidence: 0.92,
          timestamp: new Date()
        }
      ],
      weeklyGrowth: 15,
      totalQueries: 127,
      topSources: [
        { name: 'Screenshots', count: 45 },
        { name: 'Browser', count: 32 },
        { name: 'Notes', count: 28 },
        { name: 'Messages', count: 22 }
      ],
      memoryTypes: [
        { type: 'screenshot', count: 45 },
        { type: 'bookmark', count: 32 },
        { type: 'note', count: 28 },
        { type: 'message', count: 22 },
        { type: 'image', count: 18 },
        { type: 'video', count: 12 }
      ],
      searchPatterns: [
        { query: 'AI research', frequency: 23 },
        { query: 'startup ideas', frequency: 18 },
        { query: 'meeting notes', frequency: 15 },
        { query: 'code snippets', frequency: 12 },
        { query: 'design inspiration', frequency: 9 }
      ],
      track: (event: string, properties?: Record<string, any>) => {
        if (connected && user) {
          // Send analytics event to backend
          fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/analytics/track`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${user.id}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              event,
              properties: {
                ...properties,
                timestamp: new Date().toISOString(),
                user_id: user.id
              }
            })
          }).catch(err => console.error('Analytics tracking error:', err));
        }
        
        // Also log locally for debugging
        console.log('📊 Analytics Event:', event, properties);
      }
    };
  };

  useEffect(() => {
    const loadAnalytics = async () => {
      setLoading(true);
      
      if (connected && user) {
        try {
          const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/analytics`, {
            headers: {
              'Authorization': `Bearer ${user.id}`,
            }
          });

          if (response.ok) {
            const data = await response.json();
            setAnalytics(data.analytics);
          } else {
            throw new Error('Failed to load analytics');
          }
        } catch (error) {
          console.error('Error loading analytics:', error);
          // Fallback to mock data
          setAnalytics(generateMockAnalytics());
        }
      } else {
        // Use mock data when not connected
        setAnalytics(generateMockAnalytics());
      }
      
      setLoading(false);
    };

    loadAnalytics();
  }, [connected, user]);

  const getInsights = () => {
    return analytics?.insights || [];
  };

  const getUsageStats = () => {
    if (!analytics) return null;
    
    return {
      totalQueries: analytics.totalQueries,
      weeklyGrowth: analytics.weeklyGrowth,
      topSources: analytics.topSources,
      memoryTypes: analytics.memoryTypes,
      searchPatterns: analytics.searchPatterns
    };
  };

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (analytics?.track) {
      analytics.track(event, properties);
    }
  };

  const generateInsights = async (memories: Memory[]) => {
    if (!connected || !user) return;
    
    try {
      const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/analytics/insights`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.id}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ memories })
      });

      if (response.ok) {
        const data = await response.json();
        setAnalytics(prev => prev ? {
          ...prev,
          insights: data.insights
        } : null);
      }
    } catch (error) {
      console.error('Error generating insights:', error);
    }
  };

  return {
    analytics,
    loading,
    getInsights,
    getUsageStats,
    trackEvent,
    generateInsights
  };
}