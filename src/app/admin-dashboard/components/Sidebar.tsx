export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0A0E17] border-r border-white/10 p-4">
      <h1 className="text-xl font-bold mb-8">FORX</h1>

      <nav className="space-y-3">
        {[
          "Dashboard",
          "Hackathons",
          "Users",
          "Sponsors",
          "Vendors",
          "Spaces",
          "Teams",
          "Analytics",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            className="px-4 py-2 rounded-lg hover:bg-white/10 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
