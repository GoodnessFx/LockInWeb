import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Shield, CheckCircle, AlertTriangle, Copy, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface AgreementData {
  title: string;
  description: string;
  amount: string;
  currency: string;
  counterparty: string;
  terms: string;
}

interface EscrowInitiationProps {
  agreement: AgreementData;
  onNext: (escrowAddress: string) => void;
}

export function EscrowInitiation({ agreement, onNext }: EscrowInitiationProps) {
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [escrowAddress, setEscrowAddress] = useState('');
  const [isFunding, setIsFunding] = useState(false);
  const [isFunded, setIsFunded] = useState(false);

  const handleDeploy = async () => {
    setIsDeploying(true);
    
    // Simulate contract deployment
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockAddress = `0x${Math.random().toString(16).substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`;
    setEscrowAddress(mockAddress);
    setIsDeployed(true);
    setIsDeploying(false);
  };

  const handleFunding = async () => {
    setIsFunding(true);
    
    // Simulate funding transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsFunded(true);
    setIsFunding(false);
    
    // Wait a moment then proceed
    setTimeout(() => {
      onNext(escrowAddress);
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-2">Initialize Escrow</h1>
        <p className="text-gray-400 mb-8">Deploy smart contract and lock funds</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Agreement Summary */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-4">Agreement Summary</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-purple-300 mb-1">Title</h3>
              <p className="text-white">{agreement.title}</p>
            </div>
            
            <div>
              <h3 className="text-purple-300 mb-1">Amount</h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{agreement.amount}</span>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                  {agreement.currency}
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-purple-300 mb-1">Counterparty</h3>
              <p className="text-white font-mono text-sm">{agreement.counterparty}</p>
            </div>
            
            <Separator className="bg-slate-700" />
            
            <div>
              <h3 className="text-purple-300 mb-2">Security Features</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Multi-signature required for release</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Zero-knowledge proof verification</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>AI-powered dispute resolution</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Automatic timeout protection</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Escrow Process */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-6">Escrow Process</h2>
          
          <div className="space-y-6">
            {/* Step 1: Deploy Contract */}
            <motion.div 
              className={`border rounded-lg p-4 ${
                isDeployed 
                  ? 'border-green-500 bg-green-500/10' 
                  : isDeploying 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-slate-600'
              }`}
              animate={isDeploying ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 1, repeat: isDeploying ? Infinity : 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Shield className={`h-5 w-5 ${isDeployed ? 'text-green-400' : 'text-purple-400'}`} />
                  <span>Deploy Smart Contract</span>
                </div>
                {isDeployed && <CheckCircle className="h-5 w-5 text-green-400" />}
              </div>
              
              {!isDeployed && !isDeploying && (
                <Button 
                  onClick={handleDeploy}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Deploy Contract
                </Button>
              )}
              
              {isDeploying && (
                <div className="flex items-center space-x-2 text-purple-300">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                  <span>Deploying contract...</span>
                </div>
              )}
              
              {isDeployed && (
                <div className="space-y-2">
                  <p className="text-green-300 text-sm">Contract deployed successfully!</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-gray-400">Address:</span>
                    <span className="font-mono">{escrowAddress}</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(escrowAddress)}
                      className="h-auto p-1"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-auto p-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Step 2: Fund Escrow */}
            <motion.div 
              className={`border rounded-lg p-4 ${
                !isDeployed 
                  ? 'border-slate-600 opacity-50' 
                  : isFunded 
                  ? 'border-green-500 bg-green-500/10' 
                  : isFunding 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-slate-600'
              }`}
              animate={isFunding ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 1, repeat: isFunding ? Infinity : 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Lock className={`h-5 w-5 ${isFunded ? 'text-green-400' : 'text-purple-400'}`} />
                  <span>Fund Escrow</span>
                </div>
                {isFunded && <CheckCircle className="h-5 w-5 text-green-400" />}
              </div>
              
              {isDeployed && !isFunded && !isFunding && (
                <div className="space-y-3">
                  <div className="bg-slate-700/50 p-3 rounded text-sm">
                    <div className="flex justify-between items-center">
                      <span>Amount to deposit:</span>
                      <span className="font-mono">{agreement.amount} {agreement.currency}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={handleFunding}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    Fund Escrow
                  </Button>
                </div>
              )}
              
              {isFunding && (
                <div className="flex items-center space-x-2 text-purple-300">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                  <span>Processing transaction...</span>
                </div>
              )}
              
              {isFunded && (
                <div className="space-y-2">
                  <p className="text-green-300 text-sm">Funds locked successfully!</p>
                  <div className="text-xs text-gray-400">
                    Transaction confirmed on blockchain
                  </div>
                </div>
              )}
            </motion.div>

            {/* Security Notice */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <span className="text-amber-300">Security Notice</span>
              </div>
              <p className="text-sm text-amber-200">
                Your funds are now secured by smart contract. They can only be released when both parties confirm completion or through dispute resolution.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {isFunded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-6">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Escrow Initialized Successfully!</h3>
            <p className="text-gray-300 mb-4">
              Your agreement is now protected by smart contract. Proceeding to verification step...
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}