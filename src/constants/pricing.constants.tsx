type Translation = {
    pricing: {
        plans: {
            basic: { name: string; features: string[] };
            standard: { name: string; features: string[] };
            premium: { name: string; features: string[] };
            elite: { name: string; features: string[] };
        };
        reformerPlans: {
            premium: { name: string; price: string; features: string[] };
            standard: { name: string; price: string; features: string[] };
            basic: { name: string; price: string; features: string[] };
        };
        unlimitedPlans: {
            premium: { name: string; price: string; features: string[] };
            standard: { name: string; price: string; features: string[] };
            basic: { name: string; price: string; features: string[] };
        };
    };
};

export const plans = (t: Translation) =>  ([
    {
        name: t.pricing.plans.basic.name,
        price: '59',
        features: t.pricing.plans.basic.features,
    },
    {
        name: t.pricing.plans.standard.name,
        price: '75',
        features: t.pricing.plans.standard.features,
        popular: true,
    },
    {
        name: t.pricing.plans.premium.name,
        price: '55',
        features: t.pricing.plans.premium.features,
    },
    {
        name: t.pricing.plans.elite.name,
        price: '35',
        features: t.pricing.plans.elite.features,
    },
]);

export const reformerPlans = (t: Translation) => [
    {
        name: t.pricing.reformerPlans.premium.name,
        price: t.pricing.reformerPlans.premium.price,
        features: t.pricing.reformerPlans.premium.features,
    },
    {
        name: t.pricing.reformerPlans.standard.name,
        price: t.pricing.reformerPlans.standard.price,
        features: t.pricing.reformerPlans.standard.features,
        popular: true,
    },
    {
        name: t.pricing.reformerPlans.basic.name,
        price: t.pricing.reformerPlans.basic.price,
        features: t.pricing.reformerPlans.basic.features,
    },
];

export const unlimitedPlans = (t: Translation) => [
    {
        name: t.pricing.unlimitedPlans.premium.name,
        price: t.pricing.unlimitedPlans.premium.price,
        features: t.pricing.unlimitedPlans.premium.features,
    },
    {
        name: t.pricing.unlimitedPlans.standard.name,
        price: t.pricing.unlimitedPlans.standard.price,
        features: t.pricing.unlimitedPlans.standard.features,
        popular: true,
    },
    {
        name: t.pricing.unlimitedPlans.basic.name,
        price: t.pricing.unlimitedPlans.basic.price,
        features: t.pricing.unlimitedPlans.basic.features,
    },
];