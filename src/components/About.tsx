import React from 'react';
import { Target, Users, Gauge } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t.about.features.expertGuidance.title,
      description: t.about.features.expertGuidance.description,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t.about.features.community.title,
      description: t.about.features.community.description,
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: t.about.features.flexibleHours.title,
      description: t.about.features.flexibleHours.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.about.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="inline-block p-4 bg-yellow-100 rounded-full text-yellow-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
