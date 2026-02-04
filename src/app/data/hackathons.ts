// data/hackathons.ts

export interface ScheduleItem {
  time: string;
  event: string;
  description?: string;
}

export interface Prize {
  title: string;
  reward: string;
  description: string;
  icon?: string; // Lucide icon name matching
}

export interface Hackathon {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string; // HTML or Markdown string
  type: "Security" | "AI/ML" | "Web3" | "Sustainability" | "FinTech";
  mode: "Online" | "Offline" | "Hybrid";
  location: string;
  status: "Upcoming" | "Ongoing" | "Ended";
  registrationOpen: boolean;
  dates: {
    start: string;
    end: string;
    deadline: string;
  };
  prizePool: string;
  teamSize: string;
  images: {
    hero: string;
    logo: string;
  };
  tags: string[];
  tracks: string[];
  schedule: {
    day: string;
    events: ScheduleItem[];
  }[];
  prizes: Prize[];
  faqs: { question: string; answer: string }[];
  sponsors: string[]; // URLs to logos
}

export const HACKATHONS: Hackathon[] = [
  {
    id: "1",
    slug: "cyberstrike-2025",
    title: "CyberStrike 2025",
    tagline: "Breach the fortress. Secure the future.",
    description: `
      <p>CyberStrike 2025 is the premier security hackathon bringing together the world's top white-hat hackers, cryptographers, and security researchers. Your mission is to identify vulnerabilities in next-gen decentralized protocols.</p>
      <br/>
      <p>Participants will have access to a sandbox environment mimicking real-world banking infrastructure. Points are awarded for flags captured, vulnerabilities patched, and innovative defense mechanisms proposed.</p>
    `,
    type: "Security",
    mode: "Online",
    location: "Global / Remote",
    status: "Upcoming",
    registrationOpen: true,
    dates: {
      start: "Oct 12, 2025",
      end: "Oct 14, 2025",
      deadline: "Oct 10, 2025",
    },
    prizePool: "$50,000",
    teamSize: "1-4 Members",
    images: {
      hero: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      logo: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
    },
    tags: ["Solidity", "Rust", "Pentesting", "Zero-Knowledge"],
    tracks: [
      "Smart Contract Auditing",
      "Zero-Day Defense",
      "Privacy Preserving Tech",
      "AI Security"
    ],
    schedule: [
      {
        day: "Day 1 - Oct 12",
        events: [
          { time: "10:00 AM", event: "Opening Ceremony", description: "Keynote by Chief Security Officer." },
          { time: "12:00 PM", event: "Hacking Begins", description: "Sandbox access granted." },
        ]
      },
      {
        day: "Day 2 - Oct 13",
        events: [
          { time: "02:00 PM", event: "Mentor Sessions", description: "1:1 reviews with security experts." },
        ]
      },
      {
        day: "Day 3 - Oct 14",
        events: [
          { time: "04:00 PM", event: "Submission Deadline", description: "All reports must be uploaded." },
          { time: "06:00 PM", event: "Winners Announced", description: "Closing ceremony." },
        ]
      }
    ],
    prizes: [
      { title: "1st Place", reward: "$20,000", description: "Cash prize + Audit credits + Internship opportunities." },
      { title: "2nd Place", reward: "$10,000", description: "Cash prize + Hardware wallet bundle." },
      { title: "Most Creative Exploit", reward: "$5,000", description: "Special jury award for unique attack vectors." },
    ],
    faqs: [
      { question: "Is this beginner friendly?", answer: "While we encourage all skill levels, a basic understanding of cryptography is recommended." },
      { question: "Do I need a team?", answer: "You can hack solo, but teams of 3-4 are highly recommended to cover different skill sets." }
    ],
    sponsors: ["Microsoft", "CrowdStrike", "Ledger", "Chainlink"]
  },
  {
    id: "2",
    slug: "neural-nexus-ai",
    title: "Neural Nexus AI",
    tagline: "Architecting the next generation of intelligence.",
    description: "Join us in San Francisco for a 48-hour sprint to build Generative AI agents that can solve real-world problems in healthcare and finance.",
    type: "AI/ML",
    mode: "Offline",
    location: "Moscone Center, San Francisco",
    status: "Ongoing",
    registrationOpen: false,
    dates: {
      start: "Sep 20, 2025",
      end: "Sep 22, 2025",
      deadline: "Sep 15, 2025",
    },
    prizePool: "$25,000",
    teamSize: "2-5 Members",
    images: {
      hero: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      logo: "https://cdn-icons-png.flaticon.com/512/8637/8637102.png",
    },
    tags: ["Python", "PyTorch", "LLMs", "LangChain"],
    tracks: ["Healthcare Agents", "FinTech Automation", "Creative AI"],
    schedule: [], 
    prizes: [],
    faqs: [],
    sponsors: ["OpenAI", "Nvidia", "Google Cloud"]
  }
];