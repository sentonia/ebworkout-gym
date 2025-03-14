import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import {trainers} from "../constants/trainers.constants.tsx";

export default function Trainers() {
  const { language } = useLanguage();
  const t = translations[language];

const translatedTrainers = trainers(t)

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.trainers.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {translatedTrainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-80 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
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
