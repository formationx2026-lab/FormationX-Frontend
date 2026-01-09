import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#0B0F1A] text-white">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#0E1422]">
          {children}
        </main>
      </div>
    </div>
  );
}
