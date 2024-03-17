import React, { useState } from "react";
import "../../styles/neonStyle.css";
import "./styles.css";
import { Link } from "gatsby";
import { TechnologyIcons } from "..";
import { createShourtcut } from "../../scripts/utils";
//import { Styles } from '../../styles/neonStyles'

const NeonProjectWindow = (params) => {
  const [f, setF] = useState(false);

  //const FolderIcon = () => (
  //  <svg
  //      xmlns="http://www.w3.org/2000/svg"
  //      preserveAspectRatio="none"
  //      width="100%"
  //      height="100%"
  //      viewBox="0 0 110 70"
  //    >
  //    <g id="glow">
  //      <path
  //        className="neon-blur"
  //        d="M52.88,7.33q-7.56,0-15.12,0H4.59a3.75,3.75,0,0,0,0,7.5H23.2q10,0,20,0l9.65,0a3.75,3.75,0,0,0,0-7.5Z"
  //      />
  //      <path
  //        className="neon-blur"
  //        d="M99.46,7.37H55.74a14.68,14.68,0,0,0-2,0h-.5c.86.31,1,.32.57,0a5.36,5.36,0,0,0-1.25-.78L48.84,4.27a17.05,17.05,0,0,0-3.49-1.94A13.16,13.16,0,0,0,41.15,2H9.07c-.49,0-1,0-1.48,0A6.78,6.78,0,0,0,1.52,5.8a10,10,0,0,0-.68,4.51V58.53c0,4.08-.72,9.13,3.81,11.24,2.18,1,4.94.69,7.29.69H79.32c6.73,0,13.49.17,20.21,0a6.87,6.87,0,0,0,6.84-6.79c0-1,0-2.08,0-3.11V45.08c0-10.11.06-20.22,0-30.33a7.12,7.12,0,0,0-6.91-7.38,3.76,3.76,0,0,0-3.75,3.75,3.83,3.83,0,0,0,3.75,3.75c-1-.06.44.07-.15,0-.33-.06-.5-.58-.16,0-.12-.19-.19-.32-.31-.53.28.51,0,.27,0,0V63c0,.11-.08.67,0,.75s.09-.32.13-.44c.15-.42-.48.48.1-.1.15-.15.56-.27,0,0,.11-.05.62-.16.53-.21s-.46,0-.58,0H8.6a7.66,7.66,0,0,0-.83,0s-.15,0-.18,0c.14-.09.73.53.26,0,0,0,.64.71.36.29s.28.34.13.45c0,0,0,0,0,0s0-.22,0-.27c0-.41,0-.83,0-1.24v-52c0-.41,0-.83,0-1.24a1,1,0,0,0,0-.25s0,0,0,0-.1.36-.14.46-.1.18.09-.15A.73.73,0,0,1,8,9.34c-.46.26.56-.53-.12.09-8.29,7.59-.36,0-.31.06h.1a2,2,0,0,0,.55,0H42.39a3.77,3.77,0,0,0,1,0c-.14.19-.93-.46-.5-.13s1.07.67,1.59,1l3.73,2.35c1.58,1,3,2,4.92,2.14,3,.19,6.1,0,9.11,0H99.46a3.8,3.8,0,0,0,3.75-3.75A3.82,3.82,0,0,0,99.46,7.37Z"
  //      />
  //    </g>
  //    <g id="shape">
  //      <path
  //        className="neon-line"
  //        d="M52.88,10.46l-15.12,0H4.59a.63.63,0,0,0,0,1.25H43.23c3.22,0,6.44,0,9.65,0a.63.63,0,0,0,0-1.25Z"
  //      />
  //      <path
  //        className="neon-line"
  //        d="M99.46,10.49H55.74c-.66,0-1.34,0-2,0A5.41,5.41,0,0,1,51,9.32L47.26,7a15.23,15.23,0,0,0-2.74-1.63,10,10,0,0,0-3.37-.23H9.07c-1.95,0-4,.09-4.85,2.27A8,8,0,0,0,4,10.31V58.53c0,2.64-.85,7.33,2.27,8.54,1.65.64,4,.26,5.71.26H79.32c6.73,0,13.49.19,20.21,0a3.67,3.67,0,0,0,3.71-3.66c0-1,0-2.08,0-3.11V45.08c0-10.11.07-20.22,0-30.33a3.94,3.94,0,0,0-3.78-4.26c-.81,0-.81,1.21,0,1.25,2.35.13,2.53,2.09,2.53,3.86V55.11c0,2.86.15,5.77,0,8.62s-3.76,2.35-5.8,2.35H8.6a4.15,4.15,0,0,1-2.33-.37C5,64.9,5.21,63.48,5.21,62.22v-52C5.21,9,5,7.74,6.09,6.89s3.18-.53,4.47-.53H42.39c.31,0,.64,0,1,0A6.29,6.29,0,0,1,46,7.66L49.74,10c1,.65,2.09,1.58,3.34,1.71a40.18,40.18,0,0,0,4.39,0h42A.63.63,0,0,0,99.46,10.49Z"
  //      />
  //    </g>
  //  </svg>
  //);
  
  const techUsed = (techs) =>
    techs.map((v, i) => (i > 5 ? <></> : <div>{TechnologyIcons[v]()}</div>));

  return (
    <Link to={params.link}>
      <div
        className="prjct-container border-neon"
        role="button"
        tabIndex="0"
        onMouseEnter={() => setF(true)}
        onMouseLeave={() => setF(false)}
      >
          {/*<div className="prjct-bg">
            // TODO change this to component with - generated border + move content iside this (might be enough to just use neon-border class)
            <FolderIcon />
          </div>
          <div className="prjct-cbg" />
          */}
          <div className="prjct-cont">
            <div
              style={{ textAlign: "center" }}
              className={f ? "text-neon-on" : "text-neon"}
            >
              {params.name}
            </div>
            <div className="prjct-techs">{techUsed(params.techs)}</div>
          </div>
      </div>
    </Link>
  );
};


export {
  NeonProjectWindow
};
