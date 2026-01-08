// app/components/ui/user-roles-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Briefcase, 
  Award, 
  Building, 
  Gavel, 
  Package,
  Code,
  Cpu,
  Server,
  Terminal,
  Network,
  Zap
} from "lucide-react";
import React from "react";

// Animated Background Glow
export const AnimatedEcosystemGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main center glow */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[160px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional floating glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

// Floating Ecosystem Icons
export const FloatingEcosystemIcons = () => {
  const icons = [
    { Icon: Code, x: "10%", y: "20%", delay: 0, size: 24 },
    { Icon: Cpu, x: "85%", y: "30%", delay: 0.5, size: 28 },
    { Icon: Server, x: "15%", y: "70%", delay: 1, size: 26 },
    { Icon: Terminal, x: "75%", y: "60%", delay: 1.5, size: 22 },
    { Icon: Network, x: "25%", y: "85%", delay: 2, size: 30 },
    { Icon: Zap, x: "90%", y: "80%", delay: 2.5, size: 24 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay, size }, index) => (
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
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
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

// Animated Role Card Component
export const AnimatedRoleCard = ({ 
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
      className="group relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur border border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      {/* Hover background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${20 + i * 30}%`,
              top: "10%",
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Animated Icon Container */}
      <motion.div 
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition overflow-hidden"
        whileHover={{ rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Icon background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "linear" 
          }}
        />
        
        {/* Icon with pulse animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: index * 0.2 
          }}
        >
          <Icon className="w-7 h-7 text-cyan-400 relative z-10" />
        </motion.div>
        
        {/* Icon glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-cyan-400/30"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: index * 0.2 
          }}
        />
      </motion.div>

      {/* Title with hover animation */}
      <motion.h3 
        className="text-xl font-semibold text-white mb-2 relative"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {title}
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.h3>

      {/* Description with fade-in */}
      <motion.p 
        className="text-gray-400 text-sm leading-relaxed relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Animated Section Header
export const AnimatedRolesHeader = () => {
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
        For Everyone
      </motion.span>
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Built for the{" "}
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
          Entire Ecosystem
        </motion.span>
      </motion.h2>
      
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        FORX serves everyone in the hackathon ecosystem—from organizers to
        recruiters.
      </motion.p>
    </motion.div>
  );
};

// Connection Lines Animation
export const EcosystemConnections = () => {
  const connections = [
    { x1: "20%", y1: "35%", x2: "40%", y2: "50%", delay: 0 },
    { x1: "60%", y1: "35%", x2: "80%", y2: "50%", delay: 0.3 },
    { x1: "30%", y1: "65%", x2: "50%", y2: "80%", delay: 0.6 },
    { x1: "70%", y1: "65%", x2: "90%", y2: "80%", delay: 0.9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="connection-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {connections.map((conn, index) => (
          <motion.line
            key={index}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke={`url(#${index % 2 === 0 ? 'connection-gradient' : 'connection-gradient-2'})`}
            strokeWidth="1"
            strokeDasharray="10,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 3,
              delay: conn.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Floating Role Indicators
export const FloatingRoleIndicators = () => {
  const indicators = [
    { text: "Organizer", x: "10%", y: "25%", delay: 0 },
    { text: "Participant", x: "85%", y: "25%", delay: 0.5 },
    { text: "Sponsor", x: "20%", y: "75%", delay: 1 },
    { text: "Recruiter", x: "75%", y: "75%", delay: 1.5 },
    { text: "Judge", x: "45%", y: "15%", delay: 2 },
    { text: "Vendor", x: "55%", y: "85%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {indicators.map((indicator, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/10 text-xs font-semibold"
          style={{
            left: indicator.x,
            top: indicator.y,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3 + Math.random(),
            repeat: Infinity,
            delay: indicator.delay,
            ease: "easeInOut",
          }}
        >
          {indicator.text}
        </motion.div>
      ))}
    </div>
  );
};