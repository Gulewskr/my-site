import { Link } from 'gatsby';
import React, { useState } from 'react';
import { getPrefixedTranslation } from '../../scripts/utils';

import { LanguageSettings } from '../languageSelector/LanguageSelector';
import { Icon } from '../index';

import './style.css';

import HomeIcon from '../../images/icons/house-blank.svg';
import classcat from 'classcat';

import CloseIcon from '@icons/close.svg';
import MenuIcon from '@icons/menu.svg';

const LINKS = ['skills', 'projects', 'about', 'contact'];

const Navbar = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false);
    const translate = getPrefixedTranslation('navigate');

    const navbarItemsStyle = isNavigationOpen ? {} : { display: 'none' };

    const renderLinks = listClassStyles => (
        <>
            {LINKS.map(link => {
                const currentUrl = window.location.href;
                const activeLink = currentUrl.includes(link);

                return (
                    <li style={{ ...listClassStyles }}>
                        <Link
                            className={classcat({
                                'navbar-item': true,
                                activeLink: activeLink,
                            })}
                            to={`/${link}`}
                        >
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
    );

    const renderLogo = () => (
        <li className="navbar-item font-bold font-heading">
            <Link to="/">
                <div id="nav-logo" className="text-neon-on">
                    {'<RAFAŁ GULEWSKI/>'}
                </div>
            </Link>
        </li>
    );

    return (
        <>
            <nav
                role="navigation"
                className="navbar hidden md:flex min-h-10 md:min-h-24 h-auto pt-5 md:pt-15 px-10 w-19/20 items-center justify-self-center justify-between max-md:flex-col"
                id="navbar"
            >
                <ul className="navbar-item-container flex w-full mt-2">
                    {renderLogo()}
                </ul>
                <ul className="navbar-item-container hidden md:flex px-4 mx-auto font-semibold font-heading items-center justify-between whitespace-nowrap max-md:flex-col">
                    {renderLinks()}
                </ul>
            </nav>
            <nav
                role="navigation"
                className={classcat({
                    'navbar navbar-mobile md:hidden  w-19/20 items-center justify-self-center': true,
                    isOpen: isNavigationOpen,
                })}
                id="navbar-mobile"
            >
                <div className="items-container">
                    <ul className="navbar-item-container flex w-full">
                        {renderLogo()}
                        <LanguageSettings />
                        <div
                            id="nav-toogle"
                            role="button"
                            tabIndex="0"
                            onClick={() =>
                                setIsNavigationOpen(!isNavigationOpen)
                            }
                            onKeyDown={() =>
                                setIsNavigationOpen(!isNavigationOpen)
                            }
                        >
                            {isNavigationOpen ? (
                                <Icon iconSize={'sm'}>
                                    <CloseIcon />
                                </Icon>
                            ) : (
                                <Icon iconSize={'sm'}>
                                    <MenuIcon />
                                </Icon>
                            )}
                        </div>
                    </ul>
                    <ul className="links grid md:hidden font-semibold font-heading w-full text-center gap-2">
                        {renderLinks(navbarItemsStyle)}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
