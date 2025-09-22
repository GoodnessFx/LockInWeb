// Core types for Recall - Personal Memory OS

export interface Memory {
  id: string;
  type: MemoryType;
  title: string;
  content: string;
  source: string;
  timestamp: Date;
  tags: string[];
  metadata: Record<string, any>;
  embeddings?: number[];
  summary?: string;
}

export type MemoryType = 
  | 'message'
  | 'screenshot'
  | 'pdf'
  | 'note'
  | 'tweet'
  | 'video'
  | 'image'
  | 'audio'
  | 'bookmark'
  | 'idea';

export interface Connector {
  id: string;
  name: string;
  icon: string;
  enabled: boolean;
  lastSync?: Date;
  config: Record<string, any>;
}

export interface SearchResult {
  memory: Memory;
  relevanceScore: number;
  matchHighlights: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  isPremium: boolean;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  defaultView: 'timeline' | 'grid' | 'list';
  autoSync: boolean;
  notifications: boolean;
}

export interface AIInsight {
  id: string;
  type: 'summary' | 'pattern' | 'suggestion' | 'connection';
  title: string;
  description: string;
  relatedMemories: string[];
  confidence: number;
  timestamp: Date;
}

export interface Analytics {
  insights: AIInsight[];
  weeklyGrowth: number;
  totalQueries: number;
  topSources: Array<{ name: string; count: number }>;
  memoryTypes: Array<{ type: MemoryType; count: number }>;
  searchPatterns: Array<{ query: string; frequency: number }>;
  track: (event: string, properties?: Record<string, any>) => void;
}

export interface BookmarkData {
  url: string;
  title: string;
  description?: string;
  thumbnail?: string;
  mediaType: 'video' | 'image' | 'article';
  domain: string;
  tags: string[];
}