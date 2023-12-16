import React from 'react';
import {graphql} from 'gatsby';

import '../styles/pageStyle.css';
import '../styles/mainPage.css';
import { NeonAppWindow, CircleIcons, ContactList } from '../component/';
import { Trans } from 'gatsby-plugin-react-i18next';
import Layout from '../component/Layout';
import profilePicture from '../images/339982884_210878608218440_4044470635753148789_n.png' 


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

export default function Home({ pageTitle, children })
{

  const info = 
    <div className='content-window'>
      <span className="info-h text-neon-on blink"><Trans>info1</Trans></span>
      <br />
      <br />
      <span className="info-t"><Trans>info2</Trans></span>
    </div>;

  const contact = 
  <div className='content-window'>
    <span className="info-t text-neon-on"><Trans>info3</Trans><br /><br /></span>
    <ContactList />
  </div>

  return (
      <Layout>
          <title>Rafal Gulewski</title>
        <main>
          <div className="sec">
            {/*
            <div className="leftCollumn">
              <div className="profilePicture">
                  <div className='profilePicture-c'><img src={profilePicture} alt="Profile" /></div>
                  <div className="pic-border border-neon" />
              </div>
            </div>
            */}
            <div className="rightCollumn">
              <div className="wdg-info">
                <NeonAppWindow>
                  {info}
                </NeonAppWindow>
              </div>
              <div className="floatIcons">
                <CircleIcons />
              </div>
              <div className="wdg-c">
                <NeonAppWindow>
                  {contact}
                </NeonAppWindow>
              </div>
            </div>
          </div>
      </main>
      </Layout>
  )
}