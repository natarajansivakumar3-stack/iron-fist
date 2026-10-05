import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { MonthlyPhotoRecord } from '../types/gym';
import {
  Camera,
  Upload,
  HeartHandshake,
  Award,
  Sparkles,
  Trash2,
  Calendar,
  Scale,
  ShieldCheck,
  Target,
  ArrowRight,
  TrendingUp,
  Smile,
  AlertCircle
} from 'lucide-react';

export const PhysiquePhotosPage: React.FC = () => {
  const { user, monthlyPhotos, addMonthlyPhoto, deleteMonthlyPhoto } = useGym();

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState('');
  const [monthName, setMonthName] = useState(`Month ${monthlyPhotos.length + 1} - ${new Date().toLocaleString('default', { month: 'short', year: 'numeric' })}`);
  const [photoWeight, setPhotoWeight] = useState(user.weightKg);
  const [evaluationStatus, setEvaluationStatus] = useState<'improved' | 'lagging_muscle' | 'plateau'>('improved');
  const [laggingMuscle, setLaggingMuscle] = useState<string>('Upper Chest Shelf');
  const [userPersonalNotes, setUserPersonalNotes] = useState('');

  // Handle local file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();

    let feedback = '';
    let coachMotivation = '';

    if (evaluationStatus === 'improved') {
      feedback = 'Visibly increased muscle fullness, improved shoulder-to-waist ratio, and tighter body composition.';
      coachMotivation = `🔥 UNBELIEVABLE PROGRESS, ${user.name.toUpperCase()}! You are proving what pure discipline looks like. Look at the visual symmetry and muscle density you have chiseled through relentless progressive overload. Keep that fire burning; you have only unlocked 30% of your genetic potential. Onward to legendary status!`;
    } else if (evaluationStatus === 'lagging_muscle') {
      feedback = `Identified focus area: ${laggingMuscle}. Needs increased mechanical tension and priority volume.`;
      coachMotivation = `🛡️ COACH'S HEART-TO-HEART: Never feel insecure about your physique. Every single human body develops muscle groups at different anatomical rates. You are not behind; you are simply in the building phase. To force ${laggingMuscle} to grow: train it FIRST in your session when neurological energy is 100%, slow your eccentrics to 4 seconds, and add 2 sets of lengthened partials. We are going to explode this muscle together!`;
    } else {
      feedback = 'Bodyweight stabilized; consolidation phase before next hyper-growth phase.';
      coachMotivation = `💪 PLATEAUS ARE THE LAUNCHPAD BEFORE THE LEAP! When your physique holds steady, your tendons and central nervous system are consolidating. Recalibrate your daily water to ${user.dailyWaterTargetMl}ml, bump your protein intake by 15g, and add 1 extra rep to every working set. The breakthrough is coming!`;
    }

    addMonthlyPhoto({
      month: monthName,
      date: new Date().toISOString().slice(0, 10),
      imageUrl: photoUrl || 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80',
      weightKg: photoWeight,
      status: evaluationStatus,
      laggingMuscles: evaluationStatus === 'lagging_muscle' ? [laggingMuscle] : [],
      feedbackNotes: userPersonalNotes || feedback,
      coachMotivation
    });

    setShowUploadModal(false);
    setPhotoUrl('');
    setUserPersonalNotes('');
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
                MONTHLY PHYSIQUE TIMELINE
              </span>
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                {monthlyPhotos.length} Months Tracked
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider heading-titan">
              MONTH-END BODY PHOTO &amp; COACH MOTIVATION
            </h1>
            <p className="text-sm text-zinc-300 font-medium mt-1">
              "If it's improved, appreciate and motivate them to go far. If some muscle is not grown enough, motivate them and tell them to target more on that muscle group."
            </p>
          </div>

          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-black px-5 py-3 rounded uppercase tracking-wider transition-all shadow-xl shadow-red-600/30 active:scale-95"
          >
            <Camera className="w-4 h-4" />
            <span>UPLOAD THIS MONTH'S PHOTO</span>
          </button>
        </div>

        {/* Mindset & Insecurity Reassurance Banner */}
        <div className="mt-6 pt-6 border-t border-zinc-800 bg-black/40 p-4 rounded-lg flex items-start gap-3">
          <HeartHandshake className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-300 leading-relaxed font-medium">
            <strong className="text-white uppercase font-black">Coaching Creed:</strong> Every individual worries and feels insecure about their body at times. Social media photos are staged with deceptive lighting, pumps, and angles. True natural transformation is an honest, rewarding, month-by-month journey of progressive overload. Be proud of every single workout finished!
          </p>
        </div>
      </div>

      {/* Monthly Photo Cards Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-white heading-titan">
          YOUR VERIFIED PHYSIQUE HISTORY
        </h2>

        {monthlyPhotos.length === 0 ? (
          <div className="text-center py-16 bg-[#0e0e0e] border border-zinc-800 rounded-lg space-y-3">
            <Camera className="w-12 h-12 text-zinc-600 mx-auto" />
            <h3 className="text-lg font-black text-white">No Monthly Photos Uploaded Yet</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              At the end of your training month, take a standardized front or side photo and upload it here to track real muscle development.
            </p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-black px-4 py-2.5 rounded uppercase mt-2"
            >
              UPLOAD FIRST MONTH PHOTO
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {monthlyPhotos.map((item) => (
              <div
                key={item.id}
                className="bg-[#0e0e0e] border border-zinc-800 rounded-lg overflow-hidden flex flex-col hover:border-zinc-700 transition-all shadow-xl"
              >
                {/* Photo Image Display */}
                <div className="relative aspect-[4/3] bg-black overflow-hidden group">
                  <img
                    src={item.imageUrl}
                    alt={item.month}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                      {item.month}
                    </span>
                    <span className="bg-black/80 border border-zinc-700 text-white text-[10px] font-black px-2 py-0.5 rounded">
                      {item.weightKg} KG
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => deleteMonthlyPhoto(item.id)}
                      className="bg-black/70 hover:bg-red-600 text-zinc-400 hover:text-white p-1.5 rounded transition-colors"
                      title="Delete photo record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      {item.date}
                    </span>

                    {item.status === 'improved' && (
                      <span className="bg-emerald-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded uppercase flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> IMPROVED &amp; GROWING
                      </span>
                    )}

                    {item.status === 'lagging_muscle' && (
                      <span className="bg-amber-600 text-black text-[10px] font-black px-2.5 py-0.5 rounded uppercase flex items-center gap-1">
                        <Target className="w-3 h-3" /> TARGET FOCUS
                      </span>
                    )}
                  </div>
                </div>

                {/* Feedback & Coach Motivation Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {item.feedbackNotes && (
                      <div className="text-xs text-zinc-300 font-medium mb-3">
                        <span className="text-zinc-500 font-black uppercase text-[10px] block mb-0.5">
                          EVALUATION NOTES:
                        </span>
                        {item.feedbackNotes}
                      </div>
                    )}

                    {/* AI Coach Motivation Card */}
                    <div className="bg-gradient-to-r from-red-950/40 to-black border-l-4 border-red-600 border border-zinc-800/80 p-4 rounded text-xs space-y-1.5">
                      <div className="flex items-center gap-1.5 text-red-400 font-black uppercase text-[11px]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>IRONCOACH AI MOTIVATIONAL REVIEW:</span>
                      </div>
                      <p className="text-zinc-200 leading-relaxed font-semibold">
                        {item.coachMotivation}
                      </p>
                    </div>
                  </div>

                  {item.laggingMuscles && item.laggingMuscles.length > 0 && (
                    <div className="pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-red-500" />
                      <span>Next month hypertrophy target: <strong className="text-white">{item.laggingMuscles.join(', ')}</strong></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upload Monthly Photo Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#111111] border-2 border-red-600 rounded-lg max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <h3 className="text-2xl font-black text-white heading-titan">
                UPLOAD MONTH-END BODY PHOTO
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-zinc-400 hover:text-white font-black"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSavePhoto} className="space-y-4 text-xs font-bold">
              {/* Photo Input (File or URL) */}
              <div>
                <label className="text-zinc-400 uppercase block mb-1">Upload Photo from Device</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2 text-xs file:bg-red-600 file:text-white file:border-0 file:rounded file:px-3 file:py-1 file:font-black file:text-xs file:mr-3"
                />
              </div>

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Or Paste Image URL</label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                />
              </div>

              {photoUrl && (
                <div className="aspect-[4/3] rounded bg-black overflow-hidden border border-zinc-700 max-h-48">
                  <img src={photoUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Month Label</label>
                  <input
                    type="text"
                    value={monthName}
                    onChange={(e) => setMonthName(e.target.value)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-zinc-400 uppercase block mb-1">Current Body Weight (KG)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={photoWeight}
                    onChange={(e) => setPhotoWeight(parseFloat(e.target.value) || 0)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Assessment Question from user brief */}
              <div>
                <label className="text-zinc-400 uppercase block mb-1">
                  How does your physique compare to last month?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setEvaluationStatus('improved')}
                    className={`p-2.5 rounded border text-center font-black uppercase text-[11px] transition-all ${
                      evaluationStatus === 'improved'
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    ✨ IMPROVED &amp; LEANER
                  </button>
                  <button
                    type="button"
                    onClick={() => setEvaluationStatus('lagging_muscle')}
                    className={`p-2.5 rounded border text-center font-black uppercase text-[11px] transition-all ${
                      evaluationStatus === 'lagging_muscle'
                        ? 'bg-amber-600 border-amber-500 text-black'
                        : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    🎯 SPECIFIC MUSCLE LAGGING
                  </button>
                  <button
                    type="button"
                    onClick={() => setEvaluationStatus('plateau')}
                    className={`p-2.5 rounded border text-center font-black uppercase text-[11px] transition-all ${
                      evaluationStatus === 'plateau'
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-black border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    ⚖️ SAME / PLATEAU
                  </button>
                </div>
              </div>

              {/* If Lagging Muscle Selected */}
              {evaluationStatus === 'lagging_muscle' && (
                <div className="bg-zinc-950 border border-amber-900/60 p-3 rounded space-y-2">
                  <label className="text-amber-400 uppercase block font-black text-[11px]">
                    Which muscle group needs more growth / attention?
                  </label>
                  <select
                    value={laggingMuscle}
                    onChange={(e) => setLaggingMuscle(e.target.value)}
                    className="w-full bg-black border border-zinc-700 text-white rounded p-2 focus:border-red-500 focus:outline-none text-xs"
                  >
                    <option value="Upper Chest Shelf (Clavicular Head)">Upper Chest Shelf (Clavicular Head)</option>
                    <option value="Latissimus Dorsi (Outer V-Taper Wings)">Latissimus Dorsi (Outer V-Taper Wings)</option>
                    <option value="Lateral Deltoid Shoulders (Width)">Lateral Deltoid Shoulders (Width)</option>
                    <option value="Triceps (Long Head Arm Thickness)">Triceps (Long Head Arm Thickness)</option>
                    <option value="Biceps (Peak &amp; Brachialis)">Biceps (Peak &amp; Brachialis)</option>
                    <option value="Quadriceps (Outer Sweep &amp; Teardrop)">Quadriceps (Outer Sweep &amp; Teardrop)</option>
                    <option value="Hamstrings &amp; Glute Mass">Hamstrings &amp; Glute Mass</option>
                    <option value="Calf Muscle Density">Calf Muscle Density</option>
                    <option value="Abs &amp; Tight Waist Core">Abs &amp; Tight Waist Core</option>
                  </select>
                </div>
              )}

              <div>
                <label className="text-zinc-400 uppercase block mb-1">Your Personal Reflection (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="How did your energy, confidence, and strength feel this month?"
                  value={userPersonalNotes}
                  onChange={(e) => setUserPersonalNotes(e.target.value)}
                  className="w-full bg-black border border-zinc-700 text-white rounded p-2.5 focus:border-red-500 focus:outline-none text-xs"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white font-black py-2.5 rounded uppercase"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black py-2.5 rounded uppercase shadow-lg shadow-red-600/30"
                >
                  SAVE &amp; GENERATE MOTIVATION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
