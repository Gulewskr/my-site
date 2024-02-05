import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "../styles/skillsPage.css";
import "../styles/arrow.css";
import { TechnologyIcons, StarIconON, NeonSkillWindow } from "../component/";
import { Link } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

import Layout from "../component/Layout";
import classcat from "classcat";

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const STAT_INFO_DIV_ID = 'statinfo';

/**
 * @type {Array<{
 * icon: JSX.Element,
 * name: string,
 * lvl: number}}
 */
const progL = [
  {
    icon: TechnologyIcons["JavaScript"],
    name: "JavaScript",
    lvl: 3,
  },
  {
    icon: TechnologyIcons["Java"],
    name: "Java",
    lvl: 3,
  },
  {
    icon: TechnologyIcons["C Sharp"],
    name: "C Sharp",
    lvl: 2,
  },
];

const TiF = [
  {
    icon: TechnologyIcons["React"],
    name: "React",
    lvl: 3,
  },
  {
    icon: TechnologyIcons["React"],
    name: "React-Native",
    lvl: 1,
  },
  {
    icon: TechnologyIcons["Node.js"],
    name: "Node.js",
    lvl: 3,
  },
  {
    icon: TechnologyIcons["Git"],
    name: "Git",
    lvl: 3,
  },
];

const GE = [
  {
    icon: TechnologyIcons["Unity"],
    name: "Unity",
    lvl: 1,
  },
  {
    icon: TechnologyIcons["GameMakerStudio2"],
    name: "GameMakerStudio2",
    lvl: 1,
  },
];

const LevelsInfoData = [
  {
    lvl: 1,
    transKey: "lvl1",
  },
  {
    lvl: 2,
    transKey: "lvl2",
  },
  {
    lvl: 3,
    transKey: "lvl3",
  },
  {
    lvl: 4,
    transKey: "lvl4",
  },
  {
    lvl: 5,
    transKey: "lvl5",
  },
];

const normalStyle = {
  position: "fixed",
  top: "100px",
  width: "450px",
  "background-color": "var(--bg-primary-color)",
  cursor: "pointer",
  display: "flex",
  "flex-direction": "column",
  gap: "0.5rem",
  padding: "1rem",
  "border-radius": "1rem",
  right: "0",
  opacity: "1",
  //transform: 'translate(500px, 0)',
  transform: "translate(50px, 0)",
  transition: "2s",
};

const toggledStyle = {
  ...normalStyle,
  opacity: "0",
};

export default function Skills({ pageTitle, children }) {
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
     const element = document.getElementById(STAT_INFO_DIV_ID);
     if(!!element){
      element.setAttribute('toggled', toggled);
     }
  }, [toggled]);

  /**
   * @type {(t: Array<{
   * icon: JSX.Element,
   * name: string,
   * lvl: number}) => JSX.Element}
   */
  const renderSkillList = (t) =>
    t.map((v, i) => (
      <div>
        <NeonSkillWindow
          id={`${i}-${v["name"]}`}
          icon={v["icon"]}
          name={v["name"]}
          lvl={v["lvl"]}
          cb={() => setToggled(!toggled)}
        />
      </div>
    ));

  return (
    <Layout pageTitle={"Rafal Gulewski - Umiejętności"}>
      <div
        role="button"
        tabIndex={1}
        id="statinfo-toggle"
        className="border-neon"
        onClick={() => setToggled(!toggled)}
      >
        Info{" "}
        <div className="star">
          <StarIconON />
        </div>
      </div>
      <div
        id={STAT_INFO_DIV_ID}
        className={classcat({
            "border-neon": true,
            "statinfo-container": true
          })}
        onClick={() => setToggled(false)}
      >
        {LevelsInfoData.map((levelData) => (
          <div className='statinfo-row'>
            {`${levelData.lvl} `}
            <div className="star">
              <StarIconON />
            </div>
            <Trans>{levelData.transKey}</Trans>
          </div>
        ))}
      </div>
      <div className="cont">
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
            <Trans>skills1</Trans>
          </t1>
          <div className="container">
            <div className="neon-skills-grid">{renderSkillList(progL)}</div>
          </div>
        </div>
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
            <Trans>skills2</Trans>
          </t1>
          <div className="container">
            <div className="neon-skills-grid">{renderSkillList(TiF)}</div>
          </div>
        </div>
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
            <Trans>skills3</Trans>
          </t1>
          <div className="container">
            <div className="neon-skills-grid">{renderSkillList(GE)}</div>
          </div>
        </div>
        <div className="sec sec1">
          <div className="text-neon">
            <Link to="/projects">
              <div className="flex flex-row gap-1">
                <span>
                  <Trans>skills4</Trans>
                </span>
                <div className="animatedArrow">
                  <div class="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
