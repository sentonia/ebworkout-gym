import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Programs() {
  const { language } = useLanguage();
  const t = translations[language];

  const programs = [
    {
      name: t.programs.items.crossTraining.name,
      description: t.programs.items.crossTraining.description,
      image:
        '/crossTraining-programms.png',
    },
    {
      name: t.programs.items.pilates.name,
      description: t.programs.items.pilates.description,
      image:
        '/pilates-programms.png',
    },
    {
      name: t.programs.items.trx.name,
      description: t.programs.items.trx.description,
      image:
        '/trx-programms.png',
    },
    {
      name: t.programs.items.reformer.name,
      description: t.programs.items.reformer.description,
      image:
        '/reformer-programms.png',
    },
    {
      name: t.programs.items.bodyweight.name,
      description: t.programs.items.bodyweight.description,
      image:
        '/bodyweight-programms.png',
    },
    {
      name: t.programs.items.kids.name,
      description: t.programs.items.kids.description,
      image:
        '/kids-programms.png',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t.programs.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
