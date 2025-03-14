import { FaCheck } from "react-icons/fa6";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import {useCallback, memo, useMemo} from 'react';
import { plans, unlimitedPlans, reformerPlans } from '../constants/pricing.constants.tsx';
import {debounce} from "../utils.tsx";

type Plan = {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
};


export default function Pricing() {
  const { language } = useLanguage();
  const t = useMemo(() => translations[language], [language]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollToFooter = useCallback(
      debounce(() => {
        const footerSection = document.getElementById("footer");
        if (footerSection) {
          footerSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300),
      []
  );

  const translatedPlans = useMemo(() => plans(t), [t]);
  const translatedUnlimitedPlans = useMemo(() => unlimitedPlans(t), [t]);
  const translatedReformerPlans = useMemo(() => reformerPlans(t), [t]);

  const PricingCard = memo(({ plan, isReformer = false }: { plan: Plan; isReformer?: boolean }) => (
      <div
          className={`bg-white rounded-lg p-6 flex flex-col h-full ${
              plan.popular ? 'ring-2 ring-yellow-500 shadow-xl relative' : 'shadow-lg'
          }`}
      >
        {plan.popular && (
            <span className="bg-yellow-500 text-black text-sm font-semibold px-4 py-1 rounded-full absolute -top-4 left-1/2 transform -translate-x-1/2">
          {t.pricing.mostPopular}
        </span>
        )}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-3xl font-bold">€{plan.price}</span>
            <span className="text-gray-600">
            {isReformer ? '' : t.pricing.perMonth}
          </span>
          </div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature: string, featureIndex: number) => (
                <li
                    key={featureIndex}
                    className="flex items-center space-x-2 text-sm"
                >
                  <FaCheck className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
            ))}
          </ul>
        </div>
        <button
            onClick={scrollToFooter}
            className={`w-full py-2 rounded-full font-semibold text-sm ${
                plan.popular
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'bg-black text-white hover:bg-gray-800'
            } transition-colors mt-4`}
        >
          {t.pricing.contactButton}
        </button>
      </div>
  ));

  return (
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-gray-600 mb-4">{t.pricing.subtitle}</p>
            <p className="text-yellow-600 font-medium">
              {t.pricing.specialOfferCta}
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {translatedPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.pricing.unlimitedTitle}</h2>
            <p className="text-gray-600">{t.pricing.unlimitedSubtitle}</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {translatedUnlimitedPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isReformer={true} />
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.pricing.reformerTitle}</h2>
            <p className="text-gray-600">{t.pricing.reformerSubtitle}</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {translatedReformerPlans.map((plan, index) => (
                <PricingCard key={index} plan={plan} isReformer={true} />
            ))}
          </div>
        </div>
      </section>
  );
}