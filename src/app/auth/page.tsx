"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { cn } from "@/app/lib/utils";
import { useToast } from "@/app/admin-dashboard/hooks/use-toast";
import {
  Zap,
  Users,
  Building,
  Github,
  Chrome,
  ArrowLeft,
  Eye,
  EyeOff,
} from "lucide-react";

type AuthMode = "login" | "signup";
type UserRole = "user" | "organizer";

export default function Auth() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [role, setRole] = useState<UserRole>("user");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handle URL parameters (e.g. /auth?mode=signup)
  useEffect(() => {
    const modeParam = searchParams.get("mode");
    if (modeParam === "signup") {
      setMode("signup");
    } else if (modeParam === "login") {
      setMode("login");
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: mode === "login" ? "Welcome back!" : "Account created!",
      description:
        mode === "login"
          ? "You have successfully logged in."
          : "Your account has been created successfully.",
    });

    setIsLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20 bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary">
      
      {/* Main Card Container */}
      <div className="w-full max-w-[1000px] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        
        {/* --- Left Section (Visual) --- */}
        <div className="w-full md:w-1/2 relative bg-slate-900 text-white">
          {/* Brand Logo Top Left */}
          <Link href="/" className="absolute top-6 left-6 z-20 flex items-center gap-2 group">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl group-hover:bg-white/20 transition-colors">
               <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              HackSpaces
            </span>
          </Link>

          {/* Back Button Top Right */}
          <Link 
            href="/" 
            className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to website
          </Link>

          {/* Background Image */}
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-slate-900/60 to-slate-900/90 z-10" />
            <img 
              src="/img1.png" 
              alt="Innovation Background"
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-10 left-10 right-10 z-20">
              <h2 className="font-display text-3xl text-white md:text-4xl font-bold mb-3 leading-tight">
                Ready to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Innovate?</span>
              </h2>
              <p className="text-slate-300 text-base max-w-sm mb-6">
                Join thousands of hackers and organizers on the premier platform for hackathon space management.
              </p>
              
              {/* Slider Indicators (Visual) */}
              <div className="flex gap-2">
                <div className="w-6 h-1 bg-white rounded-full"></div>
                <div className="w-1.5 h-1 bg-white/30 rounded-full"></div>
                <div className="w-1.5 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Right Section (Interactive Form) --- */}
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 bg-white flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                {mode === "login" ? "Welcome back" : "Create an account"}
              </h1>
              <p className="text-sm text-slate-500">
                {mode === "login" ? "New here?" : "Already have an account?"}{" "}
                <button 
                  onClick={() => setMode(mode === "login" ? "signup" : "login")}
                  className="text-primary font-semibold hover:underline decoration-2 underline-offset-4"
                >
                  {mode === "login" ? "Create an account" : "Log in"}
                </button>
              </p>
            </div>

            {/* Role Selection */}
            <div className="mb-6 p-1 bg-slate-100 rounded-xl grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setRole("user")}
                className={cn(
                  "flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200",
                  role === "user"
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Users className="w-4 h-4" />
                Participant
              </button>
              <button
                type="button"
                onClick={() => setRole("organizer")}
                className={cn(
                  "flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-all duration-200",
                  role === "organizer"
                    ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:text-slate-700"
                )}
              >
                <Building className="w-4 h-4" />
                Organizer
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {mode === "signup" && (
                <div className="animate-fade-in">
                  <Input
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 h-11 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    required
                  />
                </div>
              )}

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 h-11 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                required
              />

              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 h-11 pr-12 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {mode === "signup" && (
                <div className="animate-fade-in">
                  <Input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 h-11 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    required
                  />
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-slate-500 cursor-pointer select-none">
                  I agree to <a href="#" className="text-primary hover:underline font-medium">Terms & Conditions</a>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 text-sm"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <span>{mode === "login" ? "Log In" : "Create Account"}</span>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-3 bg-white text-slate-500 font-medium">Or register with</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl p-2.5 hover:bg-slate-100 border border-slate-200 transition-colors group">
                <Chrome className="w-4 h-4 text-slate-900 group-hover:text-primary transition-colors" />
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl p-2.5 hover:bg-slate-100 border border-slate-200 transition-colors group">
                <Github className="w-4 h-4 text-slate-900 group-hover:text-primary transition-colors" />
                GitHub
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}