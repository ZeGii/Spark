
'use client';

import { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DocumentUploadModalProps {
  research: {
    id: string;
    title: string;
    researchDocuments: Array<{
      id: string;
      originalName: string;
      aiProcessingStatus: string;
      uploadedAt: string;
    }>;
  };
  onClose: () => void;
}

export function DocumentUploadModal({ research, onClose }: DocumentUploadModalProps) {
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedDocument, setUploadedDocument] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('researchId', research.id);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      const response = await fetch('/api/admin/research/upload', {
        method: 'POST',
        body: formData
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (response.ok) {
        const result = await response.json();
        setUploadedDocument(result.document);
        
        // Start AI processing
        setTimeout(() => {
          handleProcessDocument(result.document.id);
        }, 1000);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleProcessDocument = async (documentId: string) => {
    setProcessing(true);

    try {
      const response = await fetch('/api/admin/research/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documentId })
      });

      if (response.ok) {
        const result = await response.json();
        alert(`Processing complete! Generated ${result.opportunities.length} opportunities.`);
        onClose();
      } else {
        throw new Error('Processing failed');
      }
    } catch (error) {
      console.error('Processing error:', error);
      alert('AI processing failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'PROCESSING':
        return <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />;
      case 'FAILED':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      PENDING: { color: 'bg-yellow-500', label: 'Pending' },
      PROCESSING: { color: 'bg-blue-500', label: 'Processing' },
      COMPLETED: { color: 'bg-green-500', label: 'Completed' },
      FAILED: { color: 'bg-red-500', label: 'Failed' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.PENDING;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Upload Research Document</DialogTitle>
          <DialogDescription>
            Upload a PDF document for AI processing and content extraction for "{research.title}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Existing Documents */}
          {research.researchDocuments.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">Existing Documents</h4>
              <div className="space-y-2">
                {research.researchDocuments.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(doc.aiProcessingStatus)}
                      <div>
                        <p className="font-medium">{doc.originalName}</p>
                        <p className="text-sm text-muted-foreground">
                          Uploaded: {new Date(doc.uploadedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {getStatusBadge(doc.aiProcessingStatus)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* File Upload */}
          <div className="space-y-4">
            <h4 className="font-medium">Upload New Document</h4>
            
            {!selectedFile ? (
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">Click to upload PDF document</p>
                <p className="text-sm text-muted-foreground">
                  Supports PDF files up to 50MB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-blue-500" />
                    <div>
                      <p className="font-medium">{selectedFile.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedFile(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {uploading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                )}

                {processing && (
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <div className="h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <span>AI is processing the document and extracting content...</span>
                  </div>
                )}

                {uploadedDocument && !processing && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    <span>Document uploaded successfully! Processing will begin automatically.</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            {selectedFile && !uploading && !uploadedDocument && (
              <Button onClick={handleUpload}>
                <Upload className="h-4 w-4 mr-2" />
                Upload & Process
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
