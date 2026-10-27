import { CurriculumArea } from "./types";

export const JAPANESE_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "日常会話と雑談 (Daily Life & Small Talk)",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "ja-t1-cafe-greeting",
        areaId: 1,
        areaTitle: "日常会話と雑談",
        title: "カフェでの偶然の再会と雑談 (Café Greeting & Catch-Up)",
        situation: "渋谷のカフェの列で偶然同僚に会い、週末の過ごし方について気軽に雑談する。",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "izakaya-order",
        keyPhrases: [
          { phrase: "あ、田中さん！奇遇ですね！", phonetic: "A, Tanaka-san! Kiguu desu ne!", english: "Oh, Tanaka-san! What a coincidence!", register: "casual" },
          { phrase: "お疲れ様です。よくここ来られるんですか？", phonetic: "Otsukaresama desu. Yoku koko korareru n desu ka?", english: "Good work. Do you come here often?", register: "neutral" },
          { phrase: "週末はゆっくり休めましたか？", phonetic: "Shuumatsu wa yukkuri yasumemashita ka?", english: "Did you manage to relax over the weekend?", register: "neutral" },
          { phrase: "特に何もしないで、家でまったりしてました。", phonetic: "Tokuni nani mo shinaide, ie de mattari shitemashita.", english: "Nothing special, just chilled at home.", register: "casual" },
          { phrase: "相変わらず忙しそうですね。", phonetic: "Aikawarazu isogashisou desu ne.", english: "You look busy as always.", register: "neutral" },
          { phrase: "おかげさまで、なんとかやってます。", phonetic: "Okagesama de, nantoka yattemasu.", english: "Thanks to you, I'm managing somehow.", register: "formal" },
          { phrase: "最近、急に涼しくなりましたよね。", phonetic: "Saikin, kyuu ni suzushiku narimashita yo ne.", english: "It suddenly cooled down recently, right?", register: "neutral" },
          { phrase: "それ、すごく分かります！", phonetic: "Sore, sugoku wakarimasu!", english: "I totally understand that feeling!", register: "casual" },
          { phrase: "じゃあ、またオフィスで！", phonetic: "Jaa, mata ofisu de!", english: "Well then, see you back at the office!", register: "casual" },
          { phrase: "お先に失礼します。", phonetic: "Osaki ni shitsurei shimasu.", english: "Excuse me for heading off first.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "あ、田中さん！こんなところでお会いするなんて、奇遇ですね！", phonetic: "A, Tanaka-san! Konna tokoro de oai suru nante, kiguu desu ne!", english: "Oh, Tanaka-san! What a surprise to run into you here!" },
          { speaker: "田中", line: "あ、ラフリーさん！本当ですね。朝のコーヒー買いに来たんですか？", phonetic: "A, Tanaka-san! Hontou desu ne. Asa no koohii kai ni kita n desu ka?", english: "Oh, Rafly-san! Indeed. Did you come to grab morning coffee?", fillers: ["本当ですね"] },
          { speaker: "ラフリー", line: "ええ、ちょっと気合いを入れようと思いまして。週末はゆっくり休めましたか？", phonetic: "Ee, chotto kiai o ireyou to omoimashite. Shuumatsu wa yukkuri yasumemashita ka?", english: "Yeah, wanted to power up a bit. Did you get to relax over the weekend?", fillers: ["ええ", "ちょっと"] },
          { speaker: "田中", line: "それが…子どもと公園行ったりして、逆に疲れちゃいましたよ（笑）。ラフリーさんは？", phonetic: "Sore ga... kodomo to kouen ittari shite, gyaku ni tsukarechaimashita yo (warai). Rafurii-san wa?", english: "Well... took the kids to the park, actually ended up more exhausted (laughs). How about you?", fillers: ["それが…"] },
          { speaker: "ラフリー", line: "あはは、お父さんお疲れ様です！僕は家でNetflix見ながらまったりしてました。", phonetic: "Ahaha, otousan otsukaresama desu! Boku wa ie de Netflix minagara mattari shitemashita.", english: "Haha, good work dad! I just chilled at home bingeing Netflix." },
          { speaker: "田中", line: "最高の休日ですね！あ、僕の順番が来たみたいです。ホットラテひとつで！", phonetic: "Saikou no kyuujitsu desu ne! A, boku no junban ga kita mitai desu. Hotto rate hitotsu de!", english: "Best kind of weekend! Ah, looks like my turn. One hot latte, please!" },
          { speaker: "ラフリー", line: "どうぞどうぞ！じゃあ田中さん、また後でオフィスで！", phonetic: "Douzo douzo! Jaa Tanaka-san, mata ato de ofisu de!", english: "Go right ahead! Well then, see you later at the office!" },
          { speaker: "田中", line: "はい、お疲れ様です！また後ほど！", phonetic: "Hai, otsukaresama desu! Mata nochihodo!", english: "Yes, good work! See you shortly!" }
        ],
        fluencyBoosters: [
          { booster: "奇遇ですね (Kiguu desu ne)", phonetic: "[kʲiɡɯː desɯ ne]", category: "idiom", usage: "Natural spoken exclamation when bumping into someone unexpectedly.", example: "こんな所でお会いするなんて奇遇ですね！" },
          { booster: "まったりする (Mattari suru)", phonetic: "[mat̚taɾi sɯɾɯ]", category: "casual", usage: "Colloquial standard meaning to chill out quietly with zero stress.", example: "日曜日は一日中まったりしてました。" },
          { booster: "それが… (Sore ga...)", phonetic: "[soɾe ɡa]", category: "filler", usage: "Conversational pause signaling that the reality differed from the ideal.", example: "休めましたか？ — それが、仕事が入りまして…" },
          { booster: "おかげさまで (Okagesama de)", phonetic: "[okaɡesama de]", category: "formal", usage: "Humble acknowledgement meaning 'thanks to you / fortunately'.", example: "体調はいかがですか？ — おかげさまで回復しました。" },
          { booster: "気合いを入れる (Kiai o ireru)", phonetic: "[kʲiai o iɾeɾɯ]", category: "idiom", usage: "To psych oneself up or energize for upcoming effort.", example: "大事な発表の前に気合いを入れます。" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'あなたはどうですか？' (Anata wa dou desu ka?)", correction: "Say: '田中さんはどうでしたか？' or simply drop the subject.", explanation: "Calling an acquaintance 'anata' sounds unnatural and distant. Use their name + さん." },
          { mistake: "Learner says: '私は元気です、ありがとう、そしてあなたは？'", correction: "Say: 'おかげさまで！田中さんはどうですか？'", explanation: "The textbook translation sounds robotic. Use natural conversational acknowledgments." },
          { mistake: "Learner says: 'バイバイ！' to a senior colleague.", correction: "Say: 'お疲れ様です！また後ほど！' or 'お先に失礼します。'", explanation: "'Bye-bye' is strictly for children or very intimate friends." }
        ],
        culturalPragmaticNote: {
          title: "The Magic of 'Otsukaresama Desu' (お疲れ様です)",
          textbookVsReality: "Textbooks teach 'Konnichiwa' as the all-purpose hello. In modern Japan, 'Otsukaresama desu' is used 90% of the time in workplaces, gyms, shared studios, and amongst colleagues as both greeting and parting."
        },
        rolePlayPrompts: {
          guided: "Meet a coworker at the office coffee machine, ask how their weekend was, and share one thing you did.",
          semiOpen: "Your coworker mentions their child had a sudden fever on Sunday. Express empathy and offer to take over their morning report.",
          fullyOpen: "You bump into your department director (部長) at the elevator on Monday. Greet them in polite Keigo and exit gracefully."
        },
        followUpQuestions: [
          "普段、休日はアクティブに外出する派ですか？それとも家でインドア派ですか？",
          "朝のルーティンで、これがないと一日が始まらないものは何ですか？",
          "最近新しく見つけたお気に入りのカフェやレストランはありますか？",
          "仕事で疲れた時、一番リフレッシュできる気分転換は何ですか？",
          "同僚とのカジュアルな雑談で、一番盛り上がる話題は何ですか？"
        ],
        canDoStatements: [
          "I can initiate a natural spontaneous greeting using 'Kiguu desu ne!'.",
          "I can describe weekend relaxation using natural words like 'mattari shitemashita'.",
          "I can avoid using 'anata' by naturally inserting the person's name + san."
        ]
      },
      {
        id: "ja-t2-weather-hobbies",
        areaId: 1,
        areaTitle: "日常会話と雑談",
        title: "天気の話題と休日の趣味 (Weather & Hobbies)",
        situation: "オフィスの休憩室で同僚と最近の急激な気温変化や、休日に夢中になっているキャンプの趣味について語り合う。",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "急に寒くなりましたね。", phonetic: "Kyuu ni samuku narimashita ne.", english: "It suddenly got cold, didn't it?", register: "neutral" },
          { phrase: "寒暖差で体調崩しやすいですよね。", phonetic: "Kandansa de taichou kuzushiyasui desu yo ne.", english: "The temperature swings make it easy to catch a cold.", register: "neutral" },
          { phrase: "最近、ソロキャンプにハマってるんです。", phonetic: "Saikin, soro kyanpu ni hamatteru n desu.", english: "Lately, I've been really into solo camping.", register: "casual" },
          { phrase: "えー、本格的ですね！", phonetic: "Ee, honkakuteki desu ne!", english: "Wow, that's really authentic/serious!", register: "casual" },
          { phrase: "自然の中にいると、デジタルデトックスになりますよ。", phonetic: "Shizen no naka ni iru to, dejitaru detokkusu ni narimasu yo.", english: "Being in nature gives you a great digital detox.", register: "neutral" },
          { phrase: "焚き火をぼーっと眺めるのが好きで。", phonetic: "Takibi o bootto nagameru no ga suki de.", english: "I love zoning out while watching the bonfire.", register: "casual" },
          { phrase: "道具を揃えるのも楽しそうですね。", phonetic: "Dougu o soroeru no mo tanoshisou desu ne.", english: "Gathering all the gear sounds fun too.", register: "neutral" },
          { phrase: "沼にハマると大変ですよ（笑）。", phonetic: "Numa ni hamaru to taihen desu yo (warai).", english: "Falling into the hobby rabbit hole gets pricey (laughs).", register: "casual" },
          { phrase: "おすすめのキャンプ場ありますか？", phonetic: "Osusume no kyanpujou arimasu ka?", english: "Do you have any recommended campsites?", register: "neutral" },
          { phrase: "今度ぜひ写真見せてください！", phonetic: "Kondo zehi shashin misete kudasai!", english: "Definitely show me photos next time!", register: "neutral" }
        ],
        dialogue: [
          { speaker: "高橋", line: "今日、朝めちゃくちゃ寒くなかったですか？", phonetic: "Kyou, asa mechakucha samukunakatta desu ka?", english: "Wasn't this morning insanely chilly?" },
          { speaker: "ラフリー", line: "本当に！マフラー出してくればよかったと後悔しましたよ。", phonetic: "Hontou ni! Mafuraa dashite kureba yokatta to koukai shimashita yo.", english: "Totally! I regretted not bringing out my scarf." },
          { speaker: "高橋", line: "秋を通り越して一気に冬ですね。週末はお出かけですか？", phonetic: "Aki o toorikoshite ikki ni fuyu desu ne. Shuumatsu wa odekake desu ka?", english: "Skipped autumn straight into winter. Heading out this weekend?" },
          { speaker: "ラフリー", line: "実は、富士山の近くでソロキャンプをしようと思ってまして。", phonetic: "Jitsu wa, Fujisan no chikaku de soro kyanpu o shiyou to omottemashite.", english: "Actually, planning to do some solo camping near Mt. Fuji.", fillers: ["実は"] },
          { speaker: "高橋", line: "えっ、ソロキャンプ？！すごい、ラフリーさん本格的ですね！", phonetic: "E', soro kyanpu?! Sugoi, Rafurii-san honkakuteki desu ne!", english: "Whoa, solo camping?! Amazing, that's pretty serious!" },
          { speaker: "ラフリー", line: "いえいえ、まだ初心者ですよ。でも、焚き火を眺めながらコーヒー飲むのが最高で。", phonetic: "Ieie, mada shoshinsha desu yo. Demo, takibi o nagamenagara koohii nomu no ga saikou de.", english: "No no, still a beginner. But sipping coffee by the bonfire is the best." },
          { speaker: "高橋", line: "うわー、憧れますね！道具とか揃えるの大変じゃないですか？", phonetic: "Uwaa, akogaremasu ne! Dougu toka soroeru no taihen ja nai desu ka?", english: "Ooh, I admire that! Isn't collecting all the gear tough?" },
          { speaker: "ラフリー", line: "そうなんですよ。いわゆる『キャンプ沼』にハマっちゃって、財布がピンチです（笑）。", phonetic: "Sou nan desu yo. Iwayuru 'kyanpu numa' ni hamacchatte, saifu ga pinchi desu (warai).", english: "Exactly. Fallen into the 'gear rabbit hole', my wallet is in a pinch (laughs)." },
          { speaker: "高橋", line: "あはは！今度ぜひ写真見せてくださいね。", phonetic: "Ahaha! Kondo zehi shashin misete kudasai ne.", english: "Hahaha! Definitely show me pictures next time." }
        ],
        fluencyBoosters: [
          { booster: "〜にハマる (~ ni hamaru)", phonetic: "[ni hamaɾɯ]", category: "idiom", usage: "Universal colloquial phrase meaning to become deeply addicted to a hobby.", example: "最近、サウナにハマっています。" },
          { booster: "沼 (Numa - rabbit hole)", phonetic: "[nɯma]", category: "casual", usage: "Slang for a deep, expensive hobby money-pit that is impossible to escape.", example: "キーボード沼にハマって3台買いました。" },
          { booster: "本格的ですね (Honkakuteki desu ne)", phonetic: "[hoŋkakatɯteki desɯ ne]", category: "formal", usage: "Polite compliment praising someone's skill or dedication as professional-grade.", example: "スパイスからカレーを作るなんて本格的ですね！" },
          { booster: "ぼーっとする (Bootto suru)", phonetic: "[boːt̚to sɯɾɯ]", category: "casual", usage: "To daydream, zone out, or relax one's mind without thinking.", example: "休日は海を眺めてぼーっと過ごします。" },
          { booster: "寒暖差 (Kandansa)", phonetic: "[kandaɰ̃sa]", category: "neutral", usage: "Temperature swings between night and day, very common weather talk.", example: "秋は寒暖差が激しいので気をつけてください。" }
        ],
        commonMistakes: [
          { mistake: "Learner says: '私はキャンプがとても好きです。'", correction: "Say: '最近、キャンプにハマってるんです。'", explanation: "Using 'hamatte iru' sounds 100x more natural than literal 'totemo suki'." },
          { mistake: "Learner says: 'この趣味はお金がたくさん死にます。'", correction: "Say: '沼にハマって財布がピンチです（笑）。'", explanation: "Use the humorous metaphor 'numa' (rabbit hole / swamp) for expensive hobbies." },
          { mistake: "Learner says: '天気が寒いですね。'", correction: "Say: '急に寒くなりましたね。'", explanation: "In Japanese, weather isn't cold ('samui'); the atmosphere or person feels cold." }
        ],
        culturalPragmaticNote: {
          title: "The Solo Camping Trend (ソロキャン)",
          textbookVsReality: "Textbooks focus strictly on group team activities. In modern Japan, 'solo' activities (solo camp, hitori yakiniku, solo karaoke) are huge cultural fixtures celebrating peaceful autonomy without peer pressure."
        },
        rolePlayPrompts: {
          guided: "Talk about your favorite weekend hobby with a coworker and explain why it helps you de-stress.",
          semiOpen: "Your colleague is curious about Japanese onsen (hot springs). Explain the bathing rules and recommended mountain spots.",
          fullyOpen: "Persuade a reluctant friend to join an outdoor hiking trip by describing the summit view and hot ramen reward."
        },
        followUpQuestions: [
          "日本に来てから新しく始めた趣味や習慣はありますか？",
          "季節の変わり目で体調管理のために気をつけていることは何ですか？",
          "一人で過ごす時間と、友人とワイワイ過ごす時間、どちらが好きですか？",
          "これまで買った趣味の道具で、一番買ってよかったものは何ですか？",
          "日本で行ってみたい自然豊かな旅行先はどこですか？"
        ],
        canDoStatements: [
          "I can initiate small talk using sudden weather shifts and temperature swings.",
          "I can explain personal hobbies using natural slang like 'hamatte iru' and 'numa'.",
          "I can give and receive warm compliments on hobby dedication using 'honkakuteki'."
        ]
      }
    ]
  },

  // ── AREA 2: Food & dining ──
  {
    id: 2,
    title: "食事と飲食店 (Food & Dining)",
    subtitle: "Ordering, dietary needs, paying, compliments & complaints",
    icon: "🍜",
    topics: [
      {
        id: "ja-t3-izakaya-ordering",
        areaId: 2,
        areaTitle: "食事と飲食店",
        title: "居酒屋での注文とお会計 (Izakaya Ordering & Splitting Bill)",
        situation: "活気ある居酒屋で店員を呼び出し、おすすめ料理を頼み、お会計を個別で頼む。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-8 mins",
        scenarioId: "izakaya-order",
        keyPhrases: [
          { phrase: "すみませーん！注文お願いできますか？", phonetic: "Sumimaseen! Chuumon onegai dekimasu ka?", english: "Excuse me! Could we order?", register: "neutral" },
          { phrase: "とりあえず、生中ふたつで！", phonetic: "Toriaezu, namachuu futatsu de!", english: "For now, two draft beers please!", register: "casual" },
          { phrase: "今日のおすすめって何かありますか？", phonetic: "Kyou no osusume tte nani ka arimasu ka?", english: "What do you recommend today?", register: "neutral" },
          { phrase: "これ、わさび抜きにできますか？", phonetic: "Kore, wasabi nuki ni dekimasu ka?", english: "Can you make this without wasabi?", register: "neutral" },
          { phrase: "焼き鳥はタレと塩、どちらがおすすめですか？", phonetic: "Yakitori wa tare to shio, dochira ga osusume desu ka?", english: "For yakitori, do you recommend sauce or salt?", register: "neutral" },
          { phrase: "お水、冷たいのいただけますか？", phonetic: "Omizu, tsumetai no itadakemasu ka?", english: "Could we have some cold water?", register: "formal" },
          { phrase: "お会計、別々でお願いできますか？", phonetic: "Okaikei, betsubetsu de onegai dekimasu ka?", english: "Can we pay separately?", register: "neutral" },
          { phrase: "ごちそうさまでした！すごく美味しかったです。", phonetic: "Gochisousama deshita! Sugoku oishikatta desu.", english: "Thank you for the feast! It was delicious.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "すみませーん！注文いいですか？", phonetic: "Sumimaseen! Chuumon ii desu ka?", english: "Excuse me! Ready to order!" },
          { speaker: "店員", line: "はい、お伺いします！お飲み物はお決まりですか？", phonetic: "Hai, oukagai shimasu! Onomimono wa okimari desu ka?", english: "Yes right away! Have you decided on drinks?" },
          { speaker: "ラフリー", line: "とりあえず生ふたつと、ハイボールひとつで！あと本日のおすすめは何ですか？", phonetic: "Toriaezu nama futatsu to, haibooru hitotsu de! Ato honjitsu no osusume wa nani desu ka?", english: "To start, two draft beers and one highball! Also, what's today's special?" },
          { speaker: "店員", line: "本日は豊洲から入った寒ブリのお刺身と、自家製出汁巻き卵がおすすめです！", phonetic: "Honjitsu wa Toyosu kara haitta kanburi no osashimi to, jikasei dashimaki tamago ga osusume desu!", english: "Today our wild yellowtail sashimi from Toyosu and homemade rolled omelet are fresh!" },
          { speaker: "ラフリー", line: "じゃあその二つ、お願いします！あと、枝豆も追加で。", phonetic: "Jaa sono futatsu, onegai shimasu! Ato, edamame mo tsuika de.", english: "We'll take both of those! Plus an order of edamame." },
          { speaker: "店員", line: "喜んで！少々お待ちくださいませ！", phonetic: "Yorokonde! Shou-shou omachi kudasai mase!", english: "With pleasure! Please give us a moment!" },
          { speaker: "ラフリー", line: "（30分後）すみません、お会計お願いします！", phonetic: "(Sanjuppun go) Sumimasen, okaikei onegai shimasu!", english: "(30 min later) Excuse me, bill please!" },
          { speaker: "店員", line: "合計で4,200円になります。ご一緒でよろしいですか？", phonetic: "Goukei de yonsen nihyaku-en ni narimasu. Go-issho de yoroshii desu ka?", english: "Total is 4,200 yen. Will that be together?" },
          { speaker: "ラフリー", line: "あ、別々でお願いできますか？", phonetic: "A, betsubetsu de onegai dekimasu ka?", english: "Ah, could we split it separately?" },
          { speaker: "店員", line: "かしこまりました。お一人様2,100円ずつ頂戴いたします。", phonetic: "Kashikomarimashita. Ohitori-sama nisen hyaku-en zutsu choudai itashimasu.", english: "Certainly. That will be 2,100 yen per person." }
        ],
        fluencyBoosters: [
          { booster: "とりあえず (Toriaezu)", phonetic: "[toɾiaezɯ]", category: "filler", usage: "Universal opener to order the first round of drinks immediately.", example: "とりあえず生ビールで！" },
          { booster: "〜抜きで (Nuki de)", phonetic: "[nɯki de]", category: "connector", usage: "Without / excluding a specific ingredient (wasabi, onions, etc.).", example: "ネギ抜きでお願いできますか？" },
          { booster: "喜んで！ (Yorokonde!)", phonetic: "[joɾokonde]", category: "formal", usage: "Classic energetic izakaya staff confirmation ('With pleasure!').", example: "唐揚げ一丁！ — 喜んで！" },
          { booster: "別々で (Betsu-betsu de)", phonetic: "[bet͡sɯbet͡sɯ de]", category: "neutral", usage: "Requesting separate checks or splitting items individually.", example: "お会計は別々でお願いします。" },
          { booster: "ごちそうさまでした (Gochisousama deshita)", phonetic: "[ɡot͡ɕi̥soːsama deɕi̥ta]", category: "formal", usage: "Mandatory polite formula spoken upon finishing food or leaving.", example: "美味しかったです、ごちそうさまでした！" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'チェックをください' (Chekku o kudasai)", correction: "Say: 'お会計お願いします' (Okaikei onegai shimasu) or 'お勘定お願いします'.", explanation: "'Check' is understood but 'okaikei' is standard and polite." },
          { mistake: "Learner says: '肉が食べられません、だから野菜をください'", correction: "Say: 'ベジタリアンなんですが、お肉なしのメニューはありますか？'", explanation: "Polite softening with 'nan desu ga' creates respectful service interactions." },
          { mistake: "Learner claps hands loudly to summon waiter.", correction: "Say: Raise hand slightly and say 'すみませーん！' clearly.", explanation: "Calling 'Sumimasen' with a slight hand raise is universal and courteous." }
        ],
        culturalPragmaticNote: {
          title: "The Otoushi (お通し) System",
          textbookVsReality: "Textbooks rarely mention that Japanese izakayas automatically serve a tiny appetizer (otoushi) costing 300–500 yen that acts as a seating cover charge. Don't dispute it; it is standard hospitality culture."
        },
        rolePlayPrompts: {
          guided: "Order drinks and three appetizers for your group, asking which yakitori sauce is recommended.",
          semiOpen: "Inform the server you cannot eat shellfish (kairui) and ask for an alternative sashimi recommendation.",
          fullyOpen: "At the register, realize you only have card while the izakaya is cash-only. Politely ask where the nearest 7-Eleven ATM is."
        },
        followUpQuestions: [
          "日本の居酒屋で一番好きなメニューは何ですか？",
          "お酒を飲む時、ビール派ですか？それとも日本酒やサワー派ですか？",
          "割り勘（わりかん）の文化について、母国と日本で違いはありますか？",
          "食事の際に苦手な食材やアレルギーはありますか？",
          "日本のラーメン屋や立ち食い蕎麦屋の券売機は使ったことがありますか？"
        ],
        canDoStatements: [
          "I can call a server and order drinks using 'Toriaezu nama'.",
          "I can inquire about daily recommendations and request ingredient exclusions.",
          "I can politely request a separate or combined check with 'Okaikei betsubetsu de'."
        ]
      },
      {
        id: "ja-t4-dietary-allergies",
        areaId: 2,
        areaTitle: "食事と飲食店",
        title: "アレルギーと食事制限の相談 (Dietary Needs & Food Allergies)",
        situation: "グルテンフリーやベジタリアン、アレルギー対応についてレストランのシェフや店員に確認する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "甲殻類アレルギーがあるのですが。", phonetic: "Koukakurui arerugii ga aru no desu ga.", english: "I have a shellfish allergy.", register: "formal" },
          { phrase: "これに出汁（魚の出汁）は使われていますか？", phonetic: "Kore ni dashi (sakana no dashi) wa tsukawarete imasu ka?", english: "Is fish dashi broth used in this?", register: "neutral" },
          { phrase: "小麦粉（グルテン）を避けているのですが。", phonetic: "Komugiko (guruten) o sakete iru no desu ga.", english: "I am avoiding wheat flour (gluten).", register: "formal" },
          { phrase: "肉や魚を含まない料理はありますか？", phonetic: "Niku ya sakana o fukumanai ryouri wa arimasu ka?", english: "Do you have dishes containing no meat or fish?", register: "formal" },
          { phrase: "ドレッシングを別添えにしていただけますか？", phonetic: "Doresshingu o betsuzoe ni shite itadakemasu ka?", english: "Could you serve the dressing on the side?", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "すみません、注文前にお伺いしたいのですが。", phonetic: "Sumimasen, chuumon mae ni oukagai shitai no desu ga.", english: "Excuse me, I'd like to ask something before ordering." },
          { speaker: "店員", line: "はい、何でございましょうか？", phonetic: "Hai, nan de gozaimashou ka?", english: "Yes, how may I assist you?" },
          { speaker: "ラフリー", line: "私、重度のアレルギーがありまして、そば粉とエビが一切食べられないんです。", phonetic: "Watashi, juudo no arerugii ga arimashite, sobako to ebi ga issai taberarenai n desu.", english: "I have a severe allergy and cannot consume buckwheat or shrimp at all." },
          { speaker: "店員", line: "アレルギー情報ですね、承知いたしました。厨房にすぐ確認してまいります！", phonetic: "Arerugii jouhou desu ne, shouchi itashimashita. Chuubou ni sugu kakunin shite mairimasu!", english: "Allergy info, understood. I will confirm with the kitchen immediately!" }
        ],
        fluencyBoosters: [
          { booster: "〜なんですが (Nan desu ga)", phonetic: "[nan desɯ ɡa]", category: "connector", usage: "Gentle conversational softener explaining context before asking a favor.", example: "卵アレルギーなんですが、抜くことは可能ですか？" },
          { booster: "別添え (Betsuzoe)", phonetic: "[bet͡sɯzoe]", category: "neutral", usage: "Served on the side (sauces, dressings, condiments).", example: "ソースは別添えでお願いします。" }
        ],
        commonMistakes: [
          { mistake: "Saying: 'ベジタリアンなのでスープをください' without asking about dashi.", correction: "In Japan, miso soup and ramen broths almost universally contain fish flakes (katsuobushi) or pork bones.", explanation: "Always explicitly ask: '魚の出汁も入っていませんか？'" }
        ],
        culturalPragmaticNote: {
          title: "Dashi Hidden Presence in Japan",
          textbookVsReality: "Dishes marked 'vegetable' often use bonito (fish) dashi. Clearly specify: 'かつお節や魚のエキスもダメなんです'."
        },
        rolePlayPrompts: {
          guided: "Inform a ramen chef that you cannot eat pork (tonkotsu) and ask if they have chicken or vegan broth.",
          semiOpen: "Confirm whether a dessert contains nuts or peanuts before your child eats it.",
          fullyOpen: "Politely negotiate a modified set meal at a traditional ryokan that adheres to halal or kosher guidelines."
        },
        followUpQuestions: [
          "海外旅行先で食事制限を伝える時、どのような工夫をしていますか？",
          "日本食の中で、一番安心して食べられるものは何ですか？"
        ],
        canDoStatements: [
          "I can clearly articulate food allergies using 'arerugii ga arimashite'.",
          "I can ask whether animal or fish broths are used in a dish.",
          "I can request condiments on the side with 'betsuzoe'."
        ]
      }
    ]
  },

  // ── AREA 3: Travel & transport ──
  {
    id: 3,
    title: "旅行と交通 (Travel & Transport)",
    subtitle: "Directions, tickets, hotels, emergencies",
    icon: "🚅",
    topics: [
      {
        id: "ja-t5-shinkansen-booking",
        areaId: 3,
        areaTitle: "旅行と交通",
        title: "新幹線の指定席予約と乗り遅れ対応 (Shinkansen Booking & Changes)",
        situation: "みどりの窓口で新幹線の指定席を予約し、万が一乗り遅れた場合の変更手続きを相談する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "7-8 mins",
        scenarioId: "shinkansen-trouble",
        keyPhrases: [
          { phrase: "京都までの指定席を2枚お願いしたいのですが。", phonetic: "Kyouto made no shiteiseki o nimai onegai shitai no desu ga.", english: "I'd like two reserved seats to Kyoto.", register: "formal" },
          { phrase: "富士山が見える側の座席は空いていますか？", phonetic: "Fujisan ga mieru gawa no zaseki wa aite imasu ka?", english: "Are there seats open on the Mt. Fuji side?", register: "formal" },
          { phrase: "Suicaで改札を通ることはできますか？", phonetic: "Suica de kaisatsu o tooru koto wa dekimasu ka?", english: "Can I tap through the gate with Suica?", register: "neutral" },
          { phrase: "もし乗り遅れた場合、次の列車の自由席に乗れますか？", phonetic: "Moshi noriokureta baai, tsugi no ressha no jiyuuseki ni noremasu ka?", english: "If I miss this train, can I board the unreserved car of the next one?", register: "formal" },
          { phrase: "領収書を発行していただけますか？", phonetic: "Ryoushuusho o hakkou shite itadakemasu ka?", english: "Could you issue a receipt for me?", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "すみません、京都行きののぞみ号、指定席を2枚お願いできますか？", phonetic: "Sumimasen, Kyouto-yuki no Nozomi-gou, shiteiseki o nimai onegai dekimasu ka?", english: "Excuse me, could I get two reserved seats on the Nozomi bound for Kyoto?" },
          { speaker: "窓口係", line: "かしこまりました。本日何時頃のご出発をご希望でしょうか？", phonetic: "Kashikomarimashita. Honjitsu nanji goro no goshuppatsu o gokibou deshou ka?", english: "Certainly. What time departure would you prefer today?" },
          { speaker: "ラフリー", line: "できれば10時発の便で、2人並びの席がいいのですが。", phonetic: "Dekireba juuji hatsu no bin de, futari narabi no seki ga ii no desu ga.", english: "If possible on the 10:00 AM train, with two seats together." },
          { speaker: "窓口係", line: "10時03分配信ののぞみ21号、E席とD席、富士山側でお取りできますよ。", phonetic: "Juuji sanpun hatsu no Nozomi nijuuichi-gou, E-seki to D-seki, Fujisan gawa de otori dekimasu yo.", english: "On the 10:03 Nozomi 21, seats E and D on the Fuji side are available." },
          { speaker: "ラフリー", line: "最高ですね！それでお願いします。", phonetic: "Saikou desu ne! Sore de onegai shimasu.", english: "That's fantastic! We'll take those." }
        ],
        fluencyBoosters: [
          { booster: "並びの席 (Narabi no seki)", phonetic: "[naɾabi no seki]", category: "neutral", usage: "Adjacent seats next to each other on planes/trains.", example: "二人並びの席で空いてますか？" },
          { booster: "〜側 (Gawa)", phonetic: "[ɡawa]", category: "connector", usage: "Indicating side: 富士山側 (Fuji side), 窓側 (window side), 通路側 (aisle side).", example: "通路側が空いていればお願いします。" }
        ],
        commonMistakes: [
          { mistake: "Asking for '富士山側' on the Tokyo-Kyoto train without specifying seat letter E.", correction: "Seats 'E' (or 'D/E') on Tokaido Shinkansen are on the right facing Kyoto, with Mt. Fuji views.", explanation: "Knowing 'E席が富士山側' saves you from missing the scenic view." }
        ],
        culturalPragmaticNote: {
          title: "Oversized Baggage Rules on Shinkansen",
          textbookVsReality: "Luggage whose total dimensions exceed 160cm requires a special '特大荷物スペースつき座席' (seat with oversized baggage area). If you board without it, an extra 1,000 yen penalty applies."
        },
        rolePlayPrompts: {
          guided: "Book Shinkansen tickets to Osaka, requesting window seats on the fastest Nozomi train.",
          semiOpen: "You missed your reserved train by 5 minutes. Ask station staff if your ticket is valid for the unreserved car on the next train.",
          fullyOpen: "At Tokyo Station, find out where to forward your luggage via Yamato Kuroneko transport directly to your Kyoto hotel."
        },
        followUpQuestions: [
          "日本の新幹線に乗った時の第一印象はどうでしたか？",
          "長距離移動の時、駅弁（えきべん）を買って食べるのは好きですか？"
        ],
        canDoStatements: [
          "I can purchase Shinkansen tickets with specific seat preferences (window, Fuji side).",
          "I can resolve ticket changes or missed departures at the Midori-no-Madoguchi ticket office.",
          "I can ask about IC card gate tapping and oversized baggage rules."
        ]
      },
      {
        id: "ja-t6-hotel-emergencies",
        areaId: 3,
        areaTitle: "旅行と交通",
        title: "ホテルでのチェックインと部屋のトラブル相談 (Hotel Check-In & Room Repairs)",
        situation: "旅館やホテルでチェックインし、エアコンの不調やアメニティの追加をフロントに相談する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "チェックインをお願いしたいのですが、予約のラフリーです。", phonetic: "Chekkuin o onegai shitai no desu ga, yoyaku no Rafurii desu.", english: "I'd like to check in, under reservation name Rafly.", register: "formal" },
          { phrase: "荷物をチェックイン時間まで預かっていただけますか？", phonetic: "Nimotsu o chekkuin jikan made azukatte itadakemasu ka?", english: "Could you hold my luggage until check-in time?", register: "formal" },
          { phrase: "部屋のエアコンから冷たい風が出ないのですが。", phonetic: "Heya no eakon kara tsumetai kaze ga denai no desu ga.", english: "Cold air isn't coming out of the room's AC.", register: "formal" },
          { phrase: "タオルの替えをもう一枚いただけますか？", phonetic: "Taoru no kae o mou ichimai itadakemasu ka?", english: "Could I have an extra replacement towel?", register: "formal" }
        ],
        dialogue: [
          { speaker: "フロント", line: "いらっしゃいませ。ご宿泊でございますか？", phonetic: "Irasshaimase. Goshukuhaku de gozaimasu ka?", english: "Welcome. Are you staying with us?" },
          { speaker: "ラフリー", line: "はい、楽天トラベルで予約したラフリーと申します。", phonetic: "Hai, Rakuten Toraberu de yoyaku shita Rafurii to moushimasu.", english: "Yes, my name is Rafly, booked through Rakuten Travel." },
          { speaker: "フロント", line: "お待ち申し上げておりました。お部屋の鍵でございます。", phonetic: "Omachi moushiagete orimashita. Oheya no kagi de gozaimasu.", english: "We have been expecting you. Here is your room key." }
        ],
        fluencyBoosters: [
          { booster: "〜と申します (~ to moushimasu)", phonetic: "[to moːɕimasɯ]", category: "formal", usage: "Humble Kenjougo when stating one's own name to service staff.", example: "ラフリーと申します。" }
        ],
        commonMistakes: [
          { mistake: "Saying '私のお名前は〜です' to staff.", correction: "Say: '〜と申します' (humble form).", explanation: "'O-namae' is Sonkeigo for other people's names; never add 'o-' to your own name." }
        ],
        culturalPragmaticNote: {
          title: "Shoes-off inside Ryokan & Traditional Accommodations",
          textbookVsReality: "At the genkan entrance, switch from outside shoes to indoor slippers immediately. Remove slippers completely before stepping onto tatami mats."
        },
        rolePlayPrompts: {
          guided: "Check into a hotel, hand over passport, and confirm breakfast hours.",
          semiOpen: "Report that the Wi-Fi signal in room 402 is disconnected and ask for a router reboot.",
          fullyOpen: "Politely negotiate a late checkout due to a delayed evening flight."
        },
        followUpQuestions: [
          "日本の伝統的な旅館に泊まったことはありますか？温泉はいかがでしたか？"
        ],
        canDoStatements: [
          "I can check into a Japanese hotel using humble name introductions.",
          "I can request luggage holding and extra amenities politely.",
          "I can report room maintenance issues effectively."
        ]
      }
    ]
  },

  // ── AREA 4: Shopping & services ──
  {
    id: 4,
    title: "買い物と各種手続き (Shopping & Services)",
    subtitle: "Prices, bargaining, returns, bank, post office",
    icon: "🛍️",
    topics: [
      {
        id: "ja-t7-clothing-fitting",
        areaId: 4,
        areaTitle: "買い物と各種手続き",
        title: "アパレル店での試着とサイズ相談 (Clothing Store Fitting & Sizing)",
        situation: "ショップで気になるジャケットを試着し、ワンサイズ上があるか店員に尋ね、丁寧に断る。",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "これ、試着してもいいですか？", phonetic: "Kore, shichaku shitemo ii desu ka?", english: "May I try this on?", register: "neutral" },
          { phrase: "これのMサイズって在庫ありますか？", phonetic: "Kore no Emu-saizu tte zaiko arimasu ka?", english: "Do you have this in size M in stock?", register: "neutral" },
          { phrase: "ちょっと肩幅がきついかもしれません。", phonetic: "Chotto katahaba ga kitsui kamo shiremasen.", english: "The shoulder width might be a bit tight.", register: "neutral" },
          { phrase: "ちょっと考えます、ありがとうございます！", phonetic: "Chotto kangaemasu, arigatou gozaimasu!", english: "I'll think about it a bit, thank you!", register: "neutral" },
          { phrase: "免税（Tax-Free）の手続きはできますか？", phonetic: "Menzei (Tax-Free) no tetsuzuki wa dekimasu ka?", english: "Can we do Tax-Free processing?", register: "formal" }
        ],
        dialogue: [
          { speaker: "店員", line: "いらっしゃいませ！鏡に合わせてみてくださいね。", phonetic: "Irasshaimase! Kagami ni awasete mite kudasai ne.", english: "Welcome! Feel free to hold it up to the mirror." },
          { speaker: "ラフリー", line: "ありがとうございます。これ、試着してみてもいいですか？", phonetic: "Arigatou gozaimasu. Kore, shichaku shite mitemo ii desu ka?", english: "Thank you. Could I try this on in the fitting room?" },
          { speaker: "店員", line: "もちろんでございます！あちらの試着室へどうぞ。フェイスカバーをお使いください。", phonetic: "Mochiron de gozaimasu! Achira no shichakushitsu e douzo. Feisu kabaa o otsukai kudasai.", english: "Of course! Right this way to the fitting room. Please use the face cover." },
          { speaker: "ラフリー", line: "（試着後）すみません、袖が少し長いので、ちょっと考えますね。", phonetic: "(Shichaku go) Sumimasen, sode ga sukoshi nagai node, chotto kangaemasu ne.", english: "(After fitting) Thank you, the sleeves are a bit long, so I think I'll ponder it a bit." },
          { speaker: "店員", line: "かしこまりました！またいつでもお気軽にお声がけください！", phonetic: "Kashikomarimashita! Mata itsudemo okigaru ni okoegake kudasai!", english: "Understood! Please feel free to ask anytime!" }
        ],
        fluencyBoosters: [
          { booster: "ちょっと考えます (Chotto kangaemasu)", phonetic: "[t͡ɕot̚to kaŋɡaemasɯ]", category: "discourse marker", usage: "Universal polite Japanese refusal when you try something on and decide not to buy it.", example: "試着ありがとうございました。ちょっと考えます！" },
          { booster: "在庫 (Zaiko)", phonetic: "[zaiko]", category: "neutral", usage: "Inventory / items in back stock.", example: "他の色の在庫はありますか？" }
        ],
        commonMistakes: [
          { mistake: "Saying blunt: 'これは嫌いです、買いません' (I dislike this, won't buy).", correction: "Say: 'ちょっと考えます' (I'll think about it) with a friendly smile.", explanation: "Direct refusal sounds abrasive to retail staff." }
        ],
        culturalPragmaticNote: {
          title: "Face Covers in Japanese Fitting Rooms",
          textbookVsReality: "When trying on clothes in Japan, women (and anyone wearing makeup) are handed a non-woven face cover to prevent makeup from staining garments. Shoes must be removed before stepping into the fitting stall."
        },
        rolePlayPrompts: {
          guided: "Ask for permission to try on a pair of sneakers in size 27.5cm.",
          semiOpen: "Try on a winter coat, decide it is too heavy, and politely decline the salesperson's pitch.",
          fullyOpen: "Request tax-free processing for purchases over 5,000 yen at a department store using your passport."
        },
        followUpQuestions: [
          "日本の洋服のサイズ感は、母国の服と比べてどうですか？"
        ],
        canDoStatements: [
          "I can ask to try on clothes and check inventory sizes.",
          "I can use the polite refusal phrase 'chotto kangaemasu'.",
          "I can request tax-free exemptions at checkout."
        ]
      },
      {
        id: "ja-t8-post-office-ems",
        areaId: 4,
        areaTitle: "買い物と各種手続き",
        title: "郵便局での海外小包（EMS）発送と銀行窓口 (Post Office EMS & Banking)",
        situation: "郵便局の窓口で海外へ荷物をEMSで送り、内容品申告や追跡番号を確認する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-8 mins",
        keyPhrases: [
          { phrase: "この荷物を海外へEMSで送りたいのですが。", phonetic: "Kono nimotsu o kaigai e EMS de okuritai no desu ga.", english: "I'd like to send this package abroad via EMS.", register: "formal" },
          { phrase: "内容品は衣服とお菓子です。", phonetic: "Naiyouhin wa ifuku to okashi desu.", english: "The contents are clothing and snacks.", register: "neutral" },
          { phrase: "危険物やリチウム電池は入っていません。", phonetic: "Kikenbutsu ya richiumu denchi wa haitte imasen.", english: "Contains no hazardous materials or lithium batteries.", register: "formal" },
          { phrase: "届くまで何日くらいかかりますか？", phonetic: "Todoku made nannichi kurai kakarimasu ka?", english: "About how many days will it take to arrive?", register: "neutral" }
        ],
        dialogue: [
          { speaker: "局員", line: "いらっしゃいませ。本日はどのようなご用件でしょうか？", phonetic: "Irasshaimase. Honjitsu wa dono you na goyouken dehou ka?", english: "Welcome. How can we help you today?" },
          { speaker: "ラフリー", line: "アメリカの友人にこの小包をEMSで発送したいのですが。", phonetic: "Amerika no yuujin ni kono kozutsumi o EMS de hassou shitai no desu ga.", english: "I'd like to ship this parcel to a friend in the US via EMS." },
          { speaker: "局員", line: "送り状の電子データ作成はお済みでしょうか？", phonetic: "Okurijou no denshi deeta sakusei wa ozumi deshou ka?", english: "Have you created the digital customs declaration form?" },
          { speaker: "ラフリー", line: "はい、スマホのマイページからQRコードを作ってきました！", phonetic: "Hai, sumaho no mai peeji kara QR koudo o tsukutte kimashita!", english: "Yes, I generated the QR code on my phone!" }
        ],
        fluencyBoosters: [
          { booster: "〜はお済みでしょうか (~ wa ozumi deshou ka)", phonetic: "[wa ozɯmi deɕoː ka]", category: "formal", usage: "Keigo used by staff asking if a prerequisite step has already been completed.", example: "お会計はお済みでしょうか？" }
        ],
        commonMistakes: [
          { mistake: "Bringing a hand-written paper waybill for international EMS parcels.", correction: "Digital declaration (EAD) via Japan Post website or app is now mandatory.", explanation: "Handwritten labels are rejected due to international aviation regulations." }
        ],
        culturalPragmaticNote: {
          title: "Numbered Tickets (番号札) at Japanese Offices",
          textbookVsReality: "At post offices, banks, and ward offices (kuyakusho), always pull a numbered ticket from the machine first. Never walk straight up to the counter."
        },
        rolePlayPrompts: {
          guided: "Present a package at the post office and specify the destination country.",
          semiOpen: "Clarify to postal staff that an electronic item has no batteries inside.",
          fullyOpen: "Open a Japanese bank account or remit money abroad at a post office bank (Yucho)."
        },
        followUpQuestions: [
          "日本から海外の家族や友人にプレゼントを送ったことはありますか？"
        ],
        canDoStatements: [
          "I can ship an international package using EMS terminology.",
          "I can confirm delivery schedules and tracking numbers.",
          "I can verify customs declarations for hazardous goods."
        ]
      }
    ]
  },

  // ── AREA 5: Work & professional ──
  {
    id: 5,
    title: "ビジネスと職場 (Work & Professional)",
    subtitle: "Introductions, meetings, emails-to-speech, interviews",
    icon: "💼",
    topics: [
      {
        id: "ja-t9-meishi-exchange",
        areaId: 5,
        areaTitle: "ビジネスと職場",
        title: "初対面のビジネス名刺交換と挨拶 (Business Card Exchange & Keigo)",
        situation: "取引先との初回商談で、両手で名刺を差し出しながら正しい謙譲語で自己紹介する。",
        difficulty: "Hard",
        cefrLevel: "B2",
        estimatedSpeakingTime: "8-10 mins",
        keyPhrases: [
          { phrase: "大変お世話になっております。", phonetic: "Taihen osewa ni natte orimasu.", english: "Thank you very much for your continuous partnership.", register: "formal" },
          { phrase: "株式会社メトリクスのラフリーと申します。", phonetic: "Kabushikigaisha Metorikusu no Rafurii to moushimasu.", english: "My name is Rafly from Metrics Inc.", register: "formal" },
          { phrase: "頂戴いたします。よろしくお願いいたします。", phonetic: "Choudai itashimasu. Yoroshiku onegai itashimasu.", english: "I gratefully receive this. I look forward to working with you.", register: "formal" },
          { phrase: "本日は貴重なお時間をいただき、誠にありがとうございます。", phonetic: "Honjitsu wa kichou na ojikan o itadaki, makoto ni arigatou gozaimasu.", english: "Thank you sincerely for granting us your valuable time today.", register: "formal" },
          { phrase: "こちらの資料に沿ってご説明させていただきます。", phonetic: "Kochira no shiryou ni sotte gosetsumei sasete itadakimasu.", english: "Allow me to walk through the explanation according to these slides.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "初めまして。株式会社メトリクスのラフリーと申します。本日はよろしくお願い申し上げます。", phonetic: "Hajimemashite. Kabushikigaisha Metorikusu no Rafurii to moushimasu. Honjitsu wa yoroshiku onegai moushiagemasu.", english: "Pleased to meet you. I am Rafly from Metrics Inc. I look forward to working with you today." },
          { speaker: "佐藤部長", line: "サイバーソリューションの佐藤でございます。ご丁寧に恐れ入ります。どうぞお座りください。", phonetic: "Saibaa Soryuushon no Satou de gozaimasu. Goteinei ni osoreirimasu. Douzo osuwari kudasai.", english: "I am Sato from Cyber Solutions. Thank you for your courtesy. Please have a seat." },
          { speaker: "ラフリー", line: "失礼いたします。佐藤様、本日は新規AIプロダクトのご提案機会をいただき、感謝申し上げます。", phonetic: "Shitsurei itashimasu. Satou-sama, honjitsu wa shinki AI purodakuto no goteian kikai o itadaki, kansha moushiagemasu.", english: "Excuse me. Sato-sama, thank you for this opportunity to present our new AI product." }
        ],
        fluencyBoosters: [
          { booster: "恐れ入ります (Osoreirimasu)", phonetic: "[osoɾeiɾimasɯ]", category: "formal", usage: "Extreme gratitude mixed with humble apology for putting the other party to trouble.", example: "お忙しいところ恐れ入ります。" },
          { booster: "〜させていただきます (~ sasete itadakimasu)", phonetic: "[sasete itadakimasɯ]", category: "formal", usage: "Polite formula to state an action you undertake with the listener's permission.", example: "資料を共有させていただきます。" }
        ],
        commonMistakes: [
          { mistake: "Sliding a business card with one hand across the table.", correction: "Hold with both hands below the counterparty's card level, bow slightly.", explanation: "Giving or taking a meishi with one hand is seen as careless disrespect." }
        ],
        culturalPragmaticNote: {
          title: "Meishi Etiquette Hierarchy",
          textbookVsReality: "Never write notes on someone's business card in front of them, and never immediately put it away into your pocket. Place it neatly on top of your card case on the table."
        },
        rolePlayPrompts: {
          guided: "Introduce yourself and company while exchanging business cards.",
          semiOpen: "Apologize politely for a 5-minute meeting delay caused by subway signal checks.",
          fullyOpen: "Pitch a software integration proposal to an executive panel in polite Keigo."
        },
        followUpQuestions: [
          "母国と日本のビジネス慣習で、一番驚いた違いは何ですか？"
        ],
        canDoStatements: [
          "I can execute the formal Japanese business card exchange ritual.",
          "I can use Kenjougo humble verbs when presenting company credentials.",
          "I can open meetings with standard business acknowledgments."
        ]
      },
      {
        id: "ja-t10-workplace-hou-ren-so",
        areaId: 5,
        areaTitle: "ビジネスと職場",
        title: "職場の報連相と進捗報告 (Hou-Ren-So & Project Sync)",
        situation: "上司にプロジェクトの進捗の遅れを早めに報告し、リカバリー策を提案する。",
        difficulty: "Hard",
        cefrLevel: "B2",
        estimatedSpeakingTime: "8-9 mins",
        keyPhrases: [
          { phrase: "今、少々お時間よろしいでしょうか？", phonetic: "Ima, shou-shou ojikan yoroshii deshou ka?", english: "Do you have a brief moment right now?", register: "formal" },
          { phrase: "プロジェクトの進捗についてご報告がございます。", phonetic: "Purojekuto no shinchoku ni tsuite gohoukoku ga gozaimasu.", english: "I have a progress report regarding the project.", register: "formal" },
          { phrase: "結論から申し上げますと、リリースが2日遅延する見込みです。", phonetic: "Ketsuron kara moushiagemasu to, ririisu ga futsuka chien suru mikomi desu.", english: "To state the conclusion first, release is projected to delay by 2 days.", register: "formal" },
          { phrase: "原因を調査したところ、外部APIの仕様変更が判明いたしました。", phonetic: "Gen'in o chousa shita tokoro, gaibu API no shiyou henkou ga hanmei itashimashita.", english: "Upon investigating root causes, an external API spec change came to light.", register: "formal" },
          { phrase: "対応策として、追加リソースを割り当てております。", phonetic: "Taiousaku to shite, tsuika risousu o wariatete orimasu.", english: "As a mitigation, we are assigning additional resources.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "課長、今1分ほどお時間よろしいでしょうか？", phonetic: "Kachou, ima ippun hodo ojikan yoroshii deshou ka?", english: "Section Chief, do you have about a minute right now?" },
          { speaker: "課長", line: "うん、どうした？何かあった？", phonetic: "Un, dou shita? Nani ka atta?", english: "Yeah, what's up? Something happened?" },
          { speaker: "ラフリー", line: "はい、新機能のテストでバグが見つかりまして、取り急ぎご報告です。", phonetic: "Hai, shinkinou no tesuto de bagu ga mitsukarimashite, toriisogi gohoukoku desu.", english: "Yes, a bug was found during feature testing, so this is an immediate update." }
        ],
        fluencyBoosters: [
          { booster: "結論から申し上げますと (Ketsuron kara moushiagemasu to)", phonetic: "[ket͡sɯɾoɴ kaɾa moːɕiaɡemasɯ to]", category: "connector", usage: "Executive framing: 'To give the bottom line first...'", example: "結論から申し上げますと、目標は達成できました。" },
          { booster: "取り急ぎ (Toriisogi)", phonetic: "[toɾiisoɡi]", category: "formal", usage: "'In haste / as a quick preliminary report...'", example: "取り急ぎチャットにて共有いたします。" }
        ],
        commonMistakes: [
          { mistake: "Telling a long narrative story before revealing the problem to your boss.", correction: "State the problem/status in the first sentence (結論ファースト).", explanation: "Japanese managers value immediate bottom-line visibility over chronological backstory." }
        ],
        culturalPragmaticNote: {
          title: "Hou-Ren-So (報連相)",
          textbookVsReality: "Hou (Hokoku = report), Ren (Renraku = update/inform), So (Sodan = consult). Bringing bad news quickly (Bad News Fast) is praised far more than hiding problems until the deadline."
        },
        rolePlayPrompts: {
          guided: "Ask your manager for a 5-minute sync to report quarterly deliverables.",
          semiOpen: "Explain an unexpected server crash and present two alternative remedies.",
          fullyOpen: "Conduct an end-of-probation review expressing personal career growth goals."
        },
        followUpQuestions: [
          "仕事でミスを発見した時、最初に誰にどんな方法で相談しますか？"
        ],
        canDoStatements: [
          "I can initiate business consultations using 'Ima ojikan yoroshii deshou ka'.",
          "I can frame reports using 'Ketsuron kara moushiagemasu to'.",
          "I can explain technical delays and mitigation plans concisely."
        ]
      }
    ]
  },

  // ── AREA 6: Social & relationships ──
  {
    id: 6,
    title: "社交と人間関係 (Social & Relationships)",
    subtitle: "Making friends, dating, family, invitations, declining politely",
    icon: "🤝",
    topics: [
      {
        id: "ja-t11-nomikai-invitation",
        areaId: 6,
        areaTitle: "社交と人間関係",
        title: "飲み会の誘いと角を立てずに断る作法 (Izakaya Invites & Polite Declining)",
        situation: "金曜夜の飲み会に誘われた際、やんわりと角を立てずに断る、または快く参加を返事する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-8 mins",
        keyPhrases: [
          { phrase: "金曜日の夜、もし空いてたら一杯どう？", phonetic: "Kin'youbi no yoru, moshi aitetara ippai dou?", english: "Friday night, if you're free, how about a drink?", register: "casual" },
          { phrase: "ぜひ喜んで参加させてください！", phonetic: "Zehi yorokonde sanka sasete kudasai!", english: "I'd love to join with pleasure!", register: "neutral" },
          { phrase: "うわー、行きたいのは山々なのですが…", phonetic: "Uwaa, ikitai no wa yamayama na no desu ga...", english: "Oh, I'd love to go more than anything, but...", register: "neutral" },
          { phrase: "あいにくその日は先約がありまして。", phonetic: "Ainiku sono hi wa sen'yaku ga arimashite.", english: "Unfortunately I have a prior commitment that day.", register: "formal" },
          { phrase: "せっかく誘っていただいたのに、すみません！", phonetic: "Sekkaku sasotte itadaita noni, sumimasen!", english: "You were so kind to invite me, I'm truly sorry!", register: "neutral" },
          { phrase: "また次回、ぜひ声かけてください！", phonetic: "Mata jikai, zehi koe kakete kudasai!", english: "Please definitely invite me next time!", register: "neutral" }
        ],
        dialogue: [
          { speaker: "同僚・健太", line: "ラフリーさん、今週金曜日って仕事終わり予定ある？みんなで駅前の焼き鳥屋行くんだけど！", phonetic: "Rafurii-san, konshuu kin'youbi tte shigoto owari yotei aru? Minna de ekimae no yakitoriya iku n dakedo!", english: "Rafly-san, do you have plans after work this Friday? We're all hitting the yakitori spot by the station!" },
          { speaker: "ラフリー", line: "あー、焼き鳥いいですね！行きたいのは山々なんですが…", phonetic: "Aa, yakitori ii desu ne! Ikitai no wa yamayama nan desu ga...", english: "Ah, yakitori sounds wonderful! I'd love to go more than anything, but...", fillers: ["あー"] },
          { speaker: "同僚・健太", line: "あれ、用事入っちゃってる？", phonetic: "Are, youji haicchatte ru?", english: "Oh, got something on?" },
          { speaker: "ラフリー", line: "そうなんです、あいにく家族との約束がありまして。せっかく声かけてくれたのに申し訳ない！", phonetic: "Sou nan desu, ainiku kazoku to no yakusoku ga arimashite. Sekkaku koe kakete kureta noni moushiwake nai!", english: "Yes exactly, unfortunately I promised to see family. So sorry when you took the trouble to invite me!" },
          { speaker: "同僚・健太", line: "全然気にしないで！家族優先で！また来週声かけるね。", phonetic: "Zenzen ki ni shinaide! Kazoku yuusen de! Mata raishuu koe kakeru ne.", english: "Don't worry about it at all! Family first! I'll ask you again next week." }
        ],
        fluencyBoosters: [
          { booster: "〜のは山々ですが (~ no wa yamayama desu ga)", phonetic: "[no wa jamajama desɯ ɡa]", category: "idiom", usage: "Meaning 'I want to do it tremendously, but reality prevents me.'", example: "行きたいのは山々ですが、締め切りが近くて…" },
          { booster: "あいにく (Ainiku)", phonetic: "[ainikɯ]", category: "filler", usage: "'Unfortunately / as luck would have it' — sets up a polite refusal.", example: "あいにく雨が降ってきまして。" },
          { booster: "せっかく (Sekkaku)", phonetic: "[sek̚kakɯ]", category: "discourse marker", usage: "Acknowledging that someone went out of their way or extended kindness.", example: "せっかく作ってくれたのに残してごめんなさい。" }
        ],
        commonMistakes: [
          { mistake: "Saying a flat '行きません' (I won't go) or '嫌です' (I dislike it).", correction: "Say: '行きたいのは山々ですが、ちょっと予定がありまして…'", explanation: "In Japan, direct refusals destroy social harmony (和). Always cushion with 'yamayama' and trail off with '...ga'." }
        ],
        culturalPragmaticNote: {
          title: "The Japanese Trailing-off Refusal (語尾を濁す)",
          textbookVsReality: "Native speakers rarely complete refusal sentences. They say 'ちょっと予定が…' and stop. The listener immediately grasps the refusal and graciously lets them off the hook."
        },
        rolePlayPrompts: {
          guided: "Accept an after-work drinks invitation enthusiastically.",
          semiOpen: "Decline a weekend karaoke party because you have Japanese language homework, promising to join next time.",
          fullyOpen: "Invite a new acquaintance for lunch at a soba restaurant, giving them an easy out so they don't feel pressured."
        },
        followUpQuestions: [
          "飲み会や社交の場で、お酒を飲まない人はどのように過ごすのが自然ですか？"
        ],
        canDoStatements: [
          "I can decline social invitations smoothly using 'ikitai no wa yamayama desu ga'.",
          "I can use 'sekkaku' to honor the other person's intention.",
          "I can trail off sentences politely with '...ga' without sounding rude."
        ]
      },
      {
        id: "ja-t12-making-friends-meetup",
        areaId: 6,
        areaTitle: "社交と人間関係",
        title: "趣味のコミュニティでの友人づくり (Making Friends at Meetups)",
        situation: "ボルダリングや写真のミートアップで初対面の人と共通の話題を見つけて連絡先を交換する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "ここ、よく来られるんですか？", phonetic: "Koko, yoku korareru n desu ka?", english: "Do you come here often?", register: "neutral" },
          { phrase: "カメラのレンズ、すごくかっこいいですね！", phonetic: "Kamera no renzu, sugoku kakkoii desu ne!", english: "Your camera lens looks super cool!", register: "casual" },
          { phrase: "もしよかったら、LINE交換しませんか？", phonetic: "Moshi yokattara, LINE koukan shimasen ka?", english: "If you'd like, shall we exchange LINE?", register: "neutral" },
          { phrase: "今度一緒に撮影スポット行きましょう！", phonetic: "Kondo issho ni satsuei supotto ikimashou!", english: "Let's hit a photo spot together sometime!", register: "casual" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "こんにちは！その写真、光の入り方がすごく綺麗ですね！", phonetic: "Konnichiwa! Sono shashin, hikari no hairikata ga sugoku kirei desu ne!", english: "Hello! The lighting in that photo is stunning!" },
          { speaker: "参加者", line: "ありがとうございます！オールドレンズで撮ってみたんですよ。", phonetic: "Arigatou gozaimasu! Oorudo renzu de totte mita n desu yo.", english: "Thank you! I shot it with a vintage manual lens." },
          { speaker: "ラフリー", line: "いいですね！もしよければLINE繋がってもらえませんか？", phonetic: "Ii desu ne! Moshi yokereba LINE tsunagatte moraemasen ka?", english: "Nice! If you're open to it, could we connect on LINE?" }
        ],
        fluencyBoosters: [
          { booster: "もしよければ (Moshi yokereba)", phonetic: "[moɕi jokeɾeba]", category: "connector", usage: "Gentle conditional: 'If you're okay with it...'", example: "もしよければコーヒーでも。" }
        ],
        commonMistakes: [
          { mistake: "Asking for someone's phone number instead of LINE or Instagram.", correction: "In Japan, personal phone numbers are almost never shared for casual friendships; LINE is the universal standard.", explanation: "Ask: 'LINE交換しませんか？'" }
        ],
        culturalPragmaticNote: {
          title: "The Universal Realm of LINE in Japan",
          textbookVsReality: "Textbooks teach exchanging emails. In reality, everyone from students to elders connects via LINE QR codes."
        },
        rolePlayPrompts: {
          guided: "Compliment someone's gear at a gym and strike up a chat.",
          semiOpen: "Suggest exchanging social media after a fun shared board game session.",
          fullyOpen: "Organize a weekend photowalk group chat with 3 new acquaintances."
        },
        followUpQuestions: [
          "日本で新しい友達を作るのに一番おすすめの場所やアプリは何ですか？"
        ],
        canDoStatements: [
          "I can start conversations with shared hobby compliments.",
          "I can propose exchanging LINE naturally.",
          "I can suggest future casual meetups."
        ]
      }
    ]
  },

  // ── AREA 7: Health & wellbeing ──
  {
    id: 7,
    title: "健康と医療 (Health & Wellbeing)",
    subtitle: "Doctor, pharmacy, describing symptoms",
    icon: "🏥",
    topics: [
      {
        id: "ja-t13-clinic-doctor",
        areaId: 7,
        areaTitle: "健康と医療",
        title: "クリニック・内科での症状説明 (Doctor's Clinic & Symptoms)",
        situation: "日本の内科クリニックを受診し、熱や喉の痛み、いつから発症したかを具体的に説明する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "7-8 mins",
        keyPhrases: [
          { phrase: "一昨日の夜から38度の熱がありまして。", phonetic: "Ototoi no yoru kara sanjuuhachido no netsu ga arimashite.", english: "I've had a fever of 38 degrees since the night before last.", register: "formal" },
          { phrase: "喉がズキズキ痛んで、ツバを飲み込むのも辛いです。", phonetic: "Nodo ga zukizuki itande, tsuba o nomikomu no mo tsurai desu.", english: "My throat throbs with pain, it hurts even to swallow saliva.", register: "neutral" },
          { phrase: "市販の風邪薬を飲みましたが、効きませんでした。", phonetic: "Shihan no kazegusuri o nomimashita ga, kikimasen deshita.", english: "I took over-the-counter cold medicine, but it didn't work.", register: "formal" },
          { phrase: "花粉症の薬を普段から服用しています。", phonetic: "Kafunshou no kusuri o fudan kara fukuyou shite imasu.", english: "I take hay fever medication on a regular basis.", register: "formal" },
          { phrase: "抗生物質は処方していただけますか？", phonetic: "Kouseibushitsu wa shohou shite itadakemasu ka?", english: "Will you prescribe antibiotics?", register: "formal" }
        ],
        dialogue: [
          { speaker: "医師", line: "ラフリーさん、どうぞ。今日はどうされましたか？", phonetic: "Rafurii-san, douzo. Kyou wa dou saremashita ka?", english: "Rafly-san, come in please. What seems to be the problem today?" },
          { speaker: "ラフリー", line: "先生、一昨日から悪寒がして、今朝熱を測ったら38度2分ありました。", phonetic: "Sensei, ototoi kara okan ga shite, kesa netsu o hakattara sanjuuhachido nibu arimashita.", english: "Doctor, I've had chills since two days ago, and when I took my temperature this morning it was 38.2°C." },
          { speaker: "医師", line: "なるほど、関節痛や咳はありますか？インフルエンザの検査をしてみましょう。", phonetic: "Naruhodo, kansetsutsuu ya seki wa arimasu ka? Infuruenza no kensa o shitemimashou.", english: "I see, do you have joint aches or a cough? Let's run an influenza rapid test." }
        ],
        fluencyBoosters: [
          { booster: "ズキズキ / ズキズキ痛む (Zukizuki)", phonetic: "[zɯkʲizɯkʲi]", category: "idiom", usage: "Onomatopoeia for throbbing, pulsing pain (headaches, toothaches).", example: "頭がズキズキ痛みます。" },
          { booster: "チクチク (Chikuchiku)", phonetic: "[t͡ɕikɯt͡ɕikɯ]", category: "idiom", usage: "Prickling, stinging pain.", example: "喉がチクチクします。" }
        ],
        commonMistakes: [
          { mistake: "Calling a medical doctor '田中さん'.", correction: "Address them as '先生' (Sensei) or '田中先生'.", explanation: "Physicians, lawyers, and teachers are always addressed as 'Sensei'." }
        ],
        culturalPragmaticNote: {
          title: "Japanese Health Insurance Card (保険証)",
          textbookVsReality: "Always bring your Health Insurance Card (or My Number Card). Without it, Japanese clinics charge 100% full cost instead of the standard 30% co-pay."
        },
        rolePlayPrompts: {
          guided: "Explain a stomach ache and nausea that started after eating raw oysters.",
          semiOpen: "Consult a pharmacist for motion sickness medicine before a ferry ride.",
          fullyOpen: "Visit an eye clinic describing dry, itchy eyes during pollen season."
        },
        followUpQuestions: [
          "日本の医療機関にかかった経験はありますか？母国との違いは何ですか？"
        ],
        canDoStatements: [
          "I can describe physical symptoms using vivid onomatopoeia (zukizuki, chikuchiku).",
          "I can state body temperature in Japanese format (38度2分).",
          "I can detail medication history to a physician."
        ]
      },
      {
        id: "ja-t14-pharmacy-prescriptions",
        areaId: 7,
        areaTitle: "健康と医療",
        title: "調剤薬局での服薬指導と相談 (Pharmacy Prescription Instructions)",
        situation: "処方箋を持って調剤薬局に行き、食前・食後の飲み方や眠気などの副作用を確認する。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "処方箋をお渡ししたいのですが。", phonetic: "Shohousen o owatashi shitai no desu ga.", english: "I'd like to hand in my prescription.", register: "formal" },
          { phrase: "お薬手帳はお持ちですか？", phonetic: "Okusuri techou wa omochi desu ka?", english: "Do you have your medicine handbook with you?", register: "formal" },
          { phrase: "この薬は食前ですか、食後ですか？", phonetic: "Kono kusuri wa shokuzen desu ka, shokugo desu ka?", english: "Should this medicine be taken before or after meals?", register: "neutral" },
          { phrase: "眠気が出る副作用はありますか？車の運転は可能ですか？", phonetic: "Nemuke ga deru fukusayou wa arimasu ka? Kuruma no unten wa kanou desu ka?", english: "Does it have drowsy side effects? Can I drive?", register: "formal" },
          { phrase: "ジェネリック医薬品（後発薬）に変更できますか？", phonetic: "Jenerikku iyakuhin (kouhatsuyaku) ni henkou dekimasu ka?", english: "Can I switch to generic medication?", register: "formal" }
        ],
        dialogue: [
          { speaker: "薬剤師", line: "ラフリー様、お待たせいたしました。こちらお薬の説明になります。", phonetic: "Rafurii-sama, omatase itashimashita. Kochira okusuri no setsumei ni narimasu.", english: "Rafly-sama, thank you for waiting. Here is your medication guidance." },
          { speaker: "ラフリー", line: "よろしくお願いします。朝晩の食後に飲めばいいですか？", phonetic: "Yoroshiku onegai shimasu. Asa-ban no shokugo ni nomeba ii desu ka?", english: "Thank you. Should I take these morning and evening after meals?" },
          { speaker: "薬剤師", line: "はい、胃を守るため必ず食後30分以内にぬるま湯でお飲みください。", phonetic: "Hai, i o mamoru tame kanarazu shokugo sanjuppun inai ni nurumayu de onomi kudasai.", english: "Yes, to protect your stomach, please be sure to take them with lukewarm water within 30 minutes after eating." }
        ],
        fluencyBoosters: [
          { booster: "食前・食後 (Shokuzen / Shokugo)", phonetic: "[ɕokɯzeɴ / ɕokɯɡo]", category: "neutral", usage: "Before meals vs after meals.", example: "食後30分以内に飲んでください。" },
          { booster: "ぬるま湯 (Nurumayu)", phonetic: "[nɯɾɯma jɯ]", category: "neutral", usage: "Lukewarm water (recommended for pills over cold drinks).", example: "ぬるま湯で服用してください。" }
        ],
        commonMistakes: [
          { mistake: "Drinking Japanese prescription pills with green tea or coffee.", correction: "Always drink with plain water or lukewarm water (お水かぬるま湯).", explanation: "Caffeine and catechins interfere with drug absorption." }
        ],
        culturalPragmaticNote: {
          title: "The Okusuri Techou (お薬手帳)",
          textbookVsReality: "Pharmacies in Japan provide a booklet documenting all medications you take to prevent dangerous drug interactions. Bringing it also saves a small fee on dispensing."
        },
        rolePlayPrompts: {
          guided: "Confirm with a pharmacist if you should finish all antibiotics even after feeling better.",
          semiOpen: "Ask for drowsy-free allergy medication over the counter.",
          fullyOpen: "Inquire about generic medicine discounts and pill organization cases."
        },
        followUpQuestions: [
          "日本の薬の効き目は母国の薬と比べてマイルドだと感じますか？"
        ],
        canDoStatements: [
          "I can hand in prescriptions and explain ongoing medicines.",
          "I can confirm meal timing (shokuzen / shokugo).",
          "I can inquire about drowsy side effects and driving warnings."
        ]
      }
    ]
  },

  // ── AREA 8: Opinions & discussion ──
  {
    id: 8,
    title: "意見交換と議論 (Opinions & Discussion)",
    subtitle: "Agreeing/disagreeing, giving reasons, debating lightly",
    icon: "💭",
    topics: [
      {
        id: "ja-t15-remote-work-debate",
        areaId: 8,
        areaTitle: "意見交換と議論",
        title: "リモートワーク対出社の議論 (Remote Work vs. Office Debate)",
        situation: "同僚とリモートワークの生産性と対面コミュニケーションの価値について穏やかに議論する。",
        difficulty: "Hard",
        cefrLevel: "B2",
        estimatedSpeakingTime: "8-10 mins",
        keyPhrases: [
          { phrase: "おっしゃる通りだと思います。", phonetic: "Ossharu toori da to omoimasu.", english: "I think it is exactly as you say.", register: "formal" },
          { phrase: "確かにその側面もありますが、一方で…", phonetic: "Tashika ni sono sokumen mo arimasu ga, ippou de...", english: "Certainly that aspect exists, but on the other hand...", register: "formal" },
          { phrase: "私個人の意見としては、ハイブリッドが理想的だと考えています。", phonetic: "Watashi kojin no iken to shite wa, haiburiddo ga risouteki da to kangaete imasu.", english: "As my personal view, I believe a hybrid model is ideal.", register: "formal" },
          { phrase: "満員電車の通勤ストレスが減るだけでも、大きなメリットですよね。", phonetic: "Man'in densha no tsuukin sutoresu ga heru dake demo, ookina meritto desu yo ne.", english: "Even just reducing crowded train commute stress is a huge benefit, right?", register: "neutral" },
          { phrase: "偶発的な雑談から生まれるアイデアも捨てがたいですよね。", phonetic: "Guuhatsuteki na zatsudan kara umareru aidea mo sutegatai desu yo ne.", english: "Ideas born from spontaneous casual banter are also hard to give up.", register: "neutral" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "週2日出社、3日リモートの今のバランス、どう感じてますか？", phonetic: "Shuu futsuka shussha, mikka rimooto no ima no baransu, dou kanjitemasu ka?", english: "How do you feel about our current balance of 2 office days and 3 remote days?" },
          { speaker: "山田", line: "正直、全部リモートの方が集中できる気もするんですよね。", phonetic: "Shoujiki, zenbu rimooto no hou ga shuuchuu dekiru ki mo suru n desu yo ne.", english: "Honestly, I kind of feel I can concentrate better being 100% remote." },
          { speaker: "ラフリー", line: "確かに集中作業には最高ですよね。ただ、新メンバーが入った時のオンボーディングは対面の方が圧倒的にスムーズじゃないですか？", phonetic: "Tashika ni shuuchuu sagyou ni wa saikou desu yo ne. Tada, shin-menbaa ga haitta toki no onboodingu wa taimen no hou ga attouteki ni sumuuzu ja nai desu ka?", english: "Certainly it's great for deep focus. However, don't you find onboarding new members is overwhelmingly smoother in person?" },
          { speaker: "山田", line: "あー、それは一理ありますね！雑談のしやすさは対面ならではですね。", phonetic: "Aa, sore wa ichiri arimasu ne! Zatsudan no shiyasusa wa taimen naradewa desu ne.", english: "Ah, there is definitely truth to that! Ease of banter is unique to in-person." }
        ],
        fluencyBoosters: [
          { booster: "一理ありますね (Ichiri arimasu ne)", phonetic: "[it͡ɕiɾi aɾimasɯ ne]", category: "connector", usage: "'You make a fair point / there's some truth to that' — elegant agreement marker.", example: "山田さんのおっしゃることにも一理あります。" },
          { booster: "〜ならでは (~ naradewa)", phonetic: "[naɾadewa]", category: "idiom", usage: "Unique to / distinctive of a specific condition.", example: "京都ならではの風情があります。" }
        ],
        commonMistakes: [
          { mistake: "Saying 'それは間違っています' (That is wrong) in discussion.", correction: "Say: '確かにそうですね。ただ、こういう見方もできるかもしれません。'", explanation: "Directly calling someone wrong is taboo in Japanese discourse; validate first, then pivot with 'Tada'." }
        ],
        culturalPragmaticNote: {
          title: "The Cushion Pivot: 肯定してからの転換",
          textbookVsReality: "Always validate before offering a differing opinion (Yes, and... / Yes, but...). Start with 'Tashika ni...' before stating your alternative."
        },
        rolePlayPrompts: {
          guided: "Express your view on 4-day workweeks, acknowledging the pros and potential overtime cons.",
          semiOpen: "Debate whether artificial intelligence will replace junior translators or empower them.",
          fullyOpen: "Present arguments for and against cashless society adoption in rural Japanese towns."
        },
        followUpQuestions: [
          "議論の場で相手と意見が対立した時、どのように妥協点を見つけますか？"
        ],
        canDoStatements: [
          "I can disagree respectfully using 'Tashika ni... tada' cushion techniques.",
          "I can acknowledge valid opposing points with 'ichiri arimasu ne'.",
          "I can articulate nuanced views on modern workplace policies."
        ]
      },
      {
        id: "ja-t16-ai-future-careers",
        areaId: 8,
        areaTitle: "意見交換と議論",
        title: "AI技術の普及とこれからのキャリア (AI Tools & Career Futures)",
        situation: "生成AIツールが広がる中、クリエイティブ職やエンジニアのスキルがどう変化するか意見を交わす。",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "8-10 mins",
        keyPhrases: [
          { phrase: "AIを使いこなす側と使われる側で格差が広がりそうですね。", phonetic: "AI o tsukaikonasu gawa to tsukawareru gawa de kakusa ga hirogari sou desu ne.", english: "A gap will likely widen between those who harness AI and those displaced by it.", register: "formal" },
          { phrase: "単なる作業ではなく、問題定義の能力が問われますよね。", phonetic: "Tannaru sagyou dewa naku, mondai teigi no nouryoku ga towaremasu yo ne.", english: "Rather than rote tasks, the ability to define problems is what's tested.", register: "formal" },
          { phrase: "共感力や対話力といった人間らしさが再評価されると思います。", phonetic: "Kyoukanryoku ya taiwaryoku to itta ningenrashisa ga saihyouka sareru to omoimasu.", english: "I believe human qualities like empathy and dialogue will be re-evaluated.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "AIの進化スピード、本当に目覚ましいですよね。", phonetic: "AI no shinka supiido, hontou ni mezamashii desu ne.", english: "The evolution speed of AI is truly breathtaking, isn't it?" },
          { speaker: "先輩", line: "プログラミングも文章も一瞬で作れちゃうからね。これからのエンジニアは何を強みにすべきだと思う？", phonetic: "Puroguramingu mo bunshou mo isshun de tsukurechau kara ne. Kore kara no enjinia wa nani o tsuyomi ni subeki da to omou?", english: "It creates code and copy in an instant. What do you think engineers should cultivate as their core strength?" },
          { speaker: "ラフリー", line: "技術の深い理解はもちろんですが、ユーザーの本質的な課題を見つけ出す『問いを立てる力』がより重要になる気がします。", phonetic: "Gijutsu no fukai rikai wa mochiron desu ga, yuuzaa no honshitsuteki na kadai o mitsukedasu 'toi o tateru chikara' ga yori juuyou ni naru ki ga shimasu.", english: "Deep technical understanding is a given, but the ability to frame the right questions and spot core user pain points will become crucial." }
        ],
        fluencyBoosters: [
          { booster: "目覚ましい (Mezamashii)", phonetic: "[mezamaɕii]", category: "formal", usage: "Remarkable, spectacular progress.", example: "科学技術の目覚ましい発展。" },
          { booster: "〜に越したことはない (~ ni koshita koto wa nai)", phonetic: "[ni koɕi̥ta koto wa nai]", category: "idiom", usage: "'Nothing beats / it's best to...'", example: "準備は早いに越したことはない。" }
        ],
        commonMistakes: [
          { mistake: "Saying '私の考えは100%正しい' in high-level discussions.", correction: "Say: '〜という見方もできるのではないかと愚見ながら考えております。'", explanation: "Humility markers enhance professional credibility." }
        ],
        culturalPragmaticNote: {
          title: "The Art of Constructive Wag (和) in Strategy",
          textbookVsReality: "In Japanese brainstorming, building upon someone's statement ('〇〇さんのアイデアに肉付けすると...') wins team buy-in faster than tearing down proposals."
        },
        rolePlayPrompts: {
          guided: "Discuss the pros and cons of using AI voice coaches for language learning.",
          semiOpen: "Propose an internal company AI guideline respecting privacy and copyright.",
          fullyOpen: "Deliver a 3-minute executive summary recommending adopting AI tools in customer support."
        },
        followUpQuestions: [
          "あなたが日常でAIツールを活用して一番業務効率が上がった作業は何ですか？"
        ],
        canDoStatements: [
          "I can articulate abstract concepts like 'toi o tateru chikara' (problem framing).",
          "I can navigate high-level technology discussions in professional Japanese.",
          "I can build constructively upon a colleague's thesis."
        ]
      }
    ]
  },

  // ── AREA 9: Storytelling ──
  {
    id: 9,
    title: "ストーリーテリングと体験談 (Storytelling & Anecdotes)",
    subtitle: "Past events, anecdotes, sequencing, humor",
    icon: "📖",
    topics: [
      {
        id: "ja-t17-travel-mishap-anecdote",
        areaId: 9,
        areaTitle: "ストーリーテリングと体験談",
        title: "旅先での珍道中とハプニング (Travel Mishaps & Humorous Anecdote)",
        situation: "日本の地方旅行中に終電を逃し、親切な地元の人に助けられた心温まるハプニングを語る。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "7-8 mins",
        keyPhrases: [
          { phrase: "それが、とんでもないハプニングがありまして（笑）。", phonetic: "Sore ga, tondemonai hapuningu ga arimashite (warai).", english: "Well, an unbelievable mishap happened (laughs).", register: "casual" },
          { phrase: "時刻表を見間違えて、終電に乗り遅れちゃったんです。", phonetic: "Jikokuhyou o mimachigaete, shuuden ni noriokurechatta n desu.", english: "I misread the timetable and completely missed the last train.", register: "neutral" },
          { phrase: "目の前が真っ暗になりましたよ。", phonetic: "Me no mae ga makkura ni narimashita yo.", english: "My mind went totally blank / felt like total despair.", register: "idiom" },
          { phrase: "そしたら、近くの居酒屋の大将が声をかけてくれて。", phonetic: "Soshitara, chikaku no izakaya no taishou ga koe o kakete kurete.", english: "Then, the master of a nearby izakaya called out to me.", register: "casual" },
          { phrase: "怪我の功名というか、一生の思い出になりました。", phonetic: "Kega no koumyou to iu ka, isshou no omoide ni narimashita.", english: "A blessing in disguise, it became a memory of a lifetime.", register: "neutral" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "先月、青森に一人旅に行った時の話なんですが、聞いてもらえます？", phonetic: "Sengetsu, Aomori ni hitoritabi ni itta toki no hanashi nan desu ga, kiite moraemasu?", english: "Can I tell you what happened when I traveled solo to Aomori last month?" },
          { speaker: "友人", line: "え、何があったの？気になる！", phonetic: "E, nani ga atta no? Ki ni naru!", english: "Eh, what happened? Color me curious!" },
          { speaker: "ラフリー", line: "温泉から戻ったら、田舎だから終電が20時で終わってて！周りは街灯もなくて真っ暗で呆然としてたら…", phonetic: "Onsen kara modottara, inaka dakara shuuden ga nijuuji de owattete! Mawari wa gaitou mo nakute makkura de bouzen to shitetara...", english: "When I came back from the hot spring, because it was countryside, the last train ended at 8 PM! There weren't even streetlights, and as I stood stunned in the dark..." },
          { speaker: "友人", line: "うわ、絶望的じゃん！どうしたのそれから？！", phonetic: "Uwa, zetsubouteki jan! Dou shita no sore kara?!", english: "Whoa, sounds hopeless! What did you do after that?!" },
          { speaker: "ラフリー", line: "軽トラのおじいさんが『どこ行くんだ？乗ってけ！』って駅まで送ってくれたんですよ！人の温かさに感動しました。", phonetic: "Keitora no ojiisan ga 'Doko iku n da? Notteke!' tte eki made okutte kureta n desu yo! Hito no atatakasa ni kandou shimashita.", english: "An elder in a mini-truck said 'Where ya headed? Hop in!' and drove me right over! I was so moved by the warmth of people." }
        ],
        fluencyBoosters: [
          { booster: "呆然とする (Bouzen to suru)", phonetic: "[boːzeɴ to sɯɾɯ]", category: "idiom", usage: "To stand dumbfounded / flabbergasted in shock.", example: "財布を落として呆然と立ち尽くしました。" },
          { booster: "怪我の功名 (Kega no koumyou)", phonetic: "[keɡa no koːmʲoː]", category: "idiom", usage: "A lucky turn resulting from a mistake; a blessing in disguise.", example: "道に迷ったおかげで名店を見つけた、まさに怪我の功名だ。" }
        ],
        commonMistakes: [
          { mistake: "Telling a past anecdote without any aizuchi reactions from the listener.", correction: "Pause and use '〜してたら' so the listener can react with 'えっ！' or 'それで？！'.", explanation: "Japanese storytelling is deeply interactive, not a one-way monologue." }
        ],
        culturalPragmaticNote: {
          title: "The Rhythm of Ochi (オチ - punchline/resolution)",
          textbookVsReality: "Japanese humorous storytelling follows 'Kishoutenketsu' (introduction, development, twist, conclusion/punchline). Wrapping up with an appreciative punchline ('怪我の功名でした') leaves a delightful impression."
        },
        rolePlayPrompts: {
          guided: "Share a story about taking the wrong subway line and finding a surprising bakery.",
          semiOpen: "Tell an anecdote about a funny language misunderstanding with a convenience store clerk.",
          fullyOpen: "Recount the most memorable festival or outdoor experience you had in Japan."
        },
        followUpQuestions: [
          "日本で道に迷った時、どのように解決しましたか？"
        ],
        canDoStatements: [
          "I can structure an engaging narrative using sequencing connectors (soshitara, suruto).",
          "I can create suspense and comic relief using idioms like 'bouzen to suru'.",
          "I can invite listener backchannels naturally."
        ]
      },
      {
        id: "ja-t18-first-day-culture-shock",
        areaId: 9,
        areaTitle: "ストーリーテリングと体験談",
        title: "初来日のカルチャーショック (First Day in Japan Culture Shock)",
        situation: "日本に初めて降り立った日の自動販売機の多さや静かな電車のカルチャーショックを語る。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-8 mins",
        keyPhrases: [
          { phrase: "成田空港に着いた瞬間、何もかもが新鮮でした。", phonetic: "Narita kuukou ni tsuita shunkan, nani mo kamo ga shinsen deshita.", english: "The moment I landed at Narita, everything felt completely fresh.", register: "neutral" },
          { phrase: "山奥の道端にまで自動販売機があって度肝を抜かれました。", phonetic: "Yamaoku no michibata ni made jidou hanbaiki ga atte dogimo o nukaremashita.", english: "There were vending machines even on mountain roads; it blew my mind.", register: "casual" },
          { phrase: "満員電車なのに、誰も声を出さない静けさに圧倒されました。", phonetic: "Man'in densha nano ni, dare mo koe o dasanai shizukesa ni attou saremashita.", english: "Despite packed trains, I was stunned by the silence where nobody uttered a sound.", register: "neutral" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "初めて日本に来た時、一番衝撃を受けたのが電車の静かさでした。", phonetic: "Hajimete Nihon ni kita toki, ichiban shougeki o uketa no ga densha no shizukesa deshita.", english: "When I first came to Japan, the biggest shock was the silence on trains." },
          { speaker: "友人", line: "あー、みんなスマホ見てて物音ひとつしないやつね！", phonetic: "Aa, minna sumaho mitete monooto hitotsu shinai yatsu ne!", english: "Ah, everyone glued to smartphones without making a single sound!" },
          { speaker: "ラフリー", line: "そう！母国だとみんな大声で電話したり音楽流したりしてるから、別世界に来たかと思いましたよ。", phonetic: "Sou! Bokoku da to minna oogoe de denwa shitari ongaku nagashitari shiteru kara, bessekai ni kita ka to omoimashita yo.", english: "Right! Back home people talk loudly on phones and blast tunes, so I thought I was in an alternate dimension." }
        ],
        fluencyBoosters: [
          { booster: "度肝を抜かれる (Dogimo o nukareru)", phonetic: "[doɡʲimo o nɯkaɾeɾɯ]", category: "idiom", usage: "To have the breath knocked out of you / be completely astonished.", example: "東京の夜景の綺麗さに度肝を抜かれました。" }
        ],
        commonMistakes: [
          { mistake: "Saying '日本の文化は変です' (Japanese culture is strange/weird).", correction: "Say: '母国と全く違ってとても興味深い文化ですね' (Very fascinating and different).", explanation: "Calling customs 'hen' can offend; framing differences as 'kyoumibukai' shows intercultural maturity." }
        ],
        culturalPragmaticNote: {
          title: "Public Space Quietness (マナーモード)",
          textbookVsReality: "Phone calls inside Japanese trains are strictly taboo. Phone settings are universally kept on 'Manner Mode' (vibrate)."
        },
        rolePlayPrompts: {
          guided: "Describe your surprise when first encountering washlet bidets in Tokyo.",
          semiOpen: "Contrast tipping customs between your home country and Japan's zero-tip service.",
          fullyOpen: "Deliver a speech comparing trash separation rules between two cultures."
        },
        followUpQuestions: [
          "あなたが日本で一番『これは素晴らしい！』と感じた習慣やルールは何ですか？"
        ],
        canDoStatements: [
          "I can compare cultural norms objectively without negative bias.",
          "I can express surprise using colorful expressions like 'dogimo o nukareta'.",
          "I can narrate personal first impressions effectively."
        ]
      }
    ]
  },

  // ── AREA 10: Culture & current topics ──
  {
    id: 10,
    title: "文化と時事・エチケット (Culture & Current Topics)",
    subtitle: "News, media, traditions, etiquette",
    icon: "🎎",
    topics: [
      {
        id: "ja-t19-hanami-etiquette",
        areaId: 10,
        areaTitle: "文化と時事・エチケット",
        title: "お花見の場所取りとマナー (Hanami Traditions & Etiquette)",
        situation: "上野公園での桜のお花見で、ブルーシートでの場所取りルールやゴミ持ち帰りの作法を話し合う。",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "満開の桜の下でお弁当食べるの、最高ですね！", phonetic: "Mankai no sakura no shita de obentou taberu no, saikou desu ne!", english: "Eating a bento under cherry blossoms in full bloom is the absolute best!", register: "neutral" },
          { phrase: "朝早くから場所取りしてくれた幹事さんに感謝ですね。", phonetic: "Asa hayaku kara bashotori shite kureta kanji-san ni kansha desu ne.", english: "We really owe thanks to the organizers who held the spot early this morning.", register: "formal" },
          { phrase: "桜の枝を折ったり触ったりするのはマナー違反ですよ。", phonetic: "Sakura no eda o ottari sawattari suru no wa manaa ihan desu yo.", english: "Snapping or touching cherry tree branches violates etiquette.", register: "neutral" },
          { phrase: "ゴミは各自で分別して持ち帰りましょう。", phonetic: "Gomi wa kakuji de bunbetsu shite mochikaerimashou.", english: "Let's sort our trash and take it home individually.", register: "formal" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "うわー、上野公園の桜、見事に満開ですね！", phonetic: "Uwaa, Ueno kouen no sakura, migoto ni mankai desu ne!", english: "Whoa, the cherry blossoms in Ueno Park are in stunning full bloom!" },
          { speaker: "友人", line: "ラフリーさん、こっちこっち！いい場所キープできたよ！", phonetic: "Rafurii-san, kocchi kocchi! Ii basho kiipu dekita yo!", english: "Rafly-san, over here! We managed to secure a prime spot!" },
          { speaker: "ラフリー", line: "朝から場所取りありがとうございます！団子とビール買ってきましたよ。", phonetic: "Asa kara bashotori arigatou gozaimasu! Dango to biiru katte kimashita yo.", english: "Thank you for reserving the spot from morning! I brought dango dumplings and beer." },
          { speaker: "友人", line: "気が利くね！まさに『花より団子』だね（笑）。乾杯しよう！", phonetic: "Ki ga kiku ne! Masa ni 'Hana yori dango' da ne (warai). Kanpai shiyou!", english: "So thoughtful! Truly 'dumplings over flowers' (laughs). Let's toast!" }
        ],
        fluencyBoosters: [
          { booster: "花より団子 (Hana yori dango)", phonetic: "[hana joɾi daŋɡo]", category: "idiom", usage: "Proverb meaning preferring practical food/treats over aesthetic blossoms.", example: "綺麗な桜もいいけど、花より団子でお肉食べよう！" },
          { booster: "気が利く (Ki ga kiku)", phonetic: "[kʲi ɡa kʲikɯ]", category: "idiom", usage: "To be considerate, perceptive, and thoughtful of others' needs.", example: "差し入れを持ってくるなんて気が利くね。" }
        ],
        commonMistakes: [
          { mistake: "Shaking a sakura tree to make petals fall for a photo.", correction: "Never touch or shake branches; admiring from below without physical contact is strict etiquette.", explanation: "Cherry trees are delicate and prone to disease when branches are broken." }
        ],
        culturalPragmaticNote: {
          title: "The Art of 'Bashotori' (場所取り)",
          textbookVsReality: "Junior company employees or club members are often assigned to sit on a blue tarp from 6 AM to hold space for the evening party. Bringing warm canned tea to the spot-holder is great etiquette."
        },
        rolePlayPrompts: {
          guided: "Propose organizing a spring hanami picnic with colleagues in Yoyogi Park.",
          semiOpen: "Remind park visitors politely to sort cans and combustibles into separate bags.",
          fullyOpen: "Explain Japanese Hatsumoude (New Year shrine visit) customs to a foreign tourist."
        },
        followUpQuestions: [
          "母国には季節の移り変わりをお祝いするお祭りや伝統行事はありますか？"
        ],
        canDoStatements: [
          "I can use seasonal proverbs like 'Hana yori dango'.",
          "I can express gratitude to organizers with 'ki ga kiku'.",
          "I can explain park trash sorting rules."
        ]
      },
      {
        id: "ja-t20-cashless-society-shift",
        areaId: 10,
        areaTitle: "文化と時事・エチケット",
        title: "キャッシュレス化と日本社会の変化 (Cashless vs. Cash Culture)",
        situation: "PayPayや交通系ICが急速に浸透する一方で、まだ現金が必要な場面について語り合う。",
        difficulty: "Medium",
        cefrLevel: "B1",
        estimatedSpeakingTime: "6-8 mins",
        keyPhrases: [
          { phrase: "最近、財布を持たずにスマホだけで出かけることが増えました。", phonetic: "Saikin, saifu o motazu ni sumaho dake de dekakeru koto ga fuemashita.", english: "Lately, I often head out with just my smartphone, without a wallet.", register: "neutral" },
          { phrase: "PayPay（ペイペイ）で支払ってもいいですか？", phonetic: "PayPay de shihattemo ii desu ka?", english: "Can I pay with PayPay?", register: "neutral" },
          { phrase: "個人経営のラーメン屋さんだと、まだ現金のみの店が多いですね。", phonetic: "Kojin keiei no raamenya-san da to, mada genkin nomi no mise ga ooi desu ne.", english: "At mom-and-pop ramen joints, many still only take cash.", register: "neutral" },
          { phrase: "神社のお賽銭（さいせん）はやっぱり小銭が必要ですね。", phonetic: "Jinja no osaisen wa yappari kozeni ga hitsuyou desu ne.", english: "For shrine offertory boxes, you definitely still need coins.", register: "casual" }
        ],
        dialogue: [
          { speaker: "ラフリー", line: "日本もここ数年で一気にキャッシュレスが進みましたよね。", phonetic: "Nihon mo koko suunen de ikki ni kyasshuresu ga susumimashita yo ne.", english: "Japan has rapidly embraced cashless payments over the past few years, hasn't it?" },
          { speaker: "同僚", line: "本当に！前はどこ行くにも1万円札崩してたのに、今はスマホ決済ばかりです。", phonetic: "Hontou ni! Mae wa doko iku ni mo ichiman'ensatsu kuzushiteta noni, ima wa sumaho kessai bakari desu.", english: "Totally! Used to break 10,000-yen notes everywhere, now it's all mobile phone payments." },
          { speaker: "ラフリー", line: "でも、地方の自販機や古い銭湯は100円玉がないと焦ります（笑）。", phonetic: "Demo, chihou no jihanki ya furui sentou wa hyakuen dama ga nai to aserimasu (warai).", english: "Still, at countryside vending machines or traditional public baths, you panic without a 100-yen coin (laughs)." }
        ],
        fluencyBoosters: [
          { booster: "一気に (Ikki ni)", phonetic: "[ik̚kʲi ni]", category: "connector", usage: "All at once / in one sudden burst.", example: "秋になって一気に涼しくなりました。" },
          { booster: "お賽銭 (Osaisen)", phonetic: "[osaisen]", category: "neutral", usage: "Monetary offering tossed into a shrine/temple prayer box (often 5-yen coins for good connections).", example: "五円玉をお賽銭箱に入れます。" }
        ],
        commonMistakes: [
          { mistake: "Assuming every Japanese restaurant accepts credit cards.", correction: "Always carry at least 2,000–3,000 yen in cash for local izakayas and ticket kiosks.", explanation: "Many cash-only establishments remain throughout Tokyo and regional towns." }
        ],
        culturalPragmaticNote: {
          title: "The 5-Yen Coin (ご縁) Tradition",
          textbookVsReality: "A 5-yen coin (五円) is a homophone for 'good destiny/fortune' (ご縁). Throwing a 5-yen coin at shrines signifies praying for good human connections."
        },
        rolePlayPrompts: {
          guided: "Ask a shop clerk which QR code payments and IC cards they accept.",
          semiOpen: "Explain why you always keep emergency 1,000-yen bills tucked behind your phone case.",
          fullyOpen: "Discuss the digital transformation of Tokyo taxis and convenience stores."
        },
        followUpQuestions: [
          "母国では日常の買い物の何パーセントがキャッシュレス決済ですか？"
        ],
        canDoStatements: [
          "I can navigate payment inquiries (PayPay, Suica, credit card, cash).",
          "I can discuss social trends with 'ikki ni susunda'.",
          "I can explain cultural traditions like shrine osaisen."
        ]
      }
    ]
  },

  // ── AREA 11: Problem-solving & repair ──
  {
    id: 11,
    title: "トラブル対応とコミュニケーション修復 (Problem-Solving & Repair)",
    subtitle: "Misunderstandings, asking to repeat, clarifying, apologizing",
    icon: "🔧",
    topics: [
      {
        id: "ja-t21-clarifying-repeating",
        areaId: 11,
        areaTitle: "トラブル対応とコミュニケーション修復",
        title: "聞き返しと認識合わせのコミュニケーション (Clarifying & Asking to Repeat)",
        situation: "早口で聞き取れなかった指示や待ち合わせ時間を、失礼にならずに確認・復唱する。",
        difficulty: "Easy",
        cefrLevel: "A2",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "恐れ入ります、もう一度お願いできますか？", phonetic: "Osoreirimasu, mou ichido onegai dekimasu ka?", english: "Pardon me, could you repeat that once more?", register: "formal" },
          { phrase: "少し電波が途切れてしまいまして。", phonetic: "Sukoshi denpa ga togirete shimaimashite.", english: "The mobile signal cut out slightly.", register: "formal" },
          { phrase: "念のための確認ですが、明日の14時ということでよろしいでしょうか？", phonetic: "Nen no tame no kakunin desu ga, ashita no juuyonji to iu koto de yoroshii deshou ka?", english: "Just to double-check, is it 2:00 PM tomorrow?", register: "formal" },
          { phrase: "私の理解が合っているか確認させてください。", phonetic: "Watashi no rikai ga atte iru ka kakunin sasete kudasai.", english: "Allow me to confirm if my understanding is correct.", register: "formal" },
          { phrase: "もう少しゆっくりお話しいただけますと幸いです。", phonetic: "Mou sukoshi yukkuri ohanashi itadakemasu to saiwai desu.", english: "I would be grateful if you could speak a bit slower.", register: "formal" }
        ],
        dialogue: [
          { speaker: "上司", line: "じゃあ明日のクライアント面談、渋谷オフィスの第3会議室に13時45分集合でよろしく！", phonetic: "Jaa ashita no kuraianto mendan, Shibuya ofisu no daisankan'gishitsu ni juusanji yonjuugofun shuugou de yoroshiku!", english: "Alright, for tomorrow's client meeting, let's meet at 1:45 PM in Conference Room 3 at the Shibuya office!" },
          { speaker: "ラフリー", line: "課長、恐れ入ります。念のための確認なのですが、集合時間は13時45分で間違いないでしょうか？", phonetic: "Kachou, osoreirimasu. Nen no tame no kakunin na no desu ga, shuugou jikan wa juusanji yonjuugofun de machigai nai deshou ka?", english: "Section Chief, pardon me. Just to double-check, the meeting time is 1:45 PM without mistake, right?" },
          { speaker: "上司", line: "そう、15分前に集まって最終チェックしよう！確認ありがとう。", phonetic: "Sou, juugofun mae ni atsumatte saishuu chekku shiyou! Kakunin arigatou.", english: "Yes, let's gather 15 minutes early for a final check! Thanks for confirming." }
        ],
        fluencyBoosters: [
          { booster: "念のため (Nen no tame)", phonetic: "[neɴ no tame]", category: "connector", usage: "Meaning 'Just in case / to be safe / for double-checking'.", example: "念のためメールでも送っておきます。" },
          { booster: "〜と幸いです (~ to saiwai desu)", phonetic: "[to saiwai desɯ]", category: "formal", usage: "Humble formula: 'I would be fortunate / grateful if...'", example: "ご教示いただけますと幸いです。" }
        ],
        commonMistakes: [
          { mistake: "Saying '何ですか？' (Nan desu ka? / What?) when you didn't hear.", correction: "Say: '恐れ入ります、もう一度お伺いできますか？'", explanation: "'Nan desu ka?' sounds confrontational and abrupt in Japanese." }
        ],
        culturalPragmaticNote: {
          title: "The Humility Cushion: 'Nen no tame'",
          textbookVsReality: "Framing your repeat request as 'nen no tame' (just to be doubly safe) shifts the focus from you not hearing onto professional thoroughness."
        },
        rolePlayPrompts: {
          guided: "Ask a fast-talking train conductor to repeat the transfer platform number.",
          semiOpen: "Clarify a complicated delivery address over the telephone with a courier.",
          fullyOpen: "Handle a Zoom audio glitch gracefully during an executive presentation."
        },
        followUpQuestions: [
          "ネイティブスピーカーの早口を聞き返す時、一番使いやすいフレーズは何ですか？"
        ],
        canDoStatements: [
          "I can ask speakers to repeat politely using 'Osoreirimasu'.",
          "I can confirm details with 'Nen no tame no kakunin desu ga'.",
          "I can request slower speech using '...to saiwai desu'."
        ]
      },
      {
        id: "ja-t22-ryokan-ac-complaint",
        areaId: 11,
        areaTitle: "トラブル対応とコミュニケーション修復",
        title: "設備トラブルの丁寧な相談とクレーム (Polite Complaints & Service Repair)",
        situation: "旅館で部屋のエアコンから異音がし、丁寧かつ角を立てずに部屋の点検や交換を依頼する。",
        difficulty: "Hard",
        cefrLevel: "B2",
        estimatedSpeakingTime: "7-8 mins",
        keyPhrases: [
          { phrase: "夜分遅くに申し訳ございません。302号室のラフリーです。", phonetic: "Yabun osoku ni moushiwake gozaimasen. Sanbyakunigoushitsu no Rafurii desu.", english: "I am terribly sorry to disturb you late at night. This is Rafly from room 302.", register: "formal" },
          { phrase: "大変恐縮なのですが、エアコンからカタカタと異音がしていまして。", phonetic: "Taihen kyoushuku na no desu ga, eakon kara katakata to ion ga shiteimashite.", english: "I am very apologetic to trouble you, but rattling noises are coming from the AC.", register: "formal" },
          { phrase: "一度お部屋をご確認いただくことは可能でしょうか？", phonetic: "Ichido oheya o gokakunin itadaku koto wa kanou deshou ka?", english: "Would it be possible to have someone check the room once?", register: "formal" },
          { phrase: "ご対応いただき、誠に助かりました。", phonetic: "Gotaiou itadaki, makoto ni tasakarimashita.", english: "Thank you truly for taking care of it, it was a huge help.", register: "formal" }
        ],
        dialogue: [
          { speaker: "フロント", line: "はい、フロントでございます。", phonetic: "Hai, furonto de gozaimasu.", english: "Yes, front desk speaking." },
          { speaker: "ラフリー", line: "夜分遅くに恐れ入ります。302号室のラフリーですが、今少しよろしいでしょうか？", phonetic: "Yabun osoku ni osoreirimasu. Sanbyakunigoushitsu no Rafurii desu ga, ima sukoshi yoroshii deshou ka?", english: "Pardon me for calling so late at night. This is Rafly in 302, do you have a brief moment?" },
          { speaker: "フロント", line: "はい、ラフリー様。何かございましたでしょうか？", phonetic: "Hai, Rafurii-sama. Nani ka gozaimashita deshou ka?", english: "Yes, Rafly-sama. Is something the matter?" },
          { speaker: "ラフリー", line: "実は、エアコンから大きなカタカタ音が鳴り止まなくて、眠れそうにないんです。一度見ていただくことはできますか？", phonetic: "Jitsu wa, eakon kara ookina katakata-on ga nariyamanakute, nemuresou ni nai n desu. Ichido mite itadaku koto wa dekimasu ka?", english: "Actually, a loud rattling noise won't stop from the air conditioner, and it seems difficult to sleep. Could you take a look?" },
          { speaker: "フロント", line: "大変ご不便をおかけして申し訳ございません！ただいま係の者がすぐ伺います！", phonetic: "Taihen gofuben o okake shite moushiwake gozaimasen! Tadaima kakari no mono ga sugu ukagaimasu!", english: "We are deeply sorry for the inconvenience! A staff member will come up right away!" }
        ],
        fluencyBoosters: [
          { booster: "夜分遅くに (Yabun osoku ni)", phonetic: "[jabuɴ osokɯ ni]", category: "formal", usage: "Mandatory polite preface when calling someone after hours.", example: "夜分遅くにお電話して恐縮です。" },
          { booster: "助かりました (Tasakarimashita)", phonetic: "[tasakaɾimaɕi̥ta]", category: "formal", usage: "Warm appreciation meaning 'That really saved me / helped me out a lot.'", example: "迅速にご対応いただき助かりました。" }
        ],
        commonMistakes: [
          { mistake: "Yelling angrily 'エアコンが壊れてるぞ！今すぐ直せ！' (The AC is broken, fix it now!).", correction: "Frame the request with '夜分恐縮ですが...見ていただくことは可能ですか？'.", explanation: "Japanese hospitality responds with maximum speed and upgrades when guests show courteous calm." }
        ],
        culturalPragmaticNote: {
          title: "The Japanese Complaint Formula: クレームの枕詞",
          textbookVsReality: "Always start complaints with self-effacing cushions ('夜分遅くに恐縮です', 'ご多忙のところ恐れ入ります'). In Japan, polite guests receive extraordinary omotenashi (hospitality) and instant complimentary room upgrades."
        },
        rolePlayPrompts: {
          guided: "Call the front desk about hot water not coming out in the shower.",
          semiOpen: "Report an incorrect billing charge on your checkout folio calmly.",
          fullyOpen: "Negotiate an alternative room when an adjoining room has loud late-night music."
        },
        followUpQuestions: [
          "旅先でトラブルが起きた時、冷静に対処するために一番大切にしていることは何ですか？"
        ],
        canDoStatements: [
          "I can frame complaints politely with 'yabun osoku ni' and 'taihen kyoushuku desu ga'.",
          "I can request maintenance inspections without anger.",
          "I can express sincere gratitude with 'gotaiou itadaki tasakarimashita'."
        ]
      }
    ]
  }
];

export const JAPANESE_FULL_CURRICULUM = JAPANESE_CURRICULUM_AREAS;
