import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, Download, Eye, Users, Building, Briefcase, Heart, ShoppingCart, Truck, Code, Home, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  complexity: 'Simple' | 'Medium' | 'Advanced';
  downloads: number;
  rating: number;
  fields: string[];
  preview: string;
}

interface TemplateLibraryProps {
  onSelectTemplate: (template: Template) => void;
  onClose: () => void;
}

export function TemplateLibrary({ onSelectTemplate, onClose }: TemplateLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');

  const templates: Template[] = [
    {
      id: 'freelance-web',
      name: 'Freelance Web Development',
      description: 'Complete contract for web development projects',
      category: 'Freelancing',
      icon: <Code className="h-6 w-6" />,
      complexity: 'Medium',
      downloads: 15420,
      rating: 4.8,
      fields: ['project_scope', 'deliverables', 'timeline', 'revisions', 'payment_schedule'],
      preview: 'Web development project with milestones, deliverables, and payment terms.'
    },
    {
      id: 'ecommerce-sale',
      name: 'E-commerce Product Sale',
      description: 'Secure product transactions with buyer protection',
      category: 'E-commerce',
      icon: <ShoppingCart className="h-6 w-6" />,
      complexity: 'Simple',
      downloads: 28750,
      rating: 4.9,
      fields: ['product_details', 'shipping_terms', 'return_policy', 'warranty'],
      preview: 'Product sale with shipping, returns, and warranty protection.'
    },
    {
      id: 'real-estate-rent',
      name: 'Property Rental Agreement',
      description: 'Comprehensive rental contract with deposit protection',
      category: 'Real Estate',
      icon: <Home className="h-6 w-6" />,
      complexity: 'Advanced',
      downloads: 8932,
      rating: 4.7,
      fields: ['property_details', 'lease_terms', 'deposit_amount', 'maintenance_responsibilities'],
      preview: 'Rental agreement with security deposit and maintenance terms.'
    },
    {
      id: 'supply-chain',
      name: 'Supply Chain Purchase Order',
      description: 'B2B procurement with quality assurance',
      category: 'Business',
      icon: <Truck className="h-6 w-6" />,
      complexity: 'Advanced',
      downloads: 6543,
      rating: 4.6,
      fields: ['product_specifications', 'quality_standards', 'delivery_schedule', 'payment_terms'],
      preview: 'B2B purchase order with quality control and delivery terms.'
    },
    {
      id: 'dating-commitment',
      name: 'Dating Commitment Agreement',
      description: 'Trust-based relationship milestones',
      category: 'Personal',
      icon: <Heart className="h-6 w-6" />,
      complexity: 'Simple',
      downloads: 12890,
      rating: 4.5,
      fields: ['commitment_level', 'expectations', 'timeline', 'mutual_goals'],
      preview: 'Relationship agreement with mutual commitments and expectations.'
    },
    {
      id: 'investment-deal',
      name: 'Investment Agreement',
      description: 'Venture capital and angel investment terms',
      category: 'Finance',
      icon: <DollarSign className="h-6 w-6" />,
      complexity: 'Advanced',
      downloads: 3456,
      rating: 4.9,
      fields: ['investment_amount', 'equity_percentage', 'voting_rights', 'exit_strategy'],
      preview: 'Investment agreement with equity, voting rights, and exit terms.'
    },
    {
      id: 'consulting-service',
      name: 'Consulting Services',
      description: 'Professional consulting engagement',
      category: 'Business',
      icon: <Briefcase className="h-6 w-6" />,
      complexity: 'Medium',
      downloads: 9876,
      rating: 4.7,
      fields: ['service_scope', 'deliverables', 'hourly_rate', 'confidentiality'],
      preview: 'Consulting agreement with scope, rates, and confidentiality.'
    },
    {
      id: 'nft-sale',
      name: 'NFT/Digital Asset Sale',
      description: 'Secure digital asset transactions',
      category: 'Crypto',
      icon: <Star className="h-6 w-6" />,
      complexity: 'Medium',
      downloads: 18750,
      rating: 4.8,
      fields: ['asset_details', 'authenticity_proof', 'transfer_rights', 'royalty_terms'],
      preview: 'NFT sale with authenticity verification and royalty terms.'
    }
  ];

  const categories = ['all', 'Freelancing', 'E-commerce', 'Real Estate', 'Business', 'Personal', 'Finance', 'Crypto'];
  const complexities = ['all', 'Simple', 'Medium', 'Advanced'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'all' || template.complexity === selectedComplexity;
    
    return matchesSearch && matchesCategory && matchesComplexity;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2">Template Library</h1>
            <p className="text-gray-400">Choose from industry-tested agreement templates</p>
          </div>
          <Button variant="outline" onClick={onClose} className="border-slate-600 text-gray-300">
            Close
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
            <SelectTrigger className="w-48 bg-slate-800 border-slate-700 text-white">
              <SelectValue placeholder="Complexity" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {complexities.map(complexity => (
                <SelectItem key={complexity} value={complexity}>
                  {complexity === 'all' ? 'All Levels' : complexity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 transition-colors h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-600/20 rounded-lg text-purple-400">
                      {template.icon}
                    </div>
                    <div>
                      <h3 className="text-lg text-white">{template.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${
                          template.complexity === 'Simple' ? 'bg-green-600/20 text-green-300' :
                          template.complexity === 'Medium' ? 'bg-yellow-600/20 text-yellow-300' :
                          'bg-red-600/20 text-red-300'
                        }`}
                      >
                        {template.complexity}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 flex-1">{template.description}</p>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.fields.slice(0, 3).map(field => (
                      <Badge key={field} variant="outline" className="text-xs border-slate-600 text-gray-400">
                        {field.replace('_', ' ')}
                      </Badge>
                    ))}
                    {template.fields.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-gray-400">
                        +{template.fields.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-3 w-3" />
                    <span>{template.downloads.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={() => onSelectTemplate(template)}
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    Use Template
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No templates found matching your criteria</div>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedComplexity('all');
              }}
              className="border-slate-600 text-gray-300"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}