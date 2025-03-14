import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FaDumbbell } from "react-icons/fa";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];


  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
            <FaDumbbell className="w-8 h-8 text-yellow-500"/>
            <span className="text-2xl font-bold">EB-Workout</span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a
                href="#about"
                className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.about}
            </a>
            <a
                href="#programs"
                className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.programs}
            </a>
            <a
                href="#trainers"
                className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.trainers}
            </a>
            <a
                href="#pricing"
                className="hover:text-yellow-500 transition-colors"
            >
              {t.nav.pricing}
            </a>
          </div>
          <LanguageSwitcher/>
        </nav>
      </div>
    </header>
  );
}
