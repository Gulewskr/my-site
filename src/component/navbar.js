import * as React from 'react'

import '../styles/navbar.css'
import '../styles/icons.css'

import { Logo, Menu, NeonTextON } from './'
import {Trans, Link} from 'gatsby-plugin-react-i18next';
//const navScript = require('../scripts/navbar.js');

class Navbar extends React.Component {
        state = {
          currentPage: "",
          prevScrollpos: 0
        };
    
        constructor(props){
          super(props);
          this.state.currentPage = props.s;
        }

        changeMenuVisibility(){
                const t = document.getElementsByClassName('nav-sl');
                if(t[0].style.display === '')
                {
                        for(let i=0, l=t.length; i<l; i++) t[i].style.display = "inline-flex";
                }else{
                        for(let i=0, l=t.length; i<l; i++) t[i].style.display = '';
                }
          }

        componentDidMount() {
                const navScript = () => {
                        var currentScrollPos = window.pageYOffset;
                        if (this.state.prevScrollpos < 200 || this.state.prevScrollpos > currentScrollPos) {
                                document.getElementById("navbar").style.top = "0";
                        } else {
                                document.getElementById("navbar").style.top = "-400px";
                        }
                                this.state.prevScrollpos = currentScrollPos;
                        console.log(currentScrollPos);
                }
                document.addEventListener('scroll', navScript);
        }
    
        render() {
          return (
                <div role="navigation" className="navMain" id="navbar">
                <div className='nav'>
                        <Link to="/">
                        <div className='nav-s nav-logo'>
                                <div className="logoStyle">
                                        <Logo />
                                </div>
                        </div>
                        </Link>
                        <div className='s' />
                        <div className='nav-button' role="button" tabIndex="0" onKeyPress={this.changeMenuVisibility} onClick={this.changeMenuVisibility}>
                                <Menu />
                        </div>
                        <NavbarLink a={this.state.currentPage === "Umiejętności"} c={<Trans>skills</Trans>} nav="/skills" />
                        <NavbarLink a={this.state.currentPage === "Projekty"} c={<Trans>proj</Trans>} nav="/projects" />
                        <NavbarLink a={this.state.currentPage === "O mnie"} c={<Trans>about</Trans>} nav="/about" />
                        <NavbarLink a={this.state.currentPage === "Kontakt"} c={<Trans>contact</Trans>} nav="/contact" />
                        </div>
                </div>
          );
        }
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