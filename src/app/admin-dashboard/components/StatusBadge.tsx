

"use client"
import { Badge } from "@/app/admin-dashboard/components/ui/badge";
import { cn } from "@/app/admin-dashboard/lib/utils";

type StatusType =
  | "upcoming"
  | "ongoing"
  | "completed"
  | "active"
  | "inactive"
  | "pending"
  | "verified"
  | "forming"
  | "complete"
  | "competing"
  | "winner"
  | "submitted"
  | "evaluated"
  | "platinum"
  | "gold"
  | "silver"
  | "bronze";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  upcoming: {
    label: "Upcoming",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  ongoing: {
    label: "Ongoing",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  completed: {
    label: "Completed",
    className: "bg-muted text-muted-foreground border-border",
  },
  active: {
    label: "Active",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  inactive: {
    label: "Inactive",
    className: "bg-muted text-muted-foreground border-border",
  },
  pending: {
    label: "Pending",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  verified: {
    label: "Verified",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  forming: {
    label: "Forming",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  complete: {
    label: "Complete",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  competing: {
    label: "Competing",
    className: "bg-primary/10 text-primary border-primary/30",
  },
  winner: {
    label: "Winner",
    className: "bg-accent/10 text-accent border-accent/30",
  },
  submitted: {
    label: "Submitted",
    className: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  evaluated: {
    label: "Evaluated",
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  platinum: {
    label: "Platinum",
    className: "bg-slate-300/10 text-slate-300 border-slate-300/30",
  },
  gold: {
    label: "Gold",
    className: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  },
  silver: {
    label: "Silver",
    className: "bg-gray-400/10 text-gray-400 border-gray-400/30",
  },
  bronze: {
    label: "Bronze",
    className: "bg-orange-700/10 text-orange-500 border-orange-700/30",
  },
};

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={cn("font-medium", config.className, className)}
    >
      {config.label}
    </Badge>
  );
};

export default StatusBadge;
