import React from "react";
import { graphql } from "gatsby";
import debounce from "lodash.debounce";
import { NeonAppWindow } from "../component/";
import Layout from "../component/Layout";

import "../styles/pageStyle.css";
import "../styles/aboutStyle.css";
import { useTranslation } from "gatsby-plugin-react-i18next";

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
 *  @typedef {Object} TimeData
 *  @property {boolean} isSingleDate
 *  @property {Date} startDate
 *  @property {Date} endDate
 * 
  * @typedef {Object} TimelineData
  * @property {TimeData} time
  * @property {string} headerKey
  * @property {string} contentKey
  * 
  * @typedef {Object} HobbyData
  * @property {string} headerKey
  * @property {string} contentKey
  * 
*/

/**
 * @type {Array<TimelineData>}
 */
const timelineData = [
  {
    time: {
      isSingleDate: false,
      startDate: new Date('2007-01-01'),
      endDate: new Date('2019-01-01'),
    },
    headerKey: '',
    contentKey: 'about1'
  },
  {
    time: {
      isSingleDate: true,
      startDate: new Date('2019-01-01'),
      endDate: new Date(),
    },
    headerKey: '',
    contentKey: 'about2'
  },
  {
    time: {
      isSingleDate: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    headerKey: 'aboutE',
    contentKey: 'about3'
  },
  {
    time: {
      isSingleDate: false,
      startDate: new Date(),
      endDate: new Date(),
    },
    headerKey: '',
    contentKey: 'about4'
  },
  {
    time: {
      isSingleDate: false,
      startDate: new Date('2022-01-02'),
      endDate: new Date(),
    },
    headerKey: '',
    contentKey: 'about5'
  }
]


/**
 * @type {Array<HobbyData>}
 */
const hoobyData = [
  {
    headerKey: 'aboutHob1',
    contentKey: ''
  },
  {
    headerKey: 'aboutHob2',
    contentKey: ''
  },
  {
    headerKey: 'aboutHob3',
    contentKey: ''
  },
  {
    headerKey: 'aboutHob4',
    contentKey: ''
  },
  {
    headerKey: 'aboutHob5',
    contentKey: ''
  },
  {
    headerKey: 'aboutHob6',
    contentKey: ''
  }
]

// markup
export default function About({ pageTitle, children }) {

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
      content: "empty",
      left: true,
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
          className={
            this.state.left
              ? this.state.visible
                ? "tl-cont tl-l tl-active"
                : "tl-cont tl-l"
              : this.state.visible
                ? "tl-cont tl-r tl-active"
                : "tl-cont tl-r"
          }
        >
          <NeonAppWindow>{this.props.children}</NeonAppWindow>
        </div>
      );
    }
  }

  return (
    <Layout pageTitle={"Rafal Gulewski - O mnie"}>
      <div className="timeline">
        <t1 className="text-neon-on-blink">
          {translate('aboutH')}    
        </t1>
        <div className="tl-main">
          <div className="tl-line border-neon" />
          {
            timelineData.map(data => renderTimeLineData(data))
          }
          </div>
        <t1 className="text-neon">
          {translate('aboutE')}    
        </t1>
      </div>
      <div className="hobby-sec">
        <t1 className="text-neon-on-blink">
          {translate('aboutHob')}    
        </t1>
        <ul>
          {hoobyData.map(data => (
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
