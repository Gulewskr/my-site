import * as React from 'react';
import '@styles/neonStyle.css';

import CppIcon from '@icons/cpp.svg';
import CssIcon from '@icons/css.svg';
import CSharpIcon from '@icons/c-sharp.svg';
import DockerIcon from '@icons/docker.svg';
import GitIcon from '@icons/git.svg';
import JavaScriptIcon from '@icons/java-script.svg';
import JavaIcon from '@icons/java.svg';
import JiraIcon from '@icons/jira.svg';
import LuaIcon from '@icons/lua.svg';
import NodeIcon from '@icons/nodejs.svg';
import UnityIcon from '@icons/unity.svg';
import ReactIcon from '@icons/reacticon.svg';
import SassIcon from '@icons/sass.svg';
import SpringIcon from '@icons/spring.svg';
import SQLIcon from '@icons/sql.svg';

const GameMakerStudio2 = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="-15 -15 100 100"
    >
        <g>
            <path
                d="M38.56,49.22l-6,5.85h5.31L18.52,35.72,15.77,33v5.3L35.11,18.93l2.76-2.76H32.56L52.89,36.5a3.75,3.75,0,1,0,5.3-5.3L37.87,10.87a3.82,3.82,0,0,0-5.31,0L13.22,30.21,10.47,33a3.79,3.79,0,0,0,0,5.3L29.81,57.61l2.75,2.76a3.83,3.83,0,0,0,5.31,0l6-5.84a3.75,3.75,0,1,0-5.31-5.31Z"
                fill="#f2f2f2"
                stroke="#f2f2f2"
            />
            <path
                d="M37.31,36.28V52.23a3.75,3.75,0,0,0,7.5,0V36.28a3.75,3.75,0,0,0-7.5,0Z"
                fill="#f2f2f2"
                stroke="#f2f2f2"
            />
        </g>
    </svg>
);

const TechnologyIcons = {
    css: <CssIcon />,
    'C Sharp': <CSharpIcon />,
    cpp: <CppIcon />,
    docker: <DockerIcon />,
    GameMakerStudio2: <GameMakerStudio2 />,
    Git: <GitIcon />,
    Java: <JavaIcon />,
    JavaScript: <JavaScriptIcon />,
    jira: <JiraIcon />,
    lua: <LuaIcon />,
    'Node.js': <NodeIcon />,
    React: <ReactIcon />,
    sql: <SQLIcon />,
    sass: <SassIcon />,
    spring: <SpringIcon />,
    Unity: <UnityIcon />,
};

export default TechnologyIcons;
