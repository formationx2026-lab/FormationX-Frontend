"use client";
import { Bell, Search, User } from "lucide-react";
import {Button} from "@/app/admin-dashboard/components/ui/button"
import { Input } from "@/app/admin-dashboard/components/ui/input";
import { SidebarTrigger } from "@/app/admin-dashboard/components/ui/sidebar";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

const AdminHeader = ({ title, subtitle }: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border/50 bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search..."
            className="w-64 bg-muted/50 pl-9 focus:bg-background"
          />
        </div>

        <Button variant="ghost" size="icon" className="relative">
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
        </Button>

        <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/30 px-3 py-1.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
            <User size={16} className="text-primary-foreground" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@forx.io</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
