import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  PhysiqueTier,
  Gender,
  FitnessGoal,
  WorkoutLogEntry,
  MonthlyPhotoRecord
} from '../types/gym';
import { calculateWaterRequirementMl, calculateCalorieTarget } from '../data/scienceData';

interface GymContextType {
  user: UserProfile;
  isAuthenticated: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
  // Auth & Profile
  signIn: (username: string, pass: string) => boolean;
  signUp: (data: Partial<UserProfile>) => void;
  signInWithGoogle: () => void;
  signOut: () => void;
  updateProfile: (data: Partial<UserProfile>) => void;
  updateWeight: (newWeightKg: number) => void;
  // Workouts & Variations
  activeSplitId: 'day1' | 'day2' | 'day3a' | 'day3b';
  setActiveSplitId: (id: 'day1' | 'day2' | 'day3a' | 'day3b') => void;
  musclePoolIndices: Record<string, number>;
  swapMuscleVariation: (muscleKey: string) => void;
  // Workout Logs & Progressive Overload
  workoutLogs: WorkoutLogEntry[];
  logCompletedWorkout: (log: Omit<WorkoutLogEntry, 'id'>) => void;
  deleteWorkoutLog: (id: string) => void;
  // Diet Flowchart
  activeDietGoal: FitnessGoal;
  setActiveDietGoal: (goal: FitnessGoal) => void;
  currentDietDay: number;
  setCurrentDietDay: (day: number) => void;
  completeDietDay: () => void;
  // Monthly Photos & Physique Assessment
  monthlyPhotos: MonthlyPhotoRecord[];
  addMonthlyPhoto: (photo: Omit<MonthlyPhotoRecord, 'id'>) => void;
  deleteMonthlyPhoto: (id: string) => void;
  // Hydration & Calories
  todayWaterConsumedMl: number;
  addWaterMl: (amount: number) => void;
  resetWater: () => void;
  todayCaloriesConsumed: number;
  addCalories: (amount: number) => void;
  resetCalories: () => void;
  // Rest Timer
  restTimerSeconds: number;
  isTimerRunning: boolean;
  startRestTimer: (seconds: number) => void;
  stopRestTimer: () => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'usr_titan_default',
  username: 'IronAthlete',
  name: 'Marcus Vance',
  email: 'athlete@titaniron.fit',
  avatarUrl: '',
  gender: 'male',
  age: 26,
  weightKg: 78,
  targetWeightKg: 82,
  physiqueTier: 'intermediate',
  goal: 'fatloss',
  dailyWaterTargetMl: calculateWaterRequirementMl(78, 'fatloss'),
  dailyCalorieTarget: calculateCalorieTarget(78, 'male', 26, 'fatloss'),
  completedDaysCount: 14,
  streakDays: 4
};

const SAMPLE_INITIAL_LOGS: WorkoutLogEntry[] = [
  {
    id: 'log-1',
    date: '2026-10-01',
    dayOfWeek: 'Thursday',
    weekNumber: 1,
    month: 'October 2026',
    splitId: 'day1',
    splitTitle: 'Day 1: Chest & Triceps (Barbell Heavy)',
    exercisesCompleted: [
      {
        exerciseName: 'Incline Barbell Bench Press',
        muscleName: 'Upper Pectoralis Major',
        setsLogged: [
          { setNumber: 1, weightKg: 60, reps: 10, completed: true },
          { setNumber: 2, weightKg: 65, reps: 8, completed: true },
          { setNumber: 3, weightKg: 70, reps: 8, completed: true },
          { setNumber: 4, weightKg: 70, reps: 7, completed: true }
        ]
      },
      {
        exerciseName: 'Rope Tricep Pushdowns',
        muscleName: 'Lateral & Medial Triceps',
        setsLogged: [
          { setNumber: 1, weightKg: 25, reps: 15, completed: true },
          { setNumber: 2, weightKg: 30, reps: 12, completed: true },
          { setNumber: 3, weightKg: 30, reps: 12, completed: true }
        ]
      }
    ],
    durationMinutes: 55,
    totalVolumeKg: 3420,
    notes: 'Controlled 3s negative descent. Upper chest felt an intense pump. Zero shoulder discomfort.'
  },
  {
    id: 'log-2',
    date: '2026-10-03',
    dayOfWeek: 'Saturday',
    weekNumber: 1,
    month: 'October 2026',
    splitId: 'day2',
    splitTitle: 'Day 2: Back & Biceps (Lat Width)',
    exercisesCompleted: [
      {
        exerciseName: 'Wide-Grip Lat Pulldown',
        muscleName: 'Latissimus Dorsi',
        setsLogged: [
          { setNumber: 1, weightKg: 55, reps: 12, completed: true },
          { setNumber: 2, weightKg: 60, reps: 10, completed: true },
          { setNumber: 3, weightKg: 65, reps: 8, completed: true }
        ]
      }
    ],
    durationMinutes: 60,
    totalVolumeKg: 4100,
    notes: 'Focused on pulling elbows down to pockets for wide V-taper wings.'
  }
];

