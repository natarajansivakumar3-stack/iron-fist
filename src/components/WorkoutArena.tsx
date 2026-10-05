import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { WORKOUT_PLANS, getTierSetsAndReps } from '../data/workoutData';
import { Exercise, LoggedSet } from '../types/gym';
import {
  Dumbbell,
  RefreshCw,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Info,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
  Trophy
} from 'lucide-react';

export const WorkoutArena: React.FC = () => {
  const {
    user,
    activeSplitId,
    setActiveSplitId,
    musclePoolIndices,
    swapMuscleVariation,
    logCompletedWorkout,
    startRestTimer,
    setCurrentPage
  } = useGym();

  // Find active workout plan
  const currentPlan = WORKOUT_PLANS.find((p) => p.id === activeSplitId) || WORKOUT_PLANS[0];

  // Set logging state: { [exerciseId]: LoggedSet[] }
  const [loggedSets, setLoggedSets] = useState<Record<string, LoggedSet[]>>({});
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [lastVolumeSummary, setLastVolumeSummary] = useState<number>(0);

  // Helper to ensure initial sets exist
  const getExerciseSets = (exerciseId: string, totalSets: number): LoggedSet[] => {
    if (loggedSets[exerciseId]) return loggedSets[exerciseId];
    const initial: LoggedSet[] = Array.from({ length: totalSets }, (_, i) => ({
      setNumber: i + 1,
      weightKg: 20,
      reps: 10,
      completed: false
    }));
    return initial;
  };

  const updateSet = (exerciseId: string, setIndex: number, field: 'weightKg' | 'reps', val: number) => {
    setLoggedSets((prev) => {
      const existing = prev[exerciseId] ? [...prev[exerciseId]] : getExerciseSets(exerciseId, 4);
      existing[setIndex] = {
        ...existing[setIndex],
        [field]: Math.max(0, val)
      };
      return { ...prev, [exerciseId]: existing };
    });
  };

  const toggleSetComplete = (exerciseId: string, setIndex: number, defaultSetsCount: number) => {
    setLoggedSets((prev) => {
      const existing = prev[exerciseId] ? [...prev[exerciseId]] : getExerciseSets(exerciseId, defaultSetsCount);
      existing[setIndex] = {
        ...existing[setIndex],
        completed: !existing[setIndex].completed
      };
      return { ...prev, [exerciseId]: existing };
    });
  };

  const toggleExerciseDone = (exerciseId: string) => {
    setCompletedExercises((prev) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  // Complete Today's Workout
  const handleCompleteWorkout = () => {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayOfWeek = days[now.getDay()];
    const month = `${months[now.getMonth()]} ${now.getFullYear()}`;

    // Calculate week of year
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((now.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7);

    // Calculate total volume
    let totalVolume = 0;
    const completedItems: { exerciseName: string; muscleName: string; setsLogged: LoggedSet[] }[] = [];

    currentPlan.muscleGroups.forEach((group) => {
      const activePoolIndex = musclePoolIndices[group.key] ?? 0;
      const pool = group.pools[activePoolIndex] || group.pools[0];
      pool.exercises.forEach((ex) => {
        const sets = loggedSets[ex.id] || getExerciseSets(ex.id, ex.defaultSets);
        const hasDoneSets = sets.filter((s) => s.completed);
        sets.forEach((s) => {
          if (s.completed) {
            totalVolume += s.weightKg * s.reps;
          }
        });
        completedItems.push({
          exerciseName: ex.name,
          muscleName: ex.targetMuscle,
          setsLogged: sets
        });
      });
    });

    // Default volume if user didn't check every individual set
    if (totalVolume === 0) totalVolume = 3250;

    logCompletedWorkout({
      date: dateStr,
      dayOfWeek,
      weekNumber,
      month,
      splitId: currentPlan.id,
      splitTitle: currentPlan.title,
      exercisesCompleted: completedItems,
      durationMinutes: 65,
      totalVolumeKg: totalVolume,
      notes: `Trained ${currentPlan.subtitle}. Strict form with progressive overload discipline.`
    });

    setLastVolumeSummary(totalVolume);
    setShowCelebration(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header / Split Selector */}
      <div className="bg-[#111111] border border-red-950/80 rounded-lg p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-600 text-black text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                ACTIVE WORKOUT AGENT
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Physique Tier: <strong className="text-white">{user.physiqueTier.toUpperCase()}</strong>
              </span>
              {user.gender === 'female' && (
                <span className="bg-zinc-800 text-red-400 text-xs font-black px-2 py-0.5 rounded border border-red-900/50">
                  FEMALE PACING: CONTROLLED &amp; GRADUAL
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              {currentPlan.title}
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              {currentPlan.subtitle} • 5 Workouts Per Muscle Group • Form-First Execution
            </p>
          </div>

          {/* Quick Stats / Action Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCurrentPage('science')}
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500 text-white text-xs font-black px-4 py-2.5 rounded uppercase transition-colors"
            >
              <Shield className="w-4 h-4 text-red-500" />
              <span>EGO LIFTING RULES</span>
            </button>
            <button
              onClick={() => setCurrentPage('logs')}
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500 text-white text-xs font-black px-4 py-2.5 rounded uppercase transition-colors"
            >
              <Clock className="w-4 h-4 text-red-500" />
              <span>VIEW LOGGED HISTORY</span>
            </button>
          </div>
        </div>

        {/* Split Tabs (Day 1, Day 2, Day 3A, Day 3B) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mt-6 pt-6 border-t border-zinc-800">
          {WORKOUT_PLANS.map((plan) => {
            const isSelected = activeSplitId === plan.id;
            return (
              <button
                key={plan.id}
                onClick={() => setActiveSplitId(plan.id)}
                className={`text-left p-3.5 rounded border transition-all ${
                  isSelected
                    ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/30'
                    : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-black uppercase tracking-wider opacity-80">
                  {plan.id === 'day3a' ? 'Day 3 (Option A)' : plan.id === 'day3b' ? 'Day 3 (Option B)' : plan.id.toUpperCase()}
                </div>
                <div className="text-sm font-black uppercase tracking-wide truncate">
                  {plan.id === 'day1' && 'Day 1: Chest & Triceps'}
                  {plan.id === 'day2' && 'Day 2: Back & Biceps'}
                  {plan.id === 'day3a' && 'Day 3A: Shoulder & Legs (Lower Body)'}
                  {plan.id === 'day3b' && 'Day 3B: Shoulder & Abs (Core)'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Muscle Groups with 5 Workouts Each & SWAP Option */}
      <div className="space-y-12">
        {currentPlan.muscleGroups.map((group) => {
          const currentPoolIndex = musclePoolIndices[group.key] ?? 0;
          const currentPool = group.pools[currentPoolIndex] || group.pools[0];

          return (
            <div key={group.key} className="space-y-4">
              {/* Muscle Header with SWAP VARIATION button */}
              <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border-l-4 border-red-600 px-5 py-4 rounded-r-lg border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-white heading-titan">
                      {group.name}
                    </h2>
                    <span className="bg-red-950 text-red-400 border border-red-800 text-[11px] font-black px-2 py-0.5 rounded">
                      5 WORKOUTS
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-zinc-400 font-bold">
                    <Layers className="w-3.5 h-3.5 text-red-500" />
                    <span>
                      ACTIVE VARIATION: <strong className="text-red-400">{currentPool.poolName}</strong> (Pool {currentPoolIndex + 1} of 3)
                    </span>
                  </div>
                </div>

                {/* SWAP BUTTON */}
                <button
                  onClick={() => swapMuscleVariation(group.key)}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2.5 rounded uppercase tracking-wider transition-all shadow-md shadow-red-600/20 active:scale-95 group"
                  title="Swap to the next 5 workout variations for this muscle!"
                >
                  <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span>SWAP TO NEXT 5 WORKOUTS (POOL {((currentPoolIndex + 1) % 3) + 1})</span>
                </button>
              </div>

              {/* 5 Exercise Cards */}
              <div className="grid grid-cols-1 gap-5">
                {currentPool.exercises.map((exercise, exIndex) => {
                  const { adjustedSets, adjustedReps, pacingAdvice } = getTierSetsAndReps(
                    user.physiqueTier,
                    user.gender,
                    exercise.defaultSets,
                    exercise.defaultReps
                  );

                  const sets = getExerciseSets(exercise.id, adjustedSets);
                  const isDone = completedExercises[exercise.id];

                  return (
                    <div
                      key={exercise.id}
                      className={`bg-[#0d0d0d] border rounded-lg p-5 transition-all ${
                        isDone
                          ? 'border-emerald-700/60 bg-emerald-950/10'
                          : 'border-zinc-800 hover:border-zinc-700'
                      }`}
                    >
                      {/* Top Exercise Bar */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded bg-zinc-900 border border-zinc-700 text-red-500 font-black flex items-center justify-center text-sm shrink-0">
                            {exIndex + 1}
                          </span>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-black text-white heading-titan">
                                {exercise.name}
                              </h3>
                              {isDone && (
                                <span className="bg-emerald-900/80 text-emerald-300 border border-emerald-600 text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1">
                                  <CheckCircle2 className="w-3 h-3" /> COMPLETED
                                </span>
                              )}
                            </div>
                            <p className="text-xs font-bold text-red-400 uppercase tracking-wide mt-0.5">
                              Target Muscle: <span className="text-white">{exercise.targetMuscle}</span>
                            </p>
                          </div>
                        </div>

                        {/* Sets / Reps Target badge & Rest Timer triggers */}
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-right">
                            <div className="text-[10px] text-zinc-400 font-black uppercase">RECOMMENDED VOLUME</div>
                            <div className="text-xs font-black text-white">
                              {adjustedSets} SETS × {adjustedReps}
                            </div>
                          </div>

                          <button
                            onClick={() => startRestTimer(exercise.restSeconds)}
                            className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500 text-white text-xs font-black px-3 py-2 rounded transition-colors"
                            title="Start rest timer"
                          >
                            <Clock className="w-3.5 h-3.5 text-red-500" />
                            <span>REST {exercise.restSeconds}s</span>
                          </button>

                          <button
                            onClick={() => toggleExerciseDone(exercise.id)}
                            className={`p-2 rounded border transition-colors ${
                              isDone
                                ? 'bg-emerald-600 text-white border-emerald-500'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:text-white hover:border-zinc-500'
                            }`}
                            title="Mark exercise complete"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Technical Cues & Ego Lifting Warning */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 text-xs">
                        <div className="bg-zinc-950 border border-zinc-800 p-3 rounded">
                          <div className="flex items-center gap-1.5 text-zinc-400 font-bold uppercase mb-1">
                            <Info className="w-3.5 h-3.5 text-blue-400" />
                            <span>Form &amp; Tempo Cue ({exercise.tempo})</span>
                          </div>
                          <p className="text-zinc-200">{exercise.formCue}</p>
                          {exercise.femaleNote && user.gender === 'female' && (
                            <p className="text-red-400 mt-1 font-semibold text-[11px]">
                              Female Protocol: {exercise.femaleNote}
                            </p>
                          )}
                        </div>

                        <div className="bg-red-950/20 border border-red-900/40 p-3 rounded">
                          <div className="flex items-center gap-1.5 text-red-400 font-black uppercase mb-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                            <span>Ego-Lifting Awareness &amp; Danger</span>
                          </div>
                          <p className="text-red-200/90">{exercise.egoWarning}</p>
                        </div>
                      </div>

                      {/* Interactive Set Logger (Progressive Overload Tracking) */}
                      <div className="bg-zinc-950/70 border border-zinc-800/80 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-black text-zinc-400 uppercase tracking-wider">
                            LOG WORKING SETS (PROGRESSIVE OVERLOAD)
                          </span>
                          <span className="text-[11px] text-zinc-500 font-semibold">
                            Equipment: {exercise.equipment}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {sets.slice(0, adjustedSets).map((set, setIdx) => (
                            <div
                              key={setIdx}
                              className={`p-2.5 rounded border text-xs flex flex-col justify-between ${
                                set.completed
                                  ? 'bg-red-950/40 border-red-600/80 text-white'
                                  : 'bg-zinc-900/90 border-zinc-800 text-zinc-300'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1.5 font-black text-[11px]">
                                <span>SET {setIdx + 1}</span>
                                <input
                                  type="checkbox"
                                  checked={set.completed}
                                  onChange={() => toggleSetComplete(exercise.id, setIdx, adjustedSets)}
                                  className="w-4 h-4 accent-red-600 rounded cursor-pointer"
                                />
                              </div>

                              <div className="flex items-center gap-1.5">
                                <div className="flex-1">
                                  <label className="text-[9px] text-zinc-400 block font-bold">KG</label>
                                  <input
                                    type="number"
                                    value={set.weightKg}
                                    onChange={(e) =>
                                      updateSet(exercise.id, setIdx, 'weightKg', parseFloat(e.target.value) || 0)
                                    }
                                    className="w-full bg-black border border-zinc-700 rounded px-1.5 py-1 text-center font-bold text-white text-xs focus:border-red-500 focus:outline-none"
                                  />
                                </div>
                                <div className="flex-1">
                                  <label className="text-[9px] text-zinc-400 block font-bold">REPS</label>
                                  <input
                                    type="number"
                                    value={set.reps}
                                    onChange={(e) =>
                                      updateSet(exercise.id, setIdx, 'reps', parseInt(e.target.value, 10) || 0)
                                    }
                                    className="w-full bg-black border border-zinc-700 rounded px-1.5 py-1 text-center font-bold text-white text-xs focus:border-red-500 focus:outline-none"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Big Finish Button */}
      <div className="bg-gradient-to-r from-black via-zinc-900 to-black border-2 border-red-600 rounded-lg p-8 text-center space-y-4 shadow-2xl">
        <div className="inline-flex p-3 rounded-full bg-red-600/20 text-red-500 mb-1">
          <Trophy className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white heading-titan tracking-wider">
          FINISHED ALL EXERCISES FOR TODAY?
        </h2>
        <p className="text-sm text-zinc-300 max-w-xl mx-auto font-medium">
          Stamp today’s completed session into your official Date, Day, Week, and Month history ledger.
          Enforce progressive overload week over week!
        </p>

        <button
          onClick={handleCompleteWorkout}
          className="bg-red-600 hover:bg-red-700 text-white font-black text-lg px-8 py-4 rounded-md uppercase tracking-widest transition-all shadow-xl shadow-red-600/40 hover:scale-105 active:scale-95"
        >
          COMPLETE TODAY'S WORKOUT &amp; RECORD LOG
        </button>
      </div>

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111111] border-2 border-red-600 rounded-lg max-w-md w-full p-6 text-center space-y-4 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-red-600 text-black flex items-center justify-center mx-auto font-black shadow-lg shadow-red-600/50">
              <Flame className="w-9 h-9 fill-black animate-bounce" />
            </div>

            <h3 className="text-3xl font-black text-white heading-titan">
              WORKOUT COMPLETED!
            </h3>

            <p className="text-sm text-zinc-300 font-medium">
              Iron session successfully recorded in your history ledger for today!
            </p>

            <div className="bg-zinc-950 border border-zinc-800 p-4 rounded text-left space-y-2 text-xs">
              <div className="flex justify-between text-zinc-400">
                <span>Date &amp; Day:</span>
                <strong className="text-white">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Session Split:</span>
                <strong className="text-red-400">{currentPlan.title}</strong>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Calculated Tonnage:</span>
                <strong className="text-white">{lastVolumeSummary} KG LIFTED</strong>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Current Streak:</span>
                <strong className="text-emerald-400">{user.streakDays + 1} DAYS IN A ROW 🔥</strong>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => {
                  setShowCelebration(false);
                  setCurrentPage('logs');
                }}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black text-xs py-3 rounded uppercase tracking-wider"
              >
                VIEW LOGS LEDGER
              </button>
              <button
                onClick={() => {
                  setShowCelebration(false);
                  setCurrentPage('diet');
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3 rounded uppercase tracking-wider shadow-lg shadow-red-600/30"
              >
                NEXT: POST-WORKOUT MEAL
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
