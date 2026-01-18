// src/app/dashboard/layout.tsx

import { ReactNode } from "react";

import { SidebarProvider }  from "@/app/admin-dashboard/components/ui/sidebar"
import DashboardClientShell from "@/app/admin-dashboard/components/DashboardClientShell";


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DashboardClientShell>{children}</DashboardClientShell>
      </div>
    </SidebarProvider>
  );
}

