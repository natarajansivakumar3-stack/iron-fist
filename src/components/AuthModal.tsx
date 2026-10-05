import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { PhysiqueTier, Gender, FitnessGoal } from '../types/gym';
import {
  Dumbbell,
  Lock,
  User,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signIn, signUp, signInWithGoogle } = useGym();
  const [isSignUp, setIsSignUp] = useState(false);

  // Form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<Gender>('male');
  const [weightKg, setWeightKg] = useState(75);
  const [physiqueTier, setPhysiqueTier] = useState<PhysiqueTier>('intermediate');
  const [goal, setGoal] = useState<FitnessGoal>('fatloss');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (isSignUp) {
      if (!username || !password || !name) {
        setErrorMsg('Please fill in all required fields.');
        return;
      }
      signUp({
        username: username.trim(),
        name: name.trim(),
        email: email.trim() || `${username.trim()}@titaniron.fit`,
        age,
        gender,
        weightKg,
        targetWeightKg: weightKg + (goal === 'weightgain' ? 5 : -5),
        physiqueTier,
        goal
      });
      onClose();
    } else {
      if (!username) {
        setErrorMsg('Please enter your username.');
        return;
      }
      const success = signIn(username, password);
      if (success) {
        onClose();
      } else {
        setErrorMsg('Invalid credentials. Please try again.');
      }
    }
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#111111] border-2 border-red-600 rounded-lg max-w-md w-full p-6 space-y-5 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Brand header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 bg-red-600 text-black flex items-center justify-center rounded mx-auto font-black shadow-lg shadow-red-600/40">
            <Dumbbell className="w-7 h-7 stroke-[2.5]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white heading-titan tracking-wider pt-2">
            {isSignUp ? 'CREATE TITAN ACCOUNT' : 'SIGN IN TO YOUR GYM VAULT'}
          </h3>
          <p className="text-xs text-zinc-400 font-bold uppercase">
            Store your weights, logs, and photos securely
          </p>
        </div>

        {errorMsg && (
          <div className="bg-red-950/80 border border-red-600 p-2.5 rounded text-xs text-white font-bold text-center">
            {errorMsg}
          </div>
        )}

        {/* 1-Click Google Sign In */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white hover:bg-zinc-200 text-black font-black text-xs py-3 rounded flex items-center justify-center gap-2.5 transition-colors uppercase tracking-wider shadow"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>CONTINUE WITH GOOGLE</span>
        </button>

        <div className="flex items-center gap-3 text-xs text-zinc-600 font-bold uppercase">
          <div className="flex-1 h-px bg-zinc-800" />
          <span>OR WITH USERNAME</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-bold">
          <div>
            <label className="text-zinc-400 uppercase block mb-1">Username</label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. IronTitan99"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 pl-9 focus:border-red-500 focus:outline-none"
                required
              />
              <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
            </div>
          </div>

          <div>
            <label className="text-zinc-400 uppercase block mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 pl-9 focus:border-red-500 focus:outline-none"
                required
              />
              <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
            </div>
          </div>

          {/* Additional fields when creating an account */}
          {isSignUp && (
            <div className="space-y-3 pt-2 border-t border-zinc-800 animate-in fade-in duration-300">
              <div>
                <label className="text-zinc-400 uppercase block mb-1">Your Display Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex Mercer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Age</label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Current Weight (KG)</label>
                  <input
                    type="number"
                    step="0.5"
                    value={weightKg}
                    onChange={(e) => setWeightKg(parseFloat(e.target.value) || 0)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2 focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Gender</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'male', label: 'Male' },
                    { id: 'female', label: 'Female' },
                    { id: 'other', label: 'Other' }
                  ].map((g) => (
                    <button
                      type="button"
                      key={g.id}
                      onClick={() => setGender(g.id as Gender)}
                      className={`py-1.5 px-2 rounded border text-center uppercase text-[10px] font-black ${
                        gender === g.id
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'bg-black border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Physique Tier</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'beginner', label: 'Beginner (Slow Split)' },
                    { id: 'intermediate', label: 'Intermediate (Hard)' },
                    { id: 'athletic', label: 'Athletic (Mobility)' },
                    { id: 'v-taper', label: 'V-Taper (Hard Hypertrophy)' }
                  ].map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setPhysiqueTier(t.id as PhysiqueTier)}
                      className={`py-1.5 px-2 rounded border text-center uppercase text-[10px] font-black ${
                        physiqueTier === t.id
                          ? 'bg-red-600 border-red-500 text-white'
                          : 'bg-black border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3 rounded uppercase tracking-wider transition-all shadow-lg shadow-red-600/30"
          >
            {isSignUp ? 'REGISTER & ENTER GYM ARENA' : 'SIGN IN TO PROFILE'}
          </button>
        </form>

        {/* Toggle sign in / sign up */}
        <div className="text-center pt-2 border-t border-zinc-800">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMsg('');
            }}
            className="text-xs text-zinc-400 hover:text-white font-bold"
          >
            {isSignUp
              ? 'Already have an account? Sign in here'
              : "Don't have an account? Create one in 30 seconds"}
          </button>
        </div>
      </div>
    </div>
  );
};
