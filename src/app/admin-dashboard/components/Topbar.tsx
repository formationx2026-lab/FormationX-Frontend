export default function Topbar() {
  return (
    <header className="h-16 border-b border-white/10 flex items-center justify-between px-6 bg-[#0B0F1A]">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-[#121829] px-4 py-2 rounded-md text-sm outline-none"
        />
        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}
