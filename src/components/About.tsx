import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import {features} from "../constants/about.constants.tsx";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  const translatedFeatures = features(t)

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.about.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {translatedFeatures.map((feature, index) => (
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
