import React, { useMemo } from 'react';
import {graphql} from 'gatsby';

import '../styles/pageStyle.css';
import '../styles/mainPage.css';
import { NeonAppWindow, ContactList } from '../component/';
import { Trans } from 'gatsby-plugin-react-i18next';
import Layout from '../component/Layout';

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

  const info = useMemo(() => (
    <div className='content-window'>
      <span className="info-h text-neon-on blink"><Trans>info1</Trans></span>
      <br />
      <br />
      <span className="info-t"><Trans>info2</Trans></span>
    </div>
  ), []);

  const contact = useMemo(() => (
    <div className='content-window'>
      <span className="info-t text-neon-on"><Trans>info3</Trans><br /><br /></span>
      <ContactList />
    </div>
  ), []);
  

  return (
    <>
        <title className='bg-gradient-to-br from-dark-purple-start to-dark-purple-end to-80'>Rafal Gulewski</title>
        <main>
          <Layout>
              <div className="container mx-auto">
                {/*
                <div className="leftCollumn">
                  <div className="profilePicture">
                      <div className='profilePicture-c'><img src={profilePicture} alt="Profile" /></div>
                      <div className="pic-border border-neon" />
                  </div>
                </div>
                */}
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="w-full wdg-info">
                      <NeonAppWindow>
                        {info}
                      </NeonAppWindow>
                    </div>
                    {/*
                      <div className="floatIcons">
                        <CircleIcons />
                      </div>
                    */}
                    <div className="w-full self-center wdg-c">
                      <NeonAppWindow>
                        {contact}
                      </NeonAppWindow>
                    </div>
                </div>
              </div>
          </Layout>
      </main>
    </>
  )
}