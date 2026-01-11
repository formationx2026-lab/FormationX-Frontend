// app/components/ProblemsSection.tsx
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
  FloatingConnectionLines
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
    title: "Fragmented Communication",
    description:
      "Information scattered across WhatsApp, Discord, Telegram leads to missed updates.",
  },
  {
    icon: HelpCircle,
    title: "No Guidance",
    description:
      "First-time organizers lack structured guidance, leading to repeated mistakes.",
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
    <motion.section 
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background glow */}
      <AnimatedGlowOrb />
      
      {/* Tech particles in background */}
      <TechParticles />
      
      {/* Floating connection lines */}
      <FloatingConnectionLines />

      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <AnimatedSectionHeader />

        {/* Enhanced Problems Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <AnimatedProblemCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Enhanced Summary */}
        <AnimatedSummaryBox />

        {/* Additional floating elements for premium feel */}
        <motion.div
          className="absolute bottom-10 left-10 w-2 h-2 rounded-full bg-cyan-400/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 right-10 w-3 h-3 rounded-full bg-purple-400/30"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Animated border glow effect */}
      <motion.div
        className="absolute inset-0 border border-transparent pointer-events-none"
        animate={{
          borderColor: ["rgba(6, 182, 212, 0.05)", "rgba(6, 182, 212, 0.1)", "rgba(6, 182, 212, 0.05)"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.section>
  );
};

export default ProblemsSection;