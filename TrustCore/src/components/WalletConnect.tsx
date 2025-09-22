import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Wallet, Shield, Zap, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';

interface WalletConnectProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

interface WalletOption {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  popular?: boolean;
}

export function WalletConnect({ isOpen, onClose, onConnect }: WalletConnectProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStep, setConnectionStep] = useState(0);

  const walletOptions: WalletOption[] = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">M</div>,
      description: 'Most popular Ethereum wallet',
      popular: true
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">W</div>,
      description: 'Connect any mobile wallet'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">C</div>,
      description: 'Coinbase ecosystem wallet'
    },
    {
      id: 'phantom',
      name: 'Phantom',
      icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">P</div>,
      description: 'Solana & Ethereum support'
    }
  ];

  const connectionSteps = [
    'Connecting to wallet...',
    'Requesting permissions...',
    'Verifying signature...',
    'Setting up account...'
  ];

  const handleWalletSelect = async (walletId: string) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);
    
    // Simulate connection process
    for (let i = 0; i < connectionSteps.length; i++) {
      setConnectionStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    // Complete connection
    await new Promise(resolve => setTimeout(resolve, 500));
    onConnect();
    setIsConnecting(false);
    setSelectedWallet(null);
    setConnectionStep(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl mb-2">
            Connect Wallet
          </DialogTitle>
          <p className="text-center text-gray-400 text-sm">
            Choose your preferred wallet to start using TrustCore
          </p>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isConnecting ? (
            <motion.div
              key="wallet-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {walletOptions.map((wallet, index) => (
                <motion.div
                  key={wallet.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card 
                    className="bg-slate-800 border-slate-700 p-4 hover:bg-slate-700 cursor-pointer transition-colors"
                    onClick={() => handleWalletSelect(wallet.id)}
                  >
                    <div className="flex items-center space-x-3">
                      {wallet.icon}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white">{wallet.name}</h3>
                          {wallet.popular && (
                            <span className="bg-purple-600 text-purple-100 text-xs px-2 py-1 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{wallet.description}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                  </Card>
                </motion.div>
              ))}

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-300 text-sm">Security Notice</span>
                </div>
                <p className="text-blue-200 text-xs">
                  TrustCore only requests wallet connection. We never ask for private keys or seed phrases.
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-xs">
                  Don't have a wallet?{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">
                    Learn how to get one
                  </a>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="connecting"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="mb-6"
              >
                <Wallet className="h-16 w-16 text-purple-400 mx-auto" />
              </motion.div>
              
              <h3 className="text-xl mb-2">
                Connecting to {walletOptions.find(w => w.id === selectedWallet)?.name}
              </h3>
              
              <div className="space-y-3">
                {connectionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 text-sm ${
                      index <= connectionStep 
                        ? 'text-purple-300' 
                        : 'text-gray-500'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: index <= connectionStep ? 1 : 0.3 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index < connectionStep ? (
                      <CheckCircle className="h-4 w-4 text-green-400" />
                    ) : index === connectionStep ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="h-4 w-4" />
                      </motion.div>
                    ) : (
                      <div className="w-4 h-4 border border-gray-500 rounded-full" />
                    )}
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 text-gray-400 text-xs">
                Please check your wallet for any pending requests
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}