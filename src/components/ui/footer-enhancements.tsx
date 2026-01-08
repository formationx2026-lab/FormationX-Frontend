// app/components/ui/footer-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Code, Cpu, Server, Database, Terminal, Zap } from "lucide-react";
import React from "react";

// Floating Technology Background Elements
export const FloatingTechElements = () => {
  const elements = [
    { Icon: Code, x: "5%", y: "20%", delay: 0, size: 16 },
    { Icon: Cpu, x: "90%", y: "30%", delay: 0.5, size: 20 },
    { Icon: Server, x: "10%", y: "70%", delay: 1, size: 18 },
    { Icon: Database, x: "85%", y: "60%", delay: 1.5, size: 14 },
    { Icon: Terminal, x: "20%", y: "85%", delay: 2, size: 22 },
    { Icon: Zap, x: "80%", y: "15%", delay: 2.5, size: 16 },
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
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
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

// Animated Brand Logo
export const AnimatedBrandLogo = () => {
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative w-11 h-11 rounded-xl bg-cyan-400 flex items-center justify-center overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.5)",
            "0 0 40px rgba(34, 211, 238, 0.8)",
            "0 0 20px rgba(34, 211, 238, 0.5)",
          ],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
          rotate: { duration: 4, repeat: Infinity },
        }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        
        <motion.span
          className="font-bold text-black text-lg relative z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          F
        </motion.span>
      </motion.div>
      
      <motion.span
        className="text-xl font-bold text-cyan-400"
        animate={{
          textShadow: [
            "0 0 0px rgba(34, 211, 238, 0)",
            "0 0 10px rgba(34, 211, 238, 0.5)",
            "0 0 0px rgba(34, 211, 238, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        FORX
      </motion.span>
    </motion.div>
  );
};

// Animated Social Link
export const AnimatedSocialLink = ({ 
  icon: Icon, 
  href, 
  label,
  index 
}: { 
  icon: any; 
  href: string; 
  label: string;
  index: number;
}) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      className="relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 overflow-hidden group"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        borderColor: "rgba(34, 211, 238, 0.4)",
        backgroundColor: "rgba(34, 211, 238, 0.1)",
      }}
    >
      {/* Hover background effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.4 }}
      />
      
      {/* Icon with hover animation */}
      <motion.div
        className="relative z-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 border border-cyan-400/30 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

// Animated Footer Link
export const AnimatedFooterLink = ({ 
  name, 
  href,
  index 
}: { 
  name: string; 
  href: string;
  index: number;
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <motion.a
        href={href}
        className="text-gray-400 hover:text-cyan-400 transition-colors text-sm relative inline-block group"
        whileHover={{ x: 5 }}
      >
        {name}
        <motion.span
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </motion.li>
  );
};

// Animated Section Title
export const AnimatedSectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h4
      className="text-white font-semibold mb-4 relative inline-block"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {children}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.h4>
  );
};

// Animated Background Glow
export const AnimatedBackgroundGlow = () => {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-t from-black via-cyan-500/5 to-black pointer-events-none"
      animate={{
        opacity: [0.05, 0.1, 0.05],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Animated Heart in Copyright
export const AnimatedHeart = () => {
  return (
    <motion.span
      className="text-cyan-400 inline-block mx-1"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      💙
    </motion.span>
  );
};

// Floating Particles
export const FloatingParticles = () => {
  const particles = Array.from({ length: 8 }, (_, i) => ({
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: i * 0.2,
    size: Math.random() * 3 + 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-400/10"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Animated Border Glow
export const AnimatedBorderGlow = () => {
  return (
    <motion.div
      className="absolute inset-0 border border-transparent pointer-events-none"
      animate={{
        borderColor: [
          "rgba(255, 255, 255, 0.05)",
          "rgba(34, 211, 238, 0.1)",
          "rgba(255, 255, 255, 0.05)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};