import React from 'react'

//import i18n from 'i18next';

import fUSA from '../../images/flagUSA.png'
import fPL from '../../images/flagPL.png' 

const flags = {
    'pl' : fPL,
    'en' : fUSA,
}

const LanguageSettings = () => {
    const languages = [ 'en', 'pl' ];
    const language = 'pl';
    //const {languages, language, changeLanguage} = useI18next();
    const changeLanguage = (v) => console.log(v);
    const [menuV, setV] = React.useState(false);
    
    return(
        <div className="Lang" role="button" tabIndex="0" onClick={() => setV(!menuV)} onKeyDown={() => setV(!menuV)}>
            <div className={ menuV ? "activeM border-neon border-rad" : "border-neon border-rad" }>
                <img src={flags[language]} alt={language} ></img>
            </div>
            { menuV && <div className="fullscreen" role="button" tabIndex="0" onClick={ () => setV(false) } onKeyDown={ () => setV(false) }> </div>}
            <div className={ menuV ? "languages activeM" : "languages" }>
                    <div className="menu-m border-neon">
                        <span className='neon-text-on'><>SetLang</></span>
                        <ul>
                        {languages.map((lng) => (
                        <li key={lng}>
                            <div role="button" tabIndex="0"
                            onClick={(e) => {
                                e.preventDefault();
                                changeLanguage(lng);
                                setV(false);
                            }}
                            onKeyDown={(e) => {
                                e.preventDefault();
                                changeLanguage(lng);
                                setV(false);
                            }}>
                                <img src={flags[lng]} alt={lng}/>
                            </div>
                        </li>
                        ))}
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export { LanguageSettings }