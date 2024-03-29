import React from "react";
import "../../../styles/neonStyle.css";
import "./styles.css";

const Tile = ({ title, children }) => {
  return (
    <div className="Tile">{children}</div>
  );
};

export { Tile };
