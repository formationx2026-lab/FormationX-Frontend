// app/components/HeroSection.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  FloatingHackathonIcons,
  AnimatedBackgroundGrid,
  FloatingCodeLines,
  AnimatedGlowingOrb,
  AnimatedBadge,
  AnimatedStatItem,
  EnhancedButton
} from './ui/enhanced-components';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Enhanced Background Pattern with Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(0,0,0,0.2),transparent)]"></div>
      
      {/* Animated Grid Pattern Overlay */}
      <AnimatedBackgroundGrid />
      
      {/* Floating Hackathon Icons */}
      <FloatingHackathonIcons />
      
      {/* Floating Code Lines */}
      <FloatingCodeLines />
      
      {/* Enhanced Glowing Orbs with Animation */}
      <AnimatedGlowingOrb className="top-1/4 -left-20 w-72 h-72 bg-[color:var(--primary-soft)]" />
      <AnimatedGlowingOrb className="bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="max-w-6xl mx-auto">

          {/* Enhanced Badge */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBadge>
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-gray-300 text-sm font-medium">
                The Hackathon Operating System
              </span>
            </AnimatedBadge>
          </motion.div>

          {/* Heading with Enhanced Animations */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block relative">
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Transform Hackathons
              </motion.h2>

              {/* Enhanced AI Badge */}
              <motion.div 
                className="absolute top-1/2 right-0 translate-x-[20%] sm:left-full sm:right-auto sm:translate-x-0 ml-0 sm:ml-4 -translate-y-1/2"
                initial={{ rotate: -45, scale: 0 }}
                animate={{ rotate: 45, scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3 
                }}
                whileHover={{ 
                  rotate: 90,
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[color:var(--primary)] to-cyan-400 rounded-lg"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px var(--primary-soft)",
                        "0 0 40px var(--primary-soft)",
                        "0 0 20px var(--primary-soft)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-white font-bold text-lg sm:text-2xl"
                      animate={{ 
                        rotate: [-45, 45, -45],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      AI
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mt-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From Chaos to Success
            </motion.h2>
          </motion.div>

          {/* Description with Animation */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p 
              className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              The complete infrastructure platform that enables college students to confidently host hackathons and participants
              to convert real work into career opportunities.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with Enhanced Components */}
          <motion.div 
            className="flex justify-center items-center gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link href="#">
              <EnhancedButton variant="primary">
                Get started
              </EnhancedButton>
            </Link>

            <EnhancedButton variant="secondary">
              Find Hackathons
            </EnhancedButton>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
              <AnimatedStatItem 
                icon={Users} 
                value="1000+" 
                label="Colleges Supported"
                delay={0}
              />
              <AnimatedStatItem 
                icon={Shield} 
                value="99%" 
                label="Event Success Rate"
                delay={0.2}
              />
              <AnimatedStatItem 
                icon={Zap} 
                value="50K+" 
                label="Participants Connected"
                delay={0.4}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-cyan-500/20"
        animate={{
          y: [0, -50, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-500/20"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default HeroSection;