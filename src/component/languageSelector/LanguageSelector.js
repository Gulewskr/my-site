import React, { useEffect, useState } from "react";

//import i18n from 'i18next';

import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import FlagUS from "../../images/flagUSA.png";
import FlagPL from "../../images/flagPL.png";

import './style.css';

const DEFAULT_LANGUAGE = {
  key: "en",
  labelKey: "languages.en",
  flagImage: FlagUS
}

const LANGUAGES_LIST = [DEFAULT_LANGUAGE, {
  key: "pl",
  labelKey: "languages.pl",
  flagImage: FlagPL
}];


const LanguageSettings = () => {
  const {language, changeLanguage} = useI18next();
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [isOpenLanguageSelection, setIsOpenLanguageSelection] = useState(false);

  useEffect(() => {
    const newLanguage = LANGUAGES_LIST.find(l => l.key === language);
    if (!newLanguage) {
      setCurrentLanguage(DEFAULT_LANGUAGE);
    } else {
      setCurrentLanguage(newLanguage);
    }
  }, [language]);

  return (
    <div
      className="language-settings"
      role="button"
      tabIndex="0"
    >
      <div
        onClick={() => setIsOpenLanguageSelection(!isOpenLanguageSelection)}
        className="language-icon"
      >
        <img src={currentLanguage && currentLanguage.flagImage} alt={language}></img>
      </div>
      {isOpenLanguageSelection &&
        <div className="languages-selector">
          <ul>
            {LANGUAGES_LIST.map(({flagImage, key, labelKey}) => (
              <li key={key}
                  role="button"
                  className="language-option"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(key);
                  }}
                  onKeyDown={(e) => {
                    e.preventDefault();
                    changeLanguage(key);
                  }}>
                <div
                  className="language-label"
                >{t(labelKey)}</div>
                <div
                  className="language-icon"
                >
                  <img src={flagImage} alt={key} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        }
    </div>
  );
};

export { LanguageSettings };
