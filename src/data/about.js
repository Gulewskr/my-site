import React from 'react';
/**
 *  @typedef {Object} TimeData
 *  @property {boolean} isSingleDate
 *  @property {Date} startDate
 *  @property {Date} endDate
 *
 * @typedef {Object} TimelineData
 * @property {TimeData} time
 * @property {Element} icon
 * @property {string} key
 *
 * @typedef {Object} HobbyData
 * @property {string} key
 * @property {Element} icon
 *
 */

import PrimarySchoolIcon from '@icons/primarySchool.svg';
import UniIcon from '@icons/university.svg';
import ExamIcon from '@icons/exam.svg';
import Exam1Icon from '@icons/exam_1.svg';

import InternshipIcon from '@icons/internship.svg';
import DeveloperIcon from '@icons/developer.svg';

import GamesIcon from '@icons/videogames.svg';
import MusicIcon from '@icons/music.svg';
import TennisIcon from '@icons/tennis.svg';
import ChessIcon from '@icons/chess.svg';
import CyclingIcon from '@icons/cycling.svg';

/**
 * @type {Array<TimelineData>}
 */
export const EDUCATION_DATA = [
    {
        time: {
            isSingleDate: false,
            startDate: new Date('2007-09-01'),
            endDate: new Date('2019-06-01'),
        },
        key: 'primarySchool',
        icon: <PrimarySchoolIcon />,
    },
    {
        time: {
            isSingleDate: true,
            startDate: new Date('2019-05-01'),
            endDate: new Date(),
        },
        key: 'matura',
        icon: <Exam1Icon />,
    },
    {
        time: {
            isSingleDate: false,
            startDate: new Date('2019-10-01'),
            endDate: new Date('2023-6-01'),
        },
        key: 'uni',
        icon: <UniIcon />,
    },
    {
        time: {
            isSingleDate: true,
            startDate: new Date('2022-01-01'),
            endDate: new Date(),
        },
        key: 'uniExam',
        icon: <ExamIcon />,
    },
];

/**
 * @type {Array<TimelineData>}
 */
export const WORK_DATA = [
    {
        time: {
            isSingleDate: false,
            startDate: new Date('2022-03-01'),
            endDate: new Date('2024-02-01'),
        },
        key: 'job1',
        icon: <InternshipIcon />,
    },
    {
        time: {
            isSingleDate: false,
            startDate: new Date('2024-02-01'),
            endDate: 'TODAY',
        },
        key: 'job2',
        icon: <DeveloperIcon />,
    },
];

/**
 * @type {Array<HobbyData>}
 */
export const HOBBY_DATA = [
    {
        key: 'videoGames',
        icon: <GamesIcon />,
    },
    {
        key: 'music',
        icon: <MusicIcon />,
    },
    {
        key: 'tennis',
        icon: <TennisIcon />,
    },
    {
        key: 'cycling',
        icon: <CyclingIcon />,
    },
    {
        key: 'chess',
        icon: <ChessIcon />,
    },
];
