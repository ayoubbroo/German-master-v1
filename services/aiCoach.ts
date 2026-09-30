/**
 * AI German Coach — architecture only.
 *
 * This service defines the contract for an optional AI coaching
 * feature (conversation practice, mistake correction, grammar
 * explanations, translation). It intentionally contains NO API key
 * and NO hardcoded endpoint secret — per the project's security
 * requirements, credentials must never live in the mobile bundle.
 *
 * To wire this up for real:
 *   1. Stand up a small backend (Cloudflare Worker, Vercel Edge
 *      Function, etc.) that holds the real Anthropic/OpenAI API key
 *      as a server-side environment variable.
 *   2. Point AI_COACH_ENDPOINT (below) at that backend via an Expo
 *      public env var: EXPO_PUBLIC_AI_COACH_ENDPOINT.
 *   3. Implement the corresponding request handler server-side.
 *
 * Until that backend exists, every method below resolves to
 * `available: false` so the rest of the app (which is fully
 * offline-first) keeps working normally — the Coach entry point
 * should simply show a "coming soon" / "unavailable" state.
 */

const AI_COACH_ENDPOINT = process.env.EXPO_PUBLIC_AI_COACH_ENDPOINT ?? "";

export interface CoachMessage {
  role: "user" | "coach";
  text: string;
}

export interface CoachResponse {
  available: boolean;
  reply?: string;
  correction?: string;
  explanationAr?: string;
  explanationFr?: string;
  error?: string;
}

async function callCoachBackend(
  path: string,
  body: Record<string, unknown>
): Promise<CoachResponse> {
  if (!AI_COACH_ENDPOINT) {
    return { available: false, error: "AI Coach backend not configured." };
  }
  try {
    const res = await fetch(`${AI_COACH_ENDPOINT}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return { available: false, error: `Backend error: ${res.status}` };
    }
    const data = await res.json();
    return { available: true, ...data };
  } catch (err) {
    return { available: false, error: "Network error contacting AI Coach." };
  }
}

export function chatWithCoach(
  history: CoachMessage[],
  newMessage: string
): Promise<CoachResponse> {
  return callCoachBackend("/chat", { history, newMessage });
}

export function correctMistake(sentence: string): Promise<CoachResponse> {
  return callCoachBackend("/correct", { sentence });
}

export function explainGrammar(
  question: string,
  targetLanguage: "ar" | "fr"
): Promise<CoachResponse> {
  return callCoachBackend("/explain", { question, targetLanguage });
}

export function translate(
  text: string,
  direction: "de_to_native" | "native_to_de",
  targetLanguage: "ar" | "fr"
): Promise<CoachResponse> {
  return callCoachBackend("/translate", { text, direction, targetLanguage });
}

export function isAiCoachConfigured(): boolean {
  return AI_COACH_ENDPOINT.length > 0;
}
