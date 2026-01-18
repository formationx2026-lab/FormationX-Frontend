// Mock data for the admin panel
// "use client"
export interface Hackathon {
  id: string;
  name: string;
  status: "upcoming" | "ongoing" | "completed";
  startDate: string;
  endDate: string;
  participants: number;
  teams: number;
  venue: string;
  prize: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "participant" | "organizer" | "mentor" | "judge";
  avatar: string;
  hackathonsJoined: number;
  status: "active" | "inactive";
}

export interface Sponsor {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  contribution: string;
  logo: string;
  hackathons: number;
  status: "active" | "pending";
}

export interface Vendor {
  id: string;
  name: string;
  category: "catering" | "equipment" | "swag" | "venue" | "security";
  rating: number;
  eventsServed: number;
  priceRange: string;
  status: "verified" | "pending";
}

export interface Space {
  id: string;
  name: string;
  location: string;
  capacity: number;
  amenities: string[];
  pricePerDay: string;
  rating: number;
  available: boolean;
}

export interface Team {
  id: string;
  name: string;
  hackathon: string;
  members: number;
  project: string;
  status: "forming" | "complete" | "competing" | "winner";
  submissionStatus: "pending" | "submitted" | "evaluated";
}

export const mockHackathons: Hackathon[] = [
  {
    id: "h1",
    name: "TechNova 2024",
    status: "upcoming",
    startDate: "2024-03-15",
    endDate: "2024-03-17",
    participants: 450,
    teams: 92,
    venue: "Innovation Hub, NYC",
    prize: "$50,000",
  },
  {
    id: "h2",
    name: "AI Summit Hack",
    status: "ongoing",
    startDate: "2024-02-01",
    endDate: "2024-02-03",
    participants: 320,
    teams: 64,
    venue: "Tech Campus, SF",
    prize: "$35,000",
  },
  {
    id: "h3",
    name: "Green Future Challenge",
    status: "completed",
    startDate: "2024-01-10",
    endDate: "2024-01-12",
    participants: 280,
    teams: 56,
    venue: "Eco Center, Austin",
    prize: "$25,000",
  },
  {
    id: "h4",
    name: "FinTech Disrupt",
    status: "upcoming",
    startDate: "2024-04-20",
    endDate: "2024-04-22",
    participants: 380,
    teams: 76,
    venue: "Finance Tower, Chicago",
    prize: "$45,000",
  },
  {
    id: "h5",
    name: "HealthTech Innovate",
    status: "completed",
    startDate: "2023-12-05",
    endDate: "2023-12-07",
    participants: 200,
    teams: 40,
    venue: "Medical Plaza, Boston",
    prize: "$30,000",
  },
];

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Alex Johnson",
    email: "alex.j@email.com",
    role: "participant",
    avatar: "AJ",
    hackathonsJoined: 5,
    status: "active",
  },
  {
    id: "u2",
    name: "Sarah Chen",
    email: "sarah.c@email.com",
    role: "organizer",
    avatar: "SC",
    hackathonsJoined: 12,
    status: "active",
  },
  {
    id: "u3",
    name: "Mike Peters",
    email: "mike.p@email.com",
    role: "mentor",
    avatar: "MP",
    hackathonsJoined: 8,
    status: "active",
  },
  {
    id: "u4",
    name: "Emma Wilson",
    email: "emma.w@email.com",
    role: "judge",
    avatar: "EW",
    hackathonsJoined: 15,
    status: "active",
  },
  {
    id: "u5",
    name: "David Kim",
    email: "david.k@email.com",
    role: "participant",
    avatar: "DK",
    hackathonsJoined: 3,
    status: "inactive",
  },
  {
    id: "u6",
    name: "Lisa Park",
    email: "lisa.p@email.com",
    role: "organizer",
    avatar: "LP",
    hackathonsJoined: 20,
    status: "active",
  },
];

export const mockSponsors: Sponsor[] = [
  {
    id: "s1",
    name: "TechCorp Global",
    tier: "platinum",
    contribution: "$100,000",
    logo: "TC",
    hackathons: 25,
    status: "active",
  },
  {
    id: "s2",
    name: "InnovateLabs",
    tier: "gold",
    contribution: "$50,000",
    logo: "IL",
    hackathons: 18,
    status: "active",
  },
  {
    id: "s3",
    name: "CloudNine Solutions",
    tier: "silver",
    contribution: "$25,000",
    logo: "CN",
    hackathons: 12,
    status: "active",
  },
  {
    id: "s4",
    name: "DataDriven Inc",
    tier: "gold",
    contribution: "$45,000",
    logo: "DD",
    hackathons: 15,
    status: "pending",
  },
  {
    id: "s5",
    name: "StartupBoost",
    tier: "bronze",
    contribution: "$10,000",
    logo: "SB",
    hackathons: 8,
    status: "active",
  },
];

