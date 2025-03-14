import crossTrainingProgramms from '/crossTraining-programms.webp';
import pilatesProgramms from '/pilates-programms.webp';
import trxProgramms from '/trx-programms.webp';
import reformerProgramms from '/reformer-programms.webp';
import bodyWeightProgramms from '/bodyweight-programms.webp';
import kidsProgramms from '/kids-programms.webp';


type Translation = {
    programs: {
        items: {
            crossTraining: { name: string; description: string };
            pilates: { name: string; description: string };
            trx: { name: string; description: string };
            reformer: { name: string; description: string };
            bodyweight: { name: string; description: string };
            kids: { name: string; description: string };
        };
    };
};

export const programs = (t: Translation)  => [
    {
        name: t.programs.items.crossTraining.name,
        description: t.programs.items.crossTraining.description,
        image: crossTrainingProgramms,
    },
    {
        name: t.programs.items.pilates.name,
        description: t.programs.items.pilates.description,
        image:pilatesProgramms,
    },
    {
        name: t.programs.items.trx.name,
        description: t.programs.items.trx.description,
        image:trxProgramms,
    },
    {
        name: t.programs.items.reformer.name,
        description: t.programs.items.reformer.description,
        image:reformerProgramms,
    },
    {
        name: t.programs.items.bodyweight.name,
        description: t.programs.items.bodyweight.description,
        image:bodyWeightProgramms
    },
    {
        name: t.programs.items.kids.name,
        description: t.programs.items.kids.description,
        image: kidsProgramms
    },
];