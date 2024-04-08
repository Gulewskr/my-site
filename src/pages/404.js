import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';

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

//TODO dodać do tłumaczenia
export default function NotFoundPage() {
    return (
        <Layout pageTitle={'Rafal Gulewski - Not found'}>
            <div>
                {/*<p>UPS zgubiłeś się? (pracuję nad tym miejscem 😉)</p>*/}
                <p>ERROR: 404</p>
            </div>
        </Layout>
    );
}
