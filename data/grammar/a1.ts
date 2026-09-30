import { GrammarTopic } from "@/types";

export const A1_GRAMMAR: GrammarTopic[] = [
  {
    id: "g-a1-sein",
    title: { de: "sein (être)", ar: "الفعل sein (يكون)", fr: "Le verbe sein (être)" },
    level: "A1",
    order: 1,
    explanation: {
      ar: "الفعل sein هو فعل \"يكون\" باللغة الألمانية، وهو فعل غير منتظم يجب حفظ تصريفاته: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
      fr: "Le verbe sein signifie « être » en allemand. C'est un verbe irrégulier dont les formes doivent être mémorisées : ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.",
    },
    examples: [
      { de: "Ich bin müde.", ar: "أنا متعب.", fr: "Je suis fatigué." },
      { de: "Du bist nett.", ar: "أنت لطيف.", fr: "Tu es gentil." },
      { de: "Wir sind hier.", ar: "نحن هنا.", fr: "Nous sommes ici." },
    ],
  },
  {
    id: "g-a1-haben",
    title: { de: "haben (avoir)", ar: "الفعل haben (يملك)", fr: "Le verbe haben (avoir)" },
    level: "A1",
    order: 2,
    explanation: {
      ar: "الفعل haben يعني \"يملك\" ويُستخدم كثيراً في الجمل اليومية: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
      fr: "Le verbe haben signifie « avoir » et est très fréquent : ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
    },
    examples: [
      { de: "Ich habe einen Bruder.", ar: "لدي أخ.", fr: "J'ai un frère." },
      { de: "Hast du Zeit?", ar: "هل لديك وقت؟", fr: "As-tu du temps ?" },
    ],
  },
  {
    id: "g-a1-pronomen",
    title: { de: "Personalpronomen", ar: "ضمائر الشخص", fr: "Les pronoms personnels" },
    level: "A1",
    order: 3,
    explanation: {
      ar: "الضمائر الشخصية: ich (أنا), du (أنت), er (هو), sie (هي), es (هو/هي لغير العاقل), wir (نحن), ihr (أنتم), sie/Sie (هم / أنتم بصيغة الاحترام).",
      fr: "Les pronoms personnels : ich (je), du (tu), er (il), sie (elle), es (il/elle neutre), wir (nous), ihr (vous, familier pluriel), sie/Sie (ils/elles, vous de politesse).",
    },
    examples: [
      { de: "Ich lerne Deutsch. Du sprichst gut.", ar: "أنا أتعلم الألمانية. أنت تتحدث جيداً.", fr: "J'apprends l'allemand. Tu parles bien." },
    ],
  },
  {
    id: "g-a1-artikel",
    title: { de: "Artikel: der, die, das", ar: "أدوات التعريف: der, die, das", fr: "Les articles : der, die, das" },
    level: "A1",
    order: 4,
    explanation: {
      ar: "لكل اسم ألماني جنس نحوي: der (مذكر), die (مؤنث), das (محايد). يجب حفظ الأداة مع كل كلمة جديدة لأنه لا توجد قاعدة ثابتة دائماً.",
      fr: "Chaque nom allemand a un genre grammatical : der (masculin), die (féminin), das (neutre). Il faut apprendre l'article avec chaque nouveau mot, car il n'y a pas toujours de règle fixe.",
    },
    examples: [
      { de: "der Mann, die Frau, das Kind", ar: "الرجل، المرأة، الطفل", fr: "l'homme, la femme, l'enfant" },
    ],
  },
  {
    id: "g-a1-praesens",
    title: { de: "Präsens (Gegenwart)", ar: "المضارع", fr: "Le présent" },
    level: "A1",
    order: 5,
    explanation: {
      ar: "لتصريف الفعل في المضارع، نحذف \"en\" من نهاية المصدر ونضيف النهاية المناسبة: -e, -st, -t, -en, -t, -en. مثال: lernen → ich lerne, du lernst, er lernt.",
      fr: "Pour conjuguer au présent, on retire « en » à la fin de l'infinitif et on ajoute la terminaison : -e, -st, -t, -en, -t, -en. Exemple : lernen → ich lerne, du lernst, er lernt.",
    },
    examples: [
      { de: "Ich wohne in Rabat. Er arbeitet viel.", ar: "أنا أسكن في الرباط. هو يعمل كثيراً.", fr: "J'habite à Rabat. Il travaille beaucoup." },
    ],
  },
  {
    id: "g-a1-wortstellung",
    title: { de: "Wortstellung (Satzbau)", ar: "ترتيب الكلمات في الجملة", fr: "L'ordre des mots" },
    level: "A1",
    order: 6,
    explanation: {
      ar: "في الجملة الألمانية الخبرية، يأتي الفعل المصرّف دائماً في المرتبة الثانية، بغض النظر عن ما يسبقه. مثال: Heute (1) lerne (2) ich Deutsch.",
      fr: "Dans une phrase déclarative allemande, le verbe conjugué occupe toujours la deuxième position, quel que soit l'élément qui le précède. Exemple : Heute (1) lerne (2) ich Deutsch.",
    },
    examples: [
      { de: "Ich lerne heute Deutsch. Heute lerne ich Deutsch.", ar: "أنا أتعلم الألمانية اليوم. اليوم أتعلم الألمانية.", fr: "J'apprends l'allemand aujourd'hui. Aujourd'hui, j'apprends l'allemand." },
    ],
  },
  {
    id: "g-a1-fragen",
    title: { de: "W-Fragen und Ja/Nein-Fragen", ar: "أسئلة الاستفهام والأسئلة بنعم/لا", fr: "Questions ouvertes et fermées" },
    level: "A1",
    order: 7,
    explanation: {
      ar: "أسئلة W تبدأ بكلمة استفهام (was, wer, wo, wann, wie) يليها الفعل. أسئلة نعم/لا تبدأ مباشرة بالفعل المصرّف.",
      fr: "Les questions en W commencent par un mot interrogatif (was, wer, wo, wann, wie) suivi du verbe. Les questions oui/non commencent directement par le verbe conjugué.",
    },
    examples: [
      { de: "Wo wohnst du? Kommst du morgen?", ar: "أين تسكن؟ هل ستأتي غداً؟", fr: "Où habites-tu ? Viens-tu demain ?" },
    ],
  },
  {
    id: "g-a1-negation",
    title: { de: "Negation: nicht / kein", ar: "النفي: nicht / kein", fr: "La négation : nicht / kein" },
    level: "A1",
    order: 8,
    explanation: {
      ar: "نستخدم \"kein\" لنفي الأسماء المسبوقة بأداة نكرة أو بدون أداة، ونستخدم \"nicht\" لنفي الأفعال والصفات والأسماء المعرّفة.",
      fr: "On utilise « kein » pour nier un nom précédé d'un article indéfini ou sans article, et « nicht » pour nier les verbes, adjectifs et noms définis.",
    },
    examples: [
      { de: "Ich habe kein Auto. Ich verstehe das nicht.", ar: "ليس لدي سيارة. لا أفهم هذا.", fr: "Je n'ai pas de voiture. Je ne comprends pas ça." },
    ],
  },
  {
    id: "g-a1-akkusativ",
    title: { de: "Akkusativ (Grundlagen)", ar: "أساسيات حالة النصب Akkusativ", fr: "Les bases de l'accusatif" },
    level: "A1",
    order: 9,
    explanation: {
      ar: "حالة النصب تُستخدم للمفعول به المباشر. الأداة der تتحول إلى den في حالة النصب للمذكر فقط: Ich sehe den Mann.",
      fr: "L'accusatif s'utilise pour le complément d'objet direct. L'article der devient den à l'accusatif, uniquement pour le masculin : Ich sehe den Mann.",
    },
    examples: [
      { de: "Ich kaufe einen Apfel. Er trinkt den Kaffee.", ar: "أشتري تفاحة. هو يشرب القهوة.", fr: "J'achète une pomme. Il boit le café." },
    ],
  },
  {
    id: "g-a1-modalverben",
    title: { de: "Modalverben: können, müssen, wollen", ar: "أفعال الحال: können, müssen, wollen", fr: "Les verbes de modalité" },
    level: "A1",
    order: 10,
    explanation: {
      ar: "أفعال الحال مثل können (يستطيع), müssen (يجب), wollen (يريد) تُصرَّف بشكل خاص، ويأتي الفعل الأساسي في نهاية الجملة بصيغة المصدر.",
      fr: "Les verbes modaux comme können (pouvoir), müssen (devoir), wollen (vouloir) ont une conjugaison particulière, et le verbe principal se place à la fin de la phrase à l'infinitif.",
    },
    examples: [
      { de: "Ich kann Deutsch sprechen. Ich muss jetzt gehen.", ar: "أستطيع التحدث بالألمانية. يجب أن أذهب الآن.", fr: "Je peux parler allemand. Je dois partir maintenant." },
    ],
  },
];
