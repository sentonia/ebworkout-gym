import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded ${
          language === 'en' ? 'bg-yellow-500 text-black' : 'text-gray-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('el')}
        className={`px-3 py-1 rounded ${
          language === 'el' ? 'bg-yellow-500 text-black' : 'text-gray-600'
        }`}
      >
        EL
      </button>
    </div>
  );
}