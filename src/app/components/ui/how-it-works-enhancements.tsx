// app/components/ui/how-it-works-enhancements.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Code, Cpu, Server, Database, Terminal, Network } from "lucide-react";
import React from "react";

// Animated Timeline Connection
export const AnimatedTimelineConnector = () => {
  return (
    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
      {/* Main timeline line */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-500"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-500"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

// Floating Technology Icons
export const FloatingTechIcons = () => {
  const icons = [
    { Icon: Code, x: "10%", y: "20%", delay: 0 },
    { Icon: Cpu, x: "85%", y: "30%", delay: 0.5 },
    { Icon: Server, x: "15%", y: "70%", delay: 1 },
    { Icon: Database, x: "75%", y: "60%", delay: 1.5 },
    { Icon: Terminal, x: "25%", y: "85%", delay: 2 },
    { Icon: Network, x: "90%", y: "80%", delay: 2.5 },
    { Icon: Zap, x: "5%", y: "45%", delay: 3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/10"
          style={{
            left: x,
            top: y,
            width: 28,
            height: 28,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
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

// Animated Step Card Component
export const AnimatedStepCard = ({ 
  step, 
  index,
  isEven 
}: { 
  step: any; 
  index: number;
  isEven: boolean;
}) => {
  return (
    <motion.div
      className={`relative flex flex-col lg:flex-row items-center gap-10 mb-20 last:mb-0 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Content card */}
      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <motion.div
          className="p-6 rounded-2xl bg-gray-900/60 backdrop-blur border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group"
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
            initial={false}
            transition={{ duration: 0.3 }}
          />

          {/* Animated number badge in card */}
          <motion.div
            className={`absolute -top-3 ${isEven ? '-right-3' : '-left-3'} px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold text-cyan-300">Step {step.number}</span>
          </motion.div>

          <motion.h3 
            className="text-xl md:text-2xl font-bold text-white mb-3 relative"
            whileHover={{ x: isEven ? -5 : 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {step.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 mb-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.1 }}
            viewport={{ once: true }}
          >
            {step.description}
          </motion.p>

          <motion.div
            className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : "lg:justify-start"}`}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            {step.features.map((feature: string, featureIndex: number) => (
              <motion.span
                key={feature}
                className="inline-flex items-center gap-1 text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full cursor-default group/feature"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: featureIndex * 0.5 
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" />
                </motion.div>
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Step Number Circle */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className="relative w-20 h-20 rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-500/40"
            animate={{
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.4)",
                "0 0 40px rgba(6, 182, 212, 0.6)",
                "0 0 20px rgba(6, 182, 212, 0.4)",
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            }}
          />
          
          {/* Inner circle with number */}
          <motion.div
            className="w-16 h-16 rounded-full bg-black flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 20 
            }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-lg font-bold text-white"
              animate={{ 
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 0px rgba(6, 182, 212, 0)",
                  "0 0 10px rgba(6, 182, 212, 0.5)",
                  "0 0 0px rgba(6, 182, 212, 0)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: index * 0.2 
              }}
            >
              {step.number}
            </motion.span>
          </motion.div>

          {/* Floating particles around number */}
          {[...Array(4)].map((_, particleIndex) => (
            <motion.div
              key={particleIndex}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                left: `${50 + 30 * Math.cos((particleIndex * Math.PI) / 2)}%`,
                top: `${50 + 30 * Math.sin((particleIndex * Math.PI) / 2)}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: particleIndex * 0.5 + index * 0.1,
              }}
            />
          ))}
        </motion.div>

        {/* Connection line to timeline */}
        <motion.div
          className="hidden lg:block absolute top-1/2 w-20 h-0.5 bg-gradient-to-r from-cyan-500/40 to-transparent"
          style={{
            left: isEven ? "100%" : "-20px",
            right: isEven ? "auto" : "100%",
            transform: "translateY(-50%)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden lg:block" />
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
        The Journey
      </motion.span>
      
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        End-to-End{" "}
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
          Hackathon Lifecycle
        </motion.span>
      </motion.h2>
      
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        From initial planning to talent outcomes—every step is supported by
        FORX.
      </motion.p>
    </motion.div>
  );
};

// Animated Background Glow
export const AnimatedBackgroundGlow = () => {
  return (
    <>
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px]"
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
      
      {/* Additional floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-[100px]"
        animate={{
          x: [0, 20, 0],
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
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-[100px]"
        animate={{
          x: [0, -20, 0],
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
    </>
  );
};

// Connection Dots Animation
export const ConnectionDotsAnimation = () => {
  const dots = [
    { x: "20%", y: "25%", delay: 0 },
    { x: "40%", y: "40%", delay: 0.2 },
    { x: "60%", y: "55%", delay: 0.4 },
    { x: "80%", y: "70%", delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-cyan-500/30"
          style={{ left: dot.x, top: dot.y }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};