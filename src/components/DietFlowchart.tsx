import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { DIET_PLANS } from '../data/dietData';
import { FitnessGoal } from '../types/gym';
import {
  UtensilsCrossed,
  ArrowRight,
  Flame,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  Zap,
  Coffee,
  Moon,
  ChevronDown,
  Info
} from 'lucide-react';

export const DietFlowchart: React.FC = () => {
  const {
    user,
    activeDietGoal,
    setActiveDietGoal,
    currentDietDay,
    setCurrentDietDay,
    completeDietDay
  } = useGym();

  const [completedNodes, setCompletedNodes] = useState<Record<number, boolean>>({});
  const [showAdvancementToast, setShowAdvancementToast] = useState(false);

  const goalPlans = DIET_PLANS[activeDietGoal] || DIET_PLANS.fatloss;
  const currentPlan = goalPlans.find((p) => p.dayNumber === currentDietDay) || goalPlans[0];

  const toggleNodeDone = (step: number) => {
    setCompletedNodes((prev) => ({
      ...prev,
      [step]: !prev[step]
    }));
  };

  const handleCompleteDay = () => {
    completeDietDay();
    setCompletedNodes({});
    setShowAdvancementToast(true);
    setTimeout(() => setShowAdvancementToast(false), 3500);
  };

  const getStepIcon = (mealType: string) => {
    switch (mealType) {
      case 'Breakfast':
        return Coffee;
      case 'Pre-Workout Meal':
        return Zap;
      case 'Post-Workout Fuel':
        return Flame;
      case 'Bedtime Recovery':
        return Moon;
      default:
        return UtensilsCrossed;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-[#111111] border border-red-950/80 rounded-lg p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-600 text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                ROTATING FLOWCHART DIET ENGINE
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Current Goal: <strong className="text-white">{activeDietGoal.toUpperCase()}</strong>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              DAILY ANABOLIC FLOWCHART ROADMAP
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              "No one will eat the same food everyday." Different customized meals for every single day of the week!
            </p>
          </div>

          {/* Goal Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'fatloss', label: 'FAT LOSS / SHREDDED' },
              { id: 'weightloss', label: 'WEIGHT LOSS (DEFICIT)' },
              { id: 'weightgain', label: 'WEIGHT GAIN / BULK' }
            ].map((g) => {
              const active = activeDietGoal === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveDietGoal(g.id as FitnessGoal)}
                  className={`text-xs font-black px-4 py-2.5 rounded uppercase tracking-wider transition-all border ${
                    active
                      ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 7-Day Quick Navigator */}
        <div className="mt-6 pt-6 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-black text-zinc-400 uppercase tracking-wider">
              DAY-BY-DAY ROTATION (DAY {currentDietDay} OF 7)
            </span>
            <span className="text-red-400 font-bold">
              Automatically advances when day is completed
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((d) => {
              const isSelected = currentDietDay === d;
              return (
                <button
                  key={d}
                  onClick={() => setCurrentDietDay(d)}
                  className={`py-2 px-1 text-center rounded border transition-all ${
                    isSelected
                      ? 'bg-red-600 border-red-500 text-white font-black shadow-md shadow-red-600/20'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 font-bold'
                  }`}
                >
                  <div className="text-[10px] uppercase opacity-75">DAY</div>
                  <div className="text-base font-black">{d}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Day Overview Banner & Macros */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Calendar className="w-4 h-4 text-red-500" />
            <h2 className="text-xl sm:text-2xl font-black text-white heading-titan">
              {currentPlan.dayName}
            </h2>
          </div>
          <p className="text-xs text-zinc-300 font-medium max-w-xl">
            {currentPlan.theme}
          </p>
        </div>

        {/* Daily Macros Badge */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 shrink-0 bg-black/60 border border-zinc-800 p-3 rounded-lg text-center">
          <div>
            <div className="text-[10px] text-zinc-400 font-black uppercase">CALORIES</div>
            <div className="text-base font-black text-white">{currentPlan.totalCalories}</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-black uppercase">PROTEIN</div>
            <div className="text-base font-black text-red-400">{currentPlan.totalProtein}g</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-black uppercase">CARBS</div>
            <div className="text-base font-black text-blue-400">{currentPlan.totalCarbs}g</div>
          </div>
          <div>
            <div className="text-[10px] text-zinc-400 font-black uppercase">FATS</div>
            <div className="text-base font-black text-amber-400">{currentPlan.totalFats}g</div>
          </div>
        </div>
      </div>

      {/* The Visual Flowchart Interconnected Nodes */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-8 before:w-1 before:bg-gradient-to-b before:from-red-600 before:via-red-500 before:to-zinc-800">
        {currentPlan.flowchartNodes.map((node) => {
          const Icon = getStepIcon(node.mealType);
          const isDone = completedNodes[node.step];
          const isWorkoutMeal = node.mealType.includes('Workout');

          return (
            <div key={node.step} className="relative group">
              {/* Flowchart Node Connector Circle */}
              <div
                onClick={() => toggleNodeDone(node.step)}
                className={`absolute -left-6 sm:-left-10 top-5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                  isDone
                    ? 'bg-emerald-600 border-emerald-400 text-white scale-110 shadow-lg shadow-emerald-600/50'
                    : isWorkoutMeal
                    ? 'bg-red-600 border-white text-black scale-105 shadow-lg shadow-red-600/50 animate-pulse'
                    : 'bg-zinc-900 border-red-600 text-red-500'
                }`}
                title="Click to check off meal"
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-black">{node.step}</span>
                )}
              </div>

              {/* Node Card */}
              <div
                className={`border rounded-lg p-5 sm:p-6 transition-all ${
                  isDone
                    ? 'bg-emerald-950/15 border-emerald-700/60'
                    : isWorkoutMeal
                    ? 'bg-gradient-to-br from-[#120a0a] to-[#1a0e0e] border-red-600 shadow-xl shadow-red-950/40'
                    : 'bg-[#0e0e0e] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Node Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded flex items-center justify-center font-black ${
                        isWorkoutMeal ? 'bg-red-600 text-black' : 'bg-zinc-900 text-red-400 border border-zinc-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black uppercase text-red-500 tracking-wider">
                          STEP {node.step} • {node.mealType}
                        </span>
                        {isWorkoutMeal && (
                          <span className="bg-red-600 text-black text-[9px] font-black px-1.5 py-0.5 rounded uppercase">
                            PERI-WORKOUT FUEL
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white heading-titan">
                        {node.headline}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{node.time}</span>
                    </div>

                    <button
                      onClick={() => toggleNodeDone(node.step)}
                      className={`text-xs font-black px-3 py-1.5 rounded uppercase border transition-colors ${
                        isDone
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-red-500'
                      }`}
                    >
                      {isDone ? 'CONSUMED' : 'MARK DONE'}
                    </button>
                  </div>
                </div>

                {/* Biological Anabolic Purpose */}
                <div className="my-3 bg-zinc-950 border border-zinc-800/80 px-3.5 py-2.5 rounded text-xs flex items-start gap-2">
                  <Info className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300">
                    <strong className="text-white uppercase">Anabolic Purpose:</strong> {node.anabolicPurpose}
                  </p>
                </div>

                {/* Meal Items */}
                <div className="space-y-2.5 mt-4">
                  {node.meals.map((meal, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-black/50 border border-zinc-800/80 p-3.5 rounded flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="font-black text-sm text-white">{meal.name}</div>
                        <div className="text-zinc-400 font-medium mt-0.5">{meal.recipeNote}</div>
                        <div className="text-[11px] text-zinc-500 font-semibold mt-0.5">
                          Portion: {meal.portion}
                        </div>
                      </div>

                      {/* Macros Mini Grid */}
                      <div className="flex items-center gap-3 shrink-0 self-end md:self-center font-bold">
                        <span className="text-white font-black">{meal.calories} kcal</span>
                        <span className="text-red-400">{meal.proteinG ?? meal.protein ?? 0}g P</span>
                        <span className="text-blue-400">{meal.carbsG ?? meal.carbs ?? 0}g C</span>
                        <span className="text-amber-400">{meal.fatsG ?? meal.fats ?? 0}g F</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Advance to Next Day Button */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-red-600 rounded-lg p-8 text-center space-y-4 shadow-2xl">
        <h2 className="text-3xl font-black text-white heading-titan tracking-wider">
          COMPLETED DAY {currentDietDay} NUTRITION?
        </h2>
        <p className="text-sm text-zinc-300 max-w-xl mx-auto font-medium">
          Hit the button below to rotate to tomorrow’s completely distinct menu ({' '}
          <strong className="text-white">Day {currentDietDay === 7 ? 1 : currentDietDay + 1}</strong>
          ). Enjoy variety, prevent taste fatigue, and keep metabolic rate soaring!
        </p>

        <button
          onClick={handleCompleteDay}
          className="bg-red-600 hover:bg-red-700 text-white font-black text-base px-8 py-3.5 rounded-md uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 active:scale-95"
        >
          COMPLETE TODAY'S DIET &amp; ROTATE TO NEXT DAY
        </button>
      </div>

      {/* Toast Banner */}
      {showAdvancementToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 font-black text-sm uppercase tracking-wider animate-in slide-in-from-bottom duration-300">
          <Sparkles className="w-5 h-5 text-black" />
          <span>DAY {currentDietDay} DIET UNLOCKED! FRESH MEALS READY.</span>
        </div>
      )}
    </div>
  );
};
