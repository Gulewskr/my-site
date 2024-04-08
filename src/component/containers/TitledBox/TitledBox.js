import React from "react";
import "../../../styles/neonStyle.css";
import "./styles.css";

const TitledBox = ({ title, content }) => {
  return (
    <div className="neonAppContainer-2 relative">
      <div className="neonAppContainer-title">
        <t1 className="text-neon-on-blink mb-4">{title}</t1>
      </div>
      <div className="neonAppContainer-content">{content}</div>
    </div>
  );
};

export { TitledBox };
