import React from 'react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { 
  MessageSquare, 
  Image as ImageIcon, 
  FileText, 
  Video, 
  Music, 
  Link, 
  Lightbulb,
  MoreHorizontal,
  Clock,
  Tag
} from 'lucide-react';
import { Memory, MemoryType } from '../types';

interface MemoryCardProps {
  memory: Memory;
  onClick?: () => void;
  className?: string;
}

const getMemoryIcon = (type: MemoryType) => {
  const iconMap = {
    message: MessageSquare,
    screenshot: ImageIcon,
    pdf: FileText,
    note: FileText,
    tweet: MessageSquare,
    video: Video,
    image: ImageIcon,
    audio: Music,
    bookmark: Link,
    idea: Lightbulb,
  };
  
  const IconComponent = iconMap[type] || FileText;
  return <IconComponent className="w-4 h-4" />;
};

const getMemoryColor = (type: MemoryType) => {
  const colorMap = {
    message: 'bg-blue-500/10 text-blue-600',
    screenshot: 'bg-green-500/10 text-green-600',
    pdf: 'bg-red-500/10 text-red-600',
    note: 'bg-yellow-500/10 text-yellow-600',
    tweet: 'bg-cyan-500/10 text-cyan-600',
    video: 'bg-purple-500/10 text-purple-600',
    image: 'bg-pink-500/10 text-pink-600',
    audio: 'bg-orange-500/10 text-orange-600',
    bookmark: 'bg-indigo-500/10 text-indigo-600',
    idea: 'bg-amber-500/10 text-amber-600',
  };
  
  return colorMap[type] || 'bg-gray-500/10 text-gray-600';
};

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return date.toLocaleDateString();
};

export function MemoryCard({ memory, onClick, className = '' }: MemoryCardProps) {
  const iconColorClass = getMemoryColor(memory.type);

  return (
    <Card 
      className={`p-4 cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-transparent hover:border-l-primary ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <div className={`p-2 rounded-lg ${iconColorClass}`}>
            {getMemoryIcon(memory.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="truncate">{memory.title}</h3>
              <Badge variant="outline" className="text-xs shrink-0">
                {memory.source}
              </Badge>
            </div>
            
            <p className="text-muted-foreground text-sm line-clamp-2 mb-2">
              {memory.content}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatTimeAgo(memory.timestamp)}
              </div>
              
              {memory.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  <span>{memory.tags.length} tags</span>
                </div>
              )}
            </div>
            
            {memory.tags.length > 0 && (
              <div className="flex gap-1 mt-2 flex-wrap">
                {memory.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {memory.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{memory.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
        
        <Button variant="ghost" size="sm" className="shrink-0" onClick={(e) => e.stopPropagation()}>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>
      
      {memory.summary && (
        <div className="mt-3 p-3 bg-muted/50 rounded-lg">
          <div className="text-xs text-muted-foreground mb-1">AI Summary</div>
          <p className="text-sm">{memory.summary}</p>
        </div>
      )}
    </Card>
  );
}