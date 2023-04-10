import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "af", name: "Afrikaans", country_code: "za" },
  { code: "de", name: "Deutsch", country_code: "de" },
  { code: "es", name: "Español", country_code: "es" },
];

function App() {
  const [clicks, setClicks] = useState(0);
  const [langMenuShown, setLangMenuShown] = useState(false);

  const { t } = useTranslation();

  const handleClick = () => {
    setClicks(() => clicks + 1);
  };

  const handleLangMenuToggle = () => {
    setLangMenuShown(!langMenuShown);
  };

  const handleLanguageSelection = (langCode: string) => {
    i18next.changeLanguage(langCode);
    setLangMenuShown(!langMenuShown);
  };

  return (
    <div className="App">
      <div className="header">
        <button className="language_menu_toggle" onClick={handleLangMenuToggle}>
          {t("choose_a_language")}
        </button>
        <ul className={langMenuShown ? `show_lang_menu` : `hide_lang_menu`}>
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className="language_selector"
                onClick={() => handleLanguageSelection(lang.code)}
              >
                <span className={`fi fi-${lang.country_code}`}></span>
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <h2>{t("key")}</h2>
        <p>{t("clicks", { clicks })}</p>
        <button onClick={handleClick}>{t("click_me")}</button>
      </div>
    </div>
  );
}
export default App;
