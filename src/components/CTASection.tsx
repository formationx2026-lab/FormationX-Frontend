// app/components/CTASection.tsx
"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  FloatingTrustParticles,
  AnimatedBackgroundGlow,
  AnimatedBadge,
  AnimatedHeading,
  EnhancedPrimaryButton,
  EnhancedSecondaryButton,
  AnimatedTrustSignal,
  FloatingConfettiEffect,
  AnimatedDescription
} from "./ui/cta-enhancements";

const CTASection = () => {
  return (
    <motion.section 
      className="relative py-16 md:py-16 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background glow */}
      <AnimatedBackgroundGlow />
      
      {/* Floating trust particles */}
      <FloatingTrustParticles />
      
      {/* Confetti effect */}
      <FloatingConfettiEffect />

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Floating Badge */}
          <AnimatedBadge />

          {/* Enhanced Heading */}
          <AnimatedHeading />

          {/* Enhanced Description */}
          <AnimatedDescription />

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <EnhancedPrimaryButton />
            <EnhancedSecondaryButton />
          </motion.div>

          {/* Enhanced Trust Signals */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatedTrustSignal 
              text="No credit card required"
              delay={0}
            />
            <AnimatedTrustSignal 
              text="Free for student organizers"
              delay={0.1}
            />
            <AnimatedTrustSignal 
              text="24/7 support"
              delay={0.2}
            />
          </motion.div>
        </div>
      </div>

      {/* Additional animated elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-400/50"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-purple-400/50"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 border border-transparent pointer-events-none"
        animate={{
          borderColor: [
            "rgba(34, 211, 238, 0.05)",
            "rgba(34, 211, 238, 0.15)",
            "rgba(34, 211, 238, 0.05)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.section>
  );
};

export default CTASection;