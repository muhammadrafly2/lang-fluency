import { KanaEntry, JLPTKanaReference } from "./types";

// ── Complete Hiragana Chart (46 basic + dakuten + handakuten + combinations) ──

const HIRAGANA_GOJUUON: KanaEntry[] = [
  // Vowels (a-row)
  { kana: "あ", romaji: "a", type: "gojuuon", row: "a-row" },
  { kana: "い", romaji: "i", type: "gojuuon", row: "a-row" },
  { kana: "う", romaji: "u", type: "gojuuon", row: "a-row" },
  { kana: "え", romaji: "e", type: "gojuuon", row: "a-row" },
  { kana: "お", romaji: "o", type: "gojuuon", row: "a-row" },
  // Ka-row
  { kana: "か", romaji: "ka", type: "gojuuon", row: "ka-row" },
  { kana: "き", romaji: "ki", type: "gojuuon", row: "ka-row" },
  { kana: "く", romaji: "ku", type: "gojuuon", row: "ka-row" },
  { kana: "け", romaji: "ke", type: "gojuuon", row: "ka-row" },
  { kana: "こ", romaji: "ko", type: "gojuuon", row: "ka-row" },
  // Sa-row
  { kana: "さ", romaji: "sa", type: "gojuuon", row: "sa-row" },
  { kana: "し", romaji: "shi", type: "gojuuon", row: "sa-row" },
  { kana: "す", romaji: "su", type: "gojuuon", row: "sa-row" },
  { kana: "せ", romaji: "se", type: "gojuuon", row: "sa-row" },
  { kana: "そ", romaji: "so", type: "gojuuon", row: "sa-row" },
  // Ta-row
  { kana: "た", romaji: "ta", type: "gojuuon", row: "ta-row" },
  { kana: "ち", romaji: "chi", type: "gojuuon", row: "ta-row" },
  { kana: "つ", romaji: "tsu", type: "gojuuon", row: "ta-row" },
  { kana: "て", romaji: "te", type: "gojuuon", row: "ta-row" },
  { kana: "と", romaji: "to", type: "gojuuon", row: "ta-row" },
  // Na-row
  { kana: "な", romaji: "na", type: "gojuuon", row: "na-row" },
  { kana: "に", romaji: "ni", type: "gojuuon", row: "na-row" },
  { kana: "ぬ", romaji: "nu", type: "gojuuon", row: "na-row" },
  { kana: "ね", romaji: "ne", type: "gojuuon", row: "na-row" },
  { kana: "の", romaji: "no", type: "gojuuon", row: "na-row" },
  // Ha-row
  { kana: "は", romaji: "ha", type: "gojuuon", row: "ha-row" },
  { kana: "ひ", romaji: "hi", type: "gojuuon", row: "ha-row" },
  { kana: "ふ", romaji: "fu", type: "gojuuon", row: "ha-row" },
  { kana: "へ", romaji: "he", type: "gojuuon", row: "ha-row" },
  { kana: "ほ", romaji: "ho", type: "gojuuon", row: "ha-row" },
  // Ma-row
  { kana: "ま", romaji: "ma", type: "gojuuon", row: "ma-row" },
  { kana: "み", romaji: "mi", type: "gojuuon", row: "ma-row" },
  { kana: "む", romaji: "mu", type: "gojuuon", row: "ma-row" },
  { kana: "め", romaji: "me", type: "gojuuon", row: "ma-row" },
  { kana: "も", romaji: "mo", type: "gojuuon", row: "ma-row" },
  // Ya-row
  { kana: "や", romaji: "ya", type: "gojuuon", row: "ya-row" },
  { kana: "ゆ", romaji: "yu", type: "gojuuon", row: "ya-row" },
  { kana: "よ", romaji: "yo", type: "gojuuon", row: "ya-row" },
  // Ra-row
  { kana: "ら", romaji: "ra", type: "gojuuon", row: "ra-row" },
  { kana: "り", romaji: "ri", type: "gojuuon", row: "ra-row" },
  { kana: "る", romaji: "ru", type: "gojuuon", row: "ra-row" },
  { kana: "れ", romaji: "re", type: "gojuuon", row: "ra-row" },
  { kana: "ろ", romaji: "ro", type: "gojuuon", row: "ra-row" },
  // Wa-row + n
  { kana: "わ", romaji: "wa", type: "gojuuon", row: "wa-row" },
  { kana: "を", romaji: "wo", type: "gojuuon", row: "wa-row" },
  { kana: "ん", romaji: "n", type: "gojuuon", row: "n" },
];

