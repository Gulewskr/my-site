import * as React from "react";
import "./style.css";
import classcat from "classcat";

const Icon = ({ iconSize, children }) => {
  return (
    <div
      className={classcat({
        "icon-wrapper": true,
        "icon-wrapper-xs": iconSize === "xs",
        "icon-wrapper-sm": iconSize === "sm",
        "icon-wrapper-mid": iconSize === "mid",
        "icon-wrapper-mid-hover": iconSize === "mid-h",
        "icon-wrapper-lg": iconSize === "lg",
        "icon-wrapper-lg-hover": iconSize === "lg-h",
        "icon-wrapper-xl": iconSize === "xl",
        "icon-wrapper-xxl": iconSize === "xxl",
      })}
    >
      {children}
    </div>
  );
};

export default Icon;
