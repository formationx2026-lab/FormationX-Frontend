// components/sidebar.tsx
'use client';

import React, { useState } from 'react';
import {
  Home,
  Package,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Home className="h-5 w-5" />,
    href: '/dashboard',
  },
  {
    id: 'food-distribution',
    label: 'Food Distribution',
    icon: <Package className="h-5 w-5" />,
    href: '/dashboard/food-distribution',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
    href: '/dashboard/settings',
  },
];

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-primary text-primary-foreground"
      >
        {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop for mobile */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed lg:sticky top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out',
          'bg-card border-r border-border',
          isCollapsed ? 'w-16' : 'w-64',
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {!isCollapsed && (
              <h1 className="text-xl font-semibold">Navigation</h1>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1.5 rounded-md hover:bg-accent transition-colors"
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-lg transition-colors',
                  'hover:bg-accent hover:text-accent-foreground',
                  'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!isCollapsed && (
                  <span className="font-medium truncate">{item.label}</span>
                )}
              </a>
            ))}
          </nav>

          {/* User Profile/Footer (Optional) */}
          {!isCollapsed && (
            <div className="p-4 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">U</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">User Name</p>
                  <p className="text-xs text-muted-foreground truncate">
                    user@example.com
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}