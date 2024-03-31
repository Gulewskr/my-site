import React from "react";
import { graphql } from "gatsby";

import { Accordion, NeonAppWindow } from "@components";
import Layout from "@components/Layout";
import { EDUCATION_DATA, WORK_DATA, HOBBY_DATA } from "@data/about";

import "@styles/aboutStyle.css";
import { getPrefixedTranslation } from "../scripts/utils";

import NeonArrowDownIcon from "@icons/neon-arrow.svg";
import { Icon } from "../component";

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

/**
 *
 * @param {TimelineData} data
 * @returns {Element}
 */
const renderTimeLineData = (data) => {
  const translate = getPrefixedTranslation('aboutpage');
  return (
    <div className="timeLineData-container">
    <NeonAppWindow>
      <div className="content-window">
        <span>
          {data.time.isSingleDate
            ? `${data.time.startDate.toDateString()}`
            : `${data.time.startDate.toDateString()} - ${data.time.endDate.toDateString()}`}
          {translate(data.headerKey)}
          <br />
          <br />
          {/* TODO add text to html */}
          {translate(data.contentKey, {
            interpolation: { escapeValue: false },
          })}
        </span>
      </div>
    </NeonAppWindow>
    </div>
  );
};

export default function About({ pageTitle, children }) {
  const translate = getPrefixedTranslation('aboutpage');

  return (
    <Layout pageTitle={"Rafal Gulewski - O mnie"}>
      <div className="flex flex-col gap-4 text-center items-center">
          <t1 className="text-neon">
            {translate('start')}    
          </t1>
          <Icon iconSize={"mid-h"}><NeonArrowDownIcon /></Icon>
        <Accordion
          data = {EDUCATION_DATA.map((data) => renderTimeLineData(data))}
          title = {translate("education.header")}
          isOpen={true}
        />
        <Icon iconSize={"mid-h"}><NeonArrowDownIcon /></Icon>
        <Accordion
          data = {WORK_DATA.map((data) => renderTimeLineData(data))}
          title = {translate("WORK LIFE")}
          isOpen={true}
        />
        <Icon iconSize={"mid-h"}><NeonArrowDownIcon /></Icon>
        <t1 className="text-neon">
          {translate('today')}    
        </t1>
      </div>

      <div className="hobby-sec">
        <Accordion
          data = {<ul>
                {HOBBY_DATA.map((data) => (
                  <li className="text-neon">
                    {translate(data.headerKey)}
                    {translate(data.contentKey)}
                  </li>
                ))}
            </ul>}
          title = {translate("aboutHob")}
          isOpen={true}
        />
      </div>
    </Layout>
  );
}
