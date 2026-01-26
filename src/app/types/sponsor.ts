export type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';
export type SponsorStatus = 'active' | 'inactive' | 'pending';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  tier: SponsorTier;
  contribution: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  area: string;
  status: SponsorStatus;
  createdAt: Date;
}

export const TIER_CONFIG: Record<SponsorTier, { label: string; minContribution: number; color: string }> = {
  platinum: { label: 'Platinum', minContribution: 50000, color: 'tier-platinum' },
  gold: { label: 'Gold', minContribution: 25000, color: 'tier-gold' },
  silver: { label: 'Silver', minContribution: 10000, color: 'tier-silver' },
  bronze: { label: 'Bronze', minContribution: 5000, color: 'tier-bronze' },
};

export const STATUS_CONFIG: Record<SponsorStatus, { label: string; color: string }> = {
  active: { label: 'Active', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  inactive: { label: 'Inactive', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  pending: { label: 'Pending', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
};
