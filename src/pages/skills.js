import React, { useState } from "react";
import {graphql} from 'gatsby';
import "../styles/skillsPage.css";
import { TechnologyIcons, StarIconON, NeonSkillWindow } from "../component/";
import { Link } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

import Layout from "../component/Layout";

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

const progL = [
  {
    icon: TechnologyIcons["JavaScript"],
    name: "JavaScript",
    lvl: 2,
  },
  {
    icon: TechnologyIcons["Java"],
    name: "Java",
    lvl: 2,
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
    lvl: 2,
  },
  {
    icon: TechnologyIcons["React"],
    name: "React-Native",
    lvl: 1,
  },
  {
    icon: TechnologyIcons["Node.js"],
    name: "Node.js",
    lvl: 2,
  },
  {
    icon: TechnologyIcons["Git"],
    name: "Git",
    lvl: 2,
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
    transKey: 'lvl1'
  }, {
    lvl: 2,
    transKey: 'lvl2'
  }, {
    lvl: 3,
    transKey: 'lvl3'
  }, {
    lvl: 4,
    transKey: 'lvl4'
  }, {
    lvl: 5,
    transKey: 'lvl5'
  }
]

const renderSkillList = (t) =>
  t.map((v) => (
    <NeonSkillWindow icon={v["icon"]} name={v["name"]} lvl={v["lvl"]} />
  ));

const StatInfo = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <>
      <div
        id="statinfo-toggle"
        role="button"
        tabIndex="0"
        className="border-neon"
        onKeyPress={() => setToggled(true)}
        onClick={() => setToggled(true)}
      >
        Info{" "}
        <div className="star">
          <StarIconON />
        </div>
      </div>
      <div
        id="statinfo"
        role="button"
        tabIndex="0"
        className="border-neon"
        onKeyPress={() => setToggled(true)}
        onClick={() => setToggled(false)}
        style={toggled ? { right: '0'} : {}}
      >
        {LevelsInfoData.map(levelData => <div>
          {`${levelData.lvl} `}
          <div className="star">
            <StarIconON />
          </div>
          <Trans>{levelData.transKey}</Trans>
        </div>)}
      </div>
    </>
  );
};

// markup
export default function Skills({ pageTitle, children }) {
  return (
    <Layout pageTitle={"Rafal Gulewski - Umiejętności"}>
      <StatInfo />
      <div className="cont">
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
              <Trans>skills1</Trans>
          </t1>
          <div className="secIco">{renderSkillList(progL)}</div>
        </div>
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
              <Trans>skills2</Trans>
          </t1>
          <div className="secIco">{renderSkillList(TiF)}</div>
        </div>
        <div className="sec sec1">
          <t1 className="text-neon-on-blink">
              <Trans>skills3</Trans>
          </t1>
          <div className="secIco">{renderSkillList(GE)}</div>
        </div>
        <div className="sec sec1">
          <div className="s text-neon">
            <Link to="/projects">
              <span>
                <Trans>skills4</Trans>
              </span>
              <div className="animatedArrow">
                <div className="arrow" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
