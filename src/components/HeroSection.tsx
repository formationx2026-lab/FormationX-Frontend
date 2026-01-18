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
} from './ui/enhanced-components';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030711] overflow-hidden selection:bg-[#06b6d4] selection:text-white">
      
      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#020617] to-[#000000]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000000_100%)] pointer-events-none z-[1]" />
      
      {/* Subtle Cyan Glow behind text */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />
      
      {/* Animated Elements */}
      <div className="z-0">
        <AnimatedBackgroundGrid />
        <FloatingHackathonIcons />
        <FloatingCodeLines />
      </div>
      
      {/* Softened Orbs */}
      <AnimatedGlowingOrb className="top-[15%] -left-[5%] w-[400px] h-[400px] opacity-20 bg-[#06b6d4] blur-[90px]" />
      <AnimatedGlowingOrb className="bottom-[15%] -right-[5%] w-[400px] h-[400px] opacity-10 bg-purple-600 blur-[90px]" />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-4 mt-8 mb-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* 1. Pill Badge */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/20 hover:border-white/20 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]"></span>
              </span>
              <span className="text-gray-300 text-xs sm:text-sm font-medium tracking-wide">
                The Hackathon Operating System
              </span>
            </div>
          </motion.div>

          {/* 2. Headline - Tighter & Cleaner */}
          <div className="text-center mb-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Main Headline Group */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-2xl">
                Transform Hackathons
                <span className="relative inline-block whitespace-nowrap">
                
                </span>
              </h1>

              {/* Sub Headline - Better Contrast */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#94a3b8] tracking-tight leading-[1.1] mt-1 sm:mt-2">
                From Chaos to Success
              </h1>
            </motion.div>
          </div>

          {/* 3. Description - More Compact */}
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-center max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
              The complete infrastructure platform that enables college students to confidently host hackathons and participants to convert real work into career opportunities.
            </p>
          </motion.div>

          {/* 4. Buttons - Premium & Solid */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="#">
              <motion.button
                className="group relative px-8 py-3.5 rounded-full font-semibold text-white min-w-[160px] overflow-hidden bg-[#06b6d4]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10">Get started</span>
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
              </motion.button>
            </Link>

            <motion.button
              className="px-8 py-3.5 rounded-full font-semibold text-gray-300 border border-white/10 min-w-[160px] bg-white/[0.02] hover:bg-white/[0.05] transition-all hover:text-white hover:border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Find Hackathons
            </motion.button>
          </motion.div>

          {/* 5. Stats Section */}
          <motion.div 
            className="mt-12  border-t border-white/5 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <AnimatedStatItem 
                icon={Users} 
                value="1000+" 
                label="Colleges Supported" 
                delay={0}
              />
              <AnimatedStatItem 
                icon={Shield} 
                value="99%" 
                label="Success Rate" 
                delay={0.1}
              />
              <AnimatedStatItem 
                icon={Zap} 
                value="50K+" 
                label="Participants" 
                delay={0.2}
              />
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;