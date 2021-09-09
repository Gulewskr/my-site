import * as React from 'react'
import {graphql} from 'gatsby';
import '../styles/pageStyle.css'
import '../styles/projectStyle.css'
import {NeonProjectWindow, Navbar, LanguageSettings, ColorSettings} from '../component/'
import {Trans} from 'gatsby-plugin-react-i18next';
import ThemeContextProvider from '../component/neonColor';
import background from '../images/bg.jpg'

const TPr = [
  {
    "name": "Mobile-organizer", 
    "techs": ["React", "JavaScript"], 
    "link": "https://github.com/Gulewskr/mobile-organizer"
  },{
    "name": "'Blockudoku'", 
    "techs": ["Java"], 
    "link": "https://github.com/Gulewskr/Blockudoku_PIO"
  },{
    "name": "'Tanki Offline'", 
    "techs": ["Java"], 
    "link": "https://github.com/Gulewskr/Tanki_Offline"
  },{
    "name": "Algorithms and data structures project", 
    "techs": ["Java"], 
    "link": "/404"
  },{
    "name": "JSON-Generator", 
    "techs": ["JavaScript", "Node.js"], 
    "link": "https://github.com/Gulewskr/Patients-Generator"
  },
]

const renderProjectList = (t) => t.map( (v) => 
      <div className="ctl-wind">
        <NeonProjectWindow name={v["name"]} techs={v["techs"]} link={v["link"]}/>
      </div>
    )

const Layout = ({ pageTitle, children }) => {
  return (
    <ThemeContextProvider>
    <main>
      <div className="background-image" style={{backgroundImage: `url(${background})`}} />
        <Navbar s="Projekty" />
        <title>Rafal Gulewski - Projekty</title>
        <div className="projects-ctl">
          <t1><Trans>proj</Trans></t1> 
          <div className="ctl-m">
            {renderProjectList(TPr)}
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