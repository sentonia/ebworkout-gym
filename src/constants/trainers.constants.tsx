import eirini from "/eirini.webp";
import spiros from "/spiros.webp";

type Translation = {
    trainers: {
        specialists: {
            cross: string;
            functional: string;
            pilates: string;
        };
    };
}

export const trainers =(t: Translation) => [
    {
        name: 'Eirini',
        specialty: t.trainers.specialists.cross,
        image:eirini,
    },
    {
        name: 'Spiros',
        specialty: t.trainers.specialists.functional,
        image:spiros
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
];
