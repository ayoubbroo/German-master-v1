import { Achievement } from "@/types";

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first_word", icon: "book-outline", title: { ar: "أول كلمة", fr: "Premier mot" }, description: { ar: "تعلّمت أول كلمة ألمانية لك", fr: "Tu as appris ton premier mot allemand" } },
  { id: "first_lesson", icon: "school-outline", title: { ar: "أول درس", fr: "Première leçon" }, description: { ar: "أكملت أول درس لك", fr: "Tu as terminé ta première leçon" } },
  { id: "first_conversation", icon: "chatbubbles-outline", title: { ar: "أول محادثة", fr: "Première conversation" }, description: { ar: "أكملت أول محادثة تفاعلية", fr: "Tu as terminé ta première conversation" } },
  { id: "streak_7", icon: "flame-outline", title: { ar: "سلسلة ٧ أيام", fr: "Série de 7 jours" }, description: { ar: "تعلمت لمدة ٧ أيام متتالية", fr: "Tu as appris 7 jours d'affilée" } },
  { id: "streak_30", icon: "flame", title: { ar: "سلسلة ٣٠ يوماً", fr: "Série de 30 jours" }, description: { ar: "تعلمت لمدة ٣٠ يوماً متتالياً", fr: "Tu as appris 30 jours d'affilée" } },
  { id: "words_100", icon: "library-outline", title: { ar: "١٠٠ كلمة", fr: "100 mots" }, description: { ar: "تعلمت ١٠٠ كلمة ألمانية", fr: "Tu as appris 100 mots allemands" } },
  { id: "words_500", icon: "library", title: { ar: "٥٠٠ كلمة", fr: "500 mots" }, description: { ar: "تعلمت ٥٠٠ كلمة ألمانية", fr: "Tu as appris 500 mots allemands" } },
  { id: "words_1000", icon: "trophy-outline", title: { ar: "١٠٠٠ كلمة", fr: "1000 mots" }, description: { ar: "تعلمت ١٠٠٠ كلمة ألمانية", fr: "Tu as appris 1000 mots allemands" } },
  { id: "a1_complete", icon: "ribbon-outline", title: { ar: "إتمام المستوى A1", fr: "Niveau A1 terminé" }, description: { ar: "أكملت جميع دروس المستوى A1", fr: "Tu as terminé toutes les leçons du niveau A1" } },
  { id: "a2_complete", icon: "ribbon-outline", title: { ar: "إتمام المستوى A2", fr: "Niveau A2 terminé" }, description: { ar: "أكملت جميع دروس المستوى A2", fr: "Tu as terminé toutes les leçons du niveau A2" } },
  { id: "b1_complete", icon: "ribbon", title: { ar: "إتمام المستوى B1", fr: "Niveau B1 terminé" }, description: { ar: "أكملت جميع دروس المستوى B1", fr: "Tu as terminé toutes les leçons du niveau B1" } },
  { id: "b2_complete", icon: "ribbon", title: { ar: "إتمام المستوى B2", fr: "Niveau B2 terminé" }, description: { ar: "أكملت جميع دروس المستوى B2", fr: "Tu as terminé toutes les leçons du niveau B2" } },
  { id: "language_master", icon: "trophy", title: { ar: "إتقان اللغة", fr: "Maître de la langue" }, description: { ar: "أكملت جميع المستويات من A1 إلى B2", fr: "Tu as terminé tous les niveaux de A1 à B2" } },
];
