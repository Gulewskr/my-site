import React, {useState} from 'react'

import './navbar.css'
import '../../styles/icons.css'

import {Trans, Link} from 'gatsby-plugin-react-i18next';

const Navbar = () => {
        const [toogledNavbar, setTN] = useState(false);
   
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
                <nav role="navigation" className="navMain" id="navbar">
                        <ul>
                                <li>
                                        <Link to="/">
                                                <div id="nav-logo" className='text-neon-on'>{"<RAFAŁ GULEWSKI/>"}</div>
                                        </Link>
                                </li>
                                        <button id='nav-toogle' className='border-neon' onClick={() => setTN(!toogledNavbar)} >
                                                <svg xmlns="http://www.w3.org/2000/svg" style={toogledNavbar ?  {'rotate': '90deg'} : {} } width="100%" height="100%" viewBox="0 0 50 50" overflow="visible">
                                                        <line x1="20%" y1="25%" x2="80%" y2="25%" />
                                                        <line x1="20%" y1="50%" x2="80%" y2="50%" />
                                                        <line x1="20%" y1="75%" x2="80%" y2="75%" />
                                                </svg>
                                        </button>
                                <li />
                                <li className='nav-item' style={toogledNavbar ? {display: 'block'} : {}}><Link to="/skills"><span className='text-neon'><Trans>skills</Trans> </span></ Link></li>
                                <li className='nav-item' style={toogledNavbar ? {display: 'block'} : {}}><Link to="/projects"><span className='text-neon'><Trans>proj</Trans> </span></ Link></li>
                                <li className='nav-item' style={toogledNavbar ? {display: 'block'} : {}}><Link to="/about"><span className='text-neon'><Trans>about</Trans> </span></ Link></li>
                                <li className='nav-item' style={toogledNavbar ? {display: 'block'} : {}}><Link to="/contact"><span className='text-neon'><Trans>contact</Trans> </span></ Link></li>
                        </ul>
                </nav>
          );
}

export default Navbar