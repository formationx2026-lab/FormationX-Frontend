"use client";

import React from "react";
import {
  AlertTriangle,
  XCircle,
  Users,
  Clock,
  MessageSquareX,
  HelpCircle,
  Store,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  TechParticles,
  AnimatedProblemCard,
  AnimatedGlowOrb,
  AnimatedSectionHeader,
  AnimatedSummaryBox,
} from "./ui/problem-enhancements";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unreliable Venues",
    description:
      "Last-minute venue cancellations lead to event failures and reputational damage.",
  },
  {
    icon: XCircle,
    title: "No Sponsor Access",
    description:
      "Organizers lack channels to discover and pitch to potential sponsors, leaving events unfunded.",
  },
  {
    icon: Users,
    title: "Manual Operations",
    description:
      "Food distribution, attendance tracking, and logistics managed with pen and paper.",
  },
  {
    icon: Clock,
    title: "Slow Listing Process",
    description:
      "Time-consuming, form-heavy listing processes that miss critical promotion windows.",
  },
  {
    icon: MessageSquareX,
    title: "Fragmented Comms",
    description:
      "Information scattered across WhatsApp, Discord, and Telegram leads to missed updates.",
  },
  {
    icon: HelpCircle,
    title: "No Guidance",
    description:
      "First-time organizers lack structured guidance, leading to repeated avoidable mistakes.",
  },
  {
    icon: Store,
    title: "Unreliable Vendors",
    description:
      "No verified network of hackathon-ready meal, goodies, and logistics providers.",
  },
];

const ProblemsSection = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <AnimatedGlowOrb />
      
      {/* Tech particles */}
      <TechParticles />

      <div className="relative container mx-auto px-4 md:px-6">
        
        <AnimatedSectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {problems.map((problem, index) => (
            <AnimatedProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </div>

        <AnimatedSummaryBox />

      </div>
      
      {/* Very subtle bottom border to separate sections */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
    </section>
  );
};

export default ProblemsSection;