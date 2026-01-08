// app/components/ui/problem-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  XCircle, 
  Users, 
  Clock, 
  MessageSquareX, 
  HelpCircle, 
  Store,
  Cpu,
  Code,
  Server,
  Zap,
  Terminal,
  Database
} from "lucide-react";
import React from "react";

// Floating Tech Particles for Background
export const TechParticles = () => {
  const particles = [
    { icon: Code, x: "5%", y: "10%", delay: 0 },
    { icon: Terminal, x: "85%", y: "20%", delay: 0.5 },
    { icon: Cpu, x: "15%", y: "80%", delay: 1 },
    { icon: Server, x: "75%", y: "70%", delay: 1.5 },
    { icon: Database, x: "25%", y: "40%", delay: 2 },
    { icon: Zap, x: "90%", y: "60%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(({ icon: Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/10"
          style={{
            left: x,
            top: y,
            width: 24,
            height: 24,
          }}
          animate={{
            y: [0, -40, 0],
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

// Animated Problem Card Component
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
      className="group relative p-6 rounded-2xl bg-gray-900/60 backdrop-blur border border-white/10 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating icon animation */}
      <motion.div 
        className="relative w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition"
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: index * 0.2 
          }}
        >
          <Icon className="w-6 h-6 text-cyan-400" />
        </motion.div>
        
        {/* Particle effect */}
        <motion.div
          className="absolute inset-0 rounded-lg border border-cyan-400/30"
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

      <h3 className="relative text-lg font-semibold text-white mb-2">
        <motion.span
          className="inline-block"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {title}
        </motion.span>
      </h3>

      <motion.p 
        className="relative text-gray-400 text-sm leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>

      {/* Animated underline on hover */}
      <motion.div
        className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Animated Glowing Orb
export const AnimatedGlowOrb = () => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
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

// Animated Section Header
export const AnimatedSectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <motion.span 
        className="inline-block text-cyan-400 text-sm uppercase tracking-widest mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        The Challenge
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Why{" "}
        <motion.span 
          className="text-cyan-400 relative inline-block"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(6, 182, 212, 0)",
              "0 0 20px rgba(6, 182, 212, 0.5)",
              "0 0 20px rgba(6, 182, 212, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Hackathons Fail
        </motion.span>
      </motion.h2>
      
      <motion.p 
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        College hackathon organizers face recurring operational challenges
        that existing platforms don&apos;t address.
      </motion.p>
    </motion.div>
  );
};

// Animated Summary Box
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 max-w-3xl mx-auto relative"
    >
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
        <motion.p 
          className="text-lg text-gray-400 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          &quot;College hackathon organizers lack a reliable, end-to-end
          infrastructure and operational support system, resulting in
          frequent event cancellations, mismanagement, and loss of trust.&quot;
        </motion.p>
        
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cyan-500/30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-purple-500/30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.div>
  );
};

// Floating Connection Lines
export const FloatingConnectionLines = () => {
  const lines = [
    { x1: "10%", y1: "30%", x2: "30%", y2: "50%", delay: 0 },
    { x1: "70%", y1: "40%", x2: "85%", y2: "60%", delay: 0.5 },
    { x1: "40%", y1: "70%", x2: "60%", y2: "85%", delay: 1 },
    { x1: "20%", y1: "60%", x2: "35%", y2: "75%", delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#gradient)"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{
              duration: 2,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};