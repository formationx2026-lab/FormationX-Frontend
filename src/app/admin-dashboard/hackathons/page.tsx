"use client";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/admin-dashboard/components/ui/card";
import DataTable from "@/app/admin-dashboard/components/DataTable";
import StatusBadge from "@/app/admin-dashboard/components/StatusBadge";
import { mockHackathons, Hackathon } from "@/app/admin-dashboard/data/mockData";

const HackathonsPage = () => {
  const columns = [
    {
      key: "name",
      header: "Hackathon Name",
      render: (hackathon: Hackathon) => (
        <div>
          <p className="font-medium text-foreground">{hackathon.name}</p>
          <p className="text-sm text-muted-foreground">{hackathon.venue}</p>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (hackathon: Hackathon) => <StatusBadge status={hackathon.status} />,
    },
    {
      key: "dates",
      header: "Dates",
      render: (hackathon: Hackathon) => (
        <div className="text-sm">
          <p className="text-foreground">{hackathon.startDate}</p>
          <p className="text-muted-foreground">to {hackathon.endDate}</p>
        </div>
      ),
    },
    {
      key: "participants",
      header: "Participants",
      render: (hackathon: Hackathon) => (
        <p className="text-foreground">{hackathon.participants.toLocaleString()}</p>
      ),
    },
    {
      key: "teams",
      header: "Teams",
      render: (hackathon: Hackathon) => (
        <p className="text-foreground">{hackathon.teams}</p>
      ),
    },
    {
      key: "prize",
      header: "Prize Pool",
      render: (hackathon: Hackathon) => (
        <p className="font-medium text-accent">{hackathon.prize}</p>
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
            Hackathons
          </h2>
          <p className="text-muted-foreground">
            Manage all hackathon events on the platform
          </p>
        </div>
        <Button variant="hero">
          <Plus size={16} className="mr-2" />
          Create Hackathon
        </Button>
         <div className="   text-brand p-4">TEST</div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        
        <Card variant="glass">
            
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Upcoming</p>
            <p className="text-2xl font-bold text-blue-400">
              {mockHackathons.filter((h) => h.status === "upcoming").length}
            </p>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Ongoing</p>
            <p className="text-2xl font-bold text-emerald-400">
              {mockHackathons.filter((h) => h.status === "ongoing").length}
            </p>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="text-2xl font-bold text-muted-foreground">
              {mockHackathons.filter((h) => h.status === "completed").length}
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
              placeholder="Search hackathons..."
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
      <DataTable data={mockHackathons} columns={columns} />
    </div>
  );
};

export default HackathonsPage;