const HIRAGANA_DAKUTEN: KanaEntry[] = [
  // Ga-row
  { kana: "が", romaji: "ga", type: "dakuten", row: "ga-row" },
  { kana: "ぎ", romaji: "gi", type: "dakuten", row: "ga-row" },
  { kana: "ぐ", romaji: "gu", type: "dakuten", row: "ga-row" },
  { kana: "げ", romaji: "ge", type: "dakuten", row: "ga-row" },
  { kana: "ご", romaji: "go", type: "dakuten", row: "ga-row" },
  // Za-row
  { kana: "ざ", romaji: "za", type: "dakuten", row: "za-row" },
  { kana: "じ", romaji: "ji", type: "dakuten", row: "za-row" },
  { kana: "ず", romaji: "zu", type: "dakuten", row: "za-row" },
  { kana: "ぜ", romaji: "ze", type: "dakuten", row: "za-row" },
  { kana: "ぞ", romaji: "zo", type: "dakuten", row: "za-row" },
  // Da-row
  { kana: "だ", romaji: "da", type: "dakuten", row: "da-row" },
  { kana: "ぢ", romaji: "di/ji", type: "dakuten", row: "da-row" },
  { kana: "づ", romaji: "du/zu", type: "dakuten", row: "da-row" },
  { kana: "で", romaji: "de", type: "dakuten", row: "da-row" },
  { kana: "ど", romaji: "do", type: "dakuten", row: "da-row" },
  // Ba-row
  { kana: "ば", romaji: "ba", type: "dakuten", row: "ba-row" },
  { kana: "び", romaji: "bi", type: "dakuten", row: "ba-row" },
  { kana: "ぶ", romaji: "bu", type: "dakuten", row: "ba-row" },
  { kana: "べ", romaji: "be", type: "dakuten", row: "ba-row" },
  { kana: "ぼ", romaji: "bo", type: "dakuten", row: "ba-row" },
];

const HIRAGANA_HANDAKUTEN: KanaEntry[] = [
  { kana: "ぱ", romaji: "pa", type: "handakuten", row: "pa-row" },
  { kana: "ぴ", romaji: "pi", type: "handakuten", row: "pa-row" },
  { kana: "ぷ", romaji: "pu", type: "handakuten", row: "pa-row" },
  { kana: "ぺ", romaji: "pe", type: "handakuten", row: "pa-row" },
  { kana: "ぽ", romaji: "po", type: "handakuten", row: "pa-row" },
];

const HIRAGANA_COMBOS: KanaEntry[] = [
  // Ky-
  { kana: "きゃ", romaji: "kya", type: "combo", row: "ky" },
  { kana: "きゅ", romaji: "kyu", type: "combo", row: "ky" },
  { kana: "きょ", romaji: "kyo", type: "combo", row: "ky" },
  // Sh-
  { kana: "しゃ", romaji: "sha", type: "combo", row: "sh" },
  { kana: "しゅ", romaji: "shu", type: "combo", row: "sh" },
  { kana: "しょ", romaji: "sho", type: "combo", row: "sh" },
  // Ch-
  { kana: "ちゃ", romaji: "cha", type: "combo", row: "ch" },
  { kana: "ちゅ", romaji: "chu", type: "combo", row: "ch" },
  { kana: "ちょ", romaji: "cho", type: "combo", row: "ch" },
  // Ny-
  { kana: "にゃ", romaji: "nya", type: "combo", row: "ny" },
  { kana: "にゅ", romaji: "nyu", type: "combo", row: "ny" },
  { kana: "にょ", romaji: "nyo", type: "combo", row: "ny" },
  // Hy-
  { kana: "ひゃ", romaji: "hya", type: "combo", row: "hy" },
  { kana: "ひゅ", romaji: "hyu", type: "combo", row: "hy" },
  { kana: "ひょ", romaji: "hyo", type: "combo", row: "hy" },
  // My-
  { kana: "みゃ", romaji: "mya", type: "combo", row: "my" },
  { kana: "みゅ", romaji: "myu", type: "combo", row: "my" },
  { kana: "みょ", romaji: "myo", type: "combo", row: "my" },
  // Ry-
  { kana: "りゃ", romaji: "rya", type: "combo", row: "ry" },
  { kana: "りゅ", romaji: "ryu", type: "combo", row: "ry" },
  { kana: "りょ", romaji: "ryo", type: "combo", row: "ry" },
  // Gy-
  { kana: "ぎゃ", romaji: "gya", type: "combo", row: "gy" },
  { kana: "ぎゅ", romaji: "gyu", type: "combo", row: "gy" },
  { kana: "ぎょ", romaji: "gyo", type: "combo", row: "gy" },
  // J-
  { kana: "じゃ", romaji: "ja", type: "combo", row: "j" },
  { kana: "じゅ", romaji: "ju", type: "combo", row: "j" },
  { kana: "じょ", romaji: "jo", type: "combo", row: "j" },
  // By-
  { kana: "びゃ", romaji: "bya", type: "combo", row: "by" },
  { kana: "びゅ", romaji: "byu", type: "combo", row: "by" },
  { kana: "びょ", romaji: "byo", type: "combo", row: "by" },
  // Py-
  { kana: "ぴゃ", romaji: "pya", type: "combo", row: "py" },
  { kana: "ぴゅ", romaji: "pyu", type: "combo", row: "py" },
  { kana: "ぴょ", romaji: "pyo", type: "combo", row: "py" },
];

