import React from "react";
import "./style.css";

import { getPrefixedTranslation } from "@scripts/utils";

const Footer = () => {
  const translate = getPrefixedTranslation('disabledsite');
  return (
    <div
      className="flex min-h-18 md:min-h-24 h-auto px-10 w-19/20 items-center justify-self-center justify-content-center max-md:flex-col"
      id="footer"
    >
      <div className="grid grid-cols-10 w-full">
        <div></div>
        <div className="col-span-8 text-center">
          <span className="hidden md:grid w-full">
            {translate('info')}
          </span>
          <span className="grid md:hidden w-full">
            {translate('info-mobile')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
