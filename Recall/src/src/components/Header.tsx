import React from 'react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { 
  Brain,
  Settings,
  Bell,
  Crown,
  Menu,
  Sun,
  Moon,
  Search
} from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  onSearchClick?: () => void;
  onSettingsClick?: () => void;
  user?: {
    name: string;
    email: string;
    avatar?: string;
    isPremium: boolean;
  };
  className?: string;
}

export function Header({ 
  onMenuClick, 
  onSearchClick, 
  onSettingsClick,
  user,
  className = '' 
}: HeaderProps) {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm ${className}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl">MindVault</h1>
                <p className="text-xs text-muted-foreground">Your Personal Memory OS</p>
              </div>
            </div>
          </div>

          {/* Center Section - Search (Mobile) */}
          <div className="flex-1 max-w-md mx-4 md:hidden">
            <Button
              variant="ghost"
              onClick={onSearchClick}
              className="w-full justify-start text-muted-foreground"
            >
              <Search className="w-4 h-4 mr-2" />
              Search memories...
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSettingsClick}
            >
              <Settings className="w-5 h-5" />
            </Button>

            {/* User Profile */}
            {user && (
              <div className="flex items-center gap-3 pl-3 border-l">
                <div className="hidden sm:block text-right">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{user.name}</span>
                    {user.isPremium && (
                      <Badge variant="default" className="text-xs">
                        <Crown className="w-3 h-3 mr-1" />
                        Pro
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}