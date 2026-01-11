
import {
  Plus,
  TrendingUp,
  Users,
  Trophy,
  Calendar,
  Sparkles,
  ArrowRight,
  Clock,
  Target,
  BarChart3,
  Zap,
  Globe,
  Award,
  CheckCircle2,
} from 'lucide-react';

export default function DashboardPage() {

  const features = [
    { icon: <Users className="h-5 w-5" />, text: 'Manage Participants' },
    { icon: <Trophy className="h-5 w-5" />, text: 'Track Submissions' },
    { icon: <Globe className="h-5 w-5" />, text: 'Streamline Communications' },
    { icon: <BarChart3 className="h-5 w-5" />, text: 'Handle Reimbursements' },
    { icon: <Award className="h-5 w-5" />, text: 'Oversee Judging' },
    { icon: <Target className="h-5 w-5" />, text: 'Real-time Analytics' },
  ];

  const upcomingHackathons = [
    {
      name: 'AI Innovation Challenge',
      date: 'Dec 15-17, 2024',
      participants: 150,
      status: 'Upcoming',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      name: 'Web3 Buildathon',
      date: 'Jan 20-22, 2025',
      participants: 89,
      status: 'Registration Open',
      color: 'from-purple-500 to-pink-400',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header with Gradient */}
          <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Power Your Innovation Journey
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Organize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Hackathon</span>
              <br />
              With Precision & Style
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Experience the ultimate thrill of being at the heart of innovation
              with Formation X! Organize hackathons, manage participant
              applications, track submissions, streamline communications,
              handle reimbursements, and oversee judging — all seamlessly on
              our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                className="group relative inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <Plus className="mr-3 h-5 w-5" />
                <span className="relative">Organize Hackathon</span>
                <ArrowRight className="ml-3 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              
              <button className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-primary border-2 border-primary/20 rounded-xl hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                <PlayCircle className="mr-3 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Everything You Need In One Platform
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.text}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Streamlined tools for efficient hackathon management
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Your Hackathon Dashboard
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StatCard 
                title="Active Hackathons" 
                value="2" 
                icon={<Zap className="h-5 w-5" />}
                trend="+1 this month"
                color="from-blue-500 to-cyan-400"
              />
              <StatCard 
                title="Total Participants" 
                value="239" 
                icon={<Users className="h-5 w-5" />}
                trend="↑ 15% from last month"
                color="from-green-500 to-emerald-400"
              />
              <StatCard 
                title="Total Submissions" 
                value="48" 
                icon={<Trophy className="h-5 w-5" />}
                trend="↑ 23% from last month"
                color="from-purple-500 to-pink-400"
              />
              <StatCard 
                title="Success Rate" 
                value="98%" 
                icon={<CheckCircle2 className="h-5 w-5" />}
                trend="Industry leading"
                color="from-orange-500 to-yellow-400"
              />
            </div>
          </div>

          {/* Upcoming Hackathons */}
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Upcoming Hackathons</h2>
                <p className="text-muted-foreground mt-1">Manage your upcoming events</p>
              </div>
              <button className="mt-4 sm:mt-0 inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {upcomingHackathons.map((hackathon, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${hackathon.color} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{hackathon.name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{hackathon.date}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {hackathon.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{hackathon.participants} Participants</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
                      Manage Event
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <QuickActionCard
              title="Create Template"
              description="Use pre-built templates for quick setup"
              icon={<Sparkles className="h-5 w-5" />}
              color="from-blue-500 to-cyan-400"
            />
            <QuickActionCard
              title="Invite Judges"
              description="Bring expert judges on board"
              icon={<Award className="h-5 w-5" />}
              color="from-purple-500 to-pink-400"
            />
            <QuickActionCard
              title="Analytics Dashboard"
              description="View detailed event analytics"
              icon={<BarChart3 className="h-5 w-5" />}
              color="from-green-500 to-emerald-400"
            />
          </div>
        </div>
      </div>

      {/* You can add the CreateHackathonDialog component here */}
      {/* <CreateHackathonDialog
        open={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      /> */}
    </div>
  );
}

function StatCard({ 
  title, 
  value, 
  icon,
  trend,
  color 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  trend: string;
  color: string;
}) {
  return (
    <div className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} text-white`}>
          {icon}
        </div>
        <TrendingUp className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="text-3xl font-bold text-foreground mb-1">{value}</h3>
      <p className="text-muted-foreground">{title}</p>
      <p className="text-xs text-green-500 mt-2">{trend}</p>
    </div>
  );
}

function QuickActionCard({
  title,
  description,
  icon,
  color
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="group cursor-pointer bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 inline-flex items-center text-primary text-sm font-medium">
        Get Started
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

// Add missing icon component
function PlayCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </svg>
  );
}