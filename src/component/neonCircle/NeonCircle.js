import React from "react";
import "../../styles/neonStyle.css";
import "./styles.css";

const NeonCircle = ({ children }) => {
  return <div className="neonCircle border-neon">{children}</div>;
};

export {
  NeonCircle
};
