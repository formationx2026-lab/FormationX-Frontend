// app/components/ui/differentiation-enhancements.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Zap, Cpu, Server, Database, Code, Terminal, Shield, Users, Sparkles } from "lucide-react";
import React from "react";

// Animated Background Orb
export const AnimatedBackgroundOrb = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-[160px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// Floating Comparison Icons
export const FloatingComparisonIcons = () => {
  const icons = [
    { Icon: Cpu, x: "10%", y: "20%", delay: 0, side: "left" },
    { Icon: Server, x: "85%", y: "30%", delay: 0.5, side: "right" },
    { Icon: Database, x: "15%", y: "70%", delay: 1, side: "left" },
    { Icon: Code, x: "75%", y: "60%", delay: 1.5, side: "right" },
    { Icon: Terminal, x: "25%", y: "85%", delay: 2, side: "left" },
    { Icon: Shield, x: "90%", y: "80%", delay: 2.5, side: "right" },
    { Icon: Users, x: "5%", y: "45%", delay: 3, side: "left" },
    { Icon: Zap, x: "95%", y: "55%", delay: 3.5, side: "right" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay, side }, index) => (
        <motion.div
          key={index}
          className={`absolute ${side === 'left' ? 'text-red-400/10' : 'text-cyan-400/10'}`}
          style={{
            left: x,
            top: y,
            width: 24,
            height: 24,
          }}
          animate={{
            y: [0, side === 'left' ? -30 : -20, 0],
            x: [0, side === 'left' ? -10 : 10, 0],
            rotate: [0, 180, 360],
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

// Animated Comparison Row Component
export const AnimatedComparisonRow = ({ 
  item, 
  index 
}: { 
  item: any; 
  index: number;
}) => {
  return (
    <motion.div
      key={item.feature}
      className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-gray-900/60 backdrop-blur border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        y: -3,
        boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)",
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      {/* Hover background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />

      {/* Feature Column */}
      <motion.div 
        className="text-left relative z-10"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span className="text-white font-medium flex items-center gap-2">
          {item.feature}
          <motion.span
            className="opacity-0 group-hover:opacity-100"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </motion.span>
        </span>
      </motion.div>

      {/* Other Platforms Column */}
      <motion.div 
        className="flex justify-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
      >
        {item.existing === false ? (
          <motion.div 
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group/other"
            whileHover={{ scale: 1.2, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <X className="w-4 h-4 text-gray-500 group-hover/other:text-red-400 transition-colors" />
            </motion.div>
            
            {/* Particle effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full border border-red-400/30"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ) : (
          <motion.span 
            className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-sm cursor-default group/partial"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(251, 191, 36, 0.2)" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
                color: ["#9ca3af", "#fbbf24", "#9ca3af"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Partial
            </motion.span>
          </motion.span>
        )}
      </motion.div>

      {/* FORX Column */}
      <motion.div 
        className="flex justify-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="relative w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group/forx cursor-pointer"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 400 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glowing shadow */}
          <motion.div
            className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.35)]"
            animate={{
              boxShadow: [
                "0 0 20px rgba(34, 211, 238, 0.35)",
                "0 0 40px rgba(34, 211, 238, 0.5)",
                "0 0 20px rgba(34, 211, 238, 0.35)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-[-4px] rounded-full border border-cyan-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Check icon */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Check className="w-4 h-4 text-cyan-400" />
          </motion.div>
          
          {/* Particle burst effect on hover */}
          <AnimatePresence>
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: [1, 2], opacity: [0, 1, 0] }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Animated underline on hover */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Animated Section Header
export const AnimatedSectionHeader = () => {
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
        Why FORX?
      </motion.span>
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
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
          Infrastructure-First
        </motion.span>
        {" "}vs{" "}
        <motion.span
          className="text-red-400 relative inline-block"
          animate={{
            textShadow: [
              "0 0 20px rgba(239, 68, 68, 0)",
              "0 0 20px rgba(239, 68, 68, 0.3)",
              "0 0 20px rgba(239, 68, 68, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          Listing-First
        </motion.span>
      </motion.h2>
      
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Existing platforms focus on registrations. FORX focuses on
        execution.
      </motion.p>
    </motion.div>
  );
};

// Animated Summary Box
export const AnimatedSummaryBox = () => {
  return (
    <motion.div
      className="mt-14 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      <div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
        <motion.p
          className="text-lg font-medium text-white mb-2 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="absolute -left-2 text-cyan-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            "
          </motion.span>
          Hackathons are treated as events to list, not operations to
          execute.
          <motion.span
            className="absolute -right-2 text-cyan-400"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            "
          </motion.span>
        </motion.p>
        
        <motion.p
          className="text-gray-400 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          FORX fills this gap with an infrastructure-first approach.
        </motion.p>
        
        {/* Animated corner dots */}
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

// Animated Table Header
export const AnimatedTableHeader = () => {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4 mb-6 px-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <span className="text-gray-500 text-sm uppercase tracking-wider">
          Feature
        </span>
      </motion.div>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-gray-500 text-sm uppercase tracking-wider">
          Other Platforms
        </span>
      </motion.div>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-cyan-400 text-sm uppercase tracking-wider flex items-center justify-center gap-2">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
          FORX
          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
        </span>
      </motion.div>
    </motion.div>
  );
};