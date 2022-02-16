import React, {useState} from 'react'
import {graphql} from 'gatsby';
import '../styles/skillsPage.css'
import { TechnologyIcons, StarIconON, NeonSkillWindow } from '../component/'
import {Trans} from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby'
import background from '../images/bg.jpg'

import Layout from '../component/Layout';

const progL = [
  {
    "icon": TechnologyIcons["JavaScript"],
    "name": "JavaScript",
    "lvl": 2
  },{
    "icon": TechnologyIcons["Java"],
    "name": "Java",
    "lvl": 2
  },{
    "icon": TechnologyIcons["C Sharp"],
    "name": "C Sharp",
    "lvl": 2
  }
]

const TiF = [
  {
    "icon": TechnologyIcons["React"],
    "name": "React",
    "lvl": 2
  },{
    "icon": TechnologyIcons["React"],
    "name": "React-Native",
    "lvl": 1
  },{
    "icon": TechnologyIcons["Node.js"],
    "name": "Node.js",
    "lvl": 2
  },{
    "icon": TechnologyIcons["Git"],
    "name": "Git",
    "lvl": 2
  }
]

const GE = [
  {
    "icon": TechnologyIcons["Unity"],
    "name": "Unity",
    "lvl": 1
  },{
    "icon": TechnologyIcons["GameMakerStudio2"],
    "name": "GameMakerStudio2",
    "lvl": 1
  }
]

const renderSkillList = (t) => t.map((v) => 
  <NeonSkillWindow icon={v["icon"]} name={v["name"]} lvl={v["lvl"]} />)

const StatInfo = () => {
    const [toggled, setToggled] = useState(false);
    return(
      <>
      <div id="statinfo-toggle" role="button" tabIndex="0" className="border-neon" onKeyPress={() => setToggled(true)} onClick={() => setToggled(true)}>
        Info <div className='star'><StarIconON /></div>
      </div>
      <div id="statinfo" role="button" tabIndex="0" className="border-neon" onKeyPress={() => setToggled(true)}   onClick={() => setToggled(false)} style={toggled ? {"transform" : "translate(-100%, 0)"} : {}}>
        <div>1 <div className='star'><StarIconON /></div><Trans>lvl1</Trans></div>
        <div>2 <div className='star'><StarIconON /></div><Trans>lvl2</Trans></div>
        <div>3 <div className='star'><StarIconON /></div><Trans>lvl3</Trans></div>
        <div>4 <div className='star'><StarIconON /></div><Trans>lvl4</Trans></div>
        <div>5 <div className='star'><StarIconON /></div><Trans>lvl5</Trans></div>
      </div>
    </>
    );
}

// markup
export default function Skills ({ pageTitle, children }) 
{
  return (
      <Layout>
      <title>Rafal Gulewski - Umiejętności</title>
      <div className="background-image" style={{backgroundImage: `url(${background})`}} />
      <main>
          <StatInfo />
          <div className="cont">
            <div className="sec sec1">
              <t1 className="text-neon-on-blink"><Trans>skills1</Trans></t1>
              <div className="secIco">{renderSkillList(progL)}</div>
            </div>
            <div className="sec sec1">
              <t1 className="text-neon-on-blink"><Trans>skills2</Trans></t1>
              <div className="secIco">{renderSkillList(TiF)}</div>
            </div>
            <div className="sec sec1">
              <t1 className="text-neon-on-blink"><Trans>skills3</Trans></t1>
              <div className="secIco">{renderSkillList(GE)}</div>
            </div>
            <div className="sec sec1">
              <div className="s text-neon">
                <Link to="/projects" >
                    <span><Trans>skills4</Trans></span>
                    <div className="animatedArrow">
                      <div className="arrow"/>
                    </div>
                </Link>
              </div>
            </div>
          </div>
      </main>
    </Layout>
  )
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