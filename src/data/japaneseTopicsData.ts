export interface JapaneseTopicTab {
  id: string;
  label: string;
  icon?: string;
  content: {
    summary: string;
    subsections: {
      title: string;
      description?: string;
      items: {
        japanese?: string;
        romaji?: string;
        english: string;
        detail?: string;
        tag?: string;
      }[];
    }[];
    drillPrompt?: {
      instruction: string;
      phraseJapanese: string;
      phraseRomaji: string;
      phraseEnglish: string;
      scenarioId?: string;
    };
  };
}

export interface JapaneseTopic {
  id: string;
  badge: string; // "あ", "文", "N", "▶", "和", "✓"
  title: string;
  description: string;
  category: string;
  tabs: JapaneseTopicTab[];
}

export const JAPANESE_TOPIC_MODULES: JapaneseTopic[] = [
  // ── 1. Hiragana & Katakana ──
  {
    id: "hiragana-katakana",
    badge: "あ",
    title: "Hiragana & Katakana",
    description: "Explore Japanese characters, numbers, time and calendar expressions.",
    category: "Characters & Foundations",
    tabs: [
      {
        id: "hiragana",
        label: "Hiragana (ひらがな)",
        icon: "あ",
        content: {
          summary: "Hiragana is the fundamental phonetic alphabet of Japanese, comprising 46 base characters representing every vowel and consonant-vowel syllable.",
          subsections: [
            {
              title: "Vowels & K/S/T/N Rows (A-Dan, Ka-Dan, Sa-Dan, Ta-Dan, Na-Dan)",
              description: "The core foundational syllables forming native Japanese words.",
              items: [
                { japanese: "あ / い / う / え / お", romaji: "a / i / u / e / o", english: "Five Pure Vowels", detail: "Mouth shape stays compact and stable." },
                { japanese: "か / き / く / け / こ", romaji: "ka / ki / ku / ke / ko", english: "K-Row", detail: "Clear unvoiced velar plosives." },
                { japanese: "さ / し / す / せ / そ", romaji: "sa / shi / su / se / so", english: "S-Row", detail: "'shi' is pronounced like 'shee'." },
                { japanese: "た / ち / つ / て / と", romaji: "ta / chi / tsu / te / to", english: "T-Row", detail: "'chi' and 'tsu' have affricate pronunciations." },
                { japanese: "な / に / ぬ / ね / の", romaji: "na / ni / nu / ne / no", english: "N-Row", detail: "Nasal syllables used heavily in particles." },
              ],
            },
            {
              title: "H/M/Y/R/W Rows & Nasal N (Ha-Dan, Ma-Dan, Ra-Dan, Wa, N)",
              description: "The remaining consonants and unique standalone mora.",
              items: [
                { japanese: "は / ひ / ふ / へ / ほ", romaji: "ha / hi / fu / he / ho", english: "H-Row", detail: "'fu' is bilabial (f/h blend with teeth not touching lip)." },
                { japanese: "ま / み / む / め / も", romaji: "ma / mi / mu / me / mo", english: "M-Row", detail: "Smooth bilabial nasals." },
                { japanese: "や / ゆ / よ", romaji: "ya / yu / yo", english: "Y-Row (Semivowels)", detail: "Three glide syllables." },
                { japanese: "ら / り / る / れ / ろ", romaji: "ra / ri / ru / re / ro", english: "R-Row (Alveolar Tap)", detail: "Tongue taps roof of mouth like Spanish single 'r'." },
                { japanese: "わ / を / ん", romaji: "wa / (w)o / n", english: "W-Row & Syllabic N", detail: "'ん' (n) counts as a full mora in spoken timing." },
              ],
            },
            {
              title: "Dakuon (濁音) & Handakuon (半濁音)",
              description: "Voiced variants indicated by dakuten (ten-ten) and handakuten (maru).",
              items: [
                { japanese: "が ぎ ぐ げ ご", romaji: "ga gi gu ge go", english: "G-Row (Voiced K)", tag: "Voiced" },
                { japanese: "ざ じ ず ぜ ぞ", romaji: "za ji zu ze zo", english: "Z-Row (Voiced S)", tag: "Voiced" },
                { japanese: "だ ぢ づ で ど", romaji: "da ji zu de do", english: "D-Row (Voiced T)", tag: "Voiced" },
                { japanese: "ば び ぶ べ ぼ", romaji: "ba bi bu be bo", english: "B-Row (Voiced H)", tag: "Voiced" },
                { japanese: "ぱ ぴ ぷ ぺ ぽ", romaji: "pa pi pu pe po", english: "P-Row (Semi-voiced)", tag: "Plosive" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice pronouncing the 5 pure Japanese vowels with Coach Elena:",
            phraseJapanese: "あいうえお、かきくけこ",
            phraseRomaji: "a-i-u-e-o, ka-ki-ku-ke-ko",
            phraseEnglish: "The foundation of all Japanese syllables with steady pitch.",
          },
        },
      },
      {
        id: "katakana",
        label: "Katakana (カタカナ)",
        icon: "カ",
        content: {
          summary: "Katakana represents loanwords, tech terminology, company names, onomatopoeia, and emphasized expressions.",
          subsections: [
            {
              title: "Modern Tech & Daily Loanwords",
              description: "High-frequency Katakana words you will use in tech standups and city life.",
              items: [
                { japanese: "コーヒー", romaji: "kouhii", english: "Coffee", detail: "Long vowel mark (ー) doubles vowel length." },
                { japanese: "パソコン", romaji: "pasokon", english: "Personal Computer / Laptop", detail: "Abbreviated from personal computer." },
                { japanese: "スタートアップ", romaji: "sutaatoappu", english: "Startup", detail: "Small 'ッ' marks a glottal double consonant stop." },
                { japanese: "ミーティング", romaji: "miitingu", english: "Meeting / Sync", detail: "Standard corporate standup vocabulary." },
                { japanese: "エンジニア", romaji: "enjinia", english: "Software Engineer", detail: "Common tech designation in Tokyo." },
              ],
            },
            {
              title: "Small Katakana Extensions (ファ, ティ, ディ, ウィ, シェ)",
              description: "Modern combinations used to spell foreign phonetic sounds accurately.",
              items: [
                { japanese: "ファ / フィ / フェ / フォ", romaji: "fa / fi / fe / fo", english: "F-extensions", detail: "Example: ファイル (fairu = file)" },
                { japanese: "ティ / ディ", romaji: "ti / di", english: "T/D-extensions", detail: "Example: ディレクター (direkutaa = director)" },
                { japanese: "ウィ / ウェ / ウォ", romaji: "wi / we / wo", english: "W-extensions", detail: "Example: ウェブサイト (webusaito = website)" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this modern tech Katakana sentence:",
            phraseJapanese: "今日のオンラインミーティングのリンクをシェアしてください。",
            phraseRomaji: "Kyou no onrain miitingu no rinku o shea shite kudasai.",
            phraseEnglish: "Please share the link for today's online meeting.",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
      {
        id: "numbers-counters",
        label: "Numbers & Counters (数字と助数詞)",
        icon: "123",
        content: {
          summary: "Numbers and specific counter suffixes (助数詞) used for counting people, objects, and currency.",
          subsections: [
            {
              title: "Base Numbers (0 to 10,000)",
              description: "Japanese groups large numbers in 10,000s (万 man) rather than 1,000s.",
              items: [
                { japanese: "一, 二, 三, 四, 五", romaji: "ichi, ni, san, yon/shi, go", english: "1, 2, 3, 4, 5", detail: "Four is usually 'yon' in modern speech." },
                { japanese: "六, 七, 八, 九, 十", romaji: "roku, nana/shichi, hachi, kyuu/ku, juu", english: "6, 7, 8, 9, 10", detail: "Seven is usually 'nana', nine is 'kyuu'." },
                { japanese: "百 / 千 / 万", romaji: "hyaku / sen / man", english: "100 / 1,000 / 10,000", detail: "一万円 (ichiman-en) = 10,000 Yen (~$65 USD)." },
              ],
            },
            {
              title: "Essential Everyday Counters",
              description: "You must attach the correct counter to nouns depending on shape and category.",
              items: [
                { japanese: "一人 / 二人 / 三人", romaji: "hitori / futari / sannin", english: "People counter (人)", detail: "1 and 2 people have irregular native readings." },
                { japanese: "一つ / 二つ / 三つ", romaji: "hitotsu / futatsu / mittsu", english: "Universal objects (つ)", detail: "Used for general items, ideas, orders at cafes." },
                { japanese: "一本 / 二本 / 三本", romaji: "ippon / nihon / sanbon", english: "Long cylindrical items (本)", detail: "Bottles, pens, train lines, beers (sound changes: p/h/b)." },
                { japanese: "一枚 / 二枚", romaji: "ichimai / nimai", english: "Flat thin items (枚)", detail: "Train tickets, paper, credit cards, shirts." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice ordering two beers and one snack in an Izakaya:",
            phraseJapanese: "生ビールを二本と、枝豆を一つお願いします。",
            phraseRomaji: "Namabiiru o nihon to, edamame o hitotsu onegaishimasu.",
            phraseEnglish: "Two draft beers and one edamame, please.",
            scenarioId: "izakaya-order",
          },
        },
      },
      {
        id: "time-calendar",
        label: "Time & Calendar (時間と暦)",
        icon: "📅",
        content: {
          summary: "Express hours, minutes, days of the week, and dates with proper pitch accent.",
          subsections: [
            {
              title: "Telling Time (時 & 分)",
              description: "Hours (時 ji) and minutes (分 fun/pun) with irregular sound shifts.",
              items: [
                { japanese: "四時 / 七時 / 九時", romaji: "yoji / shichiji / kuji", english: "4:00 / 7:00 / 9:00", detail: "Irregular: NOT yoji* or kyuji*." },
                { japanese: "一分 / 三分 / 五分 / 十分 / 半", romaji: "ippun / sanpun / gofun / juppun / han", english: "1m / 3m / 5m / 10m / Half-past (:30)", detail: "'半' (han) means half past the hour." },
              ],
            },
            {
              title: "Days of the Week (曜日)",
              description: "Based on the seven celestial elements: Sun, Moon, Fire, Water, Wood, Metal, Earth.",
              items: [
                { japanese: "月曜日 (げつようび)", romaji: "getsuyoubi", english: "Monday (Moon)" },
                { japanese: "火曜日 (かようび)", romaji: "kayoubi", english: "Tuesday (Fire)" },
                { japanese: "水曜日 (すいようび)", romaji: "suiyoubi", english: "Wednesday (Water)" },
                { japanese: "木曜日 (もくようび)", romaji: "mokuyoubi", english: "Thursday (Wood)" },
                { japanese: "金曜日 (きんようび)", romaji: "kin'youbi", english: "Friday (Gold / Metal)" },
                { japanese: "土曜日 / 日曜日", romaji: "doyoubi / nichiyoubi", english: "Saturday / Sunday (Earth / Sun)" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Schedule a sprint retrospective with Elena:",
            phraseJapanese: "来週の月曜日の午後二時半にミーティングを設定できますか？",
            phraseRomaji: "Raishuu no getsuyoubi no gogo niji-han ni miitingu o settei dekimasu ka?",
            phraseEnglish: "Can we schedule the meeting for next Monday at 2:30 PM?",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
    ],
  },

  // ── 2. Grammar & Conjugation ──
  {
    id: "grammar-conjugation",
    badge: "文",
    title: "Grammar & Conjugation",
    description: "Review particles, sentence patterns, verbs, adjectives and useful conjugations.",
    category: "Grammar & Structure",
    tabs: [
      {
        id: "particles",
        label: "7 Vital Particles (助詞)",
        icon: "は",
        content: {
          summary: "Particles define the grammatical roles of words in a Japanese sentence (topic, subject, object, destination, location, means).",
          subsections: [
            {
              title: "Topic vs Subject: は (wa) vs が (ga)",
              description: "The most important syntactic distinction in Japanese communication.",
              items: [
                { japanese: "私はラフリーです。", romaji: "Watashi wa Rafurii desu.", english: "As for me, I am Rafly. (は marks topic / context)", tag: "は (Topic)" },
                { japanese: "彼がプロジェクトを主導しています。", romaji: "Kare ga purojekuto o shudou shite imasu.", english: "He (specifically) is leading the project. (が specifies actor)", tag: "が (Subject)" },
              ],
            },
            {
              title: "Direct Object, Destination & Location: を, に, で, へ",
              description: "Connecting verbs to their targets, tools, and locations.",
              items: [
                { japanese: "APIの仕様書を読みます。", romaji: "API no shiyousho o yomimasu.", english: "I read the API specification. (を marks direct object)", tag: "を (Object)" },
                { japanese: "東京オフィスに行きます。", romaji: "Toukyou ofisu ni ikimasu.", english: "I go to the Tokyo office. (に marks target / destination)", tag: "に (Target)" },
                { japanese: "新幹線で移動します。", romaji: "Shinkansen de idou shimasu.", english: "We travel by Shinkansen bullet train. (で marks means / tool)", tag: "で (Means)" },
                { japanese: "未来へ進む。", romaji: "Mirai e susumu.", english: "Advance toward the future. (へ marks direction)", tag: "へ (Direction)" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Demonstrate proper particle usage in an agile sprint:",
            phraseJapanese: "私はステージング環境で新しいエンドポイントを検証しました。",
            phraseRomaji: "Watashi wa suteejingu kankyou de atarashii endopointo o kenshou shimashita.",
            phraseEnglish: "I verified the new endpoint in the staging environment.",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
      {
        id: "sentence-patterns",
        label: "Key Sentence Patterns (基本文型)",
        icon: "構文",
        content: {
          summary: "High-frequency sentence patterns that immediately elevate your spoken Japanese beyond beginner survival phrases.",
          subsections: [
            {
              title: "Requests, Permission & Obligation",
              description: "Polite expressions used constantly in daily life and business.",
              items: [
                { japanese: "〜てください (te kudasai)", romaji: "Please do...", english: "Polite request", detail: "少々お待ちください (Please wait a brief moment)." },
                { japanese: "〜てもいいですか (te mo ii desu ka)", romaji: "May I...?", english: "Asking for permission", detail: "この席を使ってもいいですか (May I use this seat?)." },
                { japanese: "〜なければなりません (nakereba narimasen)", romaji: "Must / Have to do...", english: "Obligation / Necessity", detail: "今日中にバグを修正しなければなりません (Must fix bug today)." },
              ],
            },
            {
              title: "Experience & Subjective Opinions",
              description: "Expressing past history and diplomatic thoughts.",
              items: [
                { japanese: "〜たことがあります (ta koto ga arimasu)", romaji: "Have done...", english: "Past experience", detail: "日本企業と交渉したことがあります (I have negotiated with Japanese firms)." },
                { japanese: "〜と思います (to omoimasu)", romaji: "I think that...", english: "Soft diplomatic opinion", detail: "このアプローチが効果的だと思います (I believe this approach is effective)." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Ask for permission politely in a Japanese business setting:",
            phraseJapanese: "確認のため、画面を共有させていただいてもよろしいでしょうか？",
            phraseRomaji: "Kakunin no tame, gaman o kyouyuu sasete itadaite mo yoroshii deshou ka?",
            phraseEnglish: "For confirmation, would it be acceptable if I share my screen?",
            scenarioId: "tokyo-pitch-negotiation",
          },
        },
      },
      {
        id: "verb-conjugation",
        label: "Verb Groups (動詞の活用)",
        icon: "動詞",
        content: {
          summary: "Mastering the 3 verb groups (Godan, Ichidan, Irregular) unlocks all tenses, negative forms, requests, and polite speech.",
          subsections: [
            {
              title: "Group 1: Godan Verbs (五段動詞)",
              description: "Root consonant stays; ending vowel shifts across the 5 rows (u -> i, a, e, o).",
              items: [
                { japanese: "書く (kaku) → 書きます → 書いて → 書かない", romaji: "kaku → kakimasu → kaite → kakanai", english: "To write (Dictionary → Polite → Te-form → Negative)" },
                { japanese: "飲む (nomu) → 飲みます → 飲んで → 飲まない", romaji: "nomu → nomimasu → nonde → nomanai", english: "To drink" },
                { japanese: "話す (hanasu) → 話します → 話して → 話さない", romaji: "hanasu → hanashimasu → hanashite → hanasanai", english: "To speak" },
              ],
            },
            {
              title: "Group 2: Ichidan Verbs (一段動詞)",
              description: "End in -iru or -eru; simply drop 'ru' and attach suffixes.",
              items: [
                { japanese: "食べる (taberu) → 食べます → 食べて → 食べない", romaji: "taberu → tabemasu → tabete → tabenai", english: "To eat (Drop 'ru' directly)" },
                { japanese: "見る (miru) → 見ます → 見て → 見ない", romaji: "miru → mimasu → mite → minai", english: "To see / watch" },
              ],
            },
            {
              title: "Group 3: Irregular Verbs (不規則動詞)",
              description: "Only two irregular verbs in the entire Japanese language.",
              items: [
                { japanese: "する (suru) → します → して → しない", romaji: "suru → shimasu → shite → shinai", english: "To do (and all compound nouns: 勉強する, 開発する)" },
                { japanese: "来る (kuru) → 来ます (kimasu) → 来て (kite) → 来ない (konai)", romaji: "kuru → kimasu → kite → konai", english: "To come (Root vowel alters pronunciation)" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Conjugate 'to review' (確認する) into a polite te-form request:",
            phraseJapanese: "仕様書を確認して、フィードバックをいただけますか？",
            phraseRomaji: "Shiyousho o kakunin shite, fiidobakku o itadakemasu ka?",
            phraseEnglish: "Could you please review the specification and give feedback?",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
    ],
  },

  // ── 3. JLPT N5–N1 Practice ──
  {
    id: "jlpt-practice",
    badge: "N",
    title: "JLPT N5–N1 Practice",
    description: "Choose practice materials suited to your current Japanese level and study goals.",
    category: "Level Proficiency & Exams",
    tabs: [
      {
        id: "level-overview",
        label: "Levels Matrix (N5 to N1)",
        icon: "N5-N1",
        content: {
          summary: "The Japanese Language Proficiency Test (JLPT) is the global standard for certifying Japanese fluency across 5 tiered levels.",
          subsections: [
            {
              title: "JLPT Level Benchmark Comparison",
              description: "Kanji, vocabulary, grammar scope, and conversational capabilities by tier.",
              items: [
                { japanese: "JLPT N5 (Beginner)", romaji: "100 Kanji • 800 Vocab", english: "Survival Japanese: Basic greetings, café ordering, simple directions.", tag: "N5 Beginner" },
                { japanese: "JLPT N4 (Elementary)", romaji: "300 Kanji • 1,500 Vocab", english: "Daily Interaction: Te-form requests, shopping banter, basic travel problem solving.", tag: "N4 Elementary" },
                { japanese: "JLPT N3 (Intermediate Bridge)", romaji: "650 Kanji • 3,750 Vocab", english: "Independent Speaker: Conversational fluency, news headlines, handling unexpected train delays.", tag: "N3 Intermediate" },
                { japanese: "JLPT N2 (Business Ready)", romaji: "1,000 Kanji • 6,000 Vocab", english: "Professional Fluency: Agile standups, technical debates, polite corporate email and phone calls.", tag: "N2 Business" },
                { japanese: "JLPT N1 (Advanced / Executive)", romaji: "2,000 Kanji • 10,000+ Vocab", english: "Executive Master: Nuanced Keigo, high-stakes contract negotiations, VC pitching, abstract rhetoric.", tag: "N1 Executive" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Test an N3/N2 bridge sentence expressing proactive timeline advancement:",
            phraseJapanese: "納期を前倒しするために、優先度の高いタスクから着手しましょう。",
            phraseRomaji: "Nouki o maedaoshi suru tame ni, yuusendo no takai tasuku kara chakushu shimashou.",
            phraseEnglish: "To move up the delivery date, let's start with the highest priority tasks.",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
      {
        id: "practice-questions",
        label: "Sample Exam Questions (実践問題)",
        icon: "Q&A",
        content: {
          summary: "Real-world test questions with explanations to diagnose your level and cement grammar.",
          subsections: [
            {
              title: "Level Diagnostic Sample Questions",
              description: "Select the correct particle or grammatical structure for each context.",
              items: [
                {
                  japanese: "【N5】私は毎朝、コーヒー（　）飲みます。",
                  romaji: "Watashi wa maiasa, kouhii ( ? ) nomimasu.",
                  english: "Answer: を (o) — Marks the direct object of drinking.",
                  detail: "Options: 1. に  2. で  3. を [Correct]  4. が",
                },
                {
                  japanese: "【N4】雨が降っているから、傘を持って（　）ください。",
                  romaji: "Ame ga futte iru kara, kasa o motte ( ? ) kudasai.",
                  english: "Answer: 行って (itte) — 'Take along and go'.",
                  detail: "Te-form compound verb pattern (持っていく).",
                },
                {
                  japanese: "【N3】値段が高いからといって、必ずしも品質が良い（　）。",
                  romaji: "Nedan ga takai kara to itte, kanarazushimo hinshitsu ga yoi ( ? ).",
                  english: "Answer: とは限らない (to wa kagiranai) — 'Does not necessarily mean that...'",
                  detail: "Classic N3 partial negation grammar.",
                },
                {
                  japanese: "【N2】プロジェクトの遅延を（　）、チーム全員で対策を協議した。",
                  romaji: "Purojekuto no chien o ( ? ), chiimu zen'in de taisaku o kyougi shita.",
                  english: "Answer: めぐって (megutte) — 'Concerning / surrounding the issue of...'",
                  detail: "Standard N2 corporate deliberation pattern.",
                },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Pronounce this N2 business grammar pattern with Elena:",
            phraseJapanese: "お客様のご要望に基づいて、システムの設計を見直しております。",
            phraseRomaji: "Okyaku-sama no go-youbou ni motozuite, shisutemu no sekkei o minaoshite orimasu.",
            phraseEnglish: "Based on the client's requests, we are revising the system architecture.",
            scenarioId: "tokyo-pitch-negotiation",
          },
        },
      },
    ],
  },

  // ── 4. Video Lessons ──
  {
    id: "video-lessons",
    badge: "▶",
    title: "Video Lessons",
    description: "Watch explanations of Japanese sounds, expressions and sentences at your own pace.",
    category: "Multimedia Lessons",
    tabs: [
      {
        id: "pronunciation-masterclass",
        label: "Sounds & Pitch Accent (発音と高低アクセント)",
        icon: "🔊",
        content: {
          summary: "Japanese is a pitch-accent language with mora timing, not a stress-accent language like English.",
          subsections: [
            {
              title: "The 4 Tokyo Pitch Accent Patterns",
              description: "Pitch shifts between HIGH and LOW tones across syllables.",
              items: [
                { japanese: "頭高 (Atamadaka - High then drops)", romaji: "e.g. 雨 (A-me = Rain)", english: "Starts HIGH on first syllable, then drops immediately.", detail: "Contrast with 飴 (a-ME = Candy, which is Heiban/flat)." },
                { japanese: "平板 (Heiban - Flat low to high)", romaji: "e.g. 日本 (ni-HON = Japan)", english: "Starts low, rises, and remains level through following particles.", detail: "Most modern tech loanwords follow Heiban pitch." },
                { japanese: "中高 (Nakadaka - Rises then drops inside)", romaji: "e.g. 卵 (ta-MA-go = Egg)", english: "Peak pitch occurs on a middle syllable.", detail: "Common in three- and four-mora native nouns." },
                { japanese: "尾高 (Odaka - Rises then drops on particle)", romaji: "e.g. 男 (o-to-KO-ga = Man)", english: "High pitch stays until particle, then drops sharply.", detail: "Distinguished by how following particles sound." },
              ],
            },
            {
              title: "Mora Timing (拍の均等性)",
              description: "Every mora (including small ッ, long vowels ー, and ん) gets exactly ONE beat of time.",
              items: [
                { japanese: "きって (ki-t-te = stamp) vs きて (ki-te = come)", romaji: "3 moras vs 2 moras", english: "The silent pause in 'ッ' holds a full beat.", tag: "Rhythm" },
                { japanese: "おばあさん (grandma) vs おばさん (aunt)", romaji: "5 moras vs 4 moras", english: "Elongated vowels double the duration.", tag: "Vowel Length" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice maintaining even mora timing with Elena:",
            phraseJapanese: "切手を貼って、東京の本社へ速達で送ってください。",
            phraseRomaji: "Kitte o hatte, Toukyou no honsha e sokutatsu de okutte kudasai.",
            phraseEnglish: "Please affix the stamp and send it to Tokyo headquarters by express mail.",
          },
        },
      },
      {
        id: "conversational-fillers",
        label: "Aizuchi & Natural Flow (相槌と対話の流れ)",
        icon: "💬",
        content: {
          summary: "Aizuchi (相槌) are conversational listener signals essential for showing engagement in Japanese dialogue.",
          subsections: [
            {
              title: "High-Frequency Aizuchi Signals",
              description: "Signals to insert every 2 to 3 seconds during live conversations.",
              items: [
                { japanese: "なるほど (Naruhodo)", romaji: "I see / That makes total sense", english: "Shows comprehension; avoid using toward high superiors." },
                { japanese: "そうですね (Sou desu ne)", romaji: "Indeed / That is right", english: "Universal agreeable filler buying time to formulate thoughts." },
                { japanese: "おっしゃる通りです (Ossharu toori desu)", romaji: "Exactly as you say (Formal Keigo)", english: "Gold standard affirmative response for clients and bosses." },
                { japanese: "実は... (Jitsu wa...)", romaji: "Actually / The reality is...", english: "Signals that important insider context or blockers follow." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice replying with professional Aizuchi during a client inquiry:",
            phraseJapanese: "おっしゃる通りです。その点につきましては弊社でも把握しております。",
            phraseRomaji: "Ossharu toori desu. Sono ten ni tsukimashite wa heisha demo haaku shite orimasu.",
            phraseEnglish: "Exactly as you say. Regarding that point, our company is also fully aware.",
            scenarioId: "tokyo-pitch-negotiation",
          },
        },
      },
    ],
  },

  // ── 5. Culture & Communication ──
  {
    id: "culture-communication",
    badge: "和",
    title: "Culture & Communication",
    description: "Explore everyday Japanese, questions about Japan, polite language and keigo.",
    category: "Etiquette & Culture",
    tabs: [
      {
        id: "everyday-etiquette",
        label: "Everyday Manners (日常のマナー)",
        icon: "🙇",
        content: {
          summary: "Japanese culture places high value on 'Wa' (和 - harmony) and 'Omoiyari' (思いやり - anticipatory empathy for others).",
          subsections: [
            {
              title: "Bowing Etiquette (お辞儀 Ojigi)",
              description: "Three standard angles of bowing depending on situation.",
              items: [
                { japanese: "会釈 (Eshaku) - 15°", romaji: "Casual Greeting", english: "Used when passing colleagues in corridors or greeting neighbors.", tag: "15°" },
                { japanese: "敬礼 (Keirei) - 30°", romaji: "Formal Business Bow", english: "Used when welcoming clients, opening meetings, or expressing thanks.", tag: "30°" },
                { japanese: "最敬礼 (Saikeirei) - 45°", romaji: "Deepest Respect & Apology", english: "Reserved for high ceremonies, deep apologies (詫び), or VIP executives.", tag: "45°" },
              ],
            },
            {
              title: "Business Card Exchange (名刺交換 Meishi Koukan)",
              description: "The business card is treated as the physical embodiment of the person.",
              items: [
                { japanese: "両手で受け取る", romaji: "Receive with both hands", english: "Always hold cards with two hands, thumbs on the bottom corners." },
                { japanese: "名刺入れの上に置く", romaji: "Place atop cardholder", english: "During meetings, place the client's card carefully on your card case." },
                { japanese: "絶対にメモを書かない", romaji: "Never write notes on card", english: "Writing directly on a client's card in their presence is a major faux pas." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver a flawless business card exchange greeting with Elena:",
            phraseJapanese: "初めまして。○○株式会社のラフリーと申します。どうぞよろしくお願い申し上げます。",
            phraseRomaji: "Hajimemashite. OO kabushikigaisha no Rafurii to moushimasu. Douzo yoroshiku onegai moushiagemasu.",
            phraseEnglish: "Pleasure to meet you. I am Rafly from XX Corp. I look forward to working with you.",
            scenarioId: "tokyo-pitch-negotiation",
          },
        },
      },
      {
        id: "keigo-system",
        label: "The 4 Keigo Levels & Situations",
        icon: "👔",
        content: {
          summary: "Keigo is an architectural system positioning social distance and hierarchy. Never use Sonkeigo for yourself; elevate the counterpart and humble your own actions.",
          subsections: [
            {
              title: "The 4 Speech Levels: Same Situation Compared",
              description: "Direct comparison of Casual (ため口), Polite (丁寧語), Respectful (尊敬語 - other person's action), and Humble (謙譲語 - your own action).",
              items: [
                {
                  japanese: "1. どこ行くの？ (Casual) → 2. どこへ行きますか？ (Teineigo) → 3. どちらへいらっしゃいますか？ (Sonkeigo) → 4. 本社へ参ります (Kenjougo)",
                  romaji: "Doko iku no? → Doko e ikimasu ka? → Dochira e irasshaimasu ka? → Honsha e mairimasu",
                  english: "Where are you going? (Levels 1-3) / I am going to head office (Level 4)",
                  detail: "Situation: Asking destination vs stating your own destination. Notice 'doko' shifts to 'dochira' in keigo.",
                  tag: "4 Levels: Going",
                },
                {
                  japanese: "1. もう食べた？ (Casual) → 2. もう食べましたか？ (Teineigo) → 3. もう召し上がりましたか？ (Sonkeigo) → 4. すでにいただきました (Kenjougo)",
                  romaji: "Mou tabeta? → Mou tabemashita ka? → Mou meshiagarimashita ka? → Sude ni itadakimashita",
                  english: "Have you eaten yet? (Levels 1-3) / I have already eaten (Level 4)",
                  detail: "Verb shift: 食べる → 召し上がる (Sonkeigo for client) vs いただく (Kenjougo for self).",
                  tag: "4 Levels: Eating",
                },
                {
                  japanese: "1. これ知ってる？ (Casual) → 2. これを知っていますか？ (Teineigo) → 3. こちらをご存知ですか？ (Sonkeigo) → 4. 私が存じております (Kenjougo)",
                  romaji: "Kore shitteru? → Kore o shitte imasu ka? → Kochira o gozonji desu ka? → Watashi ga zonjite orimasu",
                  english: "Do you know this? (Levels 1-3) / I am aware of this (Level 4)",
                  detail: "Verb shift: 知る → ご存知 (Sonkeigo) vs 存じる / 存じ上げる (Kenjougo).",
                  tag: "4 Levels: Knowing",
                },
                {
                  japanese: "1. 資料見てくれた？ (Casual) → 2. 資料を見ましたか？ (Teineigo) → 3. 資料をご覧になりましたか？ (Sonkeigo) → 4. 拝見いたしました (Kenjougo)",
                  romaji: "Shiryou mite kureta? → Shiryou o mimashita ka? → Shiryou o goran ni narimashita ka? → Haiken itashimashita",
                  english: "Did you look at the doc? (Levels 1-3) / I have humbly inspected it (Level 4)",
                  detail: "Verb shift: 見る → ご覧になる (Sonkeigo) vs 拝見する (Kenjougo).",
                  tag: "4 Levels: Seeing",
                },
              ],
            },
            {
              title: "When NOT to use 'Anata' (あなた) & Subject Omission",
              description: "Critical rule: 'Anata' sounds distant, accusatory, or patronizing in native Japanese conversation.",
              items: [
                {
                  japanese: "NG: あなたはどう思いますか？ → OK: 田中さんはどう思われますか？",
                  romaji: "NG: Anata wa dou omoimasu ka? → OK: Tanaka-san wa dou omowaremasu ka?",
                  english: "What do you think, Tanaka-san?",
                  detail: "Rule 1: Always substitute the person's last name + さん (san) or professional title (部長, 社長, 先生).",
                  tag: "No Anata",
                },
                {
                  japanese: "NG: あなたは明日来ますか？ → OK: 明日、いらっしゃいますか？",
                  romaji: "NG: Anata wa ashita kimasu ka? → OK: Ashita, irasshaimasu ka?",
                  english: "Are you coming tomorrow?",
                  detail: "Rule 2: Omit subjects entirely (主語の省略) when clear from context. 90% of spoken Japanese drops 'I' and 'you'.",
                  tag: "Subject Drop",
                },
              ],
            },
            {
              title: "Indirect Refusals & Cushions (クッション言葉と断り方)",
              description: "In Japanese business and social life, a direct 'No' (いいえ / だめ) causes friction. Use these softening formulas.",
              items: [
                { japanese: "恐れ入りますが...", romaji: "Osoreirimasu ga...", english: "I am terribly sorry to trouble you, but... (Pillows requests)" },
                { japanese: "あいにくですが、その日は都合がつきかねます。", romaji: "Ainiku desu ga, sono hi wa tsugou ga tsukikanemasu.", english: "Unfortunately, that day is difficult for me. (Gentle scheduling decline)" },
                { japanese: "今回は少々厳しいかもしれません。", romaji: "Konkai wa shoushou kibishii kamoshiremasen.", english: "This time it might be a bit difficult. (Polite definitive 'No')" },
                { japanese: "社内で持ち帰り、検討させていただきます。", romaji: "Shanai de mochikaeri, kentou sasete itadakimasu.", english: "We will take this back internally and consider it. (Tokyo business soft decline)" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Deliver a humble confirmation using Kenjougo (拝見する):",
            phraseJapanese: "ご共有いただいた企画書を拝見いたしました。大変素晴らしい内容でございます。",
            phraseRomaji: "Go-kyouyuu itadaita kikakusho o haiken itashimashita. Taihen subarashii naiyou de gozaimasu.",
            phraseEnglish: "I have carefully reviewed the proposal you shared. It is truly exceptional.",
            scenarioId: "tokyo-pitch-negotiation",
          },
        },
      },
      {
        id: "workplace-vs-friend",
        label: "Workplace vs. Friend & Particles",
        icon: "👥",
        content: {
          summary: "Contrast workplace business hierarchy with casual peer speech (ため口), and master sentence-ending particles (ね, よ, かな).",
          subsections: [
            {
              title: "Workplace Keigo vs. Casual Friend Speech",
              description: "The same intent expressed in an office setting vs among close peers.",
              items: [
                {
                  japanese: "友: 手伝って！ vs 職場: 少々お手伝いいただけますでしょうか？",
                  romaji: "Tomo: Tetsudatte! vs Shokuba: Shoushou otetsudai itadakemasu deshou ka?",
                  english: "Help me! vs Could you perhaps assist me for a moment?",
                  detail: "Casual drops honorifics; business uses potential humble questions.",
                  tag: "Request",
                },
                {
                  japanese: "友: ごめん！ vs 職場: 大変申し訳ございません。",
                  romaji: "Tomo: Gomen! vs Shokuba: Taihen moushiwake gozaimasen.",
                  english: "Sorry! vs I sincerely apologize.",
                  detail: "Never use 'Gomen' or 'Sumimasen' for serious workplace mistakes.",
                  tag: "Apology",
                },
                {
                  japanese: "友: うん、わかった vs 職場: かしこまりました / 承知いたしました",
                  romaji: "Tomo: Un, wakatta vs Shokuba: Kashikomarimashita / Shouchi itashimashita",
                  english: "Yeah, got it vs Understood immediately (to clients/bosses)",
                  detail: "Do NOT say 'Ryokai desu' to senior clients; use 'Kashikomarimashita'.",
                  tag: "Agreement",
                },
              ],
            },
            {
              title: "Sentence-Ending Particles: ね, よ, かな, よね",
              description: "These particles modulate emotion, certainty, and interpersonal alignment at the end of spoken utterances.",
              items: [
                { japanese: "今日は本当にいい天気ですね。(ね = 共感)", romaji: "Kyou wa hontou ni ii tenki desu ne.", english: "Lovely weather today, isn't it? (ね seeks shared empathy/agreement)" },
                { japanese: "このラーメン、本当に美味しいよ！(よ = 確信・伝達)", romaji: "Kono raamen, hontou ni oishii yo!", english: "This ramen is so delicious, I'm telling you! (よ imparts new conviction)" },
                { japanese: "明日の締め切り、間に合うかな... (かな = 自問・不確実)", romaji: "Ashita no shimekiri, maniau kana...", english: "I wonder if we'll make tomorrow's deadline... (かな softens with introspection)" },
                { japanese: "先週のリリース、大変だったよね。(よね = 相互確認)", romaji: "Senshuu no ririisu, taihen datta yo ne.", english: "Last week's release was brutal, right? (よね mutually aligns known facts)" },
              ],
            },
            {
              title: "Aizuchi (相槌) Listener Rhythms",
              description: "Japanese conversations require active verbal nodding every 2-3 seconds to signal attentive listening.",
              items: [
                { japanese: "うん、そうそう！ (Casual)", romaji: "Un, sousou!", english: "Yeah, exactly right!", detail: "Used with close friends; nod rhythmically." },
                { japanese: "なるほど、確かに。(Semi-polite)", romaji: "Naruhodo, tashika ni.", english: "I see, indeed.", detail: "Great for peers; avoid towards the company president." },
                { japanese: "おっしゃる通りでございます。(Keigo)", romaji: "Ossharu toori de gozaimasu.", english: "Precisely as you state, sir.", detail: "The gold standard executive affirmative backchannel." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Practice natural workplace acknowledgment with Elena:",
            phraseJapanese: "承知いたしました。ご指摘の点を反映し、本日中に修正いたしますね。",
            phraseRomaji: "Shouchi itashimashita. Goshiteki no ten o han'ei shi, honjitsuchuu ni shuusei itashimasu ne.",
            phraseEnglish: "Understood. I will incorporate your points and revise it today.",
            scenarioId: "tokyo-tech-standup",
          },
        },
      },
    ],
  },

  // ── 6. Study Tips ──
  {
    id: "study-tips",
    badge: "✓",
    title: "Study Tips",
    description: "Discover practical ways to review, organize your learning and build a regular study habit.",
    category: "Learning Strategies & Habits",
    tabs: [
      {
        id: "shadowing-protocol",
        label: "The Shadowing Method (シャドーイング)",
        icon: "🗣️",
        content: {
          summary: "Shadowing is the #1 scientifically verified method used by professional conference interpreters to bridge the gap between comprehension and spontaneous verbal output.",
          subsections: [
            {
              title: "4-Phase Daily Shadowing Routine",
              description: "Spend 5 minutes before every Fluency AI voice call following these phases.",
              items: [
                { japanese: "Phase 1: Silent Ear Calibration", romaji: "Mute listen (1x)", english: "Listen to Elena Vance's voice prompt with eyes closed. Focus purely on musical pitch contour.", tag: "Phase 1" },
                { japanese: "Phase 2: Script Synchronization", romaji: "Read along (1x)", english: "Read the Japanese script simultaneously while listening. Note where vowels drop (e.g. 'des[u]').", tag: "Phase 2" },
                { japanese: "Phase 3: Mumble Shadowing", romaji: "Whisper lag (0.5s)", english: "Whisper the sentences 0.5 seconds behind Elena without looking at text.", tag: "Phase 3" },
                { japanese: "Phase 4: Full Voice Output", romaji: "Full vocal projection", english: "Speak with resonant chest voice matching Elena's pace, rhythm, and emotional conviction.", tag: "Phase 4" },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Shadow this sentence with Elena with a 0.5-second lag:",
            phraseJapanese: "毎日少しずつ声に出すことで、自然な日本語が反射的に話せるようになります。",
            phraseRomaji: "Mainichi sukoshizutsu koe ni dasu koto de, shizen na nihongo ga hanshateki ni hanaseru you ni narimasu.",
            phraseEnglish: "By speaking out loud a little bit every day, natural Japanese becomes reflexive.",
          },
        },
      },
      {
        id: "habit-formation",
        label: "Habit Loops & Mining (習慣化とセンテンス採取)",
        icon: "⚡",
        content: {
          summary: "Why 15 minutes of live verbal output each day creates 10x faster fluency than 2 hours of passive flashcards.",
          subsections: [
            {
              title: "The 15-Minute Daily Core Ring Protocol",
              description: "How to use Fluency AI's concentric telemetry rings to anchor lifelong habits.",
              items: [
                { japanese: "Morning Warmup (3 mins)", romaji: "Tongue twisters & vowels", english: "Open Vocal Warmup modal and calibrate pitch glides before your day starts." },
                { japanese: "Midday Roleplay (7 mins)", romaji: "1 Live call scenario", english: "Complete one simulated call (Izakaya order, Shinkansen rebooking, or tech standup)." },
                { japanese: "Evening Review (5 mins)", romaji: "Sentence mining", english: "Review Elena's transcript corrections and write down 2 new phrases in your active journal." },
              ],
            },
            {
              title: "Sentence Mining (センテンス採取法)",
              description: "Never memorize isolated words; always mine complete, usable sentence patterns.",
              items: [
                { japanese: "❌ Don't memorize:", romaji: "前倒し (maedaoshi = moving up schedule)", english: "Isolated noun without conversational context." },
                { japanese: "✅ Mine complete pattern:", romaji: "納期を前倒しにできますか (Can we move up the delivery date?)", english: "Ready-to-use verbal muscle memory." },
              ],
            },
          ],
          drillPrompt: {
            instruction: "Commit to your daily practice with Elena:",
            phraseJapanese: "今日も15分間、集中してスピーキング練習を継続します！",
            phraseRomaji: "Kyou mo juugofunkan, shuuchuu shite supiikingu renshuu o keizoku shimasu!",
            phraseEnglish: "Today as well, I will stay focused and continue my 15-minute speaking practice!",
          },
        },
      },
    ],
  },
];
