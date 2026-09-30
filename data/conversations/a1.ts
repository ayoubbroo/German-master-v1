import { ConversationScenario } from "@/types";

export const A1_CONVERSATIONS: ConversationScenario[] = [
  // ---------- Restaurant ----------
  {
    id: "conv-a1-restaurant",
    title: { de: "Im Restaurant", ar: "في المطعم", fr: "Au restaurant" },
    level: "A1",
    setting: "restaurant",
    startNodeId: "n1",
    xpReward: 25,
    nodes: [
      {
        id: "n1",
        speaker: "npc",
        npcLine: { de: "Guten Abend! Haben Sie reserviert?", ar: "مساء الخير! هل قمت بالحجز؟", fr: "Bonsoir ! Avez-vous réservé ?" },
      },
      {
        id: "n1-choice",
        speaker: "user_choice",
        choices: [
          { id: "c1", de: "Ja, auf den Namen Ahmed.", ar: "نعم، باسم أحمد.", fr: "Oui, au nom d'Ahmed.", nextNodeId: "n2", xp: 5 },
          { id: "c2", de: "Nein, aber haben Sie einen Tisch frei?", ar: "لا، لكن هل لديكم طاولة فارغة؟", fr: "Non, mais avez-vous une table libre ?", nextNodeId: "n2", xp: 5 },
        ],
      },
      {
        id: "n2",
        speaker: "npc",
        npcLine: { de: "Perfekt, folgen Sie mir bitte. Hier ist die Speisekarte.", ar: "ممتاز، تفضل معي من فضلك. هذه قائمة الطعام.", fr: "Parfait, suivez-moi s'il vous plaît. Voici la carte." },
      },
      {
        id: "n2-choice",
        speaker: "user_choice",
        choices: [
          { id: "c3", de: "Danke schön.", ar: "شكراً جزيلاً.", fr: "Merci beaucoup.", nextNodeId: "n3", xp: 5 },
        ],
      },
      {
        id: "n3",
        speaker: "npc",
        npcLine: { de: "Was möchten Sie bestellen?", ar: "ماذا تريد أن تطلب؟", fr: "Que souhaitez-vous commander ?" },
      },
      {
        id: "n3-choice",
        speaker: "user_choice",
        choices: [
          { id: "c4", de: "Ich möchte Reis mit Gemüse, bitte.", ar: "أريد أرزاً مع الخضار من فضلك.", fr: "Je voudrais du riz avec des légumes.", nextNodeId: "n4", xp: 5 },
          { id: "c5", de: "Was empfehlen Sie?", ar: "بماذا تنصحني؟", fr: "Que me recommandez-vous ?", nextNodeId: "n4", xp: 5 },
        ],
      },
      {
        id: "n4",
        speaker: "npc",
        npcLine: { de: "Sehr gerne! Und zu trinken?", ar: "بكل سرور! وماذا تريد أن تشرب؟", fr: "Avec plaisir ! Et à boire ?" },
      },
      {
        id: "n4-choice",
        speaker: "user_choice",
        choices: [
          { id: "c6", de: "Ein Wasser, bitte.", ar: "ماء من فضلك.", fr: "Une eau, s'il vous plaît.", nextNodeId: "n5", xp: 5 },
        ],
      },
      {
        id: "n5",
        speaker: "npc",
        npcLine: { de: "Alles klar, das kommt sofort. Guten Appetit!", ar: "حسناً، سيأتي حالاً. بالهناء والشفاء!", fr: "Très bien, ça arrive tout de suite. Bon appétit !" },
      },
    ],
  },

  // ---------- Supermarket ----------
  {
    id: "conv-a1-supermarket",
    title: { de: "Im Supermarkt", ar: "في السوبرماركت", fr: "Au supermarché" },
    level: "A1",
    setting: "supermarket",
    startNodeId: "n1",
    xpReward: 25,
    nodes: [
      {
        id: "n1",
        speaker: "npc",
        npcLine: { de: "Entschuldigung, kann ich Ihnen helfen?", ar: "عذراً، هل يمكنني مساعدتك؟", fr: "Excusez-moi, puis-je vous aider ?" },
      },
      {
        id: "n1-choice",
        speaker: "user_choice",
        choices: [
          { id: "c1", de: "Ja, wo finde ich das Brot?", ar: "نعم، أين أجد الخبز؟", fr: "Oui, où puis-je trouver le pain ?", nextNodeId: "n2", xp: 5 },
        ],
      },
      {
        id: "n2",
        speaker: "npc",
        npcLine: { de: "Das Brot ist dort drüben, neben der Kasse.", ar: "الخبز هناك، بجانب الصندوق.", fr: "Le pain est là-bas, à côté de la caisse." },
      },
      {
        id: "n2-choice",
        speaker: "user_choice",
        choices: [
          { id: "c2", de: "Vielen Dank!", ar: "شكراً جزيلاً!", fr: "Merci beaucoup !", nextNodeId: "n3", xp: 5 },
        ],
      },
      {
        id: "n3",
        speaker: "npc",
        npcLine: { de: "Gern geschehen. An der Kasse: Zahlen Sie bar oder mit Karte?", ar: "على الرحب والسعة. عند الصندوق: هل ستدفع نقداً أم بالبطاقة؟", fr: "Je vous en prie. À la caisse : vous payez en espèces ou par carte ?" },
      },
      {
        id: "n3-choice",
        speaker: "user_choice",
        choices: [
          { id: "c3", de: "Mit Karte, bitte.", ar: "بالبطاقة من فضلك.", fr: "Par carte, s'il vous plaît.", nextNodeId: "n4", xp: 5 },
          { id: "c4", de: "Bar, bitte.", ar: "نقداً من فضلك.", fr: "En espèces, s'il vous plaît.", nextNodeId: "n4", xp: 5 },
        ],
      },
      {
        id: "n4",
        speaker: "npc",
        npcLine: { de: "Alles klar, einen schönen Tag noch!", ar: "حسناً، أتمنى لك يوماً جميلاً!", fr: "Très bien, bonne journée !" },
      },
    ],
  },

  // ---------- Doctor ----------
  {
    id: "conv-a1-doctor",
    title: { de: "Beim Arzt", ar: "عند الطبيب", fr: "Chez le médecin" },
    level: "A1",
    setting: "doctor",
    startNodeId: "n1",
    xpReward: 25,
    nodes: [
      {
        id: "n1",
        speaker: "npc",
        npcLine: { de: "Guten Tag, was fehlt Ihnen?", ar: "طاب يومك، ما هي المشكلة؟", fr: "Bonjour, quel est votre problème ?" },
      },
      {
        id: "n1-choice",
        speaker: "user_choice",
        choices: [
          { id: "c1", de: "Ich habe Kopfschmerzen.", ar: "لدي صداع.", fr: "J'ai mal à la tête.", nextNodeId: "n2", xp: 5 },
          { id: "c2", de: "Ich bin krank und habe Fieber.", ar: "أنا مريض ولدي حمى.", fr: "Je suis malade et j'ai de la fièvre.", nextNodeId: "n2", xp: 5 },
        ],
      },
      {
        id: "n2",
        speaker: "npc",
        npcLine: { de: "Seit wann haben Sie diese Schmerzen?", ar: "منذ متى تشعر بهذا الألم؟", fr: "Depuis quand avez-vous ces douleurs ?" },
      },
      {
        id: "n2-choice",
        speaker: "user_choice",
        choices: [
          { id: "c3", de: "Seit zwei Tagen.", ar: "منذ يومين.", fr: "Depuis deux jours.", nextNodeId: "n3", xp: 5 },
        ],
      },
      {
        id: "n3",
        speaker: "npc",
        npcLine: { de: "Ich verschreibe Ihnen ein Medikament. Gehen Sie zur Apotheke.", ar: "سأصف لك دواءً. اذهب إلى الصيدلية.", fr: "Je vous prescris un médicament. Allez à la pharmacie." },
      },
      {
        id: "n3-choice",
        speaker: "user_choice",
        choices: [
          { id: "c4", de: "Vielen Dank, Herr Doktor.", ar: "شكراً جزيلاً يا دكتور.", fr: "Merci beaucoup, docteur.", nextNodeId: "n4", xp: 5 },
        ],
      },
      {
        id: "n4",
        speaker: "npc",
        npcLine: { de: "Gute Besserung!", ar: "شفاءً عاجلاً!", fr: "Bon rétablissement !" },
      },
    ],
  },

  // ---------- Asking for directions ----------
  {
    id: "conv-a1-directions",
    title: { de: "Nach dem Weg fragen", ar: "السؤال عن الطريق", fr: "Demander son chemin" },
    level: "A1",
    setting: "street",
    startNodeId: "n1",
    xpReward: 25,
    nodes: [
      {
        id: "n1",
        speaker: "user_choice",
        choices: [
          { id: "c1", de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين المحطة؟", fr: "Excusez-moi, où est la gare ?", nextNodeId: "n2", xp: 5 },
        ],
      },
      {
        id: "n2",
        speaker: "npc",
        npcLine: { de: "Gehen Sie geradeaus und dann links.", ar: "اذهب إلى الأمام ثم انعطف يساراً.", fr: "Allez tout droit puis à gauche." },
      },
      {
        id: "n2-choice",
        speaker: "user_choice",
        choices: [
          { id: "c2", de: "Ist es weit von hier?", ar: "هل هو بعيد من هنا؟", fr: "Est-ce loin d'ici ?", nextNodeId: "n3", xp: 5 },
        ],
      },
      {
        id: "n3",
        speaker: "npc",
        npcLine: { de: "Nein, nur fünf Minuten zu Fuß.", ar: "لا، فقط خمس دقائق سيراً على الأقدام.", fr: "Non, seulement cinq minutes à pied." },
      },
      {
        id: "n3-choice",
        speaker: "user_choice",
        choices: [
          { id: "c3", de: "Vielen Dank für Ihre Hilfe!", ar: "شكراً جزيلاً على مساعدتك!", fr: "Merci beaucoup pour votre aide !", nextNodeId: "n4", xp: 5 },
        ],
      },
      {
        id: "n4",
        speaker: "npc",
        npcLine: { de: "Kein Problem, einen schönen Tag!", ar: "لا مشكلة، أتمنى لك يوماً جميلاً!", fr: "Pas de problème, bonne journée !" },
      },
    ],
  },
];
