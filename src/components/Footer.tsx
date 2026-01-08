// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  FloatingTechElements,
  AnimatedBrandLogo,
  AnimatedSocialLink,
  AnimatedFooterLink,
  AnimatedSectionTitle,
  AnimatedBackgroundGlow,
  AnimatedHeart,
  FloatingParticles,
  AnimatedBorderGlow
} from "./ui/footer-enhancements";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
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
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
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
    <motion.footer 
      className="relative bg-black border-t border-white/5 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Enhanced background glow */}
      <AnimatedBackgroundGlow />
      
      {/* Floating tech elements */}
      <FloatingTechElements />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated border glow */}
      <AnimatedBorderGlow />

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/">
              <AnimatedBrandLogo />
            </Link>

            <motion.p 
              className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              The complete hackathon operating system.
              <br />
              Infrastructure-first, execution-focused.
            </motion.p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <AnimatedSocialLink
                  key={social.label}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <AnimatedSectionTitle>Product</AnimatedSectionTitle>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <AnimatedFooterLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  index={index}
                />
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <AnimatedSectionTitle>Company</AnimatedSectionTitle>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <AnimatedFooterLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  index={index}
                />
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <AnimatedSectionTitle>Resources</AnimatedSectionTitle>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <AnimatedFooterLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  index={index}
                />
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <AnimatedSectionTitle>Legal</AnimatedSectionTitle>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <AnimatedFooterLink
                  key={link.name}
                  name={link.name}
                  href={link.href}
                  index={index}
                />
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-500 text-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            © {currentYear} FORX. All rights reserved.
          </motion.p>
          
          <motion.p 
            className="text-gray-500 text-sm flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Made with{" "}
            <AnimatedHeart />
            {" "}for hackathon organizers everywhere.
          </motion.p>
        </motion.div>
      </div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute bottom-10 left-1/4 w-2 h-2 rounded-full bg-cyan-400/30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-10 right-1/4 w-3 h-3 rounded-full bg-purple-400/30"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.footer>
  );
};

export default Footer;