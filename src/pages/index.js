import * as React from 'react'
import {graphql} from 'gatsby';

import '../styles/pageStyle.css'
import '../styles/mainPage.css'
import { Corner, VLine, HLine, Navbar, NeonAppWindow, CircleIcons, ContactList, LanguageSettings, ColorSettings } from '../component/'

import {Trans} from 'gatsby-plugin-react-i18next';
import ThemeContextProvider from '../component/neonColor';

import profilePicture from '../images/profile.jpg' 

// markup
const Layout = ({ pageTitle, children }) => {
  const info = <><span className="info-h"><Trans>info1</Trans></span><br /><br />
    <span className="info-t"><Trans>info2</Trans></span>
    </>;

  const contact = <>
    <span className="info-t"><Trans>info3</Trans><br /><br /></span>
    <ContactList />
  </>

  return (
    <ThemeContextProvider>
      <main>
          <title>Rafal Gulewski</title>
          <div className="background-image" />
          <Navbar />
          <div className="sec">
            <div className="leftCollumn">
              <div className="profilePicture">
                <div className="pic-border">
                  <img src={profilePicture} alt="RAFAŁ" />
                </div>
                <div className="s-t"><HLine/></div>
                <div className="s-b"><HLine/></div>
                <div className="s-l"><VLine/></div>
                <div className="s-r"><VLine/></div>
                <div className="s-ctl"><Corner/></div>
                <div className="s-cbl"><Corner/></div>
                <div className="s-ctr"><Corner/></div>
                <div className="s-cbr"><Corner/></div>
              </div>
            </div>
            <div className="rightCollumn">
              <div className="wdg-info">
              <NeonAppWindow content={info}/>
              </div>
              <div className="floatIcons">
                <CircleIcons />
              </div>
              <div className="wdg-c">
              <NeonAppWindow content={contact}/>
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
`