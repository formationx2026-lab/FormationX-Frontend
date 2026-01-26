import { Sponsor, SponsorTier, TIER_CONFIG } from '@/app/types/sponsor';
import { Users, DollarSign, Crown, TrendingUp } from 'lucide-react';
import { cn } from "@/app/admin-dashboard/lib/utils";

interface StatsCardsProps {
  sponsors: Sponsor[];
}

export function StatsCards({ sponsors }: StatsCardsProps) {
  const totalSponsors = sponsors.length;
  const activeSponsors = sponsors.filter(s => s.status === 'active').length;
  const totalContributions = sponsors.reduce((sum, s) => sum + s.contribution, 0);
  const tierCounts = sponsors.reduce((acc, s) => {
    acc[s.tier] = (acc[s.tier] || 0) + 1;
    return acc;
  }, {} as Record<SponsorTier, number>);

  const stats = [
    {
      label: 'Total Sponsors',
      value: totalSponsors,
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-brand-soft',
      glowColor: 'shadow-[0_0_5px_rgba(6,182,212,0.3)]',
    },
    {
      label: 'Active Sponsors',
      value: activeSponsors,
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      glowColor: 'shadow-[0_0_5px_rgba(16,185,129,0.3)]',
    },
    {
      label: 'Total Contributions',
      value: `$${totalContributions.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      glowColor: 'shadow-[0_0_5px_rgba(245,158,11,0.3)]',
    },
    {
      label: 'Platinum Sponsors',
      value: tierCounts.platinum || 0,
      icon: Crown,
      color: 'text-slate-300',  //Icon Color
      bgColor: 'bg-slate-300/10',
      glowColor: 'shadow-[0_0_5px_rgba(203,213,225,0.3)]'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            'p-4 flex items-center border rounded-lg   gap-4 glass-card',
            stat.glowColor
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110',
            stat.bgColor
          )}>
            <stat.icon className={cn('w-6 h-6', stat.color)} />
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-display uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
