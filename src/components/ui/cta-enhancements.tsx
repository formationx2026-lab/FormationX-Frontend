// app/components/ui/cta-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Rocket, Users, Shield, CheckCircle, Target } from "lucide-react";
import React from "react";

// Floating Trust Particles
export const FloatingTrustParticles = () => {
  const particles = [
    { icon: Shield, x: "10%", y: "20%", delay: 0 },
    { icon: CheckCircle, x: "85%", y: "30%", delay: 0.5 },
    { icon: Users, x: "15%", y: "70%", delay: 1 },
    { icon: Zap, x: "75%", y: "60%", delay: 1.5 },
    { icon: Target, x: "25%", y: "85%", delay: 2 },
    { icon: Rocket, x: "90%", y: "15%", delay: 2.5 },
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
            width: 32,
            height: 32,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
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

// Animated Background Glow
export const AnimatedBackgroundGlow = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
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

// Animated Badge Component
export const AnimatedBadge = () => {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-10 backdrop-blur-sm relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0, y: -20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-4 h-4 text-cyan-400" />
      </motion.div>
      
      <motion.span 
        className="text-sm font-medium text-cyan-400 relative"
        animate={{
          textShadow: [
            "0 0 0px rgba(34, 211, 238, 0)",
            "0 0 10px rgba(34, 211, 238, 0.5)",
            "0 0 0px rgba(34, 211, 238, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Join the Revolution
      </motion.span>
    </motion.div>
  );
};

// Animated Heading Component
export const AnimatedHeading = () => {
  return (
    <motion.h2
      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Ready to Host Your
      <br />
      <motion.span
        className="text-cyan-400 relative inline-block"
        animate={{
          textShadow: [
            "0 0 20px rgba(34, 211, 238, 0)",
            "0 0 40px rgba(34, 211, 238, 0.5)",
            "0 0 20px rgba(34, 211, 238, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Best Hackathon Ever?
      </motion.span>
    </motion.h2>
  );
};

// Enhanced Primary Button Component
export const EnhancedPrimaryButton = () => {
  return (
    <motion.button
      className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-xl text-black font-semibold text-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 50px rgba(34, 211, 238, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300"
        animate={{
          background: [
            "linear-gradient(90deg, rgba(34, 211, 238, 1), rgba(56, 189, 248, 1))",
            "linear-gradient(90deg, rgba(56, 189, 248, 1), rgba(34, 211, 238, 1))",
            "linear-gradient(90deg, rgba(34, 211, 238, 1), rgba(56, 189, 248, 1))",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-2 bg-cyan-400/30 blur-xl rounded-2xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <span className="relative z-10">START FOR FREE</span>
      <motion.div
        className="relative z-10"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </motion.div>
    </motion.button>
  );
};

// Enhanced Secondary Button Component
export const EnhancedSecondaryButton = () => {
  return (
    <motion.button
      className="group relative inline-flex items-center justify-center px-10 py-4 rounded-xl text-cyan-400 font-semibold text-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Border gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-cyan-500/40 group-hover:border-cyan-400 transition-colors"
        animate={{
          borderColor: [
            "rgba(34, 211, 238, 0.4)",
            "rgba(34, 211, 238, 0.6)",
            "rgba(34, 211, 238, 0.4)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
      
      {/* Particle effects */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-xl"
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${20 + index * 30}%`,
              top: "50%",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}
      </motion.div>
      
      <span className="relative z-10">Schedule Demo</span>
    </motion.button>
  );
};

// Animated Trust Signal Component
export const AnimatedTrustSignal = ({ 
  text, 
  delay = 0 
}: { 
  text: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay }}
    >
      <motion.span
        className="w-2 h-2 rounded-full bg-cyan-400"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay,
        }}
      />
      <motion.span 
        className="text-sm text-gray-400"
        whileHover={{ color: "rgb(34, 211, 238)" }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// Floating Confetti Effect
export const FloatingConfettiEffect = () => {
  const confetti = [
    { x: "10%", y: "15%", delay: 0, color: "rgb(34, 211, 238)" },
    { x: "30%", y: "25%", delay: 0.2, color: "rgb(139, 92, 246)" },
    { x: "50%", y: "35%", delay: 0.4, color: "rgb(59, 130, 246)" },
    { x: "70%", y: "20%", delay: 0.6, color: "rgb(34, 211, 238)" },
    { x: "90%", y: "30%", delay: 0.8, color: "rgb(139, 92, 246)" },
    { x: "20%", y: "85%", delay: 1, color: "rgb(59, 130, 246)" },
    { x: "40%", y: "75%", delay: 1.2, color: "rgb(34, 211, 238)" },
    { x: "60%", y: "90%", delay: 1.4, color: "rgb(139, 92, 246)" },
    { x: "80%", y: "80%", delay: 1.6, color: "rgb(59, 130, 246)" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded"
          style={{
            left: item.x,
            top: item.y,
            backgroundColor: item.color,
            opacity: 0.3,
            rotate: 45,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [45, 90, 135, 180],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 3 + Math.random(),
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Description with typing effect
export const AnimatedDescription = () => {
  const text = "Join thousands of colleges using FORX to run successful, stress-free hackathons. Infrastructure-first. Execution-focused. Trust-driven.";

  return (
    <motion.p
      className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      {text}
    </motion.p>
  );
};