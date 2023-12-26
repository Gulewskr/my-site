import React from 'react';
import './style.css';

import { LanguageSettings } from './LanguageSelector';
import { Trans } from 'gatsby-plugin-react-i18next';

const Footer = () => {
    return (
        <div
            className="flex min-h-18 md:min-h-24 h-auto px-10 w-19/20 items-center justify-self-center justify-content-center max-md:flex-col"
            id="footer"
        >
            <div className='grid grid-cols-10 w-full'>
                <div>

                </div>
                <div className='col-span-8 text-center'>
                    <span className='hidden md:grid w-full'>
                        <Trans>pageDisabledInfo</Trans>
                    </span>
                    <span className='grid md:hidden w-full'>
                        <Trans>pageDisabledInfo-mobile</Trans>
                    </span>
                </div>
                <div>
                    {/* TODO add remade language control */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
