import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import {
  Dumbbell,
  UtensilsCrossed,
  LineChart,
  Camera,
  Droplets,
  ShieldAlert,
  Bot,
  User,
  Scale,
  Menu,
  X,
  Flame,
  Award
} from 'lucide-react';

interface NavbarProps {
  onOpenProfile: () => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProfile, onOpenAuth }) => {
  const {
    user,
    isAuthenticated,
    currentPage,
    setCurrentPage,
    restTimerSeconds,
    isTimerRunning,
    stopRestTimer
  } = useGym();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'workout', label: 'WORKOUT ARENA', icon: Dumbbell },
    { id: 'diet', label: 'DIET FLOWCHART', icon: UtensilsCrossed },
    { id: 'logs', label: 'OVERLOAD & LOGS', icon: LineChart },
    { id: 'photos', label: 'PHYSIQUE & PHOTOS', icon: Camera },
    { id: 'hydration', label: 'HYDRATION & MACROS', icon: Droplets },
    { id: 'science', label: 'IRON SCIENCE', icon: ShieldAlert },
    { id: 'coach', label: 'AI GYM COACH', icon: Bot }
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-red-950/60 shadow-2xl">
      {/* Top Banner Alert / Motivational Ticker */}
      <div className="bg-red-600 px-4 py-1 text-black font-black text-xs uppercase tracking-widest flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 fill-black animate-pulse" />
          <span>TITAN GYM AGENT: FORM &gt; WEIGHT • NO EGO LIFTING • TRAIN LEGS FOR HORMONAL SURGE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] font-black">
          <span>STREAK: {user.streakDays} DAYS</span>
          <span>COMPLETED: {user.completedDaysCount} SESSIONS</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => setCurrentPage('workout')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 bg-red-600 text-black flex items-center justify-center rounded-sm font-black shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform">
            <Dumbbell className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-wider text-white heading-titan">
                TITAN <span className="text-red-500">IRON</span>
              </span>
              <span className="bg-zinc-800 text-red-400 text-[10px] font-black px-1.5 py-0.5 rounded border border-red-900/50">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider hidden sm:block">
              Physique Engine &amp; Anabolic Science
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-black tracking-wider uppercase rounded transition-all ${
                  active
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-500'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900/80 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-red-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Section: Weight badge, Timer, Profile */}
        <div className="flex items-center gap-2.5">
          {/* Active Rest Timer Pill */}
          {isTimerRunning && (
            <div
              onClick={stopRestTimer}
              className="cursor-pointer bg-red-950/80 border border-red-500/80 text-white text-xs font-black px-3 py-1.5 rounded flex items-center gap-2 animate-pulse hover:bg-red-900"
              title="Click to cancel timer"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>REST: {restTimerSeconds}s</span>
              <X className="w-3.5 h-3.5 text-zinc-400 hover:text-white" />
            </div>
          )}

          {/* Quick Weight Updater Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-black px-3 py-2 rounded border border-zinc-700 hover:border-red-500 transition-colors"
            title="Click to change your body weight"
          >
            <Scale className="w-3.5 h-3.5 text-red-500" />
            <span>{user.weightKg} KG</span>
            <span className="text-[10px] text-zinc-400 underline ml-0.5">EDIT</span>
          </button>

          {/* User Profile / Auth Button */}
          {isAuthenticated ? (
            <button
              onClick={onOpenProfile}
              className="flex items-center gap-2 bg-gradient-to-r from-zinc-900 to-zinc-800 hover:border-red-500 border border-zinc-700 px-3 py-2 rounded text-xs font-black uppercase text-white transition-all shadow"
            >
              <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-black font-black text-xs">
                {user.name.charAt(0)}
              </div>
              <span className="hidden md:inline truncate max-w-[90px]">{user.name}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-3.5 py-2 rounded uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30"
            >
              SIGN IN
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 rounded"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d0d0d] border-b border-zinc-800 px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-black tracking-wider uppercase rounded ${
                  active
                    ? 'bg-red-600 text-white'
                    : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-red-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-bold">
            <span>Tier: {user.physiqueTier.toUpperCase()}</span>
            <span>Goal: {user.goal.toUpperCase()}</span>
          </div>
        </div>
      )}
    </header>
  );
};
