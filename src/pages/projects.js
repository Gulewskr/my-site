import React from 'react';
import { graphql } from 'gatsby';

import { ProjectTile, NeonAppWindowParameterized } from '@components';
import Layout from '@components/Layout';

import {
    PROJECTS,
    PORJECT_NOT_DONE,
    PORJECT_UNDER_DEVELOPEMENT,
} from '@data/projects';

import '@styles/projectStyle.css';

import { getPrefixedTranslation } from '@scripts/utils';
import { getCurrentLanguage } from '../scripts/utils';

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

const renderProjectList = t => {
    const language = getCurrentLanguage();

    return t.length > 0 ? (
        t.map(v => {
            const name = v.title.trans
                ? v.title.trans[language] || v.title.name
                : v.title.name;

            let description = undefined;
            if (v.description) {
                description = v.description[language] || v.description.en;
            }
            return (
                <div className="container-folder">
                    <ProjectTile
                        name={name}
                        techs={v.techs}
                        link={v.link}
                        description={description}
                    />
                </div>
            );
        })
    ) : (
        <div className="container-folder ">--------------</div>
    );
};

export default function Projects({ pageTitle, children }) {
    const translate = getPrefixedTranslation('projectpage');

    return (
        <Layout pageTitle={'Rafal Gulewski - Projekty'}>
            <div
                className="container flex flex-col py-5 md:px-20"
                style={{ gap: '2rem' }}
            >
                <NeonAppWindowParameterized
                    title={translate('header.projects')}
                    content={
                        <div className="ctl-m">
                            {renderProjectList(PROJECTS)}
                        </div>
                    }
                />
                <NeonAppWindowParameterized
                    title={`${translate('header.underDevelopement')} 👷‍♂️`}
                    content={
                        <div className="ctl-m">
                            {renderProjectList(PORJECT_UNDER_DEVELOPEMENT)}
                        </div>
                    }
                />
                <NeonAppWindowParameterized
                    title={`${translate('header.notFinished')} ⌛`}
                    content={
                        <div className="ctl-m">
                            {renderProjectList(PORJECT_NOT_DONE)}
                        </div>
                    }
                />
            </div>
        </Layout>
    );
}
