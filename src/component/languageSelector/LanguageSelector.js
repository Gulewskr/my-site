import React from "react";

//import i18n from 'i18next';

import fUSA from "../../images/flagUSA.png";
import fPL from "../../images/flagPL.png";

import './style.css';

const flags = {
  pl: fPL,
  en: fUSA,
};

const LanguageSettings = () => {
  const languages = ["en", "pl"];
  const language = "pl";
  //const {languages, language, changeLanguage} = useI18next();
  const changeLanguage = (v) => console.log(v);

  return (
    <div
      className="Lang"
      role="button"
      tabIndex="0"
    >
      <div
        className="activeM border-neon border-rad"
      >
        <img src={flags[language]} alt={language}></img>
      </div>
        <div
          className="fullscreen"
          role="button"
          tabIndex="0"
        >
          {" "}
        </div>
      <div className="languages">
        <div className="menu-m border-neon">
          <span className="neon-text-on">
            <>SetLang</>
          </span>
          <ul>
            {languages.map((lng) => (
              <li key={lng}>
                <div
                  role="button"
                  tabIndex="0"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                  onKeyDown={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                >
                  <img src={flags[lng]} alt={lng} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { LanguageSettings };
