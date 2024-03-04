import React, { useState } from "react";
import { graphql } from "gatsby";
import debounce from "lodash.debounce";
import { NeonAppWindow } from "../component/";
import Layout from "../component/Layout";
import { EDUCATION_DATA, WORK_DATA, HOBBY_DATA } from "../data/about";

import "../styles/pageStyle.css";
import "../styles/aboutStyle.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
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

/*
// TODO
// hobby/timeline icons
// additional timeline description
*/

/**
  * @typedef {object} IVisibleSections
  * @property {boolean} education
  * @property {boolean} work
  * @property {boolean} hobbys
  * 
 */

// markup
export default function About({ pageTitle, children }) {

  const [visibleSections, setVisibleSections] = useState({
    "education": true,
    "work": true,
    "hobbys": true
  })

  /**
   * 
   * @param {keyof IVisibleSections} sectionName 
   */
  const handleChangeSectionVisibility = (sectionName) => {
     const newState = {...visibleSections}
     newState[sectionName] = !visibleSections[sectionName];

     setVisibleSections(newState);
  }

  const [translate] = useTranslation();
  /**
   * 
   * @param {TimelineData} data
   * @returns {Element} 
   */
  const renderTimeLineData = (data) => {
    return (
      <TLBlock>
        <div className="content-window">
          <span>
            {data.time.isSingleDate ? `${data.time.startDate.toDateString()}` : `${data.time.startDate.toDateString()} - ${data.time.endDate.toDateString()}`}
            {translate(data.headerKey)}
            <br />
            <br />
            {/* TODO add text to html */}
            {translate(data.contentKey, {interpolation: {escapeValue: false}})}
          </span>
        </div>
      </TLBlock>
    )
  }

  class TLBlock extends React.Component {
    state = {
      visible: false,
      content: "empty"
    };

    constructor(props) {
      super(props);
      this.state.content = props.content;
      this.state.left = props.left;
    }

    componentDidMount() {
      if (typeof window.IntersectionObserver === `function`) {
        this.observer = new window.IntersectionObserver(
          debounce((entries) => {
            const entry = entries.slice(0).shift();
            this.setState({
              visible: entry.isIntersecting,
            });
          }, 100),
          {
            rootMargin: "0px 0px 0px 0px",
            threshold: 0.75,
          },
        );

        this.observer.observe(this.container);
      }
    }

    componentWillUnmount() {
      this.observer.unobserve(this.container);
    }

    render() {
      return (
        <div
          ref={(node) => (this.container = node)}
          className={classcat({
            "tl-cont tl-r": true,
            "tl-active": this.state.visible
          })}
        >
          <NeonAppWindow>{this.props.children}</NeonAppWindow>
        </div>
      );
    }
  }

  return (
    <Layout pageTitle={"Rafal Gulewski - O mnie"}>
      <div className="">
        <div>
          <t1 className="text-neon-on-blink">
            {translate('aboutH')}    
          </t1>
          <button onClick={() => handleChangeSectionVisibility("education")}>{visibleSections.education ? '-' : '+'}</button>
          {
            visibleSections.education &&
            /* <div className="tl-line border-neon" /> */
            EDUCATION_DATA.map(data => renderTimeLineData(data))
          }
        </div>
        <div>
          <t1 className="text-neon-on-blink">
            {translate('WORK LIFE')}    
          </t1>
          <button onClick={() => handleChangeSectionVisibility("work")}>{visibleSections.work ? '-' : '+'}</button>
          {
            visibleSections.work &&
            /* <div className="tl-line border-neon" /> */
            WORK_DATA.map(data => renderTimeLineData(data))
          }
        </div>
        {/*
        <t1 className="text-neon">
          {translate('aboutE')}    
        </t1>
        */}
      </div>
      <div className="hobby-sec">
        <t1 className="text-neon-on-blink">
          {translate('aboutHob')}    
        </t1>
        <button onClick={() => handleChangeSectionVisibility("hobbys")}>{visibleSections.hobbys ? '-' : '+'}</button>
        <ul>
          {
          visibleSections.hobbys &&
          HOBBY_DATA.map(data => (
          <li className="text-neon">
            {translate(data.headerKey)}
            {translate(data.contentKey)}
          </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
