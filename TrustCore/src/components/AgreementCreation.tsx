import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, DollarSign, User, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface AgreementData {
  title: string;
  description: string;
  amount: string;
  currency: string;
  counterparty: string;
  terms: string;
}

interface AgreementCreationProps {
  onNext: (data: AgreementData) => void;
}

export function AgreementCreation({ onNext }: AgreementCreationProps) {
  const [formData, setFormData] = useState<AgreementData>({
    title: '',
    description: '',
    amount: '',
    currency: 'USDC',
    counterparty: '',
    terms: '',
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (field: keyof AgreementData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onNext(formData);
  };

  const isStepValid = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return formData.title && formData.description;
      case 2:
        return formData.amount && formData.currency && formData.counterparty;
      case 3:
        return formData.terms;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-2">Create Agreement</h1>
        <p className="text-gray-400 mb-8">Define the terms of your transaction</p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step >= stepNumber 
                  ? 'bg-purple-600 border-purple-600 text-white' 
                  : 'border-gray-600 text-gray-400'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-32 h-1 mx-4 ${
                  step > stepNumber ? 'bg-purple-600' : 'bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-400">
          <span>Basic Info</span>
          <span>Payment Details</span>
          <span>Terms & Conditions</span>
        </div>
      </motion.div>

      <Card className="bg-slate-800 border-slate-700 p-8">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl">Basic Information</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-white">Agreement Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., Freelance Web Development Project"
                  className="bg-slate-700 border-slate-600 text-white mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="description" className="text-white">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe what this agreement covers..."
                  className="bg-slate-700 border-slate-600 text-white mt-1 min-h-32"
                />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <DollarSign className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl">Payment Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="amount" className="text-white">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  value={formData.amount}
                  onChange={(e) => handleInputChange('amount', e.target.value)}
                  placeholder="1000"
                  className="bg-slate-700 border-slate-600 text-white mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="currency" className="text-white">Currency</Label>
                <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="USDC">USDC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                    <SelectItem value="USDT">USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="counterparty" className="text-white">Counterparty Address/Email</Label>
              <Input
                id="counterparty"
                value={formData.counterparty}
                onChange={(e) => handleInputChange('counterparty', e.target.value)}
                placeholder="0x1234... or email@example.com"
                className="bg-slate-700 border-slate-600 text-white mt-1"
              />
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 mb-6">
              <User className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl">Terms & Conditions</h2>
            </div>
            
            <div>
              <Label htmlFor="terms" className="text-white">Agreement Terms</Label>
              <Textarea
                id="terms"
                value={formData.terms}
                onChange={(e) => handleInputChange('terms', e.target.value)}
                placeholder="Define the specific terms, deliverables, deadlines, and conditions for release of funds..."
                className="bg-slate-700 border-slate-600 text-white mt-1 min-h-40"
              />
            </div>
            
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h3 className="text-lg mb-2 text-purple-300">Smart Contract Terms</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Funds will be locked in escrow until both parties confirm completion</li>
                <li>• Dispute resolution available through AI mediation</li>
                <li>• Zero-knowledge proofs ensure privacy while maintaining verification</li>
                <li>• Automatic release after confirmation from both parties</li>
              </ul>
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            className="border-slate-600 text-gray-300 hover:bg-slate-700"
          >
            Previous
          </Button>
          
          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!isStepValid(step)}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid(step)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Create Agreement
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}