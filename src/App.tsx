import React, { useState } from 'react';
import { GymProvider, useGym } from './context/GymContext';
import { Navbar } from './components/Navbar';
import { WorkoutArena } from './components/WorkoutArena';
import { DietFlowchart } from './components/DietFlowchart';
import { ProgressiveOverloadPage } from './components/ProgressiveOverloadPage';
import { PhysiquePhotosPage } from './components/PhysiquePhotosPage';
import { HydrationCalorieHub } from './components/HydrationCalorieHub';
import { SafetyScienceHub } from './components/SafetyScienceHub';
import { IronCoachChat } from './components/IronCoachChat';
import { ProfileModal } from './components/ProfileModal';
import { AuthModal } from './components/AuthModal';
import {
  Dumbbell,
  Shield,
  Heart,
  Droplets,
  Flame,
  Scale,
  Sparkles,
  ArrowUp
} from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { currentPage, setCurrentPage, user } = useGym();
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'workout':
        return <WorkoutArena />;
      case 'diet':
        return <DietFlowchart />;
      case 'logs':
        return <ProgressiveOverloadPage />;
      case 'photos':
        return <PhysiquePhotosPage />;
      case 'hydration':
        return <HydrationCalorieHub />;
      case 'science':
        return <SafetyScienceHub />;
      case 'coach':
        return <IronCoachChat />;
      default:
        return <WorkoutArena />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenProfile={() => setProfileModalOpen(true)}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      {/* Main Multi-Page Body */}
      <main className="flex-1 pb-16">
        {renderCurrentPage()}
      </main>

      {/* Floating Quick Action: AI Coach & Scroll to top */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {currentPage !== 'coach' && (
          <button
            onClick={() => setCurrentPage('coach')}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-xs px-4 py-3 rounded-full flex items-center gap-2 shadow-2xl shadow-red-600/50 hover:scale-105 transition-all group"
            title="Ask IronCoach AI any gym doubt"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span className="hidden sm:inline uppercase tracking-wider">ASK AI COACH</span>
            <span className="sm:hidden uppercase tracking-wider">AI</span>
          </button>
        )}

        <button
          onClick={scrollToTop}
          className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 p-3 rounded-full shadow-lg transition-all"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-zinc-900 py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-red-600 text-black flex items-center justify-center font-black">
              <Dumbbell className="w-4 h-4" />
            </div>
            <div>
              <div className="font-black text-white text-base tracking-wider heading-titan">
                TITAN <span className="text-red-500">IRON</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Gym Processor &bull; Rotating Flowchart Diets &bull; Progressive Overload Engine
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-black uppercase tracking-wider">
            <button onClick={() => setCurrentPage('workout')} className="hover:text-white">
              Workouts
            </button>
            <button onClick={() => setCurrentPage('diet')} className="hover:text-white">
              Diet Flowchart
            </button>
            <button onClick={() => setCurrentPage('logs')} className="hover:text-white">
              Overload Ledger
            </button>
            <button onClick={() => setCurrentPage('photos')} className="hover:text-white">
              Physique Photos
            </button>
            <button onClick={() => setCurrentPage('hydration')} className="hover:text-white">
              Hydration
            </button>
            <button onClick={() => setCurrentPage('science')} className="hover:text-white">
              Iron Science
            </button>
            <button onClick={() => setCurrentPage('coach')} className="hover:text-white">
              AI Coach
            </button>
          </div>

          <div className="text-center md:text-right text-[11px] text-zinc-400">
            <div>Form &gt; Weight &bull; No Ego Lifting</div>
            <div className="text-zinc-500">All data stored locally in your browser vault</div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ProfileModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <GymProvider>
      <MainAppContent />
    </GymProvider>
  );
}
