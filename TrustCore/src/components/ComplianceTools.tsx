import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, FileCheck, AlertTriangle, CheckCircle, Globe, Eye, Lock, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';

interface ComplianceRule {
  id: string;
  name: string;
  jurisdiction: string;
  category: 'kyc' | 'aml' | 'tax' | 'data' | 'financial';
  status: 'compliant' | 'warning' | 'violation';
  description: string;
  requirements: string[];
  autoCheck: boolean;
}

interface ComplianceReport {
  overall: number;
  categories: {
    kyc: number;
    aml: number;
    tax: number;
    data: number;
    financial: number;
  };
  violations: number;
  warnings: number;
  lastAudit: string;
}

export function ComplianceTools() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('global');
  const [enabledRules, setEnabledRules] = useState<string[]>(['kyc-basic', 'aml-screening', 'gdpr']);

  const complianceRules: ComplianceRule[] = [
    {
      id: 'kyc-basic',
      name: 'Basic KYC Verification',
      jurisdiction: 'Global',
      category: 'kyc',
      status: 'compliant',
      description: 'Identity verification for all parties',
      requirements: ['Government ID', 'Address verification', 'Phone verification'],
      autoCheck: true
    },
    {
      id: 'kyc-enhanced',
      name: 'Enhanced KYC',
      jurisdiction: 'US, EU',
      category: 'kyc',
      status: 'compliant',
      description: 'Enhanced due diligence for high-value transactions',
      requirements: ['Source of funds', 'Business verification', 'PEP screening'],
      autoCheck: true
    },
    {
      id: 'aml-screening',
      name: 'AML Sanctions Screening',
      jurisdiction: 'Global',
      category: 'aml',
      status: 'compliant',
      description: 'Screen against sanctions lists and watchlists',
      requirements: ['OFAC screening', 'UN sanctions', 'EU sanctions', 'Local sanctions'],
      autoCheck: true
    },
    {
      id: 'aml-reporting',
      name: 'Suspicious Activity Reporting',
      jurisdiction: 'US',
      category: 'aml',
      status: 'warning',
      description: 'Automated SAR filing for suspicious transactions',
      requirements: ['Transaction monitoring', 'SAR filing', 'Record keeping'],
      autoCheck: false
    },
    {
      id: 'gdpr',
      name: 'GDPR Compliance',
      jurisdiction: 'EU',
      category: 'data',
      status: 'compliant',
      description: 'European data protection requirements',
      requirements: ['Consent management', 'Data minimization', 'Right to erasure', 'Privacy by design'],
      autoCheck: true
    },
    {
      id: 'ccpa',
      name: 'CCPA Compliance',
      jurisdiction: 'California',
      category: 'data',
      status: 'compliant',
      description: 'California Consumer Privacy Act requirements',
      requirements: ['Privacy notice', 'Opt-out rights', 'Data access', 'Non-discrimination'],
      autoCheck: true
    },
    {
      id: 'tax-reporting',
      name: '1099 Tax Reporting',
      jurisdiction: 'US',
      category: 'tax',
      status: 'warning',
      description: 'IRS reporting for cryptocurrency transactions',
      requirements: ['Form 1099-B', 'Cost basis tracking', 'Annual reporting'],
      autoCheck: false
    },
    {
      id: 'mifid',
      name: 'MiFID II Compliance',
      jurisdiction: 'EU',
      category: 'financial',
      status: 'compliant',
      description: 'Markets in Financial Instruments Directive',
      requirements: ['Best execution', 'Transaction reporting', 'Product governance'],
      autoCheck: true
    }
  ];

  const complianceReport: ComplianceReport = {
    overall: 87,
    categories: {
      kyc: 95,
      aml: 88,
      tax: 70,
      data: 92,
      financial: 85
    },
    violations: 0,
    warnings: 3,
    lastAudit: '2024-01-15'
  };

  const jurisdictions = [
    { code: 'global', name: 'Global', flag: '🌍' },
    { code: 'us', name: 'United States', flag: '🇺🇸' },
    { code: 'eu', name: 'European Union', flag: '🇪🇺' },
    { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'ca', name: 'Canada', flag: '🇨🇦' },
    { code: 'au', name: 'Australia', flag: '🇦🇺' },
    { code: 'sg', name: 'Singapore', flag: '🇸🇬' },
    { code: 'jp', name: 'Japan', flag: '🇯🇵' }
  ];

  const toggleRule = (ruleId: string) => {
    setEnabledRules(prev => 
      prev.includes(ruleId) 
        ? prev.filter(id => id !== ruleId)
        : [...prev, ruleId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'bg-green-600/20 text-green-300';
      case 'warning': return 'bg-yellow-600/20 text-yellow-300';
      case 'violation': return 'bg-red-600/20 text-red-300';
      default: return 'bg-gray-600/20 text-gray-300';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'kyc': return <Eye className="h-4 w-4" />;
      case 'aml': return <Shield className="h-4 w-4" />;
      case 'tax': return <FileCheck className="h-4 w-4" />;
      case 'data': return <Lock className="h-4 w-4" />;
      case 'financial': return <Scale className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
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
            <h1 className="text-4xl mb-2">Compliance & Regulatory Tools</h1>
            <p className="text-gray-400">Ensure adherence to global regulations and standards</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedJurisdiction}
              onChange={(e) => setSelectedJurisdiction(e.target.value)}
              className="p-2 bg-slate-800 border border-slate-600 rounded text-white"
            >
              {jurisdictions.map(jurisdiction => (
                <option key={jurisdiction.code} value={jurisdiction.code}>
                  {jurisdiction.flag} {jurisdiction.name}
                </option>
              ))}
            </select>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Run Audit
            </Button>
          </div>
        </div>

        {/* Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Overall Score</h3>
              <CheckCircle className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-3xl mb-2">{complianceReport.overall}%</div>
            <Progress value={complianceReport.overall} className="h-2" />
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Active Rules</h3>
              <Shield className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-3xl mb-2">{enabledRules.length}</div>
            <div className="text-sm text-gray-400">
              of {complianceRules.length} available
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Warnings</h3>
              <AlertTriangle className="h-6 w-6 text-yellow-400" />
            </div>
            <div className="text-3xl mb-2">{complianceReport.warnings}</div>
            <div className="text-sm text-gray-400">Require attention</div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Last Audit</h3>
              <FileCheck className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-lg mb-2">{complianceReport.lastAudit}</div>
            <div className="text-sm text-gray-400">7 days ago</div>
          </Card>
        </div>

        <Tabs defaultValue="rules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="rules" className="text-white data-[state=active]:bg-purple-600">
              Compliance Rules
            </TabsTrigger>
            <TabsTrigger value="monitoring" className="text-white data-[state=active]:bg-purple-600">
              Monitoring
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-white data-[state=active]:bg-purple-600">
              Reports
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-purple-600">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rules">
            <div className="space-y-4">
              {complianceRules
                .filter(rule => 
                  selectedJurisdiction === 'global' || 
                  rule.jurisdiction.toLowerCase().includes(selectedJurisdiction)
                )
                .map((rule, index) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800 border-slate-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-purple-600/20 rounded-lg">
                          {getCategoryIcon(rule.category)}
                        </div>
                        <div>
                          <h3 className="text-lg text-white">{rule.name}</h3>
                          <p className="text-sm text-gray-400">{rule.jurisdiction}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(rule.status)}>
                          {rule.status}
                        </Badge>
                        <Switch
                          checked={enabledRules.includes(rule.id)}
                          onCheckedChange={() => toggleRule(rule.id)}
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-4">{rule.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm mb-2 text-purple-300">Requirements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {rule.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span className="text-gray-300">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-gray-600/20 text-gray-300 capitalize">
                          {rule.category}
                        </Badge>
                        {rule.autoCheck && (
                          <Badge className="bg-blue-600/20 text-blue-300">
                            Auto-check
                          </Badge>
                        )}
                      </div>
                      <Button size="sm" variant="outline" className="border-slate-600 text-gray-300">
                        Configure
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">Real-time Monitoring</h3>
                
                <div className="space-y-4">
                  {[
                    { type: 'Transaction Screening', status: 'Active', count: '1,247 processed' },
                    { type: 'Sanctions Monitoring', status: 'Active', count: '45 flagged' },
                    { type: 'PEP Screening', status: 'Active', count: '12 matches' },
                    { type: 'Data Privacy Check', status: 'Active', count: '856 compliant' }
                  ].map((monitor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <h4 className="text-white">{monitor.type}</h4>
                        <p className="text-sm text-gray-400">{monitor.count}</p>
                      </div>
                      <Badge className="bg-green-600/20 text-green-300">
                        {monitor.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">Category Scores</h3>
                
                <div className="space-y-4">
                  {Object.entries(complianceReport.categories).map(([category, score]) => (
                    <div key={category}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize text-gray-300">{category.toUpperCase()}</span>
                        <span className="text-gray-400">{score}%</span>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'AML Compliance Report', type: 'Monthly', lastGenerated: '2024-01-01', format: 'PDF' },
                { name: 'KYC Summary', type: 'Weekly', lastGenerated: '2024-01-08', format: 'Excel' },
                { name: 'Data Privacy Audit', type: 'Quarterly', lastGenerated: '2024-01-01', format: 'PDF' },
                { name: 'Tax Reporting', type: 'Annual', lastGenerated: '2023-12-31', format: 'CSV' },
                { name: 'Transaction Monitoring', type: 'Daily', lastGenerated: '2024-01-15', format: 'JSON' },
                { name: 'Sanctions Screening', type: 'Real-time', lastGenerated: '2024-01-15', format: 'API' }
              ].map((report, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-white">{report.name}</h3>
                    <Badge className="bg-purple-600/20 text-purple-300">
                      {report.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last Generated:</span>
                      <span className="text-gray-300">{report.lastGenerated}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Format:</span>
                      <span className="text-gray-300">{report.format}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Generate
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-gray-300">
                      Schedule
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">Global Settings</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white">Auto-compliance Checks</h4>
                      <p className="text-sm text-gray-400">Automatically run compliance checks on new agreements</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white">Real-time Monitoring</h4>
                      <p className="text-sm text-gray-400">Monitor transactions in real-time for compliance</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white">Alert Notifications</h4>
                      <p className="text-sm text-gray-400">Send alerts for compliance violations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white">Audit Logging</h4>
                      <p className="text-sm text-gray-400">Comprehensive logging for audit trails</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">Risk Tolerance</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-white">Transaction Threshold</label>
                    <select className="w-full mt-1 p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>$10,000 (Enhanced KYC)</option>
                      <option>$25,000 (Enhanced KYC)</option>
                      <option>$50,000 (Enhanced KYC)</option>
                      <option>$100,000 (Enhanced KYC)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-white">Risk Level</label>
                    <select className="w-full mt-1 p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>Conservative</option>
                      <option>Moderate</option>
                      <option>Aggressive</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-white">Data Retention Period</label>
                    <select className="w-full mt-1 p-2 bg-slate-700 border border-slate-600 rounded text-white">
                      <option>5 years (Default)</option>
                      <option>7 years (Extended)</option>
                      <option>10 years (Maximum)</option>
                    </select>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}