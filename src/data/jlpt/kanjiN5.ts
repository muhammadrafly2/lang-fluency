import { KanjiEntry, JLPTKanjiReference } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// JLPT N5 Kanji — ~103 kanji (Elementary Grade 1-2 level)
// ═══════════════════════════════════════════════════════════════════════════

export const N5_KANJI: KanjiEntry[] = [
  // ── Numbers ──
  { kanji: "一", onyomi: ["イチ", "イツ"], kunyomi: ["ひと-", "ひと.つ"], meanings: ["one"], strokeCount: 1, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "一つ", reading: "ひとつ", meaning: "one (thing)" }, { word: "一人", reading: "ひとり", meaning: "one person" }] },
  { kanji: "二", onyomi: ["ニ", "ジ"], kunyomi: ["ふた", "ふた.つ"], meanings: ["two"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "二つ", reading: "ふたつ", meaning: "two (things)" }, { word: "二月", reading: "にがつ", meaning: "February" }] },
  { kanji: "三", onyomi: ["サン"], kunyomi: ["み", "み.つ", "みっ.つ"], meanings: ["three"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "三つ", reading: "みっつ", meaning: "three (things)" }, { word: "三月", reading: "さんがつ", meaning: "March" }] },
  { kanji: "四", onyomi: ["シ"], kunyomi: ["よ", "よ.つ", "よっ.つ", "よん"], meanings: ["four"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "四つ", reading: "よっつ", meaning: "four (things)" }, { word: "四月", reading: "しがつ", meaning: "April" }] },
  { kanji: "五", onyomi: ["ゴ"], kunyomi: ["いつ", "いつ.つ"], meanings: ["five"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "五つ", reading: "いつつ", meaning: "five (things)" }, { word: "五日", reading: "いつか", meaning: "fifth day" }] },
  { kanji: "六", onyomi: ["ロク"], kunyomi: ["む", "む.つ", "むっ.つ"], meanings: ["six"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "六つ", reading: "むっつ", meaning: "six (things)" }, { word: "六月", reading: "ろくがつ", meaning: "June" }] },
  { kanji: "七", onyomi: ["シチ"], kunyomi: ["なな", "なな.つ", "なの"], meanings: ["seven"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "七つ", reading: "ななつ", meaning: "seven (things)" }, { word: "七月", reading: "しちがつ", meaning: "July" }] },
  { kanji: "八", onyomi: ["ハチ"], kunyomi: ["や", "や.つ", "やっ.つ", "よう"], meanings: ["eight"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "八つ", reading: "やっつ", meaning: "eight (things)" }, { word: "八百", reading: "はっぴゃく", meaning: "eight hundred" }] },
  { kanji: "九", onyomi: ["キュウ", "ク"], kunyomi: ["ここの", "ここの.つ"], meanings: ["nine"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "九つ", reading: "ここのつ", meaning: "nine (things)" }, { word: "九月", reading: "くがつ", meaning: "September" }] },
  { kanji: "十", onyomi: ["ジュウ", "ジッ"], kunyomi: ["とお", "と"], meanings: ["ten"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "十", reading: "じゅう", meaning: "ten" }, { word: "二十", reading: "にじゅう", meaning: "twenty" }] },
  { kanji: "百", onyomi: ["ヒャク", "ビャク"], kunyomi: [], meanings: ["hundred"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "百", reading: "ひゃく", meaning: "hundred" }, { word: "三百", reading: "さんびゃく", meaning: "three hundred" }] },
  { kanji: "千", onyomi: ["セン"], kunyomi: ["ち"], meanings: ["thousand"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "千", reading: "せん", meaning: "thousand" }, { word: "三千", reading: "さんぜん", meaning: "three thousand" }] },
  { kanji: "万", onyomi: ["マン", "バン"], kunyomi: ["よろず"], meanings: ["ten thousand"], strokeCount: 3, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "一万", reading: "いちまん", meaning: "ten thousand" }, { word: "万年筆", reading: "まんねんひつ", meaning: "fountain pen" }] },
  { kanji: "円", onyomi: ["エン"], kunyomi: ["まる"], meanings: ["circle", "yen"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "百円", reading: "ひゃくえん", meaning: "100 yen" }, { word: "円い", reading: "まるい", meaning: "round" }] },

  // ── Time ──
  { kanji: "日", onyomi: ["ニチ", "ジツ"], kunyomi: ["ひ", "か"], meanings: ["day", "sun", "Japan"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "日曜日", reading: "にちようび", meaning: "Sunday" }, { word: "毎日", reading: "まいにち", meaning: "every day" }] },
  { kanji: "月", onyomi: ["ゲツ", "ガツ"], kunyomi: ["つき"], meanings: ["month", "moon"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "月曜日", reading: "げつようび", meaning: "Monday" }, { word: "今月", reading: "こんげつ", meaning: "this month" }] },
  { kanji: "火", onyomi: ["カ"], kunyomi: ["ひ", "ほ"], meanings: ["fire"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "火曜日", reading: "かようび", meaning: "Tuesday" }, { word: "花火", reading: "はなび", meaning: "fireworks" }] },
  { kanji: "水", onyomi: ["スイ"], kunyomi: ["みず"], meanings: ["water"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "水曜日", reading: "すいようび", meaning: "Wednesday" }, { word: "お水", reading: "おみず", meaning: "water" }] },
  { kanji: "木", onyomi: ["モク", "ボク"], kunyomi: ["き", "こ"], meanings: ["tree", "wood"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "木曜日", reading: "もくようび", meaning: "Thursday" }, { word: "木", reading: "き", meaning: "tree" }] },
  { kanji: "金", onyomi: ["キン", "コン"], kunyomi: ["かね", "かな"], meanings: ["gold", "money"], strokeCount: 8, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "金曜日", reading: "きんようび", meaning: "Friday" }, { word: "お金", reading: "おかね", meaning: "money" }] },
  { kanji: "土", onyomi: ["ド", "ト"], kunyomi: ["つち"], meanings: ["earth", "soil"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "土曜日", reading: "どようび", meaning: "Saturday" }, { word: "土地", reading: "とち", meaning: "land" }] },
  { kanji: "年", onyomi: ["ネン"], kunyomi: ["とし"], meanings: ["year"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "今年", reading: "ことし", meaning: "this year" }, { word: "去年", reading: "きょねん", meaning: "last year" }] },
  { kanji: "時", onyomi: ["ジ"], kunyomi: ["とき"], meanings: ["time", "hour"], strokeCount: 10, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "時間", reading: "じかん", meaning: "time" }, { word: "何時", reading: "なんじ", meaning: "what time" }] },
  { kanji: "分", onyomi: ["ブン", "フン", "ブ"], kunyomi: ["わ.ける", "わ.かる"], meanings: ["minute", "part", "understand"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "十分", reading: "じゅっぷん", meaning: "ten minutes" }, { word: "半分", reading: "はんぶん", meaning: "half" }] },
  { kanji: "半", onyomi: ["ハン"], kunyomi: ["なか.ば"], meanings: ["half"], strokeCount: 5, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "半分", reading: "はんぶん", meaning: "half" }, { word: "三時半", reading: "さんじはん", meaning: "3:30" }] },
  { kanji: "毎", onyomi: ["マイ"], kunyomi: ["ごと"], meanings: ["every"], strokeCount: 6, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "毎日", reading: "まいにち", meaning: "every day" }, { word: "毎週", reading: "まいしゅう", meaning: "every week" }] },
  { kanji: "今", onyomi: ["コン", "キン"], kunyomi: ["いま"], meanings: ["now", "this"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "今日", reading: "きょう", meaning: "today" }, { word: "今", reading: "いま", meaning: "now" }] },
  { kanji: "先", onyomi: ["セン"], kunyomi: ["さき", "ま.ず"], meanings: ["previous", "ahead"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "先生", reading: "せんせい", meaning: "teacher" }, { word: "先週", reading: "せんしゅう", meaning: "last week" }] },
  { kanji: "来", onyomi: ["ライ"], kunyomi: ["く.る", "きた.る"], meanings: ["come", "next"], strokeCount: 7, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "来週", reading: "らいしゅう", meaning: "next week" }, { word: "来年", reading: "らいねん", meaning: "next year" }] },
  { kanji: "午", onyomi: ["ゴ"], kunyomi: ["うま"], meanings: ["noon"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "午前", reading: "ごぜん", meaning: "morning/AM" }, { word: "午後", reading: "ごご", meaning: "afternoon/PM" }] },
  { kanji: "前", onyomi: ["ゼン"], kunyomi: ["まえ"], meanings: ["before", "in front of"], strokeCount: 9, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "名前", reading: "なまえ", meaning: "name" }, { word: "前", reading: "まえ", meaning: "front" }] },
  { kanji: "後", onyomi: ["ゴ", "コウ"], kunyomi: ["のち", "うし.ろ", "あと"], meanings: ["after", "behind"], strokeCount: 9, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "午後", reading: "ごご", meaning: "afternoon" }, { word: "後ろ", reading: "うしろ", meaning: "behind" }] },
  { kanji: "週", onyomi: ["シュウ"], kunyomi: [], meanings: ["week"], strokeCount: 11, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "今週", reading: "こんしゅう", meaning: "this week" }, { word: "来週", reading: "らいしゅう", meaning: "next week" }] },
  { kanji: "間", onyomi: ["カン", "ケン"], kunyomi: ["あいだ", "ま"], meanings: ["between", "interval"], strokeCount: 12, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "時間", reading: "じかん", meaning: "time" }, { word: "人間", reading: "にんげん", meaning: "human" }] },

  // ── People ──
  { kanji: "人", onyomi: ["ジン", "ニン"], kunyomi: ["ひと"], meanings: ["person"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "日本人", reading: "にほんじん", meaning: "Japanese person" }, { word: "人", reading: "ひと", meaning: "person" }] },
  { kanji: "子", onyomi: ["シ", "ス"], kunyomi: ["こ"], meanings: ["child"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "子供", reading: "こども", meaning: "child" }, { word: "女の子", reading: "おんなのこ", meaning: "girl" }] },
  { kanji: "女", onyomi: ["ジョ", "ニョ"], kunyomi: ["おんな", "め"], meanings: ["woman", "female"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "女の人", reading: "おんなのひと", meaning: "woman" }, { word: "女性", reading: "じょせい", meaning: "female" }] },
  { kanji: "男", onyomi: ["ダン", "ナン"], kunyomi: ["おとこ"], meanings: ["man", "male"], strokeCount: 7, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "男の人", reading: "おとこのひと", meaning: "man" }, { word: "男性", reading: "だんせい", meaning: "male" }] },
  { kanji: "父", onyomi: ["フ"], kunyomi: ["ちち"], meanings: ["father"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "お父さん", reading: "おとうさん", meaning: "father" }, { word: "父", reading: "ちち", meaning: "my father" }] },
  { kanji: "母", onyomi: ["ボ"], kunyomi: ["はは"], meanings: ["mother"], strokeCount: 5, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "お母さん", reading: "おかあさん", meaning: "mother" }, { word: "母", reading: "はは", meaning: "my mother" }] },
  { kanji: "友", onyomi: ["ユウ"], kunyomi: ["とも"], meanings: ["friend"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "友達", reading: "ともだち", meaning: "friend" }, { word: "友人", reading: "ゆうじん", meaning: "friend (formal)" }] },
  { kanji: "学", onyomi: ["ガク"], kunyomi: ["まな.ぶ"], meanings: ["study", "learning"], strokeCount: 8, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "学生", reading: "がくせい", meaning: "student" }, { word: "大学", reading: "だいがく", meaning: "university" }] },
  { kanji: "生", onyomi: ["セイ", "ショウ"], kunyomi: ["い.きる", "う.まれる", "なま"], meanings: ["life", "birth", "raw"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "先生", reading: "せんせい", meaning: "teacher" }, { word: "学生", reading: "がくせい", meaning: "student" }] },
  { kanji: "名", onyomi: ["メイ", "ミョウ"], kunyomi: ["な"], meanings: ["name"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "名前", reading: "なまえ", meaning: "name" }, { word: "有名", reading: "ゆうめい", meaning: "famous" }] },

  // ── Nature & Place ──
  { kanji: "山", onyomi: ["サン", "ザン"], kunyomi: ["やま"], meanings: ["mountain"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "山", reading: "やま", meaning: "mountain" }, { word: "富士山", reading: "ふじさん", meaning: "Mt. Fuji" }] },
  { kanji: "川", onyomi: ["セン"], kunyomi: ["かわ"], meanings: ["river"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "川", reading: "かわ", meaning: "river" }] },
  { kanji: "天", onyomi: ["テン"], kunyomi: ["あめ", "あま"], meanings: ["heaven", "sky"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "天気", reading: "てんき", meaning: "weather" }, { word: "天ぷら", reading: "てんぷら", meaning: "tempura" }] },
  { kanji: "気", onyomi: ["キ", "ケ"], kunyomi: [], meanings: ["spirit", "air", "mood"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "天気", reading: "てんき", meaning: "weather" }, { word: "元気", reading: "げんき", meaning: "healthy/energetic" }] },
  { kanji: "雨", onyomi: ["ウ"], kunyomi: ["あめ", "あま"], meanings: ["rain"], strokeCount: 8, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "雨", reading: "あめ", meaning: "rain" }, { word: "大雨", reading: "おおあめ", meaning: "heavy rain" }] },
  { kanji: "花", onyomi: ["カ"], kunyomi: ["はな"], meanings: ["flower"], strokeCount: 7, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "花", reading: "はな", meaning: "flower" }, { word: "花火", reading: "はなび", meaning: "fireworks" }] },

  // ── Location / Direction ──
  { kanji: "上", onyomi: ["ジョウ", "ショウ"], kunyomi: ["うえ", "あ.がる", "のぼ.る"], meanings: ["above", "up"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "上", reading: "うえ", meaning: "above" }, { word: "上手", reading: "じょうず", meaning: "skillful" }] },
  { kanji: "下", onyomi: ["カ", "ゲ"], kunyomi: ["した", "さ.がる", "くだ.る"], meanings: ["below", "down"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "下", reading: "した", meaning: "below" }, { word: "下手", reading: "へた", meaning: "unskillful" }] },
  { kanji: "中", onyomi: ["チュウ"], kunyomi: ["なか"], meanings: ["inside", "middle"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "中", reading: "なか", meaning: "inside" }, { word: "中国", reading: "ちゅうごく", meaning: "China" }] },
  { kanji: "外", onyomi: ["ガイ", "ゲ"], kunyomi: ["そと", "ほか", "はず.す"], meanings: ["outside"], strokeCount: 5, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "外", reading: "そと", meaning: "outside" }, { word: "外国", reading: "がいこく", meaning: "foreign country" }] },
  { kanji: "右", onyomi: ["ウ", "ユウ"], kunyomi: ["みぎ"], meanings: ["right"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "右", reading: "みぎ", meaning: "right" }] },
  { kanji: "左", onyomi: ["サ"], kunyomi: ["ひだり"], meanings: ["left"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "左", reading: "ひだり", meaning: "left" }] },
  { kanji: "北", onyomi: ["ホク"], kunyomi: ["きた"], meanings: ["north"], strokeCount: 5, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "北", reading: "きた", meaning: "north" }, { word: "北海道", reading: "ほっかいどう", meaning: "Hokkaido" }] },
  { kanji: "南", onyomi: ["ナン", "ナ"], kunyomi: ["みなみ"], meanings: ["south"], strokeCount: 9, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "南", reading: "みなみ", meaning: "south" }] },
  { kanji: "東", onyomi: ["トウ"], kunyomi: ["ひがし"], meanings: ["east"], strokeCount: 8, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "東", reading: "ひがし", meaning: "east" }, { word: "東京", reading: "とうきょう", meaning: "Tokyo" }] },
  { kanji: "西", onyomi: ["セイ", "サイ"], kunyomi: ["にし"], meanings: ["west"], strokeCount: 6, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "西", reading: "にし", meaning: "west" }] },
  { kanji: "国", onyomi: ["コク"], kunyomi: ["くに"], meanings: ["country"], strokeCount: 8, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "外国", reading: "がいこく", meaning: "foreign country" }, { word: "中国", reading: "ちゅうごく", meaning: "China" }] },

  // ── Actions ──
  { kanji: "食", onyomi: ["ショク", "ジキ"], kunyomi: ["た.べる", "く.う"], meanings: ["eat", "food"], strokeCount: 9, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "食べる", reading: "たべる", meaning: "to eat" }, { word: "食堂", reading: "しょくどう", meaning: "dining hall" }] },
  { kanji: "飲", onyomi: ["イン"], kunyomi: ["の.む"], meanings: ["drink"], strokeCount: 12, jlptLevel: "N5", grade: 3, exampleWords: [{ word: "飲む", reading: "のむ", meaning: "to drink" }, { word: "飲み物", reading: "のみもの", meaning: "beverage" }] },
  { kanji: "見", onyomi: ["ケン"], kunyomi: ["み.る", "み.える"], meanings: ["see", "look"], strokeCount: 7, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "見る", reading: "みる", meaning: "to see" }, { word: "花見", reading: "はなみ", meaning: "cherry blossom viewing" }] },
  { kanji: "聞", onyomi: ["ブン", "モン"], kunyomi: ["き.く", "き.こえる"], meanings: ["hear", "ask", "listen"], strokeCount: 14, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "聞く", reading: "きく", meaning: "to listen" }, { word: "新聞", reading: "しんぶん", meaning: "newspaper" }] },
  { kanji: "読", onyomi: ["ドク", "トク"], kunyomi: ["よ.む"], meanings: ["read"], strokeCount: 14, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "読む", reading: "よむ", meaning: "to read" }] },
  { kanji: "書", onyomi: ["ショ"], kunyomi: ["か.く"], meanings: ["write"], strokeCount: 10, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "書く", reading: "かく", meaning: "to write" }, { word: "辞書", reading: "じしょ", meaning: "dictionary" }] },
  { kanji: "話", onyomi: ["ワ"], kunyomi: ["はな.す", "はなし"], meanings: ["talk", "speech"], strokeCount: 13, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "話す", reading: "はなす", meaning: "to speak" }, { word: "電話", reading: "でんわ", meaning: "telephone" }] },
  { kanji: "買", onyomi: ["バイ"], kunyomi: ["か.う"], meanings: ["buy"], strokeCount: 12, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "買う", reading: "かう", meaning: "to buy" }, { word: "買い物", reading: "かいもの", meaning: "shopping" }] },
  { kanji: "行", onyomi: ["コウ", "ギョウ"], kunyomi: ["い.く", "ゆ.く", "おこな.う"], meanings: ["go", "carry out"], strokeCount: 6, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "行く", reading: "いく", meaning: "to go" }, { word: "銀行", reading: "ぎんこう", meaning: "bank" }] },
  { kanji: "出", onyomi: ["シュツ", "スイ"], kunyomi: ["で.る", "だ.す"], meanings: ["exit", "come out"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "出る", reading: "でる", meaning: "to go out" }, { word: "出口", reading: "でぐち", meaning: "exit" }] },
  { kanji: "入", onyomi: ["ニュウ"], kunyomi: ["い.る", "はい.る"], meanings: ["enter"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "入る", reading: "はいる", meaning: "to enter" }, { word: "入口", reading: "いりぐち", meaning: "entrance" }] },
  { kanji: "立", onyomi: ["リツ", "リュウ"], kunyomi: ["た.つ", "た.てる"], meanings: ["stand"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "立つ", reading: "たつ", meaning: "to stand" }] },
  { kanji: "休", onyomi: ["キュウ"], kunyomi: ["やす.む", "やす.み"], meanings: ["rest"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "休む", reading: "やすむ", meaning: "to rest" }, { word: "休み", reading: "やすみ", meaning: "holiday" }] },

  // ── Size / Amount ──
  { kanji: "大", onyomi: ["ダイ", "タイ"], kunyomi: ["おお.きい"], meanings: ["big", "large"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "大きい", reading: "おおきい", meaning: "big" }, { word: "大学", reading: "だいがく", meaning: "university" }] },
  { kanji: "小", onyomi: ["ショウ"], kunyomi: ["ちい.さい", "こ", "お"], meanings: ["small", "little"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "小さい", reading: "ちいさい", meaning: "small" }, { word: "小学校", reading: "しょうがっこう", meaning: "elementary school" }] },
  { kanji: "高", onyomi: ["コウ"], kunyomi: ["たか.い"], meanings: ["tall", "high", "expensive"], strokeCount: 10, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "高い", reading: "たかい", meaning: "tall/expensive" }, { word: "高校", reading: "こうこう", meaning: "high school" }] },
  { kanji: "安", onyomi: ["アン"], kunyomi: ["やす.い"], meanings: ["cheap", "peaceful"], strokeCount: 6, jlptLevel: "N5", grade: 3, exampleWords: [{ word: "安い", reading: "やすい", meaning: "cheap" }, { word: "安心", reading: "あんしん", meaning: "relief" }] },
  { kanji: "長", onyomi: ["チョウ"], kunyomi: ["なが.い"], meanings: ["long"], strokeCount: 8, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "長い", reading: "ながい", meaning: "long" }, { word: "社長", reading: "しゃちょう", meaning: "company president" }] },
  { kanji: "新", onyomi: ["シン"], kunyomi: ["あたら.しい", "あら.た", "にい"], meanings: ["new"], strokeCount: 13, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "新しい", reading: "あたらしい", meaning: "new" }, { word: "新聞", reading: "しんぶん", meaning: "newspaper" }] },
  { kanji: "古", onyomi: ["コ"], kunyomi: ["ふる.い"], meanings: ["old (things)"], strokeCount: 5, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "古い", reading: "ふるい", meaning: "old" }, { word: "中古", reading: "ちゅうこ", meaning: "secondhand" }] },
  { kanji: "多", onyomi: ["タ"], kunyomi: ["おお.い"], meanings: ["many", "much"], strokeCount: 6, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "多い", reading: "おおい", meaning: "many" }] },
  { kanji: "少", onyomi: ["ショウ"], kunyomi: ["すく.ない", "すこ.し"], meanings: ["few", "little"], strokeCount: 4, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "少ない", reading: "すくない", meaning: "few" }, { word: "少し", reading: "すこし", meaning: "a little" }] },
  { kanji: "白", onyomi: ["ハク", "ビャク"], kunyomi: ["しろ", "しろ.い"], meanings: ["white"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "白い", reading: "しろい", meaning: "white" }] },

  // ── Places / Objects ──
  { kanji: "館", onyomi: ["カン"], kunyomi: ["やかた"], meanings: ["building", "hall"], strokeCount: 16, jlptLevel: "N5", grade: 3, exampleWords: [{ word: "図書館", reading: "としょかん", meaning: "library" }, { word: "映画館", reading: "えいがかん", meaning: "movie theater" }] },
  { kanji: "校", onyomi: ["コウ"], kunyomi: [], meanings: ["school"], strokeCount: 10, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "学校", reading: "がっこう", meaning: "school" }, { word: "高校", reading: "こうこう", meaning: "high school" }] },
  { kanji: "車", onyomi: ["シャ"], kunyomi: ["くるま"], meanings: ["car", "vehicle"], strokeCount: 7, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "車", reading: "くるま", meaning: "car" }, { word: "電車", reading: "でんしゃ", meaning: "train" }] },
  { kanji: "電", onyomi: ["デン"], kunyomi: [], meanings: ["electricity"], strokeCount: 13, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "電車", reading: "でんしゃ", meaning: "train" }, { word: "電話", reading: "でんわ", meaning: "telephone" }] },
  { kanji: "道", onyomi: ["ドウ", "トウ"], kunyomi: ["みち"], meanings: ["road", "way"], strokeCount: 12, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "道", reading: "みち", meaning: "road" }] },
  { kanji: "店", onyomi: ["テン"], kunyomi: ["みせ"], meanings: ["shop", "store"], strokeCount: 8, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "店", reading: "みせ", meaning: "shop" }, { word: "喫茶店", reading: "きっさてん", meaning: "café" }] },
  { kanji: "社", onyomi: ["シャ"], kunyomi: ["やしろ"], meanings: ["company", "shrine"], strokeCount: 7, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "会社", reading: "かいしゃ", meaning: "company" }, { word: "神社", reading: "じんじゃ", meaning: "shrine" }] },
  { kanji: "駅", onyomi: ["エキ"], kunyomi: [], meanings: ["station"], strokeCount: 14, jlptLevel: "N5", grade: 3, exampleWords: [{ word: "駅", reading: "えき", meaning: "station" }] },
  { kanji: "本", onyomi: ["ホン"], kunyomi: ["もと"], meanings: ["book", "origin"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "本", reading: "ほん", meaning: "book" }, { word: "日本", reading: "にほん", meaning: "Japan" }] },

  // ── Misc Essential ──
  { kanji: "何", onyomi: ["カ"], kunyomi: ["なに", "なん"], meanings: ["what"], strokeCount: 7, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "何", reading: "なに", meaning: "what" }, { word: "何時", reading: "なんじ", meaning: "what time" }] },
  { kanji: "語", onyomi: ["ゴ"], kunyomi: ["かた.る"], meanings: ["language", "word"], strokeCount: 14, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "日本語", reading: "にほんご", meaning: "Japanese language" }, { word: "英語", reading: "えいご", meaning: "English" }] },
  { kanji: "言", onyomi: ["ゲン", "ゴン"], kunyomi: ["い.う", "こと"], meanings: ["say", "word"], strokeCount: 7, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "言う", reading: "いう", meaning: "to say" }] },
  { kanji: "会", onyomi: ["カイ", "エ"], kunyomi: ["あ.う"], meanings: ["meet", "society"], strokeCount: 6, jlptLevel: "N5", grade: 2, exampleWords: [{ word: "会う", reading: "あう", meaning: "to meet" }, { word: "会社", reading: "かいしゃ", meaning: "company" }] },
  { kanji: "手", onyomi: ["シュ"], kunyomi: ["て"], meanings: ["hand"], strokeCount: 4, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "手", reading: "て", meaning: "hand" }, { word: "上手", reading: "じょうず", meaning: "skillful" }] },
  { kanji: "足", onyomi: ["ソク"], kunyomi: ["あし", "た.りる"], meanings: ["foot", "leg", "sufficient"], strokeCount: 7, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "足", reading: "あし", meaning: "foot/leg" }] },
  { kanji: "目", onyomi: ["モク", "ボク"], kunyomi: ["め"], meanings: ["eye"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "目", reading: "め", meaning: "eye" }] },
  { kanji: "耳", onyomi: ["ジ"], kunyomi: ["みみ"], meanings: ["ear"], strokeCount: 6, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "耳", reading: "みみ", meaning: "ear" }] },
  { kanji: "口", onyomi: ["コウ", "ク"], kunyomi: ["くち"], meanings: ["mouth"], strokeCount: 3, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "口", reading: "くち", meaning: "mouth" }, { word: "出口", reading: "でぐち", meaning: "exit" }] },
  { kanji: "力", onyomi: ["リョク", "リキ"], kunyomi: ["ちから"], meanings: ["power", "strength"], strokeCount: 2, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "力", reading: "ちから", meaning: "power" }] },
  { kanji: "正", onyomi: ["セイ", "ショウ"], kunyomi: ["ただ.しい", "まさ"], meanings: ["correct", "right"], strokeCount: 5, jlptLevel: "N5", grade: 1, exampleWords: [{ word: "正しい", reading: "ただしい", meaning: "correct" }] },
];

export const N5_KANJI_REFERENCE: JLPTKanjiReference = {
  level: "N5",
  kanjiList: N5_KANJI,
};
