import { SponsorStatus, STATUS_CONFIG } from '@/app/types/sponsor';
import { cn } from '@/app/lib/utils';
import { Circle } from 'lucide-react';

interface StatusBadgeProps {
  status: SponsorStatus;
}

const statusStyles: Record<SponsorStatus, string> = {
  active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]',
  pending: 'bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]',
  inactive: 'bg-destructive/10 text-destructive border-destructive/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-display font-medium rounded-full border transition-all duration-300',
        statusStyles[status]
      )}
    >
      <Circle className="w-1.5 h-1.5 fill-current animate-pulse" />
      {config.label}
    </span>
  );
}