const SAMPLE_INITIAL_PHOTOS: MonthlyPhotoRecord[] = [
  {
    id: 'photo-1',
    month: 'September 2026 (Month 1)',
    date: '2026-09-01',
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80',
    weightKg: 80.5,
    status: 'improved',
    feedbackNotes: 'Baseline physique check. Chest shelf starting to show definition; back needs more lateral width.',
    coachMotivation: 'Outstanding start! You have laid down the neurological foundation. Continue progressive overload and stay strict on pre-workout nutrition.'
  }
];

const GymContext = createContext<GymContextType | null>(null);

export const GymProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation State
  const [currentPage, setCurrentPage] = useState<string>('workout');

  // User Profile
  const [user, setUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('titan_iron_user_profile');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_USER;
  });

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  // Active workout split & variations
  const [activeSplitId, setActiveSplitId] = useState<'day1' | 'day2' | 'day3a' | 'day3b'>('day1');
  const [musclePoolIndices, setMusclePoolIndices] = useState<Record<string, number>>(() => {
    try {
      const saved = localStorage.getItem('titan_iron_pools');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      chest: 0,
      triceps: 0,
      back: 0,
      biceps: 0,
      shoulders: 0,
      legs: 0,
      abs: 0
    };
  });

  // Workout Logs
  const [workoutLogs, setWorkoutLogs] = useState<WorkoutLogEntry[]>(() => {
    try {
      const saved = localStorage.getItem('titan_iron_workout_logs');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return SAMPLE_INITIAL_LOGS;
  });

  // Diet State
  const [activeDietGoal, setActiveDietGoal] = useState<FitnessGoal>(user.goal || 'fatloss');
  const [currentDietDay, setCurrentDietDay] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('titan_iron_diet_day');
      if (saved) return parseInt(saved, 10);
    } catch (e) {
      console.error(e);
    }
    return 1;
  });

  // Monthly Photos
  const [monthlyPhotos, setMonthlyPhotos] = useState<MonthlyPhotoRecord[]>(() => {
    try {
      const saved = localStorage.getItem('titan_iron_photos');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return SAMPLE_INITIAL_PHOTOS;
  });

  // Hydration and Calories
  const [todayWaterConsumedMl, setTodayWaterConsumedMl] = useState<number>(() => {
    try {
      const dateKey = `titan_water_${new Date().toISOString().slice(0, 10)}`;
      const saved = localStorage.getItem(dateKey);
      if (saved) return parseInt(saved, 10);
    } catch (e) {
      console.error(e);
    }
    return 1500;
  });

  const [todayCaloriesConsumed, setTodayCaloriesConsumed] = useState<number>(() => {
    try {
      const dateKey = `titan_calories_${new Date().toISOString().slice(0, 10)}`;
      const saved = localStorage.getItem(dateKey);
      if (saved) return parseInt(saved, 10);
    } catch (e) {
      console.error(e);
    }
    return 1100;
  });

  // Rest Timer
  const [restTimerSeconds, setRestTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('titan_iron_user_profile', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('titan_iron_pools', JSON.stringify(musclePoolIndices));
  }, [musclePoolIndices]);

  useEffect(() => {
    localStorage.setItem('titan_iron_workout_logs', JSON.stringify(workoutLogs));
  }, [workoutLogs]);

  useEffect(() => {
    localStorage.setItem('titan_iron_photos', JSON.stringify(monthlyPhotos));
  }, [monthlyPhotos]);

  useEffect(() => {
    localStorage.setItem('titan_iron_diet_day', currentDietDay.toString());
  }, [currentDietDay]);

  useEffect(() => {
    const dateKey = `titan_water_${new Date().toISOString().slice(0, 10)}`;
    localStorage.setItem(dateKey, todayWaterConsumedMl.toString());
  }, [todayWaterConsumedMl]);

  useEffect(() => {
    const dateKey = `titan_calories_${new Date().toISOString().slice(0, 10)}`;
    localStorage.setItem(dateKey, todayCaloriesConsumed.toString());
  }, [todayCaloriesConsumed]);

  // Timer countdown hook
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && restTimerSeconds > 0) {
      interval = setInterval(() => {
        setRestTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (restTimerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, restTimerSeconds]);

  // Actions
  const updateProfile = (data: Partial<UserProfile>) => {
    setUser((prev) => {
      const updated = { ...prev, ...data };
      if (data.weightKg || data.goal || data.gender || data.age) {
        updated.dailyWaterTargetMl = calculateWaterRequirementMl(updated.weightKg, updated.goal);
        updated.dailyCalorieTarget = calculateCalorieTarget(
          updated.weightKg,
          updated.gender,
          updated.age,
          updated.goal
        );
      }
      return updated;
    });
  };

  const updateWeight = (newWeightKg: number) => {
    updateProfile({ weightKg: newWeightKg });
  };

  const swapMuscleVariation = (muscleKey: string) => {
    setMusclePoolIndices((prev) => {
      const current = prev[muscleKey] ?? 0;
      const nextIndex = (current + 1) % 3; // 3 variation pools
      return { ...prev, [muscleKey]: nextIndex };
    });
  };

  const logCompletedWorkout = (logData: Omit<WorkoutLogEntry, 'id'>) => {
    const newEntry: WorkoutLogEntry = {
      ...logData,
      id: `log-${Date.now()}`
    };
    setWorkoutLogs((prev) => [newEntry, ...prev]);
    setUser((prev) => ({
      ...prev,
      completedDaysCount: prev.completedDaysCount + 1,
      streakDays: prev.streakDays + 1
    }));
  };

  const deleteWorkoutLog = (id: string) => {
    setWorkoutLogs((prev) => prev.filter((item) => item.id !== id));
  };

  const completeDietDay = () => {
    setCurrentDietDay((prev) => (prev % 7) + 1); // cycles 1 through 7
  };

  const addMonthlyPhoto = (photoData: Omit<MonthlyPhotoRecord, 'id'>) => {
    const newRecord: MonthlyPhotoRecord = {
      ...photoData,
      id: `photo-${Date.now()}`
    };
    setMonthlyPhotos((prev) => [newRecord, ...prev]);
  };

  const deleteMonthlyPhoto = (id: string) => {
    setMonthlyPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const addWaterMl = (amount: number) => {
    setTodayWaterConsumedMl((prev) => prev + amount);
  };

  const resetWater = () => {
    setTodayWaterConsumedMl(0);
  };

  const addCalories = (amount: number) => {
    setTodayCaloriesConsumed((prev) => prev + amount);
  };

  const resetCalories = () => {
    setTodayCaloriesConsumed(0);
  };

  const startRestTimer = (seconds: number) => {
    setRestTimerSeconds(seconds);
    setIsTimerRunning(true);
  };

  const stopRestTimer = () => {
    setIsTimerRunning(false);
    setRestTimerSeconds(0);
  };

  const signIn = (username: string, pass: string) => {
    if (username.trim()) {
      setUser((prev) => ({ ...prev, username: username.trim(), name: username.trim() }));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const signUp = (data: Partial<UserProfile>) => {
    setUser((prev) => {
      const updated: UserProfile = {
        ...prev,
        ...data,
        id: `usr_${Date.now()}`,
        dailyWaterTargetMl: calculateWaterRequirementMl(data.weightKg || prev.weightKg, data.goal || prev.goal),
        dailyCalorieTarget: calculateCalorieTarget(
          data.weightKg || prev.weightKg,
          data.gender || prev.gender,
          data.age || prev.age,
          data.goal || prev.goal
        )
      };
      return updated;
    });
    setIsAuthenticated(true);
  };

  const signInWithGoogle = () => {
    setUser((prev) => ({
      ...prev,
      name: 'Google Athlete',
      username: 'GoogleAthlete',
      email: 'athlete@google.com',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    }));
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <GymContext.Provider
      value={{
        user,
        isAuthenticated,
        currentPage,
        setCurrentPage,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        updateProfile,
        updateWeight,
        activeSplitId,
        setActiveSplitId,
        musclePoolIndices,
        swapMuscleVariation,
        workoutLogs,
        logCompletedWorkout,
        deleteWorkoutLog,
        activeDietGoal,
        setActiveDietGoal,
        currentDietDay,
        setCurrentDietDay,
        completeDietDay,
        monthlyPhotos,
        addMonthlyPhoto,
        deleteMonthlyPhoto,
        todayWaterConsumedMl,
        addWaterMl,
        resetWater,
        todayCaloriesConsumed,
        addCalories,
        resetCalories,
        restTimerSeconds,
        isTimerRunning,
        startRestTimer,
        stopRestTimer
      }}
    >
      {children}
    </GymContext.Provider>
  );
};

export const useGym = () => {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error('useGym must be used within a GymProvider');
  }
  return context;
};
