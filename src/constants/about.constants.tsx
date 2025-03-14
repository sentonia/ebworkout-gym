import {TbGauge, TbTargetArrow, TbUsersGroup} from "react-icons/tb";

type Translation = {
  about: {
    features: {
      expertGuidance: { title: string; description: string };
      community: { title: string; description: string };
      flexibleHours: { title: string; description: string };
    };
  };
};

export const features = (t: Translation) => [
    {
        icon: <TbTargetArrow className="w-8 h-8" />,
        title: t.about.features.expertGuidance.title,
        description: t.about.features.expertGuidance.description,
    },
    {
        icon: <TbUsersGroup className="w-8 h-8" />,
        title: t.about.features.community.title,
        description: t.about.features.community.description,
    },
    {
        icon: <TbGauge className="w-8 h-8" />,
        title: t.about.features.flexibleHours.title,
        description: t.about.features.flexibleHours.description,
    },
];