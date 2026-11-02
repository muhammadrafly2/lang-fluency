import { KanjiEntry, JLPTKanjiReference } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// JLPT N3 Kanji — Representative core selection (~370 total on actual exam)
// Focus: intermediate daily life, work, abstract concepts
// ═══════════════════════════════════════════════════════════════════════════

export const N3_KANJI: KanjiEntry[] = [
  // ── Abstract / Conceptual ──
  { kanji: "意", onyomi: ["イ"], kunyomi: [], meanings: ["idea", "mind", "intention"], strokeCount: 13, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "意味", reading: "いみ", meaning: "meaning" }, { word: "意見", reading: "いけん", meaning: "opinion" }] },
  { kanji: "味", onyomi: ["ミ"], kunyomi: ["あじ", "あじ.わう"], meanings: ["taste", "flavor"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "意味", reading: "いみ", meaning: "meaning" }, { word: "味", reading: "あじ", meaning: "taste" }] },
  { kanji: "由", onyomi: ["ユ", "ユウ", "ユイ"], kunyomi: ["よし"], meanings: ["reason", "cause"], strokeCount: 5, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "理由", reading: "りゆう", meaning: "reason" }, { word: "自由", reading: "じゆう", meaning: "freedom" }] },
  { kanji: "経", onyomi: ["ケイ", "キョウ"], kunyomi: ["へ.る", "た.つ"], meanings: ["pass through", "experience"], strokeCount: 11, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "経験", reading: "けいけん", meaning: "experience" }, { word: "経済", reading: "けいざい", meaning: "economy" }] },
  { kanji: "験", onyomi: ["ケン", "ゲン"], kunyomi: [], meanings: ["examine", "test"], strokeCount: 18, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "経験", reading: "けいけん", meaning: "experience" }, { word: "試験", reading: "しけん", meaning: "exam" }] },
  { kanji: "関", onyomi: ["カン"], kunyomi: ["せき", "かか.わる"], meanings: ["connection", "barrier"], strokeCount: 14, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "関係", reading: "かんけい", meaning: "relation" }, { word: "関心", reading: "かんしん", meaning: "interest" }] },
  { kanji: "係", onyomi: ["ケイ"], kunyomi: ["かか.る", "かかり"], meanings: ["connection", "person in charge"], strokeCount: 9, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "関係", reading: "かんけい", meaning: "relation" }] },
  { kanji: "必", onyomi: ["ヒツ"], kunyomi: ["かなら.ず"], meanings: ["necessarily", "must"], strokeCount: 5, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "必要", reading: "ひつよう", meaning: "necessary" }, { word: "必ず", reading: "かならず", meaning: "certainly" }] },
  { kanji: "要", onyomi: ["ヨウ"], kunyomi: ["い.る", "かなめ"], meanings: ["need", "essential"], strokeCount: 9, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "必要", reading: "ひつよう", meaning: "necessary" }, { word: "重要", reading: "じゅうよう", meaning: "important" }] },
  { kanji: "決", onyomi: ["ケツ"], kunyomi: ["き.める", "き.まる"], meanings: ["decide"], strokeCount: 7, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "決める", reading: "きめる", meaning: "to decide" }, { word: "決定", reading: "けってい", meaning: "decision" }] },
  { kanji: "定", onyomi: ["テイ", "ジョウ"], kunyomi: ["さだ.める", "さだ.まる"], meanings: ["fix", "determine"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "予定", reading: "よてい", meaning: "schedule" }, { word: "決定", reading: "けってい", meaning: "decision" }] },
  { kanji: "予", onyomi: ["ヨ"], kunyomi: ["あらかじ.め"], meanings: ["beforehand", "advance"], strokeCount: 4, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "予定", reading: "よてい", meaning: "schedule" }, { word: "予約", reading: "よやく", meaning: "reservation" }] },
  { kanji: "配", onyomi: ["ハイ"], kunyomi: ["くば.る"], meanings: ["distribute", "deliver"], strokeCount: 10, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "心配", reading: "しんぱい", meaning: "worry" }, { word: "配達", reading: "はいたつ", meaning: "delivery" }] },
  { kanji: "受", onyomi: ["ジュ"], kunyomi: ["う.ける", "う.かる"], meanings: ["receive", "accept"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "受ける", reading: "うける", meaning: "to receive" }, { word: "受付", reading: "うけつけ", meaning: "reception" }] },
  { kanji: "取", onyomi: ["シュ"], kunyomi: ["と.る"], meanings: ["take"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "取る", reading: "とる", meaning: "to take" }] },
  { kanji: "達", onyomi: ["タツ", "ダチ"], kunyomi: ["たち"], meanings: ["reach", "arrive", "plural suffix"], strokeCount: 12, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "友達", reading: "ともだち", meaning: "friend" }, { word: "配達", reading: "はいたつ", meaning: "delivery" }] },
  { kanji: "発", onyomi: ["ハツ", "ホツ"], kunyomi: [], meanings: ["emit", "departure", "discharge"], strokeCount: 9, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "出発", reading: "しゅっぱつ", meaning: "departure" }, { word: "発見", reading: "はっけん", meaning: "discovery" }] },
  { kanji: "表", onyomi: ["ヒョウ"], kunyomi: ["おもて", "あらわ.す"], meanings: ["surface", "express", "table"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "発表", reading: "はっぴょう", meaning: "announcement" }, { word: "表現", reading: "ひょうげん", meaning: "expression" }] },
  { kanji: "現", onyomi: ["ゲン"], kunyomi: ["あらわ.れる"], meanings: ["present", "appear"], strokeCount: 11, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "現在", reading: "げんざい", meaning: "present/now" }, { word: "表現", reading: "ひょうげん", meaning: "expression" }] },
  { kanji: "在", onyomi: ["ザイ"], kunyomi: ["あ.る"], meanings: ["exist", "located"], strokeCount: 6, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "現在", reading: "げんざい", meaning: "present" }] },
  { kanji: "点", onyomi: ["テン"], kunyomi: ["つ.ける"], meanings: ["point", "mark"], strokeCount: 9, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "点", reading: "てん", meaning: "point" }, { word: "欠点", reading: "けってん", meaning: "flaw" }] },

  // ── Society & Work ──
  { kanji: "政", onyomi: ["セイ", "ショウ"], kunyomi: ["まつりごと"], meanings: ["politics", "government"], strokeCount: 9, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "政治", reading: "せいじ", meaning: "politics" }, { word: "政府", reading: "せいふ", meaning: "government" }] },
  { kanji: "治", onyomi: ["チ", "ジ"], kunyomi: ["おさ.める", "なお.る"], meanings: ["govern", "cure"], strokeCount: 8, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "政治", reading: "せいじ", meaning: "politics" }] },
  { kanji: "産", onyomi: ["サン"], kunyomi: ["う.む", "う.まれる"], meanings: ["produce", "birth"], strokeCount: 11, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "産業", reading: "さんぎょう", meaning: "industry" }, { word: "生産", reading: "せいさん", meaning: "production" }] },
  { kanji: "業", onyomi: ["ギョウ", "ゴウ"], kunyomi: ["わざ"], meanings: ["business", "industry"], strokeCount: 13, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "産業", reading: "さんぎょう", meaning: "industry" }, { word: "授業", reading: "じゅぎょう", meaning: "class/lesson" }] },
  { kanji: "報", onyomi: ["ホウ"], kunyomi: ["むく.いる"], meanings: ["report", "news"], strokeCount: 12, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "報告", reading: "ほうこく", meaning: "report" }, { word: "情報", reading: "じょうほう", meaning: "information" }] },
  { kanji: "情", onyomi: ["ジョウ", "セイ"], kunyomi: ["なさ.け"], meanings: ["feelings", "emotion", "information"], strokeCount: 11, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "情報", reading: "じょうほう", meaning: "information" }, { word: "感情", reading: "かんじょう", meaning: "emotion" }] },
  { kanji: "件", onyomi: ["ケン"], kunyomi: [], meanings: ["matter", "case"], strokeCount: 6, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "条件", reading: "じょうけん", meaning: "condition" }, { word: "事件", reading: "じけん", meaning: "incident" }] },
  { kanji: "事", onyomi: ["ジ", "ズ"], kunyomi: ["こと"], meanings: ["thing", "matter"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "仕事", reading: "しごと", meaning: "work" }, { word: "食事", reading: "しょくじ", meaning: "meal" }] },
  { kanji: "仕", onyomi: ["シ", "ジ"], kunyomi: ["つか.える"], meanings: ["serve", "attend"], strokeCount: 5, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "仕事", reading: "しごと", meaning: "work/job" }] },
  { kanji: "者", onyomi: ["シャ"], kunyomi: ["もの"], meanings: ["person"], strokeCount: 8, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "医者", reading: "いしゃ", meaning: "doctor" }, { word: "若者", reading: "わかもの", meaning: "young person" }] },
  { kanji: "員", onyomi: ["イン"], kunyomi: [], meanings: ["member", "staff"], strokeCount: 10, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "会員", reading: "かいいん", meaning: "member" }, { word: "店員", reading: "てんいん", meaning: "shop clerk" }] },
  { kanji: "代", onyomi: ["ダイ", "タイ"], kunyomi: ["か.わる", "よ", "しろ"], meanings: ["substitute", "generation", "era"], strokeCount: 5, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "時代", reading: "じだい", meaning: "era" }, { word: "代表", reading: "だいひょう", meaning: "representative" }] },
  { kanji: "化", onyomi: ["カ", "ケ"], kunyomi: ["ば.ける", "ば.かす"], meanings: ["change", "transform"], strokeCount: 4, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "文化", reading: "ぶんか", meaning: "culture" }, { word: "変化", reading: "へんか", meaning: "change" }] },
  { kanji: "文", onyomi: ["ブン", "モン"], kunyomi: ["ふみ"], meanings: ["sentence", "writing", "culture"], strokeCount: 4, jlptLevel: "N3", grade: 1, exampleWords: [{ word: "文化", reading: "ぶんか", meaning: "culture" }, { word: "文章", reading: "ぶんしょう", meaning: "sentence" }] },
  { kanji: "法", onyomi: ["ホウ", "ハッ"], kunyomi: [], meanings: ["law", "method"], strokeCount: 8, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "方法", reading: "ほうほう", meaning: "method" }, { word: "法律", reading: "ほうりつ", meaning: "law" }] },
  { kanji: "制", onyomi: ["セイ"], kunyomi: [], meanings: ["system", "control"], strokeCount: 8, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "制度", reading: "せいど", meaning: "system" }] },
  { kanji: "度", onyomi: ["ド", "ト", "タク"], kunyomi: ["たび"], meanings: ["degree", "times"], strokeCount: 9, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "制度", reading: "せいど", meaning: "system" }, { word: "温度", reading: "おんど", meaning: "temperature" }] },

  // ── Emotion & State ──
  { kanji: "心", onyomi: ["シン"], kunyomi: ["こころ"], meanings: ["heart", "mind"], strokeCount: 4, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "心", reading: "こころ", meaning: "heart" }, { word: "安心", reading: "あんしん", meaning: "relief" }] },
  { kanji: "感", onyomi: ["カン"], kunyomi: [], meanings: ["feeling", "emotion"], strokeCount: 13, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "感じる", reading: "かんじる", meaning: "to feel" }, { word: "感動", reading: "かんどう", meaning: "impression" }] },
  { kanji: "想", onyomi: ["ソウ", "ソ"], kunyomi: [], meanings: ["concept", "thought"], strokeCount: 13, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "感想", reading: "かんそう", meaning: "impression" }, { word: "想像", reading: "そうぞう", meaning: "imagination" }] },
  { kanji: "願", onyomi: ["ガン"], kunyomi: ["ねが.う"], meanings: ["wish", "request"], strokeCount: 19, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "お願い", reading: "おねがい", meaning: "please/request" }] },
  { kanji: "頼", onyomi: ["ライ"], kunyomi: ["たの.む", "たよ.る"], meanings: ["trust", "request", "rely"], strokeCount: 16, jlptLevel: "N3", grade: 8, exampleWords: [{ word: "頼む", reading: "たのむ", meaning: "to request / ask" }, { word: "信頼", reading: "しんらい", meaning: "trust / reliance" }] },
  { kanji: "望", onyomi: ["ボウ", "モウ"], kunyomi: ["のぞ.む"], meanings: ["hope", "wish", "desire"], strokeCount: 11, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "希望", reading: "きぼう", meaning: "hope / wish" }, { word: "望む", reading: "のぞむ", meaning: "to hope for" }] },
  { kanji: "信", onyomi: ["シン"], kunyomi: [], meanings: ["faith", "trust", "believe"], strokeCount: 9, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "信じる", reading: "しんじる", meaning: "to believe" }, { word: "自信", reading: "じしん", meaning: "confidence" }] },
  { kanji: "相", onyomi: ["ソウ", "ショウ"], kunyomi: ["あい"], meanings: ["mutual", "together"], strokeCount: 9, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "相手", reading: "あいて", meaning: "partner" }, { word: "相談", reading: "そうだん", meaning: "consultation" }] },
  { kanji: "談", onyomi: ["ダン"], kunyomi: [], meanings: ["talk", "discuss"], strokeCount: 15, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "相談", reading: "そうだん", meaning: "consultation" }] },
  { kanji: "反", onyomi: ["ハン", "ホン", "タン"], kunyomi: ["そ.る", "かえ.す"], meanings: ["anti-", "oppose"], strokeCount: 4, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "反対", reading: "はんたい", meaning: "opposition" }] },
  { kanji: "対", onyomi: ["タイ", "ツイ"], kunyomi: [], meanings: ["opposite", "versus"], strokeCount: 7, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "反対", reading: "はんたい", meaning: "opposition" }, { word: "絶対", reading: "ぜったい", meaning: "absolutely" }] },
  { kanji: "調", onyomi: ["チョウ"], kunyomi: ["しら.べる", "ととの.う"], meanings: ["investigate", "tune"], strokeCount: 15, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "調べる", reading: "しらべる", meaning: "to investigate" }, { word: "調子", reading: "ちょうし", meaning: "condition" }] },
  { kanji: "査", onyomi: ["サ"], kunyomi: [], meanings: ["inspect", "examine"], strokeCount: 9, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "調査", reading: "ちょうさ", meaning: "investigation" }] },
  { kanji: "容", onyomi: ["ヨウ"], kunyomi: [], meanings: ["contain", "form"], strokeCount: 10, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "内容", reading: "ないよう", meaning: "contents" }] },
  { kanji: "内", onyomi: ["ナイ", "ダイ"], kunyomi: ["うち"], meanings: ["inside", "within"], strokeCount: 4, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "内容", reading: "ないよう", meaning: "contents" }, { word: "国内", reading: "こくない", meaning: "domestic" }] },
  { kanji: "原", onyomi: ["ゲン"], kunyomi: ["はら"], meanings: ["original", "field"], strokeCount: 10, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "原因", reading: "げんいん", meaning: "cause" }] },
  { kanji: "因", onyomi: ["イン"], kunyomi: ["よ.る"], meanings: ["cause", "factor"], strokeCount: 6, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "原因", reading: "げんいん", meaning: "cause" }] },
  { kanji: "果", onyomi: ["カ"], kunyomi: ["は.たす", "は.てる"], meanings: ["fruit", "result"], strokeCount: 8, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "結果", reading: "けっか", meaning: "result" }, { word: "果物", reading: "くだもの", meaning: "fruit" }] },
  { kanji: "結", onyomi: ["ケツ", "ケチ"], kunyomi: ["むす.ぶ", "ゆ.う"], meanings: ["tie", "bind", "conclude"], strokeCount: 12, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "結果", reading: "けっか", meaning: "result" }, { word: "結婚", reading: "けっこん", meaning: "marriage" }] },
  { kanji: "婚", onyomi: ["コン"], kunyomi: [], meanings: ["marriage"], strokeCount: 11, jlptLevel: "N3", grade: 7, exampleWords: [{ word: "結婚", reading: "けっこん", meaning: "marriage" }] },
  { kanji: "説", onyomi: ["セツ", "ゼイ"], kunyomi: ["と.く"], meanings: ["explain", "theory"], strokeCount: 14, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "説明", reading: "せつめい", meaning: "explanation" }, { word: "小説", reading: "しょうせつ", meaning: "novel" }] },
  { kanji: "選", onyomi: ["セン"], kunyomi: ["えら.ぶ"], meanings: ["choose", "select"], strokeCount: 15, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "選ぶ", reading: "えらぶ", meaning: "to choose" }, { word: "選手", reading: "せんしゅ", meaning: "player/athlete" }] },
  { kanji: "議", onyomi: ["ギ"], kunyomi: [], meanings: ["discussion", "deliberation"], strokeCount: 20, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "会議", reading: "かいぎ", meaning: "meeting" }, { word: "議論", reading: "ぎろん", meaning: "debate" }] },
  { kanji: "論", onyomi: ["ロン"], kunyomi: [], meanings: ["theory", "argument"], strokeCount: 15, jlptLevel: "N3", grade: 6, exampleWords: [{ word: "議論", reading: "ぎろん", meaning: "debate" }, { word: "論文", reading: "ろんぶん", meaning: "thesis" }] },
  { kanji: "問", onyomi: ["モン"], kunyomi: ["と.う", "と.い"], meanings: ["question", "ask"], strokeCount: 11, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "問題", reading: "もんだい", meaning: "problem" }, { word: "質問", reading: "しつもん", meaning: "question" }] },
  { kanji: "題", onyomi: ["ダイ"], kunyomi: [], meanings: ["topic", "subject"], strokeCount: 18, jlptLevel: "N3", grade: 3, exampleWords: [{ word: "問題", reading: "もんだい", meaning: "problem" }, { word: "話題", reading: "わだい", meaning: "topic" }] },
  { kanji: "質", onyomi: ["シツ", "シチ"], kunyomi: [], meanings: ["quality", "nature"], strokeCount: 15, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "質問", reading: "しつもん", meaning: "question" }, { word: "品質", reading: "ひんしつ", meaning: "quality" }] },
  { kanji: "答", onyomi: ["トウ"], kunyomi: ["こた.える", "こた.え"], meanings: ["answer"], strokeCount: 12, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "答える", reading: "こたえる", meaning: "to answer" }, { word: "回答", reading: "かいとう", meaning: "reply" }] },
  { kanji: "考", onyomi: ["コウ"], kunyomi: ["かんが.える"], meanings: ["think", "consider"], strokeCount: 6, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "考える", reading: "かんがえる", meaning: "to think" }, { word: "参考", reading: "さんこう", meaning: "reference" }] },
  { kanji: "変", onyomi: ["ヘン"], kunyomi: ["か.わる", "か.える"], meanings: ["change", "strange"], strokeCount: 9, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "変わる", reading: "かわる", meaning: "to change" }, { word: "大変", reading: "たいへん", meaning: "very/terrible" }] },
  { kanji: "比", onyomi: ["ヒ"], kunyomi: ["くら.べる"], meanings: ["compare"], strokeCount: 4, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "比べる", reading: "くらべる", meaning: "to compare" }, { word: "比較", reading: "ひかく", meaning: "comparison" }] },
  { kanji: "増", onyomi: ["ゾウ"], kunyomi: ["ふ.える", "ま.す"], meanings: ["increase"], strokeCount: 14, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "増える", reading: "ふえる", meaning: "to increase" }] },
  { kanji: "減", onyomi: ["ゲン"], kunyomi: ["へ.る", "へ.らす"], meanings: ["decrease"], strokeCount: 12, jlptLevel: "N3", grade: 5, exampleWords: [{ word: "減る", reading: "へる", meaning: "to decrease" }] },

  // ── Nature / Science ──
  { kanji: "光", onyomi: ["コウ"], kunyomi: ["ひか.る", "ひかり"], meanings: ["light", "shine"], strokeCount: 6, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "光", reading: "ひかり", meaning: "light" }, { word: "観光", reading: "かんこう", meaning: "sightseeing" }] },
  { kanji: "熱", onyomi: ["ネツ"], kunyomi: ["あつ.い"], meanings: ["heat", "fever"], strokeCount: 15, jlptLevel: "N3", grade: 4, exampleWords: [{ word: "熱", reading: "ねつ", meaning: "fever" }, { word: "熱い", reading: "あつい", meaning: "hot (to touch)" }] },
  { kanji: "石", onyomi: ["セキ", "シャク", "コク"], kunyomi: ["いし"], meanings: ["stone"], strokeCount: 5, jlptLevel: "N3", grade: 1, exampleWords: [{ word: "石", reading: "いし", meaning: "stone" }] },
  { kanji: "鳥", onyomi: ["チョウ"], kunyomi: ["とり"], meanings: ["bird"], strokeCount: 11, jlptLevel: "N3", grade: 2, exampleWords: [{ word: "鳥", reading: "とり", meaning: "bird" }, { word: "焼き鳥", reading: "やきとり", meaning: "yakitori" }] },
  { kanji: "犬", onyomi: ["ケン"], kunyomi: ["いぬ"], meanings: ["dog"], strokeCount: 4, jlptLevel: "N3", grade: 1, exampleWords: [{ word: "犬", reading: "いぬ", meaning: "dog" }] },
  { kanji: "猫", onyomi: ["ビョウ"], kunyomi: ["ねこ"], meanings: ["cat"], strokeCount: 11, jlptLevel: "N3", grade: 7, exampleWords: [{ word: "猫", reading: "ねこ", meaning: "cat" }] },
];

export const N3_KANJI_REFERENCE: JLPTKanjiReference = {
  level: "N3",
  kanjiList: N3_KANJI,
};
