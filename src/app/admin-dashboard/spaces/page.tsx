"use client";

import { Plus, Search, Filter, Star, Users, MapPin, Check, X } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/admin-dashboard/components/ui/card";
import { mockSpaces, Space } from "@/app/admin-dashboard/data/mockData";
import { Badge } from "@/app/admin-dashboard/components/ui/badge";

const SpacesPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Spaces
          </h2>
          <p className="text-muted-foreground">
            Manage venues and event spaces for hackathons
          </p>
        </div>
        <Button variant="hero">
          <Plus size={16} className="mr-2" />
          Add Space
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Spaces</p>
            <p className="text-2xl font-bold text-foreground">{mockSpaces.length}</p>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-emerald-400">
              {mockSpaces.filter((s) => s.available).length}
            </p>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Capacity</p>
            <p className="text-2xl font-bold text-primary">
              {mockSpaces.reduce((sum, s) => sum + s.capacity, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card variant="glass">
        <CardContent className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input placeholder="Search spaces..." className="bg-muted/50 pl-9" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </CardContent>
      </Card>

      {/* Spaces Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {mockSpaces.map((space) => (
          <SpaceCard key={space.id} space={space} />
        ))}
      </div>
    </div>
  );
};

const SpaceCard = ({ space }: { space: Space }) => {
  return (
    <Card variant="feature" className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{space.name}</CardTitle>
            <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin size={14} />
              {space.location}
            </div>
          </div>
          <Badge
            variant="outline"
            className={
              space.available
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-red-500/10 text-red-400 border-red-500/30"
            }
          >
            {space.available ? (
              <span className="flex items-center gap-1">
                <Check size={12} /> Available
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <X size={12} /> Booked
              </span>
            )}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-muted-foreground" />
            <span className="text-sm text-foreground">
              Capacity: {space.capacity.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-foreground">{space.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {space.amenities.map((amenity) => (
            <Badge
              key={amenity}
              variant="outline"
              className="bg-muted/50 text-muted-foreground border-border/50"
            >
              {amenity}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-border/30 pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Price per day</p>
            <p className="text-xl font-bold text-accent">{space.pricePerDay}</p>
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpacesPage;
