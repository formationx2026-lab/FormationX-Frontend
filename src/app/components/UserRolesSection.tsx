// app/components/UserRolesSection.tsx
"use client";

import React from "react";
import {
  Users,
  Briefcase,
  Award,
  Building,
  Gavel,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedEcosystemGlow,
  FloatingEcosystemIcons,
  AnimatedRoleCard,
  AnimatedRolesHeader,
  EcosystemConnections,
  FloatingRoleIndicators
} from "./ui/user-roles-enhancements";

const roles = [
  {
    icon: Users,
    title: "Organizers",
    description:
      "Plan, manage, and execute hackathons with comprehensive tools for venue, sponsor, and vendor coordination.",
  },
  {
    icon: Briefcase,
    title: "Participants",
    description:
      "Register for hackathons, build projects, and showcase skills to unlock career opportunities.",
  },
  {
    icon: Building,
    title: "Sponsors",
    description:
      "Discover hackathons, engage with organizers, evaluate talent, and gain brand exposure.",
  },
  {
    icon: Award,
    title: "Recruiters",
    description:
      "Browse skilled participants, review real work and performance, and initiate interview conversations.",
  },
  {
    icon: Gavel,
    title: "Judges",
    description:
      "Evaluate projects digitally with structured scoring criteria and seamless submission review.",
  },
  {
    icon: Package,
    title: "Vendors",
    description:
      "Provide meals, goodies, printing, and logistics services to hackathon organizers.",
  },
];

const UserRolesSection = () => {
  return (
    <motion.section 
      id="for-everyone"
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background glow */}
      <div className="absolute inset-0">
        <AnimatedEcosystemGlow />
      </div>

      {/* Floating ecosystem icons */}
      <FloatingEcosystemIcons />
      
      {/* Ecosystem connection lines */}
      <EcosystemConnections />
      
      {/* Floating role indicators */}
      <FloatingRoleIndicators />

      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <AnimatedRolesHeader />

        {/* Enhanced Roles Grid with Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {roles.map((role, index) => (
            <AnimatedRoleCard
              key={role.title}
              icon={role.icon}
              title={role.title}
              description={role.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Additional floating elements for premium feel */}
      <motion.div
        className="absolute top-10 left-5 w-2 h-2 rounded-full bg-cyan-400/30"
        animate={{
          y: [0, -15, 0],
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
        className="absolute bottom-10 right-5 w-3 h-3 rounded-full bg-purple-400/30"
        animate={{
          y: [0, 15, 0],
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
      
      {/* Center floating element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-500/20"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
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

export default UserRolesSection;