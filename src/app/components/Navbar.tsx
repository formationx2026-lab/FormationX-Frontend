"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../types";
import { navigationData } from "../data/navigation";
import { ChevronDown, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [navLinks, setNavLinks] = useState<NavLink[]>([]);

  useEffect(() => {
    if (navigationData?.navLinks) {
      setNavLinks(navigationData.navLinks as NavLink[]);
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Enhanced UI: Switched to bg-white/80 for better visibility, added shadow-sm, and increased blur
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 h-14 md:h-18 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="z-50 group">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
              <Zap className="w-5 h-5 fill-white/20" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-slate-900">
              FORX
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <div 
              key={item.label} 
              className="relative"
              onMouseEnter={() => {
                setHoveredPath(item.label);
                if (item.type === "dropdown") setActiveDropdown(item.label);
              }}
              onMouseLeave={() => {
                setHoveredPath(null);
                setActiveDropdown(null);
              }}
            >
              {item.type === "link" ? (
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                >
                  {item.label}
                  {hoveredPath === item.label && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-secondary rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ) : (
                <div className="relative">
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdownItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[340px]"
                      >
                        <div className="bg-white/95 backdrop-blur-xl border border-slate-100/50 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden p-2 grid grid-cols-1 gap-1 ring-1 ring-slate-900/5">
                          {item.dropdownItems.map((drop, idx) => (
                            <Link
                              key={drop.label}
                              href={drop.href}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                            >
                              <div className="mt-1 p-2 bg-slate-100 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {drop.icon}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">{drop.label}</div>
                                <div className="text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-2 group-hover:text-slate-600">
                                  {drop.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Desktop Log In */}
          <Link 
            href="/auth?mode=login" 
            className="hidden md:block px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
          >
            Log in
          </Link>
          
          {/* Desktop Get Started */}
          <Link 
            href="/auth?mode=signup" 
            className="hidden md:flex h-11 px-7 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 hover:-translate-y-0.5 transition-all active:scale-95 duration-200"
          >
            Get Started
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-50 p-2.5 rounded-xl bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 bg-white z-40 pt-28 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-10">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                >
                  <Link
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className="block text-3xl font-display font-bold text-slate-900 hover:text-primary transition-colors mb-4"
                  >
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100">
                      {item.dropdownItems.map((drop) => (
                        <Link 
                          key={drop.label} 
                          href={drop.href} 
                          onClick={() => setOpen(false)} 
                          className="flex items-center gap-3 py-2 text-slate-500 hover:text-primary"
                        >
                          <span className="p-1.5 bg-slate-50 rounded-md text-primary">{drop.icon}</span>
                          <span className="font-medium">{drop.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <div className="mt-4 pt-8 border-t border-slate-100 flex flex-col gap-4">
                <Link 
                    href="/auth?mode=signup" 
                    onClick={() => setOpen(false)} 
                    className="w-full h-14 rounded-xl bg-primary text-white text-lg font-bold flex items-center justify-center shadow-lg shadow-primary/20"
                >
                    Get Started
                </Link>
                
                <Link 
                    href="/auth?mode=login" 
                    onClick={() => setOpen(false)} 
                    className="w-full h-14 rounded-xl bg-slate-100 text-slate-900 text-lg font-bold flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                    Log In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;