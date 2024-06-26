import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';

import { NeonAppWindow, ContactList } from '@components';
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

export default function Home({ pageTitle, children }) {
    const info = useMemo(
        () => (
            <div className="content-window">
                <span className="info-h text-neon-on blink">
                    <Trans>homepage.welcomeText</Trans>
                </span>
                <br />
                <br />
                <span className="info-t">
                    <Trans>homepage.description</Trans>
                </span>
            </div>
        ),
        [],
    );

    const contact = useMemo(
        () => (
            <div className="content-window flex flex-col items-center w-full">
                <span className="info-t text-neon-on">
                    <Trans>homepage.findme</Trans>
                    <br />
                    <br />
                </span>
                <div>
                    <ContactList />
                </div>
            </div>
        ),
        [],
    );

    return (
        <Layout pageTitle={'Rafal Gulewski'}>
            <div
                className="container mx-auto"
                style={{
                    marginTop: '30px',
                    marginBottom: '30px',
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2 items-center">
                    <div className="w-full wdg-info">
                        <NeonAppWindow>{info}</NeonAppWindow>
                    </div>
                    <div className="w-full self-center wdg-c">
                        <NeonAppWindow>{contact}</NeonAppWindow>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
