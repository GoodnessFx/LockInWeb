import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, Image, CheckCircle, Eye, Zap, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';

interface TransactionData {
  id: string;
  status: string;
  agreement: {
    title: string;
    amount: string;
    currency: string;
  };
  escrowAddress?: string;
}

interface VerificationUploadProps {
  transaction: TransactionData;
  onNext: (files: File[]) => void;
}

interface UploadedFile {
  file: File;
  status: 'uploading' | 'processing' | 'verified' | 'failed';
  progress: number;
  extractedData?: {
    type: string;
    confidence: number;
    details: string[];
  };
}

export function VerificationUpload({ transaction, onNext }: VerificationUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      processFiles(files);
    }
  };

  const processFiles = async (files: File[]) => {
    const newFiles: UploadedFile[] = files.map(file => ({
      file,
      status: 'uploading',
      progress: 0
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);

    // Simulate file processing
    for (let i = 0; i < newFiles.length; i++) {
      const fileIndex = uploadedFiles.length + i;
      
      // Upload simulation
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setUploadedFiles(prev => prev.map((f, idx) => 
          idx === fileIndex ? { ...f, progress } : f
        ));
      }

      // Processing simulation
      setUploadedFiles(prev => prev.map((f, idx) => 
        idx === fileIndex ? { ...f, status: 'processing', progress: 0 } : f
      ));

      for (let progress = 0; progress <= 100; progress += 20) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setUploadedFiles(prev => prev.map((f, idx) => 
          idx === fileIndex ? { ...f, progress } : f
        ));
      }

      // Generate mock extracted data
      const mockData = generateMockExtractedData(newFiles[i].file.name);
      
      setUploadedFiles(prev => prev.map((f, idx) => 
        idx === fileIndex ? { 
          ...f, 
          status: 'verified', 
          progress: 100,
          extractedData: mockData
        } : f
      ));
    }
  };

  const generateMockExtractedData = (filename: string) => {
    const type = filename.toLowerCase().includes('receipt') ? 'Receipt' : 
                 filename.toLowerCase().includes('contract') ? 'Contract' :
                 filename.toLowerCase().includes('invoice') ? 'Invoice' : 'Document';
    
    const mockDetails = {
      'Receipt': [
        'Payment confirmed: $' + transaction.agreement.amount,
        'Date: ' + new Date().toLocaleDateString(),
        'Merchant verification: Passed',
        'Digital signature: Valid'
      ],
      'Contract': [
        'Agreement terms matched: 98%',
        'Digital signatures: Valid',
        'Legal compliance: Verified',
        'Timestamp: Authenticated'
      ],
      'Invoice': [
        'Amount verification: Passed',
        'Service description: Matched',
        'Tax calculation: Correct',
        'Payment terms: Clear'
      ],
      'Document': [
        'Document integrity: Verified',
        'Content analysis: Complete',
        'Metadata extraction: Successful',
        'Format validation: Passed'
      ]
    };

    return {
      type,
      confidence: Math.floor(Math.random() * 15) + 85, // 85-100%
      details: mockDetails[type as keyof typeof mockDetails] || mockDetails.Document
    };
  };

  const handleContinue = () => {
    const files = uploadedFiles.map(uf => uf.file);
    onNext(files);
  };

  const allFilesVerified = uploadedFiles.length > 0 && uploadedFiles.every(f => f.status === 'verified');

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl mb-2">Verification Upload</h1>
        <p className="text-gray-400 mb-8">Upload documents to verify agreement completion</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-4">Upload Documents</h2>
          
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragOver 
                ? 'border-purple-400 bg-purple-400/10' 
                : 'border-slate-600 hover:border-slate-500'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg mb-2">Drop files here or click to upload</h3>
            <p className="text-gray-400 mb-4">
              Supported: PDF, PNG, JPG, DOC, TXT
            </p>
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
              accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.txt"
            />
            <Button 
              onClick={() => document.getElementById('file-upload')?.click()}
              variant="outline"
              className="border-slate-600 text-gray-300 hover:bg-slate-700"
            >
              Choose Files
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg">AI-Powered Verification</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="h-4 w-4 text-purple-400" />
                <span>OCR Text Extraction</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="h-4 w-4 text-purple-400" />
                <span>NLP Content Analysis</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-purple-400" />
                <span>Zero-Knowledge Proofs</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FileText className="h-4 w-4 text-purple-400" />
                <span>Document Validation</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Processing Results */}
        <Card className="bg-slate-800 border-slate-700 p-6">
          <h2 className="text-xl mb-4">Processing Results</h2>
          
          {uploadedFiles.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Upload documents to see verification results</p>
            </div>
          ) : (
            <div className="space-y-4">
              {uploadedFiles.map((uploadedFile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-slate-700 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm truncate">{uploadedFile.file.name}</span>
                    </div>
                    <Badge 
                      variant={uploadedFile.status === 'verified' ? 'default' : 'secondary'}
                      className={
                        uploadedFile.status === 'verified' 
                          ? 'bg-green-600/20 text-green-300' 
                          : uploadedFile.status === 'failed'
                          ? 'bg-red-600/20 text-red-300'
                          : 'bg-purple-600/20 text-purple-300'
                      }
                    >
                      {uploadedFile.status}
                    </Badge>
                  </div>
                  
                  <Progress value={uploadedFile.progress} className="mb-3" />
                  
                  {uploadedFile.extractedData && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-300">{uploadedFile.extractedData.type}</span>
                        <span className="text-sm text-green-300">
                          {uploadedFile.extractedData.confidence}% confidence
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 space-y-1">
                        {uploadedFile.extractedData.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </Card>
      </div>

      {allFilesVerified && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 p-6 text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Verification Complete!</h3>
            <p className="text-gray-300 mb-6">
              All documents have been successfully verified and zero-knowledge proofs generated.
            </p>
            <Button 
              onClick={handleContinue}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Continue to Progress Tracking
            </Button>
          </Card>
        </motion.div>
      )}
    </div>
  );
}