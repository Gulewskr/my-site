import * as React from 'react'

import '../styles/navbar.css'
import '../styles/icons.css'

import { Logo, Menu, NeonTextON } from './'
import {Trans, Link} from 'gatsby-plugin-react-i18next';

const Navbar = (props) => {
        
        const changeMenuVisibility = () => {
                const t = document.getElementsByClassName('nav-sl');
                if(t[0].style.display === '')
                {
                        for(let i=0, l=t.length; i<l; i++) t[i].style.display = "inline-flex";
                }else{
                        for(let i=0, l=t.length; i<l; i++) t[i].style.display = '';
                }
        }
        
        return (
        <div role="navigation" >
                <div className='nav'>
                        <Link to="/">
                        <div className='nav-s nav-logo'>
                                <div className="logoStyle">
                                        <Logo />
                                </div>
                        </div>
                        </Link>
                        <div className='s' />
                        <div className='nav-button' role="button" tabIndex="0" onKeyPress={changeMenuVisibility} onClick={changeMenuVisibility}>
                                <Menu />
                        </div>
                        <NavbarLink a={props.s === "Umiejętności"} c={<Trans>skills</Trans>} nav="/skills" />
                        <NavbarLink a={props.s === "Projekty"} c={<Trans>proj</Trans>} nav="/projects" />
                        <NavbarLink a={props.s === "O mnie"} c={<Trans>about</Trans>} nav="/about" />
                        <NavbarLink a={props.s === "Kontakt"} c={<Trans>contact</Trans>} nav="/contact" />
                </div>
        </div>
        )
}


const NavbarLink = (props) => {
        
        const [ hovered, setHover ] = React.useState(false);

        return (
        <Link to={props.nav}>
                <div className='nav-sl nav-s'
                        onMouseEnter = {() => setHover(true)}
                        onMouseLeave = {() => setHover(false)}
                        role = "button" tabIndex="0"
                        >
                        <NeonTextON content={props.c} v={props.a} h={hovered} />
                </div>
        </Link>
        );
}

export default Navbar