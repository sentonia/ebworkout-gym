import { FaFacebookSquare,FaInstagram,FaPhoneAlt   } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import {useLanguage} from "../context/LanguageContext.tsx";
import {translations} from "../translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="footer" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EB Workout</h3>
            <p className="text-gray-400">
              {t.footer.about.description}
            </p>
            <div className="flex space-x-4 mt-4">
              <p className="text-gray-400">
                {t.footer.about.social}
              </p>
              <a
                  href="https://www.facebook.com/p/E-B-Workout-Corner-100063663878448/?locale=el_GR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <FaFacebookSquare className="w-5 h-5"/>
              </a>
              <a
                  href="https://www.instagram.com/ebworkoutcorner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5"/>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4"> {t.footer.contact.title}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <IoIosMail className="w-5 h-5 text-yellow-500" />
                <span>info@ebworkout.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="w-5 h-5 text-yellow-500" />
                <span>+30 6946474589</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5 text-yellow-500" />
                <span>Καπετάν Χρονά 17-19, Αθήνα 115 25</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} EB Workout. All rights reserved. Developed and designed by <a
              href="https://toniakonsolaki.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={"font-bold text-yellow-500 hover:text-yellow-400 transition-colors"}
          >{"<tk/>."}</a>
          </p>
        </div>
      </div>
    </footer>
);
}
