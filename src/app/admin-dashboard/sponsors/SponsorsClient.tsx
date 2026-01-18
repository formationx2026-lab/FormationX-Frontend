"use client";

import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent } from "@/app/admin-dashboard/components/ui/card";
import DataTable from "@/app/admin-dashboard/components/DataTable";
import StatusBadge from "@/app/admin-dashboard/components/StatusBadge";
import { mockSponsors, Sponsor } from "@/app/admin-dashboard/data/mockData";

const SponsorsClient = () => {
  const columns = [
    {
      key: "name",
      header: "Sponsor",
      render: (sponsor: Sponsor) => (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-muted to-muted/50 border border-border/50">
            <span className="text-sm font-bold text-foreground">
              {sponsor.logo}
            </span>
          </div>
          <p className="font-medium text-foreground">{sponsor.name}</p>
        </div>
      ),
    },
    {
      key: "tier",
      header: "Tier",
      render: (sponsor: Sponsor) => (
        <StatusBadge status={sponsor.tier} />
      ),
    },
    {
      key: "contribution",
      header: "Contribution",
      render: (sponsor: Sponsor) => (
        <p className="font-medium text-accent">
          {sponsor.contribution}
        </p>
      ),
    },
    {
      key: "hackathons",
      header: "Hackathons",
      render: (sponsor: Sponsor) => (
        <p className="text-foreground">{sponsor.hackathons}</p>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (sponsor: Sponsor) => (
        <StatusBadge status={sponsor.status} />
      ),
    },
    {
      key: "actions",
      header: "",
      render: () => (
        <Button variant="ghost" size="icon">
          <MoreHorizontal size={16} />
        </Button>
      ),
    },
  ];

  const totalContribution = mockSponsors.reduce((sum, s) => {
    const value = parseInt(s.contribution.replace(/[$,]/g, ""));
    return sum + value;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Sponsors
          </h2>
          <p className="text-muted-foreground">
            Manage sponsor partnerships and contributions
          </p>
        </div>
        <Button variant="hero">
          <Plus size={16} className="mr-2" />
          Add Sponsor
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Sponsors</p>
            <p className="text-2xl font-bold text-foreground">
              {mockSponsors.length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Total Contribution
            </p>
            <p className="text-2xl font-bold text-accent">
              ${totalContribution.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Platinum Sponsors
            </p>
            <p className="text-2xl font-bold text-slate-300">
              {mockSponsors.filter(s => s.tier === "platinum").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-emerald-400">
              {mockSponsors.filter(s => s.status === "active").length}
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
            <Input
              placeholder="Search sponsors..."
              className="bg-muted/50 pl-9"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filter
          </Button>
        </CardContent>
      </Card>

      {/* Table */}
      <DataTable data={mockSponsors} columns={columns} />
    </div>
  );
};

export default SponsorsClient;
