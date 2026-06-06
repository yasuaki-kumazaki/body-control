export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Step {
  id: string;
  description: string;
  targetReps?: number;
  targetDuration?: number;
  isCompleted: boolean;
}

export interface AutoAdvance {
  threshold: number;
  sessionsRequired: number;
  consecutiveCount: number;
  pendingAdvance: boolean;
}

export interface Skill {
  id: string;
  name: string;
  steps: Step[];
  currentStepIndex: number;
  autoAdvance: AutoAdvance | null;
}

export interface Goal {
  id: string;
  name: string;
  skill: Skill;
}

export interface SkillStepLink {
  skillId: string;
  stepIndex: number;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps?: number;
  duration?: number;
  restSeconds: number;
  unit: "reps" | "seconds" | "reps_per_leg" | "seconds_per_leg";
  tagId: string;
  skillStepLink?: SkillStepLink;
  alternatives: string[];
  minReps?: number;
}

export interface Workout {
  id: string;
  name: string;
  color: string;
  exercises: Exercise[];
}

export interface Program {
  id: string;
  name: string;
  workouts: Workout[];
}

export interface Plan {
  id: string;
  name: string;
  isActive: boolean;
  goals: Goal[];
  program: Program;
}

export interface LoggedExercise {
  exerciseId: string;
  name: string;
  sets: number[];
  note?: string;
}

export interface Session {
  id: string;
  timestamp: number;
  planId: string;
  workoutId: string;
  loggedExercises: LoggedExercise[];
}

export interface AppData {
  plans: Plan[];
  tags: Tag[];
  sessions: Session[];
}
