
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  Save, 
  Send, 
  Eye, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Trash2,
  Download,
  Sparkles,
  Target,
  BarChart3,
  Users,
  Edit3,
  Plus,
  X,
  Play,
  Pause,
  Calendar,
  Globe,
  Building,
  DollarSign,
  TrendingUp,
  Share2
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export default function AdminResearchEditPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const researchId = params.id as string;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{[key: string]: number}>({});
  
  // Research Overview Section fields
  const [title, setTitle] = useState('');
  const [executiveSummary, setExecutiveSummary] = useState('');
  const [researchReleaseDate, setResearchReleaseDate] = useState('');
  const [country, setCountry] = useState('');
  const [industry, setIndustry] = useState('');
  
  // Market Overview Section fields
  const [marketSize, setMarketSize] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [enableSpark, setEnableSpark] = useState(true);
  const [enableShare, setEnableShare] = useState(true);
  const [enableDownload, setEnableDownload] = useState(true);
  
  // Platform-wide data
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan', 
    'Australia', 'Singapore', 'India', 'China', 'Brazil', 'Mexico'
  ];
  
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Gaming',
    'SaaS', 'Fintech', 'AI/ML', 'Blockchain', 'Cybersecurity', 'IoT'
  ];

  useEffect(() => {
    if (researchId) {
      fetchResearchData();
    }
  }, [researchId]);

  const fetchResearchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/research/${researchId}`);
      const data = await response.json();
      
      if (response.ok && data.research) {
        // Populate all form fields with actual data
        setTitle(data.research.title || '');
        setExecutiveSummary(data.research.executiveSummary || '');
        setResearchReleaseDate(data.research.researchReleaseDate || '');
        setCountry(data.research.country || '');
        setIndustry(data.research.industry || '');
        setMarketSize(data.research.marketSize || '');
        setGrowthRate(data.research.growthRate || '');
        setEnableSpark(data.research.enableSpark ?? true);
        setEnableShare(data.research.enableShare ?? true);
        setEnableDownload(data.research.enableDownload ?? true);
        
        toast({
          title: "Research data loaded",
          description: "Research data has been loaded successfully",
        });
      } else {
        // If no research found, show error
        toast({
          title: "Research not found",
          description: "Could not load research data",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error fetching research:', error);
      toast({
        title: "Error",
        description: "Failed to load research data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentUpload = async (file: File, documentType: string) => {
    try {
      setUploading(true);
      setUploadProgress({ ...uploadProgress, [documentType]: 0 });
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', documentType);
      formData.append('researchId', researchId);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[documentType] || 0;
          const newProgress = Math.min(currentProgress + 10, 90);
          return { ...prev, [documentType]: newProgress };
        });
      }, 200);

      const response = await fetch(`/api/admin/research/${researchId}/upload`, {
        method: 'POST',
        body: formData
      });

      clearInterval(progressInterval);
      setUploadProgress({ ...uploadProgress, [documentType]: 100 });

      if (response.ok) {
        toast({
          title: "Success",
          description: `${documentType.replace('_', ' ')} uploaded successfully`,
        });
        
        // Reset progress after delay
        setTimeout(() => {
          setUploadProgress(prev => {
            const newProgress = { ...prev };
            delete newProgress[documentType];
            return newProgress;
          });
        }, 2000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Error uploading document:', error);
      setUploadProgress(prev => {
        const newProgress = { ...prev };
        delete newProgress[documentType];
        return newProgress;
      });
      toast({
        title: "Error",
        description: `Failed to upload document: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const triggerAIProcessing = async () => {
    try {
      const response = await fetch(`/api/admin/research/${researchId}/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });

      if (response.ok) {
        toast({
          title: "Success", 
          description: "AI processing completed successfully",
        });
        // Refresh research data to show updated fields
        fetchResearchData();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'AI processing failed');
      }
    } catch (error) {
      console.error('Error in AI processing:', error);
      toast({
        title: "Error",
        description: `AI processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#10141a] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#00FF88] border-t-transparent rounded-full mx-auto animate-spin" />
          <p className="text-white">Loading research data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#10141a] text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => router.push('/admin/research')}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Research
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Research Editor</h1>
              <p className="text-[#CCCCCC]">AI-Powered Personal Finance Apps</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/20">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button className="bg-[#00FF88] hover:bg-[#00E87A] text-black">
              <Send className="h-4 w-4 mr-2" />
              Publish Research
            </Button>
          </div>
        </div>

        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList className="bg-[#1a1a1a] border border-white/20">
            <TabsTrigger value="editor" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <Edit3 className="h-4 w-4 mr-2" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <Upload className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="opportunities" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <Target className="h-4 w-4 mr-2" />
              Opportunities
            </TabsTrigger>
            <TabsTrigger value="market-data" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <BarChart3 className="h-4 w-4 mr-2" />
              Market Data
            </TabsTrigger>
            <TabsTrigger value="competitive-analysis" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <Users className="h-4 w-4 mr-2" />
              Competitive Analysis
            </TabsTrigger>
            <TabsTrigger value="preview" className="data-[state=active]:bg-[#00FF88] data-[state=active]:text-black">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </TabsTrigger>
          </TabsList>

          {/* Editor Tab */}
          <TabsContent value="editor" className="space-y-6">
            {/* Research Overview Section */}
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Research Overview</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Basic research information and content details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-white">Research Title</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="Enter research title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="release-date" className="text-white">Research Release Date</Label>
                    <Input
                      id="release-date"
                      type="date"
                      value={researchReleaseDate}
                      onChange={(e) => setResearchReleaseDate(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-white">Country</Label>
                    <Select value={country} onValueChange={setCountry}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((countryOption) => (
                          <SelectItem key={countryOption} value={countryOption}>
                            {countryOption}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">Industry</Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industryOption) => (
                          <SelectItem key={industryOption} value={industryOption}>
                            {industryOption}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="summary" className="text-white">Executive Summary</Label>
                  <Textarea
                    id="summary"
                    value={executiveSummary}
                    onChange={(e) => setExecutiveSummary(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                    placeholder="Enter executive summary"
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Market Overview Section */}
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Market Overview</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Market size, growth metrics, and configuration settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="market-size" className="text-white">Market Size</Label>
                    <Input
                      id="market-size"
                      value={marketSize}
                      onChange={(e) => setMarketSize(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="e.g., $2.5B USD"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="growth-rate" className="text-white">Growth Rate</Label>
                    <Input
                      id="growth-rate"
                      value={growthRate}
                      onChange={(e) => setGrowthRate(e.target.value)}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
                      placeholder="e.g., 15% CAGR"
                    />
                  </div>
                </div>

                {/* Spark/Share/Download Configuration */}
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Feature Configuration</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <input
                        type="checkbox"
                        id="enable-spark"
                        checked={enableSpark}
                        onChange={(e) => setEnableSpark(e.target.checked)}
                        className="w-4 h-4 text-[#00FF88] bg-white border-gray-300 rounded focus:ring-[#00FF88]"
                      />
                      <div className="flex items-center space-x-2">
                        <Sparkles className="h-4 w-4 text-[#00FF88]" />
                        <Label htmlFor="enable-spark" className="text-white">Enable Spark</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <input
                        type="checkbox"
                        id="enable-share"
                        checked={enableShare}
                        onChange={(e) => setEnableShare(e.target.checked)}
                        className="w-4 h-4 text-[#00FF88] bg-white border-gray-300 rounded focus:ring-[#00FF88]"
                      />
                      <div className="flex items-center space-x-2">
                        <Share2 className="h-4 w-4 text-[#00FF88]" />
                        <Label htmlFor="enable-share" className="text-white">Enable Share</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <input
                        type="checkbox"
                        id="enable-download"
                        checked={enableDownload}
                        onChange={(e) => setEnableDownload(e.target.checked)}
                        className="w-4 h-4 text-[#00FF88] bg-white border-gray-300 rounded focus:ring-[#00FF88]"
                      />
                      <div className="flex items-center space-x-2">
                        <Download className="h-4 w-4 text-[#00FF88]" />
                        <Label htmlFor="enable-download" className="text-white">Enable Download</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Upload Documents</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Upload all document types for comprehensive AI processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Market Discovery Report */}
                  <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-6 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                    <FileText className="w-10 h-10 text-[#00FF88] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Market Discovery Report</h3>
                    <p className="text-[#CCCCCC] text-sm mb-4">Comprehensive market research and analysis</p>
                    
                    <input
                      type="file"
                      id="upload-market-discovery"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleDocumentUpload(file, 'MARKET_DISCOVERY_REPORT');
                        }
                      }}
                    />
                    
                    <Button
                      onClick={() => document.getElementById('upload-market-discovery')?.click()}
                      disabled={uploading || uploadProgress['MARKET_DISCOVERY_REPORT'] !== undefined}
                      className="bg-[#00FF88] hover:bg-[#00E87A] text-black w-full"
                      size="sm"
                    >
                      {uploadProgress['MARKET_DISCOVERY_REPORT'] !== undefined ? (
                        <>Uploading... {uploadProgress['MARKET_DISCOVERY_REPORT']}%</>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Report
                        </>
                      )}
                    </Button>
                    
                    {uploadProgress['MARKET_DISCOVERY_REPORT'] !== undefined && (
                      <div className="mt-3">
                        <Progress value={uploadProgress['MARKET_DISCOVERY_REPORT']} className="h-2" />
                      </div>
                    )}
                  </div>

                  {/* Market Data */}
                  <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-6 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                    <BarChart3 className="w-10 h-10 text-[#00FF88] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Market Data</h3>
                    <p className="text-[#CCCCCC] text-sm mb-4">Market size, trends, and statistics</p>
                    
                    <input
                      type="file"
                      id="upload-market-data-docs"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xlsx,.csv"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleDocumentUpload(file, 'MARKET_DATA');
                        }
                      }}
                    />
                    
                    <Button
                      onClick={() => document.getElementById('upload-market-data-docs')?.click()}
                      disabled={uploading || uploadProgress['MARKET_DATA'] !== undefined}
                      className="bg-[#00FF88] hover:bg-[#00E87A] text-black w-full"
                      size="sm"
                    >
                      {uploadProgress['MARKET_DATA'] !== undefined ? (
                        <>Uploading... {uploadProgress['MARKET_DATA']}%</>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Data
                        </>
                      )}
                    </Button>
                    
                    {uploadProgress['MARKET_DATA'] !== undefined && (
                      <div className="mt-3">
                        <Progress value={uploadProgress['MARKET_DATA']} className="h-2" />
                      </div>
                    )}
                  </div>

                  {/* Competitive Analysis */}
                  <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-6 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                    <Users className="w-10 h-10 text-[#00FF88] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Competitive Analysis</h3>
                    <p className="text-[#CCCCCC] text-sm mb-4">Competitor landscape and positioning</p>
                    
                    <input
                      type="file"
                      id="upload-competitive-docs"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleDocumentUpload(file, 'COMPETITIVE_ANALYSIS');
                        }
                      }}
                    />
                    
                    <Button
                      onClick={() => document.getElementById('upload-competitive-docs')?.click()}
                      disabled={uploading || uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined}
                      className="bg-[#00FF88] hover:bg-[#00E87A] text-black w-full"
                      size="sm"
                    >
                      {uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined ? (
                        <>Uploading... {uploadProgress['COMPETITIVE_ANALYSIS']}%</>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Analysis
                        </>
                      )}
                    </Button>
                    
                    {uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined && (
                      <div className="mt-3">
                        <Progress value={uploadProgress['COMPETITIVE_ANALYSIS']} className="h-2" />
                      </div>
                    )}
                  </div>

                  {/* POU Analysis */}
                  <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-6 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                    <Target className="w-10 h-10 text-[#00FF88] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">POU Analysis</h3>
                    <p className="text-[#CCCCCC] text-sm mb-4">Product Opportunity Units analysis</p>
                    
                    <input
                      type="file"
                      id="upload-pou-docs"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xlsx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleDocumentUpload(file, 'POU_ANALYSIS');
                        }
                      }}
                    />
                    
                    <Button
                      onClick={() => document.getElementById('upload-pou-docs')?.click()}
                      disabled={uploading || uploadProgress['POU_ANALYSIS'] !== undefined}
                      className="bg-[#00FF88] hover:bg-[#00E87A] text-black w-full"
                      size="sm"
                    >
                      {uploadProgress['POU_ANALYSIS'] !== undefined ? (
                        <>Uploading... {uploadProgress['POU_ANALYSIS']}%</>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload POU
                        </>
                      )}
                    </Button>
                    
                    {uploadProgress['POU_ANALYSIS'] !== undefined && (
                      <div className="mt-3">
                        <Progress value={uploadProgress['POU_ANALYSIS']} className="h-2" />
                      </div>
                    )}
                  </div>

                  {/* Financial Projections */}
                  <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-6 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300 md:col-span-2">
                    <DollarSign className="w-10 h-10 text-[#00FF88] mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Financial Projections</h3>
                    <p className="text-[#CCCCCC] text-sm mb-4">Revenue forecasts and financial models</p>
                    
                    <input
                      type="file"
                      id="upload-financial-docs"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xlsx,.csv"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleDocumentUpload(file, 'FINANCIAL_PROJECTIONS');
                        }
                      }}
                    />
                    
                    <Button
                      onClick={() => document.getElementById('upload-financial-docs')?.click()}
                      disabled={uploading || uploadProgress['FINANCIAL_PROJECTIONS'] !== undefined}
                      className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                      size="sm"
                    >
                      {uploadProgress['FINANCIAL_PROJECTIONS'] !== undefined ? (
                        <>Uploading... {uploadProgress['FINANCIAL_PROJECTIONS']}%</>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Upload Projections
                        </>
                      )}
                    </Button>
                    
                    {uploadProgress['FINANCIAL_PROJECTIONS'] !== undefined && (
                      <div className="mt-3 max-w-md mx-auto">
                        <Progress value={uploadProgress['FINANCIAL_PROJECTIONS']} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>

                {/* AI Processing Section */}
                <div className="p-6 bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5 text-[#00FF88]" />
                      <h3 className="font-semibold text-white">AI Processing</h3>
                    </div>
                  </div>
                  
                  <p className="text-[#CCCCCC] text-sm mb-4">
                    AI will extract insights and update research fields based on all uploaded documents.
                  </p>
                  
                  <Button
                    onClick={triggerAIProcessing}
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Process with AI
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Opportunities Tab */}
          <TabsContent value="opportunities" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Market Opportunities</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Generated opportunities based on research analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-12">
                  <Target className="w-16 h-16 text-[#00FF88] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">AI-Generated Opportunities</h3>
                  <p className="text-[#CCCCCC] mb-6 max-w-md mx-auto">
                    Upload and process market discovery reports to automatically generate market opportunities
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#00FF88]/10 to-[#00FF88]/5 border border-[#00FF88]/30 rounded-xl p-6 max-w-2xl mx-auto">
                    <div className="flex items-center space-x-3 mb-4">
                      <Sparkles className="w-5 h-5 text-[#00FF88]" />
                      <h4 className="font-semibold text-white">How it works:</h4>
                    </div>
                    <ol className="text-left text-[#CCCCCC] space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="bg-[#00FF88] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                        <span>Upload Market Discovery Report in the Documents tab</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-[#00FF88] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                        <span>Click "Process with AI" to analyze the document</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="bg-[#00FF88] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                        <span>AI will extract and display market opportunities here</span>
                      </li>
                    </ol>
                    
                    <div className="mt-6">
                      <Button
                        onClick={() => {
                          // Switch to documents tab
                          const documentsTab = document.querySelector('[value="documents"]') as HTMLElement;
                          if (documentsTab) {
                            documentsTab.click();
                          }
                        }}
                        className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Go to Documents Tab
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Data Tab */}
          <TabsContent value="market-data" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Market Data Upload</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Upload market data documents for specialized processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-8 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                  <BarChart3 className="w-12 h-12 text-[#00FF88] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Market Data Report</h3>
                  <p className="text-[#CCCCCC] mb-4">Market size, trends, and statistical analysis</p>
                  
                  <input
                    type="file"
                    id="upload-market-data-tab"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xlsx,.csv"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleDocumentUpload(file, 'MARKET_DATA');
                      }
                    }}
                  />
                  
                  <Button
                    onClick={() => document.getElementById('upload-market-data-tab')?.click()}
                    disabled={uploading || uploadProgress['MARKET_DATA'] !== undefined}
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                  >
                    {uploadProgress['MARKET_DATA'] !== undefined ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Uploading... {uploadProgress['MARKET_DATA']}%
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Market Data
                      </>
                    )}
                  </Button>
                  
                  {uploadProgress['MARKET_DATA'] !== undefined && (
                    <div className="mt-4">
                      <Progress value={uploadProgress['MARKET_DATA']} className="h-2" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Competitive Analysis Tab */}
          <TabsContent value="competitive-analysis" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Competitive Analysis Upload</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Upload competitive analysis documents for specialized processing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-[#00FF88]/30 rounded-xl p-8 text-center bg-gradient-to-br from-[#00FF88]/5 to-[#00FF88]/10 hover:border-[#00FF88]/50 transition-all duration-300">
                  <Users className="w-12 h-12 text-[#00FF88] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Competitive Analysis</h3>
                  <p className="text-[#CCCCCC] mb-4">Competitor landscape and positioning</p>
                  
                  <input
                    type="file"
                    id="upload-competitive-analysis-tab"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleDocumentUpload(file, 'COMPETITIVE_ANALYSIS');
                      }
                    }}
                  />
                  
                  <Button
                    onClick={() => document.getElementById('upload-competitive-analysis-tab')?.click()}
                    disabled={uploading || uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined}
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                  >
                    {uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Uploading... {uploadProgress['COMPETITIVE_ANALYSIS']}%
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Competitive Analysis
                      </>
                    )}
                  </Button>
                  
                  {uploadProgress['COMPETITIVE_ANALYSIS'] !== undefined && (
                    <div className="mt-4">
                      <Progress value={uploadProgress['COMPETITIVE_ANALYSIS']} className="h-2" />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-6">
            <Card className="bg-[#1a1a1a] border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Research Preview</CardTitle>
                <CardDescription className="text-[#CCCCCC]">
                  Preview how the research will appear on the public platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white rounded-xl p-8 min-h-[600px]">
                  {/* Preview of public research page */}
                  <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge variant="outline" className="text-[#00FF88] border-[#00FF88]">
                          {industry || 'Technology'}
                        </Badge>
                        <Badge variant="outline" className="text-gray-600 border-gray-300">
                          {country || 'United States'}
                        </Badge>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        {title || 'AI-Powered Personal Finance Apps'}
                      </h1>
                      <p className="text-gray-600 mb-4">
                        Released: {researchReleaseDate || new Date().toISOString().split('T')[0]}
                      </p>
                    </div>

                    {/* Market Overview */}
                    {(marketSize || growthRate) && (
                      <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {marketSize && (
                            <div className="flex items-center space-x-3">
                              <DollarSign className="w-5 h-5 text-[#00FF88]" />
                              <div>
                                <p className="text-sm text-gray-600">Market Size</p>
                                <p className="font-semibold text-gray-900">{marketSize}</p>
                              </div>
                            </div>
                          )}
                          {growthRate && (
                            <div className="flex items-center space-x-3">
                              <TrendingUp className="w-5 h-5 text-[#00FF88]" />
                              <div>
                                <p className="text-sm text-gray-600">Growth Rate</p>
                                <p className="font-semibold text-gray-900">{growthRate}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Executive Summary */}
                    {executiveSummary && (
                      <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
                        <div className="prose prose-gray max-w-none">
                          <p className="text-gray-700 leading-relaxed">
                            {executiveSummary}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                      {enableSpark && (
                        <Button className="bg-[#00FF88] hover:bg-[#00E87A] text-black">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Spark
                        </Button>
                      )}
                      {enableShare && (
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      )}
                      {enableDownload && (
                        <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Preview Actions */}
                <div className="flex items-center justify-between">
                  <p className="text-[#CCCCCC] text-sm">
                    This preview shows how the research will appear to users on the public platform
                  </p>
                  <Button
                    onClick={() => window.open(`/research/${researchId}`, '_blank')}
                    className="bg-[#00FF88] hover:bg-[#00E87A] text-black"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Live Page
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
