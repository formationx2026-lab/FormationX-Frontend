export default function StatCard({
  title,
  value,
  growth,
}: {
  title: string;
  value: string;
  growth: string;
}) {
  return (
    <div className="bg-[#121829] p-6 rounded-xl border border-white/10">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-green-400 text-sm mt-1">{growth}</p>
    </div>
  );
}