// ── Complete Katakana Chart ──

const KATAKANA_GOJUUON: KanaEntry[] = [
  { kana: "ア", romaji: "a", type: "gojuuon", row: "a-row" },
  { kana: "イ", romaji: "i", type: "gojuuon", row: "a-row" },
  { kana: "ウ", romaji: "u", type: "gojuuon", row: "a-row" },
  { kana: "エ", romaji: "e", type: "gojuuon", row: "a-row" },
  { kana: "オ", romaji: "o", type: "gojuuon", row: "a-row" },
  { kana: "カ", romaji: "ka", type: "gojuuon", row: "ka-row" },
  { kana: "キ", romaji: "ki", type: "gojuuon", row: "ka-row" },
  { kana: "ク", romaji: "ku", type: "gojuuon", row: "ka-row" },
  { kana: "ケ", romaji: "ke", type: "gojuuon", row: "ka-row" },
  { kana: "コ", romaji: "ko", type: "gojuuon", row: "ka-row" },
  { kana: "サ", romaji: "sa", type: "gojuuon", row: "sa-row" },
  { kana: "シ", romaji: "shi", type: "gojuuon", row: "sa-row" },
  { kana: "ス", romaji: "su", type: "gojuuon", row: "sa-row" },
  { kana: "セ", romaji: "se", type: "gojuuon", row: "sa-row" },
  { kana: "ソ", romaji: "so", type: "gojuuon", row: "sa-row" },
  { kana: "タ", romaji: "ta", type: "gojuuon", row: "ta-row" },
  { kana: "チ", romaji: "chi", type: "gojuuon", row: "ta-row" },
  { kana: "ツ", romaji: "tsu", type: "gojuuon", row: "ta-row" },
  { kana: "テ", romaji: "te", type: "gojuuon", row: "ta-row" },
  { kana: "ト", romaji: "to", type: "gojuuon", row: "ta-row" },
  { kana: "ナ", romaji: "na", type: "gojuuon", row: "na-row" },
  { kana: "ニ", romaji: "ni", type: "gojuuon", row: "na-row" },
  { kana: "ヌ", romaji: "nu", type: "gojuuon", row: "na-row" },
  { kana: "ネ", romaji: "ne", type: "gojuuon", row: "na-row" },
  { kana: "ノ", romaji: "no", type: "gojuuon", row: "na-row" },
  { kana: "ハ", romaji: "ha", type: "gojuuon", row: "ha-row" },
  { kana: "ヒ", romaji: "hi", type: "gojuuon", row: "ha-row" },
  { kana: "フ", romaji: "fu", type: "gojuuon", row: "ha-row" },
  { kana: "ヘ", romaji: "he", type: "gojuuon", row: "ha-row" },
  { kana: "ホ", romaji: "ho", type: "gojuuon", row: "ha-row" },
  { kana: "マ", romaji: "ma", type: "gojuuon", row: "ma-row" },
  { kana: "ミ", romaji: "mi", type: "gojuuon", row: "ma-row" },
  { kana: "ム", romaji: "mu", type: "gojuuon", row: "ma-row" },
  { kana: "メ", romaji: "me", type: "gojuuon", row: "ma-row" },
  { kana: "モ", romaji: "mo", type: "gojuuon", row: "ma-row" },
  { kana: "ヤ", romaji: "ya", type: "gojuuon", row: "ya-row" },
  { kana: "ユ", romaji: "yu", type: "gojuuon", row: "ya-row" },
  { kana: "ヨ", romaji: "yo", type: "gojuuon", row: "ya-row" },
  { kana: "ラ", romaji: "ra", type: "gojuuon", row: "ra-row" },
  { kana: "リ", romaji: "ri", type: "gojuuon", row: "ra-row" },
  { kana: "ル", romaji: "ru", type: "gojuuon", row: "ra-row" },
  { kana: "レ", romaji: "re", type: "gojuuon", row: "ra-row" },
  { kana: "ロ", romaji: "ro", type: "gojuuon", row: "ra-row" },
  { kana: "ワ", romaji: "wa", type: "gojuuon", row: "wa-row" },
  { kana: "ヲ", romaji: "wo", type: "gojuuon", row: "wa-row" },
  { kana: "ン", romaji: "n", type: "gojuuon", row: "n" },
];

