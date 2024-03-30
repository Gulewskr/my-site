import React from "react";
import { graphql } from "gatsby";
import {
  NeonAppWindow,
  ProjectTile,
  NeonAppWindowParameterized,
} from "../component/";
import Layout from "../component/Layout";

import {
  PROJECTS,
  PORJECT_NOT_DONE,
  PORJECT_UNDER_DEVELOPEMENT,
} from "../data/projects";

import "../styles/pageStyle.css";
import "../styles/projectStyle.css";
import { Trans } from "gatsby-plugin-react-i18next";
import { getPrefixedTranslation } from "../scripts/utils";

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
        {/* TODO - dodac kontrolowanie stylowania - hover effect etc */}
        {/* Neon app - add title of window */}
        <NeonAppWindowParameterized
          title={translate("header.projects")}
          content={<div className="ctl-m">{renderProjectList(PROJECTS)}</div>}
        />
        <NeonAppWindow>
          <div className="projects-ctl">
            <t1 className="text-neon-on-blink mb-4">
              <Trans>projInfo-developement-current</Trans>
            </t1>
            <div className="flex flex-col gap-1">
              <div className="ctl-m">
                {renderProjectList(PORJECT_UNDER_DEVELOPEMENT)}
              </div>
            </div>
          </div>
        </NeonAppWindow>
        {/* TODO - zmienić emotki na coś normalnego XD */}
        <NeonAppWindow>
          <div className="projects-ctl">
            <t1 className="text-neon-on-blink mb-4">
              <Trans>projInfo-developement</Trans>
            </t1>
            <div className="flex flex-col gap-1">
              <div className="ctl-m">{renderProjectList(PORJECT_NOT_DONE)}</div>
            </div>
          </div>
        </NeonAppWindow>
      </div>
    </Layout>
  );
}
