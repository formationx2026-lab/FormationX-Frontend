"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../types";
import { navigationData } from "../data/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/40">
      <nav className="max-w-300 mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="z-50">
          <div className="flex items-center gap-3 group">
            <div className="bg-primary text-white p-1.5 rounded-xl shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
              <span className="font-bold text-lg w-6 h-6 flex items-center justify-center">F</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-foreground">FORX</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2">
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
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
                >
                  {item.label}
                  {hoveredPath === item.label && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-secondary/50 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              ) : (
                <div className="relative">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdownItems && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-120"
                      >
                        <div className="bg-popover border border-border/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden p-3 grid grid-cols-2 gap-2">
                          {item.dropdownItems.map((drop, idx) => (
                            <Link
                              key={drop.label}
                              href={drop.href}
                              className="group flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/80 transition-all"
                            >
                              <div className="p-2 bg-primary/5 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                {drop.icon}
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-foreground">{drop.label}</div>
                                <div className="text-xs text-muted-foreground leading-relaxed mt-0.5 line-clamp-1">
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
        <div className="flex items-center gap-3">
          {/* Desktop Log In - UPDATED HREF */}
          <Link 
            href="/auth?mode=login" 
            className="hidden md:block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Log in
          </Link>
          
          {/* Desktop Get Started - UPDATED HREF */}
          <Link 
            href="/auth?mode=signup" 
            className="hidden md:flex h-10 px-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:brightness-110 transition-all active:scale-95"
          >
            Get Started
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-50 p-2 rounded-xl bg-secondary/50 text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-background z-40 pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                >
                  <Link
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <div className="mt-4 grid grid-cols-1 gap-4 pl-4 border-l-2 border-border">
                      {item.dropdownItems.map((drop) => (
                        <Link key={drop.label} href={drop.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4">
                {/* Mobile Get Started - UPDATED HREF */}
                <Link 
                    href="/auth?mode=signup" 
                    onClick={() => setOpen(false)} 
                    className="w-full h-12 rounded-xl bg-primary text-white font-bold flex items-center justify-center"
                >
                    Get Started
                </Link>
                
                {/* Mobile Log In - UPDATED HREF */}
                <Link 
                    href="/auth?mode=login" 
                    onClick={() => setOpen(false)} 
                    className="w-full h-12 rounded-xl bg-secondary text-foreground font-bold flex items-center justify-center"
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