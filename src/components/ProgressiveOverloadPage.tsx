import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { WorkoutLogEntry } from '../types/gym';
import {
  LineChart,
  Calendar,
  CheckCircle2,
  Trash2,
  Plus,
  Flame,
  Dumbbell,
  TrendingUp,
  Info,
  Clock,
  Layers,
  Filter
} from 'lucide-react';

export const ProgressiveOverloadPage: React.FC = () => {
  const { workoutLogs, deleteWorkoutLog, logCompletedWorkout, user, setCurrentPage } = useGym();

  const [selectedMonthFilter, setSelectedMonthFilter] = useState<string>('all');
  const [showManualModal, setShowManualModal] = useState(false);

  // Manual log form state
  const [manualDate, setManualDate] = useState(new Date().toISOString().slice(0, 10));
  const [manualSplit, setManualSplit] = useState('Day 1: Chest & Triceps');
  const [manualVolume, setManualVolume] = useState(3500);
  const [manualDuration, setManualDuration] = useState(60);
  const [manualNotes, setManualNotes] = useState('');

  // Extract unique months from logs
  const uniqueMonths = Array.from(new Set(workoutLogs.map((l) => l.month)));

  const filteredLogs = selectedMonthFilter === 'all'
    ? workoutLogs
    : workoutLogs.filter((l) => l.month === selectedMonthFilter);

  // Calculate total tonnage lifted all time
  const totalTonnageAllTime = workoutLogs.reduce((acc, curr) => acc + (curr.totalVolumeKg || 0), 0);

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = new Date(manualDate);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayOfWeek = days[d.getDay()];
    const month = `${months[d.getMonth()]} ${d.getFullYear()}`;
    const startOfYear = new Date(d.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((d.getTime() - startOfYear.getTime()) / 86400000 + startOfYear.getDay() + 1) / 7);

    logCompletedWorkout({
      date: manualDate,
      dayOfWeek,
      weekNumber,
      month,
      splitId: 'manual',
      splitTitle: manualSplit,
      exercisesCompleted: [
        {
          exerciseName: manualSplit,
          muscleName: 'Full Session Volume',
          setsLogged: [
            { setNumber: 1, weightKg: Math.round(manualVolume / 30), reps: 10, completed: true }
          ]
        }
      ],
      durationMinutes: manualDuration,
      totalVolumeKg: manualVolume,
      notes: manualNotes || 'Completed with strict form and progressive overload.'
    });

    setShowManualModal(false);
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
                PROGRESSIVE OVERLOAD LEDGER
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Active Streak: <strong className="text-emerald-400">{user.streakDays} DAYS</strong>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              DAILY WORKOUT COMPLETION LOGS
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              "Note a column of date, day, week, months of everyday workout routine that is finished."
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowManualModal(true)}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2.5 rounded uppercase tracking-wider transition-all shadow-lg shadow-red-600/30"
            >
              <Plus className="w-4 h-4" />
              <span>LOG COMPLETED WORKOUT</span>
            </button>
            <button
              onClick={() => setCurrentPage('workout')}
              className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-red-500 text-white text-xs font-black px-4 py-2.5 rounded uppercase transition-colors"
            >
              <Dumbbell className="w-4 h-4 text-red-500" />
              <span>GO TO WORKOUT ARENA</span>
            </button>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-lg">
            <div className="text-[11px] text-zinc-400 font-black uppercase tracking-wider">TOTAL SESSIONS LOGGED</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1 heading-titan">
              {workoutLogs.length} <span className="text-red-500 text-sm">COMPLETED</span>
            </div>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-lg">
            <div className="text-[11px] text-zinc-400 font-black uppercase tracking-wider">CUMULATIVE TONNAGE LIFTED</div>
            <div className="text-2xl sm:text-3xl font-black text-red-400 mt-1 heading-titan">
              {(totalTonnageAllTime / 1000).toFixed(1)}k <span className="text-zinc-400 text-sm">KG</span>
            </div>
          </div>

          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-lg">
            <div className="text-[11px] text-zinc-400 font-black uppercase tracking-wider">ADAPTATION STATUS</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1 heading-titan">
              ANABOLIC <span className="text-white text-sm">SURGING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progressive Overload Coaching Banner */}
      <div className="bg-gradient-to-r from-red-950/30 via-zinc-900 to-black border-l-4 border-red-600 border border-zinc-800 p-6 rounded-lg space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-500" />
          <h2 className="text-xl font-black text-white heading-titan">
            HOW TO EXECUTE REAL PROGRESSIVE OVERLOAD
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Muscle only adapts when presented with a stress greater than the previous session. Never lift the same weight for the same reps endlessly.
          Use the <strong className="text-white">Double Progression Method</strong>:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
          <div className="bg-black/60 border border-zinc-800 p-3 rounded">
            <div className="font-black text-red-400 uppercase mb-1">1. STEP ONE: REPETITION TARGET</div>
            <p className="text-zinc-300">Choose a weight and fight to reach 12 strict repetitions across all prescribed sets.</p>
          </div>
          <div className="bg-black/60 border border-zinc-800 p-3 rounded">
            <div className="font-black text-red-400 uppercase mb-1">2. STEP TWO: WEIGHT JUMP</div>
            <p className="text-zinc-300">Once you hit 12 reps on all sets, add 2.5kg to 5kg and drop back to 8 clean reps.</p>
          </div>
          <div className="bg-black/60 border border-zinc-800 p-3 rounded">
            <div className="font-black text-red-400 uppercase mb-1">3. STEP THREE: ZERO EGO MOMENTUM</div>
            <p className="text-zinc-300">Never compromise the 3-second negative descent. Momentum is fake progression; form is real growth.</p>
          </div>
        </div>
      </div>

      {/* Filter and History Table */}
      <div className="bg-[#0e0e0e] border border-zinc-800 rounded-lg p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <h3 className="text-xl font-black text-white heading-titan">
              COMPLETED WORKOUT LEDGER
            </h3>
            <p className="text-xs text-zinc-400 font-bold uppercase mt-0.5">
              Showing {filteredLogs.length} verified workout logs
            </p>
          </div>

          {/* Month Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-red-500" />
            <select
              value={selectedMonthFilter}
              onChange={(e) => setSelectedMonthFilter(e.target.value)}
              className="bg-black border border-zinc-700 text-white text-xs font-black px-3 py-2 rounded focus:outline-none focus:border-red-500"
            >
              <option value="all">ALL MONTHS</option>
              {uniqueMonths.map((m) => (
                <option key={m} value={m}>
                  {m.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* The Exact Table as requested: Date, Day, Week, Months */}
        {filteredLogs.length === 0 ? (
          <div className="text-center py-12 text-zinc-500 space-y-2">
            <Calendar className="w-10 h-10 mx-auto text-zinc-600" />
            <p className="font-bold text-sm">No workout logs recorded for this selection.</p>
            <p className="text-xs">Complete a workout in the Workout Arena to stamp your first log!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 uppercase tracking-wider font-black bg-zinc-950/60">
                  <th className="py-3 px-3">DATE</th>
                  <th className="py-3 px-3">DAY</th>
                  <th className="py-3 px-3">WEEK</th>
                  <th className="py-3 px-3">MONTH</th>
                  <th className="py-3 px-4">WORKOUT ROUTINE</th>
                  <th className="py-3 px-3">VOLUME (KG)</th>
                  <th className="py-3 px-3">STATUS</th>
                  <th className="py-3 px-2 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 font-medium">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-zinc-900/50 transition-colors">
                    {/* Date */}
                    <td className="py-3.5 px-3 font-black text-white whitespace-nowrap">
                      {log.date}
                    </td>

                    {/* Day */}
                    <td className="py-3.5 px-3 text-red-400 font-bold whitespace-nowrap uppercase">
                      {log.dayOfWeek}
                    </td>

                    {/* Week */}
                    <td className="py-3.5 px-3 text-zinc-300 whitespace-nowrap">
                      <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded text-[11px] font-black">
                        WEEK {log.weekNumber}
                      </span>
                    </td>

                    {/* Month */}
                    <td className="py-3.5 px-3 text-zinc-300 whitespace-nowrap font-bold">
                      {log.month}
                    </td>

                    {/* Workout Routine Title & Notes */}
                    <td className="py-3.5 px-4">
                      <div className="font-black text-white text-xs">{log.splitTitle}</div>
                      {log.notes && (
                        <div className="text-[11px] text-zinc-400 truncate max-w-xs mt-0.5">
                          {log.notes}
                        </div>
                      )}
                    </td>

                    {/* Volume */}
                    <td className="py-3.5 px-3 font-black text-white whitespace-nowrap">
                      {log.totalVolumeKg ? `${log.totalVolumeKg.toLocaleString()} KG` : 'Logged'}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-emerald-400 font-black text-[11px] bg-emerald-950/60 border border-emerald-800/80 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3 h-3" /> COMPLETED
                      </span>
                    </td>

                    {/* Delete */}
                    <td className="py-3.5 px-2 text-right whitespace-nowrap">
                      <button
                        onClick={() => deleteWorkoutLog(log.id)}
                        className="text-zinc-500 hover:text-red-500 p-1 transition-colors"
                        title="Delete log"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Manual Log Modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111111] border-2 border-red-600 rounded-lg max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="text-xl font-black text-white heading-titan">
                MANUALLY LOG FINISHED WORKOUT
              </h3>
              <button
                onClick={() => setShowManualModal(false)}
                className="text-zinc-400 hover:text-white font-black"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleManualSubmit} className="space-y-4 text-xs font-bold">
              <div>
                <label className="text-zinc-400 uppercase block mb-1">Date of Finished Routine</label>
                <input
                  type="date"
                  value={manualDate}
                  onChange={(e) => setManualDate(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Workout Routine Split</label>
                <select
                  value={manualSplit}
                  onChange={(e) => setManualSplit(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                >
                  <option value="Day 1: Chest & Triceps">Day 1: Chest &amp; Triceps (5 Workouts Each)</option>
                  <option value="Day 2: Back & Biceps">Day 2: Back &amp; Biceps (5 Workouts Each)</option>
                  <option value="Day 3A: Shoulder & Legs (Lower Body)">Day 3A: Shoulder &amp; Legs (Lower Body)</option>
                  <option value="Day 3B: Shoulder & Abs (Core)">Day 3B: Shoulder &amp; Abs (Core Focus)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Total Volume (KG)</label>
                  <input
                    type="number"
                    value={manualVolume}
                    onChange={(e) => setManualVolume(parseInt(e.target.value, 10) || 0)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Duration (Mins)</label>
                  <input
                    type="number"
                    value={manualDuration}
                    onChange={(e) => setManualDuration(parseInt(e.target.value, 10) || 0)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Personal Notes / PR Lifted</label>
                <textarea
                  rows={2}
                  value={manualNotes}
                  onChange={(e) => setManualNotes(e.target.value)}
                  placeholder="e.g. Incline DB press increased to 30kg. 3s eccentric control."
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none text-xs"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowManualModal(false)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black py-2.5 rounded uppercase"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black py-2.5 rounded uppercase shadow-lg shadow-red-600/30"
                >
                  SAVE LOG
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
