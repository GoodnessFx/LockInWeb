import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  Send, 
  Sparkles, 
  User, 
  Brain, 
  Clock, 
  FileText,
  Image as ImageIcon,
  MessageCircle
} from 'lucide-react';
import { Memory } from '../types';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  relatedMemories?: Memory[];
  sources?: string[];
}

interface AIChatProps {
  onMemoryClick: (memory: Memory) => void;
  className?: string;
}

export function AIChat({ onMemoryClick, className = '' }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your personal AI memory assistant. I can help you search through your memories, summarize content, and find connections you might have missed. What would you like to explore?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: getAIResponse(input),
        timestamp: new Date(),
        relatedMemories: getMockMemories(),
        sources: ['Screenshots', 'Telegram', 'Notes']
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (query: string): string => {
    const responses = [
      "I found several relevant memories related to your query. Based on your saved content, here's what I discovered:",
      "Let me search through your memories... I found some interesting connections:",
      "Looking through your digital memories, I can see patterns and relevant information:",
      "Based on your saved content, here's a summary of what you might be looking for:"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getMockMemories = (): Memory[] => [
    {
      id: '1',
      type: 'screenshot',
      title: 'AI Research Notes',
      content: 'Screenshot of interesting AI research paper about edge computing...',
      source: 'Screenshots',
      timestamp: new Date(Date.now() - 86400000),
      tags: ['AI', 'research', 'edge-computing'],
      metadata: {}
    },
    {
      id: '2',
      type: 'message',
      title: 'Telegram: Toly startup discussion',
      content: 'Discussion about AI startups and market opportunities...',
      source: 'Telegram',
      timestamp: new Date(Date.now() - 172800000),
      tags: ['startups', 'AI', 'business'],
      metadata: {}
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <Card className={`flex flex-col h-[600px] ${className}`}>
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Brain className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3>AI Memory Assistant</h3>
          <p className="text-sm text-muted-foreground">Ask me anything about your memories</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.type === 'ai' && (
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            )}
            
            <div className={`max-w-[70%] ${message.type === 'user' ? 'order-1' : ''}`}>
              <div
                className={`p-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              
              <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {formatTime(message.timestamp)}
                {message.sources && (
                  <div className="flex gap-1">
                    {message.sources.map((source) => (
                      <Badge key={source} variant="outline" className="text-xs">
                        {source}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* Related Memories */}
              {message.relatedMemories && message.relatedMemories.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="text-xs text-muted-foreground">Related memories:</div>
                  {message.relatedMemories.map((memory) => (
                    <Card
                      key={memory.id}
                      className="p-3 cursor-pointer hover:shadow-sm transition-all"
                      onClick={() => onMemoryClick(memory)}
                    >
                      <div className="flex items-center gap-2">
                        {memory.type === 'screenshot' && <ImageIcon className="w-4 h-4" />}
                        {memory.type === 'message' && <MessageCircle className="w-4 h-4" />}
                        {memory.type === 'note' && <FileText className="w-4 h-4" />}
                        <span className="text-sm truncate">{memory.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {memory.content}
                      </p>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {message.type === 'user' && (
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-muted p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your memories..."
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            disabled={!input.trim() || isLoading}
            size="sm"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex gap-2 mt-2">
          {['Summarize this week', 'Find AI content', 'Show startup ideas'].map((suggestion) => (
            <Button
              key={suggestion}
              variant="ghost"
              size="sm"
              onClick={() => setInput(suggestion)}
              className="text-xs"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}