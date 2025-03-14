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