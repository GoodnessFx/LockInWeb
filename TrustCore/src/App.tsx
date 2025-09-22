import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Lock, CheckCircle, Upload, Wallet, ArrowRight, Zap, Eye, Users, Menu, BarChart3, Puzzle, Palette, Users2, FileText } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { AgreementCreation } from './components/AgreementCreation';
import { EscrowInitiation } from './components/EscrowInitiation';
import { VerificationUpload } from './components/VerificationUpload';
import { ProgressTracker } from './components/ProgressTracker';
import { ConfirmationRelease } from './components/ConfirmationRelease';
import { WalletConnect } from './components/WalletConnect';
import { TemplateLibrary } from './components/TemplateLibrary';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { IntegrationMarketplace } from './components/IntegrationMarketplace';
import { WhiteLabelCustomization } from './components/WhiteLabelCustomization';
import { MultiPartyAgreements } from './components/MultiPartyAgreements';

type AppStep = 'landing' | 'dashboard' | 'agreement' | 'escrow' | 'verification' | 'progress' | 'confirmation' | 'templates' | 'analytics' | 'integrations' | 'whitelabel' | 'multiparty';

interface AgreementData {
  title: string;
  description: string;
  amount: string;
  currency: string;
  counterparty: string;
  terms: string;
}

interface TransactionData {
  id: string;
  status: 'created' | 'funded' | 'verified' | 'completed';
  agreement: AgreementData;
  escrowAddress?: string;
  verificationFiles?: File[];
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [transaction, setTransaction] = useState<TransactionData | null>(null);

  const handleCreateAgreement = (agreementData: AgreementData) => {
    const newTransaction: TransactionData = {
      id: `tx_${Date.now()}`,
      status: 'created',
      agreement: agreementData,
    };
    setTransaction(newTransaction);
    setCurrentStep('escrow');
  };

  const handleEscrowInitiation = (escrowAddress: string) => {
    if (transaction) {
      setTransaction({
        ...transaction,
        status: 'funded',
        escrowAddress,
      });
      setCurrentStep('verification');
    }
  };

  const handleVerificationUpload = (files: File[]) => {
    if (transaction) {
      setTransaction({
        ...transaction,
        status: 'verified',
        verificationFiles: files,
      });
      setCurrentStep('progress');
    }
  };

  const handleConfirmation = () => {
    if (transaction) {
      setTransaction({
        ...transaction,
        status: 'completed',
      });
    }
  };

  const connectWallet = () => {
    setIsWalletConnected(true);
    setShowWalletModal(false);
    if (currentStep === 'landing') {
      setCurrentStep('dashboard');
    }
  };

