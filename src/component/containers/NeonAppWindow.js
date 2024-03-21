import React from "react";
import "../../styles/neonStyle.css";
import "./styles.css";

const NeonAppWindow = ({ children }) => {
  return (
    <div className="neonAppContainer border-neon relative p-7">
      <div className="bar-container">
        <div className="line-neon border-neon" />
        <div className="line" />
        <div className="cirle border-neon right_1" />
        <div className="cirle border-neon right_2" />
        <div className="cirle border-neon right_3" />
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

export { NeonAppWindow };
