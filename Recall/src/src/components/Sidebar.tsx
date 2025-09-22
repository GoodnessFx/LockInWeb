import React from 'react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';
import { 
  Home,
  Search,
  Brain,
  Settings,
  Plug,
  TrendingUp,
  Clock,
  Star,
  Archive,
  Tag,
  BarChart3,
  HelpCircle,
  Crown
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isCollapsed?: boolean;
  className?: string;
}

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  badge?: string | number;
  isPremium?: boolean;
}

const mainItems: SidebarItem[] = [
  { id: 'home', label: 'Timeline', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'ai', label: 'AI Assistant', icon: Brain, badge: 'Beta' },
  { id: 'insights', label: 'Insights', icon: TrendingUp, isPremium: true },
];

const libraryItems: SidebarItem[] = [
  { id: 'recent', label: 'Recent', icon: Clock, badge: 12 },
  { id: 'favorites', label: 'Favorites', icon: Star, badge: 5 },
  { id: 'archived', label: 'Archived', icon: Archive },
  { id: 'tags', label: 'Tags', icon: Tag },
];

const settingsItems: SidebarItem[] = [
  { id: 'connectors', label: 'Connectors', icon: Plug, badge: '3/10' },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, isPremium: true },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help', icon: HelpCircle },
];

export function Sidebar({ 
  activeTab, 
  onTabChange, 
  isCollapsed = false, 
  className = '' 
}: SidebarProps) {
  const renderItem = (item: SidebarItem) => (
    <Button
      key={item.id}
      variant={activeTab === item.id ? "secondary" : "ghost"}
      size="sm"
      onClick={() => onTabChange(item.id)}
      className={`w-full justify-start gap-3 ${isCollapsed ? 'px-2' : 'px-3'}`}
      title={isCollapsed ? item.label : undefined}
    >
      <item.icon className="w-4 h-4 shrink-0" />
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left">{item.label}</span>
          <div className="flex items-center gap-1">
            {item.isPremium && (
              <Crown className="w-3 h-3 text-amber-500" />
            )}
            {item.badge && (
              <Badge variant="outline" className="text-xs">
                {item.badge}
              </Badge>
            )}
          </div>
        </>
      )}
    </Button>
  );

  return (
    <aside className={`flex flex-col h-full bg-background border-r ${className}`}>
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Main Navigation */}
        <div>
          {!isCollapsed && (
            <h3 className="text-sm text-muted-foreground mb-3 px-3">Main</h3>
          )}
          <div className="space-y-1">
            {mainItems.map(renderItem)}
          </div>
        </div>

        {/* Library */}
        <div>
          {!isCollapsed && (
            <h3 className="text-sm text-muted-foreground mb-3 px-3">Library</h3>
          )}
          <div className="space-y-1">
            {libraryItems.map(renderItem)}
          </div>
        </div>

        {/* Settings & Tools */}
        <div>
          {!isCollapsed && (
            <h3 className="text-sm text-muted-foreground mb-3 px-3">Tools</h3>
          )}
          <div className="space-y-1">
            {settingsItems.map(renderItem)}
          </div>
        </div>
      </div>

      {/* Premium Upgrade Card */}
      {!isCollapsed && (
        <div className="p-4 border-t">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-primary" />
              <span className="text-sm">Upgrade to Pro</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unlimited memories, advanced AI features, and priority sync.
            </p>
            <Button size="sm" className="w-full">
              Upgrade Now
            </Button>
          </Card>
        </div>
      )}

      {/* Usage Stats (Collapsed) */}
      {isCollapsed && (
        <div className="p-2 border-t">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">1.2K</div>
            <div className="text-xs text-muted-foreground">memories</div>
          </div>
        </div>
      )}
    </aside>
  );
}