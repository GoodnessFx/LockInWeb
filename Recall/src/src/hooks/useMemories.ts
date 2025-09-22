import { useState, useEffect } from 'react';
import { Memory, MemoryType } from '../types';
import { useSupabase } from '../contexts/SupabaseContext';
import { useAuth } from '../contexts/AuthContext';

// Mock data for demonstration
const generateMockMemories = (): Memory[] => {
  const types: MemoryType[] = ['message', 'screenshot', 'pdf', 'note', 'tweet', 'video', 'image', 'audio', 'bookmark', 'idea'];
  const sources = ['Telegram', 'WhatsApp', 'Screenshots', 'Notes', 'Twitter', 'YouTube', 'Instagram', 'Browser', 'Voice Notes'];
  const titles = [
    'AI Research Discussion',
    'Startup Ideas Brainstorm',
    'Weekly Team Meeting Notes',
    'Investment Thesis Document',
    'Product Design Screenshots',
    'Interesting Tweet Thread',
    'Tech Conference Video',
    'Market Analysis PDF',
    'Voice Note - Coffee Chat',
    'Bookmark - Useful Tool',
    'Random Shower Thought',
    'Meeting with Investors',
    'Code Review Notes',
    'Design System Updates',
    'Customer Feedback Summary'
  ];

  const memories: Memory[] = [];
  
  for (let i = 0; i < 50; i++) {
    const type = types[Math.floor(Math.random() * types.length)];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    
    memories.push({
      id: `memory-${i}`,
      type,
      title: `${title} ${i + 1}`,
      content: `This is sample content for ${title.toLowerCase()}. It contains detailed information about the topic and provides context for search and AI analysis. The content includes relevant keywords and meaningful information that would be useful for semantic search.`,
      source,
      timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
      tags: ['AI', 'startup', 'design', 'development', 'business'].slice(0, Math.floor(Math.random() * 3) + 1),
      metadata: {
        size: Math.floor(Math.random() * 1000000),
        format: type === 'pdf' ? 'PDF' : type === 'image' ? 'PNG' : 'TEXT'
      },
      summary: Math.random() > 0.7 ? `AI-generated summary: This ${type} contains important information about ${title.toLowerCase()} and related topics.` : undefined
    });
  }

  return memories.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

export function useMemories() {
  const { supabase, connected } = useSupabase();
  const { user } = useAuth();
  const [memories, setMemories] = useState<Memory[]>([]);
  const [filteredMemories, setFilteredMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Load memories from Supabase or use mock data
  useEffect(() => {
    const loadMemories = async () => {
      setLoading(true);
      
      if (connected && user) {
        try {
          // Try to load from backend
          const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/memories`, {
            headers: {
              'Authorization': `Bearer ${user.id}`,
            }
          });

          if (response.ok) {
            const data = await response.json();
            setMemories(data.memories || []);
            setFilteredMemories(data.memories || []);
          } else {
            throw new Error('Failed to load memories');
          }
        } catch (error) {
          console.error('Error loading memories:', error);
          // Fallback to mock data
          const mockMemories = generateMockMemories();
          setMemories(mockMemories);
          setFilteredMemories(mockMemories);
        }
      } else {
        // Use mock data when not connected or no user
        const mockMemories = generateMockMemories();
        setMemories(mockMemories);
        setFilteredMemories(mockMemories);
      }
      
      setLoading(false);
    };

    loadMemories();
  }, [connected, user]);

  // Filter memories based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredMemories(memories);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = memories.filter(memory => 
      memory.title.toLowerCase().includes(query) ||
      memory.content.toLowerCase().includes(query) ||
      memory.source.toLowerCase().includes(query) ||
      memory.tags.some(tag => tag.toLowerCase().includes(query))
    );

    setFilteredMemories(filtered);
  }, [searchQuery, memories]);

  const searchMemories = (query: string) => {
    setSearchQuery(query);
  };

  const aiSearch = async (query: string) => {
    setLoading(true);
    
    if (connected && user) {
      try {
        // Use AI/vector search from backend
        const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/search/ai`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${user.id}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query })
        });

        if (response.ok) {
          const data = await response.json();
          setFilteredMemories(data.results || []);
          setSearchQuery(query);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('AI search error:', error);
      }
    }
    
    // Fallback to client-side semantic search
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const keywords = query.toLowerCase().split(' ');
    const semanticResults = memories.filter(memory => {
      const content = (memory.title + ' ' + memory.content + ' ' + memory.tags.join(' ')).toLowerCase();
      return keywords.some(keyword => content.includes(keyword));
    });

    setFilteredMemories(semanticResults);
    setSearchQuery(query);
    setLoading(false);
  };

  const getMemoryById = (id: string): Memory | undefined => {
    return memories.find(memory => memory.id === id);
  };

  const createMemory = async (memory: Omit<Memory, 'id' | 'timestamp'>): Promise<Memory> => {
    const newMemory: Memory = {
      ...memory,
      id: `memory-${Date.now()}`,
      timestamp: new Date()
    };
    
    if (connected && user) {
      try {
        const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/memories`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${user.id}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMemory)
        });

        if (response.ok) {
          const data = await response.json();
          setMemories(prev => [data.memory, ...prev]);
          return data.memory;
        }
      } catch (error) {
        console.error('Error creating memory:', error);
      }
    }
    
    // Fallback to local state
    setMemories(prev => [newMemory, ...prev]);
    return newMemory;
  };

  const updateMemory = async (id: string, updates: Partial<Memory>) => {
    if (connected && user) {
      try {
        const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/memories/${id}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${user.id}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates)
        });

        if (response.ok) {
          setMemories(prev => prev.map(memory => 
            memory.id === id ? { ...memory, ...updates } : memory
          ));
          return;
        }
      } catch (error) {
        console.error('Error updating memory:', error);
      }
    }
    
    // Fallback to local state
    setMemories(prev => prev.map(memory => 
      memory.id === id ? { ...memory, ...updates } : memory
    ));
  };

  const deleteMemory = async (id: string) => {
    if (connected && user) {
      try {
        const response = await fetch(`https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/make-server-df3ca070/memories/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.id}`,
          }
        });

        if (response.ok) {
          setMemories(prev => prev.filter(memory => memory.id !== id));
          return;
        }
      } catch (error) {
        console.error('Error deleting memory:', error);
      }
    }
    
    // Fallback to local state
    setMemories(prev => prev.filter(memory => memory.id !== id));
  };

  return {
    memories: filteredMemories,
    allMemories: memories,
    loading,
    searchQuery,
    searchMemories,
    aiSearch,
    getMemoryById,
    createMemory,
    updateMemory,
    deleteMemory
  };
}