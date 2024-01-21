import React from "react";
import { graphql } from "gatsby";
import { NeonProjectWindow } from "../component/";
import Layout from "../component/Layout";

import "../styles/pageStyle.css";
import "../styles/projectStyle.css";

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

const TPr = [
  {
    name: "Mobile-organizer - React Native",
    techs: ["React", "JavaScript"],
    link: "https://github.com/Gulewskr/mobile-organizer",
  },
  {
    name: "'Blockudoku'",
    techs: ["Java"],
    link: "https://github.com/Gulewskr/Blockudoku_PIO",
  },
  {
    name: "'Tanki Offline'",
    techs: ["Java"],
    link: "https://github.com/Gulewskr/Tanki_Offline",
  },
  {
    name: "Algorithms and data structures project",
    techs: ["Java"],
    link: "/404",
  },
  {
    name: "JSON-Generator 👷‍♂️",
    techs: ["JavaScript", "Node.js"],
    link: "https://github.com/Gulewskr/Patients-Generator",
  },
  {
    name: "Recipes Forum",
    techs: ["JavaScript", "Node.js"],
    link: "https://github.com/Gulewskr/App-RecipesForum",
  },
  {
    name: "Game shop 👷‍♂️ - .net core",
    techs: ["C Sharp"],
    link: "https://github.com/Gulewskr/game-shop",
  },
  {
    name: "Streaming platform 👷‍♂️ - Java Spring, TS (React)",
    techs: ["Java", "JavaScript"],
    link: "https://github.com/Gulewskr/game-shop",
  },
  {
    name: "Tetris",
    techs: ["Java"],
    link: "https://github.com/biedrzyd/testowanie_oprogramowania1/tree/master/Tetris",
  },
  {
    name: "Simple todo app - Javafx",
    techs: ["Java"],
    link: "https://github.com/biedrzyd/testowanie_oprogramowania1/tree/master/todo-app",
  },
];

const renderProjectList = (t) =>
  t.map((v) => (
    <div className="ctl-wind">
      <NeonProjectWindow name={v["name"]} techs={v["techs"]} link={v["link"]} />
    </div>
  ));

export default function Projects({ pageTitle, children }) {
  return (
    <Layout pageTitle={"Rafal Gulewski - Projekty"}>
      <div className="projects-ctl">
        <t1 className="text-neon-on-blink">
          <>proj</>
        </t1>
        <div className="ctl-m">{renderProjectList(TPr)}</div>
        <div className="text-neon" style={{ fontSize: "20px" }}>
          👷‍♂️ - <>projInfo</>
        </div>
      </div>
    </Layout>
  );
}
