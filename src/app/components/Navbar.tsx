"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [featureOpen, setFeatureOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [particles, setParticles] = useState<
  { top: string; left: string; delay: number; duration: number }[]
>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  setParticles(
    Array.from({ length: 5 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 2 + Math.random(),
    }))
  );
}, []);


  const navLinks = ["Home", "Hackathons", "About", "Contact Us"];
  const featureItems = ["Spaces", "Sponsors", "Vendors", "Team Guidance"];

  return (
    <motion.header 
      className="relative bg-black/70 backdrop-blur-xl border-b border-[var(--border-soft)] sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-50"
        animate={{
          background: [
            "linear-gradient(90deg, var(--primary-soft), transparent, var(--primary-soft))",
            "linear-gradient(90deg, transparent, var(--primary-soft), transparent)",
            "linear-gradient(90deg, var(--primary-soft), transparent, var(--primary-soft))",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Animated floating particles */}
   {/* Animated floating particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {particles.map((p, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 rounded-full"
      style={{
        background: "var(--primary)",
        top: p.top,
        left: p.left,
      }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: p.duration,
        repeat: Infinity,
        delay: p.delay,
      }}
    />
  ))}
</div>


      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animation */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--primary-hover))",
                boxShadow: "0 0 20px var(--primary-glow)",
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
            >
              <motion.span 
                className="text-white font-bold text-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                F
              </motion.span>
            </motion.div>

            <motion.span
              className="text-2xl font-bold relative"
              style={{
                background: "linear-gradient(90deg, var(--primary), var(--primary-hover))",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              FORX
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-var(--primary) to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link href="#" className="nav-link px-4 py-2 rounded-lg">
                  {link}
                  {hoveredLink === link && (
                    <motion.div
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: "var(--primary-soft)",
                        opacity: 0.1,
                      }}
                      layoutId="hover-bg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-1/2 h-0.5"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--primary), transparent)",
                    width: "0%",
                  }}
                  animate={{
                    width: hoveredLink === link ? "80%" : "0%",
                    x: "-50%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            {/* Features Dropdown */}
            <motion.div
              className="relative"
              onMouseEnter={() => setFeatureOpen(true)}
              onMouseLeave={() => setFeatureOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <motion.button 
                className="nav-link flex items-center gap-1 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                Features
                <motion.span
                  animate={{ rotate: featureOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ⌄
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {featureOpen && (
                  <motion.div
                    className="absolute top-full mt-3 w-56 rounded-xl bg-black/90 border border-[var(--border-soft)] shadow-2xl backdrop-blur-xl overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-3">
                      {featureItems.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href="#"
                            className="block px-5 py-2 text-sm transition-all group"
                            style={{ color: "var(--foreground)" }}
                          >
                            <motion.span 
                              className="group-hover:text-[color:var(--primary)] relative"
                              whileHover={{ x: 5 }}
                            >
                              {item}
                              <motion.span
                                className="absolute -left-2 top-1/2 h-1 w-1 rounded-full bg-[color:var(--primary)]"
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                              />
                            </motion.span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Dropdown glow effect */}
                    <motion.div
                      className="absolute inset-0 -z-10"
                      style={{
                        background: "radial-gradient(circle at 50% 0%, var(--primary-glow), transparent 70%)",
                        opacity: 0.1,
                      }}
                      animate={{ opacity: [0.05, 0.1, 0.05] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="#" 
                className="hidden md:block text-gray-300 hover:text-white transition relative px-4 py-2 rounded-lg"
              >
                Sign In
                <motion.div
                  className="absolute inset-0 border border-[var(--border-soft)] rounded-lg -z-10"
                  whileHover={{ borderColor: "var(--primary)" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button
                className="hidden md:block px-6 py-2 rounded-full font-medium text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, var(--primary), var(--primary-hover))",
                  boxShadow: "0 0 20px var(--primary-glow)",
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px var(--primary-glow)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white/10 transition"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={open ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-[var(--border-soft)] overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href="#"
                      onClick={() => setOpen(false)}
                      className="block py-3 text-gray-300 hover:text-white transition px-4 rounded-lg hover:bg-white/5"
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {item}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  className="pt-3 border-t border-[var(--border-soft)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <p className="text-sm font-semibold mb-2 text-gray-400 px-4">
                    Features
                  </p>
                  {featureItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.1 }}
                    >
                      <Link
                        href="#"
                        className="block py-2 px-8 transition"
                        style={{ color: "var(--primary)" }}
                      >
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block"
                        >
                          {item}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="pt-4 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="#"
                    className="block text-center text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    Sign In
                  </Link>

                  <motion.button
                    className="w-full px-6 py-3 rounded-full font-medium text-white relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--primary), var(--primary-hover))",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Shared nav link style */}
      <style jsx>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          color: #d1d5db;
          transition: color 0.2s;
          z-index: 1;
        }
        .nav-link:hover {
          color: var(--primary);
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;