"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";
import { Code, Terminal, Cpu, Server, Database, Zap, AlertTriangle } from "lucide-react";

/* ---------------- 1. ANIMATED BACKGROUND GRID ---------------- */
export const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* 1. Aurora Gradient Base (From Global CSS) */}
      <div className="absolute inset-0 bg-gradient-aurora opacity-80" />

      {/* 2. Subtle Grid Pattern for Technical Feel */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* 3. Faded Gradient Overlay to soften edges & blend with section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
};

/* ---------------- 2. FLOATING TECH PARTICLES ---------------- */
export const TechParticles = () => {
  // Added gentle float animation
  const particles = [
    { icon: Code, x: "5%", y: "15%", delay: 0 },
    { icon: Terminal, x: "85%", y: "25%", delay: 1 },
    { icon: Cpu, x: "10%", y: "75%", delay: 2 },
    { icon: Server, x: "80%", y: "65%", delay: 1.5 },
    { icon: Database, x: "30%", y: "45%", delay: 0.5 },
    { icon: Zap, x: "92%", y: "55%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(({ icon: Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
          }}
          style={{ 
            left: x, 
            top: y, 
            color: "hsl(var(--primary))" 
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}
    </div>
  );
};

/* ---------------- 3. PREMIUM SPOTLIGHT CARD ---------------- */
export const AnimatedProblemCard = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
    >
      {/* SPOTLIGHT EFFECT: Follows mouse cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-6 h-full flex flex-col z-10">
        {/* Header: Icon & Index */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-6 h-6 text-primary-dark group-hover:text-primary transition-colors duration-300" />
          </div>
          <span className="font-display text-4xl font-bold text-slate-100 group-hover:text-slate-200 transition-colors select-none">
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary-dark transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700">
          {description}
        </p>

        {/* Decorative Bottom Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </motion.div>
  );
};

/* ---------------- 4. SECTION HEADER ---------------- */
export const AnimatedSectionHeader = () => {
  return (
    <div className="text-center mb-20 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20"
      >
        <AlertTriangle size={12} />
        The Challenge
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
      >
        Why College Hackathons <br />
        <span className="relative inline-block">
          <span className="relative z-10 text-primary">Fail to Deliver</span>
          {/* Underline decoration */}
          <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-200/50 -z-0 rotate-1"></span>
        </span>
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
      >
        Organizers face a fragmented ecosystem. Without the right infrastructure, 
        even the best ideas crumble under operational chaos.
      </motion.p>
    </div>
  );
};

/* ---------------- 5. GLASS SUMMARY BOX ---------------- */
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-20 relative max-w-4xl mx-auto"
    >
      {/* Abstract Glow behind */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 transform scale-90" />
      
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-2xl p-8 md:p-12 text-center shadow-2xl shadow-indigo-500/10 ring-1 ring-slate-900/5">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          The Result? 
          <span className="text-destructive ml-2">Lost Potential.</span>
        </h3>
        <p className="text-lg text-slate-600 italic">
          &quot;College hackathon organizers lack a reliable, end-to-end infrastructure, 
          resulting in frequent event cancellations, mismanagement, and loss of trust 
          from both students and sponsors.&quot;
        </p>
        
        {/* Decorative quote marks */}
        <div className="absolute top-6 left-8 text-primary/10 text-8xl font-serif leading-none select-none">“</div>
        
        {/* CTA Hint */}
        <div className="mt-8">
            <button className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                See how we fix this →
            </button>
        </div>
      </div>
    </motion.div>
  );
};