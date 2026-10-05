import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import {
  Droplets,
  Flame,
  Plus,
  RotateCcw,
  Sparkles,
  Info,
  Scale,
  Zap,
  Activity,
  Heart
} from 'lucide-react';

export const HydrationCalorieHub: React.FC = () => {
  const {
    user,
    todayWaterConsumedMl,
    addWaterMl,
    resetWater,
    todayCaloriesConsumed,
    addCalories,
    resetCalories,
    updateWeight
  } = useGym();

  const [weightInput, setWeightInput] = useState(user.weightKg);
  const [customCalorieInput, setCustomCalorieInput] = useState(250);

  const waterTarget = user.dailyWaterTargetMl || 3500;
  const waterPercentage = Math.min(100, Math.round((todayWaterConsumedMl / waterTarget) * 100));

  const calorieTarget = user.dailyCalorieTarget || 2200;
  const caloriePercentage = Math.min(100, Math.round((todayCaloriesConsumed / calorieTarget) * 100));

  const handleUpdateWeightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (weightInput > 30 && weightInput < 250) {
      updateWeight(weightInput);
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
                CELLULAR FUEL &amp; HYDRATION HUB
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Current Goal: <strong className="text-white">{user.goal.toUpperCase()}</strong>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              DAILY WATER &amp; CALORIE METABOLIC ENGINE
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              Scientifically tailored water intake based on your exact body weight ({user.weightKg} kg) for bulking vs cutting.
            </p>
          </div>

          {/* Quick Weight Adjuster in place */}
          <form
            onSubmit={handleUpdateWeightSubmit}
            className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-lg flex items-center gap-3 shrink-0"
          >
            <div>
              <div className="text-[10px] text-zinc-400 font-black uppercase">YOUR BODY WEIGHT</div>
              <div className="flex items-center gap-1 mt-0.5">
                <input
                  type="number"
                  step="0.5"
                  value={weightInput}
                  onChange={(e) => setWeightInput(parseFloat(e.target.value) || 0)}
                  className="w-20 bg-black border border-zinc-700 text-white font-black text-sm px-2 py-1 rounded text-center focus:border-red-500 focus:outline-none"
                />
                <span className="text-xs font-bold text-zinc-400">KG</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-3.5 py-2 rounded uppercase tracking-wider transition-colors"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>

      {/* Grid: Hydration on Left, Calories on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ================= HYDRATION TRACKER ================= */}
        <div className="bg-[#0e0e0e] border border-zinc-800 rounded-lg p-6 space-y-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-blue-950/80 border border-blue-600 text-blue-400 flex items-center justify-center font-black">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white heading-titan">
                    HYDRATION TRACKER
                  </h2>
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">
                    {user.goal === 'weightgain' ? 'BULKING FORMULA (44ml/kg)' : 'CUTTING FORMULA (48ml/kg)'}
                  </p>
                </div>
              </div>

              <button
                onClick={resetWater}
                className="text-zinc-500 hover:text-white text-xs font-black flex items-center gap-1 transition-colors"
                title="Reset water counter"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            {/* Visual Progress Dial */}
            <div className="my-6 flex flex-col sm:flex-row items-center justify-around gap-6 bg-zinc-950/60 p-6 rounded-lg border border-zinc-800/80">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#27272a"
                    strokeWidth="9"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#2563eb"
                    strokeWidth="9"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * waterPercentage) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-white heading-titan">{waterPercentage}%</span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase">REACHED</span>
                </div>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="text-xs text-zinc-400 font-bold uppercase">CONSUMED TODAY:</div>
                <div className="text-3xl font-black text-white heading-titan">
                  {todayWaterConsumedMl} <span className="text-blue-400 text-lg">/ {waterTarget} ML</span>
                </div>
                <div className="text-xs text-zinc-400">
                  Remaining: <strong className="text-white">{Math.max(0, waterTarget - todayWaterConsumedMl)} ml</strong>
                </div>
                {todayWaterConsumedMl >= waterTarget && (
                  <div className="text-xs text-emerald-400 font-black uppercase flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> DAILY TARGET SURPASSED!
                  </div>
                )}
              </div>
            </div>

            {/* Quick Add Buttons */}
            <div className="space-y-2">
              <div className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                QUICK LOG WATER INTAKE
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => addWaterMl(250)}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500 p-3 rounded text-center transition-all group"
                >
                  <div className="text-xs font-black text-white group-hover:text-blue-400">+250 ML</div>
                  <div className="text-[10px] text-zinc-400 font-semibold">1 Glass</div>
                </button>

                <button
                  onClick={() => addWaterMl(500)}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500 p-3 rounded text-center transition-all group"
                >
                  <div className="text-xs font-black text-white group-hover:text-blue-400">+500 ML</div>
                  <div className="text-[10px] text-zinc-400 font-semibold">1 Gym Shaker</div>
                </button>

                <button
                  onClick={() => addWaterMl(1000)}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500 p-3 rounded text-center transition-all group"
                >
                  <div className="text-xs font-black text-white group-hover:text-blue-400">+1000 ML</div>
                  <div className="text-[10px] text-zinc-400 font-semibold">1 Big Bottle</div>
                </button>
              </div>
            </div>
          </div>

          {/* Scientific Water Note */}
          <div className="bg-blue-950/20 border border-blue-900/40 p-3.5 rounded text-xs text-blue-200/90 space-y-1">
            <div className="flex items-center gap-1.5 font-black uppercase text-blue-400">
              <Info className="w-3.5 h-3.5" />
              <span>Bulking vs Cutting Hydration Science</span>
            </div>
            <p>
              • <strong>Bulking ({user.weightKg}kg × 44ml = {Math.round(user.weightKg * 44)}ml):</strong> Required because 1g glycogen binds to 3g water. Without high water, creatine and carbs cause digestive bloat rather than cellular muscle volumization.<br />
              • <strong>Cutting ({user.weightKg}kg × 48ml = {Math.round(user.weightKg * 48)}ml):</strong> High water forces kidneys to shut down aldosterone, flushing trapped subcutaneous water for paper-thin skin definition!
            </p>
          </div>
        </div>

        {/* ================= CALORIE & MACRO HUB ================= */}
        <div className="bg-[#0e0e0e] border border-zinc-800 rounded-lg p-6 space-y-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-red-950/80 border border-red-600 text-red-400 flex items-center justify-center font-black">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white heading-titan">
                    CALORIES &amp; MACROS
                  </h2>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">
                    TARGET: {calorieTarget} KCAL / DAY ({user.goal.toUpperCase()})
                  </p>
                </div>
              </div>

              <button
                onClick={resetCalories}
                className="text-zinc-500 hover:text-white text-xs font-black flex items-center gap-1 transition-colors"
                title="Reset calories"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            {/* Visual Calorie Bar */}
            <div className="my-6 bg-zinc-950/60 p-6 rounded-lg border border-zinc-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-zinc-400 font-black uppercase">LOGGED TODAY</div>
                  <div className="text-3xl font-black text-white heading-titan">
                    {todayCaloriesConsumed} <span className="text-red-500 text-lg">/ {calorieTarget} KCAL</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-400 font-black uppercase">REMAINING</div>
                  <div className="text-xl font-black text-emerald-400 heading-titan">
                    {Math.max(0, calorieTarget - todayCaloriesConsumed)} KCAL
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-zinc-800 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-600 to-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${caloriePercentage}%` }}
                />
              </div>

              {/* Estimated Macro Targets */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-xs">
                <div className="bg-black/60 border border-zinc-800 p-2 rounded">
                  <div className="text-zinc-400 font-bold text-[10px]">PROTEIN (30%)</div>
                  <div className="text-sm font-black text-red-400">{Math.round((calorieTarget * 0.3) / 4)}g</div>
                </div>
                <div className="bg-black/60 border border-zinc-800 p-2 rounded">
                  <div className="text-zinc-400 font-bold text-[10px]">CARBS (45%)</div>
                  <div className="text-sm font-black text-blue-400">{Math.round((calorieTarget * 0.45) / 4)}g</div>
                </div>
                <div className="bg-black/60 border border-zinc-800 p-2 rounded">
                  <div className="text-zinc-400 font-bold text-[10px]">FATS (25%)</div>
                  <div className="text-sm font-black text-amber-400">{Math.round((calorieTarget * 0.25) / 9)}g</div>
                </div>
              </div>
            </div>

            {/* Quick Add Calories Form */}
            <div className="space-y-2">
              <div className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                QUICK LOG CALORIES (SNACK OR MEAL)
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="50"
                  value={customCalorieInput}
                  onChange={(e) => setCustomCalorieInput(parseInt(e.target.value, 10) || 0)}
                  className="flex-1 bg-black border border-zinc-700 text-white font-black text-xs p-2.5 rounded focus:border-red-500 focus:outline-none"
                />
                <button
                  onClick={() => addCalories(customCalorieInput)}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-5 py-2.5 rounded uppercase tracking-wider shadow-lg shadow-red-600/30"
                >
                  ADD KCAL
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                {[200, 400, 600].map((c) => (
                  <button
                    key={c}
                    onClick={() => addCalories(c)}
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-black py-1.5 rounded border border-zinc-800"
                  >
                    +{c} kcal
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Caloric Purpose Note */}
          <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded text-xs text-zinc-300 space-y-1">
            <div className="flex items-center gap-1.5 font-black uppercase text-red-500">
              <Zap className="w-3.5 h-3.5" />
              <span>Goal Formulation Strategy</span>
            </div>
            <p>
              Your daily calorie target of <strong className="text-white">{calorieTarget} kcal</strong> is configured for your current weight ({user.weightKg}kg) and goal ({user.goal.toUpperCase()}). Stay within 100 kcal of this target to ensure maximum anabolism without unwanted adiposity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
