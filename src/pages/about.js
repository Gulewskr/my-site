import * as React from 'react'
import {graphql} from 'gatsby';
import '../styles/pageStyle.css'
import '../styles/aboutStyle.css'
import {NeonAppWindow} from '../component/'
import {Trans} from 'gatsby-plugin-react-i18next';

import debounce from "lodash.debounce";
import background from '../images/bg.jpg'

import Layout from '../component/Layout';

// markup
export default function About ({ pageTitle, children }){
  var t1 = <div className='content-window'>
            <span>2007-2019<br /><br />
            <Trans>about1</Trans></span>
          </div>
  var t2 = <div className='content-window'>
            <span>2019 - <Trans>matura</Trans><br /><br />
            <Trans>about2</Trans></span>
          </div>
  var t3 = <div className='content-window'>
            <span>2019 - <Trans>aboutE</Trans><br /><br />
            <Trans>about3</Trans></span>
          </div>
  var t4 = <div className='content-window'>
            <span>2021<br /><br />
            <Trans>about4</Trans></span>
          </div>

class TLBlock extends React.Component {
    state = {
      visible: false,
      content: "empty",
      left: true
    };

    constructor(props){
      super(props);
      this.state.content = props.content;
      this.state.left = props.left;
    }

    componentDidMount() {
      if (typeof window.IntersectionObserver === `function`) {
        this.observer = new window.IntersectionObserver(
          debounce(entries => {
          const entry = entries.slice(0).shift();
          this.setState({
            visible: entry.isIntersecting
          });
        }, 100), 
        {
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.75
        });

        this.observer.observe(this.container);
      }
    }

    componentWillUnmount() {
      this.observer.unobserve(this.container);
    }

    render() {
      return (
        <div ref={node => (this.container = node)} className={
          this.state.left ? (this.state.visible ? "tl-cont tl-l tl-active" : "tl-cont tl-l") 
                      : (this.state.visible ? "tl-cont tl-r tl-active" : "tl-cont tl-r")
          } >
          <NeonAppWindow>
            {this.state.content}
          </NeonAppWindow>
        </div>
      );
    }
  }

  return (
      <Layout>
        <title>Rafal Gulewski - O mnie</title>
        <main>
        <div className="background-image" style={{backgroundImage: `url(${background})`}} />
          <div className="timeline">
            <t1 className="text-neon-on-blink"><Trans>aboutH</Trans></t1>
            <div className="tl-main">
              <div className="tl-line border-neon" />
              <TLBlock content={t1} left={false}/>
              <TLBlock content={t2} left={false}/>
              <TLBlock content={t3} left={true}/>
              <TLBlock content={t4} left={false}/>
            </div>
            <t1 className="text-neon"><Trans>aboutE</Trans></t1>
          </div>
          <div className="hobby-sec">
            <t1 className="text-neon-on-blink"><Trans>aboutHob</Trans></t1>
            <ul>
              <li className="text-neon"><Trans>aboutHob1</Trans></li>
              <li className="text-neon"><Trans>aboutHob2</Trans></li>
              <li className="text-neon"><Trans>aboutHob3</Trans></li>
              <li className="text-neon"><Trans>aboutHob4</Trans></li>
              <li className="text-neon"><Trans>aboutHob5</Trans></li>
            </ul>
          </div>
      </main>
      </Layout>
  );
}

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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