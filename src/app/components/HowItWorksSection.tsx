// app/components/HowItWorksSection.tsx
"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedTimelineConnector,
  FloatingTechIcons,
  AnimatedStepCard,
  AnimatedSectionHeader,
  AnimatedBackgroundGlow,
  ConnectionDotsAnimation
} from "./ui/how-it-works-enhancements";

const steps = [
  {
    number: "01",
    title: "Plan & Setup",
    description:
      "Define your hackathon intent with guided planning tools and templates.",
    features: ["Structured planning", "Timeline templates", "Checklist guidance"],
  },
  {
    number: "02",
    title: "Book & Secure",
    description:
      "Discover and book verified venues, connect with sponsors, and engage vendors.",
    features: ["Venue discovery", "Sponsor pitching", "Vendor marketplace"],
  },
  {
    number: "03",
    title: "List & Promote",
    description:
      "Launch your hackathon listing in minutes and reach thousands of participants.",
    features: ["CSV fast listing", "Built-in promotion", "Participant discovery"],
  },
  {
    number: "04",
    title: "Execute & Manage",
    description:
      "Run your event seamlessly with real-time communication and operations tools.",
    features: ["Native chat rooms", "Meal tracking", "Attendance management"],
  },
  {
    number: "05",
    title: "Judge & Announce",
    description:
      "Digital judging system with structured scoring and instant winner calculation.",
    features: ["Digital scoring", "Auto aggregation", "Transparent results"],
  },
  {
    number: "06",
    title: "Connect & Hire",
    description:
      "Participants showcase skills, recruiters discover talent through real work.",
    features: ["Skill profiles", "Project visibility", "Interview requests"],
  },
];

const HowItWorksSection = () => {
  return (
    <motion.section 
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900" />
      
      {/* Enhanced animated background glow */}
      <AnimatedBackgroundGlow />
      
      {/* Floating tech icons */}
      <FloatingTechIcons />
      
      {/* Connection dots animation */}
      <ConnectionDotsAnimation />

      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <AnimatedSectionHeader />

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Timeline Connector */}
          <AnimatedTimelineConnector />

          {/* Enhanced Steps with Animation */}
          <div className="relative">
            {steps.map((step, index) => (
              <AnimatedStepCard
                key={step.number}
                step={step}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 rounded-full bg-cyan-400/30"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-4 h-4 rounded-full bg-purple-400/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated border glow */}
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

export default HowItWorksSection;