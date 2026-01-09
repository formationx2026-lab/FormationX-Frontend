import StatCard from "./StatCard";


export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard title="Total Hackathons" value="127" growth="+12%" />
      <StatCard title="Participants" value="12,450" growth="+23%" />
      <StatCard title="Sponsors" value="89" growth="+8%" />
      <StatCard title="Prizes" value="$2.5M" growth="+15%" />
    </div>
  );
}
