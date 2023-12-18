import React, {useState} from 'react'
import { Trans, useTranslation } from "react-i18next"
import cc from "classcat"

import './navbar.css'
import '../../styles/icons.css'
//import {div} from 'react-dom';
//import {, div} from 'gatsby-plugin-react-i18next';

const Navbar = () => {
        const [toogledNavbar, setTN] = useState(false);
        const { t } = useTranslation();

        /*
        TODO - dodać chowanie paska na scrool

        const [prevScrollpos, setPrevScrollpos] = useState(0);
        useEffect(() => {
                const navScript = () => {
                        var currentScrollPos = window.pageYOffset;
                        if (prevScrollpos < 200 || prevScrollpos > currentScrollPos) {
                                document.getElementById("navbar").style.top = "-15px";
                        } else {
                                document.getElementById("navbar").style.top = "-400px";
                        }
                        setPrevScrollpos(currentScrollPos);
                }

                const colorChange = () => {
                //        this.state.color = window.localStorage.getItem('color');
                //}

                
                document.addEventListener('scroll', navScript); 
                //window.addEventListener(localStorage['color'], colorChange);
        }, []);
        */

        return (
                <nav role="navigation" className="flex min-h-24 h-auto px-10 w-19/20 items-center justify-self-center justify-between max-md:flex-col" id="navbar">
                        <ul className="relative flex w-full">
                                <li className='font-bold font-heading'>
                                        <a href="/">
                                                <div id="nav-logo" className='text-neon-on'>{"<RAFAŁ GULEWSKI/>"}</div>
                                        </a>
                                </li>
                                 <button id='nav-toogle' className='md:hidden border-neon' onClick={() => setTN(!toogledNavbar)} >
                                        
                                </button>
                        </ul>
                        <ul className='flex px-4 mx-auto font-semibold font-heading space-x-12 items-center justify-between whitespace-nowrap max-md:flex-col'>
                                <li className='flex mx-5' ><a href="/skills"><span className='cursor-pointer text-neon'><Trans i18nKey="skills">skills</Trans> </span></ a></li>
                                <li className='flex mx-5' ><a href="/projects"><span className='cursor-pointer text-neon'>{t('proj')}</span></ a></li>
                                <li className='flex mx-5' ><a href="/about"><span className='cursor-pointer text-neon'>{t('about')}</span></ a></li>
                                <li className='flex mx-5' ><a href="/contact"><span className='cursor-pointer text-neon'><Trans i18nKey="contact">contact</Trans> </span></ a></li>
                        </ul>
                </nav>
          );
}

export default Navbar