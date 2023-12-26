import React, { useState } from "react";
//import {graphql} from 'gatsby';
import "../styles/skillsPage.css";
import { TechnologyIcons, StarIconON, NeonSkillWindow } from "../component/";
import { Link } from "gatsby";

import Layout from "../component/Layout";

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
        style={toggled ? { form: "late(-100%, 0)" } : {}}
      >
        <div>
          1{" "}
          <div className="star">
            <StarIconON />
          </div>
          <>lvl1</>
        </div>
        <div>
          2{" "}
          <div className="star">
            <StarIconON />
          </div>
          <>lvl2</>
        </div>
        <div>
          3{" "}
          <div className="star">
            <StarIconON />
          </div>
          <>lvl3</>
        </div>
        <div>
          4{" "}
          <div className="star">
            <StarIconON />
          </div>
          <>lvl4</>
        </div>
        <div>
          5{" "}
          <div className="star">
            <StarIconON />
          </div>
          <>lvl5</>
        </div>
      </div>
    </>
  );
};

// markup
export default function Skills({ pageTitle, children }) {
  return (
    <Layout>
      <title>Rafal Gulewski - Umiejętności</title>
      <main>
        <StatInfo />
        <div className="cont">
          <div className="sec sec1">
            <t1 className="text-neon-on-blink">
              <>skills1</>
            </t1>
            <div className="secIco">{renderSkillList(progL)}</div>
          </div>
          <div className="sec sec1">
            <t1 className="text-neon-on-blink">
              <>skills2</>
            </t1>
            <div className="secIco">{renderSkillList(TiF)}</div>
          </div>
          <div className="sec sec1">
            <t1 className="text-neon-on-blink">
              <>skills3</>
            </t1>
            <div className="secIco">{renderSkillList(GE)}</div>
          </div>
          <div className="sec sec1">
            <div className="s text-neon">
              <Link to="/projects">
                <span>
                  <>skills4</>
                </span>
                <div className="animatedArrow">
                  <div className="arrow" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
