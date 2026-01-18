"use client";

import { Plus, Search, Filter, MoreHorizontal, Users } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent } from "@/app/admin-dashboard/components/ui/card";
import DataTable from "@/app/admin-dashboard/components/DataTable";
import StatusBadge from "@/app/admin-dashboard/components/StatusBadge";
import { mockTeams, Team } from "@/app/admin-dashboard/data/mockData";

const TeamsClient = () => {
  const columns = [
    {
      key: "name",
      header: "Team",
      render: (team: Team) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/30 to-accent/30">
            <Users size={18} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground">{team.name}</p>
            <p className="text-sm text-muted-foreground">{team.project}</p>
          </div>
        </div>
      ),
    },
    {
      key: "hackathon",
      header: "Hackathon",
      render: (team: Team) => (
        <p className="text-foreground">{team.hackathon}</p>
      ),
    },
    {
      key: "members",
      header: "Members",
      render: (team: Team) => (
        <p className="text-foreground">{team.members}</p>
      ),
    },
    {
      key: "status",
      header: "Team Status",
      render: (team: Team) => (
        <StatusBadge status={team.status} />
      ),
    },
    {
      key: "submissionStatus",
      header: "Submission",
      render: (team: Team) => (
        <StatusBadge status={team.submissionStatus} />
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Teams
          </h2>
          <p className="text-muted-foreground">
            View and manage hackathon teams and their projects
          </p>
        </div>
        <Button variant="hero">
          <Plus size={16} className="mr-2" />
          Create Team
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Teams</p>
            <p className="text-2xl font-bold text-foreground">
              {mockTeams.length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Competing</p>
            <p className="text-2xl font-bold text-primary">
              {mockTeams.filter(t => t.status === "competing").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Winners</p>
            <p className="text-2xl font-bold text-accent">
              {mockTeams.filter(t => t.status === "winner").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Submitted</p>
            <p className="text-2xl font-bold text-blue-400">
              {mockTeams.filter(
                t => t.submissionStatus === "submitted"
              ).length}
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
              placeholder="Search teams..."
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
      <DataTable data={mockTeams} columns={columns} />
    </div>
  );
};

export default TeamsClient;
