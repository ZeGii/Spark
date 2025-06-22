
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Save, X } from 'lucide-react';

interface ResearchEditModalProps {
  research: {
    id: string;
    title: string;
    brief: string;
    executiveSummary: string;
    methodology: string;
    keyFindings: string[];
    marketSize?: string;
    growthRate?: string;
    competitorCount?: number;
  };
  onClose: () => void;
}

export function ResearchEditModal({ research, onClose }: ResearchEditModalProps) {
  const [formData, setFormData] = useState({
    title: research.title,
    brief: research.brief,
    executiveSummary: research.executiveSummary,
    methodology: research.methodology,
    keyFindings: research.keyFindings.join('\n'),
    marketSize: research.marketSize || '',
    growthRate: research.growthRate || '',
    competitorCount: research.competitorCount || 0
  });
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/research/${research.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          keyFindings: formData.keyFindings.split('\n').filter(f => f.trim()),
          competitorCount: Number(formData.competitorCount) || 0
        })
      });

      if (response.ok) {
        onClose();
      } else {
        throw new Error('Failed to save research');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Failed to save research. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Research Content</DialogTitle>
          <DialogDescription>
            Review and edit the AI-extracted content for this research
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Research title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brief">Brief Description</Label>
              <Input
                id="brief"
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                placeholder="Brief description"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="executiveSummary">Executive Summary</Label>
            <Textarea
              id="executiveSummary"
              value={formData.executiveSummary}
              onChange={(e) => setFormData({ ...formData, executiveSummary: e.target.value })}
              placeholder="Executive summary"
              rows={6}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="methodology">Methodology</Label>
            <Textarea
              id="methodology"
              value={formData.methodology}
              onChange={(e) => setFormData({ ...formData, methodology: e.target.value })}
              placeholder="Research methodology"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="keyFindings">Key Findings (one per line)</Label>
            <Textarea
              id="keyFindings"
              value={formData.keyFindings}
              onChange={(e) => setFormData({ ...formData, keyFindings: e.target.value })}
              placeholder="Enter key findings, one per line"
              rows={6}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="marketSize">Market Size</Label>
              <Input
                id="marketSize"
                value={formData.marketSize}
                onChange={(e) => setFormData({ ...formData, marketSize: e.target.value })}
                placeholder="e.g., USD 1.2 billion"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="growthRate">Growth Rate</Label>
              <Input
                id="growthRate"
                value={formData.growthRate}
                onChange={(e) => setFormData({ ...formData, growthRate: e.target.value })}
                placeholder="e.g., 8.5% CAGR"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitorCount">Competitor Count</Label>
              <Input
                id="competitorCount"
                type="number"
                value={formData.competitorCount}
                onChange={(e) => setFormData({ ...formData, competitorCount: Number(e.target.value) })}
                placeholder="Number of competitors"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
