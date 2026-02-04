"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { 
  Calendar, MapPin, Trophy, Share2, Globe, Users, 
  ChevronRight, AlertCircle, ArrowLeft 
} from 'lucide-react';
import { HACKATHONS } from '@/app/data/hackathons';

export default function HackathonDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [activeTab, setActiveTab] = useState("overview");

  // Fetch Data
  const hackathon = HACKATHONS.find(h => h.slug === slug);

  if (!hackathon) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      
      {/* --- 1. IMMERSIVE HERO HEADER --- */}
      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={hackathon.images.hero} 
            alt={hackathon.title} 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-slate-900/60 to-slate-900/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          
          {/* Back Navigation */}
          <Link href="/hackathons" className="absolute top-8 left-6 md:left-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors">
             <ArrowLeft size={20} /> <span className="text-sm font-medium">Back to Missions</span>
          </Link>

          {/* Badge Row */}
          <div className="flex flex-wrap gap-3 mb-4 animate-fade-in-up">
            <span className="badge-success bg-white/10 text-white border border-white/20 backdrop-blur-md px-3 py-1">
              {hackathon.status}
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/20 text-indigo-100 border border-primary/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              {hackathon.type}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight shadow-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            {hackathon.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-light mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {hackathon.tagline}
          </p>

          {/* Quick Stats Bar (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-white/90 border-t border-white/10 pt-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"><Calendar size={20} /></div>
               <div>
                 <p className="text-xs text-slate-400 uppercase font-bold">Dates</p>
                 <p className="font-medium">{hackathon.dates.start} - {hackathon.dates.end}</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"><MapPin size={20} /></div>
               <div>
                 <p className="text-xs text-slate-400 uppercase font-bold">Location</p>
                 <p className="font-medium">{hackathon.location}</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm"><Trophy size={20} className="text-yellow-400" /></div>
               <div>
                 <p className="text-xs text-slate-400 uppercase font-bold">Prize Pool</p>
                 <p className="font-bold text-yellow-400 text-lg">{hackathon.prizePool}</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN LAYOUT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse lg:grid lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: Content (2/3 width) */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-6 border-b border-border overflow-x-auto pb-1 no-scrollbar">
            {['Overview', 'Schedule', 'Rules', 'Prizes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`pb-3 text-sm font-medium transition-all relative whitespace-nowrap ${
                  activeTab === tab.toLowerCase() 
                    ? "text-primary font-bold" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fade-in-up">
              {/* About Section */}
              <section className="prose prose-slate max-w-none">
                 <h2 className="text-2xl font-bold mb-4">About the Mission</h2>
                 <div dangerouslySetInnerHTML={{ __html: hackathon.description }} className="text-muted-foreground leading-relaxed" />
              </section>

              {/* Tracks/Themes */}
              <section>
                <h3 className="text-xl font-bold mb-5">Themes & Tracks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hackathon.tracks.map((track, i) => (
                    <div key={i} className="premium-card p-4 flex items-start gap-3 bg-slate-50/50">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-medium text-slate-700 mt-1">{track}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section>
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {hackathon.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-md border border-border bg-white text-sm text-slate-600 font-medium shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* TAB CONTENT: Schedule */}
          {activeTab === 'schedule' && (
            <div className="space-y-8 animate-fade-in-up">
               {hackathon.schedule.length > 0 ? (
                 hackathon.schedule.map((day, idx) => (
                   <div key={idx} className="relative pl-8 border-l-2 border-slate-200">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-white" />
                     <h3 className="text-lg font-bold text-slate-900 mb-6">{day.day}</h3>
                     <div className="space-y-4">
                       {day.events.map((ev, eIdx) => (
                         <div key={eIdx} className="premium-card p-4 flex flex-col sm:flex-row sm:items-center gap-4 bg-white">
                           <div className="min-w-[100px] text-sm font-bold text-primary bg-primary/5 px-3 py-1 rounded w-fit">
                             {ev.time}
                           </div>
                           <div>
                             <h4 className="font-semibold text-slate-900">{ev.event}</h4>
                             {ev.description && <p className="text-sm text-muted-foreground mt-1">{ev.description}</p>}
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 ))
               ) : (
                 <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300">
                   <p className="text-muted-foreground">Schedule will be announced shortly.</p>
                 </div>
               )}
            </div>
          )}

          {/* TAB CONTENT: Prizes */}
          {activeTab === 'prizes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              {hackathon.prizes.length > 0 ? hackathon.prizes.map((prize, idx) => (
                <div key={idx} className={`premium-card p-6 relative overflow-hidden ${idx === 0 ? 'border-primary/40 ring-1 ring-primary/20' : ''}`}>
                   {idx === 0 && (
                     <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                       WINNER
                     </div>
                   )}
                   <h3 className="text-2xl font-bold text-slate-900 mb-1">{prize.reward}</h3>
                   <p className="font-medium text-primary mb-4">{prize.title}</p>
                   <p className="text-sm text-muted-foreground">{prize.description}</p>
                </div>
              )) : (
                <p className="col-span-2 text-muted-foreground text-center">Prizes revealing soon!</p>
              )}
            </div>
          )}

          {/* FAQ Accordion (Always visible at bottom or valid as own tab) */}
           <section className="pt-8 border-t border-border mt-12">
              <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                {hackathon.faqs.map((faq, i) => (
                  <details key={i} className="group premium-card bg-white open:ring-2 open:ring-primary/10">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-800">
                      {faq.question}
                      <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90 text-muted-foreground" />
                    </summary>
                    <div className="px-4 pb-4 pt-0 text-muted-foreground leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
           </section>
        </div>

        {/* RIGHT COLUMN: Sidebar (1/3 width) - Sticky */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 space-y-6">
            
            {/* Registration Card */}
            <div className="premium-card p-6 bg-white shadow-lg border-slate-200/60 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500" />
              
              <h3 className="text-xl font-bold mb-2">Registration</h3>
              
              {hackathon.registrationOpen ? (
                <>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mb-6 bg-emerald-50 w-fit px-3 py-1 rounded-full">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                     Open until {hackathon.dates.deadline}
                  </div>
                  
                  <button className="btn-primary w-full py-4 text-lg shadow-primary/25 shadow-lg mb-4 group">
                    Register Now
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-xs text-center text-muted-foreground mb-4">
                    Free for verified students and professionals.
                  </p>
                </>
              ) : (
                <div className="bg-slate-100 p-4 rounded-lg text-center mb-6">
                   <p className="text-slate-500 font-medium">Registration Closed</p>
                </div>
              )}

              <hr className="border-slate-100 my-4" />
              
              <div className="space-y-4">
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Team Size</span>
                    <span className="font-medium flex items-center gap-1"><Users size={14} /> {hackathon.teamSize}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mode</span>
                    <span className="font-medium">{hackathon.mode}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Website</span>
                    <a href="#" className="font-medium text-primary hover:underline flex items-center gap-1"><Globe size={14} /> Visit</a>
                 </div>
              </div>

              <button className="w-full mt-6 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Share2 size={16} /> Share Mission
              </button>
            </div>

            {/* Sponsors Widget */}
            <div className="bg-slate-50/50 rounded-xl p-6 border border-border">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Powering Partners</p>
              <div className="flex flex-wrap gap-4 items-center">
                 {hackathon.sponsors.map((sponsor, i) => (
                    <span key={i} className="text-sm font-semibold text-slate-400 select-none">
                      {sponsor}
                    </span>
                    // In a real app, use <img> tags here for logos
                 ))}
              </div>
            </div>

             {/* Help Widget */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
               <AlertCircle className="text-primary shrink-0 mt-0.5" size={20} />
               <div className="text-sm">
                 <p className="font-medium text-indigo-900">Need help?</p>
                 <p className="text-indigo-700/80 mt-1">Join our Discord server to find teammates and ask organizers questions.</p>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}