// src/context/TranslationContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState({ name: "English", code: "en" });
  const [translations, setTranslations] = useState({});

  const translateText = async (text, targetLang) => {
    if (!text || targetLang === "en") return text; // Skip if English
    console.log(`Translating "${text}" to ${targetLang}`); // Debug
    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {
          q: text,
          target: targetLang,
          format: "text",
        },
        {
          params: { key: import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY },
        }
      );
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Translation error:", error);
      return text; // Fallback to original
    }
  };

  const translate = async (key, text, langCode = language.code) => {
    if (!translations[key] || !translations[key][langCode]) {
      const translated = await translateText(text, langCode);
      setTranslations((prev) => ({
        ...prev,
        [key]: { ...prev[key], [langCode]: translated },
      }));
      return translated;
    }
    return translations[key][langCode];
  };

  // Clear cache on language change
  useEffect(() => {
    setTranslations({}); // Reset cache to force re-translation
  }, [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => useContext(TranslationContext);