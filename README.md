# German Master 🇩🇪

Application mobile Expo/React Native/TypeScript pour apprendre l'allemand de zéro jusqu'au niveau B2, avec un fonctionnement 100% hors-ligne pour l'expérience d'apprentissage principale.

## État actuel du contenu

| Niveau | Leçons | Statut |
|---|---|---|
| A1 | 30 / 30 | ✅ Contenu pédagogique complet |
| A2 | 0 / 30 | 🚧 À venir |
| B1 | 0 / 30 | 🚧 À venir |
| B2 | 0 / 30 | 🚧 À venir |

L'**architecture complète de l'application** (navigation, écrans, moteur XP/streak/SRS, composants, thème, i18n AR/FR/EN, RTL) est déjà 100% fonctionnelle et prête pour tous les niveaux — il suffit d'ajouter les fichiers de données `data/vocabulary/a2.ts`, `data/lessons/a2.ts`, etc. en suivant exactement le même modèle que les fichiers `*/a1.ts`, puis de les importer dans `data/index.ts`.

## Démarrage rapide

```bash
npm install
npx expo start
```

Scanne le QR code avec l'app Expo Go, ou lance sur un émulateur :

```bash
npm run android
npm run ios
```

## Vérifications qualité

```bash
npx tsc --noEmit
npx expo doctor
npx expo config --type public
```

## Build Android (APK)

1. Installe EAS CLI : `npm install -g eas-cli`
2. Connecte-toi : `eas login`
3. Configure le projet : `eas build:configure` (renseigne ton `projectId` dans `app.json` → `extra.eas.projectId`)
4. Lance le build :

```bash
eas build --platform android --profile preview
```

Cela génère un `.apk` installable directement (profil `preview`). Le profil `production` génère un `.aab` pour le Play Store.

## GitHub Actions

Le workflow `.github/workflows/build.yml` build automatiquement l'APK à chaque push sur `main`. Il te faut ajouter un secret **`EXPO_TOKEN`** dans les paramètres du dépôt GitHub (Settings → Secrets and variables → Actions), généré via `eas whoami` / le dashboard Expo.

## Architecture

```
app/                    # Écrans (Expo Router — file-based routing)
  onboarding/           # Flux d'accueil (7 écrans)
  (tabs)/                # Home, Learn, Vocabulary, Progress, Profile
  lesson/[id].tsx        # Écran de leçon complet (7 étapes)
  conversation/[id].tsx  # Simulateur de conversation
  review.tsx             # Révision intelligente (SRS)
  express.tsx             # 10 MIN EXPRESS
  achievements.tsx / settings.tsx / search.tsx
components/             # UI réutilisable (GlassCard, GradientButton, ExerciseRenderer...)
data/                   # Contenu pédagogique séparé de l'UI
  vocabulary/a1.ts       # 137 mots A1
  grammar/a1.ts           # 10 sujets de grammaire A1
  lessons/a1.ts            # 30 leçons complètes A1
  conversations/a1.ts      # 4 scénarios de conversation
hooks/useAppStore.tsx    # État global (Context + AsyncStorage)
lib/                    # xpEngine, streakEngine, srsEngine, i18n, theme
services/                # storage, aiCoach (architecture), notifications
types/index.ts            # Tous les types du domaine
```

## Sécurité

Aucune clé API n'est codée en dur. Le coach IA (`services/aiCoach.ts`) est une architecture prête à être branchée sur un backend externe qui détient la vraie clé — voir `.env.example`.

## Ce qui reste à faire pour un lancement complet

- [ ] Ajouter le contenu A2 / B1 / B2 (suivre le modèle A1)
- [ ] Fournir de vrais fichiers audio (l'architecture TTS via `expo-speech` fonctionne déjà comme fallback)
- [ ] Générer les icônes/splash réels dans `assets/` (actuellement référencés mais non fournis)
- [ ] Remplacer `REPLACE_WITH_YOUR_EAS_PROJECT_ID` et `REPLACE_WITH_YOUR_EXPO_ACCOUNT` dans `app.json`
- [ ] Tester sur appareil physique Android/iOS
