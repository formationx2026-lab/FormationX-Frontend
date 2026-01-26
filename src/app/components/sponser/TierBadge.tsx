import { SponsorTier, TIER_CONFIG } from '@/app/types/sponsor';
import { Crown, Award, Medal, Trophy } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface TierBadgeProps {
  tier: SponsorTier;
  size?: 'sm' | 'md' | 'lg';
}

const tierIcons: Record<SponsorTier, React.ReactNode> = {
  platinum: <Crown className="w-3.5 h-3.5" />,
  gold: <Trophy className="w-3.5 h-3.5" />,
  silver: <Award className="w-3.5 h-3.5" />,
  bronze: <Medal className="w-3.5 h-3.5" />,
};

const tierStyles: Record<SponsorTier, string> = {
  platinum: 'bg-gradient-to-r from-slate-300/20 to-slate-100/20 text-slate-200 border-slate-300/40 shadow-[0_0_15px_-3px_hsl(220_20%_85%/0.5)]',
  gold: 'bg-gradient-to-r from-amber-500/20 to-yellow-400/20 text-amber-300 border-amber-400/40 shadow-[0_0_15px_-3px_hsl(45_93%_47%/0.5)]',
  silver: 'bg-gradient-to-r from-slate-400/20 to-slate-300/20 text-slate-300 border-slate-400/40 shadow-[0_0_12px_-3px_hsl(215_20%_60%/0.4)]',
  bronze: 'bg-gradient-to-r from-orange-600/20 to-amber-600/20 text-orange-300 border-orange-500/40 shadow-[0_0_12px_-3px_hsl(25_70%_50%/0.4)]',
};

export function TierBadge({ tier, size = 'md' }: TierBadgeProps) {
  const config = TIER_CONFIG[tier];
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-display font-semibold rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105',
        tierStyles[tier],
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-xs',
        size === 'lg' && 'px-4 py-1.5 text-sm'
      )}
    >
      {tierIcons[tier]}
      {config.label}
    </span>
  );
}
