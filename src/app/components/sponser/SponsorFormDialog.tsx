import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/Dialog';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';

import {Label} from "@/app/components/ui/Label"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select';
import { Sponsor, SponsorTier, SponsorStatus, TIER_CONFIG, STATUS_CONFIG } from '@/app/types/sponsor';
import { CITIES, AREAS } from '@/app/data/mockSponsors';
import { Building2, DollarSign, User, Mail, Phone, MapPin } from 'lucide-react';

interface SponsorFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sponsor: Sponsor | null;
  onSave: (sponsor: Omit<Sponsor, 'id' | 'createdAt'> & { id?: string }) => void;
}

const initialFormData = {
  name: '',
  logo: '',
  tier: 'bronze' as SponsorTier,
  contribution: 5000,
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  city: '',
  area: '',
  status: 'pending' as SponsorStatus,
};

export function SponsorFormDialog({ open, onOpenChange, sponsor, onSave }: SponsorFormDialogProps) {
  const [formData, setFormData] = useState(initialFormData);
  const isEditing = !!sponsor;

  useEffect(() => {
    if (sponsor) {
      setFormData({
        name: sponsor.name,
        logo: sponsor.logo,
        tier: sponsor.tier,
        contribution: sponsor.contribution,
        contactName: sponsor.contactName,
        contactEmail: sponsor.contactEmail,
        contactPhone: sponsor.contactPhone,
        city: sponsor.city,
        area: sponsor.area,
        status: sponsor.status,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [sponsor, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: sponsor?.id,
      logo: formData.logo || `https://api.dicebear.com/7.x/shapes/svg?seed=${formData.name}&backgroundColor=0ea5e9`,
    });
    onOpenChange(false);
  };

return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border/50 max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white ">
            {isEditing ? 'Edit Sponsor' : 'Add New Sponsor'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>Company Information</span>
            </div>
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Company Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter company name"
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo">Logo URL (optional)</Label>
                <Input
                  id="logo"
                  value={formData.logo}
                  onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                  placeholder="https://example.com/logo.png"
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tier">Sponsor Tier</Label>
                  <Select value={formData.tier} onValueChange={(v) => setFormData({ ...formData, tier: v as SponsorTier })}>
                    <SelectTrigger className="bg-muted/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {(Object.keys(TIER_CONFIG) as SponsorTier[]).map((tier) => (
                        <SelectItem key={tier} value={tier}>{TIER_CONFIG[tier].label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(v) => setFormData({ ...formData, status: v as SponsorStatus })}>
                    <SelectTrigger className="bg-muted/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      {(Object.keys(STATUS_CONFIG) as SponsorStatus[]).map((status) => (
                        <SelectItem key={status} value={status}>{STATUS_CONFIG[status].label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <DollarSign className="w-4 h-4" />
              <span>Contribution</span>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="contribution">Amount ($)</Label>
              <Input
                id="contribution"
                type="number"
                min={0}
                value={formData.contribution}
                onChange={(e) => setFormData({ ...formData, contribution: Number(e.target.value) })}
                required
                className="bg-muted/50 border-border/50"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <User className="w-4 h-4" />
              <span>Contact Information</span>
            </div>
            
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name</Label>
                <Input
                  id="contactName"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="bg-muted/50 border-border/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    placeholder="email@company.com"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                    required
                    className="bg-muted/50 border-border/50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select value={formData.city} onValueChange={(v) => setFormData({ ...formData, city: v })}>
                  <SelectTrigger className="bg-muted/50 border-border/50">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {CITIES.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="area">Area</Label>
                <Select value={formData.area} onValueChange={(v) => setFormData({ ...formData, area: v })}>
                  <SelectTrigger className="bg-muted/50 border-border/50">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    {AREAS.map((area) => (
                      <SelectItem key={area} value={area}>{area}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="destructive"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {isEditing ? 'Save Changes' : 'Add Sponsor'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
