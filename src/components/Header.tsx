import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations";

export default function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-2 py-2">
          <nav className="flex items-center justify-between flex-row">
            {/* New Logo Layout */}
            <a href="#" className=" group flex flex-col items-start  transition-colors">
              <span className="text-xs md:text-sm text-gray-800  group-hover:text-yellow-500">
              <strong>E</strong> I R I N I &nbsp; <strong>B</strong> A T I
            </span>
              <div className="text-black font-bold text-xl md:text-xl leading-tight group-hover:text-yellow-500">
                <p>WORKOUT</p>
                <p>CORNER</p>
              </div>
            </a>


            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-yellow-500 transition-colors">
                {t.nav.about}
              </a>
              <a href="#programs" className="hover:text-yellow-500 transition-colors">
                {t.nav.programs}
              </a>
              <a href="#trainers" className="hover:text-yellow-500 transition-colors">
                {t.nav.trainers}
              </a>
              <a href="#pricing" className="hover:text-yellow-500 transition-colors">
                {t.nav.pricing}
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
  );
}
