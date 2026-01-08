// app/components/DifferentiationSection.tsx
"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedBackgroundOrb,
  FloatingComparisonIcons,
  AnimatedComparisonRow,
  AnimatedSectionHeader,
  AnimatedSummaryBox,
  AnimatedTableHeader
} from "./ui/differentiation-enhancements";

const comparisons = [
  { feature: "Venue Booking & Discovery", existing: false, forx: true },
  { feature: "Sponsor Access & Pitching", existing: false, forx: true },
  { feature: "Verified Vendor Marketplace", existing: false, forx: true },
  { feature: "Guided Organizer Support", existing: false, forx: true },
  { feature: "Native Communication", existing: false, forx: true },
  { feature: "Digital Judging System", existing: "partial", forx: true },
  { feature: "Skill-Based Hiring", existing: false, forx: true },
  { feature: "Fast CSV Listing", existing: false, forx: true },
];

const DifferentiationSection = () => {
  return (
    <motion.section
      id="why-forx"
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <AnimatedBackgroundOrb />
      </div>

      {/* Floating comparison icons */}
      <FloatingComparisonIcons />

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
        className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-red-400/30"
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

      <div className="relative container mx-auto px-4">
        {/* Enhanced Header */}
        <AnimatedSectionHeader />

        <div className="max-w-3xl mx-auto">
          {/* Enhanced Table Header */}
          <AnimatedTableHeader />

          {/* Enhanced Comparison Rows */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {comparisons.map((item, index) => (
              <AnimatedComparisonRow
                key={item.feature}
                item={item}
                index={index}
              />
            ))}
          </motion.div>

          {/* Enhanced Summary */}
          <AnimatedSummaryBox />
        </div>
      </div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 border border-transparent pointer-events-none"
        animate={{
          borderColor: [
            "rgba(6, 182, 212, 0.05)",
            "rgba(6, 182, 212, 0.1)",
            "rgba(6, 182, 212, 0.05)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Connection lines animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full">
          <motion.line
            x1="20%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="url(#redGradient)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <motion.line
            x1="50%"
            y1="50%"
            x2="80%"
            y2="50%"
            stroke="url(#cyanGradient)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(239, 68, 68)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(239, 68, 68)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.section>
  );
};

export default DifferentiationSection;