// ============================================================
// GERMAN MASTER — CORE DOMAIN TYPES
// ============================================================

export type Level = "A1" | "A2" | "B1" | "B2";

export type InterfaceLanguage = "ar" | "fr" | "en";

export type LearningGoal =
  | "daily_life"
  | "travel"
  | "work"
  | "study"
  | "living_in_germany";

export type DailyGoalMinutes = 10 | 15 | 20 | 30;

// ---------- Onboarding / User ----------

export interface UserProfile {
  name: string;
  interfaceLanguage: InterfaceLanguage;
  currentLevel: Level;
  startingLevel: Level | "complete_beginner";
  learningGoal: LearningGoal;
  dailyGoalMinutes: DailyGoalMinutes;
  onboardingCompleted: boolean;
  createdAt: string; // ISO date
}

// ---------- Vocabulary ----------

export type VocabCategory =
  | "food"
  | "travel"
  | "work"
  | "home"
  | "shopping"
  | "health"
  | "transport"
  | "family"
  | "daily_life"
  | "administration"
  | "education"
  | "technology"
  | "money"
  | "weather"
  | "jobs"
  | "communication";

export interface VocabItem {
  id: string;
  german: string;
  article?: "der" | "die" | "das"; // for nouns
  plural?: string;
  arabic: string;
  french: string;
  pronunciation: string; // simplified phonetic guide
  exampleSentence: {
    de: string;
    ar: string;
    fr: string;
  };
  level: Level;
  category: VocabCategory;
}

// SRS (Spaced Repetition System) status per-word, stored in AsyncStorage
export type SrsStatus = "NEW" | "LEARNING" | "REVIEW" | "MASTERED";

export interface VocabProgressEntry {
  vocabId: string;
  status: SrsStatus;
  timesCorrect: number;
  timesIncorrect: number;
  lastReviewedAt: string | null; // ISO
  nextDueAt: string | null; // ISO
  intervalDays: number;
  isFavorite: boolean;
}

// ---------- Grammar ----------

export interface GrammarTopic {
  id: string;
  title: { de: string; ar: string; fr: string };
  level: Level;
  order: number;
  explanation: {
    ar: string;
    fr: string;
  };
  examples: Array<{ de: string; ar: string; fr: string }>;
}

// ---------- Exercises ----------

export type ExerciseType =
  | "multiple_choice"
  | "fill_blank"
  | "matching"
  | "translation"
  | "sentence_order"
  | "choose_response"
  | "listen_choose";

export interface MultipleChoiceExercise {
  type: "multiple_choice";
  id: string;
  prompt: { de?: string; ar: string; fr: string };
  options: string[];
  correctIndex: number;
  explanation?: { ar: string; fr: string };
}

export interface FillBlankExercise {
  type: "fill_blank";
  id: string;
  sentenceWithBlank: string; // uses ___ for blank
  correctAnswer: string;
  hint?: { ar: string; fr: string };
}

export interface MatchingExercise {
  type: "matching";
  id: string;
  pairs: Array<{ german: string; translation: string }>;
}

export interface TranslationExercise {
  type: "translation";
  id: string;
  direction: "de_to_native" | "native_to_de";
  sourceText: string;
  acceptedAnswers: string[];
}

export interface SentenceOrderExercise {
  type: "sentence_order";
  id: string;
  words: string[]; // shuffled by UI
  correctOrder: string[];
}

export interface ChooseResponseExercise {
  type: "choose_response";
  id: string;
  situation: { de: string; ar: string; fr: string };
  options: Array<{ text: string; correct: boolean }>;
}

export interface ListenChooseExercise {
  type: "listen_choose";
  id: string;
  audioText: string; // text to be synthesized/played
  options: string[];
  correctIndex: number;
}

export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | MatchingExercise
  | TranslationExercise
  | SentenceOrderExercise
  | ChooseResponseExercise
  | ListenChooseExercise;

// ---------- Conversation ----------

export interface ConversationNode {
  id: string;
  speaker: "npc" | "user_choice";
  npcLine?: { de: string; ar: string; fr: string };
  choices?: Array<{
    id: string;
    de: string;
    ar: string;
    fr: string;
    nextNodeId: string | null; // null = end of conversation
    xp?: number;
  }>;
}

export interface ConversationScenario {
  id: string;
  title: { de: string; ar: string; fr: string };
  level: Level;
  setting: string; // e.g. "restaurant", "job_interview"
  startNodeId: string;
  nodes: ConversationNode[];
  xpReward: number;
}

// ---------- Lessons ----------

export interface LessonSituation {
  title: { de: string; ar: string; fr: string };
  description: { ar: string; fr: string };
}

export interface Lesson {
  id: string; // e.g. "a1-01"
  level: Level;
  order: number;
  topicKey: string; // e.g. "greetings"
  title: { de: string; ar: string; fr: string };
  estimatedMinutes: number;
  xpReward: number;
  situation: LessonSituation;
  objectives: { ar: string[]; fr: string[] };
  vocabIds: string[]; // references VocabItem.id
  grammarTopicIds: string[]; // references GrammarTopic.id
  listeningText: string; // text used for TTS/audio placeholder
  speakingPrompts: string[]; // phrases user should repeat
  exercises: Exercise[];
  conversationScenarioId: string | null;
  practicalMission: { ar: string; fr: string };
  reviewNote: { ar: string; fr: string };
}

// ---------- Progress / XP / Streak ----------

export interface LessonProgressEntry {
  lessonId: string;
  completed: boolean;
  completedAt: string | null;
  bestScorePercent: number;
  attempts: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastLearningDate: string | null; // YYYY-MM-DD
}

export interface XpData {
  totalXp: number;
  xpLevel: number;
  xpToNextLevel: number;
}

export interface DailyActivityEntry {
  date: string; // YYYY-MM-DD
  minutesSpent: number;
  xpEarned: number;
  goalMet: boolean;
}

// ---------- Achievements ----------

export type AchievementId =
  | "first_word"
  | "first_lesson"
  | "first_conversation"
  | "streak_7"
  | "streak_30"
  | "words_100"
  | "words_500"
  | "words_1000"
  | "a1_complete"
  | "a2_complete"
  | "b1_complete"
  | "b2_complete"
  | "language_master";

export interface Achievement {
  id: AchievementId;
  icon: string; // icon name (Ionicons)
  title: { ar: string; fr: string };
  description: { ar: string; fr: string };
}

export interface AchievementProgress {
  id: AchievementId;
  unlocked: boolean;
  unlockedAt: string | null;
}

// ---------- App-wide persisted state shape ----------

export interface AppState {
  profile: UserProfile | null;
  xp: XpData;
  streak: StreakData;
  lessonProgress: Record<string, LessonProgressEntry>;
  vocabProgress: Record<string, VocabProgressEntry>;
  achievements: Record<AchievementId, AchievementProgress>;
  dailyActivity: DailyActivityEntry[];
  conversationsCompleted: string[];
  settings: {
    notificationsEnabled: boolean;
    soundEnabled: boolean;
    darkMode: true; // app is dark-only in v1
  };
}
