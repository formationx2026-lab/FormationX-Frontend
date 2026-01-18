"use client";

import { motion } from "framer-motion";
import { 
  Cpu,
  Code,
  Server,
  Zap,
  Terminal,
  Database
} from "lucide-react";
import React from "react";

// 1. Optimized Background: Static, clean tech icons (No infinite animation)
export const TechParticles = () => {
  const particles = [
    { icon: Code, x: "5%", y: "10%" },
    { icon: Terminal, x: "85%", y: "20%" },
    { icon: Cpu, x: "15%", y: "80%" },
    { icon: Server, x: "75%", y: "70%" },
    { icon: Database, x: "25%", y: "40%" },
    { icon: Zap, x: "90%", y: "60%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {particles.map(({ icon: Icon, x, y }, index) => (
        <div
          key={index}
          className="absolute text-cyan-500/10"
          style={{
            left: x,
            top: y,
            width: 24,
            height: 24,
          }}
        >
          <Icon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

// 2. Optimized Card: Snappy interactions, no heavy processing
export const AnimatedProblemCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: any; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.4,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative p-6 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 transition-all duration-300 h-full"
    >
      {/* Subtle Gradient Background on Hover (CSS Transition is faster than Motion) */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Icon Container */}
      <div className="relative w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>

      <h3 className="relative text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </h3>

      <p className="relative text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Simple accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-cyan-500/50 w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
};

// 3. Optimized Glow: Static Blur (High performance)
export const AnimatedGlowOrb = () => {
  return (
    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
  );
};

// 4. Section Header: Clean fade-in only
export const AnimatedSectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16 relative z-10"
    >
      <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3">
        The Challenge
      </span>
      
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">
          Hackathons Fail
        </span>
      </h2>
      
      <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
        College hackathon organizers face recurring operational challenges
        that existing platforms don&apos;t address effectively.
      </p>
    </motion.div>
  );
};

// 5. Summary Box: Cleaned up visual noise
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 max-w-3xl mx-auto relative"
    >
      {/* Static Glow instead of animated */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-50" />
      
      <div className="relative p-8 rounded-xl border border-cyan-500/20 bg-gray-900/80 backdrop-blur-md">
        <p className="text-lg text-gray-300 italic text-center font-medium">
          &quot;College hackathon organizers lack a reliable, end-to-end
          infrastructure and operational support system, resulting in
          frequent event cancellations, mismanagement, and loss of trust.&quot;
        </p>
        
        {/* Decorative static dots */}
        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      </div>
    </motion.div>
  );
};