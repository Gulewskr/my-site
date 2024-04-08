import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import classcat from 'classcat';

import { TechnologyIcons, SkillTile, Icon } from '@components/';
import Layout from '@components/Layout';

import '@styles/skillsPage.css';
import '@styles/arrow.css';

import StarIconBlue from '@icons/star_blue.svg';
import { getPrefixedTranslation } from '@scripts/utils';

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

const STAT_INFO_CONTENT_ID = 'statinfo';
const STAT_INFO_BUTTON_ID = 'statinfo-toggle';

/**
 * @type {Array<{
 * icon: JSX.Element,
 * name: string,
 * lvl: number}}
 */
const PROGRAMING_LANGUAGES = [
    {
        icon: TechnologyIcons['JavaScript'],
        name: 'JavaScript',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['Java'],
        name: 'Java',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['sql'],
        name: 'SQL',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['css'],
        name: 'css',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['C Sharp'],
        name: 'C Sharp',
        lvl: 2,
    },
    {
        icon: TechnologyIcons['cpp'],
        name: 'C/C++',
        lvl: 2,
    },
    {
        icon: TechnologyIcons['lua'],
        name: 'lua',
        lvl: 2,
    },
];

const TECHNOLOGIES_AND_FRAMEWORKS = [
    {
        icon: TechnologyIcons['React'],
        name: 'React',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['React'],
        name: 'React-Native',
        lvl: 1,
    },
    {
        icon: TechnologyIcons['Node.js'],
        name: 'Node.js',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['spring'],
        name: 'spring',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['docker'],
        name: 'docker',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['sass'],
        name: 'sass',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['jira'],
        name: 'jira',
        lvl: 3,
    },
    {
        icon: TechnologyIcons['Git'],
        name: 'Git',
        lvl: 3,
    },
];

const GAME_ENGINES = [
    {
        icon: TechnologyIcons['Unity'],
        name: 'Unity',
        lvl: 1,
    },
    {
        icon: TechnologyIcons['GameMakerStudio2'],
        name: 'GameMakerStudio2',
        lvl: 1,
    },
];

/**
 * @type {Array<{
 * lvl: number,
 * transKey: string,
 * formatTranslation: (s: string) => string | undefined
 * }>} */
const LevelsInfoData = [
    {
        lvl: 1,
        transKey: 'info.stars.1',
    },
    {
        lvl: 2,
        transKey: 'info.stars.2',
    },
    {
        lvl: 3,
        transKey: 'info.stars.3',
        formatTranslation: s => s.replace('---', '<'),
    },
    {
        lvl: 4,
        transKey: 'info.stars.4',
    },
    {
        lvl: 5,
        transKey: 'info.stars.5',
    },
];

export default function Skills({ pageTitle, children }) {
    const [toggled, setToggled] = useState(false);
    const translate = getPrefixedTranslation('skillspage');

    useEffect(() => {
        const infoContentElement =
            document.getElementById(STAT_INFO_CONTENT_ID);
        const infoButtonElement = document.getElementById(STAT_INFO_BUTTON_ID);
        if (!!infoContentElement) {
            infoContentElement.setAttribute('toggled', toggled);
        }
        if (!!infoButtonElement) {
            infoButtonElement.setAttribute('collapsed', toggled);
        }
    }, [toggled]);

    /**
     * @type {(t: Array<{
     * icon: JSX.Element,
     * name: string,
     * lvl: number}) => JSX.Element}
     */
    const renderSkillList = t =>
        t.map((v, i) => (
            <div>
                <SkillTile
                    id={`${i}-${v['name']}`}
                    icon={v['icon']}
                    name={v['name']}
                    lvl={v['lvl']}
                    cb={() => setToggled(!toggled)}
                />
            </div>
        ));

    return (
        <Layout pageTitle={'Rafal Gulewski - Umiejętności'}>
            <div className="skillPage">
                <div
                    role="button"
                    tabIndex={0}
                    id={STAT_INFO_BUTTON_ID}
                    onClick={() => setToggled(!toggled)}
                    onKeyDown={() => setToggled(!toggled)}
                >
                    More info{' '}
                    <div className="star">
                        <Icon>
                            <StarIconBlue />
                        </Icon>
                    </div>
                </div>
                <div
                    id={STAT_INFO_CONTENT_ID}
                    className={classcat({
                        'statinfo-container': true,
                    })}
                    onClick={() => setToggled(false)}
                    onKeyDown={() => setToggled(false)}
                    tabIndex="0"
                    role="button"
                >
                    {LevelsInfoData.map(
                        ({ lvl, formatTranslation, transKey }) => (
                            <div className="statinfo-row">
                                {`${lvl} `}
                                <div className="star">
                                    <Icon>
                                        <StarIconBlue />
                                    </Icon>
                                </div>
                                {formatTranslation ? (
                                    <div>
                                        {formatTranslation(translate(transKey))}
                                    </div>
                                ) : (
                                    translate(transKey)
                                )}
                            </div>
                        ),
                    )}
                </div>
                <div className="cont">
                    <div className="sec sec1">
                        <t1 className="text-neon-on-blink">
                            {translate('header.programmingLanguages')}
                        </t1>
                        <div className="container">
                            <div className="neon-skills-grid">
                                {renderSkillList(PROGRAMING_LANGUAGES)}
                            </div>
                        </div>
                    </div>
                    <div className="sec sec1">
                        <t1 className="text-neon-on-blink">
                            {translate('header.frameworks')}
                        </t1>
                        <div className="container">
                            <div className="neon-skills-grid">
                                {renderSkillList(TECHNOLOGIES_AND_FRAMEWORKS)}
                            </div>
                        </div>
                    </div>
                    <div className="sec sec1">
                        <t1 className="text-neon-on-blink">
                            {translate('header.gameEngines')}
                        </t1>
                        <div className="container">
                            <div className="neon-skills-grid">
                                {renderSkillList(GAME_ENGINES)}
                            </div>
                        </div>
                    </div>
                    <div className="sec sec1">
                        <div className="text-neon">
                            <Link to="/projects">
                                <div className="flex flex-row gap-1">
                                    <span>{translate('checkMyKnowledge')}</span>
                                    <div className="animatedArrow">
                                        <div class="arrow">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
