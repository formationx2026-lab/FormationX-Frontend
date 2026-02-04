"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "How It Works", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Playbooks", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    // Changed bg-slate-50 to bg-secondary (from global css) for that "slightly dark" tone
    <footer className="relative pt-20 pb-10 overflow-hidden bg-secondary border-t border-border">
      
      {/* --- 1. PERFORMANCE OPTIMIZED BACKGROUND --- */}
      {/* Subtle Gradient Glow - Increased opacity slightly for better visibility on darker bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Tech Grid Pattern - Using foreground color for perfect theme matching */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative container mx-auto px-6 z-10">
        
        {/* --- 2. MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              {/* Logo Box - Kept white to pop against the secondary background */}
              <div className="p-2 bg-background rounded-xl shadow-sm border border-border group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                <Zap className="w-6 h-6 text-primary fill-primary/10" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground tracking-tight">
                FORX
              </span>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              The complete operating system for modern hackathons. 
              Infrastructure-first, execution-focused, and built for the next generation of builders.
            </p>

            {/* Newsletter Micro-Interaction */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Subscribe to our updates</p>
              <div className="flex gap-2 max-w-xs">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
                />
                <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns (Span 8 - Split into 2,3,3) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

             {/* Column 4 (Legal) */}
             <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block py-0.5">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* --- 3. BOTTOM BAR --- */}
        <div className="pt-8 mt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} FORX Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Large Text (Optional - adds depth without weight) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[15rem] font-bold text-foreground leading-none tracking-tighter whitespace-nowrap -mb-10 select-none">
          FORX SYSTEM
        </h1>
      </div>
    </footer>
  );
};

export default Footer;