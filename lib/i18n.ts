import { InterfaceLanguage } from "@/types";

// Minimal, dependency-light i18n system. Each UI string key maps to
// its three supported interface languages. Lesson/vocab content uses
// its own {de, ar, fr} shape defined directly in the data types —
// this file is only for chrome/UI strings (buttons, labels, nav).

export const translations: Record<string, Record<InterfaceLanguage, string>> = {
  // Onboarding
  welcome_title: { ar: "مرحباً بك في German Master", fr: "Bienvenue sur German Master", en: "Welcome to German Master" },
  welcome_subtitle: { ar: "رحلتك لإتقان الألمانية تبدأ هنا", fr: "Ton parcours vers la maîtrise de l'allemand commence ici", en: "Your journey to German mastery starts here" },
  get_started: { ar: "ابدأ الآن", fr: "Commencer", en: "Get Started" },
  choose_language: { ar: "اختر لغة الواجهة", fr: "Choisis la langue de l'interface", en: "Choose interface language" },
  your_name: { ar: "ما اسمك؟", fr: "Quel est ton nom ?", en: "What's your name?" },
  continue: { ar: "متابعة", fr: "Continuer", en: "Continue" },
  your_level: { ar: "ما مستواك الحالي؟", fr: "Quel est ton niveau actuel ?", en: "What's your current level?" },
  complete_beginner: { ar: "مبتدئ تماماً", fr: "Débutant complet", en: "Complete beginner" },
  your_goal: { ar: "ما هدفك من تعلم الألمانية؟", fr: "Quel est ton objectif ?", en: "What's your learning goal?" },
  goal_daily_life: { ar: "الحياة اليومية", fr: "Vie quotidienne", en: "Daily life" },
  goal_travel: { ar: "السفر", fr: "Voyage", en: "Travel" },
  goal_work: { ar: "العمل", fr: "Travail", en: "Work" },
  goal_study: { ar: "الدراسة", fr: "Études", en: "Study" },
  goal_living_de: { ar: "العيش في ألمانيا", fr: "Vivre en Allemagne", en: "Living in Germany" },
  daily_goal_title: { ar: "كم دقيقة تريد التعلم يومياً؟", fr: "Combien de minutes par jour ?", en: "Daily learning goal" },
  start_learning: { ar: "ابدأ التعلم", fr: "Commencer à apprendre", en: "Start Learning" },

  // Home
  greeting_morning: { ar: "صباح الخير", fr: "Bonjour", en: "Good morning" },
  greeting_afternoon: { ar: "مساء الخير", fr: "Bon après-midi", en: "Good afternoon" },
  greeting_evening: { ar: "مساء الخير", fr: "Bonsoir", en: "Good evening" },
  todays_lesson: { ar: "درس اليوم", fr: "Leçon du jour", en: "Today's Lesson" },
  start_lesson: { ar: "ابدأ درس اليوم", fr: "Commencer la leçon", en: "START TODAY'S LESSON" },
  express_10min: { ar: "تدريب سريع ١٠ دقائق", fr: "Express 10 min", en: "10 MIN EXPRESS" },
  smart_review: { ar: "المراجعة الذكية", fr: "Révision intelligente", en: "SMART REVIEW" },
  conversation: { ar: "محادثة", fr: "Conversation", en: "CONVERSATION" },
  streak: { ar: "سلسلة الأيام", fr: "Série", en: "Streak" },
  words_learned: { ar: "الكلمات المتعلمة", fr: "Mots appris", en: "Words Learned" },
  lessons_completed: { ar: "الدروس المكتملة", fr: "Leçons terminées", en: "Lessons Completed" },

  // Tabs
  tab_home: { ar: "الرئيسية", fr: "Accueil", en: "Home" },
  tab_learn: { ar: "التعلم", fr: "Apprendre", en: "Learn" },
  tab_vocabulary: { ar: "المفردات", fr: "Vocabulaire", en: "Vocabulary" },
  tab_progress: { ar: "التقدم", fr: "Progrès", en: "Progress" },
  tab_profile: { ar: "الملف الشخصي", fr: "Profil", en: "Profile" },

  // Lesson
  vocabulary: { ar: "المفردات", fr: "Vocabulaire", en: "Vocabulary" },
  grammar: { ar: "القواعد", fr: "Grammaire", en: "Grammar" },
  listening: { ar: "الاستماع", fr: "Écoute", en: "Listening" },
  exercises: { ar: "التمارين", fr: "Exercices", en: "Exercises" },
  practical_mission: { ar: "مهمة عملية", fr: "Mission pratique", en: "Practical Mission" },
  lesson_complete: { ar: "أكملت الدرس!", fr: "Leçon terminée !", en: "Lesson Complete!" },
  next: { ar: "التالي", fr: "Suivant", en: "Next" },
  check: { ar: "تحقق", fr: "Vérifier", en: "Check" },
  correct: { ar: "إجابة صحيحة!", fr: "Correct !", en: "Correct!" },
  incorrect: { ar: "حاول مرة أخرى", fr: "Réessaie", en: "Try again" },

  // Progress / Profile
  achievements: { ar: "الإنجازات", fr: "Succès", en: "Achievements" },
  settings: { ar: "الإعدادات", fr: "Paramètres", en: "Settings" },
  reset_progress: { ar: "إعادة تعيين التقدم", fr: "Réinitialiser la progression", en: "Reset Progress" },
  search: { ar: "بحث", fr: "Rechercher", en: "Search" },
};

export function t(key: string, lang: InterfaceLanguage): string {
  return translations[key]?.[lang] ?? key;
}

export function isRTL(lang: InterfaceLanguage): boolean {
  return lang === "ar";
}
