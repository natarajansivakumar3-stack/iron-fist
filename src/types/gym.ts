export type PhysiqueTier = 'beginner' | 'intermediate' | 'athletic' | 'v-taper';
export type Gender = 'male' | 'female' | 'other';
export type FitnessGoal = 'weightloss' | 'weightgain' | 'fatloss';

export interface Exercise {
  id: string;
  name: string;
  targetMuscle: string; // e.g. "Upper Pectoralis Major (Clavicular Head)"
  muscleGroup: 'chest' | 'triceps' | 'back' | 'biceps' | 'shoulders' | 'legs' | 'abs';
  defaultSets: number;
  defaultReps: string; // e.g. "8-12 reps"
  tempo: string; // e.g. "3-0-1-0"
  restSeconds: number;
  formCue: string;
  egoWarning: string;
  femaleNote?: string;
  equipment: string;
}

export interface MuscleVariationPool {
  poolIndex: number;
  poolName: string; // e.g., "Variation A: Heavy Barbell & Power", "Variation B: Dumbbell & Cable Hypertrophy", "Variation C: Isolation & Mechanical Tension"
  exercises: Exercise[];
}

export interface DayWorkoutPlan {
  id: 'day1' | 'day2' | 'day3a' | 'day3b';
  title: string;
  subtitle: string;
  muscleGroups: {
    name: string;
    key: 'chest' | 'triceps' | 'back' | 'biceps' | 'shoulders' | 'legs' | 'abs';
    pools: MuscleVariationPool[]; // At least 3 types of 5 workout variations
  }[];
}

export interface LoggedSet {
  setNumber: number;
  weightKg: number;
  reps: number;
  completed: boolean;
}

export interface WorkoutLogEntry {
  id: string;
  date: string; // YYYY-MM-DD
  dayOfWeek: string; // e.g. "Monday"
  weekNumber: number; // e.g. Week 3
  month: string; // e.g. "October 2026"
  splitId: string;
  splitTitle: string;
  exercisesCompleted: {
    exerciseName: string;
    muscleName: string;
    setsLogged: LoggedSet[];
  }[];
  durationMinutes: number;
  totalVolumeKg: number;
  notes?: string;
}

export interface MealItem {
  name: string;
  portion: string;
  calories: number;
  proteinG?: number;
  protein?: number;
  carbsG?: number;
  carbs?: number;
  fatsG?: number;
  fats?: number;
  recipeNote: string;
}

export interface DayDietPlan {
  dayNumber: number; // Day 1 to Day 7
  dayName: string; // e.g. "Day 1: High Energy Kickoff"
  theme: string;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  flowchartNodes: {
    step: number;
    mealType: 'Breakfast' | 'Mid-Morning Snack' | 'Lunch' | 'Pre-Workout Meal' | 'Post-Workout Fuel' | 'Dinner' | 'Bedtime Recovery';
    time: string;
    headline: string;
    meals: MealItem[];
    anabolicPurpose: string;
  }[];
}

export interface MonthlyPhotoRecord {
  id: string;
  month: string; // e.g., "Month 1 - Oct 2026"
  date: string;
  imageUrl: string;
  weightKg: number;
  status: 'improved' | 'plateau' | 'lagging_muscle';
  laggingMuscles?: string[];
  feedbackNotes: string;
  coachMotivation: string;
}

export interface UserProfile {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl?: string;
  gender: Gender;
  age: number;
  weightKg: number;
  targetWeightKg: number;
  physiqueTier: PhysiqueTier;
  goal: FitnessGoal;
  dailyWaterTargetMl: number;
  dailyCalorieTarget: number;
  completedDaysCount: number;
  streakDays: number;
}
