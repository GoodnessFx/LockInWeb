import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, AlertTriangle, Shield, Unlock, Star, Trophy } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

interface TransactionData {
  id: string;
  status: string;
  agreement: {
    title: string;
    amount: string;
    currency: string;
    counterparty: string;
  };
  escrowAddress?: string;
}

interface ConfirmationReleaseProps {
  transaction: TransactionData;
  onConfirm: () => void;
}

export function ConfirmationRelease({ transaction, onConfirm }: ConfirmationReleaseProps) {
  const [isReleasing, setIsReleasing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRelease = async () => {
    setIsReleasing(true);
    
    // Simulate release process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsReleasing(false);
    setIsComplete(true);
    setShowSuccess(true);
    onConfirm();
  };

  const handleDispute = () => {
    // In a real app, this would open dispute resolution
    alert('Dispute resolution process would be initiated here');
  };

  if (showSuccess) {
    return (
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border-green-500/30 p-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Trophy className="h-20 w-20 text-green-400 mx-auto mb-6" />
            </motion.div>
            
            <h1 className="text-4xl mb-4 text-green-300">Transaction Complete!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Funds have been successfully released to both parties
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">{transaction.agreement.amount}</div>
                <div className="text-purple-300">{transaction.agreement.currency} Released</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">98.7%</div>
                <div className="text-purple-300">Trust Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">0</div>
                <div className="text-purple-300">Disputes</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Transaction Details
              </Button>
              <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700">
                Create New Agreement
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-lg">Rate Your Experience</span>
              </div>
              <div className="flex justify-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 hover:text-yellow-300 cursor-pointer" />
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-2">Confirmation & Release</h1>
        <p className="text-gray-400 mb-8">Final step: confirm completion and release funds</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Agreement Summary */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-6">Agreement Summary</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-purple-300 mb-1">Title</h3>
              <p className="text-white">{transaction.agreement.title}</p>
            </div>
            
            <div>
              <h3 className="text-purple-300 mb-1">Amount</h3>
              <div className="flex items-center space-x-2">
                <span className="text-3xl">{transaction.agreement.amount}</span>
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                  {transaction.agreement.currency}
                </Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-purple-300 mb-1">Counterparty</h3>
              <p className="text-white font-mono text-sm">{transaction.agreement.counterparty}</p>
            </div>
            
            <Separator className="bg-slate-700" />
            
            <div>
              <h3 className="text-purple-300 mb-2">Verification Status</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Documents verified by AI</span>
                  <Badge className="bg-green-600/20 text-green-300 text-xs">96.8%</Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Zero-knowledge proofs generated</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Smart contract conditions met</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Counterparty confirmation received</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Release Actions */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-6">Release Funds</h2>
          
          {!isComplete && (
            <div className="space-y-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-300">Ready for Release</span>
                </div>
                <p className="text-sm text-green-200">
                  All verification checks have passed. Both parties have confirmed completion.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg">Final Confirmation</h3>
                <p className="text-gray-400 text-sm">
                  By clicking "Release Funds", you confirm that all agreement terms have been satisfied 
                  and authorize the smart contract to release the escrowed funds.
                </p>
                
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-sm mb-2 text-purple-300">What happens next:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Smart contract executes fund release</li>
                    <li>• Funds are transferred to designated wallets</li>
                    <li>• Transaction is recorded on blockchain</li>
                    <li>• Both parties receive confirmation</li>
                    <li>• Trust scores are updated</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleRelease}
                  disabled={isReleasing}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  {isReleasing ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Releasing Funds...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Unlock className="h-4 w-4" />
                      <span>Release Funds</span>
                    </div>
                  )}
                </Button>
                
                <Button 
                  onClick={handleDispute}
                  variant="outline"
                  className="w-full border-amber-600 text-amber-300 hover:bg-amber-600/10"
                >
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Report Issue / Dispute
                </Button>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span className="text-amber-300 text-sm">Important</span>
                </div>
                <p className="text-xs text-amber-200">
                  This action is irreversible. Once funds are released, they cannot be recovered 
                  through TrustCore. Only proceed if you are certain all terms have been met.
                </p>
              </div>
            </div>
          )}
          
          {isReleasing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-xl mb-2">Processing Release...</h3>
              <p className="text-gray-400">
                Smart contract is executing the fund release. This may take a few moments.
              </p>
            </motion.div>
          )}
        </Card>
      </div>

      {/* Transaction Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8"
      >
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h3 className="text-lg mb-4">Transaction Security</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl mb-1">256-bit</div>
              <div className="text-sm text-gray-400">Encryption</div>
            </div>
            <div>
              <div className="text-2xl mb-1">ZK</div>
              <div className="text-sm text-gray-400">Proofs</div>
            </div>
            <div>
              <div className="text-2xl mb-1">Multi-sig</div>
              <div className="text-sm text-gray-400">Contract</div>
            </div>
            <div>
              <div className="text-2xl mb-1">AI</div>
              <div className="text-sm text-gray-400">Verified</div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}