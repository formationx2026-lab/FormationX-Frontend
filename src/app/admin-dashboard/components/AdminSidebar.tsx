"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Trophy,
  Users,
  Handshake,
  Store,
  MapPin,
  Users2,
  BarChart3,
  Settings,
  LogOut,
  Zap,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/admin-dashboard/components/ui/sidebar";

import { cn } from "@/app/admin-dashboard/lib/utils";

// -----------------------------
// NAV CONFIG (UNCHANGED)
// -----------------------------
const mainNavItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Hackathons", href: "/admin/hackathons", icon: Trophy },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Sponsors", href: "/admin/sponsors", icon: Handshake },
  { name: "Vendors", href: "/admin/vendors", icon: Store },
  { name: "Spaces", href: "/admin/spaces", icon: MapPin },
  { name: "Teams", href: "/admin/teams", icon: Users2 },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

const AdminSidebar = () => {
  const pathname = usePathname();

  // -----------------------------
  // ACTIVE ROUTE LOGIC (UNCHANGED)
  // -----------------------------
  const isActive = (path: string) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(path);
  };

  return (
    <Sidebar className="border-r border-border/50">
      {/* ---------------- HEADER ---------------- */}
      <SidebarHeader className="border-b border-border/50 p-4">
        <Link href="/admin" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Zap size={24} className="text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-xl font-bold text-foreground">
              FORX
            </span>
            <p className="text-xs text-muted-foreground">Admin Panel</p>
          </div>
        </Link>
      </SidebarHeader>

      {/* ---------------- MAIN NAV ---------------- */}
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground/70">
            Management
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.href)}
                    tooltip={item.name}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                        isActive(item.href)
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                      )}
                    >
                      <item.icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ---------------- FOOTER ---------------- */}
      <SidebarFooter className="border-t border-border/50 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <Settings size={18} />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Back to Site">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                <LogOut size={18} />
                <span>Back to Site</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
