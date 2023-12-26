import React from "react";
//import {graphql} from 'gatsby'

import Layout from "../component/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <main>
        <title>Not found</title>
        <div className="fontNF">
          <p>UPS zgubiłeś się? (pracuję nad tym miejscem 😉)</p>
          <p>ERROR: 404</p>
        </div>
      </main>
    </Layout>
  );
}
/*
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
*/
