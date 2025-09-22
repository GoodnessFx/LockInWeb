import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, AlertCircle, MessageSquare, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

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

interface ProgressTrackerProps {
  transaction: TransactionData;
  onNext: () => void;
}

interface TimelineStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  timestamp?: string;
  icon: React.ReactNode;
}

export function ProgressTracker({ transaction, onNext }: ProgressTrackerProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [zkProofProgress, setZkProofProgress] = useState(0);
  const [aiAnalysisComplete, setAiAnalysisComplete] = useState(false);

  const steps: TimelineStep[] = [
    {
      id: 'agreement',
      title: 'Agreement Created',
      description: 'Smart contract deployed and terms defined',
      status: 'completed',
      timestamp: new Date(Date.now() - 3600000).toLocaleTimeString(),
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      id: 'funded',
      title: 'Funds Locked',
      description: `${transaction.agreement.amount} ${transaction.agreement.currency} secured in escrow`,
      status: 'completed',
      timestamp: new Date(Date.now() - 1800000).toLocaleTimeString(),
      icon: <Shield className="h-5 w-5" />
    },
    {
      id: 'verification',
      title: 'Verification Submitted',
      description: 'Documents uploaded and AI analysis initiated',
      status: 'completed',
      timestamp: new Date(Date.now() - 300000).toLocaleTimeString(),
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 'analysis',
      title: 'AI Analysis',
      description: 'Zero-knowledge proofs being generated',
      status: currentStep >= 3 ? 'completed' : 'current',
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      id: 'confirmation',
      title: 'Awaiting Confirmation',
      description: 'Waiting for counterparty confirmation',
      status: currentStep >= 4 ? 'current' : 'pending',
      icon: <Clock className="h-5 w-5" />
    }
  ];

  useEffect(() => {
    // Simulate AI analysis progress
    const analysisInterval = setInterval(() => {
      setZkProofProgress(prev => {
        if (prev >= 100) {
          setAiAnalysisComplete(true);
          setCurrentStep(4);
          clearInterval(analysisInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    // Countdown timer
    const timerInterval = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearInterval(analysisInterval);
      clearInterval(timerInterval);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-2">Progress Tracking</h1>
        <p className="text-gray-400 mb-8">Monitor your transaction in real-time</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h2 className="text-xl mb-6">Transaction Timeline</h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step.status === 'completed' 
                      ? 'bg-green-600 border-green-600 text-white' 
                      : step.status === 'current'
                      ? 'bg-purple-600 border-purple-600 text-white'
                      : 'border-gray-600 text-gray-400'
                  }`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className={`text-lg ${
                        step.status === 'completed' ? 'text-green-300' :
                        step.status === 'current' ? 'text-purple-300' :
                        'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                      {step.timestamp && (
                        <span className="text-xs text-gray-500">{step.timestamp}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                    
                    {step.id === 'analysis' && step.status === 'current' && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Generating ZK Proofs</span>
                          <span>{zkProofProgress}%</span>
                        </div>
                        <Progress value={zkProofProgress} className="h-2" />
                      </div>
                    )}
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`absolute left-5 mt-12 w-0.5 h-6 ${
                      step.status === 'completed' ? 'bg-green-600' : 'bg-gray-600'
                    }`} style={{ marginLeft: '20px' }} />
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </div>

        {/* Status Panel */}
        <div className="space-y-6">
          {/* Current Status */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="text-lg mb-4">Current Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Transaction ID</span>
                <span className="font-mono text-sm">{transaction.id}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Status</span>
                <Badge 
                  className={
                    aiAnalysisComplete 
                      ? 'bg-green-600/20 text-green-300'
                      : 'bg-purple-600/20 text-purple-300'
                  }
                >
                  {aiAnalysisComplete ? 'Ready for Confirmation' : 'Processing'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Time Remaining</span>
                <span className="font-mono text-amber-300">{formatTime(timeRemaining)}</span>
              </div>
            </div>
          </Card>

          {/* Security Info */}
          <Card className="bg-slate-800 border-slate-700 p-6">
            <h3 className="text-lg mb-4">Security Features</h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Smart Contract Verified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>ZK Proofs Generated</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>AI Analysis Complete</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-amber-400" />
                <span>Awaiting Counterparty</span>
              </div>
            </div>
          </Card>

          {/* Actions */}
          {aiAnalysisComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-lg mb-4">Next Steps</h3>
                
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Analysis complete! The system is ready for counterparty confirmation.
                  </p>
                  
                  <Button 
                    onClick={onNext}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    Proceed to Confirmation
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-slate-600 text-gray-300 hover:bg-slate-700"
                  >
                    Send Reminder
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>

      {/* Real-time Updates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-blue-500/10 border-blue-500/30 p-6">
          <div className="flex items-center space-x-2 mb-2">
            <Zap className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg text-blue-300">Live Updates</h3>
          </div>
          <div className="text-sm text-blue-200 space-y-1">
            <p>• Blockchain confirmation: 12/12 blocks</p>
            <p>• ZK proof verification: Complete</p>
            <p>• AI confidence score: 96.8%</p>
            <p>• Counterparty notified via email and push notification</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}