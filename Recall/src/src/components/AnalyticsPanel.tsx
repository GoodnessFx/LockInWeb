import React from 'react';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Skeleton } from '../../components/ui/skeleton';
import { Progress } from '../../components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Search, 
  Clock, 
  Zap,
  Calendar,
  Target,
  Activity,
  Brain
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { Analytics, Memory } from '../types';

interface AnalyticsPanelProps {
  analytics: Analytics | null;
  loading: boolean;
  memories: Memory[];
}

export function AnalyticsPanel({ analytics, loading, memories }: AnalyticsPanelProps) {
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => (
            <Skeleton key={i} className="h-80" />
          ))}
        </div>
      </div>
    );
  }

  // Generate mock analytics data if none provided
  const mockAnalytics = analytics || {
    insights: [],
    weeklyGrowth: 15,
    totalQueries: 127,
    topSources: [
      { name: 'Screenshots', count: 45 },
      { name: 'Browser', count: 32 },
      { name: 'Notes', count: 28 },
      { name: 'Messages', count: 22 }
    ],
    memoryTypes: [
      { type: 'screenshot' as const, count: 45 },
      { type: 'bookmark' as const, count: 32 },
      { type: 'note' as const, count: 28 },
      { type: 'message' as const, count: 22 },
      { type: 'image' as const, count: 18 },
      { type: 'video' as const, count: 12 }
    ],
    searchPatterns: [
      { query: 'AI research', frequency: 23 },
      { query: 'startup ideas', frequency: 18 },
      { query: 'meeting notes', frequency: 15 },
      { query: 'code snippets', frequency: 12 },
      { query: 'design inspiration', frequency: 9 }
    ],
    track: () => {}
  };

  // Calculate additional metrics
  const totalMemories = memories.length;
  const memoriesThisWeek = memories.filter(m => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return new Date(m.timestamp) > weekAgo;
  }).length;

  const avgMemoriesPerDay = memoriesThisWeek / 7;
  const mostActiveDay = 'Tuesday'; // Could calculate this from actual data

  // Chart data
  const weeklyData = [
    { day: 'Mon', memories: 12, searches: 8 },
    { day: 'Tue', memories: 19, searches: 15 },
    { day: 'Wed', memories: 8, searches: 6 },
    { day: 'Thu', memories: 15, searches: 12 },
    { day: 'Fri', memories: 22, searches: 18 },
    { day: 'Sat', memories: 6, searches: 4 },
    { day: 'Sun', memories: 9, searches: 7 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-2xl">Analytics</h2>
          <p className="text-muted-foreground">
            Insights into your memory patterns and usage
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl">{totalMemories}</div>
              <div className="text-sm text-muted-foreground">Total Memories</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl">+{mockAnalytics.weeklyGrowth}%</div>
              <div className="text-sm text-muted-foreground">Weekly Growth</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Search className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl">{mockAnalytics.totalQueries}</div>
              <div className="text-sm text-muted-foreground">Total Searches</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-2xl">{avgMemoriesPerDay.toFixed(1)}</div>
              <div className="text-sm text-muted-foreground">Avg/Day</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5" />
            <h3 className="text-lg">Weekly Activity</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="memories" fill="#3b82f6" name="Memories" />
              <Bar dataKey="searches" fill="#10b981" name="Searches" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Memory Types Distribution */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5" />
            <h3 className="text-lg">Memory Types</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={mockAnalytics.memoryTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {mockAnalytics.memoryTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Sources */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5" />
            <h3 className="text-lg">Top Sources</h3>
          </div>
          <div className="space-y-4">
            {mockAnalytics.topSources.map((source, index) => (
              <div key={source.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span>{source.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress 
                    value={(source.count / mockAnalytics.topSources[0].count) * 100} 
                    className="w-20" 
                  />
                  <span className="text-sm text-muted-foreground w-8">{source.count}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Search Patterns */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5" />
            <h3 className="text-lg">Popular Searches</h3>
          </div>
          <div className="space-y-3">
            {mockAnalytics.searchPatterns.map((pattern, index) => (
              <div key={pattern.query} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-xs">
                    #{index + 1}
                  </Badge>
                  <span className="text-sm">{pattern.query}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(pattern.frequency / mockAnalytics.searchPatterns[0].frequency) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-6">{pattern.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Insights Summary */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-5 h-5" />
          <h3 className="text-lg">AI Insights Summary</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-sm">Most Active Time</div>
            <div className="font-semibold">2-4 PM</div>
          </div>
          <div className="text-center p-4 bg-green-500/5 rounded-lg border border-green-500/20">
            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-sm">Most Active Day</div>
            <div className="font-semibold">{mostActiveDay}</div>
          </div>
          <div className="text-center p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
            <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-sm">Productivity Score</div>
            <div className="font-semibold">87/100</div>
          </div>
        </div>
      </Card>
    </div>
  );
}