"use client";

import { Plus, Search, Filter, MoreHorizontal, Star } from "lucide-react";
import { Button } from "@/app/admin-dashboard/components/ui/button";
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { Card, CardContent } from "@/app/admin-dashboard/components/ui/card";
import DataTable from "@/app/admin-dashboard/components/DataTable";
import StatusBadge from "@/app/admin-dashboard/components/StatusBadge";
import { mockVendors, Vendor } from "@/app/admin-dashboard/data/mockData";
import { Badge } from "@/app/admin-dashboard/components/ui/badge";

const VendorsClient = () => {
  const categoryColors: Record<string, string> = {
    catering: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    equipment: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    swag: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    venue: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    security: "bg-red-500/10 text-red-400 border-red-500/30",
  };

  const columns = [
    {
      key: "name",
      header: "Vendor",
      render: (vendor: Vendor) => (
        <p className="font-medium text-foreground">{vendor.name}</p>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (vendor: Vendor) => (
        <Badge
          variant="outline"
          className={categoryColors[vendor.category]}
        >
          {vendor.category.charAt(0).toUpperCase() +
            vendor.category.slice(1)}
        </Badge>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      render: (vendor: Vendor) => (
        <div className="flex items-center gap-1">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-foreground">{vendor.rating}</span>
        </div>
      ),
    },
    {
      key: "eventsServed",
      header: "Events Served",
      render: (vendor: Vendor) => (
        <p className="text-foreground">{vendor.eventsServed}</p>
      ),
    },
    {
      key: "priceRange",
      header: "Price Range",
      render: (vendor: Vendor) => (
        <p className="text-muted-foreground">{vendor.priceRange}</p>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (vendor: Vendor) => (
        <StatusBadge status={vendor.status} />
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
            Vendors
          </h2>
          <p className="text-muted-foreground">
            Manage catering, equipment, and service providers
          </p>
        </div>
        <Button variant="hero">
          <Plus size={16} className="mr-2" />
          Add Vendor
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-5">
        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Catering</p>
            <p className="text-2xl font-bold text-orange-400">
              {mockVendors.filter(v => v.category === "catering").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Equipment</p>
            <p className="text-2xl font-bold text-blue-400">
              {mockVendors.filter(v => v.category === "equipment").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Swag</p>
            <p className="text-2xl font-bold text-purple-400">
              {mockVendors.filter(v => v.category === "swag").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Security</p>
            <p className="text-2xl font-bold text-red-400">
              {mockVendors.filter(v => v.category === "security").length}
            </p>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Verified</p>
            <p className="text-2xl font-bold text-emerald-400">
              {mockVendors.filter(v => v.status === "verified").length}
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
              placeholder="Search vendors..."
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
      <DataTable data={mockVendors} columns={columns} />
    </div>
  );
};

export default VendorsClient;
