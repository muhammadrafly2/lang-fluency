import { CurriculumArea, CurriculumTopic } from "./types";

export const ENGLISH_CURRICULUM_AREAS: CurriculumArea[] = [
  // ── AREA 1: Daily life & small talk ──
  {
    id: 1,
    title: "Daily Life & Small Talk",
    subtitle: "Greetings, weather, weekend plans, hobbies",
    icon: "☕",
    topics: [
      {
        id: "en-t1-cafe-greeting",
        areaId: 1,
        areaTitle: "Daily Life & Small Talk",
        title: "Spontaneous Café Greeting & Weekend Catch-Up",
        situation: "Bumping into a friendly acquaintance in line at a busy neighborhood coffee shop on a Monday morning.",
        difficulty: "Easy",
        cefrLevel: "B1",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "coffee-twist",
        keyPhrases: [
          { phrase: "Fancy running into you here!", phonetic: "[ˈfænsi ˈrʌnɪŋ ˈɪntuː juː hɪər]", english: "What a nice surprise to meet you!", register: "casual" },
          { phrase: "How's your week shaping up?", phonetic: "[haʊz jɔːr wiːk ˈʃeɪpɪŋ ʌp]", english: "How does your week look so far?", register: "casual" },
          { phrase: "Can't complain, keeping busy.", phonetic: "[kænt kəmˈpleɪn ˈkiːpɪŋ ˈbɪzi]", english: "Everything is fine, I'm occupied.", register: "casual" },
          { phrase: "Did you get up to much over the weekend?", phonetic: "[dɪd juː ɡɛt ʌp tuː mʌtʃ...]", english: "Did you do anything special?", register: "casual" },
          { phrase: "Pretty low-key, honestly.", phonetic: "[ˈprɪti loʊ kiː ˈɑːnɪstli]", english: "Very relaxed and quiet.", register: "casual" },
          { phrase: "I was just grabbing a quick bite.", phonetic: "[aɪ wəz dʒʌst ˈɡræbɪŋ ə kwɪk baɪt]", english: "I was only getting some quick food.", register: "neutral" },
          { phrase: "Long time no see!", phonetic: "[lɔːŋ taɪm noʊ siː]", english: "Haven't seen you in a while!", register: "casual" },
          { phrase: "I'll let you get on with your day.", phonetic: "[aɪl lɛt juː ɡɛt ɑːn wɪð...]", english: "Polite conversational exit formula.", register: "neutral" },
          { phrase: "Give me a shout whenever you're free.", phonetic: "[ɡɪv miː ə ʃaʊt...]", english: "Contact me when you have time.", register: "casual" },
          { phrase: "Tell me about it!", phonetic: "[tɛl miː əˈbaʊt ɪt]", english: "I totally agree with that struggle.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Alex", line: "Hey, Liam! Fancy running into you here on a Monday morning.", english: "Hey, Liam! What a surprise to run into you here on a Monday." },
          { speaker: "Liam", line: "Oh, hey Alex! Yeah, honestly, I desperately needed an extra shot of espresso to wake up.", english: "Oh, hey Alex! Yeah, honestly, I desperately needed an espresso shot to wake up.", fillers: ["honestly", "desperately"] },
          { speaker: "Alex", line: "Tell me about it. How was your weekend? Did you get up to much?", english: "Tell me about it. How was your weekend? Did you do anything fun?" },
          { speaker: "Liam", line: "Well, pretty low-key, actually. We just did some hiking on Saturday, then binge-watched a series.", english: "Well, pretty low-key, actually. We did a hike on Saturday, then binged a show.", fillers: ["Well", "actually"] },
          { speaker: "Alex", line: "Nice! Sounds like the ideal way to recharge.", english: "Nice! Sounds like the perfect way to recharge." },
          { speaker: "Liam", line: "Yeah, totally. What about you? Did you manage to catch the match?", english: "Yeah, totally. What about you? Did you catch the match?" },
          { speaker: "Alex", line: "Nah, unfortunately I got dragged into family chores all Sunday.", english: "Nah, unfortunately I got stuck doing family chores all Sunday.", fillers: ["Nah", "unfortunately"] },
          { speaker: "Liam", line: "Ah, bummer! Still, hope you got at least a bit of downtime.", english: "Ah, bummer! Still, hope you got some rest." },
          { speaker: "Alex", line: "A tiny bit, yeah. Anyway, look at that queue moving. What are you ordering?", english: "A tiny bit, yeah. Anyway, look at that queue moving. What are you getting?", fillers: ["Anyway"] },
          { speaker: "Liam", line: "Just an oat flat white to go. I've got a standup call in ten minutes.", english: "Just an oat flat white to go. I have a meeting in ten minutes." },
          { speaker: "Alex", line: "Oof, tight timing! Well, I'll let you get on with your day then.", english: "Oof, tight timing! Well, I'll let you get on with your day then.", fillers: ["Well", "then"] },
          { speaker: "Liam", line: "Cheers, Alex! Give me a shout later in the week for lunch.", english: "Thanks, Alex! Message me later this week for lunch." }
        ],
        fluencyBoosters: [
          { booster: "Tell me about it!", category: "idiom", usage: "Signals instant shared empathy when someone describes tiredness or stress.", example: "Monday mornings are brutal. — Tell me about it!" },
          { booster: "pretty low-key", category: "discourse marker", usage: "Downplays an event to mean relaxed, chill, and unpretentious.", example: "My birthday was pretty low-key, just dinner at home." },
          { booster: "Honestly...", category: "filler", usage: "Buys formulation time while projecting candid authenticity.", example: "Honestly, I haven't even looked at the schedule yet." },
          { booster: "I'll let you get on with your day", category: "connector", usage: "The gold standard British/Commonwealth polite exit formula.", example: "Anyway, I'll let you get on with your day. Talk soon!" },
          { booster: "Give me a shout", category: "idiom", usage: "Friendly alternative to 'contact me' or 'send me an email'.", example: "Give me a shout whenever you land in town." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I am wanting to drink coffee.'", correction: "Say: 'I'm grabbing a coffee' or 'I could really use a coffee.'", explanation: "'Want' is a stative verb in English and sounds unnatural in progressive form for immediate cravings." },
          { mistake: "Learner answers 'How are you?' with a 3-minute medical history.", correction: "Say: 'Good, thanks! Yourself?' or 'Can't complain, keeping busy.'", explanation: "In English small talk, 'How are you?' is a greeting ritual, not an invitation for clinical diagnosis." },
          { mistake: "Learner exits conversation by abruptly stating: 'I have to go now. Bye.'", correction: "Say: 'Anyway, I should let you run' or 'I'll let you get on with your day.'", explanation: "Abrupt exits feel cold; cushion the departure around respecting the other person's schedule." }
        ],
        culturalPragmaticNote: {
          title: "The Reciprocal Greeting Contract",
          textbookVsReality: "Textbooks teach answering 'I am fine, thank you, and you?' which sounds robotic and wooden.",
          nativeRule: "Native speakers use brisk two-word handoffs: 'Good, you?', 'Not bad, yourself?', or 'Doing well!' followed immediately by a light observation on weather or coffee."
        },
        rolePlayPrompts: {
          guided: "You bump into a coworker in line. Greet them, ask how their weekend was, and mention one low-key activity you did.",
          semiOpen: "Your coworker looks visibly exhausted on Monday morning. Empathize with them using 'Tell me about it', share a quick anecdote, and ask what they're ordering.",
          fullyOpen: "You bump into someone you haven't seen in 6 months. Exchange updates, navigate an awkward silence, and execute a polished departure within 90 seconds."
        },
        followUpQuestions: [
          "Did you end up trying that new brunch spot downtown over the weekend?",
          "Are your Mondays usually this hectic with early morning meetings?",
          "Do you usually stick with the same coffee order, or do you like experimenting?",
          "Have you got any fun plans lined up for the coming weekend already?",
          "How do you usually like to unwind after a crazy busy week?"
        ],
        canDoStatements: [
          "I can initiate casual small talk with an acquaintance without scripted hesitation.",
          "I can respond to 'How was your weekend?' using natural reducers like 'pretty low-key'.",
          "I can gracefully conclude a casual conversation without sounding abrupt or rude."
        ]
      },
      {
        id: "en-t2-weather-hobbies",
        areaId: 1,
        areaTitle: "Daily Life & Small Talk",
        title: "Weather Surprises & Weekend Hobbies",
        situation: "Waiting for an elevator while chatting with a neighbor about sudden freak weather and weekend cycling plans.",
        difficulty: "Easy",
        cefrLevel: "B1",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "Can you believe this weather?", phonetic: "[kæn juː bɪˈliːv ðɪs ˈwɛðər]", english: "Expresses shared amazement at weather.", register: "casual" },
          { phrase: "It was pouring down earlier.", phonetic: "[ɪt wəz ˈpɔːrɪŋ daʊn...]", english: "Raining heavily.", register: "casual" },
          { phrase: "Caught me completely off guard.", phonetic: "[kɔːt miː kəmˈpliːtli ɔːf ɡɑːrd]", english: "Surprised me unprepared.", register: "neutral" },
          { phrase: "I'm really into gravel biking.", phonetic: "[aɪm ˈrɪəli ˈɪntuː...]", english: "I am passionate about this hobby.", register: "casual" },
          { phrase: "How long have you been doing that?", phonetic: "[haʊ lɔːŋ hæv juː biːn...]", english: "Asking duration of a hobby.", register: "neutral" },
          { phrase: "It cleared up just in time.", phonetic: "[ɪt klɪərd ʌp dʒʌst ɪn taɪm]", english: "Weather improved right when needed.", register: "neutral" },
          { phrase: "Fingers crossed for sunny skies.", phonetic: "[ˈfɪŋɡərz krɔːst fɔːr...]", english: "Hoping for good weather.", register: "casual" },
          { phrase: "It takes my mind off work.", phonetic: "[ɪt teɪks maɪ maɪnd ɔːf wɜːrk]", english: "Helps me de-stress.", register: "neutral" },
          { phrase: "You should tag along sometime!", phonetic: "[juː ʃʊd tæɡ əˈlɔːŋ...]", english: "Join me in the future.", register: "casual" },
          { phrase: "I wouldn't hold my breath.", phonetic: "[aɪ ˈwʊdənt hoʊld maɪ brɛθ]", english: "Don't count on it happening.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Maya", line: "Can you believe this weather? It was blazing hot yesterday, and now it's pouring down!", english: "Can you believe this weather? Hot yesterday, pouring today!" },
          { speaker: "Dan", line: "I know, right? It caught me completely off guard without a coat.", english: "I know, right? Totally caught me off guard without a coat.", fillers: ["I know, right?"] },
          { speaker: "Maya", line: "Same here. I was actually hoping to get in a decent bike ride this afternoon.", english: "Same here. I was hoping to get a decent bike ride in this afternoon." },
          { speaker: "Dan", line: "Oh really? Do you cycle around the river loop?", english: "Oh really? Do you ride around the river loop?" },
          { speaker: "Maya", line: "Yeah, mostly gravel trails. I got into it during lockdown, and now I'm hooked.", english: "Yeah, mostly gravel trails. Started in lockdown, now hooked." },
          { speaker: "Dan", line: "That's awesome. I hear it's an incredible workout.", english: "That's awesome. I hear it's a great workout." },
          { speaker: "Maya", line: "Honestly, more than fitness, it just takes my mind off work completely.", english: "Honestly, more than fitness, it clears my mind from work.", fillers: ["Honestly"] },
          { speaker: "Dan", line: "I bet. The forecast said it might clear up by 4 PM, though.", english: "I bet. The forecast said it might clear up by 4 PM, though." },
          { speaker: "Maya", line: "Well, fingers crossed! Though with our meteorologists, I wouldn't hold my breath.", english: "Well, fingers crossed! Though with our forecast, I wouldn't hold my breath.", fillers: ["Well"] },
          { speaker: "Dan", line: "Haha, so true. Well, here's our floor. Good luck with the ride!", english: "Haha, so true. Well, here's our floor. Good luck with the ride!" },
          { speaker: "Maya", line: "Thanks Dan, have a good one!", english: "Thanks Dan, have a good one!" }
        ],
        fluencyBoosters: [
          { booster: "I know, right?", category: "discourse marker", usage: "Universal fast validation in casual conversations.", example: "This transit line is so noisy. — I know, right?" },
          { booster: "caught me off guard", category: "idiom", usage: "Expresses being taken by surprise by events, weather, or news.", example: "His sudden question caught me completely off guard." },
          { booster: "I wouldn't hold my breath", category: "idiom", usage: "Wry, sarcastic idiom meaning 'don't expect that to happen'.", example: "They promised a tax rebate, but I wouldn't hold my breath." },
          { booster: "I'm hooked", category: "idiom", usage: "Describes becoming deeply enthusiastic about a hobby or TV show.", example: "I watched the pilot episode, and now I'm totally hooked." },
          { booster: "Have a good one!", category: "filler", usage: "Universal friendly American/Canadian farewell for all contexts.", example: "Thanks for the help, have a good one!" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Today the weather is very rain.'", correction: "Say: 'It's pouring down' or 'It's raining cats and dogs.'", explanation: "'Rain' is a noun/verb, not an adjective. Use natural verbal phrases like 'pouring down'." },
          { mistake: "Learner says: 'I like very much cycling.'", correction: "Say: 'I'm really into cycling' or 'I really like cycling.'", explanation: "In English, adverbs of degree like 'very much' don't sit between verb and object." },
          { mistake: "Learner says: 'We hope the sky is blue.'", correction: "Say: 'Fingers crossed for sunny skies!'", explanation: "'Fingers crossed' communicates warm casual optimism naturally." }
        ],
        culturalPragmaticNote: {
          title: "Weather as a Social Icebreaker",
          textbookVsReality: "Textbooks treat weather talk as literal meteorological inquiry.",
          nativeRule: "Weather talk is a safe social handshake establishing mutual friendliness without touching personal or political topics."
        },
        rolePlayPrompts: {
          guided: "Step into an elevator with a neighbor. Comment on the sudden rain and share your hobby plans.",
          semiOpen: "Your friend mentions they took up a surprising new weekend hobby. React enthusiastically, ask how they got into it, and compare it with your own hobby.",
          fullyOpen: "The weather just ruined your outdoor group meetup. Improvise a pivot to an alternative indoor activity with your partner."
        },
        followUpQuestions: [
          "Do you prefer outdoor activities in the summer, or do you love cozy winter hobbies?",
          "How do you usually stay motivated to exercise when the weather is miserable outside?",
          "Is there a new hobby you've been wanting to try out recently?",
          "Do you trust weather forecast apps, or do you just look out the window?",
          "What's your go-to rainy day activity when you can't go outside?"
        ],
        canDoStatements: [
          "I can comment on sudden weather changes using natural spoken idioms.",
          "I can describe a personal hobby and explain how I got into it.",
          "I can validate a conversation partner using phrases like 'I know, right?' and 'I bet'."
        ]
      }
    ]
  },

  // ── AREA 2: Food & dining ──
  {
    id: 2,
    title: "Food & Dining",
    subtitle: "Ordering, dietary needs, paying, compliments/complaints",
    icon: "🍽️",
    topics: [
      {
        id: "en-t3-dietary-ordering",
        areaId: 2,
        areaTitle: "Food & Dining",
        title: "Dietary Restrictions & Custom Plate Modification",
        situation: "Ordering at a trendy bistro while navigating a severe nut allergy and requesting gluten-free swaps without sounding high-maintenance.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        scenarioId: "coffee-twist",
        keyPhrases: [
          { phrase: "Could I make a slight substitution?", phonetic: "[kʊd aɪ meɪk ə slaɪt...]", english: "Polite request to alter dish.", register: "formal" },
          { phrase: "I have a severe tree nut allergy.", phonetic: "[aɪ hæv ə sɪˈvɪər triː nʌt ˈælərdʒi]", english: "Explicit medical caution.", register: "neutral" },
          { phrase: "Is this prepared in a shared fryer?", phonetic: "[ɪz ðɪs prɪˈpeərd ɪn ə ʃeərd...]", english: "Cross-contamination inquiry.", register: "formal" },
          { phrase: "Could we get the dressing on the side?", phonetic: "[kʊd wiː ɡɛt ðə ˈdrɛsɪŋ ɑːn ðə saɪd]", english: "Separate sauce serving.", register: "neutral" },
          { phrase: "What do you recommend between the two?", phonetic: "[wʌt duː juː ˌrɛkəˈmɛnd...]", english: "Asking server's favorite.", register: "neutral" },
          { phrase: "Does the sauce have any dairy in it?", phonetic: "[dʌz ðə sɔːs hæv ˈɛni ˈdɛəri...]", english: "Ingredient check.", register: "neutral" },
          { phrase: "We'll definitely take you up on that.", phonetic: "[wiːl ˈdɛfɪnɪtli teɪk juː ʌp...]", english: "Accepting a recommendation.", register: "casual" },
          { phrase: "That sounds right up my alley.", phonetic: "[ðæt saʊndz raɪt ʌp maɪ ˈæli]", english: "Fits my exact personal taste.", register: "casual" },
          { phrase: "Could you check with the chef just to be safe?", phonetic: "[kʊd juː tʃɛk wɪð ðə ʃɛf...]", english: "Safety verification.", register: "formal" },
          { phrase: "No rush at all, take your time.", phonetic: "[noʊ rʌʃ ət ɔːl...]", english: "Patience reassurance.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Server", line: "Hi folks! Welcome to The Botanist. Can I start you off with something to drink?", english: "Hi! Welcome. Can I start you with drinks?" },
          { speaker: "Customer", line: "Hi! Yes, could we just get sparkling water for the table, please? And we have a quick question about the menu.", english: "Hi! Sparkling water for the table please, and a quick question on the menu." },
          { speaker: "Server", line: "Of course, shoot! What are you eyeing?", english: "Of course! What are you looking at?" },
          { speaker: "Customer", line: "I was looking at the grilled sea bass, but I have a severe tree nut allergy. Does the pesto contain walnuts?", english: "I'm looking at the sea bass, but have a severe tree nut allergy. Does the pesto have walnuts?" },
          { speaker: "Server", line: "It actually uses pine nuts and crushed almonds, so thank goodness you mentioned it!", english: "It uses pine nuts and almonds, so good thing you mentioned it!" },
          { speaker: "Customer", line: "Phew, good catch! Would it be possible to swap the pesto for the citrus herb reduction instead?", english: "Phew, good catch! Can we swap pesto for the citrus herb reduction instead?" },
          { speaker: "Server", line: "100%, our chef can easily do that. And I'll flag it on the kitchen ticket as an allergy alert.", english: "100%, our chef can do that. I'll flag it as an allergy alert." },
          { speaker: "Customer", line: "That's fantastic, thank you so much. Also, could we get the dressing on the side for the house salad?", english: "Fantastic, thank you. Also, dressing on the side for the salad?" },
          { speaker: "Server", line: "You got it. Anything else for your table?", english: "You got it. Anything else?" },
          { speaker: "Customer", line: "That's it for now. We really appreciate your help with the allergy check!", english: "That's it for now. Really appreciate the allergy help!" },
          { speaker: "Server", line: "My absolute pleasure. I'll get those waters right out for you.", english: "My pleasure. I'll bring the water right out." }
        ],
        fluencyBoosters: [
          { booster: "right up my alley", category: "idiom", usage: "Describes something that fits your specific taste or expertise.", example: "Spicy Thai food is right up my alley." },
          { booster: "shoot!", category: "discourse marker", usage: "Informal, friendly invitation for someone to ask their question.", example: "I have a quick question. — Go ahead, shoot!" },
          { booster: "on the side", category: "connector", usage: "Requests sauce or condiments served in a separate ramekin.", example: "Can I get the balsamic vinaigrette on the side?" },
          { booster: "good catch!", category: "idiom", usage: "Praises someone for spotting an error or risky detail.", example: "You noticed the missing semicolon, good catch!" },
          { booster: "take you up on that", category: "idiom", usage: "Accepts an offer, invitation, or recommendation enthusiastically.", example: "If you're offering dessert, I'll take you up on that." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I am allergic for nuts.'", correction: "Say: 'I'm allergic TO nuts' or 'I have a nut allergy.'", explanation: "The preposition pairing for 'allergic' in English is strictly 'to', not 'for'." },
          { mistake: "Learner says: 'Change the sauce to another sauce.'", correction: "Say: 'Could I substitute / swap the sauce for the citrus reduction?'", explanation: "Use the conditional 'Could I swap X for Y' to sound polite and culinary." },
          { mistake: "Learner says: 'Is there nut inside?'", correction: "Say: 'Does this contain nuts?' or 'Are there any nuts in this dish?'", explanation: "'Nut' must be pluralized ('nuts') when referring to allergens." }
        ],
        culturalPragmaticNote: {
          title: "Allergy Culture in Modern Dining",
          textbookVsReality: "Textbooks rarely emphasize the distinction between preference ('I don't eat dairy') and medical allergy ('I have an allergy').",
          nativeRule: "Always state 'allergy' clearly so kitchens take sanitation protocols seriously and clean grill surfaces."
        },
        rolePlayPrompts: {
          guided: "Order a steak at a restaurant, specify medium-rare, and ask for fries to be swapped for steamed vegetables.",
          semiOpen: "You have celiac disease (gluten allergy). Inquire about breadcrumbs in the meatballs and request a gluten-free pasta substitute.",
          fullyOpen: "Your server brings a plate garnished with almonds despite your earlier allergy warning. Point out the issue firmly yet politely."
        },
        followUpQuestions: [
          "Do you find dining out with food restrictions stressful when traveling abroad?",
          "What is your absolute favorite comfort food to order at a restaurant?",
          "Do you prefer sharing multiple small plates or having your own main entrée?",
          "What would you do if a dish was completely different from what you expected?",
          "How do you feel about tipping customs in the US versus Europe or Asia?"
        ],
        canDoStatements: [
          "I can clearly articulate a food allergy or dietary requirement to waitstaff.",
          "I can politely negotiate an ingredient substitution using 'Would it be possible to swap...'.",
          "I can verify whether a sauce contains specific ingredients without offending the server."
        ]
      },
      {
        id: "en-t4-bill-compliment",
        areaId: 2,
        areaTitle: "Food & Dining",
        title: "Disputed Bill & Complimenting the Chef",
        situation: "Reviewing the dinner bill with friends, noticing an extra bottle of wine charged by mistake, and splitting the check.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "Could we get the bill, please?", phonetic: "[kʊd wiː ɡɛt ðə bɪl...]", english: "Requesting check.", register: "neutral" },
          { phrase: "I think there might be a slight mix-up here.", phonetic: "[aɪ θɪŋk ðɛər maɪt biː ə slaɪt ˈmɪks ʌp]", english: "Gentle billing dispute formula.", register: "formal" },
          { phrase: "We didn't happen to order this second bottle.", phonetic: "[wiː ˈdɪdənt ˈhæpən tuː ˈɔːrdər...]", english: "Polite denial of charge.", register: "formal" },
          { phrase: "Could we split this four ways evenly?", phonetic: "[kʊd wiː splɪt ðɪs fɔːr weɪz...]", english: "Dividing total bill equally.", register: "neutral" },
          { phrase: "Put it all on this card.", phonetic: "[pʊt ɪt ɔːl ɑːn ðɪs kɑːrd]", english: "Single payer gesture.", register: "casual" },
          { phrase: "My compliments to the chef!", phonetic: "[maɪ ˈkɑːmplɪmənts tuː ðə ʃɛf]", english: "Praising the kitchen.", register: "formal" },
          { phrase: "The risotto was cooked to perfection.", phonetic: "[...kʊkt tuː pərˈfɛkʃən]", english: "High culinary praise.", register: "neutral" },
          { phrase: "Keep the change.", phonetic: "[kiːp ðə tʃeɪndʒ]", english: "Leaving cash tip.", register: "casual" },
          { phrase: "Thanks for sorting that out so quickly.", phonetic: "[θæŋks fɔːr ˈsɔːrtɪŋ ðæt aʊt...]", english: "Gratitude for error resolution.", register: "neutral" },
          { phrase: "It's on me tonight.", phonetic: "[ɪts ɑːn miː təˈnaɪt]", english: "I am paying for everyone.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Customer", line: "Excuse me, when you have a spare second, could we grab the check, please?", english: "Excuse me, could we get the check when you have a moment?" },
          { speaker: "Server", line: "Right away! Here you go, folks. Take your time, no rush.", english: "Right away! Here you go. Take your time." },
          { speaker: "Customer", line: "Thanks! ...Um, sorry, I think there might be a slight mix-up on item number four.", english: "Thanks! ...Um, sorry, I think there's a slight mix-up on item four.", fillers: ["Um", "sorry"] },
          { speaker: "Server", line: "Oh, really? Let me take a look. What seems to be the issue?", english: "Oh really? Let me check. What seems to be the issue?" },
          { speaker: "Customer", line: "It looks like we were charged for two bottles of Pinot Noir, but we only had the one.", english: "Looks like we were billed for two bottles of Pinot Noir, but only had one." },
          { speaker: "Server", line: "Oh goodness, you're totally right! Table six ordered the other one. I'm so sorry about that.", english: "Oh goodness, you're right! Table six ordered that. So sorry!" },
          { speaker: "Customer", line: "No worries at all, easily done! We loved everything else, by the way. My compliments to the chef on the risotto.", english: "No worries at all, easily done! We loved everything else. Compliments to the chef on the risotto.", fillers: ["by the way"] },
          { speaker: "Server", line: "I'll be sure to pass that on to Chef Marco! Let me void that extra bottle and reprint your receipt.", english: "I'll pass that on to Chef Marco! Let me void that bottle and reprint the bill." },
          { speaker: "Customer", line: "Much appreciated. And could we split the remaining balance onto two cards?", english: "Much appreciated. Can we split the balance on two cards?" },
          { speaker: "Server", line: "Absolutely, happy to do that. I'll be back in just a flash.", english: "Absolutely, happy to. Back in a flash." }
        ],
        fluencyBoosters: [
          { booster: "a slight mix-up", category: "discourse marker", usage: "Euphemism for an error or mistake that avoids pointing fingers or blaming.", example: "There seems to be a slight mix-up with our reservation." },
          { booster: "cooked to perfection", category: "idiom", usage: "Polite, elegant praise for meat, pasta, or pastry texture.", example: "The salmon was flaky and cooked to perfection." },
          { booster: "easily done", category: "discourse marker", usage: "Gracious response reassuring someone that their mistake is completely understandable.", example: "Sorry I called the wrong extension. — No problem, easily done!" },
          { booster: "in a flash", category: "idiom", usage: "Means very quickly / immediately.", example: "I'll grab your dessert menus in a flash." },
          { booster: "It's on me", category: "idiom", usage: "Generous idiom declaring that you will cover the entire bill.", example: "Put your wallets away, tonight is on me." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'You made an error on my money!'", correction: "Say: 'I think there might be a slight mix-up on the bill.'", explanation: "Direct accusations sound confrontational. Native speakers frame billing errors as collective mix-ups." },
          { mistake: "Learner says: 'Divide the bill for each human.'", correction: "Say: 'Could we split the bill evenly?' or 'Can we pay separately?'", explanation: "Use 'split the bill' or 'separate checks'." },
          { mistake: "Learner says: 'Give my congrats to the cooker.'", correction: "Say: 'My compliments to the chef!'", explanation: "A professional cook in a restaurant is called a 'chef'. A 'cooker' is a kitchen stove appliance!" }
        ],
        culturalPragmaticNote: {
          title: "Handling Billing Errors Without Drama",
          textbookVsReality: "Textbooks often provide dramatic complaint scripts: 'I demand to speak to the manager.'",
          nativeRule: "In real life, 99% of billing errors are innocent table slips. A friendly, smiling 'I think there's a tiny mix-up' resolves the issue in 30 seconds."
        },
        rolePlayPrompts: {
          guided: "Ask for the bill, notice an extra side order of fries was charged, and ask to pay by credit card.",
          semiOpen: "You are treating a client to lunch. You want to pay the bill quietly before they see it. Approach the server away from the table.",
          fullyOpen: "Your party of six wants to pay individually with six different cards while the restaurant is slammed on a Saturday night. Negotiate smoothly with the server."
        },
        followUpQuestions: [
          "Do you prefer when restaurants bring the card terminal to your table?",
          "How do you handle splitting bills when one person ordered far more expensive items?",
          "Have you ever had a memorable meal where you sent compliments to the kitchen?",
          "What is your tipping philosophy when service was good versus mediocre?",
          "Do you prefer eating at busy bustling diners or intimate quiet bistros?"
        ],
        canDoStatements: [
          "I can request the bill and ask to split the total among multiple cards.",
          "I can diplomatically point out a billing mistake using 'a slight mix-up'.",
          "I can deliver a genuine compliment to restaurant staff about food quality."
        ]
      }
    ]
  },

  // ── AREA 3: Travel & transport ──
  {
    id: 3,
    title: "Travel & Transport",
    subtitle: "Directions, tickets, hotels, emergencies",
    icon: "🚆",
    topics: [
      {
        id: "en-t5-missed-train",
        areaId: 3,
        areaTitle: "Travel & Transport",
        title: "Missed Train Connection & Urgent Rerouting",
        situation: "Your incoming commuter rail was delayed by 25 minutes, causing you to miss your high-speed cross-country connection at a busy hub station.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-8 mins",
        scenarioId: "shinkansen-trouble",
        keyPhrases: [
          { phrase: "My inbound train was delayed.", phonetic: "[maɪ ˈɪnbaʊnd treɪn wəz dɪˈleɪd]", english: "Initial arrival train was late.", register: "formal" },
          { phrase: "Is my ticket valid on the next departure?", phonetic: "[ɪz maɪ ˈtɪkɪt ˈvælɪd ɑːn ðə nɛkst...]", english: "Ticket transfer check.", register: "formal" },
          { phrase: "Do I need a seat reservation transfer?", phonetic: "[duː aɪ niːd ə siːt ˌrɛzərˈveɪʃən...]", english: "Seat allocation inquiry.", register: "neutral" },
          { phrase: "Which platform is that leaving from?", phonetic: "[wɪtʃ ˈplætfɔːrm ɪz ðæt ˈliːvɪŋ...]", english: "Platform number check.", register: "neutral" },
          { phrase: "I have a tight connection to catch.", phonetic: "[aɪ hæv ə taɪt kəˈnɛkʃən...]", english: "Expressing time urgency.", register: "neutral" },
          { phrase: "Could you stamp my ticket for delay verification?", phonetic: "[...stæmp maɪ ˈtɪkɪt fɔːr dɪˈleɪ...]", english: "Official delay proof.", register: "formal" },
          { phrase: "Is there any direct alternative?", phonetic: "[ɪz ðɛər ˈɛni dəˈrɛkt ɔːlˈtɜːrnətɪv]", english: "Asking for faster route.", register: "neutral" },
          { phrase: "I'm running against the clock here.", phonetic: "[aɪm ˈrʌnɪŋ əˈɡɛnst ðə klɑːk]", english: "Under severe time crunch.", register: "casual" },
          { phrase: "Much obliged for your help.", phonetic: "[mʌtʃ əˈblaɪdʒd fɔːr...]", english: "Polite formal gratitude.", register: "formal" },
          { phrase: "Stand clear of the closing doors.", phonetic: "[stænd klɪər əv ðə...]", english: "Station announcement standard.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Passenger", line: "Hi there, sorry to trouble you! My inbound service from Oxford was delayed by 20 minutes, and I just missed the 10:15 to Edinburgh.", english: "Hi, sorry to trouble you! My Oxford train was 20 mins late, missed the 10:15 to Edinburgh." },
          { speaker: "Station Agent", line: "Ah, no worries, let me see your booking reference. Yeah, that incoming service had signal failures.", english: "No worries, let me see your booking. Yeah, that incoming train had signal issues.", fillers: ["Yeah"] },
          { speaker: "Passenger", line: "Is my advance ticket valid for the next high-speed departure, or do I need to buy a new one?", english: "Is my ticket valid on the next train, or do I need to buy a new one?" },
          { speaker: "Station Agent", line: "Because the delay was our fault, your ticket is fully honored on the 10:45 service from platform 4.", english: "Because the delay was on us, your ticket is fully valid on the 10:45 from platform 4." },
          { speaker: "Passenger", line: "Phew, what a relief! What about my seat reservation?", english: "Phew, what a relief! What about my seat reservation?", fillers: ["Phew"] },
          { speaker: "Station Agent", line: "Your previous allocated seat is gone, but coaches C and D have unreserved open seating. Just grab any free seat.", english: "Original seat is gone, but coaches C and D have unreserved seating. Take any free seat." },
          { speaker: "Passenger", line: "Brilliant. Could you quickly endorse or stamp my ticket so the conductor knows?", english: "Brilliant. Could you stamp my ticket so the conductor knows?" },
          { speaker: "Station Agent", line: "Here you go, all endorsed with our station stamp. Platform 4 is down the escalators on your right.", english: "Here you go, stamped. Platform 4 is down the escalators on your right." },
          { speaker: "Passenger", line: "You're a lifesaver, thanks so much!", english: "You're a lifesaver, thanks so much!" }
        ],
        fluencyBoosters: [
          { booster: "against the clock", category: "idiom", usage: "Describes doing something under severe time pressure.", example: "We're working against the clock to catch this flight." },
          { booster: "You're a lifesaver!", category: "idiom", usage: "Heartfelt informal praise when someone gets you out of a jam.", example: "Thanks for finding my passport, you're a lifesaver!" },
          { booster: "What a relief!", category: "discourse marker", usage: "Vocalized exhale when bad news turns out to be manageable.", example: "The test was rescheduled? What a relief!" },
          { booster: "stand clear", category: "formal", usage: "Official transit imperative instructing people to step back.", example: "Please stand clear of the platform edge." },
          { booster: "easily done", category: "filler", usage: "Reassures that an error or missed connection is normal.", example: "Don't sweat missing the turn, it's easily done." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'The train lost me.'", correction: "Say: 'I missed the train' or 'The train left without me.'", explanation: "In English, the passenger 'misses' the transit vehicle; the train does not lose the person." },
          { mistake: "Learner says: 'Is this ticket working?'", correction: "Say: 'Is this ticket valid on the next departure?'", explanation: "Tickets are 'valid', 'honored', or 'expired', not 'working'." },
          { mistake: "Learner says: 'Give me another place to sit.'", correction: "Say: 'Could you reassign my seat reservation?'", explanation: "Use 'seat reservation' rather than 'place to sit'." }
        ],
        culturalPragmaticNote: {
          title: "Delay Repay & Passenger Rights",
          textbookVsReality: "Textbooks rarely teach asking for ticket endorsements when delays occur.",
          nativeRule: "Always ask the customer service booth to stamp or endorse your ticket with the delay code; otherwise, ticket conductors on the next train might accuse you of fare evasion."
        },
        rolePlayPrompts: {
          guided: "Approach a station counter, explain your train was delayed, and ask which platform the next connection leaves from.",
          semiOpen: "Your flight was cancelled due to weather. Speak to the airline gate agent and negotiate a hotel voucher and rebooking.",
          fullyOpen: "You lost your paper ticket and wallet while on the subway. Explain your situation to transit police with zero documentation."
        },
        followUpQuestions: [
          "Do you prefer high-speed trains or flying for journeys under 4 hours?",
          "What is the worst travel delay or transit mishap you've ever experienced?",
          "How do you usually kill time when you have a 3-hour layover at an airport?",
          "Do you pack light with just carry-on luggage, or do you always check bags?",
          "What apps do you rely on most when navigating an unfamiliar foreign subway system?"
        ],
        canDoStatements: [
          "I can clearly explain a missed transit connection due to an inbound delay.",
          "I can ask whether my ticket remains valid on subsequent departures.",
          "I can locate alternative platforms and unreserved seating coaches confidently."
        ]
      },
      {
        id: "en-t6-hotel-checkin-issue",
        areaId: 3,
        areaTitle: "Travel & Transport",
        title: "Hotel Check-In Friction & Room Upgrade",
        situation: "Arriving at a boutique hotel after midnight, discovering your reserved king room was assigned as twin singles facing a noisy air-conditioning unit.",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "7-8 mins",
        keyPhrases: [
          { phrase: "I have a reservation under the name of...", phonetic: "[aɪ hæv ə ˌrɛzərˈveɪʃən ˈʌndər...]", english: "Standard check-in opener.", register: "formal" },
          { phrase: "This seems quite different from what was booked.", phonetic: "[ðɪs siːmz kwaɪt ˈdɪfərənt...]", english: "Diplomatic objection opener.", register: "formal" },
          { phrase: "The room looks out directly onto noisy AC compressors.", phonetic: "[...lʊks aʊt dəˈrɛktli ˈɑːntuː...]", english: "Describing ambient noise problem.", register: "neutral" },
          { phrase: "Is there any chance of moving to a quieter floor?", phonetic: "[ɪz ðɛər ˈɛni tʃæns əv ˈmuːvɪŋ...]", english: "Requesting room change.", register: "formal" },
          { phrase: "I specifically requested a high floor away from elevators.", phonetic: "[aɪ spəˈsɪfɪkli rɪˈkwɛstɪd...]", english: "Citing booking notes.", register: "formal" },
          { phrase: "I'd be willing to pay the difference for an upgrade.", phonetic: "[aɪd biː ˈwɪlɪŋ tuː peɪ ðə ˈdɪfərəns...]", english: "Offering commercial compromise.", register: "formal" },
          { phrase: "We're completely fully booked tonight.", phonetic: "[wiːr kəmˈpliːtli ˈfʊli bʊkt...]", english: "Hotel occupancy status.", register: "neutral" },
          { phrase: "Let me see what I can shuffle around.", phonetic: "[lɛt miː siː wʌt aɪ kæn ˈʃʌfəl əˈraʊnd]", english: "Staff finding a solution.", register: "casual" },
          { phrase: "We'd like to comp your breakfast as an apology.", phonetic: "[...kɑːmp jɔːr ˈbrɛkfəst...]", english: "Providing free perk.", register: "formal" },
          { phrase: "That's very generous of you, thank you.", phonetic: "[ðæts ˈvɛri ˈdʒɛnərəs əv juː...]", english: "Gracious acceptance.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Front Desk", line: "Good evening, sir! Welcome to The Grandview. Checking in?", english: "Good evening! Welcome. Checking in?" },
          { speaker: "Guest", line: "Yes, good evening. I have a booking under Rafly for four nights.", english: "Yes, good evening. Booking under Rafly for four nights." },
          { speaker: "Front Desk", line: "Ah yes, Mr. Rafly. We have you in room 204, standard twin beds.", english: "Ah yes. We have you in 204, standard twin beds." },
          { speaker: "Guest", line: "Wait, sorry to pause you there, but my confirmation email clearly lists a Deluxe King on a high floor.", english: "Wait, sorry to pause you, but my email confirms a Deluxe King on a high floor." },
          { speaker: "Front Desk", line: "Let me check our system notes... Ah, our third-party booking portal pushed this through as a run-of-house assignment.", english: "Let me check... The booking engine marked this as run-of-house." },
          { speaker: "Guest", line: "I see. Well, room 204 faces the rear alley with the kitchen exhaust, and I'm a very light sleeper.", english: "I see. Room 204 faces the alley exhaust, and I'm a very light sleeper." },
          { speaker: "Front Desk", line: "I completely understand your concern. Let me see what I can shuffle around in the system.", english: "I understand. Let me see what I can shuffle around in the system.", fillers: ["completely understand"] },
          { speaker: "Guest", line: "I'd be more than happy to pay a reasonable difference if an executive suite is available.", english: "I'd gladly pay a difference if an executive suite is open." },
          { speaker: "Front Desk", line: "You know what? Because of the booking mix-up, I'm going to upgrade you complimentary to 712—corner king with skyline views.", english: "You know what? Because of the mix-up, I'll comp an upgrade to 712—corner king with skyline views.", fillers: ["You know what?"] },
          { speaker: "Guest", line: "That is exceedingly kind of you! Thank you so much for sorting that out.", english: "That is exceedingly kind! Thank you so much for sorting that." },
          { speaker: "Front Desk", line: "Here are your keycards. Elevator is right behind you. Sleep well!", english: "Here are your keys. Elevators are behind you. Sleep well!" }
        ],
        fluencyBoosters: [
          { booster: "shuffle around", category: "idiom", usage: "Describes reorganizing schedules, rooms, or bookings flexibly.", example: "Let me see if I can shuffle some meetings around for you." },
          { booster: "comp (verb)", category: "discourse marker", usage: "Short for complimentary (giving something for free).", example: "The manager comped our drinks because of the wait." },
          { booster: "You know what?", category: "filler", usage: "Signals a sudden generous or constructive idea in conversation.", example: "You know what? Let's just take an Uber instead." },
          { booster: "run-of-house", category: "formal", usage: "Hospitality industry term meaning 'whatever room is open upon arrival'.", example: "Discount booking rates are usually run-of-house." },
          { booster: "light sleeper", category: "idiom", usage: "Someone who wakes up easily at the slightest noise.", example: "I need a quiet room because I'm such a light sleeper." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'This room is ugly and bad, change it!'", correction: "Say: 'This seems quite different from what was booked, could we look at other options?'", explanation: "Aggressive complaints trigger defensive reactions from hotel staff. Diplomatic phrasing yields upgrades." },
          { mistake: "Learner says: 'I sleep very easy with noise.'", correction: "Say: 'I am a very light sleeper.'", explanation: "'Light sleeper' is the standard English idiomatic descriptor." },
          { mistake: "Learner says: 'Give me free room.'", correction: "Say: 'Could you offer a complimentary upgrade due to the mix-up?'", explanation: "Use 'complimentary' or 'comp' rather than demanding 'free'." }
        ],
        culturalPragmaticNote: {
          title: "The Etiquette of Hotel Upgrades",
          textbookVsReality: "Textbooks show either passive acceptance or furious anger.",
          nativeRule: "Front desk staff hold immense discretion over room inventory. Politeness combined with offering to 'pay the difference' almost always triggers them waiving the fee and giving you the upgrade for free."
        },
        rolePlayPrompts: {
          guided: "Check into a hotel, discover the air conditioning is rattling loudly, and request a room transfer.",
          semiOpen: "You arrive at your hotel at 11 AM, but check-in isn't until 3 PM. Politely ask to leave your bags and ask if an early check-in is possible.",
          fullyOpen: "The hotel mistakenly overbooked and has zero rooms left for you tonight. Negotiate alternative accommodations, taxi reimbursement, and future credits."
        },
        followUpQuestions: [
          "What is the most important amenity you look for when choosing a hotel?",
          "Do you prefer large international hotel chains or cozy boutique bed & breakfasts?",
          "Have you ever had an incredible room upgrade surprise while traveling?",
          "How do you usually handle noisy neighbors in hotel corridors?",
          "Do you always unpack your suitcase immediately, or do you live out of your luggage?"
        ],
        canDoStatements: [
          "I can explain room discrepancies at hotel check-in without sounding confrontational.",
          "I can negotiate a room relocation or complimentary upgrade using diplomatic phrasing.",
          "I can articulate specific preferences like floor level, bed size, and ambient noise tolerance."
        ]
      }
    ]
  },

  // ── AREA 4: Shopping & services ──
  {
    id: 4,
    title: "Shopping & Services",
    subtitle: "Prices, bargaining, returns, bank, post office",
    icon: "🛍️",
    topics: [
      {
        id: "en-t7-return-without-receipt",
        areaId: 4,
        areaTitle: "Shopping & Services",
        title: "Returning a Damaged Garment Without a Receipt",
        situation: "Explaining at a retail customer service counter that a wool sweater had an unraveling seam right out of the box, requesting store credit without a paper receipt.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "I bought this here just earlier this week.", phonetic: "[aɪ bɔːt ðɪs hɪər dʒʌst ˈɜːrliər...]", english: "Establishing recent purchase.", register: "neutral" },
          { phrase: "The seam started unraveling after one wear.", phonetic: "[ðə siːm ˈstɑːrtɪd ʌnˈrævəlɪŋ...]", english: "Describing manufacturing flaw.", register: "neutral" },
          { phrase: "Unfortunately, I seem to have misplaced the receipt.", phonetic: "[ʌnˈfɔːrtʃənətli aɪ siːm tuː hæv ˌmɪsˈpleɪst...]", english: "Polite admission of lost receipt.", register: "formal" },
          { phrase: "Could you look it up under my loyalty phone number?", phonetic: "[kʊd juː lʊk ɪt ʌp ˈʌndər...]", english: "Digital transaction lookup.", register: "neutral" },
          { phrase: "Would store credit or an even exchange be possible?", phonetic: "[wʊd stɔːr ˈkrɛdɪt ɔːr ən ˈiːvən ɪksˈtʃeɪndʒ...]", english: "Constructive compromise proposal.", register: "formal" },
          { phrase: "It's clearly a manufacturing defect.", phonetic: "[ɪts ˈklɪərli ə ˌmænjʊˈfæktʃərɪŋ diːfɛkt]", english: "Clarifying non-user damage.", register: "formal" },
          { phrase: "I have the digital bank transaction on my phone.", phonetic: "[aɪ hæv ðə ˈdɪdʒɪtəl bæŋk...]", english: "Providing payment proof.", register: "neutral" },
          { phrase: "We can issue a gift card for the current sale price.", phonetic: "[wiː kæn ˈɪʃuː ə ɡɪft kɑːrd...]", english: "Store refund policy standard.", register: "formal" },
          { phrase: "That works perfectly fine for me.", phonetic: "[ðæt wɜːrks ˈpɜːrfɪktli faɪn...]", english: "Accepting resolution.", register: "casual" },
          { phrase: "Thank you for being so accommodating.", phonetic: "[θæŋk juː fɔːr ˈbiːɪŋ soʊ əˈkɑːmədeɪtɪŋ]", english: "Polite customer gratitude.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Associate", line: "Hi there! How can I help you today at customer service?", english: "Hi! How can I help you at customer service?" },
          { speaker: "Customer", line: "Hi! I was hoping you could help me with this wool sweater. I bought it on Tuesday, but the side seam is already unraveling.", english: "Hi! Hoping you could help with this sweater. Bought it Tuesday, but the side seam is unraveling." },
          { speaker: "Associate", line: "Oh yikes, let me see. Yeah, that definitely looks like a factory stitch failure. Do you have your paper receipt?", english: "Oh yikes, let me check. That's a factory stitch flaw. Got your paper receipt?", fillers: ["Oh yikes", "Yeah"] },
          { speaker: "Customer", line: "Unfortunately, I seem to have misplaced the paper slip. But I have my digital banking statement showing the exact charge from Tuesday.", english: "Unfortunately I misplaced the paper receipt. But I have my bank statement showing the charge." },
          { speaker: "Associate", line: "Even better! Are you a member of our rewards program?", english: "Even better! Are you in our rewards club?" },
          { speaker: "Customer", line: "Yes, it should be registered under 078-452-991.", english: "Yes, under 078-452-991." },
          { speaker: "Associate", line: "Found it right here! Rafly, correct? We can either swap this for a fresh one on the rack or issue store credit.", english: "Found it! Rafly, right? We can swap for a fresh one or give store credit." },
          { speaker: "Customer", line: "A straight swap for the exact same size in navy would be ideal, if you have one in stock.", english: "A straight swap for the same size in navy would be ideal, if in stock." },
          { speaker: "Associate", line: "Let me grab one from the back for you real quick.", english: "Let me grab one from the back real quick." },
          { speaker: "Customer", line: "Wonderful, thank you for being so accommodating!", english: "Wonderful, thank you for being so accommodating!" }
        ],
        fluencyBoosters: [
          { booster: "straight swap", category: "idiom", usage: "An even 1-to-1 exchange of an item without extra payment.", example: "They offered a straight swap for the newer model." },
          { booster: "accommodating", category: "formal", usage: "High-register adjective praising staff who are helpful and flexible.", example: "The airline staff were remarkably accommodating." },
          { booster: "Oh yikes", category: "filler", usage: "Spoken empathetic reaction acknowledging someone's bad luck.", example: "The roof is leaking? Oh yikes!" },
          { booster: "misplaced", category: "discourse marker", usage: "Diplomatic polite word for lost ('I misplaced my keys').", example: "I misplaced my parking ticket." },
          { booster: "real quick", category: "casual", usage: "Colloquial adverbial phrase meaning 'in just a moment'.", example: "Let me check the stockroom real quick." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I lose the paper, give my cash back.'", correction: "Say: 'I seem to have misplaced the receipt, would store credit be possible?'", explanation: "Demanding cash without a receipt sounds aggressive. Proposing store credit shows commercial empathy." },
          { mistake: "Learner says: 'This shirt is broken.'", correction: "Say: 'The seam is unraveling' or 'The zipper is defective.'", explanation: "Clothes are not 'broken' in English; use specific defects like 'torn', 'unraveling', or 'defective'." },
          { mistake: "Learner says: 'Change it with identical.'", correction: "Say: 'Could we do an even exchange for the same item?'", explanation: "The retail term is 'an even exchange' or 'a straight swap'." }
        ],
        culturalPragmaticNote: {
          title: "Retail Return Etiquette",
          textbookVsReality: "Textbooks show strict refusal: 'No receipt, no return.'",
          nativeRule: "Modern retailers can almost always look up purchases through loyalty telephone numbers or credit card chips. Asking calmly 'Can you look it up under my card?' resolves 90% of lost receipt issues."
        },
        rolePlayPrompts: {
          guided: "Bring an unworn pair of shoes back to a store, explain the size is too tight, and ask for a half-size larger.",
          semiOpen: "You bought a blender that stopped working after two days. The store policy says no electrical returns without original packaging. Negotiate a replacement.",
          fullyOpen: "You bought a coat on final sale, but realized it has a tear inside the sleeve lining. Convince the store manager to override the final sale policy."
        },
        followUpQuestions: [
          "Do you prefer buying clothes online or trying them on in physical fitting rooms?",
          "How do you feel about stores that charge restocking fees for returns?",
          "Have you ever successfully negotiated a discount on a display item with minor damage?",
          "Do you keep paper receipts in a drawer or rely entirely on digital banking apps?",
          "What is your favorite local store known for exceptional customer service?"
        ],
        canDoStatements: [
          "I can explain a product flaw or defect using specific vocabulary like 'unraveling seam'.",
          "I can negotiate a return or exchange without a paper receipt using purchase history lookups.",
          "I can thank retail staff courteously using formulas like 'thank you for being so accommodating'."
        ]
      },
      {
        id: "en-t8-post-office-shipping",
        areaId: 4,
        areaTitle: "Shopping & Services",
        title: "International Parcel Shipping & Customs Declaration",
        situation: "Sending a delicate gift box abroad at a post office counter, choosing shipping speeds, and completing customs declaration values.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "I'd like to send this package to Tokyo.", phonetic: "[aɪd laɪk tuː sɛnd ðɪs ˈpækɪdʒ...]", english: "Post office shipping opener.", register: "neutral" },
          { phrase: "What's the difference in transit times?", phonetic: "[wʌts ðə ˈdɪfərəns ɪn ˈtrænzɪt taɪmz]", english: "Comparing shipping speeds.", register: "neutral" },
          { phrase: "Does the express option include tracking?", phonetic: "[dʌz ðə ɪkˈsprɛs ˈɑːpʃən ɪnˈkluːd ˈtrækɪŋ]", english: "Package tracking inquiry.", register: "neutral" },
          { phrase: "Could you mark it as fragile, please?", phonetic: "[kʊd juː mɑːrk ɪt æz ˈfrædʒəl...]", english: "Handling instruction.", register: "neutral" },
          { phrase: "How should I list handmade ceramic mugs on customs?", phonetic: "[haʊ ʃʊd aɪ lɪst... ɑːn ˈkʌstəmz]", english: "Customs declaration advice.", register: "formal" },
          { phrase: "Is additional insurance advisable for this value?", phonetic: "[ɪz əˈdɪʃənəl ɪnˈʃʊərəns ədˈvaɪzəbəl...]", english: "Loss protection check.", register: "formal" },
          { phrase: "Sign right here on the digital pad.", phonetic: "[saɪn raɪt hɪər ɑːn ðə...]", english: "Postal clerk instruction.", register: "neutral" },
          { phrase: "Are there any hazardous or prohibited goods inside?", phonetic: "[ɑːr ðɛər ˈɛni ˈhæzərdəs...]", english: "Mandatory security check.", register: "formal" },
          { phrase: "Just standard keepsakes and candy.", phonetic: "[dʒʌst ˈstændərd ˈkiːpseɪks...]", english: "Customs contents description.", register: "casual" },
          { phrase: "Here is your tracking number and receipt.", phonetic: "[hɪər ɪz jɔːr ˈtrækɪŋ ˈnʌmbər...]", english: "Postage completion.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Clerk", line: "Next in line, please! Pop your parcel right onto the scale.", english: "Next in line! Put your parcel on the scale." },
          { speaker: "Sender", line: "Good morning! I'd like to ship this package over to Japan, please.", english: "Good morning! I want to ship this package to Japan." },
          { speaker: "Clerk", line: "Alright, she's sitting at 1.4 kilos. Do you want standard tracked airmail or priority express?", english: "Alright, it's 1.4 kg. Do you want standard airmail or priority express?", fillers: ["Alright"] },
          { speaker: "Sender", line: "What's the difference in delivery timeframe and cost?", english: "What's the difference in delivery time and price?" },
          { speaker: "Clerk", line: "Express is guaranteed in 3 to 5 business days for $42; standard takes about 10 days for $24.", english: "Express is 3-5 days for $42; standard takes 10 days for $24." },
          { speaker: "Sender", line: "Standard tracked is totally fine, it's not super urgent. Does it include end-to-end tracking?", english: "Standard is fine, not super urgent. Does it include end-to-end tracking?" },
          { speaker: "Clerk", line: "Yes, you can track it online door-to-door. Now for the customs slip: any lithium batteries, aerosols, or perfumes?", english: "Yes, trackable door-to-door. For customs: any batteries, aerosols, or perfume?" },
          { speaker: "Sender", line: "Nope, strictly books and two handmade mugs. Could we slap a 'Fragile' sticker on both sides?", english: "Nope, just books and two handmade mugs. Can we put a 'Fragile' sticker on both sides?", fillers: ["Nope"] },
          { speaker: "Clerk", line: "Already ahead of you! Just declare the total value here and sign on the pin pad.", english: "Already on it! Declare value here and sign on the pin pad." },
          { speaker: "Sender", line: "Done! Here's my contactless card.", english: "Done! Here's my card." },
          { speaker: "Clerk", line: "All set! Here's your tracking slip. Have a wonderful day!", english: "All set! Here's your tracking receipt. Have a great day!" }
        ],
        fluencyBoosters: [
          { booster: "door-to-door", category: "idiom", usage: "Complete transit tracking from pickup address to delivery destination.", example: "Express couriers offer door-to-door tracking." },
          { booster: "pop (verb)", category: "casual", usage: "Friendly British/Commonwealth word meaning 'to place or put quickly'.", example: "Pop your parcel onto the scale." },
          { booster: "ahead of you", category: "idiom", usage: "Phrase meaning 'I have already anticipated and completed that action'.", example: "You need the invoices? Already ahead of you, they're in your inbox." },
          { booster: "end-to-end", category: "connector", usage: "Continuous monitoring through every step of a supply chain.", example: "We provide end-to-end encryption and delivery." },
          { booster: "slap on", category: "casual", usage: "Colloquial term for attaching a sticker or label quickly.", example: "Slap a priority sticker on that box." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I want to transport this box.'", correction: "Say: 'I'd like to ship / send this package.'", explanation: "'Transport' refers to bulk logistics or freight; use 'ship' or 'send' at a post office." },
          { mistake: "Learner says: 'How many days will it fly?'", correction: "Say: 'What is the estimated delivery timeframe / transit time?'", explanation: "Use 'transit time' or 'estimated delivery window'." },
          { mistake: "Learner says: 'Is this broken easily?'", correction: "Say: 'Could you mark this as fragile, please?'", explanation: "'Fragile' is the universal international postal designation." }
        ],
        culturalPragmaticNote: {
          title: "Customs Declarations and Undervaluation",
          textbookVsReality: "Textbooks rarely mention the dilemma of declaring gift values.",
          nativeRule: "Always categorize packages accurately as 'Gift' or 'Merchandise'. Declaring gifts under $100 usually spares the recipient from paying steep import VAT duties upon collection."
        },
        rolePlayPrompts: {
          guided: "Ship a letter via registered certified mail with return receipt requested.",
          semiOpen: "You are sending homemade food items abroad. Inquire with the postal clerk whether dried baked goods are permitted through international agricultural customs.",
          fullyOpen: "Your package containing important legal contracts arrived opened and damaged abroad. File an official international postal claim."
        },
        followUpQuestions: [
          "Do you still send physical handwritten postcards or letters to friends when traveling?",
          "Have you ever had a package get lost or held up at customs for weeks?",
          "Do you prefer national postal services or private courier companies like DHL and FedEx?",
          "How do you pack fragile souvenirs to survive international flight luggage handling?",
          "What is the most memorable gift package you've ever received in the mail?"
        ],
        canDoStatements: [
          "I can compare shipping speeds, pricing tiers, and delivery timeframes at a post office.",
          "I can accurately describe package contents for international customs clearance.",
          "I can request special handling precautions like 'Fragile' and verify tracking numbers."
        ]
      }
    ]
  },

  // ── AREA 5: Work & professional ──
  {
    id: 5,
    title: "Work & Professional",
    subtitle: "Introductions, meetings, emails-to-speech, interviews",
    icon: "💼",
    topics: [
      {
        id: "en-t9-agile-blocker-sync",
        areaId: 5,
        areaTitle: "Work & Professional",
        title: "Agile Sprint Blocker Sync & Technical Trade-offs",
        situation: "Participating in a daily 15-minute cross-functional agile standup, articulating asynchronous API schema blockers, and proposing a timeline compromise.",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "8-9 mins",
        scenarioId: "tech-standup",
        keyPhrases: [
          { phrase: "Yesterday I completed the token streaming refactor.", phonetic: "[...kəmˈpliːtɪd ðə ˈtoʊkən ˈstriːmɪŋ riːˈfæktər]", english: "Yesterday's accomplishment summary.", register: "formal" },
          { phrase: "Today I'm blocked on the auth service endpoint latency.", phonetic: "[...blɑːkt ɑːn ðə ɔːθ ˈsɜːrvɪs ˈɛndpɔɪnt...]", english: "Articulating technical dependency.", register: "formal" },
          { phrase: "Let's take this offline after standup.", phonetic: "[lɛts teɪk ðɪs ɔːfˈlaɪn ˈæftər...]", english: "Preventing standup derailment.", register: "formal" },
          { phrase: "We need to agree on the schema contract by 2 PM.", phonetic: "[wiː niːd tuː əˈɡriː ɑːn ðə ˈskiːmə ˈkɑːntrækt...]", english: "Setting hard delivery deadline.", register: "formal" },
          { phrase: "To avoid bottlenecking tomorrow's release candidate...", phonetic: "[tuː əˈvɔɪd ˈbɑːtəlˌnɛkɪŋ...]", english: "Project risk framing.", register: "formal" },
          { phrase: "Can we pair up for fifteen minutes on this?", phonetic: "[kæn wiː pɛər ʌp fɔːr...]", english: "Requesting collaborative pair programming.", register: "casual" },
          { phrase: "That introduces too much architectural overhead.", phonetic: "[ðæt ˌɪntrəˈduːsɪz tuː mʌtʃ ˌɑːrkɪˈtɛktʃərəl...]", english: "Constructive architectural pushback.", register: "formal" },
          { phrase: "Who is carrying the pager for this deployment?", phonetic: "[huː ɪz ˈkæriɪŋ ðə ˈpeɪdʒər...]", english: "On-call responsibility check.", register: "casual" },
          { phrase: "I'll ping you on Slack with the PR link.", phonetic: "[aɪl pɪŋ juː ɑːn slæk...]", english: "Async follow-up commitment.", register: "casual" },
          { phrase: "Does anyone have hard blockers before we break?", phonetic: "[dʌz ˈɛniwʌn hæv hɑːrd ˈblɑːkərz...]", english: "Scrum master wrap-up prompt.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Scrum Master", line: "Morning team! Let's do our quick 10-minute standup. Rafly, you're up first.", english: "Morning team! Let's do our 10-min standup. Rafly, you're first." },
          { speaker: "Rafly", line: "Morning everyone. So yesterday I wrapped up the token streaming refactor and pushed the PR for review.", english: "Morning everyone. Yesterday I wrapped up token streaming and pushed the PR." },
          { speaker: "Scrum Master", line: "Awesome progress. What's on deck for today?", english: "Awesome. What's on deck for today?" },
          { speaker: "Rafly", line: "Today I'm implementing the payment gateway callback, but I'm currently blocked on auth service latency.", english: "Today I'm doing payment callbacks, but I'm blocked on auth latency." },
          { speaker: "Tech Lead", line: "Is that the 504 gateway timeout on staging?", english: "Is that the 504 gateway timeout on staging?" },
          { speaker: "Rafly", line: "Exactly. The endpoint is spiking to 1200 milliseconds under load, which breaks our client retry budget.", english: "Exactly. Spiking to 1200ms under load, breaking our client retry budget." },
          { speaker: "Tech Lead", line: "Got it. Let's take that offline right after standup and pair on a caching layer.", english: "Got it. Let's take that offline right after standup and pair on caching.", fillers: ["Got it"] },
          { speaker: "Rafly", line: "Perfect. As long as we lock the schema contract by 2 PM, we'll avoid bottlenecking tomorrow's release.", english: "Perfect. If we lock schema by 2 PM, we won't bottleneck tomorrow's release." },
          { speaker: "Scrum Master", line: "Great alignment. Liam, over to you!", english: "Great alignment. Liam, your turn!" }
        ],
        fluencyBoosters: [
          { booster: "take this offline", category: "idiom", usage: "Corporate standard for moving a detailed discussion outside of a group meeting.", example: "Good discussion, let's take the pricing details offline." },
          { booster: "on deck", category: "idiom", usage: "Coming up next in the schedule or backlog.", example: "What features are on deck for sprint 14?" },
          { booster: "bottleneck (verb)", category: "connector", usage: "To cause a delay or restriction in progress for downstream teams.", example: "Waiting for legal approval is bottlenecking our launch." },
          { booster: "pair up", category: "casual", usage: "To collaborate directly with another engineer or colleague.", example: "Let's pair up after lunch to debug the container crash." },
          { booster: "ping (verb)", category: "discourse marker", usage: "To send a quick instant message or email notification.", example: "Ping me when the staging build turns green." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I have a problem with Liam's team.'", correction: "Say: 'I am currently blocked on the auth service endpoint latency.'", explanation: "Never frame engineering dependencies as personal conflict. Frame blockers around services, endpoints, and timelines." },
          { mistake: "Learner says: 'Yesterday I have finished.'", correction: "Say: 'Yesterday I finished / wrapped up the refactor.'", explanation: "Past time markers ('yesterday') require Simple Past, never Present Perfect." },
          { mistake: "Learner says: 'We speak about this later together.'", correction: "Say: 'Let's take this offline after standup.'", explanation: "'Take this offline' is the universally accepted professional idiom." }
        ],
        culturalPragmaticNote: {
          title: "Standup Brevity & Psychological Safety",
          textbookVsReality: "Textbooks show workers giving long, detailed 5-minute technical summaries.",
          nativeRule: "Agile standups demand extreme brevity: 90 seconds maximum per person. State what you did, what you are doing, and your blockers with zero filler."
        },
        rolePlayPrompts: {
          guided: "Deliver a 60-second agile standup update covering yesterday's PR, today's database migration, and a cloud credential blocker.",
          semiOpen: "A colleague is rambling about minor code styling during standup. Politely intervene and suggest taking it offline to respect everyone's time.",
          fullyOpen: "Your team lead wants to cut unit tests to hit an arbitrary marketing deadline. Push back assertively with technical debt arguments."
        },
        followUpQuestions: [
          "Do you find daily 15-minute standups valuable, or do they feel like unnecessary meetings?",
          "How does your team handle communication across multiple global time zones?",
          "What is the best way to handle disagreements during architectural code reviews?",
          "Do you prefer async documentation in Notion/Confluence or live verbal syncs?",
          "How do you protect your focus time against constant Slack and email interruptions?"
        ],
        canDoStatements: [
          "I can deliver a concise 3-part agile status update in under 90 seconds.",
          "I can articulate an asynchronous technical blocker without sounding defensive or accusatory.",
          "I can propose taking deep technical discussions offline to respect meeting boundaries."
        ]
      },
      {
        id: "en-t10-salary-negotiation",
        areaId: 5,
        areaTitle: "Work & Professional",
        title: "Executive Salary Negotiation & Counter-Offer",
        situation: "Negotiating total compensation with an executive recruiter after receiving an initial offer for a Senior Staff Engineering position.",
        difficulty: "Master",
        cefrLevel: "C2",
        estimatedSpeakingTime: "9-10 mins",
        scenarioId: "salary-negotiation",
        keyPhrases: [
          { phrase: "Thank you for the competitive offer.", phonetic: "[θæŋk juː fɔːr ðə kəmˈpɛtətɪv ˈɔːfər]", english: "Gracious opening anchor.", register: "formal" },
          { phrase: "I'm thrilled about the strategic scope of the role.", phonetic: "[aɪm θrɪld əˈbaʊt ðə strəˈtiːdʒɪk skoʊp...]", english: "Affirming genuine enthusiasm.", register: "formal" },
          { phrase: "Based on market benchmarks for senior staff in London...", phonetic: "[beɪst ɑːn ˈmɑːrkɪt ˈbɛntʃmɑːrks...]", english: "Objective market data anchor.", register: "formal" },
          { phrase: "I was targeting a base salary closer to $185,000.", phonetic: "[aɪ wəz ˈtɑːrɡɪtɪŋ ə beɪs ˈsæləri ˈkloʊsər...]", english: "Clear counter-offer statement.", register: "formal" },
          { phrase: "Is there any flexibility around the equity grant?", phonetic: "[ɪz ðɛər ˈɛni ˌflɛksəˈbɪləti əˈraʊnd...]", english: "Exploring stock options / RSUs.", register: "formal" },
          { phrase: "What is the vesting schedule and cliff structure?", phonetic: "[wʌt ɪz ðə ˈvɛstɪŋ ˈskɛdʒuːl ænd klɪf...]", english: "Equity technical details.", register: "formal" },
          { phrase: "Could we bridge the gap with a sign-on bonus?", phonetic: "[kʊd wiː brɪdʒ ðə ɡæp wɪð ə saɪn ɑːn ˈboʊnəs]", english: "Cash compromise mechanism.", register: "formal" },
          { phrase: "If we can reach that number, I'm ready to sign today.", phonetic: "[ɪf wiː kæn riːtʃ ðæt ˈnʌmbər aɪm ˈrɛdi...]", english: "Closing commitment lever.", register: "formal" },
          { phrase: "I'd like to take the weekend to review the contract.", phonetic: "[aɪd laɪk tuː teɪk ðə ˈwiːkɛnd...]", english: "Buying decision time.", register: "formal" },
          { phrase: "Let's see where we can meet in the middle.", phonetic: "[lɛts siː wɛər wiː kæn miːt ɪn ðə ˈmɪdəl]", english: "Collaborative closing tone.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Recruiter", line: "Hi Rafly! We're thrilled to officially extend an offer for the Lead Architect position at $165,000 base plus 20,000 stock options.", english: "Hi Rafly! Thrilled to offer the Lead Architect role at $165k base + 20k stock options." },
          { speaker: "Rafly", line: "Thank you so much, Sarah. I'm truly thrilled about the team and the technical roadmap we discussed.", english: "Thank you so much, Sarah. Truly thrilled about the team and roadmap." },
          { speaker: "Recruiter", line: "We think you'd be a phenomenal fit! How does the compensation package look to you?", english: "You'd be a phenomenal fit! How does the compensation look?" },
          { speaker: "Rafly", line: "The equity component is compelling. However, based on current market benchmarks for this seniority level and my background scaling real-time infra, I was targeting $185,000 base.", english: "Equity is compelling. But based on market benchmarks and my scaling track record, I was targeting $185k base." },
          { speaker: "Recruiter", line: "I see. Our salary bands for this level typically top out around $172,000 for internal equity reasons.", english: "I see. Our bands typically cap out at $172k for internal equity." },
          { speaker: "Rafly", line: "I completely respect internal parity bands. If $172,000 is the hard ceiling on base, could we bridge the gap with an additional $15,000 sign-on bonus and accelerated vesting?", english: "I respect internal parity. If $172k is the base ceiling, could we bridge the gap with a $15k sign-on bonus and accelerated vesting?" },
          { speaker: "Recruiter", line: "That's a very creative and constructive proposal. If I can get executive sign-off on the sign-on bonus and $172k, would you be prepared to sign?", english: "Creative, constructive proposal. If I get sign-off on the bonus and $172k, would you sign?" },
          { speaker: "Rafly", line: "If we can lock those terms in writing, I would be delighted to sign and give notice immediately.", english: "If we lock those terms in writing, I would be delighted to sign immediately." },
          { speaker: "Recruiter", line: "Fantastic. Let me speak with our VP of People, and I'll get back to you by 3 PM.", english: "Fantastic. Let me speak with our VP of People, back to you by 3 PM." }
        ],
        fluencyBoosters: [
          { booster: "bridge the gap", category: "idiom", usage: "To resolve a financial or numerical difference between two negotiating positions.", example: "A one-time bonus can bridge the gap between salary bands." },
          { booster: "internal parity", category: "formal", usage: "Corporate HR term ensuring salaries across equal roles remain fair and equitable.", example: "We must preserve internal parity across all senior engineers." },
          { booster: "hard ceiling", category: "idiom", usage: "An absolute maximum limit that cannot be exceeded under any circumstances.", example: "$180,000 is our hard ceiling for this requisition." },
          { booster: "meet in the middle", category: "connector", usage: "Both parties make equal concessions to reach agreement.", example: "If you offer $170k, we can meet in the middle." },
          { booster: "lock in", category: "casual", usage: "To finalize terms or contractual clauses irrevocably.", example: "Let's lock in the start date for September 1st." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Give me $185,000 or I refuse your company.'", correction: "Say: 'Based on senior benchmarks, I was targeting $185,000 base salary.'", explanation: "Ultimatums kill negotiations and damage goodwill. Anchor requests objectively around market data." },
          { mistake: "Learner accepts the first offer immediately in 5 seconds.", correction: "Say: 'Thank you for the offer. I'd love to review the numbers and get back to you tomorrow.'", explanation: "Never accept an initial offer on the spot; recruiters always preserve budget headroom for counter-offers." },
          { mistake: "Learner says: 'I need more money because my rent is expensive.'", correction: "Say: 'Based on my track record delivering 40% infra cost savings...'", explanation: "Never cite personal expenses. Justify compensation with market value and technical impact." }
        ],
        culturalPragmaticNote: {
          title: "The Recruiter Dance & Total Compensation",
          textbookVsReality: "Textbooks frame negotiation as combat.",
          nativeRule: "Recruiters are your allies—they want you to sign so they close the hiring req. Frame negotiations collaboratively: 'Help me get to a number where I can sign immediately.'"
        },
        rolePlayPrompts: {
          guided: "Receive a job offer, express genuine enthusiasm, and counter-offer 10% higher base salary using market data.",
          semiOpen: "The hiring manager says base pay is completely frozen. Negotiate remote work flexibility, an education stipend, and an extra week of paid vacation.",
          fullyOpen: "You have two competing offers: one higher cash, one higher equity. Leverage the competing offer gracefully without alienating your preferred company."
        },
        followUpQuestions: [
          "Do you find negotiating salary stressful or an exciting part of career progression?",
          "What matters more to you at this stage of your career: high cash base or high equity upside?",
          "How do you research accurate market compensation benchmarks before interviews?",
          "Have you ever walked away from an offer because the company was inflexible?",
          "What non-monetary perks (remote work, title, learning budget) do you value most?"
        ],
        canDoStatements: [
          "I can express enthusiasm for a job offer while firmly countering on base salary.",
          "I can propose alternative compensation levers like sign-on bonuses and equity vesting.",
          "I can defend my market benchmark value without sounding confrontational or greedy."
        ]
      }
    ]
  },

  // ── AREA 6: Social & relationships ──
  {
    id: 6,
    title: "Social & Relationships",
    subtitle: "Making friends, dating, family, invitations, declining politely",
    icon: "🤝",
    topics: [
      {
        id: "en-t11-dinner-decline",
        areaId: 6,
        areaTitle: "Social & Relationships",
        title: "Declining a Dinner Invitation Gracefully",
        situation: "A good friend invites you to their birthday dinner party on Saturday, but you already have non-negotiable prior family commitments.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "I would have loved to come, but...", phonetic: "[aɪ wʊd hæv lʌvd tuː kʌm bʌt]", english: "Conditional regret opener.", register: "neutral" },
          { phrase: "I've already got an unavoidable commitment.", phonetic: "[aɪv ɔːlˈrɛdi ɡɑːt ən ˌʌnəˈvɔɪdəbəl...]", english: "Prior schedule conflict.", register: "formal" },
          { phrase: "Can I take a raincheck on that?", phonetic: "[kæn aɪ teɪk ə ˈreɪntʃɛk...]", english: "Postponing invitation.", register: "casual" },
          { phrase: "Let me take you out for drinks next week instead.", phonetic: "[lɛt miː teɪk juː aʊt...]", english: "Alternative counter-proposal.", register: "casual" },
          { phrase: "I'm gutted I'll be missing out!", phonetic: "[aɪm ˈɡʌtɪd aɪl biː ˈmɪsɪŋ aʊt]", english: "British/Commonwealth sincere regret.", register: "casual" },
          { phrase: "Give everyone a huge hug for me.", phonetic: "[ɡɪv ˈɛvriwʌn ə hjuːdʒ hʌɡ...]", english: "Warm social proxy.", register: "casual" },
          { phrase: "Promise we'll celebrate properly soon.", phonetic: "[ˈprɑːmɪs wiːl ˈsɛləbreɪt...]", english: "Affirming closeness.", register: "casual" },
          { phrase: "No worries at all, totally understand!", phonetic: "[noʊ ˈwɜːr.iz ət ɔːl...]", english: "Gracious acceptance of decline.", register: "casual" },
          { phrase: "Send lots of pictures from the party!", phonetic: "[sɛnd lɑːts əv ˈpɪktʃərz...]", english: "Staying engaged remotely.", register: "casual" },
          { phrase: "Hope you have an absolute blast!", phonetic: "[hoʊp juː hæv ən ˈæbsəluːt blæst]", english: "Warm party well-wishes.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Chloe", line: "Hey! We're having a small dinner party for my birthday this Saturday at 7 PM. You're definitely coming, right?", english: "Hey! Having a dinner party for my birthday Saturday at 7. You're coming, right?" },
          { speaker: "Sam", line: "Oh Chloe, happy early birthday! Ah, I'm honestly so gutted, but I won't be able to make it.", english: "Oh Chloe, happy early birthday! Ah, honestly so gutted, but I can't make it.", fillers: ["honestly", "Ah"] },
          { speaker: "Chloe", line: "Oh no, really? How come?", english: "Oh no, really? How come?" },
          { speaker: "Sam", line: "My sister is flying in from Vancouver for just one night, and we promised our parents a family dinner.", english: "My sister is flying in from Vancouver for one night, promised parents a family dinner." },
          { speaker: "Chloe", line: "Oh, of course! Family definitely comes first. Don't sweat it at all.", english: "Of course! Family comes first. Don't sweat it at all." },
          { speaker: "Sam", line: "Can I take a raincheck and take you out for birthday drinks or brunch next Thursday instead? My treat!", english: "Can I take a raincheck and treat you to drinks or brunch next Thursday instead? My treat!" },
          { speaker: "Chloe", line: "That sounds lovely, I'd adore that! Thursday works great for me.", english: "That sounds lovely, I'd adore that! Thursday works great." },
          { speaker: "Sam", line: "Awesome. Have an absolute blast on Saturday, and send me photos!", english: "Awesome. Have a blast on Saturday, send photos!" }
        ],
        fluencyBoosters: [
          { booster: "take a raincheck", category: "idiom", usage: "Politely declining an invitation now while explicitly committing to reschedule later.", example: "Can't do movies tonight, but can I take a raincheck?" },
          { booster: "gutted", category: "casual", usage: "Strong British/Australian slang meaning deeply disappointed.", example: "I was gutted when our flight was cancelled." },
          { booster: "Don't sweat it", category: "idiom", usage: "Reassures someone not to worry or feel guilty.", example: "Forgot the charger? Don't sweat it, I have a spare." },
          { booster: "have an absolute blast", category: "idiom", usage: "Wishing someone an extraordinarily fun time.", example: "Have a blast at the music festival this weekend!" },
          { booster: "My treat", category: "discourse marker", usage: "Declaring that you will pay for the other person's meal or drinks.", example: "Let's grab sushi, my treat!" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I cannot come to your birthday because no.'", correction: "Say: 'I would have loved to come, but I have a prior family commitment.'", explanation: "Always soften social declines with regret ('I would have loved to') and a valid reason." },
          { mistake: "Learner says: 'Next week I buy you beer.'", correction: "Say: 'Can I take a raincheck and treat you to drinks next week?'", explanation: "Proposing an alternative ('raincheck') proves that your friendship remains a priority." },
          { mistake: "Learner says: 'I am very sorry for missing you.'", correction: "Say: 'I'm so gutted I'll be missing out!'", explanation: "In informal English, 'gutted' or 'so bummed' communicates authentic emotional warmth." }
        ],
        culturalPragmaticNote: {
          title: "The Art of the Social Raincheck",
          textbookVsReality: "Textbooks teach saying a cold 'No, I am busy'."
        },
        rolePlayPrompts: {
          guided: "Decline a coworker's happy hour invitation because you have gym plans, and suggest coffee tomorrow.",
          semiOpen: "A friend invites you to a wedding in another state that would cost $1,500 in flights and hotel. Decline warmly without sounding stingy.",
          fullyOpen: "You accidentally double-booked two close friends on the same Saturday night. Call one to break the news and reschedule."
        },
        followUpQuestions: [
          "Do you find it easy or difficult to say 'no' to social invitations?",
          "What is your ideal birthday celebration: a rowdy party or a quiet dinner?",
          "How do you handle friends who constantly cancel plans at the last minute?",
          "Do you prefer spontaneous get-togethers or events planned weeks in advance?",
          "What is your favorite restaurant in town to treat a close friend for their birthday?"
        ],
        canDoStatements: [
          "I can decline a close friend's social invitation without damaging the relationship.",
          "I can propose an alternative date using the 'take a raincheck' formula.",
          "I can express sincere regret and wish them well enthusiastically."
        ]
      },
      {
        id: "en-t12-networking-banter",
        areaId: 6,
        areaTitle: "Social & Relationships",
        title: "Networking Mixer Banter & Pivot",
        situation: "Attending a tech mixer, introducing yourself to a stranger, finding shared interests, and transitioning contacts before moving on.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "Mind if I join you?", phonetic: "[maɪnd ɪf aɪ dʒɔɪn juː]", english: "Polite mixer approach.", register: "casual" },
          { phrase: "What brings you to tonight's event?", phonetic: "[wʌt brɪŋz juː tuː...]", english: "Standard networking opener.", register: "neutral" },
          { phrase: "I work on developer tooling and AI infrastructure.", phonetic: "[aɪ wɜːrk ɑːn dɪˈvɛləpər ˈtuːlɪŋ...]", english: "Concise elevator pitch.", register: "neutral" },
          { phrase: "Small world! How long have you been in that space?", phonetic: "[smɔːl wɜːrld haʊ lɔːŋ...]", english: "Recognizing connection.", register: "casual" },
          { phrase: "What's your take on the recent shifts?", phonetic: "[wʌts jɔːr teɪk ɑːn ðə...]", english: "Asking industry opinion.", register: "neutral" },
          { phrase: "Let's definitely swap contact details.", phonetic: "[lɛts ˈdɛfɪnɪtli swɑːp ˈkɑːntækt...]", english: "LinkedIn / phone exchange.", register: "neutral" },
          { phrase: "Let me grab your LinkedIn QR code.", phonetic: "[lɛt miː ɡræb jɔːr...]", english: "Modern contact swap.", register: "casual" },
          { phrase: "I don't want to monopolize all your time.", phonetic: "[aɪ doʊnt wɑːnt tuː məˈnɑːpəlaɪz...]", english: "Polite exit formula.", register: "formal" },
          { phrase: "It was a real pleasure chatting with you.", phonetic: "[ɪt wəz ə rɪəl ˈplɛʒər ˈtʃætɪŋ...]", english: "Warm wrap-up.", register: "formal" },
          { phrase: "Enjoy the rest of the evening!", phonetic: "[ɛnˈdʒɔɪ ðə rɛst əv ðə...]", english: "Parting pleasantry.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Rafly", line: "Hi there! Mind if I join you at this table? Everywhere else is packed.", english: "Hi! Mind if I join you here? Everywhere else is packed." },
          { speaker: "Elena", line: "Not at all, pull up a chair! I'm Elena, by the way.", english: "Not at all, pull up a chair! I'm Elena, by the way.", fillers: ["by the way"] },
          { speaker: "Rafly", line: "Nice to meet you, Elena. I'm Rafly. What brings you to the tech mixer tonight?", english: "Nice to meet you Elena. I'm Rafly. What brings you to the mixer tonight?" },
          { speaker: "Elena", line: "I'm a product designer at a fintech startup. We're hiring frontend engineers, so I'm doing some casual talent scouting.", english: "Product designer at fintech startup. We're hiring frontend devs, so scouting talent." },
          { speaker: "Rafly", line: "Small world! I actually specialize in streaming UI infrastructure and web speech systems.", english: "Small world! I specialize in streaming UI infra and speech systems." },
          { speaker: "Elena", line: "No way, seriously? We were literally discussing speech synthesis prototypes yesterday!", english: "No way, seriously? We discussed speech synthesis prototypes yesterday!" },
          { speaker: "Rafly", line: "Haha, timing is everything. We should definitely stay in touch.", english: "Haha, timing is everything. We should definitely stay in touch." },
          { speaker: "Elena", line: "100%. Let's swap LinkedIn info before the keynote starts.", english: "100%. Let's swap LinkedIn info before the keynote." },
          { speaker: "Rafly", line: "Here's my QR code. ...Awesome, connected! Well, I don't want to monopolize your time, but let's grab coffee next week.", english: "Here's my QR code. ...Connected! Don't want to monopolize your time, coffee next week." },
          { speaker: "Elena", line: "Sounds like a plan, Rafly. Great meeting you!", english: "Sounds like a plan, Rafly. Great meeting you!" }
        ],
        fluencyBoosters: [
          { booster: "monopolize your time", category: "formal", usage: "Courteous formula allowing both people to circulate and meet others at mixers.", example: "I don't want to monopolize your time, let me introduce you to Sarah." },
          { booster: "Small world!", category: "idiom", usage: "Expresses surprise when people discover unexpected mutual connections.", example: "You went to Stanford too? Small world!" },
          { booster: "pull up a chair", category: "casual", usage: "Warm, informal invitation to sit down together.", example: "Pull up a chair and join our conversation." },
          { booster: "Sounds like a plan", category: "discourse marker", usage: "Casual agreement finalizing a proposal.", example: "Dinner at 8? Sounds like a plan!" },
          { booster: "What brings you to...", category: "connector", usage: "The ultimate polite mixer icebreaker.", example: "What brings you to London this week?" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Give me your phone number right now.'", correction: "Say: 'Let's swap LinkedIn details' or 'Can I grab your contact info?'", explanation: "Asking for a personal phone number from strangers at a professional mixer can feel intrusive. Stick to LinkedIn." },
          { mistake: "Learner gives a 10-minute uninterrupted monologue about their resume.", correction: "Say: 'I work on X. What about you, what's your focus?'", explanation: "Networking is dialogue, not a lecture. Pitch in 30 seconds and ask a reciprocal question." },
          { mistake: "Learner sneaks away silently when a pause occurs.", correction: "Say: 'I don't want to monopolize your time, it was great meeting you!'", explanation: "A clean verbal departure preserves professional impressions." }
        ],
        culturalPragmaticNote: {
          title: "The 5-Minute Mixer Rule",
          textbookVsReality: "Textbooks show people having 30-minute deep conversations.",
          nativeRule: "At professional networking events, lingering longer than 7 minutes with one person without mutual cues is bad etiquette. Connect, swap LinkedIn, and circulate."
        },
        rolePlayPrompts: {
          guided: "Introduce yourself to a speaker after their conference talk, compliment one insight, and ask for their email.",
          semiOpen: "You are stuck talking to someone whose product is completely irrelevant to you. Gracefully exit the conversation within 60 seconds.",
          fullyOpen: "Approach a group of three strangers having an animated conversation at a cocktail party and blend in seamlessly."
        },
        followUpQuestions: [
          "Do you consider yourself an introvert or an extrovert in large networking rooms?",
          "What is the best professional connection you've ever made at an event?",
          "Do you find digital business cards or LinkedIn QR codes more convenient?",
          "How do you usually follow up with someone you met at a conference the next day?",
          "What is your go-to question when conversation stalls with a new contact?"
        ],
        canDoStatements: [
          "I can introduce myself and deliver a 30-second elevator pitch at a professional mixer.",
          "I can transition contacts digitally using LinkedIn or email.",
          "I can execute a polite conversational exit without creating social awkwardness."
        ]
      }
    ]
  },

  // ── AREA 7: Health & wellbeing ──
  {
    id: 7,
    title: "Health & Wellbeing",
    subtitle: "Doctor, pharmacy, describing symptoms",
    icon: "🩺",
    topics: [
      {
        id: "en-t13-doctor-symptoms",
        areaId: 7,
        areaTitle: "Health & Wellbeing",
        title: "Describing Acute Symptoms at a Walk-in Clinic",
        situation: "Explaining a persistent throbbing headache, fever onset, and nausea symptoms to a clinic physician without medical jargon.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "I've been feeling under the weather.", phonetic: "[aɪv biːn ˈfiːlɪŋ ˈʌndər ðə ˈwɛðər]", english: "General feeling unwell opener.", register: "neutral" },
          { phrase: "It started off as a dull ache.", phonetic: "[ɪt ˈstɑːrtɪd ɔːf æz ə dʌl eɪk]", english: "Describing symptom onset.", register: "neutral" },
          { phrase: "Now it's turned into a sharp throbbing pain.", phonetic: "[naʊ ɪts tɜːrnd ˈɪntuː ə ʃɑːrp ˈθrɑːbɪŋ peɪn]", english: "Pain characterization.", register: "neutral" },
          { phrase: "Does the pain radiate down your neck?", phonetic: "[dʌz ðə peɪn ˈreɪdieɪt daʊn...]", english: "Physician inquiry.", register: "formal" },
          { phrase: "I'm sensitive to bright light and screen glare.", phonetic: "[aɪm ˈsɛnsətɪv tuː braɪt laɪt...]", english: "Describing photophobia.", register: "neutral" },
          { phrase: "Are you taking any regular medications?", phonetic: "[ɑːr juː ˈteɪkɪŋ ˈɛni ˈrɛɡjʊlər...]", english: "Medical history check.", register: "formal" },
          { phrase: "I've only taken over-the-counter ibuprofen.", phonetic: "[aɪv ˈoʊnli ˈteɪkən ˌoʊvər ðə ˈkaʊntər...]", english: "Self-medication report.", register: "neutral" },
          { phrase: "It barely took the edge off.", phonetic: "[ɪt ˈbɛərli tʊk ðə ɛdʒ ɔːf]", english: "Pain reliever barely helped.", register: "casual" },
          { phrase: "Let's check your vitals and blood pressure.", phonetic: "[lɛts tʃɛk jɔːr ˈvaɪtəlz...]", english: "Clinical examination opener.", register: "formal" },
          { phrase: "Get plenty of fluids and bed rest.", phonetic: "[ɡɛt ˈplɛnti əv ˈfluːɪdz...]", english: "Doctor's advice standard.", register: "neutral" }
        ],
        dialogue: [
          { speaker: "Doctor", line: "Good morning, Rafly. Come on in. What seems to be troubling you today?", english: "Good morning. Come in. What seems to be troubling you?" },
          { speaker: "Patient", line: "Hi doctor. I've been feeling under the weather since Thursday, but yesterday it got considerably worse.", english: "Hi doctor. Feeling unwell since Thursday, but yesterday got much worse." },
          { speaker: "Doctor", line: "I'm sorry to hear that. Can you describe where and how it hurts?", english: "Sorry to hear that. Can you describe where and how it hurts?" },
          { speaker: "Patient", line: "It's a persistent throbbing headache right behind my temples, and I feel nauseous whenever I look at my laptop.", english: "Persistent throbbing headache behind temples, nauseous looking at laptop." },
          { speaker: "Doctor", line: "Any fever, chills, or stiffness in your neck?", english: "Any fever, chills, or neck stiffness?" },
          { speaker: "Patient", line: "A mild fever around 38 degrees Celsius, but no neck stiffness. I took ibuprofen, but it barely took the edge off.", english: "Mild fever around 38C, no neck stiffness. Ibuprofen barely took edge off." },
          { speaker: "Doctor", line: "Understood. Let me check your reflexes, pupils, and blood pressure. ...Vitals look stable.", english: "Understood. Let me check reflexes, pupils, and BP. ...Vitals look stable." },
          { speaker: "Patient", line: "What do you suspect it is?", english: "What do you suspect it is?" },
          { speaker: "Doctor", line: "It exhibits classic signs of a severe migraine with viral exhaustion. I'll write a prescription for triptans.", english: "Classic signs of severe migraine with viral exhaustion. I'll prescribe triptans." },
          { speaker: "Patient", line: "Thank you so much, doctor. How often should I take them?", english: "Thank you so much. How often should I take them?" }
        ],
        fluencyBoosters: [
          { booster: "take the edge off", category: "idiom", usage: "To lessen the intensity of pain, anxiety, or hunger.", example: "A warm tea took the edge off my throat pain." },
          { booster: "under the weather", category: "idiom", usage: "Mildly sick, fatigued, or unwell.", example: "I was feeling a bit under the weather yesterday." },
          { booster: "throbbing pain", category: "discourse marker", usage: "Pulsating pain that beats rhythmically like a heartbeat.", example: "A throbbing toothache kept me up all night." },
          { booster: "over-the-counter (OTC)", category: "formal", usage: "Medicine sold directly without needing a prescription.", example: "You can buy OTC pain relievers at any pharmacy." },
          { booster: "vitals", category: "formal", usage: "Clinical term for temperature, pulse, respiratory rate, and blood pressure.", example: "The nurse checked my vitals before the doctor came in." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'My head is giving painful punches.'", correction: "Say: 'I have a sharp / throbbing headache.'", explanation: "Use descriptive adjectives: 'dull ache', 'sharp pain', or 'throbbing'." },
          { mistake: "Learner says: 'I drink medicine.'", correction: "Say: 'I take medicine' or 'I took an ibuprofen.'", explanation: "In English, you 'take' medicine, pills, and antibiotics, you don't 'drink' them." },
          { mistake: "Learner says: 'I am sick in my temperature.'", correction: "Say: 'I'm running a mild fever.'", explanation: "The idiomatic phrasing is 'running a fever' or 'having a temperature'." }
        ],
        culturalPragmaticNote: {
          title: "Symptom Scales & Severity",
          textbookVsReality: "Textbooks teach saying 'I am ill'."
        },
        rolePlayPrompts: {
          guided: "Visit a doctor, explain you have had an earache for three days, and mention pain increases when swallowing.",
          semiOpen: "You sprained your ankle playing football. Explain the injury, describe the swelling, and ask if an X-ray is needed.",
          fullyOpen: "You need a medical certificate for work due to acute food poisoning. Explain symptoms and negotiate recovery days."
        },
        followUpQuestions: [
          "Do you usually see a doctor immediately when sick, or do you wait a few days?",
          "How do you prefer to recover from a bad cold: natural remedies or heavy medication?",
          "Have you ever had to navigate a medical clinic in a foreign country where you didn't speak the language?",
          "What is your philosophy on maintaining daily wellness and preventive health?",
          "Do you find telemedicine video calls as effective as in-person doctor visits?"
        ],
        canDoStatements: [
          "I can describe the nature, onset, and intensity of physical pain clearly.",
          "I can report previous medications and allergies accurately to a doctor.",
          "I can understand a doctor's diagnosis, prescription dosage, and recovery guidance."
        ]
      },
      {
        id: "en-t14-pharmacy-consultation",
        areaId: 7,
        areaTitle: "Health & Wellbeing",
        title: "Over-the-Counter Pharmacy Consultation",
        situation: "Consulting a pharmacist for a dry cough and chest congestion, checking for drowsiness side effects before driving.",
        difficulty: "Easy",
        cefrLevel: "B1",
        estimatedSpeakingTime: "5-6 mins",
        keyPhrases: [
          { phrase: "Could you recommend something for a dry cough?", phonetic: "[kʊd juː ˌrɛkəˈmɛnd ˈsʌmθɪŋ...]", english: "Pharmacy consultation opener.", register: "neutral" },
          { phrase: "Will this make me drowsy?", phonetic: "[wɪl ðɪs meɪk miː ˈdraʊzi]", english: "Checking side effects.", register: "neutral" },
          { phrase: "I have to drive to work, so non-drowsy is essential.", phonetic: "[...nɑːn ˈdraʊzi ɪz ɪˈsɛnʃəl]", english: "Crucial safety requirement.", register: "neutral" },
          { phrase: "Take one tablet every eight hours with food.", phonetic: "[teɪk wʌn ˈtæblət ˈɛvri eɪt...]", english: "Pharmacist dosage instructions.", register: "formal" },
          { phrase: "Do not exceed the stated dose.", phonetic: "[duː nɑːt ɪkˈsiːd ðə ˈsteɪtɪd doʊs]", english: "Medication safety warning.", register: "formal" },
          { phrase: "Is this safe to take alongside antihistamines?", phonetic: "[ɪz ðɪs seɪf tuː teɪk əˈlɔːŋsaɪd...]", english: "Drug interaction inquiry.", register: "formal" },
          { phrase: "Dissolve one sachet in hot water.", phonetic: "[dɪˈzɑːlv wʌn sæˈʃeɪ ɪn hɑːt...]", english: "Preparation method.", register: "neutral" },
          { phrase: "How long should I take this for?", phonetic: "[haʊ lɔːŋ ʃʊd aɪ teɪk ðɪs fɔːr]", english: "Duration question.", register: "neutral" },
          { phrase: "If symptoms persist, consult your GP.", phonetic: "[ɪf ˈsɪmptəmz pərˈsɪst kənˈsʌlt...]", english: "Standard pharmacist disclaimer.", register: "formal" },
          { phrase: "Keep out of reach of children.", phonetic: "[kiːp aʊt əv riːtʃ əv...]", english: "Standard medicine storage warning.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Pharmacist", line: "Hi there! How can I help you today?", english: "Hi! How can I help you today?" },
          { speaker: "Customer", line: "Hi! I've developed this tickly, dry cough over the past two days. It's keeping me awake at night.", english: "Hi! Developed a dry cough over past 2 days, keeping me awake at night." },
          { speaker: "Pharmacist", line: "Is it a dry, hacking cough, or are you bringing up any mucus or phlegm?", english: "Is it a dry cough, or bringing up mucus/phlegm?" },
          { speaker: "Customer", line: "Completely dry, just constant irritation in my throat.", english: "Completely dry, just constant irritation." },
          { speaker: "Pharmacist", line: "Got it. I'd recommend this glycerol and dextromethorphan syrup. It coats the throat and suppresses the cough reflex.", english: "Got it. I'd recommend this syrup. Coats throat and suppresses reflex." },
          { speaker: "Customer", line: "Will it make me drowsy? I have to drive to work in the morning.", english: "Will it make me drowsy? I have to drive to work in the morning." },
          { speaker: "Pharmacist", line: "This daytime formula is 100% non-drowsy. Take 10 ml every four to six hours. If you want something for nighttime, we have a drowsy version.", english: "Day formula is non-drowsy. Take 10ml every 4-6 hours. Night formula is drowsy." },
          { speaker: "Customer", line: "Let's stick with the non-drowsy daytime one for now. Is it safe to take with vitamin C supplements?", english: "Let's stick with daytime non-drowsy. Safe with vitamin C?" },
          { speaker: "Pharmacist", line: "Completely fine. Just drink plenty of warm fluids too.", english: "Completely fine. Drink plenty of warm fluids." },
          { speaker: "Customer", line: "Brilliant, thank you so much for the advice!", english: "Brilliant, thank you for the advice!" }
        ],
        fluencyBoosters: [
          { booster: "non-drowsy", category: "formal", usage: "Medication formulated specifically not to induce sleepiness or sluggishness.", example: "Always buy non-drowsy allergy tablets if you're operating machinery." },
          { booster: "bring up phlegm", category: "neutral", usage: "Clinical description of a productive, wet chest cough.", example: "Are you bringing up any yellow phlegm?" },
          { booster: "coats the throat", category: "idiom", usage: "Soothing liquid medication creating a protective layer over irritated tissue.", example: "Honey naturally coats the throat." },
          { booster: "hacking cough", category: "discourse marker", usage: "Rough, dry, persistent cough.", example: "He had a harsh hacking cough all through winter." },
          { booster: "GP (General Practitioner)", category: "formal", usage: "British/Commonwealth term for your regular family doctor.", example: "Book an appointment with your GP." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Give me medicine that doesn't sleep me.'", correction: "Say: 'I need a non-drowsy formula.'", explanation: "The medical and commercial term is 'non-drowsy'." },
          { mistake: "Learner says: 'I drink two spoons.'", correction: "Say: 'Take two spoonfuls / 10 ml every six hours.'", explanation: "Use 'take' for medicine, and specify measurements in milliliters or spoons." },
          { mistake: "Learner says: 'Is this dangerous with other drugs?'", correction: "Say: 'Does this have any interactions with other medications?'", explanation: "The professional phrase is 'drug interactions'." }
        ],
        culturalPragmaticNote: {
          title: "Pharmacists as Triage Experts",
          textbookVsReality: "Textbooks send students straight to hospitals for minor colds."
        },
        rolePlayPrompts: {
          guided: "Ask a pharmacist for allergy eye drops that are safe to use with contact lenses.",
          semiOpen: "You are experiencing motion sickness before a boat trip. Ask for motion sickness pills and verify how long before departure to take them.",
          fullyOpen: "You have a painful throat infection on holiday abroad. Describe symptoms and ask if an over-the-counter anesthetic spray is available."
        },
        followUpQuestions: [
          "Do you prefer natural herbal remedies like ginger and lemon or pharmaceutical syrups?",
          "How do you prepare your medicine cabinet when traveling to tropical countries?",
          "Have you ever experienced strange side effects from a prescription medication?",
          "Do you always read the detailed patient information leaflet inside medicine boxes?",
          "What is your go-to cure when you feel the very first scratch of a sore throat?"
        ],
        canDoStatements: [
          "I can describe cough symptoms (dry vs. productive) to a pharmacist.",
          "I can verify whether a medication causes drowsiness before driving.",
          "I can ask about drug interactions and dosage intervals with confidence."
        ]
      }
    ]
  },

  // ── AREA 8: Opinions & discussion ──
  {
    id: 8,
    title: "Opinions & Discussion",
    subtitle: "Agreeing/disagreeing, giving reasons, debating lightly",
    icon: "💭",
    topics: [
      {
        id: "en-t15-remote-work-debate",
        areaId: 8,
        areaTitle: "Opinions & Discussion",
        title: "Debating Remote Work Flexibility vs. Office Mandates",
        situation: "Discussing company return-to-office policies with a colleague over lunch, balancing work-life balance against serendipitous collaboration.",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "8-9 mins",
        keyPhrases: [
          { phrase: "From my perspective, autonomy boosts output.", phonetic: "[frəm maɪ pərˈspɛktɪv ɔːˈtɑːnəmi...]", english: "Opinion statement.", register: "formal" },
          { phrase: "I see where you're coming from, but...", phonetic: "[aɪ siː wɛər jɔːr ˈkʌmɪŋ frʌm bʌt]", english: "Diplomatic disagreement pivot.", register: "formal" },
          { phrase: "You have to consider the flip side.", phonetic: "[juː hæv tuː kənˈsɪdər ðə flɪp saɪd]", english: "Introducing counter-argument.", register: "neutral" },
          { phrase: "In-person serendipity is hard to replicate online.", phonetic: "[...ˌsɛrənˈdɪpəti ɪz hɑːrd tuː ˈrɛplɪkeɪt...]", english: "Office collaboration defense.", register: "formal" },
          { phrase: "The commute eats up two hours of productive life.", phonetic: "[ðə kəˈmjuːt iːts ʌp...]", english: "Remote work defense.", register: "neutral" },
          { phrase: "It shouldn't be a one-size-fits-all policy.", phonetic: "[ɪt ˈʃʊdənt biː ə wʌn saɪz fɪts ɔːl...]", english: "Nuanced middle-ground.", register: "formal" },
          { phrase: "Fair point, I hadn't looked at it that way.", phonetic: "[fɛər pɔɪnt aɪ ˈhædənt lʊkt...]", english: "Gracious concession.", register: "neutral" },
          { phrase: "At the end of the day, results speak for themselves.", phonetic: "[æt ði ɛnd əv ðə deɪ...]", english: "Pragmatic conclusion.", register: "neutral" },
          { phrase: "Let's agree to disagree on that point.", phonetic: "[lɛts əˈɡriː tuː ˌdɪsəˈɡriː...]", english: "Polite debate closure.", register: "formal" },
          { phrase: "It comes down to trust between management and staff.", phonetic: "[ɪt kʌmz daʊn tuː trʌst...]", english: "Core principle summary.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Mark", line: "Did you see leadership's memo about mandating three days in the office starting next month?", english: "Did you see leadership's memo mandating 3 office days next month?" },
          { speaker: "Zara", line: "I did, and honestly, I think it's a huge step backward. Our velocity increased by 20% while remote.", english: "I did, and honestly it's a step backward. Our velocity rose 20% remote.", fillers: ["honestly"] },
          { speaker: "Mark", line: "I see where you're coming from on individual coding output, but you have to consider the flip side. Junior onboarding has really suffered without in-person mentorship.", english: "I see your point on solo coding, but look at the flip side. Junior onboarding suffered without mentorship." },
          { speaker: "Zara", line: "Fair point, junior mentoring is definitely more organic in person. But why mandate fixed Tuesdays and Thursdays for everyone? It shouldn't be a one-size-fits-all blanket rule.", english: "Fair point, mentoring is more organic in person. But why mandate fixed days? Shouldn't be one-size-fits-all." },
          { speaker: "Mark", line: "Because if everyone picks random days, you end up commuting two hours just to sit on Zoom calls in an empty open-plan office!", english: "Because if people pick random days, you commute 2 hours just to sit on Zoom alone!" },
          { speaker: "Zara", line: "Haha, touché! That is admittedly soul-crushing. Maybe an anchor day every two weeks would be the right middle ground.", english: "Haha, touché! That's soul-crushing. Maybe an anchor day every two weeks is middle ground." },
          { speaker: "Mark", line: "Now that I could definitely get behind. Let's raise that during Friday's all-hands Q&A.", english: "Now that I could get behind. Let's raise that at Friday's all-hands." }
        ],
        fluencyBoosters: [
          { booster: "the flip side", category: "idiom", usage: "The opposite or counter-balancing aspect of a situation.", example: "Remote work gives freedom, but the flip side is social isolation." },
          { booster: "one-size-fits-all", category: "idiom", usage: "A generic policy that fails to account for individual differences.", example: "Standardized testing is a flawed, one-size-fits-all approach." },
          { booster: "touché!", category: "discourse marker", usage: "Acknowledging that your opponent just made a very clever, valid point against you.", example: "You said you hate travel, yet you're in Paris? — Touché!" },
          { booster: "get behind", category: "casual", usage: "To endorse, support, or enthusiastically agree with an idea.", example: "That's a product roadmap I can genuinely get behind." },
          { booster: "at the end of the day", category: "connector", usage: "Ultimately / When all is said and done.", example: "At the end of the day, customer retention is what matters." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I disagree you completely!'", correction: "Say: 'I see where you're coming from, but look at the flip side...'", explanation: "Blunt disagreement sounds aggressive in English discussions. Cushion with acknowledgment before countering." },
          { mistake: "Learner says: 'You are wrong about this.'", correction: "Say: 'I'm not so sure that's the whole picture.'", explanation: "Target the idea or data, never attack the person directly." },
          { mistake: "Learner says: 'I agree your opinion.'", correction: "Say: 'I agree with you' or 'Fair point.'", explanation: "'Agree' pairs with 'with', not a direct object." }
        ],
        culturalPragmaticNote: {
          title: "The Art of the Anglo-Saxon Debate",
          textbookVsReality: "Textbooks show either complete compliance or argumentative fighting."
        },
        rolePlayPrompts: {
          guided: "Express disagreement with a colleague who believes AI will replace all software engineers by 2028.",
          semiOpen: "Your manager wants to cut team social events to save budget. Defend team morale benefits while proposing cost cuts elsewhere.",
          fullyOpen: "Debate whether college degrees are still worth the financial investment in the era of online certifications."
        },
        followUpQuestions: [
          "Do you feel more creative and energized in quiet isolation or around bustling teams?",
          "How do you maintain a healthy boundary between work life and home life when working remotely?",
          "What is the most effective meeting you've ever participated in, and why did it work?",
          "Do you think 4-day work weeks will become the international standard within a decade?",
          "How do you approach discussing sensitive topics with colleagues who hold opposing views?"
        ],
        canDoStatements: [
          "I can express polite disagreement using conversational softeners like 'I see where you're coming from'.",
          "I can concede a valid counter-argument using phrases like 'Fair point' and 'Touché'.",
          "I can propose a nuanced compromise using idioms like 'middle ground'."
        ]
      },
      {
        id: "en-t16-ai-ethics-discussion",
        areaId: 8,
        areaTitle: "Opinions & Discussion",
        title: "Nuanced Disagreement on Generative AI Impact",
        situation: "Discussing whether AI voice clones and creative automation enhance human ingenuity or erode creative authenticity.",
        difficulty: "Master",
        cefrLevel: "C2",
        estimatedSpeakingTime: "9-10 mins",
        scenarioId: "startup-pitch",
        keyPhrases: [
          { phrase: "It's a double-edged sword, undoubtedly.", phonetic: "[ɪts ə ˈdʌbəl ɛdʒd sɔːrd ʌnˈdaʊtɪdli]", english: "Both beneficial and dangerous.", register: "formal" },
          { phrase: "We risk commoditizing human craftsmanship.", phonetic: "[wiː rɪsk kəˈmɑːdɪtaɪzɪŋ ˈhjuːmən...]", english: "Philosophical concern.", register: "formal" },
          { phrase: "On the other hand, it democratizes creation.", phonetic: "[ɑːn ði ˈʌðər hænd ɪt dɪˈmɑːkrətaɪzɪz...]", english: "Counter-balancing upside.", register: "formal" },
          { phrase: "That's an oversimplification of the nuance.", phonetic: "[ðæts ən ˌoʊvərˌsɪmplɪfɪˈkeɪʃən...]", english: "Polite philosophical critique.", register: "formal" },
          { phrase: "The toothpaste is out of the tube now.", phonetic: "[ðə ˈtuːθpeɪst ɪz aʊt əv ðə tuːb]", english: "Irreversible technology change.", register: "casual" },
          { phrase: "We need proactive regulatory guardrails.", phonetic: "[wiː niːd proʊˈæktɪv ˈrɛɡjʊlətɔːri...]", english: "Policy framework argument.", register: "formal" },
          { phrase: "I take your point regarding copyright infringement.", phonetic: "[aɪ teɪk jɔːr pɔɪnt rɪˈɡɑːrdɪŋ...]", english: "Gracious debate alignment.", register: "formal" },
          { phrase: "Technology is neutral; intent is what matters.", phonetic: "[tɛkˈnɑːlədʒi ɪz ˈnuːtrəl...]", english: "Classic ethical stance.", register: "formal" },
          { phrase: "Where do we draw the line on synthetic likeness?", phonetic: "[wɛər duː wiː drɔː ðə laɪn...]", english: "Ethical boundary question.", register: "formal" },
          { phrase: "History suggests we will adapt as we always do.", phonetic: "[ˈhɪstəri səɡˈdʒɛsts wiː wɪl əˈdæpt...]", english: "Historical optimism.", register: "formal" }
        ],
        dialogue: [
          { speaker: "David", line: "Honestly, listening to these ultra-realistic AI voice models gives me the creeps. Are voice actors just going to become obsolete?", english: "Honestly, listening to ultra-realistic AI voices gives me chills. Are voice actors obsolete?" },
          { speaker: "Nia", line: "It's definitely a double-edged sword, David. But think about independent indie game creators who could never afford a $50,000 voice ensemble. It democratizes storytelling.", english: "Double-edged sword. But think of indie creators who couldn't afford a $50k cast. It democratizes creation." },
          { speaker: "David", line: "I take your point about democratizing access, but there's a slippery slope. If studio execs can train models on an actor's voice and use it perpetually without royalties, that's outright theft.", english: "I take your point on access, but it's a slippery slope. Studios using voices perpetually without royalties is theft." },
          { speaker: "Nia", line: "Completely agree with you on intellectual property theft. We desperately need enforceable regulatory guardrails and cryptographic watermarking.", english: "Completely agree on IP theft. We need enforceable guardrails and cryptographic watermarking." },
          { speaker: "David", line: "Exactly. The tech itself is mind-boggling, but without ethical boundaries, we're sleepwalking into an authenticity crisis.", english: "Exactly. Tech is mind-boggling, but without boundaries, we sleepwalk into an authenticity crisis." },
          { speaker: "Nia", line: "Well said. The toothpaste is out of the tube, so our focus has to be on governance rather than wishful thinking.", english: "Well said. Toothpaste is out of the tube, focus must be governance over wishful thinking." }
        ],
        fluencyBoosters: [
          { booster: "double-edged sword", category: "idiom", usage: "Something that has both substantial benefits and severe risks.", example: "Social media is a double-edged sword for youth." },
          { booster: "toothpaste is out of the tube", category: "idiom", usage: "An irreversible change that cannot be undone or put back.", example: "Once generative AI launched publicly, the toothpaste was out of the tube." },
          { booster: "slippery slope", category: "idiom", usage: "A course of action that will inevitably lead to something disastrous.", example: "Allowing surveillance without warrants is a slippery slope." },
          { booster: "draw the line", category: "idiom", usage: "To establish a firm moral or practical boundary.", example: "We have to draw the line at deepfakes of private citizens." },
          { booster: "I take your point", category: "formal", usage: "High-register phrase gracefully acknowledging the validity of a counter-argument.", example: "I take your point regarding latency, but security takes priority." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'This machine is very danger for humanity.'", correction: "Say: 'This technology represents a double-edged sword without regulatory guardrails.'", explanation: "Use nuanced analytical idioms rather than melodramatic simple statements." },
          { mistake: "Learner says: 'We cannot go back backwards.'", correction: "Say: 'The toothpaste is out of the tube' or 'The shift is irreversible.'", explanation: "'Go back backwards' is redundant; use established English idioms." },
          { mistake: "Learner says: 'I am opposite with you.'", correction: "Say: 'I take a slightly different view on that.'", explanation: "'I am opposite with you' is incorrect syntax. Use 'I take a different view'." }
        ],
        culturalPragmaticNote: {
          title: "Elevated Intellectual Discourse",
          textbookVsReality: "Textbooks rarely teach idioms used in keynote panel discussions and tech podcasts."
        },
        rolePlayPrompts: {
          guided: "Argue that social media algorithms should be legally required to be open-source.",
          semiOpen: "Debate whether artists whose works were scraped to train generative models deserve ongoing royalty revenue.",
          fullyOpen: "Deliver an impromptu 2-minute keynote rebuttal against a venture capitalist who claims human art will be obsolete in five years."
        },
        followUpQuestions: [
          "Do you believe synthetic AI speech will ever convey authentic human emotion?",
          "How should copyright laws adapt to protect creators in the age of generative models?",
          "Are you optimistic or cautious regarding the rapid progression of autonomous agents?",
          "What is an area of human creativity that you believe will remain forever untouchable by machines?",
          "How do you personally evaluate whether an online video or audio recording is genuine?"
        ],
        canDoStatements: [
          "I can navigate high-level ethical debates using analytical vocabulary and idioms.",
          "I can acknowledge a complex counter-argument gracefully using 'I take your point'.",
          "I can synthesize opposing arguments into a coherent policy or governance conclusion."
        ]
      }
    ]
  },

  // ── AREA 9: Storytelling ──
  {
    id: 9,
    title: "Storytelling",
    subtitle: "Past events, anecdotes, sequencing, humor",
    icon: "📖",
    topics: [
      {
        id: "en-t17-travel-mishap",
        areaId: 9,
        areaTitle: "Storytelling",
        title: "Reliving an Unforgettable Travel Mishap",
        situation: "Sharing a humorous anecdote with dinner friends about getting stranded on a remote Scottish ferry island with a dead rental car battery.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "So, to cut a long story short...", phonetic: "[soʊ tuː kʌt ə lɔːŋ ˈstɔːri ʃɔːrt]", english: "Story compression formula.", register: "casual" },
          { phrase: "Picture this: it's pitch black and freezing.", phonetic: "[ˈpɪktʃər ðɪs ɪts pɪtʃ blæk...]", english: "Setting the scene dramatically.", register: "casual" },
          { phrase: "Out of nowhere, the engine sputtered out.", phonetic: "[aʊt əv ˈnoʊwɛər ðə ˈɛndʒɪn...]", english: "Sudden narrative climax.", register: "neutral" },
          { phrase: "Lo and behold, there was an old farmer.", phonetic: "[loʊ ænd bɪˈhoʊld ðɛər wəz...]", english: "Surprise discovery idiom.", register: "casual" },
          { phrase: "We had zero cell signal.", phonetic: "[wiː hæd ˈzɪəroʊ sɛl ˈsɪɡnəl]", english: "Describing helplessness.", register: "casual" },
          { phrase: "You can imagine our sheer relief!", phonetic: "[juː kæn ɪˈmædʒɪn aʊər ʃɪər rɪˈliːf]", english: "Inviting audience empathy.", register: "neutral" },
          { phrase: "Looking back, it was hilarious.", phonetic: "[ˈlʊkɪŋ bæk ɪt wəz hɪˈlɛəriəs]", english: "Post-event humorous reflection.", register: "casual" },
          { phrase: "One thing led to another...", phonetic: "[wʌn θɪŋ lɛd tuː əˈnʌðər]", english: "Sequencing transition.", register: "casual" },
          { phrase: "It was a comedy of errors from start to finish.", phonetic: "[...ə ˈkɑːmədi əv ˈɛrərz...]", english: "Summary description.", register: "neutral" },
          { phrase: "All's well that ends well!", phonetic: "[ɔːlz wɛl ðæt ɛndz wɛl]", english: "Satisfying story conclusion.", register: "idiom" }
        ],
        dialogue: [
          { speaker: "Rafly", line: "Did I ever tell you about the time we got stranded on the Isle of Skye?", english: "Did I ever tell you about when we got stranded on the Isle of Skye?" },
          { speaker: "Liam", line: "No! What happened? You never mentioned this.", english: "No! What happened? You never mentioned this." },
          { speaker: "Rafly", line: "Picture this: it's 9 PM, pitch black, freezing rain, and we're driving this rickety rental car to catch the last ferry.", english: "Picture this: 9 PM, pitch black, freezing rain, driving a rickety rental to catch the last ferry." },
          { speaker: "Liam", line: "Oh man, that's already a recipe for disaster.", english: "Oh man, that's already a recipe for disaster." },
          { speaker: "Rafly", line: "Right? Suddenly, out of nowhere, the headlights flicker and the engine just completely dies in the middle of a single-track road.", english: "Right? Suddenly headlights flicker and engine dies on a single-track road." },
          { speaker: "Liam", line: "No way! Did you have any reception?", english: "No way! Did you have reception?" },
          { speaker: "Rafly", line: "Zero bars. Dead silence, just wind howling. We were genuinely terrified.", english: "Zero bars. Dead silence, wind howling. Genuinely terrified.", fillers: ["genuinely"] },
          { speaker: "Liam", line: "So what did you do?!", english: "So what did you do?!" },
          { speaker: "Rafly", line: "Well, we waited about twenty minutes, and lo and behold, this tractor comes rumbling down the hill! The driver had jumper cables, jump-started our battery, and gave us homemade shortbread.", english: "Waited 20 mins, and lo and behold, a tractor rumbles down! Driver had jumper cables and gave us shortbread." },
          { speaker: "Liam", line: "Haha, Scottish hospitality at its finest!", english: "Haha, Scottish hospitality at its finest!" },
          { speaker: "Rafly", line: "We literally made the ferry with two minutes to spare. Looking back, it's one of my favorite memories.", english: "Made the ferry with 2 minutes to spare. Looking back, favorite memory." }
        ],
        fluencyBoosters: [
          { booster: "Picture this", category: "discourse marker", usage: "Hooks listeners by inviting them to visualize the scene in their minds.", example: "Picture this: 40 degrees in Rome, no air conditioning, and lost luggage." },
          { booster: "lo and behold", category: "idiom", usage: "Old-fashioned theatrical idiom introducing a miraculous or funny surprise.", example: "I searched for an hour, and lo and behold, the keys were in my pocket." },
          { booster: "recipe for disaster", category: "idiom", usage: "A combination of factors that will definitely produce chaos.", example: "Driving with worn tires in heavy snow is a recipe for disaster." },
          { booster: "to cut a long story short", category: "connector", usage: "Skipping unnecessary narrative details to reach the punchline.", example: "To cut a long story short, we ended up sleeping at the airport." },
          { booster: "All's well that ends well", category: "idiom", usage: "Shakespearean conclusion affirming that a happy ending redeems earlier chaos.", example: "We missed three flights, but all's well that ends well!" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I will explain a story to you.'", correction: "Say: 'Did I ever tell you about the time...?'", explanation: "Native speakers introduce personal anecdotes with conversational hooks rather than formal announcements." },
          { mistake: "Learner tells the entire story in flat monotone without pacing.", correction: "Use dramatic pauses and markers: 'Suddenly...', 'Picture this...', 'Out of nowhere...'", explanation: "Storytelling in English relies heavily on dramatic vocal dynamics and pause anticipation." },
          { mistake: "Learner says: 'The telephone was without numbers.'", correction: "Say: 'We had zero bars / no signal.'", explanation: "Mobile connectivity is referred to as 'cell signal' or 'bars'." }
        ],
        culturalPragmaticNote: {
          title: "Self-Deprecating Humor in Anecdotes",
          textbookVsReality: "Textbooks show stories where the speaker is always heroic and triumphant."
        },
        rolePlayPrompts: {
          guided: "Tell a short 90-second story about getting locked out of your apartment in your pajamas.",
          semiOpen: "Share an anecdote about a disastrous cooking experiment where you accidentally swapped sugar for salt.",
          fullyOpen: "Recount a memorable live concert or sporting event where you unexpectedly ended up in VIP seats."
        },
        followUpQuestions: [
          "Do you enjoy recounting dramatic travel mishaps, or do they still make you cringe?",
          "Who is the most captivating, magnetic storyteller among your group of friends?",
          "Have you ever had an encounter with a complete stranger who saved your day while traveling?",
          "What is the funniest cultural misunderstanding you've ever found yourself in?",
          "Do you think embellishing a story slightly for comedic effect is acceptable?"
        ],
        canDoStatements: [
          "I can set the scene for a personal story using hooks like 'Picture this'.",
          "I can sequence past events dynamically with narrative tension and comedic timing.",
          "I can reflect humorously on past stressful mishaps using phrases like 'Looking back'."
        ]
      },
      {
        id: "en-t18-kitchen-disaster",
        areaId: 9,
        areaTitle: "Storytelling",
        title: "Kitchen Cooking Disaster with Comic Timing",
        situation: "Entertaining guests with the story of hosting your first Thanksgiving dinner and dropping the roasted turkey onto the kitchen floor.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "I bit off more than I could chew.", phonetic: "[aɪ bɪt ɔːf mɔːr ðæn aɪ kʊd tʃuː]", english: "Took on too ambitious a task.", register: "casual" },
          { phrase: "Everything that could go wrong, did.", phonetic: "[ˈɛvriθɪŋ ðæt kʊd ɡoʊ rɔːŋ dɪd]", english: "Murphy's Law formulation.", register: "neutral" },
          { phrase: "The smoke alarm started blaring at full blast.", phonetic: "[ðə smoʊk əˈlɑːrm ˈstɑːrtɪd ˈblɛərɪŋ...]", english: "Chaos escalation.", register: "neutral" },
          { phrase: "In slow motion, the platter slid right off.", phonetic: "[ɪn sloʊ ˈmoʊʃən ðə ˈplætər slɪd...]", english: "Comedic pacing.", register: "casual" },
          { phrase: "We invoked the five-second rule!", phonetic: "[wiː ɪnˈvoʊkt ðə faɪv ˈsɛkənd ruːl]", english: "Playful cultural food norm.", register: "casual" },
          { phrase: "We ended up ordering Chinese takeout.", phonetic: "[wiː ˈɛndɪd ʌp ˈɔːrdərɪŋ...]", english: "Humorous resolution.", register: "casual" },
          { phrase: "My face turned bright crimson.", phonetic: "[maɪ feɪs tɜːrnd braɪt ˈkrɪmzən]", english: "Extreme embarrassment.", register: "neutral" },
          { phrase: "It was an unmitigated disaster.", phonetic: "[ɪt wəz ən ʌnˈmɪtɪɡeɪtɪd dɪˈzæstər]", english: "Over-the-top comic description.", register: "formal" },
          { phrase: "You had to be there to believe it.", phonetic: "[juː hæd tuː biː ðɛər tuː...]", english: "Audience connection hook.", register: "casual" },
          { phrase: "We still laugh about it to this day.", phonetic: "[wiː stɪl læf əˈbaʊt ɪt...]", english: "Enduring memory tag.", register: "casual" }
        ],
        dialogue: [
          { speaker: "Host", line: "You think this soufflé looks tricky? You should have seen my first holiday dinner disaster three years ago.", english: "Think this soufflé looks tricky? You should've seen my holiday disaster 3 years ago." },
          { speaker: "Guest", line: "Oh do tell! What happened?", english: "Oh do tell! What happened?" },
          { speaker: "Host", line: "Well, I decided to host twelve people in my tiny studio apartment. I clearly bit off way more than I could chew.", english: "Decided to host 12 people in a studio. Bit off way more than I could chew.", fillers: ["Well", "clearly"] },
          { speaker: "Guest", line: "Twelve people?! In a studio?!", english: "Twelve people?! In a studio?!" },
          { speaker: "Host", line: "Exactly. The kitchen was an absolute war zone. I spent six hours prepping this giant fifteen-pound turkey.", english: "Exactly. Kitchen was a war zone. Spent 6 hours prepping a 15-pound turkey." },
          { speaker: "Guest", line: "And let me guess... it burned?", english: "And let me guess... it burned?" },
          { speaker: "Host", line: "Worse! It was golden brown and glorious. But as I took the roasting pan out, the greasy oven mitt slipped.", english: "Worse! Golden and glorious. But taking pan out, greasy mitt slipped." },
          { speaker: "Guest", line: "Oh no... you didn't!", english: "Oh no... you didn't!" },
          { speaker: "Host", line: "In literal slow motion, the turkey slid off the pan, bounced on the oven door, and landed squarely on the linoleum floor.", english: "In slow motion, turkey slid off, bounced on oven door, landed on linoleum floor." },
          { speaker: "Guest", line: "Hahaha! No way! What did the guests do?!", english: "Hahaha! No way! What did the guests do?!" },
          { speaker: "Host", line: "Dead silence. Then my best friend yelled: 'Five-second rule!' We all burst out laughing, ordered spicy pizza, and ate on the floor.", english: "Dead silence. Then friend yelled: 'Five-second rule!' Burst out laughing, ordered pizza." }
        ],
        fluencyBoosters: [
          { booster: "bit off more than I could chew", category: "idiom", usage: "Took on a commitment far larger than one's capacity to handle.", example: "Taking three AP classes was biting off more than I could chew." },
          { booster: "five-second rule", category: "idiom", usage: "Universal cultural joke asserting that food dropped on the floor is safe if picked up in 5 seconds.", example: "Dropped that chip? Five-second rule!" },
          { booster: "in slow motion", category: "discourse marker", usage: "Narrative device emphasizing the agonizing inevitability of an accident.", example: "I watched the wine glass tumble in slow motion." },
          { booster: "war zone", category: "idiom", usage: "Hyperbolic description of a messy, chaotic room or kitchen.", example: "After baking sourdough, my kitchen was a war zone." },
          { booster: "burst out laughing", category: "connector", usage: "Suddenly starting to laugh uncontrollably.", example: "Everyone burst out laughing when the dog barked." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I took too much work than my mouth.'", correction: "Say: 'I bit off more than I could chew.'", explanation: "Use the established English idiom for taking on overwhelming tasks." },
          { mistake: "Learner says: 'The bird fell down on the ground.'", correction: "Say: 'The turkey slid off the pan and landed on the floor.'", explanation: "Use 'floor' inside a house, and 'ground' when outdoors." },
          { mistake: "Learner tells funny stories without facial expressions or vocal modulation.", correction: "Incorporate vocal timing, eye contact, and pause suspense.", explanation: "Humor in English thrives on deadpan pauses and dynamic rhythm shifts." }
        ],
        culturalPragmaticNote: {
          title: "The Five-Second Rule Myth",
          textbookVsReality: "Textbooks avoid informal cultural folk rules."
        },
        rolePlayPrompts: {
          guided: "Tell a story about accidentally dyeing your white laundry bright pink in a communal laundromat.",
          semiOpen: "Share a memory of assembling IKEA furniture where you realized at the final step that one crucial board was backwards.",
          fullyOpen: "Recount an embarrassing moment where you waved enthusiastically at a complete stranger thinking they were your close friend."
        },
        followUpQuestions: [
          "Do you enjoy cooking for large dinner parties, or does it stress you out?",
          "What is your all-time signature dish that never fails to impress guests?",
          "Have you ever experienced a holiday kitchen emergency that turned into a hilarious memory?",
          "Do you follow recipes strictly to the gram, or do you cook by intuition and taste?",
          "What is the funniest mistake you've ever made when learning how to cook?"
        ],
        canDoStatements: [
          "I can deliver comedic narrative timing using pacing devices like 'in slow motion'.",
          "I can use popular cultural idioms like 'five-second rule' and 'bit off more than I could chew'.",
          "I can describe an embarrassing mistake with self-deprecating humor."
        ]
      }
    ]
  },

  // ── AREA 10: Culture & current topics ──
  {
    id: 10,
    title: "Culture & Current Topics",
    subtitle: "News, media, traditions, etiquette",
    icon: "🏮",
    topics: [
      {
        id: "en-t19-festival-tradition",
        areaId: 10,
        areaTitle: "Culture & Current Topics",
        title: "Explaining a Traditional Hometown Festival",
        situation: "Describing the rituals, culinary delights, and symbolic significance of a beloved cultural festival to an international friend.",
        difficulty: "Medium",
        cefrLevel: "B2",
        estimatedSpeakingTime: "6-7 mins",
        keyPhrases: [
          { phrase: "It dates back over four centuries.", phonetic: "[ɪt deɪts bæk ˈoʊvər fɔːr ˈsɛntʃəriz]", english: "Historical heritage opener.", register: "formal" },
          { phrase: "The festival marks the transition of seasons.", phonetic: "[...mɑːrks ðə trænˈzɪʃən əv ˈsiːzənz]", english: "Explaining cultural purpose.", register: "formal" },
          { phrase: "Streets are lined with vibrant paper lanterns.", phonetic: "[striːts ɑːr laɪnd wɪð ˈvaɪbrənt...]", english: "Visual scene description.", register: "neutral" },
          { phrase: "It's deeply rooted in family reunion.", phonetic: "[ɪts ˈdiːpli ˈruːtɪd ɪn ˈfæmɪli riːˈjuːnjən]", english: "Describing cultural values.", register: "formal" },
          { phrase: "People travel from all corners of the globe.", phonetic: "[...frəm ɔːl ˈkɔːrnərz əv ðə ɡloʊb]", english: "Emphasizing diaspora return.", register: "neutral" },
          { phrase: "There is an infectious sense of camaraderie.", phonetic: "[ðɛər ɪz ən ɪnˈfɛkʃəs sɛns əv ˌkɑːməˈrɑːdəri]", english: "Atmosphere description.", register: "formal" },
          { phrase: "The highlight of the night is the fireworks show.", phonetic: "[ðə ˈhaɪlaɪt əv ðə naɪt ɪz...]", english: "Peak celebration event.", register: "neutral" },
          { phrase: "It brings back so many childhood memories.", phonetic: "[ɪt brɪŋz bæk soʊ ˈmɛni ˈtʃaɪldhʊd...]", english: "Nostalgic reflection.", register: "casual" },
          { phrase: "You really have to experience it firsthand.", phonetic: "[juː ˈrɪəli hæv tuː ɪkˈspɪəriəns ɪt...]", english: "Personal recommendation.", register: "neutral" },
          { phrase: "It symbolizes letting go of past grievances.", phonetic: "[ɪt ˈsɪmbəlaɪzɪz ˈlɛtɪŋ ɡoʊ əv...]", english: "Spiritual / emotional meaning.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Friend", line: "Rafly, you mentioned taking time off in August. What's the occasion?", english: "Rafly, you mentioned time off in August. What's the occasion?" },
          { speaker: "Rafly", line: "I'm heading home for our annual midsummer lantern festival. It's a huge tradition in my hometown.", english: "Heading home for our annual midsummer lantern festival. Huge tradition in my hometown." },
          { speaker: "Friend", line: "Oh fascinating! What does the festival celebrate?", english: "Oh fascinating! What does it celebrate?" },
          { speaker: "Rafly", line: "It dates back several hundred years. Originally it celebrated the harvest and honored ancestors, but today it's basically a giant community reunion.", english: "Dates back hundreds of years. Started for harvest and ancestors, now a community reunion." },
          { speaker: "Friend", line: "What's the atmosphere like in the streets?", english: "What's the atmosphere like in the streets?" },
          { speaker: "Rafly", line: "Incredible. The entire downtown riverbank is lined with thousands of handmade paper lanterns, and food stalls sell seasonal delicacies on every corner.", english: "Incredible. Riverbank lined with thousands of handmade lanterns, food stalls everywhere." },
          { speaker: "Friend", line: "Is there a specific ceremony everyone participates in?", english: "Is there a specific ceremony everyone joins?" },
          { speaker: "Rafly", line: "At midnight, everyone releases miniature floating candles into the river. It symbolizes washing away the year's worries and making wishes for good health.", english: "At midnight, everyone releases floating candles on the river. Symbolizes washing away worries." },
          { speaker: "Friend", line: "That sounds breathtakingly poetic.", english: "That sounds breathtakingly poetic." },
          { speaker: "Rafly", line: "It really is. You'll have to come with me next year and experience it firsthand!", english: "It really is. You'll have to come with me next year and experience it firsthand!" }
        ],
        fluencyBoosters: [
          { booster: "dates back", category: "formal", usage: "Establishes historical antiquity of buildings, festivals, or rituals.", example: "This stone cathedral dates back to the 12th century." },
          { booster: "firsthand", category: "idiom", usage: "Directly through personal physical experience rather than hearsay.", example: "You need to taste authentic Neapolitan pizza firsthand." },
          { booster: "infectious sense of", category: "formal", usage: "Describes an emotion or mood that spreads rapidly among a crowd.", example: "There was an infectious sense of joy across the stadium." },
          { booster: "deeply rooted in", category: "formal", usage: "Having foundational historical or cultural origins.", example: "Bowing in Japan is deeply rooted in anticipatory empathy." },
          { booster: "What's the occasion?", category: "discourse marker", usage: "Friendly inquiry asking why someone is dressed up or celebrating.", example: "Flowers and champagne? What's the occasion?" }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'This festival is very old from 400 years.'", correction: "Say: 'This festival dates back over 400 years.'", explanation: "Use the phrasal verb 'dates back to / over' to describe age with polish." },
          { mistake: "Learner says: 'We do memory of dead people.'", correction: "Say: 'We honor our ancestors / remember departed loved ones.'", explanation: "'Honor ancestors' conveys cultural reverence with dignity." },
          { mistake: "Learner says: 'You must live it.'", correction: "Say: 'You have to experience it firsthand.'", explanation: "The natural collocation is 'experience it firsthand'." }
        ],
        culturalPragmaticNote: {
          title: "Explaining Culture Without Exoticizing",
          textbookVsReality: "Textbooks teach describing cultural traditions as quaint historical relics."
        },
        rolePlayPrompts: {
          guided: "Explain your country's New Year traditions, typical food, and symbolic family rituals to a curious foreign colleague.",
          semiOpen: "Your foreign friend is visiting your country during a sacred holiday where shops close and noise is restricted. Explain etiquette rules so they aren't caught off guard.",
          fullyOpen: "Compare how weddings are celebrated in Western culture versus your native culture, highlighting key emotional and financial differences."
        },
        followUpQuestions: [
          "What is your all-time favorite holiday or festival of the entire year, and why?",
          "Are there traditional foods associated with holidays that you only eat once a year?",
          "How have modern commercial trends altered ancient cultural celebrations in your country?",
          "Have you ever celebrated a local festival abroad with natives that left a lasting impression?",
          "Do you think younger generations are maintaining cultural heritage traditions as closely as their parents?"
        ],
        canDoStatements: [
          "I can articulate the historical roots and symbolic meaning of a cultural festival.",
          "I can vividly describe celebratory street atmospheres using sensory vocabulary.",
          "I can invite international friends to participate in cultural traditions with welcoming warmth."
        ]
      },
      {
        id: "en-t20-media-trends-attention",
        areaId: 10,
        areaTitle: "Culture & Current Topics",
        title: "Discussing Viral Media Trends & Attention Spans",
        situation: "Analyzing how short-form video algorithms (TikTok, Reels) are reshaping attention spans, pop culture literacy, and music discovery.",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "8-9 mins",
        keyPhrases: [
          { phrase: "Short-form video is reshaping human cognition.", phonetic: "[ʃɔːrt fɔːrm ˈvɪdioʊ ɪz riːˈʃeɪpɪŋ...]", english: "Broad cultural thesis.", register: "formal" },
          { phrase: "Our attention spans are dwindling to seconds.", phonetic: "[aʊər əˈtɛnʃən spænz ɑːr ˈdwɪndəlɪŋ...]", english: "Cognitive critique.", register: "formal" },
          { phrase: "Songs are manufactured specifically for viral hooks.", phonetic: "[sɔːŋz ɑːr ˌmænjʊˈfæktʃərd...]", english: "Music industry trend critique.", register: "formal" },
          { phrase: "Doomscrolling has become a default bedtime ritual.", phonetic: "[ˈduːmˌskroʊlɪŋ hæz bɪˈkʌm ə...]", english: "Behavioral observation.", register: "casual" },
          { phrase: "The algorithm feeds you an echo chamber.", phonetic: "[ði ˈælɡərɪðəm fiːdz juː ən ˈɛkoʊ ˈtʃeɪmbər]", english: "Information bias critique.", register: "formal" },
          { phrase: "I did a digital detox over the weekend.", phonetic: "[aɪ dɪd ə ˈdɪdʒɪtəl ˈdiːtɑːks...]", english: "Mindful wellness action.", register: "casual" },
          { phrase: "It was remarkably liberating.", phonetic: "[ɪt wəz rɪˈmɑːrkəbli ˈlɪbəreɪtɪŋ]", english: "Positive detox reflection.", register: "formal" },
          { phrase: "We're losing the appetite for long-form essays.", phonetic: "[wiːr ˈluːzɪŋ ði ˈæpɪtaɪt fɔːr...]", english: "Reading habit shift.", register: "formal" },
          { phrase: "Instant dopamine hits keep users hooked.", phonetic: "[ˈɪnstənt ˈdoʊpəmiːn hɪts...]", english: "Neuroscience framing.", register: "formal" },
          { phrase: "Moderation is key in the attention economy.", phonetic: "[ˌmɑːdəˈreɪʃən ɪz kiː ɪn ði...]", english: "Balanced summary.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Leo", line: "I checked my phone screen time report yesterday, and it clocked in at five hours. Mostly mindless Reels scrolling.", english: "Checked my screen time yesterday: 5 hours. Mostly mindless Reels scrolling." },
          { speaker: "Tara", line: "Ugh, don't remind me. I fell down a rabbit hole of home renovation clips until 2 AM last night.", english: "Ugh, don't remind me. Fell down a rabbit hole of reno clips until 2 AM.", fillers: ["Ugh"] },
          { speaker: "Leo", line: "It's genuinely wild how these algorithms hook you with variable dopamine rewards. I feel like my attention span is totally fried.", english: "Wild how algorithms hook you with dopamine rewards. My attention span is fried." },
          { speaker: "Tara", line: "I know! I tried reading a novel on Sunday, and after two pages, I had this physical itch to check my notifications.", english: "I know! Tried reading a novel Sunday, after 2 pages had an itch to check notifications." },
          { speaker: "Leo", line: "That's why I did a complete digital detox last weekend—phone in a drawer from Friday night to Sunday dinner.", english: "That's why I did a digital detox last weekend—phone in a drawer all weekend." },
          { speaker: "Tara", line: "Seriously? How did you survive without Google Maps or Spotify?", english: "Seriously? How did you survive without Maps or Spotify?" },
          { speaker: "Leo", line: "It was weirdly liberating. I cooked a massive stew, went for a long walk, and actually finished an entire book.", english: "Weirdly liberating. Cooked a stew, went for a walk, finished an entire book." },
          { speaker: "Tara", line: "You've inspired me. I'm putting app limits on TikTok tonight.", english: "You've inspired me. Putting app limits on TikTok tonight." }
        ],
        fluencyBoosters: [
          { booster: "rabbit hole", category: "idiom", usage: "An engrossing topic or content spiral that consumes hours unnoticed.", example: "I fell down a rabbit hole researching mechanical watches." },
          { booster: "digital detox", category: "casual", usage: "Deliberately abstaining from screens and smartphones to reset mental focus.", example: "A 48-hour digital detox helped cure my insomnia." },
          { booster: "fried (slang)", category: "casual", usage: "Exhausted, burnt out, or cognitively depleted.", example: "My brain is completely fried after six hours of back-to-back coding." },
          { booster: "doomscrolling", category: "idiom", usage: "Obsessively scrolling through negative social media feeds.", example: "Doomscrolling late at night destroys your sleep quality." },
          { booster: "liberating", category: "formal", usage: "Producing a profound sense of freedom from burden or mental clutter.", example: "Deleting unused social apps was remarkably liberating." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'I was looking the screen for five hours without brain.'", correction: "Say: 'I spent five hours mindlessly scrolling through video feeds.'", explanation: "Use modern collocations: 'mindlessly scrolling' or 'doomscrolling'." },
          { mistake: "Learner says: 'I cannot concentrate my head.'", correction: "Say: 'My attention span is completely fried.'", explanation: "'Attention span' is the standard cognitive term in everyday English." },
          { mistake: "Learner says: 'I closed my phone for weekend.'", correction: "Say: 'I did a digital detox over the weekend.'", explanation: "'Digital detox' is the recognized cultural idiom." }
        ],
        culturalPragmaticNote: {
          title: "The Screen-Time Confession Ritual",
          textbookVsReality: "Textbooks ignore modern smartphone psychology."
        },
        rolePlayPrompts: {
          guided: "Confess your high screen time to a friend, explain which app is responsible, and propose a mutual challenge.",
          semiOpen: "Debate whether parents should ban smartphones for children under the age of 14.",
          fullyOpen: "Convince your company leadership to adopt 'No-Meeting Wednesdays' and shut down Slack notifications after 6 PM."
        },
        followUpQuestions: [
          "How many hours of daily screen time do you average, and does that number bother you?",
          "Have you ever attempted a 24-hour digital detox without touching the internet?",
          "Do you think short-form videos are permanently rewiring how young people consume literature?",
          "What is your favorite podcast or long-form media channel that you listen to for hours?",
          "How do you discipline yourself against checking your phone during focused study sessions?"
        ],
        canDoStatements: [
          "I can discuss modern social media habits using contemporary vocabulary like 'doomscrolling' and 'rabbit hole'.",
          "I can articulate cognitive impacts like shrinking attention spans and dopamine loops.",
          "I can share personal experiences with digital detoxes and focus management strategies."
        ]
      }
    ]
  },

  // ── AREA 11: Problem-solving & repair ──
  {
    id: 11,
    title: "Problem-Solving & Repair",
    subtitle: "Misunderstandings, asking to repeat, clarifying, apologizing",
    icon: "🔧",
    topics: [
      {
        id: "en-t21-bad-line-clarification",
        areaId: 11,
        areaTitle: "Problem-Solving & Repair",
        title: "Resolving Acoustic & Language Misunderstandings",
        situation: "Navigating a glitchy Zoom call with audio dropouts, politely asking a stakeholder to repeat and rephrase crucial contract numbers.",
        difficulty: "Easy",
        cefrLevel: "B1",
        estimatedSpeakingTime: "5-6 mins",
        scenarioId: "tech-standup",
        keyPhrases: [
          { phrase: "You're breaking up slightly on my end.", phonetic: "[jɔːr ˈbreɪkɪŋ ʌp ˈslaɪtli...]", english: "Audio dropout notification.", register: "neutral" },
          { phrase: "Could you repeat that last figure?", phonetic: "[kʊd juː rɪˈpiːt ðæt læst ˈfɪɡjər]", english: "Specific repeat request.", register: "formal" },
          { phrase: "Just to make sure we're on the same page...", phonetic: "[dʒʌst tuː meɪk ʃʊər wiːr ɑːn ðə...]", english: "Alignment verification formula.", register: "formal" },
          { phrase: "Let me mirror back what I heard.", phonetic: "[lɛt miː ˈmɪrər bæk wʌt aɪ hɜːrd]", english: "Active listening technique.", register: "formal" },
          { phrase: "Did you say fifteen or fifty?", phonetic: "[dɪd juː seɪ ˌfɪfˈtiːn ɔːr ˈfɪfti]", english: "Disambiguating numbers.", register: "neutral" },
          { phrase: "Could you type that key term in the chat?", phonetic: "[kʊd juː taɪp ðæt kiː tɜːrm...]", english: "Multimodal backup.", register: "neutral" },
          { phrase: "Sorry about that, my connection dipped.", phonetic: "[ˈsɑːri əˈbaʊt ðæt maɪ kəˈnɛkʃən...]", english: "Excusing Wi-Fi instability.", register: "casual" },
          { phrase: "I caught the gist, but missed the deadline.", phonetic: "[aɪ kɔːt ðə dʒɪst bʌt mɪst...]", english: "Partial comprehension reporting.", register: "neutral" },
          { phrase: "You're coming through loud and clear now.", phonetic: "[jɔːr ˈkʌmɪŋ θruː laʊd ænd klɪər...]", english: "Audio restored confirmation.", register: "neutral" },
          { phrase: "Thanks for bearing with my patchy audio.", phonetic: "[θæŋks fɔːr ˈbɛərɪŋ wɪð maɪ...]", english: "Gratitude for patience.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Client", line: "So regarding the international SLA, we require uptime of 99.[dropout]... and response times within [crackle] minutes.", english: "Regarding SLA, we require uptime of 99.[dropout] and response within [crackle] mins." },
          { speaker: "Engineer", line: "Apologies, Marcus, you broke up right at the crucial second. Did you say 99.9% or 99.99%?", english: "Apologies, Marcus, you broke up right then. Did you say 99.9% or 99.99%?" },
          { speaker: "Client", line: "Ah, sorry about that! I said three nines—99.9% uptime, and response within fifteen minutes.", english: "Ah, sorry! Three nines—99.9% uptime, response within 15 minutes." },
          { speaker: "Engineer", line: "Just to verify: fifteen—one-five, not fifty—five-zero, correct?", english: "Just to verify: 15—one-five, not 50—five-zero, correct?" },
          { speaker: "Client", line: "Correct, one-five minutes for critical tier-one outages.", english: "Correct, 15 minutes for critical outages." },
          { speaker: "Engineer", line: "Understood. Let me type that into the meeting minutes right now so we have a shared written record.", english: "Understood. I'll type that into minutes now for a written record." },
          { speaker: "Client", line: "Great idea. Thanks for double-checking, glad we caught that before drafting the legal contract.", english: "Great idea. Thanks for double-checking, glad we caught that before legal drafting." }
        ],
        fluencyBoosters: [
          { booster: "breaking up", category: "idiom", usage: "Audio or cellular connection stuttering with gaps and digital dropouts.", example: "Can you hear me? You're breaking up badly." },
          { booster: "on the same page", category: "idiom", usage: "In complete agreement and shared understanding.", example: "Let's review the timeline so everyone is on the same page." },
          { booster: "caught the gist", category: "idiom", usage: "Understood the general overview or main idea, even if specific words were lost.", example: "My French is rusty, but I caught the gist of his speech." },
          { booster: "loud and clear", category: "discourse marker", usage: "Audio confirmation indicating perfect, crisp clarity.", example: "Mic check? — Loud and clear!" },
          { booster: "bear with (someone)", category: "formal", usage: "Politely asking someone for patience while resolving a technical glitch.", example: "Please bear with me while my screen loads." }
        ],
        commonMistakes: [
          { mistake: "Learner nods silently and pretends to understand unclear numbers.", correction: "Say: 'Apologies, you broke up slightly—did you say 15 or 50?'", explanation: "Pretending to understand numbers in engineering or contracts leads to catastrophic project errors. Always clarify." },
          { mistake: "Learner shouts: 'What?! I cannot listen you!'", correction: "Say: 'Sorry, your audio is cutting out on my end.'", explanation: "'Listen' is an intentional verb ('listen to music'); use 'I can't hear you' or 'you're cutting out'." },
          { mistake: "Learner says: 'Repeat again everything.'", correction: "Say: 'Could you repeat that last sentence, please?'", explanation: "'Repeat again' is redundant. Ask for the specific missed clause." }
        ],
        culturalPragmaticNote: {
          title: "Clarification as Competence",
          textbookVsReality: "Textbook learners fear that asking someone to repeat exposes poor language skills."
        },
        rolePlayPrompts: {
          guided: "Your colleague is speaking too fast over a phone call. Politely ask them to slow down and clarify the deadline date.",
          semiOpen: "You are on a noisy subway train trying to take an important delivery call. Explain the background noise and ask them to text you the address.",
          fullyOpen: "A client gave you instructions containing complex acronyms you've never heard. Probe for clarification without looking unprofessional."
        },
        followUpQuestions: [
          "Do you feel comfortable asking native speakers to repeat themselves when they talk fast?",
          "What is your strategy when you have completely lost the thread of an ongoing discussion?",
          "How do you handle difficult accents in international video conference meetings?",
          "Do you find video cameras on or off easier for understanding spoken foreign speech?",
          "What is the best way to verify financial figures over a voice call to prevent costly errors?"
        ],
        canDoStatements: [
          "I can alert a speaker to audio connectivity problems using idioms like 'breaking up'.",
          "I can disambiguate similar sounding numbers (e.g., fifteen vs. fifty) assertively.",
          "I can mirror back what I heard to guarantee mutual alignment on deliverables."
        ]
      },
      {
        id: "en-t22-professional-apology",
        areaId: 11,
        areaTitle: "Problem-Solving & Repair",
        title: "Professional Restitution & Delivering a Sincere Apology",
        situation: "Your team shipped a buggy deployment that caused two hours of system downtime for an enterprise customer. Deliver an executive apology and concrete remediation plan.",
        difficulty: "Hard",
        cefrLevel: "C1",
        estimatedSpeakingTime: "8-9 mins",
        scenarioId: "tech-standup",
        keyPhrases: [
          { phrase: "I want to apologize unreservedly for the downtime.", phonetic: "[aɪ wɑːnt tuː əˈpɑːlədʒaɪz ˌʌnrɪˈzɜːrvɪdli...]", english: "Executive unreserved apology.", register: "formal" },
          { phrase: "We take full accountability for this incident.", phonetic: "[wiː teɪk fʊl əˌkaʊntəˈbɪləti...]", english: "Accepting organizational responsibility.", register: "formal" },
          { phrase: "Here is a transparent breakdown of what occurred.", phonetic: "[hɪər ɪz ə trænsˈpærənt ˈbreɪkdaʊn...]", english: "Post-mortem analysis offer.", register: "formal" },
          { phrase: "A database lock triggered cascading timeouts.", phonetic: "[ə ˈdeɪtəbeɪs lɑːk ˈtrɪɡərd kæsˈkeɪdɪŋ...]", english: "Technical root-cause explanation.", register: "formal" },
          { phrase: "We have already instituted automated rollback tests.", phonetic: "[wiː hæv ɔːlˈrɛdi ˈɪnstɪtuːtɪd...]", english: "Corrective action statement.", register: "formal" },
          { phrase: "To make restitution, we are waiving this month's fee.", phonetic: "[tuː meɪk ˌrɛstɪˈtuːʃən wiː ɑːr ˈweɪvɪŋ...]", english: "Commercial remedy gesture.", register: "formal" },
          { phrase: "Restoring your trust is our highest priority.", phonetic: "[rɪˈstɔːrɪŋ jɔːr trʌst ɪz aʊər ˈhaɪɪst...]", english: "Relational restoration commitment.", register: "formal" },
          { phrase: "I appreciate your patience while we remediated this.", phonetic: "[aɪ əˈpriːʃieɪt jɔːr ˈpeɪʃəns...]", english: "Customer recognition.", register: "formal" },
          { phrase: "We will publish a full blameless post-mortem by noon.", phonetic: "[wiː wɪl ˈpʌblɪʃ ə fʊl ˈbleɪmləs...]", english: "Public transparent documentation.", register: "formal" },
          { phrase: "I am personally overseeing this pipeline refactor.", phonetic: "[aɪ æm ˈpɜːrsənəli ˌoʊvərˈsiːɪŋ...]", english: "Executive oversight assurance.", register: "formal" }
        ],
        dialogue: [
          { speaker: "Customer VP", line: "Rafly, our checkout gateway was offline for two hours during peak European trading. Our executive board is furious.", english: "Rafly, checkout was down for 2 hours during peak EU hours. Our board is furious." },
          { speaker: "Rafly", line: "I completely understand your frustration, David, and I want to apologize unreservedly on behalf of our engineering leadership.", english: "I completely understand, David, and apologize unreservedly for our engineering leadership." },
          { speaker: "Customer VP", line: "We need more than apologies. We lost an estimated $80,000 in transaction fees. How did this pass your staging QA?", english: "We need more than apologies. We lost $80k in fees. How did this pass QA?" },
          { speaker: "Rafly", line: "We take full accountability. An unindexed migration locked the transaction table, triggering cascading 504 timeouts that our canary deployment failed to isolate.", english: "Full accountability. An unindexed migration locked tables, triggering timeouts canary missed." },
          { speaker: "Customer VP", line: "What is being done to ensure this never happens again?", english: "What is being done so this never happens again?" },
          { speaker: "Rafly", line: "We've implemented three concrete remediation steps: first, hard automated query linter checks; second, automated rollback triggers under load; third, a full blameless post-mortem published by 1 PM.", english: "Three concrete steps: automated linter checks, automated rollback triggers, and a post-mortem by 1 PM." },
          { speaker: "Customer VP", line: "And what about our financial losses?", english: "And what about our financial losses?" },
          { speaker: "Rafly", line: "We are immediately issuing a full 100% service credit for your entire quarterly platform bill. Restoring your trust is our single highest priority.", english: "We are issuing a 100% credit for your quarterly platform bill. Restoring trust is top priority." },
          { speaker: "Customer VP", line: "I appreciate your swift transparency and ownership, Rafly. Send through the written post-mortem as soon as it's signed off.", english: "I appreciate the swift transparency and ownership. Send the post-mortem once signed off." }
        ],
        fluencyBoosters: [
          { booster: "unreservedly", category: "formal", usage: "Complete, sincere apology without excuses, conditions, or deflection.", example: "We apologize unreservedly for the inconvenience caused." },
          { booster: "full accountability", category: "formal", usage: "Accepting 100% responsibility without shifting blame onto third parties.", example: "Our executive team takes full accountability for the oversight." },
          { booster: "blameless post-mortem", category: "idiom", usage: "Tech industry standard engineering review focused on systemic process fixes rather than punishing individuals.", example: "We held a blameless post-mortem to analyze the outage." },
          { booster: "cascading timeouts", category: "formal", usage: "System failure where one bottleneck causes downstream services to fail sequentially.", example: "The database latency caused cascading timeouts across our API." },
          { booster: "make restitution", category: "formal", usage: "To compensate or make amends for a loss, damage, or injury.", example: "We offered service credits to make restitution for the delay." }
        ],
        commonMistakes: [
          { mistake: "Learner says: 'Sorry, but AWS had a problem so it's not our fault.'", correction: "Say: 'We take full accountability for this incident, and here is how we are resolving it.'", explanation: "Deflecting blame onto cloud providers looks amateurish to enterprise clients. Own the incident." },
          { mistake: "Learner says: 'I am so, so, so sorry, please don't be angry.'", correction: "Say: 'I want to apologize unreservedly and share our immediate remediation plan.'", explanation: "Excessive emotional pleading sounds unprofessional. Deliver a firm, composed, accountable remedy." },
          { mistake: "Learner fails to offer commercial remedy or service credits.", correction: "Say: 'To make restitution, we are applying a full quarterly credit to your account.'", explanation: "A corporate apology must include concrete financial or service restitution." }
        ],
        culturalPragmaticNote: {
          title: "The Anatomy of an Executive Apology",
          textbookVsReality: "Textbooks teach saying 'I am sorry' repeatedly."
        },
        rolePlayPrompts: {
          guided: "Apologize to a client for missing an agreed deliverable deadline by 24 hours, and offer a concrete completion date.",
          semiOpen: "Your restaurant staff accidentally spilled red wine on a customer's expensive silk jacket. Deliver an immediate manager apology and dry cleaning restitution.",
          fullyOpen: "You accidentally sent a confidential investor pitch deck to a rival competitor. Confess the mistake to your CEO with a damage mitigation plan."
        },
        followUpQuestions: [
          "What distinguishes a genuinely sincere professional apology from a public relations excuse?",
          "How do you maintain team morale after an embarrassing public failure or bug release?",
          "Have you ever had a customer become more loyal to your company AFTER you resolved a major crisis?",
          "What is your approach to conducting blameless post-mortems within engineering organizations?",
          "How do you handle personal mistakes at work without experiencing imposter syndrome?"
        ],
        canDoStatements: [
          "I can deliver an executive-level apology taking full organizational accountability.",
          "I can present a structured 3-part remediation plan to restore customer trust.",
          "I can negotiate commercial restitution and service credits professionally under high pressure."
        ]
      }
    ]
  }
];

// All 11 Areas with 22 Topics are fully defined
export const ENGLISH_FULL_CURRICULUM = ENGLISH_CURRICULUM_AREAS;


