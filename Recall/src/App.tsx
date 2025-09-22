import React, { useState, useEffect } from 'react';
import { Header } from './src/components/Header';
import { Sidebar } from './src/components/Sidebar';
import { SearchBar } from './src/components/SearchBar';
import { Timeline } from './src/components/Timeline';
import { AIChat } from './src/components/AIChat';
import { ConnectorCard } from './src/components/ConnectorCard';
import { SettingsPanel } from './src/components/SettingsPanel';
import { AnalyticsPanel } from './src/components/AnalyticsPanel';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { SupabaseProvider } from './src/contexts/SupabaseContext';
import { LoginForm } from './src/components/LoginForm';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Skeleton } from './components/ui/skeleton';
import { useMemories } from './src/hooks/useMemories';
import { useConnectors } from './src/hooks/useConnectors';
import { useAnalytics } from './src/hooks/useAnalytics';
import { Memory } from './src/types';
import { 
  Brain, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Search,
  Plug,
  BarChart3,
  Crown,
  Settings,
  FileText,
  Video,
  Image
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const { user, loading: authLoading } = useAuth();
  
  const { 
    memories, 
    loading: memoriesLoading, 
    searchMemories, 
    aiSearch,
    createMemory,
    deleteMemory,
    updateMemory 
  } = useMemories();
  
  const { 
    connectors, 
    loading: connectorsLoading, 
    toggleConnector, 
    getConnectorStats,
    configureConnector 
  } = useConnectors();

  const {
    analytics,
    loading: analyticsLoading,
    getInsights,
    getUsageStats
  } = useAnalytics();

  const connectorStats = getConnectorStats();

  useEffect(() => {
    if (user) {
      toast.success(`Welcome back to Recall, ${user.name}!`);
    }
  }, [user]);

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
    console.log('Selected memory:', memory);
    
    // Track analytics
    if (analytics) {
      analytics.track('memory_viewed', {
        memory_id: memory.id,
        memory_type: memory.type,
        source: memory.source
      });
    }
  };

  const handleBookmarkAction = async (url: string, type: 'video' | 'image' | 'article') => {
    try {
      const memory = await createMemory({
        type: type === 'article' ? 'bookmark' : type,
        title: `Bookmarked ${type}`,
        content: url,
        source: 'manual',
        metadata: {
          url,
          bookmarked_at: new Date().toISOString(),
          media_type: type
        }
      });
      
      toast.success(`${type} bookmarked successfully!`);
      return memory;
    } catch (error) {
      toast.error('Failed to bookmark content');
      console.error('Bookmark error:', error);
    }
  };

  const renderMemoryPreview = (memory: Memory) => {
    if (memory.type === 'video' && memory.metadata?.url) {
      return (
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <video 
            src={memory.metadata.url} 
            controls 
            className="w-full h-full object-cover"
            poster={memory.metadata.thumbnail}
          >
            <source src={memory.metadata.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    
    if (memory.type === 'image' && memory.metadata?.url) {
      return (
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={memory.metadata.url} 
            alt={memory.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );
    }
    
    return null;
  };

  const renderMainContent = () => {
    if (authLoading || memoriesLoading) {
      return (
        <div className="space-y-6">
          <Skeleton className="h-12 w-full" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <Skeleton key={i} className="h-24" />
            ))}
          </div>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="hidden md:block">
              <SearchBar 
                onSearch={searchMemories}
                onAISearch={aiSearch}
                suggestions={['AI research', 'startup ideas', 'meeting notes', 'bookmarked videos']}
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl">{memories.length}</div>
                    <div className="text-sm text-muted-foreground">Total Memories</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Plug className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl">{connectorStats.enabled}</div>
                    <div className="text-sm text-muted-foreground">Active Sources</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl">{analytics?.insights?.length || 0}</div>
                    <div className="text-sm text-muted-foreground">AI Insights</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-2xl">+{analytics?.weeklyGrowth || 0}%</div>
                    <div className="text-sm text-muted-foreground">This Week</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const url = prompt('Enter video URL to bookmark:');
                  if (url) handleBookmarkAction(url, 'video');
                }}
              >
                <Video className="w-4 h-4 mr-2" />
                Bookmark Video
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const url = prompt('Enter image URL to bookmark:');
                  if (url) handleBookmarkAction(url, 'image');
                }}
              >
                <Image className="w-4 h-4 mr-2" />
                Bookmark Image
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  const url = prompt('Enter article URL to bookmark:');
                  if (url) handleBookmarkAction(url, 'article');
                }}
              >
                <FileText className="w-4 h-4 mr-2" />
                Bookmark Article
              </Button>
            </div>

            {/* Timeline */}
            <Timeline
              memories={memories}
              onMemoryClick={handleMemoryClick}
              isLoading={memoriesLoading}
              renderPreview={renderMemoryPreview}
            />
          </div>
        );

      case 'search':
        return (
          <div className="space-y-6">
            <div className="text-center py-8">
              <SearchBar 
                onSearch={searchMemories}
                onAISearch={aiSearch}
                suggestions={['AI research', 'startup ideas', 'meeting notes', 'videos', 'images']}
                className="mb-8"
              />
              
              {memories.length > 0 ? (
                <Timeline
                  memories={memories}
                  onMemoryClick={handleMemoryClick}
                  isLoading={memoriesLoading}
                  renderPreview={renderMemoryPreview}
                />
              ) : (
                <div className="py-16">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg mb-2">Search Your Memories</h3>
                  <p className="text-muted-foreground">
                    Use natural language to find anything in your digital life.
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl">AI Assistant</h2>
                  <p className="text-muted-foreground">
                    Chat with your memories using natural language
                  </p>
                </div>
                <Badge variant="secondary">Beta</Badge>
              </div>
            </div>
            
            <AIChat 
              onMemoryClick={handleMemoryClick}
              memories={memories}
              onCreateMemory={createMemory}
            />
          </div>
        );

      case 'connectors':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl mb-2">Data Connectors</h2>
                <p className="text-muted-foreground">
                  Connect your apps and services to automatically import memories
                </p>
              </div>
              <div className="flex gap-2">
                <Badge variant="outline">
                  {connectorStats.enabled}/{connectorStats.total} Active
                </Badge>
                {connectorStats.needingSetup > 0 && (
                  <Badge variant="destructive">
                    {connectorStats.needingSetup} Need Setup
                  </Badge>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connectors.map((connector) => (
                <ConnectorCard
                  key={connector.id}
                  connector={connector}
                  onToggle={toggleConnector}
                  onConfigure={configureConnector}
                />
              ))}
            </div>
          </div>
        );

      case 'analytics':
        return (
          <AnalyticsPanel 
            analytics={analytics}
            loading={analyticsLoading}
            memories={memories}
          />
        );

      case 'insights':
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <div>
                <h2 className="text-2xl">AI Insights</h2>
                <p className="text-muted-foreground">
                  Discover patterns and connections in your memories
                </p>
              </div>
              {!user?.isPremium && <Crown className="w-5 h-5 text-amber-500" />}
            </div>

            {user?.isPremium ? (
              <div className="space-y-4">
                {analytics?.insights?.map((insight, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg mb-2">{insight.title}</h3>
                        <p className="text-muted-foreground mb-3">{insight.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">
                            {(insight.confidence * 100).toFixed(0)}% confidence
                          </Badge>
                          <Badge variant="outline">
                            {insight.relatedMemories.length} related memories
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                )) || (
                  <Card className="p-8 text-center">
                    <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg mb-2">Analyzing Your Memories</h3>
                    <p className="text-muted-foreground">
                      We're processing your data to generate insights. Check back soon!
                    </p>
                  </Card>
                )}
              </div>
            ) : (
              <div className="text-center py-16">
                <Crown className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2">Premium Feature</h3>
                <p className="text-muted-foreground mb-6">
                  Upgrade to unlock AI insights and advanced analytics
                </p>
                <Button>
                  <Crown className="w-4 h-4 mr-2" />
                  Upgrade to Pro
                </Button>
              </div>
            )}
          </div>
        );

      case 'settings':
        return <SettingsPanel user={user} />;

      default:
        return (
          <div className="text-center py-16">
            <h3 className="text-lg mb-2">Coming Soon</h3>
            <p className="text-muted-foreground">
              This feature is under development.
            </p>
          </div>
        );
    }
  };

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-200 hidden md:block`}>
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCollapsed={isSidebarCollapsed}
          user={user}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          user={user}
          onMenuClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          onSearchClick={() => setActiveTab('search')}
          onSettingsClick={() => setActiveTab('settings')}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6">
            {renderMainContent()}
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-2">
        <div className="flex justify-around">
          {[
            { id: 'home', icon: Clock, label: 'Timeline' },
            { id: 'search', icon: Search, label: 'Search' },
            { id: 'ai', icon: Brain, label: 'AI' },
            { id: 'connectors', icon: Plug, label: 'Sources' },
            { id: 'analytics', icon: BarChart3, label: 'Analytics' },
          ].map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(item.id)}
              className="flex-col h-auto py-2"
            >
              <item.icon className="w-4 h-4 mb-1" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SupabaseProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
}