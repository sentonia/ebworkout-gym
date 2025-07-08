type Translation = {
    pricing: {
        plans: {
            pack8: { name: string; features: string[] };
            pack12: { name: string; features: string[] };
            studentPack: { name: string; features: string[] };
            kidsFitness: { name: string; features: string[] };
        };
        reformerPlans: {
            pack24: { name: string; price: string; features: string[] };
            pack12: { name: string; price: string; features: string[] };
            pack8: { name: string; price: string; features: string[] };
        };
        unlimitedPlans: {
            unlimited2Months: { name: string; price: string; features: string[] };
            unlimited3Months: { name: string; price: string; features: string[] };
            unlimited6Months: { name: string; price: string; features: string[] };
            personal: { name: string; price: string; features: string[] };
        };
    };
};

export const plans = (t: Translation) =>  ([
    {
        name: t.pricing.plans.pack8.name,
        price: '65',
        features: t.pricing.plans.pack8.features,
    },
    {
        name: t.pricing.plans.pack12.name,
        price: '80',
        features: t.pricing.plans.pack12.features,
        popular: true,
    },
    {
        name: t.pricing.plans.studentPack.name,
        price: '60',
        features: t.pricing.plans.studentPack.features,
    },
    {
        name: t.pricing.plans.kidsFitness.name,
        price: '35',
        features: t.pricing.plans.kidsFitness.features,
    },
]);



export const unlimitedPlans = (t: Translation) => [
    {
        name: t.pricing.unlimitedPlans.unlimited2Months.name,
        price: t.pricing.unlimitedPlans.unlimited2Months.price,
        features: t.pricing.unlimitedPlans.unlimited2Months.features,
    },
    {
        name: t.pricing.unlimitedPlans.unlimited3Months.name,
        price: t.pricing.unlimitedPlans.unlimited3Months.price,
        features: t.pricing.unlimitedPlans.unlimited3Months.features,
        popular: true,
    },
    {
        name: t.pricing.unlimitedPlans.unlimited6Months.name,
        price: t.pricing.unlimitedPlans.unlimited6Months.price,
        features: t.pricing.unlimitedPlans.unlimited6Months.features,
    },
    {
        name: t.pricing.unlimitedPlans.personal.name,
        price: t.pricing.unlimitedPlans.personal.price,
        features: t.pricing.unlimitedPlans.personal.features,
    },
];

export const reformerPlans = (t: Translation) => [
    {
        name: t.pricing.reformerPlans.pack24.name,
        price: t.pricing.reformerPlans.pack24.price,
        features: t.pricing.reformerPlans.pack24.features,
    },
    {
        name: t.pricing.reformerPlans.pack12.name,
        price: t.pricing.reformerPlans.pack12.price,
        features: t.pricing.reformerPlans.pack12.features,
        popular: true,
    },
    {
        name: t.pricing.reformerPlans.pack8.name,
        price: t.pricing.reformerPlans.pack8.price,
        features: t.pricing.reformerPlans.pack8.features,
    },
];