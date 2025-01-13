import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Trainers() {
  const { language } = useLanguage();
  const t = translations[language];

  const trainers = [
    {
      name: 'Eirini',
      specialty: t.trainers.specialists.cross,
      image:
        'https://images.unsplash.com/photo-1685633224669-175193bd175b?auto=format&fit=crop&q=80',
    },
    {
      name: 'Spiros',
      specialty: t.trainers.specialists.functional,
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80',
    },
    {
      name: 'Moschoula',
      specialty: t.trainers.specialists.pilates,
      image:
        'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80',
    },
    {
      name: 'Nikoleta',
      specialty: t.trainers.specialists.pilates,
      image:
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    },
    {
      name: 'Tolis',
      specialty: t.trainers.specialists.cross,
      image:
        'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.trainers.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-yellow-500">{trainer.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
