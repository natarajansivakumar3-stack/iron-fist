import React, { useState } from 'react';
import { SCIENCE_ARTICLES, ScienceArticle } from '../data/scienceData';
import {
  ShieldAlert,
  Dumbbell,
  Moon,
  UtensilsCrossed,
  TrendingUp,
  Droplets,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronDown,
  Flame,
  Award,
  Zap
} from 'lucide-react';

export const SafetyScienceHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ScienceArticle['category']>('lower_body');

  const categories = [
    { id: 'lower_body', label: '1. LOWER BODY IMPORTANCE', icon: Dumbbell },
    { id: 'ego_lifting', label: '2. EGO LIFTING & INJURIES', icon: ShieldAlert },
    { id: 'sleep_rest', label: '3. SLEEP & HYPERTROPHY', icon: Moon },
    { id: 'nutrition_timing', label: '4. PRE & POST WORKOUT MEALS', icon: UtensilsCrossed },
    { id: 'progressive_overload', label: '5. PROGRESSIVE OVERLOAD', icon: TrendingUp },
    { id: 'hydration', label: '6. BULKING VS CUTTING WATER', icon: Droplets }
  ];

  const currentArticle = SCIENCE_ARTICLES.find((a) => a.category === activeTab) || SCIENCE_ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-[#111111] border border-red-950/80 rounded-lg p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-600 text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                EXERCISE PHYSIOLOGY &amp; SAFETY DOCTRINE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              IRON SCIENCE: LIFELONG HYPERTROPHY &amp; INJURY SHIELD
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              The essential biological laws every athlete must understand to build an elite physique safely.
            </p>
          </div>
        </div>

        {/* Category Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-6 pt-6 border-t border-zinc-800">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as ScienceArticle['category'])}
                className={`p-3 rounded border text-left transition-all ${
                  active
                    ? 'bg-red-600 border-red-500 text-white font-black shadow-lg shadow-red-600/30'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 font-bold'
                }`}
              >
                <Icon className={`w-4 h-4 mb-1.5 ${active ? 'text-white' : 'text-red-500'}`} />
                <div className="text-[11px] uppercase tracking-wider leading-tight">
                  {cat.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scientific Deep Dive */}
      <div className="bg-[#0e0e0e] border border-zinc-800 rounded-lg p-6 sm:p-8 space-y-8 shadow-2xl">
        {/* Article Title & Alert Badge */}
        <div className="space-y-3 pb-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="bg-red-950 text-red-400 border border-red-800 text-xs font-black px-3 py-1 rounded uppercase tracking-wider">
              {currentArticle.alertBadge || 'SCIENTIFIC PROTOCOL'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white heading-titan tracking-wide">
            {currentArticle.title}
          </h2>
          <p className="text-base text-red-400 font-bold">
            {currentArticle.subtitle}
          </p>
        </div>

        {/* Key Takeaways Grid */}
        <div className="space-y-3">
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 heading-titan">
            <Zap className="w-5 h-5 text-red-500" />
            <span>NON-NEGOTIABLE TAKEAWAYS</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentArticle.keyTakeaways.map((takeaway, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg flex items-start gap-3 text-xs leading-relaxed"
              >
                <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-500 font-black flex items-center justify-center shrink-0 text-xs mt-0.5">
                  ✓
                </span>
                <span className="text-zinc-200 font-medium">{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Scientific Explanation */}
        <div className="bg-black/60 border border-zinc-800/80 p-6 rounded-lg space-y-3">
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 heading-titan">
            <Info className="w-5 h-5 text-blue-400" />
            <span>EXERCISE PHYSIOLOGY &amp; BIOMECHANICS</span>
          </h3>
          <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3 whitespace-pre-line font-normal">
            {currentArticle.scientificExplanation}
          </div>
        </div>

        {/* Injury Risks (if applicable) */}
        {currentArticle.injuryRisks && currentArticle.injuryRisks.length > 0 && (
          <div className="bg-red-950/20 border-l-4 border-red-600 border border-red-900/40 p-5 rounded space-y-2">
            <div className="flex items-center gap-2 text-red-400 font-black text-sm uppercase">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>CATASTROPHIC INJURY RISKS TO AVOID</span>
            </div>
            <ul className="space-y-1.5 text-xs text-red-200/90 list-disc pl-5">
              {currentArticle.injuryRisks.map((risk, idx) => (
                <li key={idx}>{risk}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Protocol Steps */}
        <div className="space-y-3">
          <h3 className="text-lg font-black text-white uppercase tracking-wider flex items-center gap-2 heading-titan">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>DAILY ACTION PROTOCOL FOR ATHLETES</span>
          </h3>
          <div className="space-y-2">
            {currentArticle.actionProtocol.map((protocol, idx) => (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800 px-4 py-3 rounded text-xs flex items-center gap-3 text-zinc-200"
              >
                <span className="font-black text-red-500 text-sm">{idx + 1}.</span>
                <span>{protocol}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Female Specific Note (if present) */}
        {currentArticle.femaleSpecificNote && (
          <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-700 p-4 rounded-lg text-xs space-y-1">
            <span className="text-red-400 font-black uppercase text-[11px] block">
              🌸 FEMALE TRAINING PERSPECTIVE:
            </span>
            <p className="text-zinc-300">{currentArticle.femaleSpecificNote}</p>
          </div>
        )}
      </div>
    </div>
  );
};
