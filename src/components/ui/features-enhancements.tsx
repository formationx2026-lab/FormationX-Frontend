// app/components/ui/features-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { 
  MapPin, DollarSign, FileText, Briefcase, MessageCircle, 
  UtensilsCrossed, Award, Store, HeadphonesIcon, Code,
  Cpu, Server, Database, Terminal, Network, Zap, GitBranch, Cloud
} from "lucide-react";
import React from "react";

// Animated Background Grid
export const AnimatedFeatureGrid = () => {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '60px 60px'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Floating Tech Elements
export const FloatingTechElements = () => {
  const elements = [
    { Icon: Cpu, x: "5%", y: "20%", delay: 0, size: 24 },
    { Icon: Server, x: "90%", y: "30%", delay: 0.5, size: 28 },
    { Icon: Database, x: "15%", y: "80%", delay: 1, size: 22 },
    { Icon: Terminal, x: "85%", y: "70%", delay: 1.5, size: 26 },
    { Icon: Network, x: "25%", y: "40%", delay: 2, size: 20 },
    { Icon: Zap, x: "95%", y: "85%", delay: 2.5, size: 24 },
    { Icon: GitBranch, x: "10%", y: "60%", delay: 3, size: 28 },
    { Icon: Cloud, x: "80%", y: "15%", delay: 3.5, size: 22 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(({ Icon, x, y, delay, size }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/10"
          style={{
            left: x,
            top: y,
            width: size,
            height: size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};

// Animated Feature Card
export const AnimatedFeatureCard = ({ 
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
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      className="group relative p-5 rounded-2xl bg-gray-900/60 backdrop-blur border border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-12 h-12"
        initial={{ opacity: 0, x: 10, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: index * 0.05 + 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-500/50" />
        <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-purple-500/50" />
      </motion.div>

      {/* Animated Icon Container */}
      <motion.div 
        className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition overflow-hidden"
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Icon glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon with animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: index * 0.1 
          }}
        >
          <Icon className="w-6 h-6 text-cyan-400 relative z-10" />
        </motion.div>
        
        {/* Particle ring around icon */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-cyan-400/30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: index * 0.1 
          }}
        />
      </motion.div>

      {/* Title with underline animation */}
      <motion.h3 
        className="text-sm font-semibold text-white leading-tight mb-2 relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 + 0.1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="inline-block relative"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {title}
        </motion.span>
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.h3>

      {/* Description with fade-in */}
      <motion.p 
        className="text-sm text-gray-400 leading-relaxed relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.05 + 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        style={{ width: "80%" }}
        initial={{ scaleX: 0, x: "-50%" }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: index * 0.05 + 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

// Animated Section Header
export const AnimatedFeaturesHeader = () => {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.span
        className="inline-block text-cyan-400 text-sm uppercase tracking-widest mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Platform Capabilities
      </motion.span>
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.span
          className="text-cyan-400 relative inline-block"
          animate={{
            textShadow: [
              "0 0 20px rgba(6, 182, 212, 0)",
              "0 0 20px rgba(6, 182, 212, 0.5)",
              "0 0 20px rgba(6, 182, 212, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          10 Powerful
        </motion.span>{" "}
        Solutions
      </motion.h2>
      
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        A complete operating system for hackathons—from venue booking to
        talent discovery.
      </motion.p>
    </motion.div>
  );
};

// Animated Background Glow
export const AnimatedFeatureGlow = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[160px]"
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.1, 0.15, 0.1],
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Connection Lines between Features
export const FeatureConnectionLines = () => {
  const connections = [
    { x1: "20%", y1: "30%", x2: "40%", y2: "50%", delay: 0 },
    { x1: "60%", y1: "40%", x2: "80%", y2: "60%", delay: 0.5 },
    { x1: "30%", y1: "70%", x2: "50%", y2: "80%", delay: 1 },
    { x1: "70%", y1: "20%", x2: "90%", y2: "40%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {connections.map((conn, index) => (
          <motion.line
            key={index}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#feature-gradient)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.05 }}
            transition={{
              duration: 2,
              delay: conn.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="feature-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Floating Count Badge
export const FloatingCountBadge = () => {
  return (
    <motion.div
      className="absolute top-10 right-10 hidden lg:block"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="relative">
        
        
        {/* Surrounding particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
            style={{
              left: `${50 + 25 * Math.cos((i * Math.PI) / 3)}%`,
              top: `${50 + 25 * Math.sin((i * Math.PI) / 3)}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};