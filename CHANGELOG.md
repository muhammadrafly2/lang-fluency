# Changelog

## [2.0.0] - Multi-Language Support

### 🎉 Major Features Added

#### Multi-Language Support
- Added support for **4 languages**: English 🇺🇸, Japanese 🇯🇵, Korean 🇰🇷, and Spanish 🇪🇸
- Language-specific AI coaching with cultural context
- Automatic speech recognition language switching
- Language indicator in the header UI

### 📝 Changes

#### Type System (`src/types/index.ts`)
- Renamed `EnglishLevel` to `LanguageLevel` for multi-language support
- Added `TargetLanguage` type with 4 language options
- Added `TARGET_LANGUAGES` constant with language metadata:
  - Display name and flag emoji
  - Speech recognition language codes
  - Cultural context information
- Updated `AppSettings` interface to include `targetLanguage` field

#### API Route (`src/app/api/chat/route.ts`)
- Enhanced `buildSystemPrompt()` function with language-specific instructions
- Added language map with cultural coaching guidelines:
  - **English**: Natural expressions and idioms
  - **Japanese**: Keigo (敬語) system, kanji/hiragana/katakana
  - **Korean**: Honorifics (존댓말/반말), Hangul pronunciation
  - **Spanish**: Formal/informal (tú/usted), regional variations
- AI now responds in the target language with English feedback
- Updated system prompt to include language-specific cultural context

#### Settings Modal (`src/components/SettingsModal.tsx`)
- Added **Target Language** dropdown selector
- Language selection automatically updates speech recognition language
- Updated label from "English Level" to "Proficiency Level"
- Displays language flag emoji in dropdown options

#### Main Page (`src/app/page.tsx`)
- Added language indicator badge in header with flag and language name
- Updated default settings to include `targetLanguage: "english"`
- Pass `targetLanguage` to API chat endpoint
- Updated welcome message to mention multi-language support
- Imported `Globe` icon from lucide-react for language indicator

#### Documentation
- **README.md**: Complete rewrite with:
  - Multi-language feature highlights
  - Supported languages section
  - Detailed setup and configuration instructions
  - Practice modes and tutor styles documentation
  - Tech stack and browser compatibility info
  
- **LANGUAGES.md**: New comprehensive guide including:
  - Language-specific features and focus areas
  - Speech recognition details for each language
  - Cultural considerations and common corrections
  - Example practice topics per language
  - Tips for maximizing practice effectiveness
  - Technical notes and browser compatibility

### 🔧 Technical Details

#### Speech Recognition
- Language codes automatically map to target language:
  - English: `en-US`
  - Japanese: `ja-JP`
  - Korean: `ko-KR`
  - Spanish: `es-ES`

#### AI Model
- Using Nvidia Nemotron model via OpenRouter
- Supports all 4 languages with high quality
- Provides grammar corrections and cultural feedback
- Responds in target language with English feedback section

### 🎯 User Experience Improvements

1. **Seamless Language Switching**
   - Change language in settings
   - Speech recognition updates automatically
   - AI immediately responds in new language

2. **Visual Language Indicator**
   - Always visible in header
   - Shows current target language with flag
   - Quick reference for active language

3. **Cultural Context**
   - Language-specific coaching (e.g., Japanese keigo, Korean honorifics)
   - Appropriate formality levels
   - Regional variations and idioms

### 🐛 Bug Fixes
- None (new feature release)

### ⚠️ Breaking Changes
- `EnglishLevel` type renamed to `LanguageLevel`
- `AppSettings` interface now requires `targetLanguage` field
- Existing localStorage settings will default to English

### 📦 Dependencies
- No new dependencies added
- All changes use existing libraries

### 🧪 Testing
- ✅ TypeScript compilation successful
- ✅ Build process completed without errors
- ✅ All diagnostics passed

### 🚀 Migration Guide

If you have existing settings in localStorage:

1. Old settings will automatically default to English
2. Users should open Settings and select their preferred language
3. No data loss - all other settings preserved

### 📚 Next Steps

Future enhancements could include:
- More languages (French, German, Mandarin, etc.)
- Language-specific practice scenarios
- Pronunciation scoring per language
- Native speaker voice options
- Language mixing detection and correction

---

**Version**: 2.0.0  
**Date**: 2026-05-18  
**Author**: Nexora Team
