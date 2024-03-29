import React from 'react'
import '../styles/neonStyle.css'
import '../styles/settings.css'

//import i18n from 'i18next';

import fUSA from '../images/flagUSA.png'
import fPL from '../images/flagPL.png' 

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

/* TODO - to remake
const ColorSettings = () => {
    const [menuV, setV] = React.useState(false);
    const {c, setColor} = useColor();

    return (
    <div className="Setg">
        <div className={ menuV ? "activeM SetIc" : "SetIc" } role="button" tabIndex="0" onClick={() => setV(!menuV)} onKeyDown={() => setV(!menuV)}>
            <div className="Set-col-circl" style={{backgroundColor: c}} />
            <div className="crcl-s"><CircleIcon /></div>
            <div className="crcl-bg"/>
        </div>
        { menuV && <div className="fullscreen" role="button" tabIndex="0" onClick={ () => setV(false) } onKeyDown={() => setV(false)}> </div>}
        <div className={ menuV ? "languages activeM" : "languages" }>
            <div className="s-t"><HLine/></div>
            <div className="s-b"><HLine/></div>
            <div className="s-l"><VLine/></div>
            <div className="s-r"><VLine/></div>
            <div className="s-ctl"><Corner/></div>
            <div className="s-cbl"><Corner/></div>
            <div className="s-ctr"><Corner/></div>
            <div className="s-cbr"><Corner/></div>
            <div className="menu-m">
                    <>SetCol</>
                    <ul>
                    {Object.keys(Colors).map((c) => (
                    <li key={c} > 
                        <div className="Set-col-circl" role="button" tabIndex="0" onClick={() => {setColor(c); setV(false)}} onKeyDown={() => {setColor(c); setV(false)}} style={{backgroundColor: Colors[c]}}> </div>
                    </li>
                    ))}
                    </ul>
            </div>
        </div>
    </div>
    )
}*/

export { LanguageSettings }