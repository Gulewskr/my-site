import React from 'react';
import { graphql } from 'gatsby';

import { Accordion, NeonAppWindow, Tile, Icon } from '@components';
import Layout from '@components/Layout';
import { EDUCATION_DATA, WORK_DATA, HOBBY_DATA } from '@data/about';

import '@styles/aboutStyle.css';
import { dateFormat, getPrefixedTranslation, isMobile } from '../scripts/utils';

import NeonArrowDownIcon from '@icons/neon-arrow.svg';
import SocialIcon from '@icons/social.svg';

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

/**
 *
 * @param {TimelineData} data
 * @returns {Element}
 */
const renderTimeLineData = (data, section) => {
    const translate = getPrefixedTranslation('aboutpage');

    const renderDate = data => {
        if (!data.time) return '';
        if (data.time.isSingleDate) {
            return (
                data.time.startDate &&
                dateFormat(data.time.startDate, 'MMM YYYY')
            );
        }
        if (isMobile()) {
            return (
                <div>
                    <span>
                        {data.time.startDate &&
                            dateFormat(data.time.startDate, 'MMM YYYY')}
                    </span>
                    <br />
                    <span>
                        &emsp;&emsp;-
                        {data.time.endDate === 'TODAY'
                            ? ` ${translate('today')}`
                            : data.time.endDate &&
                              dateFormat(data.time.endDate, ' MMM YYYY')}
                    </span>
                </div>
            );
        }
        return `${data.time.startDate && dateFormat(data.time.startDate, 'MMM YYYY')} - ${data.time.endDate === 'TODAY' ? translate('today') : data.time.endDate && dateFormat(data.time.endDate, 'MMM YYYY')}`;
    };

    return (
        <div className="timeLineDataItem">
            <NeonAppWindow>
                <div className="content">
                    <span className="title-mobile">
                        {translate(`${section}.${data.key}.title`)}
                    </span>
                    <div className="contentIconDate">
                        <Icon iconSize={'xl'}>
                            {data.icon || <SocialIcon />}
                        </Icon>
                        <span className="date">{renderDate(data)}</span>
                    </div>
                    <div className="contextText">
                        <span className="title">
                            {translate(`${section}.${data.key}.title`)}
                        </span>
                        <span className="text">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `
                                    &nbsp;&nbsp;
                                    ${translate(`${section}.${data.key}.body`, {
                                        interpolation: { escapeValue: false },
                                    })}`,
                                }}
                            />
                        </span>
                    </div>
                </div>
            </NeonAppWindow>
        </div>
    );
};

const HobbyTile = ({ translationKey, icon }) => {
    const translate = getPrefixedTranslation('aboutpage.hobbys');

    return (
        <div className="hobbyTile-container">
            <Tile>
                <div className="hobbyTile">
                    <div className="title">
                        <Icon iconSize="lg">{icon || <SocialIcon />}</Icon>
                        <span>{translate(`${translationKey}.title`)}</span>
                    </div>
                    <div className="body">
                        {translate(`${translationKey}.body`)}
                    </div>
                </div>
            </Tile>
        </div>
    );
};

const renderArrow = () => (
    <div style={{ rotate: '180deg' }}>
        <Icon iconSize={'mid-h'}>
            <NeonArrowDownIcon />
        </Icon>
    </div>
);

export default function About({ pageTitle, children }) {
    const translate = getPrefixedTranslation('aboutpage');

    return (
        <Layout pageTitle={'Rafal Gulewski - O mnie'}>
            <div className="flex flex-col gap-4 text-center items-center">
                <t1 className="text-neon">{translate('today')}</t1>
                {renderArrow()}
                <Accordion
                    data={WORK_DATA.map(data =>
                        renderTimeLineData(data, 'worklife'),
                    )}
                    title={translate('worklife.header')}
                    isInitiallyOpen={true}
                />
                {renderArrow()}
                <Accordion
                    data={EDUCATION_DATA.map(data =>
                        renderTimeLineData(data, 'education'),
                    )}
                    title={translate('education.header')}
                    isInitiallyOpen={false}
                />
                {renderArrow()}
                <t1 className="text-neon">{translate('start')}</t1>
            </div>

            <div className="hobbySection">
                <Accordion
                    data={
                        <div className="hobbyList">
                            {HOBBY_DATA.map(({ key, icon }) => (
                                <HobbyTile
                                    key={key}
                                    translationKey={key}
                                    icon={icon}
                                />
                            ))}
                        </div>
                    }
                    title={translate('hobbys.header')}
                    isInitiallyOpen={false}
                />
            </div>
        </Layout>
    );
}
