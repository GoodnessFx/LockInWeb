import React, { useState, useEffect, useRef } from 'react';
import { MemoryCard } from './MemoryCard';
import { Memory } from '../types';
import { CalendarDays, Filter, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

interface TimelineProps {
  memories: Memory[];
  onMemoryClick: (memory: Memory) => void;
  isLoading?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
}

interface GroupedMemories {
  [key: string]: Memory[];
}

const groupMemoriesByDate = (memories: Memory[]): GroupedMemories => {
  const grouped: GroupedMemories = {};
  
  memories.forEach((memory) => {
    const date = memory.timestamp.toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(memory);
  });
  
  return grouped;
};

const formatDateHeader = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
};

export function Timeline({ 
  memories, 
  onMemoryClick, 
  isLoading = false, 
  hasMore = false, 
  onLoadMore 
}: TimelineProps) {
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const groupedMemories = groupMemoriesByDate(memories);
  const dateKeys = Object.keys(groupedMemories).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  );

  // Infinite scroll
  useEffect(() => {
    if (!hasMore || isLoading || !onLoadMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore]);

  if (memories.length === 0 && !isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CalendarDays className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-lg mb-2">No memories found</h3>
        <p className="text-muted-foreground max-w-md">
          Start adding content from your connected sources, or use the search to find existing memories.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Timeline Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h2 className="text-xl">Your Memory Timeline</h2>
          </div>
          <Badge variant="secondary">
            {memories.length} memories
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'timeline' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('timeline')}
          >
            Timeline
          </Button>
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
          >
            Grid
          </Button>
          <Button variant="ghost" size="sm">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="space-y-8">
        {dateKeys.map((dateKey) => (
          <div key={dateKey} className="relative">
            {/* Date Header */}
            <div className="sticky top-4 z-10 mb-4">
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2">
                <CalendarDays className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{formatDateHeader(dateKey)}</span>
                <Badge variant="outline" className="text-xs">
                  {groupedMemories[dateKey].length}
                </Badge>
              </div>
            </div>

            {/* Memory Cards */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 gap-4'
                : 'space-y-3'
            }>
              {groupedMemories[dateKey].map((memory) => (
                <MemoryCard
                  key={memory.id}
                  memory={memory}
                  onClick={() => onMemoryClick(memory)}
                  className="hover:scale-[1.01] transition-transform"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Trigger */}
      {hasMore && (
        <div ref={loadMoreRef} className="py-8">
          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              Scroll to load more memories...
            </div>
          )}
        </div>
      )}
    </div>
  );
}