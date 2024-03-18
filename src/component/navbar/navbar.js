import { Link } from "gatsby"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSettings } from "../languageSelector/LanguageSelector";
import { Icon } from "../index";

import "./style.css";

import HomeIcon from "../../images/icons/house-blank.svg";

const Navbar = () => {
  const [toogledNavbar, setTN] = useState(false);
  const { t } = useTranslation();

  const navbarItemsStyle = toogledNavbar ? { display: "none" } : {};
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

  const Links = [
    () => (<Link to="/skills">
            <span className="navbar-item-label cursor-pointer text-neon">{t("skills")}</span>
          </Link>),
    () => (<Link to="/projects">
            <span className="navbar-item-label cursor-pointer text-neon">{t("proj")}</span>
          </Link>),
    () => (<Link to="/about">
            <span className="navbar-item-label cursor-pointer text-neon">{t("about")}</span>
          </Link>),
    () => (<Link to="/contact">
            <span className="navbar-item-label cursor-pointer text-neon">{t("contact")}</span>
          </Link>),
          () => (
            <div className="navbar_controls">
              <LanguageSettings />
              <Link to="/">
                <Icon>
                  <HomeIcon />
                </Icon>
              </Link>
            </div>
          )
  ];

  return (
    <nav
      role="navigation"
      className="flex min-h-10 md:min-h-24 h-auto pt-5 md:pt-15 px-10 w-19/20 items-center justify-self-center justify-between max-md:flex-col"
      id="navbar"
    >
      <ul className="navbar-item-container flex w-full mt-2">
        <li className="navbar-item font-bold font-heading">
          <Link to="/">
            <div id="nav-logo" className="text-neon-on">
              {"<RAFAŁ GULEWSKI/>"}
            </div>
          </Link>
        </li>
        <div
          id="nav-toogle"
          className="grid md:hidden border-neon items-center justify-items-center"
          onClick={() => setTN(!toogledNavbar)}
        >
          {toogledNavbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </ul>
      <ul className="navbar-item-container hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 items-center justify-between whitespace-nowrap max-md:flex-col">
        {Links.map( LinkComponent => (
          <li className="navbar-item">
            <LinkComponent />
          </li>
        ))}
      </ul>
      <ul className="grid md:hidden font-semibold font-heading mb-2 w-full text-center gap-2 pt-4">
        {Links.map( LinkComponent => (
           <li style={{ ...navbarItemsStyle }}>
            <LinkComponent />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
