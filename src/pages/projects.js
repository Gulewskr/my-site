import React from "react";
import { graphql } from "gatsby";

import {
  ProjectTile,
  NeonAppWindowParameterized,
} from "@components";
import Layout from "@components/Layout";

import {
  PROJECTS,
  PORJECT_NOT_DONE,
  PORJECT_UNDER_DEVELOPEMENT,
} from "@data/projects";

import "@styles/projectStyle.css";

import { getPrefixedTranslation } from "@scripts/utils";

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

const renderProjectList = (t) =>
  t.length > 0 ? (
    t.map((v) => (
      <div className="container-folder">
        <ProjectTile name={v["name"]} techs={v["techs"]} link={v["link"]} />
      </div>
    ))
  ) : (
    <div className="container-folder ">--------------</div>
  );

export default function Projects({ pageTitle, children }) {
  const translate = getPrefixedTranslation("projectpage");

  return (
    <Layout pageTitle={"Rafal Gulewski - Projekty"}>
      <div className="container flex flex-col px-20" style={{ gap: "2rem" }}>
        <NeonAppWindowParameterized
          title={translate("header.projects")}
          content={<div className="ctl-m">{renderProjectList(PROJECTS)}</div>}
        />
         <NeonAppWindowParameterized
          title={translate("header.notFinished")}
          content={<div className="ctl-m">{renderProjectList(PORJECT_UNDER_DEVELOPEMENT)}</div>}
        />
         <NeonAppWindowParameterized
          title={translate("header.underDevelopement")}
          content={<div className="ctl-m">{renderProjectList(PORJECT_NOT_DONE)}</div>}
        />
      </div>
    </Layout>
  );
}
