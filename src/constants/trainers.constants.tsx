import eirini from "/eirini_new.webp";
import spiros from "/spiros.webp";
import moschoula from "/moschoula.webp";
import nikoletta from "/nikoletta.webp"

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
        image: moschoula
    },
    {
        name: 'Nikoleta',
        specialty: t.trainers.specialists.pilates,
        image: nikoletta
    },
];