export const mockVendors: Vendor[] = [
  {
    id: "v1",
    name: "GourmetBites Catering",
    category: "catering",
    rating: 4.8,
    eventsServed: 150,
    priceRange: "$$$",
    status: "verified",
  },
  {
    id: "v2",
    name: "TechRent Pro",
    category: "equipment",
    rating: 4.6,
    eventsServed: 200,
    priceRange: "$$",
    status: "verified",
  },
  {
    id: "v3",
    name: "SwagMasters",
    category: "swag",
    rating: 4.9,
    eventsServed: 300,
    priceRange: "$",
    status: "verified",
  },
  {
    id: "v4",
    name: "EventGuard Security",
    category: "security",
    rating: 4.7,
    eventsServed: 180,
    priceRange: "$$",
    status: "verified",
  },
  {
    id: "v5",
    name: "QuickBites Express",
    category: "catering",
    rating: 4.3,
    eventsServed: 85,
    priceRange: "$",
    status: "pending",
  },
];

export const mockSpaces: Space[] = [
  {
    id: "sp1",
    name: "Innovation Hub NYC",
    location: "New York, NY",
    capacity: 500,
    amenities: ["WiFi", "Projectors", "Catering Kitchen", "Parking"],
    pricePerDay: "$5,000",
    rating: 4.9,
    available: true,
  },
  {
    id: "sp2",
    name: "Tech Campus SF",
    location: "San Francisco, CA",
    capacity: 350,
    amenities: ["WiFi", "Breakout Rooms", "Stage", "AV Equipment"],
    pricePerDay: "$4,500",
    rating: 4.7,
    available: true,
  },
  {
    id: "sp3",
    name: "Creative Loft Chicago",
    location: "Chicago, IL",
    capacity: 200,
    amenities: ["WiFi", "Open Space", "Kitchen", "Lounge"],
    pricePerDay: "$2,500",
    rating: 4.5,
    available: false,
  },
  {
    id: "sp4",
    name: "Downtown Convention Center",
    location: "Austin, TX",
    capacity: 1000,
    amenities: ["WiFi", "Multiple Halls", "Catering", "Parking", "Security"],
    pricePerDay: "$8,000",
    rating: 4.8,
    available: true,
  },
];

export const mockTeams: Team[] = [
  {
    id: "t1",
    name: "Code Crusaders",
    hackathon: "TechNova 2024",
    members: 4,
    project: "AI-Powered Health Assistant",
    status: "complete",
    submissionStatus: "submitted",
  },
  {
    id: "t2",
    name: "Innovation Squad",
    hackathon: "AI Summit Hack",
    members: 3,
    project: "Smart City Dashboard",
    status: "competing",
    submissionStatus: "pending",
  },
  {
    id: "t3",
    name: "Green Warriors",
    hackathon: "Green Future Challenge",
    members: 5,
    project: "Carbon Footprint Tracker",
    status: "winner",
    submissionStatus: "evaluated",
  },
  {
    id: "t4",
    name: "FinTech Pioneers",
    hackathon: "FinTech Disrupt",
    members: 4,
    project: "DeFi Lending Platform",
    status: "forming",
    submissionStatus: "pending",
  },
  {
    id: "t5",
    name: "HealthHackers",
    hackathon: "HealthTech Innovate",
    members: 4,
    project: "Mental Health Companion App",
    status: "winner",
    submissionStatus: "evaluated",
  },
];

export const dashboardStats = {
  totalHackathons: 127,
  activeParticipants: 12450,
  totalSponsors: 89,
  totalPrizes: "$2.5M",
  upcomingEvents: 8,
  ongoingEvents: 3,
  completedEvents: 116,
  registrationGrowth: 23.5,
};

export const recentActivity = [
  {
    id: "a1",
    action: "New registration",
    user: "Alex Johnson",
    details: "Registered for TechNova 2024",
    time: "2 minutes ago",
  },
  {
    id: "a2",
    action: "Sponsor confirmed",
    user: "TechCorp Global",
    details: "Platinum sponsorship for AI Summit",
    time: "15 minutes ago",
  },
  {
    id: "a3",
    action: "Team formed",
    user: "Code Crusaders",
    details: "4 members joined for TechNova 2024",
    time: "1 hour ago",
  },
  {
    id: "a4",
    action: "Venue booked",
    user: "Sarah Chen",
    details: "Innovation Hub NYC reserved",
    time: "3 hours ago",
  },
  {
    id: "a5",
    action: "Project submitted",
    user: "Green Warriors",
    details: "Carbon Footprint Tracker submitted",
    time: "5 hours ago",
  },
];

export const monthlyData = [
  { month: "Jan", participants: 850, hackathons: 3, revenue: 45000 },
  { month: "Feb", participants: 1200, hackathons: 4, revenue: 62000 },
  { month: "Mar", participants: 980, hackathons: 3, revenue: 51000 },
  { month: "Apr", participants: 1450, hackathons: 5, revenue: 78000 },
  { month: "May", participants: 1680, hackathons: 6, revenue: 92000 },
  { month: "Jun", participants: 1320, hackathons: 4, revenue: 71000 },
];
