# Nexora - Multi-Language AI Fluency Coach

An AI-powered language learning companion that helps you practice and improve your fluency in **English, Japanese, Korean, and Spanish** through natural conversation.

## 🌍 Supported Languages

- 🇺🇸 **English** - Practice natural English expressions and idioms
- 🇯🇵 **Japanese** - Learn proper keigo (敬語), kanji, and cultural nuances
- 🇰🇷 **Korean** - Master honorifics (존댓말/반말) and Hangul
- 🇪🇸 **Spanish** - Practice formal/informal speech and cultural context

## ✨ Features

- **Voice Recognition** - Speak naturally in your target language
- **AI Conversation** - Get real-time responses from an AI tutor
- **Instant Feedback** - Receive grammar corrections and suggestions
- **Multiple Practice Modes** - Free chat, roleplay, debate, storytelling, interview, and pronunciation
- **Tutor Styles** - Choose between friendly, strict, or socratic teaching approaches
- **Text-to-Speech** - Hear proper pronunciation from the AI
- **Progress Tracking** - Monitor your fluency score and improvements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- An [OpenRouter API key](https://openrouter.ai/keys)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fluent-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
OPENROUTER_API_KEY=your_api_key_here
```

4. Run the development server:

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Configuration

1. Click the **Settings** icon (top-right or center button on mobile)
2. Enter your **OpenRouter API key**
3. Select your **target language** (English, Japanese, Korean, or Spanish)
4. Choose your **proficiency level** (Beginner, Intermediate, or Advanced)
5. Customize voice settings (speed, pitch, voice selection)
6. Click **Apply Settings**

## 🎯 How to Use

1. **Select a Practice Mode** - Choose from the dashboard or conversation view
2. **Start Speaking** - Click the microphone orb to begin voice input
3. **Or Type** - Use the text input at the bottom of the conversation panel
4. **Get Feedback** - Receive instant corrections and suggestions after each message
5. **Track Progress** - View your fluency score and statistics in the Analytics view

## 🎭 Practice Modes

- **Free Conversation** - Talk about anything naturally
- **Role Play** - Act out real-world scenarios (shopping, doctor visits, etc.)
- **Debate & Discuss** - Practice argumentation and persuasion
- **Storytelling** - Build creative stories together
- **Job Interview** - Prepare for professional situations
- **Pronunciation** - Focus on accent and phonetic accuracy

## 🎨 Tutor Styles

- **Friendly** - Warm, encouraging, and supportive
- **Strict** - Precise corrections with high standards
- **Socratic** - Guided questions to help you discover mistakes

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenRouter API (Nvidia Nemotron model)
- **Speech**: Web Speech API (Recognition & Synthesis)
- **Icons**: Lucide React

## 📱 Browser Compatibility

- **Chrome/Edge** - Full support (recommended)
- **Safari** - Partial support (speech recognition may be limited)
- **Firefox** - Limited speech recognition support

## 🔒 Privacy

- Your API key is stored locally in your browser
- Conversations are sent to OpenRouter for AI processing
- No data is stored on our servers

## Learn More

To learn more about Next.js, take a look at the following resources:

## Learn More

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### OpenRouter

- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Get API Keys](https://openrouter.ai/keys)

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
