import * as React from "react"
import {graphql} from 'gatsby'
import { Navbar, LanguageSettings, ColorSettings } from "../component"
import ThemeContextProvider from '../component/neonColor';

const NotFoundPage = () => {
  return (
    <ThemeContextProvider>
    <main>
      <div className="background-image" />
      <Navbar s=""/>
      <title>Not found</title>
      <div className="fontNF" >
        <p>UPS zgubiłeś się? (pracuję nad tym miejscem 😉)</p>
        <p>ERROR: 404</p>
      </div>

        <LanguageSettings />
        <ColorSettings />
    </main>
    </ThemeContextProvider>
  )
}

export default NotFoundPage

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