import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Plus, X, Check, Clock, AlertTriangle, Shield, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar } from './ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Party {
  id: string;
  name: string;
  email: string;
  role: string;
  address: string;
  signature?: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  votingWeight: number;
}

interface MultiPartyAgreementData {
  title: string;
  description: string;
  parties: Party[];
  decisionMaking: 'unanimous' | 'majority' | 'weighted' | 'threshold';
  thresholdPercentage?: number;
  funds: {
    totalAmount: string;
    currency: string;
    distribution: { partyId: string; percentage: number }[];
  };
  milestones: {
    id: string;
    title: string;
    description: string;
    requiredApprovals: string[];
    fundReleasePercentage: number;
    status: 'pending' | 'approved' | 'completed';
  }[];
}

export function MultiPartyAgreements() {
  const [agreement, setAgreement] = useState<MultiPartyAgreementData>({
    title: '',
    description: '',
    parties: [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@company.com',
        role: 'Project Manager',
        address: '0x1234...5678',
        approvalStatus: 'approved',
        votingWeight: 30
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@contractor.com',
        role: 'Developer',
        address: '0xabcd...efgh',
        approvalStatus: 'pending',
        votingWeight: 40
      },
      {
        id: '3',
        name: 'Bob Wilson',
        email: 'bob@finance.com',
        role: 'Financial Advisor',
        address: '0x9876...5432',
        approvalStatus: 'approved',
        votingWeight: 30
      }
    ],
    decisionMaking: 'majority',
    thresholdPercentage: 66,
    funds: {
      totalAmount: '50000',
      currency: 'USDC',
      distribution: [
        { partyId: '1', percentage: 20 },
        { partyId: '2', percentage: 60 },
        { partyId: '3', percentage: 20 }
      ]
    },
    milestones: [
      {
        id: '1',
        title: 'Project Initiation',
        description: 'Initial setup and planning phase',
        requiredApprovals: ['1', '2'],
        fundReleasePercentage: 25,
        status: 'completed'
      },
      {
        id: '2',
        title: 'Development Phase 1',
        description: 'Core functionality implementation',
        requiredApprovals: ['1', '2', '3'],
        fundReleasePercentage: 40,
        status: 'pending'
      },
      {
        id: '3',
        title: 'Testing & QA',
        description: 'Quality assurance and testing',
        requiredApprovals: ['1', '3'],
        fundReleasePercentage: 25,
        status: 'pending'
      },
      {
        id: '4',
        title: 'Final Delivery',
        description: 'Project completion and handover',
        requiredApprovals: ['1', '2', '3'],
        fundReleasePercentage: 10,
        status: 'pending'
      }
    ]
  });

  const [newParty, setNewParty] = useState({
    name: '',
    email: '',
    role: '',
    address: '',
    votingWeight: 0
  });

  const [showAddParty, setShowAddParty] = useState(false);

  const addParty = () => {
    if (newParty.name && newParty.email) {
      const party: Party = {
        id: Date.now().toString(),
        ...newParty,
        approvalStatus: 'pending'
      };
      setAgreement(prev => ({
        ...prev,
        parties: [...prev.parties, party]
      }));
      setNewParty({ name: '', email: '', role: '', address: '', votingWeight: 0 });
      setShowAddParty(false);
    }
  };

  const removeParty = (partyId: string) => {
    setAgreement(prev => ({
      ...prev,
      parties: prev.parties.filter(p => p.id !== partyId)
    }));
  };

  const getApprovalProgress = (milestone: any) => {
    const requiredCount = milestone.requiredApprovals.length;
    const approvedCount = milestone.requiredApprovals.filter(partyId => 
      agreement.parties.find(p => p.id === partyId)?.approvalStatus === 'approved'
    ).length;
    return (approvedCount / requiredCount) * 100;
  };

  const getTotalApprovalProgress = () => {
    const totalParties = agreement.parties.length;
    const approvedParties = agreement.parties.filter(p => p.approvalStatus === 'approved').length;
    return (approvedParties / totalParties) * 100;
  };

  const getDecisionDescription = () => {
    switch (agreement.decisionMaking) {
      case 'unanimous':
        return 'All parties must approve';
      case 'majority':
        return 'More than 50% must approve';
      case 'weighted':
        return 'Weighted by voting power';
      case 'threshold':
        return `${agreement.thresholdPercentage}% threshold required`;
      default:
        return 'Majority voting';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2">Multi-Party Agreements</h1>
            <p className="text-gray-400">Manage complex agreements with multiple stakeholders</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Deploy Agreement
          </Button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Agreement Details */}
          <div className="xl:col-span-2 space-y-6">
            {/* Agreement Overview */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h2 className="text-xl mb-4">Agreement Overview</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Agreement Title</Label>
                  <Input
                    id="title"
                    value={agreement.title}
                    onChange={(e) => setAgreement(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Multi-party Development Agreement"
                    className="bg-slate-700 border-slate-600 text-white mt-1"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Total Amount</Label>
                    <div className="flex space-x-2 mt-1">
                      <Input
                        value={agreement.funds.totalAmount}
                        onChange={(e) => setAgreement(prev => ({
                          ...prev,
                          funds: { ...prev.funds, totalAmount: e.target.value }
                        }))}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Select 
                        value={agreement.funds.currency}
                        onValueChange={(value) => setAgreement(prev => ({
                          ...prev,
                          funds: { ...prev.funds, currency: value }
                        }))}
                      >
                        <SelectTrigger className="w-24 bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="USDC">USDC</SelectItem>
                          <SelectItem value="ETH">ETH</SelectItem>
                          <SelectItem value="BTC">BTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-white">Decision Making</Label>
                    <Select 
                      value={agreement.decisionMaking}
                      onValueChange={(value: any) => setAgreement(prev => ({ ...prev, decisionMaking: value }))}
                    >
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="unanimous">Unanimous</SelectItem>
                        <SelectItem value="majority">Majority</SelectItem>
                        <SelectItem value="weighted">Weighted Voting</SelectItem>
                        <SelectItem value="threshold">Custom Threshold</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-300 text-sm">Decision Rule</span>
                  </div>
                  <p className="text-blue-200 text-sm">{getDecisionDescription()}</p>
                </div>
              </div>
            </Card>

            {/* Parties Management */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl">Parties ({agreement.parties.length})</h2>
                <Button 
                  size="sm"
                  onClick={() => setShowAddParty(true)}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Party
                </Button>
              </div>
              
              <div className="space-y-4">
                {agreement.parties.map((party, index) => (
                  <motion.div
                    key={party.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10 bg-purple-600">
                        <span className="text-white text-sm">
                          {party.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </Avatar>
                      <div>
                        <h3 className="text-white">{party.name}</h3>
                        <p className="text-sm text-gray-400">{party.role}</p>
                        <p className="text-xs text-gray-500 font-mono">{party.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Voting Weight</div>
                        <div className="text-purple-300">{party.votingWeight}%</div>
                      </div>
                      
                      <Badge className={
                        party.approvalStatus === 'approved' ? 'bg-green-600/20 text-green-300' :
                        party.approvalStatus === 'rejected' ? 'bg-red-600/20 text-red-300' :
                        'bg-yellow-600/20 text-yellow-300'
                      }>
                        {party.approvalStatus}
                      </Badge>
                      
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeParty(party.id)}
                        className="border-slate-600 text-gray-300 hover:bg-red-600/20"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
                
                {showAddParty && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-slate-700/30 rounded-lg border border-slate-600"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Name"
                        value={newParty.name}
                        onChange={(e) => setNewParty(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Email"
                        value={newParty.email}
                        onChange={(e) => setNewParty(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Role"
                        value={newParty.role}
                        onChange={(e) => setNewParty(prev => ({ ...prev, role: e.target.value }))}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Wallet Address"
                        value={newParty.address}
                        onChange={(e) => setNewParty(prev => ({ ...prev, address: e.target.value }))}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setShowAddParty(false)}
                        className="border-slate-600 text-gray-300"
                      >
                        Cancel
                      </Button>
                      <Button 
                        size="sm"
                        onClick={addParty}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        Add Party
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </Card>

            {/* Milestones */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h2 className="text-xl mb-4">Milestones & Fund Release</h2>
              
              <div className="space-y-4">
                {agreement.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white">{milestone.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-purple-600/20 text-purple-300">
                          {milestone.fundReleasePercentage}% Release
                        </Badge>
                        <Badge className={
                          milestone.status === 'completed' ? 'bg-green-600/20 text-green-300' :
                          milestone.status === 'approved' ? 'bg-blue-600/20 text-blue-300' :
                          'bg-yellow-600/20 text-yellow-300'
                        }>
                          {milestone.status}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-3">{milestone.description}</p>
                    
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Approval Progress</span>
                        <span className="text-gray-400">{Math.round(getApprovalProgress(milestone))}%</span>
                      </div>
                      <Progress value={getApprovalProgress(milestone)} className="h-2" />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-gray-400">Required approvals:</span>
                      {milestone.requiredApprovals.map(partyId => {
                        const party = agreement.parties.find(p => p.id === partyId);
                        return (
                          <div key={partyId} className="flex items-center space-x-1">
                            <span className="text-gray-300">{party?.name}</span>
                            {party?.approvalStatus === 'approved' ? (
                              <Check className="h-3 w-3 text-green-400" />
                            ) : (
                              <Clock className="h-3 w-3 text-yellow-400" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Status Sidebar */}
          <div className="space-y-6">
            {/* Overall Progress */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-lg mb-4">Agreement Status</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Overall Approval</span>
                    <span className="text-gray-400">{Math.round(getTotalApprovalProgress())}%</span>
                  </div>
                  <Progress value={getTotalApprovalProgress()} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl">{agreement.parties.filter(p => p.approvalStatus === 'approved').length}</div>
                    <div className="text-sm text-green-300">Approved</div>
                  </div>
                  <div>
                    <div className="text-2xl">{agreement.parties.filter(p => p.approvalStatus === 'pending').length}</div>
                    <div className="text-sm text-yellow-300">Pending</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Fund Distribution */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-lg mb-4">Fund Distribution</h3>
              
              <div className="space-y-3">
                {agreement.funds.distribution.map(dist => {
                  const party = agreement.parties.find(p => p.id === dist.partyId);
                  return (
                    <div key={dist.partyId} className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{party?.name}</span>
                      <span className="text-sm text-purple-300">{dist.percentage}%</span>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex justify-between">
                  <span className="text-white">Total Amount</span>
                  <span className="text-white">{agreement.funds.totalAmount} {agreement.funds.currency}</span>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-lg mb-4">Actions</h3>
              
              <div className="space-y-3">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Agreement
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  Send for Signatures
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-gray-300 hover:bg-slate-700"
                >
                  Export Agreement
                </Button>
              </div>
            </Card>

            {/* Security Notice */}
            <Card className="bg-amber-500/10 border-amber-500/30 p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <span className="text-amber-300 text-sm">Multi-Party Security</span>
              </div>
              <p className="text-amber-200 text-xs">
                All parties must digitally sign before fund deployment. 
                Decision-making follows the configured consensus mechanism.
              </p>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}