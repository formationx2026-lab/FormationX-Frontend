
"use client";

import AdminHeader from "@/app/admin-dashboard/components/AdminHeader";
import AdminSidebar from "@/app/admin-dashboard/components/AdminSidebar";



export default function DashboardClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminSidebar />
      <div className="flex flex-1 flex-col">
        <AdminHeader title="Dashboard" subtitle="Overview" />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </>
  );
}
