import { VocabItem, GrammarTopic, Lesson, ConversationScenario, Level } from "@/types";
import { A1_VOCABULARY } from "./vocabulary/a1";
import { A1_GRAMMAR } from "./grammar/a1";
import { A1_LESSONS } from "./lessons/a1";
import { A1_CONVERSATIONS } from "./conversations/a1";

// NOTE: A2 / B1 / B2 datasets follow the exact same file pattern
// (data/vocabulary/a2.ts, data/lessons/a2.ts, etc.) and are added here
// as they are built out. The app, hooks and screens below are already
// fully wired to support all four levels — only the data files need
// to be dropped in.

export const ALL_VOCABULARY: VocabItem[] = [...A1_VOCABULARY];
export const ALL_GRAMMAR: GrammarTopic[] = [...A1_GRAMMAR];
export const ALL_LESSONS: Lesson[] = [...A1_LESSONS];
export const ALL_CONVERSATIONS: ConversationScenario[] = [...A1_CONVERSATIONS];

export function getLessonsByLevel(level: Level): Lesson[] {
  return ALL_LESSONS.filter((l) => l.level === level).sort(
    (a, b) => a.order - b.order
  );
}

export function getLessonIdsByLevel(): Record<Level, string[]> {
  return {
    A1: getLessonsByLevel("A1").map((l) => l.id),
    A2: getLessonsByLevel("A2").map((l) => l.id),
    B1: getLessonsByLevel("B1").map((l) => l.id),
    B2: getLessonsByLevel("B2").map((l) => l.id),
  };
}

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getVocabById(id: string): VocabItem | undefined {
  return ALL_VOCABULARY.find((v) => v.id === id);
}

export function getVocabByIds(ids: string[]): VocabItem[] {
  return ids.map(getVocabById).filter((v): v is VocabItem => Boolean(v));
}

export function getGrammarById(id: string): GrammarTopic | undefined {
  return ALL_GRAMMAR.find((g) => g.id === id);
}

export function getGrammarByIds(ids: string[]): GrammarTopic[] {
  return ids.map(getGrammarById).filter((g): g is GrammarTopic => Boolean(g));
}

export function getConversationById(
  id: string
): ConversationScenario | undefined {
  return ALL_CONVERSATIONS.find((c) => c.id === id);
}

export function searchContent(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return { vocab: [], grammar: [], lessons: [] };
  return {
    vocab: ALL_VOCABULARY.filter(
      (v) =>
        v.german.toLowerCase().includes(q) ||
        v.arabic.includes(q) ||
        v.french.toLowerCase().includes(q)
    ).slice(0, 20),
    grammar: ALL_GRAMMAR.filter(
      (g) =>
        g.title.de.toLowerCase().includes(q) ||
        g.title.fr.toLowerCase().includes(q) ||
        g.title.ar.includes(q)
    ).slice(0, 10),
    lessons: ALL_LESSONS.filter(
      (l) =>
        l.title.de.toLowerCase().includes(q) ||
        l.title.fr.toLowerCase().includes(q) ||
        l.title.ar.includes(q)
    ).slice(0, 10),
  };
}
