import { Link } from "gatsby";
import React, { useState } from "react";
import { getPrefixedTranslation } from "../../scripts/utils";

import { LanguageSettings } from "../languageSelector/LanguageSelector";
import { Icon } from "../index";

import "./style.css";

import HomeIcon from "../../images/icons/house-blank.svg";
import classcat from "classcat";

const LINKS = [
  'skills',
  'projects',
  'about',
  'contact'
]

const Navbar = () => {
  const [toogledNavbar, setTN] = useState(false);
  const translate = getPrefixedTranslation("navigate");

  const navbarItemsStyle = toogledNavbar ? { display: "none" } : {};

  const renderLinks = (listClassStyles) => (
    <>
    {LINKS.map((link) => {
        const currentUrl = window.location.href;
        const activeLink = currentUrl.includes(link);

        return (
          <li style={{ ...listClassStyles }}>
            <Link className={classcat({
              "navbar-item": true,
              "activeLink": activeLink
            })} to={`/${link}`}>
              <span className="navbar-item-label cursor-pointer text-neon">
                {translate(link)}
              </span>
            </Link>
          </li>
        );
        })}
        <li style={{ ...listClassStyles }}>
          <div className="navbar_controls navbar-item">
            <LanguageSettings />
            <Link to="/">
              <Icon>
                <HomeIcon />
              </Icon>
            </Link>
          </div>
        </li>
    </>
  )

  return (
    <nav
      role="navigation"
      className="navbar flex min-h-10 md:min-h-24 h-auto pt-5 md:pt-15 px-10 w-19/20 items-center justify-self-center justify-between max-md:flex-col"
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
          role="button"
          tabIndex="0"
          onClick={() => setTN(!toogledNavbar)}
          onKeyDown={() => setTN(!toogledNavbar)}
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
      <ul className="navbar-item-container hidden md:flex px-4 mx-auto font-semibold font-heading items-center justify-between whitespace-nowrap max-md:flex-col">
        {renderLinks()}
      </ul>
      <ul className="grid md:hidden font-semibold font-heading mb-2 w-full text-center gap-2 pt-4">
        {renderLinks(navbarItemsStyle)}
      </ul>
    </nav>
  );
};

export default Navbar;
