// app/components/ui/enhanced-components.tsx
"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Code, Terminal, Cloud, Database, Server, CpuIcon } from "lucide-react";
import React from "react";

// Floating Hackathon Icons Component
export const FloatingHackathonIcons = () => {
  const icons = [
    { Icon: Code, delay: 0, size: 20, x: "10%", y: "20%" },
    { Icon: Terminal, delay: 0.5, size: 24, x: "85%", y: "30%" },
    { Icon: Cpu, delay: 1, size: 22, x: "15%", y: "70%" },
    { Icon: Cloud, delay: 1.5, size: 26, x: "80%", y: "60%" },
    { Icon: Database, delay: 2, size: 18, x: "25%", y: "85%" },
    { Icon: Server, delay: 2.5, size: 28, x: "75%", y: "15%" },
    { Icon: Zap, delay: 3, size: 20, x: "90%", y: "80%" },
    { Icon: CpuIcon, delay: 3.5, size: 22, x: "5%", y: "45%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, size, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/20"
          style={{
            left: x,
            top: y,
            width: size,
            height: size,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
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

// Animated Background Grid
export const AnimatedBackgroundGrid = () => {
  return (
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '50px 50px'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Floating Code Lines Component
export const FloatingCodeLines = () => {
  const lines = [
    { width: "100px", left: "10%", delay: 0 },
    { width: "150px", left: "30%", delay: 1 },
    { width: "80px", left: "50%", delay: 2 },
    { width: "120px", left: "70%", delay: 3 },
    { width: "90px", left: "85%", delay: 4 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          className="absolute h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent"
          style={{
            width: line.width,
            left: line.left,
            top: `${20 + index * 15}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Glowing Orb
export const AnimatedGlowingOrb = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Animated Badge Component
export const AnimatedBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-[var(--border-soft)]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated Stat Item
export const AnimatedStatItem = ({ 
  icon: Icon, 
  value, 
  label,
  delay 
}: { 
  icon: any; 
  value: string; 
  label: string;
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay || 0, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-5 h-5 text-cyan-500" />
        <motion.span 
          className="text-3xl md:text-4xl font-bold text-cyan-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (delay || 0) + 0.2, type: "spring" }}
        >
          {value}
        </motion.span>
      </motion.div>
      <motion.span 
        className="text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: (delay || 0) + 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

// Enhanced Button Component
export const EnhancedButton = ({ 
  children, 
  variant = "primary",
  className = "",
  ...props 
}: { 
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  [key: string]: any;
}) => {
  if (variant === "primary") {
    return (
      <motion.button
        className={`group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-lg overflow-hidden ${className}`}
        style={{ backgroundColor: 'var(--primary)' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)] to-cyan-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
        <motion.svg
          className="relative ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </motion.svg>
      </motion.button>
    );
  }

  return (
    <motion.button
      className={`relative group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[color:var(--primary)] to-cyan-500 rounded-lg blur"
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="relative px-6 py-3 sm:px-8 sm:py-4 bg-gray-900/90 backdrop-blur-sm border border-[var(--border-soft)] rounded-lg">
        <span className="text-base sm:text-lg font-semibold tracking-wide text-white">
          {children}
        </span>
      </div>
    </motion.button>
  );
};