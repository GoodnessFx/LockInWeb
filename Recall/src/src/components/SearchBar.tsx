import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Filter } from 'lucide-react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onAISearch: (query: string) => void;
  suggestions?: string[];
  className?: string;
}

export function SearchBar({ onSearch, onAISearch, suggestions = [], className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isAIMode, setIsAIMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (isAIMode) {
        onAISearch(query);
      } else {
        onSearch(query);
      }
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          
          <Input
            ref={inputRef}
            type="text"
            placeholder={isAIMode ? "Ask AI about your memories..." : "Search your memories..."}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(e.target.value.length > 0);
            }}
            onFocus={() => setShowSuggestions(query.length > 0)}
            onKeyDown={handleKeyDown}
            className="pl-12 pr-32 py-3 text-lg rounded-2xl border-2 bg-background/80 backdrop-blur-sm focus:border-primary transition-all duration-200"
          />
          
          <div className="absolute right-2 flex items-center gap-2">
            <Button
              type="button"
              variant={isAIMode ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsAIMode(!isAIMode)}
              className="rounded-xl"
            >
              <Sparkles className="w-4 h-4" />
              AI
            </Button>
            
            <Button type="button" variant="ghost" size="sm" className="rounded-xl">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
          ⌘K
        </div>
      </form>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border rounded-xl shadow-lg z-50 p-2">
          <div className="text-xs text-muted-foreground mb-2 px-2">Recent searches</div>
          {suggestions.slice(0, 5).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
                if (isAIMode) {
                  onAISearch(suggestion);
                } else {
                  onSearch(suggestion);
                }
              }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent transition-colors text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {query && (
        <div className="flex gap-2 mt-3">
          <Badge variant="secondary">All sources</Badge>
          <Badge variant="outline">This week</Badge>
          <Badge variant="outline">Images</Badge>
        </div>
      )}
    </div>
  );
}