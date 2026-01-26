import { Sponsor, TIER_CONFIG } from '@/app/types/sponsor';
import { TierBadge } from "@/app/components/sponser/TierBadge"
import { StatusBadge } from './StatusBadge';
import { Button } from '@/app/components/ui/Button';
import { Edit2, Trash2, Mail, Phone, MapPin, DollarSign } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface SponsorCardProps {
  sponsor: Sponsor;
  onEdit: (sponsor: Sponsor) => void;
  onDelete: (id: string) => void;
}

export function SponsorCard({ sponsor, onEdit, onDelete }: SponsorCardProps) {
  const tierClass = `tier-${sponsor.tier}`;
  
  return (
    <div
      className={cn(
        'glass-card p-5 shadow-[0_0_5px_rgba(203,213,225,0.3)] transition-all duration-300 border rounded-lg hover:scale-[1.02] group',
        tierClass,
        
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              className="w-14 h-14 rounded-xl object-cover bg-muted ring-2 ring-brand-border"
            />
            <div className={cn(
              'absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background',
              sponsor.status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 
              sponsor.status === 'pending' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 
              'bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.6)]'
            )} />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground text-lg leading-tight">{sponsor.name}</h3>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>{sponsor.city}</span>
            </div>
          </div>
        </div>
        <TierBadge tier={sponsor.tier} />
      </div>

      {/* Contribution */}
      <div className="mb-4 p-3 rounded-lg  border border-border/50 bg-muted/50">
        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
          <DollarSign className="w-3.5 h-3.5" />
          <span className="font-display uppercase tracking-wider">Contribution</span>
        </div>
        <p className="text-2xl font-display font-bold ">
          ${sponsor.contribution.toLocaleString()}
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 rounded-lg bg-brand-soft flex items-center justify-center">
            <Mail className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-muted-foreground truncate">{sponsor.contactEmail}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-7 h-7 rounded-lg bg-brand-soft flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-muted-foreground">{sponsor.contactPhone}</span>
        </div>
      </div>

      {/* Status & Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        <StatusBadge status={sponsor.status} />
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-brand-soft hover:text-primary hover:scale-110 transition-all duration-200"
            onClick={() => onEdit(sponsor)}
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-destructive/20 hover:text-destructive hover:scale-110 transition-all duration-200"
            onClick={() => onDelete(sponsor.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