const KATAKANA_DAKUTEN: KanaEntry[] = [
  { kana: "ガ", romaji: "ga", type: "dakuten", row: "ga-row" },
  { kana: "ギ", romaji: "gi", type: "dakuten", row: "ga-row" },
  { kana: "グ", romaji: "gu", type: "dakuten", row: "ga-row" },
  { kana: "ゲ", romaji: "ge", type: "dakuten", row: "ga-row" },
  { kana: "ゴ", romaji: "go", type: "dakuten", row: "ga-row" },
  { kana: "ザ", romaji: "za", type: "dakuten", row: "za-row" },
  { kana: "ジ", romaji: "ji", type: "dakuten", row: "za-row" },
  { kana: "ズ", romaji: "zu", type: "dakuten", row: "za-row" },
  { kana: "ゼ", romaji: "ze", type: "dakuten", row: "za-row" },
  { kana: "ゾ", romaji: "zo", type: "dakuten", row: "za-row" },
  { kana: "ダ", romaji: "da", type: "dakuten", row: "da-row" },
  { kana: "ヂ", romaji: "di/ji", type: "dakuten", row: "da-row" },
  { kana: "ヅ", romaji: "du/zu", type: "dakuten", row: "da-row" },
  { kana: "デ", romaji: "de", type: "dakuten", row: "da-row" },
  { kana: "ド", romaji: "do", type: "dakuten", row: "da-row" },
  { kana: "バ", romaji: "ba", type: "dakuten", row: "ba-row" },
  { kana: "ビ", romaji: "bi", type: "dakuten", row: "ba-row" },
  { kana: "ブ", romaji: "bu", type: "dakuten", row: "ba-row" },
  { kana: "ベ", romaji: "be", type: "dakuten", row: "ba-row" },
  { kana: "ボ", romaji: "bo", type: "dakuten", row: "ba-row" },
];

const KATAKANA_HANDAKUTEN: KanaEntry[] = [
  { kana: "パ", romaji: "pa", type: "handakuten", row: "pa-row" },
  { kana: "ピ", romaji: "pi", type: "handakuten", row: "pa-row" },
  { kana: "プ", romaji: "pu", type: "handakuten", row: "pa-row" },
  { kana: "ペ", romaji: "pe", type: "handakuten", row: "pa-row" },
  { kana: "ポ", romaji: "po", type: "handakuten", row: "pa-row" },
];

