import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Upload, Eye, Download, Smartphone, Monitor, Code, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';

interface BrandSettings {
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundGradient: string;
  fontFamily: string;
  borderRadius: number;
  companyName: string;
  customDomain: string;
  footerText: string;
  enableDarkMode: boolean;
  enableMobileApp: boolean;
  customCSS: string;
}

export function WhiteLabelCustomization() {
  const [brandSettings, setBrandSettings] = useState<BrandSettings>({
    logoUrl: '',
    primaryColor: '#8b5cf6',
    secondaryColor: '#06b6d4',
    accentColor: '#10b981',
    backgroundGradient: 'from-slate-900 via-purple-900 to-slate-900',
    fontFamily: 'Inter',
    borderRadius: 8,
    companyName: 'Your Company',
    customDomain: 'trust.yourcompany.com',
    footerText: 'Powered by Your Company',
    enableDarkMode: true,
    enableMobileApp: true,
    customCSS: ''
  });

  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const handleSettingChange = (key: keyof BrandSettings, value: any) => {
    setBrandSettings(prev => ({ ...prev, [key]: value }));
  };

  const fontOptions = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Poppins', 'Nunito', 'Source Sans Pro'
  ];

  const gradientOptions = [
    'from-slate-900 via-purple-900 to-slate-900',
    'from-blue-900 via-slate-900 to-blue-900',
    'from-green-900 via-slate-900 to-green-900',
    'from-red-900 via-slate-900 to-red-900',
    'from-yellow-900 via-slate-900 to-yellow-900',
    'from-pink-900 via-purple-900 to-pink-900'
  ];

  const generateCustomCSS = () => {
    return `
:root {
  --primary-color: ${brandSettings.primaryColor};
  --secondary-color: ${brandSettings.secondaryColor};
  --accent-color: ${brandSettings.accentColor};
  --border-radius: ${brandSettings.borderRadius}px;
  --font-family: '${brandSettings.fontFamily}', sans-serif;
}

.brand-logo {
  content: url('${brandSettings.logoUrl}');
}

.primary-gradient {
  background: linear-gradient(135deg, ${brandSettings.primaryColor}, ${brandSettings.secondaryColor});
}

.hero-section {
  background: linear-gradient(135deg, ${brandSettings.backgroundGradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')});
}

${brandSettings.customCSS}
    `.trim();
  };

  const PreviewCard = () => (
    <Card className={`bg-gradient-to-br ${brandSettings.backgroundGradient} border-slate-700 p-6 text-white`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          {brandSettings.logoUrl ? (
            <img src={brandSettings.logoUrl} alt="Logo" className="h-8 w-8 rounded" />
          ) : (
            <div 
              className="h-8 w-8 rounded flex items-center justify-center text-white"
              style={{ backgroundColor: brandSettings.primaryColor }}
            >
              {brandSettings.companyName.charAt(0)}
            </div>
          )}
          <span className="text-xl" style={{ fontFamily: brandSettings.fontFamily }}>
            {brandSettings.companyName}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        <Button 
          className="w-full text-white"
          style={{ 
            backgroundColor: brandSettings.primaryColor,
            borderRadius: brandSettings.borderRadius,
            fontFamily: brandSettings.fontFamily
          }}
        >
          Primary Action
        </Button>
        
        <Card 
          className="bg-white/10 border-white/20 p-4"
          style={{ borderRadius: brandSettings.borderRadius }}
        >
          <h3 className="text-lg mb-2" style={{ color: brandSettings.accentColor }}>
            Sample Card
          </h3>
          <p className="text-sm text-gray-300">
            This is how your branded interface will look to your users.
          </p>
        </Card>
        
        <div className="text-center text-xs text-gray-400 mt-6">
          {brandSettings.footerText}
        </div>
      </div>
    </Card>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl mb-2">White Label Customization</h1>
            <p className="text-gray-400">Customize TrustCore to match your brand identity</p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              onClick={() => setPreviewMode(previewMode === 'desktop' ? 'mobile' : 'desktop')}
              className="border-slate-600 text-gray-300"
            >
              {previewMode === 'desktop' ? <Smartphone className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <Tabs defaultValue="branding" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-slate-700">
                <TabsTrigger value="branding" className="text-white data-[state=active]:bg-purple-600">
                  Brand
                </TabsTrigger>
                <TabsTrigger value="colors" className="text-white data-[state=active]:bg-purple-600">
                  Colors
                </TabsTrigger>
                <TabsTrigger value="layout" className="text-white data-[state=active]:bg-purple-600">
                  Layout
                </TabsTrigger>
                <TabsTrigger value="advanced" className="text-white data-[state=active]:bg-purple-600">
                  Advanced
                </TabsTrigger>
              </TabsList>

              <TabsContent value="branding" className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-lg mb-4">Brand Identity</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="company-name" className="text-white">Company Name</Label>
                      <Input
                        id="company-name"
                        value={brandSettings.companyName}
                        onChange={(e) => handleSettingChange('companyName', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="logo-url" className="text-white">Logo URL</Label>
                      <div className="flex space-x-2 mt-1">
                        <Input
                          id="logo-url"
                          value={brandSettings.logoUrl}
                          onChange={(e) => handleSettingChange('logoUrl', e.target.value)}
                          placeholder="https://..."
                          className="bg-slate-700 border-slate-600 text-white flex-1"
                        />
                        <Button 
                          variant="outline"
                          className="border-slate-600 text-gray-300"
                        >
                          <Upload className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="custom-domain" className="text-white">Custom Domain</Label>
                      <Input
                        id="custom-domain"
                        value={brandSettings.customDomain}
                        onChange={(e) => handleSettingChange('customDomain', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="footer-text" className="text-white">Footer Text</Label>
                      <Input
                        id="footer-text"
                        value={brandSettings.footerText}
                        onChange={(e) => handleSettingChange('footerText', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white mt-1"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="colors" className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-lg mb-4">Color Scheme</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="primary-color" className="text-white">Primary Color</Label>
                      <div className="flex space-x-2 mt-1">
                        <Input
                          id="primary-color"
                          type="color"
                          value={brandSettings.primaryColor}
                          onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                          className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                        />
                        <Input
                          value={brandSettings.primaryColor}
                          onChange={(e) => handleSettingChange('primaryColor', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white flex-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="secondary-color" className="text-white">Secondary Color</Label>
                      <div className="flex space-x-2 mt-1">
                        <Input
                          id="secondary-color"
                          type="color"
                          value={brandSettings.secondaryColor}
                          onChange={(e) => handleSettingChange('secondaryColor', e.target.value)}
                          className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                        />
                        <Input
                          value={brandSettings.secondaryColor}
                          onChange={(e) => handleSettingChange('secondaryColor', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white flex-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="accent-color" className="text-white">Accent Color</Label>
                      <div className="flex space-x-2 mt-1">
                        <Input
                          id="accent-color"
                          type="color"
                          value={brandSettings.accentColor}
                          onChange={(e) => handleSettingChange('accentColor', e.target.value)}
                          className="w-12 h-10 p-1 bg-slate-700 border-slate-600"
                        />
                        <Input
                          value={brandSettings.accentColor}
                          onChange={(e) => handleSettingChange('accentColor', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white flex-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-white">Background Gradient</Label>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {gradientOptions.map((gradient, index) => (
                          <div
                            key={index}
                            className={`h-12 rounded cursor-pointer border-2 ${
                              brandSettings.backgroundGradient === gradient 
                                ? 'border-purple-400' 
                                : 'border-slate-600'
                            } bg-gradient-to-r ${gradient}`}
                            onClick={() => handleSettingChange('backgroundGradient', gradient)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="layout" className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-lg mb-4">Layout & Typography</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-white">Font Family</Label>
                      <select
                        value={brandSettings.fontFamily}
                        onChange={(e) => handleSettingChange('fontFamily', e.target.value)}
                        className="w-full mt-1 p-2 bg-slate-700 border border-slate-600 rounded text-white"
                      >
                        {fontOptions.map(font => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label className="text-white">Border Radius: {brandSettings.borderRadius}px</Label>
                      <Slider
                        value={[brandSettings.borderRadius]}
                        onValueChange={(value) => handleSettingChange('borderRadius', value[0])}
                        max={20}
                        min={0}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode" className="text-white">Enable Dark Mode</Label>
                      <Switch
                        id="dark-mode"
                        checked={brandSettings.enableDarkMode}
                        onCheckedChange={(checked) => handleSettingChange('enableDarkMode', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mobile-app" className="text-white">Mobile App Version</Label>
                      <Switch
                        id="mobile-app"
                        checked={brandSettings.enableMobileApp}
                        onCheckedChange={(checked) => handleSettingChange('enableMobileApp', checked)}
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 p-6">
                  <h3 className="text-lg mb-4">Advanced Customization</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="custom-css" className="text-white">Custom CSS</Label>
                      <Textarea
                        id="custom-css"
                        value={brandSettings.customCSS}
                        onChange={(e) => handleSettingChange('customCSS', e.target.value)}
                        placeholder="/* Add your custom CSS here */"
                        className="bg-slate-700 border-slate-600 text-white mt-1 font-mono text-sm min-h-32"
                      />
                    </div>
                    
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <h4 className="text-blue-300 mb-2">Generated CSS Variables</h4>
                      <pre className="text-xs text-blue-200 bg-slate-900/50 p-3 rounded overflow-x-auto">
                        {generateCustomCSS()}
                      </pre>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline"
                        className="flex-1 border-slate-600 text-gray-300"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Export Theme
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-slate-600 text-gray-300"
                      >
                        <Code className="h-4 w-4 mr-2" />
                        View API
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="bg-slate-800 border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg">Live Preview</h3>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant={previewMode === 'desktop' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('desktop')}
                    className={previewMode === 'desktop' ? 'bg-purple-600' : 'border-slate-600 text-gray-300'}
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant={previewMode === 'mobile' ? 'default' : 'outline'}
                    onClick={() => setPreviewMode('mobile')}
                    className={previewMode === 'mobile' ? 'bg-purple-600' : 'border-slate-600 text-gray-300'}
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className={`mx-auto ${
                previewMode === 'mobile' ? 'max-w-sm' : 'max-w-full'
              }`}>
                <PreviewCard />
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-6">
              <h3 className="text-lg mb-4">Deployment Options</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="text-green-300 mb-2">Subdomain Deployment</h4>
                  <p className="text-sm text-green-200 mb-2">
                    Deploy to: <code className="bg-slate-900/50 px-2 py-1 rounded">
                      {brandSettings.customDomain}
                    </code>
                  </p>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Deploy Now
                  </Button>
                </div>
                
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <h4 className="text-purple-300 mb-2">Embedded Widget</h4>
                  <p className="text-sm text-purple-200 mb-2">
                    Embed TrustCore into your existing website
                  </p>
                  <Button size="sm" variant="outline" className="border-purple-600 text-purple-300">
                    Get Embed Code
                  </Button>
                </div>
                
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h4 className="text-blue-300 mb-2">API Integration</h4>
                  <p className="text-sm text-blue-200 mb-2">
                    Use our white-label API with your custom branding
                  </p>
                  <Button size="sm" variant="outline" className="border-blue-600 text-blue-300">
                    View Documentation
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}