import React from 'react';
import '@styles/neonStyle.css';
import './styles.css';
import { Link } from 'gatsby';
import { Icon, TechnologyIcons } from '../..';
import { Tile } from '..';
import classcat from 'classcat';

const ProjectTile = params => {
    const techUsed = techs =>
        techs.map(v => <Icon iconSize="lg">{TechnologyIcons[v]}</Icon>);

    const renderTile = () => (
        <Tile>
            <div className="project-tile">
                <div
                    style={{ textAlign: 'center' }}
                    className={classcat({
                        'project-name': true,
                    })}
                >
                    {params.name}
                </div>
                <div className="project-technologies">
                    {techUsed(params.techs)}
                </div>
                {params.description && (
                    <div
                        className="project-description"
                        dangerouslySetInnerHTML={{
                            __html: `&nbsp;&nbsp;&nbsp;${params.description}`,
                        }}
                    />
                )}
            </div>
        </Tile>
    );

    return params.link ? (
        <Link to={params.link} target="_blank">
            {renderTile()}
        </Link>
    ) : (
        renderTile()
    );
};

export { ProjectTile };
