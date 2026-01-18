"use client";

import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent } from "@/app/admin-dashboard/components/ui/card";
import DataTable from "@/app/admin-dashboard/components/DataTable";
import StatusBadge from "@/app/admin-dashboard/components/StatusBadge";
import { mockUsers, User } from "@/app/admin-dashboard/data/mockData";
import { Badge } from "@/app/admin-dashboard/components/ui/badge";

const UsersClient = () => {
  const roleColors: Record<string, string> = {
    participant: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    organizer: "bg-primary/10 text-primary border-primary/30",
    mentor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    judge: "bg-accent/10 text-accent border-accent/30",
  };

  const columns = [
    {
      key: "name",
      header: "User",
      render: (user: User) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/50 to-accent/50">
            <span className="text-sm font-bold text-foreground">
              {user.avatar}
            </span>
          </div>
          <div>
            <p className="font-medium text-foreground">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (user: User) => (
        <Badge variant="outline" className={roleColors[user.role]}>
          {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        </Badge>
      ),
    },
    {
      key: "hackathonsJoined",
      header: "Hackathons",
      render: (user: User) => (
        <p className="text-foreground">{user.hackathonsJoined}</p>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (user: User) => (
        <StatusBadge status={user.status} />
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
      {/* everything else unchanged */}
      <DataTable data={mockUsers} columns={columns} />
    </div>
  );
};

export default UsersClient;
