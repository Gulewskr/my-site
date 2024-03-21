import React from "react";
import "../../styles/neonStyle.css";
import "./styles.css";
import { createShourtcut } from "../../scripts/utils";

const StarIconON = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    width="100%"
    height="100%"
    viewBox="-10 -10 110 110"
  >
    <g id="glow" className="neon-blur">
      <path
        className="neonStarGlow"
        d="M13.3,42.18l-7,28.59-1,4.06A3.79,3.79,0,0,0,6.7,78.77a3.69,3.69,0,0,0,4.16.29l22.82-17,3.24-2.42H33.14L56,76l3.23,2.33a3.74,3.74,0,0,0,4.17-.3,3.78,3.78,0,0,0,1.34-3.94l-7-27.69-1-3.9-1,3.65L75.23,28.24,78,25.71c2.44-2.25.48-6.36-2.66-6.4L50.5,19l-3.59,0,3.62,2.75L40.14-3.13,38.65-6.7a3.86,3.86,0,0,0-3.12-2.69A3.68,3.68,0,0,0,31.79-7.6L21.17,17.47,19.67,21l3.24-1.86H-5.32c-3.14,0-5.1,4.17-2.66,6.4L11.48,43.29l2.78,2.54a3.75,3.75,0,0,0,5.3-5.31L.11,22.77l-2.78-2.54-2.65,6.4H22.91a3.67,3.67,0,0,0,3.24-1.85L36.78-.29l1.49-3.52-6.86-.9L41.8,20.13l1.5,3.57a3.93,3.93,0,0,0,3.61,2.76l24.83.3,3.58,0-2.65-6.4L53.19,38.35l-2.75,2.53a3.75,3.75,0,0,0-1,3.65l7,27.69,1,3.89L63,71.88,40.16,55.5l-3.24-2.33a3.62,3.62,0,0,0-3.78,0l-22.82,17L7.08,72.59l5.51,4.23,7-28.59,1-4.06a3.75,3.75,0,0,0-7.23-2Z"
        transform="translate(9.07 9.42)"
      />
    </g>
    <g id="shape" className="neon-line">
      <path
        className="neonStarLine"
        d="M16.28,43l-7,28.59-1,4.06c-.12.48.45,1,.92.7l22.81-17L35.32,57h-.64L57.53,73.34l3.24,2.32c.47.33,1-.22.92-.71l-7-27.69-1-3.9L53.5,44,73,26l2.75-2.53a.64.64,0,0,0-.45-1.07l-24.82-.3-3.59-.05.61.46L37.09-2.3,35.6-5.87c-.17-.42-.9-.71-1.14-.15L23.83,19.05l-1.49,3.52.54-.31H-5.35a.62.62,0,0,0-.44,1.06L13.66,41.08l2.78,2.54c.59.54,1.48-.34.88-.89L-2.13,25l-2.78-2.54-.44,1.07H22.88a.62.62,0,0,0,.54-.31L34.05-1.87l1.49-3.52L34.4-5.54,44.79,19.3l1.49,3.57a.65.65,0,0,0,.6.46l24.83.31,3.58,0-.44-1.06L55.37,40.56l-2.75,2.53a.6.6,0,0,0-.16.61l7,27.69,1,3.89.91-.7L38.55,58.19l-3.23-2.32a.64.64,0,0,0-.64,0l-22.81,17L8.63,75.28l.91.71,7-28.59,1-4.06C17.68,42.56,16.47,42.23,16.28,43Z"
        transform="translate(9.07 9.42)"
      />
    </g>
  </svg>
);

/**
 * @type {(params: {
 * name: string,
 * icon: JSX.Element,
 * cb: () => void
 * }) => JSX.Element}
 */
const NeonSkillWindow = (params) => {
  const StarIconOFF = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      viewBox="-10 -10 110 110"
    >
      <g id="shape">
        <path
          className="neonStarLine"
          d="M16.28,43l-7,28.59-1,4.06c-.12.48.45,1,.92.7l22.81-17L35.32,57h-.64L57.53,73.34l3.24,2.32c.47.33,1-.22.92-.71l-7-27.69-1-3.9L53.5,44,73,26l2.75-2.53a.64.64,0,0,0-.45-1.07l-24.82-.3-3.59-.05.61.46L37.09-2.3,35.6-5.87c-.17-.42-.9-.71-1.14-.15L23.83,19.05l-1.49,3.52.54-.31H-5.35a.62.62,0,0,0-.44,1.06L13.66,41.08l2.78,2.54c.59.54,1.48-.34.88-.89L-2.13,25l-2.78-2.54-.44,1.07H22.88a.62.62,0,0,0,.54-.31L34.05-1.87l1.49-3.52L34.4-5.54,44.79,19.3l1.49,3.57a.65.65,0,0,0,.6.46l24.83.31,3.58,0-.44-1.06L55.37,40.56l-2.75,2.53a.6.6,0,0,0-.16.61l7,27.69,1,3.89.91-.7L38.55,58.19l-3.23-2.32a.64.64,0,0,0-.64,0l-22.81,17L8.63,75.28l.91.71,7-28.59,1-4.06C17.68,42.56,16.47,42.23,16.28,43Z"
          transform="translate(9.07 9.42)"
        />
      </g>
    </svg>
  );

  const StarsLvl = (lvl) => {
    const stars = [1, 2, 3, 4, 5];
    return stars.map((v) => {
      const fillStar = lvl > 0;
      lvl--;
      return fillStar ? (
        <div className="sk-s">{StarIconON()}</div>
      ) : (
        <div className="sk-s">{StarIconOFF()}</div>
      );
    });
  };
  const longName = params.name.length > 12;
  const displayedName = longName ? createShourtcut(params.name) : params.name;
  return (
    <div className="neonSkillCont border-neon">
      <div className="sk-icon">
        <params.icon />
      </div>
      <div className="sk-name tooltip">
        {longName && <span className="tooltip-text">{params.name}</span>}
        {displayedName}
        {longName && <span class="tooltip-icon">?</span>}
      </div>
      <div className="sk-w-i">
        {StarsLvl(params.lvl)}
        <span class="questionmark-icon" onClick={() => params.cb()}>
          ?
        </span>
      </div>
    </div>
  );
};

export { NeonSkillWindow, StarIconON };
