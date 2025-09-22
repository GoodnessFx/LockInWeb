import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Star, Download, Settings, CheckCircle, ExternalLink, Zap, Shield, Globe, Smartphone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  provider: string;
  rating: number;
  downloads: number;
  price: 'Free' | 'Premium' | 'Enterprise';
  status: 'available' | 'installed' | 'configured';
  features: string[];
  webhookSupport: boolean;
  apiEndpoints: string[];
}

export function IntegrationMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [installedOnly, setInstalledOnly] = useState(false);

  const integrations: Integration[] = [
    {
      id: 'stripe-payment',
      name: 'Stripe Payment Gateway',
      description: 'Accept payments in 135+ currencies with industry-leading conversion rates',
      category: 'Payment Processing',
      icon: <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">S</div>,
      provider: 'Stripe Inc.',
      rating: 4.9,
      downloads: 145000,
      price: 'Free',
      status: 'installed',
      features: ['Multi-currency support', 'Instant settlements', 'Fraud protection', '3D Secure'],
      webhookSupport: true,
      apiEndpoints: ['/api/stripe/webhook', '/api/stripe/payment-intent']
    },
    {
      id: 'docusign-esign',
      name: 'DocuSign eSignature',
      description: 'Digital signature solution for legally binding electronic signatures',
      category: 'Document Management',
      icon: <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center text-white">D</div>,
      provider: 'DocuSign',
      rating: 4.8,
      downloads: 89000,
      price: 'Premium',
      status: 'available',
      features: ['Legally binding signatures', 'Bulk sending', 'Template management', 'Audit trails'],
      webhookSupport: true,
      apiEndpoints: ['/api/docusign/envelope', '/api/docusign/status']
    },
    {
      id: 'slack-notifications',
      name: 'Slack Notifications',
      description: 'Real-time notifications for team collaboration and updates',
      category: 'Communication',
      icon: <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">S</div>,
      provider: 'Slack Technologies',
      rating: 4.7,
      downloads: 203000,
      price: 'Free',
      status: 'configured',
      features: ['Real-time alerts', 'Custom channels', 'Rich formatting', 'Bot integration'],
      webhookSupport: true,
      apiEndpoints: ['/api/slack/webhook', '/api/slack/message']
    },
    {
      id: 'aws-s3-storage',
      name: 'AWS S3 Storage',
      description: 'Secure, scalable object storage for documents and files',
      category: 'Cloud Storage',
      icon: <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">AWS</div>,
      provider: 'Amazon Web Services',
      rating: 4.6,
      downloads: 167000,
      price: 'Free',
      status: 'installed',
      features: ['99.9% uptime', 'Encryption at rest', 'Lifecycle policies', 'CDN integration'],
      webhookSupport: true,
      apiEndpoints: ['/api/aws/upload', '/api/aws/download']
    },
    {
      id: 'twilio-sms',
      name: 'Twilio SMS',
      description: 'Send SMS notifications and two-factor authentication',
      category: 'Communication',
      icon: <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white">T</div>,
      provider: 'Twilio Inc.',
      rating: 4.8,
      downloads: 134000,
      price: 'Premium',
      status: 'available',
      features: ['Global SMS delivery', '2FA support', 'Delivery tracking', 'Shortcode support'],
      webhookSupport: true,
      apiEndpoints: ['/api/twilio/sms', '/api/twilio/verify']
    },
    {
      id: 'zapier-automation',
      name: 'Zapier Automation',
      description: 'Connect TrustCore with 5000+ apps for workflow automation',
      category: 'Automation',
      icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">Z</div>,
      provider: 'Zapier Inc.',
      rating: 4.5,
      downloads: 98000,
      price: 'Free',
      status: 'available',
      features: ['5000+ app connections', 'Multi-step workflows', 'Conditional logic', 'Error handling'],
      webhookSupport: true,
      apiEndpoints: ['/api/zapier/trigger', '/api/zapier/action']
    },
    {
      id: 'salesforce-crm',
      name: 'Salesforce CRM',
      description: 'Sync agreements and contacts with your Salesforce org',
      category: 'CRM',
      icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">SF</div>,
      provider: 'Salesforce.com',
      rating: 4.4,
      downloads: 67000,
      price: 'Enterprise',
      status: 'available',
      features: ['Bi-directional sync', 'Custom objects', 'Workflow triggers', 'Reporting integration'],
      webhookSupport: true,
      apiEndpoints: ['/api/salesforce/sync', '/api/salesforce/webhook']
    },
    {
      id: 'google-workspace',
      name: 'Google Workspace',
      description: 'Integrate with Gmail, Drive, Calendar, and other Google services',
      category: 'Productivity',
      icon: <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">G</div>,
      provider: 'Google LLC',
      rating: 4.6,
      downloads: 189000,
      price: 'Free',
      status: 'available',
      features: ['Gmail integration', 'Drive storage', 'Calendar sync', 'Sheets reporting'],
      webhookSupport: true,
      apiEndpoints: ['/api/google/oauth', '/api/google/drive']
    }
  ];

  const categories = ['all', 'Payment Processing', 'Document Management', 'Communication', 'Cloud Storage', 'Automation', 'CRM', 'Productivity'];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesInstalled = !installedOnly || integration.status !== 'available';
    
    return matchesSearch && matchesCategory && matchesInstalled;
  });

  const handleInstall = (integrationId: string) => {
    // In a real app, this would trigger the installation process
    console.log(`Installing integration: ${integrationId}`);
  };

  const handleConfigure = (integrationId: string) => {
    // In a real app, this would open the configuration modal
    console.log(`Configuring integration: ${integrationId}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'installed': return 'bg-green-600/20 text-green-300';
      case 'configured': return 'bg-blue-600/20 text-blue-300';
      default: return 'bg-gray-600/20 text-gray-300';
    }
  };

  const getPriceColor = (price: string) => {
    switch (price) {
      case 'Free': return 'bg-green-600/20 text-green-300';
      case 'Premium': return 'bg-purple-600/20 text-purple-300';
      case 'Enterprise': return 'bg-red-600/20 text-red-300';
      default: return 'bg-gray-600/20 text-gray-300';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2">Integration Marketplace</h1>
            <p className="text-gray-400">Connect TrustCore with your favorite tools and services</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="installed-only" 
                checked={installedOnly}
                onCheckedChange={setInstalledOnly}
              />
              <label htmlFor="installed-only" className="text-sm text-gray-300">
                Installed only
              </label>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 bg-slate-800 border-slate-700 w-full">
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-white data-[state=active]:bg-purple-600 text-xs lg:text-sm"
              >
                {category === 'all' ? 'All' : category.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 transition-colors h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {integration.icon}
                    <div>
                      <h3 className="text-lg text-white">{integration.name}</h3>
                      <p className="text-xs text-gray-400">{integration.provider}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Badge className={getPriceColor(integration.price)}>
                      {integration.price}
                    </Badge>
                    <Badge className={getStatusColor(integration.status)}>
                      {integration.status}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 flex-1">{integration.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Key Features:</p>
                  <div className="space-y-1">
                    {integration.features.slice(0, 3).map(feature => (
                      <div key={feature} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span>{integration.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{(integration.downloads / 1000).toFixed(0)}K</span>
                  </div>
                  {integration.webhookSupport && (
                    <div className="flex items-center space-x-1">
                      <Zap className="h-3 w-3 text-purple-400" />
                      <span>Webhooks</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  {integration.status === 'available' ? (
                    <Button 
                      size="sm" 
                      onClick={() => handleInstall(integration.id)}
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      Install
                    </Button>
                  ) : integration.status === 'installed' ? (
                    <Button 
                      size="sm" 
                      onClick={() => handleConfigure(integration.id)}
                      variant="outline"
                      className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-700"
                    >
                      <Settings className="h-3 w-3 mr-1" />
                      Configure
                    </Button>
                  ) : (
                    <Button 
                      size="sm" 
                      onClick={() => handleConfigure(integration.id)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Configured
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No integrations found matching your criteria</div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setInstalledOnly(false);
              }}
              className="border-slate-600 text-gray-300"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* API Documentation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="bg-slate-800 border-slate-700 p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl mb-2">Build Your Own Integration</h2>
              <p className="text-gray-400">
                Use our comprehensive API to create custom integrations for your specific needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-lg w-fit mx-auto mb-4">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg mb-2">REST API</h3>
                <p className="text-sm text-gray-400">
                  Complete REST API with authentication, webhooks, and real-time events
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-blue-600/20 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg mb-2">Security First</h3>
                <p className="text-sm text-gray-400">
                  OAuth 2.0, API keys, rate limiting, and end-to-end encryption
                </p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-green-600/20 rounded-lg w-fit mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg mb-2">SDKs Available</h3>
                <p className="text-sm text-gray-400">
                  JavaScript, Python, PHP, Ruby, and mobile SDKs for easy integration
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                View API Documentation
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}