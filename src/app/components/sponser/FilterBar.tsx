"use client"


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { CITIES, AREAS } from '@/app/data/mockSponsors';
import { SponsorTier, TIER_CONFIG } from '@/app/types/sponsor';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCity: string | null;
  onCityChange: (city: string | null) => void;
  selectedArea: string | null;
  onAreaChange: (area: string | null) => void;
  selectedTier: SponsorTier | null;
  onTierChange: (tier: SponsorTier | null) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  selectedArea,
  onAreaChange,
  selectedTier,
  onTierChange,
  onClearFilters,
  hasActiveFilters,
}: FilterBarProps) {
  return (   // glass vali koi bhi class aplicable nahi hai  abhi to baad me ye define karni hogi 
    <div className="glass-card p-4 mb-6 br rounded-lg animate-fade-in   bg-muted/50" style={{ animationDelay: '0.2s' }}>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search sponsors..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-300"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-display font-medium  tracking-wider">Filters:</span>
          </div>

          {/* City Filter */}
          <Select value={selectedCity || 'all'} onValueChange={(v) => onCityChange(v === 'all' ? null : v)}>
            <SelectTrigger className="w-[150px] bg-muted/50 border-border/50 hover:border-primary/50 transition-colors">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="all">All Cities</SelectItem>
              {CITIES.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Area Filter */}
          <Select value={selectedArea || 'all'} onValueChange={(v) => onAreaChange(v === 'all' ? null : v)}>
            <SelectTrigger className="w-[180px] bg-muted/50 border-border/50 hover:border-primary/50 transition-colors">
              <SelectValue placeholder="Area" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="all">All Areas</SelectItem>
              {AREAS.map((area) => (
                <SelectItem key={area} value={area}>{area}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Tier Filter */}
          <Select value={selectedTier || 'all'} onValueChange={(v) => onTierChange(v === 'all' ? null : v as SponsorTier)}>
            <SelectTrigger className="w-[140px] bg-muted/50 border-border/50 hover:border-primary/50 transition-colors">
              <SelectValue placeholder="Tier" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              <SelectItem value="all">All Tiers</SelectItem>
              {(Object.keys(TIER_CONFIG) as SponsorTier[]).map((tier) => (
                <SelectItem key={tier} value={tier}>{TIER_CONFIG[tier].label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
            >
              <X className="w-4 h-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
