// app/components/FeaturesSection.tsx
"use client";

import React from "react";
import {
  MapPin,
  DollarSign,
  FileText,
  Briefcase,
  MessageCircle,
  UtensilsCrossed,
  Award,
  Store,
  HeadphonesIcon,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedFeatureGrid,
  FloatingTechElements,
  AnimatedFeatureCard,
  AnimatedFeaturesHeader,
  AnimatedFeatureGlow,
  FeatureConnectionLines,
  FloatingCountBadge
} from "./ui/features-enhancements";

const capabilities = [
  {
    icon: MapPin,
    title: "Venue Discovery & Booking",
    description:
      "Find hackathon-ready venues with verified profiles, real-time availability, and digital booking assurance.",
  },
  {
    icon: DollarSign,
    title: "Sponsor Discovery Platform",
    description:
      "Access sponsor directories, pitch directly to companies, and track interest—all in one place.",
  },
  {
    icon: FileText,
    title: "Fast CSV Listing",
    description:
      "List your hackathon in minutes with our CSV upload system—no more multi-page forms.",
  },
  {
    icon: Briefcase,
    title: "Skill-Based Hiring",
    description:
      "Professional feeds and skill profiles let recruiters discover talent through real work, not applications.",
  },
  {
    icon: MessageCircle,
    title: "Built-in Chat Rooms",
    description:
      "Auto-created channels for announcements, participants, and organizers—zero information loss.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meal & Attendance Tracking",
    description:
      "Digital attendance and meal distribution tracking eliminates wastage and mismanagement.",
  },
  {
    icon: Award,
    title: "Digital Judging System",
    description:
      "Structured scoring, automatic aggregation, and instant winner calculation with full transparency.",
  },
  {
    icon: Store,
    title: "Verified Vendor Marketplace",
    description:
      "Trusted network of meal providers, goodies vendors, and logistics partners at competitive prices.",
  },
  {
    icon: HeadphonesIcon,
    title: "Organizer Enablement",
    description:
      "Step-by-step playbooks, milestone guidance, and live support for first-time organizers.",
  },
  {
    icon: Code,
    title: "Project Deployment",
    description:
      "Platform-based code submission, storage, and standardized evaluation for all projects.",
  },
];

const FeaturesSection = () => {
  return (
    <motion.section
      id="features"
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background with animations */}
      <div className="absolute inset-0">
        <AnimatedFeatureGrid />
        <AnimatedFeatureGlow />
        <FloatingTechElements />
        <FeatureConnectionLines />
      </div>

      {/* Floating count badge */}
      <FloatingCountBadge />

      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <AnimatedFeaturesHeader />

        {/* Enhanced Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {capabilities.map((cap, index) => (
            <AnimatedFeatureCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400/30"
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
        className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-purple-400/30"
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

      {/* Decorative border */}
      <motion.div
        className="absolute inset-0 border border-transparent pointer-events-none"
        animate={{
          borderColor: ["rgba(6, 182, 212, 0.03)", "rgba(6, 182, 212, 0.08)", "rgba(6, 182, 212, 0.03)"],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Background lines animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${(i * 12.5) + Math.random() * 10}%`,
            }}
            animate={{
              x: [0, 100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FeaturesSection;