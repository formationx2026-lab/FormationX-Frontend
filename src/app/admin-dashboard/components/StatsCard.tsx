import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/app/admin-dashboard/components/ui/card";
import { cn } from "@/app/admin-dashboard/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  iconColor?: string;
}

const StatsCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-primary",
}: StatsCardProps) => {
  const isPositive = change && change > 0;

  return (
    <Card variant="glass" className="hover:border-primary/30 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="mt-2 font-display text-3xl font-bold text-foreground">
              {value}
            </p>
            {change !== undefined && (
              <div
                className={cn(
                  "mt-2 flex items-center gap-1 text-sm",
                  isPositive ? "text-emerald-400" : "text-red-400"
                )}
              >
                {isPositive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                <span>
                  {isPositive ? "+" : ""}
                  {change}%
                </span>
                <span className="text-muted-foreground">vs last month</span>
              </div>
            )}
          </div>
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50",
              iconColor
            )}
          >
            <Icon size={24} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
