import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, Shield, Clock, Activity, AlertTriangle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface AnalyticsDashboardProps {
  userRole: 'individual' | 'business' | 'platform';
}

export function AnalyticsDashboard({ userRole }: AnalyticsDashboardProps) {
  const [timeRange, setTimeRange] = useState('30d');

  // Mock data - in production this would come from your analytics service
  const transactionData = [
    { month: 'Jan', completed: 45, disputed: 2, pending: 8 },
    { month: 'Feb', completed: 52, disputed: 1, pending: 12 },
    { month: 'Mar', completed: 48, disputed: 3, pending: 15 },
    { month: 'Apr', completed: 61, disputed: 1, pending: 18 },
    { month: 'May', completed: 55, disputed: 2, pending: 22 },
    { month: 'Jun', completed: 67, disputed: 1, pending: 25 }
  ];

  const volumeData = [
    { day: '1', volume: 12000 },
    { day: '7', volume: 19000 },
    { day: '14', volume: 15000 },
    { day: '21', volume: 25000 },
    { day: '28', volume: 22000 },
    { day: '30', volume: 28000 }
  ];

  const categoryData = [
    { name: 'Freelancing', value: 35, color: '#8b5cf6' },
    { name: 'E-commerce', value: 25, color: '#06b6d4' },
    { name: 'Real Estate', value: 20, color: '#10b981' },
    { name: 'Crypto', value: 12, color: '#f59e0b' },
    { name: 'Other', value: 8, color: '#ef4444' }
  ];

  const trustScoreData = [
    { week: 'W1', score: 92 },
    { week: 'W2', score: 94 },
    { week: 'W3', score: 91 },
    { week: 'W4', score: 96 },
    { week: 'W5', score: 95 },
    { week: 'W6', score: 97 }
  ];

  const platformMetrics = userRole === 'platform' ? {
    totalUsers: 125430,
    activeContracts: 8945,
    totalVolume: 12500000,
    averageTransactionSize: 2340,
    disputeRate: 0.8,
    completionRate: 98.2
  } : {
    totalTransactions: 156,
    successRate: 97.4,
    averageValue: 3420,
    trustScore: 96,
    timeToComplete: 3.2,
    disputes: 2
  };

  const StatCard = ({ title, value, change, icon, trend }: any) => (
    <Card className="bg-slate-800 border-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl mt-1">{value}</p>
          {change && (
            <div className={`flex items-center space-x-1 mt-2 text-sm ${
              trend === 'up' ? 'text-green-400' : 'text-red-400'
            }`}>
              {trend === 'up' ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className="p-3 bg-purple-600/20 rounded-lg">
          {icon}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2">Analytics Dashboard</h1>
            <p className="text-gray-400">
              {userRole === 'platform' ? 'Platform-wide insights and metrics' : 'Your transaction analytics and insights'}
            </p>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32 bg-slate-800 border-slate-700 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="7d">7 Days</SelectItem>
              <SelectItem value="30d">30 Days</SelectItem>
              <SelectItem value="90d">90 Days</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <StatCard
            title={userRole === 'platform' ? 'Total Users' : 'Total Transactions'}
            value={userRole === 'platform' ? '125.4K' : '156'}
            change="+12.5%"
            trend="up"
            icon={<Users className="h-6 w-6 text-purple-400" />}
          />
          <StatCard
            title={userRole === 'platform' ? 'Active Contracts' : 'Success Rate'}
            value={userRole === 'platform' ? '8.9K' : '97.4%'}
            change="+8.2%"
            trend="up"
            icon={<Activity className="h-6 w-6 text-purple-400" />}
          />
          <StatCard
            title={userRole === 'platform' ? 'Total Volume' : 'Average Value'}
            value={userRole === 'platform' ? '$12.5M' : '$3.4K'}
            change="+15.3%"
            trend="up"
            icon={<DollarSign className="h-6 w-6 text-purple-400" />}
          />
          <StatCard
            title={userRole === 'platform' ? 'Avg Transaction' : 'Trust Score'}
            value={userRole === 'platform' ? '$2.3K' : '96'}
            change="+2.1%"
            trend="up"
            icon={<Shield className="h-6 w-6 text-purple-400" />}
          />
          <StatCard
            title={userRole === 'platform' ? 'Dispute Rate' : 'Avg Completion'}
            value={userRole === 'platform' ? '0.8%' : '3.2 days'}
            change="-0.2%"
            trend="up"
            icon={<AlertTriangle className="h-6 w-6 text-purple-400" />}
          />
          <StatCard
            title={userRole === 'platform' ? 'Completion Rate' : 'Total Disputes'}
            value={userRole === 'platform' ? '98.2%' : '2'}
            change="+0.5%"
            trend="up"
            icon={<Clock className="h-6 w-6 text-purple-400" />}
          />
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="transactions" className="text-white data-[state=active]:bg-purple-600">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="volume" className="text-white data-[state=active]:bg-purple-600">
              Volume
            </TabsTrigger>
            <TabsTrigger value="categories" className="text-white data-[state=active]:bg-purple-600">
              Categories
            </TabsTrigger>
            <TabsTrigger value="trust" className="text-white data-[state=active]:bg-purple-600">
              Trust Score
            </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl mb-4">Transaction Status Over Time</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={transactionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <Bar dataKey="completed" stackId="a" fill="#10b981" />
                  <Bar dataKey="pending" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="disputed" stackId="a" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="volume">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl mb-4">Transaction Volume Trend</h3>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={volumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="volume" 
                    stroke="#8b5cf6" 
                    fill="url(#colorVolume)" 
                  />
                  <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl mb-4">Transaction Categories</h3>
              <div className="flex flex-col lg:flex-row items-center">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="lg:ml-8 mt-4 lg:mt-0">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center space-x-3 mb-3">
                      <div 
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-white">{category.name}</span>
                      <span className="text-gray-400">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="trust">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-xl mb-4">Trust Score Progression</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trustScoreData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="week" stroke="#9ca3af" />
                  <YAxis domain={[85, 100]} stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151', 
                      borderRadius: '8px' 
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    dot={{ r: 6, fill: '#10b981' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="text-xl mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'New agreement created', time: '2 minutes ago', status: 'success' },
                { action: 'Funds released', time: '15 minutes ago', status: 'success' },
                { action: 'Verification completed', time: '1 hour ago', status: 'info' },
                { action: 'Dispute resolved', time: '3 hours ago', status: 'warning' },
                { action: 'Contract deployed', time: '5 hours ago', status: 'success' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-400' :
                      activity.status === 'warning' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`} />
                    <span>{activity.action}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="text-xl mb-4">Performance Insights</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Average response time</span>
                <Badge className="bg-green-600/20 text-green-300">12 minutes</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Client satisfaction</span>
                <Badge className="bg-green-600/20 text-green-300">4.8/5.0</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Dispute resolution rate</span>
                <Badge className="bg-green-600/20 text-green-300">100%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>On-time completion</span>
                <Badge className="bg-green-600/20 text-green-300">94%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Repeat clients</span>
                <Badge className="bg-purple-600/20 text-purple-300">68%</Badge>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}