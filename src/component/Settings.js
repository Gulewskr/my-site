import * as React from 'react'
import '../styles/neonStyle.css'
import '../styles/settings.css'

import {Trans, useI18next} from 'gatsby-plugin-react-i18next';
import {Corner, CircleIcon,  VLine, HLine } from './';
import { Colors, useColor } from './neonColor';

import fUSA from '../images/flagUSA.png'
import fPL from '../images/flagPL.png' 

const flags = {
    'pl' : fPL,
    'en' : fUSA,
}

const LanguageSettings = () => {
    const {languages, language, changeLanguage} = useI18next();
    const [menuV, setV] = React.useState(false);
    
    return(
        <div className="Lang" role="button" tabIndex="0" onClick={() => setV(!menuV)} onKeyDown={() => setV(!menuV)}>
            <div className={ menuV ? "activeM" : "" }>
                <img src={flags[language]} alt={language} ></img>
                <div className="crcl-s"><CircleIcon /></div>
                <div className="crcl-bg"/>
            </div>
            { menuV && <div className="fullscreen" role="button" tabIndex="0" onClick={ () => setV(false) } onKeyDown={ () => setV(false) }> </div>}
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
                        <Trans>SetLang</Trans>
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
                    <Trans>SetCol</Trans>
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
}

export { LanguageSettings, ColorSettings }