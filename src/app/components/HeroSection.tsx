"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// --- Typewriter Component (Reused) ---
const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-primary inline-block min-w-[2ch]">
      {`${words[index % words.length].substring(0, subIndex)}`}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100 ml-1`}>|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-background">
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top center, hsl(var(--primary) / 0.08) 0%, transparent 70%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        
        {/* Badge: Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-wide border border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Trusted by 500+ Universities
        </motion.div>

        {/* Headline: The User's Specific Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto"
        >
          The Operating System for <br className="hidden md:block" />
          <Typewriter words={["College Hackathons", "Student Builders", "Tech Communities"]} />
        </motion.h1>

        {/* Subheadline: Focused on Management & Conduct */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          The complete toolkit to <strong>organize, manage, and conduct</strong> world-class hackathons. Handle applications, check-in, judging, and sponsors in one unified dashboard.
        </motion.p>

        {/* Feature Ticks (Optional: Reinforces Management capabilities) */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm text-muted-foreground font-medium"
        >
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Instant Registration</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Live Judging</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Sponsor Portal</span>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="group w-full sm:w-auto min-w-[200px] rounded-full h-14 px-8 bg-primary text-primary-foreground text-base font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2">
            Start Organizing
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="w-full sm:w-auto min-w-[200px] rounded-full h-14 px-8 bg-background text-foreground text-base font-bold border border-border hover:bg-secondary/50 hover:border-slate-300 transition-all duration-200">
            View Live Demo
          </button>
        </motion.div>

        {/* Floating Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative max-w-6xl mx-auto"
        >
          <div 
            className="rounded-xl md:rounded-2xl overflow-hidden border border-border bg-card relative z-10"
            style={{
              boxShadow: "0 50px 100px -20px hsl(var(--primary) / 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.2)"
            }}
          >
            {/* Browser Header */}
            <div className="bg-slate-50/80 backdrop-blur-sm h-10 flex items-center px-4 gap-2 border-b border-border sticky top-0 z-20">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/80 border border-red-500/20"></div>
                <div className="h-3 w-3 rounded-full bg-amber-400/80 border border-amber-500/20"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-400/80 border border-emerald-500/20"></div>
              </div>
              <div className="hidden md:flex flex-1 justify-center">
                <div className="bg-white border border-slate-200 rounded-md px-3 py-1 text-[10px] text-muted-foreground w-1/3 flex items-center justify-center font-mono">
                  admin.hackspaces.io
                </div>
              </div>
            </div>

            {/* Browser Content Area (Image) */}
            <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden group">
               <Image
                 src="/hero-bg.png"
                 alt="Hackathon Management Dashboard Interface"
                 fill
                 priority
                 className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
          
          {/* Decorative Background Glow */}
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50" />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;