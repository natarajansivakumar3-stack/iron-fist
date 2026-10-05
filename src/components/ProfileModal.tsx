import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { PhysiqueTier, Gender, FitnessGoal } from '../types/gym';
import {
  User,
  Scale,
  Target,
  LogOut,
  CheckCircle2,
  Calendar,
  Award,
  Sparkles,
  Flame,
  Shield
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, onOpenAuth }) => {
  const { user, updateProfile, signOut, isAuthenticated } = useGym();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState<Gender>(user.gender);
  const [weightKg, setWeightKg] = useState(user.weightKg);
  const [targetWeightKg, setTargetWeightKg] = useState(user.targetWeightKg);
  const [physiqueTier, setPhysiqueTier] = useState<PhysiqueTier>(user.physiqueTier);
  const [goal, setGoal] = useState<FitnessGoal>(user.goal);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name,
      age,
      gender,
      weightKg,
      targetWeightKg,
      physiqueTier,
      goal
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111111] border-2 border-red-600 rounded-lg max-w-lg w-full p-6 space-y-5 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-black font-black text-sm">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-2xl font-black text-white heading-titan">
                ATHLETE PROFILE &amp; WEIGHT
              </h3>
              <p className="text-[11px] text-zinc-400 font-bold uppercase">
                Manage your metrics • Recalculates hydration &amp; calories
              </p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white font-black text-lg">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold">
          {/* Name & Age */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-zinc-400 uppercase block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-zinc-400 uppercase block mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
                className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Gender & Pacing */}
          <div>
            <label className="text-zinc-400 uppercase block mb-1">Gender</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'male', label: 'Male' },
                { id: 'female', label: 'Female (Smooth Pacing)' },
                { id: 'other', label: 'Other' }
              ].map((g) => (
                <button
                  type="button"
                  key={g.id}
                  onClick={() => setGender(g.id as Gender)}
                  className={`p-2.5 rounded border text-center uppercase text-[11px] font-black transition-all ${
                    gender === g.id
                      ? 'bg-red-600 border-red-500 text-white'
                      : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
            {gender === 'female' && (
              <p className="text-[11px] text-red-400 mt-1 font-semibold">
                🌸 Female Protocol Active: Workouts calibrate with progressive ramp-up, pelvic alignment, and joint stability cues.
              </p>
            )}
          </div>

          {/* Current Weight & Target Weight */}
          <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-3.5 rounded border border-zinc-800">
            <div>
              <label className="text-red-400 uppercase block mb-1 flex items-center gap-1 font-black">
                <Scale className="w-3.5 h-3.5 text-red-500" />
                <span>Current Weight (KG)</span>
              </label>
              <input
                type="number"
                step="0.1"
                value={weightKg}
                onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                className="w-full bg-black border border-zinc-700 text-white font-black text-sm rounded p-2 focus:border-red-500 focus:outline-none"
                required
              />
              <span className="text-[10px] text-zinc-500 block mt-0.5">
                Updates daily water &amp; calorie targets
              </span>
            </div>

            <div>
              <label className="text-zinc-400 uppercase block mb-1 font-black">
                Target Weight (KG)
              </label>
              <input
                type="number"
                step="0.1"
                value={targetWeightKg}
                onChange={(e) => setTargetWeightKg(parseFloat(e.target.value) || 0)}
                className="w-full bg-black border border-zinc-700 text-white font-black text-sm rounded p-2 focus:border-red-500 focus:outline-none"
                required
              />
              <span className="text-[10px] text-zinc-500 block mt-0.5">
                Difference: {(targetWeightKg - weightKg).toFixed(1)} kg
              </span>
            </div>
          </div>

          {/* Physique Tier */}
          <div>
            <label className="text-zinc-400 uppercase block mb-1">Physique Tier</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'beginner', label: 'Beginner', desc: 'Slow split, form focus' },
                { id: 'intermediate', label: 'Intermediate', desc: 'Heavy compounds' },
                { id: 'athletic', label: 'Athletic', desc: 'Power & mobility' },
                { id: 'v-taper', label: 'V-Taper', desc: 'Lat width & delts' }
              ].map((tier) => (
                <button
                  type="button"
                  key={tier.id}
                  onClick={() => setPhysiqueTier(tier.id as PhysiqueTier)}
                  className={`p-2 rounded border text-center transition-all ${
                    physiqueTier === tier.id
                      ? 'bg-red-600 border-red-500 text-white'
                      : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-black uppercase">{tier.label}</div>
                  <div className="text-[9px] opacity-80 mt-0.5">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Fitness Goal */}
          <div>
            <label className="text-zinc-400 uppercase block mb-1">Primary Fitness Goal</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'fatloss', label: 'Fat Loss / Shredded' },
                { id: 'weightloss', label: 'Weight Loss' },
                { id: 'weightgain', label: 'Weight Gain / Bulk' }
              ].map((g) => (
                <button
                  type="button"
                  key={g.id}
                  onClick={() => setGoal(g.id as FitnessGoal)}
                  className={`p-2.5 rounded border text-center uppercase text-[11px] font-black transition-all ${
                    goal === g.id
                      ? 'bg-red-600 border-red-500 text-white'
                      : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-between gap-3 border-t border-zinc-800">
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => {
                  signOut();
                  onClose();
                  onOpenAuth();
                }}
                className="text-zinc-500 hover:text-red-500 text-xs font-black flex items-center gap-1.5 uppercase transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>SIGN OUT</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAuth();
                }}
                className="text-red-400 hover:text-white text-xs font-black uppercase"
              >
                SWITCH / SIGN IN
              </button>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded uppercase"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded uppercase shadow-lg shadow-red-600/30 flex items-center gap-1.5"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>SAVED!</span>
                  </>
                ) : (
                  <span>SAVE CHANGES</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
