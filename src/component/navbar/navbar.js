import { Link } from "gatsby"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageSettings } from "../languageSelector/LanguageSelector";

import "./style.css";

const Navbar = () => {
  const [toogledNavbar, setTN] = useState(false);
  const [isOpenLanguageSelection, setIsOpenLanguageSelection] = useState(false);
  const { t } = useTranslation();

  const openLanguageSelection = () => {
    setIsOpenLanguageSelection(true);
  }

  const closeLanguageSelection = () => {
    setIsOpenLanguageSelection(true);
  }

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
            <span className="cursor-pointer text-neon">{t("skills")}</span>
          </Link>),
    () => (<Link to="/projects">
            <span className="cursor-pointer text-neon">{t("proj")}</span>
          </Link>),
    () => (<Link to="/about">
            <span className="cursor-pointer text-neon">{t("about")}</span>
          </Link>),
    () => (<Link to="/contact">
            <span className="cursor-pointer text-neon">{t("contact")}</span>
          </Link>)
  ];

  return (
    <nav
      role="navigation"
      className="flex min-h-10 md:min-h-24 h-auto pt-5 md:pt-15 px-10 w-19/20 items-center justify-self-center justify-between max-md:flex-col"
      id="navbar"
    >
      <ul className="relative flex w-full mt-2">
        <li className="font-bold font-heading">
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
      <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 items-center justify-between whitespace-nowrap max-md:flex-col">
        {Links.map( LinkComponent => (
          <li className="flex mx-5">
            <LinkComponent />
          </li>
        ))}
        <li className="navbar_controls" onClick={openLanguageSelection}>
          {/*TODO add language selector + home button*/}
            <span className="cursor-pointer text-neon">o</span>
            {isOpenLanguageSelection && <LanguageSettings />}
            <span className="cursor-pointer text-neon">o</span>
        </li>
      </ul>
      <ul className="grid md:hidden font-semibold font-heading mb-2 w-full text-center gap-2 pt-4">
        {Links.map( LinkComponent => (
           <li style={{ ...navbarItemsStyle }}>
            <LinkComponent />
          </li>
        ))}
        <li style={{ ...navbarItemsStyle }} onClick={openLanguageSelection}>
            <span className="cursor-pointer text-neon">o</span>
            {isOpenLanguageSelection && <LanguageSettings />}
        </li>
        <li style={{ ...navbarItemsStyle }}>
            <span className="cursor-pointer text-neon">o</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