const KATAKANA_COMBOS: KanaEntry[] = [
  { kana: "キャ", romaji: "kya", type: "combo", row: "ky" },
  { kana: "キュ", romaji: "kyu", type: "combo", row: "ky" },
  { kana: "キョ", romaji: "kyo", type: "combo", row: "ky" },
  { kana: "シャ", romaji: "sha", type: "combo", row: "sh" },
  { kana: "シュ", romaji: "shu", type: "combo", row: "sh" },
  { kana: "ショ", romaji: "sho", type: "combo", row: "sh" },
  { kana: "チャ", romaji: "cha", type: "combo", row: "ch" },
  { kana: "チュ", romaji: "chu", type: "combo", row: "ch" },
  { kana: "チョ", romaji: "cho", type: "combo", row: "ch" },
  { kana: "ニャ", romaji: "nya", type: "combo", row: "ny" },
  { kana: "ニュ", romaji: "nyu", type: "combo", row: "ny" },
  { kana: "ニョ", romaji: "nyo", type: "combo", row: "ny" },
  { kana: "ヒャ", romaji: "hya", type: "combo", row: "hy" },
  { kana: "ヒュ", romaji: "hyu", type: "combo", row: "hy" },
  { kana: "ヒョ", romaji: "hyo", type: "combo", row: "hy" },
  { kana: "ミャ", romaji: "mya", type: "combo", row: "my" },
  { kana: "ミュ", romaji: "myu", type: "combo", row: "my" },
  { kana: "ミョ", romaji: "myo", type: "combo", row: "my" },
  { kana: "リャ", romaji: "rya", type: "combo", row: "ry" },
  { kana: "リュ", romaji: "ryu", type: "combo", row: "ry" },
  { kana: "リョ", romaji: "ryo", type: "combo", row: "ry" },
  { kana: "ギャ", romaji: "gya", type: "combo", row: "gy" },
  { kana: "ギュ", romaji: "gyu", type: "combo", row: "gy" },
  { kana: "ギョ", romaji: "gyo", type: "combo", row: "gy" },
  { kana: "ジャ", romaji: "ja", type: "combo", row: "j" },
  { kana: "ジュ", romaji: "ju", type: "combo", row: "j" },
  { kana: "ジョ", romaji: "jo", type: "combo", row: "j" },
  { kana: "ビャ", romaji: "bya", type: "combo", row: "by" },
  { kana: "ビュ", romaji: "byu", type: "combo", row: "by" },
  { kana: "ビョ", romaji: "byo", type: "combo", row: "by" },
  { kana: "ピャ", romaji: "pya", type: "combo", row: "py" },
  { kana: "ピュ", romaji: "pyu", type: "combo", row: "py" },
  { kana: "ピョ", romaji: "pyo", type: "combo", row: "py" },
  // Katakana-only extended sounds for foreign words
  { kana: "ティ", romaji: "ti", type: "combo", row: "ext" },
  { kana: "ディ", romaji: "di", type: "combo", row: "ext" },
  { kana: "ファ", romaji: "fa", type: "combo", row: "ext" },
  { kana: "フィ", romaji: "fi", type: "combo", row: "ext" },
  { kana: "フェ", romaji: "fe", type: "combo", row: "ext" },
  { kana: "フォ", romaji: "fo", type: "combo", row: "ext" },
  { kana: "ヴァ", romaji: "va", type: "combo", row: "ext" },
  { kana: "ヴィ", romaji: "vi", type: "combo", row: "ext" },
  { kana: "ヴ", romaji: "vu", type: "combo", row: "ext" },
  { kana: "ヴェ", romaji: "ve", type: "combo", row: "ext" },
  { kana: "ヴォ", romaji: "vo", type: "combo", row: "ext" },
  { kana: "ウィ", romaji: "wi", type: "combo", row: "ext" },
  { kana: "ウェ", romaji: "we", type: "combo", row: "ext" },
  { kana: "ウォ", romaji: "wo", type: "combo", row: "ext" },
];

export const KANA_REFERENCE: JLPTKanaReference = {
  hiragana: [
    ...HIRAGANA_GOJUUON,
    ...HIRAGANA_DAKUTEN,
    ...HIRAGANA_HANDAKUTEN,
    ...HIRAGANA_COMBOS,
  ],
  katakana: [
    ...KATAKANA_GOJUUON,
    ...KATAKANA_DAKUTEN,
    ...KATAKANA_HANDAKUTEN,
    ...KATAKANA_COMBOS,
  ],
};

/**
 * Must-master kana checklist notes per JLPT level:
 * - N5: All 46 hiragana (gojuuon) + all 46 katakana (gojuuon) + dakuten/handakuten + basic combos
 * - N4: Full mastery of all kana including combos, long vowels, double consonants (っ/ッ)
 * - N3+: All kana fully mastered (prerequisite), focus shifts to kanji/vocab/grammar
 */
export const KANA_MASTERY_NOTES: Record<string, string> = {
  N5: "Master all 46 basic hiragana + 46 katakana, plus dakuten (゛) and handakuten (゜) variants. Learn basic combo kana (きゃ, しゅ, ちょ, etc). Understand long vowels (おう → おお sound) and small っ for double consonants.",
  N4: "Full mastery of ALL kana forms required. Read katakana loanwords fluently (コンピューター, アルバイト). Recognize small ッ, ー (chōon), and extended katakana combos (ティ, ファ, ヴ) for foreign words.",
  N3: "All kana are prerequisite. Focus shifts entirely to kanji readings, compound vocab, and grammar patterns. Must read kana at native speed.",
  N2: "Kana fully internalized. Must handle kana used in formal/literary contexts, specialized readings, and rapid processing in long reading passages.",
  N1: "Kana mastery is assumed. Focus on nuanced kanji readings, classical/literary Japanese (旧仮名遣い awareness), and professional-level text processing.",
};
