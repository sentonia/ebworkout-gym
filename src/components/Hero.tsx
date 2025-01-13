import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl md:text-left text-center mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.hero.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? <span className="text-yellow-500">{line}</span> : line}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {t.hero.subtitle}
            </p>
            <button 
              onClick={scrollToPricing}
              className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}