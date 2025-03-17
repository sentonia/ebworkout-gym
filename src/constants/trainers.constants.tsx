import eirini from "/eirini_new.webp";
import spiros from "/spiros.webp";
import moschoula from "/moschoula.webp";
import nikoletta from "/nikoletta.webp"

type Translation = {
    trainers: {
        specialists: {
            eirini: string;
            spiros: string;
            nikoletta: string;
            moschoula: string;
            cross: string;
            functional: string;
            pilates: string;
            physiotherapy: string;
        };
    };
}

export const trainers =(t: Translation) => [
    {
        name: 'Eirini',
        specialty: t.trainers.specialists.eirini,
        image:eirini,
    },
    {
        name: 'Spiros',
        specialty: t.trainers.specialists.spiros,
        image:spiros
    },
    {
        name: 'Moschoula',
        specialty: t.trainers.specialists.moschoula,
        image: moschoula
    },
    {
        name: 'Nikoleta',
        specialty: t.trainers.specialists.nikoletta,
        image: nikoletta
    },
];
