import { Lesson } from "@/types";

export const A1_LESSONS: Lesson[] = [
  // ===================== LESSON 1 — Greetings =====================
  {
    id: "a1-01",
    level: "A1",
    order: 1,
    topicKey: "greetings",
    title: { de: "Begrüßungen", ar: "التحيات", fr: "Les salutations" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Der erste Tag in Deutschland", ar: "أول يوم في ألمانيا", fr: "Le premier jour en Allemagne" },
      description: { ar: "وصلت للتو إلى ألمانيا، وتحتاج إلى معرفة كيفية إلقاء التحية على الناس في أوقات مختلفة من اليوم.", fr: "Tu viens d'arriver en Allemagne et tu dois savoir comment saluer les gens à différents moments de la journée." },
    },
    objectives: {
      ar: ["إلقاء التحية في أوقات مختلفة من اليوم", "قول الوداع بطرق مختلفة", "استخدام كلمات الأدب الأساسية"],
      fr: ["Saluer à différents moments de la journée", "Dire au revoir de plusieurs façons", "Utiliser les formules de politesse de base"],
    },
    vocabIds: ["v-a1-001", "v-a1-002", "v-a1-003", "v-a1-004", "v-a1-005", "v-a1-006", "v-a1-007", "v-a1-008"],
    grammarTopicIds: [],
    listeningText: "Guten Morgen! Wie geht's? Guten Tag, Frau Klein. Auf Wiedersehen, bis morgen!",
    speakingPrompts: ["Guten Morgen!", "Guten Tag!", "Auf Wiedersehen!", "Danke schön!"],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-01-ex1",
        prompt: { ar: "ماذا تقول في الصباح؟", fr: "Que dit-on le matin ?" },
        options: ["Guten Abend", "Guten Morgen", "Gute Nacht", "Tschüss"],
        correctIndex: 1,
        explanation: { ar: "نقول Guten Morgen في الصباح فقط.", fr: "On dit Guten Morgen uniquement le matin." },
      },
      {
        type: "matching",
        id: "a1-01-ex2",
        pairs: [
          { german: "Danke", translation: "شكراً / Merci" },
          { german: "Bitte", translation: "من فضلك / S'il vous plaît" },
          { german: "Tschüss", translation: "وداعاً / Salut" },
          { german: "Entschuldigung", translation: "عذراً / Excusez-moi" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-01-ex3",
        sentenceWithBlank: "Guten ___, wie geht's?",
        correctAnswer: "Tag",
        hint: { ar: "تُستخدم خلال النهار", fr: "S'utilise pendant la journée" },
      },
      {
        type: "listen_choose",
        id: "a1-01-ex4",
        audioText: "Auf Wiedersehen, bis morgen!",
        options: ["Guten Morgen, bis morgen!", "Auf Wiedersehen, bis morgen!", "Tschüss, bis heute!"],
        correctIndex: 1,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "حيّ ثلاثة أشخاص اليوم باللغة الألمانية باستخدام تحية مناسبة لوقت اليوم.",
      fr: "Aujourd'hui, salue trois personnes en allemand en utilisant la formule adaptée au moment de la journée.",
    },
    reviewNote: { ar: "راجع هذه الكلمات غداً لتثبيتها في الذاكرة طويلة المدى.", fr: "Révise ces mots demain pour les ancrer en mémoire long terme." },
  },

  // ===================== LESSON 2 — Introducing yourself =====================
  {
    id: "a1-02",
    level: "A1",
    order: 2,
    topicKey: "introducing_yourself",
    title: { de: "Sich vorstellen", ar: "التعريف بالنفس", fr: "Se présenter" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Neue Kollegen kennenlernen", ar: "التعرف على زملاء جدد", fr: "Rencontrer de nouveaux collègues" },
      description: { ar: "في أول يوم عمل، يطلب منك زملاؤك أن تعرّف بنفسك: اسمك، بلدك، وما تتحدثه من لغات.", fr: "Le premier jour au travail, tes collègues te demandent de te présenter : ton nom, ton pays, tes langues." },
    },
    objectives: {
      ar: ["قول اسمك وسؤال الآخرين عن اسمهم", "قول من أين أنت", "التحدث عن اللغات التي تتحدثها"],
      fr: ["Dire son nom et demander celui des autres", "Dire d'où l'on vient", "Parler des langues que l'on parle"],
    },
    vocabIds: ["v-a1-012", "v-a1-013", "v-a1-014", "v-a1-015", "v-a1-016", "v-a1-017", "v-a1-018", "v-a1-019"],
    grammarTopicIds: ["g-a1-sein", "g-a1-pronomen"],
    listeningText: "Hallo, ich heiße Sara. Ich komme aus Marokko. Ich spreche Arabisch, Französisch und ein bisschen Deutsch.",
    speakingPrompts: ["Ich heiße...", "Ich komme aus...", "Ich spreche..."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-02-ex1",
        sentenceWithBlank: "Ich ___ Sara. Ich komme aus Marokko.",
        correctAnswer: "heiße",
        hint: { ar: "فعل \"يُدعى\"", fr: "Le verbe « s'appeler »" },
      },
      {
        type: "multiple_choice",
        id: "a1-02-ex2",
        prompt: { ar: "كيف تسأل شخصاً عن اسمه؟", fr: "Comment demande-t-on le nom de quelqu'un ?" },
        options: ["Wie alt bist du?", "Wie heißt du?", "Woher kommst du?", "Was machst du?"],
        correctIndex: 1,
      },
      {
        type: "translation",
        id: "a1-02-ex3",
        direction: "native_to_de",
        sourceText: "أنا من المغرب. / Je viens du Maroc.",
        acceptedAnswers: ["Ich komme aus Marokko", "Ich komme aus Marokko."],
      },
      {
        type: "sentence_order",
        id: "a1-02-ex4",
        words: ["Ich", "spreche", "Deutsch", "ein bisschen"],
        correctOrder: ["Ich", "spreche", "ein bisschen", "Deutsch"],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اكتب أو قل ثلاث جمل تعرّف فيها بنفسك: اسمك، بلدك، واللغات التي تتحدثها.",
      fr: "Écris ou dis trois phrases pour te présenter : ton nom, ton pays, et les langues que tu parles." ,
    },
    reviewNote: { ar: "احفظ تصريف الفعل sein جيداً، ستحتاجه كثيراً.", fr: "Retiens bien la conjugaison de sein, tu en auras souvent besoin." },
  },

  // ===================== LESSON 3 — Numbers =====================
  {
    id: "a1-03",
    level: "A1",
    order: 3,
    topicKey: "numbers",
    title: { de: "Die Zahlen", ar: "الأرقام", fr: "Les nombres" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Im Café bezahlen", ar: "الدفع في المقهى", fr: "Payer au café" },
      description: { ar: "تحتاج إلى فهم الأرقام لمعرفة الأسعار والدفع في المتاجر والمقاهي.", fr: "Tu dois comprendre les nombres pour connaître les prix et payer dans les magasins et cafés." },
    },
    objectives: {
      ar: ["عد الأرقام من ١ إلى ١٠٠", "فهم الأسعار البسيطة", "سؤال عن السعر"],
      fr: ["Compter de 1 à 100", "Comprendre des prix simples", "Demander un prix"],
    },
    vocabIds: ["v-a1-020", "v-a1-021", "v-a1-022", "v-a1-023", "v-a1-024", "v-a1-025"],
    grammarTopicIds: [],
    listeningText: "Eins, zwei, drei, zehn, zwanzig, hundert. Das kostet zwanzig Euro.",
    speakingPrompts: ["eins, zwei, drei", "zehn Euro", "zwanzig Euro"],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-03-ex1",
        prompt: { ar: "كم هو \"zwanzig\"؟", fr: "Combien vaut « zwanzig » ?" },
        options: ["٢", "١٢", "٢٠", "٢٠٠"],
        correctIndex: 2,
      },
      {
        type: "listen_choose",
        id: "a1-03-ex2",
        audioText: "Das kostet zehn Euro.",
        options: ["Das kostet zehn Euro.", "Das kostet zwanzig Euro.", "Das kostet drei Euro."],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-03-ex3",
        sentenceWithBlank: "Wir sind ___ Personen. (three)",
        correctAnswer: "drei",
      },
      {
        type: "matching",
        id: "a1-03-ex4",
        pairs: [
          { german: "eins", translation: "1" },
          { german: "zehn", translation: "10" },
          { german: "hundert", translation: "100" },
          { german: "zwanzig", translation: "20" },
        ],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرّب على عد الأرقام من ١ إلى ٢٠ بصوت عالٍ ثلاث مرات.",
      fr: "Entraîne-toi à compter de 1 à 20 à voix haute, trois fois.",
    },
    reviewNote: { ar: "الأرقام أساسية لكل المواقف اليومية، تدرب عليها يومياً.", fr: "Les nombres sont essentiels au quotidien, entraîne-toi chaque jour." },
  },

  // ===================== LESSON 4 — Family =====================
  {
    id: "a1-04",
    level: "A1",
    order: 4,
    topicKey: "family",
    title: { de: "Die Familie", ar: "العائلة", fr: "La famille" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Über die Familie sprechen", ar: "الحديث عن العائلة", fr: "Parler de sa famille" },
      description: { ar: "يسألك زميل جديد عن عائلتك: من هم، وكم عددهم.", fr: "Un nouveau collègue te demande de parler de ta famille : qui ils sont et combien vous êtes." },
    },
    objectives: {
      ar: ["تسمية أفراد العائلة", "وصف حجم العائلة", "استخدام الملكية البسيطة (mein/meine)"],
      fr: ["Nommer les membres de la famille", "Décrire la taille de sa famille", "Utiliser le possessif simple (mein/meine)"],
    },
    vocabIds: ["v-a1-026", "v-a1-027", "v-a1-028", "v-a1-029", "v-a1-030", "v-a1-031", "v-a1-032"],
    grammarTopicIds: ["g-a1-artikel"],
    listeningText: "Meine Familie ist groß. Meine Mutter kocht gern. Mein Vater arbeitet viel. Ich habe einen Bruder und eine Schwester.",
    speakingPrompts: ["Meine Familie ist...", "Ich habe einen Bruder.", "Meine Schwester ist..."],
    exercises: [
      {
        type: "matching",
        id: "a1-04-ex1",
        pairs: [
          { german: "die Mutter", translation: "الأم / la mère" },
          { german: "der Vater", translation: "الأب / le père" },
          { german: "der Bruder", translation: "الأخ / le frère" },
          { german: "die Schwester", translation: "الأخت / la sœur" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-04-ex2",
        sentenceWithBlank: "Ich habe einen ___. (frère)",
        correctAnswer: "Bruder",
      },
      {
        type: "multiple_choice",
        id: "a1-04-ex3",
        prompt: { ar: "أي أداة تعريف صحيحة لكلمة Kind؟", fr: "Quel article est correct pour Kind ?" },
        options: ["der Kind", "die Kind", "das Kind"],
        correctIndex: 2,
      },
      {
        type: "translation",
        id: "a1-04-ex4",
        direction: "native_to_de",
        sourceText: "عائلتي كبيرة. / Ma famille est grande.",
        acceptedAnswers: ["Meine Familie ist groß", "Meine Familie ist groß."],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف عائلتك في ٣ إلى ٥ جمل باللغة الألمانية.",
      fr: "Décris ta famille en 3 à 5 phrases en allemand.",
    },
    reviewNote: { ar: "تذكر أن كل اسم في الألمانية له أداة تعريف خاصة به.", fr: "N'oublie pas que chaque nom allemand a son propre article." },
  },

  // ===================== LESSON 5 — Food =====================
  {
    id: "a1-05",
    level: "A1",
    order: 5,
    topicKey: "food",
    title: { de: "Essen", ar: "الطعام", fr: "La nourriture" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Beim Frühstück", ar: "في وقت الفطور", fr: "Au petit-déjeuner" },
      description: { ar: "أنت تتناول الفطور مع مضيفك الألماني، ويجب أن تعرف كيف تطلب الطعام.", fr: "Tu prends le petit-déjeuner chez ton hôte allemand et dois savoir demander de la nourriture." },
    },
    objectives: {
      ar: ["تسمية الأطعمة الأساسية", "قول ماذا تحب أن تأكل", "طلب الطعام بأدب"],
      fr: ["Nommer les aliments de base", "Dire ce que l'on aime manger", "Demander poliment de la nourriture"],
    },
    vocabIds: ["v-a1-033", "v-a1-034", "v-a1-035", "v-a1-036", "v-a1-037", "v-a1-038", "v-a1-039"],
    grammarTopicIds: ["g-a1-negation"],
    listeningText: "Ich esse Brot zum Frühstück. Ich esse gern Obst und Gemüse. Ich esse kein Fleisch.",
    speakingPrompts: ["Ich esse gern...", "Ich esse kein...", "Ein Brot, bitte."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-05-ex1",
        prompt: { ar: "ماذا نقول عندما لا نأكل اللحم؟", fr: "Que dit-on quand on ne mange pas de viande ?" },
        options: ["Ich esse Fleisch.", "Ich esse kein Fleisch.", "Ich esse nicht Fleisch."],
        correctIndex: 1,
        explanation: { ar: "نستخدم kein لنفي اسم بدون أداة تعريف.", fr: "On utilise kein pour nier un nom sans article défini." },
      },
      {
        type: "matching",
        id: "a1-05-ex2",
        pairs: [
          { german: "das Brot", translation: "الخبز / le pain" },
          { german: "der Käse", translation: "الجبن / le fromage" },
          { german: "das Obst", translation: "الفاكهة / les fruits" },
          { german: "das Gemüse", translation: "الخضار / les légumes" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-05-ex3",
        sentenceWithBlank: "Ich esse gern ___ und Gemüse. (fruits)",
        correctAnswer: "Obst",
      },
      {
        type: "listen_choose",
        id: "a1-05-ex4",
        audioText: "Ich esse kein Fleisch.",
        options: ["Ich esse Fleisch.", "Ich esse kein Fleisch.", "Ich esse Reis."],
        correctIndex: 1,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اكتب قائمة بثلاثة أطعمة تحبها وثلاثة لا تحبها باللغة الألمانية.",
      fr: "Écris une liste de trois aliments que tu aimes et trois que tu n'aimes pas, en allemand.",
    },
    reviewNote: { ar: "راجع الفرق بين kein و nicht، هذا مهم جداً.", fr: "Révise la différence entre kein et nicht, c'est très important." },
  },

  // ===================== LESSON 6 — Drinks =====================
  {
    id: "a1-06",
    level: "A1",
    order: 6,
    topicKey: "drinks",
    title: { de: "Getränke", ar: "المشروبات", fr: "Les boissons" },
    estimatedMinutes: 11,
    xpReward: 40,
    situation: {
      title: { de: "Etwas zu trinken bestellen", ar: "طلب مشروب", fr: "Commander une boisson" },
      description: { ar: "أنت في مقهى وتحتاج إلى طلب مشروب بأدب.", fr: "Tu es dans un café et dois commander une boisson poliment." },
    },
    objectives: {
      ar: ["تسمية المشروبات الشائعة", "طلب مشروب بأدب"],
      fr: ["Nommer les boissons courantes", "Commander une boisson poliment"],
    },
    vocabIds: ["v-a1-040", "v-a1-041", "v-a1-042", "v-a1-043", "v-a1-044"],
    grammarTopicIds: ["g-a1-akkusativ"],
    listeningText: "Ich trinke gern Kaffee. Ein Glas Wasser, bitte. Tee mit Zucker, bitte.",
    speakingPrompts: ["Ein Kaffee, bitte.", "Ein Glas Wasser, bitte.", "Ich trinke gern..."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-06-ex1",
        prompt: { ar: "كيف تطلب كأس ماء؟", fr: "Comment demande-t-on un verre d'eau ?" },
        options: ["Ein Glas Wasser, bitte.", "Ein Glas Kaffee, bitte.", "Eine Tasse Wasser, bitte."],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-06-ex2",
        sentenceWithBlank: "Ich trinke gern ___. (café)",
        correctAnswer: "Kaffee",
      },
      {
        type: "matching",
        id: "a1-06-ex3",
        pairs: [
          { german: "das Wasser", translation: "الماء / l'eau" },
          { german: "der Tee", translation: "الشاي / le thé" },
          { german: "die Milch", translation: "الحليب / le lait" },
        ],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على طلب ثلاثة مشروبات مختلفة بأدب.",
      fr: "Entraîne-toi à commander trois boissons différentes poliment.",
    },
    reviewNote: { ar: "هذه الكلمات ستُستخدم كثيراً في درس المقهى القادم.", fr: "Ces mots seront très utilisés dans la prochaine leçon sur le café." },
  },

  // ===================== LESSON 7 — Café =====================
  {
    id: "a1-07",
    level: "A1",
    order: 7,
    topicKey: "cafe",
    title: { de: "Im Café", ar: "في المقهى", fr: "Au café" },
    estimatedMinutes: 14,
    xpReward: 45,
    situation: {
      title: { de: "Ein Treffen im Café", ar: "لقاء في المقهى", fr: "Un rendez-vous au café" },
      description: { ar: "تلتقي بصديق في مقهى، وتحتاج إلى قراءة قائمة الطعام والطلب والدفع.", fr: "Tu retrouves un ami dans un café et dois lire le menu, commander et payer." },
    },
    objectives: {
      ar: ["طلب الطعام والشراب في المقهى", "طلب الفاتورة"],
      fr: ["Commander à manger et à boire au café", "Demander l'addition"],
    },
    vocabIds: ["v-a1-045", "v-a1-046", "v-a1-047", "v-a1-048"],
    grammarTopicIds: ["g-a1-modalverben"],
    listeningText: "Die Speisekarte, bitte. Ich möchte bestellen. Ein Stück Kuchen und einen Kaffee, bitte. Die Rechnung, bitte.",
    speakingPrompts: ["Die Speisekarte, bitte.", "Ich möchte bestellen.", "Die Rechnung, bitte."],
    exercises: [
      {
        type: "choose_response",
        id: "a1-07-ex1",
        situation: { de: "Der Kellner fragt: 'Was möchten Sie bestellen?'", ar: "النادل يسأل: ماذا تريد أن تطلب؟", fr: "Le serveur demande : « Que souhaitez-vous commander ? »" },
        options: [
          { text: "Ich möchte einen Kaffee, bitte.", correct: true },
          { text: "Danke, gut, und dir?", correct: false },
          { text: "Ich heiße Sara.", correct: false },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-07-ex2",
        sentenceWithBlank: "Die ___, bitte. (l'addition)",
        correctAnswer: "Rechnung",
      },
      {
        type: "multiple_choice",
        id: "a1-07-ex3",
        prompt: { ar: "ماذا تطلب لرؤية الأطباق المتاحة؟", fr: "Que demande-t-on pour voir les plats disponibles ?" },
        options: ["die Rechnung", "die Speisekarte", "der Kuchen"],
        correctIndex: 1,
      },
    ],
    conversationScenarioId: "conv-a1-restaurant",
    practicalMission: {
      ar: "أكمل محادثة المطعم التفاعلية أدناه لتتدرب على الطلب الكامل.",
      fr: "Termine la conversation interactive du restaurant ci-dessous pour t'entraîner à commander.",
    },
    reviewNote: { ar: "المفردات المتعلقة بالمقهى والمطعم متشابهة، راجعهما معاً.", fr: "Le vocabulaire du café et du restaurant se ressemble, révise-les ensemble." },
  },

  // ===================== LESSON 8 — Restaurant =====================
  {
    id: "a1-08",
    level: "A1",
    order: 8,
    topicKey: "restaurant",
    title: { de: "Im Restaurant", ar: "في المطعم", fr: "Au restaurant" },
    estimatedMinutes: 15,
    xpReward: 45,
    situation: {
      title: { de: "Ein Abendessen im Restaurant", ar: "عشاء في المطعم", fr: "Un dîner au restaurant" },
      description: { ar: "تحجز طاولة في مطعم وتطلب وجبة كاملة.", fr: "Tu réserves une table dans un restaurant et commandes un repas complet." },
    },
    objectives: {
      ar: ["حجز طاولة", "طلب وجبة كاملة", "التعبير عن الإعجاب بالطعام"],
      fr: ["Réserver une table", "Commander un repas complet", "Exprimer son appréciation du plat"],
    },
    vocabIds: ["v-a1-049", "v-a1-050", "v-a1-051", "v-a1-052"],
    grammarTopicIds: ["g-a1-fragen"],
    listeningText: "Ein Tisch für zwei, bitte. Der Tisch ist reserviert. Das Essen ist sehr lecker!",
    speakingPrompts: ["Ein Tisch für zwei, bitte.", "Das schmeckt sehr lecker!"],
    exercises: [
      {
        type: "sentence_order",
        id: "a1-08-ex1",
        words: ["für", "zwei,", "Ein", "Tisch", "bitte"],
        correctOrder: ["Ein", "Tisch", "für", "zwei,", "bitte"],
      },
      {
        type: "multiple_choice",
        id: "a1-08-ex2",
        prompt: { ar: "ماذا تقول إذا أعجبك الطعام؟", fr: "Que dit-on quand le plat nous plaît ?" },
        options: ["Das ist teuer.", "Das ist lecker!", "Das ist kalt."],
        correctIndex: 1,
      },
      {
        type: "translation",
        id: "a1-08-ex3",
        direction: "native_to_de",
        sourceText: "طاولة لشخصين من فضلك. / Une table pour deux, s'il vous plaît.",
        acceptedAnswers: ["Ein Tisch für zwei, bitte", "Ein Tisch für zwei, bitte."],
      },
    ],
    conversationScenarioId: "conv-a1-restaurant",
    practicalMission: {
      ar: "تخيل أنك في مطعم، واكتب حواراً قصيراً من ٤ جمل مع النادل.",
      fr: "Imagine que tu es au restaurant et écris un court dialogue de 4 phrases avec le serveur.",
    },
    reviewNote: { ar: "أسئلة W مهمة جداً هنا: wo, was, wie.", fr: "Les questions en W sont essentielles ici : wo, was, wie." },
  },

  // ===================== LESSON 9 — Shopping =====================
  {
    id: "a1-09",
    level: "A1",
    order: 9,
    topicKey: "shopping",
    title: { de: "Einkaufen", ar: "التسوق", fr: "Faire du shopping" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Im Kleidungsgeschäft", ar: "في متجر الملابس", fr: "Dans un magasin de vêtements" },
      description: { ar: "تريد شراء ملابس، ويجب أن تسأل عن السعر والمقاس.", fr: "Tu veux acheter des vêtements et dois demander le prix et la taille." },
    },
    objectives: {
      ar: ["السؤال عن السعر", "وصف شيء بأنه غالٍ أو رخيص", "طلب مقاس معين"],
      fr: ["Demander un prix", "Décrire un objet comme cher ou pas cher", "Demander une taille"],
    },
    vocabIds: ["v-a1-053", "v-a1-054", "v-a1-055", "v-a1-056", "v-a1-057"],
    grammarTopicIds: ["g-a1-akkusativ"],
    listeningText: "Ich möchte das kaufen. Wie ist der Preis? Das ist zu teuer. Welche Größe brauchen Sie?",
    speakingPrompts: ["Wie ist der Preis?", "Das ist zu teuer.", "Ich möchte das kaufen."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-09-ex1",
        prompt: { ar: "عكس كلمة teuer (غالي) هو:", fr: "Le contraire de teuer (cher) est :" },
        options: ["billig", "groß", "schön"],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-09-ex2",
        sentenceWithBlank: "Wie ist der ___? (le prix)",
        correctAnswer: "Preis",
      },
      {
        type: "matching",
        id: "a1-09-ex3",
        pairs: [
          { german: "teuer", translation: "غالي / cher" },
          { german: "billig", translation: "رخيص / pas cher" },
          { german: "kaufen", translation: "يشتري / acheter" },
        ],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على سؤال بائع افتراضي عن سعر ومقاس قميص.",
      fr: "Entraîne-toi à demander à un vendeur imaginaire le prix et la taille d'une chemise.",
    },
    reviewNote: { ar: "هذه المفردات ستُستخدم أيضاً في درس السوبرماركت.", fr: "Ce vocabulaire sera aussi utilisé dans la leçon sur le supermarché." },
  },

  // ===================== LESSON 10 — Supermarket =====================
  {
    id: "a1-10",
    level: "A1",
    order: 10,
    topicKey: "supermarket",
    title: { de: "Im Supermarkt", ar: "في السوبرماركت", fr: "Au supermarché" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Wocheneinkauf machen", ar: "التسوق الأسبوعي", fr: "Faire les courses de la semaine" },
      description: { ar: "تذهب إلى السوبرماركت لشراء احتياجاتك الأسبوعية وتحتاج إلى الدفع عند الصندوق.", fr: "Tu vas au supermarché pour tes courses de la semaine et dois payer à la caisse." },
    },
    objectives: {
      ar: ["التنقل داخل السوبرماركت", "الدفع عند الصندوق"],
      fr: ["Se repérer dans le supermarché", "Payer à la caisse"],
    },
    vocabIds: ["v-a1-058", "v-a1-059", "v-a1-060", "v-a1-061"],
    grammarTopicIds: [],
    listeningText: "Ich gehe zum Supermarkt. Wo sind die Einkaufswagen? Die Kasse ist dort drüben. Ich möchte bar bezahlen.",
    speakingPrompts: ["Wo ist die Kasse?", "Ich möchte bar bezahlen."],
    exercises: [
      {
        type: "choose_response",
        id: "a1-10-ex1",
        situation: { de: "An der Kasse fragt man: 'Bar oder Karte?'", ar: "عند الصندوق يُسأل: نقداً أم بطاقة؟", fr: "À la caisse, on demande : « Espèces ou carte ? »" },
        options: [
          { text: "Bar, bitte.", correct: true },
          { text: "Ja, gerne.", correct: false },
          { text: "Auf Wiedersehen.", correct: false },
        ],
      },
      {
        type: "listen_choose",
        id: "a1-10-ex2",
        audioText: "Die Kasse ist dort drüben.",
        options: ["Die Kasse ist dort drüben.", "Der Supermarkt ist dort drüben.", "Die Rechnung ist dort drüben."],
        correctIndex: 0,
      },
    ],
    conversationScenarioId: "conv-a1-supermarket",
    practicalMission: {
      ar: "أكمل محادثة السوبرماركت التفاعلية لتتدرب على السؤال عن مكان الأشياء.",
      fr: "Termine la conversation interactive du supermarché pour t'entraîner à demander où se trouvent les choses.",
    },
    reviewNote: { ar: "استخدم bezahlen في جمل أخرى للتثبيت.", fr: "Utilise bezahlen dans d'autres phrases pour bien l'ancrer." },
  },

  // ===================== LESSON 11 — Time =====================
  {
    id: "a1-11",
    level: "A1",
    order: 11,
    topicKey: "time",
    title: { de: "Die Uhrzeit", ar: "الوقت", fr: "L'heure" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Einen Termin vereinbaren", ar: "تحديد موعد", fr: "Fixer un rendez-vous" },
      description: { ar: "تحتاج إلى معرفة كيفية سؤال وذكر الوقت لتحديد المواعيد.", fr: "Tu dois savoir demander et donner l'heure pour fixer des rendez-vous." },
    },
    objectives: {
      ar: ["سؤال عن الوقت", "ذكر الوقت", "استخدام كلمتي مبكراً ومتأخراً"],
      fr: ["Demander l'heure", "Donner l'heure", "Utiliser tôt et tard"],
    },
    vocabIds: ["v-a1-062", "v-a1-063", "v-a1-064", "v-a1-065", "v-a1-066"],
    grammarTopicIds: ["g-a1-fragen"],
    listeningText: "Wie viel Uhr ist es? In einer Stunde. Fünf Minuten, bitte. Ich stehe früh auf.",
    speakingPrompts: ["Wie viel Uhr ist es?", "In fünf Minuten."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-11-ex1",
        prompt: { ar: "كيف تسأل عن الوقت؟", fr: "Comment demande-t-on l'heure ?" },
        options: ["Wie viel Uhr ist es?", "Wie viel kostet es?", "Wie alt bist du?"],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-11-ex2",
        sentenceWithBlank: "Es ist schon ___. (tard)",
        correctAnswer: "spät",
      },
      {
        type: "matching",
        id: "a1-11-ex3",
        pairs: [
          { german: "die Stunde", translation: "الساعة (مدة) / l'heure" },
          { german: "die Minute", translation: "الدقيقة / la minute" },
          { german: "früh", translation: "مبكراً / tôt" },
        ],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اسأل عن الوقت بثلاث طرق مختلفة وأجب عن نفسك.",
      fr: "Pose la question de l'heure de trois façons différentes et réponds toi-même.",
    },
    reviewNote: { ar: "سترتبط هذه المفردات بدرس الأيام القادم.", fr: "Ce vocabulaire sera lié à la prochaine leçon sur les jours." },
  },

  // ===================== LESSON 12 — Days =====================
  {
    id: "a1-12",
    level: "A1",
    order: 12,
    topicKey: "days",
    title: { de: "Die Wochentage", ar: "أيام الأسبوع", fr: "Les jours de la semaine" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Die Woche planen", ar: "تخطيط الأسبوع", fr: "Planifier la semaine" },
      description: { ar: "يسألك زميلك متى ستعمل ومتى ستكون عطلتك.", fr: "Ton collègue te demande quand tu travailles et quand tu es en congé." },
    },
    objectives: {
      ar: ["تسمية أيام الأسبوع", "التحدث عن اليوم والغد"],
      fr: ["Nommer les jours de la semaine", "Parler d'aujourd'hui et de demain"],
    },
    vocabIds: ["v-a1-067", "v-a1-068", "v-a1-069", "v-a1-070", "v-a1-071"],
    grammarTopicIds: ["g-a1-wortstellung"],
    listeningText: "Am Montag arbeite ich. Freitag ist mein Lieblingstag. Schönes Wochenende! Was machst du heute?",
    speakingPrompts: ["Am Montag arbeite ich.", "Schönes Wochenende!"],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-12-ex1",
        sentenceWithBlank: "Am ___ arbeite ich. (lundi)",
        correctAnswer: "Montag",
      },
      {
        type: "multiple_choice",
        id: "a1-12-ex2",
        prompt: { ar: "ما هو اليوم الأخير في أسبوع العمل الألماني التقليدي؟", fr: "Quel est le dernier jour ouvré typique en Allemagne ?" },
        options: ["Montag", "Mittwoch", "Freitag"],
        correctIndex: 2,
      },
      {
        type: "sentence_order",
        id: "a1-12-ex3",
        words: ["heute", "machst", "du", "Was"],
        correctOrder: ["Was", "machst", "du", "heute"],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اكتب جدول أسبوعك بجملة واحدة لكل يوم باستخدام am + اليوم.",
      fr: "Écris ton emploi du temps de la semaine avec une phrase par jour en utilisant am + jour.",
    },
    reviewNote: { ar: "تذكر أن الفعل يأتي دائماً في المرتبة الثانية.", fr: "N'oublie pas que le verbe est toujours en deuxième position." },
  },

  // ===================== LESSON 13 — Directions =====================
  {
    id: "a1-13",
    level: "A1",
    order: 13,
    topicKey: "directions",
    title: { de: "Wegbeschreibung", ar: "الاتجاهات", fr: "Les directions" },
    estimatedMinutes: 14,
    xpReward: 45,
    situation: {
      title: { de: "Den Weg zum Bahnhof finden", ar: "إيجاد الطريق إلى المحطة", fr: "Trouver le chemin de la gare" },
      description: { ar: "أنت تائه في المدينة وتحتاج إلى سؤال أحد المارة عن الطريق.", fr: "Tu es perdu en ville et dois demander ton chemin à un passant." },
    },
    objectives: {
      ar: ["السؤال عن الاتجاهات", "فهم الاتجاهات الأساسية", "استخدام يسار/يمين/أمام"],
      fr: ["Demander son chemin", "Comprendre des directions simples", "Utiliser gauche/droite/tout droit"],
    },
    vocabIds: ["v-a1-072", "v-a1-073", "v-a1-074", "v-a1-075", "v-a1-076"],
    grammarTopicIds: ["g-a1-fragen"],
    listeningText: "Entschuldigung, wo ist der Bahnhof? Gehen Sie geradeaus, dann links. An der Ecke rechts.",
    speakingPrompts: ["Wo ist der Bahnhof?", "Gehen Sie geradeaus."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-13-ex1",
        prompt: { ar: "ماذا تعني \"geradeaus\"؟", fr: "Que signifie « geradeaus » ?" },
        options: ["يساراً", "يميناً", "إلى الأمام مباشرة"],
        correctIndex: 2,
      },
      {
        type: "listen_choose",
        id: "a1-13-ex2",
        audioText: "Gehen Sie links, dann rechts.",
        options: ["Gehen Sie links, dann rechts.", "Gehen Sie rechts, dann links.", "Gehen Sie geradeaus."],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-13-ex3",
        sentenceWithBlank: "An der ___ rechts. (au coin)",
        correctAnswer: "Ecke",
      },
    ],
    conversationScenarioId: "conv-a1-directions",
    practicalMission: {
      ar: "أكمل محادثة السؤال عن الطريق التفاعلية أدناه.",
      fr: "Termine la conversation interactive pour demander son chemin, ci-dessous.",
    },
    reviewNote: { ar: "هذه المفردات أساسية جداً في السفر والتنقل اليومي.", fr: "Ce vocabulaire est essentiel pour les voyages et les déplacements quotidiens." },
  },

  // ===================== LESSON 14 — Transport =====================
  {
    id: "a1-14",
    level: "A1",
    order: 14,
    topicKey: "transport",
    title: { de: "Verkehrsmittel", ar: "وسائل النقل", fr: "Les moyens de transport" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Eine Fahrkarte kaufen", ar: "شراء تذكرة سفر", fr: "Acheter un billet" },
      description: { ar: "تحتاج إلى شراء تذكرة قطار والتحدث عن وسائل النقل.", fr: "Tu dois acheter un billet de train et parler des moyens de transport." },
    },
    objectives: {
      ar: ["تسمية وسائل النقل", "شراء تذكرة سفر"],
      fr: ["Nommer les moyens de transport", "Acheter un billet"],
    },
    vocabIds: ["v-a1-077", "v-a1-078", "v-a1-079", "v-a1-080"],
    grammarTopicIds: ["g-a1-akkusativ"],
    listeningText: "Der Bus kommt gleich. Der Zug fährt um acht. Eine Fahrkarte nach Berlin, bitte.",
    speakingPrompts: ["Eine Fahrkarte nach Berlin, bitte.", "Wo ist der Bahnhof?"],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-14-ex1",
        sentenceWithBlank: "Eine ___ nach Berlin, bitte. (billet)",
        correctAnswer: "Fahrkarte",
      },
      {
        type: "matching",
        id: "a1-14-ex2",
        pairs: [
          { german: "der Bus", translation: "الحافلة / le bus" },
          { german: "der Zug", translation: "القطار / le train" },
          { german: "der Bahnhof", translation: "المحطة / la gare" },
        ],
      },
      {
        type: "multiple_choice",
        id: "a1-14-ex3",
        prompt: { ar: "أين تشتري تذكرة القطار؟", fr: "Où achète-t-on un billet de train ?" },
        options: ["im Restaurant", "am Bahnhof", "in der Apotheke"],
        correctIndex: 1,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على طلب تذكرة إلى مدينة تختارها.",
      fr: "Entraîne-toi à demander un billet pour une ville de ton choix.",
    },
    reviewNote: { ar: "راجع أسماء وسائل النقل مع الاتجاهات معاً.", fr: "Révise les moyens de transport avec les directions ensemble." },
  },

  // ===================== LESSON 15 — Home =====================
  {
    id: "a1-15",
    level: "A1",
    order: 15,
    topicKey: "home",
    title: { de: "Die Wohnung", ar: "المنزل", fr: "Le logement" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Die neue Wohnung zeigen", ar: "عرض الشقة الجديدة", fr: "Faire visiter le nouvel appartement" },
      description: { ar: "تعرض شقتك الجديدة على صديق وتصف غرفها.", fr: "Tu fais visiter ton nouvel appartement à un ami et décris les pièces." },
    },
    objectives: {
      ar: ["تسمية غرف المنزل", "وصف المنزل بصفات بسيطة"],
      fr: ["Nommer les pièces du logement", "Décrire son logement simplement"],
    },
    vocabIds: ["v-a1-081", "v-a1-082", "v-a1-083", "v-a1-084"],
    grammarTopicIds: ["g-a1-artikel"],
    listeningText: "Meine Wohnung ist klein. Das Zimmer ist hell. Die Küche ist modern. Wo ist das Bad?",
    speakingPrompts: ["Meine Wohnung ist...", "Wo ist das Bad?"],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-15-ex1",
        prompt: { ar: "أين تطبخ الطعام؟", fr: "Où cuisine-t-on ?" },
        options: ["im Bad", "in der Küche", "im Zimmer"],
        correctIndex: 1,
      },
      {
        type: "fill_blank",
        id: "a1-15-ex2",
        sentenceWithBlank: "Wo ist das ___? (salle de bain)",
        correctAnswer: "Bad",
      },
      {
        type: "matching",
        id: "a1-15-ex3",
        pairs: [
          { german: "die Wohnung", translation: "الشقة / l'appartement" },
          { german: "das Zimmer", translation: "الغرفة / la pièce" },
          { german: "die Küche", translation: "المطبخ / la cuisine" },
        ],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف منزلك أو شقتك في ٤ جمل باللغة الألمانية.",
      fr: "Décris ta maison ou ton appartement en 4 phrases en allemand.",
    },
    reviewNote: { ar: "سيُبنى على هذا الدرس درس أكثر تفصيلاً في المستوى A2 عن السكن.", fr: "Ce vocabulaire sera approfondi en A2 avec le logement et le bailleur." },
  },

  // ===================== LESSON 16 — Basic work =====================
  {
    id: "a1-16",
    level: "A1",
    order: 16,
    topicKey: "basic_work",
    title: { de: "Die Arbeit", ar: "العمل", fr: "Le travail" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Über die Arbeit sprechen", ar: "الحديث عن العمل", fr: "Parler du travail" },
      description: { ar: "تتحدث مع زميل جديد عن مكان عملك ومن هو مديرك.", fr: "Tu parles à un nouveau collègue de ton lieu de travail et de ton patron." },
    },
    objectives: {
      ar: ["وصف مكان العمل", "التحدث عن الزملاء والمدير"],
      fr: ["Décrire son lieu de travail", "Parler de ses collègues et de son patron"],
    },
    vocabIds: ["v-a1-085", "v-a1-086", "v-a1-087", "v-a1-088"],
    grammarTopicIds: ["g-a1-praesens"],
    listeningText: "Ich arbeite im Büro. Das Büro ist im dritten Stock. Mein Kollege heißt Tom. Der Chef ist nicht da.",
    speakingPrompts: ["Ich arbeite im Büro.", "Mein Kollege heißt..."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-16-ex1",
        sentenceWithBlank: "Ich ___ im Büro. (travaille)",
        correctAnswer: "arbeite",
      },
      {
        type: "multiple_choice",
        id: "a1-16-ex2",
        prompt: { ar: "من هو Chef؟", fr: "Qui est le Chef ?" },
        options: ["الزميل", "المدير", "الطبيب"],
        correctIndex: 1,
      },
      {
        type: "translation",
        id: "a1-16-ex3",
        direction: "native_to_de",
        sourceText: "أعمل في المكتب. / Je travaille au bureau.",
        acceptedAnswers: ["Ich arbeite im Büro", "Ich arbeite im Büro."],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "قدّم نفسك مهنياً في جملتين: أين تعمل ومن هو زميلك.",
      fr: "Présente-toi professionnellement en deux phrases : où tu travailles et qui est ton collègue.",
    },
    reviewNote: { ar: "هذا الموضوع سيتوسع كثيراً في المستوى B1 مع مقابلات العمل.", fr: "Ce thème sera largement approfondi en B1 avec les entretiens d'embauche." },
  },

  // ===================== LESSON 17 — Doctor =====================
  {
    id: "a1-17",
    level: "A1",
    order: 17,
    topicKey: "doctor",
    title: { de: "Beim Arzt", ar: "عند الطبيب", fr: "Chez le médecin" },
    estimatedMinutes: 14,
    xpReward: 45,
    situation: {
      title: { de: "Ein Arztbesuch", ar: "زيارة الطبيب", fr: "Une visite chez le médecin" },
      description: { ar: "أنت تشعر بالمرض وتحتاج إلى شرح أعراضك للطبيب.", fr: "Tu te sens malade et dois expliquer tes symptômes au médecin." },
    },
    objectives: {
      ar: ["وصف الأعراض البسيطة", "طلب موعد طبي"],
      fr: ["Décrire des symptômes simples", "Demander un rendez-vous médical"],
    },
    vocabIds: ["v-a1-089", "v-a1-090", "v-a1-091", "v-a1-092"],
    grammarTopicIds: ["g-a1-haben"],
    listeningText: "Ich brauche einen Arzt. Ich bin krank. Ich habe Kopfschmerzen. Ich habe einen Termin um zehn.",
    speakingPrompts: ["Ich bin krank.", "Ich habe Kopfschmerzen."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-17-ex1",
        sentenceWithBlank: "Ich ___ Kopfschmerzen. (j'ai)",
        correctAnswer: "habe",
      },
      {
        type: "multiple_choice",
        id: "a1-17-ex2",
        prompt: { ar: "ماذا تقول عندما تكون مريضاً؟", fr: "Que dit-on quand on est malade ?" },
        options: ["Ich bin müde.", "Ich bin krank.", "Ich bin glücklich."],
        correctIndex: 1,
      },
      {
        type: "listen_choose",
        id: "a1-17-ex3",
        audioText: "Ich habe einen Termin um zehn.",
        options: ["Ich habe einen Termin um zehn.", "Ich habe einen Termin um zwei.", "Ich brauche einen Arzt."],
        correctIndex: 0,
      },
    ],
    conversationScenarioId: "conv-a1-doctor",
    practicalMission: {
      ar: "أكمل محادثة الطبيب التفاعلية لتتدرب على وصف الأعراض.",
      fr: "Termine la conversation interactive chez le médecin pour t'entraîner à décrire tes symptômes.",
    },
    reviewNote: { ar: "هذه المفردات حيوية جداً في حالات الطوارئ.", fr: "Ce vocabulaire est vital en cas d'urgence." },
  },

  // ===================== LESSON 18 — Pharmacy =====================
  {
    id: "a1-18",
    level: "A1",
    order: 18,
    topicKey: "pharmacy",
    title: { de: "In der Apotheke", ar: "في الصيدلية", fr: "À la pharmacie" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Medikamente holen", ar: "الحصول على الدواء", fr: "Récupérer des médicaments" },
      description: { ar: "تذهب إلى الصيدلية بعد زيارة الطبيب لأخذ دوائك.", fr: "Tu vas à la pharmacie après ta visite chez le médecin pour récupérer tes médicaments." },
    },
    objectives: {
      ar: ["طلب دواء في الصيدلية", "فهم كلمة الوصفة الطبية"],
      fr: ["Demander un médicament en pharmacie", "Comprendre le mot ordonnance"],
    },
    vocabIds: ["v-a1-093", "v-a1-094", "v-a1-095"],
    grammarTopicIds: [],
    listeningText: "Die Apotheke ist geöffnet. Ich brauche ein Medikament. Haben Sie ein Rezept?",
    speakingPrompts: ["Ich brauche ein Medikament.", "Hier ist mein Rezept."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-18-ex1",
        prompt: { ar: "ماذا يطلب الصيدلي منك؟", fr: "Que vous demande le pharmacien ?" },
        options: ["Ihren Namen", "Ihr Rezept", "Ihre Adresse"],
        correctIndex: 1,
      },
      {
        type: "fill_blank",
        id: "a1-18-ex2",
        sentenceWithBlank: "Ich brauche ein ___. (médicament)",
        correctAnswer: "Medikament",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على طلب دواء لصداع بسيط في الصيدلية.",
      fr: "Entraîne-toi à demander un médicament pour un simple mal de tête à la pharmacie.",
    },
    reviewNote: { ar: "هذا الدرس مرتبط مباشرة بدرس الطبيب السابق.", fr: "Cette leçon est directement liée à la précédente sur le médecin." },
  },

  // ===================== LESSON 19 — Colors =====================
  {
    id: "a1-19",
    level: "A1",
    order: 19,
    topicKey: "colors",
    title: { de: "Die Farben", ar: "الألوان", fr: "Les couleurs" },
    estimatedMinutes: 10,
    xpReward: 35,
    situation: {
      title: { de: "Farben beschreiben", ar: "وصف الألوان", fr: "Décrire les couleurs" },
      description: { ar: "تصف لون ملابسك أو أشيائك المحيطة بك.", fr: "Tu décris la couleur de tes vêtements ou des objets autour de toi." },
    },
    objectives: {
      ar: ["تسمية الألوان الأساسية", "وصف لون شيء ما"],
      fr: ["Nommer les couleurs de base", "Décrire la couleur d'un objet"],
    },
    vocabIds: ["v-a1-096", "v-a1-097", "v-a1-098", "v-a1-099", "v-a1-100"],
    grammarTopicIds: [],
    listeningText: "Das Auto ist rot. Der Himmel ist blau. Meine Tasche ist schwarz.",
    speakingPrompts: ["Das ist rot.", "Meine Tasche ist schwarz."],
    exercises: [
      {
        type: "matching",
        id: "a1-19-ex1",
        pairs: [
          { german: "rot", translation: "أحمر / rouge" },
          { german: "blau", translation: "أزرق / bleu" },
          { german: "grün", translation: "أخضر / vert" },
          { german: "schwarz", translation: "أسود / noir" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-19-ex2",
        sentenceWithBlank: "Der Himmel ist ___. (bleu)",
        correctAnswer: "blau",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف ألوان خمسة أشياء من حولك الآن.",
      fr: "Décris la couleur de cinq objets autour de toi maintenant.",
    },
    reviewNote: { ar: "الألوان ستفيدك كثيراً في وصف الملابس لاحقاً.", fr: "Les couleurs te seront utiles pour décrire les vêtements plus tard." },
  },

  // ===================== LESSON 20 — Weather =====================
  {
    id: "a1-20",
    level: "A1",
    order: 20,
    topicKey: "weather",
    title: { de: "Das Wetter", ar: "الطقس", fr: "La météo" },
    estimatedMinutes: 11,
    xpReward: 35,
    situation: {
      title: { de: "Über das Wetter reden", ar: "الحديث عن الطقس", fr: "Parler de la météo" },
      description: { ar: "الحديث عن الطقس هو أسهل طريقة لبدء محادثة قصيرة (Smalltalk) مع الألمان.", fr: "Parler de la météo est le moyen le plus simple d'engager une petite conversation avec les Allemands." },
    },
    objectives: {
      ar: ["وصف الطقس", "استخدام صفات بارد ودافئ"],
      fr: ["Décrire la météo", "Utiliser les adjectifs froid et chaud"],
    },
    vocabIds: ["v-a1-101", "v-a1-102", "v-a1-103", "v-a1-104", "v-a1-105"],
    grammarTopicIds: [],
    listeningText: "Wie ist das Wetter heute? Die Sonne scheint. Heute ist es kalt. Im Sommer ist es warm.",
    speakingPrompts: ["Wie ist das Wetter heute?", "Heute ist es kalt."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-20-ex1",
        prompt: { ar: "عكس كلمة kalt (بارد) هو:", fr: "Le contraire de kalt (froid) est :" },
        options: ["warm", "blau", "spät"],
        correctIndex: 0,
      },
      {
        type: "listen_choose",
        id: "a1-20-ex2",
        audioText: "Die Sonne scheint.",
        options: ["Die Sonne scheint.", "Es gibt viel Regen.", "Heute ist es kalt."],
        correctIndex: 0,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف طقس اليوم بجملتين باللغة الألمانية.",
      fr: "Décris la météo du jour en deux phrases en allemand.",
    },
    reviewNote: { ar: "استخدم هذه الجمل لبدء أحاديث قصيرة مع الآخرين (Smalltalk).", fr: "Utilise ces phrases pour engager des petites discussions avec les autres." },
  },

  // ===================== LESSON 21 — Clothes =====================
  {
    id: "a1-21",
    level: "A1",
    order: 21,
    topicKey: "clothes",
    title: { de: "Kleidung", ar: "الملابس", fr: "Les vêtements" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Sich für den Tag anziehen", ar: "الاستعداد لليوم", fr: "Se préparer pour la journée" },
      description: { ar: "تصف ما ترتديه اليوم وتذهب لتجربة ملابس جديدة.", fr: "Tu décris ce que tu portes aujourd'hui et essaies de nouveaux vêtements." },
    },
    objectives: {
      ar: ["تسمية قطع الملابس الأساسية", "وصف ما ترتديه"],
      fr: ["Nommer les vêtements de base", "Décrire ce que l'on porte"],
    },
    vocabIds: ["v-a1-106", "v-a1-107", "v-a1-108", "v-a1-109"],
    grammarTopicIds: ["g-a1-artikel"],
    listeningText: "Die Hose ist zu groß. Ich trage ein blaues Hemd. Meine Schuhe sind neu.",
    speakingPrompts: ["Ich trage ein Hemd.", "Meine Schuhe sind neu."],
    exercises: [
      {
        type: "matching",
        id: "a1-21-ex1",
        pairs: [
          { german: "die Hose", translation: "السروال / le pantalon" },
          { german: "das Hemd", translation: "القميص / la chemise" },
          { german: "die Schuhe", translation: "الأحذية / les chaussures" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-21-ex2",
        sentenceWithBlank: "Ich trage ein blaues ___. (chemise)",
        correctAnswer: "Hemd",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف ملابسك اليوم بثلاث جمل.",
      fr: "Décris tes vêtements d'aujourd'hui en trois phrases.",
    },
    reviewNote: { ar: "اربط هذا الدرس بدرس الألوان لوصف الملابس بشكل كامل.", fr: "Relie cette leçon à celle des couleurs pour décrire les vêtements en détail." },
  },

  // ===================== LESSON 22 — Body parts =====================
  {
    id: "a1-22",
    level: "A1",
    order: 22,
    topicKey: "body_parts",
    title: { de: "Körperteile", ar: "أجزاء الجسم", fr: "Les parties du corps" },
    estimatedMinutes: 11,
    xpReward: 35,
    situation: {
      title: { de: "Schmerzen beschreiben", ar: "وصف الألم", fr: "Décrire une douleur" },
      description: { ar: "تحتاج إلى معرفة أجزاء الجسم لوصف الألم عند الطبيب.", fr: "Tu dois connaître les parties du corps pour décrire une douleur chez le médecin." },
    },
    objectives: {
      ar: ["تسمية أجزاء الجسم الأساسية", "وصف الألم في جزء معين"],
      fr: ["Nommer les parties du corps de base", "Décrire une douleur à un endroit précis"],
    },
    vocabIds: ["v-a1-110", "v-a1-111", "v-a1-112", "v-a1-113"],
    grammarTopicIds: [],
    listeningText: "Mein Kopf tut weh. Gib mir deine Hand. Mein Fuß tut weh. Sie hat blaue Augen.",
    speakingPrompts: ["Mein Kopf tut weh.", "Mein Fuß tut weh."],
    exercises: [
      {
        type: "matching",
        id: "a1-22-ex1",
        pairs: [
          { german: "der Kopf", translation: "الرأس / la tête" },
          { german: "die Hand", translation: "اليد / la main" },
          { german: "der Fuß", translation: "القدم / le pied" },
          { german: "das Auge", translation: "العين / l'œil" },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-22-ex2",
        sentenceWithBlank: "Mein ___ tut weh. (tête)",
        correctAnswer: "Kopf",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على قول \"يؤلمني...\" مع ثلاثة أجزاء مختلفة من الجسم.",
      fr: "Entraîne-toi à dire « j'ai mal à... » avec trois parties du corps différentes.",
    },
    reviewNote: { ar: "راجع هذا الدرس مع درس الطبيب لأهميته الطبية.", fr: "Révise cette leçon avec celle du médecin, vu son importance médicale." },
  },

  // ===================== LESSON 23 — Hobbies =====================
  {
    id: "a1-23",
    level: "A1",
    order: 23,
    topicKey: "hobbies",
    title: { de: "Hobbys", ar: "الهوايات", fr: "Les loisirs" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Freizeitaktivitäten besprechen", ar: "الحديث عن أوقات الفراغ", fr: "Discuter des activités de loisir" },
      description: { ar: "يسألك صديق جديد عما تحب أن تفعل في وقت فراغك.", fr: "Un nouvel ami te demande ce que tu aimes faire pendant ton temps libre." },
    },
    objectives: {
      ar: ["التحدث عن الهوايات", "التعبير عن الإعجاب باستخدام gern"],
      fr: ["Parler de ses loisirs", "Exprimer son goût avec gern"],
    },
    vocabIds: ["v-a1-114", "v-a1-115", "v-a1-116", "v-a1-117"],
    grammarTopicIds: ["g-a1-praesens"],
    listeningText: "Ich lese gern Bücher. Ich schwimme jeden Samstag. Er kocht sehr gut. Ich höre gern Musik.",
    speakingPrompts: ["Ich lese gern...", "Ich höre gern Musik."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-23-ex1",
        sentenceWithBlank: "Ich lese ___ Bücher. (avec plaisir)",
        correctAnswer: "gern",
      },
      {
        type: "multiple_choice",
        id: "a1-23-ex2",
        prompt: { ar: "أي فعل يعني \"يسبح\"؟", fr: "Quel verbe signifie « nager » ?" },
        options: ["kochen", "schwimmen", "lesen"],
        correctIndex: 1,
      },
      {
        type: "translation",
        id: "a1-23-ex3",
        direction: "native_to_de",
        sourceText: "أحب سماع الموسيقى. / J'aime écouter de la musique.",
        acceptedAnswers: ["Ich höre gern Musik", "Ich höre gern Musik."],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اكتب ثلاث هوايات تحبها باستخدام gern.",
      fr: "Écris trois loisirs que tu aimes en utilisant gern.",
    },
    reviewNote: { ar: "كلمة gern مفتاحية جداً للتعبير عن الإعجاب.", fr: "Le mot gern est essentiel pour exprimer une préférence." },
  },

  // ===================== LESSON 24 — Daily routine =====================
  {
    id: "a1-24",
    level: "A1",
    order: 24,
    topicKey: "daily_routine",
    title: { de: "Der Tagesablauf", ar: "الروتين اليومي", fr: "La routine quotidienne" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Einen typischen Tag beschreiben", ar: "وصف يوم معتاد", fr: "Décrire une journée typique" },
      description: { ar: "تصف روتينك اليومي من الاستيقاظ حتى النوم.", fr: "Tu décris ta routine quotidienne, du réveil au coucher." },
    },
    objectives: {
      ar: ["وصف الروتين اليومي", "استخدام أفعال منفصلة بسيطة مثل aufstehen"],
      fr: ["Décrire sa routine quotidienne", "Utiliser des verbes à particule séparable simples comme aufstehen"],
    },
    vocabIds: ["v-a1-118", "v-a1-119", "v-a1-120", "v-a1-121"],
    grammarTopicIds: ["g-a1-praesens", "g-a1-wortstellung"],
    listeningText: "Ich stehe um sieben auf. Ich dusche jeden Morgen. Wir frühstücken zusammen. Ich schlafe acht Stunden.",
    speakingPrompts: ["Ich stehe um sieben auf.", "Ich schlafe acht Stunden."],
    exercises: [
      {
        type: "sentence_order",
        id: "a1-24-ex1",
        words: ["auf", "sieben", "Ich", "um", "stehe"],
        correctOrder: ["Ich", "stehe", "um", "sieben", "auf"],
      },
      {
        type: "fill_blank",
        id: "a1-24-ex2",
        sentenceWithBlank: "Ich ___ acht Stunden. (dors)",
        correctAnswer: "schlafe",
      },
      {
        type: "multiple_choice",
        id: "a1-24-ex3",
        prompt: { ar: "ما معنى aufstehen؟", fr: "Que signifie aufstehen ?" },
        options: ["ينام", "يستيقظ", "يأكل"],
        correctIndex: 1,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "صف روتينك اليومي في خمس جمل بالترتيب الزمني.",
      fr: "Décris ta routine quotidienne en cinq phrases, dans l'ordre chronologique.",
    },
    reviewNote: { ar: "لاحظ أن aufstehen ينفصل: ich stehe...auf.", fr: "Remarque que aufstehen se sépare : ich stehe...auf." },
  },

  // ===================== LESSON 25 — At school =====================
  {
    id: "a1-25",
    level: "A1",
    order: 25,
    topicKey: "at_school",
    title: { de: "In der Schule", ar: "في المدرسة", fr: "À l'école" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Ein Deutschkurs beginnt", ar: "بداية دورة ألمانية", fr: "Un cours d'allemand commence" },
      description: { ar: "تبدأ دورة لتعلم الألمانية وتتعرف على معلمك.", fr: "Tu commences un cours d'allemand et rencontres ton professeur." },
    },
    objectives: {
      ar: ["التحدث عن التعلم والمدرسة", "وصف المعلم"],
      fr: ["Parler de l'apprentissage et de l'école", "Décrire l'enseignant"],
    },
    vocabIds: ["v-a1-122", "v-a1-123", "v-a1-124"],
    grammarTopicIds: ["g-a1-modalverben"],
    listeningText: "Die Schule beginnt um acht. Ich lerne Deutsch. Der Lehrer ist sehr geduldig.",
    speakingPrompts: ["Ich lerne Deutsch.", "Der Lehrer ist geduldig."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-25-ex1",
        sentenceWithBlank: "Ich ___ Deutsch. (apprends)",
        correctAnswer: "lerne",
      },
      {
        type: "multiple_choice",
        id: "a1-25-ex2",
        prompt: { ar: "من يعلّم الطلاب؟", fr: "Qui enseigne aux élèves ?" },
        options: ["der Lehrer", "der Kellner", "der Arzt"],
        correctIndex: 0,
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اكتب جملتين عن سبب تعلمك للألمانية.",
      fr: "Écris deux phrases expliquant pourquoi tu apprends l'allemand.",
    },
    reviewNote: { ar: "الدافع وراء التعلم يساعدك على الاستمرار، فكر فيه دائماً!", fr: "La motivation d'apprendre t'aide à persévérer, garde-la en tête !" },
  },

  // ===================== LESSON 26 — Making plans =====================
  {
    id: "a1-26",
    level: "A1",
    order: 26,
    topicKey: "making_plans",
    title: { de: "Pläne machen", ar: "وضع الخطط", fr: "Faire des projets" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Ein Treffen organisieren", ar: "تنظيم لقاء", fr: "Organiser une rencontre" },
      description: { ar: "تريد دعوة صديق للقاء في وقت محدد.", fr: "Tu veux inviter un ami à se rencontrer à une heure précise." },
    },
    objectives: {
      ar: ["اقتراح موعد للقاء", "دعوة شخص ما"],
      fr: ["Proposer un moment pour se rencontrer", "Inviter quelqu'un"],
    },
    vocabIds: ["v-a1-125", "v-a1-126", "v-a1-127"],
    grammarTopicIds: ["g-a1-fragen"],
    listeningText: "Wir treffen uns um sechs. Hast du einen Plan für morgen? Ich lade dich ein.",
    speakingPrompts: ["Wir treffen uns um sechs.", "Ich lade dich ein."],
    exercises: [
      {
        type: "fill_blank",
        id: "a1-26-ex1",
        sentenceWithBlank: "Wir ___ uns um sechs. (on se rencontre)",
        correctAnswer: "treffen",
      },
      {
        type: "translation",
        id: "a1-26-ex2",
        direction: "native_to_de",
        sourceText: "أدعوك. / Je t'invite.",
        acceptedAnswers: ["Ich lade dich ein", "Ich lade dich ein."],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "اقترح على صديق خيالي لقاءً في نهاية الأسبوع بجملتين.",
      fr: "Propose à un ami imaginaire une rencontre ce week-end, en deux phrases.",
    },
    reviewNote: { ar: "لاحظ أن einladen فعل منفصل مثل aufstehen.", fr: "Remarque que einladen est un verbe à particule séparable comme aufstehen." },
  },

  // ===================== LESSON 27 — Telephone basics =====================
  {
    id: "a1-27",
    level: "A1",
    order: 27,
    topicKey: "telephone_basics",
    title: { de: "Am Telefon", ar: "عبر الهاتف", fr: "Au téléphone" },
    estimatedMinutes: 12,
    xpReward: 40,
    situation: {
      title: { de: "Ein einfaches Telefongespräch", ar: "مكالمة هاتفية بسيطة", fr: "Un appel téléphonique simple" },
      description: { ar: "تحتاج إلى إعطاء رقم هاتفك أو الاتصال بشخص ما.", fr: "Tu dois donner ton numéro de téléphone ou appeler quelqu'un." },
    },
    objectives: {
      ar: ["إعطاء رقم الهاتف", "بدء مكالمة هاتفية بسيطة"],
      fr: ["Donner un numéro de téléphone", "Commencer un appel simple"],
    },
    vocabIds: ["v-a1-128", "v-a1-129", "v-a1-130"],
    grammarTopicIds: [],
    listeningText: "Mein Telefon klingelt. Ich rufe dich an. Wie ist deine Nummer?",
    speakingPrompts: ["Wie ist deine Nummer?", "Ich rufe dich an."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-27-ex1",
        prompt: { ar: "كيف تسأل عن رقم الهاتف؟", fr: "Comment demande-t-on un numéro de téléphone ?" },
        options: ["Wie alt bist du?", "Wie ist deine Nummer?", "Wo wohnst du?"],
        correctIndex: 1,
      },
      {
        type: "fill_blank",
        id: "a1-27-ex2",
        sentenceWithBlank: "Ich rufe dich ___. (j'appelle - particule)",
        correctAnswer: "an",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على إعطاء رقم هاتفك بصوت عالٍ رقماً رقماً بالألمانية.",
      fr: "Entraîne-toi à donner ton numéro de téléphone à voix haute, chiffre par chiffre, en allemand.",
    },
    reviewNote: { ar: "راجع الأرقام من الدرس الثالث لهذا التمرين.", fr: "Révise les nombres de la leçon 3 pour cet exercice." },
  },

  // ===================== LESSON 28 — Asking for help =====================
  {
    id: "a1-28",
    level: "A1",
    order: 28,
    topicKey: "asking_for_help",
    title: { de: "Um Hilfe bitten", ar: "طلب المساعدة", fr: "Demander de l'aide" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Wenn man nicht versteht", ar: "عندما لا تفهم", fr: "Quand on ne comprend pas" },
      description: { ar: "لا تفهم ما يقوله شخص ما وتحتاج إلى طلب المساعدة أو التكرار بلطف.", fr: "Tu ne comprends pas ce que dit quelqu'un et dois poliment demander de l'aide ou une répétition." },
    },
    objectives: {
      ar: ["طلب المساعدة بأدب", "طلب التحدث ببطء أو التكرار"],
      fr: ["Demander de l'aide poliment", "Demander de parler lentement ou de répéter"],
    },
    vocabIds: ["v-a1-131", "v-a1-132", "v-a1-133", "v-a1-134"],
    grammarTopicIds: ["g-a1-modalverben"],
    listeningText: "Können Sie mir helfen? Ich verstehe nicht. Sprechen Sie bitte langsam. Können Sie das wiederholen?",
    speakingPrompts: ["Können Sie mir helfen?", "Ich verstehe nicht.", "Können Sie das wiederholen?"],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-28-ex1",
        prompt: { ar: "ماذا تقول إذا لم تفهم؟", fr: "Que dit-on quand on ne comprend pas ?" },
        options: ["Ich verstehe nicht.", "Ich spreche gut.", "Das ist lecker."],
        correctIndex: 0,
      },
      {
        type: "choose_response",
        id: "a1-28-ex2",
        situation: { de: "Jemand spricht sehr schnell Deutsch.", ar: "شخص ما يتحدث الألمانية بسرعة كبيرة.", fr: "Quelqu'un parle allemand très vite." },
        options: [
          { text: "Sprechen Sie bitte langsam.", correct: true },
          { text: "Auf Wiedersehen!", correct: false },
          { text: "Das kostet zehn Euro.", correct: false },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-28-ex3",
        sentenceWithBlank: "Können Sie mir ___? (aider)",
        correctAnswer: "helfen",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "احفظ هذه العبارات الأربع جيداً، فهي منقذة في أي موقف صعب.",
      fr: "Mémorise bien ces quatre phrases, elles te sauveront dans toute situation difficile.",
    },
    reviewNote: { ar: "هذه العبارات من أهم ما تتعلمه كمبتدئ — استخدمها بلا خجل!", fr: "Ces phrases sont parmi les plus importantes pour un débutant — utilise-les sans hésiter !" },
  },

  // ===================== LESSON 29 — Small talk =====================
  {
    id: "a1-29",
    level: "A1",
    order: 29,
    topicKey: "small_talk",
    title: { de: "Smalltalk", ar: "أحاديث قصيرة", fr: "Small talk" },
    estimatedMinutes: 13,
    xpReward: 40,
    situation: {
      title: { de: "Ein kurzes Gespräch führen", ar: "إجراء حديث قصير", fr: "Tenir une petite conversation" },
      description: { ar: "تلتقي بجار جديد وتبدأ حديثاً قصيراً وودياً.", fr: "Tu rencontres un nouveau voisin et engages une petite conversation amicale." },
    },
    objectives: {
      ar: ["بدء حديث قصير عن الطقس والحال", "الرد بأدب على أسئلة بسيطة"],
      fr: ["Engager une petite conversation sur la météo et le quotidien", "Répondre poliment à des questions simples"],
    },
    vocabIds: ["v-a1-135", "v-a1-136", "v-a1-137"],
    grammarTopicIds: ["g-a1-sein"],
    listeningText: "Heute ist das Wetter schön. Guten Tag, wie geht es Ihnen? Danke, mir geht es gut.",
    speakingPrompts: ["Wie geht es Ihnen?", "Mir geht es gut, danke."],
    exercises: [
      {
        type: "choose_response",
        id: "a1-29-ex1",
        situation: { de: "Ein Nachbar fragt: 'Wie geht es Ihnen?'", ar: "يسأل جار: كيف حالك؟", fr: "Un voisin demande : « Comment allez-vous ? »" },
        options: [
          { text: "Mir geht es gut, danke. Und Ihnen?", correct: true },
          { text: "Ich heiße Sara.", correct: false },
          { text: "Das kostet zehn Euro.", correct: false },
        ],
      },
      {
        type: "fill_blank",
        id: "a1-29-ex2",
        sentenceWithBlank: "Mir geht es ___. (bien)",
        correctAnswer: "gut",
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "تدرب على حديث قصير كامل مع جار خيالي: التحية، السؤال عن الحال، الحديث عن الطقس، الوداع.",
      fr: "Entraîne-toi à un small talk complet avec un voisin imaginaire : salutation, question sur l'état, météo, au revoir.",
    },
    reviewNote: { ar: "هذا الدرس يجمع كل ما تعلمته في المستوى A1 تقريباً!", fr: "Cette leçon rassemble presque tout ce que tu as appris en A1 !" },
  },

  // ===================== LESSON 30 — A1 Review & Test =====================
  {
    id: "a1-30",
    level: "A1",
    order: 30,
    topicKey: "a1_review",
    title: { de: "A1 Wiederholung & Test", ar: "مراجعة واختبار المستوى A1", fr: "Révision et test A1" },
    estimatedMinutes: 20,
    xpReward: 80,
    situation: {
      title: { de: "Dein erster großer Meilenstein", ar: "أول إنجاز كبير لك", fr: "Ton premier grand jalon" },
      description: { ar: "لقد وصلت إلى نهاية المستوى A1! هذا الدرس يراجع كل ما تعلمته ويختبر معرفتك قبل الانتقال إلى A2.", fr: "Tu es arrivé à la fin du niveau A1 ! Cette leçon révise tout ce que tu as appris et teste tes connaissances avant de passer au A2." },
    },
    objectives: {
      ar: ["مراجعة أهم مفردات وقواعد المستوى A1", "التأكد من الجاهزية للانتقال إلى A2"],
      fr: ["Réviser le vocabulaire et la grammaire clés du niveau A1", "Vérifier sa préparation pour passer au A2"],
    },
    vocabIds: [
      "v-a1-001", "v-a1-007", "v-a1-013", "v-a1-020", "v-a1-026", "v-a1-033",
      "v-a1-041", "v-a1-053", "v-a1-062", "v-a1-072", "v-a1-081", "v-a1-089",
    ],
    grammarTopicIds: ["g-a1-sein", "g-a1-haben", "g-a1-praesens", "g-a1-negation", "g-a1-modalverben"],
    listeningText: "Hallo! Ich heiße Ahmed. Ich komme aus Marokko. Ich wohne in Berlin und ich arbeite im Büro. Ich lerne gern Deutsch.",
    speakingPrompts: ["Ich heiße...", "Ich komme aus...", "Ich lerne gern Deutsch."],
    exercises: [
      {
        type: "multiple_choice",
        id: "a1-30-ex1",
        prompt: { ar: "أي جملة صحيحة نحوياً؟", fr: "Quelle phrase est grammaticalement correcte ?" },
        options: ["Ich bin Student.", "Ich bist Student.", "Ich sind Student."],
        correctIndex: 0,
      },
      {
        type: "fill_blank",
        id: "a1-30-ex2",
        sentenceWithBlank: "Ich habe ___ Auto. (pas de)",
        correctAnswer: "kein",
      },
      {
        type: "matching",
        id: "a1-30-ex3",
        pairs: [
          { german: "Guten Morgen", translation: "صباح الخير / Bonjour (matin)" },
          { german: "die Familie", translation: "العائلة / la famille" },
          { german: "der Arzt", translation: "الطبيب / le médecin" },
          { german: "billig", translation: "رخيص / pas cher" },
        ],
      },
      {
        type: "sentence_order",
        id: "a1-30-ex4",
        words: ["heute", "Deutsch", "Ich", "lerne"],
        correctOrder: ["Ich", "lerne", "heute", "Deutsch"],
      },
      {
        type: "translation",
        id: "a1-30-ex5",
        direction: "native_to_de",
        sourceText: "أنا أسكن في برلين وأعمل في المكتب. / J'habite à Berlin et je travaille au bureau.",
        acceptedAnswers: ["Ich wohne in Berlin und ich arbeite im Büro", "Ich wohne in Berlin und ich arbeite im Büro."],
      },
    ],
    conversationScenarioId: null,
    practicalMission: {
      ar: "سجّل مقطعاً صوتياً (أو اكتب) تقدم فيه نفسك بالكامل: الاسم، البلد، السكن، العمل، الهوايات — مستخدماً ما تعلمته في المستوى A1 بأكمله.",
      fr: "Enregistre-toi (ou écris) en te présentant complètement : nom, pays, logement, travail, loisirs — en utilisant tout ce que tu as appris en A1.",
    },
    reviewNote: {
      ar: "تهانينا على إتمام المستوى A1! ستُفتح تلقائياً وحدات المستوى A2 الآن.",
      fr: "Félicitations pour avoir terminé le niveau A1 ! Les leçons du niveau A2 se débloquent maintenant.",
    },
  },
];
