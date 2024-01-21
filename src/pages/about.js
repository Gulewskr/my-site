import React from "react";
import { graphql } from "gatsby";
import debounce from "lodash.debounce";
import { NeonAppWindow } from "../component/";
import Layout from "../component/Layout";

import "../styles/pageStyle.css";
import "../styles/aboutStyle.css";

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

// markup
export default function About({ pageTitle, children }) {
  var t1 = (
    <div className="content-window">
      <span>
        2007-2019
        <br />
        <br />
        <>about1</>
      </span>
    </div>
  );
  var t2 = (
    <div className="content-window">
      <span>
        2019 - <>matura</>
        <br />
        <br />
        <>about2</>
      </span>
    </div>
  );
  var t3 = (
    <div className="content-window">
      <span>
        2019 - <>aboutE</>
        <br />
        <br />
        <>about3</>
      </span>
    </div>
  );
  var t4 = (
    <div className="content-window">
      <span>
        2021
        <br />
        <br />
        <>about4</>
      </span>
    </div>
  );

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
          <NeonAppWindow>{this.state.content}</NeonAppWindow>
        </div>
      );
    }
  }

  return (
    <Layout pageTitle={"Rafal Gulewski - O mnie"}>
      <div className="timeline">
        <t1 className="text-neon-on-blink">
          <>aboutH</>
        </t1>
        <div className="tl-main">
          <div className="tl-line border-neon" />
          <TLBlock content={t1} left={false} />
          <TLBlock content={t2} left={false} />
          <TLBlock content={t3} left={true} />
          <TLBlock content={t4} left={false} />
        </div>
        <t1 className="text-neon">
          <>aboutE</>
        </t1>
      </div>
      <div className="hobby-sec">
        <t1 className="text-neon-on-blink">
          <>aboutHob</>
        </t1>
        <ul>
          <li className="text-neon">
            <>aboutHob1</>
          </li>
          <li className="text-neon">
            <>aboutHob2</>
          </li>
          <li className="text-neon">
            <>aboutHob3</>
          </li>
          <li className="text-neon">
            <>aboutHob4</>
          </li>
          <li className="text-neon">
            <>aboutHob5</>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