  const renderLanding = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <motion.header 
        className="flex justify-between items-center p-6 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-purple-400" />
          <span className="text-2xl">TrustCore</span>
        </div>
        <Button 
          onClick={() => setShowWalletModal(true)}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Wallet className="h-4 w-4 mr-2" />
          Connect Wallet
        </Button>
      </motion.header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            VERIFY ANYTHING, TRADE ANYTHING
          </h1>
          <h2 className="text-4xl mb-8 text-gray-300">
            TRUST NO ONE
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Eliminate fraud in online transactions with smart contract-based escrow. 
            Human agreements become code-enforced truth.
          </p>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
              <Lock className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl mb-2 text-white">Smart Escrow</h3>
              <p className="text-gray-400">Lock funds until both parties confirm completion</p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
              <Eye className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl mb-2 text-white">ZK Verification</h3>
              <p className="text-gray-400">Private proofs with AI-powered validation</p>
            </Card>
            <Card className="bg-white/5 border-white/10 p-6 backdrop-blur-sm">
              <Users className="h-12 w-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl mb-2 text-white">Universal Trust</h3>
              <p className="text-gray-400">Works for crypto, freelance, dating, and more</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={() => setShowWalletModal(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              Start Trading Safely
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Use Cases */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl mb-12 text-gray-300">Trusted by millions for</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {['Crypto Trading', 'Freelance Work', 'E-commerce', 'Real Estate', 'Dating Safety', 'Supply Chain'].map((useCase, index) => (
              <motion.div
                key={useCase}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <span className="text-purple-300">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl mb-2">TrustCore Dashboard</h1>
          <p className="text-gray-400 mb-8">Your universal platform for trustless agreements</p>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('agreement')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl">Create Agreement</h3>
              </div>
              <p className="text-gray-400">Start a new smart contract-based agreement</p>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('templates')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl">Template Library</h3>
              </div>
              <p className="text-gray-400">Browse industry-tested agreement templates</p>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('multiparty')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-600/20 rounded-lg">
                  <Users2 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl">Multi-Party Deals</h3>
              </div>
              <p className="text-gray-400">Complex agreements with multiple stakeholders</p>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('analytics')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-yellow-600/20 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl">Analytics</h3>
              </div>
              <p className="text-gray-400">Track performance and insights</p>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('integrations')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Puzzle className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl">Integrations</h3>
              </div>
              <p className="text-gray-400">Connect with your favorite tools</p>
            </Card>

            <Card 
              className="bg-slate-800 border-slate-700 p-6 hover:bg-slate-750 cursor-pointer transition-colors"
              onClick={() => setCurrentStep('whitelabel')}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-pink-600/20 rounded-lg">
                  <Palette className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl">White Label</h3>
              </div>
              <p className="text-gray-400">Customize TrustCore for your brand</p>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-2xl mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { action: 'Agreement "Freelance Project" completed', time: '2 hours ago', status: 'success' },
                { action: 'New template "E-commerce Sale" added to library', time: '5 hours ago', status: 'info' },
                { action: 'Multi-party agreement awaiting signature', time: '1 day ago', status: 'warning' },
                { action: 'Stripe integration configured', time: '2 days ago', status: 'success' },
                { action: 'Custom branding applied', time: '3 days ago', status: 'info' }
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
        </motion.div>
      </div>
    </div>
  );

  const renderMainApp = () => (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-purple-400" />
          <span className="text-2xl">TrustCore</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentStep('dashboard')}
            className="border-slate-600 text-gray-300 hover:bg-slate-700"
          >
            <Menu className="h-4 w-4 mr-2" />
            Dashboard
          </Button>
          <span className="text-sm text-gray-400">Wallet Connected</span>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {currentStep === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {renderDashboard()}
            </motion.div>
          )}

          {currentStep === 'templates' && (
            <motion.div
              key="templates"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TemplateLibrary 
                onSelectTemplate={(template) => {
                  console.log('Selected template:', template);
                  setCurrentStep('agreement');
                }}
                onClose={() => setCurrentStep('dashboard')}
              />
            </motion.div>
          )}

          {currentStep === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <AnalyticsDashboard userRole="individual" />
            </motion.div>
          )}

          {currentStep === 'integrations' && (
            <motion.div
              key="integrations"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <IntegrationMarketplace />
            </motion.div>
          )}

          {currentStep === 'whitelabel' && (
            <motion.div
              key="whitelabel"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <WhiteLabelCustomization />
            </motion.div>
          )}

          {currentStep === 'multiparty' && (
            <motion.div
              key="multiparty"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MultiPartyAgreements />
            </motion.div>
          )}

          {currentStep === 'agreement' && (
            <motion.div
              key="agreement"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <AgreementCreation onNext={handleCreateAgreement} />
            </motion.div>
          )}
          
          {currentStep === 'escrow' && transaction && (
            <motion.div
              key="escrow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <EscrowInitiation 
                agreement={transaction.agreement}
                onNext={handleEscrowInitiation}
              />
            </motion.div>
          )}
          
          {currentStep === 'verification' && transaction && (
            <motion.div
              key="verification"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <VerificationUpload 
                transaction={transaction}
                onNext={handleVerificationUpload}
              />
            </motion.div>
          )}
          
          {currentStep === 'progress' && transaction && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ProgressTracker 
                transaction={transaction}
                onNext={() => setCurrentStep('confirmation')}
              />
            </motion.div>
          )}
          
          {currentStep === 'confirmation' && transaction && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ConfirmationRelease 
                transaction={transaction}
                onConfirm={handleConfirmation}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <>
      {currentStep === 'landing' ? renderLanding() : renderMainApp()}
      
      <WalletConnect 
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={connectWallet}
      />
    </>
  );
}