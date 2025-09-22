import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Copy, Play, Lock, Globe, Smartphone, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

export function APIDocumentation() {
  const [activeEndpoint, setActiveEndpoint] = useState('');

  const apiEndpoints = [
    {
      method: 'POST',
      path: '/api/agreements',
      description: 'Create a new agreement',
      auth: true,
      requestBody: {
        title: 'string',
        description: 'string',
        amount: 'number',
        currency: 'string',
        counterparty: 'string',
        terms: 'string'
      },
      response: {
        id: 'string',
        status: 'created',
        escrowAddress: 'string',
        createdAt: 'timestamp'
      }
    },
    {
      method: 'GET',
      path: '/api/agreements/{id}',
      description: 'Get agreement details',
      auth: true,
      requestBody: null,
      response: {
        id: 'string',
        title: 'string',
        status: 'created | funded | verified | completed',
        escrowAddress: 'string',
        parties: 'array'
      }
    },
    {
      method: 'POST',
      path: '/api/agreements/{id}/verify',
      description: 'Upload verification documents',
      auth: true,
      requestBody: {
        files: 'File[]',
        proofType: 'zk | document | signature'
      },
      response: {
        verificationId: 'string',
        status: 'processing | verified | failed',
        confidence: 'number'
      }
    },
    {
      method: 'POST',
      path: '/api/escrow/deploy',
      description: 'Deploy smart contract escrow',
      auth: true,
      requestBody: {
        agreementId: 'string',
        amount: 'number',
        currency: 'string',
        parties: 'string[]'
      },
      response: {
        contractAddress: 'string',
        transactionHash: 'string',
        gasUsed: 'number'
      }
    },
    {
      method: 'POST',
      path: '/api/escrow/{address}/release',
      description: 'Release escrowed funds',
      auth: true,
      requestBody: {
        signatures: 'string[]',
        reason: 'string'
      },
      response: {
        transactionHash: 'string',
        releasedAmount: 'number',
        status: 'success | failed'
      }
    }
  ];

  const webhookEvents = [
    {
      event: 'agreement.created',
      description: 'Triggered when a new agreement is created',
      payload: {
        agreementId: 'string',
        title: 'string',
        parties: 'string[]',
        timestamp: 'ISO 8601'
      }
    },
    {
      event: 'escrow.funded',
      description: 'Triggered when escrow receives funds',
      payload: {
        agreementId: 'string',
        contractAddress: 'string',
        amount: 'number',
        currency: 'string'
      }
    },
    {
      event: 'verification.completed',
      description: 'Triggered when document verification completes',
      payload: {
        agreementId: 'string',
        verificationId: 'string',
        status: 'verified | failed',
        confidence: 'number'
      }
    },
    {
      event: 'funds.released',
      description: 'Triggered when funds are released from escrow',
      payload: {
        agreementId: 'string',
        contractAddress: 'string',
        amount: 'number',
        recipients: 'object[]'
      }
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const generateCurlExample = (endpoint: any) => {
    const method = endpoint.method;
    const url = `https://api.trustcore.xyz${endpoint.path}`;
    const headers = endpoint.auth ? '-H "Authorization: Bearer YOUR_API_KEY"' : '';
    const body = endpoint.requestBody 
      ? `-d '${JSON.stringify(endpoint.requestBody, null, 2)}'`
      : '';
    
    return `curl -X ${method} ${url} \\
  ${headers} \\
  -H "Content-Type: application/json" \\
  ${body}`.trim();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-4xl mb-2">API Documentation</h1>
          <p className="text-gray-400">Integrate TrustCore into your applications</p>
        </div>

        {/* Getting Started */}
        <Card className="bg-slate-800 border-slate-700 p-6 mb-8">
          <h2 className="text-2xl mb-4">Getting Started</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="p-4 bg-purple-600/20 rounded-lg w-fit mx-auto mb-4">
                <Lock className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg mb-2">1. Get API Key</h3>
              <p className="text-sm text-gray-400">
                Generate your API key in the dashboard settings
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-blue-600/20 rounded-lg w-fit mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg mb-2">2. Make Requests</h3>
              <p className="text-sm text-gray-400">
                Use REST API endpoints with your preferred language
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-600/20 rounded-lg w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg mb-2">3. Handle Webhooks</h3>
              <p className="text-sm text-gray-400">
                Receive real-time events for your integrations
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <h4 className="text-sm mb-2 text-purple-300">Base URL</h4>
            <code className="text-sm text-green-300">https://api.trustcore.xyz/v1</code>
          </div>
        </Card>

        <Tabs defaultValue="endpoints" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
            <TabsTrigger value="endpoints" className="text-white data-[state=active]:bg-purple-600">
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="text-white data-[state=active]:bg-purple-600">
              Webhooks
            </TabsTrigger>
            <TabsTrigger value="sdks" className="text-white data-[state=active]:bg-purple-600">
              SDKs
            </TabsTrigger>
            <TabsTrigger value="examples" className="text-white data-[state=active]:bg-purple-600">
              Examples
            </TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints">
            <div className="space-y-6">
              {apiEndpoints.map((endpoint, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <Badge 
                        className={`${
                          endpoint.method === 'GET' ? 'bg-blue-600/20 text-blue-300' :
                          endpoint.method === 'POST' ? 'bg-green-600/20 text-green-300' :
                          endpoint.method === 'PUT' ? 'bg-yellow-600/20 text-yellow-300' :
                          'bg-red-600/20 text-red-300'
                        }`}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-purple-300">{endpoint.path}</code>
                      {endpoint.auth && (
                        <Badge className="bg-orange-600/20 text-orange-300">
                          <Lock className="h-3 w-3 mr-1" />
                          Auth Required
                        </Badge>
                      )}
                    </div>
                    <Button 
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(generateCurlExample(endpoint))}
                      className="border-slate-600 text-gray-300"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{endpoint.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {endpoint.requestBody && (
                      <div>
                        <h4 className="text-sm mb-2 text-purple-300">Request Body</h4>
                        <pre className="bg-slate-900/50 p-3 rounded text-sm text-green-300 overflow-x-auto">
                          {JSON.stringify(endpoint.requestBody, null, 2)}
                        </pre>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-sm mb-2 text-purple-300">Response</h4>
                      <pre className="bg-slate-900/50 p-3 rounded text-sm text-blue-300 overflow-x-auto">
                        {JSON.stringify(endpoint.response, null, 2)}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm mb-2 text-purple-300">cURL Example</h4>
                    <pre className="bg-slate-900/50 p-3 rounded text-sm text-gray-300 overflow-x-auto">
                      {generateCurlExample(endpoint)}
                    </pre>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="webhooks">
            <Card className="bg-slate-800 border-slate-700 p-6 mb-6">
              <h2 className="text-xl mb-4">Webhook Configuration</h2>
              <p className="text-gray-400 mb-4">
                Configure webhooks in your dashboard to receive real-time notifications about agreement events.
              </p>
              
              <div className="bg-slate-900/50 p-4 rounded-lg mb-4">
                <h4 className="text-sm mb-2 text-purple-300">Webhook URL Format</h4>
                <code className="text-sm text-green-300">POST https://your-domain.com/webhooks/trustcore</code>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 mb-2">Security</h4>
                <p className="text-blue-200 text-sm">
                  All webhook requests include a signature in the <code>X-TrustCore-Signature</code> header 
                  for verification. Use your webhook secret to validate the payload.
                </p>
              </div>
            </Card>
            
            <div className="space-y-4">
              {webhookEvents.map((webhook, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg text-purple-300">{webhook.event}</h3>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-gray-300"
                    >
                      <Play className="h-3 w-3 mr-1" />
                      Test
                    </Button>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{webhook.description}</p>
                  
                  <div>
                    <h4 className="text-sm mb-2 text-purple-300">Payload</h4>
                    <pre className="bg-slate-900/50 p-3 rounded text-sm text-green-300 overflow-x-auto">
                      {JSON.stringify(webhook.payload, null, 2)}
                    </pre>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sdks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'JavaScript/TypeScript', icon: '📦', command: 'npm install @trustcore/sdk' },
                { name: 'Python', icon: '🐍', command: 'pip install trustcore' },
                { name: 'PHP', icon: '🔷', command: 'composer require trustcore/sdk' },
                { name: 'Ruby', icon: '💎', command: 'gem install trustcore' },
                { name: 'Go', icon: '🔷', command: 'go get github.com/trustcore/go-sdk' },
                { name: 'Java', icon: '☕', command: 'implementation "com.trustcore:sdk:1.0.0"' }
              ].map((sdk, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{sdk.icon}</span>
                    <h3 className="text-lg">{sdk.name}</h3>
                  </div>
                  
                  <div className="bg-slate-900/50 p-3 rounded mb-4">
                    <code className="text-sm text-green-300">{sdk.command}</code>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-purple-600 hover:bg-purple-700"
                    >
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-slate-600 text-gray-300"
                    >
                      <Globe className="h-3 w-3" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">JavaScript Example</h3>
                <pre className="bg-slate-900/50 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`import TrustCore from '@trustcore/sdk';

const trustcore = new TrustCore({
  apiKey: 'your_api_key_here',
  environment: 'production' // or 'sandbox'
});

// Create a new agreement
const agreement = await trustcore.agreements.create({
  title: 'Freelance Web Development',
  description: 'Build a responsive website',
  amount: 5000,
  currency: 'USDC',
  counterparty: '0x1234...5678',
  terms: 'Complete website within 30 days'
});

// Deploy escrow contract
const escrow = await trustcore.escrow.deploy({
  agreementId: agreement.id,
  amount: 5000,
  currency: 'USDC',
  parties: ['0x1234...5678', '0xabcd...efgh']
});

// Upload verification documents
const verification = await trustcore.verification.upload(
  agreement.id,
  [documentFile],
  { type: 'document' }
);

console.log('Agreement created:', agreement.id);
console.log('Escrow deployed:', escrow.contractAddress);`}
                </pre>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-6">
                <h3 className="text-xl mb-4">Python Example</h3>
                <pre className="bg-slate-900/50 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`import trustcore

client = trustcore.Client(
    api_key="your_api_key_here",
    environment="production"
)

# Create agreement
agreement = client.agreements.create(
    title="Supply Chain Purchase Order",
    description="1000 units of Product XYZ",
    amount=25000,
    currency="USDC",
    counterparty="0x1234...5678",
    terms="Delivery within 14 days"
)

# Set up webhook handler
@app.route('/webhooks/trustcore', methods=['POST'])
def handle_webhook():
    payload = request.get_json()
    signature = request.headers.get('X-TrustCore-Signature')
    
    if trustcore.webhooks.verify(payload, signature):
        if payload['event'] == 'funds.released':
            # Handle fund release event
            print(f"Funds released for agreement {payload['agreementId']}")
    
    return 'OK'

print(f"Agreement created: {agreement.id}")`}
                </pre>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}