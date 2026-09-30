import { VocabItem } from "@/types";

// A1 VOCABULARY — organized to match the 30 A1 lessons.
// id convention: v-a1-XXX
export const A1_VOCABULARY: VocabItem[] = [
  // ---------- Greetings (lesson a1-01) ----------
  { id: "v-a1-001", german: "Hallo", arabic: "مرحباً", french: "Salut", pronunciation: "HA-lo", exampleSentence: { de: "Hallo, wie geht's?", ar: "مرحباً، كيف حالك؟", fr: "Salut, ça va ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-002", german: "Guten Morgen", arabic: "صباح الخير", french: "Bonjour (matin)", pronunciation: "GOO-ten MOR-gen", exampleSentence: { de: "Guten Morgen, Frau Klein!", ar: "صباح الخير يا سيدة كلاين!", fr: "Bonjour, Madame Klein !" }, level: "A1", category: "daily_life" },
  { id: "v-a1-003", german: "Guten Tag", arabic: "طاب يومك", french: "Bonjour (journée)", pronunciation: "GOO-ten TAHK", exampleSentence: { de: "Guten Tag, ich heiße Lisa.", ar: "طاب يومك، اسمي ليزا.", fr: "Bonjour, je m'appelle Lisa." }, level: "A1", category: "daily_life" },
  { id: "v-a1-004", german: "Guten Abend", arabic: "مساء الخير", french: "Bonsoir", pronunciation: "GOO-ten AH-bent", exampleSentence: { de: "Guten Abend, herzlich willkommen.", ar: "مساء الخير، أهلاً وسهلاً.", fr: "Bonsoir, bienvenue." }, level: "A1", category: "daily_life" },
  { id: "v-a1-005", german: "Auf Wiedersehen", arabic: "مع السلامة", french: "Au revoir", pronunciation: "owf VEE-der-zehn", exampleSentence: { de: "Auf Wiedersehen, bis morgen!", ar: "مع السلامة، إلى الغد!", fr: "Au revoir, à demain !" }, level: "A1", category: "daily_life" },
  { id: "v-a1-006", german: "Tschüss", arabic: "وداعاً", french: "Salut (au revoir)", pronunciation: "chooss", exampleSentence: { de: "Tschüss, mach's gut!", ar: "وداعاً، اعتنِ بنفسك!", fr: "Salut, prends soin de toi !" }, level: "A1", category: "daily_life" },
  { id: "v-a1-007", german: "Danke", arabic: "شكراً", french: "Merci", pronunciation: "DAN-keh", exampleSentence: { de: "Danke schön!", ar: "شكراً جزيلاً!", fr: "Merci beaucoup !" }, level: "A1", category: "daily_life" },
  { id: "v-a1-008", german: "Bitte", arabic: "من فضلك / عفواً", french: "S'il vous plaît / Je vous en prie", pronunciation: "BIT-teh", exampleSentence: { de: "Ein Kaffee, bitte.", ar: "قهوة من فضلك.", fr: "Un café, s'il vous plaît." }, level: "A1", category: "daily_life" },
  { id: "v-a1-009", german: "Entschuldigung", arabic: "عذراً", french: "Excusez-moi", pronunciation: "ent-SHOOL-di-gung", exampleSentence: { de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين المحطة؟", fr: "Excusez-moi, où est la gare ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-010", german: "Ja", arabic: "نعم", french: "Oui", pronunciation: "yah", exampleSentence: { de: "Ja, gerne.", ar: "نعم، بكل سرور.", fr: "Oui, avec plaisir." }, level: "A1", category: "daily_life" },
  { id: "v-a1-011", german: "Nein", arabic: "لا", french: "Non", pronunciation: "nine", exampleSentence: { de: "Nein, danke.", ar: "لا، شكراً.", fr: "Non, merci." }, level: "A1", category: "daily_life" },

  // ---------- Introducing yourself (a1-02) ----------
  { id: "v-a1-012", german: "der Name", article: "der", plural: "die Namen", arabic: "الاسم", french: "le nom", pronunciation: "dair NAH-meh", exampleSentence: { de: "Mein Name ist Ahmed.", ar: "اسمي أحمد.", fr: "Mon nom est Ahmed." }, level: "A1", category: "daily_life" },
  { id: "v-a1-013", german: "heißen", arabic: "يُدعى / اسمه", french: "s'appeler", pronunciation: "HY-sen", exampleSentence: { de: "Ich heiße Sara.", ar: "اسمي سارة.", fr: "Je m'appelle Sara." }, level: "A1", category: "daily_life" },
  { id: "v-a1-014", german: "kommen aus", arabic: "يأتي من", french: "venir de", pronunciation: "KOM-men ows", exampleSentence: { de: "Ich komme aus Marokko.", ar: "أنا من المغرب.", fr: "Je viens du Maroc." }, level: "A1", category: "daily_life" },
  { id: "v-a1-015", german: "das Land", article: "das", plural: "die Länder", arabic: "البلد", french: "le pays", pronunciation: "dass LAHNT", exampleSentence: { de: "Welches Land ist das?", ar: "ما هو هذا البلد؟", fr: "Quel pays est-ce ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-016", german: "wohnen", arabic: "يسكن", french: "habiter", pronunciation: "VOH-nen", exampleSentence: { de: "Ich wohne in Berlin.", ar: "أسكن في برلين.", fr: "J'habite à Berlin." }, level: "A1", category: "home" },
  { id: "v-a1-017", german: "das Alter", article: "das", arabic: "العمر", french: "l'âge", pronunciation: "dass AL-ter", exampleSentence: { de: "Wie alt bist du?", ar: "كم عمرك؟", fr: "Quel âge as-tu ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-018", german: "sprechen", arabic: "يتحدث", french: "parler", pronunciation: "SHPREH-khen", exampleSentence: { de: "Ich spreche ein bisschen Deutsch.", ar: "أتحدث الألمانية قليلاً.", fr: "Je parle un peu allemand." }, level: "A1", category: "communication" },
  { id: "v-a1-019", german: "der Beruf", article: "der", plural: "die Berufe", arabic: "المهنة", french: "le métier", pronunciation: "dair beh-ROOF", exampleSentence: { de: "Was ist dein Beruf?", ar: "ما هي مهنتك؟", fr: "Quel est ton métier ?" }, level: "A1", category: "jobs" },

  // ---------- Numbers (a1-03) ----------
  { id: "v-a1-020", german: "eins", arabic: "واحد", french: "un", pronunciation: "eyens", exampleSentence: { de: "Ich habe eins.", ar: "لدي واحد.", fr: "J'en ai un." }, level: "A1", category: "daily_life" },
  { id: "v-a1-021", german: "zwei", arabic: "اثنان", french: "deux", pronunciation: "tsvy", exampleSentence: { de: "Zwei Kaffee, bitte.", ar: "قهوتان من فضلك.", fr: "Deux cafés, s'il vous plaît." }, level: "A1", category: "daily_life" },
  { id: "v-a1-022", german: "drei", arabic: "ثلاثة", french: "trois", pronunciation: "dry", exampleSentence: { de: "Wir sind drei Personen.", ar: "نحن ثلاثة أشخاص.", fr: "Nous sommes trois personnes." }, level: "A1", category: "daily_life" },
  { id: "v-a1-023", german: "zehn", arabic: "عشرة", french: "dix", pronunciation: "tsehn", exampleSentence: { de: "Das kostet zehn Euro.", ar: "يكلف هذا عشرة يورو.", fr: "Ça coûte dix euros." }, level: "A1", category: "money" },
  { id: "v-a1-024", german: "zwanzig", arabic: "عشرون", french: "vingt", pronunciation: "TSVAN-tsikh", exampleSentence: { de: "Ich bin zwanzig Jahre alt.", ar: "عمري عشرون سنة.", fr: "J'ai vingt ans." }, level: "A1", category: "daily_life" },
  { id: "v-a1-025", german: "hundert", arabic: "مئة", french: "cent", pronunciation: "HOON-dert", exampleSentence: { de: "Hundert Euro, bitte.", ar: "مئة يورو من فضلك.", fr: "Cent euros, s'il vous plaît." }, level: "A1", category: "money" },

  // ---------- Family (a1-04) ----------
  { id: "v-a1-026", german: "die Familie", article: "die", plural: "die Familien", arabic: "العائلة", french: "la famille", pronunciation: "dee fa-MEE-lee-eh", exampleSentence: { de: "Meine Familie ist groß.", ar: "عائلتي كبيرة.", fr: "Ma famille est grande." }, level: "A1", category: "family" },
  { id: "v-a1-027", german: "die Mutter", article: "die", plural: "die Mütter", arabic: "الأم", french: "la mère", pronunciation: "dee MUT-ter", exampleSentence: { de: "Meine Mutter kocht gern.", ar: "أمي تحب الطبخ.", fr: "Ma mère aime cuisiner." }, level: "A1", category: "family" },
  { id: "v-a1-028", german: "der Vater", article: "der", plural: "die Väter", arabic: "الأب", french: "le père", pronunciation: "dair FAH-ter", exampleSentence: { de: "Mein Vater arbeitet viel.", ar: "أبي يعمل كثيراً.", fr: "Mon père travaille beaucoup." }, level: "A1", category: "family" },
  { id: "v-a1-029", german: "der Bruder", article: "der", plural: "die Brüder", arabic: "الأخ", french: "le frère", pronunciation: "dair BROO-der", exampleSentence: { de: "Ich habe einen Bruder.", ar: "لدي أخ واحد.", fr: "J'ai un frère." }, level: "A1", category: "family" },
  { id: "v-a1-030", german: "die Schwester", article: "die", plural: "die Schwestern", arabic: "الأخت", french: "la sœur", pronunciation: "dee SHVES-ter", exampleSentence: { de: "Meine Schwester ist Ärztin.", ar: "أختي طبيبة.", fr: "Ma sœur est médecin." }, level: "A1", category: "family" },
  { id: "v-a1-031", german: "das Kind", article: "das", plural: "die Kinder", arabic: "الطفل", french: "l'enfant", pronunciation: "dass kint", exampleSentence: { de: "Das Kind spielt im Garten.", ar: "الطفل يلعب في الحديقة.", fr: "L'enfant joue dans le jardin." }, level: "A1", category: "family" },
  { id: "v-a1-032", german: "verheiratet", arabic: "متزوج", french: "marié(e)", pronunciation: "fer-hy-RAH-tet", exampleSentence: { de: "Sie ist verheiratet.", ar: "هي متزوجة.", fr: "Elle est mariée." }, level: "A1", category: "family" },

  // ---------- Food (a1-05) ----------
  { id: "v-a1-033", german: "das Brot", article: "das", plural: "die Brote", arabic: "الخبز", french: "le pain", pronunciation: "dass broht", exampleSentence: { de: "Ich esse Brot zum Frühstück.", ar: "آكل الخبز في الفطور.", fr: "Je mange du pain au petit-déjeuner." }, level: "A1", category: "food" },
  { id: "v-a1-034", german: "der Käse", article: "der", arabic: "الجبن", french: "le fromage", pronunciation: "dair KAY-zeh", exampleSentence: { de: "Der Käse schmeckt gut.", ar: "الجبن لذيذ.", fr: "Le fromage est bon." }, level: "A1", category: "food" },
  { id: "v-a1-035", german: "das Obst", article: "das", arabic: "الفاكهة", french: "les fruits", pronunciation: "dass ohpst", exampleSentence: { de: "Ich esse gern Obst.", ar: "أحب أكل الفاكهة.", fr: "J'aime manger des fruits." }, level: "A1", category: "food" },
  { id: "v-a1-036", german: "das Gemüse", article: "das", arabic: "الخضار", french: "les légumes", pronunciation: "dass geh-MUE-zeh", exampleSentence: { de: "Gemüse ist gesund.", ar: "الخضار مفيد للصحة.", fr: "Les légumes sont bons pour la santé." }, level: "A1", category: "food" },
  { id: "v-a1-037", german: "das Fleisch", article: "das", arabic: "اللحم", french: "la viande", pronunciation: "dass flysh", exampleSentence: { de: "Ich esse kein Fleisch.", ar: "لا آكل اللحم.", fr: "Je ne mange pas de viande." }, level: "A1", category: "food" },
  { id: "v-a1-038", german: "der Reis", article: "der", arabic: "الأرز", french: "le riz", pronunciation: "dair rice", exampleSentence: { de: "Reis mit Gemüse, bitte.", ar: "أرز مع الخضار من فضلك.", fr: "Du riz avec des légumes, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-039", german: "das Ei", article: "das", plural: "die Eier", arabic: "البيضة", french: "l'œuf", pronunciation: "dass eye", exampleSentence: { de: "Zwei Eier, bitte.", ar: "بيضتان من فضلك.", fr: "Deux œufs, s'il vous plaît." }, level: "A1", category: "food" },

  // ---------- Drinks (a1-06) ----------
  { id: "v-a1-040", german: "das Wasser", article: "das", arabic: "الماء", french: "l'eau", pronunciation: "dass VAS-ser", exampleSentence: { de: "Ein Glas Wasser, bitte.", ar: "كأس ماء من فضلك.", fr: "Un verre d'eau, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-041", german: "der Kaffee", article: "der", arabic: "القهوة", french: "le café", pronunciation: "dair ka-FEH", exampleSentence: { de: "Ich trinke gern Kaffee.", ar: "أحب شرب القهوة.", fr: "J'aime boire du café." }, level: "A1", category: "food" },
  { id: "v-a1-042", german: "der Tee", article: "der", arabic: "الشاي", french: "le thé", pronunciation: "dair teh", exampleSentence: { de: "Tee mit Zucker, bitte.", ar: "شاي مع سكر من فضلك.", fr: "Du thé avec du sucre, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-043", german: "der Saft", article: "der", plural: "die Säfte", arabic: "العصير", french: "le jus", pronunciation: "dair zaft", exampleSentence: { de: "Orangensaft, bitte.", ar: "عصير برتقال من فضلك.", fr: "Du jus d'orange, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-044", german: "die Milch", article: "die", arabic: "الحليب", french: "le lait", pronunciation: "dee milkh", exampleSentence: { de: "Milch für den Kaffee, bitte.", ar: "حليب للقهوة من فضلك.", fr: "Du lait pour le café, s'il vous plaît." }, level: "A1", category: "food" },

  // ---------- Café (a1-07) ----------
  { id: "v-a1-045", german: "die Speisekarte", article: "die", arabic: "قائمة الطعام", french: "le menu", pronunciation: "dee SHPY-zeh-kar-teh", exampleSentence: { de: "Die Speisekarte, bitte.", ar: "قائمة الطعام من فضلك.", fr: "La carte, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-046", german: "bestellen", arabic: "يطلب", french: "commander", pronunciation: "beh-SHTEL-len", exampleSentence: { de: "Ich möchte bestellen.", ar: "أريد أن أطلب.", fr: "Je voudrais commander." }, level: "A1", category: "food" },
  { id: "v-a1-047", german: "der Kuchen", article: "der", plural: "die Kuchen", arabic: "الكعكة", french: "le gâteau", pronunciation: "dair KOO-khen", exampleSentence: { de: "Ein Stück Kuchen, bitte.", ar: "قطعة كعك من فضلك.", fr: "Une part de gâteau, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-048", german: "die Rechnung", article: "die", plural: "die Rechnungen", arabic: "الفاتورة", french: "l'addition", pronunciation: "dee REKH-nung", exampleSentence: { de: "Die Rechnung, bitte.", ar: "الفاتورة من فضلك.", fr: "L'addition, s'il vous plaît." }, level: "A1", category: "money" },

  // ---------- Restaurant (a1-08) ----------
  { id: "v-a1-049", german: "der Tisch", article: "der", plural: "die Tische", arabic: "الطاولة", french: "la table", pronunciation: "dair tish", exampleSentence: { de: "Ein Tisch für zwei, bitte.", ar: "طاولة لشخصين من فضلك.", fr: "Une table pour deux, s'il vous plaît." }, level: "A1", category: "food" },
  { id: "v-a1-050", german: "reserviert", arabic: "محجوز", french: "réservé", pronunciation: "reh-zer-VEERT", exampleSentence: { de: "Der Tisch ist reserviert.", ar: "الطاولة محجوزة.", fr: "La table est réservée." }, level: "A1", category: "food" },
  { id: "v-a1-051", german: "lecker", arabic: "لذيذ", french: "délicieux", pronunciation: "LEK-ker", exampleSentence: { de: "Das Essen ist sehr lecker.", ar: "الطعام لذيذ جداً.", fr: "Le repas est très délicieux." }, level: "A1", category: "food" },
  { id: "v-a1-052", german: "der Kellner", article: "der", plural: "die Kellner", arabic: "النادل", french: "le serveur", pronunciation: "dair KEL-ner", exampleSentence: { de: "Der Kellner ist sehr freundlich.", ar: "النادل ودود جداً.", fr: "Le serveur est très aimable." }, level: "A1", category: "jobs" },

  // ---------- Shopping (a1-09) ----------
  { id: "v-a1-053", german: "kaufen", arabic: "يشتري", french: "acheter", pronunciation: "KOW-fen", exampleSentence: { de: "Ich möchte das kaufen.", ar: "أريد أن أشتري هذا.", fr: "Je voudrais acheter ça." }, level: "A1", category: "shopping" },
  { id: "v-a1-054", german: "der Preis", article: "der", plural: "die Preise", arabic: "السعر", french: "le prix", pronunciation: "dair pryss", exampleSentence: { de: "Wie ist der Preis?", ar: "كم السعر؟", fr: "Quel est le prix ?" }, level: "A1", category: "money" },
  { id: "v-a1-055", german: "teuer", arabic: "غالي", french: "cher", pronunciation: "TOY-er", exampleSentence: { de: "Das ist zu teuer.", ar: "هذا غالٍ جداً.", fr: "C'est trop cher." }, level: "A1", category: "money" },
  { id: "v-a1-056", german: "billig", arabic: "رخيص", french: "pas cher", pronunciation: "BIL-likh", exampleSentence: { de: "Das ist billig.", ar: "هذا رخيص.", fr: "C'est pas cher." }, level: "A1", category: "money" },
  { id: "v-a1-057", german: "die Größe", article: "die", plural: "die Größen", arabic: "المقاس", french: "la taille", pronunciation: "dee GRUR-seh", exampleSentence: { de: "Welche Größe brauchen Sie?", ar: "ما هو مقاسك؟", fr: "Quelle taille vous faut-il ?" }, level: "A1", category: "shopping" },

  // ---------- Supermarket (a1-10) ----------
  { id: "v-a1-058", german: "der Supermarkt", article: "der", plural: "die Supermärkte", arabic: "السوبرماركت", french: "le supermarché", pronunciation: "dair ZOO-per-markt", exampleSentence: { de: "Ich gehe zum Supermarkt.", ar: "أذهب إلى السوبرماركت.", fr: "Je vais au supermarché." }, level: "A1", category: "shopping" },
  { id: "v-a1-059", german: "der Einkaufswagen", article: "der", plural: "die Einkaufswagen", arabic: "عربة التسوق", french: "le caddie", pronunciation: "dair EYEN-kowfs-vah-gen", exampleSentence: { de: "Wo sind die Einkaufswagen?", ar: "أين عربات التسوق؟", fr: "Où sont les caddies ?" }, level: "A1", category: "shopping" },
  { id: "v-a1-060", german: "die Kasse", article: "die", plural: "die Kassen", arabic: "الصندوق (الدفع)", french: "la caisse", pronunciation: "dee KAS-seh", exampleSentence: { de: "Die Kasse ist dort drüben.", ar: "الصندوق هناك.", fr: "La caisse est là-bas." }, level: "A1", category: "shopping" },
  { id: "v-a1-061", german: "bezahlen", arabic: "يدفع", french: "payer", pronunciation: "beh-TSAH-len", exampleSentence: { de: "Ich möchte bar bezahlen.", ar: "أريد الدفع نقداً.", fr: "Je voudrais payer en espèces." }, level: "A1", category: "money" },

  // ---------- Time (a1-11) ----------
  { id: "v-a1-062", german: "die Uhr", article: "die", plural: "die Uhren", arabic: "الساعة", french: "l'heure / la montre", pronunciation: "dee oor", exampleSentence: { de: "Wie viel Uhr ist es?", ar: "كم الساعة؟", fr: "Quelle heure est-il ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-063", german: "die Stunde", article: "die", plural: "die Stunden", arabic: "الساعة (مدة)", french: "l'heure (durée)", pronunciation: "dee SHTOON-deh", exampleSentence: { de: "In einer Stunde.", ar: "بعد ساعة.", fr: "Dans une heure." }, level: "A1", category: "daily_life" },
  { id: "v-a1-064", german: "die Minute", article: "die", plural: "die Minuten", arabic: "الدقيقة", french: "la minute", pronunciation: "dee mi-NOO-teh", exampleSentence: { de: "Fünf Minuten, bitte.", ar: "خمس دقائق من فضلك.", fr: "Cinq minutes, s'il vous plaît." }, level: "A1", category: "daily_life" },
  { id: "v-a1-065", german: "früh", arabic: "مبكراً", french: "tôt", pronunciation: "frue", exampleSentence: { de: "Ich stehe früh auf.", ar: "أستيقظ مبكراً.", fr: "Je me lève tôt." }, level: "A1", category: "daily_life" },
  { id: "v-a1-066", german: "spät", arabic: "متأخراً", french: "tard", pronunciation: "shpayt", exampleSentence: { de: "Es ist schon spät.", ar: "الوقت متأخر بالفعل.", fr: "Il est déjà tard." }, level: "A1", category: "daily_life" },

  // ---------- Days (a1-12) ----------
  { id: "v-a1-067", german: "Montag", arabic: "الإثنين", french: "lundi", pronunciation: "MOHN-tahk", exampleSentence: { de: "Am Montag arbeite ich.", ar: "أعمل يوم الإثنين.", fr: "Je travaille le lundi." }, level: "A1", category: "daily_life" },
  { id: "v-a1-068", german: "Freitag", arabic: "الجمعة", french: "vendredi", pronunciation: "FRY-tahk", exampleSentence: { de: "Freitag ist mein Lieblingstag.", ar: "الجمعة هو يومي المفضل.", fr: "Vendredi est mon jour préféré." }, level: "A1", category: "daily_life" },
  { id: "v-a1-069", german: "das Wochenende", article: "das", arabic: "عطلة نهاية الأسبوع", french: "le week-end", pronunciation: "dass VOKH-en-en-deh", exampleSentence: { de: "Schönes Wochenende!", ar: "عطلة نهاية أسبوع سعيدة!", fr: "Bon week-end !" }, level: "A1", category: "daily_life" },
  { id: "v-a1-070", german: "heute", arabic: "اليوم", french: "aujourd'hui", pronunciation: "HOY-teh", exampleSentence: { de: "Was machst du heute?", ar: "ماذا تفعل اليوم؟", fr: "Que fais-tu aujourd'hui ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-071", german: "morgen", arabic: "غداً", french: "demain", pronunciation: "MOR-gen", exampleSentence: { de: "Bis morgen!", ar: "إلى الغد!", fr: "À demain !" }, level: "A1", category: "daily_life" },

  // ---------- Directions (a1-13) ----------
  { id: "v-a1-072", german: "links", arabic: "يساراً", french: "à gauche", pronunciation: "links", exampleSentence: { de: "Gehen Sie links.", ar: "اذهب يساراً.", fr: "Allez à gauche." }, level: "A1", category: "travel" },
  { id: "v-a1-073", german: "rechts", arabic: "يميناً", french: "à droite", pronunciation: "rekhts", exampleSentence: { de: "Gehen Sie rechts.", ar: "اذهب يميناً.", fr: "Allez à droite." }, level: "A1", category: "travel" },
  { id: "v-a1-074", german: "geradeaus", arabic: "إلى الأمام مباشرة", french: "tout droit", pronunciation: "geh-RAH-deh-ows", exampleSentence: { de: "Gehen Sie geradeaus.", ar: "اذهب إلى الأمام مباشرة.", fr: "Allez tout droit." }, level: "A1", category: "travel" },
  { id: "v-a1-075", german: "die Straße", article: "die", plural: "die Straßen", arabic: "الشارع", french: "la rue", pronunciation: "dee SHTRAH-seh", exampleSentence: { de: "Welche Straße ist das?", ar: "ما هو هذا الشارع؟", fr: "Quelle rue est-ce ?" }, level: "A1", category: "travel" },
  { id: "v-a1-076", german: "die Ecke", article: "die", plural: "die Ecken", arabic: "الزاوية", french: "le coin", pronunciation: "dee EK-keh", exampleSentence: { de: "An der Ecke rechts.", ar: "عند الزاوية إلى اليمين.", fr: "Au coin à droite." }, level: "A1", category: "travel" },

  // ---------- Transport (a1-14) ----------
  { id: "v-a1-077", german: "der Bus", article: "der", plural: "die Busse", arabic: "الحافلة", french: "le bus", pronunciation: "dair booss", exampleSentence: { de: "Der Bus kommt gleich.", ar: "الحافلة قادمة قريباً.", fr: "Le bus arrive bientôt." }, level: "A1", category: "transport" },
  { id: "v-a1-078", german: "der Zug", article: "der", plural: "die Züge", arabic: "القطار", french: "le train", pronunciation: "dair tsook", exampleSentence: { de: "Der Zug fährt um acht.", ar: "القطار ينطلق الساعة الثامنة.", fr: "Le train part à huit heures." }, level: "A1", category: "transport" },
  { id: "v-a1-079", german: "der Bahnhof", article: "der", plural: "die Bahnhöfe", arabic: "المحطة", french: "la gare", pronunciation: "dair BAHN-hohf", exampleSentence: { de: "Wo ist der Bahnhof?", ar: "أين المحطة؟", fr: "Où est la gare ?" }, level: "A1", category: "transport" },
  { id: "v-a1-080", german: "die Fahrkarte", article: "die", plural: "die Fahrkarten", arabic: "تذكرة السفر", french: "le billet", pronunciation: "dee FAHR-kar-teh", exampleSentence: { de: "Eine Fahrkarte nach Berlin, bitte.", ar: "تذكرة إلى برلين من فضلك.", fr: "Un billet pour Berlin, s'il vous plaît." }, level: "A1", category: "transport" },

  // ---------- Home (a1-15) ----------
  { id: "v-a1-081", german: "die Wohnung", article: "die", plural: "die Wohnungen", arabic: "الشقة", french: "l'appartement", pronunciation: "dee VOH-nung", exampleSentence: { de: "Meine Wohnung ist klein.", ar: "شقتي صغيرة.", fr: "Mon appartement est petit." }, level: "A1", category: "home" },
  { id: "v-a1-082", german: "das Zimmer", article: "das", plural: "die Zimmer", arabic: "الغرفة", french: "la pièce / la chambre", pronunciation: "dass TSIM-mer", exampleSentence: { de: "Das Zimmer ist hell.", ar: "الغرفة مضيئة.", fr: "La pièce est lumineuse." }, level: "A1", category: "home" },
  { id: "v-a1-083", german: "die Küche", article: "die", plural: "die Küchen", arabic: "المطبخ", french: "la cuisine", pronunciation: "dee KUE-kheh", exampleSentence: { de: "Die Küche ist modern.", ar: "المطبخ حديث.", fr: "La cuisine est moderne." }, level: "A1", category: "home" },
  { id: "v-a1-084", german: "das Bad", article: "das", plural: "die Bäder", arabic: "الحمام", french: "la salle de bain", pronunciation: "dass baht", exampleSentence: { de: "Wo ist das Bad?", ar: "أين الحمام؟", fr: "Où est la salle de bain ?" }, level: "A1", category: "home" },

  // ---------- Basic work (a1-16) ----------
  { id: "v-a1-085", german: "arbeiten", arabic: "يعمل", french: "travailler", pronunciation: "AR-by-ten", exampleSentence: { de: "Ich arbeite im Büro.", ar: "أعمل في المكتب.", fr: "Je travaille au bureau." }, level: "A1", category: "work" },
  { id: "v-a1-086", german: "das Büro", article: "das", plural: "die Büros", arabic: "المكتب", french: "le bureau", pronunciation: "dass bue-ROH", exampleSentence: { de: "Das Büro ist im dritten Stock.", ar: "المكتب في الطابق الثالث.", fr: "Le bureau est au troisième étage." }, level: "A1", category: "work" },
  { id: "v-a1-087", german: "der Kollege", article: "der", plural: "die Kollegen", arabic: "الزميل", french: "le collègue", pronunciation: "dair kol-LEH-geh", exampleSentence: { de: "Mein Kollege heißt Tom.", ar: "زميلي اسمه توم.", fr: "Mon collègue s'appelle Tom." }, level: "A1", category: "work" },
  { id: "v-a1-088", german: "der Chef", article: "der", plural: "die Chefs", arabic: "المدير", french: "le chef / patron", pronunciation: "dair shef", exampleSentence: { de: "Der Chef ist nicht da.", ar: "المدير غير موجود.", fr: "Le patron n'est pas là." }, level: "A1", category: "work" },

  // ---------- Doctor (a1-17) ----------
  { id: "v-a1-089", german: "der Arzt", article: "der", plural: "die Ärzte", arabic: "الطبيب", french: "le médecin", pronunciation: "dair ahrtst", exampleSentence: { de: "Ich brauche einen Arzt.", ar: "أحتاج طبيباً.", fr: "J'ai besoin d'un médecin." }, level: "A1", category: "health" },
  { id: "v-a1-090", german: "krank", arabic: "مريض", french: "malade", pronunciation: "krahnk", exampleSentence: { de: "Ich bin krank.", ar: "أنا مريض.", fr: "Je suis malade." }, level: "A1", category: "health" },
  { id: "v-a1-091", german: "die Schmerzen", article: "die", arabic: "الألم", french: "les douleurs", pronunciation: "dee SHMER-tsen", exampleSentence: { de: "Ich habe Kopfschmerzen.", ar: "لدي صداع.", fr: "J'ai mal à la tête." }, level: "A1", category: "health" },
  { id: "v-a1-092", german: "der Termin", article: "der", plural: "die Termine", arabic: "الموعد", french: "le rendez-vous", pronunciation: "dair ter-MEEN", exampleSentence: { de: "Ich habe einen Termin um zehn.", ar: "لدي موعد الساعة العاشرة.", fr: "J'ai un rendez-vous à dix heures." }, level: "A1", category: "administration" },

  // ---------- Pharmacy (a1-18) ----------
  { id: "v-a1-093", german: "die Apotheke", article: "die", plural: "die Apotheken", arabic: "الصيدلية", french: "la pharmacie", pronunciation: "dee ah-poh-TEH-keh", exampleSentence: { de: "Die Apotheke ist geöffnet.", ar: "الصيدلية مفتوحة.", fr: "La pharmacie est ouverte." }, level: "A1", category: "health" },
  { id: "v-a1-094", german: "das Medikament", article: "das", plural: "die Medikamente", arabic: "الدواء", french: "le médicament", pronunciation: "dass meh-di-ka-MENT", exampleSentence: { de: "Ich brauche ein Medikament.", ar: "أحتاج إلى دواء.", fr: "J'ai besoin d'un médicament." }, level: "A1", category: "health" },
  { id: "v-a1-095", german: "das Rezept", article: "das", plural: "die Rezepte", arabic: "الوصفة الطبية", french: "l'ordonnance", pronunciation: "dass reh-TSEPT", exampleSentence: { de: "Haben Sie ein Rezept?", ar: "هل لديك وصفة طبية؟", fr: "Avez-vous une ordonnance ?" }, level: "A1", category: "health" },

  // ---------- Colors (a1-19) ----------
  { id: "v-a1-096", german: "rot", arabic: "أحمر", french: "rouge", pronunciation: "roht", exampleSentence: { de: "Das Auto ist rot.", ar: "السيارة حمراء.", fr: "La voiture est rouge." }, level: "A1", category: "daily_life" },
  { id: "v-a1-097", german: "blau", arabic: "أزرق", french: "bleu", pronunciation: "blow", exampleSentence: { de: "Der Himmel ist blau.", ar: "السماء زرقاء.", fr: "Le ciel est bleu." }, level: "A1", category: "daily_life" },
  { id: "v-a1-098", german: "grün", arabic: "أخضر", french: "vert", pronunciation: "gruen", exampleSentence: { de: "Das Gras ist grün.", ar: "العشب أخضر.", fr: "L'herbe est verte." }, level: "A1", category: "daily_life" },
  { id: "v-a1-099", german: "schwarz", arabic: "أسود", french: "noir", pronunciation: "shvarts", exampleSentence: { de: "Meine Tasche ist schwarz.", ar: "حقيبتي سوداء.", fr: "Mon sac est noir." }, level: "A1", category: "daily_life" },
  { id: "v-a1-100", german: "weiß", arabic: "أبيض", french: "blanc", pronunciation: "vice", exampleSentence: { de: "Das Hemd ist weiß.", ar: "القميص أبيض.", fr: "La chemise est blanche." }, level: "A1", category: "daily_life" },

  // ---------- Weather (a1-20) ----------
  { id: "v-a1-101", german: "das Wetter", article: "das", arabic: "الطقس", french: "le temps (météo)", pronunciation: "dass VET-ter", exampleSentence: { de: "Wie ist das Wetter heute?", ar: "كيف هو الطقس اليوم؟", fr: "Quel temps fait-il aujourd'hui ?" }, level: "A1", category: "weather" },
  { id: "v-a1-102", german: "die Sonne", article: "die", arabic: "الشمس", french: "le soleil", pronunciation: "dee ZON-neh", exampleSentence: { de: "Die Sonne scheint.", ar: "الشمس مشرقة.", fr: "Le soleil brille." }, level: "A1", category: "weather" },
  { id: "v-a1-103", german: "der Regen", article: "der", arabic: "المطر", french: "la pluie", pronunciation: "dair REH-gen", exampleSentence: { de: "Es gibt viel Regen.", ar: "هناك مطر غزير.", fr: "Il y a beaucoup de pluie." }, level: "A1", category: "weather" },
  { id: "v-a1-104", german: "kalt", arabic: "بارد", french: "froid", pronunciation: "kalt", exampleSentence: { de: "Heute ist es kalt.", ar: "الجو بارد اليوم.", fr: "Il fait froid aujourd'hui." }, level: "A1", category: "weather" },
  { id: "v-a1-105", german: "warm", arabic: "دافئ", french: "chaud", pronunciation: "varm", exampleSentence: { de: "Im Sommer ist es warm.", ar: "الجو دافئ في الصيف.", fr: "Il fait chaud en été." }, level: "A1", category: "weather" },

  // ---------- Clothes (a1-21) ----------
  { id: "v-a1-106", german: "die Hose", article: "die", plural: "die Hosen", arabic: "السروال", french: "le pantalon", pronunciation: "dee HOH-zeh", exampleSentence: { de: "Die Hose ist zu groß.", ar: "السروال كبير جداً.", fr: "Le pantalon est trop grand." }, level: "A1", category: "shopping" },
  { id: "v-a1-107", german: "das Hemd", article: "das", plural: "die Hemden", arabic: "القميص", french: "la chemise", pronunciation: "dass hemt", exampleSentence: { de: "Ich trage ein blaues Hemd.", ar: "أرتدي قميصاً أزرقاً.", fr: "Je porte une chemise bleue." }, level: "A1", category: "shopping" },
  { id: "v-a1-108", german: "die Schuhe", article: "die", arabic: "الأحذية", french: "les chaussures", pronunciation: "dee SHOO-eh", exampleSentence: { de: "Meine Schuhe sind neu.", ar: "حذائي جديد.", fr: "Mes chaussures sont neuves." }, level: "A1", category: "shopping" },
  { id: "v-a1-109", german: "die Jacke", article: "die", plural: "die Jacken", arabic: "السترة", french: "la veste", pronunciation: "dee YAK-keh", exampleSentence: { de: "Nimm deine Jacke mit.", ar: "خذ سترتك معك.", fr: "Prends ta veste." }, level: "A1", category: "shopping" },

  // ---------- Body parts (a1-22) ----------
  { id: "v-a1-110", german: "der Kopf", article: "der", plural: "die Köpfe", arabic: "الرأس", french: "la tête", pronunciation: "dair kopf", exampleSentence: { de: "Mein Kopf tut weh.", ar: "رأسي يؤلمني.", fr: "J'ai mal à la tête." }, level: "A1", category: "health" },
  { id: "v-a1-111", german: "die Hand", article: "die", plural: "die Hände", arabic: "اليد", french: "la main", pronunciation: "dee hant", exampleSentence: { de: "Gib mir deine Hand.", ar: "أعطني يدك.", fr: "Donne-moi ta main." }, level: "A1", category: "health" },
  { id: "v-a1-112", german: "der Fuß", article: "der", plural: "die Füße", arabic: "القدم", french: "le pied", pronunciation: "dair foose", exampleSentence: { de: "Mein Fuß tut weh.", ar: "قدمي تؤلمني.", fr: "J'ai mal au pied." }, level: "A1", category: "health" },
  { id: "v-a1-113", german: "das Auge", article: "das", plural: "die Augen", arabic: "العين", french: "l'œil", pronunciation: "dass OW-geh", exampleSentence: { de: "Sie hat blaue Augen.", ar: "لديها عيون زرقاء.", fr: "Elle a les yeux bleus." }, level: "A1", category: "health" },

  // ---------- Hobbies (a1-23) ----------
  { id: "v-a1-114", german: "lesen", arabic: "يقرأ", french: "lire", pronunciation: "LEH-zen", exampleSentence: { de: "Ich lese gern Bücher.", ar: "أحب قراءة الكتب.", fr: "J'aime lire des livres." }, level: "A1", category: "daily_life" },
  { id: "v-a1-115", german: "schwimmen", arabic: "يسبح", french: "nager", pronunciation: "SHVIM-men", exampleSentence: { de: "Ich schwimme jeden Samstag.", ar: "أسبح كل يوم سبت.", fr: "Je nage tous les samedis." }, level: "A1", category: "daily_life" },
  { id: "v-a1-116", german: "kochen", arabic: "يطبخ", french: "cuisiner", pronunciation: "KOKH-en", exampleSentence: { de: "Er kocht sehr gut.", ar: "هو يطبخ جيداً جداً.", fr: "Il cuisine très bien." }, level: "A1", category: "daily_life" },
  { id: "v-a1-117", german: "die Musik", article: "die", arabic: "الموسيقى", french: "la musique", pronunciation: "dee moo-ZEEK", exampleSentence: { de: "Ich höre gern Musik.", ar: "أحب سماع الموسيقى.", fr: "J'aime écouter de la musique." }, level: "A1", category: "daily_life" },

  // ---------- Daily routine (a1-24) ----------
  { id: "v-a1-118", german: "aufstehen", arabic: "يستيقظ", french: "se lever", pronunciation: "OWF-shteh-en", exampleSentence: { de: "Ich stehe um sieben auf.", ar: "أستيقظ الساعة السابعة.", fr: "Je me lève à sept heures." }, level: "A1", category: "daily_life" },
  { id: "v-a1-119", german: "duschen", arabic: "يستحم", french: "se doucher", pronunciation: "DOO-shen", exampleSentence: { de: "Ich dusche jeden Morgen.", ar: "أستحم كل صباح.", fr: "Je me douche tous les matins." }, level: "A1", category: "daily_life" },
  { id: "v-a1-120", german: "frühstücken", arabic: "يتناول الفطور", french: "prendre le petit-déjeuner", pronunciation: "FRUE-shtue-ken", exampleSentence: { de: "Wir frühstücken zusammen.", ar: "نتناول الفطور معاً.", fr: "Nous prenons le petit-déjeuner ensemble." }, level: "A1", category: "daily_life" },
  { id: "v-a1-121", german: "schlafen", arabic: "ينام", french: "dormir", pronunciation: "SHLAH-fen", exampleSentence: { de: "Ich schlafe acht Stunden.", ar: "أنام ثماني ساعات.", fr: "Je dors huit heures." }, level: "A1", category: "daily_life" },

  // ---------- At school (a1-25) ----------
  { id: "v-a1-122", german: "die Schule", article: "die", plural: "die Schulen", arabic: "المدرسة", french: "l'école", pronunciation: "dee SHOO-leh", exampleSentence: { de: "Die Schule beginnt um acht.", ar: "المدرسة تبدأ الساعة الثامنة.", fr: "L'école commence à huit heures." }, level: "A1", category: "education" },
  { id: "v-a1-123", german: "lernen", arabic: "يتعلم", french: "apprendre", pronunciation: "LER-nen", exampleSentence: { de: "Ich lerne Deutsch.", ar: "أتعلم الألمانية.", fr: "J'apprends l'allemand." }, level: "A1", category: "education" },
  { id: "v-a1-124", german: "der Lehrer", article: "der", plural: "die Lehrer", arabic: "المعلم", french: "l'enseignant", pronunciation: "dair LEH-rer", exampleSentence: { de: "Der Lehrer ist sehr geduldig.", ar: "المعلم صبور جداً.", fr: "L'enseignant est très patient." }, level: "A1", category: "education" },

  // ---------- Making plans (a1-26) ----------
  { id: "v-a1-125", german: "treffen", arabic: "يلتقي", french: "rencontrer", pronunciation: "TREF-fen", exampleSentence: { de: "Wir treffen uns um sechs.", ar: "نلتقي الساعة السادسة.", fr: "On se rencontre à six heures." }, level: "A1", category: "daily_life" },
  { id: "v-a1-126", german: "der Plan", article: "der", plural: "die Pläne", arabic: "الخطة", french: "le plan", pronunciation: "dair plahn", exampleSentence: { de: "Hast du einen Plan für morgen?", ar: "هل لديك خطة للغد؟", fr: "As-tu un plan pour demain ?" }, level: "A1", category: "daily_life" },
  { id: "v-a1-127", german: "einladen", arabic: "يدعو", french: "inviter", pronunciation: "EYEN-lah-den", exampleSentence: { de: "Ich lade dich ein.", ar: "أدعوك.", fr: "Je t'invite." }, level: "A1", category: "daily_life" },

  // ---------- Telephone basics (a1-27) ----------
  { id: "v-a1-128", german: "das Telefon", article: "das", plural: "die Telefone", arabic: "الهاتف", french: "le téléphone", pronunciation: "dass teh-leh-FOHN", exampleSentence: { de: "Mein Telefon klingelt.", ar: "هاتفي يرن.", fr: "Mon téléphone sonne." }, level: "A1", category: "communication" },
  { id: "v-a1-129", german: "anrufen", arabic: "يتصل", french: "appeler", pronunciation: "AHN-roo-fen", exampleSentence: { de: "Ich rufe dich an.", ar: "سأتصل بك.", fr: "Je t'appelle." }, level: "A1", category: "communication" },
  { id: "v-a1-130", german: "die Nummer", article: "die", plural: "die Nummern", arabic: "الرقم", french: "le numéro", pronunciation: "dee NUM-mer", exampleSentence: { de: "Wie ist deine Nummer?", ar: "ما هو رقمك؟", fr: "Quel est ton numéro ?" }, level: "A1", category: "communication" },

  // ---------- Asking for help (a1-28) ----------
  { id: "v-a1-131", german: "helfen", arabic: "يساعد", french: "aider", pronunciation: "HEL-fen", exampleSentence: { de: "Können Sie mir helfen?", ar: "هل يمكنك مساعدتي؟", fr: "Pouvez-vous m'aider ?" }, level: "A1", category: "communication" },
  { id: "v-a1-132", german: "verstehen", arabic: "يفهم", french: "comprendre", pronunciation: "fer-SHTEH-en", exampleSentence: { de: "Ich verstehe nicht.", ar: "لا أفهم.", fr: "Je ne comprends pas." }, level: "A1", category: "communication" },
  { id: "v-a1-133", german: "langsam", arabic: "ببطء", french: "lentement", pronunciation: "LANG-zahm", exampleSentence: { de: "Sprechen Sie bitte langsam.", ar: "تحدث ببطء من فضلك.", fr: "Parlez lentement, s'il vous plaît." }, level: "A1", category: "communication" },
  { id: "v-a1-134", german: "wiederholen", arabic: "يكرر", french: "répéter", pronunciation: "vee-der-HOH-len", exampleSentence: { de: "Können Sie das wiederholen?", ar: "هل يمكنك التكرار؟", fr: "Pouvez-vous répéter ?" }, level: "A1", category: "communication" },

  // ---------- Small talk (a1-29) ----------
  { id: "v-a1-135", german: "das Wetter ist schön", arabic: "الطقس جميل", french: "il fait beau", pronunciation: "dass VET-ter ist shurn", exampleSentence: { de: "Heute ist das Wetter schön.", ar: "الطقس جميل اليوم.", fr: "Il fait beau aujourd'hui." }, level: "A1", category: "weather" },
  { id: "v-a1-136", german: "wie geht es Ihnen", arabic: "كيف حالك (رسمي)", french: "comment allez-vous", pronunciation: "vee geht es EE-nen", exampleSentence: { de: "Guten Tag, wie geht es Ihnen?", ar: "طاب يومك، كيف حالك؟", fr: "Bonjour, comment allez-vous ?" }, level: "A1", category: "communication" },
  { id: "v-a1-137", german: "mir geht es gut", arabic: "أنا بخير", french: "je vais bien", pronunciation: "meer geht es goot", exampleSentence: { de: "Danke, mir geht es gut.", ar: "شكراً، أنا بخير.", fr: "Merci, je vais bien." }, level: "A1", category: "communication" },
];
