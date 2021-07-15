import * as React from 'react'
import '../styles/neonStyle.css'
import '../styles/settings.css'

import {Trans, Link, useI18next} from 'gatsby-plugin-react-i18next';
import {CircleIcon} from './CircleIcon';
import {Square} from './';
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
        <div className="Lang" onClick={() => setV(!menuV)}>
            <div className={ menuV ? "activeM" : "" }>
                <img src={flags[language]} ></img>
                <div className="crcl-s"><CircleIcon /></div>
                <div className="crcl-bg"/>
            </div>
            { menuV && <div className="fullscreen" onClick={ () => setV(false) } />}
            <div className={ menuV ? "languages activeM" : "languages" }>
                <div className="menu-bg"><Square /></div>
                <div className="menu-m">
                    <Trans>SetLang</Trans>
                    <ul>
                    {languages.map((lng) => (
                    <li key={lng}>
                        <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            changeLanguage(lng);
                            setV(false);
                        }}>
                            <img src={flags[lng]} alt={lng}/>
                        </a>
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
        <div className={ menuV ? "activeM SetIc" : "SetIc" } onClick={() => setV(!menuV)}>
            <div className="Set-col-circl" style={{backgroundColor: c}} />
            <div className="crcl-s"><CircleIcon /></div>
            <div className="crcl-bg"/>
        </div>
        { menuV && <div className="fullscreen" onClick={ () => setV(false) } />}
        <div className={ menuV ? "languages activeM" : "languages" }>
            <div className="menu-bg"><Square /></div>
            <div className="menu-m">
                    <Trans>SetCol</Trans>
                    <ul>
                    {Object.keys(Colors).map((c) => (
                    <li key={c} onClick={() => {setColor(c); setV(false)}}> 
                        <div className="Set-col-circl" style={{backgroundColor: Colors[c]}} />
                    </li>
                    ))}
                    </ul>
            </div>
        </div>
    </div>
    )
}

export { LanguageSettings, ColorSettings }