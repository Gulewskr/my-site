import * as React from 'react'
import {graphql} from 'gatsby';
import '../styles/skillsPage.css'
import { Navbar, TechnologyIcons, NeonSkillWindow, LanguageSettings, ColorSettings } from '../component/'
import {Trans} from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby'
import ThemeContextProvider from '../component/neonColor';

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
    "lvl": 1
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
    "lvl": 1
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

// markup
const Layout = ({ pageTitle, children }) => {
  return (
    <ThemeContextProvider>
    <main>
        <div className="background-image" />
        <Navbar s="Umiejętności" />
        <title>Rafal Gulewski - Umiejętności</title>
        <div className="cont">
          <div className="sec sec1">
            <t1><Trans>skills1</Trans></t1>
            <div className="secIco">{renderSkillList(progL)}</div>
          </div>
          <div className="sec sec1">
            <t1><Trans>skills2</Trans></t1>
            <div className="secIco">{renderSkillList(TiF)}</div>
          </div>
          <div className="sec sec1">
            <t1><Trans>skills3</Trans></t1>
            <div className="secIco">{renderSkillList(GE)}</div>
          </div>
          <div className="sec sec1">
            <div className="s">
              <Link to="/projects" >
                  <span><Trans>skills4</Trans></span>
                  <div className="animatedArrow">
                    <div className="arrow"/>
                  </div>
              </Link>
            </div>
          </div>
        </div>

        <LanguageSettings />
        <ColorSettings />
    </main>
    </ThemeContextProvider>
  )
}

export default Layout

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