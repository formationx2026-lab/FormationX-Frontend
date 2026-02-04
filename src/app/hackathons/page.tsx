"use client";

import React, { useState, useMemo } from 'react';
import { Search, Calendar, MapPin, Trophy, Rocket, Globe, Zap } from 'lucide-react';
import { Hackathon, HACKATHONS } from '../data/hackathons';
import Link from 'next/link';

const CATEGORIES = ["All", "AI/ML", "Web3", "Security", "Sustainability"];
const MODES = ["All", "Online", "Offline", "Hybrid"];

export default function HackathonsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeMode, setActiveMode] = useState("All");

  const filteredHackathons = useMemo(() => {
    return HACKATHONS.filter(h => {
      const matchesSearch = h.title.toLowerCase().includes(search.toLowerCase());
      const matchesCat = activeCategory === "All" || h.type === activeCategory;
      const matchesMode = activeMode === "All" || h.mode === activeMode;
      return matchesSearch && matchesCat && matchesMode;
    });
  }, [search, activeCategory, activeMode]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section with Custom Utility hero-glow */}
      <section className="relative pt-20 pb-16 px-6 hero-glow overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter animate-slide-up">
            ELITE <span className="gradient-text">HACKATHONS</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-fade-in">
            Deploy your skills in high-stakes digital arenas. Compete with the best, 
            earn legendary rewards, and build the future.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto border border-primary rounded-xl bg-card/50 overflow-hidden">
            <div className="flex items-center px-4 py-3">
              <Search className="text-primary mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Search missions..." 
                className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        {/* Filters Grid */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                  activeCategory === cat 
                  ? "bg-primary text-primary-foreground border-primary glow-primary" 
                  : "border-border hover:border-primary/50 bg-card/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-card/50 p-1 rounded-lg border border-border">
            {MODES.map(mode => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                  activeMode === mode ? "bg-muted text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHackathons.map((hack, index) => (
            <HackathonCard key={hack.id} hack={hack} index={index} />
          ))}
        </div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <Zap className="mx-auto text-muted-foreground mb-4 opacity-20" size={64} />
            <p className="text-muted-foreground text-xl">No missions found in this sector.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function HackathonCard({ hack, index }: { hack: Hackathon, index: number }) {
  return (
    <div 
      className="group relative card-gradient rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 animate-slide-up hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header Image */}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={hack.images.hero} 
          alt={hack.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
        />
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${hack.status === 'Ongoing' ? 'bg-green-500' : 'bg-primary'}`} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{hack.status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {hack.title}
          </h3>
          <Trophy className="text-secondary shrink-0" size={20} />
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-muted-foreground text-sm gap-2">
            <Calendar size={14} className="text-primary" />
            <span>{hack.dates.deadline}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-sm gap-2">
            {hack.mode === 'Online' ? <Globe size={14} className="text-primary" /> : <MapPin size={14} className="text-primary" />}
            <span>{hack.mode} {hack.location && `• ${hack.location}`}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {hack.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] px-2 py-1 rounded bg-primary-soft text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer/CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase font-bold">Prize Pool</p>
            <p className="text-lg font-bold text-primary">{hack.prizePool}</p>
          </div>
          <button className="relative px-5 py-2 group/btn overflow-hidden rounded-lg font-bold text-sm">
            <div className="absolute inset-0 bg-primary transition-transform duration-300 group-hover/btn:scale-105" />
            <Link href={`/hackathons/${hack.slug}`} className="relative text-primary-foreground flex items-center gap-2">
              DETAILS <Rocket size={14} />
            </Link>
          </button>
        </div>
      </div>
      
      {/* Neon Hover Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]" />
    </div>
  );
}