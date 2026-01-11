// app/dashboard/food-distribution/page.tsx
'use client';

import { useState } from "react";
import { Utensils, QrCode, Plus, Search, Check, X, Filter, Download, RefreshCw, AlertCircle, Users, Shield, Clock } from "lucide-react";
import { toast, Toaster } from 'sonner';

interface Participant {
  id: string;
  name: string;
  email: string;
  team: string;
  avatar: string;
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
    snacks: boolean;
  };
}

const FoodDistribution = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMealType, setSelectedMealType] = useState<string>("all");
  const [isScanning, setIsScanning] = useState(false);
  const [participants, setParticipants] = useState<Participant[]>([
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex@example.com",
      team: "Team Alpha",
      avatar: "AJ",
      meals: { breakfast: true, lunch: false, dinner: false, snacks: true },
    },
    {
      id: "2",
      name: "Sam Wilson",
      email: "sam@example.com",
      team: "Team Beta",
      avatar: "SW",
      meals: { breakfast: false, lunch: true, dinner: false, snacks: false },
    },
    {
      id: "3",
      name: "Taylor Swift",
      email: "taylor@example.com",
      team: "Team Gamma",
      avatar: "TS",
      meals: { breakfast: true, lunch: true, dinner: true, snacks: true },
    },
    {
      id: "4",
      name: "Jordan Lee",
      email: "jordan@example.com",
      team: "Team Delta",
      avatar: "JL",
      meals: { breakfast: false, lunch: false, dinner: true, snacks: false },
    },
    {
      id: "5",
      name: "Casey Kim",
      email: "casey@example.com",
      team: "Team Epsilon",
      avatar: "CK",
      meals: { breakfast: true, lunch: false, dinner: false, snacks: true },
    },
  ]);

  const toggleMeal = (participantId: string, mealType: keyof Participant["meals"]) => {
    setParticipants(participants.map(p => 
      p.id === participantId
        ? { ...p, meals: { ...p.meals, [mealType]: !p.meals[mealType] } }
        : p
    ));
    toast.success("Meal status updated");
  };

  const handleScanQR = () => {
    setIsScanning(true);
    toast.info("QR Scanner activated - Point camera at participant QR code");
    // Simulate scan
    setTimeout(() => {
      setIsScanning(false);
      toast.success("Participant scanned successfully!");
    }, 2000);
  };

  const filteredParticipants = participants.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMealStats = () => {
    const stats = {
      breakfast: 0,
      lunch: 0,
      dinner: 0,
      snacks: 0,
    };
    
    participants.forEach(p => {
      if (p.meals.breakfast) stats.breakfast++;
      if (p.meals.lunch) stats.lunch++;
      if (p.meals.dinner) stats.dinner++;
      if (p.meals.snacks) stats.snacks++;
    });
    
    return stats;
  };

  const stats = getMealStats();
  const totalParticipants = participants.length;
  const totalMealsServed = stats.breakfast + stats.lunch + stats.dinner + stats.snacks;

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-br from-primary to-purple-600 rounded-lg">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Food Distribution
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      Track and manage meal distribution for all participants
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={() => toast.info("Exporting data...")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-sm font-medium"
                >
                  <Download className="h-4 w-4" />
                  Export Data
                </button>
                <button 
                  onClick={() => setParticipants([...participants])}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card hover:bg-accent transition-colors text-sm font-medium"
                >
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </button>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Participants</p>
                    <p className="text-3xl font-bold">{totalParticipants}</p>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-green-500">
                    <Shield className="h-4 w-4" />
                    <span>All verified</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Meals Served Today</p>
                    <p className="text-3xl font-bold">{totalMealsServed}</p>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-xl">
                    <Utensils className="h-6 w-6 text-green-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Last updated: Just now</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Distribution Rate</p>
                    <p className="text-3xl font-bold">{Math.round((totalMealsServed / (totalParticipants * 4)) * 100)}%</p>
                  </div>
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <QrCode className="h-6 w-6 text-purple-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-blue-500">
                    <AlertCircle className="h-4 w-4" />
                    <span>On target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Scanner Section */}
          <div className="mb-8">
            <div className={`relative bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-6 transition-all duration-500 ${isScanning ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-primary to-purple-600 ${isScanning ? 'animate-pulse' : ''}`}>
                  <QrCode className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Quick Distribution Mode</h3>
                  <p className="text-muted-foreground">
                    Scan participant QR codes for instant meal distribution tracking
                  </p>
                  {isScanning && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                      <div className="h-2 w-2 bg-primary rounded-full animate-ping" />
                      Scanning in progress...
                    </div>
                  )}
                </div>
                <button 
                  onClick={handleScanQR}
                  className="group inline-flex items-center gap-2 px-6 py-3 text-white bg-gradient-to-r from-primary to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  <QrCode className="h-4 w-4" />
                  {isScanning ? 'Scanning...' : 'Start Scanner'}
                  <div className="w-2 overflow-hidden">
                    <div className="h-3 w-3 bg-white/20 rounded-full group-hover:animate-ping" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Meal Type Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { type: 'breakfast', count: stats.breakfast, color: 'from-orange-500 to-amber-400', icon: '🌅' },
              { type: 'lunch', count: stats.lunch, color: 'from-green-500 to-emerald-400', icon: '🌞' },
              { type: 'dinner', count: stats.dinner, color: 'from-blue-500 to-cyan-400', icon: '🌙' },
              { type: 'snacks', count: stats.snacks, color: 'from-purple-500 to-pink-400', icon: '🍪' },
            ].map((meal) => (
              <div key={meal.type} className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-xl p-5 hover:shadow-lg transition-all duration-300">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${meal.color} rounded-full blur-xl opacity-10 group-hover:opacity-20`} />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{meal.icon}</span>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${meal.color} text-white`}>
                    <Utensils className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-1">{meal.count}</h3>
                <p className="text-sm text-muted-foreground capitalize">{meal.type}</p>
                <div className="mt-3 h-1.5 bg-border rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${meal.color} transition-all duration-700`}
                    style={{ width: `${(meal.count / totalParticipants) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Filters and Search */}
          <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">Search participants</label>
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <input
                    id="search"
                    type="text"
                    placeholder="Search by name, email, or team..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="relative group">
                  <div className="flex items-center gap-2 px-4 py-3 border border-border rounded-xl bg-background/50 cursor-pointer group-hover:border-primary/50 transition-colors">
                    <Filter className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                    <select
                      value={selectedMealType}
                      onChange={(e) => setSelectedMealType(e.target.value)}
                      className="bg-transparent focus:outline-none cursor-pointer appearance-none pr-8"
                    >
                      <option value="all">All Meals</option>
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                      <option value="snacks">Snacks</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  onClick={() => toast.success("Bulk operation started")}
                  className="inline-flex items-center gap-2 px-4 py-3 border border-border rounded-xl bg-background/50 hover:bg-accent transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Bulk Action
                </button>
              </div>
            </div>
          </div>

          {/* Participants Table */}
          <div className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden mb-8">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Participants ({filteredParticipants.length})</h3>
                <span className="text-sm text-muted-foreground">
                  Showing {filteredParticipants.length} of {participants.length}
                </span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-medium text-muted-foreground">Participant</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Team</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Breakfast</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Lunch</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Dinner</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Snacks</th>
                    <th className="text-center p-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredParticipants.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center p-8 text-muted-foreground">
                        <div className="flex flex-col items-center gap-3">
                          <Users className="h-12 w-12 opacity-20" />
                          <p>No participants found</p>
                          <button 
                            onClick={() => setSearchQuery("")}
                            className="text-sm text-primary hover:underline"
                          >
                            Clear search
                          </button>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredParticipants.map((participant) => (
                      <tr key={participant.id} className="border-b border-border hover:bg-accent/10 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center font-medium">
                              {participant.avatar}
                            </div>
                            <div>
                              <p className="font-medium">{participant.name}</p>
                              <p className="text-sm text-muted-foreground">{participant.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {participant.team}
                          </span>
                        </td>
                        {(['breakfast', 'lunch', 'dinner', 'snacks'] as const).map((meal) => (
                          <td key={meal} className="p-4">
                            <div className="flex justify-center">
                              <button
                                onClick={() => toggleMeal(participant.id, meal)}
                                className={`relative h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                                  participant.meals[meal]
                                    ? 'bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow-lg shadow-green-500/25'
                                    : 'bg-accent text-muted-foreground hover:bg-accent/50'
                                }`}
                              >
                                {participant.meals[meal] ? (
                                  <>
                                    <Check className="h-5 w-5" />
                                    <div className="absolute -inset-1 rounded-lg bg-green-500/20 opacity-0 group-hover:opacity-100" />
                                  </>
                                ) : (
                                  <X className="h-5 w-5" />
                                )}
                              </button>
                            </div>
                          </td>
                        ))}
                        <td className="p-4">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => toast.info(`Viewing ${participant.name}'s details`)}
                              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                              title="View details"
                            >
                              👁️
                            </button>
                            <button
                              onClick={handleScanQR}
                              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                              title="Scan QR"
                            >
                              📱
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips and Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent-foreground" />
                Distribution Tips & Best Practices
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Use QR code scanner during peak hours for faster check-ins",
                  "Monitor real-time stats to prevent food shortages",
                  "Mark meals immediately to avoid duplicate servings",
                  "Export daily reports for inventory management",
                  "Keep backup lists for participants without QR codes",
                  "Schedule distribution windows to manage crowds"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-500" />
                {"Today's Schedule"}
              </h3>
              <div className="space-y-4">
                {[
                  { time: "08:00 - 10:00", meal: "Breakfast", status: "Active" },
                  { time: "12:30 - 14:00", meal: "Lunch", status: "Upcoming" },
                  { time: "19:00 - 21:00", meal: "Dinner", status: "Upcoming" },
                  { time: "15:00 - 16:00", meal: "Snacks", status: "Upcoming" },
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                    <div>
                      <p className="font-medium">{schedule.meal}</p>
                      <p className="text-sm text-muted-foreground">{schedule.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      schedule.status === 'Active' 
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-purple-500/10 text-purple-500'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 rounded-xl border border-border hover:bg-accent transition-colors text-sm font-medium">
                View Full Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDistribution;